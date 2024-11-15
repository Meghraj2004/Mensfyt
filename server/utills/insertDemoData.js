const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const demoProducts = [
  {
    id: "1",
    title: "BChecked Shirt",
    price: 4499,
    rating: 5,
    description: "Checked Shirt Outfit for Mens with Grey Slim fit Chinos, Black Watch and Slip-On Snickers",
    mainImage: "checked.webp",
    slug: "denim-checked-demo",
    manufacturer: "mensfyt",
    categoryId: "85d27b12-7664-4fdd-a5ef-6651635447a9",
    inStock: 10,

  },
  {
    id: "14",
    title: "Black Shirt and White Snickers Combo",
    price: 4999,
    rating: 5,
    description: "Stylish denim jacket for all seasons.",
    mainImage: "productwinter.webp",
    slug: "denim-jacket-demo",
    manufacturer: "Levi's",
    categoryId: "85d27b12-7664-4fdd-a5ef-6651635447a9",
    inStock: 10,
  },
  {
    id: "15",
    title: "casual Combo",
    price: 3999,
    rating: 5,
    description: "Stylish casual combo for summer season",
    mainImage: "casual.webp",
    slug: "denim-casual-demo",
    manufacturer: "Levi's",
    categoryId: "85d27b12-7664-4fdd-a5ef-6651635447a9",
    inStock: 10,
  },
];


const demoCategories = [

  {
    id: "85d27b12-7664-4fdd-a5ef-6651635447a9",
    name: "casual"
  }
];

async function insertDemoData() {
  
  for (const category of demoCategories) {
    await prisma.category.create({
      data: category,
    });
  }
  console.log("Demo categories inserted successfully!");
  
  for (const product of demoProducts) {
    await prisma.product.create({
      data: product,
    });
  }
  console.log("Demo products inserted successfully!");
}

insertDemoData()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
