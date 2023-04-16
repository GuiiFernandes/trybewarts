const email = document.getElementById('email');
const password = document.getElementById('password');
const enter = document.getElementById('enter');
const house = document.getElementById('house');
const rateContainer = document.getElementById('rate-container');
const agreement = document.getElementById('agreement');
const submit = document.getElementById('submit-btn');
const textArea = document.getElementById('textarea');
const counter = document.getElementById('counter');
const spans = document.getElementsByClassName('report');
const formReport = document.getElementById('form-data');
const backButton = document.getElementById('back-button');
const evaluationForm = document.getElementById('evaluation-form');
const buttonMenu = document.getElementById('button-menu');
const names = ['firstName', 'lastName', 'main-email', 'house',
  'family', 'subject', 'rate', 'textarea'];
const arrayHouses = [['Gitnória', 'gitnoria-house'],
  ['Reactpuff', 'reactpuff-house'],
  ['Corvinode', 'corvinode-house'],
  ['Pytherina', 'pytherina-house'],
];
const closeMenu = 'close-menu';

const login = () => {
  enter.addEventListener('click', () => {
    if (email.value === 'tryber@teste.com' && password.value === '123456') {
      const checkMenu = document.getElementById('my-menu');
      alert('Olá, Tryber!');
      if (window.innerWidth < 791) {
        checkMenu.checked = false;
        checkMenu.value = closeMenu;
        buttonMenu.innerText = 'Login';
        const header = document.querySelector('.header');
        header.style.display = 'none';
      }
    } else {
      alert('Email ou senha inválidos.');
    }
  });
};

const createHouses = () => {
  for (let index = 0; index < arrayHouses.length; index += 1) {
    const option = document.createElement('option');
    const [value, id] = arrayHouses[index];
    option.id = id;
    option.innerHTML = value;
    option.value = value;
    house.appendChild(option);
  }
};

const createRates = () => {
  for (let index = 1; index <= 10; index += 1) {
    const div = document.createElement('div');
    div.classList = 'form-check form-check-inline';
    const radio = document.createElement('input');
    radio.type = 'radio';
    radio.name = 'rate';
    radio.classList = 'form-check-input';
    radio.id = `radio-${index}`;
    radio.value = index.toString();
    const label = document.createElement('label');
    label.setAttribute('for', `radio-${index}`);
    label.classList = 'form-check-label';
    label.innerHTML += index.toString();
    div.appendChild(radio);
    div.appendChild(label);
    rateContainer.appendChild(div);
  }
};

const enabledSubmit = () => {
  agreement.addEventListener('change', (event) => {
    submit.disabled = !event.target.checked;
  });
};

const countText = () => {
  textArea.addEventListener('input', () => {
    counter.innerHTML = (500 - textArea.value.length);
  });
};

const clickSubmit = () => {
  evaluationForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(evaluationForm);
    for (let index = 0; index < spans.length; index += 1) {
      if (index === 5) {
        const subjects = formData.getAll(names[index]);
        spans[index].innerHTML = subjects.join(', ');
      } else {
        spans[index].innerHTML = formData.get(names[index]);
      }
    }
    formReport.style.display = 'block';
    evaluationForm.style.display = 'none';
  });
};

const clickBack = () => {
  backButton.addEventListener('click', () => {
    formReport.style.display = 'none';
    evaluationForm.style.display = 'flex';
  });
};

const clickMenu = () => {
  buttonMenu.addEventListener('click', () => {
    const header = document.querySelector('.header');
    const checkMenu = document.getElementById('my-menu');
    if (checkMenu.value === closeMenu) {
      checkMenu.value = 'open-menu';
      buttonMenu.innerText = 'X';
      header.setAttribute('style', 'display: flex');
    } else {
      checkMenu.value = closeMenu;
      header.removeAttribute('style');
      buttonMenu.innerText = 'Login';
    }
  });
};

window.onload = () => {
  submit.disabled = true;
  createHouses();
  createRates();
  login();
  enabledSubmit();
  countText();
  clickSubmit();
  clickBack();
  clickMenu();
};
