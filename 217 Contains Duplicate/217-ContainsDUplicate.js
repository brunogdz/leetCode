nums = [1,1,1,3,3,4,3,2,4,2]

var containsDuplicate = function(nums){
    let i = 0;
    for(i; i < nums.length; i++ ){
        for(let j = i+1; j< nums.length; j++){
            if(nums[i] == nums[j]){
                return true;
            }
        }
    }
    return false;
}
// console.log(nums.length)
console.log(containsDuplicate(nums))