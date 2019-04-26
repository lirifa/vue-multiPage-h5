// package.json中通过 --BUILD_MODE 指定当前执行的配置文件
const env = process.env.BUILD_MODE.trim();
const config = () => {
  if (env === 'development') return require(`./build/webpack.dev.js`);
  return require(`./build/webpack.prod.js`)
}
// module.exports = require(`./build/webpack.${env}.js`);
module.exports = config()
