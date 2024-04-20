// 日付を取得する関数を定義
const getDate = () => {
    // Dateオブジェクト
    const date1 = new Date(Date.UTC(2023, 7, 22));

    // toLocaleDateString() メソッド
    const options = { year: 'numeric', month: 'long', day: 'numeric',};
    console.log(date1.toLocaleDateString(undefined, options));
}

// 関数の呼び出し
getDate();