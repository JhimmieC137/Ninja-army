import { DocumentBuilder } from '@nestjs/swagger';

const apiDocumentation = () => ({
  title: 'Way of the Shinobi',
  description:
    'Join as ninja with weapons and special abilities, be part of a shinobi army',
  version: '1.0',
});

const apiDocs = apiDocumentation();

export const ninjaApiDocsConfig = new DocumentBuilder()
  .setTitle(apiDocs.title)
  .setDescription(apiDocs.description)
  .setVersion(apiDocs.version)
  .addTag('ninjas')
  .build();

export const phoneApiDocsConfig = new DocumentBuilder()
  .setTitle(apiDocs.title)
  .setDescription(apiDocs.description)
  .setVersion(apiDocs.version)
  .addTag('phones')
  .build();

export const authApiDocsConfig = new DocumentBuilder()
  .setTitle(apiDocs.title)
  .setDescription(apiDocs.description)
  .setVersion(apiDocs.version)
  .addTag('auth')
  .build();
