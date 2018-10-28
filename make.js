module.exports = function make(...args){
    const allArgs = [];
    return checkFoo(args);

    function checkFoo(...rest){
        if (typeof rest[0] !== "function"){
			for (let i=0; i<rest.length; i++){
            allArgs.push(+rest[i]);
            }
			return checkFoo;
        } else {
            return allArgs.reduce(rest[0]);
        }
    } 
}

