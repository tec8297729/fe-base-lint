# 前端js规范包

## 更新历史

### v1.0.0
* 剥离ts、js集成的lint规则，1.0版本将分二个lint文件手动引入（jslint/tslint）


## 安装依赖

1、安装包

```js
yarn add fe-base-lint
```

PS：如果项目环境中有其它eslint包，冲突情况下，才手动安装以下包

```js
yarn add @babel/core @babel/eslint-parser @babel/plugin-proposal-class-properties @babel/plugin-proposal-decorators @babel/preset-env @babel/preset-react @babel/preset-typescript
```

## 配置案例

lint 规范集合配置文件

`.eslintrc.js`

```js
const path = require('path')
module.exports = {
  extends: [require.resolve('fe-base-lint/dist/tslint')],
  parserOptions: {
    project: require.resolve(path.join(__dirname, './tsconfig.json')),
  },
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
