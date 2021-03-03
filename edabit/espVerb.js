/*
Verbos Regulares
The conjugations for all Spanish regular verbs can be built by using the three forms for verbs ending in -ar, -er and -ir.

Create a function that takes a verb as string, and returns a string with the six person/number combinations (like in the examples). Watch out for verbs ending in -ir (check the notes). Try programming the construction rather than forming structures with arrays.

Examples
espVerb("pasar") ➞ "Yo paso, tú pasas, él pasa, nosotros pasamos, vosotros pasáis, ellos pasan."

espVerb("unir") ➞ "Yo uno, tú unes, él une, nosotros unimos, vosotros unís, ellos unen."

espVerb("correr") ➞ "Yo corro, tú corres, él corre, nosotros corremos, vosotros corréis, ellos corren."
The smallest category of regular Spanish verbs is those that end in -ir. To conjugate them, remove the infinitive ending and then add one of the following verb endings:

...	Singular	Plural
1st person	yo -o	nosotros -imos
2nd person	tú -es	vosotros -ís
3rd person	él -e	ellos -en
Notes
This is for European Spanish, so the second person plural is vosotros pasais, not ustedes pasan
We're only using regular Spanish verbs. So no yo conozco, tú conoces, etc.
Pay attention to the accent marks! Feel free to copy them from the test page if you want.
*/

/* 
  1. get second to last char
  2. slice last two letters from verb
  3. conditionals for handling regular vs irregular verbs
    4. conjugate with sliced verb and string literal
*/

// can we assume verb will always be present, and will end in er, ir, ar; or do we have to validate

const AE_VERBS = {
  a: 'á',
  e: 'é',
};

const espVerb = (verb) => {
  const secondToLastChar = verb[verb.length - 2];
  const slicedVerb = verb.slice(0, -2);

  if (AE_VERBS[secondToLastChar]) {
    return `Yo ${slicedVerb}o, tú ${slicedVerb}${secondToLastChar}s, él ${slicedVerb}${secondToLastChar}, nosotros ${slicedVerb}${secondToLastChar}mos, vosotros ${slicedVerb}${AE_VERBS[secondToLastChar]}is, ellos ${slicedVerb}${secondToLastChar}n.`
  }

  return `Yo ${slicedVerb}o, tú ${slicedVerb}es, él ${slicedVerb}e, nosotros ${slicedVerb}imos, vosotros ${slicedVerb}ís, ellos ${slicedVerb}en.`;
};

console.log(espVerb("pasar"))
