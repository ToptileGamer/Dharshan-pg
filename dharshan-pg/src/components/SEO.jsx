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
  const fullTitle = title
    ? `${title} | Dharshan PG`
    : DEFAULT_TITLE
  const fullDescription = description || DEFAULT_DESCRIPTION
  const image = ogImage || DEFAULT_OG_IMAGE

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={fullDescription} />
      {noIndex && <meta name="robots" content="noindex, nofollow" />}
      <link rel="canonical" href={ogUrl} />

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Dharshan PG" />
      <meta property="og:locale" content="en_IN" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={fullDescription} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:url" content={ogUrl} />
    </Helmet>
  )
}
