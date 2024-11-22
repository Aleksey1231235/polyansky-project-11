const homeMainImg = document.getElementById('homeMainImg');
const homeMainImgTitle = document.getElementById('homeMainImgTitle');
const homeMainImgDate = document.getElementById('homeMainImgDate');
const homeMainImges = [
    {
        urls: {
            1010: 'homeMainImages/1010/homeMainImg-1.png',
            1920: 'homeMainImages/1920/homeMainImg-1.png'
        },
        title: {
            text: 'ЦИМ-КАБИНЕТ МОГЭ СТАЛ ВАЖНЫМ ИНСТРУМЕНТОМ ПОВЫШЕНИЯ ЭФФЕКТИВНОСТИ ЭКСПЕРТИЗЫ ЦИФРОВЫХ МОДЕЛЕЙ',
            date: '24.01.2024'
        }
    },
    {
        urls: {
            1010: 'homeMainImages/1010/homeMainImg-2.png',
            1920: 'homeMainImages/1920/homeMainImg-2.png'
        },
        title: {
            text: 'Проект МКД  по программе расселения аварийного фонда в Шатурском г.о.',
            date: '24.01.2024'
        }
    },
    {
        urls: {
            1010: 'homeMainImages/1010/homeMainImg-3.png',
            1920: 'homeMainImages/1920/homeMainImg-3.png'
        },
        title: {
            text: 'МОГЭ КООРДИНИРУЕТ ПЕРЕХОД НА РИМ',
            date: '06.12.2023'
        }
    },
]
const speedAnimation = 3000; // каждые 3 сек заменять картинку
let widthHomeMainImg = 0;
let indexhomeMainImg = 0;
setInterval(() => {
    const currentWidth = window.innerWidth;

    if (currentWidth < 1525) {
        widthHomeMainImg = 1010;
    } else {
        widthHomeMainImg = 1920;
    }

    const indexhomeMainImgAfter = indexhomeMainImg + 1;
    if (indexhomeMainImgAfter < homeMainImges.length) {
        indexhomeMainImg++
    } else {
        indexhomeMainImg = 0;
    }

    homeMainImg.src = `../../assets/images/home/${homeMainImges[indexhomeMainImg].urls[widthHomeMainImg]}`;
    homeMainImgTitle.innerHTML = (homeMainImges[indexhomeMainImg].title.text).toUpperCase();
    homeMainImgDate.innerHTML = homeMainImges[indexhomeMainImg].title.date;
}, speedAnimation);

const partners = document.querySelector('.partners');
let leftPartnersMinus = 0;
let leftPartners = 0;

setInterval(() => {
    const currentWidth = window.innerWidth;

    if (currentWidth <= 1225 && currentWidth > 768) {
        if (leftPartners !== 0) {
            const difference = leftPartners / leftPartnersMinus;
            leftPartnersMinus = 140;
            leftPartners = difference * leftPartnersMinus;
        } else {
            leftPartnersMinus = 140;
        }
    } else {
        if (leftPartners !== 0) {
            const difference = leftPartners / leftPartnersMinus;
            leftPartnersMinus = 160;
            leftPartners = difference * leftPartnersMinus;
        } else {
            leftPartnersMinus = 160;
        }
    }

    leftPartners -= leftPartnersMinus;

    if (leftPartners === -(leftPartnersMinus * 12)) {
        leftPartners = 0;
        partners.style.transition = '0s';
        partners.style.marginLeft = `${leftPartners}px`;

        setTimeout(() => {
            leftPartners -= leftPartnersMinus;
            partners.style.transition = '0.5s';
            partners.style.marginLeft = `${leftPartners}px`;
        }, 100)
    } else {
        partners.style.transition = '0.5s';
        partners.style.marginLeft = `${leftPartners}px`;
    }
}, speedAnimation);

const mobileNavbarBlock = document.querySelector('.mobileNavbarBlock');
document.querySelector('.mobileNavbarOpen').addEventListener('click', () => {
    mobileNavbarBlock.style.top = '0';
})

document.querySelector('.mobileNavbarClose').addEventListener('click', () => {
    mobileNavbarBlock.style.top = '-100%';
})