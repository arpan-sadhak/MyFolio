import { useState } from "react";
import { useSelector } from "react-redux";

const useFeatureProject = () => {
  const projects = useSelector((state) => state.projects.project);
  const signature = useSelector((state) => state.hero.signature);
  
  


  const [projectItems, setProjectItems] = useState(
    Array.isArray(projects)
      ? projects.map((project) => ({
          ...project,
          id: project.id ?? crypto.randomUUID(),
        }))
      : [],
  );

  const [signatureValue, setSignatureValue] = useState(signature || "");

  const handleProjectChange = (id, field, value) => {
    setProjectItems((prev) =>
      prev.map((project) =>
        project.id === id
          ? {
              ...project,
              [field]: value,
            }
          : project,
      ),
    );
  };

  const handleDeleteProject = (id) => {
    setProjectItems((prev) => prev.filter((project) => project.id !== id));
  };

  const handleAddProject = () => {
    const newProject = {
      id: crypto.randomUUID(),

      title: "",
      description: "",
      image: "",
      url: "",
      tags: [],
    };

    setProjectItems((prev) => [...prev, newProject]);
  };

  const handleSave = () => {
    const data = {
      projects: projectItems,
      signature: signatureValue,
    };

    console.log("FEATURED PROJECT DATA:", data);
  };

  return {
    projectItems,
    signatureValue,
    setSignatureValue,
    handleProjectChange,
    handleDeleteProject,
    handleAddProject,
    handleSave,
  };
};

export default useFeatureProject;
