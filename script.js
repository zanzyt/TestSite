// Check for the user's stored theme in localStorage and apply it
const body = document.body;
const lightModeBtn = document.getElementById('light-mode-btn');
const darkModeBtn = document.getElementById('dark-mode-btn');
const cookiesConsentBanner = document.getElementById('cookies-consent');

// Check if the user has accepted cookies
if (localStorage.getItem('cookiesAccepted') === 'true') {
    // Apply the theme from localStorage
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark') {
        body.classList.add('dark-mode');
        body.classList.remove('light-mode');
    } else {
        body.classList.add('light-mode');
        body.classList.remove('dark-mode');
    }
}

// Theme Toggle Event Listeners
lightModeBtn.addEventListener('click', () => {
    body.classList.remove('dark-mode');
    body.classList.add('light-mode');
    if (cookiesConsentBanner.style.display !== 'none') {
        localStorage.setItem('theme', 'light');
    }
});

darkModeBtn.addEventListener('click', () => {
    body.classList.remove('light-mode');
    body.classList.add('dark-mode');
    if (cookiesConsentBanner.style.display !== 'none') {
        localStorage.setItem('theme', 'dark');
    }
});

// Cookie consent handling
const acceptCookiesBtn = document.getElementById('accept-cookies');
acceptCookiesBtn.addEventListener('click', () => {
    localStorage.setItem('cookiesAccepted', 'true');
    cookiesConsentBanner.style.display = 'none';  // Hide the cookies banner
});

// Fetch IP Address and Location using ipinfo.io
fetch('ipinfo.io/79.161.38.185?token=5aa1a8d7027de0"')  // <-- Replace with your IPInfo token
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
