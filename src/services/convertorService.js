import axios from 'axios';
import Configurations from './../environment/config';

class ConvertorService {
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

export default new ConvertorService();