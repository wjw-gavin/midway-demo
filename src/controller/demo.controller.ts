import { Body, Controller, Post } from '@midwayjs/core';
import { UpdateItemDTO } from '../dto/demo.dto.js';

@Controller('/item')
export class HomeController {
  @Post('/update')
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async update(@Body() updateDTO: UpdateItemDTO) {
    // 在这里使用 updateDTO，无法类型提示
    // console.log(updateDTO.);
  }
}
