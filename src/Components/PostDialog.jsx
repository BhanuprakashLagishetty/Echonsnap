import * as React from "react";
import Dialog from "@mui/material/Dialog";
import { Box } from "@mui/material";
import InputFileUpload from "./UploadFiles";
import InputTextFiled from "./InputTextField";
import Tags from "./SearchFiled";

export default function PostDialog({ open, handleClickOpen, handleClose }) {
  const [file, setFile] = React.useState(null);

  const handleImageChange = (event) => {
    const uploadedFile = event.target.files[0];
    if (uploadedFile && uploadedFile.type.startsWith("image/")) {
      setFile(uploadedFile);
    } else {
      alert("Please upload a valid image file");
    }
  };

  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: 2,
          }}
        >
          {file && (
            <Box
              sx={{
                display: "flex",

                justifyContent: "center",
                width: "100%",
              }}
            >
              <Box sx={{ width: "60%" }}>
                <img
                  src={URL.createObjectURL(file)}
                  alt="Uploaded"
                  width={"100%"}
                  height={"100%"}
                />
              </Box>
              <Box
                sx={{
                  marginLeft: 2,
                  alignItems: "top",
                  justifyContent: "center",
                }}
              >
                <InputTextFiled title={"Please enter caption"} />
                <Tags sx={{ width: "40px" }} />
              </Box>
            </Box>
          )}
          {!file && <InputFileUpload handleImageChange={handleImageChange} />}
        </Box>
      </Dialog>
    </React.Fragment>
  );
}
