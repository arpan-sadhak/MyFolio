import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const useFooterForm = ({ name }) => {
  const [footerData, setFooterData] = useState({
    name: name || "",
    copyright: "Built with React & Tailwind CSS.",
  });
  // useEffect(() => {
  //   setFooterData({
  //     name: name || "",
  //     copyright: "Built with React & Tailwind CSS.",
  //   });
  // }, [name]);

  const handleChange = (field, value) => {
    setFooterData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSave = () => {
    console.log("FOOTER DATA:", footerData);
  };

  return {
    handleSave,
    handleChange,
    footerData,
  };
};

export default useFooterForm;
