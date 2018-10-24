import React from 'react';

import Html from './Html';

const SetDetails = ({ data }) => (
  <React.Fragment>
    {!data.name ? null : <h3>{data.name.text}</h3>}
    {!data.description ? null : <Html {...data.description} />}
  </React.Fragment>
);

export default SetDetails;
