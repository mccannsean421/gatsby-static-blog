import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

export default function Index({data}) {
  const { edges: posts } = data.allMarkdownRemark;
  return (
    <div className="blog-posts">
      <div className="content-container blog-content">
      <h1>My Blog</h1>
      <p>Here is where I ramble about things related to the web! Please do have a read.</p>

      {posts
        .filter(post => post.node.frontmatter.title.length > 0)
        .map(({ node: post }) => {
          return (
            <div className="blog-post-preview" key={post.id}>
                <h2>
                  <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
                </h2>
                <p className="blog-short-description">
                  {post.frontmatter.short}
                </p>
            </div>
          );
        })}
        </div>
    </div>
  );
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            title
            path
            short
          }
        }
      }
    }
  }
`;