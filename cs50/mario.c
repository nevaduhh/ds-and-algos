#include <cs50.h>
#include <stdio.h>

void repeat(int num);

int main(void)
{
  int num = get_int("How tall? ");
  for (int i = 0; i < num; i++)
  {
    int repeat_num = i + 1;

    repeat(repeat_num);
    repeat(0);
    repeat(repeat_num);

    printf("\n");
  }
}

void repeat(int num)
{
  if (num > 0)
  {
    for (int i = 0; i < num; i++)
    {
      printf("#");
    }
  }
  else
  {
    printf(" ");
  }
}