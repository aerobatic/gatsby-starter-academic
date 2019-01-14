import React, { Component } from 'react';
import { Link, graphql } from 'gatsby';
import { ISiteConfig } from '../types';

import Bio from '../components/Bio';
import Layout from '../components/Layout';
import SEO from '../components/seo';
import { rhythm } from '../utils/typography';

interface IHomePageProps {
  location: Location;
  data: {
    site: {
      siteMetadata: ISiteConfig;
    };
  };
}

class HomePage extends Component<IHomePageProps> {
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;
    // const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} siteConfig={this.props.data.site.siteMetadata}>
        {/* <SEO
          title="All posts"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        /> */}
        {/* <Bio /> */}
      </Layout>
    );
  }
}

export default HomePage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        author
        description
        mainMenu {
          showSearch
          links {
            text
            url
            homeAnchor
          }
        }
        socialProfiles {
          type
          url
        }
        theme {
          header {
            backgroundColor
            isDarkBackground
          }
        }
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`;
