import {  useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateData } from "../service/api";

const useAboutForm = ({ about, loaded }) => {
  const id = useSelector(state=>state.data?.data?._id);

  const dispatch = useDispatch();
  

  const [formData, setFormData] = useState(() => ({
    heading: about.heading || '',
    body: about.body || '',
    stats: Array.isArray(about.stats)
      ? about.stats.map((stat) => ({ ...stat }))
      : [],
  }));


  
  useEffect(() => {        
    
    setFormData({
    heading: about.heading || '',
    body: about.body || '',
    stats: Array.isArray(about.stats)
      ? about.stats.map((stat) => ({ ...stat }))
      : [],
    });
  }, [loaded]);

  const [openIconPicker, setOpenIconPicker] = useState(null);

  const handleAboutChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleStatChange = (index, field, value) => {
    setFormData((prev) => {
      const updatedStats = [...prev.stats];

      updatedStats[index] = {
        ...updatedStats[index],
        [field]: value,
      };

      return {
        ...prev,
        stats: updatedStats,
      };
    });
  };

  const handleDeleteStat = (index) => {
    setFormData((prev) => ({
      ...prev,
      stats: prev.stats.filter((_, i) => i !== index),
    }));

    setOpenIconPicker(null);
  };

  const handleAddStat = () => {
    setFormData((prev) => ({
      ...prev,
      stats: [
        ...prev.stats,
        {
          icon: "layers",
          value: "0",
          label: "New Stat",
        },
      ],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();        
    dispatch(updateData({id, body:formData}));
  };

  return {
    setFormData,
    formData,
    openIconPicker,
    setOpenIconPicker,
    handleAboutChange,
    handleStatChange,
    handleDeleteStat,
    handleAddStat,
    handleSubmit,
  };
};

export default useAboutForm;
