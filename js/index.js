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


const modal=document.querySelector('.modal')
const btnModal=document.querySelectorAll('.btn-modal')
const closeModal =document.querySelector('.close')

btnModal.forEach((btn)=>{
    console.log(btn)
    btn.onclick=()=>{
        event.preventDefault()
        modal.style.display='block'
        document.querySelector('body').style.overflow='hidden'
        console.log(document.querySelector('body').style.overflow)
        console.log(1)

    }
})

closeModal.onclick=()=>{
    modal.style.display='none'
    document.querySelector('body').style.overflow='auto'
}

window.onclick=(e)=>{
    console.log(e.target)
    if(e.target==modal){
        modal.style.display='none'
        document.querySelector('body').style.overflow='auto'
    }
}

const burger=document.querySelector('.burger')
const navigation=document.querySelector('.navigation')
const closeNav=document.querySelector('.close-nav')
const menuItem=document.querySelectorAll('.menu-list__item')

burger.onclick=()=>{
    navigation.style.display='block'
}

closeNav.onclick=()=>{
    navigation.style.display='none'
}

window.onclick=(e)=>{
    if(e.target==modal){
        modal.style.display='none'
        document.querySelector('body').style.overflow='auto'
    }

    if(e.target==navigation){
        navigation.style.display='none'
    }
}

menuItem.forEach((item)=>{
    item.onclick=()=>{
        navigation.style.display='none'
    }
})





$( document ).ready(function() {
    $(".accordion-header").on("click", function () {
        $(this).find(".circle").toggleClass('active');
    })

});


//(Количество проданных стаканов * цена) - (аренда: 30) = выручка в день
// ((Количество стаканов * цена) - (Аренда : 30)) * 55%(маржинальность) = прибыль в день



$(window).on('load', function() {

    var cupQuantity = parseFloat($("input[name=cupQuantity]").val());
    var cupPrice = parseFloat($("input[name=cupPrice]").val());
    var rentCost = parseFloat($("input[name=rentCost]").val());

    $("#cup-quantity span").html(cupQuantity);
    $("#cup-price span").html(cupPrice);
    $("#rent-cost span").html(rentCost);

    var total = (cupQuantity * cupPrice  * 0.55 * 30) - rentCost;
    $("#amount").html(parseInt(total));

    var payback = 375000 / parseInt(total) * 30 / 7;
    $("#payback span").html(parseInt(payback));
});
$(document).on('input change', 'form.pricing-calculator :input', function() {
    var cupQuantity = parseFloat($("input[name=cupQuantity]").val());
    var cupPrice = parseFloat($("input[name=cupPrice]").val());
    var rentCost = parseFloat($("input[name=rentCost]").val());

    $("#cup-quantity span").html(cupQuantity);
    $("label[for=cupQuantity] span").html(cupQuantity);
    $("#cup-price span").html(cupPrice);
    $("label[for=cupPrice] span").html(cupPrice);
    $("#rent-cost span").html(rentCost);
    $("label[for=rentCost] span").html(rentCost);

    var total = ((cupQuantity * cupPrice  * 0.55 * 30) - rentCost);
    $("#amount").html(parseInt(total));

    var payback = 375000 / parseInt(total) * 30 / 7;
    $("#payback span").html(parseInt(payback));

});