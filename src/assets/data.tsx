type Restaurant = {
    id: number;
    name: string;
    position: [number, number];
    ratings?: {
      google: number;
      tripadvisor: number;
    };
    videos: {
      id: number;
      title: string;
      creator: string;
      videoId: string;
      timestamp: number;
      thumbnailUrl: string;
    }[];
  };

const restaurants: Restaurant[] = [
    {
      id: 1,
      name: "Joe's Pizza",
      position: [40.7307, -74.0027],
      videos: [
        {
          id: 1,
          title: "Best Pizza in NYC",
          creator: "Food Network",
          videoId: "dQw4w9WgXcQ", // Replace with actual YouTube video ID
          timestamp: 120,
          thumbnailUrl: `https://img.youtube.com/vi/dQw4w9WgXcQ/mqdefault.jpg`
        },
        {
          id: 2,
          title: "Best Pizza in NYC",
          creator: "Food Network",
          videoId: "DivoUKH7PwE", // Replace with actual YouTube video ID
          timestamp: 120,
          thumbnailUrl: `https://img.youtube.com/vi/dQw4w9WgXcQ/mqdefault.jpg`
        },
        {
          id: 3,
          title: "NYC's Most Famous Deli",
          creator: "Mark Wiens",
          videoId: "S0sYriIsvr4", // Replace with actual YouTube video ID
          timestamp: 180,
          thumbnailUrl: `https://img.youtube.com/vi/jm3dm5J5r0A/mqdefault.jpg`
        },
        {
          id: 4,
          title: "NYC's Most Famous Deli",
          creator: "Mark Wiens",
          videoId: "S0sYriIsvr4", // Replace with actual YouTube video ID
          timestamp: 180,
          thumbnailUrl: `https://img.youtube.com/vi/jm3dm5J5r0A/mqdefault.jpg`
        },
        {
          id: 5,
          title: "NYC's Most Famous Deli",
          creator: "Mark Wiens",
          videoId: "S0sYriIsvr4", // Replace with actual YouTube video ID
          timestamp: 180,
          thumbnailUrl: `https://img.youtube.com/vi/jm3dm5J5r0A/mqdefault.jpg`
        },
        {
          id: 6,
          title: "NYC's Most Famous Deli",
          creator: "Mark Wiens",
          videoId: "S0sYriIsvr4", // Replace with actual YouTube video ID
          timestamp: 180,
          thumbnailUrl: `https://img.youtube.com/vi/jm3dm5J5r0A/mqdefault.jpg`
        },
        {
          id: 7,
          title: "NYC's Most Famous Deli",
          creator: "Mark Wiens",
          videoId: "S0sYriIsvr4", // Replace with actual YouTube video ID
          timestamp: 180,
          thumbnailUrl: `https://img.youtube.com/vi/jm3dm5J5r0A/mqdefault.jpg`
        }
      ]
    },
    {
      id: 2,
      name: "Katz's Delicatessen",
      position: [40.7223, -73.9874],
      ratings: {
        "google": 4.5,
        "tripadvisor": 4.5
      },
      videos: [
        {
          id: 2,
          title: "NYC's Most Famous Deli",
          creator: "Mark Wiens",
          videoId: "S0sYriIsvr4", // Replace with actual YouTube video ID
          timestamp: 180,
          thumbnailUrl: `https://img.youtube.com/vi/jm3dm5J5r0A/mqdefault.jpg`
        }
      ]
    }
  ];

export default restaurants;
export type { Restaurant };