// Carousel functionality
let currentIndex = 0;
const images = document.querySelectorAll('.carousel-images img');
const totalImages = images.length;
const carouselContainer = document.querySelector('.carousel-images');

document.getElementById('next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalImages;  // Loop back to the first image after the last one
    updateCarousel();
});

document.getElementById('prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;  // Loop back to the last image after the first one
    updateCarousel();
});

function updateCarousel() {
    const offset = -currentIndex * 100;  // 100% because each image takes up the full container width
    carouselContainer.style.transform = `translateX(${offset}%)`;
}

// Quiz functionality
document.getElementById('quiz-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const answers = {
        q1: 'A', // Correct answer for question 1
        q2: 'A', // Correct answer for question 2
        q3: 'B'  // Correct answer for question 3
    };

    let score = 0;
    const userAnswers = new FormData(this);

    // Check answers
    for (let [question, answer] of userAnswers.entries()) {
        if (answers[question] === answer) {
            score++;
        }
    }

    const resultText = `You got ${score} out of 3 correct!`;
    document.getElementById('quiz-result').textContent = resultText;
});

// Joke fetching functionality
document.getElementById('fetch-joke').addEventListener('click', async () => {
    const jokeText = document.getElementById('joke-text');
    try {
        const response = await fetch('https://v2.jokeapi.dev/joke/Programming?type=single');
        const data = await response.json();
        jokeText.textContent = data.joke || 'No joke found!';
    } catch (error) {
        jokeText.textContent = 'Failed to fetch a joke.';
    }
});
