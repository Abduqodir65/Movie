import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Actor } from './models/actor.model';  
import { ActorService } from './actor.service';  
import { ActorController } from './actor.controller';  
import { FileModule } from '../file';

@Module({
    imports: [SequelizeModule.forFeature([Actor]),FileModule],
    providers: [ActorService],
    controllers: [ActorController],
})

export class ActorModule {}
