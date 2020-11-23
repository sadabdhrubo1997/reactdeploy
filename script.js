window.addEventListener("DOMContentLoaded", function () {

  // Responsive html font size
  const iw = window.innerWidth;
  
  const rootScreenWidth = 1366;
  const rootFontPercentage = 44.46;

  const my_html = document.querySelector("html");
  my_html.style.fontSize = rootFontPercentage + "%"
  const currentFontSize = (rootFontPercentage * iw) / rootScreenWidth;


  if (iw > 1366) {    
    my_html.style.fontSize = `${currentFontSize}%`;
  } else {
    my_html.style.fontSize = `${rootFontPercentage}%`;
  }





  window.addEventListener('resize', () => {
    const iw = window.innerWidth;
  
    const rootScreenWidth = 1366;
    const rootFontPercentage = 44.46;
  
    const my_html = document.querySelector("html");
    my_html.style.fontSize = rootFontPercentage + "%"
    const currentFontSize = (rootFontPercentage * iw) / rootScreenWidth;
    if (iw > 1366) {
      my_html.style.fontSize = `${currentFontSize}%`;
    } else {
      my_html.style.fontSize = `${rootFontPercentage}%`;
    }

    // Responsive html font size end
  })


  const mylogo = document.getElementById('myLogo');

  mylogo.onclick = function () {
    mylogo.classList.toggle('active')
    alert('clicked on the logo')
  }
})