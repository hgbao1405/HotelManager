const Index = async (req, res) => {
  res.send("Index service page");
};
const Detail = async (req, res) => {
  res.send("Detail service page");
};
const Create = async (req, res) => {
  res.send("Create service page");
};
const Edit = async (req, res) => {
  res.send("Edit service page");
};
const Delete = async (req, res) => {
  res.send("Delete service page");
};

export default { Index, Detail, Create, Edit, Delete };
