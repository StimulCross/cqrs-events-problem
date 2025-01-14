import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CqrsModule } from '@nestjs/cqrs';
import { AModule } from './a-module/a.module';
import { BModule } from './b-module/b.module';
import { CModule } from './c-module/c.module';
import { DModule } from './d-module/d.module';

@Module({
  imports: [CqrsModule.forRoot(), AModule, BModule, CModule, DModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
