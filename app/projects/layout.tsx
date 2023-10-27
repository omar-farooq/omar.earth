import { Crushed } from 'next/font/google'

const crushed = Crushed({
    weight: '400',
    subsets: ['latin'],
})

export default function ProjectLayout({ children }) {
    return (
        <>
            <div className="min-h-screen bg-white flex justify-center text-black">
                <div className="w-11/12">
                    <header>
                        <nav className="bg-white text-3xl">
                            <a href="/">omar.earth</a>
                        </nav>
                        <div className={`bg-white ${crushed.className} text-8xl`}>
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
