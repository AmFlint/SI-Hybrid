import '../styles/main.scss'

let stars = document.querySelectorAll('.add__card--rate > i');

for (let i=0 ; i<stars.length; i++ ) {
    stars[i].addEventListener('touchstart', function () {
        for (let x=0 ; x<stars.length; x++ ) {
            stars[x].classList.remove('active');
        }
        for (let j=0; j<=i; j++) {
            stars[j].classList.add('active');
        }
    })
}