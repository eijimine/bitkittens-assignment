document.addEventListener('DOMContentLoaded', function() {

var button = document.querySelector('button.summon-cats');
var catDiv = document.querySelectorAll('.cat-box');

button.addEventListener('click', function() {

  $.ajax({
    url: 'http://bitkittens.herokuapp.com/cats.json',
    method: 'GET',
    dataType: 'json'
  }).done(function(data) {
        for (var i = 0; i < data.cats.length; i++) {

        var img = document.createElement('img');
        img.src = data.cats[i].photo;
        img.alt = 'Photo of ' + data.cats[i].name;

        catDiv[i].append(img);
      }

  });

});



});
