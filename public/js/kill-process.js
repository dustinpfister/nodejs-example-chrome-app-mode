// kill process when window is closed
window.addEventListener('unload', function(){
   axios.post('/', {
    action: 'kill'
  });
});