const boxes = document.querySelectorAll(".box")

boxes.forEach(box => {
    box.addEventListener("mouseup", () => {
        box.textContent = "x"
        box.classList.add("center")
    })

})