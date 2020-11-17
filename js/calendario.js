document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendario');

    var calendar = new FullCalendar.Calendar(calendarEl, {
      plugins: [ 'dayGrid'],
      locale: 'es',
      events: [
            {
                title: 'Vacuna 1',
                start: '2020-11-23',
                
            },
            {
                title: 'Vacuna 2',
                start: '2020-12-25'
            },
            {
                title: 'Vacuna 2',
                start: '2021-01-27'
            }
            
        ]
    }); 

    calendar.render();
  });