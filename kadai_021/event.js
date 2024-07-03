const text = document.getElementById('text');
const btn = document.getElementById('btn');

setTimeout(() => {
    
})

btn.addEventListener('click', () => {
    setTimeout(() => {
        text.textContent = 'ボタンをクリックしました';
    }, 2000);
});