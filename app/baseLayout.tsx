'use client'
import { useState } from 'react'
import { Kanit } from 'next/font/google'
import ContactFormModal from './contactFormModal.jsx'
import Link from 'next/link'
import MobileNav from './MobileNav.tsx'

const kanit = Kanit({
    weight: '400',
    subsets: ['latin'],
})

export default function BaseLayout({
	children, 
    page
}: {
	children: React.ReactNode,
    page: string
}) {
	const [modalOpenState, setModalOpenState] = useState(false)
    const [navOpenState, setNavOpenState] = useState(false)
    return (       
		<>
	        <ContactFormModal 
    	        modalOpenStateHook={[modalOpenState, setModalOpenState]}
 	        />
            <MobileNav
                navState={[navOpenState, setNavOpenState]}
            />
                <main className="flex min-h-screen flex-col items-center min-w-full" style={{backgroundColor:"#edeaea"}}>
                    <div className="lg:w-9/12 flex flex-col items-center">
                        <div className="lg:min-h-screen w-full flex flex-col items-center">
                            <nav className="min-w-full text-zinc-700 md:absolute mt-3 md:mt-0 h-8 lg:h-16 flex items-center hidden md:block">
                                <div className="w-full flex justify-center">
                                    <div className="flex flex-row justify-between text-xl md:text-3xl w-11/12">
                                        <div className={`text-2xl md:text-6xl ${kanit.className}`}>omar.<span className={`${page != 'about' ? 'text-green-400' : ''}`}>earth</span></div>
                                        <div className="md:flex flex-row gap-x-4 md:text-2xl lg:text-3xl text-xl justify-center h-full items-center hidden bg-[url('/menubg.png')] text-white p-4">
                                            <Link href="/" className={`${page == 'home' ? 'text-green-300' : ''}`}>Home</Link>
                                            <Link href="/blog" className={`${page == 'blog' ? 'text-green-300' : ''}`}>Blog</Link>
                                            <Link href="/about"className={`${page == 'about' ? 'text-green-300' : ''}`}>About</Link>
											<button onClick={() => setModalOpenState(true)}>Contact</button>
                                        </div>
                                    </div>
                                </div>
                            </nav>
                            <div className={`overflow-x-hidden md:mt-20 w-full ${navOpenState ? 'hidden' : ''}`}>
                                {children}
                            </div>
                        </div>
                    </div>

                </main>
		</>
 
    )
}
