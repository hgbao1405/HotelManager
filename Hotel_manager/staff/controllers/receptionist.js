const check_in = async (req, res) => {
  //tạo bill có phòng check in
  res.send("tạo bill có phòng check in");
};
const check_out = async (req, res) => {
  //thêm trạng thái đã thanh toán vào bill
  res.send("thêm trạng thái đã thanh toán vào bill");
};
const add_sevice_of_room = async (req, res) => {
  res.send("Thêm dịch vụ vào hóa đơn theo phòng ");
};
const make_an_invoice = async (req, res) => {
  res.send("Lập hóa đơn");
};
const prinf_bill = async (req, res) => {
  res.send("In hóa đơn");
};
const book_room = async (req, res) => {
  res.send("Đặt phòng");
};
export default {
  check_in,
  check_out,
  add_sevice_of_room,
  make_an_invoice,
  prinf_bill,
  book_room,
};
