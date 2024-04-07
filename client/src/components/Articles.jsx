import React from "react";
import { Link } from "react-router-dom";

function Articles({ articles }) {
  return (
    <>
      {articles.map((article, index) => {
        return (
          <div key={index} className="p-4 md:w-1/2">
            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
              <Link to={`/article/${article.name}`}>
                <img
                  className="w-full h-48 object-cover object-center"
                  src={article.image}
                  alt="blog"
                />
              </Link>
              <div className="p-6">
                <Link to={`/article/${article.name}`}>
                  <h2 className="text-xl font-bold text-gray-900 my-2">
                    {article.name}
                  </h2>
                </Link>
                <p className="leading-relaxed mb-3 font-medium text-gray-700">
                  {article.content[0].substring(0, 100)}...
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Articles;
