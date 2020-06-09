import { Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Model {
    @PrimaryColumn({type: 'varchar', length: 50})
    id: string;
}