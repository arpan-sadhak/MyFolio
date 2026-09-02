import { useState } from "react";
import { useSelector } from "react-redux";

const useBlogForm = () => {
    const posts = useSelector(state => state.blog.blog)

  const [blogPosts, setBlogPosts] = useState(
    Array.isArray(posts)
      ? posts.map((post) => ({
          id: post.id ?? crypto.randomUUID(),
          title: post.title ?? "",
          excerpt: post.excerpt ?? "",
          date: post.date ?? "",
          url: post.url ?? "",
        }))
      : []
  );

  const handleChange = (
    id,
    field,
    value
  ) => {
    setBlogPosts((prev) =>
      prev.map((post) =>
        post.id === id
          ? {
              ...post,
              [field]: value,
            }
          : post
      )
    );
  };


  const handleDelete = (id) => {
    setBlogPosts((prev) =>
      prev.filter(
        (post) => post.id !== id
      )
    );
  };


  const handleAdd = () => {
    const newPost = {
      id: crypto.randomUUID(),
      title: "",
      excerpt: "",
      date: "",
      url: "",
    };

    setBlogPosts((prev) => [
      ...prev,
      newPost,
    ]);
  };


  const handleSave = () => {

    console.log(
      "BLOG DATA:",
      blogPosts
    );

  };

    return {
        blogPosts,
        handleChange,
        handleDelete,
        handleAdd,
        handleSave,
    };
}

export default useBlogForm;