//bài 1
function result1(){
    var tong = 0;
    var n = 0;
    var ketQua;
    while (tong < 10000){
        n++;
        tong = tong + n;
    }
    ketQua = "n nhỏ nhất là: " + n;
    document.getElementById("result1").style.display = "block";
    document.getElementById("ketQua").innerHTML = ketQua;
}


//bài 2
function result2(){
    var n = +document.getElementById("number1").value;
    var x = +document.getElementById("number2").value;
    var tong = 0;
    var i = 1;
    var ketQua;
    while (i <= n){
        tong += x ** i;
        i++;
        }
        ketQua = "Tổng là: " + tong;
        document.getElementById("result2").style.display = "block";
        document.getElementById("Sumary").innerHTML = ketQua;   

}


//bài 3
function result3(){
    var n = +document.getElementById("number3").value;

    var tich = 1;
    var ketQua;
    for (var i = 1; i <=n; i++){
        tich = tich * i;
    }
    ketQua = "Giai thừa là: " + tich;
        document.getElementById("result3").style.display = "block";
        document.getElementById("GiaiThua").innerHTML = ketQua;   

}
///bài 4
function result4() {
    var divFather = document.getElementById("result4");
    for (var i = 1; i <= 10; i++) {
      divFather.innerHTML += "<div>" + "</div>";
    }
  
    var divSon = divFather.getElementsByTagName("div");
  
    for (var j = 0; j < divSon.length; j++) {
      if ((j + 1) % 2 == 0) {
        divSon[j].innerText = " div chẵn";
        divSon[j].style.background = "red";
      } else {
        divSon[j].innerHTML = " div lẻ";
        divSon[j].style.background = "blue";
      }
    }
  }