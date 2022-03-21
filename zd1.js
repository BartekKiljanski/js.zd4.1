  
        
  
        function fillElement () {
            const span = document.createElement("span");
        
        span.innerText = "Przykładowy tekst";
        const container = document.querySelector("#about");
        container.appendChild(span);
  
          }
          document.addEventListener("DOMContentLoaded", () => {
            fillElement();
        });