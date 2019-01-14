import React, { SFC } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';

import { rhythm } from '../utils/typography';
import { ISiteConfig } from '../types';

interface IProps {
  siteConfig: ISiteConfig;
  title: string;
}

const ProfileSection: SFC<IProps & { bio: string }> = props => {
  // renderNetworkList()

  return (
    <section id="about" className="profile-section">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div
              className="profile__portrait"
              style={{ backgroundImage: `url(${props.siteConfig.portraitImage})` }}
            />
          </div>
          <div className="col-md-8">
            <h2>{props.title}</h2>
            <div dangerouslySetInnerHTML={{ __html: props.bio }} />
          </div>
        </div>
      </div>
    </section>
  );
};

const bioQuery = graphql`
  query BioQuery {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/content/blocks/bio.md$/" } }) {
      edges {
        node {
          html
        }
      }
    }
  }
`;

export default (props: { siteConfig: ISiteConfig; title: string }) => (
  <StaticQuery
    query={bioQuery}
    render={data => <ProfileSection {...props} bio={data.allMarkdownRemark.edges[0].node.html} />}
  />
);
