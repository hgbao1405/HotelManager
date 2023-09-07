const Reported_cleaned_room_id = async (req, res) => {
  var id = req.param("id");
  res.send("báo cáo đã dọn phòng cập nhật trạng thái phòng " + id);
};
const Get_clean_room = async (req, res) => {
  res.send("Lấy danh sách phòng cần lau dọn");
};
const Reported_broken_device_in_room = async (req, res) => {
  var id = req.params.id;
  var bd = req.params.bd;

  res.send("Báo cáo " + bd + " hư ở phòng " + id);
};

export default {
  Reported_cleaned_room_id,
  Get_clean_room,
  Reported_broken_device_in_room,
};
