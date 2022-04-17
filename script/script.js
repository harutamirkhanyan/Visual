let musk = document.querySelector('.musk'),
    home = document.querySelector('#home'),
    about = document.querySelector('#aboutus'),
    team = document.querySelector('#team'),
    portfolio = document.querySelector('#portfolio'),
    contact = document.querySelector('#contact'),
    btndown = document.querySelector('.btndown'),
    firstnumber = document.querySelector('.firstnumber'),
    secondnumber = document.querySelector('.secondnumber'),
    thirdnumber = document.querySelector('.thirdnumber'),
    fourthnumber = document.querySelector('.fourthnumber'),
    text = document.querySelectorAll('.text'),
    up = document.querySelector('.up'),
    work = document.querySelectorAll('.work'),
    select = document.querySelectorAll('.selectors>div'),
    btnRigth = document.querySelector('.btnrigth'),
    btnLeft = document.querySelector('.btnleft'),
    x = 0,
    y = 0,
    z = 0,
    q = 0, // x,y,z,q for function countf()
    counter = 0,
    count = 0,
    arr = [
        "img/backgrounds/bg.jpg",
        "img/backgrounds/bg-1.jpg",
        "img/backgrounds/bg-2.jpg",
    ]; //for firstslider

    window.addEventListener('load', () => {
        musk.classList.add('hide');
        setTimeout(() => {
            musk.remove()
        }, 600)
    })

window.addEventListener('scroll', function () {

    if (window.scrollY >= 0 && window.scrollY < 923) {
        home.classList.add('classactive')
    } else {
        home.classList.remove('classactive')
    }
    if (window.scrollY > 923 && window.scrollY < 2423) {
        about.classList.add('classactive')
    } else {
        about.classList.remove('classactive')
    }
    if (window.scrollY > 2423 && window.scrollY < 3052) {
        team.classList.add('classactive')
    } else {
        team.classList.remove('classactive')
    }
    if (window.scrollY > 3052 && window.scrollY < 7740) {
        portfolio.classList.add('classactive')
    } else {
        portfolio.classList.remove('classactive')
    };
    if (window.scrollY > 7740 && window.scrollY < 15000) {
        contact.classList.add('classactive')
    } else {
        contact.classList.remove('classactive')
    } // for headermenu green color
    if (window.scrollY <= 0) {
        up.classList.add('abs')
    } else {
        up.classList.remove('abs')
    }
    if (window.scrollY > 1700) {
        countf()
    };
    if (window.scrollY > 1041 && window.scrollY < 1740) {
        document.querySelector('.percent1').style.animationPlayState = 'running';
        document.querySelector('.percent2').style.animationPlayState = 'running';
        document.querySelector('.percent3').style.animationPlayState = 'running';
        document.querySelector('.progmod1').style.animationPlayState = 'running';
        document.querySelector('.progmod2').style.animationPlayState = 'running';
        document.querySelector('.progmod3').style.animationPlayState = 'running';
    };


    // console.log(window.scrollY)
    if (window.scrollY > 100) {
        document.querySelector('.header').classList.add('headermod');
        document.querySelector('#logoimg').src = 'img/assets/logo-dark.png'
    } else {
        document.querySelector('.header').classList.remove('headermod');
        document.querySelector('#logoimg').src = 'img/assets/logo-white.png'
    }
});

btnRigth.onclick = function () {
    if (counter >= 2) {
        counter = -1
    }
    for (let i = 0; i < text.length; i++) {
        text[i].classList.remove('isactive')
    }
    counter++
    text[counter].classList.add('isactive')
    document.querySelector('.frame1').style.backgroundImage = `url(${arr[counter]})`
    // console.log(counter)

};
btnLeft.onclick = function () {
    if (counter <= 0) {
        counter = 3
    }
    for (let i = 0; i < text.length; i++) {
        text[i].classList.remove('isactive')
    }
    counter--
    text[counter].classList.add('isactive')
    document.querySelector('.frame1').style.backgroundImage = `url(${arr[counter]})`
    // console.log(counter)
}; //first slider


up.onclick = function start() {
    window.scrollTo(0, 0)
};

home.onclick = function start() {
    window.scrollTo(0, 0)
};

function scrollToEl(clicked, el) {
    clicked.onclick = function () {
        el.scrollIntoView()
    }
};
scrollToEl(about, document.querySelector('.about'));
scrollToEl(team, document.querySelector('.ourteam'));
scrollToEl(portfolio, document.querySelector('.works'));
scrollToEl(contact, document.querySelector('.contactus'));
scrollToEl((document.querySelector('.btndowndiv')), document.querySelector('.about'));



setInterval(function () {
    if (btndown.offsetTop == 0) {
        btndown.style.transition = "all 1.5s"
        btndown.style.top = '50px';
        btndown.style.opacity = 0;
    } else if (btndown.offsetTop >= 50) {
        btndown.style.transition = "none"
        btndown.style.opacity = 1;
        btndown.style.top = '0';
        // btndown.style.transition = "all 1.5s"

    }
    // console.log(btndown.offsetTop)
    // btndown.style.top = '50px';
    // btndown.style.opacity = 1;
    // if(btndown.offsetTop >= 50) {
    //     btndown.style.top = '0px';
    //     btndown.style.opacity = 0;
    // }
    // if (btndown.offsetTop == -30) {
    //     btndown.style.top = '5px';
    //     btndown.style.opacity = 1;
    // } else {
    //     btndown.style.top = '-30px';
    //     btndown.style.opacity = 0;
    // }
    //    console.log(btndown.offsetTop)

}, 500);

function countf() {
    setInterval(function () {
        if (x >= 8000 && y >= 400 && z >= 65000 && q >= 250) {
            return
        }
        x = x + 400;
        y = y + 20;
        z = z + 3250;
        q = q + 12.5;
        firstnumber.innerHTML = x;
        secondnumber.innerHTML = y;
        thirdnumber.innerHTML = z;
        fourthnumber.innerHTML = q;
    }, 50)
};

function workSort() {
    document.querySelector('#all').onclick = function () {

        work.forEach(function (item) {
            // item.style.transform='scale(0)'
            item.style.display = 'flex'
            count = work.length;
            setTimeout(function () {
                item.style.transform = 'scale(1)'
            })
        })
    };

    document.querySelector('#identity').onclick = function () {
        work.forEach(function (item) {
            item.style.transform = 'scale(0)';
            setTimeout(() => {
                item.style.display = 'none';
            }, 1000);
            if (item.classList.contains('identity')) {
                item.style.transform = 'scale(1)';
                setTimeout(function () {
                    item.style.display = 'flex';
                }, 1000);
            }

        });
    };

    document.querySelector('#webdesign').onclick = function () {
        work.forEach(function (item) {
            item.style.transform = 'scale(0)';
            setTimeout(() => {
                item.style.display = 'none';
            }, 1000);
            if (item.classList.contains('webdesign')) {
                item.style.transform = 'scale(1)';
                setTimeout(function () {
                    item.style.display = 'flex';
                }, 1000);
            }

        });
    };

    document.querySelector('#graphic').onclick = function () {
        work.forEach(function (item) {
            item.style.transform = 'scale(0)';
            setTimeout(() => {
                item.style.display = 'none';
            }, 1000);
            if (item.classList.contains('graphic')) {
                item.style.transform = 'scale(1)';
                setTimeout(function () {
                    item.style.display = 'flex';
                }, 1000);
            }

        });
    };


    document.querySelector('#logol').onclick = function () {
        work.forEach(function (item) {
            item.style.transform = 'scale(0)';
            setTimeout(() => {
                item.style.display = 'none';
            }, 1000);
            if (item.classList.contains('logol')) {
                item.style.transform = 'scale(1)';
                setTimeout(function () {
                    item.style.display = 'flex';
                }, 1000);
            }

        });
    };

    document.querySelector('#motion').onclick = function () {
        work.forEach(function (item) {
            item.style.transform = 'scale(0)';
            setTimeout(() => {
                item.style.display = 'none';
            }, 1000);
            if (item.classList.contains('motion')) {
                item.style.transform = 'scale(1)';
                setTimeout(function () {
                    item.style.display = 'flex';
                }, 1000);
            }

        });
    };
};

workSort();

function counters() {


    // select.forEach(item => {
    //     item.addEventListener('mouseover', function () {
    //         for (let i = 0; i < work.length; i++) {
    //             if (work[i].classList.contains(item.id)) {
    //                 count++
    //             }
    //         }
    //         let p = document.querySelectorAll('.selectors>div>p');
    //         p.forEach(i => {
    //             if (count == 0) {
    //                 count = work.length
    //             }
    //             if (i.classList.contains(item.id)) {
    //                 i.innerText = count
    //                 i.style.top = '0'
    //                 i.style.display = 'flex';
    //                 i.style.top = '-35px'
    //             }
    //              else {
    //                 i.style.display = 'none';
    //                 i.style.top = '0'
    //             }
    //         })
    //         count = 0
    //     })
    // }) // count for worksBlock

    select.forEach(item => {
        item.addEventListener('mouseover', function () {
            for (let i = 0; i < work.length; i++) {
                if (work[i].classList.contains(item.id)) {
                    count++
                }
            }
            if (count === 0) {
                count = work.length
                item.childNodes[1].innerText = count
            } else {
                item.childNodes[1].innerText = count
            }
            item.childNodes[1].classList.toggle('hidep')
        });
        item.addEventListener('mouseout', () => {
            item.childNodes[1].classList.toggle('hidep')
            count = 0;
        })
    }) // count for worksBlock
}
counters()



let loginform = () => {
    let login = document.querySelector('#login'),
        loginForm = document.querySelector('.log'),
        close = document.querySelectorAll('.closeBtn'),
        registrationBtn = document.querySelector('.registrationBtn'),
        regForm = document.querySelector('.registration'),
        loginBtn = document.querySelector('.loginbtn');

    login.addEventListener('click', () => {
        loginForm.style.top = '50%'
    });

    close.forEach(item => {
        item.addEventListener('click', () => {
            console.log(item)
            loginForm.style.top = '3000px';
            regForm.style.top = '3000px';
        })
    })
    registrationBtn.addEventListener('click', () => {
        loginForm.style.top = '3000px';
        regForm.style.top = '50%'
    })
    loginBtn.addEventListener('click', () => {
        regForm.style.top = '3000px'
        loginForm.style.top = '0';
    })
}

loginform()

function swiper() {

    let mouseState = false,
        opinion = document.querySelector('.opinion'),
        opinionblock = document.querySelector('.opinionblock'),
        oblock = document.querySelector('.forflex'),
        x = 0;



    oblock.addEventListener('mousedown', (e) => {
        opinion.style.cursor = 'grabbing'
        mouseState = true
        x = oblock.offsetLeft - e.clientX;
    });

    oblock.addEventListener('mouseup', () => {
        mouseState = false
        opinion.style.cursor = 'grab'
    });

    opinion.addEventListener('mousemove', (e) => {
        if (mouseState) {

            let options = {
                root: opinion, // defoult null
                rootMargin: '0px', //margin 
                threshold: 0.1 // subject visibility
            }
            let func = function (item, observer) {
                item.forEach(i => {
                    // console.log(i.intersectionRatio)
                    // console.log(i.target.classList[1])
                    if (i.intersectionRatio > 0.5 && i.intersectionRatio < 1 && i.target.classList[1] == 'opinionblock1') {
                        console.log(i.target.classList[1], 'sa arajin blokn e')
                        oblock.style.left = '0'
                        return
                    }
                    if (i.intersectionRatio > 0.5 && i.intersectionRatio < 1 && i.target.classList[1] == 'opinionblock2') {
                        oblock.style.left = '-100%'
                        console.log(i.target.classList[1], 2)
                        return
                    }
                    if (i.intersectionRatio > 0.5 && i.intersectionRatio < 1 && i.target.classList[1] == 'opinionblock3') {
                        oblock.style.left = '-200%'
                        console.log(i.target.classList[1], 3)
                        return
                    }
                })
            }
            let a1 = new IntersectionObserver(func, options);
            let a2 = new IntersectionObserver(func, options);
            let a3 = new IntersectionObserver(func, options);
            a1.observe(document.querySelector(".opinionblock1"));
            a2.observe(document.querySelector(".opinionblock2"));
            a3.observe(document.querySelector(".opinionblock3"));
            oblock.style.left = e.clientX + x + "px"
        }
    })
}
swiper()



function observer(elem, elem1) {
    let options = {
        root: null, // defoult null
        rootMargin: '0px', //margin & border
        threshold: .1 // subject visibility
    }
    let callback = function (entries, observer) {
        // console.log(entries)
        entries.forEach(item => {
            // console.log(item.intersectionRatio)
            // console.log(item)

            if (item.intersectionRatio >= 0.1) {
                document.querySelectorAll(`${elem}`).forEach(i => {
                    i.classList.add('animationstart');
                })
                document.querySelectorAll(`${elem1}`).forEach(i => {
                    i.classList.add('animationstart');
                })
            }
        })
    };
    let observer = new IntersectionObserver(callback, options);
    observer.observe(document.querySelector(`${elem}`)) // first
    if (elem1 != undefined) {
        let observ = new IntersectionObserver(callback, options);
        observ.observe(document.querySelector(`${elem1}`))
    }
}
observer('.teamtitle', '.membersinfotext');
observer('.abouttitle', '.descriptions2');
observer('.aboutusdotitle', '.descriptions1');
observer('.pricelisttitle', '.priceblocks');
observer('.form', '.address');
observer('.fottertitle');