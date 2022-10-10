import { isKeystoreWallet } from "@ethersproject/json-wallets";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.delete({
    where: {
      email: "timmy@test.com", // must be ona  unique field
      //age: {gt: 20}
    },
  });
  // const preference = await prisma.userPreferences.create({
  //   data: {
  //     emailUpdates: true,
  //   },
  // });
  // console.log(preference);
  // const user = await prisma.user.update({ // RELATED TO THE CONNECT DOWN BELOW
  //   where: {
  //     email: "kyle12@west.com",
  //   },
  //   data: {
  //     userPreferences: {
  //       connect: { and we can also disconnect : true
  //         id: "759bb3a9-6a1a-4ba5-8f1d-b89444205543",
  //       },
  //     },
  //   },
  // });
  // const user = await prisma.user.findFirst({
  //   where: {
  //     email: "kyle12@west.com",
  //   },
  //   include: { userPreferences: true },
  // });
  // SAMPLE OF OUTPUT
  // id: '72a7df21-f88c-43ce-a49b-e070b3591ef8',
  // name: 'Kyle',
  // age: 99,
  // email: 'kyle12@west.com',
  // role: 'BASIC',
  // userPreferencesId: '759bb3a9-6a1a-4ba5-8f1d-b89444205543',
  // userPreferences: { id: '759bb3a9-6a1a-4ba5-8f1d-b89444205543', emailUpdates: true }
  console.log(user);
  //const user = await prisma.user.create({ data: { name: "Sally" } });
  // const users = await prisma.user.findMany();
  // await prisma.user.deleteMany();
  // const user2 = await prisma.user.update({
  //   // we also have updateMany
  //   where: {
  //     email: "sally@test3.com",
  //   },
  //   data: {
  //     email: "sally@test3.com",
  //   },
  // });
  // const user2 = await prisma.user.update({
  //   where: {
  //     email: "kyle1@west.com",
  //   },
  //   data: {
  //     age: {
  //       increment: 1, //decrement, multiply, divide N number
  //     },
  //   },

  // const user = await prisma.post.findMany({
  //   where: {
  //     //NOT: [{ email: { startsWith: "kyle" } }, { name: "Kyle" }], // longer query
  //     //OR: [{ email: { startsWith: "kyle" } }, { name: "Kyle" }], // longer query
  //     //AND: [{ email: { startsWith: "kyle" } }, { name: "Kyle" }], // longer query
  //     //name: "Kyle", // we can also do IN ["Sally, Kyle"] will tell us how many has or does not have ( notIn)
  //     //age: { lt: 10 }, // less than 10 we also can do gt
  //     // email: { contains: "@test.com" }, // will tell us how many contain the @test.com
  //     //email: { startsWith: "@test.com" }, // will tell us how many contain the @test.com
  //     //email: { endsWith: "@test.com" }, // will tell us how many contain the @test.com
  //     author: {
  //       // where all post the autoher is age 27
  //       is: {
  //         // every - none - some
  //         age: 27, // we can nest startsWith, etc
  //       },
  //     },
  //   },
  //   // take: 2, //gets 2, we can also use
  //   // skip: 1, // we can combine them
  //   // orderBy: {
  //   //   //filters
  //   //   age: "desc",
  //   // },
  //   // distinct: ["name"], //omly gonna get the fist
  // });

  // const user = await prisma.user.createMany({
  //   data: [
  //     {
  //       name: "Kyle",
  //       email: "kyle@test.com",
  //       age: 27,
  //     },
  //     {
  //       name: "Timmy",
  //       email: "timmy@test.com",
  //       age: 37,
  //     },
  //   ],

  // select: {
  //   name: true,
  //   userPreferences: { select: { id: true } },
  // },
  // console.log(user2); // .length = COUNT
}

main()
  .catch((e) => {
    console.log(e.message);
  })
  .finally(async () => {
    await prisma.$disconnect;
  });
