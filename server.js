const express = require("express");
const { MongoClient } = require("mongodb");
const app = express();
const PORT = process.env.PORT || 3000;



app.use(express.json({ extended: false }));

const withDB = async (operations, res) => {
  try {
    const client = await MongoClient.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    const db = client.db(dbName);
    const result = await operations(db);
    client.close();
    return res.status(200).json(result);
  } catch (error) {}
};

const uri = "mongodb://localhost:27017";
const dbName = "mern-blog";

app.get("/api/articles/:name", async (req, res) => {
  const articleName = req.params.name;
  withDB(async (db) => {
    const articleInfo = await db
      .collection("articles")
      .findOne({ name: articleName });
    return res.status(200).json(articleInfo);
  }, res);
});

app.post("/api/articles/:name/add-comments", async (req, res) => {
  const { username, text } = req.body;
  const articleName = req.params.name;
  withDB(async (db) => {
    const articleInfo = await db
      .collection("articles")
      .findOne({ name: articleName });
    await db.collection("articles").updateOne(
      { name: articleName },
      {
        $set: {
          comments: articleInfo.comments.concat({ username, text }),
        },
      }
    );
    const updateArticleInfo = await db
      .collection("articles")
      .findOne({ name: articleName });
    return res.status(200).json(updateArticleInfo);
  }, res);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
