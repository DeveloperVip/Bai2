let enter = parseInt(prompt("Nhập số nguyên: "));
function numberOneTriangle(n) {
    if (n < 1 || n > 10) {
      console.log("Nhập lại số (yêu cầu từ 1 đến 10):");
      return;
    }
    for (let i = 1; i <= n; i++) {
      let row = "";
      for (let j = 1; j <= i; j++) {
        row += "* ";
      }
      console.log(row);
    }
}
numberOneTriangle(enter);