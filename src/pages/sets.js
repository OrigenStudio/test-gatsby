import React from 'react';
import { FormattedMessage } from 'react-intl';
import { graphql } from 'gatsby';
import get from 'lodash/get';
import map from 'lodash/map';

import SetDetails from '../components/SetDetails';

const Sets = ({ data }) => (
  <React.Fragment>
    <h1>
      <FormattedMessage id="sets.title" />
    </h1>
    <div>
      {map(get(data, 'allPrismicSet.edges'), ({ node }) => (
        <SetDetails key={node.id} {...node} />
      ))}
    </div>
  </React.Fragment>
);

export default Sets;

export const querySets = graphql`
  query SetsQuery($prismicLocaleId: String) {
    allPrismicSet(filter: { lang: { eq: $prismicLocaleId } }) {
      edges {
        node {
          id
          prismicId
          data {
            name {
              text
              html
            }
            description {
              text
              html
            }
          }
        }
      }
    }
  }
`;
