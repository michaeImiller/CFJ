// id, tên sách, tác giả, số lượng, nxb

import { v4 as uuidv4 } from 'uuid';

let data = [
    {
        id: uuidv4(),
        name: 'Mật mã Davince',
        author: 'Dan Brown',
        publisher: 'NXB Văn Hóa Thông Tin',
        amount: 5
    },
    {
        id: uuidv4(),
        name: 'Tôi tài giỏi, bạn cũng thế',
        author: 'Adam Khoo',
        publisher: 'NXB Trẻ',
        amount: 10
    },
    {
        id: uuidv4(),
        name: 'Cuộc đời tròn hay méo',
        author: 'Hoàng Minh Trí',
        publisher: 'NXB phụ nữ',
        amount: 20
    }
];

export default data;