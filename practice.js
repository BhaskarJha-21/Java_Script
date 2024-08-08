const student = {
    Name:"Bhaskar",
    Phone:"9289349445",
    Marks:"91%"
}
// console.log(student);
let ans = "2"+3
// console.log(ans);
// console.log(typeof ans);


const dictionary = {
    "serendipity": "the occurrence and development of events by chance in a happy or beneficial way",
    "ephemeral": "lasting for a very short time",
    "petrichor": "a pleasant smell that frequently accompanies the first rain after a long period of warm, dry weather",
    "sonder": "the realization that each random passerby is living a life as vivid and complex as your own",
    "luminescence": "the emission of light by a substance that has not been heated"
};

// Function to look up the meaning of a word
function lookUpWord(word) {
    const meaning = dictionary[word];
    if (meaning) {
        console.log(`The meaning of "${word}" is: ${meaning}`);
    } else {
        console.log(`The word "${word}" is not in the dictionary.`);
    }
}

lookUpWord("sonder")
lookUpWord("apple")