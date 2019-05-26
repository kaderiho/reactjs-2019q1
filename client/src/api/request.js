import axios from 'axios';

const request = ({ url, method }) => axios[method](url);

export default request;
