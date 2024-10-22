
// const {
// 	GoogleGenerativeAI,
// 	HarmCategory,
// 	HarmBlockThreshold,
// } = require("@google/generative-ai");
// const genAI = new GoogleGenerativeAI(process.env.GOOGLE_AI_API_KEY);

let displayElement = document.getElementById('arrayDisplay');




const classroomList = document.getElementById('classroomList');

function addClassroom(name, instructor, id) {
    const card = document.createElement('div');
    card.className = 'classroom-card';

    card.innerHTML = `
			<div id=classroomBox>
        <h3>${name}</h3>
        <p>Instructor: ${instructor}</p>
        <button class="join-button"> View</button>
    	</div>
		`;

    // Set a unique ID and click event for navigation
    card.id = id; 
  displayElement.innerHTML = defaulte.join('<br>');
    card.onclick = () => {
			
  			if (id==101){
          // displayElement.innerHTML = '<iframe id="red" width="560" height="315" src="red.png"> </iframe>';
					displayElement.innerHTML = class1.join('<br>');
					
					}
        else if (id==202){
				// put things that place the assigments on the side

					displayElement.innerHTML = class2.join('<br>');

				}
				else if (id==303){
					displayElement.innerHTML = class3.join('<br>');

				}
		
				}
			
			

    classroomList.appendChild(card);
}

const textInput = document.getElementById('textInput');
const aiSection = document.getElementById('aiSection');

textInput.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    event.preventDefault(); // Prevent the default newline behavior
    const userInput = textInput.value.trim();
    if (userInput) {
        // Clear the last entry if it exists
        const lastEntry = aiSection.lastElementChild;
        if (lastEntry) {
            aiSection.removeChild(lastEntry);
        }

        // Add the new input to the AI section
        aiSection.innerHTML += `<div>${userInput}</div>`;
        textInput.value = ''; // Clear the input after submitting
  }
  }
});
const class1= ['<iframe id="red" src="HW.pdf"> </iframe>',
               '<iframe id="yellow" width="300" height="100" src="yellow.jpg"> </iframe>', 
               '<iframe id="green" width="300" height="100" src="green.png"> </iframe>']
const class2= ['<iframe id="yellow" width="300" height="100" src="yellow.jpg"> </iframe>',
	             '<iframe id="green" width="300" height="100" src="green.png"> </iframe>', 
	              '<iframe id="red" width="300" height="100" src="red.png"> </iframe>']
const class3= ['<iframe id="green" width="300" height="100" src="green.png"> </iframe>',
	             '<iframe id="red" width="300" height="100" src="red.png"> </iframe>', 
	             '<iframe id="yellow" width="300" height="100" src="yellow.jpg"> </iframe>']
const defaulte=["None"] 

// BHAV Change the the src of each list to the assigment names and it will display the assigments

//  adding classrooms
addClassroom('Math 101', 'Mr. Smith', '101');
addClassroom('Science 202', 'Mrs. Johnson', '202');
addClassroom('History 303', 'Mr. Lee', '303');
