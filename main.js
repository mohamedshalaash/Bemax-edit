let head=document.getElementById("header");
let logo=document.querySelector("header .logo");
let logoDark=document.querySelector("header .logoDark");
let progress=document.querySelectorAll('.progress span');
let aboutRight=document.querySelector('.about-container .right');
let about=document.getElementById('about');
let portfolio=document.getElementById('portfolio');
let services=document.getElementById('services');
let price=document.getElementById('price');
let blog=document.getElementById('blog');
let contact=document.getElementById('contact');
// count
let countDown=document.querySelectorAll(".banner2 .num")
let banner2=document.getElementById("banner2")
let started =false;
// ================================================================================
// LOADING CLOSE WHEN WINDOW LOAD
let loading=document.getElementById('loading')
window.onload=function(){
    loading.classList.add("loading-close")
}
// OPEN AND CLOSE BAR
document.querySelector('#bar-icon').addEventListener("click",()=>{
    document.querySelector('.linkes-items').classList.toggle('linkes-items-open')
    document.querySelector('#bar-icon').classList.toggle('bar-close')
})
document.querySelector('.linkes-items').addEventListener("click",()=>{
    document.querySelector('.linkes-items').classList.toggle('linkes-items-open')
    document.querySelector('#bar-icon').classList.toggle('bar-close')
})
// auto write in home page
let x=1;
const autoWrite=document.getElementById('auto');
const autowritee=()=>{
    const title="SUCCESS "
    const title2="SUCCESS "
    autoWrite.innerText=title.slice(0,x);
    x++;
    if(title.length<x){
        x=1;
    }
};
const stoop=setInterval(autowritee,300)
// ==============================================================
// ============= about story // title watch story 
let body=document.getElementById("body")
let story=document.getElementById('about-story');
story.addEventListener("click",()=>{
    let storyPop=document.createElement("div")
    storyPop.className="story-pop"
    body.appendChild(storyPop)
    // set and add frame to storyPop
    let videoPop=document.createElement("video")
    videoPop.src="videos/story.mp4";
    videoPop.setAttribute("controls","controls")
    videoPop.setAttribute("autoplay","autoplay")
    videoPop.setAttribute("loop","loop")
    storyPop.appendChild(videoPop)
    body.style.overflow="hidden"
    // close storyPop
    let overflow=document.createElement("div");
    overflow.className="over-flow"
    storyPop.appendChild(overflow)
    // close page
    overflow.addEventListener("click",()=>{
        storyPop.remove();
        body.style.overflow=""
    })
})
// ==============================================================
// ============= PORTFOLIO popImg ===================
let btnOpenPop=document.querySelectorAll('.portfolio-box section .icon-photo');
// on click any one 
btnOpenPop.forEach((eo)=>{
    eo.addEventListener("click",(e)=>{
        // body fixed
        body.style.overflow="hidden"
        // create imgPopup
        let imgPopup=document.createElement("div");
        let img=e.target.parentElement.parentElement.querySelector('img');
        imgPopup.className="img-popup"
        body.appendChild(imgPopup)
        let theImg=document.createElement("img");
        theImg.src=img.src;
        imgPopup.appendChild(theImg)
        let overflow=document.createElement("div");
        overflow.className="over-flow";
        imgPopup.appendChild(overflow)
        overflow.addEventListener("click",()=>{
            imgPopup.remove()
            body.style.overflow=""
        })
        // create controles buttons
        // 1- btn close pop
        let closeImgPopup=document.createElement("div");
        closeImgPopup.className="close-imgPopup";
        closeImgPopup.innerHTML="X"
        imgPopup.appendChild(closeImgPopup)
        closeImgPopup.addEventListener("click",()=>{
            imgPopup.remove()
            body.style.overflow=""
        })
        // 2- right and left btn    (slide)
        let x=0;
        arrImgPop=["images/1.jpg","images/2.jpg","images/3.jpg","images/4.jpg","images/5.jpg","images/6.jpg","images/7.jpg"];
        // right --------------
        let rightArrow=document.createElement("div");
        rightArrow.className="right-arrow";
        rightArrow.innerHTML=`<i class="fa-solid fa-caret-right"></i>`
        imgPopup.appendChild(rightArrow)
        rightArrow.addEventListener("click",()=>{
            if(x===arrImgPop.length-1){
                x=0
            }
        x++
        theImg.src= arrImgPop[x];
        })
        // left --------------
        let leftArrow=document.createElement("div");
        leftArrow.className="left-arrow";
        leftArrow.innerHTML=`<i class="fa-solid fa-caret-left"></i>`
        imgPopup.appendChild(leftArrow)
        leftArrow.addEventListener("click",()=>{
            if(x === 0){
                x=arrImgPop.length
            }
            x--
            theImg.src= arrImgPop[x];
        })
    })
}) 
// HEADER LINKES CHANGES WHEN SCROLL
let links =document.querySelectorAll('.linkes-items a')
let sections=document.querySelectorAll('.headerLink')
window.onscroll=()=>{
        // HEADER LINKS 
    sections.forEach(sec=>{
        let top=window.scrollY;
        let offest=sec.offsetTop -100;
        let height=sec.offsetHeight;
        let id=sec.getAttribute('id');
        if(top >= offest && top < offest + height){
            links.forEach(link=>{
                link.classList.remove('active-link');
                let activeLink =document.querySelector('.linkes-items a[href*=' + id + ']')
                activeLink.classList.add('active-link')
            })
        }
    })
    if(scrollY >=100){
        head.classList.add("header-scroll");
        logoDark.style.display="block"
        logo.style.display="none"
    }
    else{
        head.classList.remove("header-scroll");
        logoDark.style.display="none"
        logo.style.display="block"
    }
    // SKILLS ANIMATION
    if(scrollY>= aboutRight.offsetTop - 630){
        progress.forEach((element)=>{
            element.style.width= element.dataset.width;
        })
    }else{
        progress.forEach((element)=>{
            element.style.width= "0%";
        })
    }
    // COUNT DOWN IN PORTOFOLIO PAGE
    if(scrollY>=banner2.offsetTop - 310){
        if(!started){
            countDown.forEach(num=>startCount(num))
        }
        started=true;
    }
}
function startCount(el){
    let goal =el.dataset.goal;
    let counter=setInterval(()=>{
        el.textContent++;
        if(el.textContent == goal){
            clearInterval(counter)
        }
    }, .1)
}
// portofolio images change 
let category=document.querySelectorAll('.category li')
let portfolioImgs=document.querySelectorAll('.portfolio-box section')
category.forEach((li)=>{
    li.addEventListener("click",(e)=>{
        category.forEach((li)=>{
            li.classList.remove("active-category")
        })
        li.classList.add("active-category")
        portfolioImgs.forEach((img)=>{
            img.style.display="none"
        })
        document.querySelectorAll(e.target.dataset.img).forEach((e)=>{
            e.style.display="block"
        })
    })
})
