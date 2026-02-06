document.addEventListener('DOMContentLoaded', () => {
    const yesBtn = document.getElementById('yes-btn');
    const noBtn = document.getElementById('no-btn');
    const noBtnWrapper = document.getElementById('no-btn-wrapper');

    // Handle "Si" button click
    yesBtn.addEventListener('click', () => {
        window.location.href = 'yes.html';
    });

    // Initialize Wrapper Dimensions to hold the space
    const initWrapper = () => {
        // We only set this once or if the button is NOT moving yet
        if (noBtn.style.position !== 'fixed') {
            const width = noBtn.offsetWidth;
            const height = noBtn.offsetHeight;
            noBtnWrapper.style.width = `${width}px`;
            noBtnWrapper.style.height = `${height}px`;
        }
    };
    
    // Call init initially
    initWrapper();
    
    // Also update on resize if the button hasn't moved yet (optional, but good for responsiveness)
    window.addEventListener('resize', initWrapper);

    // Handle "No" button interaction
    const moveButton = () => {
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;
        
        const btnWidth = noBtn.offsetWidth;
        const btnHeight = noBtn.offsetHeight;
        
        // Calculate safe boundaries (keeping button fully inside viewport)
        // Add padding to avoid edges
        const padding = 20;
        const maxLeft = viewportWidth - btnWidth - padding;
        const maxTop = viewportHeight - btnHeight - padding;

        const randomLeft = Math.max(padding, Math.random() * maxLeft);
        const randomTop = Math.max(padding, Math.random() * maxTop);

        // Apply fixed position
        noBtn.style.position = 'fixed';
        noBtn.style.left = `${randomLeft}px`;
        noBtn.style.top = `${randomTop}px`;
        
        // Reset transform if any (from CSS hover effects or previous attempts)
        noBtn.style.transform = 'none';
        
        // Ensure wrapper keeps its size (it should retain the size set by initWrapper)
    };

    noBtn.addEventListener('mouseover', moveButton);
    
    // Also handle click/touch as fallback
    noBtn.addEventListener('click', (e) => {
        e.preventDefault();
        moveButton();
    });
});