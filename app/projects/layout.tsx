"use client";
import { useState} from 'react'
import { Crushed } from 'next/font/google'
import HamburgerNav from '@/app/HamburgerNav.tsx'

const crushed = Crushed({
    weight: '400',
    subsets: ['latin'],
})

export default function ProjectLayout({ children }) {
    const [navOpenState, setNavOpenState] = useState(false)

    return (
        <>
            <div className="min-h-screen bg-white flex justify-center text-black">
                <div className={`${navOpenState ? "w-full max-h-screen" : "md:w-11/12"}`}> 
                    <header>
                        <HamburgerNav
                            navState={[navOpenState, setNavOpenState]}
                            mobileOnly={false}
                        />
                        <div className={`bg-white ${crushed.className} text-8xl ml-4`}>
                            Projects
                        </div>
                    </header>
                    <main className="">
                        <div className="flex flex-col md:flex-row mt-10">
                            {children}
                        </div>
                    </main>
                </div>
            </div>
        </>
    )
}
