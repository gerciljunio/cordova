<template>
	<div app>
		<v-tabs fixed-tabs light :grow="true" show-arrows>
			<v-tab key="signin">
				Entrar
			</v-tab>
			<v-tab key="siginup">
				Cadastrar
			</v-tab>

			<v-tab-item key="signin" :transition="false" :reverse-transition="false">
				<v-container fluid>
					<v-flex v-show="signinLogin">
						<v-btn @click="submitFacebook" block color="#3b5998" class="body-2 font-weight-regular" dark><i class="fab fa-fw mr-2 fa-facebook-f"></i> ENTRAR COM FACEBOOK</v-btn>
						<v-divider class="mt-4 mb-4"></v-divider>
					</v-flex>

					<v-form lazy-validation ref="formlogin" v-show="signinLogin">
						<v-text-field label="E-mail" type="email" single-line solo append-icon="email" required :rules="emailRules" v-model="emailLogin"></v-text-field>
						<v-text-field type="password" label="Senha" single-line solo append-icon="lock" required :rules="passwordRules" v-model="passwordLogin"></v-text-field>
						<v-btn block color="success" class="mt-0" @click="submitLogin" dark>ENTRAR</v-btn>
						<v-btn block small class="mt-3" outline color="primary" @click="signinLogin = false" dark>Esqueci minha senha</v-btn>

						<v-snackbar v-model="loginSnack" :multi-line="true" :timeout="loginSnackTimeout" :top="loginSnackTop" :color="loginSnackColor">
							{{loginSnackText}}
						</v-snackbar>
					</v-form>
					<v-form lazy-validation ref="formreminder" v-show="!signinLogin">
						<v-text-field label="Seu e-mail" type="email" single-line solo append-icon="email" required :rules="emailRules" v-model="emailReminder"></v-text-field>
						<v-btn block color="success" class="mt-0" @click="submitReminder" dark>ME LEMBRE</v-btn>
						<v-btn block small class="mt-3" outline color="primary" @click="signinLogin = true" dark>Retornar para Login</v-btn>

						<v-snackbar v-model="reminderSnack" :multi-line="true" :timeout="reminderSnackTimeout" :top="reminderSnackTop" :color="reminderSnackColor">
							{{reminderSnackText}}
						</v-snackbar>
					</v-form>
				</v-container>
			</v-tab-item>

			<v-tab-item key="signup" :transition="false" :reverse-transition="false">
				<v-container fluid>
					<v-flex>
						<v-btn @click="submitFacebook" block color="#3b5998" class="body-2 font-weight-regular" dark><i class="fab fa-fw mr-2 fa-facebook-f"></i> CADASTRAR COM FACEBOOK</v-btn>
						<v-divider class="mt-4 mb-4"></v-divider>
					</v-flex>

					<v-form lazy-validation ref="formsignup">
						<v-text-field label="E-mail" type="email" single-line solo append-icon="email" required :rules="emailRules" v-model="emailSignup"></v-text-field>
						<v-text-field label="Celular (somente números)" type="number" single-line solo append-icon="phone_iphone" required :rules="mobileRules" v-model="mobileSignup"></v-text-field>
						<v-text-field type="password" label="Senha" single-line solo append-icon="lock" required :rules="passwordRules" v-model="passwordSignup"></v-text-field>
						<v-btn block color="success" @click="submitSignup" dark>CADASTRAR</v-btn>

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
				//
			}
		}
	};
</script>