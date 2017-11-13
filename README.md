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
// 初始化,这是示例代码，应用的接入代码请到官网每个应用对应的“应用管理”进行拷贝
mta.App.init({
    "appID":"500013092",
    "eventID":"500015824", // 高级功能-自定义事件统计ID，配置开通后在初始化处填写
    "lauchOpts":options, //渠道分析,需在onLaunch方法传入options,如onLaunch:function(options){...}
    "statPullDownFresh":true, // 使用分析-下拉刷新次数/人数，必须先开通自定义事件，并配置了合法的eventID
    "statShareApp":true, // 使用分析-分享次数/人数，必须先开通自定义事件，并配置了合法的eventID
    "statReachBottom":true // 使用分析-页面触底次数/人数，必须先开通自定义事件，并配置了合法的eventID
});

// 页面初始化
mta.Page.init();

// 自定义事件上报
mta.Event.stat("ico_search", {"query":"特斯拉"});

```


更多文档说明，参考[官方文档](http://docs.developer.qq.com/mta/fast_access/wechat.html)
