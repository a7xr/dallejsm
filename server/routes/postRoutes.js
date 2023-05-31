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
router.route("/").get(async (req, res) => {});

// Create a Posts
router.route("/").post(async (req, res) => {
  const { name, prompt, photo } = req.body;
  const photoUrl = cloudinary.uploader.upload(photo);
  const newPost = await Post.create({
    name,
    prompt,
    photo: photoUrl.url,
  });
});

export default router;
