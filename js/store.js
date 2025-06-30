import * as THREE from 'https://cdn.jsdelivr.net/npm/three@v0.174.0/build/three.module.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
 
// -- load and reload scroll
window.onload = function() {
    window.scrollTo(0, 0);
};
window.onbeforeunload = function() {
    window.scrollTo(0, 0);
}; 


//BUTONS & FORM PART

let blendScreen = document.getElementById('blendScreen');
let buttonOne = document.getElementById('TB1S');
let buttonTwo = document.getElementById('TB3S');
let buttonBasket = document.getElementById('span_nav_eight');
let itemNumberBlock1 = document.getElementById('itemNumber1');
let itemNumberBlock2 = document.getElementById('itemNumber2');
let itemsInCard = document.getElementById('itemsInCard');
let x = document.getElementById('x');

let stationNubmer = 0;
let sensorsNumber = 0;
let itemNumber = 0;

let stationText = ''; 
let sensorText = '';

itemNumberBlock1.textContent = '0';
itemNumberBlock2.textContent = '0';
itemsInCard.textContent = 'добавьте что-то в корзину';

buttonOne.addEventListener('click', function() {
    stationNubmer += 1;
    // sensorsNumber += 1;
    itemNumber += 1;

    stationText = `станция & 3 датчика x${stationNubmer};`;

    itemsInCard.textContent = `${stationText} ${sensorText}`
    itemNumberBlock1.textContent = `${itemNumber}`
    itemNumberBlock2.textContent = `${itemNumber}`

})

buttonTwo.addEventListener('click', function() {
    // stationNubmer += 1;
    sensorsNumber += 1;
    itemNumber += 1;

    sensorText = `датчик x${sensorsNumber}`;;

    itemsInCard.textContent = `${stationText} ${sensorText}`
    itemNumberBlock1.textContent = `${itemNumber}`
    itemNumberBlock2.textContent = `${itemNumber}`

})

buttonBasket.addEventListener('click', function() {

    blendScreen.style.display = 'flex';
    blendScreen.style.opacity = '100%';

})

x.addEventListener('click', function() {

    blendScreen.style.display = 'none';
    blendScreen.style.opacity = '0';

})


// THREE JS PART 

const scene1 = new THREE.Scene();
const scene2 = new THREE.Scene();
const scene3 = new THREE.Scene();

const loader1 = new GLTFLoader()
const loader2 = new GLTFLoader()
const loader3 = new GLTFLoader()

var sizes = {
    width1: window.innerWidth * 0.26,
    width2: window.innerWidth * 0.26,
    width3: window.innerWidth * 0.26,

    height1: window.window.innerWidth * 0.26,
    height2: window.window.innerWidth * 0.26,
    height3: window.window.innerWidth * 0.26,

    };

    window.addEventListener('resize', () =>  {

            // update sizes
            sizes.width1 = window.innerWidth * 0.26,
            sizes.width2 = window.innerWidth * 0.26,
            sizes.width3 = window.innerWidth * 0.26,

            sizes.height1 = window.innerWidth * 0.26,
            sizes.height2 = window.innerWidth * 0.26,
            sizes.height3 = window.innerWidth * 0.26,

            // cameras
            camera1.aspect = sizes.width1 /  sizes.height1
            camera1.updateProjectionMatrix()      

            camera2.aspect = sizes.width2 / sizes.height2
            camera2.updateProjectionMatrix()

            camera3.aspect = sizes.width3 / sizes.height3
            camera3.updateProjectionMatrix()


            // renderer
            renderer1.setSize(sizes.width1, sizes.height1)
            renderer1.setPixelRatio(Math.min(window.devicePixelRatio, 2))

            renderer2.setSize(sizes.width2, sizes.height2)
            renderer2.setPixelRatio(Math.min(window.devicePixelRatio, 2))

            renderer3.setSize(sizes.width3, sizes.height3)
            renderer3.setPixelRatio(Math.min(window.devicePixelRatio, 2))
            
      })    

// -- models path

var paths = {
    "model_cube1" : "./support/models/cubea3.glb",
    "model_cube2" : "./support/models/cubea1.glb",  
    "model_cube3" : "./support/models/cubea2.glb",  
}

// -- camera

const camera1 = new THREE.PerspectiveCamera(40, sizes.width1 / sizes.height1, 0.01, 10);
const camera2 = new THREE.PerspectiveCamera(30, sizes.width2 / sizes.height2, 0.01, 10);
const camera3 = new THREE.PerspectiveCamera(30, sizes.width3 / sizes.height3, 0.01, 10);


// -- renderer 

const renderer1 = new THREE.WebGLRenderer( { antialias: true } );
renderer1.setSize( sizes.width1, sizes.height1 );

const renderer2 = new THREE.WebGLRenderer( { antialias: true } );
renderer2.setSize( sizes.width2, sizes.height2 );

const renderer3 = new THREE.WebGLRenderer( { antialias: true } );
renderer3.setSize( sizes.width3, sizes.height3 );

// -- create canvases

model1.appendChild(renderer1.domElement).id = 'canvas1';
model2.appendChild(renderer2.domElement).id = 'canvas2';
model3.appendChild(renderer3.domElement).id = 'canvas3';

renderer1.domElement.style.position = 'absolute';
renderer2.domElement.style.position = 'absolute';
renderer3.domElement.style.position = 'absolute';

// -- load models + orbit controls

var mixer1;
var Player_anim_IDLE1;

loader1.load( paths.model_cube1, function ( gltf1 ) {

    let model1 = gltf1.scene;

    mixer1 = new THREE.AnimationMixer( model1 );
    Player_anim_IDLE1 = gltf1.animations[ 0 ]
    mixer1.clipAction( Player_anim_IDLE1 ).play();

    scene1.add( model1 );
	
    model1.rotation.y = 0.6;
    var controls1 = new OrbitControls( camera1  , renderer1.domElement );
    controls1.enableDumping = true;
    controls1.enableZoom = false;

}, undefined, function ( error ) {

	console.error( error );

} );

var mixer2;
var Player_anim_IDLE2;

loader2.load( paths.model_cube2, function ( gltf2 ) {

    let model2 = gltf2.scene;

    mixer2 = new THREE.AnimationMixer(model2);
    Player_anim_IDLE2 = gltf2.animations[ 0]
    mixer2.clipAction( Player_anim_IDLE2).play();

    scene2.add( model2 );
	
    model2.rotation.y = 0.6;
    var controls2 = new OrbitControls( camera2  , renderer2.domElement );
    controls2.enableDumping = true;
    controls2.enableZoom = false;

}, undefined, function ( error ) {

	console.error( error );

} );

var mixer3;
var Player_anim_IDLE3;

loader3.load( paths.model_cube3, function ( gltf3 ) {

    let model3 = gltf3.scene;

    mixer3 = new THREE.AnimationMixer(model3);
    Player_anim_IDLE3 = gltf3.animations[ 0]
    mixer3.clipAction( Player_anim_IDLE3).play();

    scene3.add( model3 );
	
    model3.rotation.y = 0.6;
    var controls3 = new OrbitControls( camera3  , renderer3.domElement );
    controls3.enableDumping = true;
    controls3.enableZoom = false;

}, undefined, function ( error ) {

	console.error( error );

} );

// LIGHT -- dL1 -- directionalLight1
const dL11 = new THREE.DirectionalLight( 0xffffff, 40 );
dL11.position.x = 0.25;
dL11.position.y = 0.8;
dL11.position.z = 0.35;

const dL12 = new THREE.DirectionalLight( 0xffffff, 20 );
dL12.position.x = -0.25;
dL12.position.y = -0.8;
dL12.position.z = -0.35;

//
const dL21 = new THREE.DirectionalLight( 0xffffff, 40 );
dL21.position.x = 0.25;
dL21.position.y = 0.8;
dL21.position.z = 0.35;

const dL22 = new THREE.DirectionalLight( 0xffffff, 20 );
dL22.position.x = -0.25;
dL22.position.y = -0.8;
dL22.position.z = -0.35;
//
const dL31 = new THREE.DirectionalLight( 0xffffff, 40 );
dL31.position.x = 0.25;
dL31.position.y = 0.8;
dL31.position.z = 0.35;

const dL32 = new THREE.DirectionalLight( 0xffffff, 20 );
dL32.position.x = -0.25;
dL32.position.y = -0.8;
dL32.position.z = -0.35;
//
scene1.add(dL11)
scene1.add(dL12)
camera1.position.set(0, 0.13, 0.55);

scene2.add(dL21)
scene2.add(dL22)
camera2.position.set(0, 0.13, 0.55);

scene3.add(dL31)
scene3.add(dL32)
camera3.position.set(0, 0.13, 0.55);

// ANIMATION

const clock1 = new THREE.Clock();
const clock2 = new THREE.Clock();
const clock3 = new THREE.Clock();

function animate1() {

    // mesh.rotation.x += 0.01;
    // mesh.rotation.y += 0.01;
    var delta1 = clock1.getDelta();
    if (mixer1) mixer1.update( delta1 );
	renderer1.render( scene1, camera1 );
}

renderer1.setAnimationLoop( animate1 );

function animate2() {

    // mesh.rotation.x += 0.01;
    // mesh.rotation.y += 0.01;
    var delta2 = clock2.getDelta();
    if (mixer2) mixer2.update( delta2 );
	renderer2.render( scene2, camera2 );
}
renderer2.setAnimationLoop( animate2 );

function animate3() {

    // mesh.rotation.x += 0.01;
    // mesh.rotation.y += 0.01;
    var delta3 = clock3.getDelta();
    if (mixer3) mixer3.update( delta3 );
	renderer3.render( scene3, camera3 );
}
renderer3.setAnimationLoop( animate3 );



// NAVIGATION BLOCK

// pointer animation

let spanNavOne = document.getElementById('span_nav_one');
let spanNavTwo = document.getElementById('span_nav_two');
let spanNavThree = document.getElementById('span_nav_three');
let spanNavFour = document.getElementById('span_nav_four');
// let spanNavFive = document.getElementById('span_nav_fifth');
let spanNavSix = document.getElementById('span_nav_sixth');
let spanNavSeven = document.getElementById('span_nav_seven');

let initialContent1 = spanNavOne.textContent;
let initialContent2 = spanNavTwo.textContent;
let initialContent3 = spanNavThree.textContent;
let initialContent4 = spanNavFour.textContent;
// let initialContent5 = spanNavFive.textContent;
let initialContent6 = spanNavSix.textContent;
let initialContent7 = spanNavSeven.textContent;

let isHovering = false;
let intervalId;

window.onload = function() {
    isHovering = true;
    elementSrtRandomReplaceLoopIn(spanNavThree);
}

//------- 1
spanNavOne.addEventListener('mouseenter', function() {
    isHovering = true;
    elementSrtRandomReplaceLoopIn(spanNavOne);
})

spanNavOne.addEventListener('mouseleave', function() {
    isHovering = false;
    clearInterval(intervalId);
    spanNavOne.textContent = initialContent1;
    isHovering = true;
})

//------- 2
spanNavTwo.addEventListener('mouseenter', function() {
    isHovering = true;
    elementSrtRandomReplaceLoopIn(spanNavTwo);
})

spanNavTwo.addEventListener('mouseleave', function() {
    isHovering = false;
    clearInterval(intervalId);
    spanNavTwo.textContent = initialContent2;
    isHovering = true;
})

//------- 3
spanNavThree.addEventListener('mouseleave', function() {
    isHovering = true;
    elementSrtRandomReplaceLoopIn(spanNavThree);
})

spanNavThree.addEventListener('mouseenter', function() {
    isHovering = false;
    clearInterval(intervalId);
    spanNavThree.textContent = initialContent3;
    // isHovering = true;
})

//------- 4
spanNavFour.addEventListener('mouseenter', function() {
    isHovering = true;
    elementSrtRandomReplaceLoopIn(spanNavFour);
})

spanNavFour.addEventListener('mouseleave', function() {
    isHovering = false;
    clearInterval(intervalId);
    spanNavFour.textContent = initialContent4;
    isHovering = true;
})

//------- 5
// spanNavFive.addEventListener('mouseenter', function() {
//     isHovering = true;
//     elementSrtRandomReplaceLoopIn(spanNavFive);
// })

// spanNavFive.addEventListener('mouseleave', function() {
//     isHovering = false;
//     clearInterval(intervalId);
//     spanNavFive.textContent = initialContent5;
//     isHovering = true;
// })

//------- 6
spanNavSix.addEventListener('mouseenter', function() {
    isHovering = true;
    elementSrtRandomReplaceLoopIn(spanNavSix);
})

spanNavSix.addEventListener('mouseleave', function() {
    isHovering = false;
    clearInterval(intervalId);
    spanNavSix.textContent = initialContent6;
    isHovering = true;
})

//------- 7
spanNavSeven.addEventListener('mouseenter', function() {
    isHovering = true;
    elementSrtRandomReplaceLoopIn(spanNavSeven);
})

spanNavSeven.addEventListener('mouseleave', function() {
    isHovering = false;
    clearInterval(intervalId);
    spanNavSeven.textContent = initialContent7;
    isHovering = true;
})



// FUNCTIONS

const strRandomReplace = (str) => {

    const variable = "1234567890123456789012345678901234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-+=&?/\*^$#@$#@$#@!.()№“:;—-+=&?/\*^$#@$#@$#@!.()№“:;—-+=&?/\*^$#@$#@$#@!.()№“:;—-+=&?/\*^$#@$#@$#@!.()№“:;—";
    let random = '';
    let result = '';
    let i = 0;
    let ending = str.length;
    // console.log('replase is running')

    for (i; i < ending; i += 1) {

        random = Math.floor(Math.random() * variable.length);
        result = `${variable[random]}${result}`;
        // console.log('replase is fine');

    };

    return result;

}

const elementSrtRandomReplace = (element) => {
    element.textContent = strRandomReplace(element.textContent);
}

const elementSrtRandomReplaceLoopIn = (element) => {

    isHovering = true;

    intervalId = setInterval(() => {
        if (isHovering) {
            elementSrtRandomReplace(element);
        }
    }, 100);

    console.log('span is active');
}
