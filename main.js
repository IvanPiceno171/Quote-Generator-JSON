let testHTML = document.querySelector('.tester')

// const inspo = require('/Inspiration.json');
fetch("/Inspiration.json")
.then((res)=>{
  // parses JSON response into native JavaScript objects
  return res.json();
})
.then((data) => {
  //use the data
  // can now use object methods on the JSON  data
  console.log(data[0]);
    // testHTML.innerHTML = data[0].value;

}).catch((err) => {
  console.log(err);
});


