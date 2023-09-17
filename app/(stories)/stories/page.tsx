import AmpStory from '@/components/AmpStory'

// function SafeHydrate({ children }) {
//   return <div suppressHydrationWarning>{typeof window === 'undefined' ? null : children}</div>
// }

export default function Page() {
  const story = {
    pageTitle: 'Testing Google Web Stories',
    storyTitle: 'This is the story title',
    hasVideo: false,
    publisher: { name: 'Rakesh Tembhurne', logo: '/static/images/avatar.png' },
    poster: {
      portraitSrc: 'src="/static/images/avatar.png"',
      squareSrc: 'src="/static/images/avatar.png"',
      landscapeSrc: 'src="/static/images/avatar.png"',
    },
    stories: {
      pageZero: [
        {
          template: 'fill',
          type: 'image',
          src: 'https://picsum.photos/id/111/720/1280',
          width: 720,
          height: 1280,
          layout: 'responsive',
          alt: 'Title Story',
        },
        {
          template: 'thirds',
          type: 'titleSubtitle',
          title: 'Some Title',
          subtitle:
            'This is a long verstion of the title subtitle and this should appear at the bottom.',
        },
      ],
      pageOne: [
        {
          template: 'fill',
          type: 'image',
          src: 'https://picsum.photos/id/22/720/1280',
          width: 720,
          height: 1280,
          layout: 'responsive',
          alt: 'Dog Story',
        },
        {
          template: 'vertical',
          type: 'headingSubheading',
          heading: 'Picsum Test',
          subheading: 'Subheading',
        },
      ],
      pageTwo: [
        {
          template: 'fill',
          type: 'image',
          src: 'https://picsum.photos/id/23/720/1280',
          width: 720,
          height: 1280,
          layout: 'responsive',
          alt: 'Second Image',
        },
        {
          template: 'thirds',
          type: 'headings',
          upper: 'Second Heading',
          middle: null,
          lower:
            'This is some longer description, just to check the content flow. And this can work very well.',
        },
      ],
      pageThree: [
        {
          template: 'fill',
          type: 'image',
          src: 'https://picsum.photos/id/24/720/1280',
          width: 720,
          height: 1280,
          layout: 'responsive',
          alt: 'Third Image',
        },
        {
          template: 'vertical',
          type: 'content',
          contents: ['Something to be done here', 'this is second thing'],
        },
      ],
    },
  }
  return (
    // <SafeHydrate>
    <AmpStory story={story} />
    // </SafeHydrate>
  )
}
