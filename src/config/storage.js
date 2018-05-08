const CACHE_NAME = 'vcnode-item';
const SESSION_NAME = 'SESSION_STORAGE';
const VC_STORAGE = window.localStorage;
const VC_SESSION_STORAGE = window.sessionStorage;

export default {
    init (){
        VC_STORAGE.setItem(CACHE_NAME,'{"SESSION_STORAGE": "false"}');
        VC_SESSION_STORAGE.setItem(CACHE_NAME,'{}');
    },
    get (key){
        let sessionData = VC_STORAGE.getItem(CACHE_NAME);
        if(!sessionData){
            this.init();
            sessionData = VC_STORAGE.getItem(CACHE_NAME);
        }
        let isSession = JSON.parse(sessionData)['SESSION_NAME'];
        let getData = isSession ? VC_SESSION_STORAGE.getItem(CACHE_NAME) : VC_STORAGE.getItem(CACHE_NAME);
        if(!getData) {
            return false;
        }else {
            return JSON.parse(getData)[key];
        }
    },
    set (key, value, isSession){
        var setData = isSession ? VC_SESSION_STORAGE.getItem(CACHE_NAME) : VC_STORAGE.getItem(CACHE_NAME);
        if(!setData){
            this.init();
            setData = VC_STORAGE.getItem(CACHE_NAME);
        }
        setData = JSON.parse(setData);
        setData[key] = value;
        if (isSession) {
            VC_SESSION_STORAGE.setItem(CACHE_NAME,JSON.stringify(setData));
        }else {
            VC_STORAGE.setItem(CACHE_NAME,JSON.stringify(setData));
        }
        return setData;
    },
    remove (key, isSession){
        try {
            var delData = isSession ? VC_SESSION_STORAGE.getItem(CACHE_NAME) : VC_STORAGE.getItem(CACHE_NAME);
            delData = JSON.parse(delData);
            delete delData.data[key];
            if (isSession) {
                VC_SESSION_STORAGE.setItem(CACHE_NAME, JSON.stringify(delData));
            }else {
                VC_STORAGE.setItem(CACHE_NAME, JSON.stringify(delData));
            }
            return "success";
        } catch (error) {
            console.log(error);
            return "error";
        }
    },
    clear (isSession){
        if (isSession) {
            VC_SESSION_STORAGE.removeItem(CACHE_NAME);
        }else {
            VC_STORAGE.removeItem(CACHE_NAME);
        }
    }
}