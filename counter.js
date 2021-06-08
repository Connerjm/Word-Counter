//Counter function. Takes the string to parse and returns a map with the words and count for each.
function counter(str)
{
    //New empty map.
    const wordMap = new Map();

    //For each word in the given string.
    str.toLowerCase().replace(/[,"'!?\.]/g, "").split(" ").forEach(word =>
    {
        //If the word is already in the map, increase it.
        if(wordMap.has(word))
            wordMap.set(word, wordMap.get(word) + 1);
        //Else its new and needs to be added with a count of one.
        else
            wordMap.set(word, 1);
    });

    //Return the map converted to a 2d array.
    return wordMap;
}

/* Helper methods. */

//Converts the map to a 2d array.
function to2DArray(map)
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

module.exports = { counter, to2DArray };