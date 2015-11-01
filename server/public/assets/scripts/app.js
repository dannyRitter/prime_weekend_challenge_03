var calculateObject = {};

$(document).ready(function(){
    console.log("Oh look, jquery works");
    $("#equals").on('click', clickEquals);
    $("#add").on('click', clickAdd);
    $("#sub").on('click', clickSub);
    $("#mlt").on('click', clickMlt);
    $("#div").on('click', clickDiv);
    $("#clear").on('click', clickClear);
});


function clickEquals(){

    $.each($("#inputForm").serializeArray(), function(i, field){
        calculateObject[field.name] = field.value;
    });

    $("#inputForm").find("input[type=text]").val("");
    console.log(calculateObject);

    $.ajax({
        type: "POST",
        url: "/data",
        data: calculateObject,
        beforeSend: function(){
            //console.log("HERE IS THE DATA: ", calculateObject);
        },
        success: function(data){
            console.log(data);
            $("#showTotal").append(data.message);
        }
    })
}


function clickClear(){
    document.getElementById("inputForm").reset();
    $("#showTotal").empty();
}


function clickAdd(){
    calculateObject.type = "add";
}

function clickSub(){
    calculateObject.type = "sub";
}
function clickMlt(){
    calculateObject.type = "mlt";
}
function clickDiv(){
    calculateObject.type = "div";
}