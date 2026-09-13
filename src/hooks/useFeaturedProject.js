import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const useFeatureProject = ({ projects, signature }) => {

  const dispatch = useDispatch()

  const [projectItems, setProjectItems] = useState(
    Array.isArray(projects)
      ? projects.map((project) => ({
          ...project,
          id: project.id ?? crypto.randomUUID(),
        }))
      : [],
  );

  const [signatureValue, setSignatureValue] = useState(signature || "");

  // useEffect(() => {
  //   setProjectItems(
  //     Array.isArray(projects)
  //       ? projects.map((project) => ({
  //           ...project,
  //           id: project.id ?? crypto.randomUUID(),
  //         }))
  //       : [],
  //   );

  //   setSignatureValue(signature || "");
  // }, [projects, signature]);

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

  const handleSave = (e) => {
   e.preventDefault();
   dispatch()
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
