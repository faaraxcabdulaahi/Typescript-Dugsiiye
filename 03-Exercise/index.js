function fullName(first, last) {
    return first + " " + last;
}
console.log(fullName("Faarax", "Cabdulaahi"));
function registerUser(username, isAdmin, language) {
    if (language === void 0) { language = "en"; }
    console.log("my username is: ".concat(username, " and iam admin is ").concat(isAdmin, " and my language is ").concat(language));
}
registerUser("Faarax", true, "somali");
function average() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (a, b) { return a + b; }, 0);
}
console.log(average(3, 5));
