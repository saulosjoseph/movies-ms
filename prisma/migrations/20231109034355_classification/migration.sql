-- CreateTable
CREATE TABLE "Classification" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "classification" INTEGER NOT NULL,
    "movieId" INTEGER NOT NULL,
    CONSTRAINT "Classification_movieId_fkey" FOREIGN KEY ("movieId") REFERENCES "Movie" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Classification_movieId_key" ON "Classification"("movieId");
