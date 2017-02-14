# 小程序mta上报

## 安装

```
npm install mta-analysis --save
```

## 引入上报

```
import mta from 'mta-analysis';
```

## 小程序添加可信域名

在小程序开发设置中，将https://pingtas.qq.com 添加为可信域名

## 相关代码

```
// 初始化
mta.App.init({
    "appID":"xxxxxxx",
    "eventID":"xxxxxxx", // 高级功能-自定义事件统计ID，配置开通后在初始化处填写
    "statPullDownFresh":true, // 使用分析-下来刷新次数/人数，必须先开通自定义事件，并配置了合法的eventID
    "statShareApp":true, // 使用分析-分享次数/人数，必须先开通自定义事件，并配置了合法的eventID
    "statReachBottom":true // 使用分析-页面触底次数/人数，必须先开通自定义事件，并配置了合法的eventID
});

// 页面初始化
mta.Page.init();

// 自定义事件上报
mta.Event.stat("ico_search", {"query":"特斯拉"});

```


更多文档说明，参考[官方文档](http://developer.qq.com/wiki/mta/%E5%BE%AE%E4%BF%A1%E5%B0%8F%E7%A8%8B%E5%BA%8F%E6%8E%A5%E5%85%A5/%E5%BE%AE%E4%BF%A1%E5%B0%8F%E7%A8%8B%E5%BA%8F%E6%8E%A5%E5%85%A5/%E5%BE%AE%E4%BF%A1%E5%B0%8F%E7%A8%8B%E5%BA%8F%E6%8E%A5%E5%85%A5.html)