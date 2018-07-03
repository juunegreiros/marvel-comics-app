import character from './services/character-search';

const form = document.querySelectorAll('form');

form[0].addEventListener('submit', e => {
  e.preventDefault();

  const form = e.target;
  const formData = new FormData(form);
  character(formData.get('character-search'));
  // formData.forEach(e => {
  //   document.querySelector('ul').append(formData.get('character-search'));
  // });
});
