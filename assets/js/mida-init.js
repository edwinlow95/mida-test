
// Mida instrumentation placeholder
(function(){
  window.mida = window.mida || {
    track: function(eventName, payload){
      console.log('[MIDA demo] track →', eventName, payload || {});
    },
    page: function(path){
      console.log('[MIDA demo] page →', path || location.pathname);
    }
  };
})();

window.addEventListener('DOMContentLoaded', function(){
  window.mida.page(location.pathname);

  var primary = document.getElementById('btn-cta');
  var secondary = document.getElementById('btn-secondary');
  if(primary){ primary.addEventListener('click', function(){ window.mida.track('cta_click', { id: 'primary', location: 'hero' }); }); }
  if(secondary){ secondary.addEventListener('click', function(){ window.mida.track('cta_click', { id: 'secondary', location: 'hero' }); }); }

  var form = document.getElementById('demo-form');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      var data = Object.fromEntries(new FormData(form).entries());
      window.mida.track('form_submit', { form_id: 'demo-form', ...data });
      window.mida.track('conversion', { value: 49, currency: 'USD' });
      setTimeout(function(){ window.location.href = '/thank-you.html'; }, 300);
    });
  }

  document.querySelectorAll('a.outbound').forEach(function(a){
    a.addEventListener('click', function(){ window.mida.track('outbound_click', { href: a.href }); });
  });
});
