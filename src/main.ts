import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('User API')
    .setDescription('API para gerenciar usuários')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  
  app.enableCors({
    origin: 'http://localhost:3000',  // Permitir requisições dessa origem
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // Se você estiver usando cookies ou autenticação baseada em sessão
  });

  await app.listen(3003);
}

bootstrap();
