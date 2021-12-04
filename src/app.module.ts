import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TrackModule } from './tracks/track.module';

@Module({
  imports: [TrackModule, MongooseModule.forRoot('mongodb+srv://admin:admin@maincluster.chkzn.mongodb.net/musicDB?retryWrites=true&w=majority')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
