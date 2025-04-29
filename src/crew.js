document.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch('data.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        const crewData = data.crew;

        const dotButtons = document.querySelectorAll('.dot-indicator');
        const crewRoleElement = document.getElementById('crew-role');
        const crewNameElement = document.getElementById('crew-name');
        const crewBioElement = document.getElementById('crew-bio');
        const crewImageElement = document.getElementById('crew-image');

        function updateCrewContent(index) {
            if (index < 0 || index >= crewData.length) {
                console.error(`Invalid crew index: ${index}`);
                return;
            }

            const selectedCrew = crewData[index];

            crewRoleElement.textContent = selectedCrew.role;
            crewNameElement.textContent = selectedCrew.name;
            crewBioElement.textContent = selectedCrew.bio;

            crewImageElement.src = selectedCrew.images.png;
            crewImageElement.alt = selectedCrew.name;

            dotButtons.forEach((button, btnIndex) => {
                if (btnIndex === index) {
                    button.classList.add('active');
                    button.setAttribute('aria-selected', 'true');
                } else {
                    button.classList.remove('active');
                    button.setAttribute('aria-selected', 'false');
                }
            });
        }

        dotButtons.forEach((button, index) => {
            button.addEventListener('click', () => {
                updateCrewContent(index);
            });
        });

        if (crewData && crewData.length > 0) {
            updateCrewContent(0);
        } else {
            console.error('No crew data found in data.json');
        }

    } catch (error) {
        console.error('Error loading or processing crew data:', error);
    }
});