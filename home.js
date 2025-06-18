document.addEventListener('DOMContentLoaded', () => {
    // Handle demo button click
    document.getElementById('tryDemo').addEventListener('click', () => {
        // Launch the Python script
        fetch('/launch-demo', {
            method: 'POST'
        })
        .then(response => response.json())
        .then(data => console.log('Demo launched:', data))
        .catch(error => console.error('Error:', error));
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                const section = document.querySelector(this.getAttribute('href'));
                section.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});