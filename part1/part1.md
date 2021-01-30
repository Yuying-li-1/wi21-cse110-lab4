1. It will print the length of prices. variable scope is global
2. It will print the last prices after discount. variable scope is global
3. It will print the rounded lasr prince after discount. variable scope is global
4. [50, 100, 150] the function will count the prince after 50% discount.
5. Error, no such variable. Since the variable i is defined inside for loop. 
6. Error, no such variable. The variable discounted price is only visible inside for loop
7. It will print the rounded lasr prince after discount. variable scope is local, it is visble in this function.
8. [50, 100, 150] the function will count the prince after 50% discount.
9. Error, no such variable. Since the variable i is defined inside for loop.
10. Error, no such variable. The variable discounted price is only visible inside for loop
11. It will print 0, since the variable finalPrice is const, so it is impossible to change it value
12. There is an error since we cannot change the value of finalPrice. If we ignore that line of code, the function will return [0, 0, 0] since the variable finalPrice is const, so it is impossible to change it value. If we change the variable finalPrice from const to let, it will return [50, 100, 150]
13. A.student.name <br>
    B.student['Grad Year'] <br>
    C.student.greeting();<br>
    D.student['Favorite Teacher'].name<br>
    E.student.courseLoad[0]
14. A.32 2 will be converted into<br> string "2", it will connected two strings <br>
    B.1 Numeric conversion happens in mathematical expressions automatically.<br>
    C.3 null converted into 0<br>
    D.3null null will be converted into string "null", it will connect 2 strings <br>
    E.4 true will be converted into 1<br>
    F.0 null and false will be converted into 0<br>
    G.3undefined undefinced will be converted into number NaN <br>
    H.NaN undefinced will be converted into string "undefined", but two strings connot be subtract
15. A.true string '2' becomes a number 2<br>
    B.false first char '2' is greater than '1'<br>
    C.true string '2' becomes a number 2<br>
    D.false they are not same type<br>
    E.false ture = 1<br>
    F.true Boolean(2) will be converted into Boolean true, and true === true.
16. == will convet the types of two variables to be same. === will not convert types
17. How are you? trur !=2, true = 1. so it will not go into if, Boolean(2) =  true, so it will go into else if
19. Array [6, 8, 10] <br>  
after run modifyArray([1,2,3], doSomething), for each number num in array [1,2,3], it will run doSomething(num,function(x)). Then it will run function(num+2). function(num+2) will return (num+2)*2 to dosomthing(num,function(x)). Then dosomthing(num,function(x)) will return (num+2)*2 to the for loop inside modifyArray([1,2,3], doSomething) and push the value into array newArr, and newArr will be returned.
21.  It will immediately print number '1' and number '4'.Then it will immedia6eooy print number '3'.After the function start to run 1 second, print out number '2'.
