import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TrackModule } from './tracks/track.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    TrackModule,
    ConfigModule.forRoot({envFilePath: '.env.local'}),
    MongooseModule.forRoot(process.env.MONGODB_ACCSESS_KEY)
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
