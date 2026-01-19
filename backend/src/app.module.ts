import { Module } from '@nestjs/common';
import { QuotesModule } from './quotes/quotes.module';
import { PrismaService } from './prisma/prisma.service';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [PrismaModule, QuotesModule, AuthModule],
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
export class AppModule {}
