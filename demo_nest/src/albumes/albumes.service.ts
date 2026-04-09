import { Injectable } from '@nestjs/common';
import { CreateAlbumDto } from './dto/create-album.dto';
import { UpdateAlbumDto } from './dto/update-album.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Album } from './entities/album.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AlbumesService {
  constructor(@InjectRepository(Album) private readonly albumRepository: Repository<Album>){}
  create(createAlbumeDto: CreateAlbumDto) {
    return 'This action adds a new albume';
  }

  findAll() {
    return `This action returns all albumes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} albume`;
  }

  update(id: number, updateAlbumeDto: UpdateAlbumDto) {
    return `This action updates a #${id} albume`;
  }

  remove(id: number) {
    return `This action removes a #${id} albume`;
  }
}
