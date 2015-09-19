var singleplayer = {
    start:function() {
        $('.gamelayer').hide();
        singleplayer.currentLevel = 0;
        game.type = "singleplayer";
        game.team = "blue";
        singleplayer.startCurrentLevel();
    },
    exit:function()
    {
        $('.gamelayer').hide();
        $('#gamestartscreen').show();

    },
    currentLevel:0,
    startCurrentLevel:function()
    {
        var level = maps.singleplayer[singleplayer.currentLevel];
        $("#entermission").attr("disabled", true);

        game.currentMapImage = loader.loadImage(level.mapImage);
        game.currentLevel = level;

        game.offsetX = level.startX * game.gridSize;
        game.offsetY = level.startY * game.gridSize;

        if (loader.loaded)
        {
            $("#entermission").removeAttr("disabled");
        }
        else
        {
            loader.onload = function()
            {
                console.log("loader.onload");
                $("#entermission").removeAttr("disabled");
            }
        }

	    // Load the mission screen with the current briefing
	    $('#missonbriefing').html(level.briefing.replace('\n','<br><br>'));
	    $("#missionscreen").show();
    },
    play:function()
    {
        game.animationLoop();
        game.animationInterval = setInterval(game.animationLoop,game.animationTimeout);
        game.start();
    }
};
