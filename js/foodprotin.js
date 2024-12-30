const proteinRequirements={
    esseysport: [.8, 1.0],
    massel: [1.6, 2.2],
    tennis: [1.4, 1.8],
    football:[1.4, 1.8],
    running: [1.2, 1.4],
};

function showQuestionMenu() {
    const selectedSport = document.getElementById("sports").value;

    if (selectedSport) {
        const questionMenu = `
            <label for="weight">أدخل وزنك (kg):</label>
            <input type="number" id="weight" name="weight" min="1" placeholder="مثال :69" required>
            <button type="button" onclick="calculateProtein()">احسب</button>
        `;
        
        document.getElementById("QustionMenu").innerHTML = questionMenu;
        document.getElementById("result").textContent = ""; // Clear result area
    } else {
        document.getElementById("QustionMenu").innerHTML = ""; // Clear question menu if no sport is selected
    }
};
  
function calculateProtein(){
    const sport=document.getElementById("sports").value;
    const weight = parseFloat(document.getElementById("weight").value);

    const [minProtein, maxProtein] = proteinRequirements[sport];
    const minIntake = (minProtein * weight).toFixed(2);
    const maxIntake = (maxProtein * weight).toFixed(2);

    document.getElementById("result").textContent = `${minIntake}g و${maxIntake}g. البروتين الذي تحتاجه يوميًا يكون بين `;
    document.getElementById("result").style.color='white'; 
    if (isNaN(weight) || weight <= 0) {
        alert("Please enter a valid weight.");
        return;
    }           
 };