import axios from 'axios';

const httpRequest = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
});

// Hàm có async ở đầu sẽ trả về 1 promise
// async cho phép sử dụng await
// await đợi 1 promise trả kết quả về
export const get = async (uri, options = {}) => {
    const response = await httpRequest.get(uri, options);
    return response.data;
};

export default httpRequest;
