<script lang="ts">
    import Header from "$lib/components/Header.svelte";
    import Project from "$lib/components/Project.svelte";
    import Image from "$lib/components/Image.svelte";

</script>

<div class="h-screen pt-20">
    
    <Header />

    <section class="flex h-full">
        <!-- <section class="w-60 bg-amber-100 p-4"></section> -->
        <section class="w-full bg-linear-to-br from-[#fffce2] to-[#f3ffe3] space-y-4 p-4 overflow-y-scroll">

            <section class="flex h-full justify-between">
                <div class="font-serif w-100 space-y-10">
                    <p class=" text-[#8a9b8a]">Currently working on interfaces for understanding complex data at <a href="https://www.fathom.info/" class="text-[#83c900]">Fathom Information Design</a>. Most of the images you'll find on this site (which I built myself!) are from graphic design, web, and writing projects I've done for fun. <span class="italic">Curious?</span> Email me to see more of my work or inquire about freelance availability. </p>
                    <div class="text-[#8f9b79] space-y-2">
                        <p class="italic font-light">All-time favorite projects:</p>
                        <ul class="space-y-2">
                            <li class="ml-2">
                                <a href="#ron-carter-universe">The Ron Carter Universe</a>
                                <p>Design + web development for a mobile-first immersive experience of Ron Carter's discography.</p>
                            </li>
                            <li class="ml-2">
                                <a href="https://otherinter.net/research/lore/how-to-read-the-internet/" target="_blank">How to Read the Internet</a>
                                <p>Writing + research: Part of my collaboration with Tiger Dingsun during our stint as visiting researchers at <a href="https://otherinter.net/" target="_blank">Other Internet</a>.</p>
                            </li>
                            <li class="ml-2">
                                <a href="#post-authentic-sincerity">Post-Authentic Sincerity</a>
                                <p>Design + web development + writing for my degree project at RISD exploring the idea of <span class="italic">authenticity</span> in graphic design.</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <Image src="misc/bananabread.png" cls="p-20"/>
            </section>
                

            
            <Project 
                title = "Album artwork"
                desc = "For Moses Archuleta and Anastasia Coope"
            >
                <Image src="cemeteryclassics/vinyl-group.png" />
                <Image src="cemeteryclassics/cover-f-final.png" />
                <Image src="cemeteryclassics/cover-b-final.png" />
                <Image src="cemeteryclassics/extras.png" cls="p-8" />
                
                <Image src="albums-other/toughsun.jpg" />
                <Image src="albums-other/toughsun-vinyl.jpg" />
            </Project>

            <Project >
                <Image src="albums-other/1.png" />
                <div class="grid grid-cols-3 gap-2 grow grid-rows-2 max-h-full">
                    <Image src="albums-other/231215D.png" />
                    <Image src="albums-other/231218E.png" />
                    <Image src="albums-other/231202O.png" />
                    <Image src="albums-other/231210B.png" />
                    <Image src="albums-other/231215O.png" />
                    <Image src="albums-other/231215M 2.png" />
                </div>
                <Image src="albums-other/230924D.png" />
                <div class="grid grid-cols-3 gap-2 grow grid-rows-2 max-h-full">
                    <Image src="albums-other/230924B.png" />
                    <Image src="albums-other/230924G.png" />
                    <Image src="albums-other/230610S.png" />
                    <Image src="albums-other/230924A.png" />
                    <Image src="albums-other/230610N.png" />
                    <Image src="albums-other/230924E.png" />
                </div>
                <Image src="cemeteryclassics/sketch-07.png" />
                <div class="grid grid-cols-3 gap-2 grow grid-rows-2 max-h-full">
                    <Image src="cemeteryclassics/sketch-06.png" />
                    <Image src="cemeteryclassics/sketch-05.png" />
                    <Image src="cemeteryclassics/sketch-04.png" />
                    <Image src="cemeteryclassics/sketch-03.png" />
                    <Image src="cemeteryclassics/sketch-02.png" />
                    <Image src="cemeteryclassics/sketch-01.png" />
                </div>
            </Project>

            <Project 
                title = "A wedding invitation"
                desc = "For some friends"
            >
                <Image src="wedding/menu.png" />
                <Image src="wedding/cards_sm.png" />
                <Image src="wedding/invite_info_front_4x6.png" />
                <Image src="wedding/sketches.png" />
                
            </Project>

            <Project
                title = "Post-Authentic Sincerity"
                desc = "A premium generic essay"
                id = "post-authentic-sincerity"
            >
                <Image src="dp/libbydp.gif" cls="-ml-60" />
                <Image src="dp/libbydp2.gif" />
            </Project>

            <Project 
                title = "Outbreak analytics & education tools"
                desc = "A couple examples of the kind of work I've done at Fathom as part of an effort in partnership with the Sabeti Lab to create tools that facilitate infectious disease research, outbreak surveillance, and education about public health and epidemiology."
            >
                <Image src="lkt/oo-ov-o3.png" />
                <Image src="lkt/birdflu-sketch.png" />
            </Project>

            <Project 
                id = "ron-carter-universe"
                title = "Ron Carter Universe"
                desc = "Ron Carter is probably the most legendary bassist in jazz history. He helped to shape the genre as a fixture of the Miles Davis Quintet, while blurring and transcending its boundaries over his ongoing 60+ year career. In honor of the vibrance and elegance of his life's work, I designed and built an immersive discography alongside Mr. Carter and my team at Fathom. 
                I wrote a series of blog posts reflecting on the project here."
                link = "https://www.roncarteruniverse.com/"
            >
                <Image src="roncarter/desktop-photo.png" />
                <Image src="roncarter/sc1.jpg" />
                <Image src="roncarter/sc2.png" />
                <Image src="roncarter/sc3.png" />
                <Image src="roncarter/mobile-photo.jpg" />
            </Project>

             <Project 
                title = "Island Time"
                desc = "Book cover design with custom, hand-drawn lettering"
            >
                <div class="flex">
                    <!-- <Image src="islandtime/cover-crop.png" /> -->
                    <Image src="islandtime/oval_gif.gif" cls="-ml-60"/>
                    <Image src="islandtime/oval-thumbs.png" />
                    <Image src="islandtime/sketches-back.png" />
                    <Image src="islandtime/cover.png" />
                </div>
            </Project>

            <Project >
                <Image src="tshirt/shirt2_detail.png" />
                
                <Image src="arvi/arvi-transparent.png" cls="mx-20" />

                <!-- <Image src="misc/bananabread.png" /> -->
                <Image src="misc/bread2.png" cls="p-20"/>


                <Image src="arvi/arvi-07.png" />

                <Image src="tshirt/bootlegshirt.png" />
                <Image src="tshirt/shirt1back.png" />
                <Image src="tshirt/shirt1.png" cls="-ml-140"/>

                <Image src="tshirt/shirt1_detail1.png" />
            </Project>

        </section>
    </section>
    
</div>