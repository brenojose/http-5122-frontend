// Custom object representing a list of champions for different lanes in League of Legends
var championList = {
    // Properties representing champions for each lane
    topLaner: ["Irelia", "Riven", "Fiora"],
    midLaner: ["Kai'sa", "Viktor", "Fizz"],
    botLaner: ["Caitlyn", "Zeri", "Miss Fortune"],
    // Array to store the selected champion
    selectedChampion: [],
    // Method to randomly select a champion for a specified lane
    championRoulette: function() {
        let championSelect = "";
        // Prompt the user until a valid lane is selected
        while (championSelect !== "top" && championSelect !== "mid" && championSelect !== "bot") {
            championSelect = prompt("Which lane you want to play League of Legends?", "top, mid or bot");
        }
        // Convert the input to lowercase
        if (championSelect !== null) {
            championSelect = championSelect.toLowerCase();
        }
        // Randomly select a champion based on the chosen lane
        switch (championSelect) {
            case "top":
                var roulette = Math.floor(Math.random() * championList.topLaner.length);
                championList.selectedChampion.push(championList.topLaner[roulette]);
                console.log(championList.selectedChampion);
                alert("Your champion will be " + championList.topLaner[roulette]);
                break;
            case "mid":
                var roulette = Math.floor(Math.random() * championList.midLaner.length);
                championList.selectedChampion.push(championList.midLaner[roulette]);
                console.log(championList.selectedChampion);
                alert("Your champion will be " + championList.midLaner[roulette]);
                break;
            case "bot":
                var roulette = Math.floor(Math.random() * championList.botLaner.length);
                championList.selectedChampion.push(championList.botLaner[roulette]);
                console.log(championList.selectedChampion);
                alert("Your champion will be " + championList.botLaner[roulette]);
                break;
            default:
                alert("Invalid lane selection, please choose from: Top, Mid or Bot");
        }
    }
};

// Output the original object to the console before any modifications
console.log(championList);

// Prompt the user to enter a new champion for the top lane
let newChampion = "";
while (newChampion === null || newChampion === "" || !isNaN(newChampion) || newChampion === "Current champions: " + championList.topLaner.join(", ")) {
    newChampion = prompt("Enter a new champion for the top lane", "Current champions: " + championList.topLaner.join(", "));
}
// Add the new champion to the top lane
championList.topLaner.push(newChampion);

// Prompt the user to enter a new champion for the mid lane
let newMidChampion = "";
while (newMidChampion === null || newMidChampion === "" || !isNaN(newChampion) || newMidChampion === "Current champions: " + championList.midLaner.join(", ")) {
    newMidChampion = prompt("Enter a new champion for the mid lane", "Current champions: " + championList.midLaner.join(", "));
}
// Add the new champion to the mid lane
championList.midLaner.push(newMidChampion);

// Call the method to randomly select a champion for a lane
championList.championRoulette();

// Output the modified object to the console after modifications
console.log(championList);