import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import NewsletterForm from 'pliny/ui/NewsletterForm'
import PostCollection from '@/components/PostCollection'
import PostCollectionWithoutImage from '@/components/PostCollectionWithoutImage'
import Introduction from '@/components/Introduction'

const MAX_DISPLAY = 5

export default function Home({ posts }) {
  return (
    <>
      <div className="">
        <Introduction />
        <PostCollection posts={posts} MAX_DISPLAY={MAX_DISPLAY} />
        {/* <PostCollectionWithoutImage posts={posts} MAX_DISPLAY={MAX_DISPLAY} /> */}

        {posts.length > MAX_DISPLAY && (
          <div className="flex justify-end text-base font-medium leading-6">
            <Link
              href="/blog"
              className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
              aria-label="All posts"
            >
              All Posts &rarr;
            </Link>
          </div>
        )}
        {siteMetadata.newsletter?.provider && (
          <div className="flex items-center justify-center pt-4">
            <NewsletterForm />
          </div>
        )}
      </div>
    </>
  )
}
