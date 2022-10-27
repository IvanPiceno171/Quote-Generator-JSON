const quoteGenButton = document.querySelector('.load-quote');
const quote = document.querySelector(".quote");
const source = document.querySelector(".source");
const citation = document.querySelector(".citation");
const year = document.querySelector(".year");

quoteGenButton.addEventListener('click', newUi)

function newUi(){
  
  // const inspo = require('/Inspiration.json');
  fetch("/Inspiration.json")
  .then((res)=>{
  // parses JSON response into native JavaScript objects
  return res.json();
})
.then((data) => {
  //use the data
  // can now use object methods on the JSON  data
   let getIndex = data[Math.floor(Math.random() * data.length)];;
    quote.innerHTML = getIndex.quote;
    source.innerText = getIndex.author;
    citation.innerHTML = getIndex.citation;
    year.innerHTML = getIndex.year;
  
}).catch((err) => {
  console.log(err);
});

}


