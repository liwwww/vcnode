require('es6-promise').polyfill();
require('isomorphic-fetch');

const api = ''; //https://cnodejs.org/api/v1
export default async function vfetch(url, method, data) {
    url = api + url;    //请求地址拼接
    method = method.toUpperCase();

    let config = {  
        method: method,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        cache: 'no-cache',
        mode: 'cors'    //跨域
    }

    if (method === 'GET') {
        let str = '';
        Object.keys(data).forEach(key => {
            str += key + '=' + data[key] + '&';
        })

        if (str !== '') {
            str = str.substr(0, str.lastIndexOf('&'));
            url = url + '?' + str;
        }
    }

    if (method === 'POST') {
        Object.defineProperty(config, 'body', {
            value: JSON.stringify(data)
        })
    }

    try {
        const response = await fetch(url, config);
        const responseJson = await response.json();

        return responseJson;
    } catch (err) {
        throw new Error(err)
    }
}