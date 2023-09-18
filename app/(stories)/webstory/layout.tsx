import dynamic from 'next/dynamic'
import React from 'react'
import siteMetadata from '@/data/siteMetadata'
import { Metadata } from 'next'

const NoSsr = (props) => <React.Fragment>{props.children}</React.Fragment>
const NoSSR = dynamic(() => Promise.resolve(NoSsr), { ssr: false })

export const metadata: Metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: {
    default: siteMetadata.title,
    template: `%s | ${siteMetadata.title}`,
  },
  description: siteMetadata.description,
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: './',
    siteName: siteMetadata.title,
    images: [siteMetadata.socialBanner],
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: './',
    types: {
      'application/rss+xml': `${siteMetadata.siteUrl}/feed.xml`,
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: siteMetadata.title,
    card: 'summary_large_image',
    images: [siteMetadata.socialBanner],
  },
}

export default function AmpLayout({ children }: { children: React.ReactNode }) {
  return (
    <html amp="" lang="en-us" suppressHydrationWarning>
      <head>
        <style amp-boilerplate="">{`body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}`}</style>
        <noscript>
          <style amp-boilerplate="">{`body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}`}</style>
        </noscript>

        <NoSSR>
          <script async src="https://cdn.ampproject.org/v0.js"></script>
          <style amp-custom="">
            {`
            amp-story { color:  rgb(249 115 22); font-weight: bold; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI ", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji ", "Segoe UI Emoji ", "Segoe UI Symbol "; }
            amp-story-page { background-color: #000; }
            h1 { color: rgb(249 115 22); font-weight: bold; font-size: 2.875em; line-height: 1.174; }
            p {  font-size: 1.3em; line-height: 1.5em; }
            q { font-weight: 300; font-size: 1.1em; }
            amp-story-grid-layer.bottom { align-content: end; }
            amp-story-grid-layer.noedge { padding: 0px; }
            amp-story-grid-layer.center-text { align-content: center; }
            amp-img { filter: brightness(70%); }
            .content { background-color: rgb(249 115 22); color: white; padding: 10px; }
            .wrapper { display: grid; grid-template-columns: 50% 50%; grid-template-rows: 50% 50%; }
            .banner-text { text-align: center; background-color: #000; line-height: 2em; }
            .titleSubtitle { color: white; background: rgb(0,0,0, 0.2); text-align: center; font-weight: normal;}
            .titleSubtitle h1 {color: white; font-size: 2em; border-bottom: 2px solid orange; margin-bottom: 10px; padding-bottom: 10px;}
            `}
          </style>
        </NoSSR>
      </head>
      <body>
        <NoSSR>{children}</NoSSR>
      </body>
    </html>
  )
}
