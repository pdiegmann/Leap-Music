HandleCoockie.mouse = undefined;

function HandleCoockie() {
}



HandleCoockie.load = function() {
    if(document.cookie == "true") HandleCoockie.mouse = true;
    else HandleCoockie.mouse = false;
};

HandleCoockie.setzen = function(lala) {
    document.cookie = lala;
};

HandleCoockie.setMouse = function(modus) {
    HandleCoockie.mouse=modus;
    
};

