import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateQuoteDto } from './dto/create-quote.dto';

@Injectable()
export class QuotesService {
  constructor(private readonly prisma: PrismaService) {}

  async getAll() {
    return this.prisma.quote.findMany();
  }

  async create(data: CreateQuoteDto) {
    return this.prisma.quote.create({ data });
  }
}
