// sample scriptures data
const scriptures = [
    {
        scripture: "This is the first quote.",
        scriptureLocation: "Genesis 1:1",
        translationVersion: "KJV"
        
    },
    { 
        scripture: "This is the second quote.",
        scriptureLocation: "James 3:23",
        translationVersion: "KJV"
        
    },
    {
        scripture: "This is the third quote.",
        scriptureLocation: "Psalms 116:3",
        translationVersion: "KJV"
        
    }
];

const scriptureText = document.getElementById("scriptureText");
const scriptureLocation = document.getElementById("scriptureLocation");
const translationVersion = document.getElementById("translationVersion");
const newScriptureButton = document.getElementById("newScripture")

// Function to generate a random scripture
function generateRandomScripture(){
    const randomIndex = Math.floor(Math.random() * scriptures.length);
    const randomScripture = scriptures[randomIndex];
    scriptureText.textContent = randomScripture.scripture;
    locationText.textContent = randomScripture.scriptureLocation;
    versionText.textContent = randomScripture.translationVersion;
}

newScriptureButton.addEventListener("click", generateRandomScripture);

// Initial random scripture
generateRandomScripture();

// Generate scripture per category clicked and regenerate randomly each time clicked