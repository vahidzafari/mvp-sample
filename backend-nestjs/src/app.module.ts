import { Module, Logger } from '@nestjs/common';

const domain = [];

@Module({
  imports: [],
  providers: [Logger, , ...domain],
})
export class AppModule {}
