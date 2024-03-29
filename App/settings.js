Settings = {

    "title": "Book-of-dead",

    "name": "book-of-dead",

    "version": {"default": "1.0", "type": "string"},

    "debug": {
        "default": false,
        "type": "boolean",
        "editor": {
            "title": "Debug mode",
            "description": "Disable code compression, enable logging and some other debug functionality.",
            "control": "switch",
            "section": "system",
            "priority": 10
        }
    },

    "debug-logger": {
        "default": "native",
        "type": "select",
        "values": ["native", "custom", "firebug", "none"],
        "editor": {
            "title": "Debug messages",
            "description": "Where to show debug messages?",
            "option-descriptions": {
                "none": "Disable debug messages",
                "native": "Regular browser console",
                "custom": "Over the ad",
                "firebug": "Firebug Lite"
            },
            "control": "radio",
            "section": "system",
            "priority": 10.1,
            "dependency": {"name": "debug", "value": true}
        }
    },

    "publisher": {
        "type": "select",
        "default": "none",
        "values": ["google", "rovio", "sega", "kidoz", "facebook", "facebook-instant-games", "pocket-math", "playable-kit", "applovin", "unity-ads", "adcolony", "tapjoy", "iron-source", "vungle", "life-street", "aarki", "none"],
        "description": "If you use one of listed ad networks choose it, to enable specific code and fixes."
    },

    "publisher-settings": {
        "type": "key-value",
        "default": {"width": 320, "height": 480, "fixed-size": false},
        "description": "Various settings which needed for specific ad network."
    },

    "viewport-size": {
        "type": "select",
        "default": "window-inner-dimensions",
        "values": ["mraid-max-size", "mraid-screen-size", "window-inner-dimensions", "screen-size"],
        "editor": {
            "title": "Viewport size",
            "description": "Method to detect viewport size.",
            "option-descriptions": {
                "mraid-max-size": "Mraid max size",
                "mraid-screen-size": "Mraid screen size",
                "window-inner-dimensions": "Window inner dimensions",
                "screen-size": "Screen size"
            },
            "control": "radio",
            "section": "system",
            "priority": 1
        }
    },

    "viewport-size-protection": {
        "default": true,
        "type": "boolean",
        "editor": {
            "title": "Viewport size protection",
            "description": "Sometimes mraid can return 10x10 px size of viewport or 414x414 px which is incorrect. Enable this options to stabilize and fix incorrect values.",
            "control": "switch",
            "section": "system",
            "priority": 1.1
        }
    },

    "viewport-aspect-ratio": {
        "default": "none",
        "type": "select",
        "values": ["portrait", "landscape", "none"],
        "description": "Viewport sizes aspect ratio. Set it to \"portrait\" or \"landscape\" if you want always show your ad in \"portrait\" or \"landscape\" mode."
    },

    "viewport-aspect-ratio-portrait": {
        "default": 0.75,
        "type": "number",
        "description": "Maximum ratio of width to height. Used if \"Viewport aspect ratio\" is set to \"portrait\""
    },

    "viewport-aspect-ratio-landscape": {
        "default": 0.75,
        "type": "number",
        "description": "Maximum ratio of height to width. Used if \"Viewport aspect ratio\" is set to \"landscape\""
    },

    "assets-path": {"default": "", "type": "string", "description": "Path to game assets on your server."},

    "target-url": {"default": "", "type": "string"},

    "web-mode": {"default": "redirect", "type": "select", "values": ["alert", "redirect", "mraid", "none"]},

    "tween-factor-default": {
        "default": 1,
        "type": "number",
        "control": "slider",
        "editor": {
            "title": "Default speed of animations",
            "description": "Default speed of 'tween' and 'timeout' animations.",
            "section": "main"
        },
        "playable-kit": true
    },

    "tween-factor-gameplay": {
        "default": 1,
        "type": "number",
        "control": "slider",
        "editor": {
            "title": "Speed of gameplay animations",
            "description": "Default speed of gameplay 'tween' and 'timeout' animations.",
            "section": "main"
        },
        "playable-kit": true
    },

    "tween-factor-tutorial": {
        "default": 1,
        "type": "number",
        "control": "slider",
        "editor": {
            "title": "Speed of tutorial animations",
            "description": "Default speed of tutorial 'tween' and 'timeout' animations.",
            "section": "main"
        },
        "playable-kit": true
    },

    "tween-factor-end-screen": {
        "default": 1,
        "type": "number",
        "control": "slider",
        "editor": {
            "title": "Speed of end screen animations",
            "description": "Default speed of end screen 'tween' and 'timeout' animations.",
            "section": "main"
        },
        "playable-kit": true
    },

    "tween-factor-win-animation": {
        "default": 0.8,
        "type": "number",
        "control": "slider",
        "description": "Default speed of win animations"
    },

    "game-code-url": {"default": "Builds/cui-wild-7.min.js", "type": "string"},

    "game-loader-url": {"default": "Builds/cui-wild-7-loader.min.js", "type": "string"},

    "loading-overlay-styles": {"type": "css", "default": {}},

    "loading-overlay-show-time": {
        "type": "number",
        "default": 200,
        "playable-kit": true,
        "editor": {"title": "Loading show time", "description": "Loading screen show animation time."}
    },

    "loading-overlay-hide-time": {
        "type": "number",
        "default": 1000,
        "playable-kit": true,
        "editor": {"title": "Loading hide time", "description": "Loading screen hide animation time."}
    },

    "loading-background-styles": {
        "type": "css",
        "default": {
            "background-color": "#282828", "transform": "scale(1.07)"
            // "background-image": "url(assets/sprites/backgrounds/splash.png)",
            // "background-size": "cover",
        }
    },

    "loading-icon-styles": {
        "type": "css",
        "default": {
            "background": "url(assets/sprites/backgrounds/splash.png) center center fixed",
            "background-size": "cover",
            "background-position-y": "center",
            "background-repeat": "no-repeat"
        }
        // "default": {
        //     "background": "url(assets/sprites/backgrounds/splash.png) no-repeat scroll center 43% / 170%",
        //     "left": "0",
        //     "right": "0",
        //     "top": "0",
        //     "bottom": "0"
        // }
    },

    "loading-progress-styles": {
        "type": "css",
        "default": {
            "background": "block",
            "left": "37%",
            "right": "37%",
            "top": "85%",
            "bottom": "10%",
            "height": "1%",
            "background-color": "#000",
            "border-radius": "0px",
            "padding": "1px"
        }
    },
    "loading-progress-fill-styles": {
        "type": "css",
        "default": {
            "background": "block",
            "left": "10%",
            "width": "10%",
            "bottom": "5%",
            "height": "100%",
            "background-color": "#076cbf",
            "border-radius": "0px"
        }
    },

    "loading-code-progress-percent": 0.25,

    "loading-click-out": {
        "default": true,
        "type": "boolean",
        "playable-kit": true,
        "editor": {
            "title": "Loading click out",
            "description": "If true, loading screen will work like CTA button."
        }
    },

    "load-on": {
        "default": "immediately",
        "type": "select",
        "values": ["immediately", "none"],
        "description": "If you need to load ad manually set this to 'none' and use 'Loader.load()' command."
    },

    "start-on": {
        "default": "viewable",
        "type": "select",
        "values": ["load", "ready", "viewable", "none"],
        "description": "If you need to show ad manually set this to 'none' and use 'App.startGame()' command."
    },

    "in-game-click-out": {
        "default": "redirect",
        "type": "select",
        "values": ["cta", "redirect", "none"],
        "description": "Action for the in-game cta button (if exist)"
    },

    "cta-only": {"default": false, "type": "boolean"},

    "end-screen-click-out": {
        "default": true,
        "type": "boolean",
        "description": "Make all end screen clickable or not."
    },

    "end-screen-click-out-block": {
        "default": 1000,
        "type": "number",
        "description": "Timeout between end screen showed and possibility to click on cta buttons."
    },

    "click-out-multiple": {
        "default": 1000,
        "type": "number",
        "description": "Minimal timeout between multiple clicks on CTA buttons. 0 will disable multiple clicks and allow only one click on CTA per session (recommended)."
    },

    "try-again": {
        "default": 1,
        "type": "number",
        "playable-kit": true,
        "editor": {
            "title": "Try again",
            "description": "Possibility to return in game after end screen and start to play again. You can specify count of possible replays here. 0 will disable replay button."
        }
    },

    "gameplay-timeout": {
        "default": 0,
        "type": "number",
        "playable-kit": {"multiplier": 1000},
        "editor": {"title": "Gameplay timeout", "description": "Timeout from game start to the End Screen"}
    },

    "autoplay-timeout": {
        "default": 0,
        "type": "number",
        "playable-kit": {"multiplier": 1000},
        "editor": {
            "title": "Autoplay timeout",
            "description": "Timeout from rules/intro/tutorial screen to game start"
        }
    },

    "idle-timeout": {
        "default": 0,
        "type": "number",
        "playable-kit": {"multiplier": 1000},
        "editor": {"title": "Idle timeout", "description": "Timeout from last user action to the End Screen"}
    },

    "custom-close-button": {"default": 0, "type": "number"},

    "close-button-container-styles": {
        "type": "css",
        "default": {"opacity": "0.4", "width": "30px", "height": "30px", "right": "7px", "top": "7px"}
    },

    "close-button-bar-styles": {
        "type": "css",
        "default": {"strokeWidth": 5, "color": "#FFF", "trailColor": "#eee", "trailWidth": 1.1, "svgStyle": null}
    },

    "close-button-styles": {
        "type": "css",
        "default": {"width": "16px", "height": "16px", "right": "7px", "top": "7px", "backgroundSize": "80%"}
    },

    "close-button-timer-styles": {
        "type": "css",
        "default": {
            "width": "17px",
            "height": "16px",
            "right": "7px",
            "top": "7px",
            "lineHeight": "16px",
            "text-align": "center",
            "fontFamily": "Arial",
            "fontSize": "16px",
            "color": "#FFF"
        }
    },

    "rewarded-timeout": {
        "default": 0,
        "type": "number",
        "description": "Timeout which blocks open and close mraid actions. So user must play specified count of time."
    },

    "rewarded-click-toggle": {
        "default": true,
        "type": "boolean",
        "description": "Allow auto redirect toggle in rewarded-timeout mode if user click on CTA buttons several times."
    },

    "interstitial-timeout": {
        "default": 0,
        "type": "number",
        "description": "Timeout with radial progress indicator for close-button."
    },

    "interstitial-action": {"default": "none", "type": "select", "values": ["cta", "redirect", "none"]},

    "intro": {
        "default": false,
        "type": "boolean",
        "playable-kit": true,
        "editor": {"title": "Intro", "description": "If false, intro will be disabled"}
    },

    "tutorial": {
        "default": false,
        "type": "boolean",
        "playable-kit": true,
        "editor": {"title": "Tutorial", "description": "If false, tutorial will be disabled."}
    },

    "tutorial-timeout": {
        "default": 500,
        "type": "number",
        "playable-kit": {"multiplier": 1000},
        "editor": {"title": "Tutorial timeout", "description": "Timeout between last user action and tutorial."}
    },

    "assets-quality": {
        "default": "high",
        "type": "select",
        "values": ["medium", "high", "low"],
        "playable-kit": true,
        "editor": {
            "title": "Assets quality",
            "description": "Quality of the images and sounds. Lower quality - faster loading. Medium quality is recommended for production. High quality recommended for the preview."
        }
    },

    "filters-quality": {
        "default": 1,
        "type": "number",
        "playable-kit": true,
        "editor": {
            "title": "Filters quality",
            "description": "Quality multiplier for some of the filters from 0 to 1. 0 will disable all filters. Recommended to disable it on low power devices."
        }
    },

    "particles-quality": {
        "default": 0,
        "type": "number",
        "playable-kit": true,
        "editor": {
            "title": "Particle emitters quality",
            "description": "Count of particles for the particle emitter effects. From 0% to 100%. You can also use more then 100% to increase count of particles."
        }
    },

    "force-canvas-renderer": {
        "default": true,
        "type": "boolean",
        "playable-kit": true,
        "editor": {"title": "Force canvas renderer", "description": "If true, WebGL will be disabled."}
    },

    "precision-fragment": {"default": "mediump", "type": "select", "values": ["lowp", "mediump", "highp"]},

    "sounds": {
        "default": true,
        "type": "select",
        "values": [true, false, "delayed"],
        "playable-kit": true,
        "editor": {
            "title": "Sounds load strategy",
            "description": "Default load strategy for sounds: 'true' will preload sounds, 'false' will disable sounds and 'delayed' will load sounds after game started."
        }
    },

    "creative-template-device": {
        "default": "iPhone",
        "type": "select",
        "values": ["iPhone", "iPad", "iPhoneX"],
        "description": "Default orientation in first launch inside Creative Preview"
    },

    "creative-template-orientation": {
        "default": "landscape",
        "type": "select",
        "values": ["portrait", "landscape"],
        "description": "Default orientation in first launch inside Creative Preview"
    },

    "track-events": {
        "type": "info",
        "description": "Loader Initialized, Code Loaded, Assets Loaded, Click Out - Loading Screen, Rewarded Timeout with Redirect, Rewarded Timeout, Interstitial Timeout, Interstitial Timeout - CTA, Interstitial Timeout - Click Out, Gameplay Timeout, Autoplay Timeout, Idle Timeout, Close Button Showed, Click Out - In Game, Close Click, End Screen Showed, Click Out - Interstitial Timeout, Click Out - End Screen, Game Starts, First Interaction, Interaction <n>"
    },

    "track-events-on-viewable": {"default": true, "type": "boolean"},

    "track-google-analytics-key": {"default": "", "type": "string"},

    "track-google-analytics-actions": {
        "Loader Initialized": [["set", "appName", "Cui Wild 7"], ["set", "appVersion", "1.0"], ["set", "page", "Loading"], ["send", "pageview", {"sessionControl": "start"}], ["send", "event", "Loading", "Impression", "v1.0"]],
        "Assets Loaded": [["send", "event", "Loading", "Game Loaded", "Not Skipped"]],
        "Tutorial Show": [["set", "page", "Tutorial"], ["send", "pageview"], ["send", "event", "Gameplay", "Tutorial Started"]],
        "Game Starts": [["set", "page", "Game"], ["send", "pageview"], ["send", "event", "Gameplay", "Game Started", "Play 1"]],
        "Interaction 1": [["send", "event", "Gameplay", "Game Interacted"]],
        "Interaction 2": [["send", "event", "Gameplay", "Game Interacted X", "2"]],
        "Interaction 3": [["send", "event", "Gameplay", "Game Interacted X", "3"]],
        "Game Completed": [["send", "event", "Gameplay", "Game Completed", "win", 1]],
        "End Screen Showed": [["set", "page", "End"], ["send", "pageview"]],
        "Retry": [["set", "page", "Replay"], ["send", "pageview"], ["send", "event", "Gameplay", "Game Started", "Play 2"]],
        "Click Out - In Game": [["send", "event", "Exit", "CTA Pressed Game"]],
        "Click Out - End Screen": [["send", "event", "Exit", "CTA Pressed End"]],
        "Error": [["send", "event", "Diagnostic", "Error"]]
    },

    "track-mixpanel-key": {"default": "", "type": "string"},

    "track-mixpanel-actions": {
        "Loader Initialized": "Start Load Assets",
        "Assets Loaded": "Assets Loaded",
        "Game Starts": "Game Started",
        "End Screen Showed": "End Screen Showed",
        "Click Out - End Screen": "Click Out - End Screen",
        "Click Out - In Game": "Click Out - In Game",
        "Click Out - Loading Screen": "Click Out - Loading Screen",
        "Error": "Error"
    },

    "track-impression-urls": {"default": [], "type": "list"},

    "track-impression-actions": {"Loader Initialized": 0},

    "track-libraries": {
        "Loader Initialized": [["PlayableKit.analytics.loading", []]],
        "Assets Loaded": [["PlayableKit.analytics.loaded", []]],
        "Menu Showed": [["PlayableKit.analytics.menu", []]],
        "Intro Started": [["PlayableKit.analytics.intro", []]],
        "Game Starts": [["PlayableKit.analytics.game", []]],
        "Interaction:multiple": [["PlayableKit.analytics.gameInteracted", []]],
        "Game Completed": [["PlayableKit.analytics.gameOver", [0, 1]]],
        "Outro Started": [["PlayableKit.analytics.outro", []]],
        "End Screen Showed": [["PlayableKit.analytics.end", []]]
    },

    "complete-combinations": {
        "spin 0": [
        {
            "symbols": ["symbol-2.png", "symbol-3.png", "symbol-3.png", "symbol-3.png", "symbol-2.png", "symbol-4.png", "symbol-2.png", "symbol-3.png", "symbol-2.png", "symbol-4.png", "symbol-4.png", "symbol-4.png", "symbol-2.png", "symbol-4.png", "symbol-4.png"],
            "winSymbols": [true, false, false, false, true, false, true, false, true, false, false, false, true, false, false],
            "winPoints": 0.5
        }, {
            "symbols": ["symbol-8.png", "symbol-4.png", "symbol-1.png", "symbol-4.png", "symbol-8.png", "symbol-8.png", "symbol-1.png", "symbol-4.png", "symbol-1.png", "symbol-8.png", "symbol-1.png", "symbol-4.png", "symbol-4.png", "symbol-4.png", "symbol-1.png"],
            "winSymbols": [false, false, true, false, false, false, true, false, true, false, true, false, false, false, true],
            "winPoints": 0.5
        }, {
            "symbols": ["symbol-7.png", "symbol-1.png", "symbol-7.png", "symbol-1.png", "symbol-7.png", "symbol-7.png", "symbol-5.png", "symbol-7.png", "symbol-5.png", "symbol-7.png", "symbol-1.png", "symbol-5.png", "symbol-1.png", "symbol-5.png", "symbol-1.png"],
            "winSymbols": [false, true, false, true, false, false, false, false, false, false, true, false, true, false, true],
            "winPoints": 0.5
        }, {
            "symbols": ["symbol-7.png", "symbol-1.png", "symbol-7.png", "symbol-1.png", "symbol-7.png", "symbol-3.png", "symbol-3.png", "symbol-3.png", "symbol-3.png", "symbol-3.png", "symbol-7.png", "symbol-1.png", "symbol-7.png", "symbol-1.png", "symbol-7.png"],
            "winSymbols": [false, false, false, false, false, true, true, true, true, true, false, false, false, false, false],
            "winPoints": 0.5
        }, {
            "symbols": ["symbol-4.png", "symbol-4.png", "symbol-8.png", "symbol-4.png", "symbol-4.png", "symbol-10.png", "symbol-10.png", "symbol-10.png", "symbol-10.png", "symbol-10.png", "symbol-4.png", "symbol-4.png", "symbol-8.png", "symbol-4.png", "symbol-4.png"],
            "winSymbols": [false, false, false, false, false, true, true, true, true, true, false, false, false, false, false],
            "winPoints": 0.5
        }],
        "spin 1": [{
            "symbols": ["symbol-4.png", "symbol-10.png", "symbol-4.png", "symbol-10.png", "symbol-4.png", "symbol-10.png", "symbol-10.png", "symbol-10.png", "symbol-10.png", "symbol-10.png", "symbol-4.png", "symbol-10.png", "symbol-4.png", "symbol-10.png", "symbol-4.png"],
            "winSymbols": [false, true, false, true, false, true, true, true, true, true, false, true, false, true, false],
            "winPoints": 1
        }, {
            "symbols": ["symbol-2.png", "symbol-5.png", "symbol-2.png", "symbol-5.png", "symbol-2.png", "symbol-8.png", "symbol-2.png", "symbol-5.png", "symbol-2.png", "symbol-8.png", "symbol-2.png", "symbol-5.png", "symbol-2.png", "symbol-5.png", "symbol-2.png"],
            "winSymbols": [true, false, true, false, true, false, true, false, true, false, true, false, true, false, true],
            "winPoints": 1
        }, {
            "symbols": ["symbol-7.png", "symbol-5.png", "symbol-2.png", "symbol-5.png", "symbol-7.png", "symbol-2.png", "symbol-2.png", "symbol-3.png", "symbol-2.png", "symbol-2.png", "symbol-7.png", "symbol-5.png", "symbol-2.png", "symbol-5.png", "symbol-7.png"],
            "winSymbols": [false, false, true, false, false, true, true, false, true, true, false, false, true, false, false],
            "winPoints": 1
        }, {
            "symbols": ["symbol-4.png", "symbol-4.png", "symbol-1.png", "symbol-4.png", "symbol-4.png", "symbol-1.png", "symbol-1.png", "symbol-1.png", "symbol-1.png", "symbol-1.png", "symbol-4.png", "symbol-4.png", "symbol-1.png", "symbol-4.png", "symbol-4.png"],
            "winSymbols": [false, false, true, false, false, true, true, true, true, true, false, false, true, false, false],
            "winPoints": 1
        }, {
            "symbols": ["symbol-3.png", "symbol-5.png", "symbol-5.png", "symbol-5.png", "symbol-3.png", "symbol-3.png", "symbol-3.png", "symbol-3.png", "symbol-3.png", "symbol-3.png", "symbol-3.png", "symbol-5.png", "symbol-5.png", "symbol-5.png", "symbol-3.png"],
            "winSymbols": [true, false, false, false, true, true, true, true, true, true, true, false, false, false, true],
            "winPoints": 1
        }],
        "spin 2": [{
            "symbols": ["symbol-4.png", "symbol-10.png", "symbol-10.png", "symbol-10.png", "symbol-4.png", "symbol-4.png", "symbol-10.png", "symbol-10.png", "symbol-10.png", "symbol-4.png", "symbol-4.png", "symbol-10.png", "symbol-10.png", "symbol-10.png", "symbol-4.png"],
            "winSymbols": [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],
            "winPoints": 1.5
        }, {
            "symbols": ["symbol-10.png", "symbol-10.png", "symbol-10.png", "symbol-10.png", "symbol-10.png", "symbol-4.png", "symbol-4.png", "symbol-4.png", "symbol-4.png", "symbol-4.png", "symbol-10.png", "symbol-10.png", "symbol-10.png", "symbol-10.png", "symbol-10.png"],
            "winSymbols": [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],
            "winPoints": 1.5
        }, {
            "symbols": ["symbol-4.png", "symbol-4.png", "symbol-2.png", "symbol-4.png", "symbol-4.png", "symbol-4.png", "symbol-4.png", "symbol-2.png", "symbol-4.png", "symbol-4.png", "symbol-4.png", "symbol-4.png", "symbol-2.png", "symbol-4.png", "symbol-4.png"],
            "winSymbols": [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],
            "winPoints": 1.5
        }, {
            "symbols": ["symbol-3.png", "symbol-3.png", "symbol-3.png", "symbol-3.png", "symbol-3.png", "symbol-3.png", "symbol-3.png", "symbol-3.png", "symbol-3.png", "symbol-3.png", "symbol-3.png", "symbol-3.png", "symbol-3.png", "symbol-3.png", "symbol-3.png"],
            "winSymbols": [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],
            "winPoints": 1.5
        }, {
            "symbols": ["symbol-4.png", "symbol-1.png", "symbol-4.png", "symbol-1.png", "symbol-4.png", "symbol-1.png", "symbol-4.png", "symbol-1.png", "symbol-4.png", "symbol-1.png", "symbol-4.png", "symbol-1.png", "symbol-4.png", "symbol-1.png", "symbol-4.png"],
            "winSymbols": [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],
            "winPoints": 1.5
        }]
    },

    "Gameplay": {

        "download button text": {"text": "DOWNLOAD NOW"},

        "win text 0": {"text": "WIN:"},

        "spin button text": {"text": "SPIN"},

        "game board text": {"text": "50 PAYLINES"},

        "congratulations button text": {"text": "Continue"}

    },

    "Tutorial": {},

    "CallToAction": {},

    "Assets": {
        // image loading
        "basegame_back": {"type": "image", "url": "assets/sprites/backgrounds/background.jpg"},
        "freegame_back": {"type": "image", "url": "assets/sprites/backgrounds/BG_FreeGames.jpg"},
        "line_effect": { "type": "atlas", "url": "assets/sprites/@2x/symbols/line_effect.png" },
        "totalbet_back": {"type": "image", "url": "assets/sprites/backgrounds/totalbet_back.png"},
        "info_down": {"type": "image", "url": "assets/sprites/backgrounds/info_down.png"},
        "info_up": {"type": "image", "url": "assets/sprites/backgrounds/info_up.png"},
        "reelback": {"type": "image", "url": "assets/sprites/@2x/ui/reel_background.png"},
        "light": {"type": "image", "url": "assets/sprites/@2x/symbols/light.png"},
        "label_back": {"type": "image", "url": "assets/sprites/@2x/ui/label_back.png"},
        "loading_back": {"type": "image", "url": "assets/sprites/backgrounds/loading_back.png"},
        "hint_book": {"type": "image", "url": "assets/sprites/@2x/animation/loading/book.png"},
        "hint_book_bg": {"type": "image", "url": "assets/sprites/@2x/animation/loading/book_bg.png"},
        "bonuspane.png": {"type": "image", "url": "assets/images/bonuspane.png"},
        "help1": {"type": "image", "url": "assets/sprites/help1.png"},
        "help2": {"type": "image", "url": "assets/sprites/help2.png"},

        //sound loading
        "background_music": {"type": "sound", "url": "assets/sounds/base_background.mp3"},
        "betDown": {"type": "sound", "url": "assets/sounds/betDown.mp3"},
        "betUp": {"type": "sound", "url": "assets/sounds/betup.mp3"},
        "btn_menuselection": {"type": "sound", "url": "assets/sounds/button_MenuSelection.mp3"},
        "btn_popupclose": {"type": "sound", "url": "assets/sounds/button_popupclose.mp3"},
        "btn_popupopen": {"type": "sound", "url": "assets/sounds/button_popupopen.mp3"},
        "btn_rotationswish": {"type": "sound", "url": "assets/sounds/button_RotationSwish.mp3"},
        "btn_slider": {"type": "sound", "url": "assets/sounds/button_SliderSettingRelease.mp3"},
        "btn_spin": {"type": "sound", "url": "assets/sounds/button_spin.mp3"},
        "reelstop": {"type": "sound", "url": "assets/sounds/reelstop.mp3"},
        "winline": {"type": "sound", "url": "assets/sounds/base_winline.mp3"},
        "bonus.mp3": {"type": "sound", "url": "assets/sounds/bigwin.mp3"},
	    "coins": {"type": "sound", "url": "assets/sounds/coins.mp3"},

	    "ambience": {"type": "sound", "url": "assets/sounds/main/ambience.mp3"},
	    "ambienceStem1": {"type": "sound", "url": "assets/sounds/main/ambienceStem1.mp3"},
	    "ambienceStem2": {"type": "sound", "url": "assets/sounds/main/ambienceStem2.mp3"},
	    "ambienceStem3": {"type": "sound", "url": "assets/sounds/main/ambienceStem3.mp3"},
	    "bookFlip": {"type": "sound", "url": "assets/sounds/main/bookFlip.mp3"},
	    "freespinAmbience": {"type": "sound", "url": "assets/sounds/main/freespinAmbience.mp3"},
	    "freespinIntro": {"type": "sound", "url": "assets/sounds/main/freespinIntro.mp3"},
	    "freespinRetrigger": {"type": "sound", "url": "assets/sounds/main/freespinRetrigger.mp3"},
	    "freespinSummary": {"type": "sound", "url": "assets/sounds/main/freespinSummary.mp3"},
	    "gambleClick": {"type": "sound", "url": "assets/sounds/main/gambleClick.mp3"},
	    "gambleCollect": {"type": "sound", "url": "assets/sounds/main/gambleCollect.mp3"},
	    "gambleLoop": {"type": "sound", "url": "assets/sounds/main/gambleLoop.mp3"},
	    "gambleLose": {"type": "sound", "url": "assets/sounds/main/gambleLose.mp3"},
	    "gambleWait": {"type": "sound", "url": "assets/sounds/main/gambleWait.mp3"},
	    "gambleWin": {"type": "sound", "url": "assets/sounds/main/gambleWin.mp3"},
	    "reelStart": {"type": "sound", "url": "assets/sounds/main/reelStart.mp3"},
	    "reelStop": {"type": "sound", "url": "assets/sounds/main/reelStop.mp3"},
	    "reelWait": {"type": "sound", "url": "assets/sounds/main/reelWait.mp3"},
	    "scatterLand1": {"type": "sound", "url": "assets/sounds/main/scatterLand1.mp3"},
	    "scatterLand2": {"type": "sound", "url": "assets/sounds/main/scatterLand2.mp3"},
	    "scatterLand3": {"type": "sound", "url": "assets/sounds/main/scatterLand3.mp3"},
	    "scatterLand4": {"type": "sound", "url": "assets/sounds/main/scatterLand4.mp3"},
	    "win1snd": {"type": "sound", "url": "assets/sounds/main/win1snd.mp3"},
	    "win2snd": {"type": "sound", "url": "assets/sounds/main/win2snd.mp3"},
	    "win3snd": {"type": "sound", "url": "assets/sounds/main/win3snd.mp3"},
	    "win4snd": {"type": "sound", "url": "assets/sounds/main/win4snd.mp3"},
	    "win5snd": {"type": "sound", "url": "assets/sounds/main/win5snd.mp3"},
	    "win6snd": {"type": "sound", "url": "assets/sounds/main/win6snd.mp3"},
	    "win7snd": {"type": "sound", "url": "assets/sounds/main/win7snd.mp3"},
	    "win8snd": {"type": "sound", "url": "assets/sounds/main/win8snd.mp3"},
	    "win9snd": {"type": "sound", "url": "assets/sounds/main/win9snd.mp3"},
	    "win10snd": {"type": "sound", "url": "assets/sounds/main/win10snd.mp3"},
	    "win11snd": {"type": "sound", "url": "assets/sounds/main/win11snd.mp3"},
        // atlas loading
        "logo_texture0": {"type": "atlas", "url": "assets/sprites/logo_texture0.json"},
        "feature_preview": {"type": "atlas", "url": "assets/sprites/feature_preview_texture0.json"},
        "feature_texture1": {"type": "atlas", "url": "assets/sprites/features_texture1.json"},
        "menu_texture0": {"type": "atlas", "url": "assets/sprites/new/menu_texture0.json"},
        "menu_texture1": {"type": "atlas", "url": "assets/sprites/new/menu_texture1.json"},
        "statusbar_texture": {"type": "atlas", "url": "assets/sprites/new/statusbar_texture0.json"},
        "miscellaneous_assets": {"type": "atlas", "url": "assets/sprites/@2x/miscellaneous_assets.json"},
        "symbols": { "type": "atlas", "url": "assets/sprites/@2x/symbols/symbols.json" },
        "symbols_blur": { "type": "atlas", "url": "assets/sprites/@2x/symbols/symbols_blur.json" },
        "frame_animation": { "type": "atlas", "url": "assets/sprites/@2x/symbols/frame_anim.json" },
        "symbols_highlight": { "type": "atlas", "url": "assets/sprites/@2x/symbols/symbols_highlight.json" },
        "ui": { "type": "atlas", "url": "assets/sprites/@2x/ui/ui.json" },
        "lines": { "type": "atlas", "url": "assets/sprites/@2x/symbols/lines.json" },
        "lines_effect": { "type": "atlas", "url": "assets/sprites/@2x/symbols/lines_effect.json" },
        "logo": { "type": "atlas", "url": "assets/sprites/@2x/logo/logo.json" },
        "loading_1": { "type": "atlas", "url": "assets/sprites/@2x/animation/loading/loading.json" },
        "loading_ui": { "type": "atlas", "url": "assets/sprites/@2x/ui/loading_ui.json" },
        "coin-particle": {"type": "image", "url": "assets/sprites/@2x/particle/coins_particle.json"},
        "buttons_hq": {"type": "atlas", "url": "assets/sprites/@2x/buttons_hq.json"},
        "orient_switch": {"type": "atlas", "url": "assets/images/orient_switch.jpg"},
        // "menuStyle": {"type": "atlas", "url": "App/Libs/gown/theme/metalworks_desktop.json"},
        "skin_texture0": {"type": "atlas", "url": "assets/sprites/new/skin_texture0.json"},
        "skin_texture1": {"type": "atlas", "url": "assets/sprites/new/skin_texture1.json"},
        "skin_texture2": {"type": "atlas", "url": "assets/sprites/new/skin_texture2.json"},
        "skin_texture3": {"type": "atlas", "url": "assets/sprites/new/skin_texture3.json"},
        "skin_texture4": {"type": "atlas", "url": "assets/sprites/new/skin_texture4.json"},

        //font loading
        "PNG_VNTH": {"type": "web-font", "url": "Fonts/PNG_VNTH.css"},
        "BRITANNIC_BOLD": {"type": "web-font", "url": "Fonts/BRITANNIC_BOLD.css"},
        "FLANKER_GRIFFO": {"type": "web-font", "url": "Fonts/FLANKER_GRIFFO.css"},
        "Oswald": {"type": "web-font", "url": "Fonts/oswald_medium.css"},
        "oswald_regular": {"type": "web-font", "url": "Fonts/oswald_regular.css"},
        "png_mini": {"type": "web-font", "url": "Fonts/png_mini.css"},
        "ROBOTO_CONDENSED_BOLD": {"type": "web-font", "url": "Fonts/ROBOTO_CONDENSED_BOLD.css"},
        "ROBOTO_CONDENSED_REGULAR": {"type": "web-font", "url": "Fonts/ROBOTO_CONDENSED_REGULAR.css"},
        // "all_fonts" : {"type": "web-font", "url":"Fonts/fonts.css"},
    }

};
