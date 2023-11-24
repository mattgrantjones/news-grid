import { NewsArticle } from "../types/newsArticles";

const ListBlock: React.FC<{ articles: NewsArticle[] }> = ({ articles }) => {
  return (
    <div className="col-span-4 border-t-4 pt-5 lg:border-t-0 lg:pt-0 lg:col-span-1 lg:col-start-4 lg:row-start-3 lg:col-end-4 lg:row-span-2 flex flex-col justify-start text-left">
      {articles?.map((article, articleIndex) => (
        <div
          key={article.id}
          className={
            "flex flex-col mt-0 sm:px-2 lg:pb-6 first:pt-0 pt-4 py-5 items-start flex-grow self-stretch " +
            (articleIndex < articles.length - 1 ? "border-b-2" : "")
          }
        >
          <h1 className={"text-xl"}>{article.head}</h1>
        </div>
      ))}
    </div>
  );
};

export default ListBlock;
