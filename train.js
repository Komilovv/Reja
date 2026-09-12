// console.log("American phylosophies")
// const list = [
//     "Hard work vs Material wealth",
//     "Equality of opportunity vs Copetition",
//     "Individual freedom vs Self-reliance"
// ]; 

// ============================== CALLBACK FUNCTION =====================================

// function response (err, data) {
//     if (err) console.log("ERROR", err);
//     else {console.log("Response", data);}
// }

// function advice (a, callback) {
//     if (typeof a !=="number") callback("insert a number", null);
//     else if (a >= 15 && a <= 30) callback(null, list[0]);
//     else if (a > 30 && a <= 40) callback(null, list[1]);
//     else {
//         setTimeout(function() {
//             return [2]
//         }, 5000);
//     }
// }

// advice(21, response);

// ================================= ASYNC FUNCTION ===============================================

// function response (err, data) {
//     if (err) console.log("ERROR", err);
//     else {console.log("Response", data);}
// }

// function advice (a) {
//     if (typeof a !=="number") throw new error("insert a number");
//     else if (a >= 15 && a <= 30) return list[0];
//     else if (a > 30 && a <= 40) return list[1];
//     else {
//         return new Promise((resolve, reject) => {
//             setInterval(function() {
//                 resolve(list[2]);
//         }, 5000);
//         });
//     }
// }

// console.log("passed here 0");
// advice(70)
//     .then((data) => {
//         console.log("Response:", data);
//     })
//     .catch((err) => {
//         console.log("Error:", err)
//     });
// console.log("passed here 1")

// async function run() {
//     let response = await advice(38);
//     console.log(response);
// }

// run()

// ================================ A-Task ================================================

// function countLetter (x, word) {
//     count = 0;
//     for (letter of word) {
//         if (x == letter) {
//             count++;
//         }
//         else continue
//     }
//     return count;
// }

// const y = countLetter("t", "tarozida tuhmatlar toshdur.");
// console.log(y)

// ================================ B-Task ================================================

// function countDig (smth) {
//     let count = 0;
//     for (let x of smth) {
//         if (x >= "0" && x <= "9") {
//             count++;
//         } else
//             continue
//     }
//     return count;
// }

// const z = countDig("dfs422sdf453dfs435dfssd543sad5hfg54");
// console.log(z)

// =============================== C-Task ================================================
// function checkContent(string1, string2) {
//     for (const x of string1) {
//         if (string2.includes(x)) {
//             continue;
//         } else {
//             return false;
//         }
//     }
//     return true;
// }

// console.log(checkContent("olma va bexi", "bexi olma"));

// ============================= D-Task =================================

// class Shop {
//     // non = 0;
//     // lagmon = 0;
//     // cola = 0;
//     constructor (non, lagmon, cola) {
//         this.non = non;
//         this.lagmon = lagmon;
//         this.cola = cola;
//         this.current_time = new Date().toLocaleTimeString();
//     }
//     available () {
        
//         console.log(`Hozi ${this.current_time} da ${this.non} ta non, ${this.lagmon} ta lagmon, va ${this.cola} ta cola mavjud.`);
//     }

//     sell (non, lagmon, cola) {
//         this.non -= non;
//         this.lagmon -= lagmon;
//         this.cola -= cola;
//     }

//     buy (non, lagmon, cola) {
//         this.non += non;
//         this.lagmon += lagmon;
//         this.cola += cola;
//     }
// }

// const shop = new Shop (7, 15, 9);

// shop.sell(0, 2, 7);
// shop.buy(4, 0, 3);
// shop.available();

// =============================== FTask =================================
// function findDoubler(str) {
//     let strArr = str.split(''); 

//     for (let i = 0; i < strArr.length; i++) {
//         for (let j = i + 1; j < strArr.length; j++) {
//             if (strArr[i] === strArr[j]) {
//                 return true;
//             }
//         }
//     }
//     return false;
// }


// console.log(findDoubler("Code ishladimi?"))
// console.log(findDoubler("Code ishla"))

// ============================== E-Task =================================
function getReverse(str) {
    x = str.split("").reverse().join('')
    // x.reverse()
    // x = "".join(x)
    return x
}


console.log(getReverse("Bulut"))

