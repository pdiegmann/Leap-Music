function Visual(initialView) {
	this.useWebGL = false;
	this.gameView = initialView;

	var mesh, renderer, scene, camera, controls, material;
	var t = 0, ambientFactor, canvas, textureImage;
	var frequencyColourSpectrum = undefined;
	var accurracyColourSpectrum = undefined;
	var accurracyColour = '#000000';
	var frequencyColour = '#FFFFFF';

	frequencyColourSpectrum = new Rainbow();
	frequencyColourSpectrum.setSpectrum('red', 'yellow', 'green', 'blue');
	frequencyColourSpectrum.setNumberRange(0, 1);

	accurracyColourSpectrum = new Rainbow();
	accurracyColourSpectrum.setSpectrum('red', 'yellow', 'green');
	accurracyColourSpectrum.setNumberRange(0, 1);

	if (this.useWebGL)
		_init(initialView);

	animate();

	function _init(gameView) {
		renderer = new THREE.WebGLRenderer();
		//renderer = new THREE.CanvasRenderer();
		renderer.setSize( window.innerWidth, window.innerHeight );
		renderer.physicallyBasedShading = true;
		gameView.getDomElement().appendChild( renderer.domElement );

		// scene
		scene = new THREE.Scene();
		
		// camera
		camera = new THREE.PerspectiveCamera( 40, window.innerWidth / window.innerHeight, 1, 1000 );
		camera.position.set( 0, 0, 11 );

		// controls
		/*controls = new THREE.OrbitControls( camera );
		controls.minDistance = 10;
		controls.maxDistance = 50;*/

		// axes
		//scene.add( new THREE.AxisHelper( 20 ) );

		// geometry
		var geometry = new THREE.PlaneGeometry(9.5, 20);

		// image
		var texture = new THREE.Texture( generateTexture() );
		textureImage = texture.image

		// material texture
		var texture = new THREE.Texture( generateTexture() );
		texture.needsUpdate = true; // important!

		// material
	    material = new THREE.MeshBasicMaterial( { map: texture, transparent: true } );
		
		// mesh
		mesh = new THREE.Mesh( geometry, material );
		scene.add( mesh );

	}

	function onWindowResize( event ) {
		if (this.useWebGL)
			renderer.setSize( window.innerWidth, window.innerHeight );
	}

	function animate() {
		if (!this.useWebGL)
			return;

		requestAnimationFrame( animate );

		//controls.update();

		renderer.render( scene, camera );

	}

	function generateTexture() {

		var size = 512;

		// create canvas
		canvas = document.createElement( 'canvas' );
		canvas.width = size;
		canvas.height = size;

		// get context
		var context = canvas.getContext( '2d' );

		// draw gradient
		context.rect( 0, 0, size, size );
		var gradient = context.createLinearGradient( 0, 0, size, 0 );
		gradient.addColorStop(0.2, frequencyColour);
		gradient.addColorStop(0.4, accurracyColour);
	    gradient.addColorStop(0.6, accurracyColour);
	    gradient.addColorStop(0.8, frequencyColour);
		context.fillStyle = gradient;
		context.fill();

		renderer.setClearColor( frequencyColour, 1 );

		return canvas;
	}

	this.updateVisual = function(frequencyNormalized, accurracyNormalized) {
		if (frequencyNormalized)
			frequencyColour = '#' + frequencyColourSpectrum.colourAt(frequencyNormalized);
		if (accurracyNormalized)  {       
			accurracyColour = '#' + accurracyColourSpectrum.colourAt(accurracyNormalized);         			
		    if(InterCom.gamestate.gameMode == 1) {
		    	var elem = document.getElementById("NoteNr"+(InterCom.currentNoteNr-1));
		    	if (elem)
		    		elem.style.background = '#' + accurracyColourSpectrum.colourAt(accurracyNormalized);
		  	}
        }
         
        
		if (this.useWebGL) {
			// material texture
			var texture = new THREE.Texture( generateTexture() );
			texture.needsUpdate = true; // important!
			material.map = texture;

			renderer.setClearColor( frequencyColour, 1 );

			animate();
		}
		else {
			this.gameView.getDomElement().style.background = "-webkit-linear-gradient(left, " + frequencyColour + " 20%," + accurracyColour + " 40%," + accurracyColour + " 60%," + frequencyColour + " 80%)";
			this.gameView.getDomElement().style.background = "-o-linear-gradient(left, " + frequencyColour + " 20%," + accurracyColour + " 40%," + accurracyColour + " 60%," + frequencyColour + " 80%)";
			this.gameView.getDomElement().style.background = "-moz-linear-gradient(left, " + frequencyColour + " 20%," + accurracyColour + " 40%," + accurracyColour + " 60%," + frequencyColour + " 80%)";
			this.gameView.getDomElement().style.background += "linear-gradient(to right, " + frequencyColour + " 20%," + accurracyColour + " 40%," + accurracyColour + " 60%," + frequencyColour + " 80%)";
		}
	}
}