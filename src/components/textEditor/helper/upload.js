import { getLoginToken } from "@/utils/authenticator";

function uploadAdapter(loader) {
    const token = getLoginToken() || ""
    return {
        upload: () => {
            // eslint-disable-next-line no-undef
            return new Promise((resolve, reject) => {
                const body = new FormData();
                loader.file.then((file) => {
                    body.append("objFile", file);
                    // headers
                    let headers = new Headers();
                    headers.append("Access-Control-Allow-Origin", "*");
                    headers.append("Access-Control-Allow-Headers", "*");
                    headers.append("Authorization", `Bearer ${token}`);
                    // fetch
                    fetch(`https://api.maaleksho.ir/File`, {
                        method: "post",
                        headers: headers,
                        body: body,
                        // mode: "no-cors"
                    })
                        .then((res) => res.json())
                        .then((res) => {
                            resolve({
                                default: `https://api.maaleksho.ir/File/${res}`,
                            });
                        })
                        .catch((err) => {
                            reject(err);
                        });
                });
            });
        },
    };
}

export default uploadAdapter