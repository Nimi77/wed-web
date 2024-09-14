const btn = document.querySelector('.rsvp-btn');
const btn2 = document.querySelector('.rsvp-btn2');
const modal = document.getElementById('modal');
const modall = document.getElementById('modall');

btn.onclick = function() {
    modal.style.display = 'block';
}
btn2.onclick = function(){
    modall.style.display ='block'
}
// When the user clicks anywhere outside of the modal, it closes
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }

    if (event.target === modall) {
        modall.style.display = 'none';
    }
}