import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [
    // MongooseModule.forRoot('mongodb+srv://db_user:EAS0KgE0bnwY9Ffk@cluster0.yxks0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'),
    MongooseModule.forRoot('mongodb://localhost:27017/todo'),
    TasksModule
  ],
  controllers: [
    AppController
  ],
  providers: [
    AppService
  ],
})
export class AppModule { }
