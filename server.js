const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
let stories = [
  {
    id: 1,
    title: "Sự tích ăn khế trả vàng",
    author: "Dân gian",
    content:
      "Ngày xửa, ngày xưa, có hai anh em nhà kia cha mẹ mất sớm. Khi người anh lấy vợ, người anh không muốn ở chung với em nữa, nên quyết định chia gia tài. Người anh tham lam chiếm hết cả nhà cửa, ruộng vườn, trâu bò của cha mẹ để lại, chỉ cho người em một túp lều nhỏ và mảnh vườn, trong đó có cây khế ngọt. Người em không chút phàn nàn, ngày ngày chăm bón cho cây khế và cày thuê, cuốc mướn nuôi thân. Năm ấy, cây khế trong vườn nhà người em bỗng sai quả lạ thường, cành nào cũng trĩu quả ngọt, vàng ruộm. Người em nhìn cây khế mà lòng khấp khởi mừng thầm tính chuyện bán khế lấy tiền đong gạo. Một hôm, có con chim Phượng Hoàng từ đâu bay đến mổ khế ăn lia lịa. Thấy thế, người em vác gậy đuổi chim và nói. “Này chim! Ta chỉ có duy nhất một cây khế này, và ta đã khó nhọc chăm sóc đến ngày hái quả. Nay nếu chim ăn hết ta chẳng có gì để bán đi mua gạo. Vậy nếu chim muốn ăn hãy mang trả ta vật gì có giá trị”. Chim vừa ăn vừa đáp: “Ăn một quả, trả cục vàng may túi ba gang, mang theo mà đựng“. Người em nghe chim nói vậy, cũng đành để chim ăn. Mấy hôm sau, chim lại đến ăn khế. Ăn xong chim bảo người em lấy túi ba gang đi lấy vàng. Người em chạy vào nhà lấy chiếc túi ba gang đã may sẵn rồi leo lên lưng chim. Chim bay mãi, bay mãi qua núi cao, qua biển rộng bao la và đỗ xuống một hòn đảo đầy vàng bạc, châu báu. Người em đi khắp đảo nhìn ngắm thỏa thích rồi lấy vàng bỏ đầy túi ba gang. Chim Phượng Hoàng bảo lấy thêm, người em cũng không lấy. Xong xuôi, người em leo lên mình chim trở về nhà. Từ đó, người em trở nên giàu có, người em mang thóc, gạo, vàng bạc… giúp đỡ những người nghèo khổ. Người anh nghe tin em giàu có liền sang chơi và đòi đổi nhà, ruộng vườn của mình lấy cây khế ngọt, người em cũng đồng ý đổi cho anh. Thế là người anh chuyển sang nhà người em. Mùa năm sau, cây khế lại sai trĩu quả, chim Phượng Hoàng lại tới ăn. Người anh giả vờ khóc lóc, chim bèn nói: “Ăn một qủa, trả cục vàng May túi ba gang, mang theo mà đựng”. Người anh mừng quá, giục vợ may túi không phải 3 gang mà là 12 gang để đựng được nhiều vàng. Hôm sau chim Phượng Hoàng đưa người anh đi lấy vàng. Vừa đến nơi, người anh đã vội vàng vơ lấy vàng bỏ vào túi, lại còn giắt thêm đầy vàng bỏ vào người. Chim cố sức bay nhưng đường thì xa mà vàng thì nhiều nên nặng quá. Mấy lần chim bảo người anh vứt bớt vàng đi cho nhẹ nhưng người anh vẫn khăng khăng ôm lấy túi. Chim Phượng Hoàng bực tức, nó nghiêng cánh hất người anh tham lam xuống biển.",
    imageUrl: "https://truyencotich.vn/wp-content/uploads/2015/02/AKTV1.jpg",
  },
  {
    id: 2,
    title: "Rùa và thỏ",
    author: "Dân gian",
    content:
      "Ngày xửa ngày xưa, có một con Rùa và một con Thỏ cãi nhau xem ai nhanh hơn. Chúng quyết định giải quyết việc tranh luận bằng một cuộc thi chạy đua. Chúng đồng ý lộ trình và bắt đầu cuộc đua. Thỏ xuất phát nhanh như tên bắn và chạy thục mạng rất nhanh, khi thấy rằng mình đã khá xa Rùa, Thỏ nghĩ nên nghỉ cho đỡ mệt dưới một bóng cây xum xê lá bên vệ đường và nghỉ thư giãn trước khi tiếp tục cuộc đua. Vì quá tự tin vào khả năng của mình, Thỏ ngồi dưới bóng cây và nhanh chóng ngủ thiếp đi trên đường đua. Rùa từ từ vượt qua Thỏ và sớm kết thúc đường đua. Khi Thỏ thức dậy thì rùa đã đến đích và trở thành người chiến thắng. Thỏ giật mình tỉnh giấc và nhận ra rằng nó đã bị thua.",
    imageUrl: "https://demoda.vn/wp-content/uploads/2022/01/anh-rua-va-tho.jpg",
  },
];

app.get("/stories", (req, res) => {
  res.json(stories);
});

app.post("/stories", (req, res) => {
  const { title, author, content, imageUrl } = req.body;
  const newStory = {
    id: stories.length + 1,
    title,
    author,
    content,
    imageUrl,
  };
  stories.push(newStory);
  res
    .status(201)
    .json({ message: "Truyện đã được thêm thành công!", newStory });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
