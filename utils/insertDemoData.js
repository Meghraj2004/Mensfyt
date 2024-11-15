const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const demoProducts = [
  {
    id: "14",
    title: "Black Shirt and White Snickers Combo",
    price: 4999,
    rating: 5,
    description: "Stylish denim jacket for all seasons.",
    mainImage: "productwinter.webp",
    slug: "denim-jacket-demo",
    manufacturer: "Levi's",
    category: "jacket",
    inStock: 10,
  },

  {
    id: "1",
    title: "Black Shirt and White Snickers Combo",
    price: 4499,
    rating: 5,
    description: "Checked Shirt Outfit for Mens with Grey Slim fit Chinos, Black Watch and Slip-On Snickers",
    mainImage: "cheacked.webp",
    slug: "denim-jacket-demo",
    manufacturer: "mensfyt",
    category: "casual",
    inStock: 10,
  },
  {
    id: "15",
    title: "casual combo",
    price: 3999,
    rating: 4,
    description: "Stylish casual combo for summer season",
    mainImage: "casual.webp",
    slug: "denim-casual-demo",
    manufacturer: "Mensfyt",
    category: "casual",
    inStock: 10,
  },
];

const demoProductImages = [
  {
    imageID: "1",
    productID: "13",
    image: "sony speaker image 1.jpg",
  },
  {
    imageID: "2",
    productID: "13",
    image: "sony speaker image 2.jpg",
  },
  {
    imageID: "3",
    productID: "13",
    image: "sony speaker image 3.jpg",
  },
  {
    imageID: "4",
    productID: "13",
    image: "sony speaker image 4.jpg",
  },
];


const demoCategories = [

  {
    name: "casual"
  },
];

async function insertDemoData() {
  for (const product of demoProducts) {
    await prisma.product.create({
      data: product,
    });
  }
  console.log("Demo products inserted successfully!");

  for (const image of demoProductImages) {
    await prisma.image.create({
      data: image,
    });
  }
  console.log("Demo images inserted successfully!");

  for (const category of demoCategories) {
    await prisma.category.create({
      data: category,
    });
  }
  console.log("Demo categories inserted successfully!");
}

insertDemoData()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
