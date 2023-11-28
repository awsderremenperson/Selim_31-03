var numbers = [123, 234, 256, 345, 456, 567, 543, 67, 55, 23, 28, 50];
var newArray = [];

for (var i = 0; i < numbers.length; i++) {
    var numString = numbers[i].toString();
    if (numString[0] === '2' || numString[0] === '5') {
        newArray.push(numbers[i]);
    }
}

console.log(newArray);


var tags = ['li', 'div', 'li', 'p', 'h1', 'p', 'h1', 'div', 'div', 'li', 'h1', 'p', 'h1', 'ol', 'br'];
var tagCounts = {};

for (var i = 0; i < tags.length; i++) {
    var tag = tags[i];
    tagCounts[tag] = (tagCounts[tag] || 0) + 1;
}

console.log(tagCounts);


var sortedTagCounts = Object.entries(tagCounts).sort((a, b) => b[1] - a[1]);
var sortedTagCountsObject = {};

for (var [tag, count] of sortedTagCounts) {
    sortedTagCountsObject[tag] = count;
}

console.log(sortedTagCountsObject);
