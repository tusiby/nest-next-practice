import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Comment, CommentSchema } from "./schemas/comment.schema";
import { Track, TrackSchema } from "./schemas/track.schema";
import { TrackConroller } from "./track.controller";
import { TrackService } from "./track.service";

@Module({
    imports: [MongooseModule.forFeature([
        { name: Track.name, schema: TrackSchema },
        { name: Comment.name, schema: CommentSchema }
    ])],
    controllers: [TrackConroller],
    providers: [TrackService]
})

export class TrackModule {}