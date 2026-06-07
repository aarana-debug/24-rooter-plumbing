(function(){
  var items = document.querySelectorAll('.faq-item');
  items.forEach(function(item, i){
    var q = item.querySelector('.faq-q');
    if(!q) return;
    if(i === 0) item.classList.add('open');
    q.addEventListener('click', function(){
      var isOpen = item.classList.contains('open');
      items.forEach(function(el){ el.classList.remove('open'); });
      if(!isOpen) item.classList.add('open');
    });
  });
})();
