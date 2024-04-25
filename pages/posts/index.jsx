import { client } from "../../lib/contentful/client";
import PostCard from "../../components/posts/PostCard";

const Posts = ({ author }) => {
  return (
    <section className="section">
      <div className="container">
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:gap-10">
          {author.map((author, i) => (
            <PostCard key={author.fields.slug} author={author} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export const getStaticProps = async () => {
  const response = await client.getEntries({ content_type: "author" });

  return {
    props: {
      posts: response.items,
      revalidate: 60,
    },
  };
};

export default Posts;
