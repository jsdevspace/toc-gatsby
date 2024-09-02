import { graphql, useStaticQuery } from 'gatsby';

type SiteMetadata = {
  title: string;
  description: string;
  twitterUsername: string;
  image: string;
  siteUrl: string;
};

type graphqlResult = {
  site: {
    siteMetadata: SiteMetadata;
  };
};

export const useSiteMetadata = (): SiteMetadata => {
  const data: graphqlResult = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
          twitterUsername
          image
          siteUrl
        }
      }
    }
  `);

  return data.site.siteMetadata;
};
