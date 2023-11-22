const numDots = 50;

    // Function to generate a random number within a range
    function getRandom(min, max) {
        return Math.random() * (max - min) + min;
    }

    // Function to create and animate dots
    function createDots() {
        const dotsContainer = document.createElement('div');
        dotsContainer.classList.add('dots-container');
        document.body.appendChild(dotsContainer);
        const theme = document.body.classList.contains('dark-theme') ? 'dark-theme' : 'light-theme';
    
        for (let i = 0; i < numDots; i++) {
            const dot = document.createElement('div');
            dot.classList.add('dot');
            dot.style.top = `${getRandom(0, 100)}vh`;
            dot.style.left = `${getRandom(0, 100)}vw`;
            dot.style.animationDuration = `${getRandom(5, 15)}s`;
            dot.style.animationDelay = `-${getRandom(0, 5)}s`;
            dotsContainer.appendChild(dot);
        }
    }

    // Call the function to create dots when the page loads
    window.onload = createDots;