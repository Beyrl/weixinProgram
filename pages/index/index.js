
Page({
  /** 
   * 页面的初始数据 
   */
  data: {
    isActive: null,
    listMain:
      [
        {
          id: "1", region: "A",
          items: [
            { id: "..", name: "阿明" },
            { id: "..", name: "奥特曼" },
            { id: "..", name: "安庆" },
            { id: "..", name: "阿曼" }
          ]
        },
        {
          id: "2", region: "B",
          items: [
            { id: "..", name: "爸爸" },
            { id: "..", name: "北京" }
          ]
        },
        {
          id: "3", region: "C",
          items: [
            { id: "..", name: "阿明" },
            { id: "..", name: "奥特曼" },
            { id: "..", name: "安庆" },
            { id: "..", name: "阿曼" }
          ]
        },
        {
          id: "4", region: "D",
          items: [
            { id: "..", name: "爸爸" },
            { id: "..", name: "北京" }
          ]
        },
        {
          id: "5", region: "E",
          items: [
            { id: "..", name: "阿明" },
            { id: "..", name: "奥特曼" },
            { id: "..", name: "安庆" },
            { id: "..", name: "阿曼" }
          ]
        },
        {
          id: "6", region: "F",
          items: [
            { id: "..", name: "爸爸" },
            { id: "..", name: "北京" }
          ]
        },
      ],
    listTitles: [],
    fixedTitle: null,
    toView: 'inToView0',
    oHeight: [],
    scroolHeight: 0
  },
  //点击右侧字母导航定位触发
  scrollToViewFn: function (e) {
    var that = this;
    var _id = e.target.dataset.id;
    for (var i = 0; i < that.data.listMain.length; ++i) {
      if (that.data.listMain[i].id === _id) {
        that.setData({
          isActive: _id,
          toView: 'inToView' + _id
        })
        break
      }
    }
  },
  toBottom: function (e) {
    console.log(e)
  },
  // 页面滑动时触发
  onPageScroll: function (e) {
    this.setData({
      scroolHeight: e.detail.scrollTop
    });
    for (let i in this.data.oHeight) {
      if (e.detail.scrollTop < this.data.oHeight[i].height) {
        this.setData({
          isActive: this.data.oHeight[i].key,
          fixedTitle: this.data.oHeight[i].name
        });
        return false;
      }
    }

  },
  // 处理数据格式，及获取分组高度
  getBrands: function () {
    var that = this;
          //赋值给当前高亮的isActive
          that.setData({
            isActive: that.data.listMain[0].id,
            fixedTitle: that.data.listMain[0].region
          });

          //计算分组高度,wx.createSelectotQuery()获取节点信息
          var number = 0;
          for (let i = 0; i < that.data.listMain.length; ++i) {
            wx.createSelectorQuery().select('#inToView' + that.data.listMain[i].id).boundingClientRect(function (rect) {
              number = rect.height + number;
              var newArry = [{ 'height': number, 'key': rect.dataset.id, "name": that.data.listMain[i].region }]
              console.log(newArry)
              that.setData({
                oHeight: that.data.oHeight.concat(newArry)
              })

            }).exec();
          };
  },
  onLoad: function (options) {
    var that = this;
    that.getBrands();


  }
})