import WebStoryListLayoutWithTags from '@/layouts/WebStoryListLayoutWithTags'
import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'
import { allWebStories } from 'contentlayer/generated'
import { genPageMetadata } from 'app/seo'

const POSTS_PER_PAGE = 5

export const metadata = genPageMetadata({ title: 'Web Stories' })

export default function StoriesPage() {
  const webStories = allCoreContent(sortPosts(allWebStories))
  const pageNumber = 1
  const initialDisplayPosts = webStories.slice(
    POSTS_PER_PAGE * (pageNumber - 1),
    POSTS_PER_PAGE * pageNumber
  )
  const pagination = {
    currentPage: pageNumber,
    totalPages: Math.ceil(webStories.length / POSTS_PER_PAGE),
  }

  return (
    <WebStoryListLayoutWithTags
      webStories={webStories}
      initialDisplayPosts={initialDisplayPosts}
      pagination={pagination}
      title="All Web Stories"
    />
  )
}
