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
        title: 'Check-In',
        icon: 'images/logo copy.png',
        subtitle: 'Can do Menus'
      }, {
        title: 'Second Item',
        subtitle: 'Subtitle Text'
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
        title: 'Check-In',
        icon: 'images/logo copy.png',
        subtitle: 'Can do Menus'
      }, {
        title: 'Second Item',
        subtitle: 'Subtitle Text'
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
          title: 'Check-In',
          icon: 'images/logo copy.png',
          subtitle: 'Can do Menus'
        }, {
          title: 'Second Item',
          subtitle: 'Subtitle Text'
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
        title: 'Check-In',
        icon: 'images/logo copy.png',
        subtitle: 'Can do Menus'
      }, {
        title: 'Second Item',
        subtitle: 'Subtitle Text'
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
          title: 'Check-In',
          icon: 'images/logo copy.png',
          subtitle: 'Can do Menus'
        }, {
          title: 'Second Item',
          subtitle: 'Subtitle Text'
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
        title: 'Check-In',
        icon: 'images/logo copy.png',
        subtitle: 'Can do Menus'
      }, {
        title: 'Second Item',
        subtitle: 'Subtitle Text'
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
          title: 'Check-In',
          icon: 'images/logo copy.png',
          subtitle: 'Can do Menus'
        }, {
          title: 'Second Item',
          subtitle: 'Subtitle Text'
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
