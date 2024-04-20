const changeBtn = document.getElementById('btn');

changeBtn.addEventListener('click', () => {
    // textというidを持つHTML要素を取得し、定数に代入する
    const changeContent = document.getElementById('text');
    
    // 取得したHTML要素を変更する
    changeContent.textContent = 'ボタンをクリックしました';

    // 確認の為、HTML要素をコンソールでも表示させる
    console.log(changeContent);
});