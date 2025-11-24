<script lang="ts">
	import Link from "./Link.svelte";

    export let id = "";
    export let title = "";
    export let desc = "";
    export let link = "";
    export let cls = "";
    export let color = "";
</script>

<section class={`pt-4 pb-8 h-92 md:h-212 w-full pr-4 flex overflow-x-scroll overscroll-x-none scrollbar bg-linear-to-r ${cls} 
    ${color === 'red' ? 'from-[#fff5f5] to-[#fffce2] text-[#937064]' 
    : color === 'yellow' ? 'from-[#fffce2] to-[#ffefef] text-[#888578]'
    : color === 'blue' ? 'from-[#f4fcf0] to-[#f3fce0] text-[#73979b]'
    : color === 'white' ? 'from-white to-white text-[#73979b]'
    : 'bg-transparent text-amber-600'}`}
id={id}>
    {#if title}
    <div class={`hidden md:block w-60 grow-0 shrink-0 h-max sticky left-0 font-serif p-4 pl-8 
        ${color === 'red' ? 'bg-[#fff5f5]' 
        : color === 'yellow' ? 'bg-[#fffce2]'
        : color === 'blue' ? 'bg-[#f4fcf0]' 
        : color === 'white' ? 'bg-white'
        : 'bg-[#fffce2]'}`}>
        <h1 class="uppercase text-sm leading-4 mb-2 font-light"> {title} </h1>
        <p class="text-sm italic"> {@html desc } </p>
        {#if link}<p class="mt-2 text-sm"><Link color="red" href={link} text="Live site"/></p>{/if}
    </div>
       
    {/if}
    
    <div class="h-80 md:h-200 pl-4">
        <div class="h-full flex gap-2 w-max">
            <slot></slot>
        </div>
    </div>
    

</section>