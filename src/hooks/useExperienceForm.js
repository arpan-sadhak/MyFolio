import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const useExperienceForm = ({ items }) => {
  const [experienceItems, setExperienceItems] = useState(
    Array.isArray(items)
      ? items.map((item) => ({
          id: item.id ?? crypto.randomUUID(),
          role: item.role ?? "",
          period: item.period ?? "",
          org: item.org ?? "",
          description: item.description ?? "",
        }))
      : [],
  );

  useEffect(() => {
    setExperienceItems(
      Array.isArray(items)
        ? items.map((item) => ({
            id: item.id ?? crypto.randomUUID(),
            role: item.role ?? "",
            period: item.period ?? "",
            org: item.org ?? "",
            description: item.description ?? "",
          }))
        : [],
    );
  }, [items]);

  const handleChange = (id, field, value) => {
    setExperienceItems((prev) =>
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

  const handleDelete = (id) => {
    setExperienceItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleAdd = () => {
    const newItem = {
      id: crypto.randomUUID(),
      role: "",
      period: "",
      org: "",
      description: "",
    };

    setExperienceItems((prev) => [...prev, newItem]);
  };

  const handleSave = () => {
    console.log("EXPERIENCE DATA:", experienceItems);
  };
  return {
    experienceItems,
    handleChange,
    handleDelete,
    handleAdd,
    handleSave,
  };
};

export default useExperienceForm;
