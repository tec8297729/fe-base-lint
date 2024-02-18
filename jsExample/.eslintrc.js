const path = require('path');

module.exports = {
  extends: [require.resolve(path.join(__dirname, '../', 'dist/jslint'))],
  globals: {
    ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION: true,
    REACT_APP_ENV: true,
    page: true,
  },
};
