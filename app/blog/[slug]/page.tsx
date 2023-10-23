import { getAllPostIds, getSortedPostsData, getPostData } from '../../../lib/posts';
import BlogPostLayout from './blogPostLayout';

async function getPost(params) {
    const post = await getPostData(params.slug)
    return post
}

export default async function BlogPost({ params }) {
    const postData = await getPost(params)
    const historic = await getSortedPostsData()
    const lastTenPosts = historic.slice(0,5)

    return <BlogPostLayout postData={postData} lastTenPosts={lastTenPosts} />
}
