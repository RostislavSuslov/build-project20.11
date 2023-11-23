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
   
        saleItem.forEach((sales, index) =>{
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
}
document.querySelector('.custom-modal') ? installModal() : false;


//!!! data-modal="modal-2

// function installModal() {
//     const body = document.body;
//     const callModalBtns = document.querySelectorAll("[data-modal]");
//     const modalClose = document.querySelectorAll('.modal-close, .animate-box')
//     const modalOverlay = document.querySelectorAll('.modal')

//     const overflowHiddenOn = (element) => element.classList.add('overflow-hidden');
//     const overflowHiddenOff = (element) => element.classList.remove('overflow-hidden');
//     const displayBlock = (element) => element.style.display = "block";

//     const closeModal = () => {
//         modalOverlay.forEach(item => item.style.display = "none");
//         overflowHiddenOff(body);
//     }

//     const getDataAttr = (selector) => selector.forEach(selector => {

//         selector.addEventListener('click', (event) => {
//             event.preventDefault();

//             let id = selector.getAttribute('data-modal');
//             const thisModal = document.querySelector("#" + id);

//             displayBlock(thisModal);
//             overflowHiddenOn(body);
//         });
//     });

//    getDataAttr(callModalBtns)

//     modalClose.forEach(btnClose => {
//         btnClose.addEventListener('click', () => {
//             closeModal();
//         })
//     })
//     window.onclick = (event) => modalOverlay.forEach(item => event.target == item ? closeModal() : false)

// }
// document.querySelector('.modal') ? installModal() : false;
