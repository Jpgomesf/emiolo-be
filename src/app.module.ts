import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';

@Module({
  imports: [UserModule,
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/emioloDB')],
  controllers: [],
  providers: [],
})
export class AppModule {}
