# hexo-theme-zhl
一个简约版本的hexo主题，基于Hexo 3.0+ 制作。

## Feature
1. 仅支持IE10+等现代浏览器。
2. 使用原生js。
3. 简约，容易使用，方便拓展
4. 可改变网页背景

## TODO
- [ ] 搜索功能
- [ ] 评论功能
- [ ] 支持IE9
- [ ] 作品页面
## Getting Started
### Dependencies
```
npm install 
"dependencies": {
    "hexo": "^3.2.0",
    "hexo-generator-archive": "^0.1.4",
    "hexo-generator-category": "^0.1.3",
    "hexo-generator-index": "^0.2.0",
    "hexo-generator-tag": "^0.2.0",
    "hexo-renderer-ejs": "^0.3.0",
    "hexo-renderer-stylus": "^0.3.1",
    "hexo-renderer-marked": "^0.3.0",
    "hexo-server": "^0.2.0"
  },
  "devDependencies": {
    "hexo-browsersync": "^0.3.0",
    "hexo-renderer-ejs": "^0.3.1",
    "hexo-renderer-stylus": "^0.3.3",
    "hexo-server": "^0.2.2"
  }
```
### Download

1. 下载*.zip文件
2. 通过git
- 安装目录如下：
```
 .
    ├── landscape
    └── zhl

```

## configure
在主题目录下的_config.yml下配置
## Run
```
 hexo clean && hexo g && hexo s
```
默认为4000端口
## Thanks
### 制作参考 
- [制作Hexo主题详细教程（1）](http://blog.geekaholic.cn/2017/02/22/%E5%88%B6%E4%BD%9CHexo%E4%B8%BB%E9%A2%98%E8%AF%A6%E7%BB%86%E6%95%99%E7%A8%8B%EF%BC%881%EF%BC%89/) 
- [从零开始制作 Hexo 主题](http://www.ahonn.me/2016/12/15/create-a-hexo-theme-from-scratch/)
- [Hexo主题开发经验杂谈](https://molunerfinn.com/make-a-hexo-theme/#%E5%89%8D%E8%A8%80)
- [Landscape主题](https://github.com/hexojs/hexo-theme-landscape)

### 布局参考
- [Hux Blog](https://huangxuan.me/)
- [屠城](https://www.haomwei.com/)

## License
[MIT](https://github.com/lizehongss/hexo-theme-zhl/blob/master/LICENSE)
