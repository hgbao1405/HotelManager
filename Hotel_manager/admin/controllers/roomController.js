const Index = async (req, res) => {
  res.send("Index room page");
};
const Detail = async (req, res) => {
  res.send("Detail room page");
};
const Create = async (req, res) => {
  res.send("Create room page");
};
const Edit = async (req, res) => {
  res.send("Edit room page");
};
const Delete = async (req, res) => {
  res.send("Delete room page");
};

export default { Index, Detail, Create, Edit, Delete };
