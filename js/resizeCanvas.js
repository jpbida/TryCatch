var wrapper = document.getElementById("wrapper");

/**
 * Resizes the canvas when the window is resized.
 */
function resizeCanvas() {
  // Test if the canvas is not null first
  if (game.init()) {
    // Resize background and elements canvas
    game.bgCanvas.width = wrapper.clientWidth;
    game.bgCanvas.height = wrapper.clientHeight;
    game.elementCanvas.width = wrapper.clientWidth;
    game.elementCanvas.height = wrapper.clientHeight;

    // Resize player canvas and redraw player sprite
    game.playerCanvas.width = wrapper.clientWidth;
    
    // Change height of player canvas for mobile
    if (window.innerWidth >= 550) {
      game.playerCanvas.height = 178;
      elementWidth = 70;
      elementHeight = 70;
      bonusWidth = 70;
      bonusHeight = 70;
    } else {
      game.playerCanvas.height = 119;
      elementWidth = 40;
      elementHeight = 40;
      bonusWidth = 40;
      bonusHeight = 40;
    }
    
    game.player.draw();
  }
}
resizeCanvas();

window.addEventListener("resize", resizeCanvas, false);