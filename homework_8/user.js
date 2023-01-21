let birthYear = prompt("What is your year of birth?");
let city = prompt("In which city do you live?");
let sport = prompt("What is your favorite sport?");

let currentYear = new Date().getFullYear();
let age = currentYear - birthYear;

let message = "You are " + age + " years old. ";

if (city === "Kyiv") {
  message += "You live in the capital of Ukraine.";
} else if (city === "Washington") {
  message += "You live in the capital of USA.";
} else if (city === "London") {
  message += "You live in the capital of UK.";
} else {
  message += "You live in " + city + ".";
}

if (sport === "Football") {
  message += " Cool! Do you want to become like Lionel Messi?";
} else if (sport === "Basketball") {
  message += " Cool! Do you want to become like Michael Jordan?";
} else if (sport === "Tennis") {
  message += " Cool! Do you want to become like Roger Federer?";
}

if (birthYear && city && sport) {
  alert(message);
} else {
  let missingInfo = "";
  if (!birthYear) {
    missingInfo += "year of birth, ";
  }
  if (!city) {
    missingInfo += "city, ";
  }
  if (!sport) {
    missingInfo += "sport";
  }
  alert("It's so sad that you did not want to enter your " + missingInfo + ".");
}
