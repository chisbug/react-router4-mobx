# react-router4-mobx

基于webpack2配置的react + react-router4 + mobx开发环境

#### 功能:
* react-router4的使用示例
* mobx和mobx-react的使用示例
* 使用bundle-loader实现按需加载(请查看src/components/app.jsx)
* 模块热加载(HMR)
* less编译并生成css
* source-map
* js和css代码压缩
* 分离库(如react和react-router)
* 自动生成webpack-assets.json文件, 方便查看打包后的文件名
* 可配置的模板html(可以配置符合项目需求的index.html并自动插入script路径), 打包后生成最终的html文件
* 打包图片等静态资源(低于10k转换为base64编码), 生成md5文件名
* 打包生成md5文件名的js主文件(方便去缓存)


#### 开发: 
1.  **npm install** 
2.  **npm run dev** 
3.  打开pc或者手机浏览器,输入ip地址和8080端口 (如:192.168.1.100:8080)

#### 打包:
1.  **npm run build** 



##### 版本号:
* react-router: 4.1.2
* mobx: 3.2.1
* mobx-react: 4.2.2
* webpack: 2.2.1
