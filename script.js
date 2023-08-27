
//* Welcome To JavaScript Part:----



/* 
================================
?-> Sticky Nav-Bar Code:
================================
*/

let header = document.querySelector('.header');
let Section_Hero = document.querySelector('.Section-Hero')

let StickyNavBar = (entries) => {

    let entry = entries[0];
    entry.isIntersecting === false ?
        document.body.classList.add('Sticky-Navbar') :
        document.body.classList.remove('Sticky-Navbar')

}

const NavObserver = new IntersectionObserver(StickyNavBar, {
    root: null,
    rootMargin: '-65px',
    threshold: 0,
})

NavObserver.observe(Section_Hero)

/* 
================================
?-> Toggle Bar  Code:
================================
*/


let Navbar = document.querySelector('.Navbar');
let Navbar_List = document.querySelector('.Navbar-List');
let Navlink = document.querySelectorAll('.Navlink');

let toggler_bar = document.querySelector('.toggler-bar');
let Toggler = document.querySelector('.Toggler');

toggler_bar.addEventListener('click', () => {

    if (Toggler.classList.contains("fa-bars")) {

        Toggler.classList.remove('fa-bars');
        Toggler.classList.add('fa-xmark');
        Navbar.style.transform = "translateX(0%)";
        Navbar_List.style.visibility = "visible";

    }
    else {
        Toggler.classList.remove('fa-xmark');
        Toggler.classList.add('fa-bars');
        Navbar.style.transform = "translateX(-100%)";
        Navbar_List.style.visibility = "hidden";


    }
})


//* Phone View Toggle Bar Error Fixing:---

Navbar_List.addEventListener("click", () => {
    if (Navbar.style.transform == "translateX(0%)") {

        Navbar.style.transform = "translateX(-100%)"
        Toggler.classList.remove('fa-xmark');
        Toggler.classList.add('fa-bars');
    }
    else {
        return;
    }
})




/* 
================================
?-> Active Links Code:
================================
*/


let Section = document.querySelectorAll('.ViewSection');

    window.onscroll = () => {
        Section.forEach(sec => {
            let top = window.scrollY;
            let offset = sec.offsetTop - 90;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');

            if (top >= offset && top < offset + height) {
                Navlink.forEach(links => {
                    document.querySelector('header nav ul li a[href*=' + id + ']').classList.add('active')
                    links.classList.remove('active');
                    document.querySelector('header nav ul li a[href*=' + id + ']').classList.add('active')

                })
            }
        })
    }


/* 
================================
?-> Auto Typed Name Code:
================================
*/


let typed = new Typed(".AutoType", {
    strings: ["HIMANSHU", "WEB DEVELOPER"],
    typeSpeed: 70,
    backSpeed: 70,
    loop: true
})


/* 
================================
?-> Projects Images Shown Code:
================================
*/


let p_btns = document.querySelector('.p-btns');
let p_btn = document.querySelectorAll('.p-btn');
let p_img = document.querySelectorAll('.img-overlay');

p_btns.addEventListener('click', (e) => {
    let targetBtn = e.target;

    p_btn.forEach((e) => {
        e.classList.remove('p-btn-active')
    })
    if (!targetBtn.classList.contains('p-btn')) return;
    targetBtn.classList.add('p-btn-active');

    // Getting The Data Number Form btns:-
    let Num = e.target.dataset.btnNum;   // dataset use krke jo bhi humne data ke baad likha hai usko camelCase me likh dena.
    p_img.forEach((e) => {
        e.classList.add('p-img-not-active')
    });


    let Active_Img = document.querySelectorAll(`.p-btn--${Num}`);
    Active_Img.forEach((e) => {

        e.classList.remove('p-img-not-active')
    })

})



/* 
================================
?-> Swiper JS Code:
================================
*/


var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    autoplay: {
        delay: 3000
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

//* When Screen Size is : 768px

const MobileView = window.matchMedia("(max-width:768px)");

const SingleView = (MobileView) => {
    if (MobileView.matches) {
        new Swiper(".mySwiper", {
            slidesPerView: 1,
            spaceBetween: 30,
            autoplay: {
                delay: 3000
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
        });
    } else {
        new Swiper(".mySwiper", {
            slidesPerView: 2,
            spaceBetween: 30,
            autoplay: {
                delay: 3000
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
        });
    }
}

SingleView(MobileView)
MobileView.addEventListener('change', SingleView)

/* 
================================
?-> Scroll To Top  Code:
================================
*/


let Top_Section = document.querySelector('.Section-Hero')
let footer = document.querySelector('.Section-Footer');
let scrollElmt = document.createElement('div');

scrollElmt.classList.add('scroll-top-style');
scrollElmt.innerHTML = `<ion-icon name="arrow-up-outline" class="scroll-top"></ion-icon>`;

footer.after(scrollElmt);

scrollElmt.addEventListener('click', () => {
    Top_Section.scrollIntoView({ behavior: "smooth" })
})


/* 
================================
?-> Animated Number Code:
================================
*/

let Section_Num = document.querySelector('.Section-Num');



//* When To Animate Code:-
const AnimateNow = (entries) => {
    let [entry] = entries;
    if (!entry.isIntersecting) return;


    //* Animate Code:- 

    let count_num = document.querySelectorAll('.count-num');
    let Speed = 200;

    count_num.forEach((e) => {

        const updateNum = () => {
            let startingNum = parseInt(e.innerText);
            let targetNum = parseInt(e.dataset.num);
            let updateRange = Math.trunc(targetNum / Speed);

            if (startingNum < targetNum) {
                e.innerText = `${startingNum + updateRange}+`;
            }
            setTimeout(updateNum, 10)
        }

        updateNum();
    })
}

let NumObserve = new IntersectionObserver(AnimateNow, {
    root: null,
    threshold: 0,
    // rootMargin: 0
})

NumObserve.observe(Section_Num);


/* 
================================
?-> Lazy Loading Code:
================================
*/

let imgRef = document.querySelector('img[data-src]');

const lazyIMg = (entries) => {
    const [entry] = entries;
    if (!entry.isIntersecting) return;
    entry.target.src = imgRef.dataset.src;
}

const imgObserver = new IntersectionObserver(lazyIMg, {
    root: null,
    threshold: 0,
})

imgObserver.observe(imgRef);




