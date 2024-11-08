<!-- Overlay.vue -->
<template>
	<v-navigation-drawer v-model="drawer" class="elevation-8">
		<template #prepend>
			<v-slide-x-transition appear>
				<v-list nav density="default">
					<v-list-item v-for="item in items" :key="item.route" :to="item.route" nav link
						class="ma-2 nav-item overflow-visible" rounded="pill">
						<template #prepend>
							<v-icon>{{ item.prependIcon }}</v-icon>
						</template>
						<template #title>
							<span class="nav-item-title">{{ item.title }}</span>
						</template>
					</v-list-item>
				</v-list>
			</v-slide-x-transition>
		</template>

		<template #append>
			<v-slide-y-reverse-transition appear>
				<v-list nav density="default">
					<v-list-item class="ma-3 nav-item" nav link :to="'/settings'" rounded="pill">
						<template #prepend>
							<v-icon>mdi-cog-outline</v-icon>
						</template>
						<template #title>
							<span>{{ t('page.settings') }}</span>
						</template>
					</v-list-item>
				</v-list>
			</v-slide-y-reverse-transition>
		</template>
	</v-navigation-drawer>

	<v-slide-x-transition appear>
		<v-card class="menu-card rounded-pill" elevation="8" @click="drawer = !drawer">
			<v-btn icon="mdi-menu" :ripple="true" />
		</v-card>
	</v-slide-x-transition>


	<v-main>
		<div class="background-container">
			<router-view v-slot="{ Component }">
				<component :is="Component" />
			</router-view>
		</div>
	</v-main>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const drawer = ref(true);

const items = computed(() => [
	{
		title: t('page.home'),
		prependIcon: 'mdi-view-dashboard-outline',
		route: '/',
	},
	{
		title: t('page.divisions'),
		prependIcon: 'mdi-school-outline',
		route: '/divisions',
	},
	{
		title: t('page.teachers'),
		prependIcon: 'mdi-human-male-board',
		route: '/teachers',
	},
	{
		title: t('page.rooms'),
		prependIcon: 'mdi-door',
		route: '/rooms',
	},
]);
</script>

<style scoped>
:deep(.v-list-item-title) {
	overflow: visible !important;
	white-space: normal;
	word-wrap: break-word;
}

:deep(.v-list-item__content) {
	overflow: visible !important;
	white-space: normal;
	word-wrap: break-word;
}

.background-container {
	height: 100%;
	padding: 0;
	overflow: hidden;
	background-color: rgb(var(--v-theme-background));
}

.nav-item :deep(.v-list-item-title) {
	font-size: 1.25rem;
}

.nav-item :deep(.v-icon) {
	font-size: 1.5rem;
}

.nav-item-title {
	user-select: none;
}

.no-scroll {
	overflow: hidden !important;
}

.grid-container {
	display: grid;
	grid-template-columns: 1fr 1fr;
	align-items: center;
	justify-items: center;
	max-height: 100%;
}

.menu-card {
	z-index: 999;
	width: 32px;
	aspect-ratio: 1 / 1;
	display: inline-flex;
	padding: 32px;
	align-items: center;
	justify-content: center;
	position: fixed;
	top: 16px;
	left: 16px;
}

.v-btn {
	margin: 0;
	padding: 0;
}

.v-btn>.v-icon {
	font-size: 24px;
}
</style>
