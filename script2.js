const displayElement = document.getElementById('arrayDisplay');
const classroomList = document.getElementById('classroomList');
const aiSection = document.getElementById('aiSection');
const textInput = document.getElementById('textInput');
const submitButton = document.getElementById('submitButton');

let currentSelectedCard = null; // Track the currently selected classroom

const class1 = [
    '<iframe id="red" src="HW.pdf"></iframe>',
    '<iframe id="yellow" width="300" height="100" src="yellow.jpg"></iframe>',
    '<iframe id="green" width="300" height="100" src="green.png"></iframe>'
];

const class2 = [
    '<iframe id="yellow" width="300" height="100" src="yellow.jpg"></iframe>',
    '<iframe id="green" width="300" height="100" src="green.png"></iframe>',
    '<iframe id="red" width="300" height="100" src="red.png"></iframe>'
];

const class3 = [
    '<iframe id="green" width="300" height="100" src="green.png"></iframe>',
    '<iframe id="red" width="300" height="100" src="red.png"></iframe>',
    '<iframe id="yellow" width="300" height="100" src="yellow.jpg"></iframe>'
];

function addClassroom(name, instructor, id) {
    const card = document.createElement('div');
    card.className = 'classroom-card';
    card.innerHTML = `
        <div id="classroomBox">
            <h3>${name}</h3>
            <p>Instructor: ${instructor}</p>
            <button class="join-button">View</button>
        </div>
    `;

    card.id = id;
    card.onclick = () => {
        // Reset the color of the previously selected card
        if (currentSelectedCard) {
            changeBoxColor(currentSelectedCard, '#f0f8ff'); // Original color
        }

        // Change color and update display for the clicked card
        changeBoxColor(card.querySelector('#classroomBox'), '#49d021');
        currentSelectedCard = card.querySelector('#classroomBox');

        if (id === '101') {
            displayElement.innerHTML = class1.join('<br>');
        } else if (id === '202') {
            displayElement.innerHTML = class2.join('<br>');
        } else if (id === '303') {
            displayElement.innerHTML = class3.join('<br>');
        }
    };

    classroomList.appendChild(card);
}

function changeBoxColor(box, color) {
    if (box) {
        box.style.backgroundColor = color; // Set the color of the specific classroomBox
    }
}

// Text input handling
textInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        if (event.shiftKey) {
            return; // Allow new line in textarea
        }
        event.preventDefault(); // Prevent the default newline behavior
        const userInput = textInput.value.trim();
        if (userInput) {
            // Create a new bubble for the user input
            const bubble = document.createElement('div');
            bubble.className = 'bubble';
            bubble.textContent = userInput;

            // Append the new bubble to the AI section
            aiSection.appendChild(bubble);
            textInput.value = ''; // Clear the input after submitting
        }
    }
});

// Button handling
submitButton.addEventListener('click', function() {
    const userInput = textInput.value.trim();
    if (userInput) {
        // Create a new bubble for the user input
        const bubble = document.createElement('div');
        bubble.className = 'bubble';
        bubble.textContent = userInput;

        // Append the new bubble to the AI section
        aiSection.appendChild(bubble);
        textInput.value = ''; // Clear the input after submitting
    }
});

// Adding classrooms
addClassroom('Math 101', 'Mr. Smith', '101');
addClassroom('Science 202', 'Mrs. Johnson', '202');
addClassroom('History 303', 'Mr. Lee', '303');
