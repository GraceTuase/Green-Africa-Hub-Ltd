// ── Video Configuration ──
// Instagram reels don't work as embedded videos - they open in new tabs
// EVIDENCE VIDEOS: Current reality of gas cooking in African Caribbean communities
// Research shows 70-80% of African Caribbean households rely on gas cooking
const videoConfig = {
  // Current Reality Videos (Gas Cooking Evidence - African Caribbean Communities)
  gasRealityVideos: [
    {
      title: "Gas Cooking Evidence 1",
      url: "https://www.instagram.com/reel/DWgELVljX85/?igsh=MWZ3dXFtZmJtbWs3dw==",
      poster: "images/gas-cooking-poster3.jpg",
      duration: "4:00",
      energyCost: "£0.55",
      carbonEmissions: "3.8kg CO2",
      creator: "Green Africa Hub",
      creatorHandle: "@greenafricahub",
      creatorLink: "https://instagram.com/greenafricahub",
      isInstagram: true,
      description: "Evidence: Prevalent gas cooking methods in African Caribbean households"
    },
    {
      title: "Gas Cooking Evidence 2",
      url: "https://www.instagram.com/reel/DVqR0kFjbZm/?igsh=MXJzczg0MG9ma2Vocg==",
      poster: "images/gas-cooking-poster4.jpg",
      duration: "3:30",
      energyCost: "£0.38",
      carbonEmissions: "2.5kg CO2",
      creator: "Green Africa Hub",
      creatorHandle: "@greenafricahub",
      creatorLink: "https://instagram.com/greenafricahub",
      isInstagram: true,
      description: "Evidence: Widespread gas stove use in African Caribbean communities"
    },
    {
      title: "Gas Cooking Evidence 3",
      url: "https://www.instagram.com/reel/DVqGuGWDGhn/?igsh=cWIzenhhNjV0YmQ1",
      poster: "images/gas-cooking-poster5.jpg",
      duration: "3:20",
      energyCost: "£0.45",
      carbonEmissions: "3.1kg CO2",
      creator: "Green Africa Hub",
      creatorHandle: "@greenafricahub",
      creatorLink: "https://instagram.com/greenafricahub",
      isInstagram: true,
      description: "Evidence: Traditional gas cooking practices in African Caribbean communities"
    }
  ],
  
  // Additional recipe videos
  recipeVideos: [
    {
      title: "Pounded Yam Comparison",
      url: "https://your-pounded-yam-video-url-here", // Replace with your actual video URL
      poster: "images/pounded-yam-poster.jpg",
      duration: "4:00",
      energyCost: "£0.22 vs £0.55",
      carbonEmissions: "1.5kg vs 3.8kg CO2",
      creator: "Green Africa Hub",
      description: "Comparing gas vs induction for pounded yam"
    }
  ]
};

// Function to get video by type and index
function getVideo(type, index = 0) {
  if (videoConfig[type] && videoConfig[type][index]) {
    return videoConfig[type][index];
  }
  return null;
}

// Function to get all videos of a type
function getAllVideos(type) {
  return videoConfig[type] || [];
}

// Function to update video URLs (for easy management)
function updateVideoURL(type, index, newURL) {
  if (videoConfig[type] && videoConfig[type][index]) {
    videoConfig[type][index].url = newURL;
    return true;
  }
  return false;
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = videoConfig;
}
