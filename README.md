# 前端js规范包

## 安装依赖

1、安装包

```js
yarn add fe-base-lint
```

2、如果项目环境中有其它eslint包，冲突情况下，手动安装以下包

```js
yarn add @babel/core @babel/eslint-parser @babel/plugin-proposal-class-properties @babel/plugin-proposal-decorators @babel/preset-env @babel/preset-react @babel/preset-typescript
```

## 配置案例

lint 规范集合配置文件

`.eslintrc.js`

```js
module.exports = {
  extends: [require.resolve('fe-base-lint/dist/eslint')],

  rules: {
    // your rules
  },
};
```

`.prettierrc.js`

```js
const config = require('fe-base-lint');

module.exports = {
  ...config.prettier,
};
```
