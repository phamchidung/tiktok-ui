import axios from 'axios';

const request = axios.create({
    baseURL: 'https://tiktok.fullstack.edu.vn/api/',
});

// Hàm có async ở đầu sẽ trả về 1 promise
// async cho phép sử dụng await
// await đợi 1 promise trả kết quả về
export const get = async (uri, options = {}) => {
    const response = await request.get(uri, options);
    return response.data;
};

export default request;
