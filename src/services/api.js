const api = {
  getVideoMetadata: async () => {
    // Return a mock video metadata
    return {
      video_name: "Ontario Camera",
      frame_count: 10, // Simulating 10 frames
    };
  },
  getFrame: async (index) => {
    // Construct the correct URL for fetching images from the public folder
    const imageUrl = `/frames/images/${index}.jpeg`; // Path without `public/`

    const response = await fetch(imageUrl);
    if (!response.ok) {
      throw new Error("Failed to fetch the image.");
    }

    return response.blob();
  },
};

export default api;
