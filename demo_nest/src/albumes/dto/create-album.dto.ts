import { IsDefined, IsInt } from "class-validator";

export class CreateAlbumDto {
    @IsDefined({message: "El id del artista es obligatorio"})
    @IsInt({message: "El id del artista debe ser un numero entero"})
    readonly idArtista: number;

    
}
