import vfetch from '@/config/fetch';
import vs from '@/config/storage';

export const getTopics = ( tab ) => vfetch('/topics', 'GET', {
    page: 1,
    tab: tab,
    limit: 30,
    mdrender: 'true'
})

export const getTopic = (id) => vfetch('/topic/'+id, 'GET', {})

export const postReplies = (id, data, accesstoken) => vfetch('/topic/'+id+'/replies', 'POST', {
    accesstoken: accesstoken,
    content: content,
    reply_id: id,
})

export const checkUser = (token) => vfetch('/accesstoken', 'POST', {
  accesstoken: token
})

export const getUserCollect = (name) => vfetch('/topic_collect/'+name, 'GET', {})

export const getUser = (loginname) => vfetch('/user/'+loginname, 'GET', {})

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