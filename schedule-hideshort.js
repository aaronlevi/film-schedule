      /*Navigate to French version for all pages.*/
      window.onload = function() {      
        var frHost = "http://www.fr.acff.ca";
        var currentPage = location.pathname;
        var frenchLink = document.getElementById("fr");
        var frenchUrl = frHost + currentPage;
        document.getElementById("fr").addEventListener("click", function() {         
             frenchLink.href = frenchUrl;
        });
      }
      /*Program Calendar Toggle movies schedule by event day.*/
      var scheduleButtons = document.getElementsByClassName("calendar-option");
      var i;

      for (i = 0; i < scheduleButtons.length; i++) {
        scheduleButtons[i].addEventListener("click", function() {

          var eventChosen = this.id;
          //hide scheduled movies by day
          const hide = (e) => {
            e.style.display = 'none'
          };
          //show scheduled movies by day
          const show = (e) => {
            e.style.display = 'block'
          };
          //Change background to black on schedule buttons after pressing
          const darkBackground = (e) => {
            e.style.backgroundColor = "#000000";
          };
          //Change background to gray on incative schedule buttons
          const lightBackground = (e) => {
            e.style.backgroundColor = "#666666";
          };

          const events = document.querySelectorAll('.calendar-option');
          const screenings = document.querySelectorAll('.movies-wrapper');
            //Detect which event is clicked on the schedule page
            switch (eventChosen) {
              //if first screening is chosen
              case "event-1":
              //change color of buttons
              events.forEach(event => {
                lightBackground(event); 
              });
                darkBackground(document.getElementById(this.id));
              //hide and show movies for each schedule element
              screenings.forEach(screening => {
                hide(screening);
              });
                show(document.getElementById('one'));
                break;

                case "event-2":
                events.forEach(event => {
                  lightBackground(event);
                });
                  darkBackground(document.getElementById(this.id));

                screenings.forEach(screening => {
                  hide(screening);
                });
                  show(document.getElementById('two'));
                  break;

                case "event-3":
                events.forEach (event => {
                  lightBackground(event);
                });
                  darkBackground(document.getElementById(this.id));

                  screenings.forEach(screening => {
                    hide(screening);
                  });
                    show(document.getElementById('three'));
                  break;

                case "event-4":
                  events.forEach(event => {
                    lightBackground(event);
                  });
                    darkBackground(document.getElementById(this.id));  

                  screenings.forEach(screening => {
                    hide(screening);
                    });
                    show(document.getElementById('four'));
                  break;

                  case "event-5":
                    events.forEach(event => {
                      lightBackground(event);
                    });
                      darkBackground(document.getElementById(this.id));

                    screenings.forEach(screening => {
                      hide(screening);
                    });  
                      show(document.getElementById('five'));
                    break;

                  case "event-6":
                    events.forEach(event => {
                      lightBackground(event);
                    });
                      darkBackground(document.getElementById(this.id));
                    
                    screenings.forEach(screening => {
                      hide(screening);
                    });
                      show(document.getElementById('six'));
                    break;

                  case "event-7":
                    events.forEach(event => {
                      lightBackground(event);
                    });
                      darkBackground(document.getElementById(this.id));
                    
                    screenings.forEach(screening => {
                      hide(screening);
                    });  
                      show(document.getElementById('seven'));
                    break;
            }
        });
      }
