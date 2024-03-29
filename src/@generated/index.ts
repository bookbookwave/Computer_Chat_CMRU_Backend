import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { registerEnumType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { Float } from '@nestjs/graphql';

export enum UserProjectScalarFieldEnum {
    projectId = "projectId",
    userId = "userId"
}

export enum UserMessageRoomScalarFieldEnum {
    userId = "userId",
    messageRoomId = "messageRoomId"
}

export enum UserScalarFieldEnum {
    id = "id",
    name = "name",
    credentialId = "credentialId",
    email = "email",
    password = "password",
    role = "role",
    avatar = "avatar",
    createAt = "createAt",
    updateAt = "updateAt"
}

export enum ProjectTypeScalarFieldEnum {
    id = "id",
    name = "name"
}

export enum ProjectStatusScalarFieldEnum {
    id = "id",
    name = "name"
}

export enum ProjectScalarFieldEnum {
    id = "id",
    nameTH = "nameTH",
    nameEN = "nameEN",
    statusId = "statusId",
    typeId = "typeId",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
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
    TEACHER = "TEACHER",
    STUDENT = "STUDENT"
}

export enum QueryMode {
    'default' = "default",
    insensitive = "insensitive"
}

export enum NullsOrder {
    first = "first",
    last = "last"
}

export enum LoginTimeScalarFieldEnum {
    id = "id",
    userId = "userId",
    createdAt = "createdAt"
}

export enum BlogNewsScalarFieldEnum {
    id = "id",
    title = "title",
    content = "content",
    link = "link",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
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

export enum MessageRoomScalarFieldEnum {
    id = "id"
}

export enum MessageScalarFieldEnum {
    id = "id",
    message = "message",
    userId = "userId",
    projectId = "projectId",
    messageRoomId = "messageRoomId",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}

export enum FileScalarFieldEnum {
    id = "id",
    fileName = "fileName",
    file = "file",
    projectId = "projectId",
    messageRoomId = "messageRoomId",
    statusId = "statusId",
    comment = "comment",
    createdAt = "createdAt"
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
registerEnumType(FileScalarFieldEnum, { name: 'FileScalarFieldEnum', description: undefined })
registerEnumType(MessageScalarFieldEnum, { name: 'MessageScalarFieldEnum', description: undefined })
registerEnumType(MessageRoomScalarFieldEnum, { name: 'MessageRoomScalarFieldEnum', description: undefined })
registerEnumType(PageScalarFieldEnum, { name: 'PageScalarFieldEnum', description: undefined })
registerEnumType(PostScalarFieldEnum, { name: 'PostScalarFieldEnum', description: undefined })
registerEnumType(BlogNewsScalarFieldEnum, { name: 'BlogNewsScalarFieldEnum', description: undefined })
registerEnumType(LoginTimeScalarFieldEnum, { name: 'LoginTimeScalarFieldEnum', description: undefined })
registerEnumType(NullsOrder, { name: 'NullsOrder', description: undefined })
registerEnumType(QueryMode, { name: 'QueryMode', description: undefined })
registerEnumType(Role, { name: 'Role', description: undefined })
registerEnumType(SortOrder, { name: 'SortOrder', description: undefined })
registerEnumType(TransactionIsolationLevel, { name: 'TransactionIsolationLevel', description: undefined })
registerEnumType(ProjectScalarFieldEnum, { name: 'ProjectScalarFieldEnum', description: undefined })
registerEnumType(ProjectStatusScalarFieldEnum, { name: 'ProjectStatusScalarFieldEnum', description: undefined })
registerEnumType(ProjectTypeScalarFieldEnum, { name: 'ProjectTypeScalarFieldEnum', description: undefined })
registerEnumType(UserScalarFieldEnum, { name: 'UserScalarFieldEnum', description: undefined })
registerEnumType(UserMessageRoomScalarFieldEnum, { name: 'UserMessageRoomScalarFieldEnum', description: undefined })
registerEnumType(UserProjectScalarFieldEnum, { name: 'UserProjectScalarFieldEnum', description: undefined })

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
    image?: true;
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
    image?: keyof typeof SortOrder;
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
export class BannerCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    title!: string;
    @Field(() => String, {nullable:true})
    image?: string;
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
    image?: true;
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
    image?: keyof typeof SortOrder;
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
    image?: true;
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
    image?: keyof typeof SortOrder;
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
    image?: keyof typeof SortOrder;
    @Field(() => SortOrderInput, {nullable:true})
    link?: InstanceType<typeof SortOrderInput>;
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
    image?: keyof typeof SortOrder;
    @Field(() => SortOrderInput, {nullable:true})
    link?: InstanceType<typeof SortOrderInput>;
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
    image?: InstanceType<typeof StringWithAggregatesFilter>;
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
export class BannerUncheckedUpdateManyInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    image?: InstanceType<typeof StringFieldUpdateOperationsInput>;
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
    image?: InstanceType<typeof StringFieldUpdateOperationsInput>;
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
    image?: InstanceType<typeof StringFieldUpdateOperationsInput>;
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
    image?: InstanceType<typeof StringFieldUpdateOperationsInput>;
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
    image?: InstanceType<typeof StringFilter>;
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
    @Field(() => String, {nullable:false,defaultValue:'https://picsum.photos/1280/320'})
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

@ArgsType()
export class blogNewsAggregateArgs {
    @Field(() => blogNewsWhereInput, {nullable:true})
    @Type(() => blogNewsWhereInput)
    where?: InstanceType<typeof blogNewsWhereInput>;
    @Field(() => [blogNewsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<blogNewsOrderByWithRelationInput>;
    @Field(() => blogNewsWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof blogNewsWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
}

@InputType()
export class blogNewsCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    content?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    link?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class blogNewsCreateManyInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    title!: string;
    @Field(() => String, {nullable:false})
    content!: string;
    @Field(() => String, {nullable:false})
    link!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class blogNewsCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    title!: string;
    @Field(() => String, {nullable:false})
    content!: string;
    @Field(() => String, {nullable:false})
    link!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@ArgsType()
export class blogNewsGroupByArgs {
    @Field(() => blogNewsWhereInput, {nullable:true})
    @Type(() => blogNewsWhereInput)
    where?: InstanceType<typeof blogNewsWhereInput>;
    @Field(() => [blogNewsOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<blogNewsOrderByWithAggregationInput>;
    @Field(() => [BlogNewsScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof BlogNewsScalarFieldEnum>;
    @Field(() => blogNewsScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof blogNewsScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
}

@InputType()
export class blogNewsMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    content?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    link?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class blogNewsMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    content?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    link?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class blogNewsOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    content?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    link?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
    @Field(() => blogNewsCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof blogNewsCountOrderByAggregateInput>;
    @Field(() => blogNewsMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof blogNewsMaxOrderByAggregateInput>;
    @Field(() => blogNewsMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof blogNewsMinOrderByAggregateInput>;
}

@InputType()
export class blogNewsOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    content?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    link?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class blogNewsScalarWhereWithAggregatesInput {
    @Field(() => [blogNewsScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<blogNewsScalarWhereWithAggregatesInput>;
    @Field(() => [blogNewsScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<blogNewsScalarWhereWithAggregatesInput>;
    @Field(() => [blogNewsScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<blogNewsScalarWhereWithAggregatesInput>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    title?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    content?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    link?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}

@InputType()
export class blogNewsUncheckedCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    title!: string;
    @Field(() => String, {nullable:false})
    content!: string;
    @Field(() => String, {nullable:false})
    link!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class blogNewsUncheckedUpdateManyInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    content?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    link?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class blogNewsUncheckedUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    content?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    link?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class blogNewsUpdateManyMutationInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    content?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    link?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class blogNewsUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    content?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    link?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class blogNewsWhereUniqueInput {
    @Field(() => String, {nullable:true})
    id?: string;
}

@InputType()
export class blogNewsWhereInput {
    @Field(() => [blogNewsWhereInput], {nullable:true})
    AND?: Array<blogNewsWhereInput>;
    @Field(() => [blogNewsWhereInput], {nullable:true})
    OR?: Array<blogNewsWhereInput>;
    @Field(() => [blogNewsWhereInput], {nullable:true})
    NOT?: Array<blogNewsWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    title?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    content?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    link?: InstanceType<typeof StringFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
}

@ObjectType()
export class blogNews {
    @Field(() => ID, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    title!: string;
    @Field(() => String, {nullable:false})
    content!: string;
    @Field(() => String, {nullable:false})
    link!: string;
    @Field(() => Date, {nullable:false})
    createdAt!: Date;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date;
}

@ArgsType()
export class CreateManyblogNewsArgs {
    @Field(() => [blogNewsCreateManyInput], {nullable:false})
    @Type(() => blogNewsCreateManyInput)
    data!: Array<blogNewsCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneblogNewsArgs {
    @Field(() => blogNewsCreateInput, {nullable:false})
    @Type(() => blogNewsCreateInput)
    data!: InstanceType<typeof blogNewsCreateInput>;
}

@ArgsType()
export class DeleteManyblogNewsArgs {
    @Field(() => blogNewsWhereInput, {nullable:true})
    @Type(() => blogNewsWhereInput)
    where?: InstanceType<typeof blogNewsWhereInput>;
}

@ArgsType()
export class DeleteOneblogNewsArgs {
    @Field(() => blogNewsWhereUniqueInput, {nullable:false})
    @Type(() => blogNewsWhereUniqueInput)
    where!: InstanceType<typeof blogNewsWhereUniqueInput>;
}

@ArgsType()
export class FindFirstblogNewsOrThrowArgs {
    @Field(() => blogNewsWhereInput, {nullable:true})
    @Type(() => blogNewsWhereInput)
    where?: InstanceType<typeof blogNewsWhereInput>;
    @Field(() => [blogNewsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<blogNewsOrderByWithRelationInput>;
    @Field(() => blogNewsWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof blogNewsWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [BlogNewsScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof BlogNewsScalarFieldEnum>;
}

@ArgsType()
export class FindFirstblogNewsArgs {
    @Field(() => blogNewsWhereInput, {nullable:true})
    @Type(() => blogNewsWhereInput)
    where?: InstanceType<typeof blogNewsWhereInput>;
    @Field(() => [blogNewsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<blogNewsOrderByWithRelationInput>;
    @Field(() => blogNewsWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof blogNewsWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [BlogNewsScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof BlogNewsScalarFieldEnum>;
}

@ArgsType()
export class FindManyblogNewsArgs {
    @Field(() => blogNewsWhereInput, {nullable:true})
    @Type(() => blogNewsWhereInput)
    where?: InstanceType<typeof blogNewsWhereInput>;
    @Field(() => [blogNewsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<blogNewsOrderByWithRelationInput>;
    @Field(() => blogNewsWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof blogNewsWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [BlogNewsScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof BlogNewsScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueblogNewsOrThrowArgs {
    @Field(() => blogNewsWhereUniqueInput, {nullable:false})
    @Type(() => blogNewsWhereUniqueInput)
    where!: InstanceType<typeof blogNewsWhereUniqueInput>;
}

@ArgsType()
export class FindUniqueblogNewsArgs {
    @Field(() => blogNewsWhereUniqueInput, {nullable:false})
    @Type(() => blogNewsWhereUniqueInput)
    where!: InstanceType<typeof blogNewsWhereUniqueInput>;
}

@ArgsType()
export class UpdateManyblogNewsArgs {
    @Field(() => blogNewsUpdateManyMutationInput, {nullable:false})
    @Type(() => blogNewsUpdateManyMutationInput)
    data!: InstanceType<typeof blogNewsUpdateManyMutationInput>;
    @Field(() => blogNewsWhereInput, {nullable:true})
    @Type(() => blogNewsWhereInput)
    where?: InstanceType<typeof blogNewsWhereInput>;
}

@ArgsType()
export class UpdateOneblogNewsArgs {
    @Field(() => blogNewsUpdateInput, {nullable:false})
    @Type(() => blogNewsUpdateInput)
    data!: InstanceType<typeof blogNewsUpdateInput>;
    @Field(() => blogNewsWhereUniqueInput, {nullable:false})
    @Type(() => blogNewsWhereUniqueInput)
    where!: InstanceType<typeof blogNewsWhereUniqueInput>;
}

@ArgsType()
export class UpsertOneblogNewsArgs {
    @Field(() => blogNewsWhereUniqueInput, {nullable:false})
    @Type(() => blogNewsWhereUniqueInput)
    where!: InstanceType<typeof blogNewsWhereUniqueInput>;
    @Field(() => blogNewsCreateInput, {nullable:false})
    @Type(() => blogNewsCreateInput)
    create!: InstanceType<typeof blogNewsCreateInput>;
    @Field(() => blogNewsUpdateInput, {nullable:false})
    @Type(() => blogNewsUpdateInput)
    update!: InstanceType<typeof blogNewsUpdateInput>;
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
    thumbnail?: true;
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
    thumbnail?: keyof typeof SortOrder;
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
    @Field(() => String, {nullable:true})
    thumbnail?: string;
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
    @Field(() => String, {nullable:true})
    thumbnail?: string;
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
    @Field(() => String, {nullable:true})
    thumbnail?: string;
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
    @Field(() => String, {nullable:true})
    thumbnail?: string;
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
    @Field(() => String, {nullable:true})
    thumbnail?: string;
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
    @Field(() => String, {nullable:true})
    thumbnail?: string;
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
    thumbnail?: true;
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
    thumbnail?: keyof typeof SortOrder;
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
    thumbnail?: true;
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
    thumbnail?: keyof typeof SortOrder;
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
    thumbnail?: keyof typeof SortOrder;
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
    thumbnail?: keyof typeof SortOrder;
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
    thumbnail?: InstanceType<typeof StringWithAggregatesFilter>;
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
    thumbnail?: InstanceType<typeof StringFilter>;
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
    @Field(() => String, {nullable:true})
    thumbnail?: string;
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
    @Field(() => String, {nullable:true})
    thumbnail?: string;
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
    @Field(() => String, {nullable:true})
    thumbnail?: string;
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
    thumbnail?: InstanceType<typeof StringFieldUpdateOperationsInput>;
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
    thumbnail?: InstanceType<typeof StringFieldUpdateOperationsInput>;
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
    thumbnail?: InstanceType<typeof StringFieldUpdateOperationsInput>;
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
    thumbnail?: InstanceType<typeof StringFieldUpdateOperationsInput>;
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
    thumbnail?: InstanceType<typeof StringFieldUpdateOperationsInput>;
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
    thumbnail?: InstanceType<typeof StringFieldUpdateOperationsInput>;
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
    thumbnail?: InstanceType<typeof StringFieldUpdateOperationsInput>;
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
    thumbnail?: InstanceType<typeof StringFieldUpdateOperationsInput>;
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
    thumbnail?: InstanceType<typeof StringFieldUpdateOperationsInput>;
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
    thumbnail?: InstanceType<typeof StringFilter>;
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
    @Field(() => String, {nullable:false,defaultValue:'https://picsum.photos/300/300'})
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
export class AggregateFile {
    @Field(() => FileCountAggregate, {nullable:true})
    _count?: InstanceType<typeof FileCountAggregate>;
    @Field(() => FileMinAggregate, {nullable:true})
    _min?: InstanceType<typeof FileMinAggregate>;
    @Field(() => FileMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof FileMaxAggregate>;
}

@ArgsType()
export class CreateManyFileArgs {
    @Field(() => [FileCreateManyInput], {nullable:false})
    @Type(() => FileCreateManyInput)
    data!: Array<FileCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneFileArgs {
    @Field(() => FileCreateInput, {nullable:false})
    @Type(() => FileCreateInput)
    data!: InstanceType<typeof FileCreateInput>;
}

@ArgsType()
export class DeleteManyFileArgs {
    @Field(() => FileWhereInput, {nullable:true})
    @Type(() => FileWhereInput)
    where?: InstanceType<typeof FileWhereInput>;
}

@ArgsType()
export class DeleteOneFileArgs {
    @Field(() => FileWhereUniqueInput, {nullable:false})
    @Type(() => FileWhereUniqueInput)
    where!: InstanceType<typeof FileWhereUniqueInput>;
}

@ArgsType()
export class FileAggregateArgs {
    @Field(() => FileWhereInput, {nullable:true})
    @Type(() => FileWhereInput)
    where?: InstanceType<typeof FileWhereInput>;
    @Field(() => [FileOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<FileOrderByWithRelationInput>;
    @Field(() => FileWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof FileWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => FileCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof FileCountAggregateInput>;
    @Field(() => FileMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof FileMinAggregateInput>;
    @Field(() => FileMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof FileMaxAggregateInput>;
}

@InputType()
export class FileCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    fileName?: true;
    @Field(() => Boolean, {nullable:true})
    file?: true;
    @Field(() => Boolean, {nullable:true})
    projectId?: true;
    @Field(() => Boolean, {nullable:true})
    messageRoomId?: true;
    @Field(() => Boolean, {nullable:true})
    statusId?: true;
    @Field(() => Boolean, {nullable:true})
    comment?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class FileCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    fileName!: number;
    @Field(() => Int, {nullable:false})
    file!: number;
    @Field(() => Int, {nullable:false})
    projectId!: number;
    @Field(() => Int, {nullable:false})
    messageRoomId!: number;
    @Field(() => Int, {nullable:false})
    statusId!: number;
    @Field(() => Int, {nullable:false})
    comment!: number;
    @Field(() => Int, {nullable:false})
    createdAt!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class FileCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    fileName?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    file?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    projectId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    messageRoomId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    statusId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    comment?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
}

@InputType()
export class FileCreateManyMessageRoomInputEnvelope {
    @Field(() => [FileCreateManyMessageRoomInput], {nullable:false})
    @Type(() => FileCreateManyMessageRoomInput)
    data!: Array<FileCreateManyMessageRoomInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@InputType()
export class FileCreateManyMessageRoomInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    fileName!: string;
    @Field(() => String, {nullable:false})
    file!: string;
    @Field(() => String, {nullable:true})
    projectId?: string;
    @Field(() => String, {nullable:false})
    statusId!: string;
    @Field(() => String, {nullable:false})
    comment!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}

@InputType()
export class FileCreateManyProjectInputEnvelope {
    @Field(() => [FileCreateManyProjectInput], {nullable:false})
    @Type(() => FileCreateManyProjectInput)
    data!: Array<FileCreateManyProjectInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@InputType()
export class FileCreateManyProjectInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    fileName!: string;
    @Field(() => String, {nullable:false})
    file!: string;
    @Field(() => String, {nullable:true})
    messageRoomId?: string;
    @Field(() => String, {nullable:false})
    statusId!: string;
    @Field(() => String, {nullable:false})
    comment!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}

@InputType()
export class FileCreateManyStatusInputEnvelope {
    @Field(() => [FileCreateManyStatusInput], {nullable:false})
    @Type(() => FileCreateManyStatusInput)
    data!: Array<FileCreateManyStatusInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@InputType()
export class FileCreateManyStatusInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    fileName!: string;
    @Field(() => String, {nullable:false})
    file!: string;
    @Field(() => String, {nullable:true})
    projectId?: string;
    @Field(() => String, {nullable:true})
    messageRoomId?: string;
    @Field(() => String, {nullable:false})
    comment!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}

@InputType()
export class FileCreateManyInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    fileName!: string;
    @Field(() => String, {nullable:false})
    file!: string;
    @Field(() => String, {nullable:true})
    projectId?: string;
    @Field(() => String, {nullable:true})
    messageRoomId?: string;
    @Field(() => String, {nullable:false})
    statusId!: string;
    @Field(() => String, {nullable:false})
    comment!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}

@InputType()
export class FileCreateNestedManyWithoutMessageRoomInput {
    @Field(() => [FileCreateWithoutMessageRoomInput], {nullable:true})
    @Type(() => FileCreateWithoutMessageRoomInput)
    create?: Array<FileCreateWithoutMessageRoomInput>;
    @Field(() => [FileCreateOrConnectWithoutMessageRoomInput], {nullable:true})
    @Type(() => FileCreateOrConnectWithoutMessageRoomInput)
    connectOrCreate?: Array<FileCreateOrConnectWithoutMessageRoomInput>;
    @Field(() => FileCreateManyMessageRoomInputEnvelope, {nullable:true})
    @Type(() => FileCreateManyMessageRoomInputEnvelope)
    createMany?: InstanceType<typeof FileCreateManyMessageRoomInputEnvelope>;
    @Field(() => [FileWhereUniqueInput], {nullable:true})
    @Type(() => FileWhereUniqueInput)
    connect?: Array<FileWhereUniqueInput>;
}

@InputType()
export class FileCreateNestedManyWithoutProjectInput {
    @Field(() => [FileCreateWithoutProjectInput], {nullable:true})
    @Type(() => FileCreateWithoutProjectInput)
    create?: Array<FileCreateWithoutProjectInput>;
    @Field(() => [FileCreateOrConnectWithoutProjectInput], {nullable:true})
    @Type(() => FileCreateOrConnectWithoutProjectInput)
    connectOrCreate?: Array<FileCreateOrConnectWithoutProjectInput>;
    @Field(() => FileCreateManyProjectInputEnvelope, {nullable:true})
    @Type(() => FileCreateManyProjectInputEnvelope)
    createMany?: InstanceType<typeof FileCreateManyProjectInputEnvelope>;
    @Field(() => [FileWhereUniqueInput], {nullable:true})
    @Type(() => FileWhereUniqueInput)
    connect?: Array<FileWhereUniqueInput>;
}

@InputType()
export class FileCreateNestedManyWithoutStatusInput {
    @Field(() => [FileCreateWithoutStatusInput], {nullable:true})
    @Type(() => FileCreateWithoutStatusInput)
    create?: Array<FileCreateWithoutStatusInput>;
    @Field(() => [FileCreateOrConnectWithoutStatusInput], {nullable:true})
    @Type(() => FileCreateOrConnectWithoutStatusInput)
    connectOrCreate?: Array<FileCreateOrConnectWithoutStatusInput>;
    @Field(() => FileCreateManyStatusInputEnvelope, {nullable:true})
    @Type(() => FileCreateManyStatusInputEnvelope)
    createMany?: InstanceType<typeof FileCreateManyStatusInputEnvelope>;
    @Field(() => [FileWhereUniqueInput], {nullable:true})
    @Type(() => FileWhereUniqueInput)
    connect?: Array<FileWhereUniqueInput>;
}

@InputType()
export class FileCreateOrConnectWithoutMessageRoomInput {
    @Field(() => FileWhereUniqueInput, {nullable:false})
    @Type(() => FileWhereUniqueInput)
    where!: InstanceType<typeof FileWhereUniqueInput>;
    @Field(() => FileCreateWithoutMessageRoomInput, {nullable:false})
    @Type(() => FileCreateWithoutMessageRoomInput)
    create!: InstanceType<typeof FileCreateWithoutMessageRoomInput>;
}

@InputType()
export class FileCreateOrConnectWithoutProjectInput {
    @Field(() => FileWhereUniqueInput, {nullable:false})
    @Type(() => FileWhereUniqueInput)
    where!: InstanceType<typeof FileWhereUniqueInput>;
    @Field(() => FileCreateWithoutProjectInput, {nullable:false})
    @Type(() => FileCreateWithoutProjectInput)
    create!: InstanceType<typeof FileCreateWithoutProjectInput>;
}

@InputType()
export class FileCreateOrConnectWithoutStatusInput {
    @Field(() => FileWhereUniqueInput, {nullable:false})
    @Type(() => FileWhereUniqueInput)
    where!: InstanceType<typeof FileWhereUniqueInput>;
    @Field(() => FileCreateWithoutStatusInput, {nullable:false})
    @Type(() => FileCreateWithoutStatusInput)
    create!: InstanceType<typeof FileCreateWithoutStatusInput>;
}

@InputType()
export class FileCreateWithoutMessageRoomInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    fileName!: string;
    @Field(() => String, {nullable:false})
    file!: string;
    @Field(() => String, {nullable:false})
    comment!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => ProjectCreateNestedOneWithoutFileInput, {nullable:true})
    project?: InstanceType<typeof ProjectCreateNestedOneWithoutFileInput>;
    @Field(() => ProjectStatusCreateNestedOneWithoutFileInput, {nullable:false})
    status!: InstanceType<typeof ProjectStatusCreateNestedOneWithoutFileInput>;
}

@InputType()
export class FileCreateWithoutProjectInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    fileName!: string;
    @Field(() => String, {nullable:false})
    file!: string;
    @Field(() => String, {nullable:false})
    comment!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => MessageRoomCreateNestedOneWithoutFileInput, {nullable:true})
    messageRoom?: InstanceType<typeof MessageRoomCreateNestedOneWithoutFileInput>;
    @Field(() => ProjectStatusCreateNestedOneWithoutFileInput, {nullable:false})
    status!: InstanceType<typeof ProjectStatusCreateNestedOneWithoutFileInput>;
}

@InputType()
export class FileCreateWithoutStatusInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    fileName!: string;
    @Field(() => String, {nullable:false})
    file!: string;
    @Field(() => String, {nullable:false})
    comment!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => MessageRoomCreateNestedOneWithoutFileInput, {nullable:true})
    messageRoom?: InstanceType<typeof MessageRoomCreateNestedOneWithoutFileInput>;
    @Field(() => ProjectCreateNestedOneWithoutFileInput, {nullable:true})
    project?: InstanceType<typeof ProjectCreateNestedOneWithoutFileInput>;
}

@InputType()
export class FileCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    fileName!: string;
    @Field(() => String, {nullable:false})
    file!: string;
    @Field(() => String, {nullable:false})
    comment!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => MessageRoomCreateNestedOneWithoutFileInput, {nullable:true})
    messageRoom?: InstanceType<typeof MessageRoomCreateNestedOneWithoutFileInput>;
    @Field(() => ProjectCreateNestedOneWithoutFileInput, {nullable:true})
    project?: InstanceType<typeof ProjectCreateNestedOneWithoutFileInput>;
    @Field(() => ProjectStatusCreateNestedOneWithoutFileInput, {nullable:false})
    status!: InstanceType<typeof ProjectStatusCreateNestedOneWithoutFileInput>;
}

@ArgsType()
export class FileGroupByArgs {
    @Field(() => FileWhereInput, {nullable:true})
    @Type(() => FileWhereInput)
    where?: InstanceType<typeof FileWhereInput>;
    @Field(() => [FileOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<FileOrderByWithAggregationInput>;
    @Field(() => [FileScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof FileScalarFieldEnum>;
    @Field(() => FileScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof FileScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => FileCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof FileCountAggregateInput>;
    @Field(() => FileMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof FileMinAggregateInput>;
    @Field(() => FileMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof FileMaxAggregateInput>;
}

@ObjectType()
export class FileGroupBy {
    @Field(() => String, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    fileName!: string;
    @Field(() => String, {nullable:false})
    file!: string;
    @Field(() => String, {nullable:true})
    projectId?: string;
    @Field(() => String, {nullable:true})
    messageRoomId?: string;
    @Field(() => String, {nullable:false})
    statusId!: string;
    @Field(() => String, {nullable:false})
    comment!: string;
    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;
    @Field(() => FileCountAggregate, {nullable:true})
    _count?: InstanceType<typeof FileCountAggregate>;
    @Field(() => FileMinAggregate, {nullable:true})
    _min?: InstanceType<typeof FileMinAggregate>;
    @Field(() => FileMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof FileMaxAggregate>;
}

@InputType()
export class FileListRelationFilter {
    @Field(() => FileWhereInput, {nullable:true})
    every?: InstanceType<typeof FileWhereInput>;
    @Field(() => FileWhereInput, {nullable:true})
    some?: InstanceType<typeof FileWhereInput>;
    @Field(() => FileWhereInput, {nullable:true})
    none?: InstanceType<typeof FileWhereInput>;
}

@InputType()
export class FileMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    fileName?: true;
    @Field(() => Boolean, {nullable:true})
    file?: true;
    @Field(() => Boolean, {nullable:true})
    projectId?: true;
    @Field(() => Boolean, {nullable:true})
    messageRoomId?: true;
    @Field(() => Boolean, {nullable:true})
    statusId?: true;
    @Field(() => Boolean, {nullable:true})
    comment?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
}

@ObjectType()
export class FileMaxAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    fileName?: string;
    @Field(() => String, {nullable:true})
    file?: string;
    @Field(() => String, {nullable:true})
    projectId?: string;
    @Field(() => String, {nullable:true})
    messageRoomId?: string;
    @Field(() => String, {nullable:true})
    statusId?: string;
    @Field(() => String, {nullable:true})
    comment?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}

@InputType()
export class FileMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    fileName?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    file?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    projectId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    messageRoomId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    statusId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    comment?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
}

@InputType()
export class FileMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    fileName?: true;
    @Field(() => Boolean, {nullable:true})
    file?: true;
    @Field(() => Boolean, {nullable:true})
    projectId?: true;
    @Field(() => Boolean, {nullable:true})
    messageRoomId?: true;
    @Field(() => Boolean, {nullable:true})
    statusId?: true;
    @Field(() => Boolean, {nullable:true})
    comment?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
}

@ObjectType()
export class FileMinAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    fileName?: string;
    @Field(() => String, {nullable:true})
    file?: string;
    @Field(() => String, {nullable:true})
    projectId?: string;
    @Field(() => String, {nullable:true})
    messageRoomId?: string;
    @Field(() => String, {nullable:true})
    statusId?: string;
    @Field(() => String, {nullable:true})
    comment?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}

@InputType()
export class FileMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    fileName?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    file?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    projectId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    messageRoomId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    statusId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    comment?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
}

@InputType()
export class FileOrderByRelationAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    _count?: keyof typeof SortOrder;
}

@InputType()
export class FileOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    fileName?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    file?: keyof typeof SortOrder;
    @Field(() => SortOrderInput, {nullable:true})
    projectId?: InstanceType<typeof SortOrderInput>;
    @Field(() => SortOrderInput, {nullable:true})
    messageRoomId?: InstanceType<typeof SortOrderInput>;
    @Field(() => SortOrder, {nullable:true})
    statusId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    comment?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => FileCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof FileCountOrderByAggregateInput>;
    @Field(() => FileMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof FileMaxOrderByAggregateInput>;
    @Field(() => FileMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof FileMinOrderByAggregateInput>;
}

@InputType()
export class FileOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    fileName?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    file?: keyof typeof SortOrder;
    @Field(() => SortOrderInput, {nullable:true})
    projectId?: InstanceType<typeof SortOrderInput>;
    @Field(() => SortOrderInput, {nullable:true})
    messageRoomId?: InstanceType<typeof SortOrderInput>;
    @Field(() => SortOrder, {nullable:true})
    statusId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    comment?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => MessageRoomOrderByWithRelationInput, {nullable:true})
    messageRoom?: InstanceType<typeof MessageRoomOrderByWithRelationInput>;
    @Field(() => ProjectOrderByWithRelationInput, {nullable:true})
    project?: InstanceType<typeof ProjectOrderByWithRelationInput>;
    @Field(() => ProjectStatusOrderByWithRelationInput, {nullable:true})
    status?: InstanceType<typeof ProjectStatusOrderByWithRelationInput>;
}

@InputType()
export class FileScalarWhereWithAggregatesInput {
    @Field(() => [FileScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<FileScalarWhereWithAggregatesInput>;
    @Field(() => [FileScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<FileScalarWhereWithAggregatesInput>;
    @Field(() => [FileScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<FileScalarWhereWithAggregatesInput>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    fileName?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    file?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    projectId?: InstanceType<typeof StringNullableWithAggregatesFilter>;
    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    messageRoomId?: InstanceType<typeof StringNullableWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    statusId?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    comment?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}

@InputType()
export class FileScalarWhereInput {
    @Field(() => [FileScalarWhereInput], {nullable:true})
    AND?: Array<FileScalarWhereInput>;
    @Field(() => [FileScalarWhereInput], {nullable:true})
    OR?: Array<FileScalarWhereInput>;
    @Field(() => [FileScalarWhereInput], {nullable:true})
    NOT?: Array<FileScalarWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    fileName?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    file?: InstanceType<typeof StringFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    projectId?: InstanceType<typeof StringNullableFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    messageRoomId?: InstanceType<typeof StringNullableFilter>;
    @Field(() => StringFilter, {nullable:true})
    statusId?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    comment?: InstanceType<typeof StringFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
}

@InputType()
export class FileUncheckedCreateNestedManyWithoutMessageRoomInput {
    @Field(() => [FileCreateWithoutMessageRoomInput], {nullable:true})
    @Type(() => FileCreateWithoutMessageRoomInput)
    create?: Array<FileCreateWithoutMessageRoomInput>;
    @Field(() => [FileCreateOrConnectWithoutMessageRoomInput], {nullable:true})
    @Type(() => FileCreateOrConnectWithoutMessageRoomInput)
    connectOrCreate?: Array<FileCreateOrConnectWithoutMessageRoomInput>;
    @Field(() => FileCreateManyMessageRoomInputEnvelope, {nullable:true})
    @Type(() => FileCreateManyMessageRoomInputEnvelope)
    createMany?: InstanceType<typeof FileCreateManyMessageRoomInputEnvelope>;
    @Field(() => [FileWhereUniqueInput], {nullable:true})
    @Type(() => FileWhereUniqueInput)
    connect?: Array<FileWhereUniqueInput>;
}

@InputType()
export class FileUncheckedCreateNestedManyWithoutProjectInput {
    @Field(() => [FileCreateWithoutProjectInput], {nullable:true})
    @Type(() => FileCreateWithoutProjectInput)
    create?: Array<FileCreateWithoutProjectInput>;
    @Field(() => [FileCreateOrConnectWithoutProjectInput], {nullable:true})
    @Type(() => FileCreateOrConnectWithoutProjectInput)
    connectOrCreate?: Array<FileCreateOrConnectWithoutProjectInput>;
    @Field(() => FileCreateManyProjectInputEnvelope, {nullable:true})
    @Type(() => FileCreateManyProjectInputEnvelope)
    createMany?: InstanceType<typeof FileCreateManyProjectInputEnvelope>;
    @Field(() => [FileWhereUniqueInput], {nullable:true})
    @Type(() => FileWhereUniqueInput)
    connect?: Array<FileWhereUniqueInput>;
}

@InputType()
export class FileUncheckedCreateNestedManyWithoutStatusInput {
    @Field(() => [FileCreateWithoutStatusInput], {nullable:true})
    @Type(() => FileCreateWithoutStatusInput)
    create?: Array<FileCreateWithoutStatusInput>;
    @Field(() => [FileCreateOrConnectWithoutStatusInput], {nullable:true})
    @Type(() => FileCreateOrConnectWithoutStatusInput)
    connectOrCreate?: Array<FileCreateOrConnectWithoutStatusInput>;
    @Field(() => FileCreateManyStatusInputEnvelope, {nullable:true})
    @Type(() => FileCreateManyStatusInputEnvelope)
    createMany?: InstanceType<typeof FileCreateManyStatusInputEnvelope>;
    @Field(() => [FileWhereUniqueInput], {nullable:true})
    @Type(() => FileWhereUniqueInput)
    connect?: Array<FileWhereUniqueInput>;
}

@InputType()
export class FileUncheckedCreateWithoutMessageRoomInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    fileName!: string;
    @Field(() => String, {nullable:false})
    file!: string;
    @Field(() => String, {nullable:true})
    projectId?: string;
    @Field(() => String, {nullable:false})
    statusId!: string;
    @Field(() => String, {nullable:false})
    comment!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}

@InputType()
export class FileUncheckedCreateWithoutProjectInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    fileName!: string;
    @Field(() => String, {nullable:false})
    file!: string;
    @Field(() => String, {nullable:true})
    messageRoomId?: string;
    @Field(() => String, {nullable:false})
    statusId!: string;
    @Field(() => String, {nullable:false})
    comment!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}

@InputType()
export class FileUncheckedCreateWithoutStatusInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    fileName!: string;
    @Field(() => String, {nullable:false})
    file!: string;
    @Field(() => String, {nullable:true})
    projectId?: string;
    @Field(() => String, {nullable:true})
    messageRoomId?: string;
    @Field(() => String, {nullable:false})
    comment!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}

@InputType()
export class FileUncheckedCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    fileName!: string;
    @Field(() => String, {nullable:false})
    file!: string;
    @Field(() => String, {nullable:true})
    projectId?: string;
    @Field(() => String, {nullable:true})
    messageRoomId?: string;
    @Field(() => String, {nullable:false})
    statusId!: string;
    @Field(() => String, {nullable:false})
    comment!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}

@InputType()
export class FileUncheckedUpdateManyWithoutFileInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    fileName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    file?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    messageRoomId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    statusId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    comment?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class FileUncheckedUpdateManyWithoutMessageRoomNestedInput {
    @Field(() => [FileCreateWithoutMessageRoomInput], {nullable:true})
    @Type(() => FileCreateWithoutMessageRoomInput)
    create?: Array<FileCreateWithoutMessageRoomInput>;
    @Field(() => [FileCreateOrConnectWithoutMessageRoomInput], {nullable:true})
    @Type(() => FileCreateOrConnectWithoutMessageRoomInput)
    connectOrCreate?: Array<FileCreateOrConnectWithoutMessageRoomInput>;
    @Field(() => [FileUpsertWithWhereUniqueWithoutMessageRoomInput], {nullable:true})
    @Type(() => FileUpsertWithWhereUniqueWithoutMessageRoomInput)
    upsert?: Array<FileUpsertWithWhereUniqueWithoutMessageRoomInput>;
    @Field(() => FileCreateManyMessageRoomInputEnvelope, {nullable:true})
    @Type(() => FileCreateManyMessageRoomInputEnvelope)
    createMany?: InstanceType<typeof FileCreateManyMessageRoomInputEnvelope>;
    @Field(() => [FileWhereUniqueInput], {nullable:true})
    @Type(() => FileWhereUniqueInput)
    set?: Array<FileWhereUniqueInput>;
    @Field(() => [FileWhereUniqueInput], {nullable:true})
    @Type(() => FileWhereUniqueInput)
    disconnect?: Array<FileWhereUniqueInput>;
    @Field(() => [FileWhereUniqueInput], {nullable:true})
    @Type(() => FileWhereUniqueInput)
    delete?: Array<FileWhereUniqueInput>;
    @Field(() => [FileWhereUniqueInput], {nullable:true})
    @Type(() => FileWhereUniqueInput)
    connect?: Array<FileWhereUniqueInput>;
    @Field(() => [FileUpdateWithWhereUniqueWithoutMessageRoomInput], {nullable:true})
    @Type(() => FileUpdateWithWhereUniqueWithoutMessageRoomInput)
    update?: Array<FileUpdateWithWhereUniqueWithoutMessageRoomInput>;
    @Field(() => [FileUpdateManyWithWhereWithoutMessageRoomInput], {nullable:true})
    @Type(() => FileUpdateManyWithWhereWithoutMessageRoomInput)
    updateMany?: Array<FileUpdateManyWithWhereWithoutMessageRoomInput>;
    @Field(() => [FileScalarWhereInput], {nullable:true})
    @Type(() => FileScalarWhereInput)
    deleteMany?: Array<FileScalarWhereInput>;
}

@InputType()
export class FileUncheckedUpdateManyWithoutProjectNestedInput {
    @Field(() => [FileCreateWithoutProjectInput], {nullable:true})
    @Type(() => FileCreateWithoutProjectInput)
    create?: Array<FileCreateWithoutProjectInput>;
    @Field(() => [FileCreateOrConnectWithoutProjectInput], {nullable:true})
    @Type(() => FileCreateOrConnectWithoutProjectInput)
    connectOrCreate?: Array<FileCreateOrConnectWithoutProjectInput>;
    @Field(() => [FileUpsertWithWhereUniqueWithoutProjectInput], {nullable:true})
    @Type(() => FileUpsertWithWhereUniqueWithoutProjectInput)
    upsert?: Array<FileUpsertWithWhereUniqueWithoutProjectInput>;
    @Field(() => FileCreateManyProjectInputEnvelope, {nullable:true})
    @Type(() => FileCreateManyProjectInputEnvelope)
    createMany?: InstanceType<typeof FileCreateManyProjectInputEnvelope>;
    @Field(() => [FileWhereUniqueInput], {nullable:true})
    @Type(() => FileWhereUniqueInput)
    set?: Array<FileWhereUniqueInput>;
    @Field(() => [FileWhereUniqueInput], {nullable:true})
    @Type(() => FileWhereUniqueInput)
    disconnect?: Array<FileWhereUniqueInput>;
    @Field(() => [FileWhereUniqueInput], {nullable:true})
    @Type(() => FileWhereUniqueInput)
    delete?: Array<FileWhereUniqueInput>;
    @Field(() => [FileWhereUniqueInput], {nullable:true})
    @Type(() => FileWhereUniqueInput)
    connect?: Array<FileWhereUniqueInput>;
    @Field(() => [FileUpdateWithWhereUniqueWithoutProjectInput], {nullable:true})
    @Type(() => FileUpdateWithWhereUniqueWithoutProjectInput)
    update?: Array<FileUpdateWithWhereUniqueWithoutProjectInput>;
    @Field(() => [FileUpdateManyWithWhereWithoutProjectInput], {nullable:true})
    @Type(() => FileUpdateManyWithWhereWithoutProjectInput)
    updateMany?: Array<FileUpdateManyWithWhereWithoutProjectInput>;
    @Field(() => [FileScalarWhereInput], {nullable:true})
    @Type(() => FileScalarWhereInput)
    deleteMany?: Array<FileScalarWhereInput>;
}

@InputType()
export class FileUncheckedUpdateManyWithoutStatusNestedInput {
    @Field(() => [FileCreateWithoutStatusInput], {nullable:true})
    @Type(() => FileCreateWithoutStatusInput)
    create?: Array<FileCreateWithoutStatusInput>;
    @Field(() => [FileCreateOrConnectWithoutStatusInput], {nullable:true})
    @Type(() => FileCreateOrConnectWithoutStatusInput)
    connectOrCreate?: Array<FileCreateOrConnectWithoutStatusInput>;
    @Field(() => [FileUpsertWithWhereUniqueWithoutStatusInput], {nullable:true})
    @Type(() => FileUpsertWithWhereUniqueWithoutStatusInput)
    upsert?: Array<FileUpsertWithWhereUniqueWithoutStatusInput>;
    @Field(() => FileCreateManyStatusInputEnvelope, {nullable:true})
    @Type(() => FileCreateManyStatusInputEnvelope)
    createMany?: InstanceType<typeof FileCreateManyStatusInputEnvelope>;
    @Field(() => [FileWhereUniqueInput], {nullable:true})
    @Type(() => FileWhereUniqueInput)
    set?: Array<FileWhereUniqueInput>;
    @Field(() => [FileWhereUniqueInput], {nullable:true})
    @Type(() => FileWhereUniqueInput)
    disconnect?: Array<FileWhereUniqueInput>;
    @Field(() => [FileWhereUniqueInput], {nullable:true})
    @Type(() => FileWhereUniqueInput)
    delete?: Array<FileWhereUniqueInput>;
    @Field(() => [FileWhereUniqueInput], {nullable:true})
    @Type(() => FileWhereUniqueInput)
    connect?: Array<FileWhereUniqueInput>;
    @Field(() => [FileUpdateWithWhereUniqueWithoutStatusInput], {nullable:true})
    @Type(() => FileUpdateWithWhereUniqueWithoutStatusInput)
    update?: Array<FileUpdateWithWhereUniqueWithoutStatusInput>;
    @Field(() => [FileUpdateManyWithWhereWithoutStatusInput], {nullable:true})
    @Type(() => FileUpdateManyWithWhereWithoutStatusInput)
    updateMany?: Array<FileUpdateManyWithWhereWithoutStatusInput>;
    @Field(() => [FileScalarWhereInput], {nullable:true})
    @Type(() => FileScalarWhereInput)
    deleteMany?: Array<FileScalarWhereInput>;
}

@InputType()
export class FileUncheckedUpdateManyInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    fileName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    file?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    projectId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    messageRoomId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    statusId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    comment?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class FileUncheckedUpdateWithoutMessageRoomInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    fileName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    file?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    projectId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    statusId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    comment?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class FileUncheckedUpdateWithoutProjectInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    fileName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    file?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    messageRoomId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    statusId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    comment?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class FileUncheckedUpdateWithoutStatusInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    fileName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    file?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    projectId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    messageRoomId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    comment?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class FileUncheckedUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    fileName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    file?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    projectId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    messageRoomId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    statusId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    comment?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class FileUpdateManyMutationInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    fileName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    file?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    comment?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class FileUpdateManyWithWhereWithoutMessageRoomInput {
    @Field(() => FileScalarWhereInput, {nullable:false})
    @Type(() => FileScalarWhereInput)
    where!: InstanceType<typeof FileScalarWhereInput>;
    @Field(() => FileUpdateManyMutationInput, {nullable:false})
    @Type(() => FileUpdateManyMutationInput)
    data!: InstanceType<typeof FileUpdateManyMutationInput>;
}

@InputType()
export class FileUpdateManyWithWhereWithoutProjectInput {
    @Field(() => FileScalarWhereInput, {nullable:false})
    @Type(() => FileScalarWhereInput)
    where!: InstanceType<typeof FileScalarWhereInput>;
    @Field(() => FileUpdateManyMutationInput, {nullable:false})
    @Type(() => FileUpdateManyMutationInput)
    data!: InstanceType<typeof FileUpdateManyMutationInput>;
}

@InputType()
export class FileUpdateManyWithWhereWithoutStatusInput {
    @Field(() => FileScalarWhereInput, {nullable:false})
    @Type(() => FileScalarWhereInput)
    where!: InstanceType<typeof FileScalarWhereInput>;
    @Field(() => FileUpdateManyMutationInput, {nullable:false})
    @Type(() => FileUpdateManyMutationInput)
    data!: InstanceType<typeof FileUpdateManyMutationInput>;
}

@InputType()
export class FileUpdateManyWithoutMessageRoomNestedInput {
    @Field(() => [FileCreateWithoutMessageRoomInput], {nullable:true})
    @Type(() => FileCreateWithoutMessageRoomInput)
    create?: Array<FileCreateWithoutMessageRoomInput>;
    @Field(() => [FileCreateOrConnectWithoutMessageRoomInput], {nullable:true})
    @Type(() => FileCreateOrConnectWithoutMessageRoomInput)
    connectOrCreate?: Array<FileCreateOrConnectWithoutMessageRoomInput>;
    @Field(() => [FileUpsertWithWhereUniqueWithoutMessageRoomInput], {nullable:true})
    @Type(() => FileUpsertWithWhereUniqueWithoutMessageRoomInput)
    upsert?: Array<FileUpsertWithWhereUniqueWithoutMessageRoomInput>;
    @Field(() => FileCreateManyMessageRoomInputEnvelope, {nullable:true})
    @Type(() => FileCreateManyMessageRoomInputEnvelope)
    createMany?: InstanceType<typeof FileCreateManyMessageRoomInputEnvelope>;
    @Field(() => [FileWhereUniqueInput], {nullable:true})
    @Type(() => FileWhereUniqueInput)
    set?: Array<FileWhereUniqueInput>;
    @Field(() => [FileWhereUniqueInput], {nullable:true})
    @Type(() => FileWhereUniqueInput)
    disconnect?: Array<FileWhereUniqueInput>;
    @Field(() => [FileWhereUniqueInput], {nullable:true})
    @Type(() => FileWhereUniqueInput)
    delete?: Array<FileWhereUniqueInput>;
    @Field(() => [FileWhereUniqueInput], {nullable:true})
    @Type(() => FileWhereUniqueInput)
    connect?: Array<FileWhereUniqueInput>;
    @Field(() => [FileUpdateWithWhereUniqueWithoutMessageRoomInput], {nullable:true})
    @Type(() => FileUpdateWithWhereUniqueWithoutMessageRoomInput)
    update?: Array<FileUpdateWithWhereUniqueWithoutMessageRoomInput>;
    @Field(() => [FileUpdateManyWithWhereWithoutMessageRoomInput], {nullable:true})
    @Type(() => FileUpdateManyWithWhereWithoutMessageRoomInput)
    updateMany?: Array<FileUpdateManyWithWhereWithoutMessageRoomInput>;
    @Field(() => [FileScalarWhereInput], {nullable:true})
    @Type(() => FileScalarWhereInput)
    deleteMany?: Array<FileScalarWhereInput>;
}

@InputType()
export class FileUpdateManyWithoutProjectNestedInput {
    @Field(() => [FileCreateWithoutProjectInput], {nullable:true})
    @Type(() => FileCreateWithoutProjectInput)
    create?: Array<FileCreateWithoutProjectInput>;
    @Field(() => [FileCreateOrConnectWithoutProjectInput], {nullable:true})
    @Type(() => FileCreateOrConnectWithoutProjectInput)
    connectOrCreate?: Array<FileCreateOrConnectWithoutProjectInput>;
    @Field(() => [FileUpsertWithWhereUniqueWithoutProjectInput], {nullable:true})
    @Type(() => FileUpsertWithWhereUniqueWithoutProjectInput)
    upsert?: Array<FileUpsertWithWhereUniqueWithoutProjectInput>;
    @Field(() => FileCreateManyProjectInputEnvelope, {nullable:true})
    @Type(() => FileCreateManyProjectInputEnvelope)
    createMany?: InstanceType<typeof FileCreateManyProjectInputEnvelope>;
    @Field(() => [FileWhereUniqueInput], {nullable:true})
    @Type(() => FileWhereUniqueInput)
    set?: Array<FileWhereUniqueInput>;
    @Field(() => [FileWhereUniqueInput], {nullable:true})
    @Type(() => FileWhereUniqueInput)
    disconnect?: Array<FileWhereUniqueInput>;
    @Field(() => [FileWhereUniqueInput], {nullable:true})
    @Type(() => FileWhereUniqueInput)
    delete?: Array<FileWhereUniqueInput>;
    @Field(() => [FileWhereUniqueInput], {nullable:true})
    @Type(() => FileWhereUniqueInput)
    connect?: Array<FileWhereUniqueInput>;
    @Field(() => [FileUpdateWithWhereUniqueWithoutProjectInput], {nullable:true})
    @Type(() => FileUpdateWithWhereUniqueWithoutProjectInput)
    update?: Array<FileUpdateWithWhereUniqueWithoutProjectInput>;
    @Field(() => [FileUpdateManyWithWhereWithoutProjectInput], {nullable:true})
    @Type(() => FileUpdateManyWithWhereWithoutProjectInput)
    updateMany?: Array<FileUpdateManyWithWhereWithoutProjectInput>;
    @Field(() => [FileScalarWhereInput], {nullable:true})
    @Type(() => FileScalarWhereInput)
    deleteMany?: Array<FileScalarWhereInput>;
}

@InputType()
export class FileUpdateManyWithoutStatusNestedInput {
    @Field(() => [FileCreateWithoutStatusInput], {nullable:true})
    @Type(() => FileCreateWithoutStatusInput)
    create?: Array<FileCreateWithoutStatusInput>;
    @Field(() => [FileCreateOrConnectWithoutStatusInput], {nullable:true})
    @Type(() => FileCreateOrConnectWithoutStatusInput)
    connectOrCreate?: Array<FileCreateOrConnectWithoutStatusInput>;
    @Field(() => [FileUpsertWithWhereUniqueWithoutStatusInput], {nullable:true})
    @Type(() => FileUpsertWithWhereUniqueWithoutStatusInput)
    upsert?: Array<FileUpsertWithWhereUniqueWithoutStatusInput>;
    @Field(() => FileCreateManyStatusInputEnvelope, {nullable:true})
    @Type(() => FileCreateManyStatusInputEnvelope)
    createMany?: InstanceType<typeof FileCreateManyStatusInputEnvelope>;
    @Field(() => [FileWhereUniqueInput], {nullable:true})
    @Type(() => FileWhereUniqueInput)
    set?: Array<FileWhereUniqueInput>;
    @Field(() => [FileWhereUniqueInput], {nullable:true})
    @Type(() => FileWhereUniqueInput)
    disconnect?: Array<FileWhereUniqueInput>;
    @Field(() => [FileWhereUniqueInput], {nullable:true})
    @Type(() => FileWhereUniqueInput)
    delete?: Array<FileWhereUniqueInput>;
    @Field(() => [FileWhereUniqueInput], {nullable:true})
    @Type(() => FileWhereUniqueInput)
    connect?: Array<FileWhereUniqueInput>;
    @Field(() => [FileUpdateWithWhereUniqueWithoutStatusInput], {nullable:true})
    @Type(() => FileUpdateWithWhereUniqueWithoutStatusInput)
    update?: Array<FileUpdateWithWhereUniqueWithoutStatusInput>;
    @Field(() => [FileUpdateManyWithWhereWithoutStatusInput], {nullable:true})
    @Type(() => FileUpdateManyWithWhereWithoutStatusInput)
    updateMany?: Array<FileUpdateManyWithWhereWithoutStatusInput>;
    @Field(() => [FileScalarWhereInput], {nullable:true})
    @Type(() => FileScalarWhereInput)
    deleteMany?: Array<FileScalarWhereInput>;
}

@InputType()
export class FileUpdateWithWhereUniqueWithoutMessageRoomInput {
    @Field(() => FileWhereUniqueInput, {nullable:false})
    @Type(() => FileWhereUniqueInput)
    where!: InstanceType<typeof FileWhereUniqueInput>;
    @Field(() => FileUpdateWithoutMessageRoomInput, {nullable:false})
    @Type(() => FileUpdateWithoutMessageRoomInput)
    data!: InstanceType<typeof FileUpdateWithoutMessageRoomInput>;
}

@InputType()
export class FileUpdateWithWhereUniqueWithoutProjectInput {
    @Field(() => FileWhereUniqueInput, {nullable:false})
    @Type(() => FileWhereUniqueInput)
    where!: InstanceType<typeof FileWhereUniqueInput>;
    @Field(() => FileUpdateWithoutProjectInput, {nullable:false})
    @Type(() => FileUpdateWithoutProjectInput)
    data!: InstanceType<typeof FileUpdateWithoutProjectInput>;
}

@InputType()
export class FileUpdateWithWhereUniqueWithoutStatusInput {
    @Field(() => FileWhereUniqueInput, {nullable:false})
    @Type(() => FileWhereUniqueInput)
    where!: InstanceType<typeof FileWhereUniqueInput>;
    @Field(() => FileUpdateWithoutStatusInput, {nullable:false})
    @Type(() => FileUpdateWithoutStatusInput)
    data!: InstanceType<typeof FileUpdateWithoutStatusInput>;
}

@InputType()
export class FileUpdateWithoutMessageRoomInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    fileName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    file?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    comment?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => ProjectUpdateOneWithoutFileNestedInput, {nullable:true})
    project?: InstanceType<typeof ProjectUpdateOneWithoutFileNestedInput>;
    @Field(() => ProjectStatusUpdateOneRequiredWithoutFileNestedInput, {nullable:true})
    status?: InstanceType<typeof ProjectStatusUpdateOneRequiredWithoutFileNestedInput>;
}

@InputType()
export class FileUpdateWithoutProjectInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    fileName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    file?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    comment?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => MessageRoomUpdateOneWithoutFileNestedInput, {nullable:true})
    messageRoom?: InstanceType<typeof MessageRoomUpdateOneWithoutFileNestedInput>;
    @Field(() => ProjectStatusUpdateOneRequiredWithoutFileNestedInput, {nullable:true})
    status?: InstanceType<typeof ProjectStatusUpdateOneRequiredWithoutFileNestedInput>;
}

@InputType()
export class FileUpdateWithoutStatusInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    fileName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    file?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    comment?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => MessageRoomUpdateOneWithoutFileNestedInput, {nullable:true})
    messageRoom?: InstanceType<typeof MessageRoomUpdateOneWithoutFileNestedInput>;
    @Field(() => ProjectUpdateOneWithoutFileNestedInput, {nullable:true})
    project?: InstanceType<typeof ProjectUpdateOneWithoutFileNestedInput>;
}

@InputType()
export class FileUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    fileName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    file?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    comment?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => MessageRoomUpdateOneWithoutFileNestedInput, {nullable:true})
    messageRoom?: InstanceType<typeof MessageRoomUpdateOneWithoutFileNestedInput>;
    @Field(() => ProjectUpdateOneWithoutFileNestedInput, {nullable:true})
    project?: InstanceType<typeof ProjectUpdateOneWithoutFileNestedInput>;
    @Field(() => ProjectStatusUpdateOneRequiredWithoutFileNestedInput, {nullable:true})
    status?: InstanceType<typeof ProjectStatusUpdateOneRequiredWithoutFileNestedInput>;
}

@InputType()
export class FileUpsertWithWhereUniqueWithoutMessageRoomInput {
    @Field(() => FileWhereUniqueInput, {nullable:false})
    @Type(() => FileWhereUniqueInput)
    where!: InstanceType<typeof FileWhereUniqueInput>;
    @Field(() => FileUpdateWithoutMessageRoomInput, {nullable:false})
    @Type(() => FileUpdateWithoutMessageRoomInput)
    update!: InstanceType<typeof FileUpdateWithoutMessageRoomInput>;
    @Field(() => FileCreateWithoutMessageRoomInput, {nullable:false})
    @Type(() => FileCreateWithoutMessageRoomInput)
    create!: InstanceType<typeof FileCreateWithoutMessageRoomInput>;
}

@InputType()
export class FileUpsertWithWhereUniqueWithoutProjectInput {
    @Field(() => FileWhereUniqueInput, {nullable:false})
    @Type(() => FileWhereUniqueInput)
    where!: InstanceType<typeof FileWhereUniqueInput>;
    @Field(() => FileUpdateWithoutProjectInput, {nullable:false})
    @Type(() => FileUpdateWithoutProjectInput)
    update!: InstanceType<typeof FileUpdateWithoutProjectInput>;
    @Field(() => FileCreateWithoutProjectInput, {nullable:false})
    @Type(() => FileCreateWithoutProjectInput)
    create!: InstanceType<typeof FileCreateWithoutProjectInput>;
}

@InputType()
export class FileUpsertWithWhereUniqueWithoutStatusInput {
    @Field(() => FileWhereUniqueInput, {nullable:false})
    @Type(() => FileWhereUniqueInput)
    where!: InstanceType<typeof FileWhereUniqueInput>;
    @Field(() => FileUpdateWithoutStatusInput, {nullable:false})
    @Type(() => FileUpdateWithoutStatusInput)
    update!: InstanceType<typeof FileUpdateWithoutStatusInput>;
    @Field(() => FileCreateWithoutStatusInput, {nullable:false})
    @Type(() => FileCreateWithoutStatusInput)
    create!: InstanceType<typeof FileCreateWithoutStatusInput>;
}

@InputType()
export class FileWhereUniqueInput {
    @Field(() => String, {nullable:true})
    id?: string;
}

@InputType()
export class FileWhereInput {
    @Field(() => [FileWhereInput], {nullable:true})
    AND?: Array<FileWhereInput>;
    @Field(() => [FileWhereInput], {nullable:true})
    OR?: Array<FileWhereInput>;
    @Field(() => [FileWhereInput], {nullable:true})
    NOT?: Array<FileWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    fileName?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    file?: InstanceType<typeof StringFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    projectId?: InstanceType<typeof StringNullableFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    messageRoomId?: InstanceType<typeof StringNullableFilter>;
    @Field(() => StringFilter, {nullable:true})
    statusId?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    comment?: InstanceType<typeof StringFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => MessageRoomRelationFilter, {nullable:true})
    messageRoom?: InstanceType<typeof MessageRoomRelationFilter>;
    @Field(() => ProjectRelationFilter, {nullable:true})
    project?: InstanceType<typeof ProjectRelationFilter>;
    @Field(() => ProjectStatusRelationFilter, {nullable:true})
    status?: InstanceType<typeof ProjectStatusRelationFilter>;
}

@ObjectType()
export class File {
    @Field(() => ID, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    fileName!: string;
    @Field(() => String, {nullable:false})
    file!: string;
    @Field(() => String, {nullable:true})
    projectId!: string | null;
    @Field(() => String, {nullable:true})
    messageRoomId!: string | null;
    @Field(() => String, {nullable:false})
    statusId!: string;
    @Field(() => String, {nullable:false})
    comment!: string;
    @Field(() => Date, {nullable:false})
    createdAt!: Date;
    @Field(() => MessageRoom, {nullable:true})
    messageRoom?: InstanceType<typeof MessageRoom> | null;
    @Field(() => Project, {nullable:true})
    project?: InstanceType<typeof Project> | null;
    @Field(() => ProjectStatus, {nullable:false})
    status?: InstanceType<typeof ProjectStatus>;
}

@ArgsType()
export class FindFirstFileOrThrowArgs {
    @Field(() => FileWhereInput, {nullable:true})
    @Type(() => FileWhereInput)
    where?: InstanceType<typeof FileWhereInput>;
    @Field(() => [FileOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<FileOrderByWithRelationInput>;
    @Field(() => FileWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof FileWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [FileScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof FileScalarFieldEnum>;
}

@ArgsType()
export class FindFirstFileArgs {
    @Field(() => FileWhereInput, {nullable:true})
    @Type(() => FileWhereInput)
    where?: InstanceType<typeof FileWhereInput>;
    @Field(() => [FileOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<FileOrderByWithRelationInput>;
    @Field(() => FileWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof FileWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [FileScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof FileScalarFieldEnum>;
}

@ArgsType()
export class FindManyFileArgs {
    @Field(() => FileWhereInput, {nullable:true})
    @Type(() => FileWhereInput)
    where?: InstanceType<typeof FileWhereInput>;
    @Field(() => [FileOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<FileOrderByWithRelationInput>;
    @Field(() => FileWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof FileWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [FileScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof FileScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueFileOrThrowArgs {
    @Field(() => FileWhereUniqueInput, {nullable:false})
    @Type(() => FileWhereUniqueInput)
    where!: InstanceType<typeof FileWhereUniqueInput>;
}

@ArgsType()
export class FindUniqueFileArgs {
    @Field(() => FileWhereUniqueInput, {nullable:false})
    @Type(() => FileWhereUniqueInput)
    where!: InstanceType<typeof FileWhereUniqueInput>;
}

@ArgsType()
export class UpdateManyFileArgs {
    @Field(() => FileUpdateManyMutationInput, {nullable:false})
    @Type(() => FileUpdateManyMutationInput)
    data!: InstanceType<typeof FileUpdateManyMutationInput>;
    @Field(() => FileWhereInput, {nullable:true})
    @Type(() => FileWhereInput)
    where?: InstanceType<typeof FileWhereInput>;
}

@ArgsType()
export class UpdateOneFileArgs {
    @Field(() => FileUpdateInput, {nullable:false})
    @Type(() => FileUpdateInput)
    data!: InstanceType<typeof FileUpdateInput>;
    @Field(() => FileWhereUniqueInput, {nullable:false})
    @Type(() => FileWhereUniqueInput)
    where!: InstanceType<typeof FileWhereUniqueInput>;
}

@ArgsType()
export class UpsertOneFileArgs {
    @Field(() => FileWhereUniqueInput, {nullable:false})
    @Type(() => FileWhereUniqueInput)
    where!: InstanceType<typeof FileWhereUniqueInput>;
    @Field(() => FileCreateInput, {nullable:false})
    @Type(() => FileCreateInput)
    create!: InstanceType<typeof FileCreateInput>;
    @Field(() => FileUpdateInput, {nullable:false})
    @Type(() => FileUpdateInput)
    update!: InstanceType<typeof FileUpdateInput>;
}

@ArgsType()
export class CreateManyloginTimeArgs {
    @Field(() => [loginTimeCreateManyInput], {nullable:false})
    @Type(() => loginTimeCreateManyInput)
    data!: Array<loginTimeCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneloginTimeArgs {
    @Field(() => loginTimeCreateInput, {nullable:false})
    @Type(() => loginTimeCreateInput)
    data!: InstanceType<typeof loginTimeCreateInput>;
}

@ArgsType()
export class DeleteManyloginTimeArgs {
    @Field(() => loginTimeWhereInput, {nullable:true})
    @Type(() => loginTimeWhereInput)
    where?: InstanceType<typeof loginTimeWhereInput>;
}

@ArgsType()
export class DeleteOneloginTimeArgs {
    @Field(() => loginTimeWhereUniqueInput, {nullable:false})
    @Type(() => loginTimeWhereUniqueInput)
    where!: InstanceType<typeof loginTimeWhereUniqueInput>;
}

@ArgsType()
export class FindFirstloginTimeOrThrowArgs {
    @Field(() => loginTimeWhereInput, {nullable:true})
    @Type(() => loginTimeWhereInput)
    where?: InstanceType<typeof loginTimeWhereInput>;
    @Field(() => [loginTimeOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<loginTimeOrderByWithRelationInput>;
    @Field(() => loginTimeWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof loginTimeWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [LoginTimeScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof LoginTimeScalarFieldEnum>;
}

@ArgsType()
export class FindFirstloginTimeArgs {
    @Field(() => loginTimeWhereInput, {nullable:true})
    @Type(() => loginTimeWhereInput)
    where?: InstanceType<typeof loginTimeWhereInput>;
    @Field(() => [loginTimeOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<loginTimeOrderByWithRelationInput>;
    @Field(() => loginTimeWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof loginTimeWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [LoginTimeScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof LoginTimeScalarFieldEnum>;
}

@ArgsType()
export class FindManyloginTimeArgs {
    @Field(() => loginTimeWhereInput, {nullable:true})
    @Type(() => loginTimeWhereInput)
    where?: InstanceType<typeof loginTimeWhereInput>;
    @Field(() => [loginTimeOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<loginTimeOrderByWithRelationInput>;
    @Field(() => loginTimeWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof loginTimeWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [LoginTimeScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof LoginTimeScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueloginTimeOrThrowArgs {
    @Field(() => loginTimeWhereUniqueInput, {nullable:false})
    @Type(() => loginTimeWhereUniqueInput)
    where!: InstanceType<typeof loginTimeWhereUniqueInput>;
}

@ArgsType()
export class FindUniqueloginTimeArgs {
    @Field(() => loginTimeWhereUniqueInput, {nullable:false})
    @Type(() => loginTimeWhereUniqueInput)
    where!: InstanceType<typeof loginTimeWhereUniqueInput>;
}

@ArgsType()
export class loginTimeAggregateArgs {
    @Field(() => loginTimeWhereInput, {nullable:true})
    @Type(() => loginTimeWhereInput)
    where?: InstanceType<typeof loginTimeWhereInput>;
    @Field(() => [loginTimeOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<loginTimeOrderByWithRelationInput>;
    @Field(() => loginTimeWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof loginTimeWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
}

@InputType()
export class loginTimeCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
}

@InputType()
export class loginTimeCreateManyAuthorInputEnvelope {
    @Field(() => [loginTimeCreateManyAuthorInput], {nullable:false})
    @Type(() => loginTimeCreateManyAuthorInput)
    data!: Array<loginTimeCreateManyAuthorInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@InputType()
export class loginTimeCreateManyAuthorInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}

@InputType()
export class loginTimeCreateManyInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    userId!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}

@InputType()
export class loginTimeCreateNestedManyWithoutAuthorInput {
    @Field(() => [loginTimeCreateWithoutAuthorInput], {nullable:true})
    @Type(() => loginTimeCreateWithoutAuthorInput)
    create?: Array<loginTimeCreateWithoutAuthorInput>;
    @Field(() => [loginTimeCreateOrConnectWithoutAuthorInput], {nullable:true})
    @Type(() => loginTimeCreateOrConnectWithoutAuthorInput)
    connectOrCreate?: Array<loginTimeCreateOrConnectWithoutAuthorInput>;
    @Field(() => loginTimeCreateManyAuthorInputEnvelope, {nullable:true})
    @Type(() => loginTimeCreateManyAuthorInputEnvelope)
    createMany?: InstanceType<typeof loginTimeCreateManyAuthorInputEnvelope>;
    @Field(() => [loginTimeWhereUniqueInput], {nullable:true})
    @Type(() => loginTimeWhereUniqueInput)
    connect?: Array<loginTimeWhereUniqueInput>;
}

@InputType()
export class loginTimeCreateOrConnectWithoutAuthorInput {
    @Field(() => loginTimeWhereUniqueInput, {nullable:false})
    @Type(() => loginTimeWhereUniqueInput)
    where!: InstanceType<typeof loginTimeWhereUniqueInput>;
    @Field(() => loginTimeCreateWithoutAuthorInput, {nullable:false})
    @Type(() => loginTimeCreateWithoutAuthorInput)
    create!: InstanceType<typeof loginTimeCreateWithoutAuthorInput>;
}

@InputType()
export class loginTimeCreateWithoutAuthorInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}

@InputType()
export class loginTimeCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => UserCreateNestedOneWithoutLoginTimeInput, {nullable:false})
    author!: InstanceType<typeof UserCreateNestedOneWithoutLoginTimeInput>;
}

@ArgsType()
export class loginTimeGroupByArgs {
    @Field(() => loginTimeWhereInput, {nullable:true})
    @Type(() => loginTimeWhereInput)
    where?: InstanceType<typeof loginTimeWhereInput>;
    @Field(() => [loginTimeOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<loginTimeOrderByWithAggregationInput>;
    @Field(() => [LoginTimeScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof LoginTimeScalarFieldEnum>;
    @Field(() => loginTimeScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof loginTimeScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
}

@InputType()
export class loginTimeMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
}

@InputType()
export class loginTimeMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
}

@InputType()
export class loginTimeOrderByRelationAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    _count?: keyof typeof SortOrder;
}

@InputType()
export class loginTimeOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => loginTimeCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof loginTimeCountOrderByAggregateInput>;
    @Field(() => loginTimeMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof loginTimeMaxOrderByAggregateInput>;
    @Field(() => loginTimeMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof loginTimeMinOrderByAggregateInput>;
}

@InputType()
export class loginTimeOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    author?: InstanceType<typeof UserOrderByWithRelationInput>;
}

@InputType()
export class loginTimeScalarWhereWithAggregatesInput {
    @Field(() => [loginTimeScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<loginTimeScalarWhereWithAggregatesInput>;
    @Field(() => [loginTimeScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<loginTimeScalarWhereWithAggregatesInput>;
    @Field(() => [loginTimeScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<loginTimeScalarWhereWithAggregatesInput>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    userId?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}

@InputType()
export class loginTimeScalarWhereInput {
    @Field(() => [loginTimeScalarWhereInput], {nullable:true})
    AND?: Array<loginTimeScalarWhereInput>;
    @Field(() => [loginTimeScalarWhereInput], {nullable:true})
    OR?: Array<loginTimeScalarWhereInput>;
    @Field(() => [loginTimeScalarWhereInput], {nullable:true})
    NOT?: Array<loginTimeScalarWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    userId?: InstanceType<typeof StringFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
}

@InputType()
export class loginTimeUncheckedCreateNestedManyWithoutAuthorInput {
    @Field(() => [loginTimeCreateWithoutAuthorInput], {nullable:true})
    @Type(() => loginTimeCreateWithoutAuthorInput)
    create?: Array<loginTimeCreateWithoutAuthorInput>;
    @Field(() => [loginTimeCreateOrConnectWithoutAuthorInput], {nullable:true})
    @Type(() => loginTimeCreateOrConnectWithoutAuthorInput)
    connectOrCreate?: Array<loginTimeCreateOrConnectWithoutAuthorInput>;
    @Field(() => loginTimeCreateManyAuthorInputEnvelope, {nullable:true})
    @Type(() => loginTimeCreateManyAuthorInputEnvelope)
    createMany?: InstanceType<typeof loginTimeCreateManyAuthorInputEnvelope>;
    @Field(() => [loginTimeWhereUniqueInput], {nullable:true})
    @Type(() => loginTimeWhereUniqueInput)
    connect?: Array<loginTimeWhereUniqueInput>;
}

@InputType()
export class loginTimeUncheckedCreateWithoutAuthorInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}

@InputType()
export class loginTimeUncheckedCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    userId!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}

@InputType()
export class loginTimeUncheckedUpdateManyWithoutAuthorNestedInput {
    @Field(() => [loginTimeCreateWithoutAuthorInput], {nullable:true})
    @Type(() => loginTimeCreateWithoutAuthorInput)
    create?: Array<loginTimeCreateWithoutAuthorInput>;
    @Field(() => [loginTimeCreateOrConnectWithoutAuthorInput], {nullable:true})
    @Type(() => loginTimeCreateOrConnectWithoutAuthorInput)
    connectOrCreate?: Array<loginTimeCreateOrConnectWithoutAuthorInput>;
    @Field(() => [loginTimeUpsertWithWhereUniqueWithoutAuthorInput], {nullable:true})
    @Type(() => loginTimeUpsertWithWhereUniqueWithoutAuthorInput)
    upsert?: Array<loginTimeUpsertWithWhereUniqueWithoutAuthorInput>;
    @Field(() => loginTimeCreateManyAuthorInputEnvelope, {nullable:true})
    @Type(() => loginTimeCreateManyAuthorInputEnvelope)
    createMany?: InstanceType<typeof loginTimeCreateManyAuthorInputEnvelope>;
    @Field(() => [loginTimeWhereUniqueInput], {nullable:true})
    @Type(() => loginTimeWhereUniqueInput)
    set?: Array<loginTimeWhereUniqueInput>;
    @Field(() => [loginTimeWhereUniqueInput], {nullable:true})
    @Type(() => loginTimeWhereUniqueInput)
    disconnect?: Array<loginTimeWhereUniqueInput>;
    @Field(() => [loginTimeWhereUniqueInput], {nullable:true})
    @Type(() => loginTimeWhereUniqueInput)
    delete?: Array<loginTimeWhereUniqueInput>;
    @Field(() => [loginTimeWhereUniqueInput], {nullable:true})
    @Type(() => loginTimeWhereUniqueInput)
    connect?: Array<loginTimeWhereUniqueInput>;
    @Field(() => [loginTimeUpdateWithWhereUniqueWithoutAuthorInput], {nullable:true})
    @Type(() => loginTimeUpdateWithWhereUniqueWithoutAuthorInput)
    update?: Array<loginTimeUpdateWithWhereUniqueWithoutAuthorInput>;
    @Field(() => [loginTimeUpdateManyWithWhereWithoutAuthorInput], {nullable:true})
    @Type(() => loginTimeUpdateManyWithWhereWithoutAuthorInput)
    updateMany?: Array<loginTimeUpdateManyWithWhereWithoutAuthorInput>;
    @Field(() => [loginTimeScalarWhereInput], {nullable:true})
    @Type(() => loginTimeScalarWhereInput)
    deleteMany?: Array<loginTimeScalarWhereInput>;
}

@InputType()
export class loginTimeUncheckedUpdateManyWithoutLoginTimeInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class loginTimeUncheckedUpdateManyInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    userId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class loginTimeUncheckedUpdateWithoutAuthorInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class loginTimeUncheckedUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    userId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class loginTimeUpdateManyMutationInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class loginTimeUpdateManyWithWhereWithoutAuthorInput {
    @Field(() => loginTimeScalarWhereInput, {nullable:false})
    @Type(() => loginTimeScalarWhereInput)
    where!: InstanceType<typeof loginTimeScalarWhereInput>;
    @Field(() => loginTimeUpdateManyMutationInput, {nullable:false})
    @Type(() => loginTimeUpdateManyMutationInput)
    data!: InstanceType<typeof loginTimeUpdateManyMutationInput>;
}

@InputType()
export class loginTimeUpdateManyWithoutAuthorNestedInput {
    @Field(() => [loginTimeCreateWithoutAuthorInput], {nullable:true})
    @Type(() => loginTimeCreateWithoutAuthorInput)
    create?: Array<loginTimeCreateWithoutAuthorInput>;
    @Field(() => [loginTimeCreateOrConnectWithoutAuthorInput], {nullable:true})
    @Type(() => loginTimeCreateOrConnectWithoutAuthorInput)
    connectOrCreate?: Array<loginTimeCreateOrConnectWithoutAuthorInput>;
    @Field(() => [loginTimeUpsertWithWhereUniqueWithoutAuthorInput], {nullable:true})
    @Type(() => loginTimeUpsertWithWhereUniqueWithoutAuthorInput)
    upsert?: Array<loginTimeUpsertWithWhereUniqueWithoutAuthorInput>;
    @Field(() => loginTimeCreateManyAuthorInputEnvelope, {nullable:true})
    @Type(() => loginTimeCreateManyAuthorInputEnvelope)
    createMany?: InstanceType<typeof loginTimeCreateManyAuthorInputEnvelope>;
    @Field(() => [loginTimeWhereUniqueInput], {nullable:true})
    @Type(() => loginTimeWhereUniqueInput)
    set?: Array<loginTimeWhereUniqueInput>;
    @Field(() => [loginTimeWhereUniqueInput], {nullable:true})
    @Type(() => loginTimeWhereUniqueInput)
    disconnect?: Array<loginTimeWhereUniqueInput>;
    @Field(() => [loginTimeWhereUniqueInput], {nullable:true})
    @Type(() => loginTimeWhereUniqueInput)
    delete?: Array<loginTimeWhereUniqueInput>;
    @Field(() => [loginTimeWhereUniqueInput], {nullable:true})
    @Type(() => loginTimeWhereUniqueInput)
    connect?: Array<loginTimeWhereUniqueInput>;
    @Field(() => [loginTimeUpdateWithWhereUniqueWithoutAuthorInput], {nullable:true})
    @Type(() => loginTimeUpdateWithWhereUniqueWithoutAuthorInput)
    update?: Array<loginTimeUpdateWithWhereUniqueWithoutAuthorInput>;
    @Field(() => [loginTimeUpdateManyWithWhereWithoutAuthorInput], {nullable:true})
    @Type(() => loginTimeUpdateManyWithWhereWithoutAuthorInput)
    updateMany?: Array<loginTimeUpdateManyWithWhereWithoutAuthorInput>;
    @Field(() => [loginTimeScalarWhereInput], {nullable:true})
    @Type(() => loginTimeScalarWhereInput)
    deleteMany?: Array<loginTimeScalarWhereInput>;
}

@InputType()
export class loginTimeUpdateWithWhereUniqueWithoutAuthorInput {
    @Field(() => loginTimeWhereUniqueInput, {nullable:false})
    @Type(() => loginTimeWhereUniqueInput)
    where!: InstanceType<typeof loginTimeWhereUniqueInput>;
    @Field(() => loginTimeUpdateWithoutAuthorInput, {nullable:false})
    @Type(() => loginTimeUpdateWithoutAuthorInput)
    data!: InstanceType<typeof loginTimeUpdateWithoutAuthorInput>;
}

@InputType()
export class loginTimeUpdateWithoutAuthorInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class loginTimeUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => UserUpdateOneRequiredWithoutLoginTimeNestedInput, {nullable:true})
    author?: InstanceType<typeof UserUpdateOneRequiredWithoutLoginTimeNestedInput>;
}

@InputType()
export class loginTimeUpsertWithWhereUniqueWithoutAuthorInput {
    @Field(() => loginTimeWhereUniqueInput, {nullable:false})
    @Type(() => loginTimeWhereUniqueInput)
    where!: InstanceType<typeof loginTimeWhereUniqueInput>;
    @Field(() => loginTimeUpdateWithoutAuthorInput, {nullable:false})
    @Type(() => loginTimeUpdateWithoutAuthorInput)
    update!: InstanceType<typeof loginTimeUpdateWithoutAuthorInput>;
    @Field(() => loginTimeCreateWithoutAuthorInput, {nullable:false})
    @Type(() => loginTimeCreateWithoutAuthorInput)
    create!: InstanceType<typeof loginTimeCreateWithoutAuthorInput>;
}

@InputType()
export class loginTimeWhereUniqueInput {
    @Field(() => String, {nullable:true})
    id?: string;
}

@InputType()
export class loginTimeWhereInput {
    @Field(() => [loginTimeWhereInput], {nullable:true})
    AND?: Array<loginTimeWhereInput>;
    @Field(() => [loginTimeWhereInput], {nullable:true})
    OR?: Array<loginTimeWhereInput>;
    @Field(() => [loginTimeWhereInput], {nullable:true})
    NOT?: Array<loginTimeWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    userId?: InstanceType<typeof StringFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => UserRelationFilter, {nullable:true})
    author?: InstanceType<typeof UserRelationFilter>;
}

@ObjectType()
export class loginTime {
    @Field(() => ID, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    userId!: string;
    @Field(() => Date, {nullable:false})
    createdAt!: Date;
    @Field(() => User, {nullable:false})
    author?: InstanceType<typeof User>;
}

@ArgsType()
export class UpdateManyloginTimeArgs {
    @Field(() => loginTimeUpdateManyMutationInput, {nullable:false})
    @Type(() => loginTimeUpdateManyMutationInput)
    data!: InstanceType<typeof loginTimeUpdateManyMutationInput>;
    @Field(() => loginTimeWhereInput, {nullable:true})
    @Type(() => loginTimeWhereInput)
    where?: InstanceType<typeof loginTimeWhereInput>;
}

@ArgsType()
export class UpdateOneloginTimeArgs {
    @Field(() => loginTimeUpdateInput, {nullable:false})
    @Type(() => loginTimeUpdateInput)
    data!: InstanceType<typeof loginTimeUpdateInput>;
    @Field(() => loginTimeWhereUniqueInput, {nullable:false})
    @Type(() => loginTimeWhereUniqueInput)
    where!: InstanceType<typeof loginTimeWhereUniqueInput>;
}

@ArgsType()
export class UpsertOneloginTimeArgs {
    @Field(() => loginTimeWhereUniqueInput, {nullable:false})
    @Type(() => loginTimeWhereUniqueInput)
    where!: InstanceType<typeof loginTimeWhereUniqueInput>;
    @Field(() => loginTimeCreateInput, {nullable:false})
    @Type(() => loginTimeCreateInput)
    create!: InstanceType<typeof loginTimeCreateInput>;
    @Field(() => loginTimeUpdateInput, {nullable:false})
    @Type(() => loginTimeUpdateInput)
    update!: InstanceType<typeof loginTimeUpdateInput>;
}

@ObjectType()
export class AggregateMessage {
    @Field(() => MessageCountAggregate, {nullable:true})
    _count?: InstanceType<typeof MessageCountAggregate>;
    @Field(() => MessageMinAggregate, {nullable:true})
    _min?: InstanceType<typeof MessageMinAggregate>;
    @Field(() => MessageMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof MessageMaxAggregate>;
}

@ArgsType()
export class CreateManyMessageArgs {
    @Field(() => [MessageCreateManyInput], {nullable:false})
    @Type(() => MessageCreateManyInput)
    data!: Array<MessageCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneMessageArgs {
    @Field(() => MessageCreateInput, {nullable:false})
    @Type(() => MessageCreateInput)
    data!: InstanceType<typeof MessageCreateInput>;
}

@ArgsType()
export class DeleteManyMessageArgs {
    @Field(() => MessageWhereInput, {nullable:true})
    @Type(() => MessageWhereInput)
    where?: InstanceType<typeof MessageWhereInput>;
}

@ArgsType()
export class DeleteOneMessageArgs {
    @Field(() => MessageWhereUniqueInput, {nullable:false})
    @Type(() => MessageWhereUniqueInput)
    where!: InstanceType<typeof MessageWhereUniqueInput>;
}

@ArgsType()
export class FindFirstMessageOrThrowArgs {
    @Field(() => MessageWhereInput, {nullable:true})
    @Type(() => MessageWhereInput)
    where?: InstanceType<typeof MessageWhereInput>;
    @Field(() => [MessageOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<MessageOrderByWithRelationInput>;
    @Field(() => MessageWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof MessageWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [MessageScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof MessageScalarFieldEnum>;
}

@ArgsType()
export class FindFirstMessageArgs {
    @Field(() => MessageWhereInput, {nullable:true})
    @Type(() => MessageWhereInput)
    where?: InstanceType<typeof MessageWhereInput>;
    @Field(() => [MessageOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<MessageOrderByWithRelationInput>;
    @Field(() => MessageWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof MessageWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [MessageScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof MessageScalarFieldEnum>;
}

@ArgsType()
export class FindManyMessageArgs {
    @Field(() => MessageWhereInput, {nullable:true})
    @Type(() => MessageWhereInput)
    where?: InstanceType<typeof MessageWhereInput>;
    @Field(() => [MessageOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<MessageOrderByWithRelationInput>;
    @Field(() => MessageWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof MessageWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [MessageScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof MessageScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueMessageOrThrowArgs {
    @Field(() => MessageWhereUniqueInput, {nullable:false})
    @Type(() => MessageWhereUniqueInput)
    where!: InstanceType<typeof MessageWhereUniqueInput>;
}

@ArgsType()
export class FindUniqueMessageArgs {
    @Field(() => MessageWhereUniqueInput, {nullable:false})
    @Type(() => MessageWhereUniqueInput)
    where!: InstanceType<typeof MessageWhereUniqueInput>;
}

@ArgsType()
export class MessageAggregateArgs {
    @Field(() => MessageWhereInput, {nullable:true})
    @Type(() => MessageWhereInput)
    where?: InstanceType<typeof MessageWhereInput>;
    @Field(() => [MessageOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<MessageOrderByWithRelationInput>;
    @Field(() => MessageWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof MessageWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => MessageCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof MessageCountAggregateInput>;
    @Field(() => MessageMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof MessageMinAggregateInput>;
    @Field(() => MessageMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof MessageMaxAggregateInput>;
}

@InputType()
export class MessageCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    message?: true;
    @Field(() => Boolean, {nullable:true})
    userId?: true;
    @Field(() => Boolean, {nullable:true})
    projectId?: true;
    @Field(() => Boolean, {nullable:true})
    messageRoomId?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class MessageCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    message!: number;
    @Field(() => Int, {nullable:false})
    userId!: number;
    @Field(() => Int, {nullable:false})
    projectId!: number;
    @Field(() => Int, {nullable:false})
    messageRoomId!: number;
    @Field(() => Int, {nullable:false})
    createdAt!: number;
    @Field(() => Int, {nullable:false})
    updatedAt!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class MessageCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    message?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    projectId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    messageRoomId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class MessageCreateManyAuthorInputEnvelope {
    @Field(() => [MessageCreateManyAuthorInput], {nullable:false})
    @Type(() => MessageCreateManyAuthorInput)
    data!: Array<MessageCreateManyAuthorInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@InputType()
export class MessageCreateManyAuthorInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    message!: string;
    @Field(() => String, {nullable:true})
    projectId?: string;
    @Field(() => String, {nullable:true})
    messageRoomId?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class MessageCreateManyMessageRoomInputEnvelope {
    @Field(() => [MessageCreateManyMessageRoomInput], {nullable:false})
    @Type(() => MessageCreateManyMessageRoomInput)
    data!: Array<MessageCreateManyMessageRoomInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@InputType()
export class MessageCreateManyMessageRoomInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    message!: string;
    @Field(() => String, {nullable:false})
    userId!: string;
    @Field(() => String, {nullable:true})
    projectId?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class MessageCreateManyProjectInputEnvelope {
    @Field(() => [MessageCreateManyProjectInput], {nullable:false})
    @Type(() => MessageCreateManyProjectInput)
    data!: Array<MessageCreateManyProjectInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@InputType()
export class MessageCreateManyProjectInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    message!: string;
    @Field(() => String, {nullable:false})
    userId!: string;
    @Field(() => String, {nullable:true})
    messageRoomId?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class MessageCreateManyInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    message!: string;
    @Field(() => String, {nullable:false})
    userId!: string;
    @Field(() => String, {nullable:true})
    projectId?: string;
    @Field(() => String, {nullable:true})
    messageRoomId?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class MessageCreateNestedManyWithoutAuthorInput {
    @Field(() => [MessageCreateWithoutAuthorInput], {nullable:true})
    @Type(() => MessageCreateWithoutAuthorInput)
    create?: Array<MessageCreateWithoutAuthorInput>;
    @Field(() => [MessageCreateOrConnectWithoutAuthorInput], {nullable:true})
    @Type(() => MessageCreateOrConnectWithoutAuthorInput)
    connectOrCreate?: Array<MessageCreateOrConnectWithoutAuthorInput>;
    @Field(() => MessageCreateManyAuthorInputEnvelope, {nullable:true})
    @Type(() => MessageCreateManyAuthorInputEnvelope)
    createMany?: InstanceType<typeof MessageCreateManyAuthorInputEnvelope>;
    @Field(() => [MessageWhereUniqueInput], {nullable:true})
    @Type(() => MessageWhereUniqueInput)
    connect?: Array<MessageWhereUniqueInput>;
}

@InputType()
export class MessageCreateNestedManyWithoutMessageRoomInput {
    @Field(() => [MessageCreateWithoutMessageRoomInput], {nullable:true})
    @Type(() => MessageCreateWithoutMessageRoomInput)
    create?: Array<MessageCreateWithoutMessageRoomInput>;
    @Field(() => [MessageCreateOrConnectWithoutMessageRoomInput], {nullable:true})
    @Type(() => MessageCreateOrConnectWithoutMessageRoomInput)
    connectOrCreate?: Array<MessageCreateOrConnectWithoutMessageRoomInput>;
    @Field(() => MessageCreateManyMessageRoomInputEnvelope, {nullable:true})
    @Type(() => MessageCreateManyMessageRoomInputEnvelope)
    createMany?: InstanceType<typeof MessageCreateManyMessageRoomInputEnvelope>;
    @Field(() => [MessageWhereUniqueInput], {nullable:true})
    @Type(() => MessageWhereUniqueInput)
    connect?: Array<MessageWhereUniqueInput>;
}

@InputType()
export class MessageCreateNestedManyWithoutProjectInput {
    @Field(() => [MessageCreateWithoutProjectInput], {nullable:true})
    @Type(() => MessageCreateWithoutProjectInput)
    create?: Array<MessageCreateWithoutProjectInput>;
    @Field(() => [MessageCreateOrConnectWithoutProjectInput], {nullable:true})
    @Type(() => MessageCreateOrConnectWithoutProjectInput)
    connectOrCreate?: Array<MessageCreateOrConnectWithoutProjectInput>;
    @Field(() => MessageCreateManyProjectInputEnvelope, {nullable:true})
    @Type(() => MessageCreateManyProjectInputEnvelope)
    createMany?: InstanceType<typeof MessageCreateManyProjectInputEnvelope>;
    @Field(() => [MessageWhereUniqueInput], {nullable:true})
    @Type(() => MessageWhereUniqueInput)
    connect?: Array<MessageWhereUniqueInput>;
}

@InputType()
export class MessageCreateOrConnectWithoutAuthorInput {
    @Field(() => MessageWhereUniqueInput, {nullable:false})
    @Type(() => MessageWhereUniqueInput)
    where!: InstanceType<typeof MessageWhereUniqueInput>;
    @Field(() => MessageCreateWithoutAuthorInput, {nullable:false})
    @Type(() => MessageCreateWithoutAuthorInput)
    create!: InstanceType<typeof MessageCreateWithoutAuthorInput>;
}

@InputType()
export class MessageCreateOrConnectWithoutMessageRoomInput {
    @Field(() => MessageWhereUniqueInput, {nullable:false})
    @Type(() => MessageWhereUniqueInput)
    where!: InstanceType<typeof MessageWhereUniqueInput>;
    @Field(() => MessageCreateWithoutMessageRoomInput, {nullable:false})
    @Type(() => MessageCreateWithoutMessageRoomInput)
    create!: InstanceType<typeof MessageCreateWithoutMessageRoomInput>;
}

@InputType()
export class MessageCreateOrConnectWithoutProjectInput {
    @Field(() => MessageWhereUniqueInput, {nullable:false})
    @Type(() => MessageWhereUniqueInput)
    where!: InstanceType<typeof MessageWhereUniqueInput>;
    @Field(() => MessageCreateWithoutProjectInput, {nullable:false})
    @Type(() => MessageCreateWithoutProjectInput)
    create!: InstanceType<typeof MessageCreateWithoutProjectInput>;
}

@InputType()
export class MessageCreateWithoutAuthorInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    message!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => ProjectCreateNestedOneWithoutMessageInput, {nullable:true})
    project?: InstanceType<typeof ProjectCreateNestedOneWithoutMessageInput>;
    @Field(() => MessageRoomCreateNestedOneWithoutMessageInput, {nullable:true})
    messageRoom?: InstanceType<typeof MessageRoomCreateNestedOneWithoutMessageInput>;
}

@InputType()
export class MessageCreateWithoutMessageRoomInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    message!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => ProjectCreateNestedOneWithoutMessageInput, {nullable:true})
    project?: InstanceType<typeof ProjectCreateNestedOneWithoutMessageInput>;
    @Field(() => UserCreateNestedOneWithoutMessageInput, {nullable:false})
    author!: InstanceType<typeof UserCreateNestedOneWithoutMessageInput>;
}

@InputType()
export class MessageCreateWithoutProjectInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    message!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => MessageRoomCreateNestedOneWithoutMessageInput, {nullable:true})
    messageRoom?: InstanceType<typeof MessageRoomCreateNestedOneWithoutMessageInput>;
    @Field(() => UserCreateNestedOneWithoutMessageInput, {nullable:false})
    author!: InstanceType<typeof UserCreateNestedOneWithoutMessageInput>;
}

@InputType()
export class MessageCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    message!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => ProjectCreateNestedOneWithoutMessageInput, {nullable:true})
    project?: InstanceType<typeof ProjectCreateNestedOneWithoutMessageInput>;
    @Field(() => MessageRoomCreateNestedOneWithoutMessageInput, {nullable:true})
    messageRoom?: InstanceType<typeof MessageRoomCreateNestedOneWithoutMessageInput>;
    @Field(() => UserCreateNestedOneWithoutMessageInput, {nullable:false})
    author!: InstanceType<typeof UserCreateNestedOneWithoutMessageInput>;
}

@ArgsType()
export class MessageGroupByArgs {
    @Field(() => MessageWhereInput, {nullable:true})
    @Type(() => MessageWhereInput)
    where?: InstanceType<typeof MessageWhereInput>;
    @Field(() => [MessageOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<MessageOrderByWithAggregationInput>;
    @Field(() => [MessageScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof MessageScalarFieldEnum>;
    @Field(() => MessageScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof MessageScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => MessageCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof MessageCountAggregateInput>;
    @Field(() => MessageMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof MessageMinAggregateInput>;
    @Field(() => MessageMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof MessageMaxAggregateInput>;
}

@ObjectType()
export class MessageGroupBy {
    @Field(() => String, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    message!: string;
    @Field(() => String, {nullable:false})
    userId!: string;
    @Field(() => String, {nullable:true})
    projectId?: string;
    @Field(() => String, {nullable:true})
    messageRoomId?: string;
    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;
    @Field(() => MessageCountAggregate, {nullable:true})
    _count?: InstanceType<typeof MessageCountAggregate>;
    @Field(() => MessageMinAggregate, {nullable:true})
    _min?: InstanceType<typeof MessageMinAggregate>;
    @Field(() => MessageMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof MessageMaxAggregate>;
}

@InputType()
export class MessageListRelationFilter {
    @Field(() => MessageWhereInput, {nullable:true})
    every?: InstanceType<typeof MessageWhereInput>;
    @Field(() => MessageWhereInput, {nullable:true})
    some?: InstanceType<typeof MessageWhereInput>;
    @Field(() => MessageWhereInput, {nullable:true})
    none?: InstanceType<typeof MessageWhereInput>;
}

@InputType()
export class MessageMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    message?: true;
    @Field(() => Boolean, {nullable:true})
    userId?: true;
    @Field(() => Boolean, {nullable:true})
    projectId?: true;
    @Field(() => Boolean, {nullable:true})
    messageRoomId?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}

@ObjectType()
export class MessageMaxAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    message?: string;
    @Field(() => String, {nullable:true})
    userId?: string;
    @Field(() => String, {nullable:true})
    projectId?: string;
    @Field(() => String, {nullable:true})
    messageRoomId?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class MessageMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    message?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    projectId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    messageRoomId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class MessageMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    message?: true;
    @Field(() => Boolean, {nullable:true})
    userId?: true;
    @Field(() => Boolean, {nullable:true})
    projectId?: true;
    @Field(() => Boolean, {nullable:true})
    messageRoomId?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}

@ObjectType()
export class MessageMinAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    message?: string;
    @Field(() => String, {nullable:true})
    userId?: string;
    @Field(() => String, {nullable:true})
    projectId?: string;
    @Field(() => String, {nullable:true})
    messageRoomId?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class MessageMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    message?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    projectId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    messageRoomId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class MessageOrderByRelationAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    _count?: keyof typeof SortOrder;
}

@InputType()
export class MessageOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    message?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;
    @Field(() => SortOrderInput, {nullable:true})
    projectId?: InstanceType<typeof SortOrderInput>;
    @Field(() => SortOrderInput, {nullable:true})
    messageRoomId?: InstanceType<typeof SortOrderInput>;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
    @Field(() => MessageCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof MessageCountOrderByAggregateInput>;
    @Field(() => MessageMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof MessageMaxOrderByAggregateInput>;
    @Field(() => MessageMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof MessageMinOrderByAggregateInput>;
}

@InputType()
export class MessageOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    message?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;
    @Field(() => SortOrderInput, {nullable:true})
    projectId?: InstanceType<typeof SortOrderInput>;
    @Field(() => SortOrderInput, {nullable:true})
    messageRoomId?: InstanceType<typeof SortOrderInput>;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
    @Field(() => ProjectOrderByWithRelationInput, {nullable:true})
    project?: InstanceType<typeof ProjectOrderByWithRelationInput>;
    @Field(() => MessageRoomOrderByWithRelationInput, {nullable:true})
    messageRoom?: InstanceType<typeof MessageRoomOrderByWithRelationInput>;
    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    author?: InstanceType<typeof UserOrderByWithRelationInput>;
}

@InputType()
export class MessageScalarWhereWithAggregatesInput {
    @Field(() => [MessageScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<MessageScalarWhereWithAggregatesInput>;
    @Field(() => [MessageScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<MessageScalarWhereWithAggregatesInput>;
    @Field(() => [MessageScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<MessageScalarWhereWithAggregatesInput>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    message?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    userId?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    projectId?: InstanceType<typeof StringNullableWithAggregatesFilter>;
    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    messageRoomId?: InstanceType<typeof StringNullableWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}

@InputType()
export class MessageScalarWhereInput {
    @Field(() => [MessageScalarWhereInput], {nullable:true})
    AND?: Array<MessageScalarWhereInput>;
    @Field(() => [MessageScalarWhereInput], {nullable:true})
    OR?: Array<MessageScalarWhereInput>;
    @Field(() => [MessageScalarWhereInput], {nullable:true})
    NOT?: Array<MessageScalarWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    message?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    userId?: InstanceType<typeof StringFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    projectId?: InstanceType<typeof StringNullableFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    messageRoomId?: InstanceType<typeof StringNullableFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
}

@InputType()
export class MessageUncheckedCreateNestedManyWithoutAuthorInput {
    @Field(() => [MessageCreateWithoutAuthorInput], {nullable:true})
    @Type(() => MessageCreateWithoutAuthorInput)
    create?: Array<MessageCreateWithoutAuthorInput>;
    @Field(() => [MessageCreateOrConnectWithoutAuthorInput], {nullable:true})
    @Type(() => MessageCreateOrConnectWithoutAuthorInput)
    connectOrCreate?: Array<MessageCreateOrConnectWithoutAuthorInput>;
    @Field(() => MessageCreateManyAuthorInputEnvelope, {nullable:true})
    @Type(() => MessageCreateManyAuthorInputEnvelope)
    createMany?: InstanceType<typeof MessageCreateManyAuthorInputEnvelope>;
    @Field(() => [MessageWhereUniqueInput], {nullable:true})
    @Type(() => MessageWhereUniqueInput)
    connect?: Array<MessageWhereUniqueInput>;
}

@InputType()
export class MessageUncheckedCreateNestedManyWithoutMessageRoomInput {
    @Field(() => [MessageCreateWithoutMessageRoomInput], {nullable:true})
    @Type(() => MessageCreateWithoutMessageRoomInput)
    create?: Array<MessageCreateWithoutMessageRoomInput>;
    @Field(() => [MessageCreateOrConnectWithoutMessageRoomInput], {nullable:true})
    @Type(() => MessageCreateOrConnectWithoutMessageRoomInput)
    connectOrCreate?: Array<MessageCreateOrConnectWithoutMessageRoomInput>;
    @Field(() => MessageCreateManyMessageRoomInputEnvelope, {nullable:true})
    @Type(() => MessageCreateManyMessageRoomInputEnvelope)
    createMany?: InstanceType<typeof MessageCreateManyMessageRoomInputEnvelope>;
    @Field(() => [MessageWhereUniqueInput], {nullable:true})
    @Type(() => MessageWhereUniqueInput)
    connect?: Array<MessageWhereUniqueInput>;
}

@InputType()
export class MessageUncheckedCreateNestedManyWithoutProjectInput {
    @Field(() => [MessageCreateWithoutProjectInput], {nullable:true})
    @Type(() => MessageCreateWithoutProjectInput)
    create?: Array<MessageCreateWithoutProjectInput>;
    @Field(() => [MessageCreateOrConnectWithoutProjectInput], {nullable:true})
    @Type(() => MessageCreateOrConnectWithoutProjectInput)
    connectOrCreate?: Array<MessageCreateOrConnectWithoutProjectInput>;
    @Field(() => MessageCreateManyProjectInputEnvelope, {nullable:true})
    @Type(() => MessageCreateManyProjectInputEnvelope)
    createMany?: InstanceType<typeof MessageCreateManyProjectInputEnvelope>;
    @Field(() => [MessageWhereUniqueInput], {nullable:true})
    @Type(() => MessageWhereUniqueInput)
    connect?: Array<MessageWhereUniqueInput>;
}

@InputType()
export class MessageUncheckedCreateWithoutAuthorInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    message!: string;
    @Field(() => String, {nullable:true})
    projectId?: string;
    @Field(() => String, {nullable:true})
    messageRoomId?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class MessageUncheckedCreateWithoutMessageRoomInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    message!: string;
    @Field(() => String, {nullable:false})
    userId!: string;
    @Field(() => String, {nullable:true})
    projectId?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class MessageUncheckedCreateWithoutProjectInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    message!: string;
    @Field(() => String, {nullable:false})
    userId!: string;
    @Field(() => String, {nullable:true})
    messageRoomId?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class MessageUncheckedCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    message!: string;
    @Field(() => String, {nullable:false})
    userId!: string;
    @Field(() => String, {nullable:true})
    projectId?: string;
    @Field(() => String, {nullable:true})
    messageRoomId?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class MessageUncheckedUpdateManyWithoutAuthorNestedInput {
    @Field(() => [MessageCreateWithoutAuthorInput], {nullable:true})
    @Type(() => MessageCreateWithoutAuthorInput)
    create?: Array<MessageCreateWithoutAuthorInput>;
    @Field(() => [MessageCreateOrConnectWithoutAuthorInput], {nullable:true})
    @Type(() => MessageCreateOrConnectWithoutAuthorInput)
    connectOrCreate?: Array<MessageCreateOrConnectWithoutAuthorInput>;
    @Field(() => [MessageUpsertWithWhereUniqueWithoutAuthorInput], {nullable:true})
    @Type(() => MessageUpsertWithWhereUniqueWithoutAuthorInput)
    upsert?: Array<MessageUpsertWithWhereUniqueWithoutAuthorInput>;
    @Field(() => MessageCreateManyAuthorInputEnvelope, {nullable:true})
    @Type(() => MessageCreateManyAuthorInputEnvelope)
    createMany?: InstanceType<typeof MessageCreateManyAuthorInputEnvelope>;
    @Field(() => [MessageWhereUniqueInput], {nullable:true})
    @Type(() => MessageWhereUniqueInput)
    set?: Array<MessageWhereUniqueInput>;
    @Field(() => [MessageWhereUniqueInput], {nullable:true})
    @Type(() => MessageWhereUniqueInput)
    disconnect?: Array<MessageWhereUniqueInput>;
    @Field(() => [MessageWhereUniqueInput], {nullable:true})
    @Type(() => MessageWhereUniqueInput)
    delete?: Array<MessageWhereUniqueInput>;
    @Field(() => [MessageWhereUniqueInput], {nullable:true})
    @Type(() => MessageWhereUniqueInput)
    connect?: Array<MessageWhereUniqueInput>;
    @Field(() => [MessageUpdateWithWhereUniqueWithoutAuthorInput], {nullable:true})
    @Type(() => MessageUpdateWithWhereUniqueWithoutAuthorInput)
    update?: Array<MessageUpdateWithWhereUniqueWithoutAuthorInput>;
    @Field(() => [MessageUpdateManyWithWhereWithoutAuthorInput], {nullable:true})
    @Type(() => MessageUpdateManyWithWhereWithoutAuthorInput)
    updateMany?: Array<MessageUpdateManyWithWhereWithoutAuthorInput>;
    @Field(() => [MessageScalarWhereInput], {nullable:true})
    @Type(() => MessageScalarWhereInput)
    deleteMany?: Array<MessageScalarWhereInput>;
}

@InputType()
export class MessageUncheckedUpdateManyWithoutMessageRoomNestedInput {
    @Field(() => [MessageCreateWithoutMessageRoomInput], {nullable:true})
    @Type(() => MessageCreateWithoutMessageRoomInput)
    create?: Array<MessageCreateWithoutMessageRoomInput>;
    @Field(() => [MessageCreateOrConnectWithoutMessageRoomInput], {nullable:true})
    @Type(() => MessageCreateOrConnectWithoutMessageRoomInput)
    connectOrCreate?: Array<MessageCreateOrConnectWithoutMessageRoomInput>;
    @Field(() => [MessageUpsertWithWhereUniqueWithoutMessageRoomInput], {nullable:true})
    @Type(() => MessageUpsertWithWhereUniqueWithoutMessageRoomInput)
    upsert?: Array<MessageUpsertWithWhereUniqueWithoutMessageRoomInput>;
    @Field(() => MessageCreateManyMessageRoomInputEnvelope, {nullable:true})
    @Type(() => MessageCreateManyMessageRoomInputEnvelope)
    createMany?: InstanceType<typeof MessageCreateManyMessageRoomInputEnvelope>;
    @Field(() => [MessageWhereUniqueInput], {nullable:true})
    @Type(() => MessageWhereUniqueInput)
    set?: Array<MessageWhereUniqueInput>;
    @Field(() => [MessageWhereUniqueInput], {nullable:true})
    @Type(() => MessageWhereUniqueInput)
    disconnect?: Array<MessageWhereUniqueInput>;
    @Field(() => [MessageWhereUniqueInput], {nullable:true})
    @Type(() => MessageWhereUniqueInput)
    delete?: Array<MessageWhereUniqueInput>;
    @Field(() => [MessageWhereUniqueInput], {nullable:true})
    @Type(() => MessageWhereUniqueInput)
    connect?: Array<MessageWhereUniqueInput>;
    @Field(() => [MessageUpdateWithWhereUniqueWithoutMessageRoomInput], {nullable:true})
    @Type(() => MessageUpdateWithWhereUniqueWithoutMessageRoomInput)
    update?: Array<MessageUpdateWithWhereUniqueWithoutMessageRoomInput>;
    @Field(() => [MessageUpdateManyWithWhereWithoutMessageRoomInput], {nullable:true})
    @Type(() => MessageUpdateManyWithWhereWithoutMessageRoomInput)
    updateMany?: Array<MessageUpdateManyWithWhereWithoutMessageRoomInput>;
    @Field(() => [MessageScalarWhereInput], {nullable:true})
    @Type(() => MessageScalarWhereInput)
    deleteMany?: Array<MessageScalarWhereInput>;
}

@InputType()
export class MessageUncheckedUpdateManyWithoutMessageInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    message?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    projectId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    messageRoomId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class MessageUncheckedUpdateManyWithoutProjectNestedInput {
    @Field(() => [MessageCreateWithoutProjectInput], {nullable:true})
    @Type(() => MessageCreateWithoutProjectInput)
    create?: Array<MessageCreateWithoutProjectInput>;
    @Field(() => [MessageCreateOrConnectWithoutProjectInput], {nullable:true})
    @Type(() => MessageCreateOrConnectWithoutProjectInput)
    connectOrCreate?: Array<MessageCreateOrConnectWithoutProjectInput>;
    @Field(() => [MessageUpsertWithWhereUniqueWithoutProjectInput], {nullable:true})
    @Type(() => MessageUpsertWithWhereUniqueWithoutProjectInput)
    upsert?: Array<MessageUpsertWithWhereUniqueWithoutProjectInput>;
    @Field(() => MessageCreateManyProjectInputEnvelope, {nullable:true})
    @Type(() => MessageCreateManyProjectInputEnvelope)
    createMany?: InstanceType<typeof MessageCreateManyProjectInputEnvelope>;
    @Field(() => [MessageWhereUniqueInput], {nullable:true})
    @Type(() => MessageWhereUniqueInput)
    set?: Array<MessageWhereUniqueInput>;
    @Field(() => [MessageWhereUniqueInput], {nullable:true})
    @Type(() => MessageWhereUniqueInput)
    disconnect?: Array<MessageWhereUniqueInput>;
    @Field(() => [MessageWhereUniqueInput], {nullable:true})
    @Type(() => MessageWhereUniqueInput)
    delete?: Array<MessageWhereUniqueInput>;
    @Field(() => [MessageWhereUniqueInput], {nullable:true})
    @Type(() => MessageWhereUniqueInput)
    connect?: Array<MessageWhereUniqueInput>;
    @Field(() => [MessageUpdateWithWhereUniqueWithoutProjectInput], {nullable:true})
    @Type(() => MessageUpdateWithWhereUniqueWithoutProjectInput)
    update?: Array<MessageUpdateWithWhereUniqueWithoutProjectInput>;
    @Field(() => [MessageUpdateManyWithWhereWithoutProjectInput], {nullable:true})
    @Type(() => MessageUpdateManyWithWhereWithoutProjectInput)
    updateMany?: Array<MessageUpdateManyWithWhereWithoutProjectInput>;
    @Field(() => [MessageScalarWhereInput], {nullable:true})
    @Type(() => MessageScalarWhereInput)
    deleteMany?: Array<MessageScalarWhereInput>;
}

@InputType()
export class MessageUncheckedUpdateManyInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    message?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    userId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    projectId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    messageRoomId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class MessageUncheckedUpdateWithoutAuthorInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    message?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    projectId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    messageRoomId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class MessageUncheckedUpdateWithoutMessageRoomInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    message?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    userId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    projectId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class MessageUncheckedUpdateWithoutProjectInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    message?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    userId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    messageRoomId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class MessageUncheckedUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    message?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    userId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    projectId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    messageRoomId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class MessageUpdateManyMutationInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    message?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class MessageUpdateManyWithWhereWithoutAuthorInput {
    @Field(() => MessageScalarWhereInput, {nullable:false})
    @Type(() => MessageScalarWhereInput)
    where!: InstanceType<typeof MessageScalarWhereInput>;
    @Field(() => MessageUpdateManyMutationInput, {nullable:false})
    @Type(() => MessageUpdateManyMutationInput)
    data!: InstanceType<typeof MessageUpdateManyMutationInput>;
}

@InputType()
export class MessageUpdateManyWithWhereWithoutMessageRoomInput {
    @Field(() => MessageScalarWhereInput, {nullable:false})
    @Type(() => MessageScalarWhereInput)
    where!: InstanceType<typeof MessageScalarWhereInput>;
    @Field(() => MessageUpdateManyMutationInput, {nullable:false})
    @Type(() => MessageUpdateManyMutationInput)
    data!: InstanceType<typeof MessageUpdateManyMutationInput>;
}

@InputType()
export class MessageUpdateManyWithWhereWithoutProjectInput {
    @Field(() => MessageScalarWhereInput, {nullable:false})
    @Type(() => MessageScalarWhereInput)
    where!: InstanceType<typeof MessageScalarWhereInput>;
    @Field(() => MessageUpdateManyMutationInput, {nullable:false})
    @Type(() => MessageUpdateManyMutationInput)
    data!: InstanceType<typeof MessageUpdateManyMutationInput>;
}

@InputType()
export class MessageUpdateManyWithoutAuthorNestedInput {
    @Field(() => [MessageCreateWithoutAuthorInput], {nullable:true})
    @Type(() => MessageCreateWithoutAuthorInput)
    create?: Array<MessageCreateWithoutAuthorInput>;
    @Field(() => [MessageCreateOrConnectWithoutAuthorInput], {nullable:true})
    @Type(() => MessageCreateOrConnectWithoutAuthorInput)
    connectOrCreate?: Array<MessageCreateOrConnectWithoutAuthorInput>;
    @Field(() => [MessageUpsertWithWhereUniqueWithoutAuthorInput], {nullable:true})
    @Type(() => MessageUpsertWithWhereUniqueWithoutAuthorInput)
    upsert?: Array<MessageUpsertWithWhereUniqueWithoutAuthorInput>;
    @Field(() => MessageCreateManyAuthorInputEnvelope, {nullable:true})
    @Type(() => MessageCreateManyAuthorInputEnvelope)
    createMany?: InstanceType<typeof MessageCreateManyAuthorInputEnvelope>;
    @Field(() => [MessageWhereUniqueInput], {nullable:true})
    @Type(() => MessageWhereUniqueInput)
    set?: Array<MessageWhereUniqueInput>;
    @Field(() => [MessageWhereUniqueInput], {nullable:true})
    @Type(() => MessageWhereUniqueInput)
    disconnect?: Array<MessageWhereUniqueInput>;
    @Field(() => [MessageWhereUniqueInput], {nullable:true})
    @Type(() => MessageWhereUniqueInput)
    delete?: Array<MessageWhereUniqueInput>;
    @Field(() => [MessageWhereUniqueInput], {nullable:true})
    @Type(() => MessageWhereUniqueInput)
    connect?: Array<MessageWhereUniqueInput>;
    @Field(() => [MessageUpdateWithWhereUniqueWithoutAuthorInput], {nullable:true})
    @Type(() => MessageUpdateWithWhereUniqueWithoutAuthorInput)
    update?: Array<MessageUpdateWithWhereUniqueWithoutAuthorInput>;
    @Field(() => [MessageUpdateManyWithWhereWithoutAuthorInput], {nullable:true})
    @Type(() => MessageUpdateManyWithWhereWithoutAuthorInput)
    updateMany?: Array<MessageUpdateManyWithWhereWithoutAuthorInput>;
    @Field(() => [MessageScalarWhereInput], {nullable:true})
    @Type(() => MessageScalarWhereInput)
    deleteMany?: Array<MessageScalarWhereInput>;
}

@InputType()
export class MessageUpdateManyWithoutMessageRoomNestedInput {
    @Field(() => [MessageCreateWithoutMessageRoomInput], {nullable:true})
    @Type(() => MessageCreateWithoutMessageRoomInput)
    create?: Array<MessageCreateWithoutMessageRoomInput>;
    @Field(() => [MessageCreateOrConnectWithoutMessageRoomInput], {nullable:true})
    @Type(() => MessageCreateOrConnectWithoutMessageRoomInput)
    connectOrCreate?: Array<MessageCreateOrConnectWithoutMessageRoomInput>;
    @Field(() => [MessageUpsertWithWhereUniqueWithoutMessageRoomInput], {nullable:true})
    @Type(() => MessageUpsertWithWhereUniqueWithoutMessageRoomInput)
    upsert?: Array<MessageUpsertWithWhereUniqueWithoutMessageRoomInput>;
    @Field(() => MessageCreateManyMessageRoomInputEnvelope, {nullable:true})
    @Type(() => MessageCreateManyMessageRoomInputEnvelope)
    createMany?: InstanceType<typeof MessageCreateManyMessageRoomInputEnvelope>;
    @Field(() => [MessageWhereUniqueInput], {nullable:true})
    @Type(() => MessageWhereUniqueInput)
    set?: Array<MessageWhereUniqueInput>;
    @Field(() => [MessageWhereUniqueInput], {nullable:true})
    @Type(() => MessageWhereUniqueInput)
    disconnect?: Array<MessageWhereUniqueInput>;
    @Field(() => [MessageWhereUniqueInput], {nullable:true})
    @Type(() => MessageWhereUniqueInput)
    delete?: Array<MessageWhereUniqueInput>;
    @Field(() => [MessageWhereUniqueInput], {nullable:true})
    @Type(() => MessageWhereUniqueInput)
    connect?: Array<MessageWhereUniqueInput>;
    @Field(() => [MessageUpdateWithWhereUniqueWithoutMessageRoomInput], {nullable:true})
    @Type(() => MessageUpdateWithWhereUniqueWithoutMessageRoomInput)
    update?: Array<MessageUpdateWithWhereUniqueWithoutMessageRoomInput>;
    @Field(() => [MessageUpdateManyWithWhereWithoutMessageRoomInput], {nullable:true})
    @Type(() => MessageUpdateManyWithWhereWithoutMessageRoomInput)
    updateMany?: Array<MessageUpdateManyWithWhereWithoutMessageRoomInput>;
    @Field(() => [MessageScalarWhereInput], {nullable:true})
    @Type(() => MessageScalarWhereInput)
    deleteMany?: Array<MessageScalarWhereInput>;
}

@InputType()
export class MessageUpdateManyWithoutProjectNestedInput {
    @Field(() => [MessageCreateWithoutProjectInput], {nullable:true})
    @Type(() => MessageCreateWithoutProjectInput)
    create?: Array<MessageCreateWithoutProjectInput>;
    @Field(() => [MessageCreateOrConnectWithoutProjectInput], {nullable:true})
    @Type(() => MessageCreateOrConnectWithoutProjectInput)
    connectOrCreate?: Array<MessageCreateOrConnectWithoutProjectInput>;
    @Field(() => [MessageUpsertWithWhereUniqueWithoutProjectInput], {nullable:true})
    @Type(() => MessageUpsertWithWhereUniqueWithoutProjectInput)
    upsert?: Array<MessageUpsertWithWhereUniqueWithoutProjectInput>;
    @Field(() => MessageCreateManyProjectInputEnvelope, {nullable:true})
    @Type(() => MessageCreateManyProjectInputEnvelope)
    createMany?: InstanceType<typeof MessageCreateManyProjectInputEnvelope>;
    @Field(() => [MessageWhereUniqueInput], {nullable:true})
    @Type(() => MessageWhereUniqueInput)
    set?: Array<MessageWhereUniqueInput>;
    @Field(() => [MessageWhereUniqueInput], {nullable:true})
    @Type(() => MessageWhereUniqueInput)
    disconnect?: Array<MessageWhereUniqueInput>;
    @Field(() => [MessageWhereUniqueInput], {nullable:true})
    @Type(() => MessageWhereUniqueInput)
    delete?: Array<MessageWhereUniqueInput>;
    @Field(() => [MessageWhereUniqueInput], {nullable:true})
    @Type(() => MessageWhereUniqueInput)
    connect?: Array<MessageWhereUniqueInput>;
    @Field(() => [MessageUpdateWithWhereUniqueWithoutProjectInput], {nullable:true})
    @Type(() => MessageUpdateWithWhereUniqueWithoutProjectInput)
    update?: Array<MessageUpdateWithWhereUniqueWithoutProjectInput>;
    @Field(() => [MessageUpdateManyWithWhereWithoutProjectInput], {nullable:true})
    @Type(() => MessageUpdateManyWithWhereWithoutProjectInput)
    updateMany?: Array<MessageUpdateManyWithWhereWithoutProjectInput>;
    @Field(() => [MessageScalarWhereInput], {nullable:true})
    @Type(() => MessageScalarWhereInput)
    deleteMany?: Array<MessageScalarWhereInput>;
}

@InputType()
export class MessageUpdateWithWhereUniqueWithoutAuthorInput {
    @Field(() => MessageWhereUniqueInput, {nullable:false})
    @Type(() => MessageWhereUniqueInput)
    where!: InstanceType<typeof MessageWhereUniqueInput>;
    @Field(() => MessageUpdateWithoutAuthorInput, {nullable:false})
    @Type(() => MessageUpdateWithoutAuthorInput)
    data!: InstanceType<typeof MessageUpdateWithoutAuthorInput>;
}

@InputType()
export class MessageUpdateWithWhereUniqueWithoutMessageRoomInput {
    @Field(() => MessageWhereUniqueInput, {nullable:false})
    @Type(() => MessageWhereUniqueInput)
    where!: InstanceType<typeof MessageWhereUniqueInput>;
    @Field(() => MessageUpdateWithoutMessageRoomInput, {nullable:false})
    @Type(() => MessageUpdateWithoutMessageRoomInput)
    data!: InstanceType<typeof MessageUpdateWithoutMessageRoomInput>;
}

@InputType()
export class MessageUpdateWithWhereUniqueWithoutProjectInput {
    @Field(() => MessageWhereUniqueInput, {nullable:false})
    @Type(() => MessageWhereUniqueInput)
    where!: InstanceType<typeof MessageWhereUniqueInput>;
    @Field(() => MessageUpdateWithoutProjectInput, {nullable:false})
    @Type(() => MessageUpdateWithoutProjectInput)
    data!: InstanceType<typeof MessageUpdateWithoutProjectInput>;
}

@InputType()
export class MessageUpdateWithoutAuthorInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    message?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => ProjectUpdateOneWithoutMessageNestedInput, {nullable:true})
    project?: InstanceType<typeof ProjectUpdateOneWithoutMessageNestedInput>;
    @Field(() => MessageRoomUpdateOneWithoutMessageNestedInput, {nullable:true})
    messageRoom?: InstanceType<typeof MessageRoomUpdateOneWithoutMessageNestedInput>;
}

@InputType()
export class MessageUpdateWithoutMessageRoomInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    message?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => ProjectUpdateOneWithoutMessageNestedInput, {nullable:true})
    project?: InstanceType<typeof ProjectUpdateOneWithoutMessageNestedInput>;
    @Field(() => UserUpdateOneRequiredWithoutMessageNestedInput, {nullable:true})
    author?: InstanceType<typeof UserUpdateOneRequiredWithoutMessageNestedInput>;
}

@InputType()
export class MessageUpdateWithoutProjectInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    message?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => MessageRoomUpdateOneWithoutMessageNestedInput, {nullable:true})
    messageRoom?: InstanceType<typeof MessageRoomUpdateOneWithoutMessageNestedInput>;
    @Field(() => UserUpdateOneRequiredWithoutMessageNestedInput, {nullable:true})
    author?: InstanceType<typeof UserUpdateOneRequiredWithoutMessageNestedInput>;
}

@InputType()
export class MessageUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    message?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => ProjectUpdateOneWithoutMessageNestedInput, {nullable:true})
    project?: InstanceType<typeof ProjectUpdateOneWithoutMessageNestedInput>;
    @Field(() => MessageRoomUpdateOneWithoutMessageNestedInput, {nullable:true})
    messageRoom?: InstanceType<typeof MessageRoomUpdateOneWithoutMessageNestedInput>;
    @Field(() => UserUpdateOneRequiredWithoutMessageNestedInput, {nullable:true})
    author?: InstanceType<typeof UserUpdateOneRequiredWithoutMessageNestedInput>;
}

@InputType()
export class MessageUpsertWithWhereUniqueWithoutAuthorInput {
    @Field(() => MessageWhereUniqueInput, {nullable:false})
    @Type(() => MessageWhereUniqueInput)
    where!: InstanceType<typeof MessageWhereUniqueInput>;
    @Field(() => MessageUpdateWithoutAuthorInput, {nullable:false})
    @Type(() => MessageUpdateWithoutAuthorInput)
    update!: InstanceType<typeof MessageUpdateWithoutAuthorInput>;
    @Field(() => MessageCreateWithoutAuthorInput, {nullable:false})
    @Type(() => MessageCreateWithoutAuthorInput)
    create!: InstanceType<typeof MessageCreateWithoutAuthorInput>;
}

@InputType()
export class MessageUpsertWithWhereUniqueWithoutMessageRoomInput {
    @Field(() => MessageWhereUniqueInput, {nullable:false})
    @Type(() => MessageWhereUniqueInput)
    where!: InstanceType<typeof MessageWhereUniqueInput>;
    @Field(() => MessageUpdateWithoutMessageRoomInput, {nullable:false})
    @Type(() => MessageUpdateWithoutMessageRoomInput)
    update!: InstanceType<typeof MessageUpdateWithoutMessageRoomInput>;
    @Field(() => MessageCreateWithoutMessageRoomInput, {nullable:false})
    @Type(() => MessageCreateWithoutMessageRoomInput)
    create!: InstanceType<typeof MessageCreateWithoutMessageRoomInput>;
}

@InputType()
export class MessageUpsertWithWhereUniqueWithoutProjectInput {
    @Field(() => MessageWhereUniqueInput, {nullable:false})
    @Type(() => MessageWhereUniqueInput)
    where!: InstanceType<typeof MessageWhereUniqueInput>;
    @Field(() => MessageUpdateWithoutProjectInput, {nullable:false})
    @Type(() => MessageUpdateWithoutProjectInput)
    update!: InstanceType<typeof MessageUpdateWithoutProjectInput>;
    @Field(() => MessageCreateWithoutProjectInput, {nullable:false})
    @Type(() => MessageCreateWithoutProjectInput)
    create!: InstanceType<typeof MessageCreateWithoutProjectInput>;
}

@InputType()
export class MessageWhereUniqueInput {
    @Field(() => String, {nullable:true})
    id?: string;
}

@InputType()
export class MessageWhereInput {
    @Field(() => [MessageWhereInput], {nullable:true})
    AND?: Array<MessageWhereInput>;
    @Field(() => [MessageWhereInput], {nullable:true})
    OR?: Array<MessageWhereInput>;
    @Field(() => [MessageWhereInput], {nullable:true})
    NOT?: Array<MessageWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    message?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    userId?: InstanceType<typeof StringFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    projectId?: InstanceType<typeof StringNullableFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    messageRoomId?: InstanceType<typeof StringNullableFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => ProjectRelationFilter, {nullable:true})
    project?: InstanceType<typeof ProjectRelationFilter>;
    @Field(() => MessageRoomRelationFilter, {nullable:true})
    messageRoom?: InstanceType<typeof MessageRoomRelationFilter>;
    @Field(() => UserRelationFilter, {nullable:true})
    author?: InstanceType<typeof UserRelationFilter>;
}

@ObjectType()
export class Message {
    @Field(() => ID, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    message!: string;
    @Field(() => String, {nullable:false})
    userId!: string;
    @Field(() => String, {nullable:true})
    projectId!: string | null;
    @Field(() => String, {nullable:true})
    messageRoomId!: string | null;
    @Field(() => Date, {nullable:false})
    createdAt!: Date;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date;
    @Field(() => Project, {nullable:true})
    project?: InstanceType<typeof Project> | null;
    @Field(() => MessageRoom, {nullable:true})
    messageRoom?: InstanceType<typeof MessageRoom> | null;
    @Field(() => User, {nullable:false})
    author?: InstanceType<typeof User>;
}

@ArgsType()
export class UpdateManyMessageArgs {
    @Field(() => MessageUpdateManyMutationInput, {nullable:false})
    @Type(() => MessageUpdateManyMutationInput)
    data!: InstanceType<typeof MessageUpdateManyMutationInput>;
    @Field(() => MessageWhereInput, {nullable:true})
    @Type(() => MessageWhereInput)
    where?: InstanceType<typeof MessageWhereInput>;
}

@ArgsType()
export class UpdateOneMessageArgs {
    @Field(() => MessageUpdateInput, {nullable:false})
    @Type(() => MessageUpdateInput)
    data!: InstanceType<typeof MessageUpdateInput>;
    @Field(() => MessageWhereUniqueInput, {nullable:false})
    @Type(() => MessageWhereUniqueInput)
    where!: InstanceType<typeof MessageWhereUniqueInput>;
}

@ArgsType()
export class UpsertOneMessageArgs {
    @Field(() => MessageWhereUniqueInput, {nullable:false})
    @Type(() => MessageWhereUniqueInput)
    where!: InstanceType<typeof MessageWhereUniqueInput>;
    @Field(() => MessageCreateInput, {nullable:false})
    @Type(() => MessageCreateInput)
    create!: InstanceType<typeof MessageCreateInput>;
    @Field(() => MessageUpdateInput, {nullable:false})
    @Type(() => MessageUpdateInput)
    update!: InstanceType<typeof MessageUpdateInput>;
}

@ObjectType()
export class AggregateMessageRoom {
    @Field(() => MessageRoomCountAggregate, {nullable:true})
    _count?: InstanceType<typeof MessageRoomCountAggregate>;
    @Field(() => MessageRoomMinAggregate, {nullable:true})
    _min?: InstanceType<typeof MessageRoomMinAggregate>;
    @Field(() => MessageRoomMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof MessageRoomMaxAggregate>;
}

@ArgsType()
export class CreateManyMessageRoomArgs {
    @Field(() => [MessageRoomCreateManyInput], {nullable:false})
    @Type(() => MessageRoomCreateManyInput)
    data!: Array<MessageRoomCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneMessageRoomArgs {
    @Field(() => MessageRoomCreateInput, {nullable:true})
    @Type(() => MessageRoomCreateInput)
    data?: InstanceType<typeof MessageRoomCreateInput>;
}

@ArgsType()
export class DeleteManyMessageRoomArgs {
    @Field(() => MessageRoomWhereInput, {nullable:true})
    @Type(() => MessageRoomWhereInput)
    where?: InstanceType<typeof MessageRoomWhereInput>;
}

@ArgsType()
export class DeleteOneMessageRoomArgs {
    @Field(() => MessageRoomWhereUniqueInput, {nullable:false})
    @Type(() => MessageRoomWhereUniqueInput)
    where!: InstanceType<typeof MessageRoomWhereUniqueInput>;
}

@ArgsType()
export class FindFirstMessageRoomOrThrowArgs {
    @Field(() => MessageRoomWhereInput, {nullable:true})
    @Type(() => MessageRoomWhereInput)
    where?: InstanceType<typeof MessageRoomWhereInput>;
    @Field(() => [MessageRoomOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<MessageRoomOrderByWithRelationInput>;
    @Field(() => MessageRoomWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof MessageRoomWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [MessageRoomScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof MessageRoomScalarFieldEnum>;
}

@ArgsType()
export class FindFirstMessageRoomArgs {
    @Field(() => MessageRoomWhereInput, {nullable:true})
    @Type(() => MessageRoomWhereInput)
    where?: InstanceType<typeof MessageRoomWhereInput>;
    @Field(() => [MessageRoomOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<MessageRoomOrderByWithRelationInput>;
    @Field(() => MessageRoomWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof MessageRoomWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [MessageRoomScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof MessageRoomScalarFieldEnum>;
}

@ArgsType()
export class FindManyMessageRoomArgs {
    @Field(() => MessageRoomWhereInput, {nullable:true})
    @Type(() => MessageRoomWhereInput)
    where?: InstanceType<typeof MessageRoomWhereInput>;
    @Field(() => [MessageRoomOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<MessageRoomOrderByWithRelationInput>;
    @Field(() => MessageRoomWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof MessageRoomWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [MessageRoomScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof MessageRoomScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueMessageRoomOrThrowArgs {
    @Field(() => MessageRoomWhereUniqueInput, {nullable:false})
    @Type(() => MessageRoomWhereUniqueInput)
    where!: InstanceType<typeof MessageRoomWhereUniqueInput>;
}

@ArgsType()
export class FindUniqueMessageRoomArgs {
    @Field(() => MessageRoomWhereUniqueInput, {nullable:false})
    @Type(() => MessageRoomWhereUniqueInput)
    where!: InstanceType<typeof MessageRoomWhereUniqueInput>;
}

@ArgsType()
export class MessageRoomAggregateArgs {
    @Field(() => MessageRoomWhereInput, {nullable:true})
    @Type(() => MessageRoomWhereInput)
    where?: InstanceType<typeof MessageRoomWhereInput>;
    @Field(() => [MessageRoomOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<MessageRoomOrderByWithRelationInput>;
    @Field(() => MessageRoomWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof MessageRoomWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => MessageRoomCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof MessageRoomCountAggregateInput>;
    @Field(() => MessageRoomMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof MessageRoomMinAggregateInput>;
    @Field(() => MessageRoomMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof MessageRoomMaxAggregateInput>;
}

@InputType()
export class MessageRoomCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class MessageRoomCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class MessageRoomCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
}

@ObjectType()
export class MessageRoomCount {
    @Field(() => Int, {nullable:false})
    UserMessageRoom?: number;
    @Field(() => Int, {nullable:false})
    Message?: number;
    @Field(() => Int, {nullable:false})
    File?: number;
}

@InputType()
export class MessageRoomCreateManyInput {
    @Field(() => String, {nullable:true})
    id?: string;
}

@InputType()
export class MessageRoomCreateNestedOneWithoutFileInput {
    @Field(() => MessageRoomCreateWithoutFileInput, {nullable:true})
    @Type(() => MessageRoomCreateWithoutFileInput)
    create?: InstanceType<typeof MessageRoomCreateWithoutFileInput>;
    @Field(() => MessageRoomCreateOrConnectWithoutFileInput, {nullable:true})
    @Type(() => MessageRoomCreateOrConnectWithoutFileInput)
    connectOrCreate?: InstanceType<typeof MessageRoomCreateOrConnectWithoutFileInput>;
    @Field(() => MessageRoomWhereUniqueInput, {nullable:true})
    @Type(() => MessageRoomWhereUniqueInput)
    connect?: InstanceType<typeof MessageRoomWhereUniqueInput>;
}

@InputType()
export class MessageRoomCreateNestedOneWithoutMessageInput {
    @Field(() => MessageRoomCreateWithoutMessageInput, {nullable:true})
    @Type(() => MessageRoomCreateWithoutMessageInput)
    create?: InstanceType<typeof MessageRoomCreateWithoutMessageInput>;
    @Field(() => MessageRoomCreateOrConnectWithoutMessageInput, {nullable:true})
    @Type(() => MessageRoomCreateOrConnectWithoutMessageInput)
    connectOrCreate?: InstanceType<typeof MessageRoomCreateOrConnectWithoutMessageInput>;
    @Field(() => MessageRoomWhereUniqueInput, {nullable:true})
    @Type(() => MessageRoomWhereUniqueInput)
    connect?: InstanceType<typeof MessageRoomWhereUniqueInput>;
}

@InputType()
export class MessageRoomCreateNestedOneWithoutUserMessageRoomInput {
    @Field(() => MessageRoomCreateWithoutUserMessageRoomInput, {nullable:true})
    @Type(() => MessageRoomCreateWithoutUserMessageRoomInput)
    create?: InstanceType<typeof MessageRoomCreateWithoutUserMessageRoomInput>;
    @Field(() => MessageRoomCreateOrConnectWithoutUserMessageRoomInput, {nullable:true})
    @Type(() => MessageRoomCreateOrConnectWithoutUserMessageRoomInput)
    connectOrCreate?: InstanceType<typeof MessageRoomCreateOrConnectWithoutUserMessageRoomInput>;
    @Field(() => MessageRoomWhereUniqueInput, {nullable:true})
    @Type(() => MessageRoomWhereUniqueInput)
    connect?: InstanceType<typeof MessageRoomWhereUniqueInput>;
}

@InputType()
export class MessageRoomCreateOrConnectWithoutFileInput {
    @Field(() => MessageRoomWhereUniqueInput, {nullable:false})
    @Type(() => MessageRoomWhereUniqueInput)
    where!: InstanceType<typeof MessageRoomWhereUniqueInput>;
    @Field(() => MessageRoomCreateWithoutFileInput, {nullable:false})
    @Type(() => MessageRoomCreateWithoutFileInput)
    create!: InstanceType<typeof MessageRoomCreateWithoutFileInput>;
}

@InputType()
export class MessageRoomCreateOrConnectWithoutMessageInput {
    @Field(() => MessageRoomWhereUniqueInput, {nullable:false})
    @Type(() => MessageRoomWhereUniqueInput)
    where!: InstanceType<typeof MessageRoomWhereUniqueInput>;
    @Field(() => MessageRoomCreateWithoutMessageInput, {nullable:false})
    @Type(() => MessageRoomCreateWithoutMessageInput)
    create!: InstanceType<typeof MessageRoomCreateWithoutMessageInput>;
}

@InputType()
export class MessageRoomCreateOrConnectWithoutUserMessageRoomInput {
    @Field(() => MessageRoomWhereUniqueInput, {nullable:false})
    @Type(() => MessageRoomWhereUniqueInput)
    where!: InstanceType<typeof MessageRoomWhereUniqueInput>;
    @Field(() => MessageRoomCreateWithoutUserMessageRoomInput, {nullable:false})
    @Type(() => MessageRoomCreateWithoutUserMessageRoomInput)
    create!: InstanceType<typeof MessageRoomCreateWithoutUserMessageRoomInput>;
}

@InputType()
export class MessageRoomCreateWithoutFileInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => UserMessageRoomCreateNestedManyWithoutMessageRoomInput, {nullable:true})
    UserMessageRoom?: InstanceType<typeof UserMessageRoomCreateNestedManyWithoutMessageRoomInput>;
    @Field(() => MessageCreateNestedManyWithoutMessageRoomInput, {nullable:true})
    Message?: InstanceType<typeof MessageCreateNestedManyWithoutMessageRoomInput>;
}

@InputType()
export class MessageRoomCreateWithoutMessageInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => UserMessageRoomCreateNestedManyWithoutMessageRoomInput, {nullable:true})
    UserMessageRoom?: InstanceType<typeof UserMessageRoomCreateNestedManyWithoutMessageRoomInput>;
    @Field(() => FileCreateNestedManyWithoutMessageRoomInput, {nullable:true})
    File?: InstanceType<typeof FileCreateNestedManyWithoutMessageRoomInput>;
}

@InputType()
export class MessageRoomCreateWithoutUserMessageRoomInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => MessageCreateNestedManyWithoutMessageRoomInput, {nullable:true})
    Message?: InstanceType<typeof MessageCreateNestedManyWithoutMessageRoomInput>;
    @Field(() => FileCreateNestedManyWithoutMessageRoomInput, {nullable:true})
    File?: InstanceType<typeof FileCreateNestedManyWithoutMessageRoomInput>;
}

@InputType()
export class MessageRoomCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => UserMessageRoomCreateNestedManyWithoutMessageRoomInput, {nullable:true})
    UserMessageRoom?: InstanceType<typeof UserMessageRoomCreateNestedManyWithoutMessageRoomInput>;
    @Field(() => MessageCreateNestedManyWithoutMessageRoomInput, {nullable:true})
    Message?: InstanceType<typeof MessageCreateNestedManyWithoutMessageRoomInput>;
    @Field(() => FileCreateNestedManyWithoutMessageRoomInput, {nullable:true})
    File?: InstanceType<typeof FileCreateNestedManyWithoutMessageRoomInput>;
}

@ArgsType()
export class MessageRoomGroupByArgs {
    @Field(() => MessageRoomWhereInput, {nullable:true})
    @Type(() => MessageRoomWhereInput)
    where?: InstanceType<typeof MessageRoomWhereInput>;
    @Field(() => [MessageRoomOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<MessageRoomOrderByWithAggregationInput>;
    @Field(() => [MessageRoomScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof MessageRoomScalarFieldEnum>;
    @Field(() => MessageRoomScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof MessageRoomScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => MessageRoomCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof MessageRoomCountAggregateInput>;
    @Field(() => MessageRoomMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof MessageRoomMinAggregateInput>;
    @Field(() => MessageRoomMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof MessageRoomMaxAggregateInput>;
}

@ObjectType()
export class MessageRoomGroupBy {
    @Field(() => String, {nullable:false})
    id!: string;
    @Field(() => MessageRoomCountAggregate, {nullable:true})
    _count?: InstanceType<typeof MessageRoomCountAggregate>;
    @Field(() => MessageRoomMinAggregate, {nullable:true})
    _min?: InstanceType<typeof MessageRoomMinAggregate>;
    @Field(() => MessageRoomMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof MessageRoomMaxAggregate>;
}

@InputType()
export class MessageRoomMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
}

@ObjectType()
export class MessageRoomMaxAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
}

@InputType()
export class MessageRoomMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
}

@InputType()
export class MessageRoomMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
}

@ObjectType()
export class MessageRoomMinAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
}

@InputType()
export class MessageRoomMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
}

@InputType()
export class MessageRoomOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => MessageRoomCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof MessageRoomCountOrderByAggregateInput>;
    @Field(() => MessageRoomMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof MessageRoomMaxOrderByAggregateInput>;
    @Field(() => MessageRoomMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof MessageRoomMinOrderByAggregateInput>;
}

@InputType()
export class MessageRoomOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => UserMessageRoomOrderByRelationAggregateInput, {nullable:true})
    UserMessageRoom?: InstanceType<typeof UserMessageRoomOrderByRelationAggregateInput>;
    @Field(() => MessageOrderByRelationAggregateInput, {nullable:true})
    Message?: InstanceType<typeof MessageOrderByRelationAggregateInput>;
    @Field(() => FileOrderByRelationAggregateInput, {nullable:true})
    File?: InstanceType<typeof FileOrderByRelationAggregateInput>;
}

@InputType()
export class MessageRoomRelationFilter {
    @Field(() => MessageRoomWhereInput, {nullable:true})
    is?: InstanceType<typeof MessageRoomWhereInput>;
    @Field(() => MessageRoomWhereInput, {nullable:true})
    isNot?: InstanceType<typeof MessageRoomWhereInput>;
}

@InputType()
export class MessageRoomScalarWhereWithAggregatesInput {
    @Field(() => [MessageRoomScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<MessageRoomScalarWhereWithAggregatesInput>;
    @Field(() => [MessageRoomScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<MessageRoomScalarWhereWithAggregatesInput>;
    @Field(() => [MessageRoomScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<MessageRoomScalarWhereWithAggregatesInput>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof StringWithAggregatesFilter>;
}

@InputType()
export class MessageRoomUncheckedCreateWithoutFileInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => UserMessageRoomUncheckedCreateNestedManyWithoutMessageRoomInput, {nullable:true})
    UserMessageRoom?: InstanceType<typeof UserMessageRoomUncheckedCreateNestedManyWithoutMessageRoomInput>;
    @Field(() => MessageUncheckedCreateNestedManyWithoutMessageRoomInput, {nullable:true})
    Message?: InstanceType<typeof MessageUncheckedCreateNestedManyWithoutMessageRoomInput>;
}

@InputType()
export class MessageRoomUncheckedCreateWithoutMessageInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => UserMessageRoomUncheckedCreateNestedManyWithoutMessageRoomInput, {nullable:true})
    UserMessageRoom?: InstanceType<typeof UserMessageRoomUncheckedCreateNestedManyWithoutMessageRoomInput>;
    @Field(() => FileUncheckedCreateNestedManyWithoutMessageRoomInput, {nullable:true})
    File?: InstanceType<typeof FileUncheckedCreateNestedManyWithoutMessageRoomInput>;
}

@InputType()
export class MessageRoomUncheckedCreateWithoutUserMessageRoomInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => MessageUncheckedCreateNestedManyWithoutMessageRoomInput, {nullable:true})
    Message?: InstanceType<typeof MessageUncheckedCreateNestedManyWithoutMessageRoomInput>;
    @Field(() => FileUncheckedCreateNestedManyWithoutMessageRoomInput, {nullable:true})
    File?: InstanceType<typeof FileUncheckedCreateNestedManyWithoutMessageRoomInput>;
}

@InputType()
export class MessageRoomUncheckedCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => UserMessageRoomUncheckedCreateNestedManyWithoutMessageRoomInput, {nullable:true})
    UserMessageRoom?: InstanceType<typeof UserMessageRoomUncheckedCreateNestedManyWithoutMessageRoomInput>;
    @Field(() => MessageUncheckedCreateNestedManyWithoutMessageRoomInput, {nullable:true})
    Message?: InstanceType<typeof MessageUncheckedCreateNestedManyWithoutMessageRoomInput>;
    @Field(() => FileUncheckedCreateNestedManyWithoutMessageRoomInput, {nullable:true})
    File?: InstanceType<typeof FileUncheckedCreateNestedManyWithoutMessageRoomInput>;
}

@InputType()
export class MessageRoomUncheckedUpdateManyInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}

@InputType()
export class MessageRoomUncheckedUpdateWithoutFileInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => UserMessageRoomUncheckedUpdateManyWithoutMessageRoomNestedInput, {nullable:true})
    UserMessageRoom?: InstanceType<typeof UserMessageRoomUncheckedUpdateManyWithoutMessageRoomNestedInput>;
    @Field(() => MessageUncheckedUpdateManyWithoutMessageRoomNestedInput, {nullable:true})
    Message?: InstanceType<typeof MessageUncheckedUpdateManyWithoutMessageRoomNestedInput>;
}

@InputType()
export class MessageRoomUncheckedUpdateWithoutMessageInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => UserMessageRoomUncheckedUpdateManyWithoutMessageRoomNestedInput, {nullable:true})
    UserMessageRoom?: InstanceType<typeof UserMessageRoomUncheckedUpdateManyWithoutMessageRoomNestedInput>;
    @Field(() => FileUncheckedUpdateManyWithoutMessageRoomNestedInput, {nullable:true})
    File?: InstanceType<typeof FileUncheckedUpdateManyWithoutMessageRoomNestedInput>;
}

@InputType()
export class MessageRoomUncheckedUpdateWithoutUserMessageRoomInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => MessageUncheckedUpdateManyWithoutMessageRoomNestedInput, {nullable:true})
    Message?: InstanceType<typeof MessageUncheckedUpdateManyWithoutMessageRoomNestedInput>;
    @Field(() => FileUncheckedUpdateManyWithoutMessageRoomNestedInput, {nullable:true})
    File?: InstanceType<typeof FileUncheckedUpdateManyWithoutMessageRoomNestedInput>;
}

@InputType()
export class MessageRoomUncheckedUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => UserMessageRoomUncheckedUpdateManyWithoutMessageRoomNestedInput, {nullable:true})
    UserMessageRoom?: InstanceType<typeof UserMessageRoomUncheckedUpdateManyWithoutMessageRoomNestedInput>;
    @Field(() => MessageUncheckedUpdateManyWithoutMessageRoomNestedInput, {nullable:true})
    Message?: InstanceType<typeof MessageUncheckedUpdateManyWithoutMessageRoomNestedInput>;
    @Field(() => FileUncheckedUpdateManyWithoutMessageRoomNestedInput, {nullable:true})
    File?: InstanceType<typeof FileUncheckedUpdateManyWithoutMessageRoomNestedInput>;
}

@InputType()
export class MessageRoomUpdateManyMutationInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}

@InputType()
export class MessageRoomUpdateOneRequiredWithoutUserMessageRoomNestedInput {
    @Field(() => MessageRoomCreateWithoutUserMessageRoomInput, {nullable:true})
    @Type(() => MessageRoomCreateWithoutUserMessageRoomInput)
    create?: InstanceType<typeof MessageRoomCreateWithoutUserMessageRoomInput>;
    @Field(() => MessageRoomCreateOrConnectWithoutUserMessageRoomInput, {nullable:true})
    @Type(() => MessageRoomCreateOrConnectWithoutUserMessageRoomInput)
    connectOrCreate?: InstanceType<typeof MessageRoomCreateOrConnectWithoutUserMessageRoomInput>;
    @Field(() => MessageRoomUpsertWithoutUserMessageRoomInput, {nullable:true})
    @Type(() => MessageRoomUpsertWithoutUserMessageRoomInput)
    upsert?: InstanceType<typeof MessageRoomUpsertWithoutUserMessageRoomInput>;
    @Field(() => MessageRoomWhereUniqueInput, {nullable:true})
    @Type(() => MessageRoomWhereUniqueInput)
    connect?: InstanceType<typeof MessageRoomWhereUniqueInput>;
    @Field(() => MessageRoomUpdateWithoutUserMessageRoomInput, {nullable:true})
    @Type(() => MessageRoomUpdateWithoutUserMessageRoomInput)
    update?: InstanceType<typeof MessageRoomUpdateWithoutUserMessageRoomInput>;
}

@InputType()
export class MessageRoomUpdateOneWithoutFileNestedInput {
    @Field(() => MessageRoomCreateWithoutFileInput, {nullable:true})
    @Type(() => MessageRoomCreateWithoutFileInput)
    create?: InstanceType<typeof MessageRoomCreateWithoutFileInput>;
    @Field(() => MessageRoomCreateOrConnectWithoutFileInput, {nullable:true})
    @Type(() => MessageRoomCreateOrConnectWithoutFileInput)
    connectOrCreate?: InstanceType<typeof MessageRoomCreateOrConnectWithoutFileInput>;
    @Field(() => MessageRoomUpsertWithoutFileInput, {nullable:true})
    @Type(() => MessageRoomUpsertWithoutFileInput)
    upsert?: InstanceType<typeof MessageRoomUpsertWithoutFileInput>;
    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;
    @Field(() => Boolean, {nullable:true})
    delete?: boolean;
    @Field(() => MessageRoomWhereUniqueInput, {nullable:true})
    @Type(() => MessageRoomWhereUniqueInput)
    connect?: InstanceType<typeof MessageRoomWhereUniqueInput>;
    @Field(() => MessageRoomUpdateWithoutFileInput, {nullable:true})
    @Type(() => MessageRoomUpdateWithoutFileInput)
    update?: InstanceType<typeof MessageRoomUpdateWithoutFileInput>;
}

@InputType()
export class MessageRoomUpdateOneWithoutMessageNestedInput {
    @Field(() => MessageRoomCreateWithoutMessageInput, {nullable:true})
    @Type(() => MessageRoomCreateWithoutMessageInput)
    create?: InstanceType<typeof MessageRoomCreateWithoutMessageInput>;
    @Field(() => MessageRoomCreateOrConnectWithoutMessageInput, {nullable:true})
    @Type(() => MessageRoomCreateOrConnectWithoutMessageInput)
    connectOrCreate?: InstanceType<typeof MessageRoomCreateOrConnectWithoutMessageInput>;
    @Field(() => MessageRoomUpsertWithoutMessageInput, {nullable:true})
    @Type(() => MessageRoomUpsertWithoutMessageInput)
    upsert?: InstanceType<typeof MessageRoomUpsertWithoutMessageInput>;
    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;
    @Field(() => Boolean, {nullable:true})
    delete?: boolean;
    @Field(() => MessageRoomWhereUniqueInput, {nullable:true})
    @Type(() => MessageRoomWhereUniqueInput)
    connect?: InstanceType<typeof MessageRoomWhereUniqueInput>;
    @Field(() => MessageRoomUpdateWithoutMessageInput, {nullable:true})
    @Type(() => MessageRoomUpdateWithoutMessageInput)
    update?: InstanceType<typeof MessageRoomUpdateWithoutMessageInput>;
}

@InputType()
export class MessageRoomUpdateWithoutFileInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => UserMessageRoomUpdateManyWithoutMessageRoomNestedInput, {nullable:true})
    UserMessageRoom?: InstanceType<typeof UserMessageRoomUpdateManyWithoutMessageRoomNestedInput>;
    @Field(() => MessageUpdateManyWithoutMessageRoomNestedInput, {nullable:true})
    Message?: InstanceType<typeof MessageUpdateManyWithoutMessageRoomNestedInput>;
}

@InputType()
export class MessageRoomUpdateWithoutMessageInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => UserMessageRoomUpdateManyWithoutMessageRoomNestedInput, {nullable:true})
    UserMessageRoom?: InstanceType<typeof UserMessageRoomUpdateManyWithoutMessageRoomNestedInput>;
    @Field(() => FileUpdateManyWithoutMessageRoomNestedInput, {nullable:true})
    File?: InstanceType<typeof FileUpdateManyWithoutMessageRoomNestedInput>;
}

@InputType()
export class MessageRoomUpdateWithoutUserMessageRoomInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => MessageUpdateManyWithoutMessageRoomNestedInput, {nullable:true})
    Message?: InstanceType<typeof MessageUpdateManyWithoutMessageRoomNestedInput>;
    @Field(() => FileUpdateManyWithoutMessageRoomNestedInput, {nullable:true})
    File?: InstanceType<typeof FileUpdateManyWithoutMessageRoomNestedInput>;
}

@InputType()
export class MessageRoomUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => UserMessageRoomUpdateManyWithoutMessageRoomNestedInput, {nullable:true})
    UserMessageRoom?: InstanceType<typeof UserMessageRoomUpdateManyWithoutMessageRoomNestedInput>;
    @Field(() => MessageUpdateManyWithoutMessageRoomNestedInput, {nullable:true})
    Message?: InstanceType<typeof MessageUpdateManyWithoutMessageRoomNestedInput>;
    @Field(() => FileUpdateManyWithoutMessageRoomNestedInput, {nullable:true})
    File?: InstanceType<typeof FileUpdateManyWithoutMessageRoomNestedInput>;
}

@InputType()
export class MessageRoomUpsertWithoutFileInput {
    @Field(() => MessageRoomUpdateWithoutFileInput, {nullable:false})
    @Type(() => MessageRoomUpdateWithoutFileInput)
    update!: InstanceType<typeof MessageRoomUpdateWithoutFileInput>;
    @Field(() => MessageRoomCreateWithoutFileInput, {nullable:false})
    @Type(() => MessageRoomCreateWithoutFileInput)
    create!: InstanceType<typeof MessageRoomCreateWithoutFileInput>;
}

@InputType()
export class MessageRoomUpsertWithoutMessageInput {
    @Field(() => MessageRoomUpdateWithoutMessageInput, {nullable:false})
    @Type(() => MessageRoomUpdateWithoutMessageInput)
    update!: InstanceType<typeof MessageRoomUpdateWithoutMessageInput>;
    @Field(() => MessageRoomCreateWithoutMessageInput, {nullable:false})
    @Type(() => MessageRoomCreateWithoutMessageInput)
    create!: InstanceType<typeof MessageRoomCreateWithoutMessageInput>;
}

@InputType()
export class MessageRoomUpsertWithoutUserMessageRoomInput {
    @Field(() => MessageRoomUpdateWithoutUserMessageRoomInput, {nullable:false})
    @Type(() => MessageRoomUpdateWithoutUserMessageRoomInput)
    update!: InstanceType<typeof MessageRoomUpdateWithoutUserMessageRoomInput>;
    @Field(() => MessageRoomCreateWithoutUserMessageRoomInput, {nullable:false})
    @Type(() => MessageRoomCreateWithoutUserMessageRoomInput)
    create!: InstanceType<typeof MessageRoomCreateWithoutUserMessageRoomInput>;
}

@InputType()
export class MessageRoomWhereUniqueInput {
    @Field(() => String, {nullable:true})
    id?: string;
}

@InputType()
export class MessageRoomWhereInput {
    @Field(() => [MessageRoomWhereInput], {nullable:true})
    AND?: Array<MessageRoomWhereInput>;
    @Field(() => [MessageRoomWhereInput], {nullable:true})
    OR?: Array<MessageRoomWhereInput>;
    @Field(() => [MessageRoomWhereInput], {nullable:true})
    NOT?: Array<MessageRoomWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => UserMessageRoomListRelationFilter, {nullable:true})
    UserMessageRoom?: InstanceType<typeof UserMessageRoomListRelationFilter>;
    @Field(() => MessageListRelationFilter, {nullable:true})
    Message?: InstanceType<typeof MessageListRelationFilter>;
    @Field(() => FileListRelationFilter, {nullable:true})
    File?: InstanceType<typeof FileListRelationFilter>;
}

@ObjectType()
export class MessageRoom {
    @Field(() => ID, {nullable:false})
    id!: string;
    @Field(() => [UserMessageRoom], {nullable:true})
    UserMessageRoom?: Array<UserMessageRoom>;
    @Field(() => [Message], {nullable:true})
    Message?: Array<Message>;
    @Field(() => [File], {nullable:true})
    File?: Array<File>;
    @Field(() => MessageRoomCount, {nullable:false})
    _count?: InstanceType<typeof MessageRoomCount>;
}

@ArgsType()
export class UpdateManyMessageRoomArgs {
    @Field(() => MessageRoomUpdateManyMutationInput, {nullable:false})
    @Type(() => MessageRoomUpdateManyMutationInput)
    data!: InstanceType<typeof MessageRoomUpdateManyMutationInput>;
    @Field(() => MessageRoomWhereInput, {nullable:true})
    @Type(() => MessageRoomWhereInput)
    where?: InstanceType<typeof MessageRoomWhereInput>;
}

@ArgsType()
export class UpdateOneMessageRoomArgs {
    @Field(() => MessageRoomUpdateInput, {nullable:false})
    @Type(() => MessageRoomUpdateInput)
    data!: InstanceType<typeof MessageRoomUpdateInput>;
    @Field(() => MessageRoomWhereUniqueInput, {nullable:false})
    @Type(() => MessageRoomWhereUniqueInput)
    where!: InstanceType<typeof MessageRoomWhereUniqueInput>;
}

@ArgsType()
export class UpsertOneMessageRoomArgs {
    @Field(() => MessageRoomWhereUniqueInput, {nullable:false})
    @Type(() => MessageRoomWhereUniqueInput)
    where!: InstanceType<typeof MessageRoomWhereUniqueInput>;
    @Field(() => MessageRoomCreateInput, {nullable:false})
    @Type(() => MessageRoomCreateInput)
    create!: InstanceType<typeof MessageRoomCreateInput>;
    @Field(() => MessageRoomUpdateInput, {nullable:false})
    @Type(() => MessageRoomUpdateInput)
    update!: InstanceType<typeof MessageRoomUpdateInput>;
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
    thumbnail?: true;
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
    thumbnail?: keyof typeof SortOrder;
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
    @Field(() => String, {nullable:true})
    thumbnail?: string;
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
    @Field(() => String, {nullable:true})
    thumbnail?: string;
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
    @Field(() => String, {nullable:true})
    thumbnail?: string;
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
    @Field(() => String, {nullable:true})
    thumbnail?: string;
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
    thumbnail?: true;
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
    thumbnail?: keyof typeof SortOrder;
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
    thumbnail?: true;
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
    thumbnail?: keyof typeof SortOrder;
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
    thumbnail?: keyof typeof SortOrder;
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
    thumbnail?: keyof typeof SortOrder;
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
    thumbnail?: InstanceType<typeof StringWithAggregatesFilter>;
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
    thumbnail?: InstanceType<typeof StringFilter>;
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
    @Field(() => String, {nullable:true})
    thumbnail?: string;
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
    @Field(() => String, {nullable:true})
    thumbnail?: string;
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
    thumbnail?: InstanceType<typeof StringFieldUpdateOperationsInput>;
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
    thumbnail?: InstanceType<typeof StringFieldUpdateOperationsInput>;
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
    thumbnail?: InstanceType<typeof StringFieldUpdateOperationsInput>;
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
    thumbnail?: InstanceType<typeof StringFieldUpdateOperationsInput>;
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
    thumbnail?: InstanceType<typeof StringFieldUpdateOperationsInput>;
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
    thumbnail?: InstanceType<typeof StringFieldUpdateOperationsInput>;
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
    thumbnail?: InstanceType<typeof StringFieldUpdateOperationsInput>;
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
    thumbnail?: InstanceType<typeof StringFilter>;
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
    @Field(() => String, {nullable:false,defaultValue:'https://picsum.photos/480/320'})
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
    thumbnail?: true;
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
    thumbnail?: keyof typeof SortOrder;
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
    @Field(() => String, {nullable:true})
    thumbnail?: string;
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
    @Field(() => String, {nullable:true})
    thumbnail?: string;
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
    @Field(() => String, {nullable:true})
    thumbnail?: string;
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
    @Field(() => String, {nullable:true})
    thumbnail?: string;
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
    @Field(() => String, {nullable:true})
    thumbnail?: string;
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
    @Field(() => String, {nullable:true})
    thumbnail?: string;
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
    thumbnail?: true;
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
    thumbnail?: keyof typeof SortOrder;
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
    thumbnail?: true;
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
    thumbnail?: keyof typeof SortOrder;
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
    thumbnail?: keyof typeof SortOrder;
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
    thumbnail?: keyof typeof SortOrder;
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
    thumbnail?: InstanceType<typeof StringWithAggregatesFilter>;
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
    thumbnail?: InstanceType<typeof StringFilter>;
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
    @Field(() => String, {nullable:true})
    thumbnail?: string;
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
    @Field(() => String, {nullable:true})
    thumbnail?: string;
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
    @Field(() => String, {nullable:true})
    thumbnail?: string;
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
    thumbnail?: InstanceType<typeof StringFieldUpdateOperationsInput>;
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
    thumbnail?: InstanceType<typeof StringFieldUpdateOperationsInput>;
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
    thumbnail?: InstanceType<typeof StringFieldUpdateOperationsInput>;
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
    thumbnail?: InstanceType<typeof StringFieldUpdateOperationsInput>;
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
    thumbnail?: InstanceType<typeof StringFieldUpdateOperationsInput>;
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
    thumbnail?: InstanceType<typeof StringFieldUpdateOperationsInput>;
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
    thumbnail?: InstanceType<typeof StringFieldUpdateOperationsInput>;
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
    thumbnail?: InstanceType<typeof StringFieldUpdateOperationsInput>;
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
    thumbnail?: InstanceType<typeof StringFieldUpdateOperationsInput>;
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
    thumbnail?: InstanceType<typeof StringFilter>;
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
    @Field(() => String, {nullable:false,defaultValue:'https://picsum.photos/480/320'})
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

@ObjectType()
export class AggregateBlogNews {
    @Field(() => BlogNewsCountAggregate, {nullable:true})
    _count?: InstanceType<typeof BlogNewsCountAggregate>;
    @Field(() => BlogNewsMinAggregate, {nullable:true})
    _min?: InstanceType<typeof BlogNewsMinAggregate>;
    @Field(() => BlogNewsMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof BlogNewsMaxAggregate>;
}

@ObjectType()
export class AggregateLoginTime {
    @Field(() => LoginTimeCountAggregate, {nullable:true})
    _count?: InstanceType<typeof LoginTimeCountAggregate>;
    @Field(() => LoginTimeMinAggregate, {nullable:true})
    _min?: InstanceType<typeof LoginTimeMinAggregate>;
    @Field(() => LoginTimeMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof LoginTimeMaxAggregate>;
}

@ObjectType()
export class BlogNewsCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    title!: number;
    @Field(() => Int, {nullable:false})
    content!: number;
    @Field(() => Int, {nullable:false})
    link!: number;
    @Field(() => Int, {nullable:false})
    createdAt!: number;
    @Field(() => Int, {nullable:false})
    updatedAt!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@ObjectType()
export class BlogNewsGroupBy {
    @Field(() => String, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    title!: string;
    @Field(() => String, {nullable:false})
    content!: string;
    @Field(() => String, {nullable:false})
    link!: string;
    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;
    @Field(() => BlogNewsCountAggregate, {nullable:true})
    _count?: InstanceType<typeof BlogNewsCountAggregate>;
    @Field(() => BlogNewsMinAggregate, {nullable:true})
    _min?: InstanceType<typeof BlogNewsMinAggregate>;
    @Field(() => BlogNewsMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof BlogNewsMaxAggregate>;
}

@ObjectType()
export class BlogNewsMaxAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    title?: string;
    @Field(() => String, {nullable:true})
    content?: string;
    @Field(() => String, {nullable:true})
    link?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@ObjectType()
export class BlogNewsMinAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    title?: string;
    @Field(() => String, {nullable:true})
    content?: string;
    @Field(() => String, {nullable:true})
    link?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
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

@ObjectType()
export class LoginTimeCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    userId!: number;
    @Field(() => Int, {nullable:false})
    createdAt!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@ObjectType()
export class LoginTimeGroupBy {
    @Field(() => String, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    userId!: string;
    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;
    @Field(() => LoginTimeCountAggregate, {nullable:true})
    _count?: InstanceType<typeof LoginTimeCountAggregate>;
    @Field(() => LoginTimeMinAggregate, {nullable:true})
    _min?: InstanceType<typeof LoginTimeMinAggregate>;
    @Field(() => LoginTimeMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof LoginTimeMaxAggregate>;
}

@InputType()
export class LoginTimeListRelationFilter {
    @Field(() => loginTimeWhereInput, {nullable:true})
    every?: InstanceType<typeof loginTimeWhereInput>;
    @Field(() => loginTimeWhereInput, {nullable:true})
    some?: InstanceType<typeof loginTimeWhereInput>;
    @Field(() => loginTimeWhereInput, {nullable:true})
    none?: InstanceType<typeof loginTimeWhereInput>;
}

@ObjectType()
export class LoginTimeMaxAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    userId?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}

@ObjectType()
export class LoginTimeMinAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    userId?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
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
export class SortOrderInput {
    @Field(() => SortOrder, {nullable:false})
    sort!: keyof typeof SortOrder;
    @Field(() => NullsOrder, {nullable:true})
    nulls?: keyof typeof NullsOrder;
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
export class AggregateProject {
    @Field(() => ProjectCountAggregate, {nullable:true})
    _count?: InstanceType<typeof ProjectCountAggregate>;
    @Field(() => ProjectMinAggregate, {nullable:true})
    _min?: InstanceType<typeof ProjectMinAggregate>;
    @Field(() => ProjectMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof ProjectMaxAggregate>;
}

@ArgsType()
export class CreateManyProjectArgs {
    @Field(() => [ProjectCreateManyInput], {nullable:false})
    @Type(() => ProjectCreateManyInput)
    data!: Array<ProjectCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneProjectArgs {
    @Field(() => ProjectCreateInput, {nullable:false})
    @Type(() => ProjectCreateInput)
    data!: InstanceType<typeof ProjectCreateInput>;
}

@ArgsType()
export class DeleteManyProjectArgs {
    @Field(() => ProjectWhereInput, {nullable:true})
    @Type(() => ProjectWhereInput)
    where?: InstanceType<typeof ProjectWhereInput>;
}

@ArgsType()
export class DeleteOneProjectArgs {
    @Field(() => ProjectWhereUniqueInput, {nullable:false})
    @Type(() => ProjectWhereUniqueInput)
    where!: InstanceType<typeof ProjectWhereUniqueInput>;
}

@ArgsType()
export class FindFirstProjectOrThrowArgs {
    @Field(() => ProjectWhereInput, {nullable:true})
    @Type(() => ProjectWhereInput)
    where?: InstanceType<typeof ProjectWhereInput>;
    @Field(() => [ProjectOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ProjectOrderByWithRelationInput>;
    @Field(() => ProjectWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof ProjectWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [ProjectScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ProjectScalarFieldEnum>;
}

@ArgsType()
export class FindFirstProjectArgs {
    @Field(() => ProjectWhereInput, {nullable:true})
    @Type(() => ProjectWhereInput)
    where?: InstanceType<typeof ProjectWhereInput>;
    @Field(() => [ProjectOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ProjectOrderByWithRelationInput>;
    @Field(() => ProjectWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof ProjectWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [ProjectScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ProjectScalarFieldEnum>;
}

@ArgsType()
export class FindManyProjectArgs {
    @Field(() => ProjectWhereInput, {nullable:true})
    @Type(() => ProjectWhereInput)
    where?: InstanceType<typeof ProjectWhereInput>;
    @Field(() => [ProjectOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ProjectOrderByWithRelationInput>;
    @Field(() => ProjectWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof ProjectWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [ProjectScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ProjectScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueProjectOrThrowArgs {
    @Field(() => ProjectWhereUniqueInput, {nullable:false})
    @Type(() => ProjectWhereUniqueInput)
    where!: InstanceType<typeof ProjectWhereUniqueInput>;
}

@ArgsType()
export class FindUniqueProjectArgs {
    @Field(() => ProjectWhereUniqueInput, {nullable:false})
    @Type(() => ProjectWhereUniqueInput)
    where!: InstanceType<typeof ProjectWhereUniqueInput>;
}

@ArgsType()
export class ProjectAggregateArgs {
    @Field(() => ProjectWhereInput, {nullable:true})
    @Type(() => ProjectWhereInput)
    where?: InstanceType<typeof ProjectWhereInput>;
    @Field(() => [ProjectOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ProjectOrderByWithRelationInput>;
    @Field(() => ProjectWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof ProjectWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => ProjectCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof ProjectCountAggregateInput>;
    @Field(() => ProjectMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof ProjectMinAggregateInput>;
    @Field(() => ProjectMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof ProjectMaxAggregateInput>;
}

@InputType()
export class ProjectCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    nameTH?: true;
    @Field(() => Boolean, {nullable:true})
    nameEN?: true;
    @Field(() => Boolean, {nullable:true})
    statusId?: true;
    @Field(() => Boolean, {nullable:true})
    typeId?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class ProjectCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    nameTH!: number;
    @Field(() => Int, {nullable:false})
    nameEN!: number;
    @Field(() => Int, {nullable:false})
    statusId!: number;
    @Field(() => Int, {nullable:false})
    typeId!: number;
    @Field(() => Int, {nullable:false})
    createdAt!: number;
    @Field(() => Int, {nullable:false})
    updatedAt!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class ProjectCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    nameTH?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    nameEN?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    statusId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    typeId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@ObjectType()
export class ProjectCount {
    @Field(() => Int, {nullable:false})
    UserProject?: number;
    @Field(() => Int, {nullable:false})
    Message?: number;
    @Field(() => Int, {nullable:false})
    File?: number;
}

@InputType()
export class ProjectCreateManyProjectTypeInputEnvelope {
    @Field(() => [ProjectCreateManyProjectTypeInput], {nullable:false})
    @Type(() => ProjectCreateManyProjectTypeInput)
    data!: Array<ProjectCreateManyProjectTypeInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@InputType()
export class ProjectCreateManyProjectTypeInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    nameTH!: string;
    @Field(() => String, {nullable:false})
    nameEN!: string;
    @Field(() => String, {nullable:false})
    statusId!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class ProjectCreateManyStatusInputEnvelope {
    @Field(() => [ProjectCreateManyStatusInput], {nullable:false})
    @Type(() => ProjectCreateManyStatusInput)
    data!: Array<ProjectCreateManyStatusInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@InputType()
export class ProjectCreateManyStatusInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    nameTH!: string;
    @Field(() => String, {nullable:false})
    nameEN!: string;
    @Field(() => String, {nullable:false})
    typeId!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class ProjectCreateManyInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    nameTH!: string;
    @Field(() => String, {nullable:false})
    nameEN!: string;
    @Field(() => String, {nullable:false})
    statusId!: string;
    @Field(() => String, {nullable:false})
    typeId!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class ProjectCreateNestedManyWithoutProjectTypeInput {
    @Field(() => [ProjectCreateWithoutProjectTypeInput], {nullable:true})
    @Type(() => ProjectCreateWithoutProjectTypeInput)
    create?: Array<ProjectCreateWithoutProjectTypeInput>;
    @Field(() => [ProjectCreateOrConnectWithoutProjectTypeInput], {nullable:true})
    @Type(() => ProjectCreateOrConnectWithoutProjectTypeInput)
    connectOrCreate?: Array<ProjectCreateOrConnectWithoutProjectTypeInput>;
    @Field(() => ProjectCreateManyProjectTypeInputEnvelope, {nullable:true})
    @Type(() => ProjectCreateManyProjectTypeInputEnvelope)
    createMany?: InstanceType<typeof ProjectCreateManyProjectTypeInputEnvelope>;
    @Field(() => [ProjectWhereUniqueInput], {nullable:true})
    @Type(() => ProjectWhereUniqueInput)
    connect?: Array<ProjectWhereUniqueInput>;
}

@InputType()
export class ProjectCreateNestedManyWithoutStatusInput {
    @Field(() => [ProjectCreateWithoutStatusInput], {nullable:true})
    @Type(() => ProjectCreateWithoutStatusInput)
    create?: Array<ProjectCreateWithoutStatusInput>;
    @Field(() => [ProjectCreateOrConnectWithoutStatusInput], {nullable:true})
    @Type(() => ProjectCreateOrConnectWithoutStatusInput)
    connectOrCreate?: Array<ProjectCreateOrConnectWithoutStatusInput>;
    @Field(() => ProjectCreateManyStatusInputEnvelope, {nullable:true})
    @Type(() => ProjectCreateManyStatusInputEnvelope)
    createMany?: InstanceType<typeof ProjectCreateManyStatusInputEnvelope>;
    @Field(() => [ProjectWhereUniqueInput], {nullable:true})
    @Type(() => ProjectWhereUniqueInput)
    connect?: Array<ProjectWhereUniqueInput>;
}

@InputType()
export class ProjectCreateNestedOneWithoutFileInput {
    @Field(() => ProjectCreateWithoutFileInput, {nullable:true})
    @Type(() => ProjectCreateWithoutFileInput)
    create?: InstanceType<typeof ProjectCreateWithoutFileInput>;
    @Field(() => ProjectCreateOrConnectWithoutFileInput, {nullable:true})
    @Type(() => ProjectCreateOrConnectWithoutFileInput)
    connectOrCreate?: InstanceType<typeof ProjectCreateOrConnectWithoutFileInput>;
    @Field(() => ProjectWhereUniqueInput, {nullable:true})
    @Type(() => ProjectWhereUniqueInput)
    connect?: InstanceType<typeof ProjectWhereUniqueInput>;
}

@InputType()
export class ProjectCreateNestedOneWithoutMessageInput {
    @Field(() => ProjectCreateWithoutMessageInput, {nullable:true})
    @Type(() => ProjectCreateWithoutMessageInput)
    create?: InstanceType<typeof ProjectCreateWithoutMessageInput>;
    @Field(() => ProjectCreateOrConnectWithoutMessageInput, {nullable:true})
    @Type(() => ProjectCreateOrConnectWithoutMessageInput)
    connectOrCreate?: InstanceType<typeof ProjectCreateOrConnectWithoutMessageInput>;
    @Field(() => ProjectWhereUniqueInput, {nullable:true})
    @Type(() => ProjectWhereUniqueInput)
    connect?: InstanceType<typeof ProjectWhereUniqueInput>;
}

@InputType()
export class ProjectCreateNestedOneWithoutUserProjectInput {
    @Field(() => ProjectCreateWithoutUserProjectInput, {nullable:true})
    @Type(() => ProjectCreateWithoutUserProjectInput)
    create?: InstanceType<typeof ProjectCreateWithoutUserProjectInput>;
    @Field(() => ProjectCreateOrConnectWithoutUserProjectInput, {nullable:true})
    @Type(() => ProjectCreateOrConnectWithoutUserProjectInput)
    connectOrCreate?: InstanceType<typeof ProjectCreateOrConnectWithoutUserProjectInput>;
    @Field(() => ProjectWhereUniqueInput, {nullable:true})
    @Type(() => ProjectWhereUniqueInput)
    connect?: InstanceType<typeof ProjectWhereUniqueInput>;
}

@InputType()
export class ProjectCreateOrConnectWithoutFileInput {
    @Field(() => ProjectWhereUniqueInput, {nullable:false})
    @Type(() => ProjectWhereUniqueInput)
    where!: InstanceType<typeof ProjectWhereUniqueInput>;
    @Field(() => ProjectCreateWithoutFileInput, {nullable:false})
    @Type(() => ProjectCreateWithoutFileInput)
    create!: InstanceType<typeof ProjectCreateWithoutFileInput>;
}

@InputType()
export class ProjectCreateOrConnectWithoutMessageInput {
    @Field(() => ProjectWhereUniqueInput, {nullable:false})
    @Type(() => ProjectWhereUniqueInput)
    where!: InstanceType<typeof ProjectWhereUniqueInput>;
    @Field(() => ProjectCreateWithoutMessageInput, {nullable:false})
    @Type(() => ProjectCreateWithoutMessageInput)
    create!: InstanceType<typeof ProjectCreateWithoutMessageInput>;
}

@InputType()
export class ProjectCreateOrConnectWithoutProjectTypeInput {
    @Field(() => ProjectWhereUniqueInput, {nullable:false})
    @Type(() => ProjectWhereUniqueInput)
    where!: InstanceType<typeof ProjectWhereUniqueInput>;
    @Field(() => ProjectCreateWithoutProjectTypeInput, {nullable:false})
    @Type(() => ProjectCreateWithoutProjectTypeInput)
    create!: InstanceType<typeof ProjectCreateWithoutProjectTypeInput>;
}

@InputType()
export class ProjectCreateOrConnectWithoutStatusInput {
    @Field(() => ProjectWhereUniqueInput, {nullable:false})
    @Type(() => ProjectWhereUniqueInput)
    where!: InstanceType<typeof ProjectWhereUniqueInput>;
    @Field(() => ProjectCreateWithoutStatusInput, {nullable:false})
    @Type(() => ProjectCreateWithoutStatusInput)
    create!: InstanceType<typeof ProjectCreateWithoutStatusInput>;
}

@InputType()
export class ProjectCreateOrConnectWithoutUserProjectInput {
    @Field(() => ProjectWhereUniqueInput, {nullable:false})
    @Type(() => ProjectWhereUniqueInput)
    where!: InstanceType<typeof ProjectWhereUniqueInput>;
    @Field(() => ProjectCreateWithoutUserProjectInput, {nullable:false})
    @Type(() => ProjectCreateWithoutUserProjectInput)
    create!: InstanceType<typeof ProjectCreateWithoutUserProjectInput>;
}

@InputType()
export class ProjectCreateWithoutFileInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    nameTH!: string;
    @Field(() => String, {nullable:false})
    nameEN!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => ProjectTypeCreateNestedOneWithoutProjectInput, {nullable:false})
    projectType!: InstanceType<typeof ProjectTypeCreateNestedOneWithoutProjectInput>;
    @Field(() => ProjectStatusCreateNestedOneWithoutProjectInput, {nullable:false})
    status!: InstanceType<typeof ProjectStatusCreateNestedOneWithoutProjectInput>;
    @Field(() => UserProjectCreateNestedManyWithoutProjectInput, {nullable:true})
    UserProject?: InstanceType<typeof UserProjectCreateNestedManyWithoutProjectInput>;
    @Field(() => MessageCreateNestedManyWithoutProjectInput, {nullable:true})
    Message?: InstanceType<typeof MessageCreateNestedManyWithoutProjectInput>;
}

@InputType()
export class ProjectCreateWithoutMessageInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    nameTH!: string;
    @Field(() => String, {nullable:false})
    nameEN!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => ProjectTypeCreateNestedOneWithoutProjectInput, {nullable:false})
    projectType!: InstanceType<typeof ProjectTypeCreateNestedOneWithoutProjectInput>;
    @Field(() => ProjectStatusCreateNestedOneWithoutProjectInput, {nullable:false})
    status!: InstanceType<typeof ProjectStatusCreateNestedOneWithoutProjectInput>;
    @Field(() => UserProjectCreateNestedManyWithoutProjectInput, {nullable:true})
    UserProject?: InstanceType<typeof UserProjectCreateNestedManyWithoutProjectInput>;
    @Field(() => FileCreateNestedManyWithoutProjectInput, {nullable:true})
    File?: InstanceType<typeof FileCreateNestedManyWithoutProjectInput>;
}

@InputType()
export class ProjectCreateWithoutProjectTypeInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    nameTH!: string;
    @Field(() => String, {nullable:false})
    nameEN!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => ProjectStatusCreateNestedOneWithoutProjectInput, {nullable:false})
    status!: InstanceType<typeof ProjectStatusCreateNestedOneWithoutProjectInput>;
    @Field(() => UserProjectCreateNestedManyWithoutProjectInput, {nullable:true})
    UserProject?: InstanceType<typeof UserProjectCreateNestedManyWithoutProjectInput>;
    @Field(() => MessageCreateNestedManyWithoutProjectInput, {nullable:true})
    Message?: InstanceType<typeof MessageCreateNestedManyWithoutProjectInput>;
    @Field(() => FileCreateNestedManyWithoutProjectInput, {nullable:true})
    File?: InstanceType<typeof FileCreateNestedManyWithoutProjectInput>;
}

@InputType()
export class ProjectCreateWithoutStatusInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    nameTH!: string;
    @Field(() => String, {nullable:false})
    nameEN!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => ProjectTypeCreateNestedOneWithoutProjectInput, {nullable:false})
    projectType!: InstanceType<typeof ProjectTypeCreateNestedOneWithoutProjectInput>;
    @Field(() => UserProjectCreateNestedManyWithoutProjectInput, {nullable:true})
    UserProject?: InstanceType<typeof UserProjectCreateNestedManyWithoutProjectInput>;
    @Field(() => MessageCreateNestedManyWithoutProjectInput, {nullable:true})
    Message?: InstanceType<typeof MessageCreateNestedManyWithoutProjectInput>;
    @Field(() => FileCreateNestedManyWithoutProjectInput, {nullable:true})
    File?: InstanceType<typeof FileCreateNestedManyWithoutProjectInput>;
}

@InputType()
export class ProjectCreateWithoutUserProjectInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    nameTH!: string;
    @Field(() => String, {nullable:false})
    nameEN!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => ProjectTypeCreateNestedOneWithoutProjectInput, {nullable:false})
    projectType!: InstanceType<typeof ProjectTypeCreateNestedOneWithoutProjectInput>;
    @Field(() => ProjectStatusCreateNestedOneWithoutProjectInput, {nullable:false})
    status!: InstanceType<typeof ProjectStatusCreateNestedOneWithoutProjectInput>;
    @Field(() => MessageCreateNestedManyWithoutProjectInput, {nullable:true})
    Message?: InstanceType<typeof MessageCreateNestedManyWithoutProjectInput>;
    @Field(() => FileCreateNestedManyWithoutProjectInput, {nullable:true})
    File?: InstanceType<typeof FileCreateNestedManyWithoutProjectInput>;
}

@InputType()
export class ProjectCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    nameTH!: string;
    @Field(() => String, {nullable:false})
    nameEN!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => ProjectTypeCreateNestedOneWithoutProjectInput, {nullable:false})
    projectType!: InstanceType<typeof ProjectTypeCreateNestedOneWithoutProjectInput>;
    @Field(() => ProjectStatusCreateNestedOneWithoutProjectInput, {nullable:false})
    status!: InstanceType<typeof ProjectStatusCreateNestedOneWithoutProjectInput>;
    @Field(() => UserProjectCreateNestedManyWithoutProjectInput, {nullable:true})
    UserProject?: InstanceType<typeof UserProjectCreateNestedManyWithoutProjectInput>;
    @Field(() => MessageCreateNestedManyWithoutProjectInput, {nullable:true})
    Message?: InstanceType<typeof MessageCreateNestedManyWithoutProjectInput>;
    @Field(() => FileCreateNestedManyWithoutProjectInput, {nullable:true})
    File?: InstanceType<typeof FileCreateNestedManyWithoutProjectInput>;
}

@ArgsType()
export class ProjectGroupByArgs {
    @Field(() => ProjectWhereInput, {nullable:true})
    @Type(() => ProjectWhereInput)
    where?: InstanceType<typeof ProjectWhereInput>;
    @Field(() => [ProjectOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ProjectOrderByWithAggregationInput>;
    @Field(() => [ProjectScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof ProjectScalarFieldEnum>;
    @Field(() => ProjectScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof ProjectScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => ProjectCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof ProjectCountAggregateInput>;
    @Field(() => ProjectMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof ProjectMinAggregateInput>;
    @Field(() => ProjectMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof ProjectMaxAggregateInput>;
}

@ObjectType()
export class ProjectGroupBy {
    @Field(() => String, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    nameTH!: string;
    @Field(() => String, {nullable:false})
    nameEN!: string;
    @Field(() => String, {nullable:false})
    statusId!: string;
    @Field(() => String, {nullable:false})
    typeId!: string;
    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;
    @Field(() => ProjectCountAggregate, {nullable:true})
    _count?: InstanceType<typeof ProjectCountAggregate>;
    @Field(() => ProjectMinAggregate, {nullable:true})
    _min?: InstanceType<typeof ProjectMinAggregate>;
    @Field(() => ProjectMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof ProjectMaxAggregate>;
}

@InputType()
export class ProjectListRelationFilter {
    @Field(() => ProjectWhereInput, {nullable:true})
    every?: InstanceType<typeof ProjectWhereInput>;
    @Field(() => ProjectWhereInput, {nullable:true})
    some?: InstanceType<typeof ProjectWhereInput>;
    @Field(() => ProjectWhereInput, {nullable:true})
    none?: InstanceType<typeof ProjectWhereInput>;
}

@InputType()
export class ProjectMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    nameTH?: true;
    @Field(() => Boolean, {nullable:true})
    nameEN?: true;
    @Field(() => Boolean, {nullable:true})
    statusId?: true;
    @Field(() => Boolean, {nullable:true})
    typeId?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}

@ObjectType()
export class ProjectMaxAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    nameTH?: string;
    @Field(() => String, {nullable:true})
    nameEN?: string;
    @Field(() => String, {nullable:true})
    statusId?: string;
    @Field(() => String, {nullable:true})
    typeId?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class ProjectMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    nameTH?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    nameEN?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    statusId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    typeId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class ProjectMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    nameTH?: true;
    @Field(() => Boolean, {nullable:true})
    nameEN?: true;
    @Field(() => Boolean, {nullable:true})
    statusId?: true;
    @Field(() => Boolean, {nullable:true})
    typeId?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}

@ObjectType()
export class ProjectMinAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    nameTH?: string;
    @Field(() => String, {nullable:true})
    nameEN?: string;
    @Field(() => String, {nullable:true})
    statusId?: string;
    @Field(() => String, {nullable:true})
    typeId?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class ProjectMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    nameTH?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    nameEN?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    statusId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    typeId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class ProjectOrderByRelationAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    _count?: keyof typeof SortOrder;
}

@InputType()
export class ProjectOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    nameTH?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    nameEN?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    statusId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    typeId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
    @Field(() => ProjectCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof ProjectCountOrderByAggregateInput>;
    @Field(() => ProjectMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof ProjectMaxOrderByAggregateInput>;
    @Field(() => ProjectMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof ProjectMinOrderByAggregateInput>;
}

@InputType()
export class ProjectOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    nameTH?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    nameEN?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    statusId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    typeId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
    @Field(() => ProjectTypeOrderByWithRelationInput, {nullable:true})
    projectType?: InstanceType<typeof ProjectTypeOrderByWithRelationInput>;
    @Field(() => ProjectStatusOrderByWithRelationInput, {nullable:true})
    status?: InstanceType<typeof ProjectStatusOrderByWithRelationInput>;
    @Field(() => UserProjectOrderByRelationAggregateInput, {nullable:true})
    UserProject?: InstanceType<typeof UserProjectOrderByRelationAggregateInput>;
    @Field(() => MessageOrderByRelationAggregateInput, {nullable:true})
    Message?: InstanceType<typeof MessageOrderByRelationAggregateInput>;
    @Field(() => FileOrderByRelationAggregateInput, {nullable:true})
    File?: InstanceType<typeof FileOrderByRelationAggregateInput>;
}

@InputType()
export class ProjectRelationFilter {
    @Field(() => ProjectWhereInput, {nullable:true})
    is?: InstanceType<typeof ProjectWhereInput>;
    @Field(() => ProjectWhereInput, {nullable:true})
    isNot?: InstanceType<typeof ProjectWhereInput>;
}

@InputType()
export class ProjectScalarWhereWithAggregatesInput {
    @Field(() => [ProjectScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ProjectScalarWhereWithAggregatesInput>;
    @Field(() => [ProjectScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ProjectScalarWhereWithAggregatesInput>;
    @Field(() => [ProjectScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ProjectScalarWhereWithAggregatesInput>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    nameTH?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    nameEN?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    statusId?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    typeId?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}

@InputType()
export class ProjectScalarWhereInput {
    @Field(() => [ProjectScalarWhereInput], {nullable:true})
    AND?: Array<ProjectScalarWhereInput>;
    @Field(() => [ProjectScalarWhereInput], {nullable:true})
    OR?: Array<ProjectScalarWhereInput>;
    @Field(() => [ProjectScalarWhereInput], {nullable:true})
    NOT?: Array<ProjectScalarWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    nameTH?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    nameEN?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    statusId?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    typeId?: InstanceType<typeof StringFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
}

@ObjectType()
export class ProjectStatusCount {
    @Field(() => Int, {nullable:false})
    Project?: number;
    @Field(() => Int, {nullable:false})
    File?: number;
}

@InputType()
export class ProjectUncheckedCreateNestedManyWithoutProjectTypeInput {
    @Field(() => [ProjectCreateWithoutProjectTypeInput], {nullable:true})
    @Type(() => ProjectCreateWithoutProjectTypeInput)
    create?: Array<ProjectCreateWithoutProjectTypeInput>;
    @Field(() => [ProjectCreateOrConnectWithoutProjectTypeInput], {nullable:true})
    @Type(() => ProjectCreateOrConnectWithoutProjectTypeInput)
    connectOrCreate?: Array<ProjectCreateOrConnectWithoutProjectTypeInput>;
    @Field(() => ProjectCreateManyProjectTypeInputEnvelope, {nullable:true})
    @Type(() => ProjectCreateManyProjectTypeInputEnvelope)
    createMany?: InstanceType<typeof ProjectCreateManyProjectTypeInputEnvelope>;
    @Field(() => [ProjectWhereUniqueInput], {nullable:true})
    @Type(() => ProjectWhereUniqueInput)
    connect?: Array<ProjectWhereUniqueInput>;
}

@InputType()
export class ProjectUncheckedCreateNestedManyWithoutStatusInput {
    @Field(() => [ProjectCreateWithoutStatusInput], {nullable:true})
    @Type(() => ProjectCreateWithoutStatusInput)
    create?: Array<ProjectCreateWithoutStatusInput>;
    @Field(() => [ProjectCreateOrConnectWithoutStatusInput], {nullable:true})
    @Type(() => ProjectCreateOrConnectWithoutStatusInput)
    connectOrCreate?: Array<ProjectCreateOrConnectWithoutStatusInput>;
    @Field(() => ProjectCreateManyStatusInputEnvelope, {nullable:true})
    @Type(() => ProjectCreateManyStatusInputEnvelope)
    createMany?: InstanceType<typeof ProjectCreateManyStatusInputEnvelope>;
    @Field(() => [ProjectWhereUniqueInput], {nullable:true})
    @Type(() => ProjectWhereUniqueInput)
    connect?: Array<ProjectWhereUniqueInput>;
}

@InputType()
export class ProjectUncheckedCreateWithoutFileInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    nameTH!: string;
    @Field(() => String, {nullable:false})
    nameEN!: string;
    @Field(() => String, {nullable:false})
    statusId!: string;
    @Field(() => String, {nullable:false})
    typeId!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => UserProjectUncheckedCreateNestedManyWithoutProjectInput, {nullable:true})
    UserProject?: InstanceType<typeof UserProjectUncheckedCreateNestedManyWithoutProjectInput>;
    @Field(() => MessageUncheckedCreateNestedManyWithoutProjectInput, {nullable:true})
    Message?: InstanceType<typeof MessageUncheckedCreateNestedManyWithoutProjectInput>;
}

@InputType()
export class ProjectUncheckedCreateWithoutMessageInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    nameTH!: string;
    @Field(() => String, {nullable:false})
    nameEN!: string;
    @Field(() => String, {nullable:false})
    statusId!: string;
    @Field(() => String, {nullable:false})
    typeId!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => UserProjectUncheckedCreateNestedManyWithoutProjectInput, {nullable:true})
    UserProject?: InstanceType<typeof UserProjectUncheckedCreateNestedManyWithoutProjectInput>;
    @Field(() => FileUncheckedCreateNestedManyWithoutProjectInput, {nullable:true})
    File?: InstanceType<typeof FileUncheckedCreateNestedManyWithoutProjectInput>;
}

@InputType()
export class ProjectUncheckedCreateWithoutProjectTypeInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    nameTH!: string;
    @Field(() => String, {nullable:false})
    nameEN!: string;
    @Field(() => String, {nullable:false})
    statusId!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => UserProjectUncheckedCreateNestedManyWithoutProjectInput, {nullable:true})
    UserProject?: InstanceType<typeof UserProjectUncheckedCreateNestedManyWithoutProjectInput>;
    @Field(() => MessageUncheckedCreateNestedManyWithoutProjectInput, {nullable:true})
    Message?: InstanceType<typeof MessageUncheckedCreateNestedManyWithoutProjectInput>;
    @Field(() => FileUncheckedCreateNestedManyWithoutProjectInput, {nullable:true})
    File?: InstanceType<typeof FileUncheckedCreateNestedManyWithoutProjectInput>;
}

@InputType()
export class ProjectUncheckedCreateWithoutStatusInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    nameTH!: string;
    @Field(() => String, {nullable:false})
    nameEN!: string;
    @Field(() => String, {nullable:false})
    typeId!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => UserProjectUncheckedCreateNestedManyWithoutProjectInput, {nullable:true})
    UserProject?: InstanceType<typeof UserProjectUncheckedCreateNestedManyWithoutProjectInput>;
    @Field(() => MessageUncheckedCreateNestedManyWithoutProjectInput, {nullable:true})
    Message?: InstanceType<typeof MessageUncheckedCreateNestedManyWithoutProjectInput>;
    @Field(() => FileUncheckedCreateNestedManyWithoutProjectInput, {nullable:true})
    File?: InstanceType<typeof FileUncheckedCreateNestedManyWithoutProjectInput>;
}

@InputType()
export class ProjectUncheckedCreateWithoutUserProjectInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    nameTH!: string;
    @Field(() => String, {nullable:false})
    nameEN!: string;
    @Field(() => String, {nullable:false})
    statusId!: string;
    @Field(() => String, {nullable:false})
    typeId!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => MessageUncheckedCreateNestedManyWithoutProjectInput, {nullable:true})
    Message?: InstanceType<typeof MessageUncheckedCreateNestedManyWithoutProjectInput>;
    @Field(() => FileUncheckedCreateNestedManyWithoutProjectInput, {nullable:true})
    File?: InstanceType<typeof FileUncheckedCreateNestedManyWithoutProjectInput>;
}

@InputType()
export class ProjectUncheckedCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    nameTH!: string;
    @Field(() => String, {nullable:false})
    nameEN!: string;
    @Field(() => String, {nullable:false})
    statusId!: string;
    @Field(() => String, {nullable:false})
    typeId!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => UserProjectUncheckedCreateNestedManyWithoutProjectInput, {nullable:true})
    UserProject?: InstanceType<typeof UserProjectUncheckedCreateNestedManyWithoutProjectInput>;
    @Field(() => MessageUncheckedCreateNestedManyWithoutProjectInput, {nullable:true})
    Message?: InstanceType<typeof MessageUncheckedCreateNestedManyWithoutProjectInput>;
    @Field(() => FileUncheckedCreateNestedManyWithoutProjectInput, {nullable:true})
    File?: InstanceType<typeof FileUncheckedCreateNestedManyWithoutProjectInput>;
}

@InputType()
export class ProjectUncheckedUpdateManyWithoutProjectTypeNestedInput {
    @Field(() => [ProjectCreateWithoutProjectTypeInput], {nullable:true})
    @Type(() => ProjectCreateWithoutProjectTypeInput)
    create?: Array<ProjectCreateWithoutProjectTypeInput>;
    @Field(() => [ProjectCreateOrConnectWithoutProjectTypeInput], {nullable:true})
    @Type(() => ProjectCreateOrConnectWithoutProjectTypeInput)
    connectOrCreate?: Array<ProjectCreateOrConnectWithoutProjectTypeInput>;
    @Field(() => [ProjectUpsertWithWhereUniqueWithoutProjectTypeInput], {nullable:true})
    @Type(() => ProjectUpsertWithWhereUniqueWithoutProjectTypeInput)
    upsert?: Array<ProjectUpsertWithWhereUniqueWithoutProjectTypeInput>;
    @Field(() => ProjectCreateManyProjectTypeInputEnvelope, {nullable:true})
    @Type(() => ProjectCreateManyProjectTypeInputEnvelope)
    createMany?: InstanceType<typeof ProjectCreateManyProjectTypeInputEnvelope>;
    @Field(() => [ProjectWhereUniqueInput], {nullable:true})
    @Type(() => ProjectWhereUniqueInput)
    set?: Array<ProjectWhereUniqueInput>;
    @Field(() => [ProjectWhereUniqueInput], {nullable:true})
    @Type(() => ProjectWhereUniqueInput)
    disconnect?: Array<ProjectWhereUniqueInput>;
    @Field(() => [ProjectWhereUniqueInput], {nullable:true})
    @Type(() => ProjectWhereUniqueInput)
    delete?: Array<ProjectWhereUniqueInput>;
    @Field(() => [ProjectWhereUniqueInput], {nullable:true})
    @Type(() => ProjectWhereUniqueInput)
    connect?: Array<ProjectWhereUniqueInput>;
    @Field(() => [ProjectUpdateWithWhereUniqueWithoutProjectTypeInput], {nullable:true})
    @Type(() => ProjectUpdateWithWhereUniqueWithoutProjectTypeInput)
    update?: Array<ProjectUpdateWithWhereUniqueWithoutProjectTypeInput>;
    @Field(() => [ProjectUpdateManyWithWhereWithoutProjectTypeInput], {nullable:true})
    @Type(() => ProjectUpdateManyWithWhereWithoutProjectTypeInput)
    updateMany?: Array<ProjectUpdateManyWithWhereWithoutProjectTypeInput>;
    @Field(() => [ProjectScalarWhereInput], {nullable:true})
    @Type(() => ProjectScalarWhereInput)
    deleteMany?: Array<ProjectScalarWhereInput>;
}

@InputType()
export class ProjectUncheckedUpdateManyWithoutProjectInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    nameTH?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    nameEN?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    typeId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class ProjectUncheckedUpdateManyWithoutStatusNestedInput {
    @Field(() => [ProjectCreateWithoutStatusInput], {nullable:true})
    @Type(() => ProjectCreateWithoutStatusInput)
    create?: Array<ProjectCreateWithoutStatusInput>;
    @Field(() => [ProjectCreateOrConnectWithoutStatusInput], {nullable:true})
    @Type(() => ProjectCreateOrConnectWithoutStatusInput)
    connectOrCreate?: Array<ProjectCreateOrConnectWithoutStatusInput>;
    @Field(() => [ProjectUpsertWithWhereUniqueWithoutStatusInput], {nullable:true})
    @Type(() => ProjectUpsertWithWhereUniqueWithoutStatusInput)
    upsert?: Array<ProjectUpsertWithWhereUniqueWithoutStatusInput>;
    @Field(() => ProjectCreateManyStatusInputEnvelope, {nullable:true})
    @Type(() => ProjectCreateManyStatusInputEnvelope)
    createMany?: InstanceType<typeof ProjectCreateManyStatusInputEnvelope>;
    @Field(() => [ProjectWhereUniqueInput], {nullable:true})
    @Type(() => ProjectWhereUniqueInput)
    set?: Array<ProjectWhereUniqueInput>;
    @Field(() => [ProjectWhereUniqueInput], {nullable:true})
    @Type(() => ProjectWhereUniqueInput)
    disconnect?: Array<ProjectWhereUniqueInput>;
    @Field(() => [ProjectWhereUniqueInput], {nullable:true})
    @Type(() => ProjectWhereUniqueInput)
    delete?: Array<ProjectWhereUniqueInput>;
    @Field(() => [ProjectWhereUniqueInput], {nullable:true})
    @Type(() => ProjectWhereUniqueInput)
    connect?: Array<ProjectWhereUniqueInput>;
    @Field(() => [ProjectUpdateWithWhereUniqueWithoutStatusInput], {nullable:true})
    @Type(() => ProjectUpdateWithWhereUniqueWithoutStatusInput)
    update?: Array<ProjectUpdateWithWhereUniqueWithoutStatusInput>;
    @Field(() => [ProjectUpdateManyWithWhereWithoutStatusInput], {nullable:true})
    @Type(() => ProjectUpdateManyWithWhereWithoutStatusInput)
    updateMany?: Array<ProjectUpdateManyWithWhereWithoutStatusInput>;
    @Field(() => [ProjectScalarWhereInput], {nullable:true})
    @Type(() => ProjectScalarWhereInput)
    deleteMany?: Array<ProjectScalarWhereInput>;
}

@InputType()
export class ProjectUncheckedUpdateManyInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    nameTH?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    nameEN?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    statusId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    typeId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class ProjectUncheckedUpdateWithoutFileInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    nameTH?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    nameEN?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    statusId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    typeId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => UserProjectUncheckedUpdateManyWithoutProjectNestedInput, {nullable:true})
    UserProject?: InstanceType<typeof UserProjectUncheckedUpdateManyWithoutProjectNestedInput>;
    @Field(() => MessageUncheckedUpdateManyWithoutProjectNestedInput, {nullable:true})
    Message?: InstanceType<typeof MessageUncheckedUpdateManyWithoutProjectNestedInput>;
}

@InputType()
export class ProjectUncheckedUpdateWithoutMessageInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    nameTH?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    nameEN?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    statusId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    typeId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => UserProjectUncheckedUpdateManyWithoutProjectNestedInput, {nullable:true})
    UserProject?: InstanceType<typeof UserProjectUncheckedUpdateManyWithoutProjectNestedInput>;
    @Field(() => FileUncheckedUpdateManyWithoutProjectNestedInput, {nullable:true})
    File?: InstanceType<typeof FileUncheckedUpdateManyWithoutProjectNestedInput>;
}

@InputType()
export class ProjectUncheckedUpdateWithoutProjectTypeInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    nameTH?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    nameEN?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    statusId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => UserProjectUncheckedUpdateManyWithoutProjectNestedInput, {nullable:true})
    UserProject?: InstanceType<typeof UserProjectUncheckedUpdateManyWithoutProjectNestedInput>;
    @Field(() => MessageUncheckedUpdateManyWithoutProjectNestedInput, {nullable:true})
    Message?: InstanceType<typeof MessageUncheckedUpdateManyWithoutProjectNestedInput>;
    @Field(() => FileUncheckedUpdateManyWithoutProjectNestedInput, {nullable:true})
    File?: InstanceType<typeof FileUncheckedUpdateManyWithoutProjectNestedInput>;
}

@InputType()
export class ProjectUncheckedUpdateWithoutStatusInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    nameTH?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    nameEN?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    typeId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => UserProjectUncheckedUpdateManyWithoutProjectNestedInput, {nullable:true})
    UserProject?: InstanceType<typeof UserProjectUncheckedUpdateManyWithoutProjectNestedInput>;
    @Field(() => MessageUncheckedUpdateManyWithoutProjectNestedInput, {nullable:true})
    Message?: InstanceType<typeof MessageUncheckedUpdateManyWithoutProjectNestedInput>;
    @Field(() => FileUncheckedUpdateManyWithoutProjectNestedInput, {nullable:true})
    File?: InstanceType<typeof FileUncheckedUpdateManyWithoutProjectNestedInput>;
}

@InputType()
export class ProjectUncheckedUpdateWithoutUserProjectInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    nameTH?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    nameEN?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    statusId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    typeId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => MessageUncheckedUpdateManyWithoutProjectNestedInput, {nullable:true})
    Message?: InstanceType<typeof MessageUncheckedUpdateManyWithoutProjectNestedInput>;
    @Field(() => FileUncheckedUpdateManyWithoutProjectNestedInput, {nullable:true})
    File?: InstanceType<typeof FileUncheckedUpdateManyWithoutProjectNestedInput>;
}

@InputType()
export class ProjectUncheckedUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    nameTH?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    nameEN?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    statusId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    typeId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => UserProjectUncheckedUpdateManyWithoutProjectNestedInput, {nullable:true})
    UserProject?: InstanceType<typeof UserProjectUncheckedUpdateManyWithoutProjectNestedInput>;
    @Field(() => MessageUncheckedUpdateManyWithoutProjectNestedInput, {nullable:true})
    Message?: InstanceType<typeof MessageUncheckedUpdateManyWithoutProjectNestedInput>;
    @Field(() => FileUncheckedUpdateManyWithoutProjectNestedInput, {nullable:true})
    File?: InstanceType<typeof FileUncheckedUpdateManyWithoutProjectNestedInput>;
}

@InputType()
export class ProjectUpdateManyMutationInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    nameTH?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    nameEN?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class ProjectUpdateManyWithWhereWithoutProjectTypeInput {
    @Field(() => ProjectScalarWhereInput, {nullable:false})
    @Type(() => ProjectScalarWhereInput)
    where!: InstanceType<typeof ProjectScalarWhereInput>;
    @Field(() => ProjectUpdateManyMutationInput, {nullable:false})
    @Type(() => ProjectUpdateManyMutationInput)
    data!: InstanceType<typeof ProjectUpdateManyMutationInput>;
}

@InputType()
export class ProjectUpdateManyWithWhereWithoutStatusInput {
    @Field(() => ProjectScalarWhereInput, {nullable:false})
    @Type(() => ProjectScalarWhereInput)
    where!: InstanceType<typeof ProjectScalarWhereInput>;
    @Field(() => ProjectUpdateManyMutationInput, {nullable:false})
    @Type(() => ProjectUpdateManyMutationInput)
    data!: InstanceType<typeof ProjectUpdateManyMutationInput>;
}

@InputType()
export class ProjectUpdateManyWithoutProjectTypeNestedInput {
    @Field(() => [ProjectCreateWithoutProjectTypeInput], {nullable:true})
    @Type(() => ProjectCreateWithoutProjectTypeInput)
    create?: Array<ProjectCreateWithoutProjectTypeInput>;
    @Field(() => [ProjectCreateOrConnectWithoutProjectTypeInput], {nullable:true})
    @Type(() => ProjectCreateOrConnectWithoutProjectTypeInput)
    connectOrCreate?: Array<ProjectCreateOrConnectWithoutProjectTypeInput>;
    @Field(() => [ProjectUpsertWithWhereUniqueWithoutProjectTypeInput], {nullable:true})
    @Type(() => ProjectUpsertWithWhereUniqueWithoutProjectTypeInput)
    upsert?: Array<ProjectUpsertWithWhereUniqueWithoutProjectTypeInput>;
    @Field(() => ProjectCreateManyProjectTypeInputEnvelope, {nullable:true})
    @Type(() => ProjectCreateManyProjectTypeInputEnvelope)
    createMany?: InstanceType<typeof ProjectCreateManyProjectTypeInputEnvelope>;
    @Field(() => [ProjectWhereUniqueInput], {nullable:true})
    @Type(() => ProjectWhereUniqueInput)
    set?: Array<ProjectWhereUniqueInput>;
    @Field(() => [ProjectWhereUniqueInput], {nullable:true})
    @Type(() => ProjectWhereUniqueInput)
    disconnect?: Array<ProjectWhereUniqueInput>;
    @Field(() => [ProjectWhereUniqueInput], {nullable:true})
    @Type(() => ProjectWhereUniqueInput)
    delete?: Array<ProjectWhereUniqueInput>;
    @Field(() => [ProjectWhereUniqueInput], {nullable:true})
    @Type(() => ProjectWhereUniqueInput)
    connect?: Array<ProjectWhereUniqueInput>;
    @Field(() => [ProjectUpdateWithWhereUniqueWithoutProjectTypeInput], {nullable:true})
    @Type(() => ProjectUpdateWithWhereUniqueWithoutProjectTypeInput)
    update?: Array<ProjectUpdateWithWhereUniqueWithoutProjectTypeInput>;
    @Field(() => [ProjectUpdateManyWithWhereWithoutProjectTypeInput], {nullable:true})
    @Type(() => ProjectUpdateManyWithWhereWithoutProjectTypeInput)
    updateMany?: Array<ProjectUpdateManyWithWhereWithoutProjectTypeInput>;
    @Field(() => [ProjectScalarWhereInput], {nullable:true})
    @Type(() => ProjectScalarWhereInput)
    deleteMany?: Array<ProjectScalarWhereInput>;
}

@InputType()
export class ProjectUpdateManyWithoutStatusNestedInput {
    @Field(() => [ProjectCreateWithoutStatusInput], {nullable:true})
    @Type(() => ProjectCreateWithoutStatusInput)
    create?: Array<ProjectCreateWithoutStatusInput>;
    @Field(() => [ProjectCreateOrConnectWithoutStatusInput], {nullable:true})
    @Type(() => ProjectCreateOrConnectWithoutStatusInput)
    connectOrCreate?: Array<ProjectCreateOrConnectWithoutStatusInput>;
    @Field(() => [ProjectUpsertWithWhereUniqueWithoutStatusInput], {nullable:true})
    @Type(() => ProjectUpsertWithWhereUniqueWithoutStatusInput)
    upsert?: Array<ProjectUpsertWithWhereUniqueWithoutStatusInput>;
    @Field(() => ProjectCreateManyStatusInputEnvelope, {nullable:true})
    @Type(() => ProjectCreateManyStatusInputEnvelope)
    createMany?: InstanceType<typeof ProjectCreateManyStatusInputEnvelope>;
    @Field(() => [ProjectWhereUniqueInput], {nullable:true})
    @Type(() => ProjectWhereUniqueInput)
    set?: Array<ProjectWhereUniqueInput>;
    @Field(() => [ProjectWhereUniqueInput], {nullable:true})
    @Type(() => ProjectWhereUniqueInput)
    disconnect?: Array<ProjectWhereUniqueInput>;
    @Field(() => [ProjectWhereUniqueInput], {nullable:true})
    @Type(() => ProjectWhereUniqueInput)
    delete?: Array<ProjectWhereUniqueInput>;
    @Field(() => [ProjectWhereUniqueInput], {nullable:true})
    @Type(() => ProjectWhereUniqueInput)
    connect?: Array<ProjectWhereUniqueInput>;
    @Field(() => [ProjectUpdateWithWhereUniqueWithoutStatusInput], {nullable:true})
    @Type(() => ProjectUpdateWithWhereUniqueWithoutStatusInput)
    update?: Array<ProjectUpdateWithWhereUniqueWithoutStatusInput>;
    @Field(() => [ProjectUpdateManyWithWhereWithoutStatusInput], {nullable:true})
    @Type(() => ProjectUpdateManyWithWhereWithoutStatusInput)
    updateMany?: Array<ProjectUpdateManyWithWhereWithoutStatusInput>;
    @Field(() => [ProjectScalarWhereInput], {nullable:true})
    @Type(() => ProjectScalarWhereInput)
    deleteMany?: Array<ProjectScalarWhereInput>;
}

@InputType()
export class ProjectUpdateOneRequiredWithoutUserProjectNestedInput {
    @Field(() => ProjectCreateWithoutUserProjectInput, {nullable:true})
    @Type(() => ProjectCreateWithoutUserProjectInput)
    create?: InstanceType<typeof ProjectCreateWithoutUserProjectInput>;
    @Field(() => ProjectCreateOrConnectWithoutUserProjectInput, {nullable:true})
    @Type(() => ProjectCreateOrConnectWithoutUserProjectInput)
    connectOrCreate?: InstanceType<typeof ProjectCreateOrConnectWithoutUserProjectInput>;
    @Field(() => ProjectUpsertWithoutUserProjectInput, {nullable:true})
    @Type(() => ProjectUpsertWithoutUserProjectInput)
    upsert?: InstanceType<typeof ProjectUpsertWithoutUserProjectInput>;
    @Field(() => ProjectWhereUniqueInput, {nullable:true})
    @Type(() => ProjectWhereUniqueInput)
    connect?: InstanceType<typeof ProjectWhereUniqueInput>;
    @Field(() => ProjectUpdateWithoutUserProjectInput, {nullable:true})
    @Type(() => ProjectUpdateWithoutUserProjectInput)
    update?: InstanceType<typeof ProjectUpdateWithoutUserProjectInput>;
}

@InputType()
export class ProjectUpdateOneWithoutFileNestedInput {
    @Field(() => ProjectCreateWithoutFileInput, {nullable:true})
    @Type(() => ProjectCreateWithoutFileInput)
    create?: InstanceType<typeof ProjectCreateWithoutFileInput>;
    @Field(() => ProjectCreateOrConnectWithoutFileInput, {nullable:true})
    @Type(() => ProjectCreateOrConnectWithoutFileInput)
    connectOrCreate?: InstanceType<typeof ProjectCreateOrConnectWithoutFileInput>;
    @Field(() => ProjectUpsertWithoutFileInput, {nullable:true})
    @Type(() => ProjectUpsertWithoutFileInput)
    upsert?: InstanceType<typeof ProjectUpsertWithoutFileInput>;
    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;
    @Field(() => Boolean, {nullable:true})
    delete?: boolean;
    @Field(() => ProjectWhereUniqueInput, {nullable:true})
    @Type(() => ProjectWhereUniqueInput)
    connect?: InstanceType<typeof ProjectWhereUniqueInput>;
    @Field(() => ProjectUpdateWithoutFileInput, {nullable:true})
    @Type(() => ProjectUpdateWithoutFileInput)
    update?: InstanceType<typeof ProjectUpdateWithoutFileInput>;
}

@InputType()
export class ProjectUpdateOneWithoutMessageNestedInput {
    @Field(() => ProjectCreateWithoutMessageInput, {nullable:true})
    @Type(() => ProjectCreateWithoutMessageInput)
    create?: InstanceType<typeof ProjectCreateWithoutMessageInput>;
    @Field(() => ProjectCreateOrConnectWithoutMessageInput, {nullable:true})
    @Type(() => ProjectCreateOrConnectWithoutMessageInput)
    connectOrCreate?: InstanceType<typeof ProjectCreateOrConnectWithoutMessageInput>;
    @Field(() => ProjectUpsertWithoutMessageInput, {nullable:true})
    @Type(() => ProjectUpsertWithoutMessageInput)
    upsert?: InstanceType<typeof ProjectUpsertWithoutMessageInput>;
    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;
    @Field(() => Boolean, {nullable:true})
    delete?: boolean;
    @Field(() => ProjectWhereUniqueInput, {nullable:true})
    @Type(() => ProjectWhereUniqueInput)
    connect?: InstanceType<typeof ProjectWhereUniqueInput>;
    @Field(() => ProjectUpdateWithoutMessageInput, {nullable:true})
    @Type(() => ProjectUpdateWithoutMessageInput)
    update?: InstanceType<typeof ProjectUpdateWithoutMessageInput>;
}

@InputType()
export class ProjectUpdateWithWhereUniqueWithoutProjectTypeInput {
    @Field(() => ProjectWhereUniqueInput, {nullable:false})
    @Type(() => ProjectWhereUniqueInput)
    where!: InstanceType<typeof ProjectWhereUniqueInput>;
    @Field(() => ProjectUpdateWithoutProjectTypeInput, {nullable:false})
    @Type(() => ProjectUpdateWithoutProjectTypeInput)
    data!: InstanceType<typeof ProjectUpdateWithoutProjectTypeInput>;
}

@InputType()
export class ProjectUpdateWithWhereUniqueWithoutStatusInput {
    @Field(() => ProjectWhereUniqueInput, {nullable:false})
    @Type(() => ProjectWhereUniqueInput)
    where!: InstanceType<typeof ProjectWhereUniqueInput>;
    @Field(() => ProjectUpdateWithoutStatusInput, {nullable:false})
    @Type(() => ProjectUpdateWithoutStatusInput)
    data!: InstanceType<typeof ProjectUpdateWithoutStatusInput>;
}

@InputType()
export class ProjectUpdateWithoutFileInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    nameTH?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    nameEN?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => ProjectTypeUpdateOneRequiredWithoutProjectNestedInput, {nullable:true})
    projectType?: InstanceType<typeof ProjectTypeUpdateOneRequiredWithoutProjectNestedInput>;
    @Field(() => ProjectStatusUpdateOneRequiredWithoutProjectNestedInput, {nullable:true})
    status?: InstanceType<typeof ProjectStatusUpdateOneRequiredWithoutProjectNestedInput>;
    @Field(() => UserProjectUpdateManyWithoutProjectNestedInput, {nullable:true})
    UserProject?: InstanceType<typeof UserProjectUpdateManyWithoutProjectNestedInput>;
    @Field(() => MessageUpdateManyWithoutProjectNestedInput, {nullable:true})
    Message?: InstanceType<typeof MessageUpdateManyWithoutProjectNestedInput>;
}

@InputType()
export class ProjectUpdateWithoutMessageInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    nameTH?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    nameEN?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => ProjectTypeUpdateOneRequiredWithoutProjectNestedInput, {nullable:true})
    projectType?: InstanceType<typeof ProjectTypeUpdateOneRequiredWithoutProjectNestedInput>;
    @Field(() => ProjectStatusUpdateOneRequiredWithoutProjectNestedInput, {nullable:true})
    status?: InstanceType<typeof ProjectStatusUpdateOneRequiredWithoutProjectNestedInput>;
    @Field(() => UserProjectUpdateManyWithoutProjectNestedInput, {nullable:true})
    UserProject?: InstanceType<typeof UserProjectUpdateManyWithoutProjectNestedInput>;
    @Field(() => FileUpdateManyWithoutProjectNestedInput, {nullable:true})
    File?: InstanceType<typeof FileUpdateManyWithoutProjectNestedInput>;
}

@InputType()
export class ProjectUpdateWithoutProjectTypeInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    nameTH?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    nameEN?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => ProjectStatusUpdateOneRequiredWithoutProjectNestedInput, {nullable:true})
    status?: InstanceType<typeof ProjectStatusUpdateOneRequiredWithoutProjectNestedInput>;
    @Field(() => UserProjectUpdateManyWithoutProjectNestedInput, {nullable:true})
    UserProject?: InstanceType<typeof UserProjectUpdateManyWithoutProjectNestedInput>;
    @Field(() => MessageUpdateManyWithoutProjectNestedInput, {nullable:true})
    Message?: InstanceType<typeof MessageUpdateManyWithoutProjectNestedInput>;
    @Field(() => FileUpdateManyWithoutProjectNestedInput, {nullable:true})
    File?: InstanceType<typeof FileUpdateManyWithoutProjectNestedInput>;
}

@InputType()
export class ProjectUpdateWithoutStatusInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    nameTH?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    nameEN?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => ProjectTypeUpdateOneRequiredWithoutProjectNestedInput, {nullable:true})
    projectType?: InstanceType<typeof ProjectTypeUpdateOneRequiredWithoutProjectNestedInput>;
    @Field(() => UserProjectUpdateManyWithoutProjectNestedInput, {nullable:true})
    UserProject?: InstanceType<typeof UserProjectUpdateManyWithoutProjectNestedInput>;
    @Field(() => MessageUpdateManyWithoutProjectNestedInput, {nullable:true})
    Message?: InstanceType<typeof MessageUpdateManyWithoutProjectNestedInput>;
    @Field(() => FileUpdateManyWithoutProjectNestedInput, {nullable:true})
    File?: InstanceType<typeof FileUpdateManyWithoutProjectNestedInput>;
}

@InputType()
export class ProjectUpdateWithoutUserProjectInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    nameTH?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    nameEN?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => ProjectTypeUpdateOneRequiredWithoutProjectNestedInput, {nullable:true})
    projectType?: InstanceType<typeof ProjectTypeUpdateOneRequiredWithoutProjectNestedInput>;
    @Field(() => ProjectStatusUpdateOneRequiredWithoutProjectNestedInput, {nullable:true})
    status?: InstanceType<typeof ProjectStatusUpdateOneRequiredWithoutProjectNestedInput>;
    @Field(() => MessageUpdateManyWithoutProjectNestedInput, {nullable:true})
    Message?: InstanceType<typeof MessageUpdateManyWithoutProjectNestedInput>;
    @Field(() => FileUpdateManyWithoutProjectNestedInput, {nullable:true})
    File?: InstanceType<typeof FileUpdateManyWithoutProjectNestedInput>;
}

@InputType()
export class ProjectUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    nameTH?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    nameEN?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => ProjectTypeUpdateOneRequiredWithoutProjectNestedInput, {nullable:true})
    projectType?: InstanceType<typeof ProjectTypeUpdateOneRequiredWithoutProjectNestedInput>;
    @Field(() => ProjectStatusUpdateOneRequiredWithoutProjectNestedInput, {nullable:true})
    status?: InstanceType<typeof ProjectStatusUpdateOneRequiredWithoutProjectNestedInput>;
    @Field(() => UserProjectUpdateManyWithoutProjectNestedInput, {nullable:true})
    UserProject?: InstanceType<typeof UserProjectUpdateManyWithoutProjectNestedInput>;
    @Field(() => MessageUpdateManyWithoutProjectNestedInput, {nullable:true})
    Message?: InstanceType<typeof MessageUpdateManyWithoutProjectNestedInput>;
    @Field(() => FileUpdateManyWithoutProjectNestedInput, {nullable:true})
    File?: InstanceType<typeof FileUpdateManyWithoutProjectNestedInput>;
}

@InputType()
export class ProjectUpsertWithWhereUniqueWithoutProjectTypeInput {
    @Field(() => ProjectWhereUniqueInput, {nullable:false})
    @Type(() => ProjectWhereUniqueInput)
    where!: InstanceType<typeof ProjectWhereUniqueInput>;
    @Field(() => ProjectUpdateWithoutProjectTypeInput, {nullable:false})
    @Type(() => ProjectUpdateWithoutProjectTypeInput)
    update!: InstanceType<typeof ProjectUpdateWithoutProjectTypeInput>;
    @Field(() => ProjectCreateWithoutProjectTypeInput, {nullable:false})
    @Type(() => ProjectCreateWithoutProjectTypeInput)
    create!: InstanceType<typeof ProjectCreateWithoutProjectTypeInput>;
}

@InputType()
export class ProjectUpsertWithWhereUniqueWithoutStatusInput {
    @Field(() => ProjectWhereUniqueInput, {nullable:false})
    @Type(() => ProjectWhereUniqueInput)
    where!: InstanceType<typeof ProjectWhereUniqueInput>;
    @Field(() => ProjectUpdateWithoutStatusInput, {nullable:false})
    @Type(() => ProjectUpdateWithoutStatusInput)
    update!: InstanceType<typeof ProjectUpdateWithoutStatusInput>;
    @Field(() => ProjectCreateWithoutStatusInput, {nullable:false})
    @Type(() => ProjectCreateWithoutStatusInput)
    create!: InstanceType<typeof ProjectCreateWithoutStatusInput>;
}

@InputType()
export class ProjectUpsertWithoutFileInput {
    @Field(() => ProjectUpdateWithoutFileInput, {nullable:false})
    @Type(() => ProjectUpdateWithoutFileInput)
    update!: InstanceType<typeof ProjectUpdateWithoutFileInput>;
    @Field(() => ProjectCreateWithoutFileInput, {nullable:false})
    @Type(() => ProjectCreateWithoutFileInput)
    create!: InstanceType<typeof ProjectCreateWithoutFileInput>;
}

@InputType()
export class ProjectUpsertWithoutMessageInput {
    @Field(() => ProjectUpdateWithoutMessageInput, {nullable:false})
    @Type(() => ProjectUpdateWithoutMessageInput)
    update!: InstanceType<typeof ProjectUpdateWithoutMessageInput>;
    @Field(() => ProjectCreateWithoutMessageInput, {nullable:false})
    @Type(() => ProjectCreateWithoutMessageInput)
    create!: InstanceType<typeof ProjectCreateWithoutMessageInput>;
}

@InputType()
export class ProjectUpsertWithoutUserProjectInput {
    @Field(() => ProjectUpdateWithoutUserProjectInput, {nullable:false})
    @Type(() => ProjectUpdateWithoutUserProjectInput)
    update!: InstanceType<typeof ProjectUpdateWithoutUserProjectInput>;
    @Field(() => ProjectCreateWithoutUserProjectInput, {nullable:false})
    @Type(() => ProjectCreateWithoutUserProjectInput)
    create!: InstanceType<typeof ProjectCreateWithoutUserProjectInput>;
}

@InputType()
export class ProjectWhereUniqueInput {
    @Field(() => String, {nullable:true})
    id?: string;
}

@InputType()
export class ProjectWhereInput {
    @Field(() => [ProjectWhereInput], {nullable:true})
    AND?: Array<ProjectWhereInput>;
    @Field(() => [ProjectWhereInput], {nullable:true})
    OR?: Array<ProjectWhereInput>;
    @Field(() => [ProjectWhereInput], {nullable:true})
    NOT?: Array<ProjectWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    nameTH?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    nameEN?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    statusId?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    typeId?: InstanceType<typeof StringFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => ProjectTypeRelationFilter, {nullable:true})
    projectType?: InstanceType<typeof ProjectTypeRelationFilter>;
    @Field(() => ProjectStatusRelationFilter, {nullable:true})
    status?: InstanceType<typeof ProjectStatusRelationFilter>;
    @Field(() => UserProjectListRelationFilter, {nullable:true})
    UserProject?: InstanceType<typeof UserProjectListRelationFilter>;
    @Field(() => MessageListRelationFilter, {nullable:true})
    Message?: InstanceType<typeof MessageListRelationFilter>;
    @Field(() => FileListRelationFilter, {nullable:true})
    File?: InstanceType<typeof FileListRelationFilter>;
}

@ObjectType()
export class Project {
    @Field(() => ID, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    nameTH!: string;
    @Field(() => String, {nullable:false})
    nameEN!: string;
    @Field(() => String, {nullable:false})
    statusId!: string;
    @Field(() => String, {nullable:false})
    typeId!: string;
    @Field(() => Date, {nullable:false})
    createdAt!: Date;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date;
    @Field(() => ProjectType, {nullable:false})
    projectType?: InstanceType<typeof ProjectType>;
    @Field(() => ProjectStatus, {nullable:false})
    status?: InstanceType<typeof ProjectStatus>;
    @Field(() => [UserProject], {nullable:true})
    UserProject?: Array<UserProject>;
    @Field(() => [Message], {nullable:true})
    Message?: Array<Message>;
    @Field(() => [File], {nullable:true})
    File?: Array<File>;
    @Field(() => ProjectCount, {nullable:false})
    _count?: InstanceType<typeof ProjectCount>;
}

@ArgsType()
export class UpdateManyProjectArgs {
    @Field(() => ProjectUpdateManyMutationInput, {nullable:false})
    @Type(() => ProjectUpdateManyMutationInput)
    data!: InstanceType<typeof ProjectUpdateManyMutationInput>;
    @Field(() => ProjectWhereInput, {nullable:true})
    @Type(() => ProjectWhereInput)
    where?: InstanceType<typeof ProjectWhereInput>;
}

@ArgsType()
export class UpdateOneProjectArgs {
    @Field(() => ProjectUpdateInput, {nullable:false})
    @Type(() => ProjectUpdateInput)
    data!: InstanceType<typeof ProjectUpdateInput>;
    @Field(() => ProjectWhereUniqueInput, {nullable:false})
    @Type(() => ProjectWhereUniqueInput)
    where!: InstanceType<typeof ProjectWhereUniqueInput>;
}

@ArgsType()
export class UpsertOneProjectArgs {
    @Field(() => ProjectWhereUniqueInput, {nullable:false})
    @Type(() => ProjectWhereUniqueInput)
    where!: InstanceType<typeof ProjectWhereUniqueInput>;
    @Field(() => ProjectCreateInput, {nullable:false})
    @Type(() => ProjectCreateInput)
    create!: InstanceType<typeof ProjectCreateInput>;
    @Field(() => ProjectUpdateInput, {nullable:false})
    @Type(() => ProjectUpdateInput)
    update!: InstanceType<typeof ProjectUpdateInput>;
}

@ObjectType()
export class AggregateProjectStatus {
    @Field(() => ProjectStatusCountAggregate, {nullable:true})
    _count?: InstanceType<typeof ProjectStatusCountAggregate>;
    @Field(() => ProjectStatusMinAggregate, {nullable:true})
    _min?: InstanceType<typeof ProjectStatusMinAggregate>;
    @Field(() => ProjectStatusMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof ProjectStatusMaxAggregate>;
}

@ArgsType()
export class CreateManyProjectStatusArgs {
    @Field(() => [ProjectStatusCreateManyInput], {nullable:false})
    @Type(() => ProjectStatusCreateManyInput)
    data!: Array<ProjectStatusCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneProjectStatusArgs {
    @Field(() => ProjectStatusCreateInput, {nullable:false})
    @Type(() => ProjectStatusCreateInput)
    data!: InstanceType<typeof ProjectStatusCreateInput>;
}

@ArgsType()
export class DeleteManyProjectStatusArgs {
    @Field(() => ProjectStatusWhereInput, {nullable:true})
    @Type(() => ProjectStatusWhereInput)
    where?: InstanceType<typeof ProjectStatusWhereInput>;
}

@ArgsType()
export class DeleteOneProjectStatusArgs {
    @Field(() => ProjectStatusWhereUniqueInput, {nullable:false})
    @Type(() => ProjectStatusWhereUniqueInput)
    where!: InstanceType<typeof ProjectStatusWhereUniqueInput>;
}

@ArgsType()
export class FindFirstProjectStatusOrThrowArgs {
    @Field(() => ProjectStatusWhereInput, {nullable:true})
    @Type(() => ProjectStatusWhereInput)
    where?: InstanceType<typeof ProjectStatusWhereInput>;
    @Field(() => [ProjectStatusOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ProjectStatusOrderByWithRelationInput>;
    @Field(() => ProjectStatusWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof ProjectStatusWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [ProjectStatusScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ProjectStatusScalarFieldEnum>;
}

@ArgsType()
export class FindFirstProjectStatusArgs {
    @Field(() => ProjectStatusWhereInput, {nullable:true})
    @Type(() => ProjectStatusWhereInput)
    where?: InstanceType<typeof ProjectStatusWhereInput>;
    @Field(() => [ProjectStatusOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ProjectStatusOrderByWithRelationInput>;
    @Field(() => ProjectStatusWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof ProjectStatusWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [ProjectStatusScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ProjectStatusScalarFieldEnum>;
}

@ArgsType()
export class FindManyProjectStatusArgs {
    @Field(() => ProjectStatusWhereInput, {nullable:true})
    @Type(() => ProjectStatusWhereInput)
    where?: InstanceType<typeof ProjectStatusWhereInput>;
    @Field(() => [ProjectStatusOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ProjectStatusOrderByWithRelationInput>;
    @Field(() => ProjectStatusWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof ProjectStatusWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [ProjectStatusScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ProjectStatusScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueProjectStatusOrThrowArgs {
    @Field(() => ProjectStatusWhereUniqueInput, {nullable:false})
    @Type(() => ProjectStatusWhereUniqueInput)
    where!: InstanceType<typeof ProjectStatusWhereUniqueInput>;
}

@ArgsType()
export class FindUniqueProjectStatusArgs {
    @Field(() => ProjectStatusWhereUniqueInput, {nullable:false})
    @Type(() => ProjectStatusWhereUniqueInput)
    where!: InstanceType<typeof ProjectStatusWhereUniqueInput>;
}

@ArgsType()
export class ProjectStatusAggregateArgs {
    @Field(() => ProjectStatusWhereInput, {nullable:true})
    @Type(() => ProjectStatusWhereInput)
    where?: InstanceType<typeof ProjectStatusWhereInput>;
    @Field(() => [ProjectStatusOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ProjectStatusOrderByWithRelationInput>;
    @Field(() => ProjectStatusWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof ProjectStatusWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => ProjectStatusCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof ProjectStatusCountAggregateInput>;
    @Field(() => ProjectStatusMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof ProjectStatusMinAggregateInput>;
    @Field(() => ProjectStatusMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof ProjectStatusMaxAggregateInput>;
}

@InputType()
export class ProjectStatusCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class ProjectStatusCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    name!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class ProjectStatusCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
}

@InputType()
export class ProjectStatusCreateManyInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    name!: string;
}

@InputType()
export class ProjectStatusCreateNestedOneWithoutFileInput {
    @Field(() => ProjectStatusCreateWithoutFileInput, {nullable:true})
    @Type(() => ProjectStatusCreateWithoutFileInput)
    create?: InstanceType<typeof ProjectStatusCreateWithoutFileInput>;
    @Field(() => ProjectStatusCreateOrConnectWithoutFileInput, {nullable:true})
    @Type(() => ProjectStatusCreateOrConnectWithoutFileInput)
    connectOrCreate?: InstanceType<typeof ProjectStatusCreateOrConnectWithoutFileInput>;
    @Field(() => ProjectStatusWhereUniqueInput, {nullable:true})
    @Type(() => ProjectStatusWhereUniqueInput)
    connect?: InstanceType<typeof ProjectStatusWhereUniqueInput>;
}

@InputType()
export class ProjectStatusCreateNestedOneWithoutProjectInput {
    @Field(() => ProjectStatusCreateWithoutProjectInput, {nullable:true})
    @Type(() => ProjectStatusCreateWithoutProjectInput)
    create?: InstanceType<typeof ProjectStatusCreateWithoutProjectInput>;
    @Field(() => ProjectStatusCreateOrConnectWithoutProjectInput, {nullable:true})
    @Type(() => ProjectStatusCreateOrConnectWithoutProjectInput)
    connectOrCreate?: InstanceType<typeof ProjectStatusCreateOrConnectWithoutProjectInput>;
    @Field(() => ProjectStatusWhereUniqueInput, {nullable:true})
    @Type(() => ProjectStatusWhereUniqueInput)
    connect?: InstanceType<typeof ProjectStatusWhereUniqueInput>;
}

@InputType()
export class ProjectStatusCreateOrConnectWithoutFileInput {
    @Field(() => ProjectStatusWhereUniqueInput, {nullable:false})
    @Type(() => ProjectStatusWhereUniqueInput)
    where!: InstanceType<typeof ProjectStatusWhereUniqueInput>;
    @Field(() => ProjectStatusCreateWithoutFileInput, {nullable:false})
    @Type(() => ProjectStatusCreateWithoutFileInput)
    create!: InstanceType<typeof ProjectStatusCreateWithoutFileInput>;
}

@InputType()
export class ProjectStatusCreateOrConnectWithoutProjectInput {
    @Field(() => ProjectStatusWhereUniqueInput, {nullable:false})
    @Type(() => ProjectStatusWhereUniqueInput)
    where!: InstanceType<typeof ProjectStatusWhereUniqueInput>;
    @Field(() => ProjectStatusCreateWithoutProjectInput, {nullable:false})
    @Type(() => ProjectStatusCreateWithoutProjectInput)
    create!: InstanceType<typeof ProjectStatusCreateWithoutProjectInput>;
}

@InputType()
export class ProjectStatusCreateWithoutFileInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => ProjectCreateNestedManyWithoutStatusInput, {nullable:true})
    Project?: InstanceType<typeof ProjectCreateNestedManyWithoutStatusInput>;
}

@InputType()
export class ProjectStatusCreateWithoutProjectInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => FileCreateNestedManyWithoutStatusInput, {nullable:true})
    File?: InstanceType<typeof FileCreateNestedManyWithoutStatusInput>;
}

@InputType()
export class ProjectStatusCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => ProjectCreateNestedManyWithoutStatusInput, {nullable:true})
    Project?: InstanceType<typeof ProjectCreateNestedManyWithoutStatusInput>;
    @Field(() => FileCreateNestedManyWithoutStatusInput, {nullable:true})
    File?: InstanceType<typeof FileCreateNestedManyWithoutStatusInput>;
}

@ArgsType()
export class ProjectStatusGroupByArgs {
    @Field(() => ProjectStatusWhereInput, {nullable:true})
    @Type(() => ProjectStatusWhereInput)
    where?: InstanceType<typeof ProjectStatusWhereInput>;
    @Field(() => [ProjectStatusOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ProjectStatusOrderByWithAggregationInput>;
    @Field(() => [ProjectStatusScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof ProjectStatusScalarFieldEnum>;
    @Field(() => ProjectStatusScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof ProjectStatusScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => ProjectStatusCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof ProjectStatusCountAggregateInput>;
    @Field(() => ProjectStatusMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof ProjectStatusMinAggregateInput>;
    @Field(() => ProjectStatusMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof ProjectStatusMaxAggregateInput>;
}

@ObjectType()
export class ProjectStatusGroupBy {
    @Field(() => String, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => ProjectStatusCountAggregate, {nullable:true})
    _count?: InstanceType<typeof ProjectStatusCountAggregate>;
    @Field(() => ProjectStatusMinAggregate, {nullable:true})
    _min?: InstanceType<typeof ProjectStatusMinAggregate>;
    @Field(() => ProjectStatusMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof ProjectStatusMaxAggregate>;
}

@InputType()
export class ProjectStatusMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
}

@ObjectType()
export class ProjectStatusMaxAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    name?: string;
}

@InputType()
export class ProjectStatusMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
}

@InputType()
export class ProjectStatusMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
}

@ObjectType()
export class ProjectStatusMinAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    name?: string;
}

@InputType()
export class ProjectStatusMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
}

@InputType()
export class ProjectStatusOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => ProjectStatusCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof ProjectStatusCountOrderByAggregateInput>;
    @Field(() => ProjectStatusMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof ProjectStatusMaxOrderByAggregateInput>;
    @Field(() => ProjectStatusMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof ProjectStatusMinOrderByAggregateInput>;
}

@InputType()
export class ProjectStatusOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => ProjectOrderByRelationAggregateInput, {nullable:true})
    Project?: InstanceType<typeof ProjectOrderByRelationAggregateInput>;
    @Field(() => FileOrderByRelationAggregateInput, {nullable:true})
    File?: InstanceType<typeof FileOrderByRelationAggregateInput>;
}

@InputType()
export class ProjectStatusRelationFilter {
    @Field(() => ProjectStatusWhereInput, {nullable:true})
    is?: InstanceType<typeof ProjectStatusWhereInput>;
    @Field(() => ProjectStatusWhereInput, {nullable:true})
    isNot?: InstanceType<typeof ProjectStatusWhereInput>;
}

@InputType()
export class ProjectStatusScalarWhereWithAggregatesInput {
    @Field(() => [ProjectStatusScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ProjectStatusScalarWhereWithAggregatesInput>;
    @Field(() => [ProjectStatusScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ProjectStatusScalarWhereWithAggregatesInput>;
    @Field(() => [ProjectStatusScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ProjectStatusScalarWhereWithAggregatesInput>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: InstanceType<typeof StringWithAggregatesFilter>;
}

@InputType()
export class ProjectStatusUncheckedCreateWithoutFileInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => ProjectUncheckedCreateNestedManyWithoutStatusInput, {nullable:true})
    Project?: InstanceType<typeof ProjectUncheckedCreateNestedManyWithoutStatusInput>;
}

@InputType()
export class ProjectStatusUncheckedCreateWithoutProjectInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => FileUncheckedCreateNestedManyWithoutStatusInput, {nullable:true})
    File?: InstanceType<typeof FileUncheckedCreateNestedManyWithoutStatusInput>;
}

@InputType()
export class ProjectStatusUncheckedCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => ProjectUncheckedCreateNestedManyWithoutStatusInput, {nullable:true})
    Project?: InstanceType<typeof ProjectUncheckedCreateNestedManyWithoutStatusInput>;
    @Field(() => FileUncheckedCreateNestedManyWithoutStatusInput, {nullable:true})
    File?: InstanceType<typeof FileUncheckedCreateNestedManyWithoutStatusInput>;
}

@InputType()
export class ProjectStatusUncheckedUpdateManyInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}

@InputType()
export class ProjectStatusUncheckedUpdateWithoutFileInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => ProjectUncheckedUpdateManyWithoutStatusNestedInput, {nullable:true})
    Project?: InstanceType<typeof ProjectUncheckedUpdateManyWithoutStatusNestedInput>;
}

@InputType()
export class ProjectStatusUncheckedUpdateWithoutProjectInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => FileUncheckedUpdateManyWithoutStatusNestedInput, {nullable:true})
    File?: InstanceType<typeof FileUncheckedUpdateManyWithoutStatusNestedInput>;
}

@InputType()
export class ProjectStatusUncheckedUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => ProjectUncheckedUpdateManyWithoutStatusNestedInput, {nullable:true})
    Project?: InstanceType<typeof ProjectUncheckedUpdateManyWithoutStatusNestedInput>;
    @Field(() => FileUncheckedUpdateManyWithoutStatusNestedInput, {nullable:true})
    File?: InstanceType<typeof FileUncheckedUpdateManyWithoutStatusNestedInput>;
}

@InputType()
export class ProjectStatusUpdateManyMutationInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}

@InputType()
export class ProjectStatusUpdateOneRequiredWithoutFileNestedInput {
    @Field(() => ProjectStatusCreateWithoutFileInput, {nullable:true})
    @Type(() => ProjectStatusCreateWithoutFileInput)
    create?: InstanceType<typeof ProjectStatusCreateWithoutFileInput>;
    @Field(() => ProjectStatusCreateOrConnectWithoutFileInput, {nullable:true})
    @Type(() => ProjectStatusCreateOrConnectWithoutFileInput)
    connectOrCreate?: InstanceType<typeof ProjectStatusCreateOrConnectWithoutFileInput>;
    @Field(() => ProjectStatusUpsertWithoutFileInput, {nullable:true})
    @Type(() => ProjectStatusUpsertWithoutFileInput)
    upsert?: InstanceType<typeof ProjectStatusUpsertWithoutFileInput>;
    @Field(() => ProjectStatusWhereUniqueInput, {nullable:true})
    @Type(() => ProjectStatusWhereUniqueInput)
    connect?: InstanceType<typeof ProjectStatusWhereUniqueInput>;
    @Field(() => ProjectStatusUpdateWithoutFileInput, {nullable:true})
    @Type(() => ProjectStatusUpdateWithoutFileInput)
    update?: InstanceType<typeof ProjectStatusUpdateWithoutFileInput>;
}

@InputType()
export class ProjectStatusUpdateOneRequiredWithoutProjectNestedInput {
    @Field(() => ProjectStatusCreateWithoutProjectInput, {nullable:true})
    @Type(() => ProjectStatusCreateWithoutProjectInput)
    create?: InstanceType<typeof ProjectStatusCreateWithoutProjectInput>;
    @Field(() => ProjectStatusCreateOrConnectWithoutProjectInput, {nullable:true})
    @Type(() => ProjectStatusCreateOrConnectWithoutProjectInput)
    connectOrCreate?: InstanceType<typeof ProjectStatusCreateOrConnectWithoutProjectInput>;
    @Field(() => ProjectStatusUpsertWithoutProjectInput, {nullable:true})
    @Type(() => ProjectStatusUpsertWithoutProjectInput)
    upsert?: InstanceType<typeof ProjectStatusUpsertWithoutProjectInput>;
    @Field(() => ProjectStatusWhereUniqueInput, {nullable:true})
    @Type(() => ProjectStatusWhereUniqueInput)
    connect?: InstanceType<typeof ProjectStatusWhereUniqueInput>;
    @Field(() => ProjectStatusUpdateWithoutProjectInput, {nullable:true})
    @Type(() => ProjectStatusUpdateWithoutProjectInput)
    update?: InstanceType<typeof ProjectStatusUpdateWithoutProjectInput>;
}

@InputType()
export class ProjectStatusUpdateWithoutFileInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => ProjectUpdateManyWithoutStatusNestedInput, {nullable:true})
    Project?: InstanceType<typeof ProjectUpdateManyWithoutStatusNestedInput>;
}

@InputType()
export class ProjectStatusUpdateWithoutProjectInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => FileUpdateManyWithoutStatusNestedInput, {nullable:true})
    File?: InstanceType<typeof FileUpdateManyWithoutStatusNestedInput>;
}

@InputType()
export class ProjectStatusUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => ProjectUpdateManyWithoutStatusNestedInput, {nullable:true})
    Project?: InstanceType<typeof ProjectUpdateManyWithoutStatusNestedInput>;
    @Field(() => FileUpdateManyWithoutStatusNestedInput, {nullable:true})
    File?: InstanceType<typeof FileUpdateManyWithoutStatusNestedInput>;
}

@InputType()
export class ProjectStatusUpsertWithoutFileInput {
    @Field(() => ProjectStatusUpdateWithoutFileInput, {nullable:false})
    @Type(() => ProjectStatusUpdateWithoutFileInput)
    update!: InstanceType<typeof ProjectStatusUpdateWithoutFileInput>;
    @Field(() => ProjectStatusCreateWithoutFileInput, {nullable:false})
    @Type(() => ProjectStatusCreateWithoutFileInput)
    create!: InstanceType<typeof ProjectStatusCreateWithoutFileInput>;
}

@InputType()
export class ProjectStatusUpsertWithoutProjectInput {
    @Field(() => ProjectStatusUpdateWithoutProjectInput, {nullable:false})
    @Type(() => ProjectStatusUpdateWithoutProjectInput)
    update!: InstanceType<typeof ProjectStatusUpdateWithoutProjectInput>;
    @Field(() => ProjectStatusCreateWithoutProjectInput, {nullable:false})
    @Type(() => ProjectStatusCreateWithoutProjectInput)
    create!: InstanceType<typeof ProjectStatusCreateWithoutProjectInput>;
}

@InputType()
export class ProjectStatusWhereUniqueInput {
    @Field(() => String, {nullable:true})
    id?: string;
}

@InputType()
export class ProjectStatusWhereInput {
    @Field(() => [ProjectStatusWhereInput], {nullable:true})
    AND?: Array<ProjectStatusWhereInput>;
    @Field(() => [ProjectStatusWhereInput], {nullable:true})
    OR?: Array<ProjectStatusWhereInput>;
    @Field(() => [ProjectStatusWhereInput], {nullable:true})
    NOT?: Array<ProjectStatusWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    name?: InstanceType<typeof StringFilter>;
    @Field(() => ProjectListRelationFilter, {nullable:true})
    Project?: InstanceType<typeof ProjectListRelationFilter>;
    @Field(() => FileListRelationFilter, {nullable:true})
    File?: InstanceType<typeof FileListRelationFilter>;
}

@ObjectType()
export class ProjectStatus {
    @Field(() => ID, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => [Project], {nullable:true})
    Project?: Array<Project>;
    @Field(() => [File], {nullable:true})
    File?: Array<File>;
    @Field(() => ProjectStatusCount, {nullable:false})
    _count?: InstanceType<typeof ProjectStatusCount>;
}

@ArgsType()
export class UpdateManyProjectStatusArgs {
    @Field(() => ProjectStatusUpdateManyMutationInput, {nullable:false})
    @Type(() => ProjectStatusUpdateManyMutationInput)
    data!: InstanceType<typeof ProjectStatusUpdateManyMutationInput>;
    @Field(() => ProjectStatusWhereInput, {nullable:true})
    @Type(() => ProjectStatusWhereInput)
    where?: InstanceType<typeof ProjectStatusWhereInput>;
}

@ArgsType()
export class UpdateOneProjectStatusArgs {
    @Field(() => ProjectStatusUpdateInput, {nullable:false})
    @Type(() => ProjectStatusUpdateInput)
    data!: InstanceType<typeof ProjectStatusUpdateInput>;
    @Field(() => ProjectStatusWhereUniqueInput, {nullable:false})
    @Type(() => ProjectStatusWhereUniqueInput)
    where!: InstanceType<typeof ProjectStatusWhereUniqueInput>;
}

@ArgsType()
export class UpsertOneProjectStatusArgs {
    @Field(() => ProjectStatusWhereUniqueInput, {nullable:false})
    @Type(() => ProjectStatusWhereUniqueInput)
    where!: InstanceType<typeof ProjectStatusWhereUniqueInput>;
    @Field(() => ProjectStatusCreateInput, {nullable:false})
    @Type(() => ProjectStatusCreateInput)
    create!: InstanceType<typeof ProjectStatusCreateInput>;
    @Field(() => ProjectStatusUpdateInput, {nullable:false})
    @Type(() => ProjectStatusUpdateInput)
    update!: InstanceType<typeof ProjectStatusUpdateInput>;
}

@ObjectType()
export class AggregateProjectType {
    @Field(() => ProjectTypeCountAggregate, {nullable:true})
    _count?: InstanceType<typeof ProjectTypeCountAggregate>;
    @Field(() => ProjectTypeMinAggregate, {nullable:true})
    _min?: InstanceType<typeof ProjectTypeMinAggregate>;
    @Field(() => ProjectTypeMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof ProjectTypeMaxAggregate>;
}

@ArgsType()
export class CreateManyProjectTypeArgs {
    @Field(() => [ProjectTypeCreateManyInput], {nullable:false})
    @Type(() => ProjectTypeCreateManyInput)
    data!: Array<ProjectTypeCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneProjectTypeArgs {
    @Field(() => ProjectTypeCreateInput, {nullable:false})
    @Type(() => ProjectTypeCreateInput)
    data!: InstanceType<typeof ProjectTypeCreateInput>;
}

@ArgsType()
export class DeleteManyProjectTypeArgs {
    @Field(() => ProjectTypeWhereInput, {nullable:true})
    @Type(() => ProjectTypeWhereInput)
    where?: InstanceType<typeof ProjectTypeWhereInput>;
}

@ArgsType()
export class DeleteOneProjectTypeArgs {
    @Field(() => ProjectTypeWhereUniqueInput, {nullable:false})
    @Type(() => ProjectTypeWhereUniqueInput)
    where!: InstanceType<typeof ProjectTypeWhereUniqueInput>;
}

@ArgsType()
export class FindFirstProjectTypeOrThrowArgs {
    @Field(() => ProjectTypeWhereInput, {nullable:true})
    @Type(() => ProjectTypeWhereInput)
    where?: InstanceType<typeof ProjectTypeWhereInput>;
    @Field(() => [ProjectTypeOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ProjectTypeOrderByWithRelationInput>;
    @Field(() => ProjectTypeWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof ProjectTypeWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [ProjectTypeScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ProjectTypeScalarFieldEnum>;
}

@ArgsType()
export class FindFirstProjectTypeArgs {
    @Field(() => ProjectTypeWhereInput, {nullable:true})
    @Type(() => ProjectTypeWhereInput)
    where?: InstanceType<typeof ProjectTypeWhereInput>;
    @Field(() => [ProjectTypeOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ProjectTypeOrderByWithRelationInput>;
    @Field(() => ProjectTypeWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof ProjectTypeWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [ProjectTypeScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ProjectTypeScalarFieldEnum>;
}

@ArgsType()
export class FindManyProjectTypeArgs {
    @Field(() => ProjectTypeWhereInput, {nullable:true})
    @Type(() => ProjectTypeWhereInput)
    where?: InstanceType<typeof ProjectTypeWhereInput>;
    @Field(() => [ProjectTypeOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ProjectTypeOrderByWithRelationInput>;
    @Field(() => ProjectTypeWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof ProjectTypeWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [ProjectTypeScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ProjectTypeScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueProjectTypeOrThrowArgs {
    @Field(() => ProjectTypeWhereUniqueInput, {nullable:false})
    @Type(() => ProjectTypeWhereUniqueInput)
    where!: InstanceType<typeof ProjectTypeWhereUniqueInput>;
}

@ArgsType()
export class FindUniqueProjectTypeArgs {
    @Field(() => ProjectTypeWhereUniqueInput, {nullable:false})
    @Type(() => ProjectTypeWhereUniqueInput)
    where!: InstanceType<typeof ProjectTypeWhereUniqueInput>;
}

@ArgsType()
export class ProjectTypeAggregateArgs {
    @Field(() => ProjectTypeWhereInput, {nullable:true})
    @Type(() => ProjectTypeWhereInput)
    where?: InstanceType<typeof ProjectTypeWhereInput>;
    @Field(() => [ProjectTypeOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ProjectTypeOrderByWithRelationInput>;
    @Field(() => ProjectTypeWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof ProjectTypeWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => ProjectTypeCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof ProjectTypeCountAggregateInput>;
    @Field(() => ProjectTypeMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof ProjectTypeMinAggregateInput>;
    @Field(() => ProjectTypeMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof ProjectTypeMaxAggregateInput>;
}

@InputType()
export class ProjectTypeCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class ProjectTypeCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    name!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class ProjectTypeCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
}

@ObjectType()
export class ProjectTypeCount {
    @Field(() => Int, {nullable:false})
    Project?: number;
}

@InputType()
export class ProjectTypeCreateManyInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    name!: string;
}

@InputType()
export class ProjectTypeCreateNestedOneWithoutProjectInput {
    @Field(() => ProjectTypeCreateWithoutProjectInput, {nullable:true})
    @Type(() => ProjectTypeCreateWithoutProjectInput)
    create?: InstanceType<typeof ProjectTypeCreateWithoutProjectInput>;
    @Field(() => ProjectTypeCreateOrConnectWithoutProjectInput, {nullable:true})
    @Type(() => ProjectTypeCreateOrConnectWithoutProjectInput)
    connectOrCreate?: InstanceType<typeof ProjectTypeCreateOrConnectWithoutProjectInput>;
    @Field(() => ProjectTypeWhereUniqueInput, {nullable:true})
    @Type(() => ProjectTypeWhereUniqueInput)
    connect?: InstanceType<typeof ProjectTypeWhereUniqueInput>;
}

@InputType()
export class ProjectTypeCreateOrConnectWithoutProjectInput {
    @Field(() => ProjectTypeWhereUniqueInput, {nullable:false})
    @Type(() => ProjectTypeWhereUniqueInput)
    where!: InstanceType<typeof ProjectTypeWhereUniqueInput>;
    @Field(() => ProjectTypeCreateWithoutProjectInput, {nullable:false})
    @Type(() => ProjectTypeCreateWithoutProjectInput)
    create!: InstanceType<typeof ProjectTypeCreateWithoutProjectInput>;
}

@InputType()
export class ProjectTypeCreateWithoutProjectInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    name!: string;
}

@InputType()
export class ProjectTypeCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => ProjectCreateNestedManyWithoutProjectTypeInput, {nullable:true})
    Project?: InstanceType<typeof ProjectCreateNestedManyWithoutProjectTypeInput>;
}

@ArgsType()
export class ProjectTypeGroupByArgs {
    @Field(() => ProjectTypeWhereInput, {nullable:true})
    @Type(() => ProjectTypeWhereInput)
    where?: InstanceType<typeof ProjectTypeWhereInput>;
    @Field(() => [ProjectTypeOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ProjectTypeOrderByWithAggregationInput>;
    @Field(() => [ProjectTypeScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof ProjectTypeScalarFieldEnum>;
    @Field(() => ProjectTypeScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof ProjectTypeScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => ProjectTypeCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof ProjectTypeCountAggregateInput>;
    @Field(() => ProjectTypeMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof ProjectTypeMinAggregateInput>;
    @Field(() => ProjectTypeMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof ProjectTypeMaxAggregateInput>;
}

@ObjectType()
export class ProjectTypeGroupBy {
    @Field(() => String, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => ProjectTypeCountAggregate, {nullable:true})
    _count?: InstanceType<typeof ProjectTypeCountAggregate>;
    @Field(() => ProjectTypeMinAggregate, {nullable:true})
    _min?: InstanceType<typeof ProjectTypeMinAggregate>;
    @Field(() => ProjectTypeMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof ProjectTypeMaxAggregate>;
}

@InputType()
export class ProjectTypeMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
}

@ObjectType()
export class ProjectTypeMaxAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    name?: string;
}

@InputType()
export class ProjectTypeMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
}

@InputType()
export class ProjectTypeMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
}

@ObjectType()
export class ProjectTypeMinAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    name?: string;
}

@InputType()
export class ProjectTypeMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
}

@InputType()
export class ProjectTypeOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => ProjectTypeCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof ProjectTypeCountOrderByAggregateInput>;
    @Field(() => ProjectTypeMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof ProjectTypeMaxOrderByAggregateInput>;
    @Field(() => ProjectTypeMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof ProjectTypeMinOrderByAggregateInput>;
}

@InputType()
export class ProjectTypeOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => ProjectOrderByRelationAggregateInput, {nullable:true})
    Project?: InstanceType<typeof ProjectOrderByRelationAggregateInput>;
}

@InputType()
export class ProjectTypeRelationFilter {
    @Field(() => ProjectTypeWhereInput, {nullable:true})
    is?: InstanceType<typeof ProjectTypeWhereInput>;
    @Field(() => ProjectTypeWhereInput, {nullable:true})
    isNot?: InstanceType<typeof ProjectTypeWhereInput>;
}

@InputType()
export class ProjectTypeScalarWhereWithAggregatesInput {
    @Field(() => [ProjectTypeScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ProjectTypeScalarWhereWithAggregatesInput>;
    @Field(() => [ProjectTypeScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ProjectTypeScalarWhereWithAggregatesInput>;
    @Field(() => [ProjectTypeScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ProjectTypeScalarWhereWithAggregatesInput>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: InstanceType<typeof StringWithAggregatesFilter>;
}

@InputType()
export class ProjectTypeUncheckedCreateWithoutProjectInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    name!: string;
}

@InputType()
export class ProjectTypeUncheckedCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => ProjectUncheckedCreateNestedManyWithoutProjectTypeInput, {nullable:true})
    Project?: InstanceType<typeof ProjectUncheckedCreateNestedManyWithoutProjectTypeInput>;
}

@InputType()
export class ProjectTypeUncheckedUpdateManyInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}

@InputType()
export class ProjectTypeUncheckedUpdateWithoutProjectInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}

@InputType()
export class ProjectTypeUncheckedUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => ProjectUncheckedUpdateManyWithoutProjectTypeNestedInput, {nullable:true})
    Project?: InstanceType<typeof ProjectUncheckedUpdateManyWithoutProjectTypeNestedInput>;
}

@InputType()
export class ProjectTypeUpdateManyMutationInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}

@InputType()
export class ProjectTypeUpdateOneRequiredWithoutProjectNestedInput {
    @Field(() => ProjectTypeCreateWithoutProjectInput, {nullable:true})
    @Type(() => ProjectTypeCreateWithoutProjectInput)
    create?: InstanceType<typeof ProjectTypeCreateWithoutProjectInput>;
    @Field(() => ProjectTypeCreateOrConnectWithoutProjectInput, {nullable:true})
    @Type(() => ProjectTypeCreateOrConnectWithoutProjectInput)
    connectOrCreate?: InstanceType<typeof ProjectTypeCreateOrConnectWithoutProjectInput>;
    @Field(() => ProjectTypeUpsertWithoutProjectInput, {nullable:true})
    @Type(() => ProjectTypeUpsertWithoutProjectInput)
    upsert?: InstanceType<typeof ProjectTypeUpsertWithoutProjectInput>;
    @Field(() => ProjectTypeWhereUniqueInput, {nullable:true})
    @Type(() => ProjectTypeWhereUniqueInput)
    connect?: InstanceType<typeof ProjectTypeWhereUniqueInput>;
    @Field(() => ProjectTypeUpdateWithoutProjectInput, {nullable:true})
    @Type(() => ProjectTypeUpdateWithoutProjectInput)
    update?: InstanceType<typeof ProjectTypeUpdateWithoutProjectInput>;
}

@InputType()
export class ProjectTypeUpdateWithoutProjectInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}

@InputType()
export class ProjectTypeUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => ProjectUpdateManyWithoutProjectTypeNestedInput, {nullable:true})
    Project?: InstanceType<typeof ProjectUpdateManyWithoutProjectTypeNestedInput>;
}

@InputType()
export class ProjectTypeUpsertWithoutProjectInput {
    @Field(() => ProjectTypeUpdateWithoutProjectInput, {nullable:false})
    @Type(() => ProjectTypeUpdateWithoutProjectInput)
    update!: InstanceType<typeof ProjectTypeUpdateWithoutProjectInput>;
    @Field(() => ProjectTypeCreateWithoutProjectInput, {nullable:false})
    @Type(() => ProjectTypeCreateWithoutProjectInput)
    create!: InstanceType<typeof ProjectTypeCreateWithoutProjectInput>;
}

@InputType()
export class ProjectTypeWhereUniqueInput {
    @Field(() => String, {nullable:true})
    id?: string;
}

@InputType()
export class ProjectTypeWhereInput {
    @Field(() => [ProjectTypeWhereInput], {nullable:true})
    AND?: Array<ProjectTypeWhereInput>;
    @Field(() => [ProjectTypeWhereInput], {nullable:true})
    OR?: Array<ProjectTypeWhereInput>;
    @Field(() => [ProjectTypeWhereInput], {nullable:true})
    NOT?: Array<ProjectTypeWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    name?: InstanceType<typeof StringFilter>;
    @Field(() => ProjectListRelationFilter, {nullable:true})
    Project?: InstanceType<typeof ProjectListRelationFilter>;
}

@ObjectType()
export class ProjectType {
    @Field(() => ID, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => [Project], {nullable:true})
    Project?: Array<Project>;
    @Field(() => ProjectTypeCount, {nullable:false})
    _count?: InstanceType<typeof ProjectTypeCount>;
}

@ArgsType()
export class UpdateManyProjectTypeArgs {
    @Field(() => ProjectTypeUpdateManyMutationInput, {nullable:false})
    @Type(() => ProjectTypeUpdateManyMutationInput)
    data!: InstanceType<typeof ProjectTypeUpdateManyMutationInput>;
    @Field(() => ProjectTypeWhereInput, {nullable:true})
    @Type(() => ProjectTypeWhereInput)
    where?: InstanceType<typeof ProjectTypeWhereInput>;
}

@ArgsType()
export class UpdateOneProjectTypeArgs {
    @Field(() => ProjectTypeUpdateInput, {nullable:false})
    @Type(() => ProjectTypeUpdateInput)
    data!: InstanceType<typeof ProjectTypeUpdateInput>;
    @Field(() => ProjectTypeWhereUniqueInput, {nullable:false})
    @Type(() => ProjectTypeWhereUniqueInput)
    where!: InstanceType<typeof ProjectTypeWhereUniqueInput>;
}

@ArgsType()
export class UpsertOneProjectTypeArgs {
    @Field(() => ProjectTypeWhereUniqueInput, {nullable:false})
    @Type(() => ProjectTypeWhereUniqueInput)
    where!: InstanceType<typeof ProjectTypeWhereUniqueInput>;
    @Field(() => ProjectTypeCreateInput, {nullable:false})
    @Type(() => ProjectTypeCreateInput)
    create!: InstanceType<typeof ProjectTypeCreateInput>;
    @Field(() => ProjectTypeUpdateInput, {nullable:false})
    @Type(() => ProjectTypeUpdateInput)
    update!: InstanceType<typeof ProjectTypeUpdateInput>;
}

@ArgsType()
export class AggregateUserProjectArgs {
    @Field(() => UserProjectWhereInput, {nullable:true})
    @Type(() => UserProjectWhereInput)
    where?: InstanceType<typeof UserProjectWhereInput>;
    @Field(() => [UserProjectOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UserProjectOrderByWithRelationInput>;
    @Field(() => UserProjectWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof UserProjectWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
}

@ObjectType()
export class AggregateUser {
    @Field(() => UserCountAggregate, {nullable:true})
    _count?: InstanceType<typeof UserCountAggregate>;
    @Field(() => UserAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof UserAvgAggregate>;
    @Field(() => UserSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof UserSumAggregate>;
    @Field(() => UserMinAggregate, {nullable:true})
    _min?: InstanceType<typeof UserMinAggregate>;
    @Field(() => UserMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof UserMaxAggregate>;
}

@ArgsType()
export class CreateManyUserProjectArgs {
    @Field(() => [UserProjectCreateManyInput], {nullable:false})
    @Type(() => UserProjectCreateManyInput)
    data!: Array<UserProjectCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
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
export class CreateOneUserProjectArgs {
    @Field(() => UserProjectCreateInput, {nullable:false})
    @Type(() => UserProjectCreateInput)
    data!: InstanceType<typeof UserProjectCreateInput>;
}

@ArgsType()
export class CreateOneUserArgs {
    @Field(() => UserCreateInput, {nullable:false})
    @Type(() => UserCreateInput)
    data!: InstanceType<typeof UserCreateInput>;
}

@ArgsType()
export class DeleteManyUserProjectArgs {
    @Field(() => UserProjectWhereInput, {nullable:true})
    @Type(() => UserProjectWhereInput)
    where?: InstanceType<typeof UserProjectWhereInput>;
}

@ArgsType()
export class DeleteManyUserArgs {
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: InstanceType<typeof UserWhereInput>;
}

@ArgsType()
export class DeleteOneUserProjectArgs {
    @Field(() => UserProjectWhereUniqueInput, {nullable:false})
    @Type(() => UserProjectWhereUniqueInput)
    where!: InstanceType<typeof UserProjectWhereUniqueInput>;
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
export class FindFirstUserProjectArgs {
    @Field(() => UserProjectWhereInput, {nullable:true})
    @Type(() => UserProjectWhereInput)
    where?: InstanceType<typeof UserProjectWhereInput>;
    @Field(() => [UserProjectOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UserProjectOrderByWithRelationInput>;
    @Field(() => UserProjectWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof UserProjectWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [UserProjectScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof UserProjectScalarFieldEnum>;
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
export class FindUniqueUserProjectArgs {
    @Field(() => UserProjectWhereUniqueInput, {nullable:false})
    @Type(() => UserProjectWhereUniqueInput)
    where!: InstanceType<typeof UserProjectWhereUniqueInput>;
}

@ArgsType()
export class FindUniqueUserArgs {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: InstanceType<typeof UserWhereUniqueInput>;
}

@ArgsType()
export class UpdateManyUserProjectArgs {
    @Field(() => UserProjectUncheckedUpdateManyInput, {nullable:false})
    @Type(() => UserProjectUncheckedUpdateManyInput)
    data!: InstanceType<typeof UserProjectUncheckedUpdateManyInput>;
    @Field(() => UserProjectWhereInput, {nullable:true})
    @Type(() => UserProjectWhereInput)
    where?: InstanceType<typeof UserProjectWhereInput>;
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
export class UpdateOneUserProjectArgs {
    @Field(() => UserProjectUpdateInput, {nullable:false})
    @Type(() => UserProjectUpdateInput)
    data!: InstanceType<typeof UserProjectUpdateInput>;
    @Field(() => UserProjectWhereUniqueInput, {nullable:false})
    @Type(() => UserProjectWhereUniqueInput)
    where!: InstanceType<typeof UserProjectWhereUniqueInput>;
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
export class UpsertOneUserProjectArgs {
    @Field(() => UserProjectWhereUniqueInput, {nullable:false})
    @Type(() => UserProjectWhereUniqueInput)
    where!: InstanceType<typeof UserProjectWhereUniqueInput>;
    @Field(() => UserProjectCreateInput, {nullable:false})
    @Type(() => UserProjectCreateInput)
    create!: InstanceType<typeof UserProjectCreateInput>;
    @Field(() => UserProjectUpdateInput, {nullable:false})
    @Type(() => UserProjectUpdateInput)
    update!: InstanceType<typeof UserProjectUpdateInput>;
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
    @Field(() => UserAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof UserAvgAggregateInput>;
    @Field(() => UserSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof UserSumAggregateInput>;
    @Field(() => UserMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof UserMinAggregateInput>;
    @Field(() => UserMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof UserMaxAggregateInput>;
}

@InputType()
export class UserAvgAggregateInput {
    @Field(() => Boolean, {nullable:true})
    credentialId?: true;
}

@ObjectType()
export class UserAvgAggregate {
    @Field(() => Float, {nullable:true})
    credentialId?: number;
}

@InputType()
export class UserAvgOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    credentialId?: keyof typeof SortOrder;
}

@InputType()
export class UserCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    credentialId?: true;
    @Field(() => Boolean, {nullable:true})
    email?: true;
    @Field(() => Boolean, {nullable:true})
    password?: true;
    @Field(() => Boolean, {nullable:true})
    role?: true;
    @Field(() => Boolean, {nullable:true})
    avatar?: true;
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
    credentialId!: number;
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
    credentialId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    password?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    role?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    avatar?: keyof typeof SortOrder;
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
    @Field(() => Int, {nullable:false})
    Message?: number;
    @Field(() => Int, {nullable:false})
    UserProject?: number;
    @Field(() => Int, {nullable:false})
    loginTime?: number;
    @Field(() => Int, {nullable:false})
    UserMessageRoom?: number;
}

@InputType()
export class UserCreateManyInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.MinLength(3)
    name!: string;
    @Field(() => Int, {nullable:false})
    credentialId!: number;
    @Field(() => String, {nullable:false})
    @Validator.IsEmail()
    email!: string;
    @Field(() => String, {nullable:false})
    password!: string;
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
export class UserCreateNestedOneWithoutLoginTimeInput {
    @Field(() => UserCreateWithoutLoginTimeInput, {nullable:true})
    @Type(() => UserCreateWithoutLoginTimeInput)
    create?: InstanceType<typeof UserCreateWithoutLoginTimeInput>;
    @Field(() => UserCreateOrConnectWithoutLoginTimeInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutLoginTimeInput)
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutLoginTimeInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: InstanceType<typeof UserWhereUniqueInput>;
}

@InputType()
export class UserCreateNestedOneWithoutMessageInput {
    @Field(() => UserCreateWithoutMessageInput, {nullable:true})
    @Type(() => UserCreateWithoutMessageInput)
    create?: InstanceType<typeof UserCreateWithoutMessageInput>;
    @Field(() => UserCreateOrConnectWithoutMessageInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutMessageInput)
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutMessageInput>;
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
export class UserCreateNestedOneWithoutUserMessageRoomInput {
    @Field(() => UserCreateWithoutUserMessageRoomInput, {nullable:true})
    @Type(() => UserCreateWithoutUserMessageRoomInput)
    create?: InstanceType<typeof UserCreateWithoutUserMessageRoomInput>;
    @Field(() => UserCreateOrConnectWithoutUserMessageRoomInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutUserMessageRoomInput)
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutUserMessageRoomInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: InstanceType<typeof UserWhereUniqueInput>;
}

@InputType()
export class UserCreateNestedOneWithoutUserProjectInput {
    @Field(() => UserCreateWithoutUserProjectInput, {nullable:true})
    @Type(() => UserCreateWithoutUserProjectInput)
    create?: InstanceType<typeof UserCreateWithoutUserProjectInput>;
    @Field(() => UserCreateOrConnectWithoutUserProjectInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutUserProjectInput)
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutUserProjectInput>;
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
export class UserCreateOrConnectWithoutLoginTimeInput {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: InstanceType<typeof UserWhereUniqueInput>;
    @Field(() => UserCreateWithoutLoginTimeInput, {nullable:false})
    @Type(() => UserCreateWithoutLoginTimeInput)
    create!: InstanceType<typeof UserCreateWithoutLoginTimeInput>;
}

@InputType()
export class UserCreateOrConnectWithoutMessageInput {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: InstanceType<typeof UserWhereUniqueInput>;
    @Field(() => UserCreateWithoutMessageInput, {nullable:false})
    @Type(() => UserCreateWithoutMessageInput)
    create!: InstanceType<typeof UserCreateWithoutMessageInput>;
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
export class UserCreateOrConnectWithoutUserMessageRoomInput {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: InstanceType<typeof UserWhereUniqueInput>;
    @Field(() => UserCreateWithoutUserMessageRoomInput, {nullable:false})
    @Type(() => UserCreateWithoutUserMessageRoomInput)
    create!: InstanceType<typeof UserCreateWithoutUserMessageRoomInput>;
}

@InputType()
export class UserCreateOrConnectWithoutUserProjectInput {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: InstanceType<typeof UserWhereUniqueInput>;
    @Field(() => UserCreateWithoutUserProjectInput, {nullable:false})
    @Type(() => UserCreateWithoutUserProjectInput)
    create!: InstanceType<typeof UserCreateWithoutUserProjectInput>;
}

@InputType()
export class UserCreateWithoutDownloadInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.MinLength(3)
    name!: string;
    @Field(() => Int, {nullable:false})
    credentialId!: number;
    @Field(() => String, {nullable:false})
    @Validator.IsEmail()
    email!: string;
    @Field(() => String, {nullable:false})
    password!: string;
    @Field(() => Role, {nullable:true})
    role?: keyof typeof Role;
    @Field(() => String, {nullable:true})
    avatar?: string;
    @Field(() => Date, {nullable:true})
    createAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updateAt?: Date | string;
    @Field(() => PageCreateNestedManyWithoutAuthorInput, {nullable:true})
    Page?: InstanceType<typeof PageCreateNestedManyWithoutAuthorInput>;
    @Field(() => PostCreateNestedManyWithoutAuthorInput, {nullable:true})
    Post?: InstanceType<typeof PostCreateNestedManyWithoutAuthorInput>;
    @Field(() => MessageCreateNestedManyWithoutAuthorInput, {nullable:true})
    Message?: InstanceType<typeof MessageCreateNestedManyWithoutAuthorInput>;
    @Field(() => UserProjectCreateNestedManyWithoutUserInput, {nullable:true})
    UserProject?: InstanceType<typeof UserProjectCreateNestedManyWithoutUserInput>;
    @Field(() => loginTimeCreateNestedManyWithoutAuthorInput, {nullable:true})
    loginTime?: InstanceType<typeof loginTimeCreateNestedManyWithoutAuthorInput>;
    @Field(() => UserMessageRoomCreateNestedManyWithoutUserInput, {nullable:true})
    UserMessageRoom?: InstanceType<typeof UserMessageRoomCreateNestedManyWithoutUserInput>;
}

@InputType()
export class UserCreateWithoutLoginTimeInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.MinLength(3)
    name!: string;
    @Field(() => Int, {nullable:false})
    credentialId!: number;
    @Field(() => String, {nullable:false})
    @Validator.IsEmail()
    email!: string;
    @Field(() => String, {nullable:false})
    password!: string;
    @Field(() => Role, {nullable:true})
    role?: keyof typeof Role;
    @Field(() => String, {nullable:true})
    avatar?: string;
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
    @Field(() => MessageCreateNestedManyWithoutAuthorInput, {nullable:true})
    Message?: InstanceType<typeof MessageCreateNestedManyWithoutAuthorInput>;
    @Field(() => UserProjectCreateNestedManyWithoutUserInput, {nullable:true})
    UserProject?: InstanceType<typeof UserProjectCreateNestedManyWithoutUserInput>;
    @Field(() => UserMessageRoomCreateNestedManyWithoutUserInput, {nullable:true})
    UserMessageRoom?: InstanceType<typeof UserMessageRoomCreateNestedManyWithoutUserInput>;
}

@InputType()
export class UserCreateWithoutMessageInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.MinLength(3)
    name!: string;
    @Field(() => Int, {nullable:false})
    credentialId!: number;
    @Field(() => String, {nullable:false})
    @Validator.IsEmail()
    email!: string;
    @Field(() => String, {nullable:false})
    password!: string;
    @Field(() => Role, {nullable:true})
    role?: keyof typeof Role;
    @Field(() => String, {nullable:true})
    avatar?: string;
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
    @Field(() => UserProjectCreateNestedManyWithoutUserInput, {nullable:true})
    UserProject?: InstanceType<typeof UserProjectCreateNestedManyWithoutUserInput>;
    @Field(() => loginTimeCreateNestedManyWithoutAuthorInput, {nullable:true})
    loginTime?: InstanceType<typeof loginTimeCreateNestedManyWithoutAuthorInput>;
    @Field(() => UserMessageRoomCreateNestedManyWithoutUserInput, {nullable:true})
    UserMessageRoom?: InstanceType<typeof UserMessageRoomCreateNestedManyWithoutUserInput>;
}

@InputType()
export class UserCreateWithoutPageInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.MinLength(3)
    name!: string;
    @Field(() => Int, {nullable:false})
    credentialId!: number;
    @Field(() => String, {nullable:false})
    @Validator.IsEmail()
    email!: string;
    @Field(() => String, {nullable:false})
    password!: string;
    @Field(() => Role, {nullable:true})
    role?: keyof typeof Role;
    @Field(() => String, {nullable:true})
    avatar?: string;
    @Field(() => Date, {nullable:true})
    createAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updateAt?: Date | string;
    @Field(() => DownloadCreateNestedManyWithoutAuthorInput, {nullable:true})
    Download?: InstanceType<typeof DownloadCreateNestedManyWithoutAuthorInput>;
    @Field(() => PostCreateNestedManyWithoutAuthorInput, {nullable:true})
    Post?: InstanceType<typeof PostCreateNestedManyWithoutAuthorInput>;
    @Field(() => MessageCreateNestedManyWithoutAuthorInput, {nullable:true})
    Message?: InstanceType<typeof MessageCreateNestedManyWithoutAuthorInput>;
    @Field(() => UserProjectCreateNestedManyWithoutUserInput, {nullable:true})
    UserProject?: InstanceType<typeof UserProjectCreateNestedManyWithoutUserInput>;
    @Field(() => loginTimeCreateNestedManyWithoutAuthorInput, {nullable:true})
    loginTime?: InstanceType<typeof loginTimeCreateNestedManyWithoutAuthorInput>;
    @Field(() => UserMessageRoomCreateNestedManyWithoutUserInput, {nullable:true})
    UserMessageRoom?: InstanceType<typeof UserMessageRoomCreateNestedManyWithoutUserInput>;
}

@InputType()
export class UserCreateWithoutPostInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.MinLength(3)
    name!: string;
    @Field(() => Int, {nullable:false})
    credentialId!: number;
    @Field(() => String, {nullable:false})
    @Validator.IsEmail()
    email!: string;
    @Field(() => String, {nullable:false})
    password!: string;
    @Field(() => Role, {nullable:true})
    role?: keyof typeof Role;
    @Field(() => String, {nullable:true})
    avatar?: string;
    @Field(() => Date, {nullable:true})
    createAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updateAt?: Date | string;
    @Field(() => DownloadCreateNestedManyWithoutAuthorInput, {nullable:true})
    Download?: InstanceType<typeof DownloadCreateNestedManyWithoutAuthorInput>;
    @Field(() => PageCreateNestedManyWithoutAuthorInput, {nullable:true})
    Page?: InstanceType<typeof PageCreateNestedManyWithoutAuthorInput>;
    @Field(() => MessageCreateNestedManyWithoutAuthorInput, {nullable:true})
    Message?: InstanceType<typeof MessageCreateNestedManyWithoutAuthorInput>;
    @Field(() => UserProjectCreateNestedManyWithoutUserInput, {nullable:true})
    UserProject?: InstanceType<typeof UserProjectCreateNestedManyWithoutUserInput>;
    @Field(() => loginTimeCreateNestedManyWithoutAuthorInput, {nullable:true})
    loginTime?: InstanceType<typeof loginTimeCreateNestedManyWithoutAuthorInput>;
    @Field(() => UserMessageRoomCreateNestedManyWithoutUserInput, {nullable:true})
    UserMessageRoom?: InstanceType<typeof UserMessageRoomCreateNestedManyWithoutUserInput>;
}

@InputType()
export class UserCreateWithoutUserMessageRoomInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.MinLength(3)
    name!: string;
    @Field(() => Int, {nullable:false})
    credentialId!: number;
    @Field(() => String, {nullable:false})
    @Validator.IsEmail()
    email!: string;
    @Field(() => String, {nullable:false})
    password!: string;
    @Field(() => Role, {nullable:true})
    role?: keyof typeof Role;
    @Field(() => String, {nullable:true})
    avatar?: string;
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
    @Field(() => MessageCreateNestedManyWithoutAuthorInput, {nullable:true})
    Message?: InstanceType<typeof MessageCreateNestedManyWithoutAuthorInput>;
    @Field(() => UserProjectCreateNestedManyWithoutUserInput, {nullable:true})
    UserProject?: InstanceType<typeof UserProjectCreateNestedManyWithoutUserInput>;
    @Field(() => loginTimeCreateNestedManyWithoutAuthorInput, {nullable:true})
    loginTime?: InstanceType<typeof loginTimeCreateNestedManyWithoutAuthorInput>;
}

@InputType()
export class UserCreateWithoutUserProjectInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.MinLength(3)
    name!: string;
    @Field(() => Int, {nullable:false})
    credentialId!: number;
    @Field(() => String, {nullable:false})
    @Validator.IsEmail()
    email!: string;
    @Field(() => String, {nullable:false})
    password!: string;
    @Field(() => Role, {nullable:true})
    role?: keyof typeof Role;
    @Field(() => String, {nullable:true})
    avatar?: string;
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
    @Field(() => MessageCreateNestedManyWithoutAuthorInput, {nullable:true})
    Message?: InstanceType<typeof MessageCreateNestedManyWithoutAuthorInput>;
    @Field(() => loginTimeCreateNestedManyWithoutAuthorInput, {nullable:true})
    loginTime?: InstanceType<typeof loginTimeCreateNestedManyWithoutAuthorInput>;
    @Field(() => UserMessageRoomCreateNestedManyWithoutUserInput, {nullable:true})
    UserMessageRoom?: InstanceType<typeof UserMessageRoomCreateNestedManyWithoutUserInput>;
}

@InputType()
export class UserCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.MinLength(3)
    name!: string;
    @Field(() => Int, {nullable:false})
    credentialId!: number;
    @Field(() => String, {nullable:false})
    @Validator.IsEmail()
    email!: string;
    @Field(() => String, {nullable:false})
    password!: string;
    @Field(() => Role, {nullable:true})
    role?: keyof typeof Role;
    @Field(() => String, {nullable:true})
    avatar?: string;
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
    @Field(() => MessageCreateNestedManyWithoutAuthorInput, {nullable:true})
    Message?: InstanceType<typeof MessageCreateNestedManyWithoutAuthorInput>;
    @Field(() => UserProjectCreateNestedManyWithoutUserInput, {nullable:true})
    UserProject?: InstanceType<typeof UserProjectCreateNestedManyWithoutUserInput>;
    @Field(() => loginTimeCreateNestedManyWithoutAuthorInput, {nullable:true})
    loginTime?: InstanceType<typeof loginTimeCreateNestedManyWithoutAuthorInput>;
    @Field(() => UserMessageRoomCreateNestedManyWithoutUserInput, {nullable:true})
    UserMessageRoom?: InstanceType<typeof UserMessageRoomCreateNestedManyWithoutUserInput>;
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
    @Field(() => UserAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof UserAvgAggregateInput>;
    @Field(() => UserSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof UserSumAggregateInput>;
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
    @Field(() => Int, {nullable:false})
    credentialId!: number;
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
    @Field(() => UserAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof UserAvgAggregate>;
    @Field(() => UserSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof UserSumAggregate>;
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
    credentialId?: true;
    @Field(() => Boolean, {nullable:true})
    email?: true;
    @Field(() => Boolean, {nullable:true})
    password?: true;
    @Field(() => Boolean, {nullable:true})
    role?: true;
    @Field(() => Boolean, {nullable:true})
    avatar?: true;
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
    @Field(() => Int, {nullable:true})
    credentialId?: number;
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
    credentialId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    password?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    role?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    avatar?: keyof typeof SortOrder;
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
    credentialId?: true;
    @Field(() => Boolean, {nullable:true})
    email?: true;
    @Field(() => Boolean, {nullable:true})
    password?: true;
    @Field(() => Boolean, {nullable:true})
    role?: true;
    @Field(() => Boolean, {nullable:true})
    avatar?: true;
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
    @Field(() => Int, {nullable:true})
    credentialId?: number;
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
    credentialId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    password?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    role?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    avatar?: keyof typeof SortOrder;
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
    credentialId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    password?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    role?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    avatar?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updateAt?: keyof typeof SortOrder;
    @Field(() => UserCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof UserCountOrderByAggregateInput>;
    @Field(() => UserAvgOrderByAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof UserAvgOrderByAggregateInput>;
    @Field(() => UserMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof UserMaxOrderByAggregateInput>;
    @Field(() => UserMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof UserMinOrderByAggregateInput>;
    @Field(() => UserSumOrderByAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof UserSumOrderByAggregateInput>;
}

@InputType()
export class UserOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    credentialId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    password?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    role?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    avatar?: keyof typeof SortOrder;
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
    @Field(() => MessageOrderByRelationAggregateInput, {nullable:true})
    Message?: InstanceType<typeof MessageOrderByRelationAggregateInput>;
    @Field(() => UserProjectOrderByRelationAggregateInput, {nullable:true})
    UserProject?: InstanceType<typeof UserProjectOrderByRelationAggregateInput>;
    @Field(() => loginTimeOrderByRelationAggregateInput, {nullable:true})
    loginTime?: InstanceType<typeof loginTimeOrderByRelationAggregateInput>;
    @Field(() => UserMessageRoomOrderByRelationAggregateInput, {nullable:true})
    UserMessageRoom?: InstanceType<typeof UserMessageRoomOrderByRelationAggregateInput>;
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
    @Field(() => IntWithAggregatesFilter, {nullable:true})
    credentialId?: InstanceType<typeof IntWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    email?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    password?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => EnumRoleWithAggregatesFilter, {nullable:true})
    role?: InstanceType<typeof EnumRoleWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    avatar?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updateAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}

@InputType()
export class UserSumAggregateInput {
    @Field(() => Boolean, {nullable:true})
    credentialId?: true;
}

@ObjectType()
export class UserSumAggregate {
    @Field(() => Int, {nullable:true})
    credentialId?: number;
}

@InputType()
export class UserSumOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    credentialId?: keyof typeof SortOrder;
}

@InputType()
export class UserUncheckedCreateWithoutDownloadInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.MinLength(3)
    name!: string;
    @Field(() => Int, {nullable:false})
    credentialId!: number;
    @Field(() => String, {nullable:false})
    @Validator.IsEmail()
    email!: string;
    @Field(() => String, {nullable:false})
    password!: string;
    @Field(() => Role, {nullable:true})
    role?: keyof typeof Role;
    @Field(() => String, {nullable:true})
    avatar?: string;
    @Field(() => Date, {nullable:true})
    createAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updateAt?: Date | string;
    @Field(() => PageUncheckedCreateNestedManyWithoutAuthorInput, {nullable:true})
    Page?: InstanceType<typeof PageUncheckedCreateNestedManyWithoutAuthorInput>;
    @Field(() => PostUncheckedCreateNestedManyWithoutAuthorInput, {nullable:true})
    Post?: InstanceType<typeof PostUncheckedCreateNestedManyWithoutAuthorInput>;
    @Field(() => MessageUncheckedCreateNestedManyWithoutAuthorInput, {nullable:true})
    Message?: InstanceType<typeof MessageUncheckedCreateNestedManyWithoutAuthorInput>;
    @Field(() => UserProjectUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    UserProject?: InstanceType<typeof UserProjectUncheckedCreateNestedManyWithoutUserInput>;
    @Field(() => loginTimeUncheckedCreateNestedManyWithoutAuthorInput, {nullable:true})
    loginTime?: InstanceType<typeof loginTimeUncheckedCreateNestedManyWithoutAuthorInput>;
    @Field(() => UserMessageRoomUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    UserMessageRoom?: InstanceType<typeof UserMessageRoomUncheckedCreateNestedManyWithoutUserInput>;
}

@InputType()
export class UserUncheckedCreateWithoutLoginTimeInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.MinLength(3)
    name!: string;
    @Field(() => Int, {nullable:false})
    credentialId!: number;
    @Field(() => String, {nullable:false})
    @Validator.IsEmail()
    email!: string;
    @Field(() => String, {nullable:false})
    password!: string;
    @Field(() => Role, {nullable:true})
    role?: keyof typeof Role;
    @Field(() => String, {nullable:true})
    avatar?: string;
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
    @Field(() => MessageUncheckedCreateNestedManyWithoutAuthorInput, {nullable:true})
    Message?: InstanceType<typeof MessageUncheckedCreateNestedManyWithoutAuthorInput>;
    @Field(() => UserProjectUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    UserProject?: InstanceType<typeof UserProjectUncheckedCreateNestedManyWithoutUserInput>;
    @Field(() => UserMessageRoomUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    UserMessageRoom?: InstanceType<typeof UserMessageRoomUncheckedCreateNestedManyWithoutUserInput>;
}

@InputType()
export class UserUncheckedCreateWithoutMessageInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.MinLength(3)
    name!: string;
    @Field(() => Int, {nullable:false})
    credentialId!: number;
    @Field(() => String, {nullable:false})
    @Validator.IsEmail()
    email!: string;
    @Field(() => String, {nullable:false})
    password!: string;
    @Field(() => Role, {nullable:true})
    role?: keyof typeof Role;
    @Field(() => String, {nullable:true})
    avatar?: string;
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
    @Field(() => UserProjectUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    UserProject?: InstanceType<typeof UserProjectUncheckedCreateNestedManyWithoutUserInput>;
    @Field(() => loginTimeUncheckedCreateNestedManyWithoutAuthorInput, {nullable:true})
    loginTime?: InstanceType<typeof loginTimeUncheckedCreateNestedManyWithoutAuthorInput>;
    @Field(() => UserMessageRoomUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    UserMessageRoom?: InstanceType<typeof UserMessageRoomUncheckedCreateNestedManyWithoutUserInput>;
}

@InputType()
export class UserUncheckedCreateWithoutPageInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.MinLength(3)
    name!: string;
    @Field(() => Int, {nullable:false})
    credentialId!: number;
    @Field(() => String, {nullable:false})
    @Validator.IsEmail()
    email!: string;
    @Field(() => String, {nullable:false})
    password!: string;
    @Field(() => Role, {nullable:true})
    role?: keyof typeof Role;
    @Field(() => String, {nullable:true})
    avatar?: string;
    @Field(() => Date, {nullable:true})
    createAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updateAt?: Date | string;
    @Field(() => DownloadUncheckedCreateNestedManyWithoutAuthorInput, {nullable:true})
    Download?: InstanceType<typeof DownloadUncheckedCreateNestedManyWithoutAuthorInput>;
    @Field(() => PostUncheckedCreateNestedManyWithoutAuthorInput, {nullable:true})
    Post?: InstanceType<typeof PostUncheckedCreateNestedManyWithoutAuthorInput>;
    @Field(() => MessageUncheckedCreateNestedManyWithoutAuthorInput, {nullable:true})
    Message?: InstanceType<typeof MessageUncheckedCreateNestedManyWithoutAuthorInput>;
    @Field(() => UserProjectUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    UserProject?: InstanceType<typeof UserProjectUncheckedCreateNestedManyWithoutUserInput>;
    @Field(() => loginTimeUncheckedCreateNestedManyWithoutAuthorInput, {nullable:true})
    loginTime?: InstanceType<typeof loginTimeUncheckedCreateNestedManyWithoutAuthorInput>;
    @Field(() => UserMessageRoomUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    UserMessageRoom?: InstanceType<typeof UserMessageRoomUncheckedCreateNestedManyWithoutUserInput>;
}

@InputType()
export class UserUncheckedCreateWithoutPostInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.MinLength(3)
    name!: string;
    @Field(() => Int, {nullable:false})
    credentialId!: number;
    @Field(() => String, {nullable:false})
    @Validator.IsEmail()
    email!: string;
    @Field(() => String, {nullable:false})
    password!: string;
    @Field(() => Role, {nullable:true})
    role?: keyof typeof Role;
    @Field(() => String, {nullable:true})
    avatar?: string;
    @Field(() => Date, {nullable:true})
    createAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updateAt?: Date | string;
    @Field(() => DownloadUncheckedCreateNestedManyWithoutAuthorInput, {nullable:true})
    Download?: InstanceType<typeof DownloadUncheckedCreateNestedManyWithoutAuthorInput>;
    @Field(() => PageUncheckedCreateNestedManyWithoutAuthorInput, {nullable:true})
    Page?: InstanceType<typeof PageUncheckedCreateNestedManyWithoutAuthorInput>;
    @Field(() => MessageUncheckedCreateNestedManyWithoutAuthorInput, {nullable:true})
    Message?: InstanceType<typeof MessageUncheckedCreateNestedManyWithoutAuthorInput>;
    @Field(() => UserProjectUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    UserProject?: InstanceType<typeof UserProjectUncheckedCreateNestedManyWithoutUserInput>;
    @Field(() => loginTimeUncheckedCreateNestedManyWithoutAuthorInput, {nullable:true})
    loginTime?: InstanceType<typeof loginTimeUncheckedCreateNestedManyWithoutAuthorInput>;
    @Field(() => UserMessageRoomUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    UserMessageRoom?: InstanceType<typeof UserMessageRoomUncheckedCreateNestedManyWithoutUserInput>;
}

@InputType()
export class UserUncheckedCreateWithoutUserMessageRoomInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.MinLength(3)
    name!: string;
    @Field(() => Int, {nullable:false})
    credentialId!: number;
    @Field(() => String, {nullable:false})
    @Validator.IsEmail()
    email!: string;
    @Field(() => String, {nullable:false})
    password!: string;
    @Field(() => Role, {nullable:true})
    role?: keyof typeof Role;
    @Field(() => String, {nullable:true})
    avatar?: string;
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
    @Field(() => MessageUncheckedCreateNestedManyWithoutAuthorInput, {nullable:true})
    Message?: InstanceType<typeof MessageUncheckedCreateNestedManyWithoutAuthorInput>;
    @Field(() => UserProjectUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    UserProject?: InstanceType<typeof UserProjectUncheckedCreateNestedManyWithoutUserInput>;
    @Field(() => loginTimeUncheckedCreateNestedManyWithoutAuthorInput, {nullable:true})
    loginTime?: InstanceType<typeof loginTimeUncheckedCreateNestedManyWithoutAuthorInput>;
}

@InputType()
export class UserUncheckedCreateWithoutUserProjectInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.MinLength(3)
    name!: string;
    @Field(() => Int, {nullable:false})
    credentialId!: number;
    @Field(() => String, {nullable:false})
    @Validator.IsEmail()
    email!: string;
    @Field(() => String, {nullable:false})
    password!: string;
    @Field(() => Role, {nullable:true})
    role?: keyof typeof Role;
    @Field(() => String, {nullable:true})
    avatar?: string;
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
    @Field(() => MessageUncheckedCreateNestedManyWithoutAuthorInput, {nullable:true})
    Message?: InstanceType<typeof MessageUncheckedCreateNestedManyWithoutAuthorInput>;
    @Field(() => loginTimeUncheckedCreateNestedManyWithoutAuthorInput, {nullable:true})
    loginTime?: InstanceType<typeof loginTimeUncheckedCreateNestedManyWithoutAuthorInput>;
    @Field(() => UserMessageRoomUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    UserMessageRoom?: InstanceType<typeof UserMessageRoomUncheckedCreateNestedManyWithoutUserInput>;
}

@InputType()
export class UserUncheckedCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.MinLength(3)
    name!: string;
    @Field(() => Int, {nullable:false})
    credentialId!: number;
    @Field(() => String, {nullable:false})
    @Validator.IsEmail()
    email!: string;
    @Field(() => String, {nullable:false})
    password!: string;
    @Field(() => Role, {nullable:true})
    role?: keyof typeof Role;
    @Field(() => String, {nullable:true})
    avatar?: string;
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
    @Field(() => MessageUncheckedCreateNestedManyWithoutAuthorInput, {nullable:true})
    Message?: InstanceType<typeof MessageUncheckedCreateNestedManyWithoutAuthorInput>;
    @Field(() => UserProjectUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    UserProject?: InstanceType<typeof UserProjectUncheckedCreateNestedManyWithoutUserInput>;
    @Field(() => loginTimeUncheckedCreateNestedManyWithoutAuthorInput, {nullable:true})
    loginTime?: InstanceType<typeof loginTimeUncheckedCreateNestedManyWithoutAuthorInput>;
    @Field(() => UserMessageRoomUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    UserMessageRoom?: InstanceType<typeof UserMessageRoomUncheckedCreateNestedManyWithoutUserInput>;
}

@InputType()
export class UserUncheckedUpdateManyInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    credentialId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => EnumRoleFieldUpdateOperationsInput, {nullable:true})
    role?: InstanceType<typeof EnumRoleFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    avatar?: InstanceType<typeof StringFieldUpdateOperationsInput>;
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
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    credentialId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => EnumRoleFieldUpdateOperationsInput, {nullable:true})
    role?: InstanceType<typeof EnumRoleFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    avatar?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updateAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => PageUncheckedUpdateManyWithoutAuthorNestedInput, {nullable:true})
    Page?: InstanceType<typeof PageUncheckedUpdateManyWithoutAuthorNestedInput>;
    @Field(() => PostUncheckedUpdateManyWithoutAuthorNestedInput, {nullable:true})
    Post?: InstanceType<typeof PostUncheckedUpdateManyWithoutAuthorNestedInput>;
    @Field(() => MessageUncheckedUpdateManyWithoutAuthorNestedInput, {nullable:true})
    Message?: InstanceType<typeof MessageUncheckedUpdateManyWithoutAuthorNestedInput>;
    @Field(() => UserProjectUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    UserProject?: InstanceType<typeof UserProjectUncheckedUpdateManyWithoutUserNestedInput>;
    @Field(() => loginTimeUncheckedUpdateManyWithoutAuthorNestedInput, {nullable:true})
    loginTime?: InstanceType<typeof loginTimeUncheckedUpdateManyWithoutAuthorNestedInput>;
    @Field(() => UserMessageRoomUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    UserMessageRoom?: InstanceType<typeof UserMessageRoomUncheckedUpdateManyWithoutUserNestedInput>;
}

@InputType()
export class UserUncheckedUpdateWithoutLoginTimeInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    credentialId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => EnumRoleFieldUpdateOperationsInput, {nullable:true})
    role?: InstanceType<typeof EnumRoleFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    avatar?: InstanceType<typeof StringFieldUpdateOperationsInput>;
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
    @Field(() => MessageUncheckedUpdateManyWithoutAuthorNestedInput, {nullable:true})
    Message?: InstanceType<typeof MessageUncheckedUpdateManyWithoutAuthorNestedInput>;
    @Field(() => UserProjectUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    UserProject?: InstanceType<typeof UserProjectUncheckedUpdateManyWithoutUserNestedInput>;
    @Field(() => UserMessageRoomUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    UserMessageRoom?: InstanceType<typeof UserMessageRoomUncheckedUpdateManyWithoutUserNestedInput>;
}

@InputType()
export class UserUncheckedUpdateWithoutMessageInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    credentialId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => EnumRoleFieldUpdateOperationsInput, {nullable:true})
    role?: InstanceType<typeof EnumRoleFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    avatar?: InstanceType<typeof StringFieldUpdateOperationsInput>;
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
    @Field(() => UserProjectUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    UserProject?: InstanceType<typeof UserProjectUncheckedUpdateManyWithoutUserNestedInput>;
    @Field(() => loginTimeUncheckedUpdateManyWithoutAuthorNestedInput, {nullable:true})
    loginTime?: InstanceType<typeof loginTimeUncheckedUpdateManyWithoutAuthorNestedInput>;
    @Field(() => UserMessageRoomUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    UserMessageRoom?: InstanceType<typeof UserMessageRoomUncheckedUpdateManyWithoutUserNestedInput>;
}

@InputType()
export class UserUncheckedUpdateWithoutPageInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    credentialId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => EnumRoleFieldUpdateOperationsInput, {nullable:true})
    role?: InstanceType<typeof EnumRoleFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    avatar?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updateAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DownloadUncheckedUpdateManyWithoutAuthorNestedInput, {nullable:true})
    Download?: InstanceType<typeof DownloadUncheckedUpdateManyWithoutAuthorNestedInput>;
    @Field(() => PostUncheckedUpdateManyWithoutAuthorNestedInput, {nullable:true})
    Post?: InstanceType<typeof PostUncheckedUpdateManyWithoutAuthorNestedInput>;
    @Field(() => MessageUncheckedUpdateManyWithoutAuthorNestedInput, {nullable:true})
    Message?: InstanceType<typeof MessageUncheckedUpdateManyWithoutAuthorNestedInput>;
    @Field(() => UserProjectUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    UserProject?: InstanceType<typeof UserProjectUncheckedUpdateManyWithoutUserNestedInput>;
    @Field(() => loginTimeUncheckedUpdateManyWithoutAuthorNestedInput, {nullable:true})
    loginTime?: InstanceType<typeof loginTimeUncheckedUpdateManyWithoutAuthorNestedInput>;
    @Field(() => UserMessageRoomUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    UserMessageRoom?: InstanceType<typeof UserMessageRoomUncheckedUpdateManyWithoutUserNestedInput>;
}

@InputType()
export class UserUncheckedUpdateWithoutPostInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    credentialId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => EnumRoleFieldUpdateOperationsInput, {nullable:true})
    role?: InstanceType<typeof EnumRoleFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    avatar?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updateAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DownloadUncheckedUpdateManyWithoutAuthorNestedInput, {nullable:true})
    Download?: InstanceType<typeof DownloadUncheckedUpdateManyWithoutAuthorNestedInput>;
    @Field(() => PageUncheckedUpdateManyWithoutAuthorNestedInput, {nullable:true})
    Page?: InstanceType<typeof PageUncheckedUpdateManyWithoutAuthorNestedInput>;
    @Field(() => MessageUncheckedUpdateManyWithoutAuthorNestedInput, {nullable:true})
    Message?: InstanceType<typeof MessageUncheckedUpdateManyWithoutAuthorNestedInput>;
    @Field(() => UserProjectUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    UserProject?: InstanceType<typeof UserProjectUncheckedUpdateManyWithoutUserNestedInput>;
    @Field(() => loginTimeUncheckedUpdateManyWithoutAuthorNestedInput, {nullable:true})
    loginTime?: InstanceType<typeof loginTimeUncheckedUpdateManyWithoutAuthorNestedInput>;
    @Field(() => UserMessageRoomUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    UserMessageRoom?: InstanceType<typeof UserMessageRoomUncheckedUpdateManyWithoutUserNestedInput>;
}

@InputType()
export class UserUncheckedUpdateWithoutUserMessageRoomInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    credentialId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => EnumRoleFieldUpdateOperationsInput, {nullable:true})
    role?: InstanceType<typeof EnumRoleFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    avatar?: InstanceType<typeof StringFieldUpdateOperationsInput>;
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
    @Field(() => MessageUncheckedUpdateManyWithoutAuthorNestedInput, {nullable:true})
    Message?: InstanceType<typeof MessageUncheckedUpdateManyWithoutAuthorNestedInput>;
    @Field(() => UserProjectUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    UserProject?: InstanceType<typeof UserProjectUncheckedUpdateManyWithoutUserNestedInput>;
    @Field(() => loginTimeUncheckedUpdateManyWithoutAuthorNestedInput, {nullable:true})
    loginTime?: InstanceType<typeof loginTimeUncheckedUpdateManyWithoutAuthorNestedInput>;
}

@InputType()
export class UserUncheckedUpdateWithoutUserProjectInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    credentialId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => EnumRoleFieldUpdateOperationsInput, {nullable:true})
    role?: InstanceType<typeof EnumRoleFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    avatar?: InstanceType<typeof StringFieldUpdateOperationsInput>;
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
    @Field(() => MessageUncheckedUpdateManyWithoutAuthorNestedInput, {nullable:true})
    Message?: InstanceType<typeof MessageUncheckedUpdateManyWithoutAuthorNestedInput>;
    @Field(() => loginTimeUncheckedUpdateManyWithoutAuthorNestedInput, {nullable:true})
    loginTime?: InstanceType<typeof loginTimeUncheckedUpdateManyWithoutAuthorNestedInput>;
    @Field(() => UserMessageRoomUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    UserMessageRoom?: InstanceType<typeof UserMessageRoomUncheckedUpdateManyWithoutUserNestedInput>;
}

@InputType()
export class UserUncheckedUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    credentialId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => EnumRoleFieldUpdateOperationsInput, {nullable:true})
    role?: InstanceType<typeof EnumRoleFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    avatar?: InstanceType<typeof StringFieldUpdateOperationsInput>;
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
    @Field(() => MessageUncheckedUpdateManyWithoutAuthorNestedInput, {nullable:true})
    Message?: InstanceType<typeof MessageUncheckedUpdateManyWithoutAuthorNestedInput>;
    @Field(() => UserProjectUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    UserProject?: InstanceType<typeof UserProjectUncheckedUpdateManyWithoutUserNestedInput>;
    @Field(() => loginTimeUncheckedUpdateManyWithoutAuthorNestedInput, {nullable:true})
    loginTime?: InstanceType<typeof loginTimeUncheckedUpdateManyWithoutAuthorNestedInput>;
    @Field(() => UserMessageRoomUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    UserMessageRoom?: InstanceType<typeof UserMessageRoomUncheckedUpdateManyWithoutUserNestedInput>;
}

@InputType()
export class UserUpdateManyMutationInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    credentialId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => EnumRoleFieldUpdateOperationsInput, {nullable:true})
    role?: InstanceType<typeof EnumRoleFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    avatar?: InstanceType<typeof StringFieldUpdateOperationsInput>;
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
export class UserUpdateOneRequiredWithoutLoginTimeNestedInput {
    @Field(() => UserCreateWithoutLoginTimeInput, {nullable:true})
    @Type(() => UserCreateWithoutLoginTimeInput)
    create?: InstanceType<typeof UserCreateWithoutLoginTimeInput>;
    @Field(() => UserCreateOrConnectWithoutLoginTimeInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutLoginTimeInput)
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutLoginTimeInput>;
    @Field(() => UserUpsertWithoutLoginTimeInput, {nullable:true})
    @Type(() => UserUpsertWithoutLoginTimeInput)
    upsert?: InstanceType<typeof UserUpsertWithoutLoginTimeInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: InstanceType<typeof UserWhereUniqueInput>;
    @Field(() => UserUpdateWithoutLoginTimeInput, {nullable:true})
    @Type(() => UserUpdateWithoutLoginTimeInput)
    update?: InstanceType<typeof UserUpdateWithoutLoginTimeInput>;
}

@InputType()
export class UserUpdateOneRequiredWithoutMessageNestedInput {
    @Field(() => UserCreateWithoutMessageInput, {nullable:true})
    @Type(() => UserCreateWithoutMessageInput)
    create?: InstanceType<typeof UserCreateWithoutMessageInput>;
    @Field(() => UserCreateOrConnectWithoutMessageInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutMessageInput)
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutMessageInput>;
    @Field(() => UserUpsertWithoutMessageInput, {nullable:true})
    @Type(() => UserUpsertWithoutMessageInput)
    upsert?: InstanceType<typeof UserUpsertWithoutMessageInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: InstanceType<typeof UserWhereUniqueInput>;
    @Field(() => UserUpdateWithoutMessageInput, {nullable:true})
    @Type(() => UserUpdateWithoutMessageInput)
    update?: InstanceType<typeof UserUpdateWithoutMessageInput>;
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
export class UserUpdateOneRequiredWithoutUserMessageRoomNestedInput {
    @Field(() => UserCreateWithoutUserMessageRoomInput, {nullable:true})
    @Type(() => UserCreateWithoutUserMessageRoomInput)
    create?: InstanceType<typeof UserCreateWithoutUserMessageRoomInput>;
    @Field(() => UserCreateOrConnectWithoutUserMessageRoomInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutUserMessageRoomInput)
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutUserMessageRoomInput>;
    @Field(() => UserUpsertWithoutUserMessageRoomInput, {nullable:true})
    @Type(() => UserUpsertWithoutUserMessageRoomInput)
    upsert?: InstanceType<typeof UserUpsertWithoutUserMessageRoomInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: InstanceType<typeof UserWhereUniqueInput>;
    @Field(() => UserUpdateWithoutUserMessageRoomInput, {nullable:true})
    @Type(() => UserUpdateWithoutUserMessageRoomInput)
    update?: InstanceType<typeof UserUpdateWithoutUserMessageRoomInput>;
}

@InputType()
export class UserUpdateOneRequiredWithoutUserProjectNestedInput {
    @Field(() => UserCreateWithoutUserProjectInput, {nullable:true})
    @Type(() => UserCreateWithoutUserProjectInput)
    create?: InstanceType<typeof UserCreateWithoutUserProjectInput>;
    @Field(() => UserCreateOrConnectWithoutUserProjectInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutUserProjectInput)
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutUserProjectInput>;
    @Field(() => UserUpsertWithoutUserProjectInput, {nullable:true})
    @Type(() => UserUpsertWithoutUserProjectInput)
    upsert?: InstanceType<typeof UserUpsertWithoutUserProjectInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: InstanceType<typeof UserWhereUniqueInput>;
    @Field(() => UserUpdateWithoutUserProjectInput, {nullable:true})
    @Type(() => UserUpdateWithoutUserProjectInput)
    update?: InstanceType<typeof UserUpdateWithoutUserProjectInput>;
}

@InputType()
export class UserUpdateWithoutDownloadInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    credentialId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => EnumRoleFieldUpdateOperationsInput, {nullable:true})
    role?: InstanceType<typeof EnumRoleFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    avatar?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updateAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => PageUpdateManyWithoutAuthorNestedInput, {nullable:true})
    Page?: InstanceType<typeof PageUpdateManyWithoutAuthorNestedInput>;
    @Field(() => PostUpdateManyWithoutAuthorNestedInput, {nullable:true})
    Post?: InstanceType<typeof PostUpdateManyWithoutAuthorNestedInput>;
    @Field(() => MessageUpdateManyWithoutAuthorNestedInput, {nullable:true})
    Message?: InstanceType<typeof MessageUpdateManyWithoutAuthorNestedInput>;
    @Field(() => UserProjectUpdateManyWithoutUserNestedInput, {nullable:true})
    UserProject?: InstanceType<typeof UserProjectUpdateManyWithoutUserNestedInput>;
    @Field(() => loginTimeUpdateManyWithoutAuthorNestedInput, {nullable:true})
    loginTime?: InstanceType<typeof loginTimeUpdateManyWithoutAuthorNestedInput>;
    @Field(() => UserMessageRoomUpdateManyWithoutUserNestedInput, {nullable:true})
    UserMessageRoom?: InstanceType<typeof UserMessageRoomUpdateManyWithoutUserNestedInput>;
}

@InputType()
export class UserUpdateWithoutLoginTimeInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    credentialId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => EnumRoleFieldUpdateOperationsInput, {nullable:true})
    role?: InstanceType<typeof EnumRoleFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    avatar?: InstanceType<typeof StringFieldUpdateOperationsInput>;
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
    @Field(() => MessageUpdateManyWithoutAuthorNestedInput, {nullable:true})
    Message?: InstanceType<typeof MessageUpdateManyWithoutAuthorNestedInput>;
    @Field(() => UserProjectUpdateManyWithoutUserNestedInput, {nullable:true})
    UserProject?: InstanceType<typeof UserProjectUpdateManyWithoutUserNestedInput>;
    @Field(() => UserMessageRoomUpdateManyWithoutUserNestedInput, {nullable:true})
    UserMessageRoom?: InstanceType<typeof UserMessageRoomUpdateManyWithoutUserNestedInput>;
}

@InputType()
export class UserUpdateWithoutMessageInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    credentialId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => EnumRoleFieldUpdateOperationsInput, {nullable:true})
    role?: InstanceType<typeof EnumRoleFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    avatar?: InstanceType<typeof StringFieldUpdateOperationsInput>;
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
    @Field(() => UserProjectUpdateManyWithoutUserNestedInput, {nullable:true})
    UserProject?: InstanceType<typeof UserProjectUpdateManyWithoutUserNestedInput>;
    @Field(() => loginTimeUpdateManyWithoutAuthorNestedInput, {nullable:true})
    loginTime?: InstanceType<typeof loginTimeUpdateManyWithoutAuthorNestedInput>;
    @Field(() => UserMessageRoomUpdateManyWithoutUserNestedInput, {nullable:true})
    UserMessageRoom?: InstanceType<typeof UserMessageRoomUpdateManyWithoutUserNestedInput>;
}

@InputType()
export class UserUpdateWithoutPageInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    credentialId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => EnumRoleFieldUpdateOperationsInput, {nullable:true})
    role?: InstanceType<typeof EnumRoleFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    avatar?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updateAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DownloadUpdateManyWithoutAuthorNestedInput, {nullable:true})
    Download?: InstanceType<typeof DownloadUpdateManyWithoutAuthorNestedInput>;
    @Field(() => PostUpdateManyWithoutAuthorNestedInput, {nullable:true})
    Post?: InstanceType<typeof PostUpdateManyWithoutAuthorNestedInput>;
    @Field(() => MessageUpdateManyWithoutAuthorNestedInput, {nullable:true})
    Message?: InstanceType<typeof MessageUpdateManyWithoutAuthorNestedInput>;
    @Field(() => UserProjectUpdateManyWithoutUserNestedInput, {nullable:true})
    UserProject?: InstanceType<typeof UserProjectUpdateManyWithoutUserNestedInput>;
    @Field(() => loginTimeUpdateManyWithoutAuthorNestedInput, {nullable:true})
    loginTime?: InstanceType<typeof loginTimeUpdateManyWithoutAuthorNestedInput>;
    @Field(() => UserMessageRoomUpdateManyWithoutUserNestedInput, {nullable:true})
    UserMessageRoom?: InstanceType<typeof UserMessageRoomUpdateManyWithoutUserNestedInput>;
}

@InputType()
export class UserUpdateWithoutPostInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    credentialId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => EnumRoleFieldUpdateOperationsInput, {nullable:true})
    role?: InstanceType<typeof EnumRoleFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    avatar?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updateAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DownloadUpdateManyWithoutAuthorNestedInput, {nullable:true})
    Download?: InstanceType<typeof DownloadUpdateManyWithoutAuthorNestedInput>;
    @Field(() => PageUpdateManyWithoutAuthorNestedInput, {nullable:true})
    Page?: InstanceType<typeof PageUpdateManyWithoutAuthorNestedInput>;
    @Field(() => MessageUpdateManyWithoutAuthorNestedInput, {nullable:true})
    Message?: InstanceType<typeof MessageUpdateManyWithoutAuthorNestedInput>;
    @Field(() => UserProjectUpdateManyWithoutUserNestedInput, {nullable:true})
    UserProject?: InstanceType<typeof UserProjectUpdateManyWithoutUserNestedInput>;
    @Field(() => loginTimeUpdateManyWithoutAuthorNestedInput, {nullable:true})
    loginTime?: InstanceType<typeof loginTimeUpdateManyWithoutAuthorNestedInput>;
    @Field(() => UserMessageRoomUpdateManyWithoutUserNestedInput, {nullable:true})
    UserMessageRoom?: InstanceType<typeof UserMessageRoomUpdateManyWithoutUserNestedInput>;
}

@InputType()
export class UserUpdateWithoutUserMessageRoomInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    credentialId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => EnumRoleFieldUpdateOperationsInput, {nullable:true})
    role?: InstanceType<typeof EnumRoleFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    avatar?: InstanceType<typeof StringFieldUpdateOperationsInput>;
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
    @Field(() => MessageUpdateManyWithoutAuthorNestedInput, {nullable:true})
    Message?: InstanceType<typeof MessageUpdateManyWithoutAuthorNestedInput>;
    @Field(() => UserProjectUpdateManyWithoutUserNestedInput, {nullable:true})
    UserProject?: InstanceType<typeof UserProjectUpdateManyWithoutUserNestedInput>;
    @Field(() => loginTimeUpdateManyWithoutAuthorNestedInput, {nullable:true})
    loginTime?: InstanceType<typeof loginTimeUpdateManyWithoutAuthorNestedInput>;
}

@InputType()
export class UserUpdateWithoutUserProjectInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    credentialId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => EnumRoleFieldUpdateOperationsInput, {nullable:true})
    role?: InstanceType<typeof EnumRoleFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    avatar?: InstanceType<typeof StringFieldUpdateOperationsInput>;
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
    @Field(() => MessageUpdateManyWithoutAuthorNestedInput, {nullable:true})
    Message?: InstanceType<typeof MessageUpdateManyWithoutAuthorNestedInput>;
    @Field(() => loginTimeUpdateManyWithoutAuthorNestedInput, {nullable:true})
    loginTime?: InstanceType<typeof loginTimeUpdateManyWithoutAuthorNestedInput>;
    @Field(() => UserMessageRoomUpdateManyWithoutUserNestedInput, {nullable:true})
    UserMessageRoom?: InstanceType<typeof UserMessageRoomUpdateManyWithoutUserNestedInput>;
}

@InputType()
export class UserUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    credentialId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => EnumRoleFieldUpdateOperationsInput, {nullable:true})
    role?: InstanceType<typeof EnumRoleFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    avatar?: InstanceType<typeof StringFieldUpdateOperationsInput>;
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
    @Field(() => MessageUpdateManyWithoutAuthorNestedInput, {nullable:true})
    Message?: InstanceType<typeof MessageUpdateManyWithoutAuthorNestedInput>;
    @Field(() => UserProjectUpdateManyWithoutUserNestedInput, {nullable:true})
    UserProject?: InstanceType<typeof UserProjectUpdateManyWithoutUserNestedInput>;
    @Field(() => loginTimeUpdateManyWithoutAuthorNestedInput, {nullable:true})
    loginTime?: InstanceType<typeof loginTimeUpdateManyWithoutAuthorNestedInput>;
    @Field(() => UserMessageRoomUpdateManyWithoutUserNestedInput, {nullable:true})
    UserMessageRoom?: InstanceType<typeof UserMessageRoomUpdateManyWithoutUserNestedInput>;
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
export class UserUpsertWithoutLoginTimeInput {
    @Field(() => UserUpdateWithoutLoginTimeInput, {nullable:false})
    @Type(() => UserUpdateWithoutLoginTimeInput)
    update!: InstanceType<typeof UserUpdateWithoutLoginTimeInput>;
    @Field(() => UserCreateWithoutLoginTimeInput, {nullable:false})
    @Type(() => UserCreateWithoutLoginTimeInput)
    create!: InstanceType<typeof UserCreateWithoutLoginTimeInput>;
}

@InputType()
export class UserUpsertWithoutMessageInput {
    @Field(() => UserUpdateWithoutMessageInput, {nullable:false})
    @Type(() => UserUpdateWithoutMessageInput)
    update!: InstanceType<typeof UserUpdateWithoutMessageInput>;
    @Field(() => UserCreateWithoutMessageInput, {nullable:false})
    @Type(() => UserCreateWithoutMessageInput)
    create!: InstanceType<typeof UserCreateWithoutMessageInput>;
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
export class UserUpsertWithoutUserMessageRoomInput {
    @Field(() => UserUpdateWithoutUserMessageRoomInput, {nullable:false})
    @Type(() => UserUpdateWithoutUserMessageRoomInput)
    update!: InstanceType<typeof UserUpdateWithoutUserMessageRoomInput>;
    @Field(() => UserCreateWithoutUserMessageRoomInput, {nullable:false})
    @Type(() => UserCreateWithoutUserMessageRoomInput)
    create!: InstanceType<typeof UserCreateWithoutUserMessageRoomInput>;
}

@InputType()
export class UserUpsertWithoutUserProjectInput {
    @Field(() => UserUpdateWithoutUserProjectInput, {nullable:false})
    @Type(() => UserUpdateWithoutUserProjectInput)
    update!: InstanceType<typeof UserUpdateWithoutUserProjectInput>;
    @Field(() => UserCreateWithoutUserProjectInput, {nullable:false})
    @Type(() => UserCreateWithoutUserProjectInput)
    create!: InstanceType<typeof UserCreateWithoutUserProjectInput>;
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
    @Field(() => IntFilter, {nullable:true})
    credentialId?: InstanceType<typeof IntFilter>;
    @Field(() => StringFilter, {nullable:true})
    email?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    password?: InstanceType<typeof StringFilter>;
    @Field(() => EnumRoleFilter, {nullable:true})
    role?: InstanceType<typeof EnumRoleFilter>;
    @Field(() => StringFilter, {nullable:true})
    avatar?: InstanceType<typeof StringFilter>;
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
    @Field(() => MessageListRelationFilter, {nullable:true})
    Message?: InstanceType<typeof MessageListRelationFilter>;
    @Field(() => UserProjectListRelationFilter, {nullable:true})
    UserProject?: InstanceType<typeof UserProjectListRelationFilter>;
    @Field(() => LoginTimeListRelationFilter, {nullable:true})
    loginTime?: InstanceType<typeof LoginTimeListRelationFilter>;
    @Field(() => UserMessageRoomListRelationFilter, {nullable:true})
    UserMessageRoom?: InstanceType<typeof UserMessageRoomListRelationFilter>;
}

@ObjectType()
export class User {
    @Field(() => ID, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => Int, {nullable:false})
    credentialId!: number;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:false})
    password!: string;
    @Field(() => Role, {nullable:false,defaultValue:'STUDENT'})
    role!: keyof typeof Role;
    @Field(() => String, {nullable:false,defaultValue:'https://picsum.photos/300/300'})
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
    @Field(() => [Message], {nullable:true})
    Message?: Array<Message>;
    @Field(() => [UserProject], {nullable:true})
    UserProject?: Array<UserProject>;
    @Field(() => [loginTime], {nullable:true})
    loginTime?: Array<loginTime>;
    @Field(() => [UserMessageRoom], {nullable:true})
    UserMessageRoom?: Array<UserMessageRoom>;
    @Field(() => UserCount, {nullable:false})
    _count?: InstanceType<typeof UserCount>;
}

@ObjectType()
export class AggregateUserMessageRoom {
    @Field(() => UserMessageRoomCountAggregate, {nullable:true})
    _count?: InstanceType<typeof UserMessageRoomCountAggregate>;
    @Field(() => UserMessageRoomMinAggregate, {nullable:true})
    _min?: InstanceType<typeof UserMessageRoomMinAggregate>;
    @Field(() => UserMessageRoomMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof UserMessageRoomMaxAggregate>;
}

@ArgsType()
export class CreateManyUserMessageRoomArgs {
    @Field(() => [UserMessageRoomCreateManyInput], {nullable:false})
    @Type(() => UserMessageRoomCreateManyInput)
    data!: Array<UserMessageRoomCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneUserMessageRoomArgs {
    @Field(() => UserMessageRoomCreateInput, {nullable:false})
    @Type(() => UserMessageRoomCreateInput)
    data!: InstanceType<typeof UserMessageRoomCreateInput>;
}

@ArgsType()
export class DeleteManyUserMessageRoomArgs {
    @Field(() => UserMessageRoomWhereInput, {nullable:true})
    @Type(() => UserMessageRoomWhereInput)
    where?: InstanceType<typeof UserMessageRoomWhereInput>;
}

@ArgsType()
export class DeleteOneUserMessageRoomArgs {
    @Field(() => UserMessageRoomWhereUniqueInput, {nullable:false})
    @Type(() => UserMessageRoomWhereUniqueInput)
    where!: InstanceType<typeof UserMessageRoomWhereUniqueInput>;
}

@ArgsType()
export class FindFirstUserMessageRoomOrThrowArgs {
    @Field(() => UserMessageRoomWhereInput, {nullable:true})
    @Type(() => UserMessageRoomWhereInput)
    where?: InstanceType<typeof UserMessageRoomWhereInput>;
    @Field(() => [UserMessageRoomOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UserMessageRoomOrderByWithRelationInput>;
    @Field(() => UserMessageRoomWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof UserMessageRoomWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [UserMessageRoomScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof UserMessageRoomScalarFieldEnum>;
}

@ArgsType()
export class FindFirstUserMessageRoomArgs {
    @Field(() => UserMessageRoomWhereInput, {nullable:true})
    @Type(() => UserMessageRoomWhereInput)
    where?: InstanceType<typeof UserMessageRoomWhereInput>;
    @Field(() => [UserMessageRoomOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UserMessageRoomOrderByWithRelationInput>;
    @Field(() => UserMessageRoomWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof UserMessageRoomWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [UserMessageRoomScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof UserMessageRoomScalarFieldEnum>;
}

@ArgsType()
export class FindManyUserMessageRoomArgs {
    @Field(() => UserMessageRoomWhereInput, {nullable:true})
    @Type(() => UserMessageRoomWhereInput)
    where?: InstanceType<typeof UserMessageRoomWhereInput>;
    @Field(() => [UserMessageRoomOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UserMessageRoomOrderByWithRelationInput>;
    @Field(() => UserMessageRoomWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof UserMessageRoomWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [UserMessageRoomScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof UserMessageRoomScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueUserMessageRoomOrThrowArgs {
    @Field(() => UserMessageRoomWhereUniqueInput, {nullable:false})
    @Type(() => UserMessageRoomWhereUniqueInput)
    where!: InstanceType<typeof UserMessageRoomWhereUniqueInput>;
}

@ArgsType()
export class FindUniqueUserMessageRoomArgs {
    @Field(() => UserMessageRoomWhereUniqueInput, {nullable:false})
    @Type(() => UserMessageRoomWhereUniqueInput)
    where!: InstanceType<typeof UserMessageRoomWhereUniqueInput>;
}

@ArgsType()
export class UpdateManyUserMessageRoomArgs {
    @Field(() => UserMessageRoomUncheckedUpdateManyInput, {nullable:false})
    @Type(() => UserMessageRoomUncheckedUpdateManyInput)
    data!: InstanceType<typeof UserMessageRoomUncheckedUpdateManyInput>;
    @Field(() => UserMessageRoomWhereInput, {nullable:true})
    @Type(() => UserMessageRoomWhereInput)
    where?: InstanceType<typeof UserMessageRoomWhereInput>;
}

@ArgsType()
export class UpdateOneUserMessageRoomArgs {
    @Field(() => UserMessageRoomUpdateInput, {nullable:false})
    @Type(() => UserMessageRoomUpdateInput)
    data!: InstanceType<typeof UserMessageRoomUpdateInput>;
    @Field(() => UserMessageRoomWhereUniqueInput, {nullable:false})
    @Type(() => UserMessageRoomWhereUniqueInput)
    where!: InstanceType<typeof UserMessageRoomWhereUniqueInput>;
}

@ArgsType()
export class UpsertOneUserMessageRoomArgs {
    @Field(() => UserMessageRoomWhereUniqueInput, {nullable:false})
    @Type(() => UserMessageRoomWhereUniqueInput)
    where!: InstanceType<typeof UserMessageRoomWhereUniqueInput>;
    @Field(() => UserMessageRoomCreateInput, {nullable:false})
    @Type(() => UserMessageRoomCreateInput)
    create!: InstanceType<typeof UserMessageRoomCreateInput>;
    @Field(() => UserMessageRoomUpdateInput, {nullable:false})
    @Type(() => UserMessageRoomUpdateInput)
    update!: InstanceType<typeof UserMessageRoomUpdateInput>;
}

@ArgsType()
export class UserMessageRoomAggregateArgs {
    @Field(() => UserMessageRoomWhereInput, {nullable:true})
    @Type(() => UserMessageRoomWhereInput)
    where?: InstanceType<typeof UserMessageRoomWhereInput>;
    @Field(() => [UserMessageRoomOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UserMessageRoomOrderByWithRelationInput>;
    @Field(() => UserMessageRoomWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof UserMessageRoomWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => UserMessageRoomCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof UserMessageRoomCountAggregateInput>;
    @Field(() => UserMessageRoomMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof UserMessageRoomMinAggregateInput>;
    @Field(() => UserMessageRoomMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof UserMessageRoomMaxAggregateInput>;
}

@InputType()
export class UserMessageRoomCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    userId?: true;
    @Field(() => Boolean, {nullable:true})
    messageRoomId?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class UserMessageRoomCountAggregate {
    @Field(() => Int, {nullable:false})
    userId!: number;
    @Field(() => Int, {nullable:false})
    messageRoomId!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class UserMessageRoomCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    messageRoomId?: keyof typeof SortOrder;
}

@InputType()
export class UserMessageRoomCreateManyMessageRoomInputEnvelope {
    @Field(() => [UserMessageRoomCreateManyMessageRoomInput], {nullable:false})
    @Type(() => UserMessageRoomCreateManyMessageRoomInput)
    data!: Array<UserMessageRoomCreateManyMessageRoomInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@InputType()
export class UserMessageRoomCreateManyMessageRoomInput {
    @Field(() => String, {nullable:false})
    userId!: string;
}

@InputType()
export class UserMessageRoomCreateManyUserInputEnvelope {
    @Field(() => [UserMessageRoomCreateManyUserInput], {nullable:false})
    @Type(() => UserMessageRoomCreateManyUserInput)
    data!: Array<UserMessageRoomCreateManyUserInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@InputType()
export class UserMessageRoomCreateManyUserInput {
    @Field(() => String, {nullable:false})
    messageRoomId!: string;
}

@InputType()
export class UserMessageRoomCreateManyInput {
    @Field(() => String, {nullable:false})
    userId!: string;
    @Field(() => String, {nullable:false})
    messageRoomId!: string;
}

@InputType()
export class UserMessageRoomCreateNestedManyWithoutMessageRoomInput {
    @Field(() => [UserMessageRoomCreateWithoutMessageRoomInput], {nullable:true})
    @Type(() => UserMessageRoomCreateWithoutMessageRoomInput)
    create?: Array<UserMessageRoomCreateWithoutMessageRoomInput>;
    @Field(() => [UserMessageRoomCreateOrConnectWithoutMessageRoomInput], {nullable:true})
    @Type(() => UserMessageRoomCreateOrConnectWithoutMessageRoomInput)
    connectOrCreate?: Array<UserMessageRoomCreateOrConnectWithoutMessageRoomInput>;
    @Field(() => UserMessageRoomCreateManyMessageRoomInputEnvelope, {nullable:true})
    @Type(() => UserMessageRoomCreateManyMessageRoomInputEnvelope)
    createMany?: InstanceType<typeof UserMessageRoomCreateManyMessageRoomInputEnvelope>;
    @Field(() => [UserMessageRoomWhereUniqueInput], {nullable:true})
    @Type(() => UserMessageRoomWhereUniqueInput)
    connect?: Array<UserMessageRoomWhereUniqueInput>;
}

@InputType()
export class UserMessageRoomCreateNestedManyWithoutUserInput {
    @Field(() => [UserMessageRoomCreateWithoutUserInput], {nullable:true})
    @Type(() => UserMessageRoomCreateWithoutUserInput)
    create?: Array<UserMessageRoomCreateWithoutUserInput>;
    @Field(() => [UserMessageRoomCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => UserMessageRoomCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<UserMessageRoomCreateOrConnectWithoutUserInput>;
    @Field(() => UserMessageRoomCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => UserMessageRoomCreateManyUserInputEnvelope)
    createMany?: InstanceType<typeof UserMessageRoomCreateManyUserInputEnvelope>;
    @Field(() => [UserMessageRoomWhereUniqueInput], {nullable:true})
    @Type(() => UserMessageRoomWhereUniqueInput)
    connect?: Array<UserMessageRoomWhereUniqueInput>;
}

@InputType()
export class UserMessageRoomCreateOrConnectWithoutMessageRoomInput {
    @Field(() => UserMessageRoomWhereUniqueInput, {nullable:false})
    @Type(() => UserMessageRoomWhereUniqueInput)
    where!: InstanceType<typeof UserMessageRoomWhereUniqueInput>;
    @Field(() => UserMessageRoomCreateWithoutMessageRoomInput, {nullable:false})
    @Type(() => UserMessageRoomCreateWithoutMessageRoomInput)
    create!: InstanceType<typeof UserMessageRoomCreateWithoutMessageRoomInput>;
}

@InputType()
export class UserMessageRoomCreateOrConnectWithoutUserInput {
    @Field(() => UserMessageRoomWhereUniqueInput, {nullable:false})
    @Type(() => UserMessageRoomWhereUniqueInput)
    where!: InstanceType<typeof UserMessageRoomWhereUniqueInput>;
    @Field(() => UserMessageRoomCreateWithoutUserInput, {nullable:false})
    @Type(() => UserMessageRoomCreateWithoutUserInput)
    create!: InstanceType<typeof UserMessageRoomCreateWithoutUserInput>;
}

@InputType()
export class UserMessageRoomCreateWithoutMessageRoomInput {
    @Field(() => UserCreateNestedOneWithoutUserMessageRoomInput, {nullable:false})
    user!: InstanceType<typeof UserCreateNestedOneWithoutUserMessageRoomInput>;
}

@InputType()
export class UserMessageRoomCreateWithoutUserInput {
    @Field(() => MessageRoomCreateNestedOneWithoutUserMessageRoomInput, {nullable:false})
    messageRoom!: InstanceType<typeof MessageRoomCreateNestedOneWithoutUserMessageRoomInput>;
}

@InputType()
export class UserMessageRoomCreateInput {
    @Field(() => UserCreateNestedOneWithoutUserMessageRoomInput, {nullable:false})
    user!: InstanceType<typeof UserCreateNestedOneWithoutUserMessageRoomInput>;
    @Field(() => MessageRoomCreateNestedOneWithoutUserMessageRoomInput, {nullable:false})
    messageRoom!: InstanceType<typeof MessageRoomCreateNestedOneWithoutUserMessageRoomInput>;
}

@ArgsType()
export class UserMessageRoomGroupByArgs {
    @Field(() => UserMessageRoomWhereInput, {nullable:true})
    @Type(() => UserMessageRoomWhereInput)
    where?: InstanceType<typeof UserMessageRoomWhereInput>;
    @Field(() => [UserMessageRoomOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<UserMessageRoomOrderByWithAggregationInput>;
    @Field(() => [UserMessageRoomScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof UserMessageRoomScalarFieldEnum>;
    @Field(() => UserMessageRoomScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof UserMessageRoomScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => UserMessageRoomCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof UserMessageRoomCountAggregateInput>;
    @Field(() => UserMessageRoomMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof UserMessageRoomMinAggregateInput>;
    @Field(() => UserMessageRoomMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof UserMessageRoomMaxAggregateInput>;
}

@ObjectType()
export class UserMessageRoomGroupBy {
    @Field(() => String, {nullable:false})
    userId!: string;
    @Field(() => String, {nullable:false})
    messageRoomId!: string;
    @Field(() => UserMessageRoomCountAggregate, {nullable:true})
    _count?: InstanceType<typeof UserMessageRoomCountAggregate>;
    @Field(() => UserMessageRoomMinAggregate, {nullable:true})
    _min?: InstanceType<typeof UserMessageRoomMinAggregate>;
    @Field(() => UserMessageRoomMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof UserMessageRoomMaxAggregate>;
}

@InputType()
export class UserMessageRoomListRelationFilter {
    @Field(() => UserMessageRoomWhereInput, {nullable:true})
    every?: InstanceType<typeof UserMessageRoomWhereInput>;
    @Field(() => UserMessageRoomWhereInput, {nullable:true})
    some?: InstanceType<typeof UserMessageRoomWhereInput>;
    @Field(() => UserMessageRoomWhereInput, {nullable:true})
    none?: InstanceType<typeof UserMessageRoomWhereInput>;
}

@InputType()
export class UserMessageRoomMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    userId?: true;
    @Field(() => Boolean, {nullable:true})
    messageRoomId?: true;
}

@ObjectType()
export class UserMessageRoomMaxAggregate {
    @Field(() => String, {nullable:true})
    userId?: string;
    @Field(() => String, {nullable:true})
    messageRoomId?: string;
}

@InputType()
export class UserMessageRoomMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    messageRoomId?: keyof typeof SortOrder;
}

@InputType()
export class UserMessageRoomMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    userId?: true;
    @Field(() => Boolean, {nullable:true})
    messageRoomId?: true;
}

@ObjectType()
export class UserMessageRoomMinAggregate {
    @Field(() => String, {nullable:true})
    userId?: string;
    @Field(() => String, {nullable:true})
    messageRoomId?: string;
}

@InputType()
export class UserMessageRoomMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    messageRoomId?: keyof typeof SortOrder;
}

@InputType()
export class UserMessageRoomOrderByRelationAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    _count?: keyof typeof SortOrder;
}

@InputType()
export class UserMessageRoomOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    messageRoomId?: keyof typeof SortOrder;
    @Field(() => UserMessageRoomCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof UserMessageRoomCountOrderByAggregateInput>;
    @Field(() => UserMessageRoomMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof UserMessageRoomMaxOrderByAggregateInput>;
    @Field(() => UserMessageRoomMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof UserMessageRoomMinOrderByAggregateInput>;
}

@InputType()
export class UserMessageRoomOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    messageRoomId?: keyof typeof SortOrder;
    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    user?: InstanceType<typeof UserOrderByWithRelationInput>;
    @Field(() => MessageRoomOrderByWithRelationInput, {nullable:true})
    messageRoom?: InstanceType<typeof MessageRoomOrderByWithRelationInput>;
}

@InputType()
export class UserMessageRoomScalarWhereWithAggregatesInput {
    @Field(() => [UserMessageRoomScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<UserMessageRoomScalarWhereWithAggregatesInput>;
    @Field(() => [UserMessageRoomScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<UserMessageRoomScalarWhereWithAggregatesInput>;
    @Field(() => [UserMessageRoomScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<UserMessageRoomScalarWhereWithAggregatesInput>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    userId?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    messageRoomId?: InstanceType<typeof StringWithAggregatesFilter>;
}

@InputType()
export class UserMessageRoomScalarWhereInput {
    @Field(() => [UserMessageRoomScalarWhereInput], {nullable:true})
    AND?: Array<UserMessageRoomScalarWhereInput>;
    @Field(() => [UserMessageRoomScalarWhereInput], {nullable:true})
    OR?: Array<UserMessageRoomScalarWhereInput>;
    @Field(() => [UserMessageRoomScalarWhereInput], {nullable:true})
    NOT?: Array<UserMessageRoomScalarWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    userId?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    messageRoomId?: InstanceType<typeof StringFilter>;
}

@InputType()
export class UserMessageRoomUncheckedCreateNestedManyWithoutMessageRoomInput {
    @Field(() => [UserMessageRoomCreateWithoutMessageRoomInput], {nullable:true})
    @Type(() => UserMessageRoomCreateWithoutMessageRoomInput)
    create?: Array<UserMessageRoomCreateWithoutMessageRoomInput>;
    @Field(() => [UserMessageRoomCreateOrConnectWithoutMessageRoomInput], {nullable:true})
    @Type(() => UserMessageRoomCreateOrConnectWithoutMessageRoomInput)
    connectOrCreate?: Array<UserMessageRoomCreateOrConnectWithoutMessageRoomInput>;
    @Field(() => UserMessageRoomCreateManyMessageRoomInputEnvelope, {nullable:true})
    @Type(() => UserMessageRoomCreateManyMessageRoomInputEnvelope)
    createMany?: InstanceType<typeof UserMessageRoomCreateManyMessageRoomInputEnvelope>;
    @Field(() => [UserMessageRoomWhereUniqueInput], {nullable:true})
    @Type(() => UserMessageRoomWhereUniqueInput)
    connect?: Array<UserMessageRoomWhereUniqueInput>;
}

@InputType()
export class UserMessageRoomUncheckedCreateNestedManyWithoutUserInput {
    @Field(() => [UserMessageRoomCreateWithoutUserInput], {nullable:true})
    @Type(() => UserMessageRoomCreateWithoutUserInput)
    create?: Array<UserMessageRoomCreateWithoutUserInput>;
    @Field(() => [UserMessageRoomCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => UserMessageRoomCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<UserMessageRoomCreateOrConnectWithoutUserInput>;
    @Field(() => UserMessageRoomCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => UserMessageRoomCreateManyUserInputEnvelope)
    createMany?: InstanceType<typeof UserMessageRoomCreateManyUserInputEnvelope>;
    @Field(() => [UserMessageRoomWhereUniqueInput], {nullable:true})
    @Type(() => UserMessageRoomWhereUniqueInput)
    connect?: Array<UserMessageRoomWhereUniqueInput>;
}

@InputType()
export class UserMessageRoomUncheckedCreateWithoutMessageRoomInput {
    @Field(() => String, {nullable:false})
    userId!: string;
}

@InputType()
export class UserMessageRoomUncheckedCreateWithoutUserInput {
    @Field(() => String, {nullable:false})
    messageRoomId!: string;
}

@InputType()
export class UserMessageRoomUncheckedCreateInput {
    @Field(() => String, {nullable:false})
    userId!: string;
    @Field(() => String, {nullable:false})
    messageRoomId!: string;
}

@InputType()
export class UserMessageRoomUncheckedUpdateManyWithoutMessageRoomNestedInput {
    @Field(() => [UserMessageRoomCreateWithoutMessageRoomInput], {nullable:true})
    @Type(() => UserMessageRoomCreateWithoutMessageRoomInput)
    create?: Array<UserMessageRoomCreateWithoutMessageRoomInput>;
    @Field(() => [UserMessageRoomCreateOrConnectWithoutMessageRoomInput], {nullable:true})
    @Type(() => UserMessageRoomCreateOrConnectWithoutMessageRoomInput)
    connectOrCreate?: Array<UserMessageRoomCreateOrConnectWithoutMessageRoomInput>;
    @Field(() => [UserMessageRoomUpsertWithWhereUniqueWithoutMessageRoomInput], {nullable:true})
    @Type(() => UserMessageRoomUpsertWithWhereUniqueWithoutMessageRoomInput)
    upsert?: Array<UserMessageRoomUpsertWithWhereUniqueWithoutMessageRoomInput>;
    @Field(() => UserMessageRoomCreateManyMessageRoomInputEnvelope, {nullable:true})
    @Type(() => UserMessageRoomCreateManyMessageRoomInputEnvelope)
    createMany?: InstanceType<typeof UserMessageRoomCreateManyMessageRoomInputEnvelope>;
    @Field(() => [UserMessageRoomWhereUniqueInput], {nullable:true})
    @Type(() => UserMessageRoomWhereUniqueInput)
    set?: Array<UserMessageRoomWhereUniqueInput>;
    @Field(() => [UserMessageRoomWhereUniqueInput], {nullable:true})
    @Type(() => UserMessageRoomWhereUniqueInput)
    disconnect?: Array<UserMessageRoomWhereUniqueInput>;
    @Field(() => [UserMessageRoomWhereUniqueInput], {nullable:true})
    @Type(() => UserMessageRoomWhereUniqueInput)
    delete?: Array<UserMessageRoomWhereUniqueInput>;
    @Field(() => [UserMessageRoomWhereUniqueInput], {nullable:true})
    @Type(() => UserMessageRoomWhereUniqueInput)
    connect?: Array<UserMessageRoomWhereUniqueInput>;
    @Field(() => [UserMessageRoomUpdateWithWhereUniqueWithoutMessageRoomInput], {nullable:true})
    @Type(() => UserMessageRoomUpdateWithWhereUniqueWithoutMessageRoomInput)
    update?: Array<UserMessageRoomUpdateWithWhereUniqueWithoutMessageRoomInput>;
    @Field(() => [UserMessageRoomUpdateManyWithWhereWithoutMessageRoomInput], {nullable:true})
    @Type(() => UserMessageRoomUpdateManyWithWhereWithoutMessageRoomInput)
    updateMany?: Array<UserMessageRoomUpdateManyWithWhereWithoutMessageRoomInput>;
    @Field(() => [UserMessageRoomScalarWhereInput], {nullable:true})
    @Type(() => UserMessageRoomScalarWhereInput)
    deleteMany?: Array<UserMessageRoomScalarWhereInput>;
}

@InputType()
export class UserMessageRoomUncheckedUpdateManyWithoutUserMessageRoomInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    messageRoomId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}

@InputType()
export class UserMessageRoomUncheckedUpdateManyWithoutUserNestedInput {
    @Field(() => [UserMessageRoomCreateWithoutUserInput], {nullable:true})
    @Type(() => UserMessageRoomCreateWithoutUserInput)
    create?: Array<UserMessageRoomCreateWithoutUserInput>;
    @Field(() => [UserMessageRoomCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => UserMessageRoomCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<UserMessageRoomCreateOrConnectWithoutUserInput>;
    @Field(() => [UserMessageRoomUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => UserMessageRoomUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<UserMessageRoomUpsertWithWhereUniqueWithoutUserInput>;
    @Field(() => UserMessageRoomCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => UserMessageRoomCreateManyUserInputEnvelope)
    createMany?: InstanceType<typeof UserMessageRoomCreateManyUserInputEnvelope>;
    @Field(() => [UserMessageRoomWhereUniqueInput], {nullable:true})
    @Type(() => UserMessageRoomWhereUniqueInput)
    set?: Array<UserMessageRoomWhereUniqueInput>;
    @Field(() => [UserMessageRoomWhereUniqueInput], {nullable:true})
    @Type(() => UserMessageRoomWhereUniqueInput)
    disconnect?: Array<UserMessageRoomWhereUniqueInput>;
    @Field(() => [UserMessageRoomWhereUniqueInput], {nullable:true})
    @Type(() => UserMessageRoomWhereUniqueInput)
    delete?: Array<UserMessageRoomWhereUniqueInput>;
    @Field(() => [UserMessageRoomWhereUniqueInput], {nullable:true})
    @Type(() => UserMessageRoomWhereUniqueInput)
    connect?: Array<UserMessageRoomWhereUniqueInput>;
    @Field(() => [UserMessageRoomUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => UserMessageRoomUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<UserMessageRoomUpdateWithWhereUniqueWithoutUserInput>;
    @Field(() => [UserMessageRoomUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => UserMessageRoomUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<UserMessageRoomUpdateManyWithWhereWithoutUserInput>;
    @Field(() => [UserMessageRoomScalarWhereInput], {nullable:true})
    @Type(() => UserMessageRoomScalarWhereInput)
    deleteMany?: Array<UserMessageRoomScalarWhereInput>;
}

@InputType()
export class UserMessageRoomUncheckedUpdateManyInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    userId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    messageRoomId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}

@InputType()
export class UserMessageRoomUncheckedUpdateWithoutMessageRoomInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    userId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}

@InputType()
export class UserMessageRoomUncheckedUpdateWithoutUserInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    messageRoomId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}

@InputType()
export class UserMessageRoomUncheckedUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    userId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    messageRoomId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}

@InputType()
export class UserMessageRoomUpdateManyWithWhereWithoutMessageRoomInput {
    @Field(() => UserMessageRoomScalarWhereInput, {nullable:false})
    @Type(() => UserMessageRoomScalarWhereInput)
    where!: InstanceType<typeof UserMessageRoomScalarWhereInput>;
    @Field(() => UserMessageRoomUncheckedUpdateManyWithoutUserMessageRoomInput, {nullable:false})
    @Type(() => UserMessageRoomUncheckedUpdateManyWithoutUserMessageRoomInput)
    data!: InstanceType<typeof UserMessageRoomUncheckedUpdateManyWithoutUserMessageRoomInput>;
}

@InputType()
export class UserMessageRoomUpdateManyWithWhereWithoutUserInput {
    @Field(() => UserMessageRoomScalarWhereInput, {nullable:false})
    @Type(() => UserMessageRoomScalarWhereInput)
    where!: InstanceType<typeof UserMessageRoomScalarWhereInput>;
    @Field(() => UserMessageRoomUncheckedUpdateManyWithoutUserMessageRoomInput, {nullable:false})
    @Type(() => UserMessageRoomUncheckedUpdateManyWithoutUserMessageRoomInput)
    data!: InstanceType<typeof UserMessageRoomUncheckedUpdateManyWithoutUserMessageRoomInput>;
}

@InputType()
export class UserMessageRoomUpdateManyWithoutMessageRoomNestedInput {
    @Field(() => [UserMessageRoomCreateWithoutMessageRoomInput], {nullable:true})
    @Type(() => UserMessageRoomCreateWithoutMessageRoomInput)
    create?: Array<UserMessageRoomCreateWithoutMessageRoomInput>;
    @Field(() => [UserMessageRoomCreateOrConnectWithoutMessageRoomInput], {nullable:true})
    @Type(() => UserMessageRoomCreateOrConnectWithoutMessageRoomInput)
    connectOrCreate?: Array<UserMessageRoomCreateOrConnectWithoutMessageRoomInput>;
    @Field(() => [UserMessageRoomUpsertWithWhereUniqueWithoutMessageRoomInput], {nullable:true})
    @Type(() => UserMessageRoomUpsertWithWhereUniqueWithoutMessageRoomInput)
    upsert?: Array<UserMessageRoomUpsertWithWhereUniqueWithoutMessageRoomInput>;
    @Field(() => UserMessageRoomCreateManyMessageRoomInputEnvelope, {nullable:true})
    @Type(() => UserMessageRoomCreateManyMessageRoomInputEnvelope)
    createMany?: InstanceType<typeof UserMessageRoomCreateManyMessageRoomInputEnvelope>;
    @Field(() => [UserMessageRoomWhereUniqueInput], {nullable:true})
    @Type(() => UserMessageRoomWhereUniqueInput)
    set?: Array<UserMessageRoomWhereUniqueInput>;
    @Field(() => [UserMessageRoomWhereUniqueInput], {nullable:true})
    @Type(() => UserMessageRoomWhereUniqueInput)
    disconnect?: Array<UserMessageRoomWhereUniqueInput>;
    @Field(() => [UserMessageRoomWhereUniqueInput], {nullable:true})
    @Type(() => UserMessageRoomWhereUniqueInput)
    delete?: Array<UserMessageRoomWhereUniqueInput>;
    @Field(() => [UserMessageRoomWhereUniqueInput], {nullable:true})
    @Type(() => UserMessageRoomWhereUniqueInput)
    connect?: Array<UserMessageRoomWhereUniqueInput>;
    @Field(() => [UserMessageRoomUpdateWithWhereUniqueWithoutMessageRoomInput], {nullable:true})
    @Type(() => UserMessageRoomUpdateWithWhereUniqueWithoutMessageRoomInput)
    update?: Array<UserMessageRoomUpdateWithWhereUniqueWithoutMessageRoomInput>;
    @Field(() => [UserMessageRoomUpdateManyWithWhereWithoutMessageRoomInput], {nullable:true})
    @Type(() => UserMessageRoomUpdateManyWithWhereWithoutMessageRoomInput)
    updateMany?: Array<UserMessageRoomUpdateManyWithWhereWithoutMessageRoomInput>;
    @Field(() => [UserMessageRoomScalarWhereInput], {nullable:true})
    @Type(() => UserMessageRoomScalarWhereInput)
    deleteMany?: Array<UserMessageRoomScalarWhereInput>;
}

@InputType()
export class UserMessageRoomUpdateManyWithoutUserNestedInput {
    @Field(() => [UserMessageRoomCreateWithoutUserInput], {nullable:true})
    @Type(() => UserMessageRoomCreateWithoutUserInput)
    create?: Array<UserMessageRoomCreateWithoutUserInput>;
    @Field(() => [UserMessageRoomCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => UserMessageRoomCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<UserMessageRoomCreateOrConnectWithoutUserInput>;
    @Field(() => [UserMessageRoomUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => UserMessageRoomUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<UserMessageRoomUpsertWithWhereUniqueWithoutUserInput>;
    @Field(() => UserMessageRoomCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => UserMessageRoomCreateManyUserInputEnvelope)
    createMany?: InstanceType<typeof UserMessageRoomCreateManyUserInputEnvelope>;
    @Field(() => [UserMessageRoomWhereUniqueInput], {nullable:true})
    @Type(() => UserMessageRoomWhereUniqueInput)
    set?: Array<UserMessageRoomWhereUniqueInput>;
    @Field(() => [UserMessageRoomWhereUniqueInput], {nullable:true})
    @Type(() => UserMessageRoomWhereUniqueInput)
    disconnect?: Array<UserMessageRoomWhereUniqueInput>;
    @Field(() => [UserMessageRoomWhereUniqueInput], {nullable:true})
    @Type(() => UserMessageRoomWhereUniqueInput)
    delete?: Array<UserMessageRoomWhereUniqueInput>;
    @Field(() => [UserMessageRoomWhereUniqueInput], {nullable:true})
    @Type(() => UserMessageRoomWhereUniqueInput)
    connect?: Array<UserMessageRoomWhereUniqueInput>;
    @Field(() => [UserMessageRoomUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => UserMessageRoomUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<UserMessageRoomUpdateWithWhereUniqueWithoutUserInput>;
    @Field(() => [UserMessageRoomUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => UserMessageRoomUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<UserMessageRoomUpdateManyWithWhereWithoutUserInput>;
    @Field(() => [UserMessageRoomScalarWhereInput], {nullable:true})
    @Type(() => UserMessageRoomScalarWhereInput)
    deleteMany?: Array<UserMessageRoomScalarWhereInput>;
}

@InputType()
export class UserMessageRoomUpdateWithWhereUniqueWithoutMessageRoomInput {
    @Field(() => UserMessageRoomWhereUniqueInput, {nullable:false})
    @Type(() => UserMessageRoomWhereUniqueInput)
    where!: InstanceType<typeof UserMessageRoomWhereUniqueInput>;
    @Field(() => UserMessageRoomUpdateWithoutMessageRoomInput, {nullable:false})
    @Type(() => UserMessageRoomUpdateWithoutMessageRoomInput)
    data!: InstanceType<typeof UserMessageRoomUpdateWithoutMessageRoomInput>;
}

@InputType()
export class UserMessageRoomUpdateWithWhereUniqueWithoutUserInput {
    @Field(() => UserMessageRoomWhereUniqueInput, {nullable:false})
    @Type(() => UserMessageRoomWhereUniqueInput)
    where!: InstanceType<typeof UserMessageRoomWhereUniqueInput>;
    @Field(() => UserMessageRoomUpdateWithoutUserInput, {nullable:false})
    @Type(() => UserMessageRoomUpdateWithoutUserInput)
    data!: InstanceType<typeof UserMessageRoomUpdateWithoutUserInput>;
}

@InputType()
export class UserMessageRoomUpdateWithoutMessageRoomInput {
    @Field(() => UserUpdateOneRequiredWithoutUserMessageRoomNestedInput, {nullable:true})
    user?: InstanceType<typeof UserUpdateOneRequiredWithoutUserMessageRoomNestedInput>;
}

@InputType()
export class UserMessageRoomUpdateWithoutUserInput {
    @Field(() => MessageRoomUpdateOneRequiredWithoutUserMessageRoomNestedInput, {nullable:true})
    messageRoom?: InstanceType<typeof MessageRoomUpdateOneRequiredWithoutUserMessageRoomNestedInput>;
}

@InputType()
export class UserMessageRoomUpdateInput {
    @Field(() => UserUpdateOneRequiredWithoutUserMessageRoomNestedInput, {nullable:true})
    user?: InstanceType<typeof UserUpdateOneRequiredWithoutUserMessageRoomNestedInput>;
    @Field(() => MessageRoomUpdateOneRequiredWithoutUserMessageRoomNestedInput, {nullable:true})
    messageRoom?: InstanceType<typeof MessageRoomUpdateOneRequiredWithoutUserMessageRoomNestedInput>;
}

@InputType()
export class UserMessageRoomUpsertWithWhereUniqueWithoutMessageRoomInput {
    @Field(() => UserMessageRoomWhereUniqueInput, {nullable:false})
    @Type(() => UserMessageRoomWhereUniqueInput)
    where!: InstanceType<typeof UserMessageRoomWhereUniqueInput>;
    @Field(() => UserMessageRoomUpdateWithoutMessageRoomInput, {nullable:false})
    @Type(() => UserMessageRoomUpdateWithoutMessageRoomInput)
    update!: InstanceType<typeof UserMessageRoomUpdateWithoutMessageRoomInput>;
    @Field(() => UserMessageRoomCreateWithoutMessageRoomInput, {nullable:false})
    @Type(() => UserMessageRoomCreateWithoutMessageRoomInput)
    create!: InstanceType<typeof UserMessageRoomCreateWithoutMessageRoomInput>;
}

@InputType()
export class UserMessageRoomUpsertWithWhereUniqueWithoutUserInput {
    @Field(() => UserMessageRoomWhereUniqueInput, {nullable:false})
    @Type(() => UserMessageRoomWhereUniqueInput)
    where!: InstanceType<typeof UserMessageRoomWhereUniqueInput>;
    @Field(() => UserMessageRoomUpdateWithoutUserInput, {nullable:false})
    @Type(() => UserMessageRoomUpdateWithoutUserInput)
    update!: InstanceType<typeof UserMessageRoomUpdateWithoutUserInput>;
    @Field(() => UserMessageRoomCreateWithoutUserInput, {nullable:false})
    @Type(() => UserMessageRoomCreateWithoutUserInput)
    create!: InstanceType<typeof UserMessageRoomCreateWithoutUserInput>;
}

@InputType()
export class UserMessageRoomUserIdMessageRoomIdCompoundUniqueInput {
    @Field(() => String, {nullable:false})
    userId!: string;
    @Field(() => String, {nullable:false})
    messageRoomId!: string;
}

@InputType()
export class UserMessageRoomWhereUniqueInput {
    @Field(() => UserMessageRoomUserIdMessageRoomIdCompoundUniqueInput, {nullable:true})
    userId_messageRoomId?: InstanceType<typeof UserMessageRoomUserIdMessageRoomIdCompoundUniqueInput>;
}

@InputType()
export class UserMessageRoomWhereInput {
    @Field(() => [UserMessageRoomWhereInput], {nullable:true})
    AND?: Array<UserMessageRoomWhereInput>;
    @Field(() => [UserMessageRoomWhereInput], {nullable:true})
    OR?: Array<UserMessageRoomWhereInput>;
    @Field(() => [UserMessageRoomWhereInput], {nullable:true})
    NOT?: Array<UserMessageRoomWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    userId?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    messageRoomId?: InstanceType<typeof StringFilter>;
    @Field(() => UserRelationFilter, {nullable:true})
    user?: InstanceType<typeof UserRelationFilter>;
    @Field(() => MessageRoomRelationFilter, {nullable:true})
    messageRoom?: InstanceType<typeof MessageRoomRelationFilter>;
}

@ObjectType()
export class UserMessageRoom {
    @Field(() => String, {nullable:false})
    userId!: string;
    @Field(() => String, {nullable:false})
    messageRoomId!: string;
    @Field(() => User, {nullable:false})
    user?: InstanceType<typeof User>;
    @Field(() => MessageRoom, {nullable:false})
    messageRoom?: InstanceType<typeof MessageRoom>;
}

@ObjectType()
export class AggregateUserProject {
    @Field(() => UserProjectCountAggregate, {nullable:true})
    _count?: InstanceType<typeof UserProjectCountAggregate>;
    @Field(() => UserProjectMinAggregate, {nullable:true})
    _min?: InstanceType<typeof UserProjectMinAggregate>;
    @Field(() => UserProjectMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof UserProjectMaxAggregate>;
}

@ArgsType()
export class FindFirstUserProjectOrThrowArgs {
    @Field(() => UserProjectWhereInput, {nullable:true})
    @Type(() => UserProjectWhereInput)
    where?: InstanceType<typeof UserProjectWhereInput>;
    @Field(() => [UserProjectOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UserProjectOrderByWithRelationInput>;
    @Field(() => UserProjectWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof UserProjectWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [UserProjectScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof UserProjectScalarFieldEnum>;
}

@ArgsType()
export class FindManyUserProjectArgs {
    @Field(() => UserProjectWhereInput, {nullable:true})
    @Type(() => UserProjectWhereInput)
    where?: InstanceType<typeof UserProjectWhereInput>;
    @Field(() => [UserProjectOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UserProjectOrderByWithRelationInput>;
    @Field(() => UserProjectWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof UserProjectWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [UserProjectScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof UserProjectScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueUserProjectOrThrowArgs {
    @Field(() => UserProjectWhereUniqueInput, {nullable:false})
    @Type(() => UserProjectWhereUniqueInput)
    where!: InstanceType<typeof UserProjectWhereUniqueInput>;
}

@InputType()
export class UserProjectCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    projectId?: true;
    @Field(() => Boolean, {nullable:true})
    userId?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class UserProjectCountAggregate {
    @Field(() => Int, {nullable:false})
    projectId!: number;
    @Field(() => Int, {nullable:false})
    userId!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class UserProjectCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    projectId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;
}

@InputType()
export class UserProjectCreateManyProjectInputEnvelope {
    @Field(() => [UserProjectCreateManyProjectInput], {nullable:false})
    @Type(() => UserProjectCreateManyProjectInput)
    data!: Array<UserProjectCreateManyProjectInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@InputType()
export class UserProjectCreateManyProjectInput {
    @Field(() => String, {nullable:false})
    userId!: string;
}

@InputType()
export class UserProjectCreateManyUserInputEnvelope {
    @Field(() => [UserProjectCreateManyUserInput], {nullable:false})
    @Type(() => UserProjectCreateManyUserInput)
    data!: Array<UserProjectCreateManyUserInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@InputType()
export class UserProjectCreateManyUserInput {
    @Field(() => String, {nullable:false})
    projectId!: string;
}

@InputType()
export class UserProjectCreateManyInput {
    @Field(() => String, {nullable:false})
    projectId!: string;
    @Field(() => String, {nullable:false})
    userId!: string;
}

@InputType()
export class UserProjectCreateNestedManyWithoutProjectInput {
    @Field(() => [UserProjectCreateWithoutProjectInput], {nullable:true})
    @Type(() => UserProjectCreateWithoutProjectInput)
    create?: Array<UserProjectCreateWithoutProjectInput>;
    @Field(() => [UserProjectCreateOrConnectWithoutProjectInput], {nullable:true})
    @Type(() => UserProjectCreateOrConnectWithoutProjectInput)
    connectOrCreate?: Array<UserProjectCreateOrConnectWithoutProjectInput>;
    @Field(() => UserProjectCreateManyProjectInputEnvelope, {nullable:true})
    @Type(() => UserProjectCreateManyProjectInputEnvelope)
    createMany?: InstanceType<typeof UserProjectCreateManyProjectInputEnvelope>;
    @Field(() => [UserProjectWhereUniqueInput], {nullable:true})
    @Type(() => UserProjectWhereUniqueInput)
    connect?: Array<UserProjectWhereUniqueInput>;
}

@InputType()
export class UserProjectCreateNestedManyWithoutUserInput {
    @Field(() => [UserProjectCreateWithoutUserInput], {nullable:true})
    @Type(() => UserProjectCreateWithoutUserInput)
    create?: Array<UserProjectCreateWithoutUserInput>;
    @Field(() => [UserProjectCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => UserProjectCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<UserProjectCreateOrConnectWithoutUserInput>;
    @Field(() => UserProjectCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => UserProjectCreateManyUserInputEnvelope)
    createMany?: InstanceType<typeof UserProjectCreateManyUserInputEnvelope>;
    @Field(() => [UserProjectWhereUniqueInput], {nullable:true})
    @Type(() => UserProjectWhereUniqueInput)
    connect?: Array<UserProjectWhereUniqueInput>;
}

@InputType()
export class UserProjectCreateOrConnectWithoutProjectInput {
    @Field(() => UserProjectWhereUniqueInput, {nullable:false})
    @Type(() => UserProjectWhereUniqueInput)
    where!: InstanceType<typeof UserProjectWhereUniqueInput>;
    @Field(() => UserProjectCreateWithoutProjectInput, {nullable:false})
    @Type(() => UserProjectCreateWithoutProjectInput)
    create!: InstanceType<typeof UserProjectCreateWithoutProjectInput>;
}

@InputType()
export class UserProjectCreateOrConnectWithoutUserInput {
    @Field(() => UserProjectWhereUniqueInput, {nullable:false})
    @Type(() => UserProjectWhereUniqueInput)
    where!: InstanceType<typeof UserProjectWhereUniqueInput>;
    @Field(() => UserProjectCreateWithoutUserInput, {nullable:false})
    @Type(() => UserProjectCreateWithoutUserInput)
    create!: InstanceType<typeof UserProjectCreateWithoutUserInput>;
}

@InputType()
export class UserProjectCreateWithoutProjectInput {
    @Field(() => UserCreateNestedOneWithoutUserProjectInput, {nullable:false})
    user!: InstanceType<typeof UserCreateNestedOneWithoutUserProjectInput>;
}

@InputType()
export class UserProjectCreateWithoutUserInput {
    @Field(() => ProjectCreateNestedOneWithoutUserProjectInput, {nullable:false})
    project!: InstanceType<typeof ProjectCreateNestedOneWithoutUserProjectInput>;
}

@InputType()
export class UserProjectCreateInput {
    @Field(() => ProjectCreateNestedOneWithoutUserProjectInput, {nullable:false})
    project!: InstanceType<typeof ProjectCreateNestedOneWithoutUserProjectInput>;
    @Field(() => UserCreateNestedOneWithoutUserProjectInput, {nullable:false})
    user!: InstanceType<typeof UserCreateNestedOneWithoutUserProjectInput>;
}

@ArgsType()
export class UserProjectGroupByArgs {
    @Field(() => UserProjectWhereInput, {nullable:true})
    @Type(() => UserProjectWhereInput)
    where?: InstanceType<typeof UserProjectWhereInput>;
    @Field(() => [UserProjectOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<UserProjectOrderByWithAggregationInput>;
    @Field(() => [UserProjectScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof UserProjectScalarFieldEnum>;
    @Field(() => UserProjectScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof UserProjectScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => UserProjectCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof UserProjectCountAggregateInput>;
    @Field(() => UserProjectMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof UserProjectMinAggregateInput>;
    @Field(() => UserProjectMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof UserProjectMaxAggregateInput>;
}

@ObjectType()
export class UserProjectGroupBy {
    @Field(() => String, {nullable:false})
    projectId!: string;
    @Field(() => String, {nullable:false})
    userId!: string;
    @Field(() => UserProjectCountAggregate, {nullable:true})
    _count?: InstanceType<typeof UserProjectCountAggregate>;
    @Field(() => UserProjectMinAggregate, {nullable:true})
    _min?: InstanceType<typeof UserProjectMinAggregate>;
    @Field(() => UserProjectMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof UserProjectMaxAggregate>;
}

@InputType()
export class UserProjectListRelationFilter {
    @Field(() => UserProjectWhereInput, {nullable:true})
    every?: InstanceType<typeof UserProjectWhereInput>;
    @Field(() => UserProjectWhereInput, {nullable:true})
    some?: InstanceType<typeof UserProjectWhereInput>;
    @Field(() => UserProjectWhereInput, {nullable:true})
    none?: InstanceType<typeof UserProjectWhereInput>;
}

@InputType()
export class UserProjectMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    projectId?: true;
    @Field(() => Boolean, {nullable:true})
    userId?: true;
}

@ObjectType()
export class UserProjectMaxAggregate {
    @Field(() => String, {nullable:true})
    projectId?: string;
    @Field(() => String, {nullable:true})
    userId?: string;
}

@InputType()
export class UserProjectMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    projectId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;
}

@InputType()
export class UserProjectMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    projectId?: true;
    @Field(() => Boolean, {nullable:true})
    userId?: true;
}

@ObjectType()
export class UserProjectMinAggregate {
    @Field(() => String, {nullable:true})
    projectId?: string;
    @Field(() => String, {nullable:true})
    userId?: string;
}

@InputType()
export class UserProjectMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    projectId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;
}

@InputType()
export class UserProjectOrderByRelationAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    _count?: keyof typeof SortOrder;
}

@InputType()
export class UserProjectOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    projectId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;
    @Field(() => UserProjectCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof UserProjectCountOrderByAggregateInput>;
    @Field(() => UserProjectMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof UserProjectMaxOrderByAggregateInput>;
    @Field(() => UserProjectMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof UserProjectMinOrderByAggregateInput>;
}

@InputType()
export class UserProjectOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    projectId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;
    @Field(() => ProjectOrderByWithRelationInput, {nullable:true})
    project?: InstanceType<typeof ProjectOrderByWithRelationInput>;
    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    user?: InstanceType<typeof UserOrderByWithRelationInput>;
}

@InputType()
export class UserProjectProjectIdUserIdCompoundUniqueInput {
    @Field(() => String, {nullable:false})
    projectId!: string;
    @Field(() => String, {nullable:false})
    userId!: string;
}

@InputType()
export class UserProjectScalarWhereWithAggregatesInput {
    @Field(() => [UserProjectScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<UserProjectScalarWhereWithAggregatesInput>;
    @Field(() => [UserProjectScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<UserProjectScalarWhereWithAggregatesInput>;
    @Field(() => [UserProjectScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<UserProjectScalarWhereWithAggregatesInput>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    projectId?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    userId?: InstanceType<typeof StringWithAggregatesFilter>;
}

@InputType()
export class UserProjectScalarWhereInput {
    @Field(() => [UserProjectScalarWhereInput], {nullable:true})
    AND?: Array<UserProjectScalarWhereInput>;
    @Field(() => [UserProjectScalarWhereInput], {nullable:true})
    OR?: Array<UserProjectScalarWhereInput>;
    @Field(() => [UserProjectScalarWhereInput], {nullable:true})
    NOT?: Array<UserProjectScalarWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    projectId?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    userId?: InstanceType<typeof StringFilter>;
}

@InputType()
export class UserProjectUncheckedCreateNestedManyWithoutProjectInput {
    @Field(() => [UserProjectCreateWithoutProjectInput], {nullable:true})
    @Type(() => UserProjectCreateWithoutProjectInput)
    create?: Array<UserProjectCreateWithoutProjectInput>;
    @Field(() => [UserProjectCreateOrConnectWithoutProjectInput], {nullable:true})
    @Type(() => UserProjectCreateOrConnectWithoutProjectInput)
    connectOrCreate?: Array<UserProjectCreateOrConnectWithoutProjectInput>;
    @Field(() => UserProjectCreateManyProjectInputEnvelope, {nullable:true})
    @Type(() => UserProjectCreateManyProjectInputEnvelope)
    createMany?: InstanceType<typeof UserProjectCreateManyProjectInputEnvelope>;
    @Field(() => [UserProjectWhereUniqueInput], {nullable:true})
    @Type(() => UserProjectWhereUniqueInput)
    connect?: Array<UserProjectWhereUniqueInput>;
}

@InputType()
export class UserProjectUncheckedCreateNestedManyWithoutUserInput {
    @Field(() => [UserProjectCreateWithoutUserInput], {nullable:true})
    @Type(() => UserProjectCreateWithoutUserInput)
    create?: Array<UserProjectCreateWithoutUserInput>;
    @Field(() => [UserProjectCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => UserProjectCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<UserProjectCreateOrConnectWithoutUserInput>;
    @Field(() => UserProjectCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => UserProjectCreateManyUserInputEnvelope)
    createMany?: InstanceType<typeof UserProjectCreateManyUserInputEnvelope>;
    @Field(() => [UserProjectWhereUniqueInput], {nullable:true})
    @Type(() => UserProjectWhereUniqueInput)
    connect?: Array<UserProjectWhereUniqueInput>;
}

@InputType()
export class UserProjectUncheckedCreateWithoutProjectInput {
    @Field(() => String, {nullable:false})
    userId!: string;
}

@InputType()
export class UserProjectUncheckedCreateWithoutUserInput {
    @Field(() => String, {nullable:false})
    projectId!: string;
}

@InputType()
export class UserProjectUncheckedCreateInput {
    @Field(() => String, {nullable:false})
    projectId!: string;
    @Field(() => String, {nullable:false})
    userId!: string;
}

@InputType()
export class UserProjectUncheckedUpdateManyWithoutProjectNestedInput {
    @Field(() => [UserProjectCreateWithoutProjectInput], {nullable:true})
    @Type(() => UserProjectCreateWithoutProjectInput)
    create?: Array<UserProjectCreateWithoutProjectInput>;
    @Field(() => [UserProjectCreateOrConnectWithoutProjectInput], {nullable:true})
    @Type(() => UserProjectCreateOrConnectWithoutProjectInput)
    connectOrCreate?: Array<UserProjectCreateOrConnectWithoutProjectInput>;
    @Field(() => [UserProjectUpsertWithWhereUniqueWithoutProjectInput], {nullable:true})
    @Type(() => UserProjectUpsertWithWhereUniqueWithoutProjectInput)
    upsert?: Array<UserProjectUpsertWithWhereUniqueWithoutProjectInput>;
    @Field(() => UserProjectCreateManyProjectInputEnvelope, {nullable:true})
    @Type(() => UserProjectCreateManyProjectInputEnvelope)
    createMany?: InstanceType<typeof UserProjectCreateManyProjectInputEnvelope>;
    @Field(() => [UserProjectWhereUniqueInput], {nullable:true})
    @Type(() => UserProjectWhereUniqueInput)
    set?: Array<UserProjectWhereUniqueInput>;
    @Field(() => [UserProjectWhereUniqueInput], {nullable:true})
    @Type(() => UserProjectWhereUniqueInput)
    disconnect?: Array<UserProjectWhereUniqueInput>;
    @Field(() => [UserProjectWhereUniqueInput], {nullable:true})
    @Type(() => UserProjectWhereUniqueInput)
    delete?: Array<UserProjectWhereUniqueInput>;
    @Field(() => [UserProjectWhereUniqueInput], {nullable:true})
    @Type(() => UserProjectWhereUniqueInput)
    connect?: Array<UserProjectWhereUniqueInput>;
    @Field(() => [UserProjectUpdateWithWhereUniqueWithoutProjectInput], {nullable:true})
    @Type(() => UserProjectUpdateWithWhereUniqueWithoutProjectInput)
    update?: Array<UserProjectUpdateWithWhereUniqueWithoutProjectInput>;
    @Field(() => [UserProjectUpdateManyWithWhereWithoutProjectInput], {nullable:true})
    @Type(() => UserProjectUpdateManyWithWhereWithoutProjectInput)
    updateMany?: Array<UserProjectUpdateManyWithWhereWithoutProjectInput>;
    @Field(() => [UserProjectScalarWhereInput], {nullable:true})
    @Type(() => UserProjectScalarWhereInput)
    deleteMany?: Array<UserProjectScalarWhereInput>;
}

@InputType()
export class UserProjectUncheckedUpdateManyWithoutUserNestedInput {
    @Field(() => [UserProjectCreateWithoutUserInput], {nullable:true})
    @Type(() => UserProjectCreateWithoutUserInput)
    create?: Array<UserProjectCreateWithoutUserInput>;
    @Field(() => [UserProjectCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => UserProjectCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<UserProjectCreateOrConnectWithoutUserInput>;
    @Field(() => [UserProjectUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => UserProjectUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<UserProjectUpsertWithWhereUniqueWithoutUserInput>;
    @Field(() => UserProjectCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => UserProjectCreateManyUserInputEnvelope)
    createMany?: InstanceType<typeof UserProjectCreateManyUserInputEnvelope>;
    @Field(() => [UserProjectWhereUniqueInput], {nullable:true})
    @Type(() => UserProjectWhereUniqueInput)
    set?: Array<UserProjectWhereUniqueInput>;
    @Field(() => [UserProjectWhereUniqueInput], {nullable:true})
    @Type(() => UserProjectWhereUniqueInput)
    disconnect?: Array<UserProjectWhereUniqueInput>;
    @Field(() => [UserProjectWhereUniqueInput], {nullable:true})
    @Type(() => UserProjectWhereUniqueInput)
    delete?: Array<UserProjectWhereUniqueInput>;
    @Field(() => [UserProjectWhereUniqueInput], {nullable:true})
    @Type(() => UserProjectWhereUniqueInput)
    connect?: Array<UserProjectWhereUniqueInput>;
    @Field(() => [UserProjectUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => UserProjectUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<UserProjectUpdateWithWhereUniqueWithoutUserInput>;
    @Field(() => [UserProjectUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => UserProjectUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<UserProjectUpdateManyWithWhereWithoutUserInput>;
    @Field(() => [UserProjectScalarWhereInput], {nullable:true})
    @Type(() => UserProjectScalarWhereInput)
    deleteMany?: Array<UserProjectScalarWhereInput>;
}

@InputType()
export class UserProjectUncheckedUpdateManyWithoutUserProjectInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    projectId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}

@InputType()
export class UserProjectUncheckedUpdateManyInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    projectId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    userId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}

@InputType()
export class UserProjectUncheckedUpdateWithoutProjectInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    userId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}

@InputType()
export class UserProjectUncheckedUpdateWithoutUserInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    projectId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}

@InputType()
export class UserProjectUncheckedUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    projectId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    userId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}

@InputType()
export class UserProjectUpdateManyWithWhereWithoutProjectInput {
    @Field(() => UserProjectScalarWhereInput, {nullable:false})
    @Type(() => UserProjectScalarWhereInput)
    where!: InstanceType<typeof UserProjectScalarWhereInput>;
    @Field(() => UserProjectUncheckedUpdateManyWithoutUserProjectInput, {nullable:false})
    @Type(() => UserProjectUncheckedUpdateManyWithoutUserProjectInput)
    data!: InstanceType<typeof UserProjectUncheckedUpdateManyWithoutUserProjectInput>;
}

@InputType()
export class UserProjectUpdateManyWithWhereWithoutUserInput {
    @Field(() => UserProjectScalarWhereInput, {nullable:false})
    @Type(() => UserProjectScalarWhereInput)
    where!: InstanceType<typeof UserProjectScalarWhereInput>;
    @Field(() => UserProjectUncheckedUpdateManyWithoutUserProjectInput, {nullable:false})
    @Type(() => UserProjectUncheckedUpdateManyWithoutUserProjectInput)
    data!: InstanceType<typeof UserProjectUncheckedUpdateManyWithoutUserProjectInput>;
}

@InputType()
export class UserProjectUpdateManyWithoutProjectNestedInput {
    @Field(() => [UserProjectCreateWithoutProjectInput], {nullable:true})
    @Type(() => UserProjectCreateWithoutProjectInput)
    create?: Array<UserProjectCreateWithoutProjectInput>;
    @Field(() => [UserProjectCreateOrConnectWithoutProjectInput], {nullable:true})
    @Type(() => UserProjectCreateOrConnectWithoutProjectInput)
    connectOrCreate?: Array<UserProjectCreateOrConnectWithoutProjectInput>;
    @Field(() => [UserProjectUpsertWithWhereUniqueWithoutProjectInput], {nullable:true})
    @Type(() => UserProjectUpsertWithWhereUniqueWithoutProjectInput)
    upsert?: Array<UserProjectUpsertWithWhereUniqueWithoutProjectInput>;
    @Field(() => UserProjectCreateManyProjectInputEnvelope, {nullable:true})
    @Type(() => UserProjectCreateManyProjectInputEnvelope)
    createMany?: InstanceType<typeof UserProjectCreateManyProjectInputEnvelope>;
    @Field(() => [UserProjectWhereUniqueInput], {nullable:true})
    @Type(() => UserProjectWhereUniqueInput)
    set?: Array<UserProjectWhereUniqueInput>;
    @Field(() => [UserProjectWhereUniqueInput], {nullable:true})
    @Type(() => UserProjectWhereUniqueInput)
    disconnect?: Array<UserProjectWhereUniqueInput>;
    @Field(() => [UserProjectWhereUniqueInput], {nullable:true})
    @Type(() => UserProjectWhereUniqueInput)
    delete?: Array<UserProjectWhereUniqueInput>;
    @Field(() => [UserProjectWhereUniqueInput], {nullable:true})
    @Type(() => UserProjectWhereUniqueInput)
    connect?: Array<UserProjectWhereUniqueInput>;
    @Field(() => [UserProjectUpdateWithWhereUniqueWithoutProjectInput], {nullable:true})
    @Type(() => UserProjectUpdateWithWhereUniqueWithoutProjectInput)
    update?: Array<UserProjectUpdateWithWhereUniqueWithoutProjectInput>;
    @Field(() => [UserProjectUpdateManyWithWhereWithoutProjectInput], {nullable:true})
    @Type(() => UserProjectUpdateManyWithWhereWithoutProjectInput)
    updateMany?: Array<UserProjectUpdateManyWithWhereWithoutProjectInput>;
    @Field(() => [UserProjectScalarWhereInput], {nullable:true})
    @Type(() => UserProjectScalarWhereInput)
    deleteMany?: Array<UserProjectScalarWhereInput>;
}

@InputType()
export class UserProjectUpdateManyWithoutUserNestedInput {
    @Field(() => [UserProjectCreateWithoutUserInput], {nullable:true})
    @Type(() => UserProjectCreateWithoutUserInput)
    create?: Array<UserProjectCreateWithoutUserInput>;
    @Field(() => [UserProjectCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => UserProjectCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<UserProjectCreateOrConnectWithoutUserInput>;
    @Field(() => [UserProjectUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => UserProjectUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<UserProjectUpsertWithWhereUniqueWithoutUserInput>;
    @Field(() => UserProjectCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => UserProjectCreateManyUserInputEnvelope)
    createMany?: InstanceType<typeof UserProjectCreateManyUserInputEnvelope>;
    @Field(() => [UserProjectWhereUniqueInput], {nullable:true})
    @Type(() => UserProjectWhereUniqueInput)
    set?: Array<UserProjectWhereUniqueInput>;
    @Field(() => [UserProjectWhereUniqueInput], {nullable:true})
    @Type(() => UserProjectWhereUniqueInput)
    disconnect?: Array<UserProjectWhereUniqueInput>;
    @Field(() => [UserProjectWhereUniqueInput], {nullable:true})
    @Type(() => UserProjectWhereUniqueInput)
    delete?: Array<UserProjectWhereUniqueInput>;
    @Field(() => [UserProjectWhereUniqueInput], {nullable:true})
    @Type(() => UserProjectWhereUniqueInput)
    connect?: Array<UserProjectWhereUniqueInput>;
    @Field(() => [UserProjectUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => UserProjectUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<UserProjectUpdateWithWhereUniqueWithoutUserInput>;
    @Field(() => [UserProjectUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => UserProjectUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<UserProjectUpdateManyWithWhereWithoutUserInput>;
    @Field(() => [UserProjectScalarWhereInput], {nullable:true})
    @Type(() => UserProjectScalarWhereInput)
    deleteMany?: Array<UserProjectScalarWhereInput>;
}

@InputType()
export class UserProjectUpdateWithWhereUniqueWithoutProjectInput {
    @Field(() => UserProjectWhereUniqueInput, {nullable:false})
    @Type(() => UserProjectWhereUniqueInput)
    where!: InstanceType<typeof UserProjectWhereUniqueInput>;
    @Field(() => UserProjectUpdateWithoutProjectInput, {nullable:false})
    @Type(() => UserProjectUpdateWithoutProjectInput)
    data!: InstanceType<typeof UserProjectUpdateWithoutProjectInput>;
}

@InputType()
export class UserProjectUpdateWithWhereUniqueWithoutUserInput {
    @Field(() => UserProjectWhereUniqueInput, {nullable:false})
    @Type(() => UserProjectWhereUniqueInput)
    where!: InstanceType<typeof UserProjectWhereUniqueInput>;
    @Field(() => UserProjectUpdateWithoutUserInput, {nullable:false})
    @Type(() => UserProjectUpdateWithoutUserInput)
    data!: InstanceType<typeof UserProjectUpdateWithoutUserInput>;
}

@InputType()
export class UserProjectUpdateWithoutProjectInput {
    @Field(() => UserUpdateOneRequiredWithoutUserProjectNestedInput, {nullable:true})
    user?: InstanceType<typeof UserUpdateOneRequiredWithoutUserProjectNestedInput>;
}

@InputType()
export class UserProjectUpdateWithoutUserInput {
    @Field(() => ProjectUpdateOneRequiredWithoutUserProjectNestedInput, {nullable:true})
    project?: InstanceType<typeof ProjectUpdateOneRequiredWithoutUserProjectNestedInput>;
}

@InputType()
export class UserProjectUpdateInput {
    @Field(() => ProjectUpdateOneRequiredWithoutUserProjectNestedInput, {nullable:true})
    project?: InstanceType<typeof ProjectUpdateOneRequiredWithoutUserProjectNestedInput>;
    @Field(() => UserUpdateOneRequiredWithoutUserProjectNestedInput, {nullable:true})
    user?: InstanceType<typeof UserUpdateOneRequiredWithoutUserProjectNestedInput>;
}

@InputType()
export class UserProjectUpsertWithWhereUniqueWithoutProjectInput {
    @Field(() => UserProjectWhereUniqueInput, {nullable:false})
    @Type(() => UserProjectWhereUniqueInput)
    where!: InstanceType<typeof UserProjectWhereUniqueInput>;
    @Field(() => UserProjectUpdateWithoutProjectInput, {nullable:false})
    @Type(() => UserProjectUpdateWithoutProjectInput)
    update!: InstanceType<typeof UserProjectUpdateWithoutProjectInput>;
    @Field(() => UserProjectCreateWithoutProjectInput, {nullable:false})
    @Type(() => UserProjectCreateWithoutProjectInput)
    create!: InstanceType<typeof UserProjectCreateWithoutProjectInput>;
}

@InputType()
export class UserProjectUpsertWithWhereUniqueWithoutUserInput {
    @Field(() => UserProjectWhereUniqueInput, {nullable:false})
    @Type(() => UserProjectWhereUniqueInput)
    where!: InstanceType<typeof UserProjectWhereUniqueInput>;
    @Field(() => UserProjectUpdateWithoutUserInput, {nullable:false})
    @Type(() => UserProjectUpdateWithoutUserInput)
    update!: InstanceType<typeof UserProjectUpdateWithoutUserInput>;
    @Field(() => UserProjectCreateWithoutUserInput, {nullable:false})
    @Type(() => UserProjectCreateWithoutUserInput)
    create!: InstanceType<typeof UserProjectCreateWithoutUserInput>;
}

@InputType()
export class UserProjectWhereUniqueInput {
    @Field(() => UserProjectProjectIdUserIdCompoundUniqueInput, {nullable:true})
    projectId_userId?: InstanceType<typeof UserProjectProjectIdUserIdCompoundUniqueInput>;
}

@InputType()
export class UserProjectWhereInput {
    @Field(() => [UserProjectWhereInput], {nullable:true})
    AND?: Array<UserProjectWhereInput>;
    @Field(() => [UserProjectWhereInput], {nullable:true})
    OR?: Array<UserProjectWhereInput>;
    @Field(() => [UserProjectWhereInput], {nullable:true})
    NOT?: Array<UserProjectWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    projectId?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    userId?: InstanceType<typeof StringFilter>;
    @Field(() => ProjectRelationFilter, {nullable:true})
    project?: InstanceType<typeof ProjectRelationFilter>;
    @Field(() => UserRelationFilter, {nullable:true})
    user?: InstanceType<typeof UserRelationFilter>;
}

@ObjectType()
export class UserProject {
    @Field(() => String, {nullable:false})
    projectId!: string;
    @Field(() => String, {nullable:false})
    userId!: string;
    @Field(() => Project, {nullable:false})
    project?: InstanceType<typeof Project>;
    @Field(() => User, {nullable:false})
    user?: InstanceType<typeof User>;
}
