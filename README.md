# Random Password Generator!

## Third BootCamp Assignment - Due Mar. 12, 2020

I really enjoyed this exercise! I was a little overwhelmed with it at first, but once I got started it fell into place pretty quickly.

---

* My first step with this project was to outline the needed steps on my `script.js` with pseudo-code
* The first task was creating all the possible characters that could be used in a password.  
    * At first I was looking for a piece of `js` that functions similarly to the `range()` function in Python in order to produce the desired character ranges, but I couldn't find anything that functions the same way
    * Once I remembered that the individual characters in a string can be accessed by index number (same as an array) everything else fell into place nicely.

## Password Length Prompt 

* The best method I came up with for this is a `do/while` loop which would execute the code for the prompt at least once before testing against the condition.  I used a variable `i` as a simple counter to escape the loop once the conditions were met.

## Character Choices 

* Each confirm statement was tied to a matching variable which saved the boolean response.  In the event of a `true` response, the corresponding character would be added to the empty `userChar` variable using string concatenation. 

## Content Check 

* After recording all the user choices I wrote a simple `if` statement that simply checks if there is anything in the `userChar` variable. If the string is empty the user is alerted of the error and tells them to start again. If the string contains anything, the program continues to...

## Generate the Password! 

* Here, the initial length entered by the user is used to determine the length of a `for` loop which adds a randomy generated character from the `userChar` variable into a local `pass` variable which is then returned after the loop completes. 

### Afterthoughts 

I found myself falling down a rabbit hole once I got this program running: what happens if the backslash `\` or double quote `"` is placed into the resulting randomly generated password? I was able to get the characters to be available for use, but my worry was that the characters - when pulled from the `var special` and placed onto the variable `userChar` or to the final variable `pass`, does the character break the resulting string? After some testing I found that the special characters were appearing in the randomly generated passwords without issue! 