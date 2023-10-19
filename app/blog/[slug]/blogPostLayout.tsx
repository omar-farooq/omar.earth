"use client";
import { useEffect, useState } from 'react'
import { Bitter } from 'next/font/google'
import { Crushed } from 'next/font/google'
import { Libre_Baskerville } from 'next/font/google'
import { Montserrat } from 'next/font/google'
import Image from 'next/image'

const bitter = Bitter({
    weight: '600',
    subsets: ['latin'],
})

const montserrat = Montserrat({
    weight: '400',
    subsets: ['latin'],
})

const crushed = Crushed({
    weight: '400',
    subsets: ['latin'],
})


const bask = Libre_Baskerville({
    weight: '400',
    subsets: ['latin'],
})

export default function BlogPostLayout({ postData }) {
    const [scrolledPastHeader, setScrolledPastHeader] = useState(false)

    useEffect(() => {
        function scrollPastHeader() {
            let currentPosition = window.pageYOffset;
            if (currentPosition > 0) {
                setScrolledPastHeader(true)
            } else {
                setScrolledPastHeader(false)
            }
        }

        window.addEventListener("scroll", scrollPastHeader);
        return () => window.removeEventListener("scroll", scrollPastHeader)
    },[window.pageYOffset])

    return (                                                                                                                                                       
		<>
			<div className={`w-full h-[calc(55vh)] bg-[url('/blog_images/whale.webp')] bg-no-repeat bg-cover bg-center bg-fixed text-white text-center text-6xl flex items-end justify-center ${bask.className}`}>
                <div className={`mb-4 ${scrolledPastHeader ? 'hidden' : ''}`}>{postData.title}</div>
            </div>

            <div className="min-h-screen bg-white flex flex-col items-center">
                <div className="w-11/12">
                    <header>
                        <nav className="bg-white text-3xl">
                            <a href="/">omar.earth</a>
                        </nav>
                        <div className={`bg-white ${crushed.className} text-8xl`}>
                                Blog
                        </div>
                    </header>
                    <main className="">
                        <div className="w-3/4 flex justify-center">
                            <div className="w-5/6 flex flex-col items-center text-center">
                                <h2 className={`text-3xl mb-6 ${bitter.className}`}>
                                    {postData.title}
                                </h2>
                                <div className={`w-5/6 flex justify-center text-center prose ${montserrat.className}`}>
                                    <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
                                </div>
                            </div>
                        </div>
                        <div className="w-1/4 flex justify-center">
                        </div>

                    </main>
                </div>
            </div>



        </>
    )
}
 
