import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateData } from "../service/api";

const useExperienceForm = ({ items, loaded }) => {
    const id = useSelector(state=>state.data?.data?._id);

  const dispatch = useDispatch()
  const [experienceItems, setExperienceItems] = useState(
    Array.isArray(items)
      ? items.map((item, i) => ({
          id: item._id ?? crypto.randomUUID(),
          role: item.role ?? "",
          period: item.period ?? "",
          org: item.org ?? "",
          description: item.description ?? "",
          order : item.order ?? i,
        }))
      : [],
  );

  useEffect(() => {
    setExperienceItems(
      Array.isArray(items)
        ? items.map((item, i) => ({
            id: item._id ?? crypto.randomUUID(),
            role: item.role ?? "",
            period: item.period ?? "",
            org: item.org ?? "",
            description: item.description ?? "",
            order : item.order ?? i,
          }))
        : [],
    );
  }, [loaded]);

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

    setExperienceItems((prev) => [...prev, {...newItem, order : prev.length+1}]);
  };

  const handleSave = (e) => {
    e.preventDefault();    
    dispatch(updateData({id, body : {experience : experienceItems}}))
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
