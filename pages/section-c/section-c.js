var timer = null
var isClick = false
Page({
  /**
   * 页面的初始数据
   */
  data: {
    cTitle:'',
    itemId:0,
    index:'',
    cDay:'00',
    cHour:'00',
    cMinute:'00',
    cSecond:'00',
    textInner:'点击暂停倒计时'
  },
  /**
   * 方法
   */
  //暂停倒计时
  default(){
    let _this =  this
    isClick = !isClick
    if (isClick){
      clearInterval(timer)
      this.setData({
        textInner: '点击开启倒计时'
      })
    }else{
      setInterval(function () {
        _this.TimeDown("2020/1/1 00:00:00");
      }, 1000)
      this.setData({
        textInner: '点击暂停倒计时'
      })
    }
  },
  //倒计时的方法
  TimeDown(endDateStr) {
    //结束时间
    let endDate = new Date(endDateStr);
    
    //当前时间
    let nowDate = new Date();
    //相差的总秒数
    let totalSeconds = parseInt((endDate - nowDate) / 1000);
    //天数
    let days = Math.floor(totalSeconds / (60 * 60 * 24));
    //取模（余数）
    let modulo = totalSeconds % (60 * 60 * 24);
    //小时数
    let hours = Math.floor(modulo / (60 * 60));
        modulo = modulo % (60 * 60);
    //分钟
    let minutes = Math.floor(modulo / 60);
    //秒
    let seconds = modulo % 60;

    this.setData({
      cDay: days,
      cHour: hours,
      cMinute: minutes,
      cSecond: seconds
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
    //延迟一秒执行自己
    timer = setInterval(function () {
      _this.TimeDown("2020/1/1 00:00:00");
    }, 1000)
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