import React from 'react';
import { FormattedMessage } from 'react-intl';
import { graphql } from 'gatsby';
import Image from 'gatsby-image';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import IconButton from '@material-ui/core/IconButton';
import PlaceIcon from '@material-ui/icons/Place';
import EmailIcon from '@material-ui/icons/Email';
import FacebookIcon from 'mdi-material-ui/FacebookBox';
import InstagramIcon from 'mdi-material-ui/Instagram';

const socialNetworksIcons = {
  facebook: FacebookIcon,
  instagram: InstagramIcon,
};

const IndexPage = ({ classes, data }) => (
  <div className={classes.root}>
    <div className={classes.imageWrapper}>
      <Image {...data.image.childImageSharp} />
    </div>
    <div className={classes.infoWrapper}>
      <Typography
        variant="h5"
        className={classNames(classes.text, classes.title, classes.infoItem)}
      >
        <FormattedMessage id="comingSoon.title" />
      </Typography>
      <div className={classNames(classes.address, classes.infoItem)}>
        <PlaceIcon color="primary" className={classes.icon} />
        <ButtonBase
          disableRipple
          disableTouchRipple
          href="https://goo.gl/maps/8sXcnvwUP6Q2"
          className={classes.addressButton}
        >
          <Typography className={classes.text}>
            {data.site.siteMetadata.address.line1}
          </Typography>
          <Typography className={classes.text}>
            {data.site.siteMetadata.address.line2}
          </Typography>
        </ButtonBase>
      </div>
      <div className={classNames(classes.email, classes.infoItem)}>
        <EmailIcon color="primary" className={classes.icon} />
        <ButtonBase
          disableRipple
          disableTouchRipple
          href={`mailto:${data.site.siteMetadata.email}`}
          className={classes.emailButton}
        >
          <Typography className={classes.text}>
            {data.site.siteMetadata.email}
          </Typography>
        </ButtonBase>
      </div>
      <div className={classNames(classes.socialNetworks, classes.infoItem)}>
        {data.site.siteMetadata.socialNetworks.map(({ name, url }) => {
          const IconComponent = socialNetworksIcons[name];
          return (
            <IconButton color="primary" key={name} href={url}>
              <IconComponent />
            </IconButton>
          );
        })}
      </div>
    </div>
  </div>
);

export default withStyles(theme => ({
  root: {
    display: 'flex',
    flexFlow: 'row wrap',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1E2424',
    height: '100vh',
    width: '100vw',
    '& > *': {
      maxWidth: 400,
    },
    [theme.breakpoints.down('xs')]: {
      flexFlow: 'column',
    },
  },
  imageWrapper: {
    width: '100%',
    maxWidth: 200,
    [theme.breakpoints.up('md')]: {
      maxWidth: 225,
    },
    [theme.breakpoints.up('lg')]: {
      maxWidth: 250,
    },
  },
  infoWrapper: {
    marginTop: theme.spacing.unit * 10,
    [theme.breakpoints.down('xs')]: {
      marginTop: theme.spacing.unit * 4,
    },
  },
  icon: {
    margin: `0 ${theme.spacing.unit}px`,
  },
  infoItem: {
    display: 'flex',
    flexWrap: 'nowrap',
    alignItems: 'center',
    justifyContent: 'center',
    margin: `${theme.spacing.unit}px 0`,
  },
  title: {
    fontStyle: 'italic',
    fontWeight: 'bold',
    marginBottom: theme.spacing.unit * 2,
  },
  text: {
    color: theme.palette.secondary.main,
  },
  address: {},
  addressButton: {
    flexFlow: 'column',
  },
  email: {},
  emailButton: {},
  socialNetworks: {
    marginTop: theme.spacing.unit * 2,
  },
}))(IndexPage);

export const query = graphql`
  query {
    image: file(relativePath: { eq: "MTK-logo-coming-soon.png" }) {
      childImageSharp {
        fluid(maxWidth: 445) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    site {
      siteMetadata {
        email
        address {
          line1
          line2
        }
        socialNetworks {
          name
          url
        }
      }
    }
  }
`;
