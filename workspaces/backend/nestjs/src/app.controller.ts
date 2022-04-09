import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { IUser } from '@mono/common';

@Controller()
export class AppController {
  
  private user: IUser;
  
  constructor(private readonly appService: AppService) {}
  
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
