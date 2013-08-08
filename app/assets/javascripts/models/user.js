var User = DS.Model.extend({

  email: DS.attr('string'),

  correct_answers: DS.attr('number'),

  incorrect_answers: DS.attr('number')

});

module.exports = User;

