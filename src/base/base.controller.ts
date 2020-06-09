import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { BaseService } from './base.service';
import //   ApiUseTags,
//   ApiResponse,
//   ApiOperation,
//   ApiImplicitQuery,
//   ApiImplicitParam,
//   ApiImplicitBody,
//   ApiBearerAuth,
//   ApiConsumes,
//   ApiImplicitFile,
'@nestjs/swagger';

import { extname } from 'path';

@Controller('/api')
export class BaseController {
  constructor(private service: BaseService) {}

  @Get(':entity')
  findAllItems(@Param('entity') entity: string) {
      console.log('@Get controller');
    return this.service.showAllRows(entity);
  } 

  @Get(':entity/:id')
  getItemByID(@Param('entity') entity: string, @Param('id') id: string) {
    return this.service.getItemById(entity, id);
  }

  @Post(':entity')
  createItem(@Param('entity') entity: string, @Body() data: any) {
    console.log(entity,data);
    return this.service.createItem(entity, data);
  }

  @Put(':entity/:id')
  updateItem(
    @Param('entity') entity: string,
    @Param('id') id: string,
    @Body() data: any,
  ) {
    return this.service.update(entity, id, data);
  }

  @Delete(':entity/:id')
  deleteItem(@Param('entity') entity: string, @Param('id') id: string) {
    return this.service.delete(entity, id);
  }
}
