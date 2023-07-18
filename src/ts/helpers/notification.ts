export const createNotification = () => {
    const notificationEl = document.createElement('div');
    notificationEl.setAttribute('id', 'notification');
    notificationEl.style.cssText = `position: absolute;
                            top: 15px;
                            left: 15px;
                            width: 50%;
                            padding: 20px;
                            background-color: rgba(255, 217, 0, 0.6);
                            border-radius: 5px;
                            display: none;
                            text-align: center;
                            z-index: 2;`;
    document.body.prepend(notificationEl);
};

export const notification = (text: string) => {
    const notificationEl = document.getElementById('notification') as HTMLElement;
    notificationEl.innerText = text;
    notificationEl.style.display = 'block';
    setTimeout(() => {
        notificationEl.innerText = '';
        notificationEl.style.display = 'none';
    }, 2000);
};
