// ==UserScript==
// @name         2Sucres - Auto-Refrech
// @namespace    https://github.com/sucresware/2sucres-auto-refresh
// @updateURL    https://github.com/sucresware/2sucres-auto-refresh/raw/master/2sucres-auto-refresh.user.js
// @downloadURL  https://github.com/sucresware/2sucres-auto-refresh/raw/master/2sucres-auto-refresh.user.js
// @author		 SucresWare
// @version      1.3
// @match        https://2sucres.org/*
// ==/UserScript==

var refreshRate = 1000;
var requestsCount = 0;
var refreshInterval = null;
var refreshElement = null;
var instanceId = null;

var uniqid = function() {
    return (new Date().getTime() + Math.floor((Math.random()*10000)+1)).toString(16);
};

var findRefreshButton = function() {
    var i;

    var buttons = document.querySelectorAll('.btn.transparent.waves-effect.waves-light>i.large.material-icons');

    for (i = 0; i < buttons.length; i++) {
        if (buttons[i].innerText == 'refresh') {
            return buttons[i];
        }
    }

    var otherButtons = document.querySelectorAll('button.btn.waves-effect.waves-ligh.jaune');

    for (i = 0; i < otherButtons.length; i++) {
        if (otherButtons[i].innerText == 'ACTUALISER') {
            return otherButtons[i];
        }
    }

    return null;
}

var refresh = function() {
    // Search for the element
    if (!refreshElement || !document.body.contains(refreshElement)) {
        refreshElement = findRefreshButton();

        if (refreshElement == null) return;
    }

    // Click on it
    refreshElement.click();
    requestsCount++;

    return;
}

var toggle = function(e) {
    if (e.target.checked) {
        requestsCount = 0;
        refreshInterval = setInterval(refresh, refreshRate);
    } else {
        clearInterval(refreshInterval);
    }

    return;
}

var inject = function() {
    // Add the radio button
    var html = '<div class="innerPreference waves-effect waves-light" style="width: 100%;"><div class="switch waves-effect waves-light" style="width: 100%;"><label class="" style="width: 100%;"><span class="truncate" style="display: block; min-height: 31px; padding: 5px;"><input class="" type="checkbox" id="' + instanceId + '-checkbox"><span class="lever"></span><span class="namedPref" id="' + instanceId + '-text">Auto-Refrech</span></span></label></div></div>';
    document
        .getElementById('RightColPreference')
        .innerHTML += html;

    // Bind event
    document
        .getElementById(instanceId + '-checkbox')
        .onchange = toggle;

    return;
};

(function() {
    'use strict';

    instanceId = uniqid();
    setTimeout(function(){ inject(); }, 1000);
})();
