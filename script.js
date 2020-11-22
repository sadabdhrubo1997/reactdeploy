window.addEventListener("DOMContentLoaded", function () {

       // Responsive html font size
       const iw = window.innerWidth;
       const rootScreenWidth = 1366;
       const rootFontPercentage = 44.46;  
       
       
       const my_html = document.querySelector("html");
       my_html.style.fontSize=rootFontPercentage+"%"
      
   
      
       if (iw <= 1366) {
         my_html.style.fontSize=`${rootFontPercentage}%`;        
       }else{
           let currentFontSize = (rootFontPercentage * iw) / rootScreenWidth;
           my_html.style.fontSize=`${currentFontSize}%`;    
       }
         




    window.addEventListener('resize', () => {
 
    
    const my_html = document.querySelector("html");
    my_html.style.fontSize=rootFontPercentage+"%"
   

   
    if (iw <= 1366) {
      my_html.style.fontSize=`${rootFontPercentage}%`;        
    }else{
        let currentFontSize = (rootFontPercentage * iw) / rootScreenWidth;
        my_html.style.fontSize=`${currentFontSize}%`;    
    }
       
    // Responsive html font size end
    })


    const mylogo = document.getElementById('myLogo');

    mylogo.onclick = function () {
      mylogo.classList.toggle('active')
    }
  })