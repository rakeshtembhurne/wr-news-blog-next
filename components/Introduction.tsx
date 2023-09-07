import Image from 'next/image'
import SocialIcon from './social-icons'
import siteMetadata from '@/data/siteMetadata'

const Introduction = () => {
  return (
    <>
      <div className="space-y-2 md:my-4 md:space-y-5 md:pb-8 md:pt-6 xl:grid xl:grid-cols-3">
        <div className="md:pr-8 xl:col-span-2 space-y-6 md:space-y-8">
          <div className="text-4xl font-extrabold text-orange-500 md:text-7xl">Namaste!</div>
          <div className="text-base leading-7 md:text-lg md:leading-8 text-gray-600 dark:text-gray-400">
            <h1 className="text-neutral-900 dark:text-neutral-200">
              I'm&nbsp;
              <span className="font-medium">Rakesh Tembhurne</span> - a passionate Full Stack
              Software Engineer in&nbsp;
              <span className="font-medium">Nagpur, India</span>
            </h1>

            <div className="mb-8 mt-4">
              <p>Passionately developing software from over a decade.</p>
              <p>Before 2014 worked with PHP, later shifted to NodeJS / JavaScript fully.</p>
              <p>Been working with global startups to build complex apps from scratch.</p>
              <p>This blog is a unified blog of all that I learn and do.</p>
            </div>
            <div className="flex flex-col space-y-1.5">
              <strong>What you'll find in this blog?</strong>
              <ol>
                <li>
                  <strong className="text-pink-500">Tech Bytes: </strong>
                  Technology, software, web development
                </li>
                <li>
                  <strong className="text-pink-500">Book Bites: </strong>
                  Learnings from books I read
                </li>
                <li>
                  <strong className="text-pink-500">Community Works: </strong>
                  The community work I do, and lessons I learn.
                </li>
                <li>
                  <strong className="text-pink-500">Courseware: </strong>
                  Books I write and courses I create
                </li>
              </ol>
            </div>
            <p className="my-8 flex">
              <span className="mr-2">Be happy!</span>
            </p>
          </div>
        </div>
        <div className="hidden xl:block">
          <div className="z-10 mb-8 scale-100 transition-all duration-200 ease-out hover:z-50 xl:mb-0 xl:hover:scale-[1.15]">
            <Image
              src="/static/images/avatar.png"
              alt="avatar"
              width={550}
              height={550}
              className="rounded-full"
            />
          </div>
          <div className="mt-16 flex flex-col items-center">
            <div className="mb-3 flex space-x-4">
              <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size={6} />
              <SocialIcon kind="github" href={siteMetadata.github} size={6} />
              <SocialIcon kind="facebook" href={siteMetadata.facebook} size={6} />
              <SocialIcon kind="youtube" href={siteMetadata.youtube} size={6} />
              <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size={6} />
              <SocialIcon kind="twitter" href={siteMetadata.twitter} size={6} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Introduction
