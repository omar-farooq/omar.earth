'use client';
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import bike from '../public/bike.png'
import briefcase from '../public/briefcase.png'
import duffa from '../public/duffa-cropped.png'
import Docker from '../public/docker.webp'
import e from '../public/e.jpg'
import Earth from '../public/earth.jpeg'
import Email from '../public/email.png'
import eye from '../public/eye.png'
import Floppy from '../public/floppy.png'
import Flower from '../public/flower.png'
import GithubIcon from '../public/github-icon.png'
import heart from '../public/heart.png'
import MaleSymbol from '../public/male.png'
import PalmTree from '../public/palmtree.png'
import reel from '../public/reel.png'
import simpsonstv from '../public/simpsonstv.jpg'
import Triforce from '../public/triforce.png'
import Water from '../public/water.png'
import zah from '../public/zah.webp'

const Box = (props) => {
    const [showLetter, setShowLetter] = useState(false)
    const [toggled, setToggled] = useState(false)

    return (
        <>
                <div 
                    onMouseOver={e => setShowLetter(true)} 
                    onMouseLeave={e => setShowLetter(false)}
                    onClick={(e) => setToggled(!toggled)}
                    className={`${props.bgcolor} text-8xl text-center flex justify-center items-center text-red-300`}
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
                    className={`absolute bg-white border-8 ${props.bordercolor} z-9999 animate-spread flex text-center text-2xl items-center justify-center overflow-scroll`}
                    style={props.gridDimensions}
                    onClick={(e) => setToggled(!toggled)}
                >
                    <div className="w-3/4 space-y-8 animate-fadeIn max-h-full">
                        <div className="flex flex-col justfiy-center">
                        {props.overlayText}
                        </div>
                    </div>
                </div>
        }
        </>
    )
}

const Project = (props) => {

    return (
        <>
                <div className="relative group h-[24.5rem] w-[24.5rem] m-4 flex items-center justify-center border-4">
                    <div className="z-50 relative group-hover:scale-50 group-hover:-translate-y-20 ease-in duration-200 h-96 w-96">
                        {props.image}
                    </div> 
                    <div className="z-0 bg-white absolute w-full h-full top-0">
                        <div className="flex flex-col h-full">
                            <div className="h-2/3 flex flex-col items-center justify-center" />
                            <div className="">
                                <h4>{props.title}</h4>
                                <p>{props.text}</p>
                            </div>
                                <button 
                                    className="bg-sky-600 hover:bg-white hover:text-blue-500 w-1/4 text-white border-2 border-sky-600 text-sm ease-in duration-200 p-1 self-center bottom-2 absolute"
                                    onClick={(e) => {e.preventDefault(); window.location.href='/projects/'+props.project}}
                                >
                                    More info
                                </button>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default function Home() {
    const [gridDimensions, setGridDimensions] = useState({width: '', height: ''})
    const projectRef = useRef(null)
    const aboutRef = useRef(null)

    const scrollToProjects = () => projectRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    const scrollToAbout = () => aboutRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })

    useEffect(() => {
        function handleResize() {
            setGridDimensions({width: document.getElementById('letterGrid').offsetWidth, height: document.getElementById('letterGrid').offsetHeight})
        }
        handleResize()

        window.addEventListener("resize", handleResize)
            return () => window.removeEventListener("resize", handleResize)
    },[])

    return (
        <main className="flex min-h-screen flex-col items-center min-w-full">
            <div className="w-9/12 flex flex-col items-center">


                <div className="h-screen w-full flex flex-col items-center">

                    <nav className="min-w-full bg-black h-20 text-white">
                        <div className="flex flex-row gap-x-3 text-4xl justify-center h-full items-center">
                            <div className="border-x-4 border-white h-full flex items-center">Menu</div>
                            <a href="/blog">Blog</a>
                            <button onClick={scrollToProjects}>Projects</button>
                            <button onClick={scrollToAbout}>About</button>
                            <div><a href="mailto:omrrrrrrr@gmail.com">Contact</a></div>
                        </div>
                    </nav>

                    <div className="h-full w-11/12 flex items-center">
                        <div id="letterGrid" className="grid grid-rows-3 grid-cols-4 w-full h-3/4">

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
                                overlayText={<><p>My first personal computer was a 486 with Windows 95.</p><p>Apart from playing games, the most exciting aspect of computers at that time that I remember was word processing and, not long after, going on the internet. Changing the font and text colour in Word was exciting and novel when I was young, not so much now.</p></>} 
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
                                    <><p>Since the early internet, everyone has used the web for cat pictures and conspiracy theories. I will give my personal favourite based on what I've read:</p><p>Several years ago I read in the Telegraph that someone had claimed in an East Asian country that they are able to create clones. They are not legally allowed to create human clones but they can successfully clone peoples pets. They claimed that they've tried human cloning and it's successful. I think someone has clones running around or maybe they're harvesting them for organs or as slaves.</p></>
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
                                            width: "80%"
                                        }}
                                    />
                                }
                                overlayText={
                                    <>
                                        <p>I come from Manchester, UK where it's always sunny and never rains</p>
                                        <p>Mark Twain said "I would like to live in Manchester England, the transition between Manchester and death would be unnoticeable"</p>
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
                                            width: "100%"
                                        }}
                                    />
                                }
                                overlayText={
                                    <>
                                        <p>For a year, my job involved doing a night shift for which I had to sleep during the days and alter my sleeping pattern</p>
                                        <p>How I did this was sleep as soon as I came home. Sometimes I'd want to do something in the evening like go swimming or play ultimate, or something would wake me up, which meant that I'd only get 4 or 5 hours sleep. I would then sleep for a few hours before work to try and catch up on sleep</p>
                                        <p>In terms of eating, my pattern was messed up in that I'd have breakfast when I woke up in the evening, half my dinner before a nap (If I had a nap), the other half after a nap and lunch when I got home from work.</p>
                                        <p>I did have to give it up in the end because I couldn't keep it up for longer than a year</p>
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
                                        <p>Many years ago we were being taught at school that various things were predicted for the future: such as increased storms, droughts and flooding due to a phenomena known as "global warming"</p>
                                        <p>A lot of people laughed this off as an exaggerated dystopian prediction, and people still do but there is a lot of physical evidence as well as all the previous predictions coming true</p>
                                        <p>I ride my bike everywhere and don't own a car. It might seem excessive but I think it's important for everyone to sacrifice something in order to make the world liveable. I don't think that's going to happen judging by history and human nature...</p>
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
                                            width: "80%"
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
                                        <p>I qualified as a Mathematician, although I don't practice it thanks to my jobs in tech.</p>
                                        <p>My favourite subject from studying mathematics was relativity. It was easily the most interesting as you could see its practical applications, but also the mathematical logic behind it was some of the most advanced I've ever seen.</p>
                                        <p>The most interesting piece of math philosophy has to be the idea that the number pi, an infinite number, could contain every single piece of information that has, does and will ever exist. It is thought to contain everything from the world we live in to an alternate world where everything but me exists (I know, tragedy.)</p>
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
                                        alt="what I love"
                                        style={{
                                            width: "80%"
                                        }}
                                    />
                                }
                                overlayText={
                                    <>
                                        <p>A world without war and conflict and separation would be my ideal. Greed would also have to go.</p>
                                        <p>From what I've seen, the people who are in a position to make changes to benefit others have the mindset of 'I had to struggle, so everyone else should' or 'The system works for me so it seems fine'. No one seems to be voting for change either which is strange to me.</p>
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
                                            width: "100%"
                                        }}
                                    />
                                }
                                overlayText={
                                    <>
                                        <p>For me Ocarina of Time is the greatest game ever.</p>
                                        <p>I haven't played many video games since which have come close and playing such a game so young perhaps killed my love of video games since it's hard to find a game that matches upto it and keeps my interest.</p>
                                        <p>I still think the Zelda series is great and love the new games that come out from the series. The switch games in a higher resolution are gorgeous and are how I imagined the N64 games were when playing them, but there's still an element from the older games that's missing.</p>
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
                                            width: "80%",
                                        }}
                                    />
                                }
                                overlayText={
                                    <>
                                        <p>I had the interesting experience of going to various places in France and doing some organic farm work (voluntarily). One thing that I found is that everyone seems to have a different situation regarding the land that they worked on. Some people bought it, some inherited, some rented.</p>
                                        <p>The nicest I did work on was some guy who had worked hard for his land and appreciated doing minimal work.</p>
                                        <p>The worst was someone who was stressed out about working fast and she rented her land.</p>
                                        <p>It made me think about land ownership and how stupid it all really is. We're an exponentially growing population - how can you put a monetary value on something that is finite that is required by everyone? Why not just own property but not the land itself?</p>
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
                                            width: "100%",
                                        }}
                                    />
                                }
                                overlayText={
                                    <>
                                        <p>I try to avoid anything with refined sugar in it. For quite a while I have avoided drinking anything but water. It's become quite apparent that sugar is the cause of a lot of health problems and I've been taught this from a young age</p>
                                        <p>Since I feel that knowing this has really helped me in life, I will try to pass it on as well as saying that fish is really good, avoid eating too much meat, chips are bland without ketchup and mayo and there's a lot of healthy food which is more appetising</p>
                                        <p>A lot of people say that things are ok in moderation but I don't believe in that theory. I think that a lot of the things we consume in 'moderation' is doing damage that takes longer to recover from than moderation allows for (whatever that even means - moderation is quite subjective).</p>
                                        <p>I can eat fruit every day, really enjoy it and not get fat, so why would I resort to eating crisps and chocolate which is nowhere near as refreshing?</p>
                                    </>
                                }
                            />
                        </div>
                    </div>

                </div>

                <div className="border-t-2 border-x-2 border-black w-full">
                    <section className="bg-neutral-200 text-center flex flex-row justify-center items-center">
                        <div className="w-3/5">
                            <div className="text-4xl">
                                The Blog
                            </div>
                            <div className="text-xl mt-4">
                                <p>I've started a new tech blog to help remind myself of my tech journey and to help others who may stumble across it.</p>
                                <p>In my first blog series I dicuss why I remade the website, how I remade it and the challenges involved. I start off with discussing my development environment.</p>
                                <a href="/blog">Click here to check out the blog list</a>
                            </div>
                        </div>
                        <Image
                            src={Docker}
                            alt="Development Tools"
                        />
                    </section>
                    <section className="bg-black text-white">
                        <div className="flex flex-row justify-center items-center">
                            <div className="text-5xl mr-2">save the <span className="text-green-700">.earth</span></div>
                            <Image
                                src={Earth}
                                alt="Planet Earth"
                                style={{
                                    width: "6%",
                                }}
                            />
                            <div className="text-2xl ml-2">New Project coming later</div>
                        </div>
                    </section>
                    <section className="bg-orange-800 text-center" id="projects" ref={projectRef}>
                        <h2 className="text-rose-200 text-4xl p-2">Projects</h2>
                        <div className="flex flex-row flex-wrap items-center justify-center w-full">
                            <Project 
                                title="zah" 
                                project="zah"
                                text="Housing Co-Op website" 
                                image={
                                    <Image 
                                        src={zah} 
                                        style={{
                                            height: "100%",
                                            width: "100%"
                                        }}
                                    />
                                }
                            />
                            <Project 
                                title="Duffa" 
                                text="Ultimate Frisbee Group"
                                project="duffa"
                                image={
                                    <Image 
                                        src={duffa} 
                                        style={{
                                            height: "100%",
                                            width: "100%"
                                        }}
                                    />
                                }
                            />
                            <Project 
                                title="simpsonstv.net" 
                                project="simpsonstv"
                                text="Website I made for the Simpsons when I was younger" 
                                image={
                                    <Image 
                                        src={simpsonstv}
                                        style={{
                                            height: "100%",
                                            width: "100%"
                                        }}
                                    />
                                }
                            />
                        </div>
                    </section>
                    <section className="bg-white border-t-2 border-black text-center flex flex-col items-center justify-center" ref={aboutRef}>
                        <h2 className="text-4xl p-2">
                            About
                        </h2>
                        <div className="text-xl w-2/3 mt-2">
                            <p>My name is Omar and I enjoy developing websites and putting them online.</p>
                            <p>I've re-created my site as a personal tech blog so that I can help keep up-to-date with related tech. I originally made this website a few years ago in the exact same way but with pure html, css, jquery and php. This time I've elected to use a different stack involving nextjs and GoLang. When I made the website previously, I wondered if JQuery would become obsolete eventually as it was revolutionary for a while, but now it's obsolete in the same way that guestbooks and midi players are on all websites. Perhaps one day soon we'll be completely obsolete as AI takes over :)</p>
                            <p>My personal goals are to watch the world change into one big society that helps each other and to help be a part of that change.</p>
                        </div>
                    </section>
                    <footer>
                        <div className="bg-stone-100 flex flex-row items-center justify-center gap-2 p-2">
                            <a href="https://github.com/omar-farooq" target="_blank">
                            <Image 
                                src={GithubIcon}
                                style={{
                                    height: "80px",
                                    width: "80px"
                                }}
                            />
                            </a>

                            <a href="mailto:omrrrrrrr@gmail.com">
                            <Image 
                                src={Email}
                                style={{
                                    height: "80px",
                                    width: "80px"
                                }}
                            />
                            </a>
                        </div>
                    </footer>
                </div>

            </div>
        </main>
    )
}
