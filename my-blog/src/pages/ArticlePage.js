import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import NotFoundPage from "./NotFoundPage";
import AddCommentform from "../components/AddCommentForm";
import CommentsList from "../components/CommentsList";
import useUser from "../hooks/UseUser";
import articles from "./article-content";

const ArticlePage = () => {
  const [articleInfo, setArticleInfo] = useState({ upvote: 0, comments: [] , canUpvote: false});
  const {canUpvote} = articleInfo
  const { articleId } = useParams();

  const { user, isLoading } = useState();

  useEffect(() => {
    const loadArticleInfo = async () => {
      const token = user && await user.getIdToken();
      const headers = token ? { authtoken: token }: {};
      const response = await axios.get(`/api/articles/${articleId}`, { headers });
      const newArticleInfo = response.data;
      setArticleInfo(newArticleInfo);
    };
    if (!isLoading){
      loadArticleInfo();
    }
  }, [ isLoading,user]);

  const article = articles.find((article) => article.name === articleId);

  const addUpvote = async () => {
    const token = user && await user.getIdToken();
    const headers = token ? { authtoken: token }: {};
    const response = await axios.put(`/api/articles/${articleId}/upvote`, null, {headers});
    const updateArticle = response.data;
    setArticleInfo(updateArticle);
  };

  if (!article) {
    return <NotFoundPage />;
  }

  return (
    <>
      <h1>{article.title}</h1>
      <div className="upvote-section">
        {user ? (
          <button onClick={addUpvote}>{canUpvote ? 'Upvote': 'Already Upvoted'}</button>
        ) : (
          <button>log in to upvote </button>
        )}
        <p> This articles has {articleInfo.upvote} upvote(s)</p>
      </div>
      {article.content.map((paragraph, i) => (
        <p key={i}>{paragraph} </p>
      ))}

      {user ? (
        <AddCommentform
          articleName={articleId}
          onArticleUpdate={(updateArticle) => setArticleInfo(updateArticle)}
        />
      ) : (
        <button>Log in to a comment</button>
      )}
      <CommentsList comments={articleInfo.comments} />
    </>
  );
};

export default ArticlePage;
