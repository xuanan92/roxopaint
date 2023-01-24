import React, {useState} from 'react'
import PriceListTable from '../components/PriceListTable.jsx';
import TitleCenter from '../components/TitleCenter.jsx'
import Banner from '../components/Banner.jsx'
import Button from '../components/Button.jsx'

export default function ProductsPage() {
    const extproductsHead = [
      {
        name: 'SƠN NGOÀI TRỜI',
        tccs: 'TCCS 01:2021/ROXO',
        priceCan: '4kg',
        priceBucket: '20kg',
        coverage: ['Độ phủ',<br/>,'/kg/lớp'],
        note: 'Ghi chú',
      },
    ]
    const extproductsData = [
      {
        name: 'Roxo Alpha XQ - Bóng',
        description: 'Độ bền ngoài trời trên 22 năm',
        weightPriceCan: '1.730.000đ',
        weightPriceBucket: '7.700.000đ',
        paintCover:'18-20m',
        note:['Sử dụng tất cả màu trong bảng màu.',<br/>,'Sử dụng bột bả Okanva2 và tất cả sơn lót trừ Ext 262 và Ext 772.'],
      },
      {
        name: 'Roxo Extra E12 - Siêu Bóng',
        description: 'Độ bền ngoài trời trên 20 năm',
        weightPriceCan: '1.330.000đ',
        weightPriceBucket: '5.967.000đ',
        paintCover:'15-17m',
        note:['Sử dụng tất cả màu trong bảng màu.',<br/>,'Sử dụng bột bả Okanva2 và tất cả sơn lót trừ Ext 262 và Ext 772.'],
      },
      {
        name: 'Roxo Extra E8 - Bóng',
        description: 'Độ bền ngoài trời trên 20 năm',
        weightPriceCan: '1.310.000đ',
        weightPriceBucket: '5.859.000đ',
        paintCover:'15-17m',
        note:['Sử dụng tất cả màu trong bảng màu.',<br/>,'Sử dụng bột bả Okanva2 và tất cả sơn lót trừ Ext 262 và Ext 772.'],
      },
      {
        name: 'Roxo Extra E4 - Bán Bóng',
        description: 'Độ bền ngoài trời trên 20 năm',
        weightPriceCan: '1.260.000đ',
        weightPriceBucket: '5.724.000đ',
        paintCover:'14-16m',
        note:['Sử dụng tất cả màu trong bảng màu.',<br/>,'Sử dụng bột bả Okanva2 và tất cả sơn lót trừ Ext 262 và Ext 772.'],
      },
      {
        name: 'Roxo Ext 360 - Bóng',
        description: 'Độ bền ngoài trời trên 15 năm',
        weightPriceCan: '1.145.000đ',
        weightPriceBucket: '5.435.000đ',
        paintCover:'13-15m',
        note:['Sử dụng tất cả màu trong bảng màu.',<br/>,'Sử dụng bột bả Okanva2 và tất cả sơn lót trừ Ext 262 và Ext 772.'],
      },
      {
        name: 'Roxo Ext 330 - Bán Bóng',
        description: 'Độ bền ngoài trời trên 15 năm',
        weightPriceCan: '1.100.000đ',
        weightPriceBucket: '4.930.000đ',
        paintCover:'12,5-14,5m',
        note:['Sử dụng tất cả màu trong bảng màu.',<br/>,'Sử dụng bột bả Okanva2 và tất cả sơn lót trừ Ext 262 và Ext 772.'],
      },
      {
        name: 'Roxo Ultra U880 - Bóng',
        description: 'Độ bền ngoài trời trên 12 năm',
        weightPriceCan: '1.090.000đ',
        weightPriceBucket: '4.880.000đ',
        paintCover:'15-17m',
        note:['Sử dụng tất cả màu trong bảng màu.',<br/>,'Sử dụng bột bả Okanva2 và tất cả sơn lót trừ Ext 262 và Ext 772.'],
      },
      {
        name: 'Roxo Ultra U870 - Bán Bóng',
        description: 'Độ bền ngoài trời trên 12 năm',
        weightPriceCan: '1.060.000đ',
        weightPriceBucket: '4.660.000đ',
        paintCover:'14-16m',
        note:['Sử dụng tất cả màu trong bảng màu.',<br/>,'Sử dụng bột bả Okanva2 và tất cả sơn lót trừ Ext 262 và Ext 772.'],
      },
      {
        name: 'Roxo Shield S680 - Bóng',
        description: 'Độ bền ngoài trời trên 10 năm',
        weightPriceCan: '1.010.000đ',
        weightPriceBucket: '4.490.000đ',
        paintCover:'13-15m',
        note:['Sử dụng tất cả màu trong bảng màu.',<br/>,'Sử dụng bột bả Okanva2 và tất cả sơn lót trừ Ext 262 và Ext 772.'],
      },
      {
        name: 'Roxo Shield S670 - Bán Bóng',
        description: 'Độ bền ngoài trời trên 10 năm',
        weightPriceCan: '980.000đ',
        weightPriceBucket: '4.330.000đ',
        paintCover:'12,5-14,5m',
        note:['Sử dụng tất cả màu trong bảng màu.',<br/>,'Sử dụng bột bả Okanva2 và tất cả sơn lót trừ Ext 262 và Ext 772.'],
      },
      {
        name: 'Roxo Pro P280 - Bóng',
        description: 'Độ bền ngoài trời trên 08 năm',
        weightPriceCan: '905.000đ',
        weightPriceBucket: '3.980.000đ',
        paintCover:'9-11m',
        note:['Sử dụng tất cả màu trong bảng màu.',<br/>,'Sử dụng bột bả Okanva2 và tất cả sơn lót trừ Ext 262 và Ext 772.'],
      },
      {
        name: 'Roxo Pro P270 - Bán Bóng',
        description: 'Độ bền ngoài trời trên 08 năm',
        weightPriceCan: '876.000đ',
        weightPriceBucket: '3.845.000đ',
        paintCover:'8,5-10,5m',
        note:['Sử dụng tất cả màu trong bảng màu.',<br/>,'Sử dụng bột bả Okanva2 và tất cả sơn lót trừ Ext 262 và Ext 772.'],
      },
      {
        name: 'Roxo Ext 5501 - Mờ',
        description: 'Độ bền ngoài trời trên 08 năm',
        weightPriceCan: '695.000đ',
        weightPriceBucket: '2.980.000đ',
        paintCover:'9-11m',
        note:['Sử dụng tất cả màu trong bảng màu.',<br/>,'Sử dụng bột bả Okanva2 và tất cả sơn lót trừ Ext 262 và Ext 772.'],
      },
      {
        name: 'Roxo Ext 261 - Mờ',
        description: 'Độ bền ngoài trời trên 06 năm',
        weightPriceCan: '493.000đ',
        weightPriceBucket: '1.900.000đ',
        paintCover:'7-8m',
        note:['Chỉ sử dụng mã màu C8, C7, C6.',<br/>,'Sử dụng bột bả Okanva2 và tất cả sơn lót trừ Ext 262 và Ext 772.'],
      },
    ]
    // New product line
    const inproductsHead = [
      {
        name: 'SƠN TRONG NHÀ',
        tccs: 'TCCS 03:2021/ROXO',
        priceCan: '4kg',
        priceBucket: '20kg',
        coverage: ['Độ phủ',<br/>,'/kg/lớp'],
        note: 'Ghi chú',
      },
    ]
    const inproductsData = [
      {
        name: 'Roxo Ultra U550 - Siêu Bóng ',
        description: 'Độ bền trong nhà trên 18 năm',
        weightPriceCan: '1.070.000đ',
        weightPriceBucket: '4.810.000đ',
        paintCover:'15-17m',
        note:['Sử dụng tất cả màu trong bảng màu.',<br/>,'Sử dụng bột bả Okanva2 và tất cả sơn lót trừ Ext 262 và Ext 772.'],
      },
      {
        name: 'Roxo Ultra U540 - Bóng',
        description: 'Độ bền trong nhà trên 18 năm',
        weightPriceCan: '1.060.000đ',
        weightPriceBucket: '4.740.000đ',
        paintCover:'15-17m',
        note:['Sử dụng tất cả màu trong bảng màu.',<br/>,'Sử dụng bột bả Okanva2 và tất cả sơn lót trừ Ext 262 và Ext 772.'],
      },
      {
        name: 'Roxo Shield S450 - Bóng',
        description: 'Độ bền trong nhà trên 16 năm',
        weightPriceCan: '980.000đ',
        weightPriceBucket: '4.340.000đ',
        paintCover:'12,5-14,5m',
        note:['Sử dụng tất cả màu trong bảng màu.',<br/>,'Sử dụng bột bả Okanva2 và tất cả sơn lót trừ Ext 262 và Ext 772.'],
      },
      {
        name: 'Roxo Ext 871 - Bóng',
        description: 'Độ bền trong nhà trên 15 năm',
        weightPriceCan: '846.000đ',
        weightPriceBucket: '3.990.000đ',
        paintCover:'11-13m',
        note:['Chỉ sử dụng mã màu C8 đến C4.',<br/>,'Sử dụng bột bả Okanva2 và tất cả sơn lót trừ Ext 262 và Ext 772.'],
      },
      {
        name: 'Roxo Pro P180 - Bóng',
        description: 'Độ bền trong nhà trên 14 năm',
        weightPriceCan: '820.000đ',
        weightPriceBucket: '3.550.000đ',
        paintCover:'9-11m',
        note:['Chỉ sử dụng mã màu C8 đến C4.',<br/>,'Sử dụng bột bả Okanva2 và tất cả sơn lót trừ Ext 262 và Ext 772.'],
      },
      {
        name: 'Roxo Pro P160 - Bán Bóng',
        description: 'Độ bền trong nhà trên 14 năm',
        weightPriceCan: '808.000đ',
        weightPriceBucket: '3.500.000đ',
        paintCover:'8,5-10,5m',
        note:['Chỉ sử dụng mã màu C8 đến C4.',<br/>,'Sử dụng bột bả Okanva2 và tất cả sơn lót trừ Ext 262 và Ext 772.'],
      },
      {
        name: 'Roxo Ext 5500 - Bán Bóng',
        description: 'Độ bền trong nhà trên 14 năm',
        weightPriceCan: '650.000đ',
        weightPriceBucket: '2.990.000đ',
        paintCover:'8-10m',
        note:['Chỉ sử dụng mã màu C8 đến C4.',<br/>,'Sử dụng bột bả Okanva2 và tất cả sơn lót trừ Ext 262 và Ext 772.'],
      },
      {
        name: 'Roxo Pro P140 - Bóng Mờ',
        description: 'Độ bền trong nhà trên 09 năm',
        weightPriceCan: '630.000đ',
        weightPriceBucket: '2.800.000đ',
        paintCover:'6,5-7,5m',
        note:['Chỉ sử dụng mã màu C8 đến C4.',<br/>,'Sử dụng bột bả Okanva2 và tất cả sơn lót trừ Ext 262 và Ext 772.'],
      },
      {
        name: 'Roxo Ext 260 - Mờ',
        description: 'Độ bền trong nhà trên 06 năm',
        weightPriceCan: '420.000đ',
        weightPriceBucket: '1.510.000đ',
        paintCover:'6,5-7,5m',
        note:['Chỉ sử dụng mã màu C8 đến C6.',<br/>,'Sử dụng bột bả Okanva1 và sơn lót Ext 772.'],
      },
      {
        name: 'Roxo Ext 771 - Mờ',
        description: 'Độ bền trong nhà trên 06 năm',
        weightPriceCan: '361.000đ',
        weightPriceBucket: '1.255.000đ',
        paintCover:'6-7m',
        note:['Chỉ sử dụng mã màu C8 đến C6.',<br/>,'Sử dụng bột bả Okanva1 và sơn lót Ext 772.'],
      },
    ]
    // New product line
    const whiteceilproductsHead = [
      {
        name: 'SƠN SIÊU TRẮNG TRẦN',
        tccs: 'TCCS 03:2021/ROXO',
        priceCan: '4kg',
        priceBucket: '20kg',
        coverage: ['Độ phủ',<br/>,'/kg/lớp'],
        note: 'Ghi chú',
      },
    ]
    const whiteceilproductsData = [
      {
        name: 'Roxo Pro P230',
        weightPriceCan: '590.000đ',
        weightPriceBucket: '2.410.000đ',
        paintCover:'8-9m',
        note:'Sử dụng bột bả Okanva2 và sơn lót Ext 262.',
      },
      {
        name: 'Roxo Ext 10',
        weightPriceCan: '513.000đ',
        weightPriceBucket: '2.225.000đ',
        paintCover:'6-7m',
        note:'Sử dụng bột bả Okanva1 và sơn lót Ext 772.',
      }
    ]

    // New product line
    const primerproductsHead = [
      {
        name: 'SƠN LÓT KHÁNG KIỀM',
        tccs: 'TCCS 02:2021/ROXO',
        priceCan: '4kg',
        priceBucket: '20kg',
        coverage: ['Độ phủ',<br/>,'/kg/lớp'],
        note: 'Ghi chú',
      },
    ]
    const primerproductsData = [
      {
        name: 'Roxo Alpha S2A',
        weightPriceCan: '1.410.000đ',
        weightPriceBucket: '6.000.000đ',
        paintCover:'12-13m',
        note:['Sơn lót ngoài trời & trong nhà cao cấp.',<br/>,'Sử dụng cho sơn tường, sơn nhũ và sơn giả gỗ'],
      },
      {
        name: 'Roxo Extra S4A',
        weightPriceCan: '980.000đ',
        weightPriceBucket: '4.130.000đ',
        paintCover:'12-13m',
        note:['Sơn lót ngoài trời & trong nhà cao cấp.',<br/>,'Sử dụng cho sơn tường, sơn nhũ và sơn giả gỗ'],
      },
      {
        name: 'Roxo Extra S5A',
        weightPriceCan: '930.000đ',
        weightPriceBucket: '3.910.000đ',
        paintCover:'11-12m',
        note:['Sơn lót ngoài trời & trong nhà cao cấp.',<br/>,'Sử dụng cho sơn tường, sơn nhũ và sơn giả gỗ'],
      },
      {
        name: 'Roxo Sealer L420',
        weightPriceCan: '800.000đ',
        weightPriceBucket: '3.465.000đ',
        paintCover:'11-12m',
        note:['Sơn lót ngoài trời & trong nhà cao cấp.',<br/>,'Sử dụng cho sơn tường, sơn nhũ và sơn giả gỗ'],
      },
      {
        name: 'Roxo Sealer L220',
        weightPriceCan: '682.000đ',
        weightPriceBucket: '2.866.000đ',
        paintCover:'8-9m',
        note:['Sơn lót ngoài trời & trong nhà cao cấp.',<br/>,'Sử dụng cho sơn tường, sơn nhũ và sơn giả gỗ'],
      },
      {
        name: 'Roxo Ext 262',
        weightPriceCan: '500.000đ',
        weightPriceBucket: '1.700.000đ',
        paintCover:'7-8m',
        note:'Sơn lót ngoài trời & trong nhà chỉ sử dụng cho sơn Ext 261, Pro P230.',
      },
      {
        name: 'Roxo Ext 772',
        weightPriceCan: '355.000đ',
        weightPriceBucket: '1.250.000đ',
        paintCover:'6-7m',
        note:'Sơn lót trong nhà chỉ sử dụng cho sơn Ext 260, Ext 771, Ext 10.',
      },
    ]
    // New product line
    const puttyproductsHead = [
      {
        name: 'BỘT BẢ TƯỜNG',
        tccs: 'TCCS 05-06:2021/ROXO',
        priceCan: '4kg',
        priceBucket: '20kg',
        coverage: ['Độ phủ',<br/>,'/kg/lớp'],
        note: 'Ghi chú',
      },
    ]
    const puttyproductsData = [
      {
        name: 'Roxo Okanva1',
        description: 'Bột bả trong nhà',
        weightPriceCan: '401.000đ',
        weightPriceBucket: '591.000đ',
        paintCover: '1,8-2,2m',
        note:'Chỉ sử dụng cho sơn Mờ trong nhà.',
      },
      {
        name: 'Roxo Okanva2',
        description: 'Bột bả ngoài trời & trong nhà cao cấp',
        weightPriceCan: '499.000đ',
        weightPriceBucket: '756.000đ',
        paintCover: '1,8-2,2m',
        note:'Sử dụng cho sơn ngoài trời và sơn Bóng Mờ, Bán Bóng, Bóng, Siêu Bóng.',
      },
    ]
    // New product line
    const waterproofwallproductsHead = [
      {
        name: 'SƠN CHỐNG THẤM TƯỜNG',
        tccs:'TCCS 04:2021/ROXO',
        priceCan: '4kg',
        priceBucket: '20kg',
        coverage: ['Độ phủ',<br/>,'/kg/lớp'],
        note: 'Ghi chú',
      },
    ]
    const waterproofwallproductsData = [
      {
        name: 'Roxo CT410 - Màu ghi sáng',
        weightPriceCan: '820.000đ',
        weightPriceBucket: '3.950.000đ',
        paintCover:'7-8m',
        note:'Pha xi măng đen mác 400 tỉ lệ 1:1 cho màu ghi sáng nhạt.',
      },
      {
        name: 'Roxo 11A - Màu ghi',
        weightPriceCan: '790.000đ',
        weightPriceBucket: '3.640.000đ',
        paintCover:'7-8m',
        note:'Pha xi măng đen mác 400 tỉ lệ 1:1 cho màu ghi.',
      },
      {
        name: 'Roxo CT210 - Màu tối sẫm',
        weightPriceCan: '490.000đ',
        weightPriceBucket: '1.900.000đ',
        paintCover:'5,5-6,5m',
        note:'Pha xi măng đen mác 400 tỉ lệ 1:1 cho màu tối sẫm.',
      },
      {
        name: 'Roxo MT1 - Bả mattit',
        weightPriceCan: '580.000đ',
        weightPriceBucket: '1.990.000đ',
        paintCover:'4-5m',
        note:'Pha xi măng đen mác 400 tỉ lệ 1:1.',
      },
    ]
    // New product line
    const waterprooffloorproductsHead = [
      {
        name: 'SƠN CHỐNG THẤM SÀN',
        tccs: 'TCCS 04:2021/ROXO',
        priceCan: '4kg',
        priceBucket: '16kg',
        coverage: ['Độ phủ',<br/>,'/kg/lớp'],
        note: 'Ghi chú',
      },
    ]
    const waterprooffloorproductsData = [
      {
        name: 'Roxo Ankos - Cao cấp',
        description: 'Chống thấm sàn cao cấp pha xi măng đen tỉ lệ 1:1',
        weightPriceCan: '960.000đ',
        weightPriceBucket: '3.210.000đ',
        paintCover: '3-4m',
        note:'Chống thấm sàn cao cấp pha xi măng đen tỉ lệ 1:1.',
      },
      {
        name: 'Roxo Dark - Chất lượng',
        description: 'Chống thấm sàn pha xi măng đen tỉ lệ 1:1',
        weightPriceCan: '690.000đ',
        weightPriceBucket: '2.230.000đ',
        paintCover: '3-4m',
        note:'Chống thấm sàn pha xi măng đen tỉ lệ 1:1.',
      },
    ]
    // New product line
    const specialproductsHead = [
      {
        name: 'SƠN ĐẶC CHỦNG',
        tccs: 'TCCS 01:2021/ROXO',
        priceCan: '0.8kg',
        priceBucket: '4kg',
        coverage: ['Độ phủ',<br/>,'/kg/lớp'],
        note: 'Ghi chú',
      },
    ]
    const specialproductsData = [
      {
        name: 'Roxo Camay - Sơn nhũ',
        description: 'Nhũ vàng 17k, bạc, đồng thau, đồng đỏ',
        weightPriceCan: '350.000đ',
        weightPriceBucket: '1.380.000đ',
        paintCover: '6-7m',
        note:'Nhũ vàng 17k, bạc, đồng thau, đồng đỏ.',
      },
      {
        name: 'Roxo Make-Up - Sơn nhũ',
        description: 'Nhũ vàng 24k, bạc, đồng thau, đồng đỏ cao cấp',
        weightPriceCan: '960.000đ',
        weightPriceBucket: '4.180.000đ',
        paintCover: '6-7m',
        note:'Nhũ vàng 24k, bạc, đồng thau, đồng đỏ cao cấp.',
      },
      {
        name: 'Roxo VGT1 - Sơn giả gỗ Tạo vân',
        description: 'Giả gỗ (tạo vân- sơn phủ)',
        weightPriceCan: '298.000đ',
        weightPriceBucket: '1.129.000đ',
        paintCover: '15-18m',
        note:'Giả gỗ (tạo vân-sơn phủ).',
      },
      {
        name: 'Roxo VGT1 - Sơn giả gỗ Lót nền',
        description: 'Giả gỗ (màu nền- sơn phủ)',
        weightPriceCan: '280.000đ',
        weightPriceBucket: '1.029.000đ',
        paintCover: '10-12m',
        note:'Giả gỗ (màu nền - sơn lót).',
      },
    ]
    // New product line
    const zeroopacityproductsHead = [
      {
        name: 'SƠN TRONG SUỐT & KHÁNG MUỐI',
        tccs: 'TCCS 01:2021/ROXO',
        priceCan: '4kg',
        priceBucket: '16kg',
        coverage: ['Độ phủ',<br/>,'/kg/lớp'],
        note: 'Ghi chú',
      },
    ]
    const zeroopacityproductsData = [
      {
        name: 'Roxo ClearFlex',
        description: 'Sơn phủ bóng bảo vệ',
        weightPriceCan: '910.000đ',
        weightPriceBucket: '3.360.000đ',
        paintCover: '13-14m',
        note:'Sơn phủ bóng bảo vệ',
      },
      {
        name: 'Roxo PrimerNano',
        description: 'Sơn lót thẩm thấu khóa muối.',
        weightPriceCan: '536.000đ',
        weightPriceBucket: '1.748.000đ',
        paintCover: '10-12m',
        note:['Chống sùi chân tường và bẩn trong tường đẩy ra.',<br/>,'Mỗi lớp sơn khô tối thiểu 24h. Sơn từ 1-2 lớp.'],
      },
    ]
    const [click, setClick] = useState(null)

  return(
    <>
    <div className='relative h-auto'>
      <Banner
      sendImg='./img/backgroundtheme.jpg'
      sendAlt='roxo banner background'
      />
      <div className='absolute bottom-5 left-5'>
        <Button hlink='/products'>Bảng giá</Button>
        <Button hlink='/colorpalette'>Bảng màu</Button>
      </div>
    </div>

      <TitleCenter name='Bảng giá sản phẩm Sơn Roxo' />

      <div className='w-full stablet:flex'>
        <div className='flex justify-center h-full'>
          <ul className='w-auto h-auto p-4 m-2 text-white list-none bg-blue-400 rounded stablet:w-56'>
            <li className='p-2 hover:bg-blue-50 hover:rounded hover:text-amber-500 active:text-red-800 active:bg-gray-400' onClick={() => setClick('A')}>Sơn ngoài trời</li>
            <li className='p-2 hover:bg-blue-50 hover:rounded hover:text-amber-500 active:text-red-800 active:bg-gray-400' onClick={() => setClick('B')}>Sơn trong nhà</li>
            <li className='p-2 hover:bg-blue-50 hover:rounded hover:text-amber-500 active:text-red-800 active:bg-gray-400' onClick={() => setClick('C')}>Sơn siêu trắng trần</li>
            <li className='p-2 hover:bg-blue-50 hover:rounded hover:text-amber-500 active:text-red-800 active:bg-gray-400' onClick={() => setClick('D')}>Sơn lót kháng kiềm</li>
            <li className='p-2 hover:bg-blue-50 hover:rounded hover:text-amber-500 active:text-red-800 active:bg-gray-400' onClick={() => setClick('E')}>Bột bả</li>
            <li className='p-2 hover:bg-blue-50 hover:rounded hover:text-amber-500 active:text-red-800 active:bg-gray-400' onClick={() => setClick('F')}>Sơn chống thấm tường</li>
            <li className='p-2 hover:bg-blue-50 hover:rounded hover:text-amber-500 active:text-red-800 active:bg-gray-400' onClick={() => setClick('G')}>Sơn chống thấm sàn</li>
            <li className='p-2 hover:bg-blue-50 hover:rounded hover:text-amber-500 active:text-red-800 active:bg-gray-400' onClick={() => setClick('H')}>Sơn đặc chủng</li>
            <li className='p-2 hover:bg-blue-50 hover:rounded hover:text-amber-500 active:text-red-800 active:bg-gray-400' onClick={() => setClick('I')}>Sơn trong suốt bảo vệ</li>
          </ul>
        </div>

        <div className='w-full p-2'>
          <div className={click==='A'? 'block': 'hidden'}>
            <PriceListTable dataHead={extproductsHead} dataBody ={extproductsData} />
          </div>
          <div className={click==='B'? 'block': 'hidden'}>
            <PriceListTable dataHead={inproductsHead} dataBody ={inproductsData} />
          </div>
          <div className={click==='C'? 'block': 'hidden'}>
            <PriceListTable dataHead={whiteceilproductsHead} dataBody ={whiteceilproductsData} />
          </div>
          <div className={click==='D'? 'block': 'hidden'}>
            <PriceListTable dataHead={primerproductsHead} dataBody ={primerproductsData} />
          </div>
          <div className={click==='E'? 'block': 'hidden'}>
            <PriceListTable dataHead={puttyproductsHead} dataBody ={puttyproductsData} />
          </div>
          <div className={click==='F'? 'block': 'hidden'}>
            <PriceListTable dataHead={waterproofwallproductsHead} dataBody ={waterproofwallproductsData} />
         </div>
          <div className={click==='G'? 'block': 'hidden'}>
            <PriceListTable dataHead={waterprooffloorproductsHead} dataBody ={waterprooffloorproductsData} />
          </div>
          <div className={click==='H'? 'block': 'hidden'}>
            <PriceListTable dataHead={specialproductsHead} dataBody ={specialproductsData} />
          </div>
          <div className={click==='I'? 'block': 'hidden'}>
            <PriceListTable dataHead={zeroopacityproductsHead} dataBody ={zeroopacityproductsData} />
          </div>
        </div>
      </div>
    </>
  )
}
