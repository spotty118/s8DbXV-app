import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const splitSql = (sql: string) => {
  return sql.split(';').filter(content => content.trim() !== '')
}

async function main() {
  const sql = `

INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "globalRole", "password") VALUES ('ff0a99a5-a3fd-4eef-a786-9fc561faab91', '1Adela.Paucek87@yahoo.com', 'John Doe', 'https://i.imgur.com/YfJQV5z.png?id=3', 'inv44556jkl', false, 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "globalRole", "password") VALUES ('9c68c1bd-a19a-4f39-af07-2d4f6a5306c7', '10Erin_Heathcote62@gmail.com', 'Alex Jones', 'https://i.imgur.com/YfJQV5z.png?id=12', 'inv12345abc', false, 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "globalRole", "password") VALUES ('b04bf4a7-f0a7-4d63-9ffb-022fb497ae95', '19Wellington_Ratke7@hotmail.com', 'Jane Smith', 'https://i.imgur.com/YfJQV5z.png?id=21', 'inv11223ghi', true, 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "globalRole", "password") VALUES ('4b9e3d55-ea94-472d-a20e-e07e12aa8e90', '28Alexzander.Dooley@hotmail.com', 'Jane Smith', 'https://i.imgur.com/YfJQV5z.png?id=30', 'inv77889mno', true, 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "globalRole", "password") VALUES ('b8c8d867-cb4b-450f-9d48-40b04dc57cf1', '37Caterina_Doyle71@hotmail.com', 'Michael Johnson', 'https://i.imgur.com/YfJQV5z.png?id=39', 'inv11223ghi', true, 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "globalRole", "password") VALUES ('9d83022c-0477-4095-b2d6-1375352ec87a', '46Christy_McDermott@hotmail.com', 'Jane Smith', 'https://i.imgur.com/YfJQV5z.png?id=48', 'inv11223ghi', true, 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "globalRole", "password") VALUES ('18d0408a-55f1-4551-9ce1-160d366a72d8', '55Marianna_Langosh@gmail.com', 'John Doe', 'https://i.imgur.com/YfJQV5z.png?id=57', 'inv11223ghi', true, 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "globalRole", "password") VALUES ('32c9685d-06f3-4d31-a797-e9835031719d', '73Geoffrey_Skiles@hotmail.com', 'Jane Smith', 'https://i.imgur.com/YfJQV5z.png?id=75', 'inv44556jkl', false, 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "globalRole", "password") VALUES ('5a2102bd-1ab3-48e2-96af-5b93fc421b8b', '82Ellen.Wiegand-Gislason0@gmail.com', 'Michael Johnson', 'https://i.imgur.com/YfJQV5z.png?id=84', 'inv12345abc', true, 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');

INSERT INTO "RagVector" ("id", "key", "tags") VALUES ('0bbcf8b2-0433-42da-b838-ac076e318d4d', 'a1b2c3d4e5', '{"apostolus":"coadunatio","tutis":"caput","nisi":"coadunatio"}'::jsonb);
INSERT INTO "RagVector" ("id", "key", "tags") VALUES ('eab2041d-e3ec-4a29-a40d-2d46b30e37f2', 'u1v2w3x4y5', '{"artificiose":"pauper","conspergo":"inflammatio","bellicus":"videlicet"}'::jsonb);
INSERT INTO "RagVector" ("id", "key", "tags") VALUES ('ed5a8597-b96d-436c-b42c-32e11243a1e3', 'a1b2c3d4e5', '{"supra":"conservo","aestivus":"umquam","barba":"valens","caries":"terra"}'::jsonb);
INSERT INTO "RagVector" ("id", "key", "tags") VALUES ('0633c806-9816-4303-916f-2270c629a3d0', 'k1l2m3n4o5', '{"tergiversatio":"cupiditate","vinco":"stultus","cui":"itaque","crepusculum":"thymbra"}'::jsonb);
INSERT INTO "RagVector" ("id", "key", "tags") VALUES ('b351adcf-ce41-40d4-b4e5-19911ddcd457', 'k1l2m3n4o5', '{"solio":"depraedor","summisse":"via","cohors":"denego"}'::jsonb);
INSERT INTO "RagVector" ("id", "key", "tags") VALUES ('011df2ca-b1bf-46c8-8cc1-9f6eaa4adb69', 'a1b2c3d4e5', '{"crur":"despecto","qui":"ullam","ultio":"altus"}'::jsonb);
INSERT INTO "RagVector" ("id", "key", "tags") VALUES ('5e7d34af-34e5-4322-b1ec-7ecaf1bd78ae', 'u1v2w3x4y5', '{"dicta":"volva","ante":"terror","valeo":"acer"}'::jsonb);
INSERT INTO "RagVector" ("id", "key", "tags") VALUES ('f9d6c047-cc72-4508-8865-98f509a49427', 'a1b2c3d4e5', '{"adiuvo":"laborum","bos":"aiunt","trans":"aranea","voro":"expedita","spiculum":"tepesco"}'::jsonb);
INSERT INTO "RagVector" ("id", "key", "tags") VALUES ('f6e82bc9-0f22-403b-bebe-ec6ccf0404eb', 'f6g7h8i9j0', '{"cultura":"defero","crux":"id","quasi":"terreo"}'::jsonb);
INSERT INTO "RagVector" ("id", "key", "tags") VALUES ('03b781b6-c950-4e4b-a29b-3b45f1cecab7', 'p6q7r8s9t0', '{"cariosus":"aufero","clementia":"thesis","congregatio":"contra"}'::jsonb);

INSERT INTO "Application" ("id", "description", "status", "codeLocationUrl", "containerId", "containerStatus", "userId") VALUES ('92aa50a5-1cd9-4f54-b617-b77c6504e5a4', 'Ecommerce platform for selling handmade crafts.', 'pending', 'https://i.imgur.com/YfJQV5z.png?id=123', 'jkl012', 'stopped', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "Application" ("id", "description", "status", "codeLocationUrl", "containerId", "containerStatus", "userId") VALUES ('43500418-022c-4fc1-b9a8-eb216f9d2994', 'A simple todo list application with user authentication.', 'failed', 'https://i.imgur.com/YfJQV5z.png?id=129', 'ghi789', 'terminated', '5a2102bd-1ab3-48e2-96af-5b93fc421b8b');
INSERT INTO "Application" ("id", "description", "status", "codeLocationUrl", "containerId", "containerStatus", "userId") VALUES ('285b0e4b-9924-4ec9-b296-aa88324859af', 'Social media app for sharing travel experiences.', 'failed', 'https://i.imgur.com/YfJQV5z.png?id=135', 'abc123', 'running', '18d0408a-55f1-4551-9ce1-160d366a72d8');
INSERT INTO "Application" ("id", "description", "status", "codeLocationUrl", "containerId", "containerStatus", "userId") VALUES ('43ca01b2-983b-4675-9234-ad4b15926197', 'A simple todo list application with user authentication.', 'failed', 'https://i.imgur.com/YfJQV5z.png?id=141', 'abc123', 'terminated', '32c9685d-06f3-4d31-a797-e9835031719d');
INSERT INTO "Application" ("id", "description", "status", "codeLocationUrl", "containerId", "containerStatus", "userId") VALUES ('d6834e87-b011-423a-a085-63333021f1a4', 'Fitness tracking app with personalized workout plans.', 'in progress', 'https://i.imgur.com/YfJQV5z.png?id=147', 'mno345', 'paused', 'b04bf4a7-f0a7-4d63-9ffb-022fb497ae95');
INSERT INTO "Application" ("id", "description", "status", "codeLocationUrl", "containerId", "containerStatus", "userId") VALUES ('608c9153-8e51-48a6-b6b3-a6714100486e', 'Ecommerce platform for selling handmade crafts.', 'failed', 'https://i.imgur.com/YfJQV5z.png?id=153', 'mno345', 'terminated', 'b8c8d867-cb4b-450f-9d48-40b04dc57cf1');
INSERT INTO "Application" ("id", "description", "status", "codeLocationUrl", "containerId", "containerStatus", "userId") VALUES ('24437223-0be7-4d94-8c3b-20fe5909b917', 'Fitness tracking app with personalized workout plans.', 'pending', 'https://i.imgur.com/YfJQV5z.png?id=159', 'abc123', 'paused', '4b9e3d55-ea94-472d-a20e-e07e12aa8e90');
INSERT INTO "Application" ("id", "description", "status", "codeLocationUrl", "containerId", "containerStatus", "userId") VALUES ('79bb2baa-cb55-4e04-b37c-f99d003a694e', 'Fitness tracking app with personalized workout plans.', 'failed', 'https://i.imgur.com/YfJQV5z.png?id=165', 'abc123', 'terminated', 'b04bf4a7-f0a7-4d63-9ffb-022fb497ae95');
INSERT INTO "Application" ("id", "description", "status", "codeLocationUrl", "containerId", "containerStatus", "userId") VALUES ('f48f5bec-28f3-476e-b81b-414ce8f4f45a', 'Fitness tracking app with personalized workout plans.', 'failed', 'https://i.imgur.com/YfJQV5z.png?id=171', 'ghi789', 'running', '32c9685d-06f3-4d31-a797-e9835031719d');
INSERT INTO "Application" ("id", "description", "status", "codeLocationUrl", "containerId", "containerStatus", "userId") VALUES ('708c2b2b-6a81-4ded-a5a8-c1a38626fda1', 'Weather forecasting app that provides realtime updates.', 'pending', 'https://i.imgur.com/YfJQV5z.png?id=177', 'mno345', 'running', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');

INSERT INTO "Notification" ("id", "type", "content", "isRead", "userId") VALUES ('31d10a4a-4e4f-4d98-80a8-b27404ff6339', 'Payment Confirmation', 'Unusual login activity detected in your account.', false, '18d0408a-55f1-4551-9ce1-160d366a72d8');
INSERT INTO "Notification" ("id", "type", "content", "isRead", "userId") VALUES ('d63d1932-d432-4a47-af82-2821eb91ae63', 'Payment Confirmation', 'Your subscription has been successfully renewed.', true, '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "Notification" ("id", "type", "content", "isRead", "userId") VALUES ('9f0ab907-0be1-42b3-a54a-6f488d89f992', 'Security Alert', 'Payment of 29.99 has been confirmed.', false, 'b04bf4a7-f0a7-4d63-9ffb-022fb497ae95');
INSERT INTO "Notification" ("id", "type", "content", "isRead", "userId") VALUES ('89fa7fff-aae4-4c33-a092-56d66d12d729', 'Subscription Renewal', 'Payment of 29.99 has been confirmed.', false, 'ff0a99a5-a3fd-4eef-a786-9fc561faab91');
INSERT INTO "Notification" ("id", "type", "content", "isRead", "userId") VALUES ('69a4cb90-dd88-4c94-8548-d3763879eeb0', 'Security Alert', 'Unusual login activity detected in your account.', false, '32c9685d-06f3-4d31-a797-e9835031719d');
INSERT INTO "Notification" ("id", "type", "content", "isRead", "userId") VALUES ('92d99cd8-dfef-445c-ae7a-8881ec8a31bc', 'New Feature Announcement', 'Unusual login activity detected in your account.', true, '9d83022c-0477-4095-b2d6-1375352ec87a');
INSERT INTO "Notification" ("id", "type", "content", "isRead", "userId") VALUES ('71c3a39e-72f8-44e6-9e12-aef7916016a2', 'Session Expiration', 'Payment of 29.99 has been confirmed.', true, '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "Notification" ("id", "type", "content", "isRead", "userId") VALUES ('ea15a618-0bc3-4030-8033-664575078861', 'New Feature Announcement', 'Payment of 29.99 has been confirmed.', true, '9d83022c-0477-4095-b2d6-1375352ec87a');
INSERT INTO "Notification" ("id", "type", "content", "isRead", "userId") VALUES ('8afe53d3-5ed1-43b3-b4ea-7e3cefc5a981', 'New Feature Announcement', 'Unusual login activity detected in your account.', false, '32c9685d-06f3-4d31-a797-e9835031719d');
INSERT INTO "Notification" ("id", "type", "content", "isRead", "userId") VALUES ('4688bd0b-61af-42f7-8aa8-f994afbe0ef8', 'Subscription Renewal', 'Check out our new feature Realtime collaboration', true, '18d0408a-55f1-4551-9ce1-160d366a72d8');

INSERT INTO "Payment" ("id", "amount", "currency", "date", "status", "transactionId", "userId") VALUES ('1170e7ed-b2b4-4521-acde-67c2638f1e04', '99.99', 'USD', '2025-03-19T01:36:59.326Z', 'canceled', 'txn_11I2J3K4L5', '18d0408a-55f1-4551-9ce1-160d366a72d8');
INSERT INTO "Payment" ("id", "amount", "currency", "date", "status", "transactionId", "userId") VALUES ('8e2e5897-05dc-4bd2-a309-6a78b91dcf8b', '49.99', 'GBP', '2023-11-30T10:11:10.431Z', 'completed', 'txn_06E7F8G9H0', '5a2102bd-1ab3-48e2-96af-5b93fc421b8b');
INSERT INTO "Payment" ("id", "amount", "currency", "date", "status", "transactionId", "userId") VALUES ('f93b2c17-f143-4430-94d9-fc7448119892', '19.99', 'GBP', '2024-09-29T02:57:44.590Z', 'failed', 'txn_11I2J3K4L5', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "Payment" ("id", "amount", "currency", "date", "status", "transactionId", "userId") VALUES ('7f1b3cdc-1ab0-4ea0-bcfb-162352f33b93', '59.99', 'JPY', '2023-10-19T04:54:38.616Z', 'canceled', 'txn_21Q2R3S4T5', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "Payment" ("id", "amount", "currency", "date", "status", "transactionId", "userId") VALUES ('76494c32-d5f9-4751-bd73-52e5ae9da5ef', '99.99', 'JPY', '2023-11-10T17:26:50.705Z', 'failed', 'txn_06E7F8G9H0', 'b8c8d867-cb4b-450f-9d48-40b04dc57cf1');
INSERT INTO "Payment" ("id", "amount", "currency", "date", "status", "transactionId", "userId") VALUES ('0ecfac0c-3367-4774-b9dd-83ed7d250426', '29.99', 'USD', '2024-05-21T02:50:29.493Z', 'pending', 'txn_06E7F8G9H0', '5a2102bd-1ab3-48e2-96af-5b93fc421b8b');
INSERT INTO "Payment" ("id", "amount", "currency", "date", "status", "transactionId", "userId") VALUES ('507c17e1-9a35-4227-9758-a684d4e49519', '19.99', 'AUD', '2024-08-20T16:27:57.800Z', 'refunded', 'txn_06E7F8G9H0', '9d83022c-0477-4095-b2d6-1375352ec87a');
INSERT INTO "Payment" ("id", "amount", "currency", "date", "status", "transactionId", "userId") VALUES ('c915d52b-d436-432f-8855-8136dd445765', '29.99', 'GBP', '2024-11-27T18:09:05.658Z', 'completed', 'txn_16M7N8O9P0', '5a2102bd-1ab3-48e2-96af-5b93fc421b8b');
INSERT INTO "Payment" ("id", "amount", "currency", "date", "status", "transactionId", "userId") VALUES ('bf9a4c2b-2a83-41ba-ba24-fb3d17425ebd', '49.99', 'EUR', '2024-08-25T06:13:45.583Z', 'pending', 'txn_11I2J3K4L5', '9c68c1bd-a19a-4f39-af07-2d4f6a5306c7');
INSERT INTO "Payment" ("id", "amount", "currency", "date", "status", "transactionId", "userId") VALUES ('8f8503f0-e71b-4358-9810-5bfad05f4e2d', '59.99', 'AUD', '2024-09-25T12:57:25.692Z', 'refunded', 'txn_06E7F8G9H0', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');

  `

  const sqls = splitSql(sql)

  for (const sql of sqls) {
    try {
      await prisma.$executeRawUnsafe(`${sql}`)
    } catch (error) {
      console.log(`Could not insert SQL: ${error.message}`)
    }
  }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async error => {
    console.error(error)
    await prisma.$disconnect()
    process.exit(1)
  })
