# Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

# You may assume that each input would have exactly one solution, and you may not use the same element twice.

# You can return the answer in any order.

from typing import List


def two_sum(int_list: List[int], target) -> List[int]:
    for index, num in enumerate(int_list):
        sliced_list = int_list[index + 1:]

        for comparison_index, comparison_num in enumerate(sliced_list):
            num_sum = num + comparison_num

            if num_sum == target:
                return [index, index + comparison_index + 1]


print(two_sum([7, 3, 2, 4], 7))
