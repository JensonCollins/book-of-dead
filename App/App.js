var App = new Game({

	ClearBeforeRender: true,
	Antialias: false,
	RoundPixels: false,
	MoveWhenInside: false,
	PrecisionFragment: "mediump",

	Symbols: [
		{
			Image: 'S01BaseGame.png'
		},
		{
			Image: 'S02BaseGame.png'
		},
		{
			Image: 'S03BaseGame.png'
		},
		{
			Image: 'S04BaseGame.png'
		},
		{
			Image: 'S05BaseGame.png'
		},
		{
			Image: 'S06BaseGame.png'
		},
		{
			Image: 'S07BaseGame.png'
		},
		{
			Image: 'S08BaseGame.png'
		},
		{
			Image: 'S09BaseGame.png'
		},
		{
			Image: 'B01ScatterBaseGame_0001.png'
		}
	],

	SymbolsNames: {
		'man': 'S09BaseGame.png',
		'tutankamen': 'S08BaseGame.png',
		'dog': 'S07BaseGame.png',
		'bird': 'S06BaseGame.png',
		'cardA': 'S05BaseGame.png',
		'cardK': 'S04BaseGame.png',
		'cardQ': 'S03BaseGame.png',
		'cardJ': 'S02BaseGame.png',
		'card10': 'S01BaseGame.png',
		'bonus': 'B01ScatterBaseGame_0001.png',
	},

	ScatterNames: [''],

	prepare: function() {

		this.PrecisionFragment = Settings["precision-fragment"];

	},

	ready: function () {

		MRAID.track('Assets Loaded');

		this.cacheScreenTextures();

		if (Settings["publisher"] === "playable-kit") {

			PlayableKit.onStart(function(options) {

				App.startGame();

			});

			PlayableKit.start();

		} else if (Settings["publisher"] === "facebook-instant-games") {

			if (window.FBInstant) {

				FBInstant.startGameAsync().then(function() {

					App.startGame();

				});

			} else {

				App.startGame();

			}

		} else {

			if (Settings['start-on'] === 'ready') {

				MRAID.onReady(function () {

					App.startGame();

				});

			} else if (Settings['start-on'] === 'viewable') {

				MRAID.onViewable(function() {

					App.startGame();

				});

			} else if (Settings['start-on'] === 'load') {

				App.startGame();

			}

		}

	},

	startGame: function() {

		// return;

		this.escalibur = new Escalibur();

		if (!App.Loader || !App.Loader.loadCompleted) {

			if (Settings['start-on'] === "none") Settings['start-on'] = 'load';

			return;

		}

		// document.getElementById("home").style.opacity = 1.0;
		document.getElementById("sound").style.opacity = 1.0;
		document.getElementById("sound").disabled = false;

		var parent_div = document.createElement("div");
		parent_div.classList.add("container");
		parent_div.appendChild(this.Renderer.view);

		var clock_div = document.createElement("div");
		clock_div.classList.add("systemclock");
		clock_div.setAttribute("id", "systemClock");
		parent_div.appendChild(clock_div);

		document.body.appendChild(parent_div);

		MRAID.showApp();

		App.scale = [1.5, 1];
        App.resize();

		if (Settings['cta-only']) App.CallToAction.show();

		else App.Gameplay.show();

		Loader.hideLoadProgress();

		App.startTicker();
		// startTime();

    }

});
