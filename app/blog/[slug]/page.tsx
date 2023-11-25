import { getAllPostIds, getSortedPostsData, getPostData } from '../../../lib/posts';
import BlogPostLayout from './blogPostLayout';

async function getPost(params:any) {
    const post = await getPostData(params.slug)
    return post
}

export async function generateStaticParams() {
    const posts = await getAllPostIds()
    return posts.map(post => ({
        slug: post.params.slug
    }))
}

export default async function BlogPost({ params } : {params:any}) {
    const postData = await getPost(params)
    const historic = await getSortedPostsData()
    const lastTenPosts = historic.slice(0,5)

    return <BlogPostLayout postData={postData} lastTenPosts={lastTenPosts} />
}
