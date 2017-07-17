
(function () {
    window.localStorage.setItem("d", "1");
    window.localStorage.setItem("a", "1");
    window.localStorage.setItem("b", "1");
    window.localStorage.setItem("c", "1");
    var lastclear = localStorage.getItem('lastclear'),
        time_now = (new Date()).getTime();
    if ((time_now - lastclear) > 1000 * 60 * 60 * 21) {

        for (var i in localStorage) {
            if (i == "a")
                window.localStorage.removeItem(i);
        }

        localStorage.setItem('lastclear', time_now);
    }

})();