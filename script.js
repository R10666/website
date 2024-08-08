document.addEventListener('mousemove', (event) => {
    const { clientX, clientY } = event;
    const { innerWidth, innerHeight } = window;
    const red = Math.round((clientX / innerWidth) * 255);
    const green = Math.round((clientY / innerHeight) * 255);
    const blue = 150;
    document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
});
