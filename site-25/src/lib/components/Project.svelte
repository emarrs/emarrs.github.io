<script lang="ts">
    export let id = "";
    export let title = "";
    export let desc = "";
    export let link = "";
</script>

<section class="h-100 md:h-200 w-full flex bg-transparent overflow-x-scroll overscroll-x-none" id={id}>
    {#if title}
    <div class="hidden md:block w-60 bg-amber-50 grow-0 shrink-0 h-max sticky left-0 font-serif text-amber-600 p-4 ">
        <h1 class="uppercase text-sm leading-4 mb-2 font-light"> {title} </h1>
        <p class="text-sm italic"> { desc } </p>
         {#if link}<a class="mt-2 text-sm text-amber-500" href={link} target="_blank">Live site</a>{/if}
    </div>
       
    {/if}
    
    <div class="md:h-200 min-w-max">
        <div class="h-full flex gap-2">
            <slot></slot>
        </div>
    </div>
    

</section>