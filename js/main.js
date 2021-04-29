document.getElementsByClassName('navbar-brand')[0].style.display = 'none';

document.addEventListener("DOMContentLoaded", function(){
    window.addEventListener('scroll', function() {
        if (window.scrollY > 250) {
          document.getElementById('sticky-nav').classList.add('fixed-top');
          document.getElementsByClassName('navbar-brand')[0].style.display = 'block';
          // add padding top to show content behind navbar
          navbar_height = document.querySelector('.navbar').offsetHeight;
          document.body.style.paddingTop = navbar_height + 'px';
        } else {
          document.getElementById('sticky-nav').classList.remove('fixed-top');
          document.getElementsByClassName('navbar-brand')[0].style.display = 'none';
           // remove padding top from body
          document.body.style.paddingTop = '0';
        } 
    });
  }); 