const Index = async (req, res) => {
  res.send("Index billdetail page");
};
const Detail = async (req, res) => {
  res.send("Detail billdetail page");
};
const Create = async (req, res) => {
  res.send("Create billdetail page");
};
const Edit = async (req, res) => {
  res.send("Edit billdetail page");
};
const Delete = async (req, res) => {
  res.send("Delete billdetail page");
};

export default { Index, Detail, Create, Edit, Delete };
