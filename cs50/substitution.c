#include <stdio.h>
#include <string.h>
#include <cs50.h>
#include <ctype.h>

// TODO: break out validation and encryption into separate functions for readability

int main(int argc, string argv[])
{
  if (argc != 2)
  {
    printf("Not enough arguments\n");
    return 1;
  }

  string key = argv[1];
  int str_length = strlen(key);

  if (str_length != 26)
  {
    printf("Cipher is not long enough\n");
    return 1;
  }

  for (int i = 0; i < str_length; i++)
  {
    char letter = key[i];
    if (!isalpha(letter))
    {
      printf("Invalid character");
      return 1;
    }

    for (int j = i; j < str_length; j++)
    {
      char second_char = key[i + 1];

      if (second_char == letter)
      {
        printf("duplicate");
        return 1;
      }
    }
  }

  string original_string = get_string("plaintext: ");

  int original_string_length = strlen(original_string);

  char ciphered_text[original_string_length];
  ciphered_text[original_string_length] = '\0';

  for (int i = 0; i < original_string_length; i++)
  {
    char letter = original_string[i];

    if (isspace(letter))
    {
      ciphered_text[i] = ' ';
    }
    else if (!isalpha(letter))
    {
      ciphered_text[i] = letter;
    }
    else if (islower(letter))
    {
      char keyed_char = key[(int)toupper(letter) - 65];

      ciphered_text[i] = tolower(keyed_char);
    }
    else
    {
      char keyed_char = key[(int)letter - 65];

      ciphered_text[i] = toupper(keyed_char);
    }
  }

  printf("ciphertext: %s\n", ciphered_text);

  return 0;
}