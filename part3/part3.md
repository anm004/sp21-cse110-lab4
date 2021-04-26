1.) The bug in the site is that the num1 and num2 are passed as strings, so the addition concatenates them as strings and result is returned as a string.

2.) Typecasting num1 and num2 to ints within calculateSum should fix the issue.
![Bug Fix](bugfix.png)