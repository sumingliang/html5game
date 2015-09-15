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
    }
}
