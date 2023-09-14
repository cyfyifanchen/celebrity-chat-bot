const { PrismaClient } = require('@prisma/client');

const db = new PrismaClient();

async function main() {
  try {
    await db.category.createMany({
      data: [
        { name: "Food Industry" },
        { name: "Singer" },
        { name: "Actor && Actress" },
        { name: "Basketball" },
        { name: "Football" },
        { name: "Politics" },
        { name: "Animations" },
      ]
    })
  } catch (error) {
    console.error("Error seeding default categories", error)
  } finally {
    await db.$disconnect()
  }
}

main()