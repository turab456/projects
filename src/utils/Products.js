import banner from "../assets/shopping.jpg"
export const  products = [
    {
      id: "1",
      name: "Wireless Mouse",
      category: "Electronics",
      description: "A high-precision wireless mouse with ergonomic design and long battery life.",
      price: 25.99,
      currency: "USD",
      stock: 150,
      brand: "TechBrand",
      model: "TB-WM200",
      dimensions: {
        length: "4.5 in",
        width: "2.8 in",
        height: "1.6 in"
      },
      weight: "0.2 lbs",
      color: "Black",
      features: [
        "Ergonomic design",
        "High precision",
        "Long battery life",
        "Wireless"
      ],
      rating: 4.5,
      reviews: [
        {
          username: "john_doe",
          rating: 5,
          comment: "Great mouse, very comfortable!"
        },
        {
          username: "jane_smith",
          rating: 4,
          comment: "Good value for the price."
        }
      ],
      images: [
        banner
      ],
      dateAdded: "2023-05-12",
      seller: {
        name: "TechStore",
        contactEmail: "support@techstore.com",
        phone: "+1-800-123-4567"
      }
    },
    {
      id: "2",
      name: "Bluetooth Headphones",
      category: "Electronics",
      description: "Noise-cancelling over-ear Bluetooth headphones with high-fidelity sound.",
      price: 89.99,
      currency: "USD",
      stock: 75,
      brand: "SoundMax",
      model: "SM-BH300",
      dimensions: {
        length: "7.5 in",
        width: "6.5 in",
        height: "3.0 in"
      },
      weight: "0.5 lbs",
      color: "Gray",
      features: [
        "Noise-cancelling",
        "High-fidelity sound",
        "Bluetooth 5.0",
        "Long battery life"
      ],
      rating: 4.8,
      reviews: [
        {
          username: "music_lover",
          rating: 5,
          comment: "Amazing sound quality and very comfortable."
        },
        {
          username: "traveler123",
          rating: 4,
          comment: "Great for travel, but a bit bulky."
        }
      ],
      images: [
        banner
      ],
      dateAdded: "2023-06-20",
      seller: {
        name: "AudioHub",
        contactEmail: "support@audiohub.com",
        phone: "+1-800-987-6543"
      }
    },
    {
      id: "3",
      name: "Smartphone Stand",
      category: "Accessories",
      description: "Adjustable smartphone stand for desk, suitable for all smartphone sizes.",
      price: 14.99,
      currency: "USD",
      stock: 200,
      brand: "GadgetPro",
      model: "GP-SS100",
      dimensions: {
        length: "4.0 in",
        width: "3.5 in",
        height: "5.5 in"
      },
      weight: "0.3 lbs",
      color: "Silver",
      features: [
        "Adjustable height",
        "Non-slip base",
        "Compatible with all smartphones"
      ],
      rating: 4.3,
      reviews: [
        {
          username: "tech_fan",
          rating: 4,
          comment: "Sturdy and versatile stand."
        },
        {
          username: "office_worker",
          rating: 5,
          comment: "Perfect for my desk setup."
        }
      ],
      images: [
        banner
      ],
      dateAdded: "2023-07-01",
      seller: {
        name: "GadgetWorld",
        contactEmail: "support@gadgetworld.com",
        phone: "+1-800-222-3333"
      }
    }
  ];
  