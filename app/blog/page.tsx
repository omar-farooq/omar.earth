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
            <BaseLayout>
            <div className="flex justify-center text-black">
                <div className="w-11/12">
                    <header>
                        <div className={`${crushed.className} text-8xl`}>
                            Blog List
                        </div>
                    </header>
                    <section className="flex flex-col justify-center items-center gap-5">
                        <ul className="">
                            {allPostsData.map(({ id, date, title }) => (
                                <li className="m-8" key={id}>
                                  {date}
                                  <br />
                                  <Link href={`/blog/${id}`} className="text-2xl">{title}</Link>
                                </li>
                            ))}
                        </ul>
                    </section>
                </div>
            </div>
            </BaseLayout>
        </>
    );
}

