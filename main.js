window.onload = async() => 
{
    /*************************** GLOBAL CONSTANTS ***************************/
    const canvas = document.getElementById('skyboxCanvas');
    const ctx    = canvas.getContext('2d');
    const skyboxImage = await loadImage("/sources/images/skybox_f.jpg");
    /***********************************************************************/


    /***************************** GLOBAL VARS *****************************/
    let offsetX = 0;
    /***********************************************************************/

    /**
     * Loads and return an image asyncronously with the use of promises
     * @param {String} src 
     * @returns Promise
     */
    function loadImage(src)
    {
        return new Promise((res, rej) => {
            const img = new Image();

            img.onload = () => res(img);
            img.onerror = rej;
            img.src = src;
        });
    }    

    /**
     * Check when the pointer lock element has changed to be able to swap this state
     */
    function listenCaptureChange()
    {
        if (document.pointerLockElement === canvas) 
        {
            console.log("The pointer lock status is now locked");
            document.addEventListener("mousemove", mousemove, false);
        } 
        else
        {
            console.log("The pointer lock status is now unlocked");
            document.removeEventListener("mousemove", mousemove, false);
        }
    }

    /**
     * Keep track and calculates the movement difference within the previous and the actual position of the
     * cursor, update the current horizontal offset position of the mouse to use in renderization
     * @param {MouseMoveEvent} ev 
     */
    function mousemove(ev)
    {
        const deltaX = ev.movementX;

        offsetX += deltaX;
        offsetX = offsetX < 0 ? canvas.width - 1 : offsetX;
        offsetX %= canvas.width;
    }

    /**
     * Render and updates the entire scene
     */
    function render() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(skyboxImage, -offsetX, 0, canvas.width, canvas.height);
        ctx.drawImage(skyboxImage, -offsetX + canvas.width, 0, canvas.width, canvas.height);

        requestAnimationFrame(render);
    }

    /**
     * Initialize everything
     */
    function setup()
    {
        canvas.width  = window.innerWidth;
        canvas.height = window.innerHeight;

        canvas.addEventListener("click", () => {
            if (!document.pointerLockElement) {
                canvas.requestPointerLock({
                    unadjustedMovement: true,
                });
            }
        });

        document.addEventListener("pointerlockchange", listenCaptureChange, false);
    }

    setup();
    render();

}