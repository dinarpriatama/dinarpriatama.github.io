const canvas = document.getElementById('signatureCanvas');
const ctx = canvas.getContext('2d');

// Set canvas size
canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;

let isDrawing = false;

// Handle mouse events
canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    ctx.beginPath();
    ctx.moveTo(e.offsetX, e.offsetY);
});

canvas.addEventListener('mousemove', (e) => {
    if (isDrawing) {
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.stroke();
    }
});

canvas.addEventListener('mouseup', () => {
    isDrawing = false;
    ctx.closePath();
});

canvas.addEventListener('mouseleave', () => {
    isDrawing = false;
    ctx.closePath();
});

// Handle touch events for mobile
canvas.addEventListener('touchstart', (e) => {
    isDrawing = true;
    const touch = e.touches[0];
    ctx.beginPath();
    ctx.moveTo(touch.clientX - canvas.getBoundingClientRect().left, touch.clientY - canvas.getBoundingClientRect().top);
    e.preventDefault(); // Prevent scrolling
});

canvas.addEventListener('touchmove', (e) => {
    if (isDrawing) {
        const touch = e.touches[0];
        ctx.lineTo(touch.clientX - canvas.getBoundingClientRect().left, touch.clientY - canvas.getBoundingClientRect().top);
        ctx.stroke();
    }
});

canvas.addEventListener('touchend', () => {
    isDrawing = false;
    ctx.closePath();
});

canvas.addEventListener('touchcancel', () => {
    isDrawing = false;
    ctx.closePath();
});

// Clear canvas function
function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
