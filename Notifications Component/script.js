const box = document.querySelector('#notificationBox');
const btn = document.querySelector('#notifyBtn');

btn.addEventListener('click', () => {
    const notif = document.createElement('div');
    notif.classList.add('notification');
    notif.textContent = "This is a new message!";
    box.appendChild(notif);

    setTimeout(() => notif.remove(), 3000);
});