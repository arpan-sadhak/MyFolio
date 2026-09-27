import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateData } from "../service/api";

const useFeatureProject = ({ projects, signature, loaded }) => {
  const id = useSelector((state) => state.data?.data?._id);

  const dispatch = useDispatch();

  const [projectItems, setProjectItems] = useState(
    Array.isArray(projects)
      ? projects.map((project) => ({
          ...project,
          id: project._id ?? crypto.randomUUID(),
        }))
      : [],
  );

  const [signatureValue, setSignatureValue] = useState({
    mainHeading: signature?.mainHeading,
    body: signature?.body,
    paragraph: signature?.paragraph,
    sign: signature?.sign,
  });

  useEffect(() => {
    setProjectItems(
      Array.isArray(projects)
        ? projects.map((project) => ({
            ...project,
            id: project._id ?? crypto.randomUUID(),
          }))
        : [],
    );

    setSignatureValue({
      mainHeading: signature?.mainHeading,
      body: signature?.body,
      paragraph: signature?.paragraph,
      sign: signature?.sign,
    });
  }, [loaded]);
  const handleSignatureChange = (field, value) => {
    setSignatureValue((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

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
    dispatch(
      updateData({
        id,
        body: { project: projectItems, signature: signatureValue },
      }),
    );
  };

  return {
    projectItems,
    signatureValue,
    // setSignatureValue,
    handleSignatureChange,
    handleProjectChange,
    handleDeleteProject,
    handleAddProject,
    handleSave,
  };
};

export default useFeatureProject;
