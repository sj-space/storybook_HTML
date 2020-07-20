export default {title: 'Button'};

export const withButtonText = () => '<button class="btn">Hello World</button>';

export const withButtonEmoji = () => {
  const button = document.createElement('button');
  button.innerText = '😀 😎 👍 💯';
  return button;
}
