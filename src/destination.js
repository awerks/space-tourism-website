document.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch('data.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        const destinations = data.destinations;

        const planetNavLinks = document.querySelectorAll('#planet-nav a');
        const planetImageWebp = document.querySelector('.planet-image picture source');
        const planetImagePng = document.querySelector('.planet-image picture img');
        const planetNameElement = document.getElementById('name');
        const planetDescriptionElement = document.getElementById('description');
        const planetDistanceElement = document.getElementById('distance');
        const planetTravelElement = document.getElementById('travel');

        function updateDestinationContent(planetName) {
            const selectedDestination = destinations.find(dest => dest.name.toLowerCase() === planetName.toLowerCase());

            if (selectedDestination) {
                planetNameElement.textContent = selectedDestination.name;
                planetDescriptionElement.textContent = selectedDestination.description;
                planetDistanceElement.textContent = selectedDestination.distance;
                planetTravelElement.textContent = selectedDestination.travel;

                planetImageWebp.srcset = selectedDestination.images.webp;
                planetImagePng.src = selectedDestination.images.png;
                planetImagePng.alt = selectedDestination.name;

                planetNavLinks.forEach(link => {
                    if (link.textContent.toLowerCase() === planetName.toLowerCase()) {
                        link.classList.add('active');
                        link.setAttribute('aria-selected', 'true');
                    } else {
                        link.classList.remove('active');
                        link.setAttribute('aria-selected', 'false');
                    }
                });
            } else {
                console.error(`Destination data not found for: ${planetName}`);
            }
        }

        planetNavLinks.forEach(link => {
            link.addEventListener('click', (event) => {
                event.preventDefault();
                const selectedPlanetName = link.textContent;
                updateDestinationContent(selectedPlanetName);
            });
        });

        if (destinations && destinations.length > 0) {
            updateDestinationContent(destinations[0].name);
        } else {
            console.error('No destination data found in data.json');
        }

    } catch (error) {
        console.error('Error loading or processing destination data:', error);
    }
});