import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ChatIcon from "@mui/icons-material/Chat";
import { Box, CircularProgress } from "@mui/material";
import like from "../Post/like.png";
import {
  Favorite,
  FavoriteBorder,
  FavoriteBorderOutlined,
} from "@mui/icons-material";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const getRandomHexColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

export default function Post({ image, caption, username, userProfile }) {
  const [expanded, setExpanded] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);
  const [isLiked, setIsLiked] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const randomColor = getRandomHexColor();

  const handleOnLoad = () => {
    setIsLoading(false);
  };

  const togglelike = () => {
    setIsLiked(!isLiked);
  };

  
  return (
    <>
      {isLoading && (
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(255, 255, 255, 0.7)", // Semi-transparent background
            borderRadius: "10px",
            zIndex: 1,
          }}
        >
          <CircularProgress disableShrink />
        </Box>
      )}
      <Card
        sx={{
          maxWidth: 455,
          boxShadow:
            "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;",
          borderRadius: "10px",
          position: "relative",
          display: isLoading ? "none" : "block", // Hide card until image is loaded
        }}
      >
        <CardHeader
          avatar={
          
            <Avatar alt="Remy Sharp"  src={userProfile}  sx={{background:randomColor, boxShadow:
              "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;"}}/>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={username}
          subheader="September 14, 2016"
        />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CardMedia
            component="img"
            height="auto"
            image={image}
            alt="Post image"
            sx={{
              width: "90%",
              boxShadow:
                "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;",
              borderRadius: "10px",
            }}
            onLoad={handleOnLoad}
          />
        </Box>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {caption}
          </Typography>
        </CardContent>
        <CardActions
          disableSpacing
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <IconButton
            aria-label="add to favorites"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            onClick={togglelike}
          >
            {isLiked ? (
              <img src={like} width="25px" height="25px" alt="Like" loading="lazy" />

            ) : (
              // <img src={whiteLike} width={"25px"} height={"25px"} alt="Like" />
              <FavoriteBorderOutlined />
            )}
          </IconButton>

          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <IconButton aria-label="comment">
            <ChatIcon />
          </IconButton>

          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>
              Add rice and stir very gently to distribute. Top with artichokes
              and 5 to 7 minutes more. (Discard any mussels that don't open.)
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </>
  );
}
