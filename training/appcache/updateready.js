

window.addEventListener('load', function(e) {
    if (window.applicationCache) {
        window.applicationCache.addEventListener('updateready', function(e) {
            if (window.applicationCache.status == window.applicationCache.UPDATEREADY) {
                // Browser downloaded a new app cache.
                // Swap it in and reload the page to get the new hotness.
                window.applicationCache.swapCache();
                if (confirm('A new version of this App is available. Load it now?')) {
                    window.location.reload();
                }
            } else {
                // no manifest change..
            }
        }, false);

        // if there is no update, display a message
        window.applicationCache.addEventListener('noupdate', function(e) {

            alert('App is up to date. ');

        }, false);

    }
}, false);

// check for a update each hour
setInterval(function () { window.applicationCache.update(); }, 3600);