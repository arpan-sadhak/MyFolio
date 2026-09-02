import { useState } from "react";
import { useSelector } from "react-redux";

const useFooterForm = () => {

    const name = useSelector(state => state.hero.name)

  const [footerData, setFooterData] = useState({
    name: name || "",
    copyright: "Built with React & Tailwind CSS.",
  });

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
