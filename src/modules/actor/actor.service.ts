import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Actor } from './models/actor.model';
import { FileService } from '../file/file.service';  // Fayl yuklash uchun servis
import { CreateActorDto, UpdateActorDto } from './dtos';

@Injectable()
export class ActorService {
    constructor(
        @InjectModel(Actor) private actorModel: typeof Actor,
        private readonly fileService: FileService,  // Fayl servisni chaqirib olish
    ) {}

    async getAllActors(): Promise<Actor[]> {
        return await this.actorModel.findAll();
    }

    async getSingleActor(id: number): Promise<Actor> {
        return await this.actorModel.findOne({ where: { id } });
    }

    async createActor(
        payload: CreateActorDto,
        imageFile: Express.Multer.File,  // Rasm faylini qabul qilish
    ): Promise<{ message: string; new_actor: Actor }> {
        const imageUrl = await this.fileService.uploadFile(imageFile);  // Rasm yuklash

        const new_actor = await this.actorModel.create({
            name: payload.name,
            image: imageUrl,
            movie_id: payload.movie_id,
        });

        return {
            message: 'Actor created successfully',
            new_actor,
        };
    }

    async updateActor(
        id: number,
        payload: UpdateActorDto,
    ): Promise<{ message: string; updatedActor: Actor }> {
        await this.actorModel.update(payload, { where: { id } });
        const updatedActor = await this.actorModel.findOne({ where: { id } });

        return {
            message: 'Actor updated successfully',
            updatedActor,
        };
    }

    async deleteActor(id: number): Promise<{ message: string }> {
        const actor = await this.actorModel.findByPk(id);

        if (actor) {
            await this.fileService.deleteFile(actor.image);  // Rasm faylini o'chirish
            await actor.destroy();
        }

        return {
            message: 'Actor deleted successfully',
        };
    }
}
