let author, imageLink, title, price, description, mainObj;

fetch("./books.json")
    .then(response => {
        return response.json();
    })
    .then(data => {
        author = data.author;
        imageLink = data.imageLink;
        title = data.title;
        price = data.price;
        description = data.description;
        mainObj = data;
        bookObj();
    });

const main = document.querySelector('main')
const wraper = document.createElement('div')
wraper.classList.add("wraper")

const header = document.createElement('div')
header.classList.add('header')
wraper.appendChild(header)
const headImg = document.createElement('img')
headImg.classList.add("headImg")
headImg.src = "./images/book shop1.png"
headImg.alt = 'Shop image'
header.appendChild(headImg)
const shoptitle = document.createElement('h1')
shoptitle.classList.add('title')
shoptitle.textContent = 'Welcome to amazing book shop!'
header.insertAdjacentElement("beforeend", shoptitle)

const bookShop = document.createElement('div')
bookShop.classList.add('bookShop')
wraper.appendChild(bookShop)

const catalog = document.createElement('div')
catalog.classList.add('catalog')
bookShop.appendChild(catalog)



const catalogheader = document.createElement('h2')
catalogheader.classList.add('catalogheader')
catalogheader.textContent = "List of Books"
catalog.appendChild(catalogheader)


const order = document.createElement('div')
order.classList.add('order')
order.id = 'dest_copy'
bookShop.appendChild(order)



let bookObj = function () {
    function addKeyValue(obj, key, data) {
        obj[key] = data;
    }
    mainObj.map(function (person, index) {
        return addKeyValue(person, 'Key', index)
    });

    for (let prop in mainObj) {
        const cardContainer = document.createElement('div')
        cardContainer.classList.add('card1')
        catalog.appendChild(cardContainer)

        const card = document.createElement('div')
        card.classList.add('card')
        card.classList.add('fill')
        card.classList.add(`id${prop}`)
        card.id = `${prop}`
        card.draggable = 'true'
        cardContainer.appendChild(card)

        const crdImg = document.createElement('img')
        crdImg.classList.add("crdImg")
        crdImg.classList.add(`id${prop}`)
        crdImg.src = `${mainObj[prop].imageLink}`
        crdImg.alt = 'Shop image'
        card.appendChild(crdImg)

        const cardcontent = document.createElement('div')
        cardcontent.classList.add('cardcontent')
        cardcontent.classList.add(`id${prop}`)
        card.appendChild(cardcontent)

        const authorName = document.createElement('h4')
        authorName.classList.add('authorName')
        authorName.classList.add(`id${prop}`)
        authorName.textContent = mainObj[prop].author
        cardcontent.appendChild(authorName)

        const titleName = document.createElement('h3')
        titleName.classList.add('titleName')
        titleName.classList.add(`id${prop}`)
        titleName.textContent = mainObj[prop].title
        cardcontent.appendChild(titleName)

        const priceName = document.createElement('h3')
        priceName.classList.add('priceName')
        priceName.classList.add(`id${prop}`)
        priceName.textContent = `Price: ${mainObj[prop].price}$`
        cardcontent.appendChild(priceName)

        const buttonsDiv = document.createElement('div')
        buttonsDiv.classList.add('buttonsDiv')
        cardContainer.appendChild(buttonsDiv)

        const addToBag = document.createElement('button')
        addToBag.classList.add('addToBag')
        addToBag.classList.add('move' + [prop])
        addToBag.innerHTML = 'Add to bag'
        buttonsDiv.appendChild(addToBag)

        const showMore = document.createElement('button')
        showMore.classList.add('showMore')
        showMore.innerHTML = 'Show more'
        showMore.disabled = false
        buttonsDiv.appendChild(showMore)





    }

    const draggables = document.querySelectorAll('.fill')
    const container = document.querySelector('.order')

    draggables.forEach(draggable => {
        moveCards(draggable)
    })
    container.addEventListener('dragover', (e) => {
        e.preventDefault()

        e.target.classList.add('orderCard')
        document.querySelector('.confirm').style.display = "flex";
    })

    let handler = function (e) {
        
    }


    container.addEventListener('drop', e => {
        e.preventDefault()
        let draggingCard = document.querySelector('.dragging').cloneNode(true)
        draggingCard.classList.add('blabla')
        container.insertAdjacentElement('afterbegin', draggingCard)

        document.querySelectorAll(".blabla").forEach(item => {
            const deleteBtn = document.createElement('button')
            deleteBtn.classList.add('deleteBtn')
            deleteBtn.innerHTML = 'X'
            item.appendChild(deleteBtn)
        })


        document.querySelectorAll('.deleteBtn').forEach(item => {
            item.addEventListener('click', e => {
                let gio4 = e.currentTarget.parentElement.id
                let findindex = sum.findIndex(object => {
                    return object === mainObj[gio4].price
                })
                sum.splice(findindex, 1)
                titleName2.textContent = `Price: ${sum.reduce((partialSum, a) => partialSum + a, 0)}`
                e.target.parentElement.remove()

                function hidePrice() {
                    if (sum.length == 0) {
                        document.querySelector('.confirm').style.display = "none";
                    }
                }
                hidePrice()
            })
        })
    })



    function moveCards(card) {
        card.addEventListener('dragstart', (e) => {
            card.classList.add('dragging')


        })
        card.addEventListener('dragend', (e) => {
            card.classList.remove('dragging')
            let gio4 = e.currentTarget.id
            sum.push(mainObj[gio4].price)
            titleName2.textContent = `Price: ${sum.reduce((partialSum, a) => partialSum + a, 0)}`
        })
    }

    document.querySelectorAll(".addToBag").forEach(item => {


        item.addEventListener('click', e => {
            let gio5 = e.currentTarget.parentElement.parentElement.firstChild.id
            let draggingCard = document.getElementById('' + gio5).cloneNode(true)
            draggingCard.classList.add('blabla')
            container.insertAdjacentElement('afterbegin', draggingCard)
            document.querySelector('.confirm').style.display = "flex";
 
            const deleteBtn = document.createElement('button')
            deleteBtn.classList.add('deleteBtn')
            deleteBtn.innerHTML = 'X'
            let msa = document.querySelector('.blabla')
            msa.appendChild(deleteBtn)
            sum.push(mainObj[gio5].price)
            titleName2.textContent = `Price: ${sum.reduce((partialSum, a) => partialSum + a, 0)}`
           removethings()
        })

    })



 let removethings = function(){
    document.querySelectorAll('.deleteBtn').forEach(item => {
        item.addEventListener('click', b => {
            b.preventDefault()
            b.stopImmediatePropagation();
            let gio4 = b.currentTarget.parentElement.id
          
            let findindex = sum.findIndex(object => {
                return object === mainObj[gio4].price
            })
            sum.splice(findindex, 1)
            titleName2.textContent = `Price: ${sum.reduce((partialSum, a) => partialSum + a, 0)}`

            b.target.parentElement.remove()

            function hidePrice() {
                if (sum.length == 0) {
                    document.querySelector('.confirm').style.display = "none";
                }
            }
            hidePrice()
        })
    })
 }

 let mainCard = document.querySelector('.card1')

 document.querySelectorAll('.showMore').forEach(item => {
     item.addEventListener('click', e => {
         e.currentTarget.disabled = true
 
         let gio3 = e.currentTarget.parentElement.parentElement.firstChild.id
        const showDiv = document.createElement('div')
        showDiv.classList.add('showDiv')
        e.currentTarget.parentElement.parentElement.appendChild(showDiv)

        const description = document.createElement('h3')
        description.classList.add('description')
        description.textContent = mainObj[gio3].description
        showDiv.appendChild(description)

        const closeBtn = document.createElement('button')
        closeBtn.classList.add('closeBtn')
        closeBtn.innerHTML = 'Close'
        showDiv.appendChild(closeBtn)


        
        let closeDesc = document.querySelectorAll('.closeBtn').forEach(thing => {

            thing.addEventListener('click', c => {
                let blass = c.currentTarget.parentElement.parentElement.children[1].children[1].disabled = false
                let closeSelect = c.target.parentElement
                c.target.parentElement.remove()
                
            })
            

        })
     })
 })

    let sum = []
    const confirm = document.createElement('div')
    confirm.classList.add('confirm')
    order.insertAdjacentElement('beforeend', confirm)
    document.querySelector('.confirm').style.display = "none";
    const titleName2 = document.createElement('h3')
    titleName2.classList.add('titleName')
    titleName2.classList.add('Price')
    titleName2.textContent = `Price:`
    confirm.appendChild(titleName2)
    const addToBag1 = document.createElement('button')
    addToBag1.classList.add('confirmBtn')
    addToBag1.classList.add('move')
    addToBag1.innerHTML = 'Confirm Order'
    addToBag1.addEventListener("click", function(){
        location = "./delivery/delivery.html"; 
      });

    confirm.appendChild(addToBag1)
}


main.appendChild(wraper)
