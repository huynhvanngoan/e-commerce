import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriesNoSpecModule } from './categories--no-spec/categories--no-spec.module';
import { CategoriesModule } from './categories/categories.module';
import { OrdersModule } from './orders/orders.module';
import { UsersModule } from './users/users.module';
import { VendorsModule } from './vendors/vendors.module';
import { AuthModule } from './auth/auth.module';
import { AdminModule } from './admin/admin.module';
import { CommonModule } from './common/common.module';
import { ConfigModule } from './config/config.module';

@Module({
  imports: [CategoriesNoSpecModule, CategoriesModule, OrdersModule, UsersModule, VendorsModule, AuthModule, AdminModule, CommonModule, ConfigModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
