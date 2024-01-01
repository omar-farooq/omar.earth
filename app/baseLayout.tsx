'use client'
import { useState } from 'react'
import Link from 'next/link'
import ContactForm from './contactForm.jsx'

export default function BaseLayout({
	children,
}: {
	children: React.ReactNode
}) {
	const [modalOpenState, setModalOpenState] = useState(false)
    return (       
		<>
	        <ContactForm 
    	        modalOpenStateHook={[modalOpenState, setModalOpenState]}
 	        />
                <main className="flex min-h-screen flex-col items-center min-w-full" style={{backgroundColor:"#edeaea"}}>
                    <div className="lg:w-9/12 flex flex-col items-center">


                        <div className="lg:min-h-screen w-full flex flex-col items-center">

                            <nav className="min-w-full text-zinc-700 md:absolute mt-3 md:mt-0 h-8 lg:h-16 flex items-center">
                                <div className="w-full flex justify-center">
                                    <div className="flex flex-row justify-center lg:justify-between text-xl md:text-3xl w-11/12">
                                        <div className="hidden lg:block text-6xl">omar.</div>
                                        <div className="flex flex-row gap-x-4 md:text-2xl text-xl justify-center h-full items-center">
                                            <Link href="/">Home</Link>
                                            <Link href="/blog">Blog</Link>
                                            <Link href="/about">About</Link>
											<button onClick={() => setModalOpenState(true)}>Contact</button>
                                        </div>
                                    </div>
                                </div>
                            </nav>
                            <div className="mt-20">
                                {children}
                            </div>
                        </div>
                    </div>

                </main>
		</>
 
    )
}
