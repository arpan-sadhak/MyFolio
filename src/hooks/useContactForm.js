import { useState } from "react";

const useContactForm = ({contact}) => {
    
    

  const [status, setStatus] = useState("idle");

  const [contactData, setContactData] = useState(() => ({
    heading: contact?.heading || "",
    email: contact?.email || "",
    location: contact?.location || "",

    social: Array.isArray(contact?.social)
      ? contact.social.map((item) => ({
          platform: item.platform || "github",
          url: item.url || "",
        }))
      : [],
  }));

  const [openPicker, setOpenPicker] = useState(null);

  const handleContactChange = (field, value) => {
    setContactData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSocialChange = (index, field, value) => {
    setContactData((prev) => {
      const social = [...prev.social];

      social[index] = {
        ...social[index],
        [field]: value,
      };

      return {
        ...prev,
        social,
      };
    });
  };

  const handleAddSocial = () => {
    setContactData((prev) => ({
      ...prev,

      social: [
        ...prev.social,
        {
          platform: "github",
          url: "",
        },
      ],
    }));

    setOpenPicker(contactData.social.length);
  };

  const handleDeleteSocial = (index) => {
    setContactData((prev) => ({
      ...prev,

      social: prev.social.filter((_, i) => i !== index),
    }));

    setOpenPicker(null);
  };

  const handleSave = () => {
    console.log("DATA TO SAVE:");
    console.log(contactData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setStatus("sent");

    setTimeout(() => {
      setStatus("idle");
    }, 3000);

    e.target.reset();
  };

  return {
    handleSubmit,
    handleSave,
    handleDeleteSocial,
    handleAddSocial,
    handleSocialChange,
    handleContactChange,
    setOpenPicker,
    openPicker,
    contactData,
    status,
  };
};

export default useContactForm;
