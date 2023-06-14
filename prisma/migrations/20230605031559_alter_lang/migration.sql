/*
  Warnings:

  - You are about to drop the column `celular` on the `Contato` table. All the data in the column will be lost.
  - You are about to drop the column `criadoEm` on the `Contato` table. All the data in the column will be lost.
  - You are about to drop the column `nome` on the `Contato` table. All the data in the column will be lost.
  - You are about to drop the column `usuarioId` on the `Contato` table. All the data in the column will be lost.
  - You are about to drop the column `celular` on the `Usuario` table. All the data in the column will be lost.
  - You are about to drop the column `criadoEm` on the `Usuario` table. All the data in the column will be lost.
  - You are about to drop the column `nome` on the `Usuario` table. All the data in the column will be lost.
  - You are about to drop the column `senha` on the `Usuario` table. All the data in the column will be lost.
  - Added the required column `name` to the `Contato` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone` to the `Contato` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Contato` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Usuario` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `Usuario` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone` to the `Usuario` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Contato" DROP CONSTRAINT "Contato_usuarioId_fkey";

-- AlterTable
ALTER TABLE "Contato" DROP COLUMN "celular",
DROP COLUMN "criadoEm",
DROP COLUMN "nome",
DROP COLUMN "usuarioId",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "name" VARCHAR(65) NOT NULL,
ADD COLUMN     "phone" VARCHAR(127) NOT NULL,
ADD COLUMN     "userId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Usuario" DROP COLUMN "celular",
DROP COLUMN "criadoEm",
DROP COLUMN "nome",
DROP COLUMN "senha",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "name" VARCHAR(65) NOT NULL,
ADD COLUMN     "password" VARCHAR(255) NOT NULL,
ADD COLUMN     "phone" VARCHAR(25) NOT NULL;

-- AddForeignKey
ALTER TABLE "Contato" ADD CONSTRAINT "Contato_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
