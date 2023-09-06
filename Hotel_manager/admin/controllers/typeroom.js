const Index = async (req, res) => {
  res.send("Index type room page");
};
const Detail = async (req, res) => {
  res.send("Detail type room page");
};
const Create = async (req, res) => {
  res.send("Create type room page");
};
const Edit = async (req, res) => {
  res.send("Edit type room page");
};
const Delete = async (req, res) => {
  res.send("Delete type room page");
};
export default { Index, Detail, Create, Edit, Delete };
