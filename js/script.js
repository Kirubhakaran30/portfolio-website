// ===============================


// ===============================
// DARK / LIGHT MODE
// ===============================

const themeBtn = document.getElementById("themeBtn");

themeBtn.onclick = () => {

    document.body.classList.toggle("light");

    if(document.body.classList.contains("light")){

        themeBtn.classList.remove("ri-moon-line");
        themeBtn.classList.add("ri-sun-line");

        localStorage.setItem("theme","light");

    }else{

        themeBtn.classList.remove("ri-sun-line");
        themeBtn.classList.add("ri-moon-line");

        localStorage.setItem("theme","dark");

    }

}

if(localStorage.getItem("theme")=="light"){

    document.body.classList.add("light");

    themeBtn.classList.remove("ri-moon-line");
    themeBtn.classList.add("ri-sun-line");

}

// ===============================
// NAVBAR ACTIVE LINK
// ===============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const sectionTop = section.offsetTop-120;

        if(pageYOffset>=sectionTop){

            current=section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#"+current){

            link.classList.add("active");

        }

    });

});

// ===============================
// REVEAL ANIMATION
// ===============================



const reveal=()=>{

    revealElements.forEach(item=>{

        const windowHeight=window.innerHeight;

        const revealTop=item.getBoundingClientRect().top;

        if(revealTop<windowHeight-120){

            item.style.opacity="1";
            item.style.transform="translateY(0)";

        }

    });

}

revealElements.forEach(item=>{

    item.style.opacity="0";
    item.style.transform="translateY(70px)";
    item.style.transition=".8s";

});

window.addEventListener("scroll",reveal);
window.addEventListener("load",reveal);

// ===============================
// HERO TYPING EFFECT
// ===============================

const role = document.querySelector(".hero-left h2");

const words=[
"B.Tech Information Technology Student",
"Web Developer",
"Java Learner",
"Future Software Engineer"
];

let wordIndex=0;
let charIndex=0;
let deleting=false;

function type(){

    const currentWord=words[wordIndex];

    if(!deleting){

        role.textContent=currentWord.substring(0,charIndex++);

        if(charIndex>currentWord.length){

            deleting=true;

            setTimeout(type,1200);

            return;

        }

    }else{

        role.textContent=currentWord.substring(0,charIndex--);

        if(charIndex===0){

            deleting=false;

            wordIndex=(wordIndex+1)%words.length;

        }

    }

    setTimeout(type,deleting?40:90);

}

type();

// ===============================
// PARALLAX BACKGROUND
// ===============================

document.addEventListener("mousemove",(e)=>{

    document.querySelectorAll(".bg-animation span").forEach((blob,index)=>{

        const speed=(index+1)*0.01;

        const x=(window.innerWidth/2-e.clientX)*speed;

        const y=(window.innerHeight/2-e.clientY)*speed;

        blob.style.transform=`translate(${x}px,${y}px)`;

    });

});

// ===============================
// BUTTON RIPPLE EFFECT
// ===============================

document.querySelectorAll(".btn,.btn2,button").forEach(btn=>{

    btn.addEventListener("mouseenter",()=>{

        btn.style.transform="scale(1.05)";

    });

    btn.addEventListener("mouseleave",()=>{

        btn.style.transform="scale(1)";

    });

});

// ===============================
// SCROLL TO TOP BUTTON
// ===============================

const topBtn=document.createElement("div");

topBtn.innerHTML='<i class="ri-arrow-up-line"></i>';

topBtn.id="topBtn";

document.body.appendChild(topBtn);

topBtn.style.cssText=`
position:fixed;
right:30px;
bottom:30px;
width:55px;
height:55px;
display:flex;
justify-content:center;
align-items:center;
background:linear-gradient(135deg,#00d4ff,#7b2cff);
color:white;
font-size:25px;
border-radius:50%;
cursor:pointer;
box-shadow:0 10px 30px rgba(0,212,255,.4);
opacity:0;
transition:.3s;
z-index:999;
`;

window.addEventListener("scroll",()=>{

    if(window.scrollY>300){

        topBtn.style.opacity="1";

    }else{

        topBtn.style.opacity="0";

    }

});

topBtn.onclick=()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};

// ===============================
// PROJECT CARD TILT
// ===============================

document.querySelectorAll(".project-card").forEach(card=>{

    card.addEventListener("mousemove",(e)=>{

        const rect=card.getBoundingClientRect();

        const x=e.clientX-rect.left;

        const y=e.clientY-rect.top;

        const rotateX=(y-rect.height/2)/12;

        const rotateY=(rect.width/2-x)/12;

        card.style.transform=
        `perspective(1000px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        translateY(-8px)`;

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="perspective(1000px) rotateX(0) rotateY(0)";

    });

});

// ===============================
// LOADER
// ===============================

window.addEventListener("load",()=>{

    document.body.style.opacity="0";

    setTimeout(()=>{

        document.body.style.transition=".8s";
        document.body.style.opacity="1";

    },100);
   // Certificate Popup

const popup = document.getElementById("certificatePopup");

const popupImage = document.getElementById("popupImage");

function openCertificate(src){

    popup.style.display = "flex";

    popupImage.src = src;

}

document.querySelector(".close").onclick = () => {

    popup.style.display = "none";

}

popup.onclick = (e) => {

    if(e.target == popup){

        popup.style.display = "none";

    }

}

});