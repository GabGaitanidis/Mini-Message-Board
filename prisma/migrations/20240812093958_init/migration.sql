-- CreateTable
CREATE TABLE "msgs" (
    "id" SERIAL NOT NULL,
    "username" VARCHAR(255) NOT NULL,
    "msg" TEXT NOT NULL,
    "date" DATE NOT NULL DEFAULT CURRENT_DATE,

    CONSTRAINT "msgs_pkey" PRIMARY KEY ("id")
);
