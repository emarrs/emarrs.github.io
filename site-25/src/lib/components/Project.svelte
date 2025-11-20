<script lang="ts">
    export let title;
    export let desc;
</script>

<section class="h-160 w-full flex bg-transparent overflow-x-scroll overscroll-none">
    <div class="w-60 bg-amber-50 grow-0 shrink-0 h-max sticky left-0 font-serif text-amber-600 p-4 ">
        <h1 class="uppercase text-sm leading-4 mb-2 font-light"> {title} </h1>
        <p class="text-sm italic"> { desc } </p>
    </div>
    
    <div class="h-160 min-w-max">
        <div class="h-full flex gap-2">
            <slot></slot>
        </div>
    </div>
    

</section>