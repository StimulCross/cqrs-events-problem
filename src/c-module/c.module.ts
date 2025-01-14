import { Module } from '@nestjs/common';
import { UserDeletedHandler } from './events-handlers/user-deleted.handler';

@Module({
  providers: [UserDeletedHandler],
})
export class CModule {}
