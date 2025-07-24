// 🔐 Google Drive API Key (keep this secure in production)
export const GOOGLE_API_KEY = "AIzaSyDeNUxi0ZqrjfkHNSnkw9gY5mNAzeAwhAg";

// 📁 All Saree Category Folder IDs (auto-scalable)
export const DRIVE_FOLDER_IDS = {
  cotton: "1diz-b8rEEMgUAb2qxv_Yam3KqEP9i_Z1",
  modal: "17wnNlCXjlA6xsiBN8IeKXpcBOFh-tx3J",
  silk: "1GhQGYqA3-OwzxHp8OWZbxhYmjy1EcUtO",
  banarasi: "1lMzeJI2TeicW06GcY-s_LdPfsNtanKdj",
  tussar: "1gHTgh4jgqIrnlvRfLxe9cesRdmsdG1Hf",
  // Add more here as needed
};

// 🎯 Utility to generate Google Drive direct link
export const getDriveImageURL = (fileId, size = 800) =>
  `https://lh3.googleusercontent.com/d/${fileId}=w${size}`;

// 🖼️ Thumbnail Images by Category
export const SAREE_CATEGORIES = [
  {
    id: 1,
    name: "Silk",
    folder: "silk",
    thumbnailId: "1fUVWxMJ_NHKHX86xJmqt4pMMNBqFP5sd",
  },
  {
    id: 2,
    name: "Banarasi",
    folder: "banarasi",
    thumbnailId: "1b2EbAdmUsN78sgxzqb3gOizHH9dyU5_N",
  },
  {
    id: 3,
    name: "Cotton",
    folder: "cotton",
    thumbnailId: "10MqaEXMUTstNu3obxlv85tQbOWKgLtkV",
  },
  {
    id: 4,
    name: "Tussar",
    folder: "tussar",
    thumbnailId: "1ARxGCHpvfD3sBG2ZzgZGECivEM2rBfc6",
  },
  // Add more categories easily later
].map((cat) => ({
  ...cat,
  image: getDriveImageURL(cat.thumbnailId), // auto attach thumbnail URL
}));
