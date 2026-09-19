// ================= I-Task =====================
function majorityEle (arr) {
    let maj_arr = [];
    while (arr.length>0) {
        // let a = 0;
        let arr1 = arr.filter((x) => x==arr[0])
        arr = arr.filter(y=> y!=arr[0])
        // a++;
        if (maj_arr.length < arr1.length) {          
            maj_arr = arr1
        }
    }
    return maj_arr[0];
    
}

console.log(majorityEle([8,3,4,4,5,6,44,4,6,7,2,3,4,1,4,5,8,3,1,2,11,1,1,1,1,1,1,8]));