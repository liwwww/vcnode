import vfetch from '../config/fetch';

export const getTopics = ( tab ) => vfetch('/topics', 'GET', {
    page: 1,
    tab: tab,
    limit: 30,
    mdrender: 'true'
})

export const getTopic = (id) => vfetch('/topic/'+id, 'GET', {
    mdrender: 'true'
})

export const postReplies = (id, data, accesstoken) => vfetch('/topic/'+id+'/replies', 'POST', {
    accesstoken: accesstoken,
    content: content,
    reply_id: id,
})

export const getUser = () => window.localStorage.getItem('vcnode_user')

export const getTab = () => 
     [
        {
          name: '全部',
          page: '',
          tab: 'all'
        },
        {
          name: '精华',
          page: 'index/good',
          tab: 'good'
        },
        {
          name: '问答',
          page: 'index/ask',
          tab: 'ask'
        },
        {
          name: '分享',
          page: 'index/share',
          tab: 'share'
        },
        {
          name: '测试',
          page: 'index/dev',
          tab: 'dev'
        }
      ]

//export const getTest = () => vfetch('http://39.108.179.185/category/querySuperiorData', 'GET', {
//})