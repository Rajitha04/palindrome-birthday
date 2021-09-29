const datePicker = document.getElementById("date-picker");
const checkPalindromeButton = document.getElementById("check-palindrome");
const result = document.getElementById("result");

function reverseString(str) {
  return str.split("").reverse().join("");
}

function checkIfPalidrome(date) {
  const dateWithoutHyphen = date.replaceAll("-", "");
  if (dateWithoutHyphen === reverseString(dateWithoutHyphen)) {
    return true;
  }
  return false;
}

function checkleapyear(year) {
  if (year % 400 === 0) {
    return true;
  }
  if (year % 100 === 0) {
    return false;
  }
  if (year % 4 === 0) {
    return true;
  }
  return false;
}

function nextDate(date) {
  const newDate = date.split("-");
  var day = +newDate[0] + 1;
  var month = +newDate[1];
  var year = +newDate[2];
  var maxdays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  if (month === 2) {
    if (checkleapyear(year)) {
      if (day > 29) {
        day = 1;
        month++;
      }
    } else {
      if (day > 28) {
        day = 1;
        month++;
      }
    }
  } else {
    if (day > maxdays[month - 1]) {
      day = 1;
      month++;
    }
  }
  if (month > 12) {
    month = 1;
    year++;
  }
  const newMonth = new String(month).length === 1 ? "0" + month : month;
  const newDay = new String(day).length === 1 ? "0" + day : day;
  return `${newDay}-${newMonth}-${year}`;
}

checkPalindromeButton.addEventListener("click", function () {
  const date = datePicker.value.split("-").reverse().join("-");
  if(date){
  if (checkIfPalidrome(date)) {
    result.innerText = "The given date is a palindrome";
  } else {
    let counter = 0;
    let newDate = nextDate(date);
    while (true) {
      counter++;
      if (checkIfPalidrome(newDate)) {
        break;
      }
      newDate = nextDate(newDate);
    }
    result.innerText = "You missed it by " + counter;
  }
}
else{
    result.innerText="please enter the date!!"
}
});
