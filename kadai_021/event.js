const changeBtn = document.getElementById('btn');

changeBtn.addEventListener('click', () => {
    // textというidを持つHTML要素を取得し、定数に代入する
    const changeContent = document.getElementById('text');

    // クリック前のHTML要素をコンソールで表示させる(同期処理)
    console.log(changeContent);
    
    // 取得したHTML要素を2秒後に変更する
    setTimeout(() => {
        changeContent.textContent = 'ボタンをクリックしました';

        // クリック後のHTML要素をコンソールで表示させる(非同期処理)
        console.log(changeContent);
    }, 2000);
});