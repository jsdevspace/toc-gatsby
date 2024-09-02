import * as React from 'react';
import { graphql, HeadFC, PageProps } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';

import TableOfContents from '../components/tos/table-of-contents';
import SEO from '../components/seo';
import { slugify } from '../lib/utils';

const MdxComponents = {
  h2: ({ children }: HeadingProps) => {
    const id = slugify(children);
    return (
      <h2 className={`my-5 font-ptSerif font-medium leading-9 tracking-wide text-3xl`} id={`${id}`}>
        {children}
      </h2>
    );
  },
  h3: ({ children }: HeadingProps) => {
    const id = slugify(children);
    return (
      <h3 className={`my-5 font-ptSerif font-medium tracking-wide text-2xl`} id={`${id}`}>
        {children}
      </h3>
    );
  },
  h4: ({ children }: HeadingProps) => {
    const id = slugify(children);
    return (
      <h4 className={`my-5 font-ptSerif tracking-wide text-xl`} id={`${id}`}>
        {children}
      </h4>
    );
  },
};

const PostTemplate: React.FC<PageProps<Queries.GetSinglePostQuery>> = ({
  data: {
    mdx: {
      frontmatter: { title },
      tableOfContents,
    },
  },
  children,
}) => {
  return (
    <div className='my-16 px-64'>
      <article className='text-lg'>
        <h1 className='tracking-wide text-4xl font-medium space-y-5 my-5'>{title}</h1>
        <TableOfContents items={tableOfContents.items} />
        <MDXProvider components={MdxComponents}> {children}</MDXProvider>
      </article>
    </div>
  );
};
export const query = graphql`
  query GetSinglePost($slug: String) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      excerpt
      frontmatter {
        title
      }
      tableOfContents
    }
  }
`;

export const Head: HeadFC<Queries.GetSinglePost, unknown> = ({
  data: {
    mdx: {
      excerpt: description,
      frontmatter: { title },
    },
  },
}) => {
  return (
    <>
      <SEO title={title} description={description} />
    </>
  );
};

export default PostTemplate;
