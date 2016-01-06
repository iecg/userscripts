// ==UserScript==
// @name         Manga Redirect
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  try to take over the world!
// @author       You
// @match        http://www.mangahere.co/manga/*/*/
// @match        http://m.mangahere.co/manga/*/*/
// @match        http://mangafox.me/manga/*/*/*.html
// @match        http://m.mangafox.me/manga/*/*/*.html
// @grant        none
// ==/UserScript==
/* jshint -W097 */
'use strict';

// Your code here...
window.location.href=window.location.href.replace("http://mangafox.","http://m.mangafox.").replace("www.","m.").replace("/manga/","/roll_manga/");
