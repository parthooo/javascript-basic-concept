// nums = [12, 17, 75, 36, 20];

// for (let i = 0; i < nums.length; i++) {
//     const num = nums[i];
    
//     if (num % 2 == 0) {
//         console.log(num, 'this is even number');
//     }else{
//         console.log(num*2, 'this is odd number');
//     }
// }


// friendsAge = [19, 20, 21, 22, 25]

// for (let i = 0; i < friendsAge .length; i++) {
//     const age = friendsAge [i];
//     if (age % 2 == 0) {
//         console.log(age, 'this is even number');
//     }else{
//         console.log(age*2, 'this is odd number');
//     }
// }



function partho(a){
    if (a % 2 == 0) {
        console.log(a, 'this is even number');
    }else{
        console.log(a*2, 'this is odd number');
    }
}
function partho_all(ab){
    for (let i = 0; i < ab.length; i++) {
        const a = ab[i];
        partho(a)
    }
}

nums = [12, 17, 75, 36, 20];
partho_all(nums)

friendsAge = [19, 20, 21, 22, 25]
partho_all(friendsAge)
