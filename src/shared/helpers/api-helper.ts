import axios from 'axios';
import { BaseConfig } from '../../configs/baseConfig';

export const api = axios.create({
  baseURL: BaseConfig.baseApiUrl,
});
