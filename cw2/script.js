const httpRequest = new XMLHttpRequest();

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
     console.log(catUrl.punchline);
      
    }
  }
};

// start
httpRequest.open('GET', 'https://safe-falls-22549.herokuapp.com/random_joke');
httpRequest.send();
