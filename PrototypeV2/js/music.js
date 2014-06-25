function Music() {   }

Music.note = undefined;
Music.count = undefined;
Music.notes = undefined;
Music.SongEnd = true;

//Wandelt einen Ton in eine Frequenz um
Music.getNote = function (note, lage)
{
    frequenz = 0;              
    dieLage = parseInt(lage);
      
    notesIs = ["c", "cis", "d", "dis", "e", "f", "fis", "g", "gis", "a", "ais", "h"];
    notesBes = ["c", "es", "d", "es", "e", "f", "ges", "g", "as", "a", "b", "h"];

    i = 0;
    run = true;
    while(run || i >= notesIs.length) {
        if(notesIs[i] == note) {
            if(dieLage == -2) {
                frequenz = i-8;    
            }
            else {
                frequenz = i+1;   
            }
            run = false;   
        } else if(notesBes[i] == note) {
            if(dieLage == -2) {
                frequenz = i-8;
            }
            else {
                frequenz = i+1;
            }
            run = false;
        }
        i++;
    }
    
    
    //Music.note = Math.random()*130;
    Music.note = 24+frequenz + dieLage * 12;
}

Music.initSong = function(json) { //songName) {
    song = json; //Songs.data[songName]; //JSON.parse( Songs.entchen );    
    Music.notes = song.Notes;
    Music.count = 0;      
    Music.SongEnd = false;
    InterCom.init();        	
}

Music.playNote = function() {
    if(Music.count < Music.notes.length) {
        lage = Music.notes[Music.count].Height;
        ton = Music.notes[Music.count].Note;
    }
    
    Music.getNote(ton, lage);
    // TODO: Add second synth for song
    InterCom.audible.startNote(Music.note);
    if(Music.count < Music.notes.length-1) {          
        Music.count++;
    } else {
        Music.count = 0;    
        Music.SongEnd = true;
    }                
        
    return Music.note;
}

Music.stopNote = function () {    
	InterCom.audible.endNote();
	if(Music.count >= Music.notes.length) {
        Music.SongEnd = true;
    }
}


