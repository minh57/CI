// bài 1
let rev =function (str){
    let after_rev =  [...str].reverse()
    let x = after_rev.join("")
    return x
}
console.log(rev("abcdef"))

// bài 2
let arr = [1,2,3,4,5,6,4,2,1,6]
let t;
let del = (num)=>{
    for(let i = 0;i<num.length;i++){
        t=num[i];
        for(let j =i+1;j<num.length;j++){
            if(num[i]==num[j]){
                t=num[j];
                num.splice(j,1);
            }
        }
    }
    return num 
}
console.log(del(arr))
// Bài 3
// let arr_2 = [1,2,3,4,5,5,5,5,6,1]
// let x,y = 0; 
// let rong = []
// let tan_suat = (ar)=>{
//      for(let i=0;i<ar.length;i++){
//         ar[i];
//         for(let j =i;j<ar.length;j++){
//             if(ar[i]==ar[j]){
//                 x++;
                
//             }
//         }
//             rong.push(x);
//             x=0
//     }
//      return rong;
// }
// console.log(tan_suat(arr_2))

function array_unique(array){
    array.sort();

    let max =[0,0];
    let count =1;
    for (let i = array.length-1; i > 0; --i) {
        if (array[i] == array[i-1]) ++count; //Thấy phần tử trùng nhau thì tiếp tục đếm
        else{
             //So sánh số lần xuất hiện với max[1] 
             if (max[1] < count){ 
                  //Nếu tìm thấy phần tử xuất hiện nhiều hơn thì gán phần tử vào max[0]
                  //Và gán số lần xuất hiện vào max[1]
                  max[0] = array[i];
                  max[1] = count;   
             }
             count = 1;
        }
    }
    console.log( "Phần tử "+max[0]+" xuất hiện nhiều nhất với "+max[1]+" lần");
}
let array = [ 7, 2, 6, 7, 4, 9, 8 ];
array_unique(array);
                