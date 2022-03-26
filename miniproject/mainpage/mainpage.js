// header-돋보기
const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function () {
    searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function () {
    searchEl.classList.add('focused');
    searchInputEl.setAttribute('placeholder', '통합검색');
});



// 스크롤 시 애니메이션 적용(Spring Season) : 손은진
let season_ani = document.getElementById('inline_season');
let spring_font_ani = document.getElementById('spring_font');

window.addEventListener('scroll', function() {
    let value = window.scrollY
    console.log("scrollY : " + value);

    if(value < 70) {
        season_ani.style.animation = 'left_reverse 2s ease-out forwards';
        spring_font_ani.style.animation = 'right_reverse 2s ease-out forwards'
    } else {
        season_ani.style.animation = 'left 2s ease-out';
        spring_font_ani.style.animation = 'right 2s ease-out';
    }
})

// 스크롤 시 애니메이션 적용(Ethiopia) : 손은진
let ethiopia_ani = document.getElementById('ethiopia_visual');

window.addEventListener('scroll', function() {
    let value = window.scrollY
    console.log("scrollY : " + value);

    if(value > 550) {
        ethiopia_ani.style.animation = 'twinkle 2s ease-out';
    }
})

// 스크롤 시 애니메이션 적용(PICK YOUR FAVORITE) : 손은진
let pick_ani = document.getElementById('pick_animation');

window.addEventListener('scroll', function() {
    let value = window.scrollY
    console.log("scrollY : " + value);

    if(value < 1030) {
        pick_ani.style.animation = 'pick_reverse 2s ease-out forwards';
    } else {
        pick_ani.style.animation = 'pick_left 2s ease-out';
    }
})

// 스타벅스 매장 찾기 : 김우진 
let blink1 = document.getElementById('b_image1');
let blink2 = document.getElementById('b_image2');
let blink3 = document.getElementById('b_image3');
let slide1 = document.getElementById('d_slide1');
let slide2 = document.getElementById('d_slide2');
let slide3 = document.getElementById('d_slide3');


// 스타벅스 매장 찾기 : 김우진
// 스크롤 이벤트가 일어날때 마다 기능 불러오기
window.addEventListener('scroll', function(){
    let value = window.scrollY;
    console.log("scrollY", value);

    if (value < 2100) {
        slide1.style.animation = "d_slide1 2s ease-out forwards";
        slide2.style.animation = "d_slide2 2s ease-out forwards";
        slide3.style.animation = "d_slide3 2s ease-out forwards";        
    }else{
        slide1.style.animation = "slide1 2s ease-out";
        slide2.style.animation = "slide2 2s ease-out";
        slide3.style.animation = "slide3 2s ease-out";      
    }
});


    window.addEventListener('scroll', function(){
        let value = window.scrollY;
        console.log("scrollY", value);
    if (value < 2100) {
        blink1.style.animation = "blink 2s";      
        blink2.style.animation = "blink 2s";      
             
    }else{
        blink1.style.animation = "twinkle 2.5s";        
        blink2.style.animation = "twinkle 2.5s";        
    }


    // RESERVE MAGAZINE 화면 : 김우진
    if(value < 1700){
        blink3.style.animation = "blink 2s"; 
    }else{
        blink3.style.animation = "twinkle 2s";
    }
});