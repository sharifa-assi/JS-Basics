
const stringSize = (text) => {

    return text.length ;
}
const replaceCharacterE = (text) => {
return text.replace ('e',' ');
}
const concatString = (text1, text2) => {
return text1 + text2;
}
const showChar5 = (text) => {
return text[4];
}
const showChar9 = (text) => {
return text.substring(0,9);
}

const toCapitals = (text) => {
return text.toUpperCase();
}
const toLowerCase = (text) => {
return text.toLowerCase();
}
const removeSpaces = (text) => {
return text.trim();
}
const IsString = (text) => {
if (typeof text === 'string'){
    return true;
}
}

const getExtension = (text) => {
return text.split('.').pop();
}
const countSpaces = (text) => {
return text.split(" ").length - 1;
}
const InverseString = (text) => {
return text.split("").reverse().join("");
}

const power = (x, y) => {
return Math.pow(x,y);
}
const absoluteValue = (num) => {
return Math.abs(num);
}
const absoluteValueArray = (array) => {
return array.map(Math.abs);
}
const circleSurface = (radius) => {
return Math.ceil(Math.PI * (radius * radius));

}
const hypothenuse = (ab, ac) => {
return Math.hypot(ab, ac);
}
const BMI = (weight, height) => {

}

const createLanguagesArray = () => {

}

const createNumbersArray = () => {

}

const replaceElement = (languages) => {

}

const addElement = (languages) => {

}

const addNumberElement = (numbers) => {

}

const removeFirst = (languages) => {

}

const removeLast = (languages) => {

}

const convertStrToArr = (social_arr) => {

}

const convertArrToStr = (languages) => {

}

const sortArr = (social_arr) => {

}

const invertArr = (social_arr) => {

}