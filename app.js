// app.js
App({
  // 启动的时候， 生命周期
  onLaunch() {
    // this
    // 任何 page onLoad 更早 
    wx.request({
      // json 还是数据交换的格式
      url: 'https://resources.ninghao.net/wxapp-case/db.json',
      success: (response) => {
        const { slides, stories, vehicles } = response.data
        // this?
        // console.log(slides, stories, vehicles);
        this.globalData.slides = slides
        this.globalData.stories = stories;
        this.globalData.vehicles = vehicles;
      }
    })

    wx.getSystemInfo({
      success: res => {
        let menuButtonObject = 
          wx.getMenuButtonBoundingClientRect();
        // console.log(menuButtonObject);
        let statusBarHeight = res.statusBarHeight;
        // console.log(statusBarHeight);
        let navHeight = statusBarHeight 
          + menuButtonObject.height
          + (menuButtonObject.top - statusBarHeight) * 2;
        console.log(navHeight);
        let navTop = menuButtonObject.top;
        console.log(navTop)
        let windowHeight = res.windowHeight;
        Object.assign(this.globalData, {
          navHeight,
          navTop,
          windowHeight,
          menuButtonObject
        })
      }
    })
  },
  // 全局数据
  globalData: {
    navHeight: 0,
    navTop: 0,
    windowHeight: 0,
    menuButtonObject: null,
    slides:null,
    stories: null,
    vehicles: null
  }
})
