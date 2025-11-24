<script lang="ts">
    import Header from "$lib/components/Header.svelte";
    import Project from "$lib/components/Project.svelte";
    import Image from "$lib/components/Image.svelte";

</script>

<div class="h-screen bg-linear-to-br from-[#fffce2] to-[#ffefef]">
    
    <Header />

    <section class="flex h-full">
        <section class="w-full space-y-4 p-4 pr-0 pt-8 overflow-y-scroll scroll-smooth">

            <section class="gap-8 flex flex-col-reverse items-center lg:flex-row lg:items-start lg:justify-between lg:h-full lg:max-h-170 xl:max-h-200 mb-20">
                <div id="top" class="py-10 pr-4 lg:px-4 pb-10 font-serif max-w-120 lg:max-w-80 flex flex-col gap-10 h-full justify-between text-sm">
                    <div>
                        <p class=" text-[#8a9b8a]">Currently working on interfaces for understanding complex data at <a href="https://www.fathom.info/" class="text-[#83c900]">Fathom Information Design</a>. Most of the images you'll find on this site (which I built myself!) are from graphic design, web, and writing projects I've done for fun. <span class="italic">Curious?</span> Reach out to see more of my work or inquire about freelance availability. </p>
                        <ul class="mt-4">
                            <p class="text-[#7f7fbc]">marrsec@gmail.com</p>
                            <p class="text-[#c7696a]"><a href="https://www.are.na/libby-marrs/" target="_blank">Are.na</a></p>
                            <p class="text-[#c7696a]"><a href="https://www.instagram.com/woman_designer_8295/" target="_blank">Instagram</a></p>
                           
                        </ul>
                    </div>
                    <div class="text-[#8f9b79] space-y-2">
                        <p class="italic font-light">Favorite projects:</p>
                        <ul class="space-y-2">
                            <li class="">
                                <a class="text-[#009246]" href="#ron-carter-universe">The Ron Carter Universe</a>
                                <p>Design + web development for a mobile-first immersive experience of Ron Carter's discography.</p>
                            </li>
                            <li class="">
                                <a class="text-[#009246]" href="https://otherinter.net/research/lore/how-to-read-the-internet/" target="_blank">How to Read the Internet</a>
                                <p>Writing + research: Part of my collaboration with Tiger Dingsun during our stint as visiting researchers at <a class="text-[#83c900]" href="https://otherinter.net/" target="_blank">Other Internet</a>.</p>
                            </li>
                            <li class="">
                                <a class="text-[#009246]" href="#post-authentic-sincerity">Post-Authentic Sincerity</a>
                                <p>Design + web development + writing for my degree project at RISD exploring the idea of <span class="italic">authenticity</span> in graphic design.</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <Image src="misc/bananabread.png" cls="!h-auto lg:h-full pt-20 pr-4 lg:pt-8 m-auto lg:m-0 lg:pr-10 w-full max-w-130 lg:max-w-160 xl:max-w-190"/>
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
                <div class="grid grid-cols-3 w-max max-w-max gap-2 grid-rows-2 max-h-full">
                    <Image src="albums-other/231215D.png" />
                    <Image src="albums-other/231218E.png" />
                    <Image src="albums-other/231202O.png" />
                    <Image src="albums-other/231210B.png" />
                    <Image src="albums-other/231215O.png" />
                    <Image src="albums-other/231215M 2.png" />
                </div>
                <Image src="albums-other/230924D.png" />
                <div class="grid grid-cols-3 w-max max-w-max gap-2 grid-rows-2 max-h-full">
                    <Image src="albums-other/230924B.png" />
                    <Image src="albums-other/230924G.png" />
                    <Image src="albums-other/230610S.png" />
                    <Image src="albums-other/230924A.png" />
                    <Image src="albums-other/230610N.png" />
                    <Image src="albums-other/230924E.png" />
                </div>
                <Image src="cemeteryclassics/pencilsketches.png" cls="mx-8" />
                <Image src="cemeteryclassics/sketch-07.png" />
                <div class="grid grid-cols-3 w-max max-w-max gap-2 grid-rows-2 max-h-full">
                    <Image src="cemeteryclassics/sketch-06.png" />
                    <Image src="cemeteryclassics/sketch-05.png" />
                    <Image src="cemeteryclassics/sketch-04.png" />
                    <Image src="cemeteryclassics/sketch-03.png" />
                    <Image src="cemeteryclassics/sketch-02.png" />
                    <Image src="cemeteryclassics/sketch-01.png" />
                </div>
            </Project>

            <Project
                title = "Post-Authentic Sincerity"
                desc = 'For my Graphic Design degree project at RISD, I wrote an essay and built a website to contain it. The writing explores realness, nature, and default systems in the context of branding and graphic design, and how recent shifts in the way these ideas are symbolized and marketed indicate a cultural movement away from "authenticity". The essay also argues for a "post-authentic" approach to graphic design discourse which acknowledges its own function as commodity service, rather than an artform inherently independent of commerce.'
                link = "https://libbymarrs.net/post-authentic-sincerity/"
                id = "post-authentic-sincerity"
            >
                <Image src="dp/libbydp.gif"/>
                <Image src="dp/libbydp2.gif" />
            </Project>

            <Project 
                title = "A wedding invitation"
                desc = "For some friends"
            >
                <Image src="wedding/menu.png"  cls="md:-ml-60" />
                <Image src="wedding/cards_sm.png" />
                <Image src="wedding/invite_info_front_4x6.png" />
                <Image src="wedding/sketches.png" />
                
            </Project>

            <Project 
                title = "Outbreak analytics & education tools"
                desc = "A couple examples of the kind of work I've done at Fathom Information Design as part of an effort in partnership with the Sabeti Lab to create tools that facilitate infectious disease research, outbreak surveillance, and education about public health and epidemiology."
            >
                <Image src="lkt/oo-ov-o3.png" />
                <Image src="lkt/birdflu-sketch.png" />
            </Project>

            <Project 
                id = "ron-carter-universe"
                title = "Ron Carter Universe"
                desc = "Ron Carter is probably the most legendary bassist in jazz history. In honor of the vibrance and elegance of his life's work, I designed and built an immersive discography with the help of Mr. Carter himself and my team at Fathom. <br>
                I wrote a series of blog posts reflecting on the project <a class='text-[#7f7fbc] hover:text-[#4949ae]' hover:text-'' href='#'>here,</a> <a class='text-[#7f7fbc] hover:text-[#4949ae]' hover:text-'' href='#'>here,</a> and <a class='text-[#7f7fbc] hover:text-[#4949ae]' href='#'>here</a>."
                link = "https://www.roncarteruniverse.com/"
            >
                <Image src="roncarter/desktop-photo.png" />
                <Image src="roncarter/sc1.jpg" />
                <Image src="roncarter/sc2.png" />
                <Image src="roncarter/sc3.png" />
                <Image src="roncarter/mobile-photo.jpg" />
                <Image src="roncarter/swatch.png" />
                <Image src="roncarter/poster1.png" />
                <Image src="roncarter/poster2.png" />
            </Project>

             <Project 
                title = "Island Time"
                desc = "Book cover design with custom, hand-drawn lettering"
            >
                <div class="flex">
                    <!-- <Image src="islandtime/cover-crop.png" /> -->
                    <Image src="islandtime/oval_gif.gif" cls="md:-ml-60"/>
                    <Image src="islandtime/oval-thumbs.png" />
                    <Image src="islandtime/sketches-back.png" />
                    <Image src="islandtime/cover.png" />
                </div>
            </Project>

            <Project cls="mt-40">
                <Image src="tshirt/shirt2_detail.png" cls="-ml-70 md:-ml-100"/>
                
                <Image src="misc/cool.png" cls="p-20"/>
                <Image src="misc/noposter.gif"/>
                <Image src="misc/noposter-12.jpg"/>
                
                
                <Image src="misc/bitter-word-stripe.svg" cls="p-20"/>
                <Image src="arvi/arvi-transparent.png" cls="mx-20" />
                <Image src="arvi/arvi-07.png" />

                <Image src="bb/bb.jpg" />
                <Image src="bb/spreads/bootlegbook8.png" />

                <Image src="misc/c.PNG" />
                <div class="p-20 flex bg-[#fff8d2]">
                    <Image src="misc/c3.PNG" />
                    <Image src="misc/c4.PNG" />
                </div>
                

                <Image src="misc/electivesposter_1.jpg" />
                <Image src="misc/electivesposter_2.jpg" />

                <Image src="tshirt/bootlegshirt.png" />
                <Image src="tshirt/shirt1back.png" />
                <Image src="tshirt/shirt1.png" cls="-ml-140"/>

                <Image src="misc/eth.png" cls="p-20"/>
                <Image src="misc/bread2.png" cls="p-30"/>

                <Image src="tshirt/shirt1_detail1.png" />
            </Project>

        </section>
    </section>
    
</div>