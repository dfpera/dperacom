import { graphql, StaticQuery } from "gatsby";
import React, { useState } from "react";
import Layout from "../components/layout";
import { cn, buildImageObj } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";

const query = graphql`
  query SiteTitleQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title,
      logo {
        crop {
          _key
          _type
          top
          bottom
          left
          right
        }
        hotspot {
          _key
          _type
          x
          y
          height
          width
        }
        asset {
          _id
        }
        alt
      }
    }
  }
`;

function LayoutContainer(props) {
  const [showNav, setShowNav] = useState(false);
  function handleShowNav() {
    setShowNav(true);
  }
  function handleHideNav() {
    setShowNav(false);
  }
  return (
    <StaticQuery
      query={query}
      render={data => {
        if (!data.site) {
          throw new Error(
            'Missing "Site settings". Open the studio at http://localhost:3333 and add "Site settings" data'
          );
        }
        console.log(data.site.logo);
        return (
          <div>
            {data.site.logo && data.site.logo.asset && (
              <img
                src={imageUrlFor(buildImageObj(data.site.logo))
                  .width(50)
                  .height(50)
                  .url()}
                alt={data.site.logo.alt}
              />
            )}
            <Layout
              {...props}
              showNav={showNav}
              siteTitle={data.site.title}
              onHideNav={handleHideNav}
              onShowNav={handleShowNav}
            />
          </div>
        );
      }}
    />
  );
}

export default LayoutContainer;
