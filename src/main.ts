import * as dotenv from 'dotenv';
dotenv.config();
import { NestFactory } from '@nestjs/core';
import {
	Transport,
	MicroserviceOptions,
} from '@nestjs/microservices';
import { AuthModule } from './auth.module';
import { Logger } from '@nestjs/common';


async function bootstrap() {

	const app = await NestFactory.createMicroservice<MicroserviceOptions>( AuthModule, {
		transport: Transport.REDIS,
		options: {
			url: process.env.REDIS_URL
		}
	} );
	new Logger('Bootstrap').log(`connecting service to redis: ${process.env.REDIS_URL}`)
	app.listen();
}

bootstrap();
