<template>
	<div app>
		<v-tabs fixed-tabs light :grow="true" show-arrows>
			<v-tab key="signin" @click="signinLogin = true">
				Entrar
			</v-tab>
			<v-tab key="siginup">
				Cadastrar
			</v-tab>

			<v-tab-item key="signin" :transition="false" :reverse-transition="false">
				<v-container fluid>
					<v-flex v-show="signinLogin">
						<v-btn @click="submitFacebook" block color="#3b5998" class="body-2 font-weight-regular white--text" :disabled="$root.loadingApp"><i class="fab fa-fw mr-2 fa-facebook-f"></i> ENTRAR COM FACEBOOK</v-btn>
						<v-divider class="mt-4 mb-4"></v-divider>
					</v-flex>

					<v-form lazy-validation ref="formlogin" v-show="signinLogin">
						<v-text-field label="E-mail" type="email" single-line solo append-icon="email" required :rules="emailRules" v-model="emailLogin" :disabled="$root.loadingApp"></v-text-field>
						<v-text-field type="password" label="Senha" single-line solo append-icon="lock" required :rules="passwordRules" v-model="passwordLogin" :disabled="$root.loadingApp"></v-text-field>
						<v-btn block color="success" class="mt-0" @click="submitLogin" :disabled="$root.loadingApp">ENTRAR</v-btn>
						<v-btn block small class="mt-3" outline color="primary" @click="signinLogin = false" >Esqueci minha senha</v-btn>

						<v-snackbar v-model="loginSnack" :multi-line="true" :timeout="loginSnackTimeout" :top="loginSnackTop" :color="loginSnackColor">
							{{loginSnackText}}
						</v-snackbar>
					</v-form>
					<v-form lazy-validation ref="formreminder" v-show="!signinLogin">
						<v-text-field label="Seu e-mail" type="email" single-line solo append-icon="email" required :rules="emailRules" v-model="emailReminder" :disabled="$root.loadingApp"></v-text-field>
						<v-btn block color="success" class="mt-0" @click="submitReminder" :disabled="$root.loadingApp">ME LEMBRE</v-btn>
						<v-btn block small class="mt-3" outline color="primary" @click="signinLogin = true" >Retornar para Login</v-btn>

						<v-snackbar v-model="reminderSnack" :multi-line="true" :timeout="reminderSnackTimeout" :top="reminderSnackTop" :color="reminderSnackColor">
							{{reminderSnackText}}
						</v-snackbar>
					</v-form>
				</v-container>
			</v-tab-item>

			<v-tab-item key="signup" :transition="false" :reverse-transition="false">
				<v-container fluid>
					<v-flex>
						<v-btn  @click="submitFacebook" block color="#3b5998" class="body-2 font-weight-regular white--text" :disabled="$root.loadingApp"><i class="fab fa-fw mr-2 fa-facebook-f"></i> CADASTRAR COM FACEBOOK</v-btn>
						<v-divider class="mt-4 mb-4"></v-divider>
					</v-flex>

					<v-form lazy-validation ref="formsignup">
						<v-text-field label="E-mail" type="email" single-line solo append-icon="email" required :rules="emailRules" v-model="emailSignup" :disabled="$root.loadingApp"></v-text-field>
						<!-- <v-text-field label="Celular (somente números)" type="number" single-line solo append-icon="phone_iphone" required :rules="mobileRules" v-model="mobileSignup" :disabled="$root.loadingApp"></v-text-field> -->
						<v-text-field type="password" label="Senha" single-line solo append-icon="lock" required :rules="passwordRules" v-model="passwordSignup" :disabled="$root.loadingApp"></v-text-field>
						<v-btn block color="success" @click="submitSignup" :disabled="$root.loadingApp">CADASTRAR</v-btn>

						<v-snackbar v-model="signupSnack" :multi-line="true" :timeout="signupSnackTimeout" :top="signupSnackTop" :color="signupSnackColor">
							{{signupSnackText}}
						</v-snackbar>
					</v-form>
				</v-container>
			</v-tab-item>
		</v-tabs>
	</div>
</template>
<script>
	import axios from 'axios'

	// Client ID do Facebook
	const FBCID = '';

	// URL de redirecionamento do Facebook
	const FBRURL = '';

	export default {
		data: () => ({
			emailRules: [
				v => !!v || 'O e-mail é obrigatório.',
				v => /.+@.+/.test(v) || 'E-mail inválido.'
			],
			passwordRules: [
				v => !!v || 'Senha obrigatória.',
				v => (v && v.length > 4) || 'Senha deve ser maior que 4 caracteres.'
			],
			mobileRules: [
				v => !!v || 'Coloque um número de celular.',
				v => (v && !isNaN(v)) || 'Celular só pode conter números.',
				v => (v && v.length >= 11 && v.length <= 11) || 'Celular deve ter 11 números.'
			],

			emailLogin: '',
			passwordLogin: '',
			loginSnack: false,
			loginSnackText: '',
			loginSnackColor: '',
			loginSnackTimeout: 5000,
			loginSnackTop: true,

			emailSignup: '',
			passwordSignup: '',
			mobileSignup: '',
			signupSnack: false,
			signupSnackText: '',
			signupSnackColor: '',
			signupSnackTimeout: 5000,
			signupSnackTop: true,

			signinLogin: true,
			emailReminder: '',
			reminderSnack: false,
			reminderSnackText: '',
			reminderSnackColor: '',
			reminderSnackTimeout: 5000,
			reminderSnackTop: true,

			valid: true
		}),

		methods: {
			/**
			 * Ações para login
			 * @return {void}
			 */
			submitLogin () {
				if (this.$refs.formlogin.validate()) {
					
					this.loginSnackText = 'Teste com mais um texto assim grande para saber o que houve.'
					this.loginSnackColor = 'success'
					this.loginSnackTimeout = 5000
					this.loginSnackTop = true
					this.loginSnack = true

				}
			},

			/**
			 * Ações para cadastro
			 * @return {void}
			 */
			submitSignup () {
				if (this.$refs.formsignup.validate()) {
					
					this.signupSnackText = 'Teste com mais um texto assim grande para saber o que houve.'
					this.signupSnackColor = 'success'
					this.signupSnackTimeout = 5000
					this.signupSnackTop = true
					this.signupSnack = true

				}
			},

			/**
			 * Ações para lembrete de senha
			 * @return {void}
			 */
			submitReminder () {
				if (this.$refs.formreminder.validate()) {
					
					this.reminderSnackText = 'Teste com mais um texto assim grande para saber o que houve.'
					this.reminderSnackColor = 'success'
					this.reminderSnackTimeout = 5000
					this.reminderSnackTop = true
					this.reminderSnack = true

				}
			},

			submitFacebook() {
				var self = this

				// Verifica se está com o cordova e o plugin InAppBrowser instanciados
				if(typeof(window.cordova) !== 'undefined' && typeof(window.cordova.InAppBrowser) !== 'undefined'){

					// Cria a URL para login manual no Facebook
					// https://developers.facebook.com/docs/facebook-login/manually-build-a-login-flow/
					// No redirecionamento, pode ser enviado qualquer URL, desde que válida para retorno
					// Esta rotina, pega somente o access_token na URL independente de qual for a URL
					var url = encodeURI('https://www.facebook.com/v3.2/dialog/oauth??client_id='+FBCID+'&display=touch&response_type=token&scope=email&redirect_uri='+FBRURL);

					// Abre o InAppBrowser
					var ref = cordova.InAppBrowser.open(url, '_blank', 'location=yes,closebuttoncaption=Fechar');

					// Quando finalizar o carregamento da página no InAppBrowser
			        ref.addEventListener('loadstop', (e) => {
			        	
			        	var query = queryStringUrl(e.url);
			        	
			        	// Se existir o token do facebook na URL...
			            if(e.url.indexOf(FBRURL) !== -1 && tpyeof(query.access_token) !== 'undefined' && query.access_token){

			            	// Salva token no localstorage
			                self.$ls.set('fbtoken', query.access_token)

			                self.$root.loadingApp = true

			                // Envia para a API
			                setTimeout(function(){

			                	// Envia para o projeto o token (query.access_token) do Face, se não existir cadastra, se existir, faz login
			                	// O projeto deve retornar com o token local criado para o usuário e outros dados necessários
			                	// rota: apirs.login.fb

			                }, 1000)
			               	
			               	// Fecha InAppBrowser
			                ref.close();

			            } else {
			            	// Fecha InAppBrowser
			                ref.close();

			                // Mostra mensagem de erro de access_token inexistente
			                self.$root.dialogNotification('Houve um problema, tente novamente!', 'Erro', 'OK')
			            }

			        });

				}else{
					console.log('No Cordova InAppBrowser');
				}
			}
		}
	};
</script>