const countedFieldHolderClass = 'char-counted-field-holder';
const countedFieldClass = 'char-counted-field';
const counterClass = 'char-counted-counter';
const counterFocusClass = 'char-counted-counter-focus';
const counterMaxClass = 'char-counted-counter-max';
const counterAlmostMaxClass = 'char-counted-counter-almost-max';

class AdminTextLength {
  constructor(input) {
    const messageElement = document.createElement('input');
    this.input = input;
    this.message = messageElement;

    messageElement.classList.add(counterClass, 'text');
    messageElement.addEventListener('focus', () => input.focus());

    input.insertAdjacentElement('afterEnd', messageElement);
    input.parentNode.classList.add(countedFieldHolderClass, 'input-group');
    input.classList.add(countedFieldClass);

    input.addEventListener('focus', () => messageElement.classList.add(counterFocusClass));
    input.addEventListener('blur', () => messageElement.classList.remove(counterFocusClass));
    input.addEventListener('input', this.updateCharacterCount.bind(this));
  }

  updateCharacterCount() {
    const maxLength = this.input.getAttribute('maxlength');
    const {length} = this.input.value;

    this.message.value = `${length}/${maxLength}`;
    this.message.classList.remove(counterMaxClass, counterAlmostMaxClass);

    if (length >= maxLength) {
      this.message.classList.add(counterMaxClass);
    } else if (length / maxLength >= 0.8) {
      this.message.classList.add(counterAlmostMaxClass);
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const inputs = document.querySelectorAll('input[maxlength]');
  inputs.forEach((e) => {
    const counter = new AdminTextLength(e);
    counter.updateCharacterCount();
  });
});
