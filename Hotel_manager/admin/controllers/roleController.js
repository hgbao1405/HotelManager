const Index = async (req, res) => {
  res.send("Index role page");
};
const Detail = async (req, res) => {
  res.send("Detail role page");
};
const Create = async (req, res) => {
  res.send("Create role page");
};
const Edit = async (req, res) => {
  res.send("Edit role page");
};
const Delete = async (req, res) => {
  res.send("Delete role page");
};

export default { Index, Detail, Create, Edit, Delete };
