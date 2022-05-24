<h1>The sierpian triangle</h1>

![image](https://user-images.githubusercontent.com/53167193/169936371-4f4bd441-e306-49a9-b8ae-db0b953176d9.png)
 
In this picture we have black triangle and transparent triangles inside of him. Lets call black triangle the main triangle. Inside him we have middle transparent triangle. That middle triangle has upper, left and right triangles that have same rule as main triangle. That means we will use recursion.
Lets first draw main triangle. In html file we have to make canvas

![image](https://user-images.githubusercontent.com/53167193/169928558-8e198f64-143b-4249-ac3c-09a5187bb763.png)

Then in js we insert this line so we can draw on it:
 
![image](https://user-images.githubusercontent.com/53167193/169928566-3e7dd22b-ea3b-4326-88bc-4a6d064ae8ba.png)

![image](https://user-images.githubusercontent.com/53167193/169928576-d2eec9fb-28c0-4879-b254-d7abb49b9127.png)

Every drawn traingle is drawn with three points in space, secondPoint is topPoint of main triangle. We can’t put 0 for y because than it won’t be equilateral triangle, whiteSpace is space between top point of triangle and top side of square in background.

![image](https://user-images.githubusercontent.com/53167193/169928659-77739200-1403-4a09-97b6-90411bd7cc68.png)

![image](https://user-images.githubusercontent.com/53167193/169928671-1416adff-9bdd-4e9f-b967-1011b3088ac6.png) 
 
drawTriangle function draws triangle in canvas with fill color and three points in space using basic functions of canvas.
Now lets add input for color and button which will trigger mainDrawFunc and select it in js

![image](https://user-images.githubusercontent.com/53167193/169928705-e3fda222-5f3e-4ec3-a878-446e8980fdc1.png)

![image](https://user-images.githubusercontent.com/53167193/169928712-e221da03-002e-44ff-b838-ead1f67558f0.png)
 
Now in mainDrawFunc we will draw main triangle and call sierpianTriangle function which will draw transparent triangles.
 
![image](https://user-images.githubusercontent.com/53167193/169928736-bd19c8bb-e314-48a0-8c27-4f66c3d11158.png)


In sierpianTriangle function we want to draw middle triangle, the rule for him is that he will always have height that is twice smaller than the parent triangle. Thats why we will move y coordinate of left and right point for height / 2 from top point y coordinate. For x coordinates for those two points we see that left one is 1/4 of triangle length moved to left from top point x coordinate, and the right one to the right.

![image](https://user-images.githubusercontent.com/53167193/169928759-58848bcf-4222-415b-a062-73f9d1aa4bfc.png)
 
Also the bottom point x coordinate will always be the same as the top point x coordinate of the parent one. The bottom point y coordinate will always be the height of parent traingle moved from top point y coordinate.

![image](https://user-images.githubusercontent.com/53167193/169928780-98a6cf4e-ced7-4b30-91f4-e6c3c7e6fed7.png)
 
This is what we want to have after this logic after which we will draw this middle triangle
 
![image](https://user-images.githubusercontent.com/53167193/169928803-83dec8a5-a674-4d3c-9a84-89680fc1f0ae.png)

For this we needed helper function triangleHeight which only uses basic math:

![image](https://user-images.githubusercontent.com/53167193/169928822-ccd49b8b-d710-4710-aa31-dfb1cf92c951.png)

Now we want to find out where are tops of other three triangles so we can then call recursion and do the same things for them
The top point of upper triangle is the same as the top point of the parent triangle:

![image](https://user-images.githubusercontent.com/53167193/169928850-57b5fcd2-92b0-4d6b-9a6e-8849aeb26ecd.png)

The top point of the left triangle is the same as the left point of middle triangle that we created earlier:

![image](https://user-images.githubusercontent.com/53167193/169928950-8db401c8-1592-414e-8734-2341f2a2f26f.png)

The top point of the right triangle is the same as the right point of that same middle triangle:

![image](https://user-images.githubusercontent.com/53167193/169928975-c637c69a-3c02-4403-b53a-aec23dc2e29a.png)

Now, knowing that each of this three triangles will always have length that is twice smaller and it should have number of triangles in depth decreased for one we call recursion:

![image](https://user-images.githubusercontent.com/53167193/169928985-ed2c17d9-d6aa-4e4f-9d60-7a483207d151.png)

That’s it we draw are sierpian triangle.
