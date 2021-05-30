//Testing strings.
const shortString = "This is just a basic, short string for counting words.";
const averageString = "At the end of the day, you are solely responsible for your success and your failure. And the sooner you realize that, you accept that, and integrate that into your work ethic, you will start being successful. As long as you blame others for the reason you aren't where you want to be, you will always be a failure.";
const repeatedWords = "Word word word word Word WORD wORD word word WoRd word word lots of words.";

//Counter function. Takes the string to parse and returns a map with the words and count for each.
function counter(str)
{
    //New empty map and array of individual words.
    const wordCount = new Map();
    const words = str.toLowerCase().split(" ");

    //For each word in the given string.
    words.forEach(word =>
    {
        //If the word is already in the map, increase it.
        if(wordCount.has(word))
            wordCount.set(word, wordCount.get(word) + 1);
        //Else its new and needs to be added with a count of one.
        else
            wordCount.set(word, 1);
    });

    //Return the map of words and their respective counts.
    return wordCount;
}

//Testing.
console.table(counter(repeatedWords));