import * as React from 'react';
import { useLocation } from '@reach/router';

import { useSiteMetadata } from '../hooks/use-site-metadata';

interface SeoProps {
  title?: string;
  description?: string;
  lang?: string;
  image?: string;
  article?: boolean;
  canonicalUrl?: string;
  nonCanonical?: boolean;
  author?: string;
  noindex?: boolean;
}

const SEO: React.FC<React.PropsWithChildren<SeoProps>> = ({
  title: propTitle,
  description: propDescription,
  lang: propLang,
  image,
  article,
  canonicalUrl: propCanonicalPath,
  nonCanonical = false,
  author: propAuthor,
  noindex = false,
  children,
}) => {
  const {
    title: siteTitle,
    description: siteDescription,
    image: siteImage,
    siteUrl,
    twitterUsername,
  } = useSiteMetadata();

  // By default, we will construct the canonical path ourselves, but this can
  // be overwritten via the component properties
  const { pathname } = useLocation();
  const defaultCanonicalPath = `${siteUrl}/${pathname}`;
  const canonicalUrl = propCanonicalPath || defaultCanonicalPath;

  const siteName = siteTitle || 'JavaScript Development Blog';
  const title = propTitle;
  const description = propDescription || siteDescription || '';
  const lang = propLang || 'en_US';

  return (
    <>
      <title>{title}</title>
      {!nonCanonical && <link rel='canonical' href={canonicalUrl} />}
      <meta name='description' content={description} />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:type' content={article ? 'article' : 'website'} />
      <meta property='og:url' content={canonicalUrl} />
      <meta property='og:site_name' content={siteName} />
      <meta property='og:locale' content={lang} />
      <meta name='twitter:creator' content={twitterUsername} />
      <meta name='twitter:site' content={twitterUsername} />
      <meta name='tiwtter:url' content={canonicalUrl} />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={description} />
      {image ? (
        <>
          <meta property='og:image' content={`${siteUrl}/${image}`} />
          <meta name='twitter:card' content='summary_large_image' />
        </>
      ) : (
        <>
          <meta property='og:image' content={`${siteUrl}/${siteImage}`} />
          <meta name='twitter:card' content='summary' />
        </>
      )}
      {noindex && <meta name='googlebot' content='noindex, nofollow' />}
      {children}
    </>
  );
};

export default SEO;
