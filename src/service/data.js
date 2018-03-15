import vfetch from '../config/fetch';

export const getTopics = (tab = '') => vfetch('/topics', 'GET', {
    page: 1,
    tab,
    limit: 30,
    mdrender: 'true'
})

export const getTopic = (id) => vfetch('/topic/'+id, 'GET', {
    mdrender: 'true'
})

//export const getTest = () => vfetch('http://39.108.179.185/category/querySuperiorData', 'GET', {
//})