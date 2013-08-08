var Card = DS.Model.extend({

  english_word: DS.attr('string'),

  spanish_word: DS.attr('string'),

  image_url: DS.attr('string')

});

module.exports = Card;

