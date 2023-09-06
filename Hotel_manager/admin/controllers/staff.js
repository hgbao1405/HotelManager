const Index = async (req, res) => {
  res.send("Index staff page");
};
const Detail = async (req, res) => {
  res.send("Detail staff page");
};
const Create = async (req, res) => {
  res.send("Create staff page");
};
const Edit = async (req, res) => {
  res.send("Edit staff page");
};
const Delete = async (req, res) => {
  res.send("Delete staff page");
};
export default { Index, Detail, Create, Edit, Delete };
