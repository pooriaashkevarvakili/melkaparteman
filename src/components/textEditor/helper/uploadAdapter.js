
class UploadRequestAdapter {
    constructor(loader) {
        // The file loader instance to use during the upload.
        this.loader = loader;
    }
    // Starts the upload process.
    _initRequest() {
        const xhr = this.xhr = new XMLHttpRequest();
        xhr.open('POST', '/File', true);
        xhr.responseType = 'json';
    }
    _initListeners(resolve, reject, file) {
        const xhr = this.xhr;
        const loader = this.loader;
        const genericErrorText = `فایل به درستی بارگذاری نشد !`;
        xhr.addEventListener('error', () => reject(genericErrorText));
        xhr.addEventListener('abort', () => reject());
        xhr.addEventListener('load', () => {
            const response = xhr.response;
            if (!response || response.error) {
                return reject(response && response.error ? response.error.message : genericErrorText);
            }
            resolve({
                default: response.url
            });
        });
        if (xhr.upload) {
            xhr.upload.addEventListener('progress', evt => {
                if (evt.lengthComputable) {
                    loader.uploadTotal = evt.total;
                    loader.uploaded = evt.loaded;
                }
            });
        }
    }
    _sendRequest(file) {
        // Prepare the form data.
        const data = new FormData();
        data.append('objFile', file);
        data.append('group', 'ETC')
        data.append('type', 'IMAGE')
        // Send the request.
        this.xhr.send(data);
    }
    upload() {
        return this.loader.file
            // eslint-disable-next-line no-undef
            .then(file => new Promise((resolve, reject) => {
                this._initRequest();
                this._initListeners(resolve, reject, file);
                this._sendRequest(file);
            }));
    }
    // Aborts the upload process.
    abort() {
        if (this.xhr) {
            this.xhr.abort();
        }
    }
}

export default UploadRequestAdapter;
