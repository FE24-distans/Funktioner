console.log(document); //Vårt HTML-träd

//Vi letar upp vår knapp och får tillbaka ett HTML element med id clickButton
const buttonElem = document.querySelector('#clickButton');
console.log(buttonElem);

let counter = 1;

buttonElem.addEventListener('click', () => { //En arrow function
    console.log(`Du klickade ${counter} gånger på denna knapp!`);
    alert(`Du klickade ${counter} gånger på denna knapp!`);
    counter++; //Är en förkortning för counter = counter + 1;
});