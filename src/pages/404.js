import React from 'react';
import { navigate } from 'gatsby';
import lifecycle from 'recompose/lifecycle';

const NotFoundPage = () => null;

export default lifecycle({
  componentDidMount() {
    navigate('/', { replace: true });
  },
})(NotFoundPage);
