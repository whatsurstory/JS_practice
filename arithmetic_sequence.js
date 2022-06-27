"use strict"
function addUpTo(n) {
    let result = 0;  //希望i有個基準可以往上加
    for (let i = 1; i <= n; i++) { //從1開始加
      result += i;
    }
    return result;
  }
  console.log(addUpTo(10)); //給10這個參數算出函式return的結果
/**當 i = 1，result = 0，執行 result += i ，所以result 變成 1。
當 i = 2，result = 1，執行 result += i ，所以result 變成 3。
當 i = 3，result = 3，執行 result += i ，所以result 變成 6。
當 i = 4，result = 6，執行 result += i ，所以result 變成 10。
當 i = 5，result = 10，執行 result += i ，所以result 變成 15。 */

//等差數列公式: ((首項 + 末項) * 項數)/2，再資料結構上面用公式跑比較快
function addUp(n) {
    result = ((1 + n) * n) / 2;
    return result;
}