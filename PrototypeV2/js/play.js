function Play() {}

Play.Push = function(Ereignis) {
  if (!Ereignis)
    Ereignis = window.event;

  if (Ereignis.which && !Music.SongEnd) {
    Music.playNote();
  } else if (Ereignis.keyCode) {

  }

  if(Music.SongEnd) {
      document.formular.ausgabe.value = glueckwunsch;
  }
}

Play.Normal = function (Ereignis) {
  if (!Ereignis)
    Ereignis = window.event;

  if (Ereignis.which) {
    Music.stopNote();
  } else if (Ereignis.keyCode) {
    Tastencode = Ereignis.keyCode;
  }


  if(Music.SongEnd) {
      document.formular.ausgabe.value = glueckwunsch;
  }

}

Play.startAgain =function () {
    Music.initSong("lala");
}
