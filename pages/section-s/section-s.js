Page({

  /**
   * 页面的初始数据
   */
  data: {
    cTitle: '',
    itemId: 0,
    index: '',
    storage: '我是storage结果'
  },
  onPullDownRefresh() {//监听下拉刷新
    // Do something when pull down.
  },
  /**
   * 方法
   */
  //点击按钮
  default() {
    wx.switchTab({
      url: '../home/home',
    })
  },
  showtoast() {
    wx.showToast({
      title: '啦啦成功拉埃',
      icon: 'success',
      duration: 2000,
    })
  },
  showmodal() {
    wx.showModal({
      title: '提示',
      content: '这是一个模态弹窗',
      confirmText: "啦啦",
      success(res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
  showloading() {
    wx.showLoading({
      title: '加载中',
    })

    setTimeout(function () {
      wx.hideLoading()
    }, 2000)
  },
  showactionsheet() {
    wx.showActionSheet({
      itemList: ['A', 'B', 'C'],
      success(res) {
        console.log(res.tapIndex)
      },
      fail(res) {
        console.log(res.errMsg)
      }
    })
  },
  showNavLoading() {
    wx.showNavigationBarLoading()
  },
  setNavTitle() {
    wx.setNavigationBarTitle({
      title: '当前页面'
    })
  },
  setNavColor() {
    wx.setNavigationBarColor({
      frontColor: '#ffffff',
      backgroundColor: '#ff0000',
      animation: {
        duration: 400,
        timingFunc: 'easeIn'
      }
    })
  },
  setBgStyle() {
    wx.setBackgroundTextStyle({
      textStyle: 'dark' // 下拉背景字体、loading 图的样式为dark
    })
  },
  setBgColor() {
    wx.setBackgroundColor({
      backgroundColor: "#fccccc",
      backgroundColorTop: 'red', // 顶部窗口的背景色为red---仅ios支持
      backgroundColorBottom: 'green', // 底部窗口的背景色为green---仅ios支持
    })
  },
  showRedDot() {
    wx.showTabBarRedDot({
      index: 0
    })
  },
  startPullDown() {
    this.setBgStyle()
    this.setBgColor()
    wx.startPullDownRefresh()

  },
  stopPullDown() {
    wx.stopPullDownRefresh()
  },
  setstorage() {
    wx.setStorage({
      key: 'key1',
      data: 'value1'
    })
  },
  getstorage() {
    let _this = this
    wx.getStorage({
      key: 'key1',
      success(res) {
        console.log(res.data)
        console.log(res)
        _this.setData({
          storage: 'get成功！返回的res为：' + JSON.stringify(res)
        })
      },
      fail(res) {
        console.log(res)
        _this.setData({
          storage: 'get失败！返回的res为：' + JSON.stringify(res)
        })
      }
    })
  },
  removestorage() {
    let _this = this
    wx.removeStorage({
      key: 'key1',
      success(res) {
        console.log(res.data)
        _this.setData({
          storage: 'remove成功！返回的res为：' + JSON.stringify(res)
        })
      }
    })
  },
  chooseImage1() {
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success(res) {
        // tempFilePath可以作为img标签的src属性显示图片
        const tempFilePaths = res.tempFilePaths
      }
    })
  },
  chooseImage2() {
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album'],
      success(res) {
        // tempFilePath可以作为img标签的src属性显示图片
        const tempFilePaths = res.tempFilePaths
      }
    })
  },

  chooseImage3() {
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['camera'],
      success(res) {
        // tempFilePath可以作为img标签的src属性显示图片
        const tempFilePaths = res.tempFilePaths
      }
    })
  },
  savefile() {
    wx.chooseImage({
      success(res) {
        console.log(res)
        const tempFilePaths = res.tempFilePaths
        wx.saveFile({
          tempFilePath: tempFilePaths[0],
          success(res) {
            const savedFilePath = res.savedFilePath
          }
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // let id = options.id.charAt(1);
    let id = options.id.substring(1)
    let _this = this
    this.setData({
      cTitle: options.title,
      itemId: id,
      index: options.section,
    })


  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})