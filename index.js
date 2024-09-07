function insertNumber(num){
    var exstNum = $("#result").val();

    $("#result").val(exstNum + num);
}

function clearScreen(){

    $("#result").val('');

}

function calculate(){
    var result = eval($("#result").val());
    
    $("#result").val(result);

}

function deleteNum(){
    var exist = $("#result").val();
    
    if (exist != ''){
        
        $("#result").val( $("#result").val().slice(0, -1));
    
    }
}

function changeSign(){
    var newVal = $("#result").val() * -1;

    $("#result").val(newVal);

}

function percent(){
    var perVal = $("#result").val() / 100;
    $("#result").val(perVal);

}