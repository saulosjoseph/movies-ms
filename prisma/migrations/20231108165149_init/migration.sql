-- CreateTable
CREATE TABLE "Avaliation" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "movieId" INTEGER NOT NULL,
    "userEmail" TEXT NOT NULL,
    "comment" TEXT,
    CONSTRAINT "Avaliation_movieId_fkey" FOREIGN KEY ("movieId") REFERENCES "Movie" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
