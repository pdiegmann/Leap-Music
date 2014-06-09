var mesh, renderer, scene, camera, controls, material;
var t = 0, ambientFactor, canvas, textureImage;
var frequencyColourSpectrum = undefined;
var accurracyColourSpectrum = undefined;
var accurracyColour = '#000000';
var frequencyColour = '#FFFFFF';

function initVisual() {
	frequencyColourSpectrum = new Rainbow();
	frequencyColourSpectrum.setSpectrum('red', 'yellow', 'green', 'blue');
	frequencyColourSpectrum.setNumberRange(0, 1);

	accurracyColourSpectrum = new Rainbow();
	accurracyColourSpectrum.setSpectrum('red', 'yellow', 'green');
	accurracyColourSpectrum.setNumberRange(0, 1);

	_init();
	animate();
}

function _init() {
	renderer = new THREE.WebGLRenderer();
	//renderer = new THREE.CanvasRenderer();
	renderer.setSize( window.innerWidth, window.innerHeight );
	renderer.physicallyBasedShading = true;
	document.body.appendChild( renderer.domElement );

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
	renderer.setSize( window.innerWidth, window.innerHeight );
}

function animate() {

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

function updateVisual(frequencyNormalized, accurracyNormalized) {
	frequencyColour = '#' + frequencyColourSpectrum.colourAt(frequencyNormalized);
	accurracyColour = '#' + accurracyColourSpectrum.colourAt(accurracyNormalized);

	// material texture
	var texture = new THREE.Texture( generateTexture() );
	texture.needsUpdate = true; // important!
	material.map = texture;

	renderer.setClearColor( frequencyColour, 1 );

	animate();
}