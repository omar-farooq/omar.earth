'use client';
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import bike from '../public/bike.png'
import briefcase from '../public/briefcase.png'
import duffa from '../public/duffa-cropped.png'
import e from '../public/e.jpg'
import Email from '../public/email.png'
import eye from '../public/eye.png'
import GithubIcon from '../public/github-icon.png'
import heart from '../public/heart.png'
import reel from '../public/reel.png'
import simpsonstv from '../public/simpsonstv.jpg'
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
                    <div className="flex justify-center">
                        {
                            showLetter ? props.letter : props.image 
                        }
                    </div>
                </div>
        {
            toggled &&
                <div 
                    className={`absolute bg-white border-8 ${props.bordercolor} z-9999 animate-spread flex text-center text-2xl items-center justify-center`}
                    style={props.gridDimensions}
                    onClick={(e) => setToggled(!toggled)}
                >
                    <div className="w-3/4 space-y-8 animate-fadeIn">{props.overlayText}</div>
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
                            <div>Contact</div>
                        </div>
                    </nav>

                    <div className="h-full w-11/12 flex items-center">
                        <div id="letterGrid" className="grid grid-rows-3 grid-cols-4 w-full h-3/4">

                            <Box 
                                letter="O" 
                                bgcolor="bg-red-300" 
                                bordercolor="border-red-300" 
                                gridDimensions={gridDimensions} 
                                image="" 
                                overlayText={<><p>This is a remake of my website</p></>} 
                            />

                            <Box 
                                letter="M" 
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
                                    <><p>Since the early internet, everyone has used the web for cat pictures and conspiracy theories. I will give my personal favourite based on what I've read:</p><p>A couple of years ago I read that someone had claimed in an East Asian country that they are able to create clones. They are not legally allowed to create human clones but they can successfully clone peoples pets. They claimed that they've tried human cloning and it's successful (I read this in the Telegraph so it's a real claim). I think someone has clones running around or maybe they're harvesting them for organs or as slaves.</p></>
                                } 
                            />

                            <Box bgcolor="bg-amber-200" bordercolor="border-amber-200" letter="A" gridDimensions={gridDimensions} image="" overlayText="" />
                            <Box 
                                letter="R" 
                                bgcolor="bg-lime-300" 
                                bordercolor="border-lime-300" 
                                gridDimensions={gridDimensions} 
                                image={
                                    <Image
                                        src={briefcase}
                                        alt="night shift"
                                        style={{
                                            width: "80%"
                                        }}
                                    />
                                }
                                overlayText="" 
                            />
                            <Box 
                                bgcolor="bg-green-300" 
                                bordercolor="border-green-300" 
                                letter="D" 
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
                                overlayText="" 
                            />
                            <Box 
                                letter="O" 
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
                            <Box bgcolor="bg-teal-200" bordercolor="border-teal-200" letter="T" gridDimensions={gridDimensions} image="" overlayText="" />
                            <Box 
                                bgcolor="bg-blue-500" 
                                bordercolor="border-blue-500" 
                                letter="E" 
                                gridDimensions={gridDimensions} 
                                image={
                                    <Image
                                        src={e}
                                        alt=""
                                        style={{
                                            width: "80%"
                                        }}
                                    />
                                }
                                overlayText="" 
                            />
                            <Box 
                                letter="A" 
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
                                overlayText="" 
                            />
                            <Box 
                                letter="R" 
                                bgcolor="bg-amber-300" 
                                bordercolor="border-amber-300" 
                                gridDimensions={gridDimensions} 
                                image="" 
                                overlayText="" 
                            />
                            <Box 
                                letter="T" 
                                bgcolor="bg-purple-300" 
                                bordercolor="border-purple-300" 
                                gridDimensions={gridDimensions} 
                                image="" 
                                overlayText="" 
                            />
                            <Box 
                                letter="H" 
                                bgcolor="bg-rose-300" 
                                bordercolor="border-rose-300" 
                                gridDimensions={gridDimensions} 
                                image="" 
                                overlayText="" 
                            />
                        </div>
                    </div>
                        <div className="z-10 absolute w-9/12 h-[calc(100%-87px)] mt-20 flex items-center justify-center hidden">
                            <div className="w-11/12 h-3/4 bg-white border-8 border-black">
                                this is here
                            </div>
                        </div>

                </div>

                <div className="border-t-2 border-x-2 border-black w-full">
                    <section className="bg-neutral-200 text-center flex flex-row">
                        <div className="w-3/5">
                            <div className="text-4xl">
                                The Blog
                            </div>
                            <div className="text-xl mt-4">
                                In my latest blog I dicuss why I remade the website, how I remade it and the challenges involved
                            </div>
                        </div>
                        <div>image here</div>
                    </section>
                    <section className="bg-black text-white">
                        save the .earth
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
                            <br />
                            <p>I've re-created my site as a personal tech blog so that I can help keep up-to-date with related tech. I originally made this website a few years ago in the exact same way but with pure html, css, jquery and php. This time I've elected to use a different stack involving nextjs and GoLang. When I made the website previously, I wondered if JQuery would become obsolete eventually as it was revolutionary for a while, but now it's obsolete in the same way that guestbooks and midi players are on all websites. Perhaps one day soon we'll be completely obsolete as AI takes over :)</p>
                            <br />
                            <p>My personal goals are to watch the world change into one big society that helps each other and to help be a part of that change.</p>
                        </div>
                    </section>
                    <footer>
                        <div className="bg-stone-100 flex flex-row items-center justify-center gap-2 p-2">
                            <Image 
                                src={GithubIcon}
                                style={{
                                    height: "80px",
                                    width: "80px"
                                }}
                            />
                            <Image 
                                src={Email}
                                style={{
                                    height: "80px",
                                    width: "80px"
                                }}
                            />
                        </div>
                    </footer>
                </div>

            </div>
        </main>
    )
}
