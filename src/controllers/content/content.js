const { saveContent } = require("../../services/content/content");

exports.postContent = async (req, res) => {
  const { title, body } = req.body;
  let user = req.isLoggedInData
  try {
    let todo = await saveContent({ title, body, created_by: user.user_id });
    res.json({
      type: "success",
      msg: "Successfully updated your todo",
      data: todo,
    });
  } catch (err) {
    console.log(err)
    res.json({
      type: "error",
      msg: "Something went wrong",
    });
  }
};
