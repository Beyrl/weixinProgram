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
            desc:"JSON的Key必须包裹在一个双引号中"
          },
          {
            id: "b",
            desc: "JSON的值只能是以下几种数据格式"
          },
          {
            id: "c",
            desc: "JSON 文件中无法使用注释"
          }
        ]
      },
      {
        itemId: 2,
        title: "WXML模板",
        child: [
          {
            desc: "属性值必须被包裹在双引号中"
          },
          {
            desc: "变量名是大小写敏感的"
          },
          {
            desc: "没有被定义的变量或被设置为undefined 的变量不会被同步到 wxml 中"
          },
          {
            desc: "使用 'wx:if' 来判断是否需要渲染该代码块,使用 wx:elif 和 wx:else 来添加一个 else 块："
          },
          {
            desc: "使用 wx:for 控制属性绑定一个数组,默认数组的当前项的下标变量名默认为 index，数组当前项的变量名默认为 item"
          },
          {
            desc: "使用 wx:for-item 指定数组当前元素的变量名，使用 wx:for-index 指定数组当前下标的变量名："
          },
          {
            desc: "wx:key 来指定列表中项目的唯一的标识符。??"
          },
          {
            desc: "WXML提供模板（template），可以在模板中定义代码片段，然后在不同的地方调用。"
          },
          {
            desc: "两种文件引用方式import和include。"
          }
        ]
      },
      {
        itemId: 3,
        title: "WXSS样式",
        child: [
          {
            desc: "rpx与px的换算"
          },
          {
            desc: "WXSS的引用"
          },
          {
            desc: "WXSS 选择器优先级权重"
          },
          {
            desc: "WeUI.wxss基础样式库。"
          }
        ]
      },
      {
        itemId: 4,
        title: "JavaScript 脚本",
        child: [
          {
            desc: "将JavaScript文件作为一个模块，通过module.exports 或者 exports 对外暴露接口。"
          },
          {
            desc: "脚本执行顺序"
          },
          {
            desc: "小程序的脚本的作用域同 NodeJS 更为相似"
          }
        ]
      },
      {
        itemId: 5,
        title: "小程序宿主环境",
        child: [
          {
            desc: "渲染层和逻辑层"
          },
          {
            desc: "程序与页面"
          },
          {
            desc: "事件"
          },
          {
            desc: "兼容"
          },
        ]
      },
      {
        itemId: 6,
        title: "场景应用",
        child: [
          {
            desc: "开发流程基本介绍"
          },
          {
            desc: "界面常见的交互反馈"
          },
          {
            desc: "发起HTTPS网络通信"
          },
          {
            desc: "微信登录"
          },
          {
            desc: "本地数据缓存"
          },
          {
            desc: "设备能力"
          },
        ]
      },
      {
        itemId: 7,
        title: "小程序的协同工作和发布",
        child: [
          {
            desc: "协同工作"
          },
          {
            desc: "发布"
          },
          {
            desc: "运营"
          }
        ]
      },
      {
        itemId: 8,
        title: "底层框架",
        child: [
          {
            desc: "双线程模型"
          },
          {
            desc: "组件系统"
          },
          {
            desc: "原生组件"
          },
          {
            desc: "小程序与客户端通信原理"
          }
        ]
      },
      {
        itemId: 9,
        title: "性能优化",
        child: [
          {
            desc: " 启动"
          },
          {
            desc: "页面层级准备"
          },
          {
            desc: "数据通信"
          },
          {
            desc: "视图层渲染"
          },
          {
            desc: "原生组件通信"
          }
        ]
      },
      {
        itemId: 10,
        title: "小程序基础库的更新迭代",
        child: [
          {
            desc: " 小程序基础库"
          },
          {
            desc: "异常"
          },
          {
            desc: "基础库的更新"
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
  navigateToPage(e){
    console.log(e)
    let id=e.target.id,//第几个item下的第几条（从0开始）
        index = e.target.dataset.index,//第几个item（从1开始）
        desc = e.target.dataset.desc
    wx.navigateTo({
      url: '../tip-'+ index +'/tip-'+ index +'?id=' + id + '&desc='+ desc,
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