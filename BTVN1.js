// Bài 1: Viết function truyền vào 1 số nguyên dương. Tính giai thừa của số đó
const calculateFactorial = (n) => {
    if(n == 0 || n == 1) return 1;
    return n * calculateFactorial(n-1);
}
// Bài 2: Viết function truyền vào 1 chuỗi. In ra chuỗi đảo ngược của chuỗi đó
const reverseString = (str) => str.split('').reverse().join('');

// Bài 3: Viết function truyền vào mã quốc gia. Trả về message có ý nghĩa là “Xin chào”, tương ứng với mã quốc gia được truyền vào
const translate = (str) => {
    switch(str){
        case "VN":
            console.log(`Xin chào`);
            break;;
        case "EN":
            console.log(`Hello`);
            break;
        case "CN":
            console.log(`Ni hao`);
            break;
    }
}

//  Bài 4: Cho function truyền vào 1 chuỗi dài hơn 15 ký tự. Viết 1 function cắt chuỗi, lấy ra 10 ký tự đầu tiên và thêm vào dấu “…” ở cuối chuỗi.
const subString = (str) => str.substring(0, 10) + "...";
