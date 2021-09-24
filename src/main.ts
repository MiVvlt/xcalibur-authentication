import * as dotenv from 'dotenv';
dotenv.config();
import { NestFactory } from '@nestjs/core';
import {
	Transport,
	MicroserviceOptions,
} from '@nestjs/microservices';
import { AuthModule } from './auth.module';

async function bootstrap() {
	const app = await NestFactory.createMicroservice<MicroserviceOptions>( AuthModule, {
		transport: Transport.TCP,
		options: {
			host: process.env.SERVICE_HOST,
			port:  parseInt(process.env.SERVICE_PORT)
		}
	} );
	app.listen();
}

bootstrap();
