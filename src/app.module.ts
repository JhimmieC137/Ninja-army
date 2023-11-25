import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PhonesModule } from './modules/phones/phones.module';
import { NinjasModule } from './modules/ninjas/ninjas.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { baseConfig } from './settings/base.config';
import { dataSourceOptions } from './settings/dataSource.config';
import { dbConfig } from './settings/db.config';
// import { RouterModule } from 'nest-router/router.module';
// import { routes } from './routes';
import { RouterModule } from '@nestjs/core';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [
    NinjasModule,
    PhonesModule,
    RouterModule.register([
      {
        path: '/api/v1/',
        module: NinjasModule,
      },
      {
        path: '/api/v1/',
        module: PhonesModule,
      },
    ]),
    ConfigModule.forRoot({
      isGlobal: true,
      load: [baseConfig, dbConfig],
    }),
    TypeOrmModule.forRoot(dataSourceOptions),
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
