module.exports = function sumOfOther(arr){
    const result = [];
    for (let i=0; i < arr.length; i++){
        result.push(arr.reduce((a,b) => a+=b)-arr[i]);
    }
    return result;
}