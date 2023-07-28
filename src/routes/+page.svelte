<script lang="ts">
  import {id} from './stores'

  let myId: number
	let logged = false;
  id.subscribe((value) => myId = value)
	function checkId() {
		if (myId) {
			logged = true;
		}
	}

  checkId()

	function onSubmit(e) {
		if (!e.target) return;
		const formData = new FormData(e.target);
    id.update((myId) => myId = parseInt(formData.get('ID') as string))
    checkId()
	}
</script>

{#if logged}
	<a href="/0">Access my books</a>
{:else}
	<h1 class="text-white">You must set your ID</h1>
	<form on:submit|preventDefault={onSubmit}>
		<input name="ID" value="" />
		<button type="submit" class="bg-white rounded w-10">Set</button>
	</form>
{/if}

<!-- markup (zero or more items) goes here -->

<style>
	/* your styles go here */
</style>
