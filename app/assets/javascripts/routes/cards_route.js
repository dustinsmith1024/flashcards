var Card = require('../models/card');

var CardRoute = Ember.Route.extend({

  model: function() {
    return Card.find();
  }

});

module.exports = CardRoute;

