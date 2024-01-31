import Link from '@/components/Link'
import Tag from '@/components/Tag'
import Category from '@/components/Category'
import Image from 'next/image'
import { slug as ghSlugger } from 'github-slugger'
import { format } from 'date-fns'
import { allAuthors } from 'contentlayer/generated'

const getAuthor = (slug = 'default') => allAuthors.find((author) => author.slug === slug)

const BlogCard = ({ post }) => {
  const { slug, date, title, summary, tags, picsumId, category, images, authors } = post
  const author = getAuthor(authors?.[0])

  const displayImage =
    images && images.length > 0
      ? images[0]
      : picsumId
      ? `https://picsum.photos/id/${picsumId}/700/480`
      : `https://picsum.photos/700/480`
  return (
    <>
      <div className="w-full px-4 md:w-1/2 lg:w-1/3">
        <div className="mb-10 w-full">
          <div className="mb-4 overflow-hidden rounded relative">
            <Image
              width={700}
              height={480}
              className="rounded-lg w-full"
              src={displayImage}
              alt={title}
            />
            <Link
              className="absolute text-white top-1 right-1 text-sm font-bold bg-red-500/70 p-1 rounded"
              href={`/category/${ghSlugger(category)}`}
            >
              {category}
            </Link>
          </div>
          <div>
            <h3>
              <Link
                href={`/blog/${slug}`}
                className="mb-4 inline-block text-xl font-semibold text-dark hover:text-primary dark:text-white sm:text-xl lg:text-xl xl:text-xl"
              >
                {title}
              </Link>
            </h3>
            {author?.name && author?.avatar && (
              <div className="text-sm flex items-center justify-between font-xs">
                <Image
                  width={22}
                  height={22}
                  alt={author.name}
                  src={author.avatar}
                  className="w-22 rounded-full w-8 h-8 inline-block mr-2 flex-none"
                />
                <strong className="flex-auto">{author.name}</strong>
                <span className=" flex-auto text-silver-500">{format(date, 'PP')}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

const PostCollectionBoxed = ({ posts, MAX_DISPLAY }) => {
  return (
    <div className="-mx-4 flex flex-wrap">
      {!posts.length && 'No posts found.'}
      {posts.slice(0, MAX_DISPLAY).map((post) => {
        return <BlogCard key={post.slug} post={post} />
      })}
    </div>
  )
}

const PostCollectionBoxedOld = ({ posts, MAX_DISPLAY }) => {
  return (
    <div className="grid grid-cols-3 gap-4">
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
                className="rounded-lg"
                src={displayImage}
                alt={title}
              />
            </Link>
            <div className="order-first xl:order-none xl:col-span-2">
              <div className="flex flex-wrap justify-between mb-2">
                {category ? <Category text={category} /> : null}
                <time
                  className="mr-3 text-sm font-bold capitalize text-gray-700 dark:text-gray-400"
                  dateTime={date}
                >
                  {format(date, 'PP')}
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

export default PostCollectionBoxed
