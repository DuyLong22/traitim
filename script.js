document.addEventListener('DOMContentLoaded', () => {
    // Chọn container để thêm trái tim vào
    const heartContainer = document.querySelector('.heart-container');

    function createHeart() {
        const heartCount = Math.floor(Math.random() * 4) + 2;  // Tạo từ 2 đến 5 trái tim
    
        for (let i = 0; i < heartCount; i++) {
            const heart = document.createElement('div');
            heart.classList.add('heart');
            heart.style.left = Math.random() * 100 + 'vw';
            heart.style.animationDuration = Math.random() * 3 + 7 + 's';
            heartContainer.appendChild(heart);
    
            setTimeout(() => {
                heart.remove();
            }, 10000);
        }
    }

    // Cứ mỗi 0.5 giây tạo ra một trái tim mới
    setInterval(createHeart, 100);
});

