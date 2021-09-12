---
title: Summing Bits
date: "2021-05-31"
description: "An intro into bit manipulation techniques."
tags:
  - competitive
---

Bit Sum is a problem found on the online judge Binary Search.

In this problem, we're asked to find the lowest possible sum after changing $n$ bits. The first observation that needs to be made is that the further right the bit changed from 0 to 1, the better. No matter the number, changing a bit the furthest right from 0 to 1 will always result in a lower number than changing any other bit from 0 to 1.

We can show this through the number 4. When represented in binary, 4 is 100. If I were to change the bit to the left of the right-most bit from 0 to 1, it would now be 110, which can be written as 6 in decimal form. If I were to change the rightmost bit, it would be 101, which is 5 in decimal form.

Knowing this, the optimal answer to get the least sum should be to take the $n$ right-most bits that are still zero, and turn them into 1.

There are two ways we can do this. Firstly, we can loop through the rightmost-bit for ever number, checking if they are zero. If they are, and we still need to fill more bits, we add $2^n$ to the total where $n$ is the amount of bits the current bit is away from the rightmost bit.

```cpp

int solve(vector<int>& nums, int k) {
    int ans = 0;
    const int MOD = 1e9+7;
    int total = 0;
    for (int i : nums) {
        total =(total + (ans + i))%MOD;
    }
    for (int bit = 0; bit < 31 && k > 0; bit++){
        for (int i = 0; i < nums.size() && k > 0; i++){
            if ((nums[i] & (1 << bit)) == 0){
                k-- ;
                total = (total + (1 << bit))%MOD;
            }
        }
    }
    return total%MOD;
}

```

The other way in which we can do this is through the usage of a frequency array. For each index of bit, I record the number of zeroes available to be filled. In the second loop, all I do is greedily take the lowest indexes available.

```cpp

int solve(vector<int>& nums, int k) {
    int answer = 0;
    vector<int> zeroes (32, 0);
    const int MOD = 1e9+7;
    for (int i : nums){
        answer = (answer + i)%MOD;
        for (int j = 0; j < 32; j++){
            if ((i & (1 << j)) != 0){
                zeroes[j] += 0;
            }
            else{
                zeroes[j] += 1;
            }
        }
    }
    for (int i = 0; i < 32 && k > 0; i++){
        int minimum = min(zeroes[i], k);
        answer = (answer + minimum * (1 << i))%MOD;
        k -= minimum;
    }
    return answer;
}

```

Both of these implementations have a time complexity of $O(N)$, as they loop through the array of numbers once. They also share a space complexity of $O(1)$. There are no additional complex data structures created in the first solution, while the fixed size array in the second solution doesn't add to the space complexity. This was a fun bit manipulation problem to do, and I hope it was for you too!
