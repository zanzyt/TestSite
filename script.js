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
const latitude = 52.52; // Berlin latitude
const longitude = 13.41; // Berlin longitude

fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m`)
    .then(response => response.json())
    .then(data => {
        const weatherElement = document.getElementById('weather');
        const cityElement = document.getElementById('city');
        const currentTemp = data.hourly.temperature_2m[0]; // Fetching the first hourly temperature
        cityElement.textContent = "Berlin"; // You can modify this based on user location
        weatherElement.textContent = `${currentTemp}°C`;
    })
    .catch(() => {
        document.getElementById('weather').textContent = 'Unable to fetch weather';
    });
