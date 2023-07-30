<script lang="ts">
	import { id } from './stores';

	let myId: number;
	let logged = false;
	id.subscribe((value) => (myId = value!));
	function checkId() {
		if (myId) {
			logged = true;
		}
	}

	checkId();

	function onSubmit(e: SubmitEvent) {
		if (!e.target) return;
		const formData = new FormData(e.target as HTMLFormElement);
		id.update((myId) => (myId = parseInt(formData.get('ID')! as string)));
		checkId();
	}
</script>

<div class="mt-8 lg:mt-20">
	{#if logged}
		<a href="/0" class="text-2xl bg-white rounded p-2">Acessar meus livros</a>
	{:else}
		<h1 class="text-white text-center text-lg">Digite seu ID do Skoob</h1>
		<form on:submit|preventDefault={onSubmit} class="flex flex-col">
			<input name="ID" value="" class="mt-4 py-2 text-2xl rounded" />
			<button type="submit" class="bg-white rounded w-full mt-8 py-4 text-2xl">Ir </button>
		</form>
	{/if}
</div>

<style>
</style>
