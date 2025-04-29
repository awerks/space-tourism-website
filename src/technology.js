document.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch('data.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        const technologyData = data.technology;

        const indicatorButtons = document.querySelectorAll('.numbered-indicator');
        const techNameElement = document.querySelector('.left h1');
        const techDescriptionElement = document.querySelector('.left .content-text');
        const pictureElement = document.querySelector('.right picture');
        const imgPortraitSource = pictureElement.querySelector('source[media*="768px"]');
        const imgLandscapeSource = pictureElement.querySelector('source[media*="1000px"]');
        const fallbackImage = pictureElement.querySelector('img');

        function updateTechnologyContent(techName) {
            const selectedTech = technologyData.find(tech => tech.name.toLowerCase() === techName.toLowerCase());

            if (selectedTech) {
                techNameElement.textContent = selectedTech.name;
                techDescriptionElement.textContent = selectedTech.description;

                imgPortraitSource.srcset = selectedTech.images.portrait;
                imgLandscapeSource.srcset = selectedTech.images.landscape;
                fallbackImage.src = selectedTech.images.portrait;
                fallbackImage.alt = selectedTech.name;

                indicatorButtons.forEach(button => {
                    const buttonId = button.id.replace('-', ' ').toLowerCase();
                    const techNameLower = selectedTech.name.toLowerCase();

                    if (buttonId === techNameLower) {
                        button.classList.add('active');
                        button.setAttribute('aria-selected', 'true');
                    } else {
                        button.classList.remove('active');
                        button.setAttribute('aria-selected', 'false');
                    }
                });
            } else {
                console.error(`Technology data not found for: ${techName}`);
            }
        }

        indicatorButtons.forEach(button => {
            button.addEventListener('click', () => {
                const selectedTechName = button.id.replace('-', ' ');
                updateTechnologyContent(selectedTechName);
            });
        });

        if (technologyData && technologyData.length > 0) {
            updateTechnologyContent(technologyData[0].name);
        } else {
            console.error('No technology data found in data.json');
        }

    } catch (error) {
        console.error('Error loading or processing technology data:', error);
    }
});

