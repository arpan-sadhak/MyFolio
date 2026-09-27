import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateData } from "../service/api";

const useFooterForm = ({ name, copyright, loaded }) => {

  const id = useSelector(state=>state.data.data?._id);
  const dispatch = useDispatch();

  const [footerData, setFooterData] = useState({
    name: name || "",
    copyright: copyright || '',
  });

  useEffect(() => {
    setFooterData({
      name: name || "",
      copyright: copyright || "Built with React & Tailwind CSS.",
    });
  }, [loaded]);

  const handleChange = (field, value) => {
    setFooterData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSave = () => {
    dispatch(updateData({id, body : {name :footerData.name,  copyright : footerData.copyright}}))
  };

  return {
    handleSave,
    handleChange,
    footerData,
  };
};

export default useFooterForm;
