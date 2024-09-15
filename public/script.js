const socket = io();

const form = document.getElementById('form');
const input = document.getElementById('m');
const messages = document.getElementById('messages');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (input.value) {
    socket.emit('user-message', input.value);
    input.value = '';
  }
});

socket.on('message', (message) => {
  const item = document.createElement('li');
  item.textContent = message;
  messages.appendChild(item);
  messages.scrollTop = messages.scrollHeight;
});
