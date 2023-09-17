import AmpStory from '@/components/AmpStory'
import PageTitle from '@/components/PageTitle'
import { sortPosts, coreContent, allCoreContent } from 'pliny/utils/contentlayer'
import { allWebStories, allAuthors } from 'contentlayer/generated'
import type { Authors, WebStory } from 'contentlayer/generated'

export const generateStaticParams = async () => {
  const paths = allWebStories.map((p) => ({ slug: p.slug.split('/') }))

  return paths
}

export default async function Page({ params }: { params: { slug: string[] } }) {
  const slug = decodeURI(params.slug.join('/'))
  const sortedCoreContents = allCoreContent(sortPosts(allWebStories))
  const postIndex = sortedCoreContents.findIndex((p) => p.slug === slug)
  if (postIndex === -1) {
    return (
      <div className="mt-24 text-center">
        <PageTitle>
          Under Construction{' '}
          <span role="img" aria-label="roadwork sign">
            🚧
          </span>
        </PageTitle>
      </div>
    )
  }

  const webStory = allWebStories.find((p) => p.slug === slug) as WebStory
  const authorList = webStory?.authors || ['default']
  const authorDetails = authorList.map((author) => {
    const authorResults = allAuthors.find((p) => p.slug === author)
    return coreContent(authorResults as Authors)
  })
  // const mainContent = coreContent(webStory)
  const jsonLd = webStory.structuredData
  jsonLd['author'] = authorDetails.map((author) => {
    return {
      '@type': 'Person',
      name: author.name,
    }
  })

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AmpStory story={webStory.story} />
      {/* <Layout content={mainContent} authorDetails={authorDetails} next={next} prev={prev}>
        <MDXLayoutRenderer code={post.body.code} components={components} toc={post.toc} />
      </Layout> */}
    </>
  )
}
