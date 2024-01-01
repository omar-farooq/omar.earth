import BaseLayout from '@/src/baseLayout.tsx'
import Image from 'next/image'
import Link from 'next/link'
import duffa from '@/public/duffa-cropped.png'
import simpsonstv from '@/public/simpsonstv.jpg'
import zah from '@/public/zah.webp'
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

export default function ProjectList() {
    return (
        <>
            <section className="bg-neutral-100 text-center" id="projects">
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
        </>
    )
}
