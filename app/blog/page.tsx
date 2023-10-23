import { getSortedPostsData } from '../../lib/posts';
import { Crushed } from 'next/font/google';

const crushed = Crushed({
    weight: '400',
    subsets: ['latin'],
})


export default async function BlogList() {
    const allPostsData = await getSortedPostsData()

    return (

        <>
            <div className="min-h-screen bg-white flex justify-center">
                <div className="w-11/12">
                    <header>
                        <nav className="text-3xl">
                            <a href="/">omar.earth</a>
                        </nav>
                        <div className={`bg-white ${crushed.className} text-8xl`}>
                            Blog List
                        </div>
                    </header>
                    <section className="flex flex-col justify-center items-center gap-5">
                        <ul className="">
                            {allPostsData.map(({ id, date, title }) => (
                                <li className="m-8" key={id}>
                                  {date}
                                  <br />
                                  <a href={`/blog/${id}`} className="text-2xl">{title}</a>
                                </li>
                            ))}
                        </ul>
                    </section>
                </div>
            </div>
        </>
    );
}

