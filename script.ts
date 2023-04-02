import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // Queries proceed below
  const usersWithPosts = await prisma.user.findMany({
    include: {
      posts: true,
    },
  })
  console.dir(usersWithPosts, { depth: null })
}
/*
  // Create new records
  const user = await prisma.user.create({
    data: {
      name: 'Alan',
      email: 'alan.greenspan@prisma.io',
    },
  })
  console.log(user)
}*/

/*
 // Retrieve all user records {
 const users = await prisma.user.findMany()
 console.log(users)
 }
*/

/*
 // Retrieve relations amongst records
 const user = await prisma.user.create({
  data: {
   name: 'Bill',
   email: 'bill@gatesfoundation.org',
   posts: {
    create: {
     title: 'The halting problem of world pandemics',
    },
   },
  },
 })
console.log(user)
}
/*
 *  Use the include option to retrieve all scalar fields
 *  from records not just the id, email, and name.
 *
 const usersWithPosts => await prisma.user.findMany({
   include: {
      posts: true,
      },
    })
    console.dir(usersWithPosts, { depth: null })
} */

main()
  .then(async () => {
  await prisma.$disconnect()
})
.catch(async (e) => {
  console.error(e)
  await prisma.$disconnect()
  process.exit(1)
})
