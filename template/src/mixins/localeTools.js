export const localeTools = {
	methods: {

		/**
		 * Define regras de statusbar em geral
		 * @return {void}
		 */
		setNewLocale: function (value) {
			i18n.locale = value
			window.localStorage.setItem('lng', value)
		},
	}
};