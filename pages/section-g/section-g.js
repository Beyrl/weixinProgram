Page({

  /**
   * 页面的初始数据
   */
  data: {
    cTitle: '',
    itemId: 0,
    index: '',
    bWidth: '',
    bHeight: '',
    bTop: '',
    bRight: '',
    bBottom: '',
    bLeft: '',
    storage: '获取storage',
    location: {},
    filepath: '',
    fileinfo: {}

  },
  // 方法
  consoleText() {
    let returnObj = wx.getMenuButtonBoundingClientRect()
    this.setData({
      bWidth: returnObj.width,
      bHeight: returnObj.height,
      bTop: returnObj.top,
      bRight: returnObj.right,
      bBottom: returnObj.bottom,
      bLeft: returnObj.left
    })
  },
  getstorage() {
    let _this = this
    wx.getStorage({
      key: 'key',
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
  getlocation() {
    let _this = this
    wx.getLocation({
      type: 'wgs84',
      success(res) {
        console.log(res)
        _this.setData({
          location: res
        })
      }
    })
  },
  getsavedfilelist() {
    let _this = this
    wx.getSavedFileList({
      success(res) {
        console.log(res.fileList[0])
        console.log(res.fileList[0].filePath)
        _this.setData({
          filepath: res.fileList[0].filePath
        })
        console.log(_this)
      }
    })
  },
  getsavedfileinfo() {
    let _this = this
    console.log(_this.filepath)
    wx.getSavedFileList({
      success(res) {
        _this.setData({
          filepath: res.fileList[0].filePath
        })
        console.log(_this)
        console.log(_this.data.filepath)
        wx.getSavedFileInfo({
          filePath: _this.data.filepath,
          success(res) {
            _this.setData({
              fileinfo: 'get成功！返回的res为：' + JSON.stringify(res)
            })
          }
        })
      }
    })

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let id = options.id.charAt(1);
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