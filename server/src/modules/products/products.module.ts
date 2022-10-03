import { Module } from "@nestjs/common";
import { PrismaService } from "src/database/prisma/prisma.service";
import { ProductsService } from "./products.service";

@Module({
    providers: [ProductsService, PrismaService],
})
export class ProductsModule {}
