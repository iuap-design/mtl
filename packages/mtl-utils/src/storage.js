import { AsyncStorage } from 'react-native';

/**
 * 获取存储的数据
 * @param {*} key 
 */
export const getItem = async (key) => {
    let item = await AsyncStorage.getItem(key);
    if (!item) {
        return null;
    }
    return JSON.parse(item).v || null;
}
/**
 * 存入数据
 * @param {*} key 
 * @param {*} value 
 */
export const setItem = (key, value) => AsyncStorage.setItem(key, JSON.stringify({
    v: value
}));

/**
 * 删除已经存在的数据
 * @param {*} key 
 */
export const removeItem = (key) => AsyncStorage.removeItem(key);

/**
 * 清除所有
 */
export const clear = () => AsyncStorage.clear();

/**
 * 获取所有的key
 */
export const getAllKeys = () => AsyncStorage.getAllKeys();