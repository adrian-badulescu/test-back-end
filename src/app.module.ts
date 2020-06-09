import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { BaseModule } from './base/base.module';
import { join } from 'path';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [BaseModule,
    SwaggerModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',    
      port: 3306,
      username: 'root',
      password: 'Hanibalanteportas2014!',
      database: 'test',
      synchronize: true,
      logging: false,
      entities: [join(__dirname, '**/**.entity{.ts,.js}')],
    }),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
