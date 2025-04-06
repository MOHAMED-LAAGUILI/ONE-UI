export   const cart = {
    products: [
      {
        id: 1,
        name: "Wireless Headphones",
        price: 99.99,
        quantity: 2,
        image: "https://m.media-amazon.com/images/I/71Ao+C8CwvL.jpg"
      },
      {
        id: 2,
        name: "Mechanical Keyboard",
        price: 129.99,
        quantity: 1,
        image: "https://m.media-amazon.com/images/I/71Ao+C8CwvL.jpg"
      },
      {
        id: 3,
        name: "Gaming Mouse",
        price: 59.99,
        quantity: 3,
        image: "https://m.media-amazon.com/images/I/71Ao+C8CwvL.jpg"
      }
    ],
    totalQuantity: 6, // 2 + 1 + 3
    totalPrice: 99.99 * 2 + 129.99 + 59.99 * 3 // = 549.94
  };
  
  