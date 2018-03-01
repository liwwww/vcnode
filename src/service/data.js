import vfetch from '../config/fetch';

export const getTopic = () => vfetch('/topics', 'GET', {
    page: 1,
    tab: 'good',
    limit: 4,
    mdrender: false
})