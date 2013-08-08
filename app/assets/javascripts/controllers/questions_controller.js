var Card = require('../models/card');

var QuestionsController = Ember.ObjectController.extend({
  
  thing: 'thing',

  //Use property to make the damn thing available!
  q: function(){
  	return Card.find('ulu8b');
  }.property()

});

module.exports = QuestionsController;

