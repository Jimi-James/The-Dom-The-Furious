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
    var card = new UI.Card({
      title: 'Calling',
      body: concat (e.item.title, '\n', e.item.subtitle);
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
        subtitle: '8:00PM'
        body: 'Dosage Info:\nTake X nightly.'
      }, {
        title: 'Cymbalta',
        subtitle: '8:00PM'
        body: 'Dosage Info:\nTake X nightly.'
      }, {
        title: 'Motrin',
        subtitle: '8:00AM'
        body: 'Dosage Info:\nTake 1/2 cup daily until not sick.'
      }]
    }]
  });
  menu.on('select', function(e) {
    var taken = 'HAS been taken.';
    var card = new UI.Card({
      title: e.item.title,
      body: concat (e.item.body, taken, '\nUP: taken\nDOWN: not taken')
    });
    card.on('click', 'up', function(e) {
      taken = 'HAS been taken.';
    }
    card.on('click', 'down', function(e) {
      taken = 'Has NOT been taken.';
    }
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
      var card = new UI.Card({
        title: 'Calling',
        body: concat (e.item.title, '\n', e.item.subtitle);
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
      body: concat (e.item.title, '\n', e.item.subtitle);
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
      var card = new UI.Card({
        title: 'Calling',
        body: concat (e.item.title, '\n', e.item.subtitle);
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
    var done = 'HAS been done.';
    var card = new UI.Card({
      title: e.item.title,
      body: concat ('Do ', e.item.subtitle, done, '\nUP: done\nDOWN: not done')
    });
    card.on('click', 'up', function(e) {
      done = 'HAS been done.';
    }
    card.on('click', 'down', function(e) {
      done = 'Has NOT been done.';
    }
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
      var card = new UI.Card({
        title: 'Calling',
        body: concat (e.item.title, '\n', e.item.subtitle);
      });
      card.show();
    });
    menu.show();
  });
  menu.show();
});
