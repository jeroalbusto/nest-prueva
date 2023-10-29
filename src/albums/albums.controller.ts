import { Body, Controller,Delete,Get, Param, Patch, Post } from '@nestjs/common';
import { AlbumsService} from './albums.service'
import { createAlbumDto, updateAlbumDto } from './dto/album.dto'

@Controller('albums')
export class AlbumsController {

    constructor(private albumsService: AlbumsService){}

    @Get()
    getAllAlbums(){
        return this.albumsService.getAllAlbums()
    }


    @Post()
    createAlbum(@Body() newAlbum: createAlbumDto){
        return this.albumsService.createAlbums(newAlbum.artist, newAlbum.name, newAlbum.publication_year, newAlbum.record_label)
    }

    @Delete(':id')
    deleteAlbum(@Param('id')id: string){
        this.albumsService.deleteAlbums(id)
    }

    @Patch(':id')
    updateAlbum(@Param('id')id: string, @Body()updatedFields: updateAlbumDto){
        return this.albumsService.updateAlbums(id, updatedFields)
    }
}
