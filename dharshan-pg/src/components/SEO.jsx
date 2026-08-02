import { Helmet } from 'react-helmet-async'
import {
  DEFAULT_TITLE,
  DEFAULT_DESCRIPTION,
  DEFAULT_OG_IMAGE,
} from '../data/seoData'
import { SITE_URL } from '../data/contactInfo'

export default function SEO({
  title,
  description,
  ogImage,
  ogUrl = SITE_URL,
  noIndex = false,
}) {
  const fullTitle = title ? `${title} | Dharshan PG` : DEFAULT_TITLE
  const fullDescription = description || DEFAULT_DESCRIPTION
  const image = ogImage || DEFAULT_OG_IMAGE
  const gaId = import.meta.env.VITE_GA_ID

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={fullDescription} />
      <meta name="theme-color" content="#FAF7F0" />
      {noIndex && <meta name="robots" content="noindex, nofollow" />}
      <link rel="canonical" href={ogUrl} />

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1920" />
      <meta property="og:image:height" content="1080" />
      <meta
        property="og:image:alt"
        content="Dharshan PG — Premium ladies paying guest accommodation in Electronic City, Bengaluru"
      />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Dharshan PG" />
      <meta property="og:locale" content="en_IN" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={fullDescription} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={fullDescription} />
      <meta name="twitter:url" content={ogUrl} />

      {/* Optional Google Analytics 4 — activate by setting VITE_GA_ID in .env */}
      {gaId && (
        <>
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
          />
          <script>{`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${gaId}');`}</script>
        </>
      )}
    </Helmet>
  )
}
