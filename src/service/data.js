import vfetch from '@/config/fetch';
import vs from '@/config/storage';

export const getTopics = ( tab ) => vfetch('/topics', 'GET', {
    page: 1,
    tab: tab,
    limit: 30,
    mdrender: 'true'
})

export const getTopic = (id) => vfetch('/topic/'+id, 'GET', {})

export const createTopic = (accesstoken, title, tab, content) => vfetch('/topics', 'POST', {
  accesstoken: accesstoken,
  title: title,
  tab: tab,
  content: content
})

export const createReplies = (id, data, accesstoken) => vfetch('/topic/'+id+'/replies', 'POST', {
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
          release: false,
          tab: 'all'
        },
        {
          name: '精华',
          release: false,
          tab: 'good'
        },
        {
          name: '问答',
          release: true,
          tab: 'ask'
        },
        {
          name: '招聘',
          release: true,
          tab: 'job'
        },
        {
          name: '分享',
          release: true,
          tab: 'share'
        },
        {
          name: '测试',
          release: true,
          tab: 'dev'
        }
      ]

//export const getTest = () => vfetch('http://39.108.179.185/category/querySuperiorData', 'GET', {
//})