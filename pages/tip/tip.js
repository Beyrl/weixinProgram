// pages/tip/tip.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    state: '',
    num:0,
    slideList:[],
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
          },
          {
            id: "d",
            desc: "4"
          },
          {
            id: "e",
            desc: "5"
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
    ],
    animationList: [],
  },
  //点击item
  showChildList(e){
    let index = e.currentTarget.dataset.id
    let slide = e.currentTarget.dataset.slide
    let slideVal = !this.data.slideList[index]
    this.setData({
      ['slideList[' + index + ']']: slideVal,
    })
    //计算高度
    let heightCal = this.data.tiplist[index-1].child.length
    let heightNumShow = (80 * heightCal + 140) / 750 * wx.getSystemInfoSync().windowWidth;
    let heightNumHide = 140 / 750 * wx.getSystemInfoSync().windowWidth;
    if (this.data.slideList[index]){//如果slide是true
      this.animationShow(index, heightNumShow)
      this.setData({
        num:index
      })
    }else{
      this.animationShow(index, heightNumHide)
      this.setData({
        num: 0
      })
    }
  },
  animationShow(num,heightCalc){
    let animationList = this.data.animationList.slice()
    let groupConHei = (80 * heightCalc + 140) / 750 * wx.getSystemInfoSync().windowWidth;
    const animation = wx.createAnimation({
      duration: 500,
      timingFunction: 'linear',
    })
    animation.height(heightCalc).step()
    animationList[num] = animation.export()
    this.setData({
      animationList: animationList
    })
  },
  createAni(){
    return wx.createAnimation({
      duration: 1000,
      timingFunction: '"linear"'
    })
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
    let animationArr = []
    let slideArr = []
    let listLength = this.data.tiplist.length
    for (var i = 0; i <= listLength; i++) {
      animationArr.push(this.createAni())
      slideArr[i] = false
    }
    this.setData({
      animationList: animationArr,
      slideList: slideArr
    })
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