import {
  Avatar,
  Box,
  Button,
  Dialog,
  DialogActions,
  Typography,
} from "@mui/material";
import React, { Suspense, useEffect } from "react";
import UserTabs from "../../Components/UserTabs/UserTabs";
import Profile3D from "../../Components/Profile3D";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function WrappedProfilePage() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{ marginRight: "200px", marginLeft: "-100px" }}
          onClick={handleClickOpen}
        >
          <Avatar
            alt="Remy Sharp"
            src="https://i.imgur.com/4HmVYKq.png"
            sx={{
              width: { sm: 100, lg: 200 },
              height: { sm: 100, lg: 200 },
              boxShadow:
                "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;",
              cursor: "pointer",
              "&:hover": {
                boxShadow: "rgba(255, 235, 59, 0.8) 0px 4px 8px 0px, rgba(255, 235, 59, 0.6) 0px 6px 12px 4px;",
              },
            }}
            

              
          />
     
     
        </Box>
        <Box>
          <Typography variant="h5">𝗕𝗵𝗮𝗻𝘂𝗽𝗿𝗮𝗸𝗮𝘀𝗵 𝗟𝗮𝗴𝗶𝘀𝗵𝗲𝘁𝘁𝘆</Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: "40px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography>4</Typography>
              <Typography sx={{ fontWeight: "600" }}>Posts</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography>4444</Typography>
              <Typography sx={{ fontWeight: "600" }}>Followers</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography>44</Typography>
              <Typography sx={{ fontWeight: "600" }}>Following</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box>
    
      <UserTabs/>

      </Box>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <img src="https://i.imgur.com/4HmVYKq.png"></img>

        <DialogActions>
          <Button onClick={handleClose}>close</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default WrappedProfilePage;
