import { Injectable } from '@nestjs/common';
import { Albums, AlbumsStatus } from './albums.entity';
import { v4 } from 'uuid';
import { updateAlbumDto } from './dto/album.dto';

@Injectable()
export class AlbumsService {


  //simula una base de datos
  private albums: Albums[] = [
    {
      id: '1',
      artist: 'Charly García',
      name: 'Clics modernos',
      publication_year: 1983,
      record_label: 'SG Discos',
      status: AlbumsStatus.IN_STOCK,
    },
  ];



  getAllAlbums() {
    return this.albums;
  }


  createAlbums(
    artist: string,
    name: string,
    publication_year: number,
    record_label: string,
  ) {
    const album = {
      id: v4(),
      artist,
      name,
      publication_year,
      record_label,
      status: AlbumsStatus.PENDING,
    };
    this.albums.push(album);
    return album;
  }


  deleteAlbums(id: string) {
    this.albums = this.albums.filter( album => album.id !== id)
  }


  getAlbumsById(id:string): Albums {
    return this.albums.find(album => album.id === id)
  }


  updateAlbums(id: string, updateFileds: updateAlbumDto):Albums {
    //buscamos el album
    const album = this.getAlbumsById(id)
    //combinamos los albums sino hay uno nuevo lo deja como esta
    const newAlbum  = Object.assign(album, updateFileds)
    //aca recorre y actualiza
    this.albums = this.albums.map(album => album.id === id ? newAlbum : album)
    return newAlbum
  }
}
