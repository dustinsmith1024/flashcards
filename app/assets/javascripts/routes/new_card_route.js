var card = require('../models/card');

var NewCardRoute = Ember.Route.extend({

  renderTemplate: function() {
    this.render('edit_card', {controller: 'new_card'});
  },

  model: function() {
    return card.createRecord();
  },

  deactivate: function() {
    var model = this.get('controller.model');
    if (!model.get('isSaving')) {
      model.deleteRecord();
    }
  }

});

module.exports = NewCardRoute;

