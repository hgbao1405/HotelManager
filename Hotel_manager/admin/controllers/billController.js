const Index = async (req, res) => {
  res.send("Index bill page");
};
const Detail = async (req, res) => {
  res.send("Detail bill page");
};
const Create = async (req, res) => {
  res.send("Create bill page");
};
const Edit = async (req, res) => {
  res.send("Edit bill page");
};
const Delete = async (req, res) => {
  res.send("Delete bill page");
};

export default { Index, Detail, Create, Edit, Delete };
