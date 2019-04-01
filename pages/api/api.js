Page({

  /**
   * 页面的初始数据
   */
  data: {
    selected: "A",// 当前选择的导航字母
    scrollIntoView: 'A',// 选择字母视图滚动的位置id
    animationData: {},
    oHeight: [],
    letters:['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T',
      'U', 'V', 'W', 'X', 'Y', 'Z'],
    ApiItems:[{
      itemName:"A",
      items: [
        {
          id:"A1",
          title: "clearInterval",
          name: "取消定时器",
          url: "",
        }
      ],
    },
    { itemName: "B",
      items: [{
        title: "wx.reLaunch",
        name: "取消定时器",
        url: "",
      }],
    },
    { itemName: "C",
      items: [
        {
          id: "C1",
          title: "clearInterval",
          name: "取消定时器",
        }, 
        {
          id: "C2",
          title: "clearTimeout",
          name: "取消定时器",
        }],
    },
    { itemName: "D",
      items: [
      {
        title: "wx.showNavigationBarLoading",
        name: "取消定时器",
        url: "",
      }],
    }, 
    { itemName: "E",
      items: [
      {
        title: "wx.setNavigationBarTitle",
        name: "取消定时器",
        url: "",
      }],
    }, 
    { itemName: "F",
      items: [
      {
        title: "wx.setNavigationBarTitle",
        name: "取消定时器",
        url: "",
      }],
    }, 
    { itemName: "G",
      items: [
      {
        id: "G1",
        title: "wx.getMenuButtonBoundingClientRect",
        name: "获取菜单按钮（右上角胶囊按钮）的布局位置信息。坐标信息以屏幕左上角为原点。"
      }],
    }, 
    { itemName: "H",
      items: [
      {
        id:"H1",
        title: "wx.hideToast",
        name: "隐藏消息提示框",
      },
      {
      id: "H2",
      title: "wx.hideLoading",
      name: "隐藏 loading 提示框",
      },
      {
        id: "H3",
        title: "wx.hideNavigationBarLoading",
        name: "在当前页面隐藏导航条加载动画",
      }],
    }, 
    { itemName: "I",
      items: [
      {
        title: "wx.setNavigationBarTitle",
        name: "取消定时器",
        url: "",
      }],
    }, 
    { itemName: "J",
      items: [
      {
        title: "wx.showNavigationBarLoading",
        name: "取消定时器",
        url: "",
      },
      {
        title: "wx.setNavigationBarTitle",
        name: "取消定时器",
        url: "",
      },
      {
        title: "wx.setNavigationBarColor",
        name: "取消定时器",
        url: "",
      }],
    }, 
    { itemName: "K",
      items: [
      {
        title: "wx.showNavigationBarLoading",
        name: "取消定时器",
        url: "",
      },
      {
        title: "wx.setNavigationBarTitle",
        name: "取消定时器",
        url: "",
      },
      {
        title: "wx.setNavigationBarColor",
        name: "取消定时器",
        url: "",
      }],
    }, 
    { itemName: "L",
      items: [
      {
        title: "wx.showNavigationBarLoading",
        name: "取消定时器",
        url: "",
      },
      {
        title: "wx.setNavigationBarTitle",
        name: "取消定时器",
        url: "",
      },
      {
        title: "wx.setNavigationBarColor",
        name: "取消定时器",
        url: "",
      }],
    }, 
    { itemName: "M",
      items: [
      {
        title: "wx.showNavigationBarLoading",
        name: "取消定时器",
        url: "",
      }],
    }, 
    { itemName: "N",
      items: [
        {
          id:"N1",
          title: "wx.navigateTo",
          name: "保留当前页面，跳转到应用内的某个页面。"
        },
        {
          id: "N2",
          title: "wx.navigateBack",
          name: "关闭当前页面，返回上一页面或多级页面。可通过 getCurrentPages 获取当前的页面栈，决定需要返回几层。"
        },
        {
          id: "N3",
          title: "wx.nextTick????",
          name: "延迟一部分操作到下一个时间片再执行。（类似于 setTimeout）"
        }
      ],
    }, 
    { itemName: "O",
      items: [
      {
        id:"O1",
        title: "wx.onWindowResize",
        name: "监听窗口尺寸变化事件",
      },
      {
        id: "O2",
        title: "wx.offWindowResize",
        name: "取消监听窗口尺寸变化事件",
      },
      ],
    }, 
    { itemName: "P",
      items: [
      {
        id: "P1",
        title: "wx.pageScrollTo",
        name: "将页面滚动到目标位置"
      }],
    },
    {
      itemName: "Q",
      items: [
      {
        title: "wx.showNavigationBarLoading",
        name: "取消定时器",
        url: "",
      }],
    },
    {
      itemName: "R",
      items: [
      {
        id:"R1",
        title: "wx.reLaunch",
        name: "关闭所有页面，打开到应用内的某个页面",
      }, 
      {
        id: "R2",
        title: "wx.redirectTo",
        name: "关闭当前页面，跳转到应用内的某个页面。但是不允许跳转到 tabbar 页面。",
      }
      ],
    },
    {
      itemName: "S",
      items: [
      {
        id:"S1",
        title: "wx.switchTab",
        name: "跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面",
      }, 
      {
        id: "S2",
        title: "wx.showToast",
        name: "显示消息提示框",
      }, 
      {
        id: "S3",
        title: "wx.showModal",
        name: "显示模态对话框",
      }, 
      {
        id: "S4",
        title: "wx.showLoading",
        name: "显示 loading 提示框。需主动调用 wx.hideLoading 才能关闭提示框",
      },
      {
        id: "S5",
        title: "wx.showActionSheet",
        name: "显示操作菜单",
      },
      {
        id:"S6",
        title:"wx.showNavigationBarLoading",
        name: "在当前页面显示导航条加载动画",
      },
      {
        id: "S7",
        title: "wx.setNavigationBarTitle",
        name: "动态设置当前页面的标题"
      },
      {
        id: "S8",
        title: "wx.setNavigationBarColor",
        name: "设置页面导航条颜色"
      },
      {
        id: "S9",
        title: "wx.setBackgroundTextStyle",
        name: "动态设置下拉背景字体、loading 图的样式"
      },
      {
        id: "S10",
        title: "wx.setBackgroundColor",
        name: "动态设置窗口的背景色"
      },
      {
        id: "S11",
        title: "wx.showTabBarRedDot",
        name: "显示 tabBar 某一项的右上角的红点"
      },
      {
        id: "S12",
        title: "wx.showTabBar",
        name: "显示 tabBar"
      },
      {
        id: "S13",
        title: "wx.setTabBarStyle",
        name: "动态设置 tabBar 的整体样式"
      },
      {
        id: "S14",
        title: "wx.setTabBarItem",
        name: "动态设置 tabBar 某一项的内容"
      },
      {
        id: "S15",
        title: "wx.setTabBarBadge",
        name: "为 tabBar 某一项的右上角添加文本"
      },
      {
        id: "S16",
        title: "wx.startPullDownRefresh",
        name: "开始下拉刷新。调用后触发下拉刷新动画，效果与用户手动下拉刷新一致。"
      },
      ]
    }]
  },
  /**
   * 方法
   */
  //
  turnPage(e){
    let index = e.currentTarget.dataset.index
    let id = e.currentTarget.dataset.id
    let title = e.currentTarget.dataset.title
    let lowerCase = index.toLowerCase()
    console.log(index)
    console.log(id)
    console.log(title)
    wx.navigateTo({
      url: '../section-' + lowerCase + '/section-' + lowerCase +'?section=' + index + '&id='+ id + '&title='+ title,
    })
    
  },
  //
  scrollPage(e){
    for (let i in this.data.oHeight) {
      if (e.detail.scrollTop <= this.data.oHeight[i].height) {
        this.setData({
          selected: this.data.oHeight[i].key
        });
        return false;
      }
    }
  },
  //计算高度
  calcHeight(){
    let number = 0
    for (let i in this.data.ApiItems) {
      let self = this
      let newArray = []
      wx.createSelectorQuery().select('#' + self.data.ApiItems[i].itemName).
      boundingClientRect(function (rect) {
        number = rect.height + number;
        newArray = [{'height': number, 'key': rect.id}]
        self.setData({
          oHeight: self.data.oHeight.concat(newArray)
        })
      }).exec();
    }
  },
  //提示显示隐藏动画
  attentionShow() {
    const animation = wx.createAnimation({
      duration: 1000,
      timingFunction: 'linear',
    })

    this.animation = animation

    animation.top(0).step()
    animation.opacity(0).step({ delay: 3000,duration:2000 })

    this.setData({
      animationData: animation.export()
    })

  }, 
  // 清除字母选中状态
  cleanAcitvedStatus() {
      this.setData({
        selected: 0
      })
  },
  //右侧触摸栏触摸效果
  touchmove(e) {
    const x = e.touches[0].clientX,
          y = e.touches[0].clientY,
          lettersPosition = this.data.lettersPosition,
          eachLetterHeight = this.data.eachLetterHeight,
          letters = this.data.letters;
    // 判断触摸点是否在字母导航栏上
    if (x >= lettersPosition[0][0]) {
      for (let i = 0, len = lettersPosition.length; i < len; i++) {
        // 判断落在哪个字母区域，取出对应字母所在数组的索引，根据索引更新selected及scroll-into-view的值
        const letterMiny = lettersPosition[i][1], // 单个字母所处高度
          letterMaxy = letterMiny + eachLetterHeight; // 单个字母最大高度取值范围， 50为字母高50rpx
        if (y >= letterMiny && y <= letterMaxy) {
          this.setData({
            selected: letters[i],
            scrollIntoView: letters[i]
          });
          break;
        }
      }
    }
  },
  touchend(e) {
    this.cleanAcitvedStatus();
  },
  tabLetter(e) {
    const index = e.currentTarget.dataset.index;
    this.setData({
      selected: index,
      scrollIntoView: index
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const res = wx.getSystemInfoSync(),
          letters = this.data.letters;
    // 设备信息
    this.setData({
      windowHeight: res.windowHeight,
      windowWidth: res.windowWidth,
      pixelRatio: res.pixelRatio
    });
    // 第一个字母距离顶部高度，单位使用的是rpx,须除以pixelRatio，才能与touch事件中的数值相加减，css中定义nav高度为94%，所以 *0.94
    const navHeight = this.data.windowHeight * 0.90, // 
          eachLetterHeight = navHeight / 26,
          comTop = (this.data.windowHeight - navHeight) / 2,
          temp = [];

    this.setData({
      eachLetterHeight: eachLetterHeight
    });

    // 求各字母距离设备左上角所处位置

    for (let i = 0, len = letters.length; i < len; i++) {
      const x = this.data.windowWidth - (10 + 34) / this.data.pixelRatio,
        y = comTop + (i * eachLetterHeight);
      temp.push([x, y]);
    }
    this.setData({
      lettersPosition: temp
    })

    this.calcHeight();
    //
    wx.setTabBarItem({
      index: 0,
      text: 'text'
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.attentionShow()
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    wx.removeTabBarBadge({
      index: 1
    })
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