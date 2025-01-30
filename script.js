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

// Weather API Integration (Open-Meteo)
const latitude = 51.5074; // London latitude
const longitude = -0.1278; // London longitude

fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`)
    .then(response => response.json())
    .then(data => {
        const weatherElement = document.getElementById('weather');
        const cityElement = document.getElementById('city');
        cityElement.textContent = 'London';
        weatherElement.textContent = `${data.current_weather.temperature}°C, ${data.current_weather.weathercode}`;
    })
    .catch(() => {
        document.getElementById('weather').textContent = 'Unable to fetch weather';
    });
