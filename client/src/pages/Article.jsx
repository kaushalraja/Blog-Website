import  { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import articles from "./article-content";
import Articles from "../components/Articles";
import CommentsList from "../components/CommentsList";
import AddCommentFrom from "../components/AddCommentFrom";
import NotFound from "./NotFound";

function Article() {
  const { name } = useParams();
  const article = articles.find((article) => article.name === name);
  const [articleInfo, setArticleInfo] = useState({ comments: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(`/api/articles/${name}`);
      const body = await result.json();
      console.log(body);
      setArticleInfo(body);
    };
    fetchData();
  }, [name]);

  const otherArticles = articles.filter((article) => article.name !== name);

  // Check if article is not found and display a 404 message
  if (!article) {
    return <NotFound />;
  }

  return (
    <div>
      <h1 className="sm:text-4xl text-2xl font-bold my-6 text-gray-900">
        {article.title}
      </h1>
      {article.content.map((paragraph, index) => (
        <p key={index} className="mx-auto leading-relaxed text-base mb-4">
          {paragraph}
        </p>
      ))}
      <CommentsList comments={articleInfo.comments} />
      <AddCommentFrom articleName={name} setArticleInfo={setArticleInfo} />
      <h1 className="sm:text-2xl text-xl font-bold my-4 text-gray-900">
        Other Articles
      </h1>
      <div className="flex flex-wrap -m-4">
        <Articles articles={otherArticles} />
      </div>
    </div>
  );
}

export default Article;
