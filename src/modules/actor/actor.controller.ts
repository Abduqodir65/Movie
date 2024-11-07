import {
    Controller,
    Get,
    Post,
    Patch,
    Delete,
    Param,
    Body,
    UploadedFile,
    UseInterceptors,
} from '@nestjs/common';
import { ActorService } from './actor.service';
import { Actor } from './models/actor.model';
import { FileInterceptor } from '@nestjs/platform-express';  // Fayl yuklash uchun interceptor
import { CreateActorDto, UpdateActorDto } from './dtos';

@Controller('actors')
export class ActorController {
    constructor(private readonly actorService: ActorService) {}

    @Get()
    async getAllActors(): Promise<Actor[]> {
        return await this.actorService.getAllActors();
    }

    @Get('/:id')
    async getSingleActor(@Param('id') id: string): Promise<Actor> {
        return await this.actorService.getSingleActor(+id);
    }

    @Post('/add')
    @UseInterceptors(FileInterceptor('image'))  // Faylni qabul qilish uchun interceptor
    async createActor(
        @Body() createActorPayload: CreateActorDto,
        @UploadedFile() image: Express.Multer.File,  // Faylni qabul qilish
    ): Promise<{ message: string; new_actor: CreateActorDto }> {
        const result = await this.actorService.createActor(createActorPayload, image);

        return {
            message: 'Actor created successfully',
            new_actor: result.new_actor,
        };
    }

    @Patch('/update/:id')
    async updateActor(
        @Param('id') id: string,
        @Body() updateActorPayload: UpdateActorDto,
    ): Promise<{ message: string; updatedActor: UpdateActorDto }> {
        const result = await this.actorService.updateActor(+id, updateActorPayload);

        return {
            message: 'Actor updated successfully',
            updatedActor: result.updatedActor,
        };
    }

    @Delete('/delete/:id')
    async deleteActor(@Param('id') id: string): Promise<{ message: string }> {
        return await this.actorService.deleteActor(+id);
    }
}
