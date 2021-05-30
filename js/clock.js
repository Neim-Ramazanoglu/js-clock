// Prompt ile isim alma kısmı 

let person = prompt("Please enter your name", "");

if (person == null || person == "") {
    text = "Anonymous";
  } else {
    text = person ;
  }



  document.getElementById("myName").innerHTML = text;


// saat kısmı 

function addZero(number) {
    if (number < 10) {
      return "0" + number.toString();
    } else {
      return number.toString();
    }
  }
  
  function showTime() {
    var days = [
      "Pazar",
      "Pazartesi",
      "Salı",
      "Çarşamba",
      "Perşembe",
      "Cuma",
      "Cumartesi",
    ];
    var date = new Date();
  
    var hour = addZero(date.getHours());
    var minute = addZero(date.getMinutes());
    var second = addZero(date.getSeconds());
    document.getElementById("myClock").innerHTML =
      hour + ":" + minute + ":" + second + " " + days[date.getDay()];
    window.setTimeout(function () {
      showTime();
    }, 1000);
  }
  showTime("myClock");