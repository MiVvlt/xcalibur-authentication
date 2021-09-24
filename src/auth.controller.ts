import { Controller } from '@nestjs/common';
import {
	MessagePattern,
	Payload,
} from '@nestjs/microservices';
import { AuthService } from './auth.service';

@Controller()
export class AuthController {
	constructor( private readonly authService: AuthService ) {}

	@MessagePattern( 'payload-from-access-token' )
	async payloadFromAccessToken( @Payload() token: string ): Promise<any> {
		return this.authService.payloadFromAccessToken( token );
	}

	@MessagePattern( 'refresh-access-token' )
	async refreshAccessToken( @Payload() refreshToken: string ): Promise<any> {
		return this.authService.refreshAccessToken( refreshToken );
	}

	@MessagePattern( 'login' )
	async login( @Payload() credentials: any ): Promise<any> {
		return this.authService.login( credentials );
	}
}
