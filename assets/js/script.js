const buildNav = document.querySelector('.builds-nav')
const buildInfo = document.querySelector('.builds-info') 

function reportWindowSize() {
    const buildNavHeight = buildNav.offsetHeight
    const buildInfoHeight = buildInfo.offsetHeight
    const calcHeight = buildNavHeight - buildInfoHeight - 15;
    buildInfo.style.top = calcHeight + "px" ;
} reportWindowSize()

window.onresize = reportWindowSize;



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

 

 

