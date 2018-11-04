export const authTools = {
	methods: {

		/**
		 * Busca se um usuário está logado, se sim, retorna TRUE, se não redireciona
		 * @return {void}
		 * /Users/gercil/Code/forks/vuetify-cordova-template/template/src/mixins
		 */
		isLogged: function () {
			var self = this
			if (self.$ls.get('token')) {
				return true
			} else {
				self.$ls.set('redirect', CircularJSON.stringify({
					name: self.$route.name,
					path: self.$route.path,
					params: self.$route.params,
					fullPath: self.$route.fullPath,
					hash: self.$route.hash,
					query: self.$route.query,
				}))
				self.$router.push({ name: 'Signs' })
			}
		},
	}
};