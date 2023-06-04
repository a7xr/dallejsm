import express from "express";
import * as dotenv from "dotenv";
import { v2 as cloudinary } from "cloudinary";

import Post from "../mongodb/models/post.js";

dotenv.config();

const router = express.Router();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api: process.env.CLOUDINARY_API_KEY,
  secret: process.env.CLOUDINARY_API_SECRET,
});

// Get all Posts
router.route("/").get(async (req, res) => {
  try {
    console.log("postRoutesGet");
    const posts = await Post.find({});
    res.status(200).json({ success: true, data: posts });
  } catch (error) {
    res.status(500).json({ success: false, message: error });
  }
});

// Create a Posts
router.route("/").post(async (req, res) => {
  try {
    console.log("postRoutesPost");
    const { name, prompt, photo } = req.body;
    console.log("name: " + name);
    console.log("prompt: " + prompt);
    // console.log("photo" + photo);
    const photoUrl = await cloudinary.uploader.upload(photo);
    console.log("photoUrl: " + photoUrl);
    const newPost = await Post.create({
      name,
      prompt,
      photo: photoUrl.url,
    });

    res.status(201).json({
      success: true,
      data: newPost,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error });
  }
});

export default router;
