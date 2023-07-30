<script lang='ts'>
	import '../app.css';
	import Icon from 'svelte-icons-pack/Icon.svelte';
	import IoLibrarySharp from 'svelte-icons-pack/io/IoLibrarySharp';
	import BsBookFill from 'svelte-icons-pack/bs/BsBookFill';
	import BsBookHalf from 'svelte-icons-pack/bs/BsBookHalf';
	import BsBook from 'svelte-icons-pack/bs/BsBook';
	import FaSolidBookReader from 'svelte-icons-pack/fa/FaSolidBookReader';
	import BsBookmarkXFill from 'svelte-icons-pack/bs/BsBookmarkXFill';
	import BsBookmarkHeart from 'svelte-icons-pack/bs/BsBookmarkHeart';
	import BsBookmarkPlus from 'svelte-icons-pack/bs/BsBookmarkPlus';
	import BsStarFill from 'svelte-icons-pack/bs/BsStarFill';
	import BsFileText from 'svelte-icons-pack/bs/BsFileText';
	import FaSolidHandHoldingMedical from 'svelte-icons-pack/fa/FaSolidHandHoldingMedical';
	import FaSolidHandHolding from 'svelte-icons-pack/fa/FaSolidHandHolding';
	import FaHandshake from 'svelte-icons-pack/fa/FaHandshake';
	import SiBookstack from 'svelte-icons-pack/si/SiBookstack';
	import ImTablet from 'svelte-icons-pack/im/ImTablet';
	import BsEarbuds from 'svelte-icons-pack/bs/BsEarbuds';

	const shelfs = [
		{
			name: 'Todos',
			id: 0,
			icon: IoLibrarySharp
		},
		{
			name: 'Lido',
			id: 1,
			icon: BsBookFill
		},
		{
			name: 'Lendo',
			id: 2,
			icon: BsBookHalf
		},
		{
			name: 'Quero Ler',
			id: 3,
			icon: BsBook
		},
		{
			name: 'Relendo',
			id: 4,
			icon: FaSolidBookReader
		},
		{
			name: 'Abandonei',
			id: 5,
			icon: BsBookmarkXFill
		},
		{
			name: 'Favorito',
			id: 8,
			icon: BsBookmarkHeart
		},
		{
			name: 'Desejado',
			id: 9,
			icon: BsBookmarkPlus
		},
		{
			name: 'Avaliado',
			id: 13,
			icon: BsStarFill
		},
		{
			name: 'Resenhado',
			id: 14,
			icon: BsFileText
		},
		{
			name: 'Tenho',
			id: 6,
			icon: FaSolidHandHoldingMedical
		},
		{
			name: 'Troco',
			id: 10,
			icon: FaSolidHandHolding
		},
		{
			name: 'Emprestei',
			id: 11,
			icon: FaHandshake
		},
		{
			name: 'Meta de Leitura',
			id: 12,
			icon: SiBookstack
		},
		{
			name: 'Ebook/Digital',
			id: 7,
			icon: ImTablet
		},
		{
			name: 'AudioBook',
			id: 15,
			icon: BsEarbuds
		}
	];
</script>

<button
	data-drawer-target="default-sidebar"
	data-drawer-toggle="default-sidebar"
	aria-controls="default-sidebar"
	type="button"
	class="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
>
	<span class="sr-only">Open sidebar</span>
	<svg
		class="w-6 h-6"
		aria-hidden="true"
		fill="currentColor"
		viewBox="0 0 20 20"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			clip-rule="evenodd"
			fill-rule="evenodd"
			d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
		/>
	</svg>
</button>

<aside
	id="default-sidebar"
	class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
	aria-label="Sidebar"
>
	<div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
		<ul class="space-y-2 font-medium text-2xl">
			{#each shelfs as shelf}
				<li>
					<a
						href={`/${shelf.id}`}
						class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
					>
						<Icon src={shelf.icon} color="white" title={shelf.name}/>
						<span class="ml-3">{shelf.name}</span>
					</a>
				</li>
			{/each}
		</ul>
	</div>
</aside>

<div class="min-h-[100vh] p-4 sm:ml-64 bg-sky-950 flex justify-center">
	<div class="uppercase">
		<slot />
	</div>
</div>
