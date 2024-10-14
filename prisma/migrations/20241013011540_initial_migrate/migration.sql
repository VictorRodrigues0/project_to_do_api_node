-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(191) NOT NULL,
    "email" VARCHAR(191) NOT NULL,
    "password" VARCHAR(191) NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP(3),
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE ("email")
);
