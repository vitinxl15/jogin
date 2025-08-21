const grid = document.getElementById('grid');
const timerEl = document.getElementById('timer');
const messageEl = document.getElementById('message');
const restartBtn = document.getElementById('restart');

let nextNumber = 1;
let startTime;
let timerInterval;

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function createGrid() {
  const numbers = Array.from({ length: 20 }, (_, i) => i + 1);
  shuffle(numbers);
  grid.innerHTML = '';

  numbers.forEach(num => {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.textContent = num;
    cell.addEventListener('click', () => handleClick(cell, num));
    grid.appendChild(cell);
  });
}

function handleClick(cell, num) {
  if (num === nextNumber) {
    if (nextNumber === 1) {
      startTime = Date.now();
      startTimer();
    }

    cell.style.visibility = 'hidden';
    nextNumber++;

    if (nextNumber > 20) {
      stopTimer();
      messageEl.textContent = `🏁 Você terminou em ${getElapsedTime()} segundos!`;
      restartBtn.style.display = 'inline-block';
    }
  }
}

function getElapsedTime() {
  return ((Date.now() - startTime) / 1000).toFixed(2);
}

function startTimer() {
  timerInterval = setInterval(() => {
    timerEl.textContent = `Tempo: ${getElapsedTime()}s`;
  }, 100);
}

function stopTimer() {
  clearInterval(timerInterval);
}

restartBtn.addEventListener('click', () => {
  nextNumber = 1;
  messageEl.textContent = '';
  restartBtn.style.display = 'none';
  timerEl.textContent = 'Tempo: 0.00s';
  createGrid();
});

createGrid();
