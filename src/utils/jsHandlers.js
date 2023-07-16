
export { arraySlicer, uIdMaker }

// sample : ([1,2,3,4,5],3) => output [[1,2,3],[4,5]]
const arraySlicer = (array = [], sliceOfParts = 3) => {
    const arrayOfArrayParts = []
    // parts
    const length = array.length
    const parts = Math.ceil(length / sliceOfParts)
    // action
    for (let index = 1; index <= parts; index++) {
        let start = index * sliceOfParts - sliceOfParts
        let end = index * sliceOfParts
        arrayOfArrayParts.push(array.slice(start, end))
    }
    // return
    return arrayOfArrayParts
}

const uIdMaker = (uIdLength = 20) => {
    let codePattern = "12345678901234567890";
    let pl = codePattern.length;
    let uId = "";
    for (let idx = 0; idx < uIdLength; idx++) {
        let randomNumber = Math.floor(Math.random() * pl);
        uId += codePattern[randomNumber];
    }
    return uId;
};
