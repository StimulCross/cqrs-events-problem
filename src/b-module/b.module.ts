import { Module } from '@nestjs/common';
import { UserUpdatedHandler } from './events-handlers/user-updated.handler';

@Module({
  providers: [UserUpdatedHandler],
})
export class BModule {}
