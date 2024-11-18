document.addEventListener("DOMContentLoaded", () => {
    const balloon = document.getElementById("balloon");
    let fontSize = 16;

    document.addEventListener("keydown", (event) => {
        if (event.key === "ArrowUp") {
            fontSize *= 1.1;
        } else if (event.key === "ArrowDown") {
            fontSize /= 1.1;
        }
        balloon.style.fontSize = fontSize + "px";
        event.preventDefault();
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll("#tabbed-layout ul li a");
    const tabs = document.querySelectorAll("#tabbed-contents > div");

    function showTab(index) {
        tabs.forEach((tab, i) => {
            tab.style.display = i === index ? "block" : "none";
        });
    }

    links.forEach((link, index) => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            showTab(index);
        });
    });

    showTab(0);
});