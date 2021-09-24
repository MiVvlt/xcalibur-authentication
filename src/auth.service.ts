import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
	public async payloadFromAccessToken( token: string ): Promise<any> {
		console.log( token );
		return {
			sub  : 'test',
			roles: [ 'USER', 'ADMIN' ],
		};
	}

	public async refreshAccessToken( token: string ): Promise<any> {
		console.log( token );
		return null;
	}

	public async login( credentials: any ): Promise<any> {
		console.log( credentials );
		return null;
	}
}
