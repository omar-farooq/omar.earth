'use client';
import { useEffect, useState } from 'react'
import BaseLayout from '@/app/baseLayout.tsx'
import Image from 'next/image'
import bike from '@/public/bike.png'
import briefcase from '@/public/briefcase.png'
import e from '@/public/e.jpg'
import eye from '@/public/eye.png'
import Floppy from '@/public/floppy.png'
import Flower from '@/public/flower.png'
import heart from '@/public/heart.png'
import MaleSymbol from '@/public/male.png'
import PalmTree from '@/public/palmtree.png'
import reel from '@/public/reel.png'
import Triforce from '@/public/triforce.png'
import Water from '@/public/water.png'


const Box = (props) => {
    const [showLetter, setShowLetter] = useState(false)
    const [toggled, setToggled] = useState(false)

    return (
        <>
                <div 
                    onMouseOver={e => setShowLetter(true)} 
                    onMouseLeave={e => setShowLetter(false)}
                    onClick={(e) => setToggled(!toggled)}
                    className={`${props.bgcolor} text-4xl md:text-8xl text-center flex justify-center items-center text-red-300 cursor-pointer`}
                    style={{minHeight: '140px'}}
                >
                    <div className="flex justify-center max-h-full">
                        {
                            showLetter ? props.letter : props.image 
                        }
                    </div>
                </div>
        {
            toggled &&
                <div 
                    className={`absolute bg-white border-8 ${props.bordercolor} z-9999 animate-spread flex text-center text-lg md:text-2xl items-center justify-center overflow-scroll cursor-pointer`}
                    style={props.gridDimensions}
                    onClick={(e) => setToggled(!toggled)}
                >
                    <div className="w-3/4 space-y-8 animate-fadeIn max-h-full">
                        <div className="flex flex-col justfiy-center text-black">
                        {props.overlayText}
                        </div>
                    </div>
                </div>
        }
        </>
    )
}


export default function About() {
    const [gridDimensions, setGridDimensions] = useState({width: '', height: ''})

    useEffect(() => {
        function handleResize() {
            setGridDimensions({width: document.getElementById('letterGrid').offsetWidth, height: document.getElementById('letterGrid').offsetHeight})
        }
        handleResize()

        window.addEventListener("resize", handleResize)
            return () => window.removeEventListener("resize", handleResize)
    },[])

	return (
		<BaseLayout page="about">
                    <section className="text-center flex flex-col items-center justify-center text-black min-h-screen -mt-8 rotate-90 sm:rotate-0">
                        <div className="h-full w-full flex items-center py-4 md:py-10 lg:py-0 bg-inherit">
                            <div id="letterGrid" className="grid grid-rows-3 grid-cols-4 w-full md:h-3/4">

                                <Box 
                                    letter="O" 
                                    bgcolor="bg-red-300" 
                                    bordercolor="border-red-300" 
                                    gridDimensions={gridDimensions} 
                                    image={
                                        <Image 
                                            src={Floppy} 
                                            alt="First computer"
                                            style= {{
                                                width: "60%"
                                            }}
                                        />
                                    } 
                                    overlayText={
                                        <>
                                            <p>My first personal computer was a 486 with Windows 95.</p>
                                            <p>Apart from playing games, the most exciting aspect of computers at that time that I remember was word processing and, not long after, going on the internet. Changing the font and text colour in Word was exciting and novel when I was young, not so much now.</p>
                                        </>
                                    } 
                                />

                                <Box 
                                    letter="R" 
                                    bgcolor="bg-orange-300" 
                                    bordercolor="border-orange-300" 
                                    gridDimensions={gridDimensions} 
                                    image={
                                        <Image 
                                            src={eye} 
                                            alt="conspiracies"
                                            style= {{
                                                width: "80%"
                                            }}
                                        />
                                    } 
                                    overlayText={
                                        <><p>Since the early internet, everyone has used the web for cat pictures and conspiracy theories. I will give my personal favourite based on what I&apos;ve read:</p><p>Several years ago I read in the Telegraph that someone had claimed in an East Asian country that they are able to create clones. They are not legally allowed to create human clones but they can successfully clone peoples pets. They claimed that they&apos;ve tried human cloning and it&apos;s successful. I think someone has clones running around or maybe they&apos;re harvesting them for organs or as slaves.</p></>
                                    } 
                                />

                                <Box 
                                    letter="E" 
                                    bgcolor="bg-amber-200" 
                                    bordercolor="border-amber-200" 
                                    gridDimensions={gridDimensions} 
                                    image={
                                        <Image
                                            src={PalmTree}
                                            alt="where I'm from"
                                            style={{
                                                width: "60%"
                                            }}
                                        />
                                    }
                                    overlayText={
                                        <>
                                            <p>I come from Manchester, UK where it&apos;s always rainy</p>
                                        </>
                                    }
                                />
                                <Box 
                                    letter="V" 
                                    bgcolor="bg-lime-300" 
                                    bordercolor="border-lime-300" 
                                    gridDimensions={gridDimensions} 
                                    image={
                                        <Image
                                            src={briefcase}
                                            alt="night shift"
                                            style={{
                                                width: "50%"
                                            }}
                                        />
                                    }
                                    overlayText={
                                        <>
                                            <p>My current job title is &quot;DevOps engineer&quot; but I enjoy working with software and all aspects of development.</p>
                                        </>
                                    }
                                />
                                <Box 
                                    bgcolor="bg-green-300" 
                                    bordercolor="border-green-300" 
                                    letter="O" 
                                    gridDimensions={gridDimensions} 
                                    image={
                                        <Image
                                            src={bike}
                                            alt="biking"
                                            style={{
                                                width: "80%"
                                            }}
                                        />
                                    }
                                    overlayText={
                                        <>
                                            <p>My main mode of transportation is my bike and has been for most of my working life. I had a job where I took the bus for a year, but otherwise I enjoy the fresh air and exercise of a bike.</p>
                                        </>
                                    }
                                />
                                <Box 
                                    letter="L" 
                                    bgcolor="bg-white" 
                                    bordercolor="border-black" 
                                    gridDimensions={gridDimensions} 
                                    image={
                                        <Image
                                            src={reel}
                                            alt="Greatest Films"
                                            style={{
                                                width: "60%"
                                            }}
                                        />
                                    }
                                    overlayText={
                                        <div>Greatest films of all time in my opinion:
                                            <ul>
                                                <li>The Godfather</li>
                                                <li>The Matrix</li>
                                                <li>Titanic</li>
                                            </ul>
                                        </div>
                                    }
                                />
                                <Box 
                                    letter="U" 
                                    bgcolor="bg-teal-200" 
                                    bordercolor="border-teal-200" 
                                    gridDimensions={gridDimensions} 
                                    image={
                                        <Image
                                            src={MaleSymbol}
                                            alt="I am male"
                                            style={{
                                                width: "50%"
                                            }}
                                        />
                                    }
                                    overlayText={
                                        <>
                                            <p>My pronouns are he/him</p>
                                            <p>When I started on a helpdesk I had to shadow people and listen into conversations. One day I was shadowing a woman and another woman was on the other end of the line discussing how men are pigs. It was amusing but awkward for the person I was shadowing.</p>
                                        </>
                                    }
                                />
                                <Box 
                                    letter="T" 
                                    bgcolor="bg-blue-500" 
                                    bordercolor="border-blue-500" 
                                    gridDimensions={gridDimensions} 
                                    image={
                                        <Image
                                            src={e}
                                            alt="Mathematics and pi"
                                            style={{
                                                width: "80%"
                                            }}
                                        />
                                    }
                                    overlayText={
                                        <>
                                            <p>I qualified as a Mathematician, although I don&apos;t practice it thanks to my jobs in tech.</p>
                                            <p>My favourite subject from studying mathematics was relativity. It was easily the most interesting as you could see its practical applications, but also the mathematical logic behind it was some of the most advanced I&apos;ve ever seen.</p>
                                            <p>The most interesting piece of math philosophy has to be the idea that the number pi, an infinite number, could contain every single piece of information that has, does and will ever exist. It is thought to contain everything from the world we live in to an alternate world where everything but me exists</p>
                                            <p>I guess the most interesting thing would be if I could search it and find out what a world without me would be like. What would be impossible is to try and find out the future since there are probably versions of my life within it where I died yesterday, last week etc.</p>
                                        </>
                                    }
                                />
                                <Box 
                                    letter="I" 
                                    bgcolor="bg-cyan-300" 
                                    bordercolor="border-cyan-300" 
                                    gridDimensions={gridDimensions} 
                                    image={
                                        <Image
                                            src={heart}
                                            alt="economy"
                                            style={{
                                                width: "50%"
                                            }}
                                        />
                                    }
                                    overlayText={
                                        <>
                                            <p>I created this site using FOSS and it has influenced my views on how important socialism is and how it would benefit us to fully adopt it.</p>
                                        </>
                                    }
                                />
                                <Box 
                                    letter="O" 
                                    bgcolor="bg-amber-300" 
                                    bordercolor="border-amber-300" 
                                    gridDimensions={gridDimensions} 
                                    image={
                                        <Image
                                            src={Triforce}
                                            alt="Best game of all time"
                                            style={{
                                                width: "50%"
                                            }}
                                        />
                                    }
                                    overlayText={
                                        <>
                                            <p>For me Ocarina of Time is the greatest game ever.</p>
                                            <p>I haven&apos;t played many video games since which have come close and playing such a game so young perhaps killed my love of video games since it&apos;s hard to find a game that matches upto it and keeps my interest.</p>
                                            <p>I still think the Zelda series is great and love the new games that come out from the series.</p>
                                        </>
                                    }
                                />
                                <Box 
                                    letter="N" 
                                    bgcolor="bg-purple-300" 
                                    bordercolor="border-purple-300" 
                                    gridDimensions={gridDimensions} 
                                    image={
                                        <Image
                                            src={Flower}
                                            alt="Going back to nature"
                                            style={{
                                                width: "70%",
                                            }}
                                        />
                                    }
                                    overlayText={
                                        <>
                                            <p>I had the interesting experience of going to various places in France and doing some organic farm work (voluntarily). One thing that I found is that everyone seems to have a different situation regarding the land that they worked on. Some people bought it, some inherited, some rented.</p>
                                            <p>The nicest I did work on was some guy who had worked hard for his land and appreciated doing minimal work.</p>
                                            <p>The worst was someone who was stressed out about working fast and she rented her land.</p>
                                            <p>It made me think about land ownership and how stupid it all really is. We&apos;re an exponentially growing population - how can you put a monetary value on something that is finite that is required by everyone? Why not just own property but not the land itself?</p>
                                        </>
                                    }
                                />
                                <Box 
                                    letter="" 
                                    bgcolor="bg-rose-300" 
                                    bordercolor="border-rose-300" 
                                    gridDimensions={gridDimensions} 
                                    image={
                                        <Image
                                            src={Water}
                                            alt="Eating Healthy"
                                            style={{
                                                width: "70%",
                                            }}
                                        />
                                    }
                                    overlayText={
                                        <>
                                            <p>I try to avoid anything with refined sugar in it and cut down from when I was 16. If you ever meet me and offer me something sweet and I decline then I do apologise.</p> 
                                            <p>I feel people are starting to understand my position a bit more, particularly when they are a bit older and are starting to be more mindful of the effects of bad food on their own health.</p>
                                        </>
                                    }
                                />
                            </div>
                        </div>
                    </section>
                    <section className="bg-stone-100 border-black text-center flex flex-col items-center justify-center text-black mb-12">
                        <h2 className="text-2xl md:text-4xl p-2">
                            About the site
                        </h2>
                        <div className="text-sm md:text-lg lg:text-xl w-4/5 mt-2">
                            <p>At the time of writing we need to change the world we live in - and what better way to do that than using technology!</p>

                            <p>I&apos;ve re-created my site as a personal tech blog so that I can help keep up-to-date with related tech. I&apos;m using AWS for hosting this site.</p> 

                            <p>I&apos;ve gone for a dot earth domain to try and promote a more environmentally friendly lifestyle (as well as the fact that I am from Earth). For more about me click on the boxes above.</p>
                        </div>
                    </section>

		</BaseLayout>
	)
}
