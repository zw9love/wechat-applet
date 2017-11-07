//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    // motto: '北京欢迎你',
    // userInfo: {},
    // hasUserInfo: false,
    // canIUse: wx.canIUse('button.open-type.getUserInfo'
    loveData: [
      {
        src: '../../assets/img/eat1.png',
        title: '美食美食1',
        info: '100元代金券一张，可叠加',
        price: '70',
        index: '100',
        sellNum: '4666'
      },
      {
        src: '../../assets/img/eat2.png',
        title: '美食美食2',
        info: '101元代金券一张，可叠加',
        price: '70',
        index: '100',
        sellNum: '4777'
      },
      {
        src: '../../assets/img/eat3.png',
        title: '美食美食3',
        info: '102元代金券一张，可叠加',
        price: '70',
        index: '100',
        sellNum: '4888'
      },
      {
        src: '../../assets/img/eat4.png',
        title: '美食美食4',
        info: '103元代金券一张，可叠加',
        price: '70',
        index: '100',
        sellNum: '4999'
      },
      {
        src: '../../assets/img/eat5.png',
        title: '美食美食5',
        info: '104元代金券一张，可叠加',
        price: '70',
        index: '100',
        sellNum: '5099',
        needOrder: true
      },
      {
        src: '../../assets/img/eat6.png',
        title: '美食美食6',
        info: '105元代金券一张，可叠加',
        price: '70',
        index: '100',
        sellNum: '5199'
      },
      {
        src: '../../assets/img/eat7.png',
        title: '美食美食7',
        info: '106元代金券一张，可叠加',
        price: '70',
        index: '100',
        sellNum: '5399',
        needOrder: true
      },
      {
        src: '../../assets/img/eat8.png',
        title: '美食美食8',
        info: '666元代金券一张，可叠加',
        price: '66',
        index: '100',
        sellNum: '5599'
      },
      {
        src: '../../assets/img/eat9.png',
        title: '美食美食9',
        info: '777元代金券一张，可叠加',
        price: '77',
        index: '100',
        sellNum: '5699'
      },
      {
        src: '../../assets/img/eat10.png',
        title: '美食美食10',
        info: '888元代金券一张，可叠加',
        price: '88',
        index: '100',
        sellNum: '5899'
      }
    ],
    carouselData: [
      [
        { src: '../../assets/img/zlam.png', name: '足疗按摩' },
        { src: '../../assets/img/gw.png', name: '购物' },
        { src: '../../assets/img/jrxd.png', name: '今日新单' },
        { src: '../../assets/img/xckc.png', name: '小吃快餐' },
        { src: '../../assets/img/shfw.png', name: '生活服务' },
        { src: '../../assets/img/tdyp.png', name: '甜点饮品' },
        { src: '../../assets/img/mj.png', name: '美甲' },
        { src: '../../assets/img/jdmp.png', name: '景点门票' },
        { src: '../../assets/img/ly.png', name: '旅游' },
        { src: '../../assets/img/qbfl.png', name: '全部分类' },
      ],
      [
        { src: '../../assets/img/zlam.png', name: '足疗按摩' },
        { src: '../../assets/img/gw.png', name: '购物' },
        { src: '../../assets/img/jrxd.png', name: '今日新单' },
        { src: '../../assets/img/xckc.png', name: '小吃快餐' },
        { src: '../../assets/img/shfw.png', name: '生活服务' },
      ]
    ],
    indicatorDots: true,
    autoplay: false,
    interval: 5000,
    duration: 1000,
    screenWidth: 0,
    screenHeight: 0
  },
  changeIndicatorDots: function (e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function (e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function (e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function (e) {
    this.setData({
      duration: e.detail.value
    })
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      src: '../logs/logs'
    })
  },
  onLoad: function () {
    wx.getSystemInfo({
      success: ({ screenWidth, screenHeight }) => {
        // let { screenWidth, screenHeight } = res
        this.setData({
          screenWidth: screenWidth,
          screenHeight: screenHeight
        })
      }
    })
  },
  getUserInfo: function(e) {
    app.globalData.userInfo = e.detail.userInfo
    // this.setData({
    //   userInfo: e.detail.userInfo,
    //   hasUserInfo: true
    // })
  },
  onShareAppMessage(){
    return {
      title: '我的首页',
      path: '/page/user?id=123'
    }
  }
})
