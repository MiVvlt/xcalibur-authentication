import { Logger } from '@nestjs/common';
import * as dotenv from 'dotenv';

dotenv.config();
import { NestFactory } from '@nestjs/core';
import {
	Transport,
	MicroserviceOptions,
} from '@nestjs/microservices';
import { AuthModule } from './auth.module';

async function bootstrap() {
	const options = {
		host: process.env.SERVICE_HOST || 'localhost',
		port: parseInt( process.env.SERVICE_PORT ) || 3000,
	};

	const app = await NestFactory.createMicroservice<MicroserviceOptions>( AuthModule, {
		transport: Transport.TCP,
		options,
	} );
	new Logger( 'Bootstrap' ).log( `Authentication microservice running at ${ options.host }:${ options.port }` );
	app.listen();
}

bootstrap();
