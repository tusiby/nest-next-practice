import { Get, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, ObjectId } from "mongoose";
import { CreateTrackDto } from "./dto/create-track.dto";
import { Track, TrackDocument } from "./schemas/track.schema";

@Injectable()

export class TrackService {
    
    constructor(@InjectModel(Track.name) private trackModel: Model<TrackDocument>) {}

    public tracks: any[] = [
        {
            id: 1,
            name: 'Katty PArry'
        },
        {
            id: 2,
            name: 'Kany West'
        },
        {
            id: 3,
            name: 'Ice COde'
        },
    ]

    async createTrack(dto: CreateTrackDto) : Promise<Track>{
        return this.trackModel.create({...dto, listens: 0})
    }

    async getAllTracks() {
        return await this.trackModel.find()
    }

    async getOne(id: ObjectId) {
        return await this.trackModel.findById(id)
    }
}