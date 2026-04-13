'use client';
import { Rubik_Glitch } from 'next/font/google'
import cyborg from '@/public/naturalcyborg.png'
import BaseLayout from '@/app/baseLayout.tsx'
import GithubIcon from '../public/github-icon.png'
import Image from 'next/image'
import Link from 'next/link'

const rubik = Rubik_Glitch({
    weight: '400',
    subsets: ['latin'],
})

export default function Home() {

    return (
        <BaseLayout page="home">
            <div className="flex flex-col md:flex-row">
                <div className={`${rubik.className} text-3xl sm:text-6xl md:text-9xl xl:text-10xl 2xl:text-11xl md:mt-20 text-center md:w-1/3 flex flex-row md:flex-col justify-center md:justify-normal space-x-2`}>
                    <span className="text-black">let&apos;s</span>
                    <span className="text-green-300 animate-tuneIn z-10">rewrite</span>
                    <span className="text-black">history</span>
                </div>
                <div className="z-40">
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

            <div className="flex flex-col items-center text-center py-12 px-6 bg-neutral-100 border-t border-zinc-200">
                <p className="text-zinc-700 text-lg md:text-xl max-w-2xl mb-6">
                    DevOps engineer and developer — writing about AWS, Linux, React, Go, and whatever else I&apos;m figuring out.
                </p>
                <div className="flex gap-4">
                    <Link href="/blog" className="bg-black text-white px-6 py-2 text-sm tracking-wide hover:bg-green-400 hover:text-black transition-colors duration-200">
                        Read the blog
                    </Link>
                    <Link href="/about" className="border border-black text-black px-6 py-2 text-sm tracking-wide hover:bg-black hover:text-white transition-colors duration-200">
                        About me
                    </Link>
                </div>
            </div>

            <footer>
                <div className="flex flex-row items-center justify-center gap-2 p-2 border-t rounded-lg bg-stone-100">
                    <a href="https://github.com/omar-farooq" target="_blank" rel="noopener noreferrer">
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
        </BaseLayout>
    )
}
