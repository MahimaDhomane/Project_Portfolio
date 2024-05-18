const photo = document.getElementById('photo');
const para = document.getElementById('para');

photo.addEventListener('click', () => {
    photo.classList.add('move-left');
    para.classList.add('fade-in');
});

document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', function (e) {
        const ripple = document.createElement('span');
        ripple.classList.add('ripple');
        
        const rect = button.getBoundingClientRect();
        ripple.style.left = `${e.clientX - rect.left}px`;
        ripple.style.top = `${e.clientY - rect.top}px`;
        
        button.appendChild(ripple);

        ripple.addEventListener('animationend', () => {
            ripple.remove();
        });
    });
});



