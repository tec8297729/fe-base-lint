/** @format */
const strictJslint = require('./jslint');
const strictTslint = require('./tslint');
const prettier = require('./prettier');

module.exports = {
  prettier,
  jslint: strictJslint,
  tslint: strictTslint,
  default: strictJslint,
};
