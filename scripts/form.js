const btnForm = document.getElementById("btnForm")
const inputTerms = document.getElementById("input-terms")

btnForm.addEventListener("mouseover", () => {
    if(inputTerms.checked == false) return

    btnForm.classList.remove("reduce")
    btnForm.classList.add("grow-up")
})

btnForm.addEventListener("mouseout", () => {
    if(inputTerms.checked == false) return

    btnForm.classList.add("reduce")
    btnForm.classList.remove("grow-up")
})

inputTerms.addEventListener("change", () => {
    if(inputTerms.checked == true) {
        btnForm.disabled = false
        return
    }

    btnForm.disabled = true
})

btnForm.addEventListener("click", () => {
    if(inputTerms.checked == false) {
        alert("Precisa concordar com os termos de serviço!")
        return
    }

    const contactName = document.getElementById("contact-name").value
    const contactEmail = document.getElementById("contact-email").value
    const contactPhone = document.getElementById("contact-phone").value
    const contactTypeValue = document.getElementById("contact-type").value
    let contactDesc = document.getElementById("contact-desc").value

    if(!contactName || !contactEmail || !contactPhone || !contactTypeValue) {
        alert("Você possui campos não preenchidos!")
        return
    }

    if(!contactDesc) contactDesc = "";

    alert(`Nome: ${contactName}\nEmail: ${contactEmail}\nTelefone: ${contactPhone}\nTipo de Contato: ${contactTypeValue}\nDescrição: ${contactDesc}`)
    return
})