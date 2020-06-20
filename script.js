const modal = document.getElementById('simple-modal');
const modalButton = document.getElementById('modal-button');
const closeButton = document.getElementById('close-button');

modalButton.addEventListener('click', openModal);

closeButton.addEventListener('click', closeModal);

window.addEventListener('click', clickOutside);

function openModal() {
    modal.style.display = 'block';
}

function closeModal() {
    modal.style.display = 'none';
}

function clickOutside(event) {
    if(event.target === modal) {
        modal.style.display = 'none';
    }
}