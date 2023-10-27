"use client";
import { useEffect, useState } from 'react'
import { Bitter } from 'next/font/google'
import { Crushed } from 'next/font/google'
import { Libre_Baskerville } from 'next/font/google'
import { Montserrat } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'

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

export default function BlogPostLayout({ postData, lastTenPosts } : {postData:any, lastTenPosts:any}) {
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
    },[])

    return (                                                                                                                                                       
		<>
			<div 
                className={`w-full h-[calc(55vh)] bg-no-repeat bg-cover bg-center bg-fixed text-white text-center text-6xl items-end justify-center contrast-[.70] ${bask.className} hidden md:flex`} 
                style={{backgroundImage: `url(/blog_images/${postData.backgroundImage})`}}
            >
                <div className={`mb-4 ${scrolledPastHeader ? 'hidden' : ''}`}>{postData.title}</div>
            </div>

            <div className="min-h-screen bg-white flex flex-col items-center text-black">
                <div className="w-11/12">
                    <header>
                        <nav className="bg-white text-3xl">
                            <a href="/">omar.earth</a>
                        </nav>
                        <div className={`bg-white ${crushed.className} text-8xl`}>
                                Blog
                        </div>
                    </header>
                    <main className="flex md:flex-row flex-col">
                        <div className="md:w-3/4 flex justify-center">
                            <div className="w-5/6 flex flex-col items-center text-center">
                                <h2 className={`text-3xl mb-6 ${bitter.className}`}>
                                    {postData.title}
                                </h2>
                                <div className={`w-5/6 flex justify-center text-center prose ${montserrat.className}`}>
                                    <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
                                </div>
                            </div>
                        </div>
                        <div className="md:w-1/4 flex flex-col items-center text-center md:mt-0 mt-10">
                            <h4 className="text-2xl">Recent Posts</h4>
                            <ul>
                                {lastTenPosts.map((x : any) => 
                                    <li key={x.id}>
                                        <Link href={`${x.id}`}>{x.title}</Link>
                                    </li>
                                )}
                            </ul>
                            
                        </div>

                    </main>
                </div>
            </div>



        </>
    )
}
 
