const yesBtn = document.querySelector('.yes-btn');
const noBtn = document.querySelector('.no-btn');
const main = document.querySelector('.wrapper');
const mainRect = main.getBoundingClientRect();
const noBtnRect = noBtn.getBoundingClientRect();
noBtn.addEventListener('mouseover', () => {
    // const i = Math.floor(Math.random() * (1000)) + 1;
    // const j = Math.floor(Math.random() * (1000)) + 1;
    const j = Math.floor(Math.random() * (mainRect.height - noBtnRect.height)) + 1;
    const i = Math.floor(Math.random() * (mainRect.width - noBtnRect.width)) + 1;
    noBtn.style.left = i + 'px';
    noBtn.style.top = j + 'px';
    
});
