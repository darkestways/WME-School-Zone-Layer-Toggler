// ==UserScript==
// @name         WME SZ Layer Toggler
// @namespace    https://greasyfork.org/en/users/1558508-darkest-ways-waze
// @description  Toggle the School Zone layer on/off in WME
// @version      2026.04.16.01
// @author       DarkestWays
// @match        *://*.waze.com/*editor*
// @exclude      *://*.waze.com/user/editor*
// @grant        none
// @license      GPL-3.0
// @icon64       data:image/png;base64,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
// ==/UserScript==

/* jshint esversion: 11 */
/* global getWmeSdk */
/* global toastr */

const SCRIPT_NAME = GM_info.script.name;
const SCRIPT_VERSION = GM_info.script.version;
const SCRIPT_ID = 'wme_sz_layer_toggler';
const SCRIPT_SHORTNAME = 'WME-SZLT';

const WME_PHL_GROUP_SELECTOR_ID = '#layer-switcher-group_permanent_hazards';
const WME_SZL_SELECTOR_ID = '#layer-switcher-item_permanent_hazard_school_zone';

const DEF_NOTIF_TIMEOUT = 2000; // 2 seconds
const DEF_NOTIF_RATE_LIMIT = 20000; // 1 notification per 20 seconds block, unless showNow is true

const logger = (message) => {
    console.log(`[${SCRIPT_SHORTNAME}]: ${message}`);
};

// Adapted from WME True Segment Length script
async function waitAndUpdate(func) {
    await new Promise(r => setTimeout(r, 175));
    await func();
}

// Load Toastr for notifications
function loadToastr() {
    logger("Loading Toastr library");

    // Initialize Toastr after the script is loaded
    function initToastr() {
        logger("Toastr loaded");
        // Default Toastr options
        toastr.options = {
            "closeButton": true,
            "debug": false,
            "newestOnTop": false,
            "progressBar": true,
            "positionClass": "toast-top-center",
            "preventDuplicates": true,
            "onclick": null,
            "showDuration": 1000,
            "hideDuration": 1000,
            "timeOut": DEF_NOTIF_TIMEOUT,
            "extendedTimeOut": 1000,
            "showEasing": "swing",
            "hideEasing": "linear",
            "showMethod": "fadeIn",
            "hideMethod": "fadeOut"
        };
    }

    let toastrCss = document.createElement('link');
    toastrCss.href = "https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.css";
    toastrCss.type = "text/css";
    toastrCss.rel = "stylesheet";
    document.head.appendChild(toastrCss);

    let toastrJs = document.createElement('script');
    toastrJs.src = "https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.js";
    toastrJs.type = "text/javascript";
    toastrJs.onload = initToastr;
    document.head.appendChild(toastrJs);
}

function showNotification(message, options = {}) {
    const {
        title = 'Notice',
        type = 'info',
        timeout = DEF_NOTIF_TIMEOUT,
        showNow = false
    } = options;

    let rateLimitKey = `${SCRIPT_ID}_last_notification_time`;
    let now = Date.now();
    let lastNotificationTime = parseInt(localStorage.getItem(rateLimitKey)) || 0;

    // Rate limit notifications
    if (!showNow && (now - lastNotificationTime < DEF_NOTIF_RATE_LIMIT)) {
        return;
    }
    localStorage.setItem(rateLimitKey, showNow ? lastNotificationTime : now.toString());

    if (toastr) {
        toastr[type](message, `[${SCRIPT_SHORTNAME}] ${title}`, {timeOut: timeout});
    } else {
        logger(`Toastr not loaded. Message: ${title} - ${message}`);
    }
}

function init() {
    'use strict';

    loadToastr();

    const wmeSdk = window.getWmeSdk({scriptId: SCRIPT_ID, scriptName: SCRIPT_NAME});

    function setupShortcuts() {
        const shortcut = {
            callback: async () => {
                logger("Shortcut activated: Toggling layer visibility");
                const phLayerItem = document.querySelector(WME_PHL_GROUP_SELECTOR_ID);
                const szLayerItem = document.querySelector(WME_SZL_SELECTOR_ID);
                if (phLayerItem && szLayerItem) {
                    /**
                     * Possible Alternate Way (though it's incorrect and would need updating)
                     * const layers = W.map.getLayers().filter(
                     *     (layer) => layer.name.includes('permanent_hazard') && layer.visiblity
                     * );
                     * const visible = layers.length > 0;
                     */
                    const isPHGroupVisible = phLayerItem.shadowRoot.querySelector('input[type="checkbox"]').checked;
                    // If PH Group is not visible, exit early
                    if (!isPHGroupVisible) {
                        logger("PH Group is not visible, cannot toggle SZ Layer");
                        showNotification("Please turn on Hazards layer first", {title: 'Hazards Layer', type: 'error', showNow: true});
                        return;
                    }

                    szLayerItem.click();

                    await waitAndUpdate(() => { // Wait for the UI to update after the click
                        const isVisible = szLayerItem.shadowRoot.querySelector('input[type="checkbox"]').checked;
                        const msg = `SZ Layer ${isVisible ? 'Visible' : 'Hidden'}`;
                        showNotification(msg, {title: '', type: isVisible ? 'info' : 'warning'});
                    });

                } else {
                    logger("SZ Layer item not found in the DOM");
                    showNotification("SZ Layer checkbox not found", {type: 'error', showNow: true});
                }
            },
            description: "Toggle SZ Layer Visibility",
            shortcutId: "sz-layer-shortcut",
            shortcutKeys: "AS+l",
        };
        wmeSdk.Shortcuts.createShortcut(shortcut);
    }

    // register to events:
    wmeSdk.Events.once({eventName: "wme-ready"}).then(() => {
        logger("WME is now ready");
        setupShortcuts();
        showNotification(`v${SCRIPT_VERSION} loaded`, {title: '', type: 'success', showNow: true});
    });

    logger(`${SCRIPT_NAME} v${SCRIPT_VERSION} initialised.`);
}

window.SDK_INITIALIZED.then(init);
