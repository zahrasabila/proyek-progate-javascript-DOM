function check() {
  let number = parseInt(document.getElementById("myInput").value);

  console.log(typeof number);
  //Jika input berupa 0 atau huruf
  if (number == 0) {
    document.getElementById("wrong").innerHTML = "Invalid input";
  }

  //Jika input adalah string
  else if (isNaN(number)) {
    document.getElementById("demo").innerHTML = "Invalid input";
  }

  //Jika input berupa kelipatan 5 & 3
  else if (number % 5 == 0 && number % 3 == 0) {
    document.getElementById("demo").innerHTML = "FizzBuzz!";
  }

  //Jika input berupa kelipatan 3
  else if (number % 3 == 0) {
    document.getElementById("demo").innerHTML = "Fizz!";
  }

  //Jika input berupa kelipatan 5
  else if (number % 5 == 0) {
    document.getElementById("demo").innerHTML = "Buzz!";
  }

  //Jika input selain kelipatan 5 & 3
  else {
    document.getElementById("demo").innerHTML = number;
  }
}
