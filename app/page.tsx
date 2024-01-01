'use client';
import { Rubik_Glitch } from 'next/font/google'
import cyborg from '@/public/naturalcyborg.png'
import BaseLayout from '@/app/baseLayout.tsx'
import Earth from '../public/earth.jpeg'
import GithubIcon from '../public/github-icon.png'
import Image from 'next/image'
import ProjectList from './projectList.tsx'

const rubik = Rubik_Glitch({
    weight: '400',
    subsets: ['latin'],
})

export default function Home() {

    return (
    <>

            <BaseLayout>

                <div className="flex flex-col md:flex-row">
                    <div className={`${rubik.className} text-4xl md:text-9xl md:mt-20 text-center md:w-1/3`}>
                        let&apos;s <span className="text-green-300">rewrite</span> history
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
                <ProjectList />
                <footer>
                    <div className="flex flex-row items-center justify-center gap-2 p-2 border-t rounded-lg bg-stone-100">
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
            </BaseLayout>



    </>
    )
}
