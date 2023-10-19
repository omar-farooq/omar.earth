import { getSortedPostsData } from '../../lib/posts';

export default async function BlogList() {
  const allPostsData = await getSortedPostsData()

  return (

      <>
          <section className="flex flex-col justify-center items-center gap-5">
            <h2 className="text-4xl">Blog List</h2>
            <ul className="">
              {allPostsData.map(({ id, date, title }) => (
                <li className="m-8" key={id}>
                  <a href={`/blog/${id}`}>{title}</a>
                  <br />
                  {date}
                </li>
              ))}
            </ul>
          </section>
      </>
  );
}

