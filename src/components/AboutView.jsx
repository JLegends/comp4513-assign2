import Header from "./Header"

const AboutView = (props) => {



    const headerFocus = "About"



    return (
        
        <article className="h-screen flex flex-col w-full"> {/* clean up Background color EVENTUALLY */} 
            <Header headerFocus={headerFocus} />
            
            <div className="flex flex-row">
                <div className="w-2/3">
                    <figure className="relative">
                    <a href="#">
                        <img className="w-full h-1/3" src="./images/art-images/paintings/full/019040.jpg" alt="image description"/>
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0)_0%,_rgba(0,0,0,0.6)_100%)] pointer-events-none"></div>
                    </a>
                    <figcaption className="absolute px-4 text-9xl text-white bottom-1 font-bold">
                        <p>ABOUT</p>
                    </figcaption>
                    </figure>

                    <article className="bg-linear-to-t from-[#121212] to-[#212121] p-3">
                        <p className="text-white">A Minecraft Movie is a 2025 fantasy adventure comedy film based on the 2011 video game Minecraft by Mojang Studios. It was directed by Jared Hess and written by Chris Bowman, Hubbel Palmer, Neil Widener, Gavin James, and Chris Galletta, from a story by Allison Schroeder, Bowman, and Palmer. The film stars Jason Momoa, Jack Black, Danielle Brooks, Emma Myers, and Sebastian Hansen. In the film, four misfits are pulled through a portal into a cubic world that thrives on imagination, having no choice but to master the world while embarking on a quest with an expert crafter named Steve.

Plans for a Minecraft film adaptation originated in 2014, when game creator Markus Persson revealed that Mojang was in talks with Warner Bros. Pictures to develop the project. Throughout its development, A Minecraft Movie shifted between several directors, producers, and story drafts. By 2022, Legendary Entertainment became involved, and Hess was hired as director with Momoa in talks to star. Further casting took place from May 2023 to January 2024. Principal photography began later that month in New Zealand and concluded in April 2024. Mark Mothersbaugh composed the score, and Sony Pictures Imageworks, Wētā FX, and Digital Domain provided the films visual effects.

A Minecraft Movie had its world premiere at Empire, Leicester Square in London on March 30, 2025, and was theatrically released in the United States on April 4. The film received mixed reviews from critics, who praised the performances of the cast, though some were divided on its plot and faithfulness to the source material. It has grossed $317.7 million worldwide against a budget of $150 million, becoming the fourth-highest-grossing film of 2025.

Plot
Struggling doorknob salesman Steve breaks into a mine to fulfill a childhood dream when he discovers the Orb of Dominance and the Earth Crystal. When combined, they create a portal that transports him to the Overworld, an alternate dimension where the terrain is made of easily manipulated cubes. He builds his own paradise and later stumbles across a portal to a hellish world called the Nether. He is imprisoned by Malgosha, the gold-obsessed piglin ruler of the Nether who hates creativity. Because the Orb would allow her to control the Overworld, Steve has his dog Dennis hide it and the Crystal under his bed in the real world.

Some time later, 1980s video game champion Garrett "The Garbage Man" Garrison owns a failing video game store in Chuglass, Idaho. He heads to a storage auction to acquire items to sell for cash, ultimately winning the contents of Steve's old house. While searching through the items, particularly hoping to find a valuable Atari Cosmos, he instead finds the Orb of Dominance and the Earth Crystal.

Siblings Henry and Natalie move to Chuglass following their mother's death. The two meet Dawn, their real estate agent who wants to open a petting zoo. On Henry's first day of school, he gets in trouble when his makeshift jetpack malfunctions and destroys a mascot statue. To avoid trouble, he pretends that Garrett is his uncle, who takes him to the video game store to discuss his options. There, Henry combines the Orb and Crystal, leading the two to the mine. Natalie is worried and calls Dawn, who accesses Henry's location with Natalie's phone. All four of them ultimately enter the portal and arrive in the Overworld. Malgosha is alerted that the Orb has returned – she releases Steve from his prison in the Nether to reclaim it, bluffing that she holds his dog hostage.

While fighting off monsters at night, Henry learns how to build and makes a wooden fortress. The Earth Crystal is destroyed in the commotion. Steve appears at dawn and defeats the monsters. He says that a replacement Crystal will be needed from the Woodland Mansion. To prepare, he leads them to a nearby village and shows them how to craft. However, piglins launch a raid on the village. Steve, Garrett, and Henry narrowly escape, but Natalie and Dawn are separated and discover Dennis. Malgosha responds by sending out the Great Hog.

When Steve mentions that he has a large hoard of diamonds, Garrett becomes interested and demands access as an added condition of handing over the Orb. They find the hoard, but Henry is angered by the detour and worries about Natalie's safety. When the Great Hog arrives, they flee using minecarts and the Hog is blown up by creepers. Arriving at the mansion, Steve and Garrett attempt to distract the inhabitant pillagers while Henry acquires both the Earth Crystal and an Ender Pearl, which can facilitate one teleport. Malgosha returns and blows up the bridge to the mansion. Steve and Henry lose the Orb but escape as Garrett seemingly sacrifices himself in the blast. The two awaken with Dawn, Natalie, and Dennis in a mushroom house they built.

Malgosha uses the Orb to superpower the Nether portal, blotting out the sun and declaring war on the Overworld. The party crafts an arsenal of weapons and an army of iron golems that meet the invading force. Henry throws the Ender Pearl to teleport to the Crystal. Seizing it restores the sunlight, causing the piglins to zombify and die. Defeated, Malgosha unsuccessfully attempts to attack Steve before he leaves her to die as well. Henry is rescued by Garrett, who had previously survived by riding a flying ghast. The party returns to Chuglass, where they create the successful video game Block City Battle Buddies. Dawn opens her zoo with Dennis as an attraction, Natalie begins teaching self-defense classes, Henry completes his jetpack, and Steve and Garrett operate the game store.</p>

                    </article>
                </div>
                <aside className="w-1/3">
                
                </aside>
            </div>
        </article>
        
    )
}

export default AboutView