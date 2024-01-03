let openingPage = document.getElementsByClassName('opening-page')[0];
let secondPage = document.getElementsByClassName('second-page')[0];
let upButtonEl = document.getElementsByClassName('up-button')[0];
let mainEl = document.querySelector('.main');
let inputElts = document.getElementsByTagName('input');
let labelEl = document.getElementsByClassName('card-second')[0];
let cert1 = document.getElementsByClassName('crt1')[0];
let cert2 = document.getElementsByClassName('crt2')[0];
let cert3 = document.getElementsByClassName('crt3')[0];
let cert4 = document.getElementsByClassName('crt4')[0];
let cert5 = document.getElementsByClassName('crt5')[0];
var body = document.body, html = document.documentElement;
var maxHeight = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );
const xValues = ["Before me", "After me"];
const yValues = [20, maxHeight];
const barColors = "green";

let allCert = [cert1, cert2, cert3, cert4, cert5];

downButtonEl.addEventListener('click', () => {
    openingPage.remove();
    upButtonEl.classList.remove('gone');
    secondPage.classList.remove('gone');
});

//change certificates
for (let i = 0; i < inputElts.length; i++) {
    let inputEl = inputElts[i];
    inputEl.addEventListener('click', () => {
        if (inputEl.id === 'c1') {
            document.getElementsByClassName('bg-changing')[0].classList.remove('gone');
            for (let j = 0; j < allCert.length; j++) {
                const cert = allCert[j];
                cert.addEventListener('click', () => {
                    let a = getComputedStyle(cert)
                    let b = a.backgroundImage.slice(48);
                    b = 'url("' + b;
                    labelEl.style.backgroundImage = b;
                });
            }
        }else {
            document.getElementsByClassName('bg-changing')[0].classList.add('gone');
        }
        if (inputEl.id === 'c2') {
            new Chart("myChart", {
                type: "bar",
                data: {
                  labels: xValues,
                  datasets: [{
                    backgroundColor: "rgb(18, 105, 0)",
                    data: yValues
                  }]
                },
                options: {
                  legend: {display: false},
                  title: {
                    display: true,
                    text: "Your company"
                  },
                  
                }
              });
        }
        if (inputEl.id === 'c3') {
            document.getElementsByTagName('object')[0].classList.remove('gone')
        }else {
            document.getElementsByTagName('object')[0].classList.add('gone')
        }
    });
}





//bring back main page
upButtonEl.addEventListener('click', () => {
    upButtonEl.classList.add('gone');
    secondPage.classList.add('gone');

    setTimeout(() => {
        mainEl.insertAdjacentElement('afterbegin', openingPage);
        console.log(mainEl);
    }, 200);
});
