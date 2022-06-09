import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AppExceptionFilter, ExceptionInterceptor } from 'nestjs-error-handler';
import { Logger } from '@nestjs/common';
import { HTTP_METHODS } from './configs/error.codes';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('Placeholder API')
    .setDescription('Placeholder API')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  app.useGlobalFilters(
    new AppExceptionFilter(new Logger(), HTTP_METHODS, process.env.TZ),
  );
  app.useGlobalInterceptors(new ExceptionInterceptor());
  await app.listen(3001);
}
bootstrap();
