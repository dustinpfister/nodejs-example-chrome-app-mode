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

window.addEventListener('unload', function(){
   axios.post('/', {
    action: 'kill'
  })
  .then(function (response) {
    
  })
  .catch(function (error) {
    
  });
});