const sheetId = '1OZC2I95TySyNYARE-AOcLoP4nrvfWqV0KmzRgBApevo'; // Your Google Sheet ID
const apiKey = 'AIzaSyDz9HqsN2K5orRCBSRQL46eU7hMWrXbp9E'; // Your Google API Key
const unsplashAccessKey = 'q-HPiupPOdFUgZESUDAuDfNAb1IxIyVXdLK1la9FmIM'; // Unsplash API Key

const properties = [
    'Abundance', 'Adaptability', 'Adoration', 'Amplification of energy', 'Balance', 'Balancing energies', 'Beauty', 'Boosting creativity', 'Boosting the immune system', 'Calming', 'Calmness', 'Clarity', 'Cleansing', 'Communication', 'Community', 'Compassion', 'Confidence', 'Connection to higher realms', 'Courage', 'Creativity', 'Determination', 'Dispelling negative energy', 'Dreaming', 'Emotional Balance', 'Emotional Healing', 'Emotional balance', 'Emotional healing', 'Emotions', 'Empathy', 'Empowerment', 'Encouragement', 'Endurance', 'Energy', 'Energy boosting', 'Energy cleansing', 'Enhancing concentration', 'Enhancing intuition', 'Enhancing psychic abilities', 'Enhancing survival instincts', 'Enhancing willpower', 'Flexibility', 'Focus', 'Grace', 'Grounding', 'Grounding Energy', 'Growth', 'Happiness', 'Harmony', 'Healing', 'Health', 'Heart Chakra', 'Heart Connection', 'Hope', 'Inner Wisdom', 'Introspection', 'Intuition', 'Justice', 'Knowledge', 'Longevity', 'Love', 'Loyalty', 'Luck', 'Manifestation', 'Motivation', 'New beginnings', 'Nurturing', 'Overcoming anger', 'Passion', 'Peace', 'Perseverance', 'Positivity', 'Practicality', 'Promise', 'Prosperity', 'Protection', 'Purification', 'Rebirth', 'Releasing negativity', 'Removing obstacles', 'Renewal', 'Resilience', 'Self-Confidence', 'Self-Esteem', 'Serenity', 'Spiritual Awakening', 'Spiritual Connection', 'Spiritual Fortitude', 'Spiritual Growth', 'Spiritual Insight', 'Spiritual Openness', 'Spiritual awareness', 'Spiritual growth', 'Stability', 'Stabilizing energy', 'Steadfastness', 'Strength', 'Stress relief', 'Success', 'Support', 'Survival', 'Transformation', 'Transition', 'Truth', 'Vitality', 'Wisdom', 'courage', 'creativity', 'divination', 'endurance', 'fertility', 'frugality', 'gaining favors', 'good fortune', 'grounding', 'growth', 'healing', 'health', 'intuition', 'love', 'manifestation', 'peace', 'prosperity', 'protection', 'psychic abilities', 'purification', 'resilience', 'stability', 'strength', 'tranquility', 'transformation'
];

$(document).ready(function() {
    console.log("Document loaded");
    $('#properties-select').select2({
        placeholder: 'Select Spiritual Properties',
        allowClear: true
    });

    // Sort properties alphabetically
    properties.sort();

    properties.forEach(prop => {
        const option = new Option(prop, prop, false, false);
        $('#properties-select').append(option);
    });

    console.log("Options added to select2");
});

async function fetchImage(query) {
    const response = await fetch(`https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&client_id=${unsplashAccessKey}`);
    const data = await response.json();
    if (data.results && data.results.length > 0) {
        return data.results[0].urls.small;
    }
    return 'https://via.placeholder.com/50'; // A placeholder image URL if no results are found
}

async function fetchSheetData() {
    const response = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/A1:D1000?key=${apiKey}`);
    const data = await response.json();
    console.log('Fetched Data:', data); // Log fetched data for debugging
    return data.values.slice(1).map(row => ({
        item: row[0],
        type: row[1],
        properties: row[2].split(', ').map(prop => prop.toLowerCase()), // Convert properties to lowercase
        imageUrl: row[3] || ''
    }));
}

async function findItems() {
    const selectedProperties = $('#properties-select').val().map(prop => prop.toLowerCase()); // Convert selected properties to lowercase
    console.log("Selected properties:", selectedProperties);
    const itemList = document.getElementById('item-list');
    itemList.innerHTML = '';

    const items = await fetchSheetData();
    console.log('Items:', items); // Log processed items for debugging

    if (selectedProperties.length > 0) {
        for (const property of selectedProperties) {
            const matchingItems = items.filter(item => item.properties.includes(property));
            if (matchingItems.length > 0) {
                const table = document.createElement('table');
                table.classList.add('property-table');
                const header = document.createElement('thead');
                header.innerHTML = `<tr class="property-header"><th>Select</th><th colspan="3">${property}</th></tr>`;
                table.appendChild(header);

                const body = document.createElement('tbody');

                const subCategories = { 'Crystal': [], 'Rock': [], 'Plant': [] };

                for (const item of matchingItems) {
                    subCategories[item.type].push(item);
                }

                for (const [type, items] of Object.entries(subCategories)) {
                    if (items.length > 0) {
                        const typeHeader = document.createElement('tr');
                        typeHeader.classList.add('type-header', type.toLowerCase());
                        typeHeader.innerHTML = `<th colspan="4">${type}</th>`;
                        body.appendChild(typeHeader);

                        for (const item of items) {
                            const imageUrl = item.imageUrl || await fetchImage(`${item.item} ${item.type}`);
                            const row = document.createElement('tr');
                            const itemLink = `<a href="https://www.google.com/search?tbm=isch&q=${encodeURIComponent(item.item)}" target="_blank">${item.item}</a>`;
                            row.innerHTML = `
                                <td><input type="checkbox" class="item-checkbox" data-item='${JSON.stringify({...item, imageUrl})}'></td>
                                <td><img src="${imageUrl}" alt="${item.item}" onclick="openModal('${imageUrl}', '${item.item}')"></td>
                                <td>${itemLink} (${item.type})</td>
                                <td>${item.properties.join(', ')}</td>
                            `;
                            body.appendChild(row);
                        }
                    }
                }

                table.appendChild(body);
                itemList.appendChild(table);
            }
        }
        document.getElementById('selection-section').style.display = 'block';
    } else {
        itemList.innerHTML = '<p>No components match your selected properties.</p>';
    }
}

// Modal functionality
function openModal(imageUrl, captionText) {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const caption = document.getElementById('caption');

    modal.style.display = "block";
    modalImg.src = imageUrl;
    caption.innerText = captionText;

    const span = document.getElementsByClassName('close')[0];
    span.onclick = function() { 
        modal.style.display = "none";
    }
}

// Close the modal when clicking anywhere outside of the modal content
window.onclick = function(event) {
    const modal = document.getElementById('imageModal');
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

// Event listener for checkbox change
document.addEventListener('change', function(event) {
    if (event.target.classList.contains('item-checkbox')) {
        updateSelectedItems();
    }
});

function updateSelectedItems() {
    const selectedItems = Array.from(document.querySelectorAll('.item-checkbox:checked')).map(checkbox => JSON.parse(checkbox.dataset.item));
    const selectedList = document.getElementById('selected-items');
    const propertiesList = document.getElementById('unique-properties');

    if (selectedList && propertiesList) {
        selectedList.innerHTML = '';
        const allProperties = new Set();

        selectedItems.forEach(item => {
            const listItem = document.createElement('li');
            listItem.textContent = `${item.item} (${item.type})`;
            selectedList.appendChild(listItem);

            item.properties.forEach(prop => allProperties.add(prop));
        });

        propertiesList.innerHTML = Array.from(allProperties).sort().join(', ');
    }
}

function showSelectedItems() {
    const selectedItems = Array.from(document.querySelectorAll('.item-checkbox:checked')).map(checkbox => JSON.parse(checkbox.dataset.item));
    const selectedTable = document.getElementById('selected-items-table');
    const propertiesList = document.getElementById('unique-properties');

    selectedTable.innerHTML = '';
    const allProperties = new Set();

    if (selectedItems.length > 0) {
        const table = document.createElement('table');
        table.classList.add('property-table');
        const header = document.createElement('thead');
        header.innerHTML = `<tr class="property-header"><th>Component</th><th>Image</th><th>Type</th><th>Properties</th></tr>`;
        table.appendChild(header);

        const body = document.createElement('tbody');

        selectedItems.forEach(item => {
            const row = document.createElement('tr');
            const itemLink = `<a href="https://www.google.com/search?tbm=isch&q=${encodeURIComponent(item.item)}" target="_blank">${item.item}</a>`;
            row.innerHTML = `
                <td>${itemLink}</td>
                <td><img src="${item.imageUrl}" alt="${item.item}" onclick="openModal('${item.imageUrl}', '${item.item}')"></td>
                <td>${item.type}</td>
                <td>${item.properties.join(', ')}</td>
            `;
            body.appendChild(row);

            item.properties.forEach(prop => allProperties.add(prop));
        });

        table.appendChild(body);
        selectedTable.appendChild(table);
    } else {
               selectedTable.innerHTML = '<p>No components selected.</p>';
    }

    propertiesList.innerHTML = Array.from(allProperties).sort().join(', ');

    document.getElementById('results-section').style.display = 'block';
    document.getElementById('spell-form').style.display = 'none';
    document.getElementById('selection-section').style.display = 'none';
}

function resetApp() {
    document.getElementById('spell-form').style.display = 'block';
    document.getElementById('selection-section').style.display = 'none';
    document.getElementById('results-section').style.display = 'none';
    document.getElementById('item-list').innerHTML = '';
    document.getElementById('selected-items-table').innerHTML = '';
    document.getElementById('unique-properties').innerHTML = '';
    $('#properties-select').val(null).trigger('change');
}

// Information message
const infoMessage = `
    <p>All of the crystals on the list are provided and available for selection at the booth. 
    However, all of the rocks and plants will need to be foraged from around the Starstruck Farms property.</p>
    <p>Gather the crystals you want, then respectfully scavenge the remaining components from the farm. 
    Once all of the components are inside the jar, seek out Jeff to perform a ritual with you. 
    Your spell jar will then be complete.</p>
`;

document.addEventListener('DOMContentLoaded', () => {
    const resultsSection = document.getElementById('results-section');
    const infoDiv = document.createElement('div');
    infoDiv.innerHTML = infoMessage;
    resultsSection.insertBefore(infoDiv, resultsSection.querySelector('button'));
});
