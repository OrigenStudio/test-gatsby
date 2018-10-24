import { createMuiTheme } from '@material-ui/core/styles';
import each from 'lodash/each';

const baseFontFamily = ['Montserrat', 'sans-serif'];
const defaultFontColor = ['#333333'];

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#EC2893',
    },
    secondary: {
      main: '#FFF',
    },
  },
  typography: {
    h1: {
      fontFamily: ['Lora', ...baseFontFamily],
      fontDisplay: 'swap',
      fontWeight: '700',
    },
    h2: {
      fontFamily: ['Lora', ...baseFontFamily],
      fontDisplay: 'swap',
      fontWeight: '700',
    },
    h3: {
      fontFamily: ['Lora', ...baseFontFamily],
      fontDisplay: 'swap',
      fontWeight: '700',
    },
    h4: {
      fontFamily: ['Lora', ...baseFontFamily],
      fontDisplay: 'swap',
      fontWeight: '700',
      paddingBottom: '45px',
      color: [defaultFontColor],
    },
    h5: {
      fontFamily: baseFontFamily,
      fontDisplay: 'swap',
    },
    h6: {
      fontFamily: baseFontFamily,
      fontDisplay: 'swap',
      fontWeight: '600',
    },
    subtitle1: {
      fontFamily: ['Lora', ...baseFontFamily],
      fontDisplay: 'swap',
      fontWeight: '400',
      color: [defaultFontColor],
    },
    body2: {
      fontFamily: ['Lora', ...baseFontFamily],
      fontDisplay: 'swap',
      fontWeight: '400',
      lineHeight: '2',
      fontSize: '1.2rem',
      color: [defaultFontColor],
    },
    body1: {
      fontFamily: baseFontFamily,
      fontDisplay: 'swap',
      lineHeight: '1.5',
      fontSize: '1rem',
      color: [defaultFontColor],
    },
    caption: {
      fontFamily: baseFontFamily,
      fontDisplay: 'swap',
    },
    button: {
      fontFamily: baseFontFamily,
      fontDisplay: 'swap',
    },
  },
});

// Further customize the outcome of the theme
const coef = 0.1;
const modifyRem = (value, coef) => `${parseFloat(value) * (1 + coef)}rem`;

each(theme.typography, (variant, variantName) => {
  if (typeof variant !== 'object') {
    return variant;
  }
  theme.typography[variantName] = {
    ...variant,
    fontSize: modifyRem(variant.fontSize, -coef * 3),
    [theme.breakpoints.up('sm')]: {
      fontSize: modifyRem(variant.fontSize, -coef * 2),
    },
    [theme.breakpoints.up('md')]: {
      fontSize: modifyRem(variant.fontSize, -coef * 1),
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: modifyRem(variant.fontSize, 0),
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: modifyRem(variant.fontSize, coef),
    },
  };
});

// Make change to display2 variant for xs screen size.
theme.typography.display2 = {
  ...theme.typography.display2,
  fontSize: '1.5rem',
};
theme.typography.display3 = {
  ...theme.typography.display3,
  fontSize: '1.8rem',
};

export default theme;

// TODO move somewhere else as useful snippet
const makeResponsive = (theme, jssHandle, values) => ({
  [jssHandle]: values.xs,
  [theme.breakpoints.up('sm')]: {
    [jssHandle]: values.sm,
  },
  [theme.breakpoints.up('md')]: {
    [jssHandle]: values.md,
  },
  [theme.breakpoints.up('lg')]: {
    [jssHandle]: values.lg,
  },
  [theme.breakpoints.up('xl')]: {
    [jssHandle]: values.xl,
  },
});

export { makeResponsive };
