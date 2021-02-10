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


