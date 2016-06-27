##Web 应用设计 
###（Task 6:UI design）

我们的任务是开发一个多人博客系统，关于页面设计，需遵守的主要规范为用户体验为先，功能丰富而不冗余，突出重点内容。
前端主要应用了Jquery、Amaze UI框架、ejs模板。
我们开发的博客系统界面部分主要分为以下几种：

* 未登录的游客可以实现基本的阅读文章功能，包括搜索，查看推荐。
基本的页面设计与登录用户不同点在于缺少个人中心(发文章、编辑文章等功能)
![](https://github.com/WebHomeWork623/work1/blob/master/Image/1-游客未登录页面.png)

* 用户由主页点击注册链接可以跳转至注册页面。注册页面由最基本的表单实现。
![](https://github.com/WebHomeWork623/work1/blob/master/Image/3-注册页面.png)

* 用户由主页点击登录链接可以跳转至登录页面，登录页面也由基本表单实现。
![](https://github.com/WebHomeWork623/work1/blob/master/Image/2-登录页面.png)

* 博客首页分四部分设计，header在所有页面复用，主题内容为博客简介(作者、日期、摘要),右半部分为热门文章与标签云。底部footer所有页面复用。
![](https://github.com/WebHomeWork623/work1/blob/master/Image/4-登录状态首页.png)

* 首页头部菜单项点入文章存档页面，可以直观查看当前站点所有文章目录
![](https://github.com/WebHomeWork623/work1/blob/master/Image/5-文章存档.png)

* 推荐博客由后端负责，定期更新一些业界推荐博客，用于SEO优化
![](https://github.com/WebHomeWork623/work1/blob/master/Image/6-推荐博客.png)

* 由首页头部的菜单项下拉选择框可以看到三个页面：
    1. 个人中心包含用户注册时提交的信息，可以再次修改提交
![](https://github.com/WebHomeWork623/work1/blob/master/Image/8-菜单-个人中心.png)

    2. 发布文章页面与个人中心类似，表单项分别填入标题、标签、正文，正文支持Markdown语法
![](https://github.com/WebHomeWork623/work1/blob/master/Image/9-菜单-发布文章.png)

    3. 我的文章页面则主要展示个人发表过的文章目录，便于编辑与删除
![](https://github.com/WebHomeWork623/work1/blob/master/Image/10-菜单-我的文章.png)

* 最后，文章详情页，居中布局，尾部评论块，凸出显示文章即可
![](https://github.com/WebHomeWork623/work1/blob/master/Image/11-文章详情页.png)




