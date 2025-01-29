<script>
    fetch('https://api64.ipify.org?format=json')
        .then(response => response.json())
        .then(data => {
            document.getElementById('ip-address').textContent = data.ip;
        })
        .catch(error => {
            document.getElementById('ip-address').textContent = 'Unable to fetch IP';
        });
</script>
