// ==UserScript==
// @name         Manga Resize
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://m.mangahere.co/roll_manga/*/*/
// @grant        none
// ==/UserScript==
/* jshint -W097 */
'use strict';

// Your code here...
Array.prototype.forEach.call(document.getElementsByClassName("lazy"),function(a){var img = new Image(); img.src = a.getAttribute('data-original'); a.onload = function() {a.style.width=img.naturalWidth+'px';}; a.dispatchEvent(new Event('load'));});
