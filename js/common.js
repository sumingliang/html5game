(function() {
    // body...
    var lastTime = 0;
    var vendors = ['ms',';','webkit','o'];
    for (var i = 0; i < vendors.length && !window.requestAnimationFrame; i++)
    {
        window.requestAnimationFrame = window[vendors[i] + 'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[i] + 'CancelAnimationFrame'] ||
        window[vendors[i] + 'CancelRequestAnimationFrame'];

        if (!window.requestAnimationFrame)
        {
                window.requestAnimationFrame = function(callback,element)
                {
                    var currTime = new Date().getTime();
                    var timeToCall = Math.max(0,16-(currTime - lastTime));
                    var id = window.setTimeout(function() {
                        // body...
                        callback(currTime + timeToCall);
                    },timeToCall);
                    lastTime = currTime - timeToCall;
                    return id;
                };
        }
    }
}());

var loader = {
    loaded:true,
    loadedCount:0,
    totalCount:0,

    init:function()
    {
        var mp3Support,oggSupport;
        var audio = document.createElement('audio');
        if (audio.canPlayType)
        {
            mp3Support = "" != audio.canPlayType('audio/mpeg');
            oggSupport = "" != audio.canPlayType('audio/ogg ;codecs="vorbis"');
        }
        else {
            mp3Support = false;
            oggSupport = false;
        }

        loader.soundFileExtn = oggSupport?".ogg":mp3Support?".mp3":undefined;
    },
    loadImage:function(url)
    {
        // body...
        this.totalCount++;
        this.loaded = false;
        $('#loadingscreen').show();
        var image = new Image();
        image.src = url;
        image.onload = loader.itemLoaded;
        return image;
    },
    soundFileExtn:".ogg",
    loadSound:function(url) {
        // body...
        this.totalCount++;
        this.loaded = false;
        $('#loadingscreen').show();
        var audio = new Audio();
        audio.src = url + loader.soundFileExtn;
        audio.addEventListener("canplaythrough",loader.itemLoaded,false);
        return audio;
    },
    itemLoaded:function() {
        // body...
        loader.loadedCount++;
        console.log("loader.loadedCount " +loader.loadedCount);
        console.log("loader.totalCount " +loader.totalCount);
        $('#loadingmessage').html('Loaded ' + loader.loadedCount + 'of '+loader.totalCount);
        if (loader.loadedCount == loader.totalCount)
        {
            console.log("loader.loadedCount " +loader.loaded);
            loader.loaded = true;
            $('#loadingscreen').hide();
            if(loader.onload)
            {
                loader.onload();
                loader.onload = undefined;
            }
        }

    }
}
