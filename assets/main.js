(function(){
  var toggle=document.querySelector('.theme-toggle');
  if(toggle){
    function updateTheme(){
      var dark=document.documentElement.dataset.theme==='dark';
      toggle.setAttribute('aria-pressed',String(dark));
      toggle.innerHTML=dark?'☀ <span>Light mode</span>':'☾ <span>Dark mode</span>';
    }
    updateTheme();
    toggle.addEventListener('click',function(){
      var dark=document.documentElement.dataset.theme!=='dark';
      document.documentElement.dataset.theme=dark?'dark':'light';
      try{localStorage.setItem('theme',dark?'dark':'light');}catch(e){}
      updateTheme();
    });
  }
  var y=document.getElementById('year');
  if(y){y.textContent=new Date().getFullYear();}
  var links=document.querySelectorAll('nav a[href^="#"]');
  if(!('IntersectionObserver' in window)||!links.length){return;}
  var map={};
  links.forEach(function(a){map[a.getAttribute('href').slice(1)]=a;});
  var io=new IntersectionObserver(function(es){
    es.forEach(function(e){
      if(e.isIntersecting&&map[e.target.id]){
        links.forEach(function(a){a.removeAttribute('aria-current');});
        map[e.target.id].setAttribute('aria-current','true');
      }
    });
  },{rootMargin:'-40% 0px -55% 0px'});
  Object.keys(map).forEach(function(id){var s=document.getElementById(id);if(s){io.observe(s);}});
})();
