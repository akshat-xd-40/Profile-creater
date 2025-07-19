const btn = document.querySelector(".sub");
const h2 = document.querySelector("#heading-two");
const pass = document.querySelector(".password");
const paradiv = document.querySelector("#paragraph");
const para = document.querySelector("#para");
const usernameFilled = document.querySelector(".username");
const nameInput = document.querySelector("#name");
const backBtn = document.querySelector(".back-btn");

btn.addEventListener("click", () => {
    let rand = Math.floor(Math.random() * 100);
    let nameValue = nameInput.value.trim().replace(/\s+/g, "");
    let passwordValue = document.querySelector("#password").value.trim();

    if (nameValue === "") {
        alert("Please enter a username!");
        return;
    }

    if (passwordValue === "") {
      alert("Please enter a password")
      return;
    }

    let generatedUsername = "@" + nameValue.toLowerCase() + rand;

    h2.innerText = "Profile created 🎉";
    usernameFilled.style.display = "none";
    pass.style.display = "none";
    paradiv.style.display = "flex";
    para.innerText = generatedUsername;
    btn.style.display = "none"
    backBtn.style.display = "block"
});

backBtn.addEventListener("click", () => {
  location.reload();
})