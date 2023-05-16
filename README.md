# What is method in JS?
    A method is a block of code which only runs when it is called.
    You can pass data, known as parameters, into a method.
    Methods are used to perform certain actions, and they are also known as functions.

# String in JavaScript
# How to create string
    1. double quotes - "HELLO"
    1. single quotes - 'HELLO'
    1. backticks - 'HELLO ${hi}'

# JavaScript string methods
    1. charAt()
    1. concat()
    1. trim()
    1. includes()
    1. indexOf()
    1. replace()
    1. replaceAll()
    1. repeat()
    1. slice()
    1. substring()
    1. split()
    1. toString()
    1. toLowerCase()
    1. toUpperCase()

# charAt()
The charAt() method returns the character at a specified index (position) in a string.
The index of the first character is 0, the second 1, ...
The index of the last character is string length -1 .


# concat()
The concat() method joins two or more strings.
The concat() method does not change the existing strings.
The concat() method returns a new string.

# replace()
The replace() method searches a string for a value or a regular expression.
The replace() method returns a new string with the value(s) replaced.
The replace() method does not change the original string.

# replaceAll()
The replaceAll() method returns a new string with all matches of a pattern replaced by
a replacement.

# split()
The split() method splits a string into an array of substrings. The split() method returns the new
array. The split() method does not change the original string. If (" ") is used as separator, the string is split between words.

# substring (start, end)
The substring() method extracts characters, between two indices (positions), from a string, and
returns the substring.
The substring() method extracts characters from start to end (exclusive).
The substring() method does not change the original string.
If start is greater than end, arguments are swapped: (4, 1) = (1, 4).
Start or end values less than 0, are treated as 0.


# slice (start, end)
The slice() method returns a shallow copy of a portion of an array into a new array object
selected from start to end ( end not included) where start and end represent the index of items
in that array.


# toLoverCase()
The toLowerCase() method converts a string to lowercase letters.
The toLowerCase() method does not change the original string.

# toUpperCase()
The toUpperCase() method converts a string to uppercase letters, using current locale.
The toUpperCase() method does not change the original string

# trim()
Method trim() removes whitespace from both sides of a string.
The trim() method does not change the original string.

# includes()
The includes() method returns true if a string contains a specified string.
Otherwise it returns false.
The includes() method is case sensitive

# toString()
The toString() method returns a string representing the object.
By default toString() takes no parameters.

# charAt()
The indexOf() method returns the position of the first occurrence of a value in a string.

The indexOf() method returns -1 if the value is not 
found.

The indexOf() method is case sensitive.

# repeat()
The repeat() method creates a new string by repeating the given string a specified number of
times and returns it.

# at()
The at() method takes an integer value and returns a new String.
This method allows for positive and negative integers. Negative integers count
back from the last string character.

# JavaScript Number methods
# Math.round(), ceil(), floor()
The Math.floor() function rounds down a number to the next smallest integer

The Math.round() function returns the number rounded to the nearest integer.

The ceil() method rounds a decimal number up to the next largest integer and returns it.

# Math.max() and Math.min()
The max() method finds the maximum value among the specified values and returns it.

The min() method finds the minimum value among the specified values and returns it.

# Math.pow and Math.sqrt()
The pow() method computes the power of a number by raising the second argument
to the power of the first argument

The sqrt() method computes the square root of a specified number and returns it

# Math.abs() and Math.random()
The abs() method finds the absolute value of the specified number (without any sign) and returns it.

The Math.random() function returns a floating-point, pseudo-random number between 0 (inclusive)
and 1 (exclusive).

# isNaN()
The isNaN() function checks if a value is NaN (Not-a-Number) or not.

# Thanks