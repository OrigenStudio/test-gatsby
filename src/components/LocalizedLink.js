import React from 'react';
import { Link } from 'gatsby';
import { injectIntl } from 'react-intl';

import { defaultLocale } from '../i18n/config';

const LocalizedLink = ({ to, intl: { locale }, ...props }) => (
  <Link {...props} to={locale === defaultLocale ? to : `/${locale}${to}`} />
);

export default injectIntl(LocalizedLink);
