import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const useTechStackForm = ({ stack }) => {
  const [techItems, setTechItems] = useState(
    Array.isArray(stack)
      ? stack.map((tech) => ({
          id: tech.id ?? crypto.randomUUID(),

          name: tech.name ?? "",

          icon: tech.icon ?? "react",

          type: tech.type ?? "devicon",
        }))
      : [],
  );

  useEffect(()=>{
    setTechItems(Array.isArray(stack)
      ? stack.map((tech) => ({
          id: tech.id ?? crypto.randomUUID(),

          name: tech.name ?? "",

          icon: tech.icon ?? "react",

          type: tech.type ?? "devicon",
        }))
      : [],)
  },[stack])

  const [openPicker, setOpenPicker] = useState(null);

  const [customEditor, setCustomEditor] = useState(null);

  const selectDevicon = (id, icon, name) => {
    setTechItems((prev) =>
      prev.map((tech) =>
        tech.id === id
          ? {
              ...tech,
              name,
              icon,
              type: "devicon",
            }
          : tech,
      ),
    );

    setOpenPicker(null);
  };

  const createCustom = (id) => {
    setOpenPicker(null);

    setCustomEditor({
      id,
      name: "",
      icon: "",
      file: null,
    });
  };

  const updateCustomName = (value) => {
    setCustomEditor((prev) => ({
      ...prev,
      name: value,
    }));
  };

  const updateCustomImage = (file) => {
    if (!file.type.startsWith("image/")) {
      return;
    }

    const imageUrl = URL.createObjectURL(file);

    setCustomEditor((prev) => ({
      ...prev,
      icon: imageUrl,
      file,
    }));
  };

  const finishCustom = () => {
    if (!customEditor?.name.trim() || !customEditor.icon) {
      return;
    }

    setTechItems((prev) =>
      prev.map((tech) =>
        tech.id === customEditor.id
          ? {
              ...tech,
              name: customEditor.name,
              icon: customEditor.icon,
              type: "image",

              /*
                Actual File.
                Upload this to your
                storage provider later.
              */

              file: customEditor.file,
            }
          : tech,
      ),
    );

    setCustomEditor(null);
  };

  const handleAdd = () => {
    const id = crypto.randomUUID();

    setTechItems((prev) => [
      ...prev,
      {
        id,
        name: "React",
        icon: "react",
        type: "devicon",
      },
    ]);

    setOpenPicker(id);
  };

  const handleDelete = (id) => {
    setTechItems((prev) => {
      const item = prev.find((tech) => tech.id === id);

      if (item?.type === "image" && item.icon?.startsWith("blob:")) {
        URL.revokeObjectURL(item.icon);
      }

      return prev.filter((tech) => tech.id !== id);
    });

    setOpenPicker(null);
    setCustomEditor(null);
  };

  const handleSave = () => {
    const data = techItems.map((tech) => ({
      id: tech.id,
      name: tech.name,
      icon: tech.icon,
      type: tech.type,
    }));

    console.log("TECH STACK:", data);
  };

  return {
    handleSave,
    handleDelete,
    handleAdd,
    finishCustom,
    updateCustomImage,
    updateCustomName,
    createCustom,
    selectDevicon,
    customEditor,
    openPicker,
    techItems,
  };
};

export default useTechStackForm;
