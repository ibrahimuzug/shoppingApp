const categories =
  [
    { id: 1, name: 'Otomobil', thumbnailImage: "https://images-platform.99static.com/yPb5r4t8jkDw_vnPoA1V7_gHmd8=/0x0:960x960/500x500/top/smart/99designs-contests-attachments/63/63177/attachment_63177849", },
    { id: 'home', name: 'Ev ve Yaşam', thumbnailImage: 'https://images-platform.99static.com/yPb5r4t8jkDw_vnPoA1V7_gHmd8=/0x0:960x960/500x500/top/smart/99designs-contests-attachments/63/63177/attachment_63177849' },
    { id: 'electronic', name: 'Elektronik', thumbnailImage: 'https://images-platform.99static.com/yPb5r4t8jkDw_vnPoA1V7_gHmd8=/0x0:960x960/500x500/top/smart/99designs-contests-attachments/63/63177/attachment_63177849' },
    { id: 'homeelectronic', name: 'Beyaz Eşya', thumbnailImage: 'https://images-platform.99static.com/yPb5r4t8jkDw_vnPoA1V7_gHmd8=/0x0:960x960/500x500/top/smart/99designs-contests-attachments/63/63177/attachment_63177849' },
    { id: 'clothes', name: 'Giyim', thumbnailImage: 'https://images-platform.99static.com/yPb5r4t8jkDw_vnPoA1V7_gHmd8=/0x0:960x960/500x500/top/smart/99designs-contests-attachments/63/63177/attachment_63177849' },
    { id: 'furniture', name: 'Mobilya', thumbnailImage: 'https://images-platform.99static.com/yPb5r4t8jkDw_vnPoA1V7_gHmd8=/0x0:960x960/500x500/top/smart/99designs-contests-attachments/63/63177/attachment_63177849' },
    { id: 'garden', name: 'Bahçe', thumbnailImage: 'https://images-platform.99static.com/yPb5r4t8jkDw_vnPoA1V7_gHmd8=/0x0:960x960/500x500/top/smart/99designs-contests-attachments/63/63177/attachment_63177849' },
    { id: 'construct', name: 'Yapı Market', thumbnailImage: 'https://images-platform.99static.com/yPb5r4t8jkDw_vnPoA1V7_gHmd8=/0x0:960x960/500x500/top/smart/99designs-contests-attachments/63/63177/attachment_63177849' },
    { id: 'carpet', name: 'Halı', thumbnailImage: 'https://images-platform.99static.com/yPb5r4t8jkDw_vnPoA1V7_gHmd8=/0x0:960x960/500x500/top/smart/99designs-contests-attachments/63/63177/attachment_63177849' },
    { id: 'office', name: 'Ofis Malzemeleri', thumbnailImage: 'https://images-platform.99static.com/yPb5r4t8jkDw_vnPoA1V7_gHmd8=/0x0:960x960/500x500/top/smart/99designs-contests-attachments/63/63177/attachment_63177849' },
    { id: 'sound', name: 'Tv-Ses', thumbnailImage: 'https://images-platform.99static.com/yPb5r4t8jkDw_vnPoA1V7_gHmd8=/0x0:960x960/500x500/top/smart/99designs-contests-attachments/63/63177/attachment_63177849' },
    { id: 'kitchen', name: 'Mutfak', thumbnailImage: 'https://images-platform.99static.com/yPb5r4t8jkDw_vnPoA1V7_gHmd8=/0x0:960x960/500x500/top/smart/99designs-contests-attachments/63/63177/attachment_63177849' },
    { id: 'zuccaciye', name: 'Züccaciye', thumbnailImage: 'https://images-platform.99static.com/yPb5r4t8jkDw_vnPoA1V7_gHmd8=/0x0:960x960/500x500/top/smart/99designs-contests-attachments/63/63177/attachment_63177849' },
    { id: 'bags', name: 'Çanta Ve Bavul', thumbnailImage: 'https://images-platform.99static.com/yPb5r4t8jkDw_vnPoA1V7_gHmd8=/0x0:960x960/500x500/top/smart/99designs-contests-attachments/63/63177/attachment_63177849' },

    { id: 'glasses', name: 'Gözlük', thumbnailImage: 'https://images-platform.99static.com/yPb5r4t8jkDw_vnPoA1V7_gHmd8=/0x0:960x960/500x500/top/smart/99designs-contests-attachments/63/63177/attachment_63177849' },
    { id: 'medical', name: 'İlaç', thumbnailImage: 'https://images-platform.99static.com/yPb5r4t8jkDw_vnPoA1V7_gHmd8=/0x0:960x960/500x500/top/smart/99designs-contests-attachments/63/63177/attachment_63177849' },
    { id: 'care', name: 'Kişisel Bakım', thumbnailImage: 'https://images-platform.99static.com/yPb5r4t8jkDw_vnPoA1V7_gHmd8=/0x0:960x960/500x500/top/smart/99designs-contests-attachments/63/63177/attachment_63177849' },
    { id: 'sound', name: 'Tv-Ses', thumbnailImage: 'https://images-platform.99static.com/yPb5r4t8jkDw_vnPoA1V7_gHmd8=/0x0:960x960/500x500/top/smart/99designs-contests-attachments/63/63177/attachment_63177849' },
    { id: 'kitchen', name: 'Mutfak', thumbnailImage: 'https://images-platform.99static.com/yPb5r4t8jkDw_vnPoA1V7_gHmd8=/0x0:960x960/500x500/top/smart/99designs-contests-attachments/63/63177/attachment_63177849' },
    { id: 'zuccaciye', name: 'Züccaciye', thumbnailImage: 'https://images-platform.99static.com/yPb5r4t8jkDw_vnPoA1V7_gHmd8=/0x0:960x960/500x500/top/smart/99designs-contests-attachments/63/63177/attachment_63177849' },
    { id: 'bags', name: 'Çanta Ve Bavul', thumbnailImage: 'https://images-platform.99static.com/yPb5r4t8jkDw_vnPoA1V7_gHmd8=/0x0:960x960/500x500/top/smart/99designs-contests-attachments/63/63177/attachment_63177849' }
  ];

const cartItems = [
  { id: 1, name: 'Lorem Ipsum Dolor', thumbnailImage: "https://i5.walmartimages.com/asr/a3922e8e-2128-4603-ba8c-b58d1333253b_1.44d66337098c1db8fed9abe2ff4b57ce.jpeg?odnHeight=100&odnWidth=100&odnBg=FFFFFF", qty: 1, description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 2, name: 'Lorem Ipsum Dolor', thumbnailImage: "https://i5.walmartimages.com/asr/a3922e8e-2128-4603-ba8c-b58d1333253b_1.44d66337098c1db8fed9abe2ff4b57ce.jpeg?odnHeight=100&odnWidth=100&odnBg=FFFFFF", qty: 1, description: ' All Good Stuff Is In Our Stock Come And See', price: 1985 },
  { id: 3, name: 'Lorem Ipsum Dolor', thumbnailImage: "https://i5.walmartimages.com/asr/a3922e8e-2128-4603-ba8c-b58d1333253b_1.44d66337098c1db8fed9abe2ff4b57ce.jpeg?odnHeight=100&odnWidth=100&odnBg=FFFFFF", qty: 1, description: ' All Good Stuff Is In Our Stock Come And See', price: 255.15 },
  { id: 4, name: 'Lorem Ipsum Dolor', thumbnailImage: "https://i5.walmartimages.com/asr/b442f6e7-c5e1-4387-9cd9-9205811d4980_1.82b94d1c11dd12a6697bc517219f331e.jpeg?odnHeight=100&odnWidth=100&odnBg=FFFFFF", qty: 1, description: ' All Good Stuff Is In Our Stock Come And See', price: 500 },
  { id: 5, name: 'Lorem Ipsum Dolor', thumbnailImage: "https://i5.walmartimages.com/asr/b442f6e7-c5e1-4387-9cd9-9205811d4980_1.82b94d1c11dd12a6697bc517219f331e.jpeg?odnHeight=100&odnWidth=100&odnBg=FFFFFF", qty: 1, description: ' All Good Stuff Is In Our Stock Come And See', price: 112 },
  { id: 6, name: 'Lorem Ipsum Dolor', thumbnailImage: "https://i5.walmartimages.com/asr/b442f6e7-c5e1-4387-9cd9-9205811d4980_1.82b94d1c11dd12a6697bc517219f331e.jpeg?odnHeight=100&odnWidth=100&odnBg=FFFFFF", qty: 1, description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
];

const allProducts = [
  { id: 1, name: 'Lorem Ipsum Dolor', thumbnailImage: "https://i5.walmartimages.com/asr/b442f6e7-c5e1-4387-9cd9-9205811d4980_1.82b94d1c11dd12a6697bc517219f331e.jpeg?odnHeight=100&odnWidth=100&odnBg=FFFFFF", qty: 1, description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 2, name: 'Lorem Ipsum Dolor', thumbnailImage: "https://i5.walmartimages.com/asr/a3922e8e-2128-4603-ba8c-b58d1333253b_1.44d66337098c1db8fed9abe2ff4b57ce.jpeg?odnHeight=100&odnWidth=100&odnBg=FFFFFF", qty: 1, description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 3, name: 'Lorem Ipsum Dolor', thumbnailImage: "https://i5.walmartimages.com/asr/a3922e8e-2128-4603-ba8c-b58d1333253b_1.44d66337098c1db8fed9abe2ff4b57ce.jpeg?odnHeight=100&odnWidth=100&odnBg=FFFFFF", qty: 1, description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 4, name: 'Lorem Ipsum Dolor', thumbnailImage: "https://i5.walmartimages.com/asr/a3922e8e-2128-4603-ba8c-b58d1333253b_1.44d66337098c1db8fed9abe2ff4b57ce.jpeg?odnHeight=100&odnWidth=100&odnBg=FFFFFF", qty: 1, description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 5, name: 'Lorem Ipsum Dolor', thumbnailImage: "https://i5.walmartimages.com/asr/a3922e8e-2128-4603-ba8c-b58d1333253b_1.44d66337098c1db8fed9abe2ff4b57ce.jpeg?odnHeight=100&odnWidth=100&odnBg=FFFFFF", qty: 1, description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 6, name: 'Lorem Ipsum Dolor', thumbnailImage: "https://i5.walmartimages.com/asr/a3922e8e-2128-4603-ba8c-b58d1333253b_1.44d66337098c1db8fed9abe2ff4b57ce.jpeg?odnHeight=100&odnWidth=100&odnBg=FFFFFF", qty: 1, description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 7, name: 'Lorem Ipsum Dolor', thumbnailImage: "https://i5.walmartimages.com/asr/a3922e8e-2128-4603-ba8c-b58d1333253b_1.44d66337098c1db8fed9abe2ff4b57ce.jpeg?odnHeight=100&odnWidth=100&odnBg=FFFFFF", qty: 1, description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 8, name: 'Lorem Ipsum Dolor', thumbnailImage: "https://i5.walmartimages.com/asr/a3922e8e-2128-4603-ba8c-b58d1333253b_1.44d66337098c1db8fed9abe2ff4b57ce.jpeg?odnHeight=100&odnWidth=100&odnBg=FFFFFF", qty: 1, description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 9, name: 'Lorem Ipsum Dolor', thumbnailImage: "https://i5.walmartimages.com/asr/a3922e8e-2128-4603-ba8c-b58d1333253b_1.44d66337098c1db8fed9abe2ff4b57ce.jpeg?odnHeight=100&odnWidth=100&odnBg=FFFFFF", qty: 1, description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 10, name: 'Lorem Ipsum Dolor', thumbnailImage: "https://i5.walmartimages.com/asr/a3922e8e-2128-4603-ba8c-b58d1333253b_1.44d66337098c1db8fed9abe2ff4b57ce.jpeg?odnHeight=100&odnWidth=100&odnBg=FFFFFF", qty: 1, description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 11, name: 'Lorem Ipsum Dolor', thumbnailImage: "https://i5.walmartimages.com/asr/a3922e8e-2128-4603-ba8c-b58d1333253b_1.44d66337098c1db8fed9abe2ff4b57ce.jpeg?odnHeight=100&odnWidth=100&odnBg=FFFFFF", qty: 1, description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 12, name: 'Lorem Ipsum Dolor', thumbnailImage: "https://i5.walmartimages.com/asr/a3922e8e-2128-4603-ba8c-b58d1333253b_1.44d66337098c1db8fed9abe2ff4b57ce.jpeg?odnHeight=100&odnWidth=100&odnBg=FFFFFF", qty: 1, description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 13, name: 'Lorem Ipsum Dolor', thumbnailImage: "https://i5.walmartimages.com/asr/a3922e8e-2128-4603-ba8c-b58d1333253b_1.44d66337098c1db8fed9abe2ff4b57ce.jpeg?odnHeight=100&odnWidth=100&odnBg=FFFFFF", qty: 1, description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 14, name: 'Lorem Ipsum Dolor', thumbnailImage: "https://i5.walmartimages.com/asr/a3922e8e-2128-4603-ba8c-b58d1333253b_1.44d66337098c1db8fed9abe2ff4b57ce.jpeg?odnHeight=100&odnWidth=100&odnBg=FFFFFF", qty: 1, description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 15, name: 'Lorem Ipsum Dolor', thumbnailImage: "https://i5.walmartimages.com/asr/a3922e8e-2128-4603-ba8c-b58d1333253b_1.44d66337098c1db8fed9abe2ff4b57ce.jpeg?odnHeight=100&odnWidth=100&odnBg=FFFFFF", qty: 1, description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 16, name: 'Lorem Ipsum Dolor', thumbnailImage: "https://i5.walmartimages.com/asr/a3922e8e-2128-4603-ba8c-b58d1333253b_1.44d66337098c1db8fed9abe2ff4b57ce.jpeg?odnHeight=100&odnWidth=100&odnBg=FFFFFF", qty: 1, description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 17, name: 'Lorem Ipsum Dolor', thumbnailImage: "https://i5.walmartimages.com/asr/a3922e8e-2128-4603-ba8c-b58d1333253b_1.44d66337098c1db8fed9abe2ff4b57ce.jpeg?odnHeight=100&odnWidth=100&odnBg=FFFFFF", qty: 1, description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 18, name: 'Lorem Ipsum Dolor', thumbnailImage: "https://i5.walmartimages.com/asr/a3922e8e-2128-4603-ba8c-b58d1333253b_1.44d66337098c1db8fed9abe2ff4b57ce.jpeg?odnHeight=100&odnWidth=100&odnBg=FFFFFF", qty: 1, description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 19, name: 'Lorem Ipsum Dolor', thumbnailImage: "https://i5.walmartimages.com/asr/a3922e8e-2128-4603-ba8c-b58d1333253b_1.44d66337098c1db8fed9abe2ff4b57ce.jpeg?odnHeight=100&odnWidth=100&odnBg=FFFFFF", qty: 1, description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 20, name: 'Lorem Ipsum Dolor', thumbnailImage: "https://i5.walmartimages.com/asr/a3922e8e-2128-4603-ba8c-b58d1333253b_1.44d66337098c1db8fed9abe2ff4b57ce.jpeg?odnHeight=100&odnWidth=100&odnBg=FFFFFF", qty: 1, description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 21, name: 'Lorem Ipsum Dolor', thumbnailImage: "https://i5.walmartimages.com/asr/a3922e8e-2128-4603-ba8c-b58d1333253b_1.44d66337098c1db8fed9abe2ff4b57ce.jpeg?odnHeight=100&odnWidth=100&odnBg=FFFFFF", qty: 1, description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 22, name: 'Lorem Ipsum Dolor', thumbnailImage: "https://i5.walmartimages.com/asr/a3922e8e-2128-4603-ba8c-b58d1333253b_1.44d66337098c1db8fed9abe2ff4b57ce.jpeg?odnHeight=100&odnWidth=100&odnBg=FFFFFF", qty: 1, description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 23, name: 'Lorem Ipsum Dolor', thumbnailImage: "https://i5.walmartimages.com/asr/a3922e8e-2128-4603-ba8c-b58d1333253b_1.44d66337098c1db8fed9abe2ff4b57ce.jpeg?odnHeight=100&odnWidth=100&odnBg=FFFFFF", qty: 1, description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 24, name: 'Lorem Ipsum Dolor', thumbnailImage: "https://i5.walmartimages.com/asr/a3922e8e-2128-4603-ba8c-b58d1333253b_1.44d66337098c1db8fed9abe2ff4b57ce.jpeg?odnHeight=100&odnWidth=100&odnBg=FFFFFF", qty: 1, description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 25, name: 'Lorem Ipsum Dolor', thumbnailImage: "https://i5.walmartimages.com/asr/a3922e8e-2128-4603-ba8c-b58d1333253b_1.44d66337098c1db8fed9abe2ff4b57ce.jpeg?odnHeight=100&odnWidth=100&odnBg=FFFFFF", qty: 1, description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 26, name: 'Lorem Ipsum Dolor', thumbnailImage: "https://i5.walmartimages.com/asr/a3922e8e-2128-4603-ba8c-b58d1333253b_1.44d66337098c1db8fed9abe2ff4b57ce.jpeg?odnHeight=100&odnWidth=100&odnBg=FFFFFF", qty: 1, description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 27, name: 'Lorem Ipsum Dolor', thumbnailImage: "https://i5.walmartimages.com/asr/a3922e8e-2128-4603-ba8c-b58d1333253b_1.44d66337098c1db8fed9abe2ff4b57ce.jpeg?odnHeight=100&odnWidth=100&odnBg=FFFFFF", qty: 1, description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 28, name: 'Lorem Ipsum Dolor', thumbnailImage: "https://i5.walmartimages.com/asr/a3922e8e-2128-4603-ba8c-b58d1333253b_1.44d66337098c1db8fed9abe2ff4b57ce.jpeg?odnHeight=100&odnWidth=100&odnBg=FFFFFF", qty: 1, description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 29, name: 'Lorem Ipsum Dolor', thumbnailImage: "https://i5.walmartimages.com/asr/a3922e8e-2128-4603-ba8c-b58d1333253b_1.44d66337098c1db8fed9abe2ff4b57ce.jpeg?odnHeight=100&odnWidth=100&odnBg=FFFFFF", qty: 1, description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 30, name: 'Lorem Ipsum Dolor', thumbnailImage: "https://i5.walmartimages.com/asr/a3922e8e-2128-4603-ba8c-b58d1333253b_1.44d66337098c1db8fed9abe2ff4b57ce.jpeg?odnHeight=100&odnWidth=100&odnBg=FFFFFF", qty: 1, description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 31, name: 'Lorem Ipsum Dolor', thumbnailImage: "https://i5.walmartimages.com/asr/a3922e8e-2128-4603-ba8c-b58d1333253b_1.44d66337098c1db8fed9abe2ff4b57ce.jpeg?odnHeight=100&odnWidth=100&odnBg=FFFFFF", qty: 1, description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 32, name: 'Lorem Ipsum Dolor', thumbnailImage: "https://i5.walmartimages.com/asr/a3922e8e-2128-4603-ba8c-b58d1333253b_1.44d66337098c1db8fed9abe2ff4b57ce.jpeg?odnHeight=100&odnWidth=100&odnBg=FFFFFF", qty: 1, description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 33, name: 'Lorem Ipsum Dolor', thumbnailImage: "https://i5.walmartimages.com/asr/a3922e8e-2128-4603-ba8c-b58d1333253b_1.44d66337098c1db8fed9abe2ff4b57ce.jpeg?odnHeight=100&odnWidth=100&odnBg=FFFFFF", qty: 1, description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 34, name: 'Lorem Ipsum Dolor', thumbnailImage: "https://i5.walmartimages.com/asr/a3922e8e-2128-4603-ba8c-b58d1333253b_1.44d66337098c1db8fed9abe2ff4b57ce.jpeg?odnHeight=100&odnWidth=100&odnBg=FFFFFF", qty: 1, description: ' All Good Stuff Is In Our Stock Come And See', price: 199 }
];

const bags = [
  { id: 1, name: 'Lorem Ipsum Dolor', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 2, name: 'Lorem Ipsum Dolor', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 3, name: 'Lorem Ipsum Dolor', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 4, name: 'Lorem Ipsum Dolor', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 5, name: 'Lorem Ipsum Dolor', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 6, name: 'Lorem Ipsum Dolor', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 7, name: 'Lorem Ipsum Dolor', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
];
const zuccaciye = [
  { id: 1, name: 'Lorem Ipsum Dolor', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 2, name: 'Lorem Ipsum Dolor', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 3, name: 'Lorem Ipsum Dolor', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 4, name: 'Lorem Ipsum Dolor', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 5, name: 'Lorem Ipsum Dolor', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 6, name: 'Lorem Ipsum Dolor', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 7, name: 'Lorem Ipsum Dolor', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
];
const kitchen = [
  { id: 1, name: 'Lorem Ipsum Dolor', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 2, name: 'Lorem Ipsum Dolor', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 3, name: 'Lorem Ipsum Dolor', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 4, name: 'Lorem Ipsum Dolor', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 5, name: 'Lorem Ipsum Dolor', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 6, name: 'Lorem Ipsum Dolor', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 7, name: 'Lorem Ipsum Dolor', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
];
const sound = [
  { id: 1, name: 'Lorem Ipsum Dolor', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 2, name: 'Lorem Ipsum Dolor', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 3, name: 'Lorem Ipsum Dolor', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 4, name: 'Lorem Ipsum Dolor', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 5, name: 'Lorem Ipsum Dolor', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 6, name: 'Lorem Ipsum Dolor', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 7, name: 'Lorem Ipsum Dolor', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
];
const office = [
  { id: 1, name: 'Lorem Ipsum Dolor', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 2, name: 'Lorem Ipsum Dolor', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 3, name: 'Lorem Ipsum Dolor', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 4, name: 'Lorem Ipsum Dolor', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 5, name: 'Lorem Ipsum Dolor', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 6, name: 'Lorem Ipsum Dolor', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 7, name: 'Lorem Ipsum Dolor', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
];
const carpet = [
  { id: 1, name: 'Lorem Ipsum Dolor', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 2, name: 'Lorem Ipsum Dolor', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 3, name: 'Lorem Ipsum Dolor', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 4, name: 'Lorem Ipsum Dolor', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 5, name: 'Lorem Ipsum Dolor', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 6, name: 'Lorem Ipsum Dolor', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 7, name: 'Lorem Ipsum Dolor', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
];

const construct = [
  { id: 1, name: 'Lorem Ipsum Dolor', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 2, name: 'Lorem Ipsum Dolor', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 3, name: 'Lorem Ipsum Dolor', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 4, name: 'Lorem Ipsum Dolor', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 5, name: 'Lorem Ipsum Dolor', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 6, name: 'Lorem Ipsum Dolor', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 7, name: 'Lorem Ipsum Dolor', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
];

const garden = [
  { id: 1, name: 'Lorem Ipsum Dolor', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 2, name: 'Lorem Ipsum Dolor', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 3, name: 'Lorem Ipsum Dolor', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 4, name: 'Lorem Ipsum Dolor', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 5, name: 'Lorem Ipsum Dolor', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 6, name: 'Lorem Ipsum Dolor', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 7, name: 'Lorem Ipsum Dolor', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },

];

const furniture = [
  { id: 1, name: 'Lorem Ipsum Dolor', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 2, name: 'Lorem Ipsum Dolor', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 3, name: 'Lorem Ipsum Dolor', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 4, name: 'Lorem Ipsum Dolor', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 5, name: 'Lorem Ipsum Dolor', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 6, name: 'Lorem Ipsum Dolor', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 7, name: 'Lorem Ipsum Dolor', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
];

const clothes = [
  { id: 1, name: 'Lorem Ipsum Dolor', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 2, name: 'Lorem Ipsum Dolor', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 3, name: 'Lorem Ipsum Dolor', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 4, name: 'Lorem Ipsum Dolor', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 5, name: 'Lorem Ipsum Dolor', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 6, name: 'Lorem Ipsum Dolor', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 7, name: 'Lorem Ipsum Dolor', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
];

const homeelectronic = [
  { id: 1, name: 'Lorem Ipsum Dolor', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 2, name: 'Lorem Ipsum Dolor', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 3, name: 'Lorem Ipsum Dolor', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 4, name: 'Lorem Ipsum Dolor', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 5, name: 'Lorem Ipsum Dolor', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 6, name: 'Lorem Ipsum Dolor', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 7, name: 'Lorem Ipsum Dolor', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },

];

const electronic = [
  { id: 1, name: 'Lorem Ipsum Dolor', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 2, name: 'Lorem Ipsum Dolor', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 3, name: 'Lorem Ipsum Dolor', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 4, name: 'Lorem Ipsum Dolor', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 5, name: 'Lorem Ipsum Dolor', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 6, name: 'Lorem Ipsum Dolor', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 7, name: 'Lorem Ipsum Dolor', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
];

const home = [
  { id: 1, name: 'Lorem Ipsum Dolor', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 2, name: 'Lorem Ipsum Dolor', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 3, name: 'Lorem Ipsum Dolor', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 4, name: 'Lorem Ipsum Dolor', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 5, name: 'Lorem Ipsum Dolor', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 6, name: 'Lorem Ipsum Dolor', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 7, name: 'Lorem Ipsum Dolor', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
];

const car = [

  { id: 1, name: 'Lorem Ipsum Dolor', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 2, name: 'Lorem Ipsum Dolor', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 3, name: 'Lorem Ipsum Dolor', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 4, name: 'Lorem Ipsum Dolor', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 5, name: 'Lorem Ipsum Dolor', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 6, name: 'Lorem Ipsum Dolor', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 7, name: 'Lorem Ipsum Dolor', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
];

export {
  categories,
  car,
  home,
  electronic,
  homeelectronic,
  clothes,
  furniture,
  garden,
  construct,
  carpet,
  office,
  sound,
  kitchen,
  zuccaciye,
  bags,
  allProducts,
  cartItems

}