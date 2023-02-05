import React from 'react'
import TitleCenter from '../components/TitleCenter'

export default function TechnicalPage(){
  const headerGuide=[
    {
      firstHeader:'A. Hướng dẫn thi công',
      secondHeader:'Đường dẫn',
    },
  ]
  const bodyGuide = [
    {
      name: 'Hướng dẫn thi công sơn bả Roxo',
      linkWeb: '#thi-cong-son-ba',
      linkYoutube: '',
    },
    {
      name: 'Hướng dẫn thi công sơn giả gỗ cho tường Roxo',
      linkWeb: '#thi-cong-son-gia-go',
      linkYoutube: '',
    },
    {
      name: 'Hướng dẫn thi công sơn nhũ cao cấp Roxo',
      linkWeb: '#thi-cong-son-nhu',
      linkYoutube: '',
    },
    {
      name: 'Hướng dẫn thi công sơn trong suốt PrimerNano',
      linkWeb: '#thi-cong-son-primernano',
      linkYoutube: '',
    },
    {
      name: 'Hướng dẫn thi công sơn chống thấm tường Roxo',
      linkWeb: '#thi-cong-son-chong-tham-tuong',
      linkYoutube: '',
    },
    {
      name: 'Hướng dẫn thi công sơn chống thấm sàn Roxo',
      linkWeb: '#thi-cong-son-chong-tham-san',
      linkYoutube: '',
    },
  ]
  const headerTCCS=[
    {
      firstHeader:'B. Tiêu chuẩn cơ sở sơn Roxo',
      secondHeader:'Đường dẫn',
    },
  ]
  const bodyTCCS = [
    {
      name: ['Sơn ngoài trời: ', <br />, <strong>TCCS 01:2021/ROXO</strong>],
      linkWeb: '',
      linkYoutube: '',
    },
    {
      name: ['Sơn lót kháng kiềm: ', <br />, <strong>TCCS 02:2021/ROXO</strong>],
      linkWeb: '',
      linkYoutube: '',
    },
    {
      name: ['Sơn trong nhà: ', <br />, <strong>TCCS 03:2021/ROXO</strong>],
      linkWeb: '',
      linkYoutube: '',
    },
    {
      name: ['Sơn chống thấm pha xi: ', <br />, <strong>TCCS 04:2021/ROXO</strong>],
      linkWeb: '',
      linkYoutube: '',
    },
    {
      name: ['Bột bả ngoài trời: ', <br />, <strong>TCCS 05:2021/ROXO</strong>],
      linkWeb: '',
      linkYoutube: '',
    },
    {
      name: ['Bột bả trong nhà: ', <br />, <strong>TCCS 06:2021/ROXO</strong>],
      linkWeb: '',
      linkYoutube: '',
    },
  ]
  return(
  <>
    <TitleCenter name='Kỹ thuật' subtitle='Tổng hợp tài liệu kỹ thuật sơn'/>

    <Table dataHead={headerGuide} dataBody = {bodyGuide} />

    <Table dataHead={headerTCCS} dataBody = {bodyTCCS} />

    <hr />

    <div className="m-8 stablet:mx-[10%] bg-gray-100 rounded-2xl" id="thi-cong-son-ba">
      <h1 className="p-8">Hướng dẫn thi công sơn bả Roxo</h1>
      <p className="p-4">
        - Khi thời tiết khô nóng, tường khô, sơn sẽ bị khô cướp. Cần làm ẩm tường hoặc làm ướt
        tường ngay lúc lăn sơn. Nghĩa là lăn sơn lên tường đang se se ẩm để làm giảm tốc độ khô của sơn. Như vậy sơn mới có thời gian thẩm thấu sâu vào nền không gây ra bong tróc phồng rộp
        khi gặp mưa. <br />
        - Không thi công sơn khi thời tiết nắng nóng nhiệt độ trên 38<sup>o</sup>C sơn bị khô cướp khó bám vào tường. <br />
        - Không thi công sơn khi nhiệt độ môi trường xuống dưới 10<sup>o</sup>C sơn sẽ khó tạo màng khó bám chắc vào tường (vỡ mảnh, rạn nứt, bong rộp, ...). Đảm bảo rằng trong 24h tiếp theo nhiệt độ không xuống dưới 10<sup>o</sup>C mới thi công. <br />
        - Không thi công sơn khi thời tiết ẩm ướt, độ ẩm không khí trên 95% sơn sẽ lâu khô khó tạo màng. Cho dù những ngày sau đó thời tiết khô ráo nhưng sơn sẽ không tạo màng hoàn hảo được nữa mà sẽ bị phấn hoá, vỡ vụn. <br />
        - Không thi công sơn khi thời tiết có dấu hiệu sắp mưa (trong vòng 6 tiếng đồng hồ dự tính từ lúc sơn khô nhằm đảm bảo chất lượng tốt nhất). <br />
        <strong>Bước 1:</strong> Vệ sinh tường, sử dụng đá mài, giấy ráp, chổi quét, lô. Thực hiện mài sạch tường để làm nhẵn và loại bỏ các hạt cát to, nhỏ ngoài bề mặt. Sử dụng lô nước (lô nhúng nước sạch) hoặc máy phun rửa sạch tường nhằm loại bỏ bụi (sau khi mài) còn bám trên bề mặt.<br />
        <strong>Bước 2:</strong> Bả tường (nếu cần). Với công trình sử dụng bột bả. Yêu cầu mỗi lớp thi công cách nhau từ 12-24h nhằm cho bột bả khô một cách tự nhiên. Áp dụng vệ sinh bề mặt tường bả như bước 1 vệ sinh tường với mỗi lớp bả được thi công.<br />
        Lưu ý: <br />
        - Không sử dụng điều hòa nhằm rút ngắn thời gian khô của bột bả, sẽ làm bột bả không
        đạt độ cứng cần thiết, bị xốp và dễ bong tróc. <br />
        - Sử dụng bột bả có độ cứng tương đồng với sơn. Sơn độ bóng càng cao, càng cần bả
        cứng (bả tốt). <br />
        <strong>Bước 3:</strong> Pha sơn lót kháng kiềm với nhiều nước (0 - 15% theo yêu cầu thực tế) để sơn lót lỏng ra dễ thẩm thấu sâu vào tường hơn. Lăn đều 1-2 lớp. Tại lớp lót đầu tiên, có thể pha từ 30-50% nước nhằm đạt sự thẩm thấu sâu vào tường. Từ lớp lót thứ 2 trở lên có thể thi công bình thường. <br />
        Lưu ý: <br />
        - Thời gian khô trung bình giữa các lớp là 2 tiếng. Tùy điều kiện thời tiết mà thời gian khô có thể ngắn hơn hoặc lâu hơn. <br />
        - Sử dụng nước vấy lên bề mặt, chờ 5 phút rồi dùng móng tay cấu nhẹ lên bề mặt tường. Nếu sơn bục lộ chân tường là chưa khô bên trong, không được thi công lớp sau. <br />
        <strong>Bước 4:</strong> Pha sơn phủ (sơn màu) với nước sạch tối đa 5-10% và lăn đều từ 2 đến 3 lớp. <br />
        Lưu ý: <br />
        - Thời gian khô trung bình giữa các lớp là 2 tiếng. Tùy điều kiện thời tiết mà thời gian khô có thể ngắn hơn hoặc lâu hơn. <br />
        - Sử dụng nước vấy lên bề mặt, chờ 5 phút rồi dùng móng tay cấu nhẹ lên bề mặt tường. Nếu sơn bục lộ chân sơn lót là chưa khô bên trong, không được thi công lớp sau. <br />
      </p>
    </div>

    <div className="m-8 stablet:mx-[10%] bg-gray-100 rounded-2xl" id="thi-cong-son-nhu">
      <h1 className="p-8">Hướng dẫn thi công sơn nhũ Roxo</h1>
      <p className="p-4">
        Bước 1: Thi công sơn lót ROXO: 2 lớp. <br />
        Bước 2: Thi công sơn nhũ ROXO Camay hoặc MakeUp bằng các dụng cụ tương thích nhiều lớp: <br />
        - Lăn Roller: Áp dụng cho tường nhẵn hoặc tường nhám. Hạt nhũ càng mịn càng dễ bám. Hạt nhũ càng to càng khó bám. <br />
        - Quét chổi thông thường: Dùng chổi quét trên nền nhám dễ bám hơn trên nền nhẵn. Hạt nhũ mịn dễ quét hơn hạt nhũ to. <br />
        - Quét chỗi chữ X: Nghĩa là 2 đường chổi quét vắt chéo nhau. Quét chổi chữ X áp dụng rất dễ cho các bề mặt nhám hoặc nhẵn. Hạt nhũ mịn hoặc hạt nhũ to đều dễ quét và đẹp. <br />
        - In hoa văn: Dùng khuôn in trực tiếp hoa văn lên tường. Yêu cầu tường nhẵn, đã sơn bả xong. In lên lớp sơn phủ màu. Màu sơn nền phải đối lập với màu sơn nhũ. <br />
      </p>
    </div>

    <div className="m-8 stablet:mx-[10%] bg-gray-100 rounded-2xl" id="thi-cong-son-gia-go">
      <h1 className="p-8">Hướng dẫn thi công sơn lót không màu Roxo PrimerNano</h1>
      <p className="p-4">
        Để vật liệu giả gỗ giống như gỗ thật. Cần thực hiện các bước thi công sau:<br />
        <strong>1- Bả tường:</strong> Yêu cầu dùng bột bả cứng. Trước khi bả làm ẩm tường. Bả 2 lớp. Sau 24 giờ xả nhám thật nhẵn. Rửa sạch bụi phấn. <br />
        <strong>2- Quét sơn màu nền:</strong> Dùng sơn nền ROXO CLASSIC VGT1 màu ký hiệu LN tương ứng với màu tạo vân và quét theo 1 chiều nhất định. Sau khi sơn nền giả gỗ khô xả nhám thật nhẵn (nếu có thể). <br />
        <strong>3- Tạo mắt gỗ:</strong> Dùng chổi sơn tạo hình Elip trên thân gỗ bằng cách xoáy chổi vài vòng sẽ tạo ra mắt gỗ. <br />
        <strong>4- Quét sơn màu tạo vân gỗ ROXO VGT1 :</strong> Dùng chổi cán vuông (là đẹp nhất) quét 1 lớp rất mỏng sơn màu tạo vân ROXO VGT1 theo màu đã chọn. Quét 1 chiều theo cùng chiều nền sẽ tạo ra vân dọc. Khi quét đến mắt gỗ thì lái chổi tránh mắt gỗ theo kiểu dòng chảy con sông có bãi bồi ở giữa (gọi là cù lao). <br />
        <strong>5- Chú ý:</strong> <br />
        - Nếu là cột nhà, xà ngang, rui mè nên quét vân dọc hơi chéo với chiều dài của cây gỗ để tạo ra thớ vặn xoắn như gỗ tự nhiên. <br />
        - Cột, xà ngang thường dùng màu vân gỗ đậm. Và gắn với trong thực tế cuộc sống người ta hay dùng gỗ gì làm xà cột thì mình chọn mã màu tương ứng <br />
        - Đối với gỗ ốp trần và tường thường dùng màu vàng nhạt như Pơ Mu, Lát, Dổi, Hoàng Đàn. <br />
        - Sản phẩm sơn giả gỗ ROXO VGT1 có độ bóng cao. Sau khi tạo vân xong không cần phủ bóng Clear. <br />
      </p>
    </div>
    <div className="m-8 stablet:mx-[10%] bg-gray-100 rounded-2xl" id="thi-cong-son-primernano">
      <h1 className="p-8">Hướng dẫn thi công sơn lót không màu Roxo PrimerNano</h1>
      <p className="p-4">
      <strong>Bước 1:</strong> Vệ sinh tường, sử dụng đá mài, giấy ráp, chổi quét, lô. Thực hiện mài sạch tường để làm nhẵn và loại bỏ các hạt cát to, nhỏ ngoài bề mặt. Sử dụng lô nước (lô nhúng nước sạch) hoặc máy phun rửa sạch tường nhằm loại bỏ bụi (sau khi mài) còn bám trên bề mặt.<br />
      <strong>Bước 2:</strong> Sử dụng Primernano, lăn 1 lớp đẫm sơn lên bề mặt. Sơn lót không màu PrimerNano lỏng như nước, có độ nhớt thấp.<br />
      <strong>Bước 3:</strong> Thi công sơn lót kháng kiềm bình thường. Sơn lót không màu Primernano sử dụng 1-2 lớp. Mỗi lớp cách nhau 24h. Chờ khô hoàn toàn mới được sử dụng lớp tiếp theo hoặc sơn lót, sơn màu.<br />
      </p>
    </div>

    <div className="m-8 stablet:mx-[10%] bg-gray-100 rounded-2xl" id="thi-cong-son-chong-tham-tuong">
      <h1 className="p-8">Hướng dẫn thi công sơn chống thấm tường Roxo</h1>
      <p className="p-4">
        Bề mặt trước khi thi công phải rắn chắc và sạch. <br />
        <strong>Bước 1 :</strong> <br />
        - Vệ sinh tường, loại bỏ các tạp chất. <br />
        - Quét bụi. <br />
        - Rửa bụi và làm ẩm tường bằng roller lăn nước. <br />
        <strong>Bước 2:</strong> <br />
        - Cân hai thành phần Sơn và Xi măng khối lượng bằng nhau. <br />
        - Trộn Xi măng với 50% nước trước, khuấy kỹ <br />
        - Trộn Xi măng (đã trộn nước) với Sơn, khuấy kỹ <br />
        <strong>Bước 3:</strong> <br />
        - Thi công bằng roller và chổi quét từ 2-4 lớp. <br />
        - Lăn hỗn hợp trên lên tường (tường vừa được làm ẩm) 1 lớp đều và kín theo một chiều lăn nhất định. Chờ khô. <br />
        - Lăn lớp thứ 2 theo chiều vuông góc với lớp thứ nhất. Để khô. <br />
        - Có thể lăn lớp thứ 3 vuông góc với lớp thứ 2 sẽ chống thấm an toàn hơn. Chờ khô. <br />
        - Có thể lăn lớp thứ 4 vuông góc với lớp thứ 3 sẽ chống thấm an toàn hơn nữa. Chờ khô <br />
        Lớp cuối cùng bắt buộc phải lăn theo phương thẳng đứng để nước mưa không bị ứ đọng. <br />
        - Có thể phủ sơn ngoài trời hoặc phủ clear càng đẹp và bền và tăng khả năng chống thấm. <br />
        <strong>CHÚ Ý:</strong> <br />
        - Phải dùng hết trong vòng 1 giờ nếu không Cement đông kết trong thùng sẽ mất tác dụng. <br />
        - Không chống thấm trên bề mặt đã quét hồ dầu hoặc các loại sơn chống thấm gốc dầu như EPOXY, Bitum. <br />
        - Đối với vết nứt nhỏ dùng sơn chống thấm tường lăn (hoặc quét) 3-4 lớp mỏng. Với vết nứt lớn phải đục mở rộng, sau đó trộn Sơn / Xi măng tỉ lệ 1/2 hoặc 1/3 thành khối nhão đặc rồi trám trét vào vết nứt. Sau đó phủ Sơn nguyên chất lên bề mặt để bịt kín những lỗ nhỏ li ti còn sót lại. <br />
      </p>
    </div>

    <div className="m-8 stablet:mx-[10%] bg-gray-100 rounded-2xl" id="thi-cong-son-chong-tham-san">
      <h1 className="p-8">Hướng dẫn thi công sơn chống thấm sàn Roxo</h1>
      <p className="p-4">
        Bề mặt trước khi thi công phải rắn chắc và sạch. <br />
        <strong>Bước 1:</strong> <br />
        - Vệ sinh sàn, loại bỏ các tạp chất <br />
        - Quét bụi <br />
        - Rửa bụi và làm ẩm sàn bằng roller lăn nước <br />
        <strong>Bước 2:</strong> <br />
        - Cân hai thành phần Sơn và Xi măng khối lượng bằng nhau <br />
        - Trộn Xi măng với 50% nước trước, khuấy kỹ <br />
        - Trộn Xi măng (đã trộn nước) với Sơn, khuấy kỹ <br />
        <strong>Bước 3:</strong> <br />
        - Thi công bằng roller và chổi quét từ 3-4 lớp <br />
        - Lăn hỗn hợp trên lên sàn (sàn vừa được làm ẩm) 1 lớp đều và kín theo một chiều lăn nhất định. Chờ khô. <br />
        - Lăn lớp thứ 2 theo chiều vuông góc với lớp thứ nhất. Để khô. <br />
        - Lăn lớp thứ 3 vuông góc với lớp thứ 2 sẽ chống thấm an toàn hơn. Chờ khô. <br />
        - Có thể lăn lớp thứ 4 vuông góc với lớp thứ 3 sẽ chống thấm an toàn hơn nữa. Chờ khô. <br />
        - Sau đó lát gạch men lên trên hoặc đánh bóng lớp hồ dầu xi măng lên trên chống đọng nước. <br />
        <strong>CHÚ Ý:</strong> <br />
        - Phải dùng hết trong vòng 1 giờ nếu không Cement đông kết trong thùng sẽ mất tác dụng. <br />
        - Không chống thấm trên bề mặt đã quét hồ dầu hoặc các loại sơn chống thấm gốc dầu như EPOXY, Bitum. <br />
        - Đối với vết nứt nhỏ dùng sơn chống thấm sàn lăn (hoặc quét) 3-4 lớp mỏng. Với vết nứt lớn phải đục mở rộng, sau đó trộn Sơn / Xi măng tỉ lệ 1/2 hoặc 1/3 thành khối nhão đặc rồi trám trét vào vết nứt. Sau đó phủ Sơn / Xi măng = 1/1 lên bề mặt 3-4 lớp. <br />
      </p>
    </div>

    
  </>
  )
}

function Table(props){
  return(
    <table className='mx-auto border-separate table-auto'>
      {props.dataHead.map((dataA)=>(
        <thead className='bg-blue-900'>
          <th className='w-[135px] stablet:min-w-[355px] p-2 font-normal text-white text-start'>{dataA.firstHeader}</th>
          <th className='w-[70px] stablet:min-w-[150px] p-2 font-normal text-white'>{dataA.secondHeader}</th>
        </thead>
      ))
      }

      {props.dataBody.map((dataB,index)=>(
          <tr className='even:bg-red-200 border-bottom' key={index}>
            <td className='p-1 px-4'>{dataB.name}</td>
            <td className='p-1 px-4 text-center'>
              {dataB.linkWeb && <a href={dataB.linkWeb} className="text-red-900 font-bold">liên kết</a>}
              {(dataB.linkWeb && dataB.linkYoutube) && ' | '}
              {dataB.linkYoutube && <a href={dataB.linkYoutube}>youtube</a>}
            </td>
          </tr>
      ))
      }
    </table>
  )
}
