<template>
	<div>

	<v-tabs fixed-tabs color="primary" slider-color="info" dark :grow="true" show-arrows>
		<v-tab key="signin">
			Entrar
		</v-tab>
		<v-tab key="siginup">
			Cadastrar
		</v-tab>

		<v-tab-item key="signin">
			<v-container fluid>
				<v-flex>
					<h3 class="font-weight-regular mb-3">Entre agoraao kdoakjd io ajdio jaiodjaiod jioajd ioajdso</h3>
				</v-flex>

				<v-form>
					<v-text-field label="Name" required></v-text-field>
				</v-form>
			</v-container>
		</v-tab-item>

		<v-tab-item key="signup">
			<v-container fluid fill-height>
				<v-layout justify-center>
					<h3 class="font-weight-regular">Cadastre agora</h3>
				</v-layout>
			</v-container>
		</v-tab-item>
	</v-tabs>
	<!-- <v-container fluid fill-height>
		<v-slide-y-transition mode="out-in">
			<v-layout justify-center>

				<v-flex xs12>
					a
				</v-flex>

			</v-layout>
		</v-slide-y-transition>
	</v-container> -->

	</div>
</template>
