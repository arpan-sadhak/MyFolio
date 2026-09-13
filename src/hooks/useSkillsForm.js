import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const useSkillsForm = ({ skills }) => {

  const dispatch = useDispatch();

  const [skillItems, setSkillItems] = useState(
    Array.isArray(skills)
      ? skills.map((skill) => ({
          id: skill.id ?? crypto.randomUUID(),

          name: skill.name ?? "",

          level: Math.min(100, Math.max(0, Number(skill.level) || 0)),
        }))
      : [],
  );

  // useEffect(() => {
  //   setSkillItems(
  //     Array.isArray(skills)
  //       ? skills.map((skill) => ({
  //           id: skill.id ?? crypto.randomUUID(),

  //           name: skill.name ?? "",

  //           level: Math.min(100, Math.max(0, Number(skill.level) || 0)),
  //         }))
  //       : [],
  //   );
  // }, [skills]);

  const handleChange = (id, field, value) => {
    setSkillItems((prev) =>
      prev.map((skill) => {
        if (skill.id !== id) {
          return skill;
        }

        if (field === "level") {
          let level = Number(value);

          if (Number.isNaN(level)) {
            level = 0;
          }

          level = Math.min(100, Math.max(0, level));

          return {
            ...skill,
            level,
          };
        }

        return {
          ...skill,
          [field]: value,
        };
      }),
    );
  };

  const handleAdd = () => {
    const newSkill = {
      id: crypto.randomUUID(),
      name: "",
      level: 50,
    };

    setSkillItems((prev) => [...prev, newSkill]);
  };

  const handleDelete = (id) => {
    setSkillItems((prev) => prev.filter((skill) => skill.id !== id));
  };

  const handleSave = (e) => {
    e.preventDefault();
    dispatch();
  };

  return {
    skillItems,
    handleChange,
    handleAdd,
    handleDelete,
    handleSave,
  };
};

export default useSkillsForm;
