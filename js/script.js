const cardElems=document.querySelectorAll('.card');

cardElems.forEach(elem => {
    elem.addEventListener('click', function () {
        if (!elem.classList.contains('card--disabled')) {
            elem.classList.toggle('card--selected');
        }
    });
})
