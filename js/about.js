// -- load and reload scroll
window.onload = function() {
    window.scrollTo(0, 0);
};
window.onbeforeunload = function() {
    window.scrollTo(0, 0);
}; 

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
    elementSrtRandomReplaceLoopIn(spanNavSeven);
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
spanNavSeven.addEventListener('mouseleave', function() {
    isHovering = true;
    elementSrtRandomReplaceLoopIn(spanNavSeven);
})

spanNavSeven.addEventListener('mouseenter', function() {
    isHovering = false;
    clearInterval(intervalId);
    spanNavSeven.textContent = initialContent7;
    // isHovering = true;
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
