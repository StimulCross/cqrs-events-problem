import { Module } from '@nestjs/common';
import { UserCreatedHandler } from './events-handlers/user-created.handler';

@Module({
  providers: [UserCreatedHandler],
})
export class DModule {}
