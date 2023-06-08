def get_number(char: str) -> int:
    alpha_num = {
        "A": 10,
        "B": 11,
        "C": 12,
        "D": 13,
        "E": 14,
        "F": 15,
    }

    if char.isdigit():
        return int(char)

    return alpha_num[char]

def hex_to_rgb(hex: str) -> str:
    rgb = ""
    section_sum = 0

    for index, char in enumerate(list(hex.upper())):
        if index == 0:
            continue
        if index % 2 != 0:
            section_sum += get_number(char) * 16
        else:
            section_sum += get_number(char)
            rgb += str(section_sum)
            section_sum = 0

    return rgb


def hex_to_rgb_test():
    assert hex_to_rgb("#7DD0D7") == "125208215"
    assert hex_to_rgb("#162E2B") == "224643"
    assert hex_to_rgb("#25fb2f") == "3725147"

hex_to_rgb_test()
