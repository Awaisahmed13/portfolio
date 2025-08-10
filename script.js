    var typed = new Typed('#element', {
      strings: ['<i>Web Developer</i>','<i>Graphic Designer<i>','<i> Video Editor','<i>Web Developer</i>'],
      typeSpeed: 50,
    });

    // footer 

    // small JS: year + simple "subscribe" feedback
    document.getElementById('year').textContent = new Date().getFullYear();

    function subscribe(e){
      e.preventDefault();
      const email = document.getElementById('email');
      const msg = document.getElementById('msg');
      if(!email.checkValidity()){
        msg.textContent = 'Please enter a valid email address.';
        email.focus();
        return false;
      }
      // pretend to subscribe (replace with real API call)
      msg.textContent = 'Thanks! You are now subscribed.';
      email.value = '';
      setTimeout(()=> msg.textContent = '', 5000);
      return false;
    }