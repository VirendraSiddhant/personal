var sidemenu = document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right = "0";
}
function closemenu(){
    sidemenu.style.right = "-200px";
}

// ----------------toggle icon navbar-------------------//

// let sidemenu = document.querySelector('#sidemenu');
// let nav = document.querySelector('.nav');

// sidemenu.onclick = function () {
//     sidemenu.classList.toggle('fas fa-times');
//     nav.classList.toggle('active');
// }


// ----------------------scroll sections active link------------------------//

// let sections = document.querySelectorAll('section');
// let navlinks = document.querySelectorAll('header nav ul');

// window.onscroll = function () {
//     sections.forEach(function (sec) {
//         let top = window.scrollY;
//         let offset = sec.offsetTop - 150;
//         let height = sec.offsetHeight;
//         let id = sec.getAttribute('id');

//         if (top >= offset && top < offset + height) {
//             nav.forEach(function (links) {
//                     links.classList.remove('active');
//                     document.querySelector('header nav ul[href*=' + id + ']').classList.add('active');
//                 }
//             );
//         }
//     });
// }
// ------------------------sticky navbar-------------------------//

// let header = document.querySelector('#header');
// header.classList.toggle('sticky',window.scrollY > 100);


// -----------remove toggle icon and navbar when click nav link (scroll)------------------//

    // sidemenu.classList.remove('fas fa-times');
    // nav.classList.remove('active');





const scriptURL = 'https://script.google.com/macros/s/AKfycbwfqrwTSZbfjNY6e57RFNtSbA4-V-s3SawSRwxi5RSeCRHKC5AgEBneUDpnYiIXKJDzNQ/exec'
const form = document.forms['submit-to-google-sheet']
const msg =document.getElementById("msg")

form.addEventListener('submit',function (e) {
        e.preventDefault();
        fetch(scriptURL, { method: 'POST', body: new FormData(form) })
            .then(function (response) {
                msg.innerHTML = "Message sent sucessfully";
                setTimeout(function () {
                    msg.innerHTML = "";
                }, 5000);
                form.reset();
            })
            .catch(function (error) {
                return console.error('Error!', error.message);
            });
    })





