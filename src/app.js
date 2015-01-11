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
        title: 'GPS Coords Sent',
        subtitle: 'To Police & EMTs'
      }, {
        title: 'Suicide Hotline',
        subtitle: '1-800-273-8255'
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
    var card = new UI.Card({
      title: 'Calling',
      body: e.item.title + '\n' + e.item.subtitle
    });
    card.show();
  });
  menu.show();
});

main.show();

main.on('click', 'up', function(e) {
  var menu = new UI.Menu({
    sections: [{
      items: [{
        title: 'Prozac',
        subtitle: '8:00PM',
        body: 'Dosage Info:\nTake X nightly.'
      }, {
        title: 'Cymbalta',
        subtitle: '8:00PM',
        body: 'Dosage Info:\nTake X nightly.'
      }, {
        title: 'Motrin',
        subtitle: '8:00AM',
        body: 'Dosage Info:\nTake 1/2 cup daily until not sick.'
      }]
    }]
  });
  menu.on('select', function(e) {
    var taken = '\nHAS been taken.';
    var card = new UI.Card({
      title: e.item.title,
      body: e.item.body + taken + '\nUP: taken\nDOWN: not taken'
    });
    card.on('click', 'up', function(e) {
      taken = '\nHAS been taken.';
      card.body = e.item.body + taken + '\nUP: taken\nDOWN: not taken';
      card.show();
    });
    card.on('click', 'down', function(e) {
      taken = '\nHas NOT been taken.';
      card.body = e.item.body + taken + '\nUP: taken\nDOWN: not taken';
      card.show();
    });
    card.show();
  });
  menu.on('longSelect', function(e) {
    var menu = new UI.Menu({
      sections: [{
        items: [{
          title: 'GPS Coords Sent',
          subtitle: 'To Police & EMTs'
        }, {
          title: 'Suicide Hotline',
          subtitle: '1-800-273-8255'
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
      var card = new UI.Card({
        title: 'Calling',
        body: e.item.title + '\n' + e.item.subtitle
      });
      card.show();
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
    var card = new UI.Card({
      title: 'Calling',
      body: e.item.title + '\n' + e.item.subtitle
    });
    card.show();
  });
  menu.on('longSelect', function(e) {
    var menu = new UI.Menu({
      sections: [{
        items: [{
          title: 'GPS Coords Sent',
          subtitle: 'To Police & EMTs'
        }, {
          title: 'Suicide Hotline',
          subtitle: '1-800-273-8255'
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
      var card = new UI.Card({
        title: 'Calling',
        body: e.item.title + '\n' + e.item.subtitle
      });
      card.show();
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
    var done = '\nHAS been done.';
    var card = new UI.Card({
      title: e.item.title,
      body: 'Do ' + e.item.subtitle + done + '\nUP: done\nDOWN: not done'
    });
    card.on('click', 'up', function(e) {
      done = '\nHAS been done.';
      card.body = 'Do ' + e.item.subtitle + done + '\nUP: done\nDOWN: not done';
      card.show();
    });
    card.on('click', 'down', function(e) {
      done = '\nHas NOT been done.';
      card.body = 'Do ' + e.item.subtitle + done + '\nUP: done\nDOWN: not done';
      card.show();
    });
    card.show();
  });
  menu.on('longSelect', function(e) {
    var menu = new UI.Menu({
      sections: [{
        items: [{
          title: 'GPS Coords Sent',
          subtitle: 'To Police & EMTs'
        }, {
          title: 'Suicide Hotline',
          subtitle: '1-800-273-8255'
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
      var card = new UI.Card({
        title: 'Calling',
        body: e.item.title + '\n' + e.item.subtitle
      });
      card.show();
    });
    menu.show();
  });
  menu.show();
});
