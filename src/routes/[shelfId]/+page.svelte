<script lang="ts">
	import { page } from '$app/stores';
	import type { Book, PagingMetadata } from '$lib/skoob.types';
  import {skoobService} from '$lib/main'
	import { id } from '../stores';

	export let data: { books: Book[], meta: PagingMetadata };
  let myId: number

	$: books = data.books; let metadata = data.meta; id.subscribe((numId) => myId = numId!)

  window.onscroll = async function() {
    if((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      if(metadata.next_page) {
        const nextPage = metadata.page + 1
        const shelfId = parseInt($page.params.shelfId)
        const response = await skoobService.getBooks(myId, {shelfId: shelfId, page: nextPage})
        metadata = response.paging
        books = [...books, ...response.response]
      }
    }
  }
</script>

<div
	class="grid grid-cols-1 gap-0 min-[975px]:grid-cols-2 min-[975px]:gap-2.5 xl:grid-cols-3 xl:gap-3.5 min-[1600px]:grid-cols-3"
>
	{#each books as book}
		<div
			class="flex flex-col flex-wrap items-center content-start justify-evenly m-2 rounded-lg bg-sky-950 text-gray-300 h-[13rem] overflow-hidden border border-solid border-white"
		>
			<img src={book.edicao.img_url} alt={book.edicao.titulo} class="h-full" />
			<div class="flex flex-col flex-wrap pl-4 h-4/5 justify-around">
				<div class="overflow-hidden text-ellipsis whitespace-nowrap">
					<h3 class="mr-2 font-extrabold">Nome:</h3>
					<p>{book.edicao.titulo}</p>
				</div>
				<div class="overflow-hidden text-ellipsis whitespace-nowrap">
					<h4 class="mr-2 font-extrabold">Autor:</h4>
					<p>{book.edicao.autor}</p>
				</div>
				<div class="">
					<p class="mr-2 font-extrabold">Ano:</p>
					<p>{book.edicao.ano}</p>
				</div>
			</div>
		</div>
	{/each}
</div>

<style>
	/* your styles go here */
</style>
