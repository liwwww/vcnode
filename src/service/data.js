import vfetch from '@/config/fetch';
import vs from '@/config/storage';

export const getTopics = ( tab, page ) => vfetch('/topics', 'GET', {
    page: page || 1,
    tab: tab,
    limit: 15,
    mdrender: 'true'
})

export const getTopic = (id) => vfetch('/topic/'+id, 'GET', {})

export const createTopic = (accesstoken, title, tab, content) => vfetch('/topics', 'POST', {
  accesstoken: accesstoken,
  title: title,
  tab: tab,
  content: content
})

export const createReplies = (topic_id, id, content, accesstoken) => vfetch('/topic/'+topic_id+'/replies', 'POST', {
    accesstoken: accesstoken,
    content: content,
    reply_id: id,
})

export const checkUser = (token) => vfetch('/accesstoken', 'POST', {
  accesstoken: token
})

export const getUserCollect = (name) => vfetch('/topic_collect/'+name, 'GET', {})

export const upsReply = (reply_id, accesstoken) => vfetch('/reply/'+reply_id+'/ups', 'POST', {
  accesstoken: accesstoken
})

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