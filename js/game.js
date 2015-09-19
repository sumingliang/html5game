$(window).load(function() {
    // body...
    game.init();
});

var game = {
    init:function()
    {
        loader.init();
        $('.gamelayer').hide();
        $('#gamestartscreen').show();

        game.backgroundCanvas = document.getElementById('gamebackgroundcanvas');
        game.backgroundContext = game.backgroundCanvas.getContext('2d');

        game.foregroundCanvas = document.getElementById('gameforegroundcanvas');
        game.foregroundContext = game.foregroundCanvas.getContext('2d');


        game.canvasWidth = game.backgroundCanvas.width;
        game.canvasHeight = game.foregroundCanvas.height;

    },
    start:function() {
        // body...
        $('.gamelayer').hide();
        $('#gameinterfacescreen').show();
        game.running = true;
        game.refreshBackground = true;
        game.drawingLoop();

    },
    gridSize:20,
    backgroundChanged:true,

    animationTimeout:100,
    offsetX:0,
    offsetY:0,
    animationLoop:function()
    {

    },
    drawingLoop:function()
    {
        if(game.refreshBackground)
        {
            game.backgroundContext.drawImage(game.currentMapImage,game.offsetX,game.offsetY,game.canvasWidth,
            game.canvasHeight,0,0,game.canvasWidth,game.canvasHeight);
            game.refreshBackground = false;
        }
        if (game.running)
        {
            requestAnimationFrame(game.drawingLoop);
        }
    }
}
