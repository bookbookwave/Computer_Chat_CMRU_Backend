import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Upload from 'graphql-upload';
import { registerEnumType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { Float } from '@nestjs/graphql';

export enum UserScalarFieldEnum {
    id = "id",
    name = "name",
    email = "email",
    password = "password",
    role = "role",
    avatar = "avatar",
    createAt = "createAt",
    updateAt = "updateAt"
}

export enum TransactionIsolationLevel {
    ReadUncommitted = "ReadUncommitted",
    ReadCommitted = "ReadCommitted",
    RepeatableRead = "RepeatableRead",
    Serializable = "Serializable"
}

export enum SortOrder {
    asc = "asc",
    desc = "desc"
}

export enum Role {
    ADMIN = "ADMIN",
    USER = "USER"
}

export enum QueryMode {
    'default' = "default",
    insensitive = "insensitive"
}

export enum PostScalarFieldEnum {
    id = "id",
    title = "title",
    thumbnail = "thumbnail",
    userId = "userId",
    categoryId = "categoryId",
    view = "view",
    content = "content",
    createAt = "createAt",
    updateAt = "updateAt"
}

export enum PageScalarFieldEnum {
    id = "id",
    title = "title",
    thumbnail = "thumbnail",
    userId = "userId",
    view = "view",
    content = "content",
    createAt = "createAt",
    updateAt = "updateAt"
}

export enum DownloadCategoryScalarFieldEnum {
    id = "id",
    name = "name"
}

export enum DownloadScalarFieldEnum {
    id = "id",
    downloadCategoryId = "downloadCategoryId",
    link = "link",
    thumbnail = "thumbnail",
    userId = "userId",
    counting = "counting",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}

export enum ConfigurationScalarFieldEnum {
    id = "id",
    name = "name",
    value = "value"
}

export enum CategoryScalarFieldEnum {
    id = "id",
    name = "name"
}

export enum BannerScalarFieldEnum {
    id = "id",
    title = "title",
    image = "image",
    link = "link",
    createAt = "createAt",
    updateAt = "updateAt"
}

registerEnumType(BannerScalarFieldEnum, { name: 'BannerScalarFieldEnum', description: undefined })
registerEnumType(CategoryScalarFieldEnum, { name: 'CategoryScalarFieldEnum', description: undefined })
registerEnumType(ConfigurationScalarFieldEnum, { name: 'ConfigurationScalarFieldEnum', description: undefined })
registerEnumType(DownloadScalarFieldEnum, { name: 'DownloadScalarFieldEnum', description: undefined })
registerEnumType(DownloadCategoryScalarFieldEnum, { name: 'DownloadCategoryScalarFieldEnum', description: undefined })
registerEnumType(PageScalarFieldEnum, { name: 'PageScalarFieldEnum', description: undefined })
registerEnumType(PostScalarFieldEnum, { name: 'PostScalarFieldEnum', description: undefined })
registerEnumType(QueryMode, { name: 'QueryMode', description: undefined })
registerEnumType(Role, { name: 'Role', description: undefined })
registerEnumType(SortOrder, { name: 'SortOrder', description: undefined })
registerEnumType(TransactionIsolationLevel, { name: 'TransactionIsolationLevel', description: undefined })
registerEnumType(UserScalarFieldEnum, { name: 'UserScalarFieldEnum', description: undefined })

@ObjectType()
export class AggregateBanner {
    @Field(() => BannerCountAggregate, {nullable:true})
    _count?: InstanceType<typeof BannerCountAggregate>;
    @Field(() => BannerMinAggregate, {nullable:true})
    _min?: InstanceType<typeof BannerMinAggregate>;
    @Field(() => BannerMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof BannerMaxAggregate>;
}

@ArgsType()
export class BannerAggregateArgs {
    @Field(() => BannerWhereInput, {nullable:true})
    @Type(() => BannerWhereInput)
    where?: InstanceType<typeof BannerWhereInput>;
    @Field(() => [BannerOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<BannerOrderByWithRelationInput>;
    @Field(() => BannerWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof BannerWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => BannerCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof BannerCountAggregateInput>;
    @Field(() => BannerMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof BannerMinAggregateInput>;
    @Field(() => BannerMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof BannerMaxAggregateInput>;
}

@InputType()
export class BannerCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    title?: true;
    @Field(() => Boolean, {nullable:true})
    image?: Upload.Upload;
    @Field(() => Boolean, {nullable:true})
    link?: true;
    @Field(() => Boolean, {nullable:true})
    createAt?: true;
    @Field(() => Boolean, {nullable:true})
    updateAt?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class BannerCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    title!: number;
    @Field(() => Int, {nullable:false})
    image!: number;
    @Field(() => Int, {nullable:false})
    link!: number;
    @Field(() => Int, {nullable:false})
    createAt!: number;
    @Field(() => Int, {nullable:false})
    updateAt!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class BannerCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    image?: Upload.Upload;
    @Field(() => SortOrder, {nullable:true})
    link?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updateAt?: keyof typeof SortOrder;
}

@InputType()
export class BannerCreateManyInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    title!: string;
    @Field(() => Upload.GraphQLUpload, {nullable:false})
    image!: Upload.Upload;
    @Field(() => String, {nullable:true})
    link?: string;
    @Field(() => Date, {nullable:true})
    createAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updateAt?: Date | string;
}

@InputType()
export class BannerCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    title!: string;
    @Field(() => Upload.GraphQLUpload, {nullable:false})
    image!: Upload.Upload;
    @Field(() => String, {nullable:true})
    link?: string;
    @Field(() => Date, {nullable:true})
    createAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updateAt?: Date | string;
}

@ArgsType()
export class BannerGroupByArgs {
    @Field(() => BannerWhereInput, {nullable:true})
    @Type(() => BannerWhereInput)
    where?: InstanceType<typeof BannerWhereInput>;
    @Field(() => [BannerOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<BannerOrderByWithAggregationInput>;
    @Field(() => [BannerScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof BannerScalarFieldEnum>;
    @Field(() => BannerScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof BannerScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => BannerCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof BannerCountAggregateInput>;
    @Field(() => BannerMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof BannerMinAggregateInput>;
    @Field(() => BannerMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof BannerMaxAggregateInput>;
}

@ObjectType()
export class BannerGroupBy {
    @Field(() => String, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    title!: string;
    @Field(() => String, {nullable:false})
    image!: string;
    @Field(() => String, {nullable:true})
    link?: string;
    @Field(() => Date, {nullable:false})
    createAt!: Date | string;
    @Field(() => Date, {nullable:false})
    updateAt!: Date | string;
    @Field(() => BannerCountAggregate, {nullable:true})
    _count?: InstanceType<typeof BannerCountAggregate>;
    @Field(() => BannerMinAggregate, {nullable:true})
    _min?: InstanceType<typeof BannerMinAggregate>;
    @Field(() => BannerMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof BannerMaxAggregate>;
}

@InputType()
export class BannerMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    title?: true;
    @Field(() => Boolean, {nullable:true})
    image?: Upload.Upload;
    @Field(() => Boolean, {nullable:true})
    link?: true;
    @Field(() => Boolean, {nullable:true})
    createAt?: true;
    @Field(() => Boolean, {nullable:true})
    updateAt?: true;
}

@ObjectType()
export class BannerMaxAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    title?: string;
    @Field(() => String, {nullable:true})
    image?: string;
    @Field(() => String, {nullable:true})
    link?: string;
    @Field(() => Date, {nullable:true})
    createAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updateAt?: Date | string;
}

@InputType()
export class BannerMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    image?: Upload.Upload;
    @Field(() => SortOrder, {nullable:true})
    link?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updateAt?: keyof typeof SortOrder;
}

@InputType()
export class BannerMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    title?: true;
    @Field(() => Boolean, {nullable:true})
    image?: Upload.Upload;
    @Field(() => Boolean, {nullable:true})
    link?: true;
    @Field(() => Boolean, {nullable:true})
    createAt?: true;
    @Field(() => Boolean, {nullable:true})
    updateAt?: true;
}

@ObjectType()
export class BannerMinAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    title?: string;
    @Field(() => String, {nullable:true})
    image?: string;
    @Field(() => String, {nullable:true})
    link?: string;
    @Field(() => Date, {nullable:true})
    createAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updateAt?: Date | string;
}

@InputType()
export class BannerMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    image?: Upload.Upload;
    @Field(() => SortOrder, {nullable:true})
    link?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updateAt?: keyof typeof SortOrder;
}

@InputType()
export class BannerOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    image?: Upload.Upload;
    @Field(() => SortOrder, {nullable:true})
    link?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updateAt?: keyof typeof SortOrder;
    @Field(() => BannerCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof BannerCountOrderByAggregateInput>;
    @Field(() => BannerMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof BannerMaxOrderByAggregateInput>;
    @Field(() => BannerMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof BannerMinOrderByAggregateInput>;
}

@InputType()
export class BannerOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    image?: Upload.Upload;
    @Field(() => SortOrder, {nullable:true})
    link?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updateAt?: keyof typeof SortOrder;
}

@InputType()
export class BannerScalarWhereWithAggregatesInput {
    @Field(() => [BannerScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<BannerScalarWhereWithAggregatesInput>;
    @Field(() => [BannerScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<BannerScalarWhereWithAggregatesInput>;
    @Field(() => [BannerScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<BannerScalarWhereWithAggregatesInput>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    title?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    image?: InstanceType<typeof Upload.Upload>;
    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    link?: InstanceType<typeof StringNullableWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updateAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}

@InputType()
export class BannerUncheckedCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    title!: string;
    @Field(() => Upload.GraphQLUpload, {nullable:false})
    image!: Upload.Upload;
    @Field(() => String, {nullable:true})
    link?: string;
    @Field(() => Date, {nullable:true})
    createAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updateAt?: Date | string;
}

@InputType()
export class BannerUncheckedUpdateManyInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    image?: InstanceType<typeof Upload.Upload>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    link?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updateAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class BannerUncheckedUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    image?: InstanceType<typeof Upload.Upload>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    link?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updateAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class BannerUpdateManyMutationInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    image?: InstanceType<typeof Upload.Upload>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    link?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updateAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class BannerUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    image?: InstanceType<typeof Upload.Upload>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    link?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updateAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class BannerWhereUniqueInput {
    @Field(() => String, {nullable:true})
    id?: string;
}

@InputType()
export class BannerWhereInput {
    @Field(() => [BannerWhereInput], {nullable:true})
    AND?: Array<BannerWhereInput>;
    @Field(() => [BannerWhereInput], {nullable:true})
    OR?: Array<BannerWhereInput>;
    @Field(() => [BannerWhereInput], {nullable:true})
    NOT?: Array<BannerWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    title?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    image?: InstanceType<typeof Upload.Upload>;
    @Field(() => StringNullableFilter, {nullable:true})
    link?: InstanceType<typeof StringNullableFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updateAt?: InstanceType<typeof DateTimeFilter>;
}

@ObjectType()
export class Banner {
    @Field(() => ID, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    title!: string;
    @Field(() => String, {nullable:false})
    image!: string;
    @Field(() => String, {nullable:true})
    link!: string | null;
    @Field(() => Date, {nullable:false})
    createAt!: Date;
    @Field(() => Date, {nullable:false})
    updateAt!: Date;
}

@ArgsType()
export class CreateManyBannerArgs {
    @Field(() => [BannerCreateManyInput], {nullable:false})
    @Type(() => BannerCreateManyInput)
    data!: Array<BannerCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneBannerArgs {
    @Field(() => BannerCreateInput, {nullable:false})
    @Type(() => BannerCreateInput)
    data!: InstanceType<typeof BannerCreateInput>;
}

@ArgsType()
export class DeleteManyBannerArgs {
    @Field(() => BannerWhereInput, {nullable:true})
    @Type(() => BannerWhereInput)
    where?: InstanceType<typeof BannerWhereInput>;
}

@ArgsType()
export class DeleteOneBannerArgs {
    @Field(() => BannerWhereUniqueInput, {nullable:false})
    @Type(() => BannerWhereUniqueInput)
    where!: InstanceType<typeof BannerWhereUniqueInput>;
}

@ArgsType()
export class FindFirstBannerOrThrowArgs {
    @Field(() => BannerWhereInput, {nullable:true})
    @Type(() => BannerWhereInput)
    where?: InstanceType<typeof BannerWhereInput>;
    @Field(() => [BannerOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<BannerOrderByWithRelationInput>;
    @Field(() => BannerWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof BannerWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [BannerScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof BannerScalarFieldEnum>;
}

@ArgsType()
export class FindFirstBannerArgs {
    @Field(() => BannerWhereInput, {nullable:true})
    @Type(() => BannerWhereInput)
    where?: InstanceType<typeof BannerWhereInput>;
    @Field(() => [BannerOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<BannerOrderByWithRelationInput>;
    @Field(() => BannerWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof BannerWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [BannerScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof BannerScalarFieldEnum>;
}

@ArgsType()
export class FindManyBannerArgs {
    @Field(() => BannerWhereInput, {nullable:true})
    @Type(() => BannerWhereInput)
    where?: InstanceType<typeof BannerWhereInput>;
    @Field(() => [BannerOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<BannerOrderByWithRelationInput>;
    @Field(() => BannerWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof BannerWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [BannerScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof BannerScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueBannerOrThrowArgs {
    @Field(() => BannerWhereUniqueInput, {nullable:false})
    @Type(() => BannerWhereUniqueInput)
    where!: InstanceType<typeof BannerWhereUniqueInput>;
}

@ArgsType()
export class FindUniqueBannerArgs {
    @Field(() => BannerWhereUniqueInput, {nullable:false})
    @Type(() => BannerWhereUniqueInput)
    where!: InstanceType<typeof BannerWhereUniqueInput>;
}

@ArgsType()
export class UpdateManyBannerArgs {
    @Field(() => BannerUpdateManyMutationInput, {nullable:false})
    @Type(() => BannerUpdateManyMutationInput)
    data!: InstanceType<typeof BannerUpdateManyMutationInput>;
    @Field(() => BannerWhereInput, {nullable:true})
    @Type(() => BannerWhereInput)
    where?: InstanceType<typeof BannerWhereInput>;
}

@ArgsType()
export class UpdateOneBannerArgs {
    @Field(() => BannerUpdateInput, {nullable:false})
    @Type(() => BannerUpdateInput)
    data!: InstanceType<typeof BannerUpdateInput>;
    @Field(() => BannerWhereUniqueInput, {nullable:false})
    @Type(() => BannerWhereUniqueInput)
    where!: InstanceType<typeof BannerWhereUniqueInput>;
}

@ArgsType()
export class UpsertOneBannerArgs {
    @Field(() => BannerWhereUniqueInput, {nullable:false})
    @Type(() => BannerWhereUniqueInput)
    where!: InstanceType<typeof BannerWhereUniqueInput>;
    @Field(() => BannerCreateInput, {nullable:false})
    @Type(() => BannerCreateInput)
    create!: InstanceType<typeof BannerCreateInput>;
    @Field(() => BannerUpdateInput, {nullable:false})
    @Type(() => BannerUpdateInput)
    update!: InstanceType<typeof BannerUpdateInput>;
}

@ObjectType()
export class AggregateCategory {
    @Field(() => CategoryCountAggregate, {nullable:true})
    _count?: InstanceType<typeof CategoryCountAggregate>;
    @Field(() => CategoryMinAggregate, {nullable:true})
    _min?: InstanceType<typeof CategoryMinAggregate>;
    @Field(() => CategoryMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof CategoryMaxAggregate>;
}

@ArgsType()
export class CategoryAggregateArgs {
    @Field(() => CategoryWhereInput, {nullable:true})
    @Type(() => CategoryWhereInput)
    where?: InstanceType<typeof CategoryWhereInput>;
    @Field(() => [CategoryOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CategoryOrderByWithRelationInput>;
    @Field(() => CategoryWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof CategoryWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => CategoryCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof CategoryCountAggregateInput>;
    @Field(() => CategoryMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof CategoryMinAggregateInput>;
    @Field(() => CategoryMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof CategoryMaxAggregateInput>;
}

@InputType()
export class CategoryCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class CategoryCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    name!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class CategoryCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
}

@ObjectType()
export class CategoryCount {
    @Field(() => Int, {nullable:false})
    Post?: number;
}

@InputType()
export class CategoryCreateManyInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.MinLength(3)
    name!: string;
}

@InputType()
export class CategoryCreateNestedOneWithoutPostInput {
    @Field(() => CategoryCreateWithoutPostInput, {nullable:true})
    @Type(() => CategoryCreateWithoutPostInput)
    create?: InstanceType<typeof CategoryCreateWithoutPostInput>;
    @Field(() => CategoryCreateOrConnectWithoutPostInput, {nullable:true})
    @Type(() => CategoryCreateOrConnectWithoutPostInput)
    connectOrCreate?: InstanceType<typeof CategoryCreateOrConnectWithoutPostInput>;
    @Field(() => CategoryWhereUniqueInput, {nullable:true})
    @Type(() => CategoryWhereUniqueInput)
    connect?: InstanceType<typeof CategoryWhereUniqueInput>;
}

@InputType()
export class CategoryCreateOrConnectWithoutPostInput {
    @Field(() => CategoryWhereUniqueInput, {nullable:false})
    @Type(() => CategoryWhereUniqueInput)
    where!: InstanceType<typeof CategoryWhereUniqueInput>;
    @Field(() => CategoryCreateWithoutPostInput, {nullable:false})
    @Type(() => CategoryCreateWithoutPostInput)
    create!: InstanceType<typeof CategoryCreateWithoutPostInput>;
}

@InputType()
export class CategoryCreateWithoutPostInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.MinLength(3)
    name!: string;
}

@InputType()
export class CategoryCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.MinLength(3)
    name!: string;
    @Field(() => PostCreateNestedManyWithoutCategoryInput, {nullable:true})
    Post?: InstanceType<typeof PostCreateNestedManyWithoutCategoryInput>;
}

@ArgsType()
export class CategoryGroupByArgs {
    @Field(() => CategoryWhereInput, {nullable:true})
    @Type(() => CategoryWhereInput)
    where?: InstanceType<typeof CategoryWhereInput>;
    @Field(() => [CategoryOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<CategoryOrderByWithAggregationInput>;
    @Field(() => [CategoryScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof CategoryScalarFieldEnum>;
    @Field(() => CategoryScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof CategoryScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => CategoryCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof CategoryCountAggregateInput>;
    @Field(() => CategoryMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof CategoryMinAggregateInput>;
    @Field(() => CategoryMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof CategoryMaxAggregateInput>;
}

@ObjectType()
export class CategoryGroupBy {
    @Field(() => String, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => CategoryCountAggregate, {nullable:true})
    _count?: InstanceType<typeof CategoryCountAggregate>;
    @Field(() => CategoryMinAggregate, {nullable:true})
    _min?: InstanceType<typeof CategoryMinAggregate>;
    @Field(() => CategoryMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof CategoryMaxAggregate>;
}

@InputType()
export class CategoryMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
}

@ObjectType()
export class CategoryMaxAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    name?: string;
}

@InputType()
export class CategoryMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
}

@InputType()
export class CategoryMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
}

@ObjectType()
export class CategoryMinAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    name?: string;
}

@InputType()
export class CategoryMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
}

@InputType()
export class CategoryOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => CategoryCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof CategoryCountOrderByAggregateInput>;
    @Field(() => CategoryMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof CategoryMaxOrderByAggregateInput>;
    @Field(() => CategoryMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof CategoryMinOrderByAggregateInput>;
}

@InputType()
export class CategoryOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => PostOrderByRelationAggregateInput, {nullable:true})
    Post?: InstanceType<typeof PostOrderByRelationAggregateInput>;
}

@InputType()
export class CategoryRelationFilter {
    @Field(() => CategoryWhereInput, {nullable:true})
    is?: InstanceType<typeof CategoryWhereInput>;
    @Field(() => CategoryWhereInput, {nullable:true})
    isNot?: InstanceType<typeof CategoryWhereInput>;
}

@InputType()
export class CategoryScalarWhereWithAggregatesInput {
    @Field(() => [CategoryScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<CategoryScalarWhereWithAggregatesInput>;
    @Field(() => [CategoryScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<CategoryScalarWhereWithAggregatesInput>;
    @Field(() => [CategoryScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<CategoryScalarWhereWithAggregatesInput>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: InstanceType<typeof StringWithAggregatesFilter>;
}

@InputType()
export class CategoryUncheckedCreateWithoutPostInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.MinLength(3)
    name!: string;
}

@InputType()
export class CategoryUncheckedCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.MinLength(3)
    name!: string;
    @Field(() => PostUncheckedCreateNestedManyWithoutCategoryInput, {nullable:true})
    Post?: InstanceType<typeof PostUncheckedCreateNestedManyWithoutCategoryInput>;
}

@InputType()
export class CategoryUncheckedUpdateManyInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}

@InputType()
export class CategoryUncheckedUpdateWithoutPostInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}

@InputType()
export class CategoryUncheckedUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => PostUncheckedUpdateManyWithoutCategoryNestedInput, {nullable:true})
    Post?: InstanceType<typeof PostUncheckedUpdateManyWithoutCategoryNestedInput>;
}

@InputType()
export class CategoryUpdateManyMutationInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}

@InputType()
export class CategoryUpdateOneRequiredWithoutPostNestedInput {
    @Field(() => CategoryCreateWithoutPostInput, {nullable:true})
    @Type(() => CategoryCreateWithoutPostInput)
    create?: InstanceType<typeof CategoryCreateWithoutPostInput>;
    @Field(() => CategoryCreateOrConnectWithoutPostInput, {nullable:true})
    @Type(() => CategoryCreateOrConnectWithoutPostInput)
    connectOrCreate?: InstanceType<typeof CategoryCreateOrConnectWithoutPostInput>;
    @Field(() => CategoryUpsertWithoutPostInput, {nullable:true})
    @Type(() => CategoryUpsertWithoutPostInput)
    upsert?: InstanceType<typeof CategoryUpsertWithoutPostInput>;
    @Field(() => CategoryWhereUniqueInput, {nullable:true})
    @Type(() => CategoryWhereUniqueInput)
    connect?: InstanceType<typeof CategoryWhereUniqueInput>;
    @Field(() => CategoryUpdateWithoutPostInput, {nullable:true})
    @Type(() => CategoryUpdateWithoutPostInput)
    update?: InstanceType<typeof CategoryUpdateWithoutPostInput>;
}

@InputType()
export class CategoryUpdateWithoutPostInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}

@InputType()
export class CategoryUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => PostUpdateManyWithoutCategoryNestedInput, {nullable:true})
    Post?: InstanceType<typeof PostUpdateManyWithoutCategoryNestedInput>;
}

@InputType()
export class CategoryUpsertWithoutPostInput {
    @Field(() => CategoryUpdateWithoutPostInput, {nullable:false})
    @Type(() => CategoryUpdateWithoutPostInput)
    update!: InstanceType<typeof CategoryUpdateWithoutPostInput>;
    @Field(() => CategoryCreateWithoutPostInput, {nullable:false})
    @Type(() => CategoryCreateWithoutPostInput)
    create!: InstanceType<typeof CategoryCreateWithoutPostInput>;
}

@InputType()
export class CategoryWhereUniqueInput {
    @Field(() => String, {nullable:true})
    id?: string;
}

@InputType()
export class CategoryWhereInput {
    @Field(() => [CategoryWhereInput], {nullable:true})
    AND?: Array<CategoryWhereInput>;
    @Field(() => [CategoryWhereInput], {nullable:true})
    OR?: Array<CategoryWhereInput>;
    @Field(() => [CategoryWhereInput], {nullable:true})
    NOT?: Array<CategoryWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    name?: InstanceType<typeof StringFilter>;
    @Field(() => PostListRelationFilter, {nullable:true})
    Post?: InstanceType<typeof PostListRelationFilter>;
}

@ObjectType()
export class Category {
    @Field(() => ID, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => [Post], {nullable:true})
    Post?: Array<Post>;
    @Field(() => CategoryCount, {nullable:false})
    _count?: InstanceType<typeof CategoryCount>;
}

@ArgsType()
export class CreateManyCategoryArgs {
    @Field(() => [CategoryCreateManyInput], {nullable:false})
    @Type(() => CategoryCreateManyInput)
    data!: Array<CategoryCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneCategoryArgs {
    @Field(() => CategoryCreateInput, {nullable:false})
    @Type(() => CategoryCreateInput)
    data!: InstanceType<typeof CategoryCreateInput>;
}

@ArgsType()
export class DeleteManyCategoryArgs {
    @Field(() => CategoryWhereInput, {nullable:true})
    @Type(() => CategoryWhereInput)
    where?: InstanceType<typeof CategoryWhereInput>;
}

@ArgsType()
export class DeleteOneCategoryArgs {
    @Field(() => CategoryWhereUniqueInput, {nullable:false})
    @Type(() => CategoryWhereUniqueInput)
    where!: InstanceType<typeof CategoryWhereUniqueInput>;
}

@ArgsType()
export class FindFirstCategoryOrThrowArgs {
    @Field(() => CategoryWhereInput, {nullable:true})
    @Type(() => CategoryWhereInput)
    where?: InstanceType<typeof CategoryWhereInput>;
    @Field(() => [CategoryOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CategoryOrderByWithRelationInput>;
    @Field(() => CategoryWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof CategoryWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [CategoryScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof CategoryScalarFieldEnum>;
}

@ArgsType()
export class FindFirstCategoryArgs {
    @Field(() => CategoryWhereInput, {nullable:true})
    @Type(() => CategoryWhereInput)
    where?: InstanceType<typeof CategoryWhereInput>;
    @Field(() => [CategoryOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CategoryOrderByWithRelationInput>;
    @Field(() => CategoryWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof CategoryWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [CategoryScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof CategoryScalarFieldEnum>;
}

@ArgsType()
export class FindManyCategoryArgs {
    @Field(() => CategoryWhereInput, {nullable:true})
    @Type(() => CategoryWhereInput)
    where?: InstanceType<typeof CategoryWhereInput>;
    @Field(() => [CategoryOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CategoryOrderByWithRelationInput>;
    @Field(() => CategoryWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof CategoryWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [CategoryScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof CategoryScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueCategoryOrThrowArgs {
    @Field(() => CategoryWhereUniqueInput, {nullable:false})
    @Type(() => CategoryWhereUniqueInput)
    where!: InstanceType<typeof CategoryWhereUniqueInput>;
}

@ArgsType()
export class FindUniqueCategoryArgs {
    @Field(() => CategoryWhereUniqueInput, {nullable:false})
    @Type(() => CategoryWhereUniqueInput)
    where!: InstanceType<typeof CategoryWhereUniqueInput>;
}

@ArgsType()
export class UpdateManyCategoryArgs {
    @Field(() => CategoryUpdateManyMutationInput, {nullable:false})
    @Type(() => CategoryUpdateManyMutationInput)
    data!: InstanceType<typeof CategoryUpdateManyMutationInput>;
    @Field(() => CategoryWhereInput, {nullable:true})
    @Type(() => CategoryWhereInput)
    where?: InstanceType<typeof CategoryWhereInput>;
}

@ArgsType()
export class UpdateOneCategoryArgs {
    @Field(() => CategoryUpdateInput, {nullable:false})
    @Type(() => CategoryUpdateInput)
    data!: InstanceType<typeof CategoryUpdateInput>;
    @Field(() => CategoryWhereUniqueInput, {nullable:false})
    @Type(() => CategoryWhereUniqueInput)
    where!: InstanceType<typeof CategoryWhereUniqueInput>;
}

@ArgsType()
export class UpsertOneCategoryArgs {
    @Field(() => CategoryWhereUniqueInput, {nullable:false})
    @Type(() => CategoryWhereUniqueInput)
    where!: InstanceType<typeof CategoryWhereUniqueInput>;
    @Field(() => CategoryCreateInput, {nullable:false})
    @Type(() => CategoryCreateInput)
    create!: InstanceType<typeof CategoryCreateInput>;
    @Field(() => CategoryUpdateInput, {nullable:false})
    @Type(() => CategoryUpdateInput)
    update!: InstanceType<typeof CategoryUpdateInput>;
}

@ObjectType()
export class AggregateConfiguration {
    @Field(() => ConfigurationCountAggregate, {nullable:true})
    _count?: InstanceType<typeof ConfigurationCountAggregate>;
    @Field(() => ConfigurationMinAggregate, {nullable:true})
    _min?: InstanceType<typeof ConfigurationMinAggregate>;
    @Field(() => ConfigurationMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof ConfigurationMaxAggregate>;
}

@ArgsType()
export class ConfigurationAggregateArgs {
    @Field(() => ConfigurationWhereInput, {nullable:true})
    @Type(() => ConfigurationWhereInput)
    where?: InstanceType<typeof ConfigurationWhereInput>;
    @Field(() => [ConfigurationOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ConfigurationOrderByWithRelationInput>;
    @Field(() => ConfigurationWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof ConfigurationWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => ConfigurationCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof ConfigurationCountAggregateInput>;
    @Field(() => ConfigurationMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof ConfigurationMinAggregateInput>;
    @Field(() => ConfigurationMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof ConfigurationMaxAggregateInput>;
}

@InputType()
export class ConfigurationCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    value?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class ConfigurationCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    name!: number;
    @Field(() => Int, {nullable:false})
    value!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class ConfigurationCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    value?: keyof typeof SortOrder;
}

@InputType()
export class ConfigurationCreateManyInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.MinLength(3)
    name!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsNotEmpty()
    value!: string;
}

@InputType()
export class ConfigurationCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.MinLength(3)
    name!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsNotEmpty()
    value!: string;
}

@ArgsType()
export class ConfigurationGroupByArgs {
    @Field(() => ConfigurationWhereInput, {nullable:true})
    @Type(() => ConfigurationWhereInput)
    where?: InstanceType<typeof ConfigurationWhereInput>;
    @Field(() => [ConfigurationOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ConfigurationOrderByWithAggregationInput>;
    @Field(() => [ConfigurationScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof ConfigurationScalarFieldEnum>;
    @Field(() => ConfigurationScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof ConfigurationScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => ConfigurationCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof ConfigurationCountAggregateInput>;
    @Field(() => ConfigurationMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof ConfigurationMinAggregateInput>;
    @Field(() => ConfigurationMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof ConfigurationMaxAggregateInput>;
}

@ObjectType()
export class ConfigurationGroupBy {
    @Field(() => String, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    value!: string;
    @Field(() => ConfigurationCountAggregate, {nullable:true})
    _count?: InstanceType<typeof ConfigurationCountAggregate>;
    @Field(() => ConfigurationMinAggregate, {nullable:true})
    _min?: InstanceType<typeof ConfigurationMinAggregate>;
    @Field(() => ConfigurationMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof ConfigurationMaxAggregate>;
}

@InputType()
export class ConfigurationMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    value?: true;
}

@ObjectType()
export class ConfigurationMaxAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => String, {nullable:true})
    value?: string;
}

@InputType()
export class ConfigurationMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    value?: keyof typeof SortOrder;
}

@InputType()
export class ConfigurationMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    value?: true;
}

@ObjectType()
export class ConfigurationMinAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => String, {nullable:true})
    value?: string;
}

@InputType()
export class ConfigurationMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    value?: keyof typeof SortOrder;
}

@InputType()
export class ConfigurationOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    value?: keyof typeof SortOrder;
    @Field(() => ConfigurationCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof ConfigurationCountOrderByAggregateInput>;
    @Field(() => ConfigurationMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof ConfigurationMaxOrderByAggregateInput>;
    @Field(() => ConfigurationMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof ConfigurationMinOrderByAggregateInput>;
}

@InputType()
export class ConfigurationOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    value?: keyof typeof SortOrder;
}

@InputType()
export class ConfigurationScalarWhereWithAggregatesInput {
    @Field(() => [ConfigurationScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ConfigurationScalarWhereWithAggregatesInput>;
    @Field(() => [ConfigurationScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ConfigurationScalarWhereWithAggregatesInput>;
    @Field(() => [ConfigurationScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ConfigurationScalarWhereWithAggregatesInput>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    value?: InstanceType<typeof StringWithAggregatesFilter>;
}

@InputType()
export class ConfigurationUncheckedCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.MinLength(3)
    name!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsNotEmpty()
    value!: string;
}

@InputType()
export class ConfigurationUncheckedUpdateManyInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    value?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}

@InputType()
export class ConfigurationUncheckedUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    value?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}

@InputType()
export class ConfigurationUpdateManyMutationInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    value?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}

@InputType()
export class ConfigurationUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    value?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}

@InputType()
export class ConfigurationWhereUniqueInput {
    @Field(() => String, {nullable:true})
    id?: string;
}

@InputType()
export class ConfigurationWhereInput {
    @Field(() => [ConfigurationWhereInput], {nullable:true})
    AND?: Array<ConfigurationWhereInput>;
    @Field(() => [ConfigurationWhereInput], {nullable:true})
    OR?: Array<ConfigurationWhereInput>;
    @Field(() => [ConfigurationWhereInput], {nullable:true})
    NOT?: Array<ConfigurationWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    name?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    value?: InstanceType<typeof StringFilter>;
}

@ObjectType()
export class Configuration {
    @Field(() => ID, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    value!: string;
}

@ArgsType()
export class CreateManyConfigurationArgs {
    @Field(() => [ConfigurationCreateManyInput], {nullable:false})
    @Type(() => ConfigurationCreateManyInput)
    data!: Array<ConfigurationCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneConfigurationArgs {
    @Field(() => ConfigurationCreateInput, {nullable:false})
    @Type(() => ConfigurationCreateInput)
    data!: InstanceType<typeof ConfigurationCreateInput>;
}

@ArgsType()
export class DeleteManyConfigurationArgs {
    @Field(() => ConfigurationWhereInput, {nullable:true})
    @Type(() => ConfigurationWhereInput)
    where?: InstanceType<typeof ConfigurationWhereInput>;
}

@ArgsType()
export class DeleteOneConfigurationArgs {
    @Field(() => ConfigurationWhereUniqueInput, {nullable:false})
    @Type(() => ConfigurationWhereUniqueInput)
    where!: InstanceType<typeof ConfigurationWhereUniqueInput>;
}

@ArgsType()
export class FindFirstConfigurationOrThrowArgs {
    @Field(() => ConfigurationWhereInput, {nullable:true})
    @Type(() => ConfigurationWhereInput)
    where?: InstanceType<typeof ConfigurationWhereInput>;
    @Field(() => [ConfigurationOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ConfigurationOrderByWithRelationInput>;
    @Field(() => ConfigurationWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof ConfigurationWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [ConfigurationScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ConfigurationScalarFieldEnum>;
}

@ArgsType()
export class FindFirstConfigurationArgs {
    @Field(() => ConfigurationWhereInput, {nullable:true})
    @Type(() => ConfigurationWhereInput)
    where?: InstanceType<typeof ConfigurationWhereInput>;
    @Field(() => [ConfigurationOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ConfigurationOrderByWithRelationInput>;
    @Field(() => ConfigurationWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof ConfigurationWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [ConfigurationScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ConfigurationScalarFieldEnum>;
}

@ArgsType()
export class FindManyConfigurationArgs {
    @Field(() => ConfigurationWhereInput, {nullable:true})
    @Type(() => ConfigurationWhereInput)
    where?: InstanceType<typeof ConfigurationWhereInput>;
    @Field(() => [ConfigurationOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ConfigurationOrderByWithRelationInput>;
    @Field(() => ConfigurationWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof ConfigurationWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [ConfigurationScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ConfigurationScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueConfigurationOrThrowArgs {
    @Field(() => ConfigurationWhereUniqueInput, {nullable:false})
    @Type(() => ConfigurationWhereUniqueInput)
    where!: InstanceType<typeof ConfigurationWhereUniqueInput>;
}

@ArgsType()
export class FindUniqueConfigurationArgs {
    @Field(() => ConfigurationWhereUniqueInput, {nullable:false})
    @Type(() => ConfigurationWhereUniqueInput)
    where!: InstanceType<typeof ConfigurationWhereUniqueInput>;
}

@ArgsType()
export class UpdateManyConfigurationArgs {
    @Field(() => ConfigurationUpdateManyMutationInput, {nullable:false})
    @Type(() => ConfigurationUpdateManyMutationInput)
    data!: InstanceType<typeof ConfigurationUpdateManyMutationInput>;
    @Field(() => ConfigurationWhereInput, {nullable:true})
    @Type(() => ConfigurationWhereInput)
    where?: InstanceType<typeof ConfigurationWhereInput>;
}

@ArgsType()
export class UpdateOneConfigurationArgs {
    @Field(() => ConfigurationUpdateInput, {nullable:false})
    @Type(() => ConfigurationUpdateInput)
    data!: InstanceType<typeof ConfigurationUpdateInput>;
    @Field(() => ConfigurationWhereUniqueInput, {nullable:false})
    @Type(() => ConfigurationWhereUniqueInput)
    where!: InstanceType<typeof ConfigurationWhereUniqueInput>;
}

@ArgsType()
export class UpsertOneConfigurationArgs {
    @Field(() => ConfigurationWhereUniqueInput, {nullable:false})
    @Type(() => ConfigurationWhereUniqueInput)
    where!: InstanceType<typeof ConfigurationWhereUniqueInput>;
    @Field(() => ConfigurationCreateInput, {nullable:false})
    @Type(() => ConfigurationCreateInput)
    create!: InstanceType<typeof ConfigurationCreateInput>;
    @Field(() => ConfigurationUpdateInput, {nullable:false})
    @Type(() => ConfigurationUpdateInput)
    update!: InstanceType<typeof ConfigurationUpdateInput>;
}

@ObjectType()
export class AggregateDownload {
    @Field(() => DownloadCountAggregate, {nullable:true})
    _count?: InstanceType<typeof DownloadCountAggregate>;
    @Field(() => DownloadAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof DownloadAvgAggregate>;
    @Field(() => DownloadSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof DownloadSumAggregate>;
    @Field(() => DownloadMinAggregate, {nullable:true})
    _min?: InstanceType<typeof DownloadMinAggregate>;
    @Field(() => DownloadMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof DownloadMaxAggregate>;
}

@ArgsType()
export class CreateManyDownloadArgs {
    @Field(() => [DownloadCreateManyInput], {nullable:false})
    @Type(() => DownloadCreateManyInput)
    data!: Array<DownloadCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneDownloadArgs {
    @Field(() => DownloadCreateInput, {nullable:false})
    @Type(() => DownloadCreateInput)
    data!: InstanceType<typeof DownloadCreateInput>;
}

@ArgsType()
export class DeleteManyDownloadArgs {
    @Field(() => DownloadWhereInput, {nullable:true})
    @Type(() => DownloadWhereInput)
    where?: InstanceType<typeof DownloadWhereInput>;
}

@ArgsType()
export class DeleteOneDownloadArgs {
    @Field(() => DownloadWhereUniqueInput, {nullable:false})
    @Type(() => DownloadWhereUniqueInput)
    where!: InstanceType<typeof DownloadWhereUniqueInput>;
}

@ArgsType()
export class DownloadAggregateArgs {
    @Field(() => DownloadWhereInput, {nullable:true})
    @Type(() => DownloadWhereInput)
    where?: InstanceType<typeof DownloadWhereInput>;
    @Field(() => [DownloadOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<DownloadOrderByWithRelationInput>;
    @Field(() => DownloadWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof DownloadWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => DownloadCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof DownloadCountAggregateInput>;
    @Field(() => DownloadAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof DownloadAvgAggregateInput>;
    @Field(() => DownloadSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof DownloadSumAggregateInput>;
    @Field(() => DownloadMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof DownloadMinAggregateInput>;
    @Field(() => DownloadMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof DownloadMaxAggregateInput>;
}

@InputType()
export class DownloadAvgAggregateInput {
    @Field(() => Boolean, {nullable:true})
    counting?: true;
}

@ObjectType()
export class DownloadAvgAggregate {
    @Field(() => Float, {nullable:true})
    counting?: number;
}

@InputType()
export class DownloadAvgOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    counting?: keyof typeof SortOrder;
}

@ArgsType()
export class DownloadCategoryAggregateArgs {
    @Field(() => DownloadCategoryWhereInput, {nullable:true})
    @Type(() => DownloadCategoryWhereInput)
    where?: InstanceType<typeof DownloadCategoryWhereInput>;
    @Field(() => [DownloadCategoryOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<DownloadCategoryOrderByWithRelationInput>;
    @Field(() => DownloadCategoryWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof DownloadCategoryWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => DownloadCategoryCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof DownloadCategoryCountAggregateInput>;
    @Field(() => DownloadCategoryMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof DownloadCategoryMinAggregateInput>;
    @Field(() => DownloadCategoryMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof DownloadCategoryMaxAggregateInput>;
}

@ObjectType()
export class DownloadCategoryCount {
    @Field(() => Int, {nullable:false})
    Download?: number;
}

@InputType()
export class DownloadCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    downloadCategoryId?: true;
    @Field(() => Boolean, {nullable:true})
    link?: true;
    @Field(() => Boolean, {nullable:true})
    thumbnail?: Upload.Upload;
    @Field(() => Boolean, {nullable:true})
    userId?: true;
    @Field(() => Boolean, {nullable:true})
    counting?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class DownloadCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    downloadCategoryId!: number;
    @Field(() => Int, {nullable:false})
    link!: number;
    @Field(() => Int, {nullable:false})
    thumbnail!: number;
    @Field(() => Int, {nullable:false})
    userId!: number;
    @Field(() => Int, {nullable:false})
    counting!: number;
    @Field(() => Int, {nullable:false})
    createdAt!: number;
    @Field(() => Int, {nullable:false})
    updatedAt!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class DownloadCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    downloadCategoryId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    link?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    thumbnail?: Upload.Upload;
    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    counting?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class DownloadCreateManyAuthorInputEnvelope {
    @Field(() => [DownloadCreateManyAuthorInput], {nullable:false})
    @Type(() => DownloadCreateManyAuthorInput)
    data!: Array<DownloadCreateManyAuthorInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@InputType()
export class DownloadCreateManyAuthorInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    downloadCategoryId!: string;
    @Field(() => String, {nullable:false})
    link!: string;
    @Field(() => Upload.GraphQLUpload, {nullable:true})
    thumbnail?: Upload.Upload;
    @Field(() => Int, {nullable:true})
    counting?: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class DownloadCreateManyDownloadCategoryInputEnvelope {
    @Field(() => [DownloadCreateManyDownloadCategoryInput], {nullable:false})
    @Type(() => DownloadCreateManyDownloadCategoryInput)
    data!: Array<DownloadCreateManyDownloadCategoryInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@InputType()
export class DownloadCreateManyDownloadCategoryInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    link!: string;
    @Field(() => Upload.GraphQLUpload, {nullable:true})
    thumbnail?: Upload.Upload;
    @Field(() => String, {nullable:false})
    userId!: string;
    @Field(() => Int, {nullable:true})
    counting?: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class DownloadCreateManyInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    downloadCategoryId!: string;
    @Field(() => String, {nullable:false})
    link!: string;
    @Field(() => Upload.GraphQLUpload, {nullable:true})
    thumbnail?: Upload.Upload;
    @Field(() => String, {nullable:false})
    userId!: string;
    @Field(() => Int, {nullable:true})
    counting?: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class DownloadCreateNestedManyWithoutAuthorInput {
    @Field(() => [DownloadCreateWithoutAuthorInput], {nullable:true})
    @Type(() => DownloadCreateWithoutAuthorInput)
    create?: Array<DownloadCreateWithoutAuthorInput>;
    @Field(() => [DownloadCreateOrConnectWithoutAuthorInput], {nullable:true})
    @Type(() => DownloadCreateOrConnectWithoutAuthorInput)
    connectOrCreate?: Array<DownloadCreateOrConnectWithoutAuthorInput>;
    @Field(() => DownloadCreateManyAuthorInputEnvelope, {nullable:true})
    @Type(() => DownloadCreateManyAuthorInputEnvelope)
    createMany?: InstanceType<typeof DownloadCreateManyAuthorInputEnvelope>;
    @Field(() => [DownloadWhereUniqueInput], {nullable:true})
    @Type(() => DownloadWhereUniqueInput)
    connect?: Array<DownloadWhereUniqueInput>;
}

@InputType()
export class DownloadCreateNestedManyWithoutDownloadCategoryInput {
    @Field(() => [DownloadCreateWithoutDownloadCategoryInput], {nullable:true})
    @Type(() => DownloadCreateWithoutDownloadCategoryInput)
    create?: Array<DownloadCreateWithoutDownloadCategoryInput>;
    @Field(() => [DownloadCreateOrConnectWithoutDownloadCategoryInput], {nullable:true})
    @Type(() => DownloadCreateOrConnectWithoutDownloadCategoryInput)
    connectOrCreate?: Array<DownloadCreateOrConnectWithoutDownloadCategoryInput>;
    @Field(() => DownloadCreateManyDownloadCategoryInputEnvelope, {nullable:true})
    @Type(() => DownloadCreateManyDownloadCategoryInputEnvelope)
    createMany?: InstanceType<typeof DownloadCreateManyDownloadCategoryInputEnvelope>;
    @Field(() => [DownloadWhereUniqueInput], {nullable:true})
    @Type(() => DownloadWhereUniqueInput)
    connect?: Array<DownloadWhereUniqueInput>;
}

@InputType()
export class DownloadCreateOrConnectWithoutAuthorInput {
    @Field(() => DownloadWhereUniqueInput, {nullable:false})
    @Type(() => DownloadWhereUniqueInput)
    where!: InstanceType<typeof DownloadWhereUniqueInput>;
    @Field(() => DownloadCreateWithoutAuthorInput, {nullable:false})
    @Type(() => DownloadCreateWithoutAuthorInput)
    create!: InstanceType<typeof DownloadCreateWithoutAuthorInput>;
}

@InputType()
export class DownloadCreateOrConnectWithoutDownloadCategoryInput {
    @Field(() => DownloadWhereUniqueInput, {nullable:false})
    @Type(() => DownloadWhereUniqueInput)
    where!: InstanceType<typeof DownloadWhereUniqueInput>;
    @Field(() => DownloadCreateWithoutDownloadCategoryInput, {nullable:false})
    @Type(() => DownloadCreateWithoutDownloadCategoryInput)
    create!: InstanceType<typeof DownloadCreateWithoutDownloadCategoryInput>;
}

@InputType()
export class DownloadCreateWithoutAuthorInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    link!: string;
    @Field(() => Upload.GraphQLUpload, {nullable:true})
    thumbnail?: Upload.Upload;
    @Field(() => Int, {nullable:true})
    counting?: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => DownloadCategoryCreateNestedOneWithoutDownloadInput, {nullable:false})
    downloadCategory!: InstanceType<typeof DownloadCategoryCreateNestedOneWithoutDownloadInput>;
}

@InputType()
export class DownloadCreateWithoutDownloadCategoryInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    link!: string;
    @Field(() => Upload.GraphQLUpload, {nullable:true})
    thumbnail?: Upload.Upload;
    @Field(() => Int, {nullable:true})
    counting?: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => UserCreateNestedOneWithoutDownloadInput, {nullable:false})
    author!: InstanceType<typeof UserCreateNestedOneWithoutDownloadInput>;
}

@InputType()
export class DownloadCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    link!: string;
    @Field(() => Upload.GraphQLUpload, {nullable:true})
    thumbnail?: Upload.Upload;
    @Field(() => Int, {nullable:true})
    counting?: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => DownloadCategoryCreateNestedOneWithoutDownloadInput, {nullable:false})
    downloadCategory!: InstanceType<typeof DownloadCategoryCreateNestedOneWithoutDownloadInput>;
    @Field(() => UserCreateNestedOneWithoutDownloadInput, {nullable:false})
    author!: InstanceType<typeof UserCreateNestedOneWithoutDownloadInput>;
}

@ArgsType()
export class DownloadGroupByArgs {
    @Field(() => DownloadWhereInput, {nullable:true})
    @Type(() => DownloadWhereInput)
    where?: InstanceType<typeof DownloadWhereInput>;
    @Field(() => [DownloadOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<DownloadOrderByWithAggregationInput>;
    @Field(() => [DownloadScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof DownloadScalarFieldEnum>;
    @Field(() => DownloadScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof DownloadScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => DownloadCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof DownloadCountAggregateInput>;
    @Field(() => DownloadAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof DownloadAvgAggregateInput>;
    @Field(() => DownloadSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof DownloadSumAggregateInput>;
    @Field(() => DownloadMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof DownloadMinAggregateInput>;
    @Field(() => DownloadMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof DownloadMaxAggregateInput>;
}

@ObjectType()
export class DownloadGroupBy {
    @Field(() => String, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    downloadCategoryId!: string;
    @Field(() => String, {nullable:false})
    link!: string;
    @Field(() => String, {nullable:false})
    thumbnail!: string;
    @Field(() => String, {nullable:false})
    userId!: string;
    @Field(() => Int, {nullable:false})
    counting!: number;
    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;
    @Field(() => DownloadCountAggregate, {nullable:true})
    _count?: InstanceType<typeof DownloadCountAggregate>;
    @Field(() => DownloadAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof DownloadAvgAggregate>;
    @Field(() => DownloadSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof DownloadSumAggregate>;
    @Field(() => DownloadMinAggregate, {nullable:true})
    _min?: InstanceType<typeof DownloadMinAggregate>;
    @Field(() => DownloadMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof DownloadMaxAggregate>;
}

@InputType()
export class DownloadListRelationFilter {
    @Field(() => DownloadWhereInput, {nullable:true})
    every?: InstanceType<typeof DownloadWhereInput>;
    @Field(() => DownloadWhereInput, {nullable:true})
    some?: InstanceType<typeof DownloadWhereInput>;
    @Field(() => DownloadWhereInput, {nullable:true})
    none?: InstanceType<typeof DownloadWhereInput>;
}

@InputType()
export class DownloadMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    downloadCategoryId?: true;
    @Field(() => Boolean, {nullable:true})
    link?: true;
    @Field(() => Boolean, {nullable:true})
    thumbnail?: Upload.Upload;
    @Field(() => Boolean, {nullable:true})
    userId?: true;
    @Field(() => Boolean, {nullable:true})
    counting?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}

@ObjectType()
export class DownloadMaxAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    downloadCategoryId?: string;
    @Field(() => String, {nullable:true})
    link?: string;
    @Field(() => String, {nullable:true})
    thumbnail?: string;
    @Field(() => String, {nullable:true})
    userId?: string;
    @Field(() => Int, {nullable:true})
    counting?: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class DownloadMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    downloadCategoryId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    link?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    thumbnail?: Upload.Upload;
    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    counting?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class DownloadMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    downloadCategoryId?: true;
    @Field(() => Boolean, {nullable:true})
    link?: true;
    @Field(() => Boolean, {nullable:true})
    thumbnail?: Upload.Upload;
    @Field(() => Boolean, {nullable:true})
    userId?: true;
    @Field(() => Boolean, {nullable:true})
    counting?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}

@ObjectType()
export class DownloadMinAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    downloadCategoryId?: string;
    @Field(() => String, {nullable:true})
    link?: string;
    @Field(() => String, {nullable:true})
    thumbnail?: string;
    @Field(() => String, {nullable:true})
    userId?: string;
    @Field(() => Int, {nullable:true})
    counting?: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class DownloadMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    downloadCategoryId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    link?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    thumbnail?: Upload.Upload;
    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    counting?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class DownloadOrderByRelationAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    _count?: keyof typeof SortOrder;
}

@InputType()
export class DownloadOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    downloadCategoryId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    link?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    thumbnail?: Upload.Upload;
    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    counting?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
    @Field(() => DownloadCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof DownloadCountOrderByAggregateInput>;
    @Field(() => DownloadAvgOrderByAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof DownloadAvgOrderByAggregateInput>;
    @Field(() => DownloadMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof DownloadMaxOrderByAggregateInput>;
    @Field(() => DownloadMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof DownloadMinOrderByAggregateInput>;
    @Field(() => DownloadSumOrderByAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof DownloadSumOrderByAggregateInput>;
}

@InputType()
export class DownloadOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    downloadCategoryId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    link?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    thumbnail?: Upload.Upload;
    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    counting?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
    @Field(() => DownloadCategoryOrderByWithRelationInput, {nullable:true})
    downloadCategory?: InstanceType<typeof DownloadCategoryOrderByWithRelationInput>;
    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    author?: InstanceType<typeof UserOrderByWithRelationInput>;
}

@InputType()
export class DownloadScalarWhereWithAggregatesInput {
    @Field(() => [DownloadScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<DownloadScalarWhereWithAggregatesInput>;
    @Field(() => [DownloadScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<DownloadScalarWhereWithAggregatesInput>;
    @Field(() => [DownloadScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<DownloadScalarWhereWithAggregatesInput>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    downloadCategoryId?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    link?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    thumbnail?: InstanceType<typeof Upload.Upload>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    userId?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => IntWithAggregatesFilter, {nullable:true})
    counting?: InstanceType<typeof IntWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}

@InputType()
export class DownloadScalarWhereInput {
    @Field(() => [DownloadScalarWhereInput], {nullable:true})
    AND?: Array<DownloadScalarWhereInput>;
    @Field(() => [DownloadScalarWhereInput], {nullable:true})
    OR?: Array<DownloadScalarWhereInput>;
    @Field(() => [DownloadScalarWhereInput], {nullable:true})
    NOT?: Array<DownloadScalarWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    downloadCategoryId?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    link?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    thumbnail?: InstanceType<typeof Upload.Upload>;
    @Field(() => StringFilter, {nullable:true})
    userId?: InstanceType<typeof StringFilter>;
    @Field(() => IntFilter, {nullable:true})
    counting?: InstanceType<typeof IntFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
}

@InputType()
export class DownloadSumAggregateInput {
    @Field(() => Boolean, {nullable:true})
    counting?: true;
}

@ObjectType()
export class DownloadSumAggregate {
    @Field(() => Int, {nullable:true})
    counting?: number;
}

@InputType()
export class DownloadSumOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    counting?: keyof typeof SortOrder;
}

@InputType()
export class DownloadUncheckedCreateNestedManyWithoutAuthorInput {
    @Field(() => [DownloadCreateWithoutAuthorInput], {nullable:true})
    @Type(() => DownloadCreateWithoutAuthorInput)
    create?: Array<DownloadCreateWithoutAuthorInput>;
    @Field(() => [DownloadCreateOrConnectWithoutAuthorInput], {nullable:true})
    @Type(() => DownloadCreateOrConnectWithoutAuthorInput)
    connectOrCreate?: Array<DownloadCreateOrConnectWithoutAuthorInput>;
    @Field(() => DownloadCreateManyAuthorInputEnvelope, {nullable:true})
    @Type(() => DownloadCreateManyAuthorInputEnvelope)
    createMany?: InstanceType<typeof DownloadCreateManyAuthorInputEnvelope>;
    @Field(() => [DownloadWhereUniqueInput], {nullable:true})
    @Type(() => DownloadWhereUniqueInput)
    connect?: Array<DownloadWhereUniqueInput>;
}

@InputType()
export class DownloadUncheckedCreateNestedManyWithoutDownloadCategoryInput {
    @Field(() => [DownloadCreateWithoutDownloadCategoryInput], {nullable:true})
    @Type(() => DownloadCreateWithoutDownloadCategoryInput)
    create?: Array<DownloadCreateWithoutDownloadCategoryInput>;
    @Field(() => [DownloadCreateOrConnectWithoutDownloadCategoryInput], {nullable:true})
    @Type(() => DownloadCreateOrConnectWithoutDownloadCategoryInput)
    connectOrCreate?: Array<DownloadCreateOrConnectWithoutDownloadCategoryInput>;
    @Field(() => DownloadCreateManyDownloadCategoryInputEnvelope, {nullable:true})
    @Type(() => DownloadCreateManyDownloadCategoryInputEnvelope)
    createMany?: InstanceType<typeof DownloadCreateManyDownloadCategoryInputEnvelope>;
    @Field(() => [DownloadWhereUniqueInput], {nullable:true})
    @Type(() => DownloadWhereUniqueInput)
    connect?: Array<DownloadWhereUniqueInput>;
}

@InputType()
export class DownloadUncheckedCreateWithoutAuthorInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    downloadCategoryId!: string;
    @Field(() => String, {nullable:false})
    link!: string;
    @Field(() => Upload.GraphQLUpload, {nullable:true})
    thumbnail?: Upload.Upload;
    @Field(() => Int, {nullable:true})
    counting?: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class DownloadUncheckedCreateWithoutDownloadCategoryInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    link!: string;
    @Field(() => Upload.GraphQLUpload, {nullable:true})
    thumbnail?: Upload.Upload;
    @Field(() => String, {nullable:false})
    userId!: string;
    @Field(() => Int, {nullable:true})
    counting?: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class DownloadUncheckedCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    downloadCategoryId!: string;
    @Field(() => String, {nullable:false})
    link!: string;
    @Field(() => Upload.GraphQLUpload, {nullable:true})
    thumbnail?: Upload.Upload;
    @Field(() => String, {nullable:false})
    userId!: string;
    @Field(() => Int, {nullable:true})
    counting?: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class DownloadUncheckedUpdateManyWithoutAuthorNestedInput {
    @Field(() => [DownloadCreateWithoutAuthorInput], {nullable:true})
    @Type(() => DownloadCreateWithoutAuthorInput)
    create?: Array<DownloadCreateWithoutAuthorInput>;
    @Field(() => [DownloadCreateOrConnectWithoutAuthorInput], {nullable:true})
    @Type(() => DownloadCreateOrConnectWithoutAuthorInput)
    connectOrCreate?: Array<DownloadCreateOrConnectWithoutAuthorInput>;
    @Field(() => [DownloadUpsertWithWhereUniqueWithoutAuthorInput], {nullable:true})
    @Type(() => DownloadUpsertWithWhereUniqueWithoutAuthorInput)
    upsert?: Array<DownloadUpsertWithWhereUniqueWithoutAuthorInput>;
    @Field(() => DownloadCreateManyAuthorInputEnvelope, {nullable:true})
    @Type(() => DownloadCreateManyAuthorInputEnvelope)
    createMany?: InstanceType<typeof DownloadCreateManyAuthorInputEnvelope>;
    @Field(() => [DownloadWhereUniqueInput], {nullable:true})
    @Type(() => DownloadWhereUniqueInput)
    set?: Array<DownloadWhereUniqueInput>;
    @Field(() => [DownloadWhereUniqueInput], {nullable:true})
    @Type(() => DownloadWhereUniqueInput)
    disconnect?: Array<DownloadWhereUniqueInput>;
    @Field(() => [DownloadWhereUniqueInput], {nullable:true})
    @Type(() => DownloadWhereUniqueInput)
    delete?: Array<DownloadWhereUniqueInput>;
    @Field(() => [DownloadWhereUniqueInput], {nullable:true})
    @Type(() => DownloadWhereUniqueInput)
    connect?: Array<DownloadWhereUniqueInput>;
    @Field(() => [DownloadUpdateWithWhereUniqueWithoutAuthorInput], {nullable:true})
    @Type(() => DownloadUpdateWithWhereUniqueWithoutAuthorInput)
    update?: Array<DownloadUpdateWithWhereUniqueWithoutAuthorInput>;
    @Field(() => [DownloadUpdateManyWithWhereWithoutAuthorInput], {nullable:true})
    @Type(() => DownloadUpdateManyWithWhereWithoutAuthorInput)
    updateMany?: Array<DownloadUpdateManyWithWhereWithoutAuthorInput>;
    @Field(() => [DownloadScalarWhereInput], {nullable:true})
    @Type(() => DownloadScalarWhereInput)
    deleteMany?: Array<DownloadScalarWhereInput>;
}

@InputType()
export class DownloadUncheckedUpdateManyWithoutDownloadCategoryNestedInput {
    @Field(() => [DownloadCreateWithoutDownloadCategoryInput], {nullable:true})
    @Type(() => DownloadCreateWithoutDownloadCategoryInput)
    create?: Array<DownloadCreateWithoutDownloadCategoryInput>;
    @Field(() => [DownloadCreateOrConnectWithoutDownloadCategoryInput], {nullable:true})
    @Type(() => DownloadCreateOrConnectWithoutDownloadCategoryInput)
    connectOrCreate?: Array<DownloadCreateOrConnectWithoutDownloadCategoryInput>;
    @Field(() => [DownloadUpsertWithWhereUniqueWithoutDownloadCategoryInput], {nullable:true})
    @Type(() => DownloadUpsertWithWhereUniqueWithoutDownloadCategoryInput)
    upsert?: Array<DownloadUpsertWithWhereUniqueWithoutDownloadCategoryInput>;
    @Field(() => DownloadCreateManyDownloadCategoryInputEnvelope, {nullable:true})
    @Type(() => DownloadCreateManyDownloadCategoryInputEnvelope)
    createMany?: InstanceType<typeof DownloadCreateManyDownloadCategoryInputEnvelope>;
    @Field(() => [DownloadWhereUniqueInput], {nullable:true})
    @Type(() => DownloadWhereUniqueInput)
    set?: Array<DownloadWhereUniqueInput>;
    @Field(() => [DownloadWhereUniqueInput], {nullable:true})
    @Type(() => DownloadWhereUniqueInput)
    disconnect?: Array<DownloadWhereUniqueInput>;
    @Field(() => [DownloadWhereUniqueInput], {nullable:true})
    @Type(() => DownloadWhereUniqueInput)
    delete?: Array<DownloadWhereUniqueInput>;
    @Field(() => [DownloadWhereUniqueInput], {nullable:true})
    @Type(() => DownloadWhereUniqueInput)
    connect?: Array<DownloadWhereUniqueInput>;
    @Field(() => [DownloadUpdateWithWhereUniqueWithoutDownloadCategoryInput], {nullable:true})
    @Type(() => DownloadUpdateWithWhereUniqueWithoutDownloadCategoryInput)
    update?: Array<DownloadUpdateWithWhereUniqueWithoutDownloadCategoryInput>;
    @Field(() => [DownloadUpdateManyWithWhereWithoutDownloadCategoryInput], {nullable:true})
    @Type(() => DownloadUpdateManyWithWhereWithoutDownloadCategoryInput)
    updateMany?: Array<DownloadUpdateManyWithWhereWithoutDownloadCategoryInput>;
    @Field(() => [DownloadScalarWhereInput], {nullable:true})
    @Type(() => DownloadScalarWhereInput)
    deleteMany?: Array<DownloadScalarWhereInput>;
}

@InputType()
export class DownloadUncheckedUpdateManyWithoutDownloadInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    downloadCategoryId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    link?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    thumbnail?: InstanceType<typeof Upload.Upload>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    counting?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class DownloadUncheckedUpdateManyInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    downloadCategoryId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    link?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    thumbnail?: InstanceType<typeof Upload.Upload>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    userId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    counting?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class DownloadUncheckedUpdateWithoutAuthorInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    downloadCategoryId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    link?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    thumbnail?: InstanceType<typeof Upload.Upload>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    counting?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class DownloadUncheckedUpdateWithoutDownloadCategoryInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    link?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    thumbnail?: InstanceType<typeof Upload.Upload>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    userId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    counting?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class DownloadUncheckedUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    downloadCategoryId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    link?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    thumbnail?: InstanceType<typeof Upload.Upload>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    userId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    counting?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class DownloadUpdateManyMutationInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    link?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    thumbnail?: InstanceType<typeof Upload.Upload>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    counting?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class DownloadUpdateManyWithWhereWithoutAuthorInput {
    @Field(() => DownloadScalarWhereInput, {nullable:false})
    @Type(() => DownloadScalarWhereInput)
    where!: InstanceType<typeof DownloadScalarWhereInput>;
    @Field(() => DownloadUpdateManyMutationInput, {nullable:false})
    @Type(() => DownloadUpdateManyMutationInput)
    data!: InstanceType<typeof DownloadUpdateManyMutationInput>;
}

@InputType()
export class DownloadUpdateManyWithWhereWithoutDownloadCategoryInput {
    @Field(() => DownloadScalarWhereInput, {nullable:false})
    @Type(() => DownloadScalarWhereInput)
    where!: InstanceType<typeof DownloadScalarWhereInput>;
    @Field(() => DownloadUpdateManyMutationInput, {nullable:false})
    @Type(() => DownloadUpdateManyMutationInput)
    data!: InstanceType<typeof DownloadUpdateManyMutationInput>;
}

@InputType()
export class DownloadUpdateManyWithoutAuthorNestedInput {
    @Field(() => [DownloadCreateWithoutAuthorInput], {nullable:true})
    @Type(() => DownloadCreateWithoutAuthorInput)
    create?: Array<DownloadCreateWithoutAuthorInput>;
    @Field(() => [DownloadCreateOrConnectWithoutAuthorInput], {nullable:true})
    @Type(() => DownloadCreateOrConnectWithoutAuthorInput)
    connectOrCreate?: Array<DownloadCreateOrConnectWithoutAuthorInput>;
    @Field(() => [DownloadUpsertWithWhereUniqueWithoutAuthorInput], {nullable:true})
    @Type(() => DownloadUpsertWithWhereUniqueWithoutAuthorInput)
    upsert?: Array<DownloadUpsertWithWhereUniqueWithoutAuthorInput>;
    @Field(() => DownloadCreateManyAuthorInputEnvelope, {nullable:true})
    @Type(() => DownloadCreateManyAuthorInputEnvelope)
    createMany?: InstanceType<typeof DownloadCreateManyAuthorInputEnvelope>;
    @Field(() => [DownloadWhereUniqueInput], {nullable:true})
    @Type(() => DownloadWhereUniqueInput)
    set?: Array<DownloadWhereUniqueInput>;
    @Field(() => [DownloadWhereUniqueInput], {nullable:true})
    @Type(() => DownloadWhereUniqueInput)
    disconnect?: Array<DownloadWhereUniqueInput>;
    @Field(() => [DownloadWhereUniqueInput], {nullable:true})
    @Type(() => DownloadWhereUniqueInput)
    delete?: Array<DownloadWhereUniqueInput>;
    @Field(() => [DownloadWhereUniqueInput], {nullable:true})
    @Type(() => DownloadWhereUniqueInput)
    connect?: Array<DownloadWhereUniqueInput>;
    @Field(() => [DownloadUpdateWithWhereUniqueWithoutAuthorInput], {nullable:true})
    @Type(() => DownloadUpdateWithWhereUniqueWithoutAuthorInput)
    update?: Array<DownloadUpdateWithWhereUniqueWithoutAuthorInput>;
    @Field(() => [DownloadUpdateManyWithWhereWithoutAuthorInput], {nullable:true})
    @Type(() => DownloadUpdateManyWithWhereWithoutAuthorInput)
    updateMany?: Array<DownloadUpdateManyWithWhereWithoutAuthorInput>;
    @Field(() => [DownloadScalarWhereInput], {nullable:true})
    @Type(() => DownloadScalarWhereInput)
    deleteMany?: Array<DownloadScalarWhereInput>;
}

@InputType()
export class DownloadUpdateManyWithoutDownloadCategoryNestedInput {
    @Field(() => [DownloadCreateWithoutDownloadCategoryInput], {nullable:true})
    @Type(() => DownloadCreateWithoutDownloadCategoryInput)
    create?: Array<DownloadCreateWithoutDownloadCategoryInput>;
    @Field(() => [DownloadCreateOrConnectWithoutDownloadCategoryInput], {nullable:true})
    @Type(() => DownloadCreateOrConnectWithoutDownloadCategoryInput)
    connectOrCreate?: Array<DownloadCreateOrConnectWithoutDownloadCategoryInput>;
    @Field(() => [DownloadUpsertWithWhereUniqueWithoutDownloadCategoryInput], {nullable:true})
    @Type(() => DownloadUpsertWithWhereUniqueWithoutDownloadCategoryInput)
    upsert?: Array<DownloadUpsertWithWhereUniqueWithoutDownloadCategoryInput>;
    @Field(() => DownloadCreateManyDownloadCategoryInputEnvelope, {nullable:true})
    @Type(() => DownloadCreateManyDownloadCategoryInputEnvelope)
    createMany?: InstanceType<typeof DownloadCreateManyDownloadCategoryInputEnvelope>;
    @Field(() => [DownloadWhereUniqueInput], {nullable:true})
    @Type(() => DownloadWhereUniqueInput)
    set?: Array<DownloadWhereUniqueInput>;
    @Field(() => [DownloadWhereUniqueInput], {nullable:true})
    @Type(() => DownloadWhereUniqueInput)
    disconnect?: Array<DownloadWhereUniqueInput>;
    @Field(() => [DownloadWhereUniqueInput], {nullable:true})
    @Type(() => DownloadWhereUniqueInput)
    delete?: Array<DownloadWhereUniqueInput>;
    @Field(() => [DownloadWhereUniqueInput], {nullable:true})
    @Type(() => DownloadWhereUniqueInput)
    connect?: Array<DownloadWhereUniqueInput>;
    @Field(() => [DownloadUpdateWithWhereUniqueWithoutDownloadCategoryInput], {nullable:true})
    @Type(() => DownloadUpdateWithWhereUniqueWithoutDownloadCategoryInput)
    update?: Array<DownloadUpdateWithWhereUniqueWithoutDownloadCategoryInput>;
    @Field(() => [DownloadUpdateManyWithWhereWithoutDownloadCategoryInput], {nullable:true})
    @Type(() => DownloadUpdateManyWithWhereWithoutDownloadCategoryInput)
    updateMany?: Array<DownloadUpdateManyWithWhereWithoutDownloadCategoryInput>;
    @Field(() => [DownloadScalarWhereInput], {nullable:true})
    @Type(() => DownloadScalarWhereInput)
    deleteMany?: Array<DownloadScalarWhereInput>;
}

@InputType()
export class DownloadUpdateWithWhereUniqueWithoutAuthorInput {
    @Field(() => DownloadWhereUniqueInput, {nullable:false})
    @Type(() => DownloadWhereUniqueInput)
    where!: InstanceType<typeof DownloadWhereUniqueInput>;
    @Field(() => DownloadUpdateWithoutAuthorInput, {nullable:false})
    @Type(() => DownloadUpdateWithoutAuthorInput)
    data!: InstanceType<typeof DownloadUpdateWithoutAuthorInput>;
}

@InputType()
export class DownloadUpdateWithWhereUniqueWithoutDownloadCategoryInput {
    @Field(() => DownloadWhereUniqueInput, {nullable:false})
    @Type(() => DownloadWhereUniqueInput)
    where!: InstanceType<typeof DownloadWhereUniqueInput>;
    @Field(() => DownloadUpdateWithoutDownloadCategoryInput, {nullable:false})
    @Type(() => DownloadUpdateWithoutDownloadCategoryInput)
    data!: InstanceType<typeof DownloadUpdateWithoutDownloadCategoryInput>;
}

@InputType()
export class DownloadUpdateWithoutAuthorInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    link?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    thumbnail?: InstanceType<typeof Upload.Upload>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    counting?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DownloadCategoryUpdateOneRequiredWithoutDownloadNestedInput, {nullable:true})
    downloadCategory?: InstanceType<typeof DownloadCategoryUpdateOneRequiredWithoutDownloadNestedInput>;
}

@InputType()
export class DownloadUpdateWithoutDownloadCategoryInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    link?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    thumbnail?: InstanceType<typeof Upload.Upload>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    counting?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => UserUpdateOneRequiredWithoutDownloadNestedInput, {nullable:true})
    author?: InstanceType<typeof UserUpdateOneRequiredWithoutDownloadNestedInput>;
}

@InputType()
export class DownloadUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    link?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    thumbnail?: InstanceType<typeof Upload.Upload>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    counting?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DownloadCategoryUpdateOneRequiredWithoutDownloadNestedInput, {nullable:true})
    downloadCategory?: InstanceType<typeof DownloadCategoryUpdateOneRequiredWithoutDownloadNestedInput>;
    @Field(() => UserUpdateOneRequiredWithoutDownloadNestedInput, {nullable:true})
    author?: InstanceType<typeof UserUpdateOneRequiredWithoutDownloadNestedInput>;
}

@InputType()
export class DownloadUpsertWithWhereUniqueWithoutAuthorInput {
    @Field(() => DownloadWhereUniqueInput, {nullable:false})
    @Type(() => DownloadWhereUniqueInput)
    where!: InstanceType<typeof DownloadWhereUniqueInput>;
    @Field(() => DownloadUpdateWithoutAuthorInput, {nullable:false})
    @Type(() => DownloadUpdateWithoutAuthorInput)
    update!: InstanceType<typeof DownloadUpdateWithoutAuthorInput>;
    @Field(() => DownloadCreateWithoutAuthorInput, {nullable:false})
    @Type(() => DownloadCreateWithoutAuthorInput)
    create!: InstanceType<typeof DownloadCreateWithoutAuthorInput>;
}

@InputType()
export class DownloadUpsertWithWhereUniqueWithoutDownloadCategoryInput {
    @Field(() => DownloadWhereUniqueInput, {nullable:false})
    @Type(() => DownloadWhereUniqueInput)
    where!: InstanceType<typeof DownloadWhereUniqueInput>;
    @Field(() => DownloadUpdateWithoutDownloadCategoryInput, {nullable:false})
    @Type(() => DownloadUpdateWithoutDownloadCategoryInput)
    update!: InstanceType<typeof DownloadUpdateWithoutDownloadCategoryInput>;
    @Field(() => DownloadCreateWithoutDownloadCategoryInput, {nullable:false})
    @Type(() => DownloadCreateWithoutDownloadCategoryInput)
    create!: InstanceType<typeof DownloadCreateWithoutDownloadCategoryInput>;
}

@InputType()
export class DownloadWhereUniqueInput {
    @Field(() => String, {nullable:true})
    id?: string;
}

@InputType()
export class DownloadWhereInput {
    @Field(() => [DownloadWhereInput], {nullable:true})
    AND?: Array<DownloadWhereInput>;
    @Field(() => [DownloadWhereInput], {nullable:true})
    OR?: Array<DownloadWhereInput>;
    @Field(() => [DownloadWhereInput], {nullable:true})
    NOT?: Array<DownloadWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    downloadCategoryId?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    link?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    thumbnail?: InstanceType<typeof Upload.Upload>;
    @Field(() => StringFilter, {nullable:true})
    userId?: InstanceType<typeof StringFilter>;
    @Field(() => IntFilter, {nullable:true})
    counting?: InstanceType<typeof IntFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DownloadCategoryRelationFilter, {nullable:true})
    downloadCategory?: InstanceType<typeof DownloadCategoryRelationFilter>;
    @Field(() => UserRelationFilter, {nullable:true})
    author?: InstanceType<typeof UserRelationFilter>;
}

@ObjectType()
export class Download {
    @Field(() => ID, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    downloadCategoryId!: string;
    @Field(() => String, {nullable:false})
    link!: string;
    @Field(() => String, {nullable:false,defaultValue:'https://via.placeholder.com/150'})
    thumbnail!: string;
    @Field(() => String, {nullable:false})
    userId!: string;
    @Field(() => Int, {nullable:false,defaultValue:0})
    counting!: number;
    @Field(() => Date, {nullable:false})
    createdAt!: Date;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date;
    @Field(() => DownloadCategory, {nullable:false})
    downloadCategory?: InstanceType<typeof DownloadCategory>;
    @Field(() => User, {nullable:false})
    author?: InstanceType<typeof User>;
}

@ArgsType()
export class FindFirstDownloadOrThrowArgs {
    @Field(() => DownloadWhereInput, {nullable:true})
    @Type(() => DownloadWhereInput)
    where?: InstanceType<typeof DownloadWhereInput>;
    @Field(() => [DownloadOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<DownloadOrderByWithRelationInput>;
    @Field(() => DownloadWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof DownloadWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [DownloadScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof DownloadScalarFieldEnum>;
}

@ArgsType()
export class FindFirstDownloadArgs {
    @Field(() => DownloadWhereInput, {nullable:true})
    @Type(() => DownloadWhereInput)
    where?: InstanceType<typeof DownloadWhereInput>;
    @Field(() => [DownloadOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<DownloadOrderByWithRelationInput>;
    @Field(() => DownloadWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof DownloadWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [DownloadScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof DownloadScalarFieldEnum>;
}

@ArgsType()
export class FindManyDownloadArgs {
    @Field(() => DownloadWhereInput, {nullable:true})
    @Type(() => DownloadWhereInput)
    where?: InstanceType<typeof DownloadWhereInput>;
    @Field(() => [DownloadOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<DownloadOrderByWithRelationInput>;
    @Field(() => DownloadWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof DownloadWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [DownloadScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof DownloadScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueDownloadOrThrowArgs {
    @Field(() => DownloadWhereUniqueInput, {nullable:false})
    @Type(() => DownloadWhereUniqueInput)
    where!: InstanceType<typeof DownloadWhereUniqueInput>;
}

@ArgsType()
export class FindUniqueDownloadArgs {
    @Field(() => DownloadWhereUniqueInput, {nullable:false})
    @Type(() => DownloadWhereUniqueInput)
    where!: InstanceType<typeof DownloadWhereUniqueInput>;
}

@ArgsType()
export class UpdateManyDownloadArgs {
    @Field(() => DownloadUpdateManyMutationInput, {nullable:false})
    @Type(() => DownloadUpdateManyMutationInput)
    data!: InstanceType<typeof DownloadUpdateManyMutationInput>;
    @Field(() => DownloadWhereInput, {nullable:true})
    @Type(() => DownloadWhereInput)
    where?: InstanceType<typeof DownloadWhereInput>;
}

@ArgsType()
export class UpdateOneDownloadArgs {
    @Field(() => DownloadUpdateInput, {nullable:false})
    @Type(() => DownloadUpdateInput)
    data!: InstanceType<typeof DownloadUpdateInput>;
    @Field(() => DownloadWhereUniqueInput, {nullable:false})
    @Type(() => DownloadWhereUniqueInput)
    where!: InstanceType<typeof DownloadWhereUniqueInput>;
}

@ArgsType()
export class UpsertOneDownloadArgs {
    @Field(() => DownloadWhereUniqueInput, {nullable:false})
    @Type(() => DownloadWhereUniqueInput)
    where!: InstanceType<typeof DownloadWhereUniqueInput>;
    @Field(() => DownloadCreateInput, {nullable:false})
    @Type(() => DownloadCreateInput)
    create!: InstanceType<typeof DownloadCreateInput>;
    @Field(() => DownloadUpdateInput, {nullable:false})
    @Type(() => DownloadUpdateInput)
    update!: InstanceType<typeof DownloadUpdateInput>;
}

@ObjectType()
export class AggregateDownloadCategory {
    @Field(() => DownloadCategoryCountAggregate, {nullable:true})
    _count?: InstanceType<typeof DownloadCategoryCountAggregate>;
    @Field(() => DownloadCategoryMinAggregate, {nullable:true})
    _min?: InstanceType<typeof DownloadCategoryMinAggregate>;
    @Field(() => DownloadCategoryMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof DownloadCategoryMaxAggregate>;
}

@ArgsType()
export class CreateManyDownloadCategoryArgs {
    @Field(() => [DownloadCategoryCreateManyInput], {nullable:false})
    @Type(() => DownloadCategoryCreateManyInput)
    data!: Array<DownloadCategoryCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneDownloadCategoryArgs {
    @Field(() => DownloadCategoryCreateInput, {nullable:false})
    @Type(() => DownloadCategoryCreateInput)
    data!: InstanceType<typeof DownloadCategoryCreateInput>;
}

@ArgsType()
export class DeleteManyDownloadCategoryArgs {
    @Field(() => DownloadCategoryWhereInput, {nullable:true})
    @Type(() => DownloadCategoryWhereInput)
    where?: InstanceType<typeof DownloadCategoryWhereInput>;
}

@ArgsType()
export class DeleteOneDownloadCategoryArgs {
    @Field(() => DownloadCategoryWhereUniqueInput, {nullable:false})
    @Type(() => DownloadCategoryWhereUniqueInput)
    where!: InstanceType<typeof DownloadCategoryWhereUniqueInput>;
}

@InputType()
export class DownloadCategoryCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class DownloadCategoryCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    name!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class DownloadCategoryCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
}

@InputType()
export class DownloadCategoryCreateManyInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.MinLength(3)
    name!: string;
}

@InputType()
export class DownloadCategoryCreateNestedOneWithoutDownloadInput {
    @Field(() => DownloadCategoryCreateWithoutDownloadInput, {nullable:true})
    @Type(() => DownloadCategoryCreateWithoutDownloadInput)
    create?: InstanceType<typeof DownloadCategoryCreateWithoutDownloadInput>;
    @Field(() => DownloadCategoryCreateOrConnectWithoutDownloadInput, {nullable:true})
    @Type(() => DownloadCategoryCreateOrConnectWithoutDownloadInput)
    connectOrCreate?: InstanceType<typeof DownloadCategoryCreateOrConnectWithoutDownloadInput>;
    @Field(() => DownloadCategoryWhereUniqueInput, {nullable:true})
    @Type(() => DownloadCategoryWhereUniqueInput)
    connect?: InstanceType<typeof DownloadCategoryWhereUniqueInput>;
}

@InputType()
export class DownloadCategoryCreateOrConnectWithoutDownloadInput {
    @Field(() => DownloadCategoryWhereUniqueInput, {nullable:false})
    @Type(() => DownloadCategoryWhereUniqueInput)
    where!: InstanceType<typeof DownloadCategoryWhereUniqueInput>;
    @Field(() => DownloadCategoryCreateWithoutDownloadInput, {nullable:false})
    @Type(() => DownloadCategoryCreateWithoutDownloadInput)
    create!: InstanceType<typeof DownloadCategoryCreateWithoutDownloadInput>;
}

@InputType()
export class DownloadCategoryCreateWithoutDownloadInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.MinLength(3)
    name!: string;
}

@InputType()
export class DownloadCategoryCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.MinLength(3)
    name!: string;
    @Field(() => DownloadCreateNestedManyWithoutDownloadCategoryInput, {nullable:true})
    Download?: InstanceType<typeof DownloadCreateNestedManyWithoutDownloadCategoryInput>;
}

@ArgsType()
export class DownloadCategoryGroupByArgs {
    @Field(() => DownloadCategoryWhereInput, {nullable:true})
    @Type(() => DownloadCategoryWhereInput)
    where?: InstanceType<typeof DownloadCategoryWhereInput>;
    @Field(() => [DownloadCategoryOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<DownloadCategoryOrderByWithAggregationInput>;
    @Field(() => [DownloadCategoryScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof DownloadCategoryScalarFieldEnum>;
    @Field(() => DownloadCategoryScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof DownloadCategoryScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => DownloadCategoryCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof DownloadCategoryCountAggregateInput>;
    @Field(() => DownloadCategoryMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof DownloadCategoryMinAggregateInput>;
    @Field(() => DownloadCategoryMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof DownloadCategoryMaxAggregateInput>;
}

@ObjectType()
export class DownloadCategoryGroupBy {
    @Field(() => String, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => DownloadCategoryCountAggregate, {nullable:true})
    _count?: InstanceType<typeof DownloadCategoryCountAggregate>;
    @Field(() => DownloadCategoryMinAggregate, {nullable:true})
    _min?: InstanceType<typeof DownloadCategoryMinAggregate>;
    @Field(() => DownloadCategoryMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof DownloadCategoryMaxAggregate>;
}

@InputType()
export class DownloadCategoryMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
}

@ObjectType()
export class DownloadCategoryMaxAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    name?: string;
}

@InputType()
export class DownloadCategoryMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
}

@InputType()
export class DownloadCategoryMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
}

@ObjectType()
export class DownloadCategoryMinAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    name?: string;
}

@InputType()
export class DownloadCategoryMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
}

@InputType()
export class DownloadCategoryOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => DownloadCategoryCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof DownloadCategoryCountOrderByAggregateInput>;
    @Field(() => DownloadCategoryMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof DownloadCategoryMaxOrderByAggregateInput>;
    @Field(() => DownloadCategoryMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof DownloadCategoryMinOrderByAggregateInput>;
}

@InputType()
export class DownloadCategoryOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => DownloadOrderByRelationAggregateInput, {nullable:true})
    Download?: InstanceType<typeof DownloadOrderByRelationAggregateInput>;
}

@InputType()
export class DownloadCategoryRelationFilter {
    @Field(() => DownloadCategoryWhereInput, {nullable:true})
    is?: InstanceType<typeof DownloadCategoryWhereInput>;
    @Field(() => DownloadCategoryWhereInput, {nullable:true})
    isNot?: InstanceType<typeof DownloadCategoryWhereInput>;
}

@InputType()
export class DownloadCategoryScalarWhereWithAggregatesInput {
    @Field(() => [DownloadCategoryScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<DownloadCategoryScalarWhereWithAggregatesInput>;
    @Field(() => [DownloadCategoryScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<DownloadCategoryScalarWhereWithAggregatesInput>;
    @Field(() => [DownloadCategoryScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<DownloadCategoryScalarWhereWithAggregatesInput>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: InstanceType<typeof StringWithAggregatesFilter>;
}

@InputType()
export class DownloadCategoryUncheckedCreateWithoutDownloadInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.MinLength(3)
    name!: string;
}

@InputType()
export class DownloadCategoryUncheckedCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.MinLength(3)
    name!: string;
    @Field(() => DownloadUncheckedCreateNestedManyWithoutDownloadCategoryInput, {nullable:true})
    Download?: InstanceType<typeof DownloadUncheckedCreateNestedManyWithoutDownloadCategoryInput>;
}

@InputType()
export class DownloadCategoryUncheckedUpdateManyInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}

@InputType()
export class DownloadCategoryUncheckedUpdateWithoutDownloadInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}

@InputType()
export class DownloadCategoryUncheckedUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DownloadUncheckedUpdateManyWithoutDownloadCategoryNestedInput, {nullable:true})
    Download?: InstanceType<typeof DownloadUncheckedUpdateManyWithoutDownloadCategoryNestedInput>;
}

@InputType()
export class DownloadCategoryUpdateManyMutationInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}

@InputType()
export class DownloadCategoryUpdateOneRequiredWithoutDownloadNestedInput {
    @Field(() => DownloadCategoryCreateWithoutDownloadInput, {nullable:true})
    @Type(() => DownloadCategoryCreateWithoutDownloadInput)
    create?: InstanceType<typeof DownloadCategoryCreateWithoutDownloadInput>;
    @Field(() => DownloadCategoryCreateOrConnectWithoutDownloadInput, {nullable:true})
    @Type(() => DownloadCategoryCreateOrConnectWithoutDownloadInput)
    connectOrCreate?: InstanceType<typeof DownloadCategoryCreateOrConnectWithoutDownloadInput>;
    @Field(() => DownloadCategoryUpsertWithoutDownloadInput, {nullable:true})
    @Type(() => DownloadCategoryUpsertWithoutDownloadInput)
    upsert?: InstanceType<typeof DownloadCategoryUpsertWithoutDownloadInput>;
    @Field(() => DownloadCategoryWhereUniqueInput, {nullable:true})
    @Type(() => DownloadCategoryWhereUniqueInput)
    connect?: InstanceType<typeof DownloadCategoryWhereUniqueInput>;
    @Field(() => DownloadCategoryUpdateWithoutDownloadInput, {nullable:true})
    @Type(() => DownloadCategoryUpdateWithoutDownloadInput)
    update?: InstanceType<typeof DownloadCategoryUpdateWithoutDownloadInput>;
}

@InputType()
export class DownloadCategoryUpdateWithoutDownloadInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}

@InputType()
export class DownloadCategoryUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DownloadUpdateManyWithoutDownloadCategoryNestedInput, {nullable:true})
    Download?: InstanceType<typeof DownloadUpdateManyWithoutDownloadCategoryNestedInput>;
}

@InputType()
export class DownloadCategoryUpsertWithoutDownloadInput {
    @Field(() => DownloadCategoryUpdateWithoutDownloadInput, {nullable:false})
    @Type(() => DownloadCategoryUpdateWithoutDownloadInput)
    update!: InstanceType<typeof DownloadCategoryUpdateWithoutDownloadInput>;
    @Field(() => DownloadCategoryCreateWithoutDownloadInput, {nullable:false})
    @Type(() => DownloadCategoryCreateWithoutDownloadInput)
    create!: InstanceType<typeof DownloadCategoryCreateWithoutDownloadInput>;
}

@InputType()
export class DownloadCategoryWhereUniqueInput {
    @Field(() => String, {nullable:true})
    id?: string;
}

@InputType()
export class DownloadCategoryWhereInput {
    @Field(() => [DownloadCategoryWhereInput], {nullable:true})
    AND?: Array<DownloadCategoryWhereInput>;
    @Field(() => [DownloadCategoryWhereInput], {nullable:true})
    OR?: Array<DownloadCategoryWhereInput>;
    @Field(() => [DownloadCategoryWhereInput], {nullable:true})
    NOT?: Array<DownloadCategoryWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    name?: InstanceType<typeof StringFilter>;
    @Field(() => DownloadListRelationFilter, {nullable:true})
    Download?: InstanceType<typeof DownloadListRelationFilter>;
}

@ObjectType()
export class DownloadCategory {
    @Field(() => ID, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => [Download], {nullable:true})
    Download?: Array<Download>;
    @Field(() => DownloadCategoryCount, {nullable:false})
    _count?: InstanceType<typeof DownloadCategoryCount>;
}

@ArgsType()
export class FindFirstDownloadCategoryOrThrowArgs {
    @Field(() => DownloadCategoryWhereInput, {nullable:true})
    @Type(() => DownloadCategoryWhereInput)
    where?: InstanceType<typeof DownloadCategoryWhereInput>;
    @Field(() => [DownloadCategoryOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<DownloadCategoryOrderByWithRelationInput>;
    @Field(() => DownloadCategoryWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof DownloadCategoryWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [DownloadCategoryScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof DownloadCategoryScalarFieldEnum>;
}

@ArgsType()
export class FindFirstDownloadCategoryArgs {
    @Field(() => DownloadCategoryWhereInput, {nullable:true})
    @Type(() => DownloadCategoryWhereInput)
    where?: InstanceType<typeof DownloadCategoryWhereInput>;
    @Field(() => [DownloadCategoryOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<DownloadCategoryOrderByWithRelationInput>;
    @Field(() => DownloadCategoryWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof DownloadCategoryWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [DownloadCategoryScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof DownloadCategoryScalarFieldEnum>;
}

@ArgsType()
export class FindManyDownloadCategoryArgs {
    @Field(() => DownloadCategoryWhereInput, {nullable:true})
    @Type(() => DownloadCategoryWhereInput)
    where?: InstanceType<typeof DownloadCategoryWhereInput>;
    @Field(() => [DownloadCategoryOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<DownloadCategoryOrderByWithRelationInput>;
    @Field(() => DownloadCategoryWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof DownloadCategoryWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [DownloadCategoryScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof DownloadCategoryScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueDownloadCategoryOrThrowArgs {
    @Field(() => DownloadCategoryWhereUniqueInput, {nullable:false})
    @Type(() => DownloadCategoryWhereUniqueInput)
    where!: InstanceType<typeof DownloadCategoryWhereUniqueInput>;
}

@ArgsType()
export class FindUniqueDownloadCategoryArgs {
    @Field(() => DownloadCategoryWhereUniqueInput, {nullable:false})
    @Type(() => DownloadCategoryWhereUniqueInput)
    where!: InstanceType<typeof DownloadCategoryWhereUniqueInput>;
}

@ArgsType()
export class UpdateManyDownloadCategoryArgs {
    @Field(() => DownloadCategoryUpdateManyMutationInput, {nullable:false})
    @Type(() => DownloadCategoryUpdateManyMutationInput)
    data!: InstanceType<typeof DownloadCategoryUpdateManyMutationInput>;
    @Field(() => DownloadCategoryWhereInput, {nullable:true})
    @Type(() => DownloadCategoryWhereInput)
    where?: InstanceType<typeof DownloadCategoryWhereInput>;
}

@ArgsType()
export class UpdateOneDownloadCategoryArgs {
    @Field(() => DownloadCategoryUpdateInput, {nullable:false})
    @Type(() => DownloadCategoryUpdateInput)
    data!: InstanceType<typeof DownloadCategoryUpdateInput>;
    @Field(() => DownloadCategoryWhereUniqueInput, {nullable:false})
    @Type(() => DownloadCategoryWhereUniqueInput)
    where!: InstanceType<typeof DownloadCategoryWhereUniqueInput>;
}

@ArgsType()
export class UpsertOneDownloadCategoryArgs {
    @Field(() => DownloadCategoryWhereUniqueInput, {nullable:false})
    @Type(() => DownloadCategoryWhereUniqueInput)
    where!: InstanceType<typeof DownloadCategoryWhereUniqueInput>;
    @Field(() => DownloadCategoryCreateInput, {nullable:false})
    @Type(() => DownloadCategoryCreateInput)
    create!: InstanceType<typeof DownloadCategoryCreateInput>;
    @Field(() => DownloadCategoryUpdateInput, {nullable:false})
    @Type(() => DownloadCategoryUpdateInput)
    update!: InstanceType<typeof DownloadCategoryUpdateInput>;
}

@ObjectType()
export class AggregatePage {
    @Field(() => PageCountAggregate, {nullable:true})
    _count?: InstanceType<typeof PageCountAggregate>;
    @Field(() => PageAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof PageAvgAggregate>;
    @Field(() => PageSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof PageSumAggregate>;
    @Field(() => PageMinAggregate, {nullable:true})
    _min?: InstanceType<typeof PageMinAggregate>;
    @Field(() => PageMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof PageMaxAggregate>;
}

@ArgsType()
export class CreateManyPageArgs {
    @Field(() => [PageCreateManyInput], {nullable:false})
    @Type(() => PageCreateManyInput)
    data!: Array<PageCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOnePageArgs {
    @Field(() => PageCreateInput, {nullable:false})
    @Type(() => PageCreateInput)
    data!: InstanceType<typeof PageCreateInput>;
}

@ArgsType()
export class DeleteManyPageArgs {
    @Field(() => PageWhereInput, {nullable:true})
    @Type(() => PageWhereInput)
    where?: InstanceType<typeof PageWhereInput>;
}

@ArgsType()
export class DeleteOnePageArgs {
    @Field(() => PageWhereUniqueInput, {nullable:false})
    @Type(() => PageWhereUniqueInput)
    where!: InstanceType<typeof PageWhereUniqueInput>;
}

@ArgsType()
export class FindFirstPageOrThrowArgs {
    @Field(() => PageWhereInput, {nullable:true})
    @Type(() => PageWhereInput)
    where?: InstanceType<typeof PageWhereInput>;
    @Field(() => [PageOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PageOrderByWithRelationInput>;
    @Field(() => PageWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof PageWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [PageScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof PageScalarFieldEnum>;
}

@ArgsType()
export class FindFirstPageArgs {
    @Field(() => PageWhereInput, {nullable:true})
    @Type(() => PageWhereInput)
    where?: InstanceType<typeof PageWhereInput>;
    @Field(() => [PageOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PageOrderByWithRelationInput>;
    @Field(() => PageWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof PageWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [PageScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof PageScalarFieldEnum>;
}

@ArgsType()
export class FindManyPageArgs {
    @Field(() => PageWhereInput, {nullable:true})
    @Type(() => PageWhereInput)
    where?: InstanceType<typeof PageWhereInput>;
    @Field(() => [PageOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PageOrderByWithRelationInput>;
    @Field(() => PageWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof PageWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [PageScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof PageScalarFieldEnum>;
}

@ArgsType()
export class FindUniquePageOrThrowArgs {
    @Field(() => PageWhereUniqueInput, {nullable:false})
    @Type(() => PageWhereUniqueInput)
    where!: InstanceType<typeof PageWhereUniqueInput>;
}

@ArgsType()
export class FindUniquePageArgs {
    @Field(() => PageWhereUniqueInput, {nullable:false})
    @Type(() => PageWhereUniqueInput)
    where!: InstanceType<typeof PageWhereUniqueInput>;
}

@ArgsType()
export class PageAggregateArgs {
    @Field(() => PageWhereInput, {nullable:true})
    @Type(() => PageWhereInput)
    where?: InstanceType<typeof PageWhereInput>;
    @Field(() => [PageOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PageOrderByWithRelationInput>;
    @Field(() => PageWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof PageWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => PageCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof PageCountAggregateInput>;
    @Field(() => PageAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof PageAvgAggregateInput>;
    @Field(() => PageSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof PageSumAggregateInput>;
    @Field(() => PageMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof PageMinAggregateInput>;
    @Field(() => PageMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof PageMaxAggregateInput>;
}

@InputType()
export class PageAvgAggregateInput {
    @Field(() => Boolean, {nullable:true})
    view?: true;
}

@ObjectType()
export class PageAvgAggregate {
    @Field(() => Float, {nullable:true})
    view?: number;
}

@InputType()
export class PageAvgOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    view?: keyof typeof SortOrder;
}

@InputType()
export class PageCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    title?: true;
    @Field(() => Boolean, {nullable:true})
    thumbnail?: Upload.Upload;
    @Field(() => Boolean, {nullable:true})
    userId?: true;
    @Field(() => Boolean, {nullable:true})
    view?: true;
    @Field(() => Boolean, {nullable:true})
    content?: true;
    @Field(() => Boolean, {nullable:true})
    createAt?: true;
    @Field(() => Boolean, {nullable:true})
    updateAt?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class PageCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    title!: number;
    @Field(() => Int, {nullable:false})
    thumbnail!: number;
    @Field(() => Int, {nullable:false})
    userId!: number;
    @Field(() => Int, {nullable:false})
    view!: number;
    @Field(() => Int, {nullable:false})
    content!: number;
    @Field(() => Int, {nullable:false})
    createAt!: number;
    @Field(() => Int, {nullable:false})
    updateAt!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class PageCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    thumbnail?: Upload.Upload;
    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    view?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    content?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updateAt?: keyof typeof SortOrder;
}

@InputType()
export class PageCreateManyAuthorInputEnvelope {
    @Field(() => [PageCreateManyAuthorInput], {nullable:false})
    @Type(() => PageCreateManyAuthorInput)
    data!: Array<PageCreateManyAuthorInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@InputType()
export class PageCreateManyAuthorInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    title!: string;
    @Field(() => Upload.GraphQLUpload, {nullable:true})
    thumbnail?: Upload.Upload;
    @Field(() => Int, {nullable:true})
    view?: number;
    @Field(() => String, {nullable:false})
    @Validator.IsNotEmpty()
    @Validator.IsString()
    @Validator.MinLength(10)
    content!: string;
    @Field(() => Date, {nullable:true})
    createAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updateAt?: Date | string;
}

@InputType()
export class PageCreateManyInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    title!: string;
    @Field(() => Upload.GraphQLUpload, {nullable:true})
    thumbnail?: Upload.Upload;
    @Field(() => String, {nullable:false})
    userId!: string;
    @Field(() => Int, {nullable:true})
    view?: number;
    @Field(() => String, {nullable:false})
    @Validator.IsNotEmpty()
    @Validator.IsString()
    @Validator.MinLength(10)
    content!: string;
    @Field(() => Date, {nullable:true})
    createAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updateAt?: Date | string;
}

@InputType()
export class PageCreateNestedManyWithoutAuthorInput {
    @Field(() => [PageCreateWithoutAuthorInput], {nullable:true})
    @Type(() => PageCreateWithoutAuthorInput)
    create?: Array<PageCreateWithoutAuthorInput>;
    @Field(() => [PageCreateOrConnectWithoutAuthorInput], {nullable:true})
    @Type(() => PageCreateOrConnectWithoutAuthorInput)
    connectOrCreate?: Array<PageCreateOrConnectWithoutAuthorInput>;
    @Field(() => PageCreateManyAuthorInputEnvelope, {nullable:true})
    @Type(() => PageCreateManyAuthorInputEnvelope)
    createMany?: InstanceType<typeof PageCreateManyAuthorInputEnvelope>;
    @Field(() => [PageWhereUniqueInput], {nullable:true})
    @Type(() => PageWhereUniqueInput)
    connect?: Array<PageWhereUniqueInput>;
}

@InputType()
export class PageCreateOrConnectWithoutAuthorInput {
    @Field(() => PageWhereUniqueInput, {nullable:false})
    @Type(() => PageWhereUniqueInput)
    where!: InstanceType<typeof PageWhereUniqueInput>;
    @Field(() => PageCreateWithoutAuthorInput, {nullable:false})
    @Type(() => PageCreateWithoutAuthorInput)
    create!: InstanceType<typeof PageCreateWithoutAuthorInput>;
}

@InputType()
export class PageCreateWithoutAuthorInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    title!: string;
    @Field(() => Upload.GraphQLUpload, {nullable:true})
    thumbnail?: Upload.Upload;
    @Field(() => Int, {nullable:true})
    view?: number;
    @Field(() => String, {nullable:false})
    @Validator.IsNotEmpty()
    @Validator.IsString()
    @Validator.MinLength(10)
    content!: string;
    @Field(() => Date, {nullable:true})
    createAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updateAt?: Date | string;
}

@InputType()
export class PageCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    title!: string;
    @Field(() => Upload.GraphQLUpload, {nullable:true})
    thumbnail?: Upload.Upload;
    @Field(() => Int, {nullable:true})
    view?: number;
    @Field(() => String, {nullable:false})
    @Validator.IsNotEmpty()
    @Validator.IsString()
    @Validator.MinLength(10)
    content!: string;
    @Field(() => Date, {nullable:true})
    createAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updateAt?: Date | string;
    @Field(() => UserCreateNestedOneWithoutPageInput, {nullable:false})
    author!: InstanceType<typeof UserCreateNestedOneWithoutPageInput>;
}

@ArgsType()
export class PageGroupByArgs {
    @Field(() => PageWhereInput, {nullable:true})
    @Type(() => PageWhereInput)
    where?: InstanceType<typeof PageWhereInput>;
    @Field(() => [PageOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<PageOrderByWithAggregationInput>;
    @Field(() => [PageScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof PageScalarFieldEnum>;
    @Field(() => PageScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof PageScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => PageCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof PageCountAggregateInput>;
    @Field(() => PageAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof PageAvgAggregateInput>;
    @Field(() => PageSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof PageSumAggregateInput>;
    @Field(() => PageMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof PageMinAggregateInput>;
    @Field(() => PageMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof PageMaxAggregateInput>;
}

@ObjectType()
export class PageGroupBy {
    @Field(() => String, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    title!: string;
    @Field(() => String, {nullable:false})
    thumbnail!: string;
    @Field(() => String, {nullable:false})
    userId!: string;
    @Field(() => Int, {nullable:false})
    view!: number;
    @Field(() => String, {nullable:false})
    content!: string;
    @Field(() => Date, {nullable:false})
    createAt!: Date | string;
    @Field(() => Date, {nullable:false})
    updateAt!: Date | string;
    @Field(() => PageCountAggregate, {nullable:true})
    _count?: InstanceType<typeof PageCountAggregate>;
    @Field(() => PageAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof PageAvgAggregate>;
    @Field(() => PageSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof PageSumAggregate>;
    @Field(() => PageMinAggregate, {nullable:true})
    _min?: InstanceType<typeof PageMinAggregate>;
    @Field(() => PageMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof PageMaxAggregate>;
}

@InputType()
export class PageListRelationFilter {
    @Field(() => PageWhereInput, {nullable:true})
    every?: InstanceType<typeof PageWhereInput>;
    @Field(() => PageWhereInput, {nullable:true})
    some?: InstanceType<typeof PageWhereInput>;
    @Field(() => PageWhereInput, {nullable:true})
    none?: InstanceType<typeof PageWhereInput>;
}

@InputType()
export class PageMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    title?: true;
    @Field(() => Boolean, {nullable:true})
    thumbnail?: Upload.Upload;
    @Field(() => Boolean, {nullable:true})
    userId?: true;
    @Field(() => Boolean, {nullable:true})
    view?: true;
    @Field(() => Boolean, {nullable:true})
    content?: true;
    @Field(() => Boolean, {nullable:true})
    createAt?: true;
    @Field(() => Boolean, {nullable:true})
    updateAt?: true;
}

@ObjectType()
export class PageMaxAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    title?: string;
    @Field(() => String, {nullable:true})
    thumbnail?: string;
    @Field(() => String, {nullable:true})
    userId?: string;
    @Field(() => Int, {nullable:true})
    view?: number;
    @Field(() => String, {nullable:true})
    content?: string;
    @Field(() => Date, {nullable:true})
    createAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updateAt?: Date | string;
}

@InputType()
export class PageMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    thumbnail?: Upload.Upload;
    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    view?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    content?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updateAt?: keyof typeof SortOrder;
}

@InputType()
export class PageMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    title?: true;
    @Field(() => Boolean, {nullable:true})
    thumbnail?: Upload.Upload;
    @Field(() => Boolean, {nullable:true})
    userId?: true;
    @Field(() => Boolean, {nullable:true})
    view?: true;
    @Field(() => Boolean, {nullable:true})
    content?: true;
    @Field(() => Boolean, {nullable:true})
    createAt?: true;
    @Field(() => Boolean, {nullable:true})
    updateAt?: true;
}

@ObjectType()
export class PageMinAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    title?: string;
    @Field(() => String, {nullable:true})
    thumbnail?: string;
    @Field(() => String, {nullable:true})
    userId?: string;
    @Field(() => Int, {nullable:true})
    view?: number;
    @Field(() => String, {nullable:true})
    content?: string;
    @Field(() => Date, {nullable:true})
    createAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updateAt?: Date | string;
}

@InputType()
export class PageMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    thumbnail?: Upload.Upload;
    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    view?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    content?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updateAt?: keyof typeof SortOrder;
}

@InputType()
export class PageOrderByRelationAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    _count?: keyof typeof SortOrder;
}

@InputType()
export class PageOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    thumbnail?: Upload.Upload;
    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    view?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    content?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updateAt?: keyof typeof SortOrder;
    @Field(() => PageCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof PageCountOrderByAggregateInput>;
    @Field(() => PageAvgOrderByAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof PageAvgOrderByAggregateInput>;
    @Field(() => PageMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof PageMaxOrderByAggregateInput>;
    @Field(() => PageMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof PageMinOrderByAggregateInput>;
    @Field(() => PageSumOrderByAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof PageSumOrderByAggregateInput>;
}

@InputType()
export class PageOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    thumbnail?: Upload.Upload;
    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    view?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    content?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updateAt?: keyof typeof SortOrder;
    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    author?: InstanceType<typeof UserOrderByWithRelationInput>;
}

@InputType()
export class PageScalarWhereWithAggregatesInput {
    @Field(() => [PageScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<PageScalarWhereWithAggregatesInput>;
    @Field(() => [PageScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<PageScalarWhereWithAggregatesInput>;
    @Field(() => [PageScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<PageScalarWhereWithAggregatesInput>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    title?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    thumbnail?: InstanceType<typeof Upload.Upload>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    userId?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => IntWithAggregatesFilter, {nullable:true})
    view?: InstanceType<typeof IntWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    content?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updateAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}

@InputType()
export class PageScalarWhereInput {
    @Field(() => [PageScalarWhereInput], {nullable:true})
    AND?: Array<PageScalarWhereInput>;
    @Field(() => [PageScalarWhereInput], {nullable:true})
    OR?: Array<PageScalarWhereInput>;
    @Field(() => [PageScalarWhereInput], {nullable:true})
    NOT?: Array<PageScalarWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    title?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    thumbnail?: InstanceType<typeof Upload.Upload>;
    @Field(() => StringFilter, {nullable:true})
    userId?: InstanceType<typeof StringFilter>;
    @Field(() => IntFilter, {nullable:true})
    view?: InstanceType<typeof IntFilter>;
    @Field(() => StringFilter, {nullable:true})
    content?: InstanceType<typeof StringFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updateAt?: InstanceType<typeof DateTimeFilter>;
}

@InputType()
export class PageSumAggregateInput {
    @Field(() => Boolean, {nullable:true})
    view?: true;
}

@ObjectType()
export class PageSumAggregate {
    @Field(() => Int, {nullable:true})
    view?: number;
}

@InputType()
export class PageSumOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    view?: keyof typeof SortOrder;
}

@InputType()
export class PageUncheckedCreateNestedManyWithoutAuthorInput {
    @Field(() => [PageCreateWithoutAuthorInput], {nullable:true})
    @Type(() => PageCreateWithoutAuthorInput)
    create?: Array<PageCreateWithoutAuthorInput>;
    @Field(() => [PageCreateOrConnectWithoutAuthorInput], {nullable:true})
    @Type(() => PageCreateOrConnectWithoutAuthorInput)
    connectOrCreate?: Array<PageCreateOrConnectWithoutAuthorInput>;
    @Field(() => PageCreateManyAuthorInputEnvelope, {nullable:true})
    @Type(() => PageCreateManyAuthorInputEnvelope)
    createMany?: InstanceType<typeof PageCreateManyAuthorInputEnvelope>;
    @Field(() => [PageWhereUniqueInput], {nullable:true})
    @Type(() => PageWhereUniqueInput)
    connect?: Array<PageWhereUniqueInput>;
}

@InputType()
export class PageUncheckedCreateWithoutAuthorInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    title!: string;
    @Field(() => Upload.GraphQLUpload, {nullable:true})
    thumbnail?: Upload.Upload;
    @Field(() => Int, {nullable:true})
    view?: number;
    @Field(() => String, {nullable:false})
    @Validator.IsNotEmpty()
    @Validator.IsString()
    @Validator.MinLength(10)
    content!: string;
    @Field(() => Date, {nullable:true})
    createAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updateAt?: Date | string;
}

@InputType()
export class PageUncheckedCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    title!: string;
    @Field(() => Upload.GraphQLUpload, {nullable:true})
    thumbnail?: Upload.Upload;
    @Field(() => String, {nullable:false})
    userId!: string;
    @Field(() => Int, {nullable:true})
    view?: number;
    @Field(() => String, {nullable:false})
    @Validator.IsNotEmpty()
    @Validator.IsString()
    @Validator.MinLength(10)
    content!: string;
    @Field(() => Date, {nullable:true})
    createAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updateAt?: Date | string;
}

@InputType()
export class PageUncheckedUpdateManyWithoutAuthorNestedInput {
    @Field(() => [PageCreateWithoutAuthorInput], {nullable:true})
    @Type(() => PageCreateWithoutAuthorInput)
    create?: Array<PageCreateWithoutAuthorInput>;
    @Field(() => [PageCreateOrConnectWithoutAuthorInput], {nullable:true})
    @Type(() => PageCreateOrConnectWithoutAuthorInput)
    connectOrCreate?: Array<PageCreateOrConnectWithoutAuthorInput>;
    @Field(() => [PageUpsertWithWhereUniqueWithoutAuthorInput], {nullable:true})
    @Type(() => PageUpsertWithWhereUniqueWithoutAuthorInput)
    upsert?: Array<PageUpsertWithWhereUniqueWithoutAuthorInput>;
    @Field(() => PageCreateManyAuthorInputEnvelope, {nullable:true})
    @Type(() => PageCreateManyAuthorInputEnvelope)
    createMany?: InstanceType<typeof PageCreateManyAuthorInputEnvelope>;
    @Field(() => [PageWhereUniqueInput], {nullable:true})
    @Type(() => PageWhereUniqueInput)
    set?: Array<PageWhereUniqueInput>;
    @Field(() => [PageWhereUniqueInput], {nullable:true})
    @Type(() => PageWhereUniqueInput)
    disconnect?: Array<PageWhereUniqueInput>;
    @Field(() => [PageWhereUniqueInput], {nullable:true})
    @Type(() => PageWhereUniqueInput)
    delete?: Array<PageWhereUniqueInput>;
    @Field(() => [PageWhereUniqueInput], {nullable:true})
    @Type(() => PageWhereUniqueInput)
    connect?: Array<PageWhereUniqueInput>;
    @Field(() => [PageUpdateWithWhereUniqueWithoutAuthorInput], {nullable:true})
    @Type(() => PageUpdateWithWhereUniqueWithoutAuthorInput)
    update?: Array<PageUpdateWithWhereUniqueWithoutAuthorInput>;
    @Field(() => [PageUpdateManyWithWhereWithoutAuthorInput], {nullable:true})
    @Type(() => PageUpdateManyWithWhereWithoutAuthorInput)
    updateMany?: Array<PageUpdateManyWithWhereWithoutAuthorInput>;
    @Field(() => [PageScalarWhereInput], {nullable:true})
    @Type(() => PageScalarWhereInput)
    deleteMany?: Array<PageScalarWhereInput>;
}

@InputType()
export class PageUncheckedUpdateManyWithoutPageInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    thumbnail?: InstanceType<typeof Upload.Upload>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    view?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    content?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updateAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class PageUncheckedUpdateManyInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    thumbnail?: InstanceType<typeof Upload.Upload>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    userId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    view?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    content?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updateAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class PageUncheckedUpdateWithoutAuthorInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    thumbnail?: InstanceType<typeof Upload.Upload>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    view?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    content?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updateAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class PageUncheckedUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    thumbnail?: InstanceType<typeof Upload.Upload>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    userId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    view?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    content?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updateAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class PageUpdateManyMutationInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    thumbnail?: InstanceType<typeof Upload.Upload>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    view?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    content?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updateAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class PageUpdateManyWithWhereWithoutAuthorInput {
    @Field(() => PageScalarWhereInput, {nullable:false})
    @Type(() => PageScalarWhereInput)
    where!: InstanceType<typeof PageScalarWhereInput>;
    @Field(() => PageUpdateManyMutationInput, {nullable:false})
    @Type(() => PageUpdateManyMutationInput)
    data!: InstanceType<typeof PageUpdateManyMutationInput>;
}

@InputType()
export class PageUpdateManyWithoutAuthorNestedInput {
    @Field(() => [PageCreateWithoutAuthorInput], {nullable:true})
    @Type(() => PageCreateWithoutAuthorInput)
    create?: Array<PageCreateWithoutAuthorInput>;
    @Field(() => [PageCreateOrConnectWithoutAuthorInput], {nullable:true})
    @Type(() => PageCreateOrConnectWithoutAuthorInput)
    connectOrCreate?: Array<PageCreateOrConnectWithoutAuthorInput>;
    @Field(() => [PageUpsertWithWhereUniqueWithoutAuthorInput], {nullable:true})
    @Type(() => PageUpsertWithWhereUniqueWithoutAuthorInput)
    upsert?: Array<PageUpsertWithWhereUniqueWithoutAuthorInput>;
    @Field(() => PageCreateManyAuthorInputEnvelope, {nullable:true})
    @Type(() => PageCreateManyAuthorInputEnvelope)
    createMany?: InstanceType<typeof PageCreateManyAuthorInputEnvelope>;
    @Field(() => [PageWhereUniqueInput], {nullable:true})
    @Type(() => PageWhereUniqueInput)
    set?: Array<PageWhereUniqueInput>;
    @Field(() => [PageWhereUniqueInput], {nullable:true})
    @Type(() => PageWhereUniqueInput)
    disconnect?: Array<PageWhereUniqueInput>;
    @Field(() => [PageWhereUniqueInput], {nullable:true})
    @Type(() => PageWhereUniqueInput)
    delete?: Array<PageWhereUniqueInput>;
    @Field(() => [PageWhereUniqueInput], {nullable:true})
    @Type(() => PageWhereUniqueInput)
    connect?: Array<PageWhereUniqueInput>;
    @Field(() => [PageUpdateWithWhereUniqueWithoutAuthorInput], {nullable:true})
    @Type(() => PageUpdateWithWhereUniqueWithoutAuthorInput)
    update?: Array<PageUpdateWithWhereUniqueWithoutAuthorInput>;
    @Field(() => [PageUpdateManyWithWhereWithoutAuthorInput], {nullable:true})
    @Type(() => PageUpdateManyWithWhereWithoutAuthorInput)
    updateMany?: Array<PageUpdateManyWithWhereWithoutAuthorInput>;
    @Field(() => [PageScalarWhereInput], {nullable:true})
    @Type(() => PageScalarWhereInput)
    deleteMany?: Array<PageScalarWhereInput>;
}

@InputType()
export class PageUpdateWithWhereUniqueWithoutAuthorInput {
    @Field(() => PageWhereUniqueInput, {nullable:false})
    @Type(() => PageWhereUniqueInput)
    where!: InstanceType<typeof PageWhereUniqueInput>;
    @Field(() => PageUpdateWithoutAuthorInput, {nullable:false})
    @Type(() => PageUpdateWithoutAuthorInput)
    data!: InstanceType<typeof PageUpdateWithoutAuthorInput>;
}

@InputType()
export class PageUpdateWithoutAuthorInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    thumbnail?: InstanceType<typeof Upload.Upload>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    view?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    content?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updateAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class PageUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    thumbnail?: InstanceType<typeof Upload.Upload>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    view?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    content?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updateAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => UserUpdateOneRequiredWithoutPageNestedInput, {nullable:true})
    author?: InstanceType<typeof UserUpdateOneRequiredWithoutPageNestedInput>;
}

@InputType()
export class PageUpsertWithWhereUniqueWithoutAuthorInput {
    @Field(() => PageWhereUniqueInput, {nullable:false})
    @Type(() => PageWhereUniqueInput)
    where!: InstanceType<typeof PageWhereUniqueInput>;
    @Field(() => PageUpdateWithoutAuthorInput, {nullable:false})
    @Type(() => PageUpdateWithoutAuthorInput)
    update!: InstanceType<typeof PageUpdateWithoutAuthorInput>;
    @Field(() => PageCreateWithoutAuthorInput, {nullable:false})
    @Type(() => PageCreateWithoutAuthorInput)
    create!: InstanceType<typeof PageCreateWithoutAuthorInput>;
}

@InputType()
export class PageWhereUniqueInput {
    @Field(() => String, {nullable:true})
    id?: string;
}

@InputType()
export class PageWhereInput {
    @Field(() => [PageWhereInput], {nullable:true})
    AND?: Array<PageWhereInput>;
    @Field(() => [PageWhereInput], {nullable:true})
    OR?: Array<PageWhereInput>;
    @Field(() => [PageWhereInput], {nullable:true})
    NOT?: Array<PageWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    title?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    thumbnail?: InstanceType<typeof Upload.Upload>;
    @Field(() => StringFilter, {nullable:true})
    userId?: InstanceType<typeof StringFilter>;
    @Field(() => IntFilter, {nullable:true})
    view?: InstanceType<typeof IntFilter>;
    @Field(() => StringFilter, {nullable:true})
    content?: InstanceType<typeof StringFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updateAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => UserRelationFilter, {nullable:true})
    author?: InstanceType<typeof UserRelationFilter>;
}

@ObjectType()
export class Page {
    @Field(() => ID, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    title!: string;
    @Field(() => String, {nullable:false,defaultValue:'https://via.placeholder.com/480x320'})
    thumbnail!: string;
    @Field(() => String, {nullable:false})
    userId!: string;
    @Field(() => Int, {nullable:false,defaultValue:0})
    view!: number;
    @Field(() => String, {nullable:false})
    content!: string;
    @Field(() => Date, {nullable:false})
    createAt!: Date;
    @Field(() => Date, {nullable:false})
    updateAt!: Date;
    @Field(() => User, {nullable:false})
    author?: InstanceType<typeof User>;
}

@ArgsType()
export class UpdateManyPageArgs {
    @Field(() => PageUpdateManyMutationInput, {nullable:false})
    @Type(() => PageUpdateManyMutationInput)
    data!: InstanceType<typeof PageUpdateManyMutationInput>;
    @Field(() => PageWhereInput, {nullable:true})
    @Type(() => PageWhereInput)
    where?: InstanceType<typeof PageWhereInput>;
}

@ArgsType()
export class UpdateOnePageArgs {
    @Field(() => PageUpdateInput, {nullable:false})
    @Type(() => PageUpdateInput)
    data!: InstanceType<typeof PageUpdateInput>;
    @Field(() => PageWhereUniqueInput, {nullable:false})
    @Type(() => PageWhereUniqueInput)
    where!: InstanceType<typeof PageWhereUniqueInput>;
}

@ArgsType()
export class UpsertOnePageArgs {
    @Field(() => PageWhereUniqueInput, {nullable:false})
    @Type(() => PageWhereUniqueInput)
    where!: InstanceType<typeof PageWhereUniqueInput>;
    @Field(() => PageCreateInput, {nullable:false})
    @Type(() => PageCreateInput)
    create!: InstanceType<typeof PageCreateInput>;
    @Field(() => PageUpdateInput, {nullable:false})
    @Type(() => PageUpdateInput)
    update!: InstanceType<typeof PageUpdateInput>;
}

@ObjectType()
export class AggregatePost {
    @Field(() => PostCountAggregate, {nullable:true})
    _count?: InstanceType<typeof PostCountAggregate>;
    @Field(() => PostAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof PostAvgAggregate>;
    @Field(() => PostSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof PostSumAggregate>;
    @Field(() => PostMinAggregate, {nullable:true})
    _min?: InstanceType<typeof PostMinAggregate>;
    @Field(() => PostMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof PostMaxAggregate>;
}

@ArgsType()
export class CreateManyPostArgs {
    @Field(() => [PostCreateManyInput], {nullable:false})
    @Type(() => PostCreateManyInput)
    data!: Array<PostCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOnePostArgs {
    @Field(() => PostCreateInput, {nullable:false})
    @Type(() => PostCreateInput)
    data!: InstanceType<typeof PostCreateInput>;
}

@ArgsType()
export class DeleteManyPostArgs {
    @Field(() => PostWhereInput, {nullable:true})
    @Type(() => PostWhereInput)
    where?: InstanceType<typeof PostWhereInput>;
}

@ArgsType()
export class DeleteOnePostArgs {
    @Field(() => PostWhereUniqueInput, {nullable:false})
    @Type(() => PostWhereUniqueInput)
    where!: InstanceType<typeof PostWhereUniqueInput>;
}

@ArgsType()
export class FindFirstPostOrThrowArgs {
    @Field(() => PostWhereInput, {nullable:true})
    @Type(() => PostWhereInput)
    where?: InstanceType<typeof PostWhereInput>;
    @Field(() => [PostOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PostOrderByWithRelationInput>;
    @Field(() => PostWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof PostWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [PostScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof PostScalarFieldEnum>;
}

@ArgsType()
export class FindFirstPostArgs {
    @Field(() => PostWhereInput, {nullable:true})
    @Type(() => PostWhereInput)
    where?: InstanceType<typeof PostWhereInput>;
    @Field(() => [PostOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PostOrderByWithRelationInput>;
    @Field(() => PostWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof PostWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [PostScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof PostScalarFieldEnum>;
}

@ArgsType()
export class FindManyPostArgs {
    @Field(() => PostWhereInput, {nullable:true})
    @Type(() => PostWhereInput)
    where?: InstanceType<typeof PostWhereInput>;
    @Field(() => [PostOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PostOrderByWithRelationInput>;
    @Field(() => PostWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof PostWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [PostScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof PostScalarFieldEnum>;
}

@ArgsType()
export class FindUniquePostOrThrowArgs {
    @Field(() => PostWhereUniqueInput, {nullable:false})
    @Type(() => PostWhereUniqueInput)
    where!: InstanceType<typeof PostWhereUniqueInput>;
}

@ArgsType()
export class FindUniquePostArgs {
    @Field(() => PostWhereUniqueInput, {nullable:false})
    @Type(() => PostWhereUniqueInput)
    where!: InstanceType<typeof PostWhereUniqueInput>;
}

@ArgsType()
export class PostAggregateArgs {
    @Field(() => PostWhereInput, {nullable:true})
    @Type(() => PostWhereInput)
    where?: InstanceType<typeof PostWhereInput>;
    @Field(() => [PostOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PostOrderByWithRelationInput>;
    @Field(() => PostWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof PostWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => PostCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof PostCountAggregateInput>;
    @Field(() => PostAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof PostAvgAggregateInput>;
    @Field(() => PostSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof PostSumAggregateInput>;
    @Field(() => PostMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof PostMinAggregateInput>;
    @Field(() => PostMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof PostMaxAggregateInput>;
}

@InputType()
export class PostAvgAggregateInput {
    @Field(() => Boolean, {nullable:true})
    view?: true;
}

@ObjectType()
export class PostAvgAggregate {
    @Field(() => Float, {nullable:true})
    view?: number;
}

@InputType()
export class PostAvgOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    view?: keyof typeof SortOrder;
}

@InputType()
export class PostCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    title?: true;
    @Field(() => Boolean, {nullable:true})
    thumbnail?: Upload.Upload;
    @Field(() => Boolean, {nullable:true})
    userId?: true;
    @Field(() => Boolean, {nullable:true})
    categoryId?: true;
    @Field(() => Boolean, {nullable:true})
    view?: true;
    @Field(() => Boolean, {nullable:true})
    content?: true;
    @Field(() => Boolean, {nullable:true})
    createAt?: true;
    @Field(() => Boolean, {nullable:true})
    updateAt?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class PostCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    title!: number;
    @Field(() => Int, {nullable:false})
    thumbnail!: number;
    @Field(() => Int, {nullable:false})
    userId!: number;
    @Field(() => Int, {nullable:false})
    categoryId!: number;
    @Field(() => Int, {nullable:false})
    view!: number;
    @Field(() => Int, {nullable:false})
    content!: number;
    @Field(() => Int, {nullable:false})
    createAt!: number;
    @Field(() => Int, {nullable:false})
    updateAt!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class PostCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    thumbnail?: Upload.Upload;
    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    categoryId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    view?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    content?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updateAt?: keyof typeof SortOrder;
}

@InputType()
export class PostCreateManyAuthorInputEnvelope {
    @Field(() => [PostCreateManyAuthorInput], {nullable:false})
    @Type(() => PostCreateManyAuthorInput)
    data!: Array<PostCreateManyAuthorInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@InputType()
export class PostCreateManyAuthorInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    title!: string;
    @Field(() => Upload.GraphQLUpload, {nullable:true})
    thumbnail?: Upload.Upload;
    @Field(() => String, {nullable:false})
    categoryId!: string;
    @Field(() => Int, {nullable:true})
    view?: number;
    @Field(() => String, {nullable:false})
    @Validator.IsNotEmpty()
    @Validator.IsString()
    @Validator.MinLength(10)
    content!: string;
    @Field(() => Date, {nullable:true})
    createAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updateAt?: Date | string;
}

@InputType()
export class PostCreateManyCategoryInputEnvelope {
    @Field(() => [PostCreateManyCategoryInput], {nullable:false})
    @Type(() => PostCreateManyCategoryInput)
    data!: Array<PostCreateManyCategoryInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@InputType()
export class PostCreateManyCategoryInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    title!: string;
    @Field(() => Upload.GraphQLUpload, {nullable:true})
    thumbnail?: Upload.Upload;
    @Field(() => String, {nullable:false})
    userId!: string;
    @Field(() => Int, {nullable:true})
    view?: number;
    @Field(() => String, {nullable:false})
    @Validator.IsNotEmpty()
    @Validator.IsString()
    @Validator.MinLength(10)
    content!: string;
    @Field(() => Date, {nullable:true})
    createAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updateAt?: Date | string;
}

@InputType()
export class PostCreateManyInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    title!: string;
    @Field(() => Upload.GraphQLUpload, {nullable:true})
    thumbnail?: Upload.Upload;
    @Field(() => String, {nullable:false})
    userId!: string;
    @Field(() => String, {nullable:false})
    categoryId!: string;
    @Field(() => Int, {nullable:true})
    view?: number;
    @Field(() => String, {nullable:false})
    @Validator.IsNotEmpty()
    @Validator.IsString()
    @Validator.MinLength(10)
    content!: string;
    @Field(() => Date, {nullable:true})
    createAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updateAt?: Date | string;
}

@InputType()
export class PostCreateNestedManyWithoutAuthorInput {
    @Field(() => [PostCreateWithoutAuthorInput], {nullable:true})
    @Type(() => PostCreateWithoutAuthorInput)
    create?: Array<PostCreateWithoutAuthorInput>;
    @Field(() => [PostCreateOrConnectWithoutAuthorInput], {nullable:true})
    @Type(() => PostCreateOrConnectWithoutAuthorInput)
    connectOrCreate?: Array<PostCreateOrConnectWithoutAuthorInput>;
    @Field(() => PostCreateManyAuthorInputEnvelope, {nullable:true})
    @Type(() => PostCreateManyAuthorInputEnvelope)
    createMany?: InstanceType<typeof PostCreateManyAuthorInputEnvelope>;
    @Field(() => [PostWhereUniqueInput], {nullable:true})
    @Type(() => PostWhereUniqueInput)
    connect?: Array<PostWhereUniqueInput>;
}

@InputType()
export class PostCreateNestedManyWithoutCategoryInput {
    @Field(() => [PostCreateWithoutCategoryInput], {nullable:true})
    @Type(() => PostCreateWithoutCategoryInput)
    create?: Array<PostCreateWithoutCategoryInput>;
    @Field(() => [PostCreateOrConnectWithoutCategoryInput], {nullable:true})
    @Type(() => PostCreateOrConnectWithoutCategoryInput)
    connectOrCreate?: Array<PostCreateOrConnectWithoutCategoryInput>;
    @Field(() => PostCreateManyCategoryInputEnvelope, {nullable:true})
    @Type(() => PostCreateManyCategoryInputEnvelope)
    createMany?: InstanceType<typeof PostCreateManyCategoryInputEnvelope>;
    @Field(() => [PostWhereUniqueInput], {nullable:true})
    @Type(() => PostWhereUniqueInput)
    connect?: Array<PostWhereUniqueInput>;
}

@InputType()
export class PostCreateOrConnectWithoutAuthorInput {
    @Field(() => PostWhereUniqueInput, {nullable:false})
    @Type(() => PostWhereUniqueInput)
    where!: InstanceType<typeof PostWhereUniqueInput>;
    @Field(() => PostCreateWithoutAuthorInput, {nullable:false})
    @Type(() => PostCreateWithoutAuthorInput)
    create!: InstanceType<typeof PostCreateWithoutAuthorInput>;
}

@InputType()
export class PostCreateOrConnectWithoutCategoryInput {
    @Field(() => PostWhereUniqueInput, {nullable:false})
    @Type(() => PostWhereUniqueInput)
    where!: InstanceType<typeof PostWhereUniqueInput>;
    @Field(() => PostCreateWithoutCategoryInput, {nullable:false})
    @Type(() => PostCreateWithoutCategoryInput)
    create!: InstanceType<typeof PostCreateWithoutCategoryInput>;
}

@InputType()
export class PostCreateWithoutAuthorInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    title!: string;
    @Field(() => Upload.GraphQLUpload, {nullable:true})
    thumbnail?: Upload.Upload;
    @Field(() => Int, {nullable:true})
    view?: number;
    @Field(() => String, {nullable:false})
    @Validator.IsNotEmpty()
    @Validator.IsString()
    @Validator.MinLength(10)
    content!: string;
    @Field(() => Date, {nullable:true})
    createAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updateAt?: Date | string;
    @Field(() => CategoryCreateNestedOneWithoutPostInput, {nullable:false})
    category!: InstanceType<typeof CategoryCreateNestedOneWithoutPostInput>;
}

@InputType()
export class PostCreateWithoutCategoryInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    title!: string;
    @Field(() => Upload.GraphQLUpload, {nullable:true})
    thumbnail?: Upload.Upload;
    @Field(() => Int, {nullable:true})
    view?: number;
    @Field(() => String, {nullable:false})
    @Validator.IsNotEmpty()
    @Validator.IsString()
    @Validator.MinLength(10)
    content!: string;
    @Field(() => Date, {nullable:true})
    createAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updateAt?: Date | string;
    @Field(() => UserCreateNestedOneWithoutPostInput, {nullable:false})
    author!: InstanceType<typeof UserCreateNestedOneWithoutPostInput>;
}

@InputType()
export class PostCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    title!: string;
    @Field(() => Upload.GraphQLUpload, {nullable:true})
    thumbnail?: Upload.Upload;
    @Field(() => Int, {nullable:true})
    view?: number;
    @Field(() => String, {nullable:false})
    @Validator.IsNotEmpty()
    @Validator.IsString()
    @Validator.MinLength(10)
    content!: string;
    @Field(() => Date, {nullable:true})
    createAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updateAt?: Date | string;
    @Field(() => CategoryCreateNestedOneWithoutPostInput, {nullable:false})
    category!: InstanceType<typeof CategoryCreateNestedOneWithoutPostInput>;
    @Field(() => UserCreateNestedOneWithoutPostInput, {nullable:false})
    author!: InstanceType<typeof UserCreateNestedOneWithoutPostInput>;
}

@ArgsType()
export class PostGroupByArgs {
    @Field(() => PostWhereInput, {nullable:true})
    @Type(() => PostWhereInput)
    where?: InstanceType<typeof PostWhereInput>;
    @Field(() => [PostOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<PostOrderByWithAggregationInput>;
    @Field(() => [PostScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof PostScalarFieldEnum>;
    @Field(() => PostScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof PostScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => PostCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof PostCountAggregateInput>;
    @Field(() => PostAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof PostAvgAggregateInput>;
    @Field(() => PostSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof PostSumAggregateInput>;
    @Field(() => PostMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof PostMinAggregateInput>;
    @Field(() => PostMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof PostMaxAggregateInput>;
}

@ObjectType()
export class PostGroupBy {
    @Field(() => String, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    title!: string;
    @Field(() => String, {nullable:false})
    thumbnail!: string;
    @Field(() => String, {nullable:false})
    userId!: string;
    @Field(() => String, {nullable:false})
    categoryId!: string;
    @Field(() => Int, {nullable:false})
    view!: number;
    @Field(() => String, {nullable:false})
    content!: string;
    @Field(() => Date, {nullable:false})
    createAt!: Date | string;
    @Field(() => Date, {nullable:false})
    updateAt!: Date | string;
    @Field(() => PostCountAggregate, {nullable:true})
    _count?: InstanceType<typeof PostCountAggregate>;
    @Field(() => PostAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof PostAvgAggregate>;
    @Field(() => PostSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof PostSumAggregate>;
    @Field(() => PostMinAggregate, {nullable:true})
    _min?: InstanceType<typeof PostMinAggregate>;
    @Field(() => PostMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof PostMaxAggregate>;
}

@InputType()
export class PostListRelationFilter {
    @Field(() => PostWhereInput, {nullable:true})
    every?: InstanceType<typeof PostWhereInput>;
    @Field(() => PostWhereInput, {nullable:true})
    some?: InstanceType<typeof PostWhereInput>;
    @Field(() => PostWhereInput, {nullable:true})
    none?: InstanceType<typeof PostWhereInput>;
}

@InputType()
export class PostMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    title?: true;
    @Field(() => Boolean, {nullable:true})
    thumbnail?: Upload.Upload;
    @Field(() => Boolean, {nullable:true})
    userId?: true;
    @Field(() => Boolean, {nullable:true})
    categoryId?: true;
    @Field(() => Boolean, {nullable:true})
    view?: true;
    @Field(() => Boolean, {nullable:true})
    content?: true;
    @Field(() => Boolean, {nullable:true})
    createAt?: true;
    @Field(() => Boolean, {nullable:true})
    updateAt?: true;
}

@ObjectType()
export class PostMaxAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    title?: string;
    @Field(() => String, {nullable:true})
    thumbnail?: string;
    @Field(() => String, {nullable:true})
    userId?: string;
    @Field(() => String, {nullable:true})
    categoryId?: string;
    @Field(() => Int, {nullable:true})
    view?: number;
    @Field(() => String, {nullable:true})
    content?: string;
    @Field(() => Date, {nullable:true})
    createAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updateAt?: Date | string;
}

@InputType()
export class PostMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    thumbnail?: Upload.Upload;
    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    categoryId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    view?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    content?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updateAt?: keyof typeof SortOrder;
}

@InputType()
export class PostMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    title?: true;
    @Field(() => Boolean, {nullable:true})
    thumbnail?: Upload.Upload;
    @Field(() => Boolean, {nullable:true})
    userId?: true;
    @Field(() => Boolean, {nullable:true})
    categoryId?: true;
    @Field(() => Boolean, {nullable:true})
    view?: true;
    @Field(() => Boolean, {nullable:true})
    content?: true;
    @Field(() => Boolean, {nullable:true})
    createAt?: true;
    @Field(() => Boolean, {nullable:true})
    updateAt?: true;
}

@ObjectType()
export class PostMinAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    title?: string;
    @Field(() => String, {nullable:true})
    thumbnail?: string;
    @Field(() => String, {nullable:true})
    userId?: string;
    @Field(() => String, {nullable:true})
    categoryId?: string;
    @Field(() => Int, {nullable:true})
    view?: number;
    @Field(() => String, {nullable:true})
    content?: string;
    @Field(() => Date, {nullable:true})
    createAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updateAt?: Date | string;
}

@InputType()
export class PostMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    thumbnail?: Upload.Upload;
    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    categoryId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    view?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    content?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updateAt?: keyof typeof SortOrder;
}

@InputType()
export class PostOrderByRelationAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    _count?: keyof typeof SortOrder;
}

@InputType()
export class PostOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    thumbnail?: Upload.Upload;
    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    categoryId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    view?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    content?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updateAt?: keyof typeof SortOrder;
    @Field(() => PostCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof PostCountOrderByAggregateInput>;
    @Field(() => PostAvgOrderByAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof PostAvgOrderByAggregateInput>;
    @Field(() => PostMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof PostMaxOrderByAggregateInput>;
    @Field(() => PostMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof PostMinOrderByAggregateInput>;
    @Field(() => PostSumOrderByAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof PostSumOrderByAggregateInput>;
}

@InputType()
export class PostOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    thumbnail?: Upload.Upload;
    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    categoryId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    view?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    content?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updateAt?: keyof typeof SortOrder;
    @Field(() => CategoryOrderByWithRelationInput, {nullable:true})
    category?: InstanceType<typeof CategoryOrderByWithRelationInput>;
    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    author?: InstanceType<typeof UserOrderByWithRelationInput>;
}

@InputType()
export class PostScalarWhereWithAggregatesInput {
    @Field(() => [PostScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<PostScalarWhereWithAggregatesInput>;
    @Field(() => [PostScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<PostScalarWhereWithAggregatesInput>;
    @Field(() => [PostScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<PostScalarWhereWithAggregatesInput>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    title?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    thumbnail?: InstanceType<typeof Upload.Upload>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    userId?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    categoryId?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => IntWithAggregatesFilter, {nullable:true})
    view?: InstanceType<typeof IntWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    content?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updateAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}

@InputType()
export class PostScalarWhereInput {
    @Field(() => [PostScalarWhereInput], {nullable:true})
    AND?: Array<PostScalarWhereInput>;
    @Field(() => [PostScalarWhereInput], {nullable:true})
    OR?: Array<PostScalarWhereInput>;
    @Field(() => [PostScalarWhereInput], {nullable:true})
    NOT?: Array<PostScalarWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    title?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    thumbnail?: InstanceType<typeof Upload.Upload>;
    @Field(() => StringFilter, {nullable:true})
    userId?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    categoryId?: InstanceType<typeof StringFilter>;
    @Field(() => IntFilter, {nullable:true})
    view?: InstanceType<typeof IntFilter>;
    @Field(() => StringFilter, {nullable:true})
    content?: InstanceType<typeof StringFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updateAt?: InstanceType<typeof DateTimeFilter>;
}

@InputType()
export class PostSumAggregateInput {
    @Field(() => Boolean, {nullable:true})
    view?: true;
}

@ObjectType()
export class PostSumAggregate {
    @Field(() => Int, {nullable:true})
    view?: number;
}

@InputType()
export class PostSumOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    view?: keyof typeof SortOrder;
}

@InputType()
export class PostUncheckedCreateNestedManyWithoutAuthorInput {
    @Field(() => [PostCreateWithoutAuthorInput], {nullable:true})
    @Type(() => PostCreateWithoutAuthorInput)
    create?: Array<PostCreateWithoutAuthorInput>;
    @Field(() => [PostCreateOrConnectWithoutAuthorInput], {nullable:true})
    @Type(() => PostCreateOrConnectWithoutAuthorInput)
    connectOrCreate?: Array<PostCreateOrConnectWithoutAuthorInput>;
    @Field(() => PostCreateManyAuthorInputEnvelope, {nullable:true})
    @Type(() => PostCreateManyAuthorInputEnvelope)
    createMany?: InstanceType<typeof PostCreateManyAuthorInputEnvelope>;
    @Field(() => [PostWhereUniqueInput], {nullable:true})
    @Type(() => PostWhereUniqueInput)
    connect?: Array<PostWhereUniqueInput>;
}

@InputType()
export class PostUncheckedCreateNestedManyWithoutCategoryInput {
    @Field(() => [PostCreateWithoutCategoryInput], {nullable:true})
    @Type(() => PostCreateWithoutCategoryInput)
    create?: Array<PostCreateWithoutCategoryInput>;
    @Field(() => [PostCreateOrConnectWithoutCategoryInput], {nullable:true})
    @Type(() => PostCreateOrConnectWithoutCategoryInput)
    connectOrCreate?: Array<PostCreateOrConnectWithoutCategoryInput>;
    @Field(() => PostCreateManyCategoryInputEnvelope, {nullable:true})
    @Type(() => PostCreateManyCategoryInputEnvelope)
    createMany?: InstanceType<typeof PostCreateManyCategoryInputEnvelope>;
    @Field(() => [PostWhereUniqueInput], {nullable:true})
    @Type(() => PostWhereUniqueInput)
    connect?: Array<PostWhereUniqueInput>;
}

@InputType()
export class PostUncheckedCreateWithoutAuthorInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    title!: string;
    @Field(() => Upload.GraphQLUpload, {nullable:true})
    thumbnail?: Upload.Upload;
    @Field(() => String, {nullable:false})
    categoryId!: string;
    @Field(() => Int, {nullable:true})
    view?: number;
    @Field(() => String, {nullable:false})
    @Validator.IsNotEmpty()
    @Validator.IsString()
    @Validator.MinLength(10)
    content!: string;
    @Field(() => Date, {nullable:true})
    createAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updateAt?: Date | string;
}

@InputType()
export class PostUncheckedCreateWithoutCategoryInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    title!: string;
    @Field(() => Upload.GraphQLUpload, {nullable:true})
    thumbnail?: Upload.Upload;
    @Field(() => String, {nullable:false})
    userId!: string;
    @Field(() => Int, {nullable:true})
    view?: number;
    @Field(() => String, {nullable:false})
    @Validator.IsNotEmpty()
    @Validator.IsString()
    @Validator.MinLength(10)
    content!: string;
    @Field(() => Date, {nullable:true})
    createAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updateAt?: Date | string;
}

@InputType()
export class PostUncheckedCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    title!: string;
    @Field(() => Upload.GraphQLUpload, {nullable:true})
    thumbnail?: Upload.Upload;
    @Field(() => String, {nullable:false})
    userId!: string;
    @Field(() => String, {nullable:false})
    categoryId!: string;
    @Field(() => Int, {nullable:true})
    view?: number;
    @Field(() => String, {nullable:false})
    @Validator.IsNotEmpty()
    @Validator.IsString()
    @Validator.MinLength(10)
    content!: string;
    @Field(() => Date, {nullable:true})
    createAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updateAt?: Date | string;
}

@InputType()
export class PostUncheckedUpdateManyWithoutAuthorNestedInput {
    @Field(() => [PostCreateWithoutAuthorInput], {nullable:true})
    @Type(() => PostCreateWithoutAuthorInput)
    create?: Array<PostCreateWithoutAuthorInput>;
    @Field(() => [PostCreateOrConnectWithoutAuthorInput], {nullable:true})
    @Type(() => PostCreateOrConnectWithoutAuthorInput)
    connectOrCreate?: Array<PostCreateOrConnectWithoutAuthorInput>;
    @Field(() => [PostUpsertWithWhereUniqueWithoutAuthorInput], {nullable:true})
    @Type(() => PostUpsertWithWhereUniqueWithoutAuthorInput)
    upsert?: Array<PostUpsertWithWhereUniqueWithoutAuthorInput>;
    @Field(() => PostCreateManyAuthorInputEnvelope, {nullable:true})
    @Type(() => PostCreateManyAuthorInputEnvelope)
    createMany?: InstanceType<typeof PostCreateManyAuthorInputEnvelope>;
    @Field(() => [PostWhereUniqueInput], {nullable:true})
    @Type(() => PostWhereUniqueInput)
    set?: Array<PostWhereUniqueInput>;
    @Field(() => [PostWhereUniqueInput], {nullable:true})
    @Type(() => PostWhereUniqueInput)
    disconnect?: Array<PostWhereUniqueInput>;
    @Field(() => [PostWhereUniqueInput], {nullable:true})
    @Type(() => PostWhereUniqueInput)
    delete?: Array<PostWhereUniqueInput>;
    @Field(() => [PostWhereUniqueInput], {nullable:true})
    @Type(() => PostWhereUniqueInput)
    connect?: Array<PostWhereUniqueInput>;
    @Field(() => [PostUpdateWithWhereUniqueWithoutAuthorInput], {nullable:true})
    @Type(() => PostUpdateWithWhereUniqueWithoutAuthorInput)
    update?: Array<PostUpdateWithWhereUniqueWithoutAuthorInput>;
    @Field(() => [PostUpdateManyWithWhereWithoutAuthorInput], {nullable:true})
    @Type(() => PostUpdateManyWithWhereWithoutAuthorInput)
    updateMany?: Array<PostUpdateManyWithWhereWithoutAuthorInput>;
    @Field(() => [PostScalarWhereInput], {nullable:true})
    @Type(() => PostScalarWhereInput)
    deleteMany?: Array<PostScalarWhereInput>;
}

@InputType()
export class PostUncheckedUpdateManyWithoutCategoryNestedInput {
    @Field(() => [PostCreateWithoutCategoryInput], {nullable:true})
    @Type(() => PostCreateWithoutCategoryInput)
    create?: Array<PostCreateWithoutCategoryInput>;
    @Field(() => [PostCreateOrConnectWithoutCategoryInput], {nullable:true})
    @Type(() => PostCreateOrConnectWithoutCategoryInput)
    connectOrCreate?: Array<PostCreateOrConnectWithoutCategoryInput>;
    @Field(() => [PostUpsertWithWhereUniqueWithoutCategoryInput], {nullable:true})
    @Type(() => PostUpsertWithWhereUniqueWithoutCategoryInput)
    upsert?: Array<PostUpsertWithWhereUniqueWithoutCategoryInput>;
    @Field(() => PostCreateManyCategoryInputEnvelope, {nullable:true})
    @Type(() => PostCreateManyCategoryInputEnvelope)
    createMany?: InstanceType<typeof PostCreateManyCategoryInputEnvelope>;
    @Field(() => [PostWhereUniqueInput], {nullable:true})
    @Type(() => PostWhereUniqueInput)
    set?: Array<PostWhereUniqueInput>;
    @Field(() => [PostWhereUniqueInput], {nullable:true})
    @Type(() => PostWhereUniqueInput)
    disconnect?: Array<PostWhereUniqueInput>;
    @Field(() => [PostWhereUniqueInput], {nullable:true})
    @Type(() => PostWhereUniqueInput)
    delete?: Array<PostWhereUniqueInput>;
    @Field(() => [PostWhereUniqueInput], {nullable:true})
    @Type(() => PostWhereUniqueInput)
    connect?: Array<PostWhereUniqueInput>;
    @Field(() => [PostUpdateWithWhereUniqueWithoutCategoryInput], {nullable:true})
    @Type(() => PostUpdateWithWhereUniqueWithoutCategoryInput)
    update?: Array<PostUpdateWithWhereUniqueWithoutCategoryInput>;
    @Field(() => [PostUpdateManyWithWhereWithoutCategoryInput], {nullable:true})
    @Type(() => PostUpdateManyWithWhereWithoutCategoryInput)
    updateMany?: Array<PostUpdateManyWithWhereWithoutCategoryInput>;
    @Field(() => [PostScalarWhereInput], {nullable:true})
    @Type(() => PostScalarWhereInput)
    deleteMany?: Array<PostScalarWhereInput>;
}

@InputType()
export class PostUncheckedUpdateManyWithoutPostInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    thumbnail?: InstanceType<typeof Upload.Upload>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    categoryId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    view?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    content?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updateAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class PostUncheckedUpdateManyInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    thumbnail?: InstanceType<typeof Upload.Upload>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    userId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    categoryId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    view?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    content?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updateAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class PostUncheckedUpdateWithoutAuthorInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    thumbnail?: InstanceType<typeof Upload.Upload>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    categoryId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    view?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    content?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updateAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class PostUncheckedUpdateWithoutCategoryInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    thumbnail?: InstanceType<typeof Upload.Upload>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    userId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    view?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    content?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updateAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class PostUncheckedUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    thumbnail?: InstanceType<typeof Upload.Upload>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    userId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    categoryId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    view?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    content?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updateAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class PostUpdateManyMutationInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    thumbnail?: InstanceType<typeof Upload.Upload>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    view?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    content?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updateAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class PostUpdateManyWithWhereWithoutAuthorInput {
    @Field(() => PostScalarWhereInput, {nullable:false})
    @Type(() => PostScalarWhereInput)
    where!: InstanceType<typeof PostScalarWhereInput>;
    @Field(() => PostUpdateManyMutationInput, {nullable:false})
    @Type(() => PostUpdateManyMutationInput)
    data!: InstanceType<typeof PostUpdateManyMutationInput>;
}

@InputType()
export class PostUpdateManyWithWhereWithoutCategoryInput {
    @Field(() => PostScalarWhereInput, {nullable:false})
    @Type(() => PostScalarWhereInput)
    where!: InstanceType<typeof PostScalarWhereInput>;
    @Field(() => PostUpdateManyMutationInput, {nullable:false})
    @Type(() => PostUpdateManyMutationInput)
    data!: InstanceType<typeof PostUpdateManyMutationInput>;
}

@InputType()
export class PostUpdateManyWithoutAuthorNestedInput {
    @Field(() => [PostCreateWithoutAuthorInput], {nullable:true})
    @Type(() => PostCreateWithoutAuthorInput)
    create?: Array<PostCreateWithoutAuthorInput>;
    @Field(() => [PostCreateOrConnectWithoutAuthorInput], {nullable:true})
    @Type(() => PostCreateOrConnectWithoutAuthorInput)
    connectOrCreate?: Array<PostCreateOrConnectWithoutAuthorInput>;
    @Field(() => [PostUpsertWithWhereUniqueWithoutAuthorInput], {nullable:true})
    @Type(() => PostUpsertWithWhereUniqueWithoutAuthorInput)
    upsert?: Array<PostUpsertWithWhereUniqueWithoutAuthorInput>;
    @Field(() => PostCreateManyAuthorInputEnvelope, {nullable:true})
    @Type(() => PostCreateManyAuthorInputEnvelope)
    createMany?: InstanceType<typeof PostCreateManyAuthorInputEnvelope>;
    @Field(() => [PostWhereUniqueInput], {nullable:true})
    @Type(() => PostWhereUniqueInput)
    set?: Array<PostWhereUniqueInput>;
    @Field(() => [PostWhereUniqueInput], {nullable:true})
    @Type(() => PostWhereUniqueInput)
    disconnect?: Array<PostWhereUniqueInput>;
    @Field(() => [PostWhereUniqueInput], {nullable:true})
    @Type(() => PostWhereUniqueInput)
    delete?: Array<PostWhereUniqueInput>;
    @Field(() => [PostWhereUniqueInput], {nullable:true})
    @Type(() => PostWhereUniqueInput)
    connect?: Array<PostWhereUniqueInput>;
    @Field(() => [PostUpdateWithWhereUniqueWithoutAuthorInput], {nullable:true})
    @Type(() => PostUpdateWithWhereUniqueWithoutAuthorInput)
    update?: Array<PostUpdateWithWhereUniqueWithoutAuthorInput>;
    @Field(() => [PostUpdateManyWithWhereWithoutAuthorInput], {nullable:true})
    @Type(() => PostUpdateManyWithWhereWithoutAuthorInput)
    updateMany?: Array<PostUpdateManyWithWhereWithoutAuthorInput>;
    @Field(() => [PostScalarWhereInput], {nullable:true})
    @Type(() => PostScalarWhereInput)
    deleteMany?: Array<PostScalarWhereInput>;
}

@InputType()
export class PostUpdateManyWithoutCategoryNestedInput {
    @Field(() => [PostCreateWithoutCategoryInput], {nullable:true})
    @Type(() => PostCreateWithoutCategoryInput)
    create?: Array<PostCreateWithoutCategoryInput>;
    @Field(() => [PostCreateOrConnectWithoutCategoryInput], {nullable:true})
    @Type(() => PostCreateOrConnectWithoutCategoryInput)
    connectOrCreate?: Array<PostCreateOrConnectWithoutCategoryInput>;
    @Field(() => [PostUpsertWithWhereUniqueWithoutCategoryInput], {nullable:true})
    @Type(() => PostUpsertWithWhereUniqueWithoutCategoryInput)
    upsert?: Array<PostUpsertWithWhereUniqueWithoutCategoryInput>;
    @Field(() => PostCreateManyCategoryInputEnvelope, {nullable:true})
    @Type(() => PostCreateManyCategoryInputEnvelope)
    createMany?: InstanceType<typeof PostCreateManyCategoryInputEnvelope>;
    @Field(() => [PostWhereUniqueInput], {nullable:true})
    @Type(() => PostWhereUniqueInput)
    set?: Array<PostWhereUniqueInput>;
    @Field(() => [PostWhereUniqueInput], {nullable:true})
    @Type(() => PostWhereUniqueInput)
    disconnect?: Array<PostWhereUniqueInput>;
    @Field(() => [PostWhereUniqueInput], {nullable:true})
    @Type(() => PostWhereUniqueInput)
    delete?: Array<PostWhereUniqueInput>;
    @Field(() => [PostWhereUniqueInput], {nullable:true})
    @Type(() => PostWhereUniqueInput)
    connect?: Array<PostWhereUniqueInput>;
    @Field(() => [PostUpdateWithWhereUniqueWithoutCategoryInput], {nullable:true})
    @Type(() => PostUpdateWithWhereUniqueWithoutCategoryInput)
    update?: Array<PostUpdateWithWhereUniqueWithoutCategoryInput>;
    @Field(() => [PostUpdateManyWithWhereWithoutCategoryInput], {nullable:true})
    @Type(() => PostUpdateManyWithWhereWithoutCategoryInput)
    updateMany?: Array<PostUpdateManyWithWhereWithoutCategoryInput>;
    @Field(() => [PostScalarWhereInput], {nullable:true})
    @Type(() => PostScalarWhereInput)
    deleteMany?: Array<PostScalarWhereInput>;
}

@InputType()
export class PostUpdateWithWhereUniqueWithoutAuthorInput {
    @Field(() => PostWhereUniqueInput, {nullable:false})
    @Type(() => PostWhereUniqueInput)
    where!: InstanceType<typeof PostWhereUniqueInput>;
    @Field(() => PostUpdateWithoutAuthorInput, {nullable:false})
    @Type(() => PostUpdateWithoutAuthorInput)
    data!: InstanceType<typeof PostUpdateWithoutAuthorInput>;
}

@InputType()
export class PostUpdateWithWhereUniqueWithoutCategoryInput {
    @Field(() => PostWhereUniqueInput, {nullable:false})
    @Type(() => PostWhereUniqueInput)
    where!: InstanceType<typeof PostWhereUniqueInput>;
    @Field(() => PostUpdateWithoutCategoryInput, {nullable:false})
    @Type(() => PostUpdateWithoutCategoryInput)
    data!: InstanceType<typeof PostUpdateWithoutCategoryInput>;
}

@InputType()
export class PostUpdateWithoutAuthorInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    thumbnail?: InstanceType<typeof Upload.Upload>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    view?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    content?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updateAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => CategoryUpdateOneRequiredWithoutPostNestedInput, {nullable:true})
    category?: InstanceType<typeof CategoryUpdateOneRequiredWithoutPostNestedInput>;
}

@InputType()
export class PostUpdateWithoutCategoryInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    thumbnail?: InstanceType<typeof Upload.Upload>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    view?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    content?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updateAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => UserUpdateOneRequiredWithoutPostNestedInput, {nullable:true})
    author?: InstanceType<typeof UserUpdateOneRequiredWithoutPostNestedInput>;
}

@InputType()
export class PostUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    thumbnail?: InstanceType<typeof Upload.Upload>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    view?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    content?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updateAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => CategoryUpdateOneRequiredWithoutPostNestedInput, {nullable:true})
    category?: InstanceType<typeof CategoryUpdateOneRequiredWithoutPostNestedInput>;
    @Field(() => UserUpdateOneRequiredWithoutPostNestedInput, {nullable:true})
    author?: InstanceType<typeof UserUpdateOneRequiredWithoutPostNestedInput>;
}

@InputType()
export class PostUpsertWithWhereUniqueWithoutAuthorInput {
    @Field(() => PostWhereUniqueInput, {nullable:false})
    @Type(() => PostWhereUniqueInput)
    where!: InstanceType<typeof PostWhereUniqueInput>;
    @Field(() => PostUpdateWithoutAuthorInput, {nullable:false})
    @Type(() => PostUpdateWithoutAuthorInput)
    update!: InstanceType<typeof PostUpdateWithoutAuthorInput>;
    @Field(() => PostCreateWithoutAuthorInput, {nullable:false})
    @Type(() => PostCreateWithoutAuthorInput)
    create!: InstanceType<typeof PostCreateWithoutAuthorInput>;
}

@InputType()
export class PostUpsertWithWhereUniqueWithoutCategoryInput {
    @Field(() => PostWhereUniqueInput, {nullable:false})
    @Type(() => PostWhereUniqueInput)
    where!: InstanceType<typeof PostWhereUniqueInput>;
    @Field(() => PostUpdateWithoutCategoryInput, {nullable:false})
    @Type(() => PostUpdateWithoutCategoryInput)
    update!: InstanceType<typeof PostUpdateWithoutCategoryInput>;
    @Field(() => PostCreateWithoutCategoryInput, {nullable:false})
    @Type(() => PostCreateWithoutCategoryInput)
    create!: InstanceType<typeof PostCreateWithoutCategoryInput>;
}

@InputType()
export class PostWhereUniqueInput {
    @Field(() => String, {nullable:true})
    id?: string;
}

@InputType()
export class PostWhereInput {
    @Field(() => [PostWhereInput], {nullable:true})
    AND?: Array<PostWhereInput>;
    @Field(() => [PostWhereInput], {nullable:true})
    OR?: Array<PostWhereInput>;
    @Field(() => [PostWhereInput], {nullable:true})
    NOT?: Array<PostWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    title?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    thumbnail?: InstanceType<typeof Upload.Upload>;
    @Field(() => StringFilter, {nullable:true})
    userId?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    categoryId?: InstanceType<typeof StringFilter>;
    @Field(() => IntFilter, {nullable:true})
    view?: InstanceType<typeof IntFilter>;
    @Field(() => StringFilter, {nullable:true})
    content?: InstanceType<typeof StringFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updateAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => CategoryRelationFilter, {nullable:true})
    category?: InstanceType<typeof CategoryRelationFilter>;
    @Field(() => UserRelationFilter, {nullable:true})
    author?: InstanceType<typeof UserRelationFilter>;
}

@ObjectType()
export class Post {
    @Field(() => ID, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    title!: string;
    @Field(() => String, {nullable:false,defaultValue:'https://via.placeholder.com/480x320'})
    thumbnail!: string;
    @Field(() => String, {nullable:false})
    userId!: string;
    @Field(() => String, {nullable:false})
    categoryId!: string;
    @Field(() => Int, {nullable:false,defaultValue:0})
    view!: number;
    @Field(() => String, {nullable:false})
    content!: string;
    @Field(() => Date, {nullable:false})
    createAt!: Date;
    @Field(() => Date, {nullable:false})
    updateAt!: Date;
    @Field(() => Category, {nullable:false})
    category?: InstanceType<typeof Category>;
    @Field(() => User, {nullable:false})
    author?: InstanceType<typeof User>;
}

@ArgsType()
export class UpdateManyPostArgs {
    @Field(() => PostUpdateManyMutationInput, {nullable:false})
    @Type(() => PostUpdateManyMutationInput)
    data!: InstanceType<typeof PostUpdateManyMutationInput>;
    @Field(() => PostWhereInput, {nullable:true})
    @Type(() => PostWhereInput)
    where?: InstanceType<typeof PostWhereInput>;
}

@ArgsType()
export class UpdateOnePostArgs {
    @Field(() => PostUpdateInput, {nullable:false})
    @Type(() => PostUpdateInput)
    data!: InstanceType<typeof PostUpdateInput>;
    @Field(() => PostWhereUniqueInput, {nullable:false})
    @Type(() => PostWhereUniqueInput)
    where!: InstanceType<typeof PostWhereUniqueInput>;
}

@ArgsType()
export class UpsertOnePostArgs {
    @Field(() => PostWhereUniqueInput, {nullable:false})
    @Type(() => PostWhereUniqueInput)
    where!: InstanceType<typeof PostWhereUniqueInput>;
    @Field(() => PostCreateInput, {nullable:false})
    @Type(() => PostCreateInput)
    create!: InstanceType<typeof PostCreateInput>;
    @Field(() => PostUpdateInput, {nullable:false})
    @Type(() => PostUpdateInput)
    update!: InstanceType<typeof PostUpdateInput>;
}

@ObjectType()
export class AffectedRows {
    @Field(() => Int, {nullable:false})
    count!: number;
}

@InputType()
export class DateTimeFieldUpdateOperationsInput {
    @Field(() => Date, {nullable:true})
    set?: Date | string;
}

@InputType()
export class DateTimeFilter {
    @Field(() => Date, {nullable:true})
    equals?: Date | string;
    @Field(() => [Date], {nullable:true})
    in?: Array<Date> | Array<string>;
    @Field(() => [Date], {nullable:true})
    notIn?: Array<Date> | Array<string>;
    @Field(() => Date, {nullable:true})
    lt?: Date | string;
    @Field(() => Date, {nullable:true})
    lte?: Date | string;
    @Field(() => Date, {nullable:true})
    gt?: Date | string;
    @Field(() => Date, {nullable:true})
    gte?: Date | string;
    @Field(() => NestedDateTimeFilter, {nullable:true})
    not?: InstanceType<typeof NestedDateTimeFilter>;
}

@InputType()
export class DateTimeWithAggregatesFilter {
    @Field(() => Date, {nullable:true})
    equals?: Date | string;
    @Field(() => [Date], {nullable:true})
    in?: Array<Date> | Array<string>;
    @Field(() => [Date], {nullable:true})
    notIn?: Array<Date> | Array<string>;
    @Field(() => Date, {nullable:true})
    lt?: Date | string;
    @Field(() => Date, {nullable:true})
    lte?: Date | string;
    @Field(() => Date, {nullable:true})
    gt?: Date | string;
    @Field(() => Date, {nullable:true})
    gte?: Date | string;
    @Field(() => NestedDateTimeWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedDateTimeWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedDateTimeFilter, {nullable:true})
    _min?: InstanceType<typeof NestedDateTimeFilter>;
    @Field(() => NestedDateTimeFilter, {nullable:true})
    _max?: InstanceType<typeof NestedDateTimeFilter>;
}

@InputType()
export class EnumRoleFieldUpdateOperationsInput {
    @Field(() => Role, {nullable:true})
    set?: keyof typeof Role;
}

@InputType()
export class EnumRoleFilter {
    @Field(() => Role, {nullable:true})
    equals?: keyof typeof Role;
    @Field(() => [Role], {nullable:true})
    in?: Array<keyof typeof Role>;
    @Field(() => [Role], {nullable:true})
    notIn?: Array<keyof typeof Role>;
    @Field(() => NestedEnumRoleFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumRoleFilter>;
}

@InputType()
export class EnumRoleWithAggregatesFilter {
    @Field(() => Role, {nullable:true})
    equals?: keyof typeof Role;
    @Field(() => [Role], {nullable:true})
    in?: Array<keyof typeof Role>;
    @Field(() => [Role], {nullable:true})
    notIn?: Array<keyof typeof Role>;
    @Field(() => NestedEnumRoleWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumRoleWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedEnumRoleFilter, {nullable:true})
    _min?: InstanceType<typeof NestedEnumRoleFilter>;
    @Field(() => NestedEnumRoleFilter, {nullable:true})
    _max?: InstanceType<typeof NestedEnumRoleFilter>;
}

@InputType()
export class IntFieldUpdateOperationsInput {
    @Field(() => Int, {nullable:true})
    set?: number;
    @Field(() => Int, {nullable:true})
    increment?: number;
    @Field(() => Int, {nullable:true})
    decrement?: number;
    @Field(() => Int, {nullable:true})
    multiply?: number;
    @Field(() => Int, {nullable:true})
    divide?: number;
}

@InputType()
export class IntFilter {
    @Field(() => Int, {nullable:true})
    equals?: number;
    @Field(() => [Int], {nullable:true})
    in?: Array<number>;
    @Field(() => [Int], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Int, {nullable:true})
    lt?: number;
    @Field(() => Int, {nullable:true})
    lte?: number;
    @Field(() => Int, {nullable:true})
    gt?: number;
    @Field(() => Int, {nullable:true})
    gte?: number;
    @Field(() => NestedIntFilter, {nullable:true})
    not?: InstanceType<typeof NestedIntFilter>;
}

@InputType()
export class IntWithAggregatesFilter {
    @Field(() => Int, {nullable:true})
    equals?: number;
    @Field(() => [Int], {nullable:true})
    in?: Array<number>;
    @Field(() => [Int], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Int, {nullable:true})
    lt?: number;
    @Field(() => Int, {nullable:true})
    lte?: number;
    @Field(() => Int, {nullable:true})
    gt?: number;
    @Field(() => Int, {nullable:true})
    gte?: number;
    @Field(() => NestedIntWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedIntWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedFloatFilter, {nullable:true})
    _avg?: InstanceType<typeof NestedFloatFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _sum?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _min?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _max?: InstanceType<typeof NestedIntFilter>;
}

@InputType()
export class NestedDateTimeFilter {
    @Field(() => Date, {nullable:true})
    equals?: Date | string;
    @Field(() => [Date], {nullable:true})
    in?: Array<Date> | Array<string>;
    @Field(() => [Date], {nullable:true})
    notIn?: Array<Date> | Array<string>;
    @Field(() => Date, {nullable:true})
    lt?: Date | string;
    @Field(() => Date, {nullable:true})
    lte?: Date | string;
    @Field(() => Date, {nullable:true})
    gt?: Date | string;
    @Field(() => Date, {nullable:true})
    gte?: Date | string;
    @Field(() => NestedDateTimeFilter, {nullable:true})
    not?: InstanceType<typeof NestedDateTimeFilter>;
}

@InputType()
export class NestedDateTimeWithAggregatesFilter {
    @Field(() => Date, {nullable:true})
    equals?: Date | string;
    @Field(() => [Date], {nullable:true})
    in?: Array<Date> | Array<string>;
    @Field(() => [Date], {nullable:true})
    notIn?: Array<Date> | Array<string>;
    @Field(() => Date, {nullable:true})
    lt?: Date | string;
    @Field(() => Date, {nullable:true})
    lte?: Date | string;
    @Field(() => Date, {nullable:true})
    gt?: Date | string;
    @Field(() => Date, {nullable:true})
    gte?: Date | string;
    @Field(() => NestedDateTimeWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedDateTimeWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedDateTimeFilter, {nullable:true})
    _min?: InstanceType<typeof NestedDateTimeFilter>;
    @Field(() => NestedDateTimeFilter, {nullable:true})
    _max?: InstanceType<typeof NestedDateTimeFilter>;
}

@InputType()
export class NestedEnumRoleFilter {
    @Field(() => Role, {nullable:true})
    equals?: keyof typeof Role;
    @Field(() => [Role], {nullable:true})
    in?: Array<keyof typeof Role>;
    @Field(() => [Role], {nullable:true})
    notIn?: Array<keyof typeof Role>;
    @Field(() => NestedEnumRoleFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumRoleFilter>;
}

@InputType()
export class NestedEnumRoleWithAggregatesFilter {
    @Field(() => Role, {nullable:true})
    equals?: keyof typeof Role;
    @Field(() => [Role], {nullable:true})
    in?: Array<keyof typeof Role>;
    @Field(() => [Role], {nullable:true})
    notIn?: Array<keyof typeof Role>;
    @Field(() => NestedEnumRoleWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumRoleWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedEnumRoleFilter, {nullable:true})
    _min?: InstanceType<typeof NestedEnumRoleFilter>;
    @Field(() => NestedEnumRoleFilter, {nullable:true})
    _max?: InstanceType<typeof NestedEnumRoleFilter>;
}

@InputType()
export class NestedFloatFilter {
    @Field(() => Float, {nullable:true})
    equals?: number;
    @Field(() => [Float], {nullable:true})
    in?: Array<number>;
    @Field(() => [Float], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Float, {nullable:true})
    lt?: number;
    @Field(() => Float, {nullable:true})
    lte?: number;
    @Field(() => Float, {nullable:true})
    gt?: number;
    @Field(() => Float, {nullable:true})
    gte?: number;
    @Field(() => NestedFloatFilter, {nullable:true})
    not?: InstanceType<typeof NestedFloatFilter>;
}

@InputType()
export class NestedIntFilter {
    @Field(() => Int, {nullable:true})
    equals?: number;
    @Field(() => [Int], {nullable:true})
    in?: Array<number>;
    @Field(() => [Int], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Int, {nullable:true})
    lt?: number;
    @Field(() => Int, {nullable:true})
    lte?: number;
    @Field(() => Int, {nullable:true})
    gt?: number;
    @Field(() => Int, {nullable:true})
    gte?: number;
    @Field(() => NestedIntFilter, {nullable:true})
    not?: InstanceType<typeof NestedIntFilter>;
}

@InputType()
export class NestedIntNullableFilter {
    @Field(() => Int, {nullable:true})
    equals?: number;
    @Field(() => [Int], {nullable:true})
    in?: Array<number>;
    @Field(() => [Int], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Int, {nullable:true})
    lt?: number;
    @Field(() => Int, {nullable:true})
    lte?: number;
    @Field(() => Int, {nullable:true})
    gt?: number;
    @Field(() => Int, {nullable:true})
    gte?: number;
    @Field(() => NestedIntNullableFilter, {nullable:true})
    not?: InstanceType<typeof NestedIntNullableFilter>;
}

@InputType()
export class NestedIntWithAggregatesFilter {
    @Field(() => Int, {nullable:true})
    equals?: number;
    @Field(() => [Int], {nullable:true})
    in?: Array<number>;
    @Field(() => [Int], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Int, {nullable:true})
    lt?: number;
    @Field(() => Int, {nullable:true})
    lte?: number;
    @Field(() => Int, {nullable:true})
    gt?: number;
    @Field(() => Int, {nullable:true})
    gte?: number;
    @Field(() => NestedIntWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedIntWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedFloatFilter, {nullable:true})
    _avg?: InstanceType<typeof NestedFloatFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _sum?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _min?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _max?: InstanceType<typeof NestedIntFilter>;
}

@InputType()
export class NestedStringFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => String, {nullable:true})
    contains?: string;
    @Field(() => String, {nullable:true})
    startsWith?: string;
    @Field(() => String, {nullable:true})
    endsWith?: string;
    @Field(() => NestedStringFilter, {nullable:true})
    not?: InstanceType<typeof NestedStringFilter>;
}

@InputType()
export class NestedStringNullableFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => String, {nullable:true})
    contains?: string;
    @Field(() => String, {nullable:true})
    startsWith?: string;
    @Field(() => String, {nullable:true})
    endsWith?: string;
    @Field(() => NestedStringNullableFilter, {nullable:true})
    not?: InstanceType<typeof NestedStringNullableFilter>;
}

@InputType()
export class NestedStringNullableWithAggregatesFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => String, {nullable:true})
    contains?: string;
    @Field(() => String, {nullable:true})
    startsWith?: string;
    @Field(() => String, {nullable:true})
    endsWith?: string;
    @Field(() => NestedStringNullableWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedStringNullableWithAggregatesFilter>;
    @Field(() => NestedIntNullableFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntNullableFilter>;
    @Field(() => NestedStringNullableFilter, {nullable:true})
    _min?: InstanceType<typeof NestedStringNullableFilter>;
    @Field(() => NestedStringNullableFilter, {nullable:true})
    _max?: InstanceType<typeof NestedStringNullableFilter>;
}

@InputType()
export class NestedStringWithAggregatesFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => String, {nullable:true})
    contains?: string;
    @Field(() => String, {nullable:true})
    startsWith?: string;
    @Field(() => String, {nullable:true})
    endsWith?: string;
    @Field(() => NestedStringWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedStringWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedStringFilter, {nullable:true})
    _min?: InstanceType<typeof NestedStringFilter>;
    @Field(() => NestedStringFilter, {nullable:true})
    _max?: InstanceType<typeof NestedStringFilter>;
}

@InputType()
export class NullableStringFieldUpdateOperationsInput {
    @Field(() => String, {nullable:true})
    set?: string;
}

@InputType()
export class StringFieldUpdateOperationsInput {
    @Field(() => String, {nullable:true})
    set?: string;
}

@InputType()
export class StringFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => String, {nullable:true})
    contains?: string;
    @Field(() => String, {nullable:true})
    startsWith?: string;
    @Field(() => String, {nullable:true})
    endsWith?: string;
    @Field(() => QueryMode, {nullable:true})
    mode?: keyof typeof QueryMode;
    @Field(() => NestedStringFilter, {nullable:true})
    not?: InstanceType<typeof NestedStringFilter>;
}

@InputType()
export class StringNullableFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => String, {nullable:true})
    contains?: string;
    @Field(() => String, {nullable:true})
    startsWith?: string;
    @Field(() => String, {nullable:true})
    endsWith?: string;
    @Field(() => QueryMode, {nullable:true})
    mode?: keyof typeof QueryMode;
    @Field(() => NestedStringNullableFilter, {nullable:true})
    not?: InstanceType<typeof NestedStringNullableFilter>;
}

@InputType()
export class StringNullableWithAggregatesFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => String, {nullable:true})
    contains?: string;
    @Field(() => String, {nullable:true})
    startsWith?: string;
    @Field(() => String, {nullable:true})
    endsWith?: string;
    @Field(() => QueryMode, {nullable:true})
    mode?: keyof typeof QueryMode;
    @Field(() => NestedStringNullableWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedStringNullableWithAggregatesFilter>;
    @Field(() => NestedIntNullableFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntNullableFilter>;
    @Field(() => NestedStringNullableFilter, {nullable:true})
    _min?: InstanceType<typeof NestedStringNullableFilter>;
    @Field(() => NestedStringNullableFilter, {nullable:true})
    _max?: InstanceType<typeof NestedStringNullableFilter>;
}

@InputType()
export class StringWithAggregatesFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => String, {nullable:true})
    contains?: string;
    @Field(() => String, {nullable:true})
    startsWith?: string;
    @Field(() => String, {nullable:true})
    endsWith?: string;
    @Field(() => QueryMode, {nullable:true})
    mode?: keyof typeof QueryMode;
    @Field(() => NestedStringWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedStringWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedStringFilter, {nullable:true})
    _min?: InstanceType<typeof NestedStringFilter>;
    @Field(() => NestedStringFilter, {nullable:true})
    _max?: InstanceType<typeof NestedStringFilter>;
}

@ObjectType()
export class AggregateUser {
    @Field(() => UserCountAggregate, {nullable:true})
    _count?: InstanceType<typeof UserCountAggregate>;
    @Field(() => UserMinAggregate, {nullable:true})
    _min?: InstanceType<typeof UserMinAggregate>;
    @Field(() => UserMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof UserMaxAggregate>;
}

@ArgsType()
export class CreateManyUserArgs {
    @Field(() => [UserCreateManyInput], {nullable:false})
    @Type(() => UserCreateManyInput)
    data!: Array<UserCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneUserArgs {
    @Field(() => UserCreateInput, {nullable:false})
    @Type(() => UserCreateInput)
    data!: InstanceType<typeof UserCreateInput>;
}

@ArgsType()
export class DeleteManyUserArgs {
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: InstanceType<typeof UserWhereInput>;
}

@ArgsType()
export class DeleteOneUserArgs {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: InstanceType<typeof UserWhereUniqueInput>;
}

@ArgsType()
export class FindFirstUserOrThrowArgs {
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: InstanceType<typeof UserWhereInput>;
    @Field(() => [UserOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UserOrderByWithRelationInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof UserWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [UserScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof UserScalarFieldEnum>;
}

@ArgsType()
export class FindFirstUserArgs {
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: InstanceType<typeof UserWhereInput>;
    @Field(() => [UserOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UserOrderByWithRelationInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof UserWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [UserScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof UserScalarFieldEnum>;
}

@ArgsType()
export class FindManyUserArgs {
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: InstanceType<typeof UserWhereInput>;
    @Field(() => [UserOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UserOrderByWithRelationInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof UserWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [UserScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof UserScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueUserOrThrowArgs {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: InstanceType<typeof UserWhereUniqueInput>;
}

@ArgsType()
export class FindUniqueUserArgs {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: InstanceType<typeof UserWhereUniqueInput>;
}

@ArgsType()
export class UpdateManyUserArgs {
    @Field(() => UserUpdateManyMutationInput, {nullable:false})
    @Type(() => UserUpdateManyMutationInput)
    data!: InstanceType<typeof UserUpdateManyMutationInput>;
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: InstanceType<typeof UserWhereInput>;
}

@ArgsType()
export class UpdateOneUserArgs {
    @Field(() => UserUpdateInput, {nullable:false})
    @Type(() => UserUpdateInput)
    data!: InstanceType<typeof UserUpdateInput>;
    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: InstanceType<typeof UserWhereUniqueInput>;
}

@ArgsType()
export class UpsertOneUserArgs {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: InstanceType<typeof UserWhereUniqueInput>;
    @Field(() => UserCreateInput, {nullable:false})
    @Type(() => UserCreateInput)
    create!: InstanceType<typeof UserCreateInput>;
    @Field(() => UserUpdateInput, {nullable:false})
    @Type(() => UserUpdateInput)
    update!: InstanceType<typeof UserUpdateInput>;
}

@ArgsType()
export class UserAggregateArgs {
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: InstanceType<typeof UserWhereInput>;
    @Field(() => [UserOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UserOrderByWithRelationInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof UserWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => UserCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof UserCountAggregateInput>;
    @Field(() => UserMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof UserMinAggregateInput>;
    @Field(() => UserMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof UserMaxAggregateInput>;
}

@InputType()
export class UserCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    email?: true;
    @Field(() => Boolean, {nullable:true})
    password?: true;
    @Field(() => Boolean, {nullable:true})
    role?: true;
    @Field(() => Boolean, {nullable:true})
    avatar?: Upload.Upload;
    @Field(() => Boolean, {nullable:true})
    createAt?: true;
    @Field(() => Boolean, {nullable:true})
    updateAt?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class UserCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    name!: number;
    @Field(() => Int, {nullable:false})
    email!: number;
    @Field(() => Int, {nullable:false})
    password!: number;
    @Field(() => Int, {nullable:false})
    role!: number;
    @Field(() => Int, {nullable:false})
    avatar!: number;
    @Field(() => Int, {nullable:false})
    createAt!: number;
    @Field(() => Int, {nullable:false})
    updateAt!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class UserCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    password?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    role?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    avatar?: Upload.Upload;
    @Field(() => SortOrder, {nullable:true})
    createAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updateAt?: keyof typeof SortOrder;
}

@ObjectType()
export class UserCount {
    @Field(() => Int, {nullable:false})
    Download?: number;
    @Field(() => Int, {nullable:false})
    Page?: number;
    @Field(() => Int, {nullable:false})
    Post?: number;
}

@InputType()
export class UserCreateManyInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.MinLength(3)
    name!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsEmail()
    email!: string;
    @Field(() => String, {nullable:false})
    password!: string;
    @Field(() => Role, {nullable:true})
    role?: keyof typeof Role;
    @Field(() => Upload.GraphQLUpload, {nullable:true})
    avatar?: Upload.Upload;
    @Field(() => Date, {nullable:true})
    createAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updateAt?: Date | string;
}

@InputType()
export class UserCreateNestedOneWithoutDownloadInput {
    @Field(() => UserCreateWithoutDownloadInput, {nullable:true})
    @Type(() => UserCreateWithoutDownloadInput)
    create?: InstanceType<typeof UserCreateWithoutDownloadInput>;
    @Field(() => UserCreateOrConnectWithoutDownloadInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutDownloadInput)
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutDownloadInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: InstanceType<typeof UserWhereUniqueInput>;
}

@InputType()
export class UserCreateNestedOneWithoutPageInput {
    @Field(() => UserCreateWithoutPageInput, {nullable:true})
    @Type(() => UserCreateWithoutPageInput)
    create?: InstanceType<typeof UserCreateWithoutPageInput>;
    @Field(() => UserCreateOrConnectWithoutPageInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutPageInput)
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutPageInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: InstanceType<typeof UserWhereUniqueInput>;
}

@InputType()
export class UserCreateNestedOneWithoutPostInput {
    @Field(() => UserCreateWithoutPostInput, {nullable:true})
    @Type(() => UserCreateWithoutPostInput)
    create?: InstanceType<typeof UserCreateWithoutPostInput>;
    @Field(() => UserCreateOrConnectWithoutPostInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutPostInput)
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutPostInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: InstanceType<typeof UserWhereUniqueInput>;
}

@InputType()
export class UserCreateOrConnectWithoutDownloadInput {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: InstanceType<typeof UserWhereUniqueInput>;
    @Field(() => UserCreateWithoutDownloadInput, {nullable:false})
    @Type(() => UserCreateWithoutDownloadInput)
    create!: InstanceType<typeof UserCreateWithoutDownloadInput>;
}

@InputType()
export class UserCreateOrConnectWithoutPageInput {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: InstanceType<typeof UserWhereUniqueInput>;
    @Field(() => UserCreateWithoutPageInput, {nullable:false})
    @Type(() => UserCreateWithoutPageInput)
    create!: InstanceType<typeof UserCreateWithoutPageInput>;
}

@InputType()
export class UserCreateOrConnectWithoutPostInput {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: InstanceType<typeof UserWhereUniqueInput>;
    @Field(() => UserCreateWithoutPostInput, {nullable:false})
    @Type(() => UserCreateWithoutPostInput)
    create!: InstanceType<typeof UserCreateWithoutPostInput>;
}

@InputType()
export class UserCreateWithoutDownloadInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.MinLength(3)
    name!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsEmail()
    email!: string;
    @Field(() => String, {nullable:false})
    password!: string;
    @Field(() => Role, {nullable:true})
    role?: keyof typeof Role;
    @Field(() => Upload.GraphQLUpload, {nullable:true})
    avatar?: Upload.Upload;
    @Field(() => Date, {nullable:true})
    createAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updateAt?: Date | string;
    @Field(() => PageCreateNestedManyWithoutAuthorInput, {nullable:true})
    Page?: InstanceType<typeof PageCreateNestedManyWithoutAuthorInput>;
    @Field(() => PostCreateNestedManyWithoutAuthorInput, {nullable:true})
    Post?: InstanceType<typeof PostCreateNestedManyWithoutAuthorInput>;
}

@InputType()
export class UserCreateWithoutPageInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.MinLength(3)
    name!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsEmail()
    email!: string;
    @Field(() => String, {nullable:false})
    password!: string;
    @Field(() => Role, {nullable:true})
    role?: keyof typeof Role;
    @Field(() => Upload.GraphQLUpload, {nullable:true})
    avatar?: Upload.Upload;
    @Field(() => Date, {nullable:true})
    createAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updateAt?: Date | string;
    @Field(() => DownloadCreateNestedManyWithoutAuthorInput, {nullable:true})
    Download?: InstanceType<typeof DownloadCreateNestedManyWithoutAuthorInput>;
    @Field(() => PostCreateNestedManyWithoutAuthorInput, {nullable:true})
    Post?: InstanceType<typeof PostCreateNestedManyWithoutAuthorInput>;
}

@InputType()
export class UserCreateWithoutPostInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.MinLength(3)
    name!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsEmail()
    email!: string;
    @Field(() => String, {nullable:false})
    password!: string;
    @Field(() => Role, {nullable:true})
    role?: keyof typeof Role;
    @Field(() => Upload.GraphQLUpload, {nullable:true})
    avatar?: Upload.Upload;
    @Field(() => Date, {nullable:true})
    createAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updateAt?: Date | string;
    @Field(() => DownloadCreateNestedManyWithoutAuthorInput, {nullable:true})
    Download?: InstanceType<typeof DownloadCreateNestedManyWithoutAuthorInput>;
    @Field(() => PageCreateNestedManyWithoutAuthorInput, {nullable:true})
    Page?: InstanceType<typeof PageCreateNestedManyWithoutAuthorInput>;
}

@InputType()
export class UserCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.MinLength(3)
    name!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsEmail()
    email!: string;
    @Field(() => String, {nullable:false})
    password!: string;
    @Field(() => Role, {nullable:true})
    role?: keyof typeof Role;
    @Field(() => Upload.GraphQLUpload, {nullable:true})
    avatar?: Upload.Upload;
    @Field(() => Date, {nullable:true})
    createAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updateAt?: Date | string;
    @Field(() => DownloadCreateNestedManyWithoutAuthorInput, {nullable:true})
    Download?: InstanceType<typeof DownloadCreateNestedManyWithoutAuthorInput>;
    @Field(() => PageCreateNestedManyWithoutAuthorInput, {nullable:true})
    Page?: InstanceType<typeof PageCreateNestedManyWithoutAuthorInput>;
    @Field(() => PostCreateNestedManyWithoutAuthorInput, {nullable:true})
    Post?: InstanceType<typeof PostCreateNestedManyWithoutAuthorInput>;
}

@ArgsType()
export class UserGroupByArgs {
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: InstanceType<typeof UserWhereInput>;
    @Field(() => [UserOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<UserOrderByWithAggregationInput>;
    @Field(() => [UserScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof UserScalarFieldEnum>;
    @Field(() => UserScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof UserScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => UserCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof UserCountAggregateInput>;
    @Field(() => UserMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof UserMinAggregateInput>;
    @Field(() => UserMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof UserMaxAggregateInput>;
}

@ObjectType()
export class UserGroupBy {
    @Field(() => String, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:false})
    password!: string;
    @Field(() => Role, {nullable:false})
    role!: keyof typeof Role;
    @Field(() => String, {nullable:false})
    avatar!: string;
    @Field(() => Date, {nullable:false})
    createAt!: Date | string;
    @Field(() => Date, {nullable:false})
    updateAt!: Date | string;
    @Field(() => UserCountAggregate, {nullable:true})
    _count?: InstanceType<typeof UserCountAggregate>;
    @Field(() => UserMinAggregate, {nullable:true})
    _min?: InstanceType<typeof UserMinAggregate>;
    @Field(() => UserMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof UserMaxAggregate>;
}

@InputType()
export class UserMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    email?: true;
    @Field(() => Boolean, {nullable:true})
    password?: true;
    @Field(() => Boolean, {nullable:true})
    role?: true;
    @Field(() => Boolean, {nullable:true})
    avatar?: Upload.Upload;
    @Field(() => Boolean, {nullable:true})
    createAt?: true;
    @Field(() => Boolean, {nullable:true})
    updateAt?: true;
}

@ObjectType()
export class UserMaxAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => String, {nullable:true})
    email?: string;
    @Field(() => String, {nullable:true})
    password?: string;
    @Field(() => Role, {nullable:true})
    role?: keyof typeof Role;
    @Field(() => String, {nullable:true})
    avatar?: string;
    @Field(() => Date, {nullable:true})
    createAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updateAt?: Date | string;
}

@InputType()
export class UserMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    password?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    role?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    avatar?: Upload.Upload;
    @Field(() => SortOrder, {nullable:true})
    createAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updateAt?: keyof typeof SortOrder;
}

@InputType()
export class UserMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    email?: true;
    @Field(() => Boolean, {nullable:true})
    password?: true;
    @Field(() => Boolean, {nullable:true})
    role?: true;
    @Field(() => Boolean, {nullable:true})
    avatar?: Upload.Upload;
    @Field(() => Boolean, {nullable:true})
    createAt?: true;
    @Field(() => Boolean, {nullable:true})
    updateAt?: true;
}

@ObjectType()
export class UserMinAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => String, {nullable:true})
    email?: string;
    @Field(() => String, {nullable:true})
    password?: string;
    @Field(() => Role, {nullable:true})
    role?: keyof typeof Role;
    @Field(() => String, {nullable:true})
    avatar?: string;
    @Field(() => Date, {nullable:true})
    createAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updateAt?: Date | string;
}

@InputType()
export class UserMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    password?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    role?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    avatar?: Upload.Upload;
    @Field(() => SortOrder, {nullable:true})
    createAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updateAt?: keyof typeof SortOrder;
}

@InputType()
export class UserOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    password?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    role?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    avatar?: Upload.Upload;
    @Field(() => SortOrder, {nullable:true})
    createAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updateAt?: keyof typeof SortOrder;
    @Field(() => UserCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof UserCountOrderByAggregateInput>;
    @Field(() => UserMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof UserMaxOrderByAggregateInput>;
    @Field(() => UserMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof UserMinOrderByAggregateInput>;
}

@InputType()
export class UserOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    password?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    role?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    avatar?: Upload.Upload;
    @Field(() => SortOrder, {nullable:true})
    createAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updateAt?: keyof typeof SortOrder;
    @Field(() => DownloadOrderByRelationAggregateInput, {nullable:true})
    Download?: InstanceType<typeof DownloadOrderByRelationAggregateInput>;
    @Field(() => PageOrderByRelationAggregateInput, {nullable:true})
    Page?: InstanceType<typeof PageOrderByRelationAggregateInput>;
    @Field(() => PostOrderByRelationAggregateInput, {nullable:true})
    Post?: InstanceType<typeof PostOrderByRelationAggregateInput>;
}

@InputType()
export class UserRelationFilter {
    @Field(() => UserWhereInput, {nullable:true})
    is?: InstanceType<typeof UserWhereInput>;
    @Field(() => UserWhereInput, {nullable:true})
    isNot?: InstanceType<typeof UserWhereInput>;
}

@InputType()
export class UserScalarWhereWithAggregatesInput {
    @Field(() => [UserScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<UserScalarWhereWithAggregatesInput>;
    @Field(() => [UserScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<UserScalarWhereWithAggregatesInput>;
    @Field(() => [UserScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<UserScalarWhereWithAggregatesInput>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    email?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    password?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => EnumRoleWithAggregatesFilter, {nullable:true})
    role?: InstanceType<typeof EnumRoleWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    avatar?: InstanceType<typeof Upload.Upload>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updateAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}

@InputType()
export class UserUncheckedCreateWithoutDownloadInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.MinLength(3)
    name!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsEmail()
    email!: string;
    @Field(() => String, {nullable:false})
    password!: string;
    @Field(() => Role, {nullable:true})
    role?: keyof typeof Role;
    @Field(() => Upload.GraphQLUpload, {nullable:true})
    avatar?: Upload.Upload;
    @Field(() => Date, {nullable:true})
    createAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updateAt?: Date | string;
    @Field(() => PageUncheckedCreateNestedManyWithoutAuthorInput, {nullable:true})
    Page?: InstanceType<typeof PageUncheckedCreateNestedManyWithoutAuthorInput>;
    @Field(() => PostUncheckedCreateNestedManyWithoutAuthorInput, {nullable:true})
    Post?: InstanceType<typeof PostUncheckedCreateNestedManyWithoutAuthorInput>;
}

@InputType()
export class UserUncheckedCreateWithoutPageInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.MinLength(3)
    name!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsEmail()
    email!: string;
    @Field(() => String, {nullable:false})
    password!: string;
    @Field(() => Role, {nullable:true})
    role?: keyof typeof Role;
    @Field(() => Upload.GraphQLUpload, {nullable:true})
    avatar?: Upload.Upload;
    @Field(() => Date, {nullable:true})
    createAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updateAt?: Date | string;
    @Field(() => DownloadUncheckedCreateNestedManyWithoutAuthorInput, {nullable:true})
    Download?: InstanceType<typeof DownloadUncheckedCreateNestedManyWithoutAuthorInput>;
    @Field(() => PostUncheckedCreateNestedManyWithoutAuthorInput, {nullable:true})
    Post?: InstanceType<typeof PostUncheckedCreateNestedManyWithoutAuthorInput>;
}

@InputType()
export class UserUncheckedCreateWithoutPostInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.MinLength(3)
    name!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsEmail()
    email!: string;
    @Field(() => String, {nullable:false})
    password!: string;
    @Field(() => Role, {nullable:true})
    role?: keyof typeof Role;
    @Field(() => Upload.GraphQLUpload, {nullable:true})
    avatar?: Upload.Upload;
    @Field(() => Date, {nullable:true})
    createAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updateAt?: Date | string;
    @Field(() => DownloadUncheckedCreateNestedManyWithoutAuthorInput, {nullable:true})
    Download?: InstanceType<typeof DownloadUncheckedCreateNestedManyWithoutAuthorInput>;
    @Field(() => PageUncheckedCreateNestedManyWithoutAuthorInput, {nullable:true})
    Page?: InstanceType<typeof PageUncheckedCreateNestedManyWithoutAuthorInput>;
}

@InputType()
export class UserUncheckedCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.MinLength(3)
    name!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsEmail()
    email!: string;
    @Field(() => String, {nullable:false})
    password!: string;
    @Field(() => Role, {nullable:true})
    role?: keyof typeof Role;
    @Field(() => Upload.GraphQLUpload, {nullable:true})
    avatar?: Upload.Upload;
    @Field(() => Date, {nullable:true})
    createAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updateAt?: Date | string;
    @Field(() => DownloadUncheckedCreateNestedManyWithoutAuthorInput, {nullable:true})
    Download?: InstanceType<typeof DownloadUncheckedCreateNestedManyWithoutAuthorInput>;
    @Field(() => PageUncheckedCreateNestedManyWithoutAuthorInput, {nullable:true})
    Page?: InstanceType<typeof PageUncheckedCreateNestedManyWithoutAuthorInput>;
    @Field(() => PostUncheckedCreateNestedManyWithoutAuthorInput, {nullable:true})
    Post?: InstanceType<typeof PostUncheckedCreateNestedManyWithoutAuthorInput>;
}

@InputType()
export class UserUncheckedUpdateManyInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => EnumRoleFieldUpdateOperationsInput, {nullable:true})
    role?: InstanceType<typeof EnumRoleFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    avatar?: InstanceType<typeof Upload.Upload>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updateAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class UserUncheckedUpdateWithoutDownloadInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => EnumRoleFieldUpdateOperationsInput, {nullable:true})
    role?: InstanceType<typeof EnumRoleFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    avatar?: InstanceType<typeof Upload.Upload>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updateAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => PageUncheckedUpdateManyWithoutAuthorNestedInput, {nullable:true})
    Page?: InstanceType<typeof PageUncheckedUpdateManyWithoutAuthorNestedInput>;
    @Field(() => PostUncheckedUpdateManyWithoutAuthorNestedInput, {nullable:true})
    Post?: InstanceType<typeof PostUncheckedUpdateManyWithoutAuthorNestedInput>;
}

@InputType()
export class UserUncheckedUpdateWithoutPageInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => EnumRoleFieldUpdateOperationsInput, {nullable:true})
    role?: InstanceType<typeof EnumRoleFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    avatar?: InstanceType<typeof Upload.Upload>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updateAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DownloadUncheckedUpdateManyWithoutAuthorNestedInput, {nullable:true})
    Download?: InstanceType<typeof DownloadUncheckedUpdateManyWithoutAuthorNestedInput>;
    @Field(() => PostUncheckedUpdateManyWithoutAuthorNestedInput, {nullable:true})
    Post?: InstanceType<typeof PostUncheckedUpdateManyWithoutAuthorNestedInput>;
}

@InputType()
export class UserUncheckedUpdateWithoutPostInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => EnumRoleFieldUpdateOperationsInput, {nullable:true})
    role?: InstanceType<typeof EnumRoleFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    avatar?: InstanceType<typeof Upload.Upload>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updateAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DownloadUncheckedUpdateManyWithoutAuthorNestedInput, {nullable:true})
    Download?: InstanceType<typeof DownloadUncheckedUpdateManyWithoutAuthorNestedInput>;
    @Field(() => PageUncheckedUpdateManyWithoutAuthorNestedInput, {nullable:true})
    Page?: InstanceType<typeof PageUncheckedUpdateManyWithoutAuthorNestedInput>;
}

@InputType()
export class UserUncheckedUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => EnumRoleFieldUpdateOperationsInput, {nullable:true})
    role?: InstanceType<typeof EnumRoleFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    avatar?: InstanceType<typeof Upload.Upload>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updateAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DownloadUncheckedUpdateManyWithoutAuthorNestedInput, {nullable:true})
    Download?: InstanceType<typeof DownloadUncheckedUpdateManyWithoutAuthorNestedInput>;
    @Field(() => PageUncheckedUpdateManyWithoutAuthorNestedInput, {nullable:true})
    Page?: InstanceType<typeof PageUncheckedUpdateManyWithoutAuthorNestedInput>;
    @Field(() => PostUncheckedUpdateManyWithoutAuthorNestedInput, {nullable:true})
    Post?: InstanceType<typeof PostUncheckedUpdateManyWithoutAuthorNestedInput>;
}

@InputType()
export class UserUpdateManyMutationInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => EnumRoleFieldUpdateOperationsInput, {nullable:true})
    role?: InstanceType<typeof EnumRoleFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    avatar?: InstanceType<typeof Upload.Upload>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updateAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class UserUpdateOneRequiredWithoutDownloadNestedInput {
    @Field(() => UserCreateWithoutDownloadInput, {nullable:true})
    @Type(() => UserCreateWithoutDownloadInput)
    create?: InstanceType<typeof UserCreateWithoutDownloadInput>;
    @Field(() => UserCreateOrConnectWithoutDownloadInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutDownloadInput)
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutDownloadInput>;
    @Field(() => UserUpsertWithoutDownloadInput, {nullable:true})
    @Type(() => UserUpsertWithoutDownloadInput)
    upsert?: InstanceType<typeof UserUpsertWithoutDownloadInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: InstanceType<typeof UserWhereUniqueInput>;
    @Field(() => UserUpdateWithoutDownloadInput, {nullable:true})
    @Type(() => UserUpdateWithoutDownloadInput)
    update?: InstanceType<typeof UserUpdateWithoutDownloadInput>;
}

@InputType()
export class UserUpdateOneRequiredWithoutPageNestedInput {
    @Field(() => UserCreateWithoutPageInput, {nullable:true})
    @Type(() => UserCreateWithoutPageInput)
    create?: InstanceType<typeof UserCreateWithoutPageInput>;
    @Field(() => UserCreateOrConnectWithoutPageInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutPageInput)
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutPageInput>;
    @Field(() => UserUpsertWithoutPageInput, {nullable:true})
    @Type(() => UserUpsertWithoutPageInput)
    upsert?: InstanceType<typeof UserUpsertWithoutPageInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: InstanceType<typeof UserWhereUniqueInput>;
    @Field(() => UserUpdateWithoutPageInput, {nullable:true})
    @Type(() => UserUpdateWithoutPageInput)
    update?: InstanceType<typeof UserUpdateWithoutPageInput>;
}

@InputType()
export class UserUpdateOneRequiredWithoutPostNestedInput {
    @Field(() => UserCreateWithoutPostInput, {nullable:true})
    @Type(() => UserCreateWithoutPostInput)
    create?: InstanceType<typeof UserCreateWithoutPostInput>;
    @Field(() => UserCreateOrConnectWithoutPostInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutPostInput)
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutPostInput>;
    @Field(() => UserUpsertWithoutPostInput, {nullable:true})
    @Type(() => UserUpsertWithoutPostInput)
    upsert?: InstanceType<typeof UserUpsertWithoutPostInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: InstanceType<typeof UserWhereUniqueInput>;
    @Field(() => UserUpdateWithoutPostInput, {nullable:true})
    @Type(() => UserUpdateWithoutPostInput)
    update?: InstanceType<typeof UserUpdateWithoutPostInput>;
}

@InputType()
export class UserUpdateWithoutDownloadInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => EnumRoleFieldUpdateOperationsInput, {nullable:true})
    role?: InstanceType<typeof EnumRoleFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    avatar?: InstanceType<typeof Upload.Upload>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updateAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => PageUpdateManyWithoutAuthorNestedInput, {nullable:true})
    Page?: InstanceType<typeof PageUpdateManyWithoutAuthorNestedInput>;
    @Field(() => PostUpdateManyWithoutAuthorNestedInput, {nullable:true})
    Post?: InstanceType<typeof PostUpdateManyWithoutAuthorNestedInput>;
}

@InputType()
export class UserUpdateWithoutPageInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => EnumRoleFieldUpdateOperationsInput, {nullable:true})
    role?: InstanceType<typeof EnumRoleFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    avatar?: InstanceType<typeof Upload.Upload>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updateAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DownloadUpdateManyWithoutAuthorNestedInput, {nullable:true})
    Download?: InstanceType<typeof DownloadUpdateManyWithoutAuthorNestedInput>;
    @Field(() => PostUpdateManyWithoutAuthorNestedInput, {nullable:true})
    Post?: InstanceType<typeof PostUpdateManyWithoutAuthorNestedInput>;
}

@InputType()
export class UserUpdateWithoutPostInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => EnumRoleFieldUpdateOperationsInput, {nullable:true})
    role?: InstanceType<typeof EnumRoleFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    avatar?: InstanceType<typeof Upload.Upload>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updateAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DownloadUpdateManyWithoutAuthorNestedInput, {nullable:true})
    Download?: InstanceType<typeof DownloadUpdateManyWithoutAuthorNestedInput>;
    @Field(() => PageUpdateManyWithoutAuthorNestedInput, {nullable:true})
    Page?: InstanceType<typeof PageUpdateManyWithoutAuthorNestedInput>;
}

@InputType()
export class UserUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => EnumRoleFieldUpdateOperationsInput, {nullable:true})
    role?: InstanceType<typeof EnumRoleFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    avatar?: InstanceType<typeof Upload.Upload>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updateAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DownloadUpdateManyWithoutAuthorNestedInput, {nullable:true})
    Download?: InstanceType<typeof DownloadUpdateManyWithoutAuthorNestedInput>;
    @Field(() => PageUpdateManyWithoutAuthorNestedInput, {nullable:true})
    Page?: InstanceType<typeof PageUpdateManyWithoutAuthorNestedInput>;
    @Field(() => PostUpdateManyWithoutAuthorNestedInput, {nullable:true})
    Post?: InstanceType<typeof PostUpdateManyWithoutAuthorNestedInput>;
}

@InputType()
export class UserUpsertWithoutDownloadInput {
    @Field(() => UserUpdateWithoutDownloadInput, {nullable:false})
    @Type(() => UserUpdateWithoutDownloadInput)
    update!: InstanceType<typeof UserUpdateWithoutDownloadInput>;
    @Field(() => UserCreateWithoutDownloadInput, {nullable:false})
    @Type(() => UserCreateWithoutDownloadInput)
    create!: InstanceType<typeof UserCreateWithoutDownloadInput>;
}

@InputType()
export class UserUpsertWithoutPageInput {
    @Field(() => UserUpdateWithoutPageInput, {nullable:false})
    @Type(() => UserUpdateWithoutPageInput)
    update!: InstanceType<typeof UserUpdateWithoutPageInput>;
    @Field(() => UserCreateWithoutPageInput, {nullable:false})
    @Type(() => UserCreateWithoutPageInput)
    create!: InstanceType<typeof UserCreateWithoutPageInput>;
}

@InputType()
export class UserUpsertWithoutPostInput {
    @Field(() => UserUpdateWithoutPostInput, {nullable:false})
    @Type(() => UserUpdateWithoutPostInput)
    update!: InstanceType<typeof UserUpdateWithoutPostInput>;
    @Field(() => UserCreateWithoutPostInput, {nullable:false})
    @Type(() => UserCreateWithoutPostInput)
    create!: InstanceType<typeof UserCreateWithoutPostInput>;
}

@InputType()
export class UserWhereUniqueInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsEmail()
    email?: string;
}

@InputType()
export class UserWhereInput {
    @Field(() => [UserWhereInput], {nullable:true})
    AND?: Array<UserWhereInput>;
    @Field(() => [UserWhereInput], {nullable:true})
    OR?: Array<UserWhereInput>;
    @Field(() => [UserWhereInput], {nullable:true})
    NOT?: Array<UserWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    name?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    email?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    password?: InstanceType<typeof StringFilter>;
    @Field(() => EnumRoleFilter, {nullable:true})
    role?: InstanceType<typeof EnumRoleFilter>;
    @Field(() => StringFilter, {nullable:true})
    avatar?: InstanceType<typeof Upload.Upload>;
    @Field(() => DateTimeFilter, {nullable:true})
    createAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updateAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DownloadListRelationFilter, {nullable:true})
    Download?: InstanceType<typeof DownloadListRelationFilter>;
    @Field(() => PageListRelationFilter, {nullable:true})
    Page?: InstanceType<typeof PageListRelationFilter>;
    @Field(() => PostListRelationFilter, {nullable:true})
    Post?: InstanceType<typeof PostListRelationFilter>;
}

@ObjectType()
export class User {
    @Field(() => ID, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:false})
    password!: string;
    @Field(() => Role, {nullable:false,defaultValue:'USER'})
    role!: keyof typeof Role;
    @Field(() => String, {nullable:false,defaultValue:'via.placeholder.com/150*150'})
    avatar!: string;
    @Field(() => Date, {nullable:false})
    createAt!: Date;
    @Field(() => Date, {nullable:false})
    updateAt!: Date;
    @Field(() => [Download], {nullable:true})
    Download?: Array<Download>;
    @Field(() => [Page], {nullable:true})
    Page?: Array<Page>;
    @Field(() => [Post], {nullable:true})
    Post?: Array<Post>;
    @Field(() => UserCount, {nullable:false})
    _count?: InstanceType<typeof UserCount>;
}
