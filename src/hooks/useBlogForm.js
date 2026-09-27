import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateData } from "../service/api";

const useBlogForm = ({ posts, loaded }) => {
  const id = useSelector((state) => state.data.data._id);
  const dispatch = useDispatch();
  const [blogPosts, setBlogPosts] = useState(
    Array.isArray(posts)
      ? posts.map((post) => ({
          id: post.id ?? crypto.randomUUID(),
          title: post.title ?? "",
          excerpt: post.excerpt ?? "",
          date: post.date ?? "",
          url: post.url ?? "",
        }))
      : [],
  );

  useEffect(() => {
    setBlogPosts(
      Array.isArray(posts)
        ? posts.map((post) => ({
            id: post.id ?? crypto.randomUUID(),
            title: post.title ?? "",
            excerpt: post.excerpt ?? "",
            date: post.date ?? "",
            url: post.url ?? "",
          }))
        : [],
    );
  }, [loaded]);

  const handleChange = (id, field, value) => {
    setBlogPosts((prev) =>
      prev.map((post) =>
        post.id === id
          ? {
              ...post,
              [field]: value,
            }
          : post,
      ),
    );
  };

  const handleDelete = (id) => {
    setBlogPosts((prev) => prev.filter((post) => post.id !== id));
  };

  const handleAdd = () => {
    const newPost = {
      id: crypto.randomUUID(),
      title: "",
      excerpt: "",
      date: "",
      url: "",
    };

    setBlogPosts((prev) => [...prev, newPost]);
  };

  const handleSave = (e) => {
    e.preventDefault();
    dispatch(updateData({ id, body: { blog: blogPosts } }));
  };

  return {
    blogPosts,
    handleChange,
    handleDelete,
    handleAdd,
    handleSave,
  };
};

export default useBlogForm;
