# A simple skybox implementation with pointer lock API

This is a simple implementation of a 2D skybox with the use of `HTMLCanvas` Element and `PointerLock API`.
To execute this demo you only need to run it `within a server`, then click anywhere on the page and move the mouse to enjoy... you could use the `ESC` scape to gain access againt to your mouse.

## Note: 

Since the idea is to reproduce an image that simulates an infinite sky. Not all images can be used, the are some requirements for the images that you can use, these are:

* The image needs to be perfectly simetric in each edges (the left side and the right side).
* The right part of the image needs to be reverted (from the middle to the end) and needs to keep the simetry in the image.
* The left part of the image needs should fit exactly with the reversed right side of the image.
* Join the two parts and then you can use this image to use it as a perfect 2D skybox, remember to keep the simetry it's WAY important to make a right skybox.
