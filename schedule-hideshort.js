      /*Navigate to French version for all pages.*/
      window.onload = function() {      
        const frHost = "https://www.fr.acff.ca";
        const currentPage = location.pathname;
        const frenchLink = document.getElementById("fr");
        const frenchUrl = frHost + currentPage;
        document.getElementById("fr").addEventListener("click", function() {         
             frenchLink.href = frenchUrl;
        });
      }
      /*Program Calendar Toggle movies schedule by event day.*/
      const scheduleButtons = document.querySelectorAll('.calendar-option');
      
      scheduleButtons.forEach(scheduleButton => {
        scheduleButton.addEventListener("click", function() {

          const eventChosen = this.id;          
          const events = document.querySelectorAll('.calendar-option');
          const screenings = document.querySelectorAll('.movies-wrapper');
          //hide scheduled movies by day
          const hide = (elem) => {
            screenings.forEach(screening => {
              screening.style.display = 'none';
            });
          };
          //show scheduled movies by day
          const show = (elem) => {
            document.getElementById(elem).style.display = 'block'
          };
          //Change background to black on active schedule buttons
          const darkBackground = (elem) => {
            document.getElementById(elem).style.backgroundColor = "#ffdf00";
          };
          //Change background back to gray on inactive schedule buttons
          const lightBackground = (elem) => {            
              events.forEach(event => {
                 event.style.backgroundColor = "#ffffff";
              });  
          };

          lightBackground();
          darkBackground(this.id);
          hide();
          show('event-' + this.id);

        });
      });