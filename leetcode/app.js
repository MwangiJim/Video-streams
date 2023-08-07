function binaryTree(arr,target){
  arr.sort((a,b)=>a-b)
  let left = 0;
  let right = arr.length-1;
  while(left <=right){
    const mid = Math.floor((left+right)/2)
    if(arr[mid] === target){
        return mid
    } 
    else if(arr[mid] < target){
        left = mid + 1
    }
    else{
        right = mid - 1
    }
  }
  return -1;
}
console.log(binaryTree([11,2,3,56,7,90,100,20,34,56],2))

function climbingStairs(nums){
    let dp = []
    dp[1] =1
    dp[2] =2

    for(let i = 3;i<=nums;i++){
        dp[i] = dp[i-1] + dp[i-2];
    }
    return dp[nums]
}
console.log(climbingStairs(4))

const randomStrGenerator = ()=>{
  let randStr = ''
  let len = 10
  let letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890#$%^&*()<>?:"'

  for(let i = 0;i<=len;i++){
    randStr += Math.floor(Math.random() * 10)
  }
  console.log(randStr)
}
randomStrGenerator()