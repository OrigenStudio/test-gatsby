import React from 'react';
import { IntlProvider } from 'react-intl';

import '../i18n/localeData';
import * as messages from '../i18n/messages';

const AppIntlProvider = ({ children, pageContext: { locale } }) => (
  <IntlProvider
    locale={locale.id}
    key={locale.id}
    messages={messages[locale.id]}
  >
    {children}
  </IntlProvider>
);

export default AppIntlProvider;
