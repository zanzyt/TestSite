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

// Fetch IP Address and Location
fetch('https://ip-api.com/json/')
    .then(response => response.json())
    .then(data => {
        document.getElementById('ip-address').textContent = data.query; // Display IP address
        const city = data.city;
        const country = data.country;
        const latitude = data.lat;
        const longitude = data.lon;

        document.getElementById('city').textContent = `${city}, ${country}`;

        // Fetch Weather for the user's location
        fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m&current_weather=true`)
            .then(response => response.json())
            .then(weatherData => {
                const currentTemp = weatherData.current_weather.temperature;
                document.getElementById('weather').textContent = `${currentTemp}°C`;
            })
            .catch(() => {
                document.getElementById('weather').textContent = 'Unable to fetch weather';
            });
    })
    .catch(() => {
        document.getElementById('ip-address').textContent = 'Unable to fetch IP';
        document.getElementById('city').textContent = 'Unknown Location';
        document.getElementById('weather').textContent = 'Unknown Weather';
    });

// Dynamic Clock
function updateClock() {
    const now = new Date();
    document.getElementById('clock').textContent = now.toLocaleTimeString();
}

setInterval(updateClock, 1000);
updateClock();
