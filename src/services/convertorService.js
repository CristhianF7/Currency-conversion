import axios from 'axios';
import Configurations from './../environment/config';

export default class ConvertorService {
    getFormats() {
        return axios.get(`${Configurations.apiConvertUrl}latest`);
    }

    getValue (base, symbols) {
        return axios.get(`${Configurations.apiConvertUrl}latest`,
            {
                params: {
                    base,
                    symbols
                }
            });
    }
}