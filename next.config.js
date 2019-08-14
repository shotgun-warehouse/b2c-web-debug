module.exports = {
  target: 'serverless',
  env: {
    API_URL: process.env.API_URL,
    STRIPE_PUBLISHABLE_KEY: process.env.STRIPE_PUBLISHABLE_KEY,
    FACEBOOK_APP_ID: process.env.FACEBOOK_APP_ID,
    HOST: process.env.HOST,
    BRANCH_API_KEY: process.env.BRANCH_API_KEY,
    SMOOCH_API_KEY: process.env.SMOOCH_API_KEY,
    FACEBOOK_PIXEL_ID: process.env.FACEBOOK_PIXEL_ID,
  },
};
