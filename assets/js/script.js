const installCalcHeight =()=> {
    const buildNav = document.querySelector('.builds-nav')
    const buildInfo = document.querySelector('.builds-info') 

    function reportWindowSize() {
        const buildNavHeight = buildNav.offsetHeight
        const buildInfoHeight = buildInfo.offsetHeight
        const calcHeight = buildNavHeight - buildInfoHeight - 15;
        buildInfo.style.top = calcHeight + "px" ;
    } reportWindowSize()

    window.onresize = reportWindowSize;
}

document.querySelector('.builds-list') ? installCalcHeight() : null;

const installBuilds =()=> {
    const buildItem = document.querySelectorAll('.build-item path')
    const buildItemAdress = document.querySelector('#adress')
    const buildItemStages = document.querySelector('#stages')
    const buildItemFlats = document.querySelector('#flats')

    buildItem.forEach(item => {
        let itemFlats = item.getAttribute('data-flats')
        
        if( Number(itemFlats) === 0 ) {
            item.closest('a').classList.add('sales')
        }

        const saleItem = document.querySelectorAll('.sales')
   
        saleItem.forEach((sales, index) => {
            sales.setAttribute('data-modal', 'modal-' + (index + 1))
        })

        item.addEventListener('mouseover', function () {
            const getItemAdress = item.getAttribute('data-adress')
            const getItemFloors = item.getAttribute('data-floors')
            const getItemFlats = item.getAttribute('data-flats')

            buildItemAdress.innerHTML = getItemAdress
            buildItemStages.innerHTML = getItemFloors
            buildItemFlats.innerHTML = getItemFlats
        })

        item.addEventListener('click', function(event){
           if(item.closest('.sales')){
                event.preventDefault();
           }
        })
    })
}

document.querySelector('.builds-list') ? installBuilds() : null;

function installModal() {
    const callModalBtns = document.querySelectorAll("[data-modal]");
    const customModal = document.querySelectorAll('.custom-modal')
    const closeModal = document.querySelectorAll('.close-modal')

    customModal.forEach((modal, index)=>{
        modal.setAttribute('id', 'modal-' + (index + 1))
    })

    callModalBtns.forEach((call, index) =>{
        call.addEventListener('click', function(){
            const callModal = document.querySelector('#modal-' + (index + 1))
            callModal.style.display = "flex";
            callModal.classList.add('show-modal')
        })
    })

    closeModal.forEach(closeBtn => {
        closeBtn.addEventListener('click', onCloseModal)
    })
  
    function onCloseModal() {
        const openModal = document.querySelector('.show-modal')
        openModal.classList.remove('show-modal')
        openModal.style.display = "none";
    } 

    window.addEventListener("keydown", function(event){
        if (event.key === "Escape"){
            onCloseModal()
        }
    });
 
 
    window.onclick = (event) => customModal.forEach(item => {
        event.target == item ? onCloseModal() : false
        }
    );
}
document.querySelector('.custom-modal') ? installModal() : false;


const flatArray = [{
    id: 0,
    house: "2",
    floor: "1",
    rooms: "3",
    square: "82.3 м²",
    price: "700$",
    priceTotal: "52500$",
    flatNumber: 1,
    status: "booking",
},
{
    id: 1,
    house: "2",
    floor: "1",
    rooms: "2",
    square: "60,7 м²",
    price: "700$",
    priceTotal: "42000$",
    flatNumber: 2,
    status: "sold",
},
{
    id: 2,
    house: "2",
    floor: "1",
    rooms: "3",
    square: "60,7 м²",
    price: "700$",
    priceTotal: "42000$",
    flatNumber: 3,
    status: "action",
},
{
    id: 3,
    house: "2",
    floor: "1",
    rooms: "3",
    square: "82 м²",
    price: "700$",
    priceTotal: "52500$",
    flatNumber: 4,
    status: "booking",
},
{
    id: 4,
    house: "2",
    floor: "1",
    rooms: "3",
    square: "79.7 м²",
    price: "700$",
    priceTotal: "55790$",
    flatNumber: 5,
    status: "booking",
},
{
    id: 5,
    house: "2",
    floor: "1",
    rooms: "1",
    square: "39.2 м²",
    price: "700$",
    priceTotal: "27440$",
    flatNumber: 6,
    status: "free",
},
{
    id: 6,
    house: "2",
    floor: "1",
    rooms: "1",
    square: "40.0 м²",
    price: "700$",
    priceTotal: "29400$",
    flatNumber: 7,
    status: "booking",
},
{
    id: 7,
    house: "2",
    floor: "1",
    rooms: "1",
    square: "39.2 м²",
    price: "700$",
    priceTotal: "27440$",
    flatNumber: 8,
    status: "booking",
},
{
    id: 8,
    house: "2",
    floor: "1",
    rooms: "3",
    square: "79.3 м²",
    price: "700$",
    priceTotal: "55510$",
    flatNumber: 9,
    status: "action",
},
]

// const dog = {
//     age: 3,
//     hair: "red"
// }

// console.log(dog.age);

 
window.addEventListener('load', function() {
    function installFloorPlan() {

        const flats = document.querySelectorAll('.flat');
        const flatInfo = document.querySelector('.flat-info')
        console.log(flatInfo);

        const faltObj = [{
            id: 4,
            house: "2",
            floor: "1",
            rooms: "3",
            square: "79.7 м²",
            price: "700$",
            priceTotal: "55790$",
            flatNumber: 5,
            status: "action",
        }
    ]

        const renderInfo = (array) => {
            console.log(array);
            const flatInformation = array.map(item => {
                return (`
                <div class="flat-item">
                    Номер дома : <b>${item.house}</b>
                </div>
                <div class="flat-item">
                    Этаж : <b>${item.floor}</b>
                </div>
                <div class="flat-item">
                    Кол-во комнат : <b>${item.rooms}</b>
                </div>
                <div class="flat-item">
                    Площадь : <b>${item.square}</b>
                </div>
                <div class="flat-item">
                    Цена за м² : <b>${item.price}</b>
                </div>
                <div class="flat-item">
                    Цена за квартиру : <b>${item.priceTotal}</b>
                </div>
                <div class="flat-item">
                    Номер квартиры : <b>${item.flatNumber}</b>
                </div>
                <div class="flat-item">
                    Статус квартиры : <b>${item.status}</b>
                </div>
                
                `)
            })
            flatInfo.innerHTML = flatInformation;
        }
        renderInfo(faltObj);

        const removeActiveClass =()=> flats.forEach(item => {
            item.classList.remove('active');
        })

        flats.forEach(flat => {
            flat.addEventListener('mouseover', function(){
                removeActiveClass();
                flat.classList.add('active')

                const thisFlat = flat.getAttribute('id')
                console.log(thisFlat);

                const flatNumber = flatArray.filter(item => item.flatNumber === Number(thisFlat))
                console.table(flatNumber);

                renderInfo(flatNumber);
            })



            if (flat.classList.contains('booking')) {
                flat.querySelector('.flat-status').innerHTML = "Бронь";
            } else if (flat.classList.contains('action')) {
                flat.querySelector('.flat-status').innerHTML = "Акция";
            } else if (flat.classList.contains('sold')){
                flat.querySelector('.flat-status').innerHTML = "Продано";
            } else {
                flat.querySelector('.flat-status').innerHTML = "Свободна";
            }
        })
    }
    document.querySelector('.page-floor') ? installFloorPlan() : null;
})
