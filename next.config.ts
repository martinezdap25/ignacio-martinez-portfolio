const isProd = process.env.NODE_ENV === 'production';

const repo = 'ignacio-martinez-portfolio';

module.exports = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: isProd ? `/${repo}` : '',
  assetPrefix: isProd ? `/${repo}/` : '',
};