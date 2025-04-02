const btnForm = document.getElementById("btnForm")

btnForm.addEventListener("mouseover", () => {
    btnForm.classList.remove("reduce")
    btnForm.classList.add("grow-up")
})

btnForm.addEventListener("mouseout", () => {
    btnForm.classList.add("reduce")
    btnForm.classList.remove("grow-up")
})