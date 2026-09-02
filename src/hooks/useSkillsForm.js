import { useState } from "react";
import { useSelector } from "react-redux";


const useSkillsForm = () => {

  const skills = useSelector(state => state.skills.skills)

  const [skillItems, setSkillItems] = useState(
    Array.isArray(skills)
      ? skills.map((skill) => ({
          id:
            skill.id ??
            crypto.randomUUID(),

          name: skill.name ?? "",

          level: Math.min(
            100,
            Math.max(
              0,
              Number(skill.level) || 0
            )
          ),
        }))
      : []
  );

  const handleChange = (
    id,
    field,
    value
  ) => {
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

          level = Math.min(
            100,
            Math.max(0, level)
          );

          return {
            ...skill,
            level,
          };
        }

        return {
          ...skill,
          [field]: value,
        };
      })
    );
  };


  const handleAdd = () => {
    const newSkill = {
      id: crypto.randomUUID(),
      name: "",
      level: 50,
    };

    setSkillItems((prev) => [
      ...prev,
      newSkill,
    ]);
  };

  const handleDelete = (id) => {
    setSkillItems((prev) =>
      prev.filter(
        (skill) => skill.id !== id
      )
    );
  };


  const handleSave = () => {
    console.log(
      "SKILLS DATA:",
      skillItems
    );

  };

  return {
    skillItems,
    handleChange,
    handleAdd,
    handleDelete,
    handleSave,
  };
}

export default useSkillsForm;