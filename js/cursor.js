document.addEventListener('DOMContentLoaded', function() {
    const cursorOutline = document.querySelector('.cursor-outline');
    const cursorDot = document.querySelector('.cursor-dot');

    // Track mouse movement and position cursor
    window.addEventListener('mousemove', function(e) {
        const posX = e.clientX;
        const posY = e.clientY;

        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;

        cursorOutline.animate({
            left: `${posX}px`,
            top: `${posY}px`,
        }, {
            duration: 500,
            fill: 'forwards',
        })
    })

});