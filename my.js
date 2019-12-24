
$(document).ready(function(){
  var array = [];
  $("#create").on("click", function(){
    var col = $("#col").val();
    if(col.length == 0 || col < 0){
      alert("Такой массив создать нельзя!");
    }else{
      createArray(col);
      printArray();
    }
  });

  function createArray(col = 10){
    array = [];
    for(var i = 0; i < col; i++){
      array.push(Math.floor(Math.random()*100));
    }
  }


  function printArray(){
    var text = "";
    for(var i = 0; i < array.length; i++){
      text += array[i] + " | ";
    }
    var p = $("p#array");
    if(text == "") text = "Пустой массив";
    p.text("Ваш массив:" + text);
  }

  $("#deleteLast").on("click", function(){
    array.pop();
    printArray();
  });

  $("#delete").on("click", function(){
    var deleteCol = $("#deleteCol").val();
    if(deleteCol.length != 0 && deleteCol > 0){
      if(deleteCol > array.length){
        alert("Вы пытаетесь удалить больше элементов, чем есть в массиве!");
      }else{
        for(var i = 0; i < deleteCol; i++){
          array.pop();
        }
        printArray();
      }
    }
  });

  $("#deleteAll").on("click",function(){
    array = [];
    printArray();
  });
});
