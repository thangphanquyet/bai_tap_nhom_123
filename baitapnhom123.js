//bài 5
function baby_number(arr){
    let b = arr [0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] <b){
            b = arr [i]
        }
    }
    return b
}
let arr1= [-1,2,3,4,-2.3,5,1.2,8,];
let b = baby_number(arr1);
console.log(b)
//bài 6.
let num=+prompt("Nhập vào một số")
function isInteger(n) {
    return n>0;
}
document.write(isInteger(num))