import { addLocaleData } from 'react-intl';

import es from 'react-intl/locale-data/es';
import ca from 'react-intl/locale-data/ca';

addLocaleData([...es, ...ca]);
