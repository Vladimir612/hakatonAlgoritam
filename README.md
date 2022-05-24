<h1>The sierpian triangle</h1>

<p>Our task will be to draw the next triangle in html using js. For drawing we will use canvas.</p>

![image](https://user-images.githubusercontent.com/53167193/169936454-064c8ecc-a103-4c12-9df8-a8a6ef89f8e5.png)

In this picture we have purple triangle and transparent triangles inside of him. Lets call purple triangle the main triangle. 

![image](https://user-images.githubusercontent.com/53167193/170148626-c9f82dc2-8256-4e3a-8fe4-79cc89a0d124.png)

Inside him we have middle transparent triangle. That middle triangle has upper, left and right triangles that have same rule as main triangle. That means we will use recursion.

![image](https://user-images.githubusercontent.com/53167193/170148675-adf56a34-ed05-4d69-8de3-54c5d2c3f4b0.png)

Lets first draw main triangle. In html file we have to make canvas

![image](https://user-images.githubusercontent.com/53167193/169936596-d17a1e8f-3671-4fea-8feb-44291103277b.png)

Then in js we insert this line so we can draw on it:
 
![image](https://user-images.githubusercontent.com/53167193/169937079-78b10265-95b0-4a3f-88b4-30b7d2a92084.png)

![image](https://user-images.githubusercontent.com/53167193/169937213-ddda5afa-3831-4735-8203-1b5c321d5db9.png)

Every drawn traingle is drawn with three points in space, secondPoint is topPoint of main triangle. 

We can’t put 0 for y because than it won’t be equilateral triangle, whiteSpace is space between top point of triangle and top side of square in background.

![image](https://user-images.githubusercontent.com/53167193/170054675-20fb2dd4-c784-43c5-86e9-77c2742bfc2b.png)

![image](https://user-images.githubusercontent.com/53167193/169937311-45de82a8-408f-492b-80c0-5770672ce40f.png)

![image](https://user-images.githubusercontent.com/53167193/169937383-2aa8c745-cafe-4076-86b9-31459f28d8cf.png)
 
drawTriangle function draws triangle in canvas with fill color and three points in space using basic functions of canvas.
Now lets add input for color and button which will trigger mainDrawFunc and select it in js

![image](https://user-images.githubusercontent.com/53167193/169937496-e4e8a1b8-dbe5-402b-ac6f-efa7925b10a3.png)

![image](https://user-images.githubusercontent.com/53167193/169937608-5c705f49-9971-4619-9239-13e462bde0d9.png)
 
Now in mainDrawFunc we will draw main triangle and call sierpianTriangle function which will draw transparent triangles.
 
![image](https://user-images.githubusercontent.com/53167193/169937707-1532604f-48bf-40ef-b3a9-5c531cce67e9.png)

In sierpianTriangle function we want to draw middle triangle, the rule for him is that he will always have height that is twice smaller than the parent triangle. Thats why we will move y coordinate of left and right point for height / 2 from top point y coordinate. For x coordinates for those two points we see that left one is 1/4 of triangle length moved to left from top point x coordinate, and the right one to the right.

![image](https://user-images.githubusercontent.com/53167193/169937778-ac87667e-f655-45b1-91a1-a6ac64e4a685.png)
 
Also the bottom point x coordinate will always be the same as the top point x coordinate of the parent one. The bottom point y coordinate will always be the height of parent traingle moved from top point y coordinate.

![image](https://user-images.githubusercontent.com/53167193/169937814-25dd67fb-d7f4-4be8-8c4d-8976960c8df4.png)

This is what we want to have after this logic after which we will draw this middle triangle
 
![image](https://user-images.githubusercontent.com/53167193/169937946-f88766cd-a486-45e3-8226-4033bc4d073d.png)

For this we needed helper function triangleHeight which only uses basic math:

![image](https://user-images.githubusercontent.com/53167193/169938028-c109fc31-52f6-4b6e-8413-d3cf7b52533b.png)

Now we want to find out where are tops of other three triangles so we can then call recursion and do the same things for them
The top point of upper triangle is the same as the top point of the parent triangle:

![image](https://user-images.githubusercontent.com/53167193/169938108-f0378dc5-f174-47f0-97fa-22a496637173.png)

The top point of the left triangle is the same as the left point of middle triangle that we created earlier:

![image](https://user-images.githubusercontent.com/53167193/169938193-198bc6c1-1d63-400f-9298-354caa80dd96.png)

The top point of the right triangle is the same as the right point of that same middle triangle:

![image](https://user-images.githubusercontent.com/53167193/169938319-3c6c0d66-662c-43bf-b06a-670202fb1468.png)

Now, knowing that each of this three triangles will always have length that is twice smaller and it should have number of triangles in depth decreased for one we call recursion:

![image](https://user-images.githubusercontent.com/53167193/169938395-abcd4aa2-3a24-459e-afd5-ab09ec3170cc.png)

That’s it we draw are sierpian triangle.
