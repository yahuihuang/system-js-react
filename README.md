1.init
    npm init -y
    npm install webpack webpack-cli webpack-dev-server babel-loader @babel/core @babel/preset-env @babel/preset-react html-webpack-plugin -D
    npm install react react-dom
2.webpack打包
    npm run dev
    http://localhost:8080/
    http://localhost:8080/index.js
3.system模塊打包
    npm run build => 產生 dist/index.js
    Browser: file:///E:/react_microweb/system-js-react/dist/index.html