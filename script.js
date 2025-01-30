// Theme Toggle
const lightModeBtn = document.getElementById('light-mode-btn');
const darkModeBtn = document.getElementById('dark-mode-btn');
const body = document.body;

lightModeBtn.addEventListener('click', () => {
    body.classList.remove('dark-mode');
    body.classList.add('light-mode');
});

darkModeBtn.addEventListener('click', () => {
    body.classList.remove('light-mode');
    body.classList.add('dark-mode');
});

// Fetch IP Address
fetch('https://api.ipify.org?format=json')
    .then(response => response.json())
    .then(data => {
        document.getElementById('ip-address').textContent = data.ip;
    })
    .catch(() => {
        document.getElementById('ip-address').textContent = 'Unable to fetch IP';
    });

// Dynamic Clock
function updateClock() {
    const now = new Date();
    const clock = document.getElementById('clock');
    clock.textContent = now.toLocaleTimeString();
}

setInterval(updateClock, 1000);
updateClock();

// Weather API Integration
const apiKey = 'YOUR_OPENWEATHERMAP_API_KEY'; // Replace with your API key
const city = 'London'; // Replace with your city

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    .then(response => response.json())
    .then(data => {
        const weather = document.getElementById('weather');
        weather.textContent = `${data.main.temp}°C, ${data.weather[0].description}`;
    })
    .catch(() => {
        document.getElementById('weather').textContent = 'Unable to fetch weather';
    });
