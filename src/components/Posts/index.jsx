import PostCard from "../PostCard";

const Posts = ({ posts }) => {
  return (
    <div className="posts">
      {posts.map((post) => (
        <PostCard
          key={post.id}
          cover={post.cover}
          title={post.title}
          body={post.body}
        />
      ))}
    </div>
  );
};

export default Posts;
