/*
  Warnings:

  - A unique constraint covering the columns `[requestFromId,requestToId]` on the table `FriendRequest` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "FriendRequest_requestFromId_requestToId_key" ON "FriendRequest"("requestFromId", "requestToId");
