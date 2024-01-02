'use client'
import { useState } from 'react'
import ContactForm from './contactForm.jsx'
import Link from 'next/link'
import MobileNav from './MobileNav.tsx'

export default function BaseLayout({
	children,
}: {
	children: React.ReactNode
}) {
	const [modalOpenState, setModalOpenState] = useState(false)
    const [navOpenState, setNavOpenState] = useState(false)
    return (       
		<>
	        <ContactForm 
    	        modalOpenStateHook={[modalOpenState, setModalOpenState]}
 	        />
            <MobileNav
                navState={[navOpenState, setNavOpenState]}
            />
                <main className="flex min-h-screen flex-col items-center min-w-full" style={{backgroundColor:"#edeaea"}}>
                    <div className="lg:w-9/12 flex flex-col items-center">


                        <div className="lg:min-h-screen w-full flex flex-col items-center">

                            <nav className="min-w-full text-zinc-700 md:absolute mt-3 md:mt-0 h-8 lg:h-16 flex items-center">
                                <div className="w-full flex justify-center">
                                    <div className="flex flex-row justify-between text-xl md:text-3xl w-11/12">
                                        <div className="text-2xl md:text-6xl">omar.earth</div>
                                        <div className="md:flex flex-row gap-x-4 md:text-2xl text-xl justify-center h-full items-center hidden">
                                            <Link href="/">Home</Link>
                                            <Link href="/blog">Blog</Link>
                                            <Link href="/about">About</Link>
											<button onClick={() => setModalOpenState(true)}>Contact</button>
                                        </div>
                                        <div className="md:hidden">
											<button onClick={() => setNavOpenState(true)}>Nav</button>
                                        </div>
                                    </div>
                                </div>
                            </nav>
                            <div className="mt-20 w-full">
                                {children}
                            </div>
                        </div>
                    </div>

                </main>
		</>
 
    )
}
