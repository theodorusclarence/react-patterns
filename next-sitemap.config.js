/**
 * @type {import('next-sitemap').IConfig}
 * @see https://github.com/iamvishnusankar/next-sitemap#readme
 */
module.exports = {
  /** Without additional '/' on the end, e.g. https://theodorusclarence.com */
  siteUrl: 'https://react-patterns.thcl.dev',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
  },
};
