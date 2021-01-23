/*
Looping a triangle

Write a loop that makes seven calls to console.log to output the following
triangle:

#
##
###
####
#####
######
#######

It may be useful to know that you can find the length of a string by writing
.length after it.
*/


// My code
let triangle = '#';
for (let counter = 1; counter <= 7; counter++) {
    console.log(triangle);
    triangle += '#';
}