//Imports.
const { table } = require("table");

//Testing strings.
const shortString = "This is just a basic, short string for counting words.";
const averageString = "At the end of the day, you are solely responsible for your success and your failure. And the sooner you realize that, you accept that, and integrate that into your work ethic, you will start being successful. As long as you blame others for the reason you aren't where you want to be, you will always be a failure.";
const repeatedWords = "Word word word word Word WORD wORD word word WoRd word word lots of words.";

//Counter function. Takes the string to parse and returns a map with the words and count for each.
function counter(str)
{
    //New empty map.
    const wordMap = new Map();

    //For each word in the given string.
    str.toLowerCase().replace(/[,\.]/g, "").split(" ").forEach(word =>
    {
        //If the word is already in the map, increase it.
        if(wordMap.has(word))
            wordMap.set(word, wordMap.get(word) + 1);
        //Else its new and needs to be added with a count of one.
        else
            wordMap.set(word, 1);
    });

    //Return the map converted to a 2d array.
    return convert(wordMap);
}

//Function to take the map and turn it into a 2d array.
function convert(map)
{
    //Empty array.
    const array = [];

    //Add an entry for each entry in the map.
    map.forEach((value, key) =>
    {
        array.push([key, value]);
    });

    //Return the array.
    return array;
}

//Testing.
console.log(table(counter(averageString)));
