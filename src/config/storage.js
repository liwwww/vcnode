const CACHE_NAME = 'vcnode-item';
const VC_STORAGE = window.localStorage;

export default {
    init (){
        VC_STORAGE.setItem(CACHE_NAME,'{}');
    },
    get (key){
        let getData = VC_STORAGE.getItem(CACHE_NAME);
        if(!getData) {
            return false;
        }else {
            return JSON.parse(getData)[key];
        }
    },
    set (key, value){
        var setData = VC_STORAGE.getItem(CACHE_NAME);
        if(!setData){
            this.init();
            setData = VC_STORAGE.getItem(CACHE_NAME);
        }
        setData = JSON.parse(setData);
        setData[key] = value;
        VC_STORAGE.setItem(CACHE_NAME,JSON.stringify(setData));
        return setData;
    },
    remove (key){
        try {
            var delData = VC_STORAGE.getItem(CACHE_NAME);
            delData = JSON.parse(delData);
            delete delData.data[key];
            VC_STORAGE.setItem(CACHE_NAME, JSON.stringify(delData));
            return "success";
        } catch (error) {
            console.log(error);
            return "error";
        }
    },
    clear (){
        VC_STORAGE.removeItem(CACHE_NAME);
    }
}