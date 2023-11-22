const body = document.body;
const themeToggleBtn = document.getElementById('theme-toggle-btn');
const icons = document.querySelectorAll('.icons');
const paragraphs = document.querySelectorAll('.left-paragraph, .right-paragraph');
const footer = document.querySelector('footer');
const header = document.querySelector('header');

let lastScrollTop = 0;

// Function to handle scroll events
function handleScroll() {
    const st = window.pageYOffset || document.documentElement.scrollTop;

    if (st > lastScrollTop) {
        // Scrolling down
        header.classList.add('hidden');
        footer.classList.remove('visible');
        paragraphs.forEach((paragraph) => {
            paragraph.classList.add('hidden');
        });
    } else {
        // Scrolling up
        header.classList.remove('hidden');
        footer.classList.add('visible');
        paragraphs.forEach((paragraph) => {
            paragraph.classList.remove('hidden');
        });
    }

    lastScrollTop = st;
}

// Event listener for scroll events
window.addEventListener('scroll', handleScroll);

// Function to toggle the theme
function toggleTheme() {
    body.classList.toggle('light-theme');
    body.classList.toggle('dark-theme');

    // Check the current theme and update the images
    const currentTheme = body.classList.contains('light-theme') ? 'light' : 'dark';
    updateIconImages(currentTheme);
}

// Function to update the images based on the theme
function updateIconImages(theme) {
    icons.forEach((icon) => {
        const iconName = icon.getAttribute('data-icon');
        const imagePath = theme === 'light' ? `images/svg/${iconName}.svg` : `images/${iconName}.png`;
        icon.src = imagePath;
    });
}

// Event listener for theme toggle button
themeToggleBtn.addEventListener('click', toggleTheme);

// Initial call to set initial icon images based on the default theme
updateIconImages(body.classList.contains('light-theme') ? 'light' : 'dark');

// Function to reveal paragraphs based on scroll position
function revealParagraphs() {
    paragraphs.forEach((paragraph) => {
        const rect = paragraph.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        if (rect.top < windowHeight) {
            paragraph.classList.add('appear');
        }
    });
}

// Event listener for scroll events to reveal paragraphs
window.addEventListener('scroll', revealParagraphs);

// Call the function initially to check visibility on page load
revealParagraphs();
