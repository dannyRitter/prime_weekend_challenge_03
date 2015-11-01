var result = 0;

var doCoolMath = function(object){

    switch (object.type){
        case "add":
            result = Number(object.firstInput) + Number(object.secondInput);
            break;
        case "sub":
            result = Number(object.firstInput) - Number(object.secondInput);
            break;
        case "mlt":
            result = Number(object.firstInput) * Number(object.secondInput);
            break;
        case "div":
            result = Number(object.firstInput) / Number(object.secondInput);
            break;
    }
    return result;
};

module.exports = doCoolMath;