function initMouseTracking() {
    const cards = document.querySelectorAll('.code-embed');

    cards.forEach(card => {
        let targetX = 0;
        let targetY = 0;
        let currentX = 0;
        let currentY = 0;

        function updateTransform() {
            currentX += (targetX - currentX) * 0.1;
            currentY += (targetY - currentY) * 0.1;

            card.style.transform = `perspective(1000px) rotateX(${currentX}deg) rotateY(${currentY}deg) translateZ(10px)`;
            requestAnimationFrame(updateTransform);
        }
        requestAnimationFrame(updateTransform);

        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            let factor = 10;
            if (card.classList.contains('project-card')) {
                factor = 25;
            }

            targetX = (y - centerY) / factor;
            targetY = (centerX - x) / factor;
        });

        card.addEventListener('mouseleave', () => {
            targetX = 0;
            targetY = 0;
        });
    });
}

setTimeout(initMouseTracking, 1000);
