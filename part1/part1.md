Part 1: Intro to Javascript

    Part 1a: A quick introduction
    1.) "values added: 20"

    2.) "final result: 20"

    3.) "values added: 20"

    4.) error because the variable "result" is not in the scope of this statement

    5.) "values added: 0"

    6.) error because the variable "result" is not in the scope of this statement

    Part 1b: A little bit more of a challenge...
    1.) Line 12 will print 3 because the for loop will increment i while 
    i < prices.length is true, and prices.length = 3. Also, since i is declared as a var, it is visible outside of the for loop.

    2.) Line 13 will print 150 because in the last iteration of the for loop, line 7 will assign the value 300 * (1- 0.5), and the value in discountedPrice will be visible outside of the for loop.

    3.) Line 14 will print 150 because in the last iteration of the for loop, line 8 will basically assign the value in discountedPrice to finalPrice.

    4.) The function will return the array discounted filled with three values: [50, 100, 150] because the for loop populates the array, and since discounted is a var it has function scope.

    5.) There will be an error because i is declared in the for loop and is not visible from line 12.

    6.) There will be an error because discountedPrice is declared within a code block and is not visible from line 13.

    7.) Line 14 will print 0 because finalPrice is declared as 0 within the same code block that line 14 is in; any attempted changes in the other code block will not carry over because it is not in scope.

    8.) The function will return the array discounted populated, just like in problem 4.

    9.) line 11 will have an error because i is declared in the for loop and is not visible.

    10.) line 12 will print 3 because the length is defined at the beginning of the function as the length of the prices array.

    11.) The function will return an empty array because discounted is declared as a const, meaning its value cannot be changed and so it remains empty.

    12.)
    A.) student.name
    B.) student["Grad Year"]
    C.) student.greeting
    D.) student["Favorite Teacher"].name
    E.) student.courseLoad[0]

    13.) 
    A.) 32, because the integers change to string representation
    B.) 1, because the subtraction changes strings to integers
    C.) 3, because null equates to zero
    D.) 3null, because the 3 changes to its string representation and the strings are concatenated
    E.) 4, because true equates to one
    F.) 0, because each one equates to zero
    G.) 3undefined, because 3 changes to its string representation and the strings are concatenated
    H.) NaN, because the conversion failed

    14.) 
    A.) true, the 2 is converted to an integer for comparison
    B.) false, both are strings so it compares based on which character comes first alphanumerically
    C.) true, the string becomes an integer
    D.) false, the strict equality operator checks without conversion
    E.) false, true becomes one
    F.) true, because the boolean() changes 2 into a boolean value, and anything not on a list of false/0 values becomes true/1.

    15.) == checks for equality with conversion, while === checks for strict equality without converting either one of the things being compared.

    16.) see part1b-question16.js

    17.) the function doSomething is passed to modifyArray as a parameter "callback", so doSomething can be called within modifyArray in line 4. What the function does is go through the array and call doSomething on each value in the array. The result is [2,4,6].

    18.) see part1b - question18.js

    19.) The function will print "1", then after one second will print "2", then immediately print "3", then print 4.