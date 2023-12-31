'use client';
import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import bike from '../public/bike.png'
import briefcase from '../public/briefcase.png'
import ContactForm from './contactForm.jsx'
import cyborg from '../public/naturalcyborg.png'
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

const Project = (props) => {

    return (
        <>
                <div className="relative group h-[24.5rem] w-[24.5rem] m-4 flex items-center justify-center border-4 border-zinc-100">
                    <div className="z-50 relative group-hover:scale-50 group-hover:-translate-y-20 ease-in duration-200 h-96 w-96">
                        {props.image}
                    </div> 
                    <div className="z-0 bg-white absolute w-full h-full top-0">
                        <div className="flex flex-col h-full">
                            <div className="h-2/3 flex flex-col items-center justify-center" />
                            <div className="text-black">
                                <h4>{props.title}</h4>
                                <p>{props.text}</p>
                            </div>
                                <Link
                                    className="bg-sky-600 hover:bg-white hover:text-blue-500 w-1/4 text-white border-2 border-sky-600 text-sm ease-in duration-200 p-1 self-center bottom-2 absolute"
                                    href={`/projects/${props.project}`}
                                >
                                    More info
                                </Link>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default function Home() {
    const [modalOpenState, setModalOpenState] = useState(false)
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
    <>

       <ContactForm 
           modalOpenStateHook={[modalOpenState, setModalOpenState]}
       />
        <main className="flex min-h-screen flex-col items-center min-w-full" style={{backgroundColor:"#edeaea"}}>
            <div className="lg:w-9/12 flex flex-col items-center">


                <div className="lg:h-screen w-full flex flex-col items-center bg-white md:bg-inherit">

                    <nav className="min-w-full text-zinc-700 md:absolute mt-3 md:mt-0 h-8 lg:h-16 flex items-center">
                        <div className="w-full flex justify-center">
                            <div className="flex flex-row justify-center lg:justify-between text-xl md:text-3xl w-11/12">
                                <div className="hidden lg:block text-6xl">omar.</div>
                                <div className="flex flex-row gap-x-4 md:text-2xl text-xl justify-center h-full items-center">
                                    <Link href="/blog">Blog</Link>
                                    <button onClick={scrollToProjects}>Projects</button>
                                    <button onClick={scrollToAbout}>About</button>
                                    <button onClick={() => setModalOpenState(true)}>Contact</button>
                                </div>
                            </div>
                        </div>
                    </nav>

                    <div className="mt-16 flex flex-row">
                        <div className="text-6xl mt-20">
                            let&apos;s rewrite history
                        </div>
                        <div>
                            <Image
                                src={cyborg}
                                alt="Representation of man with nature and machine"
                                style={{
                                    height: "100%",
                                    width: "100%"
                                }}
                            />
                        </div>
                    </div>

                </div>

                <div className="w-full">
                    <section className="bg-neutral-100 text-center mb-16" id="projects" ref={projectRef}>
                        <h2 className="text-black text-4xl p-2">Projects</h2>
                        <div className="flex flex-row flex-wrap items-center justify-center w-full">
                            <Project 
                                title="zah" 
                                project="zah"
                                text="Housing Co-Op website" 
                                image={
                                    <Image 
                                        src={zah} 
                                        alt="Screenshot of a project for a housing co-op"
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
                                        alt="Screenshot of a website for an ultimate frisbee group"
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
                                        alt="Screenshot of a Simpsons website I made"
                                        style={{
                                            height: "100%",
                                            width: "100%"
                                        }}
                                    />
                                }
                            />
                        </div>
                    </section>
                    <section className="bg-neutral-100 border-black text-center flex flex-col items-center justify-center text-black" ref={aboutRef}>
                        <h2 className="text-2xl md:text-4xl p-2">
                            About the site
                        </h2>
                        <div className="text-sm md:text-lg lg:text-xl w-4/5 mt-2">
                            <p>At the time of writing we need to change the world we live in - and what better way to do that than using technology!</p>

                            <p>We face a lot of adversity, but this also comes with a lot of opportunity to recreate the world with a lot of the advancements we already have in place.</p>

                            <p>The projects I have in place relate to making the world a better, happier and healthier place. Future projects I have will focus on improving the world we live in and with a grander scale and I hope to work with other talented people to make it happen.</p>

                            <p>I&apos;ve re-created my site as a personal tech blog so that I can help keep up-to-date with related tech. I'm using AWS for hosting this site.</p> 

                            <p>I&apos;ve gone for a dot earth domain to try and promote a more environmentally friendly lifestyle, although I do not wish to guilt anyone into following this. Some small changes that people can make are to eat less meat if you consume a lot and to be aware of how and how much you travel.</p>
                        </div>
                    </section>
                    <section className="text-center flex flex-col items-center justify-center text-black mb-6 min-h-screen">
                        <h2 className="text-2xl md:text-4xl p-2 mb-3">
                            About Me
                        </h2>
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
                                            <p>I come from Manchester, UK where it&apos;s always sunny and never rains</p>
                                            <p>Mark Twain said &quot;I would like to live in Manchester England, the transition between Manchester and death would be unnoticeable&quot;</p>
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
                                            <p>For a year, my job involved doing a night shift for which I had to sleep during the days and alter my sleeping pattern</p>
                                            <p>How I did this was sleep as soon as I came home. Sometimes I&apos;d want to do something in the evening like go swimming or play ultimate, or something would wake me up, which meant that I&apos;d only get 4 or 5 hours sleep. I would then sleep for a few hours before work to try and catch up on sleep</p>
                                            <p>In terms of eating, my pattern was messed up in that I&apos;d have breakfast when I woke up in the evening, half my dinner before a nap (If I had a nap), the other half after a nap and lunch when I got home from work.</p>
                                            <p>I did have to give it up in the end because I couldn&apos;t keep it up for longer than a year</p>
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
                                            <p>Many years ago we were being taught at school that various things were predicted for the future: such as increased storms, droughts and flooding due to a phenomena known as &quot;global warming&quot;</p>
                                            <p>A lot of people laughed this off as an exaggerated dystopian prediction, and people still do but there is a lot of physical evidence as well as all the previous predictions coming true</p>
                                            <p>I ride my bike everywhere and don&apos;t own a car. It might seem excessive but I think it&apos;s important for everyone to sacrifice something in order to make the world liveable. I don&apos;t think that&apos;s going to happen judging by history and human nature...</p>
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
                                                width: "50%"
                                            }}
                                        />
                                    }
                                    overlayText={
                                        <>
                                            <p>A world without war and conflict and separation would be my ideal. Greed would also have to go.</p>
                                            <p>From what I&apos;ve seen, the people who are in a position to make changes to benefit others have the mindset of &apos;I had to struggle, so everyone else should&apos; or &apos;The system works for me so it seems fine&apos;. No one seems to be voting for change either which is strange to me.</p>
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
                                            <p>I still think the Zelda series is great and love the new games that come out from the series. The switch games in a higher resolution are gorgeous and are how I imagined the N64 games were when playing them, but there&apos;s still an element from the older games that&apos;s missing.</p>
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
                                            <p>I try to avoid anything with refined sugar in it. For quite a while I have avoided drinking anything but water. It&apos;s become quite apparent that sugar is the cause of a lot of health problems and I&apos;ve been taught this from a young age</p>
                                            <p>Since I feel that knowing this has really helped me in life, I will try to pass it on as well as saying that fish is really good, avoid eating too much meat, chips are bland without ketchup and mayo and there&apos;s a lot of healthy food which is more appetising</p>
                                            <p>A lot of people say that things are ok in moderation but I don&apos;t believe in that theory. I think that a lot of the things we consume in &lsquo;moderation&rsquo; is doing damage that takes longer to recover from than moderation allows for (whatever that even means - moderation is quite subjective).</p>
                                            <p>I can eat fruit every day, really enjoy it and not get fat, so why would I resort to eating crisps and chocolate which is nowhere near as refreshing?</p>
                                        </>
                                    }
                                />
                            </div>
                        </div>
                    </section>
                    <footer>
                        <div className="bg-stone-100 flex flex-row items-center justify-center gap-2 p-2 border-t rounded-lg">
                            <a href="https://github.com/omar-farooq" target="_blank">
                            <Image 
                                src={GithubIcon}
                                alt="Click to visit my Github page"
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
    </>
    )
}
