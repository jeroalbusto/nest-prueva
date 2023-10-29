import { AlbumsStatus } from '../albums.entity'
import { IsIn, IsNotEmpty, IsNumber, IsOptional, IsString, Min, MinLength } from 'class-validator'


export class createAlbumDto{
    //validado
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    artist: string

    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    name: string

    @IsNumber()
    @IsNotEmpty()
    @Min(4)
    publication_year: number

    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    record_label: string
}

export class updateAlbumDto{
    @IsString()
    @IsOptional()
    artist?: string

    @IsString()
    @IsOptional()
    name?: string

    @IsNumber()
    @IsOptional()
    publication_year?: number

    @IsString()
    @IsOptional()
    record_label?: string

    @IsString()
    @IsOptional()
    @IsIn([AlbumsStatus.IN_STOCK,AlbumsStatus.OUT_OF_STOCK,AlbumsStatus.PENDING])
    status?: AlbumsStatus
}