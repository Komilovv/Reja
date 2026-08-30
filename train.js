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

function countLetter (x, word) {
    count = 0;
    for (letter of word) {
        if (x == letter) {
            count++;
        }
        else continue
    }
    return count;
}

const y = countLetter("t", "tarozida tuhmatlar toshdur.");
console.log(y)