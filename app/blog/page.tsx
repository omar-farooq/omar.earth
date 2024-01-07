import Link from 'next/link'
import { getSortedPostsData } from '../../lib/posts';
import { Crushed } from 'next/font/google';
import BaseLayout from '@/app/baseLayout.tsx'

const crushed = Crushed({
    weight: '400',
    subsets: ['latin'],
})


export default async function BlogList() {
    const allPostsData = await getSortedPostsData()

    return (

        <>
            <BaseLayout page="blog">
                <div className="flex justify-center text-black md:mt-8">
                    <div className="w-11/12">
                        <section className="py-10 bg-stone-100">
                            <h2 className="text-5xl w-full text-center">Blog List</h2>
                            <div className="mx-auto grid max-w-6xl  grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 3xl:grid-cols-4">
                                {allPostsData.map(({ id, date, title, shortDescription, backgroundImage }) => (
                                    <article key={id} className="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 ">
                                        <a href={`/blog/${id}`}>
                                            <div className="relative flex items-end overflow-hidden rounded-xl">
                                                <img src={`${'/blog_images/' + backgroundImage}`} alt="blog image" />
                                            </div>

                                            <div className="mt-1 p-2">
                                                <h2 className="text-slate-700">{title}</h2>
                                                <p className="mt-1 text-sm text-slate-400">{shortDescription}</p>

                                                <div className="mt-3 flex items-end justify-between">
                                                    <p className="text-lg text-blue-500">{date}</p>
                                                </div>
                                            </div>
                                        </a>
                                    </article>
                                ))}
                            </div>
                        </section>
                    </div>
                </div>
            </BaseLayout>
        </>
    );
}

