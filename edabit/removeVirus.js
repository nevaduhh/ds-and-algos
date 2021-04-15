// Remove the Computer Virus
// Your computer might have been infected by a virus! Create a function that finds the viruses in files and removes them from your computer.

// Examples
// removeVirus("PC Files: spotifysetup.exe, virus.exe, dog.jpg") ➞ "PC Files: spotifysetup.exe, dog.jpg"

// removeVirus("PC Files: antivirus.exe, cat.pdf, lethalmalware.exe, dangerousvirus.exe ") ➞ "PC Files: antivirus.exe, cat.pdf"

// removeVirus("PC Files: notvirus.exe, funnycat.gif") ➞ "PC Files: notvirus.exe, funnycat.gif")
// Notes
// Bad files will contain "virus" or "malware", but "antivirus" and "notvirus" will not be viruses.
// Return "PC Files: Empty" if there are no files left on the computer.

/*
  INPUT:
    string
  
  OUTPUT:
    string, with the words "virus" and "malware" removed
  
  STEPS:
    // split the array by whitespace
    // filter the split array
      // if word contains "malware"
        // return false
      // if word conrtains "virus"
        // if word is not "antivirus" || "notvirus"
          // return false
      // return true
*/

const removeVirus = sentence => {
  const PC_FILES_PREFIX = 'PC Files';

  const files = sentence
    .split(/[ ,]+/)
    .slice(2)
    .filter(file => {
      if (file.match('malware')) {
        return false;
      }

      if (file.match('virus')) {
        return !!(file.match('antivirus') || file.match('notvirus'));
      }

      return true;
    });
  
  if (files.length) {
    const joined = files.join(', ');

    console.log(files[files.length - 1])

    return (joined[joined.length - 1] === ' ') 
      ? `${PC_FILES_PREFIX}: ${joined.slice(0, -2)}`
      : `${PC_FILES_PREFIX}: ${joined}`;
  }

  return `${PC_FILES_PREFIX}: Empty`

  // return files.length
  //   ? `${PC_FILES_PREFIX}: ${files.join(', ').slice(0, -2)}`
  //   : `${PC_FILES_PREFIX}: Empty`;
};

// const removeVirus = (sentence) => {
//   // split the array by whitespace
//   const files = sentence
//     .split(', ')
//     .filter((word) => {
      // if (word.match('malware')) {
      //   return false;
      // }

      // if (word.match('virus')) {
      //   if (word.match('antivirus') || word.match('notvirus')) {
      //     return true;
      //   }

      //   return false;
      // }

//       return true;
//     })
//     .join(' ');

//     return (files.length <= 2) ? `${files}: Empty` : files;
// }

const result = removeVirus("PC Files: antivirus.exe, cat.pdf, lethalmalware.exe, dangerousvirus.exe");

console.log(result);
