import { Module } from '@nestjs/common';  //import {가져올모듈}는 export문을 가져올 때 사용한다.
import { BoardsModule } from './boards/boards.module';

@Module({
  imports: [BoardsModule],
})
export class AppModule {}
