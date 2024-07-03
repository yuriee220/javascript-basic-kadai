//text,btnというid要素を持つHTML要素を取得し、定数に代入
const text = document.getElementById('text');
const btn = document.getElementById('btn');

//クリックしたときにテキスト（h2）の内容を変更
btn.addEventListener('click', () => {
    text.textContent = 'ボタンをクリックしました';
});