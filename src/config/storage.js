export default  vs = {
    size: 18, //默认队列数量最大值
    defaultexpire: 1800, //默认有效期，30分钟（单位：秒）
    getCache: function () {
        var jsonStr = window.localStorage ? window.localStorage.getItem('myCacheQueue') : '';
        return jsonStr ? JSON.parse(jsonStr) : [];
    },
    get: function (key) {
        var queue = this.getCache();
        for (var i = 0; i < queue.length; i++) {
            if (queue[i].key == key && queue[i].lasttime > (new Date()).getTime()) {
                var re = queue[i];
                queue.splice(i, 1);
                re.times += 1; //访问次数加一
                re.lasttime = (new Date()).getTime() + re.expire * 1000;//自动延长过期时间
                queue.push(re); //确保项的顺序跟最后访问时间一致
                window.localStorage.setItem('myCacheQueue', JSON.stringify(queue));
                return re.value;
            }
        }
        return null;
    },
    set: function (key, value, expire) {//expire：单位为秒的整数，为负表示永不过期，为零表示删除
        if (!key || !value || !window.localStorage) return false;
        var queue = getCache();
        if (queue.length > this.size) { // 队列满的情况下，移除上次访问时间最早的项
            queue.splice(0, 1);
        }
        for (var i = 0; i < queue.length; i++) {
            if (queue[i].key == key) {//如果已经存在，则删除
                queue.splice(i, 1);
            }
        }
        if (expire != 0) {
            var time = !expire ? this.defaultexpire: expire < 0 ? 9999999999999 : expire;
            queue.push({ "key": key, "value": value, "times": 0, "expire": time, "lasttime": (new Date()).getTime() + time * 1000 });
            window.localStorage.setItem('myCacheQueue', JSON.stringify(queue));
        }
    }
}