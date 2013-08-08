var Card = require('../models/card');

var QuestionRoute = Ember.Route.extend({

  model: function() {
    return Card.find();
  }

});

module.exports = QuestionRoute;

