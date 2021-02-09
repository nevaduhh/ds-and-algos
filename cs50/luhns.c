#include <cs50.h>
#include <math.h>
#include <stdio.h>
#include <string.h>

/*
    Luhn's Algorithm
        1. multiply every other digit by 2, starting with number's 2nd to last digit; add those products' digits together
        2. add sum to the sum of the digits that weren't multiplied by 2
        3. if total's last digit is 0, the number is valid

    AMEX
        - beings with 51, 52, 53, 54, 55
        - 15 digits long
    MASTERCARD
        - begins with 34, 37
        - 16 digits long
    VISA
        - begins with 4
        - 13 or 16 digits long
*/

int calculate_length(long num)
{
  long num_copy = num;
  int count = 0;

  while (num_copy != 0)
  {
    num_copy /= 10;
    ++count;
  }

  return count;
}

int calculate_sum_of_digits(int num)
{
  int n;
  int sum = 0;
  int remainder;

  n = num;

  while (n != 0)
  {
    remainder = n % 10;
    sum += remainder;
    n /= 10;
  }

  return sum;
}

string concatenate_digits(int digit_1, int digit_2)
{
  char s1[20];
  char s2[20];

  // convert both the integers to string
  sprintf(s1, "%d", digit_1);

  // handle VISA case
  if (digit_1 == 4)
  {
    return strcat(s1, s2);
  }

  sprintf(s2, "%d", digit_2);

  // concatenate both strings
  return strcat(s1, s2);
}

string determine_card_type(int digit_1, int digit_2)
{
  string string_digits = concatenate_digits(digit_1, digit_2);

  if (!strcmp(string_digits, "4"))
  {
    return "VISA";
  }

  if (!strcmp(string_digits, "34") || !strcmp(string_digits, "37"))
  {
    return "AMEX";
  }

  if (!strcmp(string_digits, "51") || !strcmp(string_digits, "52") || !strcmp(string_digits, "53") || !strcmp(string_digits, "54") || !strcmp(string_digits, "55"))
  {
    return "MASTERCARD";
  }

  return "INVALID";
}

int main(void)
{
  long credit_card_num = get_long("Credit card number? ");
  int length = calculate_length(credit_card_num);

  // validate length
  if (length == 13 || length == 15 || length == 16)
  {
    int even_nums_sum = 0;
    int odd_nums_sum = 0;

    int first_digit;
    int second_digit;

    // iterate over numbers to calculate sum of even & odd digits and first & last digits
    for (int i = length; i >= 0; i--)
    {
      int digit = credit_card_num % 10;

      if (i == 1)
      {
        first_digit = digit;
      }

      if (i == 2)
      {
        second_digit = digit;
      }

      int place = length % 2 == 0 ? i : i + 1;

      if (place % 2 != 0)
      {
        int double_digit = digit * 2;
        int digits_sum = calculate_sum_of_digits(double_digit);

        even_nums_sum += digits_sum;
      }
      else
      {
        odd_nums_sum += digit;
      }

      credit_card_num /= 10;
    }

    int total_sum = even_nums_sum + odd_nums_sum;
    int last_digit = total_sum % 10;

    if (last_digit == 0)
    {
      string card_type = determine_card_type(first_digit, second_digit);

      printf("%s\n", card_type);
    }
    else
    {
      printf("%s\n", "INVALID");
    }
  }
  else
  {
    printf("%s\n", "INVALID");
  }
}