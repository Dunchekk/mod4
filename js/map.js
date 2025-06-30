// -- load and reload scroll
window.onload = function() {
    window.scrollTo(0, 0);
};
window.onbeforeunload = function() {
    window.scrollTo(0, 0);
}; 
 
// NAVIGATION BLOCK

// init navigation parts

let spanNavOne = document.getElementById('span_nav_one');
let IspanNavOne = document.getElementById('Ispan_nav_one');
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

console.log('true1');


// animation for navigation here (all functions are in the end of the file)

window.onload = function() {

    isHovering = true;

    elementSrtRandomReplaceLoopIn(spanNavOne);
    elementSrtRandomReplaceLoopIn(IspanNavOne);

}

spanNavOne.addEventListener('mouseleave', function() {

    isHovering = true;

    elementSrtRandomReplaceLoopIn(spanNavOne);

})

spanNavOne.addEventListener('mouseenter', function() {

    isHovering = false;

    clearInterval(intervalId);
    spanNavOne.textContent = initialContent1;


})

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

spanNavThree.addEventListener('mouseenter', function() {

    isHovering = true;

    elementSrtRandomReplaceLoopIn(spanNavThree);

})

spanNavThree.addEventListener('mouseleave', function() {

    isHovering = false;

    clearInterval(intervalId);
    spanNavThree.textContent = initialContent3;

    isHovering = true;

})

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


// YANDEX MAP

// beginning of YANDEX MAP part

let myMap;
ymaps.ready(function () {

    myMap = new ymaps.Map("YMap", {
        center: [55.75, 37.63],
        zoom: 16,
        controls: []
        });
    myMap.setType('yandex#satellite');

// init placemarks 

    var placemark1 = new ymaps.Placemark([55.749872, 37.630416], null, {
        iconLayout: 'default#image',
        iconImageHref: './support/imgs/block.png',
        iconImageSize: [30, 30],
        iconImageOffset: [-20, -20],
    });
    var placemark2 = new ymaps.Placemark([55.754447, 37.624626], null, {
        iconLayout: 'default#image',
        iconImageHref: './support/imgs/block.png',
        iconImageSize: [30, 30],
        iconImageOffset: [-20, -20],
    });
    var placemark3 = new ymaps.Placemark([55.754045, 37.640688], null, {
        iconLayout: 'default#image',
        iconImageHref: './support/imgs/block.png',
        iconImageSize: [30, 30],
        iconImageOffset: [-20, -20],
    });
    var placemark4 = new ymaps.Placemark([55.740710, 37.615329], null, {
        iconLayout: 'default#image',
        iconImageHref: './support/imgs/block.png',
        iconImageSize: [30, 30],
        iconImageOffset: [-20, -20],
    });
    var placemark5 = new ymaps.Placemark([55.740226, 37.635542], null, {
        iconLayout: 'default#image',
        iconImageHref: './support/imgs/block.png',
        iconImageSize: [30, 30],
        iconImageOffset: [-20, -20],
    });
    var placemark6 = new ymaps.Placemark([55.728387, 37.635188], null, {
        iconLayout: 'default#image',
        iconImageHref: './support/imgs/block.png',
        iconImageSize: [30, 30],
        iconImageOffset: [-20, -20],
    });
    var placemark7 = new ymaps.Placemark([55.752236, 37.602052], null, {
        iconLayout: 'default#image',
        iconImageHref: './support/imgs/block.png',
        iconImageSize: [30, 30],
        iconImageOffset: [-20, -20],
    });
    var placemark8 = new ymaps.Placemark([55.766174, 37.647370], null, {
        iconLayout: 'default#image',
        iconImageHref: './support/imgs/block.png',
        iconImageSize: [30, 30],
        iconImageOffset: [-20, -20],
    });
    var placemark9 = new ymaps.Placemark([55.735677, 37.661618], null, {
        iconLayout: 'default#image',
        iconImageHref: './support/imgs/block.png',
        iconImageSize: [30, 30],
        iconImageOffset: [-20, -20],
    });
    var placemark10 = new ymaps.Placemark([55.759335, 37.575457], null, {
        iconLayout: 'default#image',
        iconImageHref: './support/imgs/block.png',
        iconImageSize: [30, 30],
        iconImageOffset: [-20, -20],
    });
    var placemark11 = new ymaps.Placemark([55.775786, 37.599489], null, {
        iconLayout: 'default#image',
        iconImageHref: './support/imgs/block.png',
        iconImageSize: [30, 30],
        iconImageOffset: [-20, -20],
    });
    var placemark12 = new ymaps.Placemark([55.782559, 37.522242], null, {
        iconLayout: 'default#image',
        iconImageHref: './support/imgs/block.png',
        iconImageSize: [30, 30],
        iconImageOffset: [-20, -20],
    });

// add placemarks

    myMap.geoObjects.add(placemark1);
    myMap.geoObjects.add(placemark2);
    myMap.geoObjects.add(placemark3);
    myMap.geoObjects.add(placemark4);
    myMap.geoObjects.add(placemark5);
    myMap.geoObjects.add(placemark6);
    myMap.geoObjects.add(placemark7);
    myMap.geoObjects.add(placemark8);
    myMap.geoObjects.add(placemark9);
    myMap.geoObjects.add(placemark10);
    myMap.geoObjects.add(placemark11);
    myMap.geoObjects.add(placemark12);
    
// init data for each placemark

let OMTBsens = document.getElementById('OMTBsens');
let OMTBnum = document.getElementById('OMTBnum');
let OMTBdate = document.getElementById('OMTBdate');
let db1 = document.getElementById('db1');
let OMTBcoord = document.getElementById('OMTBcoord');
let OMTBnear = document.getElementById('OMTBnear');

let openMenu = document.getElementById('openMenu');
let openMenuText2 = document.getElementById('OMTB2');
let openMenuText1 = document.getElementById('OMTB1');

// placemarks events

let isHovering2 = false

    placemark1.events.add('click', function(e) {
        console.log('map point click');
        isHovering2 = false;
        clearInterval(intervalId);

        // toFillData

        OMTBsens.innerText = '00047826';
        OMTBnum.innerText = '056';
        OMTBdate.innerText = '28/07/2024';
        OMTBcoord.innerHTML  = 'широта: 55.749872<br>долгота: 37.630416';
        OMTBnear.innerText = 'зарядье, китай-город...';

        openMenu.classList.remove('active');
        openMenu.classList.add('active');
        openMenuText1.classList.remove('active');
        openMenuText1.classList.add('active');
        openMenuText2.classList.remove('active');
        openMenuText2.classList.add('active');

        isHovering2 = true;
        dbReplaseLoop(db1);

    })

    placemark2.events.add('click', function(e) {
        console.log('map point click');
        isHovering2 = false;
        clearInterval(intervalId);

        OMTBsens.innerText = '00042546';
        OMTBnum.innerText = '041';
        OMTBdate.innerText = '13/03/2024';
        OMTBcoord.innerHTML = 'широта: 55.754447<br>долгота: 37.624626';
        OMTBnear.innerText = 'гум, кремль...';

        openMenu.classList.remove('active');
        openMenu.classList.add('active');
        openMenuText1.classList.remove('active');
        openMenuText1.classList.add('active');
        openMenuText2.classList.remove('active');
        openMenuText2.classList.add('active');

        isHovering2 = true;
        dbReplaseLoop(db1);

    })

    placemark3.events.add('click', function(e) {
        console.log('map point click');
        isHovering2 = false;
        clearInterval(intervalId);

        OMTBsens.innerText = '00049523';
        OMTBnum.innerText = '050';
        OMTBdate.innerText = '01/01/202';
        OMTBcoord.innerHTML = 'широта: 55.754045<br>долгота: 37.640688';
        OMTBnear.innerText = 'ground солянка, сюр...';

        openMenu.classList.remove('active');
        openMenu.classList.add('active');
        openMenuText1.classList.remove('active');
        openMenuText1.classList.add('active');
        openMenuText2.classList.remove('active');
        openMenuText2.classList.add('active');

        isHovering2 = true;
        dbReplaseLoop(db1);

    })

    placemark4.events.add('click', function(e) {
        console.log('map point click');
        isHovering2 = false;
        clearInterval(intervalId);

        OMTBsens.innerText = '00038402';
        OMTBnum.innerText = '054';
        OMTBdate.innerText = '02/09/2024';
        OMTBcoord.innerHTML = 'широта: 55.740710<br>долгота: 37.615329';
        OMTBnear.innerText = 'большая глина №4, гэс—2...';

        openMenu.classList.remove('active');
        openMenu.classList.add('active');
        openMenuText1.classList.remove('active');
        openMenuText1.classList.add('active');
        openMenuText2.classList.remove('active');
        openMenuText2.classList.add('active');

    })

    placemark5.events.add('click', function(e) {
        console.log('map point click');
        isHovering2 = false;
        clearInterval(intervalId);

        OMTBsens.innerText = '00057236';
        OMTBnum.innerText = '067';
        OMTBdate.innerText = '17/03/2025';
        OMTBcoord.innerHTML = 'широта: 55.740226<br>долгота: 37.635542';
        OMTBnear.innerText = 'аквамарин, новокузнецкая...';

        openMenu.classList.remove('active');
        openMenu.classList.add('active');
        openMenuText1.classList.remove('active');
        openMenuText1.classList.add('active');
        openMenuText2.classList.remove('active');
        openMenuText2.classList.add('active');

    })

    placemark6.events.add('click', function(e) {
        console.log('map point click');
        isHovering2 = false;
        clearInterval(intervalId);

        OMTBsens.innerText = '00047826';
        OMTBnum.innerText = '071';
        OMTBdate.innerText = '20/07/2025';
        OMTBcoord.innerHTML = 'широта: 55.728387<br>долгота: 37.635188';
        OMTBnear.innerText = 'школа дизайна ниу вшэ, павелецкая...';

        openMenu.classList.remove('active');
        openMenu.classList.add('active');
        openMenuText1.classList.remove('active');
        openMenuText1.classList.add('active');
        openMenuText2.classList.remove('active');
        openMenuText2.classList.add('active');

    })
    placemark7.events.add('click', function(e) {
        console.log('map point click');
        isHovering2 = false;
        clearInterval(intervalId);

        OMTBsens.innerText = '00056823';
        OMTBnum.innerText = '057';
        OMTBdate.innerText = '05/01/2025';
        OMTBcoord.innerHTML = 'широта: 55.752236<br>долгота: 37.602052';
        OMTBnear.innerText = 'арбатская, театр вахтангова...';

        openMenu.classList.remove('active');
        openMenu.classList.add('active');
        openMenuText1.classList.remove('active');
        openMenuText1.classList.add('active');
        openMenuText2.classList.remove('active');
        openMenuText2.classList.add('active');

    })

    placemark8.events.add('click', function(e) {
        console.log('map point click');
        isHovering2 = false;
        clearInterval(intervalId);

        OMTBsens.innerText = '00049285';
        OMTBnum.innerText = '032';
        OMTBdate.innerText = '01/06/2024';
        OMTBcoord.innerHTML = 'широта: 55.766174<br>долгота: 37.647370';
        OMTBnear.innerText = 'красные ворота, дом центросоюза...';

        openMenu.classList.remove('active');
        openMenu.classList.add('active');
        openMenuText1.classList.remove('active');
        openMenuText1.classList.add('active');
        openMenuText2.classList.remove('active');
        openMenuText2.classList.add('active');

    })

    placemark9.events.add('click', function(e) {
        console.log('map point click');
        isHovering2 = false;
        clearInterval(intervalId);

        OMTBsens.innerText = '00047350';
        OMTBnum.innerText = '038';
        OMTBdate.innerText = '18/12/2024';
        OMTBcoord.innerHTML = 'широта: 55.735677<br>долгота: 37.661618';
        OMTBnear.innerText = 'пролетарская, таганский парк...';

        openMenu.classList.remove('active');
        openMenu.classList.add('active');
        openMenuText1.classList.remove('active');
        openMenuText1.classList.add('active');
        openMenuText2.classList.remove('active');
        openMenuText2.classList.add('active');

    })
    
    placemark10.events.add('click', function(e) {
        console.log('map point click');
        isHovering2 = false;
        clearInterval(intervalId);

        OMTBsens.innerText = '00047826';
        OMTBnum.innerText = '042';
        OMTBdate.innerText = '24/02/2024';
        OMTBcoord.innerHTML = 'широта: 55.759335<br>долгота: 37.575457';
        OMTBnear.innerText = 'краснопресненская, планетарий...';

        openMenu.classList.remove('active');
        openMenu.classList.add('active');
        openMenuText1.classList.remove('active');
        openMenuText1.classList.add('active');
        openMenuText2.classList.remove('active');
        openMenuText2.classList.add('active');

    })
    
    placemark11.events.add('click', function(e) {
        console.log('map point click');
        isHovering2 = false;
        clearInterval(intervalId);

        OMTBsens.innerText = '00042947';
        OMTBnum.innerText = '039';
        OMTBdate.innerText = '14/04/2024';
        OMTBcoord.innerHTML = 'широта: 55.775786<br>долгота: 37.599489';
        OMTBnear.innerText = 'новослободская, депо...';

        openMenu.classList.remove('active');
        openMenu.classList.add('active');
        openMenuText1.classList.remove('active');
        openMenuText1.classList.add('active');
        openMenuText2.classList.remove('active');
        openMenuText2.classList.add('active');

    })
    
    placemark12.events.add('click', function(e) {
        console.log('map point click');
        isHovering2 = false;
        clearInterval(intervalId);

        OMTBsens.innerText = '00056792';
        OMTBnum.innerText = '082';
        OMTBdate.innerText = '09/04/2025';
        OMTBcoord.innerHTML = 'широта: 55.782559<br>долгота: 37.522242';
        OMTBnear.innerText = 'цска, авиапарк...';

        openMenu.classList.remove('active');
        openMenu.classList.add('active');
        openMenuText1.classList.remove('active');
        openMenuText1.classList.add('active');
        openMenuText2.classList.remove('active');
        openMenuText2.classList.add('active');

    })

// functions in yandex map placemarks db animation

const dbReplase = () => {
    let number = Math.floor(Math.random() * 1900) / 10;
    return number;
}

const dbReplaseLoop = (element) => {

    let isHovering2 = true;

    let intervalId2 = setInterval(() => {
        if (isHovering2) {
            let number = dbReplase();
            element.textContent = `${number}`;
            // console.log('replace is done');
        }
    }, 1000);
    
}

});   // end of YANDEX MAP part



// FUNCTIONS (here -- for animation in navigation block)


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

    // console.log('span is active');
}
