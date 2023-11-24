import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getOwnerName(): string {
    return 'Jimi Hendrix!';
  }
}
