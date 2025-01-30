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

// Fetch IP Address and Location using ipinfo.io
fetch('https://ipinfo.io/json?token=YOUR_IPINFO_TOKEN')  // <-- Replace with your IPInfo token
    .then(response => response.json())
    .then(data => {
        document.getElementById('ip-address').textContent = data.ip; // Display IP
        const location = data.city ? `${data.city}, ${data.country}` : "Unknown Location";
        document.getElementById('city').textContent = location;

        // Extract Latitude and Longitude from "loc" (formatted as "lat,lon")
        const [latitude, longitude] = data.loc.split(',');

        // Fetch Weather for the user's location
        fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`)
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
