<script lang="ts">
    export let href=""
    export let text=""
    export let color = ""
</script>

<a href={href} target="_blank" 
    class={`text-shadow-none hover:text-shadow-current/50 hover:text-shadow-[0_0_5px]
    ${color === 'lime' ? 'text-[#83c900]' 
    : color === 'forest' ? 'text-[#009246]'
    : color === 'blue' ? 'text-[#737f9b]'
    : color === 'red' ? 'text-[#c7696a]'
    : 'text-[#c7696a]'}
    `}>
    {text}
</a>