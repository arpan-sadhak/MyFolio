import { useState } from "react";
import { useSelector } from "react-redux";

const useTestimonialsForm = () => {
  const items = useSelector((state) => state.testimonial.testimonials);

  const [testimonialItems, setTestimonialItems] = useState(
    Array.isArray(items)
      ? items.map((item) => ({
          id: item.id ?? crypto.randomUUID(),

          quote: item.quote ?? "",
          name: item.name ?? "",
          title: item.title ?? "",
          avatar: item.avatar ?? "",
          rating: Math.min(5, Math.max(1, Number(item.rating) || 5)),
        }))
      : [],
  );

  const [index, setIndex] = useState(0);

  const current = testimonialItems[index];

  const handleChange = (id, field, value) => {
    setTestimonialItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              [field]: value,
            }
          : item,
      ),
    );
  };

  const next = () => {
    if (testimonialItems.length === 0) {
      return;
    }

    setIndex((i) => (i + 1) % testimonialItems.length);
  };

  const prev = () => {
    if (testimonialItems.length === 0) {
      return;
    }

    setIndex(
      (i) => (i - 1 + testimonialItems.length) % testimonialItems.length,
    );
  };

  const handleAdd = () => {
    const newItem = {
      id: crypto.randomUUID(),
      quote: "",
      name: "",
      title: "",
      avatar: "",
      rating: 5,
    };

    setTestimonialItems((prev) => {
      const newItems = [...prev, newItem];

      /*
        Automatically show the newly
        created testimonial.
      */

      setIndex(newItems.length - 1);

      return newItems;
    });
  };

  const handleDelete = (id) => {
    setTestimonialItems((prev) => {
      const newItems = prev.filter((item) => item.id !== id);

      /*
        Keep index inside valid range.
      */

      setIndex((currentIndex) =>
        Math.min(currentIndex, Math.max(0, newItems.length - 1)),
      );

      return newItems;
    });
  };

  const handleSave = () => {
    console.log("TESTIMONIAL DATA:", testimonialItems);
  };
  return {
    testimonialItems,
    current,
    handleChange,
    next,
    prev,
    handleAdd,
    handleDelete,
    handleSave,
    index,
  };
};

export default useTestimonialsForm;
