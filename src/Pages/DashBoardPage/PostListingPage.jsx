import React from "react";
import Post from "../../Components/Post";
import { Box } from "@mui/material";
import postDetails from "../../MockData/Posts.json"

function PostListingPage() {
  console.log(postDetails.posts.length,"posts");
  return (
    <>
    {
      postDetails.posts.map((item)=>(

      <Box
        sx={{ display: "flex", flexDirection: "column", marginBottom: "50px" }}
      >
        <Post image={item.imageUrl} caption={item.caption} username={item.username} userProfile={item.userImage}/>
      </Box>
      ))
      

    }
   
    </>
  );
}

export default PostListingPage;
