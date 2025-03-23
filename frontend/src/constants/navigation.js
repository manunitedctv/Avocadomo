export const NAVIGATION_ITEMS = [
    {
        id: 'video',
        label: 'Học qua video',
        path: '/video'
    },
    {
        id: 'virtual-class',
        label: 'Phòng học ảo',
        path: '/virtual-class'
    },
    {
        id: 'exam',
        label: 'Luyện thi online',
        path: '/exam'
    }
];

export const FOOTER_LINKS = {
    about: {
        title: 'Về chúng tôi',
        description: 'Avocadomo - Nền tảng học tiếng Nhật trực tuyến hàng đầu',
        links: []
    },
    blogs: {
        title: 'Blogs',
        links: [
            { label: 'Tin tức', path: '/news' },
            { label: 'Hướng dẫn học', path: '/guides' },
            { label: 'Văn hóa Nhật', path: '/culture' }
        ]
    },
    faq: {
        title: 'FAQ',
        links: [
            { label: 'Câu hỏi thường gặp', path: '/faq' },
            { label: 'Liên hệ hỗ trợ', path: '/support' }
        ]
    },
    legal: {
        title: 'Điều khoản & Chính sách',
        links: [
            { label: 'Điều khoản sử dụng', path: '/terms' },
            { label: 'Chính sách bảo mật', path: '/privacy' }
        ]
    }
};