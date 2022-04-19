const nums = [1,2,3,4,5,6,7,8];
for (let i = 0; i<nums.length; i++){

    if(nums[i] > 4) {
        break;
    }
    console.log("count korte korte 4 a ese them jabe");
    console.log(nums[i]);
}

const nums2 = [1,2,3,-4,5,-6,-7,8];
for (let i = 0; i<nums2.length; i++){
    if(nums2[i] < 0 ) {
        continue;
    }
    console.log("0 er kom figur gula skip kore continue korse");
    console.log(nums2[i]);
}