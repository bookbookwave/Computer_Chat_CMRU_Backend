import { ApolloDriverConfig, ApolloDriver } from '@nestjs/apollo';
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { MulterModule } from '@nestjs/platform-express';
import { ServeStaticModule } from '@nestjs/serve-static';
import * as dotenv from 'dotenv';
import { graphqlUploadExpress } from 'graphql-upload';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { BannerModule } from './banner/banner.module';
import { CategoryModule } from './category/category.module';
import { ChatGateway } from './chat.gateway';
import { ConfigurationModule } from './configuration/configuration.module';
import { DownloadCategoryModule } from './download-category/download-category.module';
import { DownloadModule } from './download/download.module';
import { PageModule } from './page/page.module';
import { PostModule } from './post/post.module';
import { UserModule } from './user/user.module';
import { UtilsService } from './utils/utils.service';
import { MessageModule } from './message/message.module';
// import { MessageRoomModule } from './message-room/message-room.module';
import { ProjectModule } from './project/project.module';
import { ProjectStatusModule } from './project-status/project-status.module';
import { ProjectTypeModule } from './project-type/project-type.module';
import { UserProjectModule } from './user-project/user-project.module';
import { ChatService } from './chat.service';
import { PrismaService } from './prisma.service';
import { FileUploadModule } from './file-upload/file-upload.module';
import { LogLoginModule } from './log-login/log-login.module';
import { BlogNewsModule } from './blog-news/blog-news.module';
dotenv.config();
@Module({
  imports: [
    ConfigModule.forRoot(),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      // typePaths: ['./**/*.graphql'],
      // definitions: {
      //   path: join(process.cwd(), 'src/graphql.ts'),
      //   outputAs: 'class',
      // },
      debug: true,
      playground: true,
      context: ({ req }) => ({ req }),
      autoSchemaFile: 'schema.gql',
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../..', 'uploads'),
    }),

    UserModule,
    AuthModule,
    CategoryModule,
    PostModule,
    PageModule,
    BannerModule,
    DownloadModule,
    ConfigurationModule,
    DownloadCategoryModule,
    MulterModule.register({ dest: './uploads' }),
    MessageModule,
    ProjectModule,
    ProjectStatusModule,
    ProjectTypeModule,
    UserProjectModule,
    FileUploadModule,
    LogLoginModule,
    BlogNewsModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    ChatGateway,
    UtilsService,
    ChatService,
    PrismaService,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(graphqlUploadExpress({ maxFileSize: 100000000, maxFiles: 10 }))
      .forRoutes('graphql');
  }
}
