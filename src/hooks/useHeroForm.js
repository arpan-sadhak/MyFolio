import { useSelector } from "react-redux";
import { useState, useRef } from "react";

const useHeroForm = () => {
    const profile = useSelector(state => state.hero);

  const [formData, setFormData] = useState(() => ({
    greeting: profile?.greeting || "",
    firstName: profile?.firstName || "",
    lastName: profile?.lastName || "",
    role: profile?.role || "",
    tagline: profile?.tagline || "",
    avatar: profile?.avatar || "",
    name: profile?.name || "",

    yearsLabel: profile?.yearsLabel || "",
    yearsSub: profile?.yearsSub || "",
    availability: profile?.availability || "",
    avatarPositionX: profile?.avatarPositionX ?? 50,
    avatarPositionY: profile?.avatarPositionY ?? 50,
    avatarScale: profile?.avatarScale ?? 1,
  }));

  const [imagePreview, setImagePreview] = useState(
    profile?.avatar || ""
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

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];

    if (!file) return;

    /*
     * Keep the actual File.
     *
     * This is important because later you can upload
     * the original file to Cloudinary/backend.
     */
    setSelectedImageFile(file);

    /*
     * FileReader gives a reliable local preview.
     */
    const reader = new FileReader();

    reader.onload = () => {
      const result = reader.result;

      setImagePreview(result);

      /*
       * Reset crop whenever a new image is selected.
       */
      setFormData((prev) => ({
        ...prev,
        avatar: result,
        avatarPositionX: 50,
        avatarPositionY: 50,
        avatarScale: 1,
      }));
    };

    reader.readAsDataURL(file);
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

    let newX =
      dragStartRef.current.positionX -
      movementX * sensitivity;

    let newY =
      dragStartRef.current.positionY -
      movementY * sensitivity;

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
      avatarScale: Math.min(
        3,
        Number((prev.avatarScale + 0.1).toFixed(2))
      ),
    }));
  };

  /* =========================================================
     ZOOM OUT
  ========================================================= */

  const handleZoomOut = () => {
    setFormData((prev) => ({
      ...prev,
      avatarScale: Math.max(
        1,
        Number((prev.avatarScale - 0.1).toFixed(2))
      ),
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


  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Updated Hero data:", formData);

    console.log("Selected image file:", selectedImageFile);

  };

  return {
    formData,
    fileInputRef,
    imagePreview,
    isDragging ,
    handleChange,
    handleImageChange,
    handlePointerDown,
    handlePointerMove,
    handlePointerUp,
    handleZoomIn,
    handleZoomOut,
    handleResetImage,
    handleSubmit,
  }
};

export default useHeroForm;