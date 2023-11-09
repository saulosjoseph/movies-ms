-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_File" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "fileName" TEXT NOT NULL,
    "contentType" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "movieId" INTEGER NOT NULL,
    CONSTRAINT "File_movieId_fkey" FOREIGN KEY ("movieId") REFERENCES "Movie" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_File" ("contentType", "fileName", "id", "movieId", "url") SELECT "contentType", "fileName", "id", "movieId", "url" FROM "File";
DROP TABLE "File";
ALTER TABLE "new_File" RENAME TO "File";
CREATE UNIQUE INDEX "File_movieId_key" ON "File"("movieId");
CREATE TABLE "new_Avaliation" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "movieId" INTEGER NOT NULL,
    "avaliation" INTEGER NOT NULL,
    "userEmail" TEXT NOT NULL,
    "comment" TEXT,
    CONSTRAINT "Avaliation_movieId_fkey" FOREIGN KEY ("movieId") REFERENCES "Movie" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Avaliation" ("avaliation", "comment", "id", "movieId", "userEmail") SELECT "avaliation", "comment", "id", "movieId", "userEmail" FROM "Avaliation";
DROP TABLE "Avaliation";
ALTER TABLE "new_Avaliation" RENAME TO "Avaliation";
CREATE TABLE "new_Classification" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "classification" REAL NOT NULL,
    "movieId" INTEGER NOT NULL,
    CONSTRAINT "Classification_movieId_fkey" FOREIGN KEY ("movieId") REFERENCES "Movie" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Classification" ("classification", "id", "movieId") SELECT "classification", "id", "movieId" FROM "Classification";
DROP TABLE "Classification";
ALTER TABLE "new_Classification" RENAME TO "Classification";
CREATE UNIQUE INDEX "Classification_movieId_key" ON "Classification"("movieId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
