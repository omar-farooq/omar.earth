import { Sora } from 'next/font/google'
import Link from 'next/link'

const sora = Sora({
    weight: '400',
    subsets: ['latin'],
})

export default function MobileNav({navState}) {

    const [open, setOpen] = navState
    const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-black transition ease transform duration-300`

    return (
        <>
            <div className="flex flex-row justify-between md:hidden" style={ open ? {backgroundColor:"#ffffff"} : {backgroundColor:"#edeaea"}}>
                <div className={`text-3xl mt-2 ml-4 ${sora.className}`}>omar.earth</div>
                <button
                     className="flex flex-col h-12 w-12 justify-center items-center group mr-4"
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
            <div className={`absolute h-screen w-screen z-50 bg-white ${open ? '' : 'hidden'}`}>
                <div className="flex flex-col items-center justify-center text-2xl h-full">
                    <Link href="/">Home</Link>
                    <Link href="/blog">Blog</Link>
                    <Link href="/about">About</Link>
                </div>
            </div>
        </>
    )
}
