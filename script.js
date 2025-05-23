const form = document.getElementById('tracker-form');
const tableBody = document.querySelector('#tracker-table tbody');

const statuses = ['Receiving', 'In QC', 'QC Completed', 'Packing', 'Packing Completed'];
const containerData = {};

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const containerId = document.getElementById('container-id').value.trim();
  const userName = document.getElementById('user-name').value.trim();
  if (!containerId || !userName) return;

  const currentTime = new Date().toLocaleString();

  if (!containerData[containerId]) {
    containerData[containerId] = { statusIndex: 0 };
  } else {
    containerData[containerId].statusIndex = Math.min(containerData[containerId].statusIndex + 1, statuses.length - 1);
  }

  const status = statuses[containerData[containerId].statusIndex];

  const newRow = document.createElement('tr');
  newRow.innerHTML = `
    <td>${containerId}</td>
    <td>${status}</td>
    <td>${userName}</td>
    <td>${currentTime}</td>
  `;
  tableBody.appendChild(newRow);

  form.reset();
});
