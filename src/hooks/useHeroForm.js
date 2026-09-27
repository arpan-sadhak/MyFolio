import { useDispatch, useSelector } from "react-redux";
import { useState, useRef, useEffect } from "react";
import { updateData, uploadImage } from "../service/api";

const useHeroForm = ({ profile, loaded }) => {
  const id = useSelector((state) => state.data.data?._id);
  const [uploading, setUploading] = useState(false);
  const dispatch = useDispatch();

  const [formData, setFormData] = useState(() => ({
    id: profile?._id || "",
    greeting: profile?.greeting || "",
    firstName: profile?.firstName || "",
    lastName: profile?.lastName || "",
    role: profile?.role || "",
    tagline: profile?.tagline || "",
    avatar: {
      imgUrl: profile?.avatar?.imgUrl || "",
      avatarPositionX: profile?.avatar?.avatarPositionX || 50,
      avatarPositionY: profile?.avatar?.avatarPositionY || 50,
      avatarScale: profile?.avatar?.avatarScale || 1,
    },
    name: profile?.name || "",

    yearsLabel: profile?.yearsLabel || "",
    yearsSub: profile?.yearsSub || "",
    availability: profile?.availability || "",
  }));

  useEffect(() => {
    setFormData({
      id: profile?._id || "",
      greeting: profile?.greeting || "",
      firstName: profile?.firstName || "",
      lastName: profile?.lastName || "",
      role: profile?.role || "",
      tagline: profile?.tagline || "",
      imgUrl: profile?.avatar?.imgUrl || "",
      avatarPositionX: profile?.avatar?.avatarPositionX || 50,
      avatarPositionY: profile?.avatar?.avatarPositionY || 50,
      avatarScale: profile?.avatar?.avatarScale || 1,
      name: profile?.name || "",

      yearsLabel: profile?.yearsLabel || "",
      yearsSub: profile?.yearsSub || "",
      availability: profile?.availability || "",
    });
    setImagePreview(profile?.avatar?.imgUrl);
  }, [loaded]);

  const [imagePreview, setImagePreview] = useState(
    profile?.avatar?.imgUrl || "",
  );

  const [selectedImageFile, setSelectedImageFile] = useState(null);

  const fileInputRef = useRef(null);

  /* =========================================================
     DRAG STATE
  ========================================================= */

  const [isDragging, setIsDragging] = useState(false);

  const dragStartRef = useRef({
    x: 0,
    y: 0,
    positionX: 50,
    positionY: 50,
  });

  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  /* =========================================================
     IMAGE UPLOAD
  ========================================================= */

  const handleImageChange = async (e) => {
    const file = e.target.files[0];

    if (!file) return;

    try {
      setUploading(true);
      const imageUrl = await uploadImage(file);

      setFormData((prev) => ({
        ...prev,
        imgUrl: imageUrl,
      }));
      imageUrl && setUploading(false);
    } catch (error) {
      console.error(error);
    }
  };
  /* =========================================================
     START IMAGE DRAG
  ========================================================= */

  const handlePointerDown = (e) => {
    if (!imagePreview) return;

    e.preventDefault();

    setIsDragging(true);

    dragStartRef.current = {
      x: e.clientX,
      y: e.clientY,
      positionX: formData.avatarPositionX,
      positionY: formData.avatarPositionY,
    };

    e.currentTarget.setPointerCapture?.(e.pointerId);
  };

  /* =========================================================
     DRAG IMAGE
  ========================================================= */

  const handlePointerMove = (e) => {
    if (!isDragging) return;

    /*
     * Convert mouse movement into percentage movement.
     *
     * The multiplier controls dragging sensitivity.
     */
    const movementX = e.clientX - dragStartRef.current.x;
    const movementY = e.clientY - dragStartRef.current.y;

    const sensitivity = 0.35;

    let newX = dragStartRef.current.positionX - movementX * sensitivity;

    let newY = dragStartRef.current.positionY - movementY * sensitivity;

    /*
     * Keep position within reasonable limits.
     */
    newX = Math.max(0, Math.min(100, newX));
    newY = Math.max(0, Math.min(100, newY));

    setFormData((prev) => ({
      ...prev,
      avatarPositionX: newX,
      avatarPositionY: newY,
    }));
  };

  /* =========================================================
     STOP DRAG
  ========================================================= */

  const handlePointerUp = (e) => {
    setIsDragging(false);

    e.currentTarget.releasePointerCapture?.(e.pointerId);
  };

  /* =========================================================
     ZOOM IN
  ========================================================= */

  const handleZoomIn = () => {
    setFormData((prev) => ({
      ...prev,
      avatarScale: Math.min(3, Number((prev.avatarScale + 0.1).toFixed(2))),
    }));
  };

  /* =========================================================
     ZOOM OUT
  ========================================================= */

  const handleZoomOut = () => {
    setFormData((prev) => ({
      ...prev,
      avatarScale: Math.max(1, Number((prev.avatarScale - 0.1).toFixed(2))),
    }));
  };

  /* =========================================================
     RESET IMAGE POSITION
  ========================================================= */

  const handleResetImage = () => {
    setFormData((prev) => ({
      ...prev,
      avatarPositionX: 50,
      avatarPositionY: 50,
      avatarScale: 1,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      updateData({
        id,
        body: {
          availability: formData.availability,
          avatar: {
            imgUrl: formData?.imgUrl,
            avatarPositionX: formData.avatarPositionX,
            avatarPositionY: formData.avatarPositionY,
            avatarScale: formData.avatarScale,
          },
          firstName: formData.firstName,
          greeting: formData.greeting,
          lastName: formData.lastName,
          name: formData.name,
          role: formData.role,
          tagline: formData.tagline,
          yearsLabel: formData.yearsLabel,
          yearsSub: formData.yearsSub,
        },
      }),
    );
  };

  return {
    formData,
    fileInputRef,
    imagePreview,
    isDragging,
    handleChange,
    handleImageChange,
    handlePointerDown,
    handlePointerMove,
    handlePointerUp,
    handleZoomIn,
    handleZoomOut,
    handleResetImage,
    handleSubmit,
    uploading,
  };
};

export default useHeroForm;
