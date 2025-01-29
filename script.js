document.getElementById("light-mode-btn").addEventListener("click", function() {
    document.body.classList.remove("dark-mode");
    document.body.classList.add("light-mode");
});

document.getElementById("dark-mode-btn").addEventListener("click", function() {
    document.body.classList.remove("light-mode");
    document.body.classList.add("dark-mode");
});

// Fetch IP Address
fetch('https://api64.ipify.org?format=json')
    .then(response => response.json())
    .then(data => {
        document.getElementById('ip-address').textContent = data.ip;
    })
    .catch(error => {
        document.getElementById('ip-address').textContent = 'Unable to fetch IP';
    });
