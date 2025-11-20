<script lang="ts">
    import Header from "$lib/components/Header.svelte";
    import Project from "$lib/components/Project.svelte";
    import Image from "$lib/components/Image.svelte";

</script>

<div class="h-screen pt-20">
    
    <Header />

    <section class="flex h-full">
        <!-- <section class="w-60 bg-amber-100 p-4"></section> -->
        <section class="w-full bg-lime-50 space-y-4 p-4 overflow-y-scroll">
            
            <Project 
                title = "Cemetery Classics"
                desc = "Album artwork for Moon Diagrams (Moses Archuleta)"
            >
                <Image src="cemeteryclassics/vinyl-group.png" />
                <Image src="cemeteryclassics/cover-f-final.png" />
                <Image src="cemeteryclassics/cover-b-final.png" />
                
            </Project>

            <Project 
                title = "More album artwork"
                desc = ""
            >
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
                    <Image src="albums-other/230610S.png" />
                    <Image src="albums-other/230924G.png" />
                    <Image src="albums-other/230924A.png" />
                    <Image src="albums-other/230610N.png" />
                    <Image src="albums-other/230924E.png" />
                </div>
            </Project>

            <Project 
                title = "Anastasia Coope EP"
                desc = ""
            >
                <Image src="albums-other/toughsun.jpg" />
                <Image src="albums-other/toughsun-vinyl.jpg" />
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
                desc = ""
            >
                <Image src="dp/libbydp.gif" />
                <Image src="dp/libbydp2.gif" />
            </Project>

            <Project 
                title = "Outbreak analytics & education tools"
                desc = ""
            >
                <Image src="lkt/oo-ov-o3.png" />
                <Image src="lkt/birdflu-sketch.png" />
            </Project>

            <Project 
                title = "Ron Carter Universe"
                desc = ""
            >
                <Image src="roncarter/desktop-photo.png" />
                <Image src="roncarter/sc1.jpg" />
                <Image src="roncarter/sc2.png" />
                <Image src="roncarter/sc3.png" />
                <Image src="roncarter/mobile-photo.jpg" />
            </Project>

            <Project 
                title = "Digitally-printed wearables"
                desc = ""
            >
                <Image src="tshirt/shirt2_detail.png" />
                <Image src="tshirt/bootlegshirt.png" />
                <Image src="tshirt/shirt1back.png" />
                <Image src="tshirt/shirt2back_sm.png" />
                <Image src="tshirt/shirt1.png" />
                <Image src="tshirt/shirt1_detail1.png" />
            </Project>

             <Project 
                title = "Island Time"
                desc = "Book cover design with custom, hand-drawn lettering"
            >
                <div class="flex">
                    <Image src="islandtime/cover-crop.png" />
                    <Image src="islandtime/oval_gif.gif" />
                    <Image src="islandtime/oval-thumbs.png" />
                    <Image src="islandtime/sketches-back.png" />
                    <Image src="islandtime/cover.png" />
                </div>
            </Project>

            <Project 
                title = "Custom lettering & logo design"
                desc = ""
            >
                <Image src="arvi/arvi-transparent.png" />
                <Image src="arvi/220119-arvi-2.png" />
            </Project>

        </section>
    </section>
    
</div>