import vfetch from '../config/fetch';

export const getTopics = () => vfetch('/topics', 'GET', {
    page: 1,
    tab: 'good',
    limit: 4,
    mdrender: false
})