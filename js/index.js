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




    var design = $("input[name=level]:checked").val();
    var cupQuantity = parseFloat($("input[name=cupQuantity]").val());
    var cupPrice = parseFloat($("input[name=cupPrice]").val());
    var rent = parseFloat($("input[name=rent]:checked").val());

    $("#design-type span").html(design);
    $("#copywriting-num span").html(cupQuantity);
    $("#non-copywriting-num span").html(cupPrice);
    $("#rent span").html(cupPrice);
    $("#add-ons span").html(rent);

    switch (design) {
        case 'Standard':
            var WebPrice = 1;
            var PricePerPage_copy = 1;
            var PricePerPage_noncopy = 1;
            break;
        case 'Personalized':
            var WebPrice = 1;
            var PricePerPage_copy = 1;
            var PricePerPage_noncopy = 1;
            break;
        case 'Premium':
            var WebPrice = 1;
            var PricePerPage_copy = 1;
            var PricePerPage_noncopy = 1;
            break;
        default:
            var WebPrice = 1;
    }
    var total = WebPrice + (cupQuantity * PricePerPage_copy) + (cupPrice * PricePerPage_noncopy);
    $("#amount").html((total).toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "1,"));
});
$(document).on('input change', 'form.pricing-calculator :input', function() {
    var design = $("input[name=level]:checked").val();
    var cupQuantity = parseFloat($("input[name=cupQuantity]").val());
    var cupPrice = parseFloat($("input[name=cupPrice]").val());
    var rent = $("input[name=rent]:checked").val();
    var ssl = $("input[name=ssl]:checked").val();
    var ecommerce = $("input[name=ecommerce]:checked").val();

    switch (ssl) {
        case 'SSL':
            var ssladdon = 100;
            var sslchosen = "Yes";
            break;
        default:
            var ssladdon = 0;
            var sslchosen = "No";
    }
    switch (ecommerce) {
        case 'Ecommerce':
            var ecommerceaddon = 3000;
            var ecommercechosen = "Yes";
            break;
        default:
            var ecommerceaddon = 0;
            var ecommercechosen = "No";
    }

    $("#design-type span").html(design);
    $("#copywriting-num span").html(cupQuantity);
    $("label[for=cupQuantity] span").html(cupQuantity);
    $("#non-copywriting-num span").html(cupPrice);
    $("label[for=cupPrice] span").html(cupPrice);
    $("#rent span").html(rent);
    $("#add-ons span").html(ssl);

    switch (design) {
        case 'Standard':
            var WebPrice = 1;
            var PricePerPage_copy = 1;
            var PricePerPage_noncopy = 1;
            break;
        case 'Personalized':
            var WebPrice = 1;
            var PricePerPage_copy = 1;
            var PricePerPage_noncopy = 1;
            break;
        case 'Premium':
            var WebPrice = 1;
            var PricePerPage_copy = 1;
            var PricePerPage_noncopy = 1;
            break;
        default:
            var WebPrice = 1;
    }
    switch (rent) {
        case 'Офис':
            var RentCost = 5000;
            break;
        case 'Магазин':
            var RentCost = 8000;
            break;
        case 'Спорт':
            var RentCost = 12000;
            break;
        default:
            var RentCost = 5000;
    }

    var total = (WebPrice + (cupQuantity * PricePerPage_copy) + (cupPrice * PricePerPage_noncopy) + ssladdon + ecommerceaddon) - RentCost;
    $("#amount").html((total).toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "1,"));

});