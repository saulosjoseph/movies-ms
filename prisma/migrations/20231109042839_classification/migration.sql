/*
  Warnings:

  - You are about to alter the column `classification` on the `Classification` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Float`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Classification" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "classification" REAL NOT NULL,
    "movieId" INTEGER NOT NULL,
    CONSTRAINT "Classification_movieId_fkey" FOREIGN KEY ("movieId") REFERENCES "Movie" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Classification" ("classification", "id", "movieId") SELECT "classification", "id", "movieId" FROM "Classification";
DROP TABLE "Classification";
ALTER TABLE "new_Classification" RENAME TO "Classification";
CREATE UNIQUE INDEX "Classification_movieId_key" ON "Classification"("movieId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
