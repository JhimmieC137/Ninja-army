import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { NinjasModule } from './modules/ninjas/ninjas.module';
import { PhonesModule } from './modules/phones/phones.module';
import {
  authApiDocsConfig,
  ninjaApiDocsConfig,
  phoneApiDocsConfig,
} from './settings/doc.config';
import { AuthModule } from './modules/auth/auth.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const authApiDocs = SwaggerModule.createDocument(app, authApiDocsConfig, {
    include: [AuthModule],
  });

  const ninjaApiDocs = SwaggerModule.createDocument(app, ninjaApiDocsConfig, {
    include: [NinjasModule],
  });

  const phoneApiDocs = SwaggerModule.createDocument(app, phoneApiDocsConfig, {
    include: [PhonesModule],
  });

  SwaggerModule.setup('docs/auth', app, authApiDocs);
  SwaggerModule.setup('docs/ninjas', app, ninjaApiDocs);
  SwaggerModule.setup('docs/phones', app, phoneApiDocs);

  app.useGlobalPipes(new ValidationPipe());
  const port = app.get(ConfigService).get<number>('PORT', 3100);
  await app.listen(port);
}
bootstrap();
