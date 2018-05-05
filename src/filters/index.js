const formatTime = (timeStr) => {
    if (!timeStr) return ''
    let time = new Date(timeStr)
    let timeDate = new Date().getTime() - time.getTime()
    if (timeDate < 0) {
      return ''
    } else if ((timeDate / 1000 < 30)) {
      return '刚刚'
    } else if (timeDate / 1000 < 60) {
      return ~~(timeDate / 1000) + '秒前'
    } else if ((timeDate / 60000) < 60) {
      return ~~(timeDate / 60000) + '分钟前'
    } else if ((timeDate / 3600000) < 24) {
      return ~~(timeDate / 3600000) + '小时前'
    } else if ((timeDate / 86400000) < 31) {
      return ~~(timeDate / 86400000) + '天前'
    } else if ((timeDate / 2592000000) < 12) {
      return ~~(timeDate / 2592000000) + '月前'
    } else {
      return ~~(timeDate / 31536000000) + '年前'
    }
  }

export { formatTime }