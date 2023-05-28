var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var appId = 'abc';
var button = document.querySelector('button');
function add(n1, n2) {
    if (n1 + n2 > 0) {
        return n1 + n2;
    }
    return;
}
function clickHandler(message) {
    // let userName = 'Max';
    console.log('Clicked! ' + message);
}
// a comment
if (button) {
    button.addEventListener('click', clickHandler.bind(null, "You're welcome!"));
}
// Arrow function with default parameter and rest parameters
var arrowFunction = function (defaultParam) {
    if (defaultParam === void 0) { defaultParam = 'Default'; }
    var restParams = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restParams[_i - 1] = arguments[_i];
    }
    return __spreadArray([defaultParam], restParams, true);
};
// Arrow function that returns an array
var arrayFunction = function () {
    return ['arrayElement1', 'arrayElement2', 'arrayElement3'];
};
// Arrow function that returns an object
var objectFunction = function () {
    return {
        key1: 'value1',
        key2: 'value2',
        key3: 'value3'
    };
};
// Destructuring array
var _a = arrayFunction(), element1 = _a[0], element2 = _a[1], element3 = _a[2];
// Destructuring object
var _b = objectFunction(), key1 = _b.key1, key2 = _b.key2, key3 = _b.key3;
// Demo arrowFunction
console.log(arrowFunction('Custom', 'rest1', 'rest2', 'rest3'));
// Demo arrayFunction and destructuring
console.log("Element 1: ".concat(element1, ", Element 2: ").concat(element2, ", Element 3: ").concat(element3));
// Demo objectFunction and destructuring
console.log("Key1: ".concat(key1, ", Key2: ").concat(key2, ", Key3: ").concat(key3));
