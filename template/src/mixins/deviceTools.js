export const deviceTools = {
	methods: {
		
		/**
		 * Define regras de statusbar em geral
		 * @return {void}
		 */
		defineStatusBar: function () {
			if(window.cordova && process.env.NODE_ENV == 'prod') {
		  		if(window.device && window.device.platform && window.device.platform.toLowerCase() == 'ios') {
			  		if(window.device.model == 'iPhone10,3' || window.device.model == 'iPhone10,6' || window.device.model == 'x86_64') {

			  			// Configurações de statusbar
			  			if(typeof(StatusBar) !== 'undefined') {
			  				// Coloca a statusbar padrão
				  			StatusBar.styleDefault();

				  			// Mostra satusbar
				  			StatusBar.show();
				  			StatusBar.overlaysWebView(false);

				  			// Executa novamente
				  			setTimeout(function() {
				  				StatusBar.show();
				  				StatusBar.overlaysWebView(false);
				  			}, 2000)

			  			}

			  		}
			  	}
			}
		}
	}
};