import { Controller, Get, Post, Body } from '@nestjs/common';
import { QuotesService } from './quotes.service';
import { CreateQuoteDto } from './dto/create-quote.dto';

@Controller('quotes')
export class QuotesController {
  constructor(private readonly quotesService: QuotesService) {}

  @Get()
  getAll() {
    return this.quotesService.getAll();
  }

  @Post()
  create(@Body() data: CreateQuoteDto) {
    return this.quotesService.create(data);
  }
}
