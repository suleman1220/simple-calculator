const calc = () => {
  let val1 = document.querySelector("#value1").value;
  let val2 = document.querySelector("#value2").value;

  if (val1 == "" || val2 == "") {
    document.querySelector("#error").innerHTML = "Please enter valid values in all fields!";
    setTimeout(() => {
      document.querySelector("#error").innerHTML = "";
    }, 3000);
  } else {
    let value1 = parseInt(val1);
    let value2 = parseInt(val2);

    if (isNaN(value1) || isNaN(value2)) {
      document.querySelector("#error").innerHTML = "Please enter valid values in all fields!";
      setTimeout(() => {
        document.querySelector("#error").innerHTML = "";
      }, 3000);
    } else {
      let op = document.querySelector("#operation").value;
      switch (op) {
        case "Add":
          document.querySelector("#result").innerHTML = "Result is: " + (value1 + value2);
          break;
        case "Subtract":
          document.querySelector("#result").innerHTML = "Result is: " + (value1 - value2);
          break;
        case "Multiply":
          document.querySelector("#result").innerHTML = "Result is: " + (value1 * value2);
          break;
        case "Divide":
          document.querySelector("#result").innerHTML = "Result is: " + (value1 / value2);
          break;
      }
    }
  }
};
