var UI = require('ui');
var Vector2 = require('vector2');

var main = new UI.Card({
  title: 'Check-In',
  icon: 'images/logo copy.png',
  subtitle: '',
  body: 'UP: Medication(s)\nMIDDLE: Contacts\nDOWN: Goals\n\nHOLD MIDDLE\nFOR EMERGENCY'
});

main.on('longClick', 'select', function(e) {
  var menu = new UI.Menu({
    sections: [{
      items: [{
        title: 'GPS Coords Sent'
        subtitle: 'To Police & EMTs'
      }, {
        title: 'Suicide Hotline'
        subtitle: '(xxx)xxx-xxxx'
      }, {
        title: 'Help Helperson',
        subtitle: '(555)555-5555'
      }, {
        title: 'John Bestfriend',
        subtitle: '(707)555-5555'
      }, {
        title: 'Mom',
        subtitle: '(707)555-5554'
      }]
    }]
  });
  menu.on('select', function(e) {
    console.log('Selected item #' + e.itemIndex + ' of section #' + e.sectionIndex);
    console.log('The item is titled "' + e.item.title + '"');
  });
  menu.show();
});

main.show();

main.on('click', 'up', function(e) {
  var menu = new UI.Menu({
    sections: [{
      items: [{
        title: 'Prozac',
        subtitle: '8:00PM, taken'
      }, {
        title: 'Cymbalta',
        subtitle: '8:00PM, not taken'
      }, {
        title: 'Motrin',
        subtitle: '8:00AM, taken'
      }]
    }]
  });
  menu.on('select', function(e) {
    console.log('Selected item #' + e.itemIndex + ' of section #' + e.sectionIndex);
    console.log('The item is titled "' + e.item.title + '"');
  });
  menu.on('longSelect', function(e) {
    var menu = new UI.Menu({
      sections: [{
        items: [{
          title: 'GPS Coords Sent'
          subtitle: 'To Police & EMTs'
        }, {
          title: 'Suicide Hotline'
          subtitle: '(xxx)xxx-xxxx'
        }, {
          title: 'Help Helperson',
          subtitle: '(555)555-5555'
        }, {
          title: 'John Bestfriend',
          subtitle: '(707)555-5555'
        }, {
          title: 'Mom',
          subtitle: '(707)555-5554'
        }]
      }]
    });
    menu.on('select', function(e) {
      console.log('Selected item #' + e.itemIndex + ' of section #' + e.sectionIndex);
      console.log('The item is titled "' + e.item.title + '"');
    });
    menu.show();
  });
  menu.show();
});

main.on('click', 'select', function(e) {
  var menu = new UI.Menu({
    sections: [{
      items: [{
        title: 'Help Helperson',
        subtitle: '(555)555-5555'
      }, {
        title: 'John Bestfriend',
        subtitle: '(707)555-5555'
      }, {
        title: 'Mom',
        subtitle: '(707)555-5554'
      }]
    }]
  });
  menu.on('select', function(e) {
    console.log('Selected item #' + e.itemIndex + ' of section #' + e.sectionIndex);
    console.log('The item is titled "' + e.item.title + '"');
  });
  menu.on('longSelect', function(e) {
    var menu = new UI.Menu({
      sections: [{
        items: [{
          title: 'GPS Coords Sent'
          subtitle: 'To Police & EMTs'
        }, {
          title: 'Suicide Hotline'
          subtitle: '(xxx)xxx-xxxx'
        }, {
          title: 'Help Helperson',
          subtitle: '(555)555-5555'
        }, {
          title: 'John Bestfriend',
          subtitle: '(707)555-5555'
        }, {
          title: 'Mom',
          subtitle: '(707)555-5554'
        }]

      }]
    });
    menu.on('select', function(e) {
      console.log('Selected item #' + e.itemIndex + ' of section #' + e.sectionIndex);
      console.log('The item is titled "' + e.item.title + '"');
    });
    menu.show();
  });
  menu.show();
});

main.on('click', 'down', function(e) {
  var menu = new UI.Menu({
    sections: [{
      items: [{
        title: 'Take out trash',
        subtitle: 'By bedtime'
      }, {
        title: 'Finish Pebble app',
        subtitle: 'Sunday 2:00PM'
      }, {
        title: 'Make dinner',
        subtitle: '6:00PM'
      }]
    }]
  });
  menu.on('select', function(e) {
    console.log('Selected item #' + e.itemIndex + ' of section #' + e.sectionIndex);
    console.log('The item is titled "' + e.item.title + '"');
  });
  menu.on('longSelect', function(e) {
    var menu = new UI.Menu({
      sections: [{
        items: [{
          title: 'GPS Coords Sent'
          subtitle: 'To Police & EMTs'
        }, {
          title: 'Suicide Hotline'
          subtitle: '(xxx)xxx-xxxx'
        }, {
          title: 'Help Helperson',
          subtitle: '(555)555-5555'
        }, {
          title: 'John Bestfriend',
          subtitle: '(707)555-5555'
        }, {
          title: 'Mom',
          subtitle: '(707)555-5554'
        }]

      }]
    });
    menu.on('select', function(e) {
      console.log('Selected item #' + e.itemIndex + ' of section #' + e.sectionIndex);
      console.log('The item is titled "' + e.item.title + '"');
    });
    menu.show();
  });
  menu.show();
});
