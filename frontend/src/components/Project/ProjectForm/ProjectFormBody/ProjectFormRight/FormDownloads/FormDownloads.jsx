import React from "react";
import TextField from "@mui/material/TextField";
import { Paper, FormControl } from "@mui/material";

export default function FormDownloads() {
  const handleImageUpload = async (event) => {
    if (event.target.files && event.target.files[0]) {
      const imgFile = event.target.files[0];

      const formData = new FormData();
      formData.append("image", imgFile);

      try {
        // Remplacez cette URL par l'URL de votre API pour la route d'upload d'image
        const uploadUrl = "http://localhost:3000/upload";

        const response = await fetch(uploadUrl, {
          method: "POST",
          body: formData,
        });

        if (response.ok) {
          console.info("Image uploaded successfully.");
        } else {
          console.error("Error uploading image:", response.statusText);
        }
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    }
  };
  return (
    <Paper elevation={2} sx={{ p: 2, width: "100%" }}>
      <FormControl sx={{ m: 0, width: "100%" }}>
        <TextField
          label="Image du projet"
          name="project_image"
          type="file"
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            accept: "image/*",
          }}
          onChange={(event) => {
            // handleChange(event);
            handleImageUpload(event);
          }}
        />
      </FormControl>
    </Paper>
  );
}
