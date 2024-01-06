import { useState } from 'react'
import { Sora } from 'next/font/google'
import ContactFormModal from './contactFormModal.jsx'
import Link from 'next/link'

const sora = Sora({
    weight: '400',
    subsets: ['latin'],
})

export default function HamburgerNav({navState, mobileOnly=true}) {

    const [open, setOpen] = navState
    const [modalOpenState, setModalOpenState] = useState(false)
    const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-black transition ease transform duration-300`

    return (
        <>
            <ContactFormModal
                modalOpenStateHook={[modalOpenState, setModalOpenState]}
            />
            <nav className={`${mobileOnly && 'md:hidden'} ${open && 'bg-white top-0 absolute z-50 w-full'}`}>
                <div className="flex flex-row justify-between w-full px-4">
                    <div className={`text-3xl mt-2 ${sora.className}`}>omar.earth</div>
                    <button
                         className={`flex flex-col h-12 w-12 justify-center items-center group`}
                         onClick={() => setOpen(!open)}
                    >
                      <div
                        className={`${genericHamburgerLine} ${
                          open
                            ? "rotate-45 translate-y-3 opacity-50 group-hover:opacity-100"
                            : "opacity-50 group-hover:opacity-100"
                        }`}
                      />
                      <div
                        className={`${genericHamburgerLine} ${
                          open ? "opacity-0" : "opacity-50 group-hover:opacity-100"
                        }`}
                      />
                      <div
                        className={`${genericHamburgerLine} ${
                          open
                            ? "-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100"
                            : "opacity-50 group-hover:opacity-100"
                        }`}
                      />
                    </button>
                </div>
            </nav>
            <div className={`absolute h-screen w-screen z-40 bg-white ${open ? 'top-0 left-0 overflow-y-hidden' : 'hidden'}`}>
                <div className="flex flex-col items-center justify-center text-2xl h-full">
                    <Link href="/">Home</Link>
                    <Link href="/blog">Blog</Link>
                    <Link href="/about">About</Link>
                    <button onClick={() => {setModalOpenState(true); setOpen(false)}}>Contact</button>
                </div>
            </div>
        </>
    )
}
