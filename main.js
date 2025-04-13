const buttonShow = document.getElementById('bShow');
const modal = document.getElementById('popupModal');
const closeModal = document.getElementById('btnClose');

buttonShow.addEventListener('click', () => {
    modal.style.display = "block";
});

closeModal.addEventListener('click', () => {
    modal.style.display = "none";
});

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});
