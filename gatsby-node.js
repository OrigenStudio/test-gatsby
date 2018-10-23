/* eslint-disable prettier/prettier */
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const i18n = require('./src/i18n/config');

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions;
  deletePage(page);

  i18n.locales.map(locale => {
    const localizedPath =
      locale.id === i18n.defaultLocale ? page.path : locale.path + page.path;

    return createPage(
      Object.assign({}, page, {
        path: localizedPath,
        context: {
          locale,
        },
      })
    );
  });
};
