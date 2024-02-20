(function () {

  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

  for (var i = 0; i < names.length; i++) {
    var firstLetter = names[i].charAt(0).toLowerCase();

    if (firstLetter === 'j') {
      // Si la primera letra es 'j' o 'J', utiliza byeSpeaker para decir "Good Bye"
      byeSpeaker.speak(names[i]);
    } else {
      // Si la primera letra no es 'j' o 'J', utiliza helloSpeaker para decir "Hello"
      helloSpeaker.speak(names[i]);
    }
  }

})();