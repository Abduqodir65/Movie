import { CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Request } from 'express';
import { Observable } from 'rxjs';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
export declare interface RequestInterface extends Request {
    userId: number | undefined;
    role: string | undefined;
}
export declare class CheckAuthGuard implements CanActivate {
    private reflector;
    private jwtService;
    private config;
    constructor(reflector: Reflector, jwtService: JwtService, config: ConfigService);
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean>;
}
