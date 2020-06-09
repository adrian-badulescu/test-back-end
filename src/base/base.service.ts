import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Repository, EntityManager } from "typeorm";

import { Model } from './base.entity';


@Injectable()
export class BaseService {

  service: Repository<Model>;

  constructor(private manager: EntityManager) {

  }

  async showAllRows(entity:string) {
      console.log('!!!');
    return await this.manager.query("select * from " + entity);
  }

  async createItem(entity:string, data: any) {

    var keys = [];
    for(var k in data) keys.push(k);
    
    await this.manager.createQueryBuilder()
    .insert()
    .into(entity, keys)
    .values(data)
    .execute();

    return data;

  }

  async getItemById(entity:string, id: string) {

    const item = await this.manager.query("select * from "+ entity + " where id = '" + id + "'");

    if(!item){
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }
    return item;
  }

  async update(entity:string, id: string, data: Partial<any>){

    console.log("from service: update", data);

    var keys = [];
    for(var k in data) keys.push(k);
    
    await this.manager.createQueryBuilder()
    .update(entity)
    .set(data)
    .where("id = :fieldid", { fieldid: id })
    .execute();
    
    return data;
  }

  async delete(entity:string, id: string){

    const item = await this.manager.query("delete from "+entity + " where id = '"+id+"'");

    if(!item){
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }
    await this.service.delete(id);
    return {deleted: true};
  }

}
