document.addEventListener("DOMContentLoaded", function () {
    const colorBox = document.getElementById("color-box");
    const colorCode = document.getElementById("color-code");
    const generateButton = document.getElementById("generate-button");
    const customColorInput = document.getElementById("custom-color");
    const applyButton = document.getElementById("apply-button");

    // Function to generate a random color code
    function getRandomColor() {
        const letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    // Function to set the background color of the color box
    function setBackgroundColor(color) {
        colorBox.style.backgroundColor = color;
        colorCode.innerText = `Color Code: ${color}`;
    }

    // Event listener for the "Generate Color" button
    generateButton.addEventListener("click", function () {
        const randomColor = getRandomColor();
        setBackgroundColor(randomColor);
    });

    // Event listener for the "Apply Custom Color" button
    applyButton.addEventListener("click", function () {
        const customColor = customColorInput.value;
        if (customColor.match(/^#[0-9A-Fa-f]{6}$/)) {
            setBackgroundColor(customColor);
        } else {
            alert("Please enter a valid color code (e.g., #RRGGBB)");
        }
    });
});
