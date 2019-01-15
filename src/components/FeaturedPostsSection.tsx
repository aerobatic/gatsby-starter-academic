import React, { SFC } from 'react';
import { StaticQuery, graphql } from 'gatsby';

import { rhythm } from '../utils/typography';
import { ISiteConfig, IBlogPost } from '../types';

interface IProps {
  siteConfig: ISiteConfig;
  title: string;
}

const FeaturedPostsSection: SFC<IProps & { posts: IBlogPost[] }> = props => {
  return (
    <section id="about" className="posts-section">
      <div className="container">
        <div className="row" />
      </div>
    </section>
  );
};

FeaturedPostsSection.defaultProps = {
  title: 'Featured Posts'
};

const featuredPostsQuery = graphql`
  query featuredPostsQuery {
    allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/content/blog/.*/*.md$/" }
        frontmatter: { featured: { eq: true } }
      }
    ) {
      edges {
        node {
          html
          fields {
            slug
          }
          frontmatter {
            title
            slug
            date(formatString: "DDDD, MMM DD, YYYY")
          }
        }
      }
    }
  }
`;

export default (props: { siteConfig: ISiteConfig; title: string }) => (
  <StaticQuery
    query={featuredPostsQuery}
    render={data => (
      <FeaturedPostsSection {...props} posts={data.allMarkdownRemark.edges[0].node.html} />
    )}
  />
);
