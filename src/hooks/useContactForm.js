import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateData } from "../service/api";

const useContactForm = ({ contact, loaded }) => {
  const id = useSelector((state) => state.data?.data?._id);
   const message = useSelector(state=>state.data.data.message)

  const dispatch = useDispatch();

  const [status, setStatus] = useState("idle");

  const [contactData, setContactData] = useState(() => ({
    heading: contact?.heading || "",
    email: contact?.email || "",
    location: contact?.location || "",

    Social: Array.isArray(contact?.Social)
      ? contact.Social.map((item) => ({
          platform: item.platform || "github",
          url: item.url || "",
        }))
      : [],
  }));

  useEffect(() => {
    setContactData({
      heading: contact?.heading || "",
      email: contact?.email || "",
      location: contact?.location || "",

      Social: Array.isArray(contact?.Social)
        ? contact.Social.map((item) => ({
            platform: item.platform || "github",
            url: item.url || "",
          }))
        : [],
    });
  }, [loaded]);

  const [openPicker, setOpenPicker] = useState(null);

  const handleContactChange = (field, value) => {
    setContactData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSocialChange = (index, field, value) => {
    setContactData((prev) => {
      const Social = [...prev.Social];

      Social[index] = {
        ...Social[index],
        [field]: value,
      };

      return {
        ...prev,
        Social,
      };
    });
  };

  const handleAddSocial = () => {
    setContactData((prev) => ({
      ...prev,

      Social: [
        ...prev.Social,
        {
          platform: "github",
          url: "",
        },
      ],
    }));

    setOpenPicker(contactData.Social.length);
  };

  const handleDeleteSocial = (index) => {
    setContactData((prev) => ({
      ...prev,

      Social: prev.Social.filter((_, i) => i !== index),
    }));

    setOpenPicker(null);
  };

  const handleSave = (e) => {
    e.preventDefault();
    dispatch(updateData({ id, body: { contact: contactData } }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    dispatch(updateData({id, body:{ message : [...message, data] }}));
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
