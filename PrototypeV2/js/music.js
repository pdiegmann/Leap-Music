function Music() {

    this.note = undefined;
    this.count = undefined;
    this.notes = undefined;
    this.SongEnd = true;

    //Wandelt einen Ton in eine Frequenz um
    this.getNote = function (note, lage)
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
        
        
        //this.note = Math.random()*130;
        this.note = 24+frequenz + dieLage * 12;
    }

    this.initSong = function(json) { //songName) {
        song = json; //Songs.data[songName]; //JSON.parse( Songs.entchen );    
        this.notes = song.Notes;
        this.count = 0;      
        this.SongEnd = false;   	
    }

    this.playNote = function(track) {
        if(this.count < this.notes.length) {
            lage = this.notes[this.count].Height;
            ton = this.notes[this.count].Note;
        }
        
        this.getNote(ton, lage);
        // TODO: Add second synth for song
        track.startNote(this.note);
        if(this.count < this.notes.length-1) {          
            this.count++;
        } else {
            this.count = 0;    
            this.SongEnd = true;
        }                
            
        return this.note;
    }

    this.stopNote = function (track) {    
    	track.endNote();
    	if(this.count >= this.notes.length) {
            this.SongEnd = true;
        }
    }
}

