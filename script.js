const balloon = document.getElementById("balloon");
let currentSize = 30;
const maxSize = 60; 

function handleKeyPress(event) {
    if (!balloon) return;
    if (balloon.textContent === "#") return;

    if (event.key === "ArrowUp") {
        currentSize *= 2.2;
        if (currentSize > maxSize) {
            balloon.textContent = "#";
            document.removeEventListener("keydown", handleKeyPress);
        }
    } else if (event.key === "arrowDown") {
        currentSize /=2.2;
        if (currentSize < 30) currentSize = 30;
    }
    balloon.style.fontSize = '${currentSize}px';
}
document.addEventListener("keydown", handleKeyPress);

const tabLinks = document.querySelectorAll("Tabbed-layout ul li a");
const tabContents = document.querySelectorAll("Tabbed-content > div");

function showTab(tabIndex) {
    tabContents.forEach((tab, index) => {
        tab.style.display = index === tabIndex ? "block" : "none";
    });
}

tabLinks.forEach((link, index) => {
    link.addEventListener("click", (event) => {
        event.preventDefault();
        showTab(index);
    });
});

showTab(0);

fs.writeFile(scriptJsPath, balloonScript, (err) => {
    if (err) {
        console.error("Error Writing The File:", err);
    } else {
        console.log("File written successfully");
    }
});
