/**
 * 配置参考：https://wechat-miniprogram.github.io/kbone/docs/config/
 */
const path = require('path')
module.exports = {
    origin: 'https://test.miniprogram.com',
    entry: '/RoleSelection',
    router: {
        home: [
            '/RoleSelection',
            '/DriverBind',
            '/CarrierBind',
            '/SuccessBind',
            '/CarrierOrder',
            '/CarrierOrder/:id',
        ],
    },
    pages:{
        home: {
		    pullDownRefresh: true,
		},
    },
    redirect: {
        notFound: 'home',
        accessDenied: 'home',
        home: '/RoleSelection'
    },
    generate: {
        autoBuildNpm: 'npm',
    },
    app: {
        backgroundTextStyle: 'dark',  //下拉 loading 的样式，仅支持 dark / light
		navigationBarBackgroundColor: "#13489D", //导航栏背景颜色
        navigationBarTextStyle: 'white', //导航栏标题颜色
        navigationBarTitleText: '万华',
    },
	appExtraConfig: {
        sitemapLocation: 'sitemap.json',
	},
    global: {
        share: true,
        windowScroll: false,
        backgroundColor: '#F2F2F2',
        rem:true
    },
    optimization: {
		domSubTreeLevel: 10,

		elementMultiplexing: true,
		textMultiplexing: true,
		commentMultiplexing: true,
		domExtendMultiplexing: true,

		styleValueReduce: 5000,
		attrValueReduce: 5000,
	},
    projectConfig: {
        projectname: 'vue',
        appid: 'wx6d905f4bd0eebb20',
    },
}
