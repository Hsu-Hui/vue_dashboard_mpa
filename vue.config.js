/*const path = require('path')
const glob = require('glob')

const titles = {
  Home: '這是Home標題',
  About: '這是About標題'
}

// 獲取pages資料夾下的檔案
function getEntry(globPath) {
  let entries = {}, tmp;
  // 讀取js檔案
  glob.sync(globPath + 'js').forEach(function (entry) {
    tmp = entry.split('/').splice(-3)
    entries[tmp[1]] = {
      entry,
      template: 'index.html',
      filename: tmp[1] + '.html',
      title: titles[tmp[1]],
    }
  })
  return entries
}
*/
//const htmls = getEntry('./src/pages/**/*.')
/*
module.exports = {
  pages: htmls,
  publicPath: './',
  outputDir: 'dist', // 打包後的資料夾名稱，預設dist
  devServer: {
    open: true,
    hot: true,
    index: '.Home/index.html', // 預設啟動頁面
    host: '0.0.0.0',
    port: 8090,
  },
  productionSourceMap: false, // 生產環境是否生成 sourceMap 檔案
}
*/


module.exports = {
  pages: {
    'index': {
      entry: 'src/pages/Home/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      title: 'Index Page',
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
    'About': {
      entry: 'src/pages/About/main.js',
      template: 'public/About.html',
      filename: 'About.html',
      title: 'About Page',
      chunks: ['chunk-vendors', 'chunk-common', 'About']
    }
  }
}