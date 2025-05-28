document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        card.addEventListener('click', () => {
            card.classList.toggle('is-flipped');
        });

        // Optional: Add functionality to the "Aprende Más" button
        const actionButton = card.querySelector('.action-button');
        if (actionButton) {
            actionButton.addEventListener('click', (event) => {
                event.stopPropagation(); // Prevent the card from flipping back when clicking the button
                const message = actionButton.parentElement.querySelector('p').textContent;
                alert('¡Excelente! Aquí podrías expandir más sobre: ' + message);
                // In a real application, you might redirect to another page, open a modal, etc.
            });
        }
    });
});
