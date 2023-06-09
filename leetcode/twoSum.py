# Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

# You may assume that each input would have exactly one solution, and you may not use the same element twice.

# You can return the answer in any order.

from typing import List


class Solution:
    def two_sum(self, int_list: List[int], target) -> List[int]:
        for index, num in enumerate(int_list):
            sliced_list = int_list[index + 1:]

            for comparison_index, comparison_num in enumerate(sliced_list):
                num_sum = num + comparison_num

                if num_sum == target:
                    return [index, index + comparison_index + 1]

    def two_sum_2(self, nums: List[int], target: int) -> List[int]:
        past_nums = {}

        for index, num in enumerate(nums):
            difference = target - num

            if difference in past_nums:
                return [past_nums[difference], index]

            past_nums[num] = index


solution = Solution()

print(solution.two_sum([7, 3, 2, 4], 7))
print(solution.two_sum_2([-3, 4, 3, 90], 0))
