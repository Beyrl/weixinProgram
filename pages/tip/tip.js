// pages/tip/tip.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    animationData: {},
    tiplist:[
      {
        itemId:1,
        title:"JSON配置",
        child:[
          {
            id:"a",
            desc:"1"
          },
          {
            id: "b",
            desc: "2"
          },
          {
            id: "c",
            desc: "3"
          }
        ]
      },
      {
        itemId: 2,
        title: "WXML模板",
        child: [
          {
            desc: "4"
          },
          {
            desc: "5"
          },
          {
            desc: "6"
          }
        ]
      },
      {
        itemId: 3,
        title: "WXSS样式",
        child: [
          {
            desc: "7"
          },
          {
            desc: "8"
          },
          {
            desc: "9"
          }
        ]
      }
    ]
  },
  showChildList(){
    Animation.height(auto)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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