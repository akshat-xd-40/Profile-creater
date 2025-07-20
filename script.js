npm i @vercel/analytics
import { inject } from "@vercel/analytics"/

  const btn = document.querySelector('.sub');
  const h2 = document.querySelector('#heading-two');
  const passBtn = document.querySelector('.password');
  const paradiv = document.querySelector('#paragraph');
  const para = document.querySelector('#para');
  const username = document.querySelector('.username');
  const nameInput = document.querySelector('#name');
  const backBtn = document.querySelector('.back-btn');
  const passwordInput = document.getElementById('password');

  btn.addEventListener('click', () => {
    let rand = Math.floor(Math.random() * 999);
    let nameValue = nameInput.value.trim().replace(/\s+/g, '');
    let passwordValue = passwordInput.value.trim();

    if (nameValue === '') {
      alert('Please enter a username!');
      return;
    }
    if (passwordValue === '') {
      alert('Please enter a password!');
      return;
    }

    let generatedUsername = '@' + nameValue.toLowerCase() + rand;
    h2.innerText = 'Profile created 🎉';
    if (username) username.style.display = 'none';
    if (passBtn) passBtn.style.display = 'none';
    paradiv.style.display = 'flex';
    para.innerText = generatedUsername;
    btn.style.display = 'none';
    backBtn.style.display = 'block';
    changePicBtn.style.display = 'none';
  });

  backBtn.addEventListener('click', () => {
    location.reload();
  });

const profilePicInput = document.getElementById('profile-pic-input');
const profilePic = document.getElementById('profile-pic');
const changePicBtn = document.getElementById('change-pic-btn');

profilePicInput.addEventListener('change', function() {
  const file = this.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      profilePic.src = e.target.result;
      profilePic.classList.add('has-image');
      changePicBtn.style.display = 'inline-block';
      profilePicInput.disabled = true;
      profilePicInput.value = '';
    };
    reader.readAsDataURL(file);
  }
});

changePicBtn.addEventListener('click', function() {
  profilePicInput.disabled = false;
  profilePicInput.click();
});

profilePic.addEventListener('click', function(e) {
  if (profilePic.classList.contains('has-image')) {
    e.preventDefault();
    e.stopPropagation();
  }
});
