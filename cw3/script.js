//const httpRequest = new XMLHttpRequest();
const url = 'https://safe-falls-22549.herokuapp.com/random_joke';


fetch(url).then(response => {
  console.log(response);
 if (response.status === 200) {
  response.json().then(catObj => {
      const {punchline, setup} =  catObj;
      console.log('console', catObj);
      var t = document.createTextNode(setup);
      alert(punchline);
        
  }); 
}
});

// callback
/*httpRequest.onreadystatechange = function () {

  if (httpRequest.readyState === XMLHttpRequest.DONE) {
    if (httpRequest.status === 200) {
      console.log(httpRequest);
      const catUrl = JSON.parse(httpRequest.response);
      console.log(catUrl);
      alert(catUrl.setup);
      console.log(catUrl.setup);

      alert(catUrl.punchline);
      console.log(catUrl.punchline);

    }
  }
};

// start
httpRequest.open('GET', url);
httpRequest.send();

*/

