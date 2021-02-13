accordion=(e)=>{
    const height = e.target.closest('.accordion-section').querySelector('.accordion-body>*').clientHeight
    e.target.closest('.accordion-section').querySelector('.accordion-body').style.maxHeight = height + 'px'

    console.log(e.target.closest('.accordion-section').classList.value)

    if (e.target.closest('.accordion-section').classList.value==="accordion-section opened"){
        e.target.closest('.accordion-section').classList.remove('opened')
        e.target.closest('.accordion-section').querySelector('.accordion-body').style.maxHeight="0px"
    }else{
        e.target.closest('.accordion-section').classList.add('opened')
        e.target.closest('.accordion-section').querySelector('.accordion-body').style.maxHeight = height + 100+'px'
    }
}




document.querySelectorAll('.accordion-section').forEach((section) => {
    section.addEventListener('click', accordion)
})


let slideIndex=1

showSlides=(n)=>{
    let i;
    let slides=document.querySelectorAll('.mySlides')
    let dot=document.querySelectorAll('.dot')

    if (n>slides.length){
        slideIndex=1
    }else if(n<1){
        slideIndex=slides.length
    }

    slides.forEach((slide)=>{
        slide.style.display='none'
    })

    dot.forEach((dot)=>{
        dot.classList.remove('active')
    })
    slides[slideIndex-1].style.display="block"
    dot[slideIndex-1].classList.add('active')
}

showSlides(slideIndex)

plusSlides=(n)=>{
    showSlides(slideIndex+=n)
}

currentSlide=(n)=>{
    showSlides(slideIndex=n)
}


