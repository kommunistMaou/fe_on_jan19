import PhonesPage from './phones/phones-page.js';
const phonesPage = new PhonesPage({
  element: document.querySelector('[data-page-container]')
})
/*
const URL = 'https://mate-academy.github.io/phone-catalogue-static/api/phones.json';

fetch(URL).
then((response) => responce.json())
.then(handleResult)

function handleResult(data) {
    console.log(data);
}
*/
