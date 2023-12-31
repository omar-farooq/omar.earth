import { getProjectData, getAllProjects } from '../../../lib/projects';
import { Bitter } from 'next/font/google'
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

export async function generateStaticParams() {
    const projects = await getAllProjects()

    return projects.map(project => ({
        slug: project.params.slug,
    }))
}

export default async function Project({ params }) {
    const projectData = await getProjectData(params.slug)
    return (
        <>
            <div className="md:w-1/2 md:border-r border-black flex justify-center">
                <div className="w-5/6 flex flex-col items-center text-center">
                    <h2 className={`text-3xl mb-6 ${bitter.className}`}>
                        {projectData.title}
                    </h2>
                    <Image
                        src={projectData.image}
                        alt="Screenshot of my project"
                        width="1000"
                        height="1000"
                    />
                </div>
            </div>
            <div className="md:w-1/2 md:border-l border-black flex justify-center">
                <div className={`w-5/6 flex justify-center text-center prose ${montserrat.className}`}>
                    <div dangerouslySetInnerHTML={{ __html: projectData.contentHtml }} />
                </div>
            </div>
        </>
    )
}
