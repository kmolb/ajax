const httpRequest = new XMLHttpRequest();
const url = 'https://safe-falls-22549.herokuapp.com/random_joke';

// callback
httpRequest.onreadystatechange = function() {
    
  if (httpRequest.readyState === XMLHttpRequest.DONE) {
    if (httpRequest.status === 200) {
      console.log(httpRequest);
      const catUrl = JSON.parse(httpRequest.response);
      console.log(catUrl);
     alert(catUrl.setup);
     console.log(catUrl.setup);
     alert(catUrl.punchline);
     console.log(catUrl.pu);
      
    }
  }
};

// start
httpRequest.open('GET', url);
httpRequest.send();
