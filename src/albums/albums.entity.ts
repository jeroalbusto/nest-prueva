export enum AlbumsStatus{
    IN_STOCK= 'IN_STOCK',
    PENDING= 'PENDING',
    OUT_OF_STOCK= 'OUT_OF_STOCK',
}


export class Albums{
    id:  string
    artist: string
    name: string
    publication_year: number
    record_label: string
    status: AlbumsStatus
}

