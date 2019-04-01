Page({

  /**
   * 页面的初始数据
   */
  data: {
    cTitle: '',
    itemId: 0,
    index: '',
    bWidth:'',
    bHeight:'',
    bTop:'',
    bRight:'',
    bBottom:'',
    bLeft:'',
  },
  // 方法
  consoleText(){
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