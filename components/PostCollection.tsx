import Link from '@/components/Link'
import Tag from '@/components/Tag'
import Category from '@/components/Category'
import siteMetadata from '@/data/siteMetadata'
import Image from 'next/image'
import { formatDate } from 'pliny/utils/formatDate'

const PostCollection = ({ posts, MAX_DISPLAY }) => {
  return (
    <div className="grid grid-cols-1 gap-10">
      {!posts.length && 'No posts found.'}
      {posts.slice(0, MAX_DISPLAY).map((post) => {
        const { slug, date, title, summary, tags, picsumId, category, images } = post
        const displayImage =
          images && images.length > 0
            ? images[0]
            : picsumId
            ? `https://picsum.photos/id/${picsumId}/700/480`
            : `https://picsum.photos/700/480`

        return (
          <div
            key={slug}
            className="space-y-2 grid xl:grid-rows-2 xl:grid-cols-3 xl:grid-flow-col xl:space-y-0 gap-2 xl:gap-4"
          >
            <Link href={`/blog/${slug}`} className="xl:row-span-2">
              <Image
                width={700}
                height={480}
                className="rounded-lg aspect-[4/3]"
                src={displayImage}
                alt={title}
                loading="lazy"
              />
            </Link>
            <div className="order-first xl:order-none xl:col-span-2">
              <div className="flex flex-wrap justify-between mb-2">
                {category ? <Category text={category} /> : null}
                <time
                  className="mr-3 text-sm font-bold capitalize text-gray-700 dark:text-gray-400"
                  dateTime={date}
                >
                  {formatDate(date, siteMetadata.locale)}
                </time>
              </div>
              <Link href={`/blog/${slug}`}>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white hover:text-primary-500">
                  {title}
                </h5>
              </Link>
              <div className="flex flex-wrap">
                {tags.map((tag) => (
                  <Tag key={tag} text={tag} />
                ))}
              </div>
            </div>
            <div className="xl:row-span-1 xl:col-span-2">
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{summary}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default PostCollection
