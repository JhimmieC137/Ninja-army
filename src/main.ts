import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { NinjasModule } from './modules/ninjas/ninjas.module';
import { PhonesModule } from './modules/phones/phones.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const ninjaApiDocsConfig = new DocumentBuilder()
    .setTitle('Ninja army')
    .setDescription('The ninja army API description')
    .setVersion('1.0')
    .addTag('ninjas')
    .build();

  const ninjaApiDocs = SwaggerModule.createDocument(app, ninjaApiDocsConfig, {
    include: [NinjasModule],
  });
  SwaggerModule.setup('docs/ninjas', app, ninjaApiDocs);

  const phoneApiDocsConfig = new DocumentBuilder()
    .setTitle('Phone shop')
    .setDescription('E-commerce website for selling phones')
    .setVersion('1.0')
    .addTag('Phones')
    .build();

  const phoneApiDocs = SwaggerModule.createDocument(app, phoneApiDocsConfig, {
    include: [PhonesModule],
  });
  SwaggerModule.setup('docs/phones', app, phoneApiDocs);

  app.useGlobalPipes(new ValidationPipe());
  const port = app.get(ConfigService).get<number>('PORT', 3100);
  await app.listen(port);
}
bootstrap();
