var el = document.createElement('p');
el.innerText = 'javaScript working';
document.body.appendChild(el);

axios.post('/', {
    action: 'ping'
  })
  .then(function (response) {
    
  })
  .catch(function (error) {
    
  });