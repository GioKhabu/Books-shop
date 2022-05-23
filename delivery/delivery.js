    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1;
    let yyyy = today.getFullYear();
    if (dd < 10) {
        dd = '0' + dd
    }
    if (mm < 10) {
        mm = '0' + mm
    }

    today = yyyy + '-' + mm + '-' + (dd + 1);
    document.getElementById('userdate').setAttribute("min", today);
    let red = document.querySelectorAll('.red')
    let name1 = document.querySelector('.name')
    let surName = document.querySelector('.surName')
    let datWid = document.querySelector('.datWid')
    let date1 = document.querySelector('.date1')

    let street = document.querySelector('.street')
    let houseN = document.querySelector('.houseN')
    let flatN = document.querySelector('.flatN')
    let radio1 = document.querySelector('.radio1')
    let radio2 = document.querySelector('.radio2')
    let submitBtn = document.querySelector('#myButton')



    name1.addEventListener('focusout', e => {

        if (e.target.value === '') {
            if(e.target.parentElement.children[3]){
                e.target.parentElement.children[3].remove()
            }
            e.target.style.borderColor = "red";
            let emptyError = document.createElement('label')
            emptyError.classList.add('emptyError')
            emptyError.textContent = 'Please enter the name'
            let insert1 = e.currentTarget.parentElement
            insert1.insertAdjacentElement('beforeend', emptyError)
        } else if (e.target.value.length < 4) {
            if(e.target.parentElement.children[3]){
                e.target.parentElement.children[3].remove()
            }
            e.target.style.borderColor = "red";
            let emptyError = document.createElement('label')
            emptyError.classList.add('emptyError')
            emptyError.textContent = 'Please enter no less then 4 symbols'
            let insert1 = e.currentTarget.parentElement
            insert1.insertAdjacentElement('beforeend', emptyError)
        } else {
            e.target.style.borderColor = "aquamarine";
            if(e.target.parentElement.children[3]){
                e.target.parentElement.children[3].remove()
            }
        }
    })

    surName.addEventListener('focusout', e => {

        if (e.target.value === '') {
            if(e.target.parentElement.children[3]){
                e.target.parentElement.children[3].remove()
            }
            e.target.style.borderColor = "red";
            let emptyError = document.createElement('label')
            emptyError.classList.add('emptyError')
            emptyError.textContent = 'Please enter the surname'
            let insert1 = e.currentTarget.parentElement
            insert1.insertAdjacentElement('beforeend', emptyError)
        } else if (e.target.value.length < 5) {
            if(e.target.parentElement.children[3]){
                e.target.parentElement.children[3].remove()
            }
            e.target.style.borderColor = "red";
            let emptyError = document.createElement('label')
            emptyError.classList.add('emptyError')
            emptyError.textContent = 'Please enter no less then 5 symbols'
            let insert1 = e.currentTarget.parentElement
            insert1.insertAdjacentElement('beforeend', emptyError)
        } else {
            e.target.style.borderColor = "aquamarine";
            if(e.target.parentElement.children[3]){
                e.target.parentElement.children[3].remove()
            }
        }
    })

    datWid.addEventListener('focusout', e => {

        if (e.target.value === '') {
            if(e.currentTarget.children[2]){
                e.currentTarget.children[2].remove()
            }
            e.target.style.borderColor = "red";
            let emptyError = document.createElement('label')
            emptyError.classList.add('emptyError')
            emptyError.textContent = 'Please enter the date'
            let insert1 = e.currentTarget
            insert1.insertAdjacentElement('beforeend', emptyError)
        } else {
            e.target.style.borderColor = "aquamarine";
            if(e.currentTarget.children[2]){
                e.currentTarget.children[2].remove()
            }
        }
    })

    street.addEventListener('focusout', e => {

        if (e.target.value === '') {
            if(e.target.parentElement.children[3]){
                e.target.parentElement.children[3].remove()
            }
            e.target.style.borderColor = "red";
            let emptyError = document.createElement('label')
            emptyError.classList.add('emptyError')
            emptyError.textContent = 'Please enter the street name'
            let insert1 = e.currentTarget.parentElement
            insert1.insertAdjacentElement('beforeend', emptyError)
        } else if (e.target.value.length < 5) {
            if(e.target.parentElement.children[3]){
                e.target.parentElement.children[3].remove()
            }
            e.target.style.borderColor = "red";
            let emptyError = document.createElement('label')
            emptyError.classList.add('emptyError')
            emptyError.textContent = 'Please enter no less then 5 symbols'
            let insert1 = e.currentTarget.parentElement
            insert1.insertAdjacentElement('beforeend', emptyError)
        } else {
            e.target.style.borderColor = "aquamarine";
            if(e.target.parentElement.children[3]){
                e.target.parentElement.children[3].remove()
            }
        }
    })

    houseN.addEventListener('focusout', e => {

        if (e.target.value === '') {
            if(e.target.parentElement.children[3]){
                e.target.parentElement.children[3].remove()
            }
            e.target.style.borderColor = "red";
            let emptyError = document.createElement('label')
            emptyError.classList.add('emptyError')
            emptyError.textContent = 'Please enter the house number'
            let insert1 = e.currentTarget.parentElement
            insert1.insertAdjacentElement('beforeend', emptyError)
        } else {
            e.target.style.borderColor = "aquamarine";
            if(e.target.parentElement.children[3]){
                e.target.parentElement.children[3].remove()
            }
        }
    })    

    flatN.addEventListener('focusout', e => {

        if (e.target.value === '') {
            if(e.target.parentElement.children[3]){
                e.target.parentElement.children[3].remove()
            }
            e.target.style.borderColor = "red";
            let emptyError = document.createElement('label')
            emptyError.classList.add('emptyError')
            emptyError.textContent = 'Please enter the flat number'
            let insert1 = e.currentTarget.parentElement
            insert1.insertAdjacentElement('beforeend', emptyError)
        } else {
            e.target.style.borderColor = "aquamarine";
            if(e.target.parentElement.children[3]){
                e.target.parentElement.children[3].remove()
            }
        }
    }) 



    function preventConsecutive(el, evt) {
        if (el.value.length > 0) {
            var lastChar = el.value[el.value.length - 1];
            if ((lastChar === "-" && evt.keyCode === 45) || (lastChar === "_" && evt.keyCode === 95)) {
                evt.preventDefault();
                return;
            }
        }
    }

    let inputs = document.querySelectorAll('.checking')


let checking = document.querySelectorAll('.checking')
    	let manage = () => { 
    	let bt = document.getElementById('myButton');
        if (surName.value != '' && street.value != '' && houseN.value != '' && name1.value != '' && date1.value != '' && (radio1.checked || radio2.checked)) {
            bt.disabled = false;
            bt.style.backgroundColor = 'rgb(48, 55, 61)';
            bt.style.cursor='pointer';
            bt.addEventListener('mouseenter', e => {e.target.style.backgroundColor = 'rgb(82, 90, 97)';})
            bt.addEventListener('mouseleave', e => {e.target.style.backgroundColor = 'rgb(48, 55, 61)';})
}  else {
            bt.disabled = true;
            bt.style.backgroundColor = 'rgb(82, 90, 97)';
            bt.style.cursor='not-allowed';
        }
    }
manage()


    function checkBoxLimit() {
        var checkBoxGroup = document.querySelectorAll('.check2')
        var limit = 2;
        for (var i = 0; i < checkBoxGroup.length; i++) {
            checkBoxGroup[i].onclick = function () {
                var checkedcount = 0;
                for (var i = 0; i < checkBoxGroup.length; i++) {
                    checkedcount += (checkBoxGroup[i].checked) ? 1 : 0;
                }
                if (checkedcount > limit) {
                    console.log("You can select maximum of " + limit + " checkboxes.");
                    alert("You can select maximum of " + limit + " gifts.");
                    this.checked = false;

                }
            }
        }
    }
    checkBoxLimit()