// 日付を取得する関数を定義
const getDate = () => {
    const today = new Date;

    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const date = today.getDate();
    
    console.log(year + '年' + month + '月' + date + '日');
}

// 関数の呼び出し
getDate();