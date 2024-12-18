document.getElementById('submitText').addEventListener('click', processText);
document.getElementById('lowercaseText').addEventListener('click', displayLowercase);
document.getElementById('uppercaseText').addEventListener('click', displayUppercase);
document.getElementById('replaceSpaces').addEventListener('click', displayReplacedSpaces);
document.getElementById('removeNonLetters').addEventListener('click', displayCleanText);
document.getElementById('promptSearch').addEventListener('click', promptSearchWord);
document.getElementById('promptReplace').addEventListener('click', promptReplaceWord);
document.getElementById('replaceText').addEventListener('click', replaceText);
document.getElementById('checkPalindrome').addEventListener('click', checkPalindrome);

let searchWord = "";
let replaceWord = "";

function processText() {
    const inputText = document.getElementById('inputText').value;

    // Statistics
    const charCount = inputText.length;
    const words = inputText.split(/\s+/).filter(word => word.length > 0);
    const wordCount = words.length;
    const sentences = inputText.match(/[^.!?]+[.!?]/g) || [];
    const sentenceCount = sentences.length;

    document.getElementById('charCount').innerText = charCount;
    document.getElementById('wordCount').innerText = wordCount;
    document.getElementById('sentenceCount').innerText = sentenceCount;
}

function displayLowercase() {
    const inputText = document.getElementById('inputText').value;
    alert(`Ciag w małych literach: ${inputText.toLowerCase()}`);
}

function displayUppercase() {
    const inputText = document.getElementById('inputText').value;
    alert(`Ciag w dużych literach: ${inputText.toUpperCase()}`);
}

function displayReplacedSpaces() {
    const inputText = document.getElementById('inputText').value;
    alert(`Ciag z zamienionymi spacjami: ${inputText.replace(/\s/g, "_")}`);
}

function displayCleanText() {
    const inputText = document.getElementById('inputText').value;
    alert(`Ciag bez zbędnych znaków: ${inputText.replace(/[^a-zA-Z\s]/g, "")}`);
}

function promptSearchWord() {
    searchWord = prompt("Wprowadź słowo do wyszukania:");
}

function promptReplaceWord() {
    replaceWord = prompt("Wprowadź słowo do zamiany:");
}

function replaceText() {
    const inputText = document.getElementById('inputText').value;
    if (!searchWord) {
        alert("Nie podano słowa do wyszukania!");
        return;
    }
    const modifiedText = inputText.replace(new RegExp(searchWord, 'g'), replaceWord || "");
    document.getElementById('modifiedText').innerText = modifiedText;
}

function checkPalindrome() {
    const inputText = document.getElementById('inputText').value.replace(/[^a-zA-Z]/g, "").toLowerCase();
    const isPalindrome = inputText === inputText.split("").reverse().join("");
    alert(`Czy tekst jest palindromem? ${isPalindrome ? "Tak" : "Nie"}`);
}
