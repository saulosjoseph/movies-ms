/*
  Warnings:

  - Added the required column `avaliation` to the `Avaliation` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Avaliation" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "movieId" INTEGER NOT NULL,
    "avaliation" INTEGER NOT NULL,
    "userEmail" TEXT NOT NULL,
    "comment" TEXT,
    CONSTRAINT "Avaliation_movieId_fkey" FOREIGN KEY ("movieId") REFERENCES "Movie" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Avaliation" ("comment", "id", "movieId", "userEmail") SELECT "comment", "id", "movieId", "userEmail" FROM "Avaliation";
DROP TABLE "Avaliation";
ALTER TABLE "new_Avaliation" RENAME TO "Avaliation";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
