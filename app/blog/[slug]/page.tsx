import { getAllPostIds, getPostData } from '../../../lib/posts';
import BlogPostLayout from './blogPostLayout';

async function getPost(params) {
    const post = await getPostData(params.slug)
    return post
}

export default async function BlogPost({ params }) {
    const postData = await getPost(params)

    return <BlogPostLayout postData={postData} />
}
