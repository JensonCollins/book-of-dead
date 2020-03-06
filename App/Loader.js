// (function update_loading_progress() {

// 	if (!MRAID.TrackedEvents['Loader Initialized']) return Broadcast.on('Loader Initialized', () => {
// 	    update_loading_progress();
// 	});

// 	//Здесь можно создать новые элементы для экрана загрузки
// 	Loader.logoPublisher.innerHTML = "<a style='font-weight: bold; font-size: 20px'>© 2017 IGT. All rights reserved.</a>";

	/*function apply_styles() {
	    console.log("### apply_styles()");
		//Здесь можно установить новые стили новым и старым элементам экрана загрузки, в том числе и зависящие от размеров экрана
		/*let old_load_progress = Loader.updateLoadProgress;
		let precents = 0;
		Loader.updateLoadProgress = function(progress) {
			precents = Math.round(progress * 100);
		    //Loader.loadProgressEl.innerHTML = "<a style='font-weight: bold; font-size: 20px'>LOADING ... " + precents + "%</a>";
			Loader.loadProgressFillEl.style.width = Loader.loadProgressEl.width * progress + "px"; //precents + "%";
			old_load_progress.call(Loader, progress);
		};//*/
//	    if (Loader.loadingProgressCodePercent >= 1.0)
//	        Broadcast.off("MRAID Resize", "loader");
//	}

	//Broadcast.on("MRAID Resize", apply_styles, "loader");

	//apply_styles();
// })();

