const { PrismaClient } = require('@prisma/client');

const db = new PrismaClient();

async function main() {
  try {
    await db.category.createMany({
      data: [
        { name: "Food" },
        { name: "Movie" },
        { name: "Games" },
        { name: "Sports" },
        { name: "Food" },
        { name: "Cars" },
      ]
    })
  } catch (error) {
    console.error("Error seeding default categories", error)
  } finally {
    await db.$disconnect()
  }
}

main()