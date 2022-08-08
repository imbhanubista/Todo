const { saveContent } = require("../../services/content/content");

exports.postContent = async (req, res) => {
  const { title, body } = req.body;
  try {
    let todo = await saveContent({ title, body });
    res.json({
      type: "success",
      msg: "Successfully updated your todo",
      data: todo,
    });
  } catch (err) {
    res.json({
      type: "error",
      msg: "Something went wrong",
    });
  }
};
