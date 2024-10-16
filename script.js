// Example data: A list of names and corresponding IDs
const nameToIDMap = {
    "Alice": "ID001",
    "Bob": "ID002",
    "Charlie": "ID003",
    "David": "ID004",
    "Eva": "ID005"
};

function getID() {
    // Get the name entered by the user
    const name = document.getElementById("name").value.trim();
    const output = document.getElementById("output");

    // Check if the name exists in the object
    if (nameToIDMap[name]) {
        output.textContent = `Your ID is: ${nameToIDMap[name]}`;
        output.className = '';  // Clear any error class
    } else {
        output.textContent = "Name not found. Please try again.";
        output.className = 'error';
    }
}
