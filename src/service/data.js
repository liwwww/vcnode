import vfetch from '../config/fetch';

export const getTopics = (tab = '') => vfetch('/topics', 'GET', {
    page: 1,
    tab,
    limit: 10,
    mdrender: 'false'
})

//export const getTest = () => vfetch('http://39.108.179.185/category/querySuperiorData', 'GET', {
//})