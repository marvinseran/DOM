const firstNameInput = document.getElementById('firstname');
const displayFirstName = document.getElementById('display-firstname');
const ageInput = document.getElementById('age');
const hardTruthSection = document.getElementById('a-hard-truth');
const pwdInput = document.getElementById('pwd');
const pwdconfirmInput = document.getElementById('pwd-confirm');

const toggleDarkModeSelect = document.getElementById('toggle-darkmode');

firstNameInput.addEventListener('keyup', function (event){
    displayFirstName.textContent = firstNameInput.value;
  });

  ageInput.addEventListener('keyup', function () {
    if (parseInt(ageInput.value) < 18) {
      hardTruthSection.style.visibility = 'hidden';
    } else {
      hardTruthSection.style.visibility = 'visible';
    }
  });
  function validatePassword() {
    const password = pwdInput.value;
    const confirmPassword = pwdconfirmInput.value;


    if (password.length < 6 || password !== confirmPassword) {
      pwdInput.style.borderColor = 'red';
      pwdconfirmInput.style.borderColor = 'red';
    } else {
      pwdInput.style.borderColor = '';
      pwdconfirmInput.style.borderColor = '';
    }
  }

  pwdInput.addEventListener('keyup', validatePassword);
  pwdconfirmInput.addEventListener('keyup', validatePassword);

  toggleDarkModeSelect.addEventListener('change', function () {
    const darkModeEnabled = toggleDarkModeSelect.value === 'dark';
    document.body.style.backgroundColor = darkModeEnabled ? 'black' : '';
    document.body.style.color = darkModeEnabled ? 'white' : '';
  });