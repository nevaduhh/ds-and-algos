function splitNCases(str, cases) {
  if (str.length % cases !== 0) {
    return ['Error'];
  }

  const output = [];
  const quotient = str.length / cases;

  for (let i = 0; i < str.length; i += quotient) {
    const substring = str.substring(i, i + quotient);

    output.push(substring);
  }

  return output;
}

console.log(splitNCases("Strengthened", 6))