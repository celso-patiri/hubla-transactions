import { Module } from "@nestjs/common";
import { PrismaService } from "src/database/prisma/prisma.service";
import { UserService } from "./user.service";

@Module({
    providers: [UserService, PrismaService],
    exports: [UserService],
})
export class UserModule {}
