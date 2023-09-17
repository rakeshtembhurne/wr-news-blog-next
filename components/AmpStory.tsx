import Head from 'next/head'
import Script from 'next/script'

const AmpStory = ({ story }) => {
  const { pageTitle, stories, hasVideo, storyTitle, publisher, poster } = story
  const storyLayers: [string, StoryLayer[]][] = Object.entries(stories)

  return (
    <>
      <Script
        async
        key="amp-story"
        custom-element="amp-story"
        src="https://cdn.ampproject.org/v0/amp-story-1.0.js"
      />
      {hasVideo ? (
        <Script
          async
          key="amp-video"
          custom-element="amp-video"
          src="https://cdn.ampproject.org/v0/amp-video-0.1.js"
        />
      ) : null}

      <amp-story
        standalone=""
        title={storyTitle}
        publisher={publisher.name}
        publisher-logo-src={publisher.logo}
        poster-portrait-src={poster.portraitSrc}
        poster-square-src={poster.squareSrc}
        poster-landscape-src={poster.landscapeSrc}
      >
        {storyLayers.map(([pageId, layers]) => {
          return (
            <amp-story-page id={pageId} key={pageId}>
              {layers.map((layer, index) => {
                return (
                  <amp-story-grid-layer template={layer.template} key={index}>
                    {layer.type === 'image' ? (
                      <amp-img
                        src={layer.src as string}
                        width={layer.width}
                        height={layer.height}
                        layout={layer.layout as string}
                        alt={layer.alt as string}
                      ></amp-img>
                    ) : null}

                    {layer.type === 'headingSubheading' && layer.template === 'vertical' ? (
                      <>
                        {layer.heading ? <h1>{layer.heading}</h1> : null}
                        {layer.subheading ? <p>{layer.subheading}</p> : null}
                      </>
                    ) : null}

                    {layer.type === 'titleSubtitle' && layer.template === 'thirds' ? (
                      <div
                        className="titleSubtitle"
                        grid-area="lower-third"
                        animate-in="fade-in"
                        animate-in-delay="1s"
                      >
                        {layer.title ? <h1>{layer.title}</h1> : null}
                        {layer.subtitle ? <p>{layer.subtitle}</p> : null}
                      </div>
                    ) : null}

                    {layer.type === 'headings' && layer.template === 'thirds' ? (
                      <>
                        {layer.upper ? (
                          <h1 className="upper-third" grid-area="upper-third">
                            {layer.upper}
                          </h1>
                        ) : null}
                        {layer.middle ? (
                          <div className="middle-third" grid-area="middle-third">
                            {layer.middle}
                          </div>
                        ) : null}
                        {layer.lower ? (
                          <p className="lower-third" grid-area="lower-third">
                            {layer.lower}
                          </p>
                        ) : null}
                      </>
                    ) : null}

                    {layer.type === 'content'
                      ? (layer.contents || []).map((content, index) => (
                          <p key={index} className="content">
                            {content}
                          </p>
                        ))
                      : null}
                  </amp-story-grid-layer>
                )
              })}
            </amp-story-page>
          )
        })}
      </amp-story>
    </>
  )
}

export default AmpStory
