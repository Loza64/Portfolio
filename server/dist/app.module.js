"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const config_1 = require("@nestjs/config");
const projects_module_1 = require("./data/projects/projects.module");
const mongoose_1 = require("@nestjs/mongoose");
const messages_module_1 = require("./data/messages/messages.module");
const mailer_1 = require("@nestjs-modules/mailer");
;
const technical_module_1 = require("./data/skills/technical/technical.module");
const professional_module_1 = require("./data/skills/professional/professional.module");
const config_app_1 = require("./config.app");
const about_module_1 = require("./data/about/about.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({ isGlobal: true, envFilePath: '.env' }),
            mongoose_1.MongooseModule.forRoot(process.env.MONGO_CLUSTER || ''),
            mailer_1.MailerModule.forRoot(config_app_1.configMailer),
            messages_module_1.MessagesModule,
            projects_module_1.ProjectsModule,
            technical_module_1.TechnicalModule,
            professional_module_1.ProfessionalModule,
            about_module_1.AboutModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map