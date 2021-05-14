import React,{} from 'react';
import axios from 'axios';
import * as CONSTANT from './constant';

/**
 * 
 * @param {string} param 
 * @description Http get call using axios
 */
export const get = async (param) => {
    try {
        const res = await axios.get(CONSTANT.URL + param, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        return res;
    } catch (error) {
        return error.response;
    }
}