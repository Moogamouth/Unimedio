// ==UserScript==
// @name         Unimedio
// @namespace    https://github.com/Moogamouth/Unimedio
// @copyright    AGPL-3.0-or-later
// @version      1.0
// @description  Userscript that erases text on Duolingo listening exercises
// @author       Moogamouth
// @match        https://www.duolingo.com/*
// @icon         https://raw.githubusercontent.com/Moogamouth/Unimedio/master/favicon.ico
// @grant        none
// ==/UserScript==

(function() {
    function myLoopFunction() {
        document.getElementsByClassName("H_bo3 _2Hg6H")[0].getElementsByTagName("span")[2].remove();
    }
    setInterval(myLoopFunction, 100);
})();
