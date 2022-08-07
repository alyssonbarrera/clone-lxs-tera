import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  DateTime: any;
  Hex: any;
  Json: any;
  Long: any;
  RGBAHue: any;
  RGBATransparency: any;
  RichTextAST: any;
};

export type Aggregate = {
  __typename?: 'Aggregate';
  count: Scalars['Int'];
};

/** Asset system model */
export type Asset = Node & {
  __typename?: 'Asset';
  assetsConclusion: Array<Conclusion>;
  courseImageCourse: Array<Course>;
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Asset>;
  /** The file name */
  fileName: Scalars['String'];
  /** The file handle */
  handle: Scalars['String'];
  /** The height of the file */
  height?: Maybe<Scalars['Float']>;
  /** List of Asset versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  imageTeacher: Array<Teacher>;
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<Asset>;
  /** The mime type of the file */
  mimeType?: Maybe<Scalars['String']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** The file size */
  size?: Maybe<Scalars['Float']>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  /** Get the url for the asset with provided transformations applied. */
  url: Scalars['String'];
  videoLesson: Array<Lesson>;
  /** The file width */
  width?: Maybe<Scalars['Float']>;
};


/** Asset system model */
export type AssetAssetsConclusionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<ConclusionOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ConclusionWhereInput>;
};


/** Asset system model */
export type AssetCourseImageCourseArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<CourseOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CourseWhereInput>;
};


/** Asset system model */
export type AssetCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Asset system model */
export type AssetDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


/** Asset system model */
export type AssetHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


/** Asset system model */
export type AssetImageTeacherArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<TeacherOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TeacherWhereInput>;
};


/** Asset system model */
export type AssetLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean'];
  locales?: Array<Locale>;
};


/** Asset system model */
export type AssetPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetPublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Asset system model */
export type AssetScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


/** Asset system model */
export type AssetUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Asset system model */
export type AssetUrlArgs = {
  transformation?: InputMaybe<AssetTransformationInput>;
};


/** Asset system model */
export type AssetVideoLessonArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<LessonOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<LessonWhereInput>;
};

export type AssetConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: AssetWhereUniqueInput;
};

/** A connection to a list of items. */
export type AssetConnection = {
  __typename?: 'AssetConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<AssetEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type AssetCreateInput = {
  assetsConclusion?: InputMaybe<ConclusionCreateManyInlineInput>;
  courseImageCourse?: InputMaybe<CourseCreateManyInlineInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  fileName: Scalars['String'];
  handle: Scalars['String'];
  height?: InputMaybe<Scalars['Float']>;
  imageTeacher?: InputMaybe<TeacherCreateManyInlineInput>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<AssetCreateLocalizationsInput>;
  mimeType?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Float']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  videoLesson?: InputMaybe<LessonCreateManyInlineInput>;
  width?: InputMaybe<Scalars['Float']>;
};

export type AssetCreateLocalizationDataInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  fileName: Scalars['String'];
  handle: Scalars['String'];
  height?: InputMaybe<Scalars['Float']>;
  mimeType?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Float']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type AssetCreateLocalizationInput = {
  /** Localization input */
  data: AssetCreateLocalizationDataInput;
  locale: Locale;
};

export type AssetCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<AssetCreateLocalizationInput>>;
};

export type AssetCreateManyInlineInput = {
  /** Connect multiple existing Asset documents */
  connect?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Create and connect multiple existing Asset documents */
  create?: InputMaybe<Array<AssetCreateInput>>;
};

export type AssetCreateOneInlineInput = {
  /** Connect one existing Asset document */
  connect?: InputMaybe<AssetWhereUniqueInput>;
  /** Create and connect one Asset document */
  create?: InputMaybe<AssetCreateInput>;
};

/** An edge in a connection. */
export type AssetEdge = {
  __typename?: 'AssetEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Asset;
};

/** Identifies documents */
export type AssetManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  assetsConclusion_every?: InputMaybe<ConclusionWhereInput>;
  assetsConclusion_none?: InputMaybe<ConclusionWhereInput>;
  assetsConclusion_some?: InputMaybe<ConclusionWhereInput>;
  courseImageCourse_every?: InputMaybe<CourseWhereInput>;
  courseImageCourse_none?: InputMaybe<CourseWhereInput>;
  courseImageCourse_some?: InputMaybe<CourseWhereInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  imageTeacher_every?: InputMaybe<TeacherWhereInput>;
  imageTeacher_none?: InputMaybe<TeacherWhereInput>;
  imageTeacher_some?: InputMaybe<TeacherWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  videoLesson_every?: InputMaybe<LessonWhereInput>;
  videoLesson_none?: InputMaybe<LessonWhereInput>;
  videoLesson_some?: InputMaybe<LessonWhereInput>;
};

export enum AssetOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HandleAsc = 'handle_ASC',
  HandleDesc = 'handle_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  MimeTypeAsc = 'mimeType_ASC',
  MimeTypeDesc = 'mimeType_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC'
}

/** Transformations for Assets */
export type AssetTransformationInput = {
  document?: InputMaybe<DocumentTransformationInput>;
  image?: InputMaybe<ImageTransformationInput>;
  /** Pass true if you want to validate the passed transformation parameters */
  validateOptions?: InputMaybe<Scalars['Boolean']>;
};

export type AssetUpdateInput = {
  assetsConclusion?: InputMaybe<ConclusionUpdateManyInlineInput>;
  courseImageCourse?: InputMaybe<CourseUpdateManyInlineInput>;
  fileName?: InputMaybe<Scalars['String']>;
  handle?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Float']>;
  imageTeacher?: InputMaybe<TeacherUpdateManyInlineInput>;
  /** Manage document localizations */
  localizations?: InputMaybe<AssetUpdateLocalizationsInput>;
  mimeType?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Float']>;
  videoLesson?: InputMaybe<LessonUpdateManyInlineInput>;
  width?: InputMaybe<Scalars['Float']>;
};

export type AssetUpdateLocalizationDataInput = {
  fileName?: InputMaybe<Scalars['String']>;
  handle?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Float']>;
  mimeType?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Float']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type AssetUpdateLocalizationInput = {
  data: AssetUpdateLocalizationDataInput;
  locale: Locale;
};

export type AssetUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<AssetCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update?: InputMaybe<Array<AssetUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<AssetUpsertLocalizationInput>>;
};

export type AssetUpdateManyInlineInput = {
  /** Connect multiple existing Asset documents */
  connect?: InputMaybe<Array<AssetConnectInput>>;
  /** Create and connect multiple Asset documents */
  create?: InputMaybe<Array<AssetCreateInput>>;
  /** Delete multiple Asset documents */
  delete?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Disconnect multiple Asset documents */
  disconnect?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Asset documents */
  set?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Update multiple Asset documents */
  update?: InputMaybe<Array<AssetUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Asset documents */
  upsert?: InputMaybe<Array<AssetUpsertWithNestedWhereUniqueInput>>;
};

export type AssetUpdateManyInput = {
  fileName?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Float']>;
  /** Optional updates to localizations */
  localizations?: InputMaybe<AssetUpdateManyLocalizationsInput>;
  mimeType?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Float']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type AssetUpdateManyLocalizationDataInput = {
  fileName?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Float']>;
  mimeType?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Float']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type AssetUpdateManyLocalizationInput = {
  data: AssetUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type AssetUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: InputMaybe<Array<AssetUpdateManyLocalizationInput>>;
};

export type AssetUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: AssetUpdateManyInput;
  /** Document search */
  where: AssetWhereInput;
};

export type AssetUpdateOneInlineInput = {
  /** Connect existing Asset document */
  connect?: InputMaybe<AssetWhereUniqueInput>;
  /** Create and connect one Asset document */
  create?: InputMaybe<AssetCreateInput>;
  /** Delete currently connected Asset document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected Asset document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single Asset document */
  update?: InputMaybe<AssetUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Asset document */
  upsert?: InputMaybe<AssetUpsertWithNestedWhereUniqueInput>;
};

export type AssetUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: AssetUpdateInput;
  /** Unique document search */
  where: AssetWhereUniqueInput;
};

export type AssetUpsertInput = {
  /** Create document if it didn't exist */
  create: AssetCreateInput;
  /** Update document if it exists */
  update: AssetUpdateInput;
};

export type AssetUpsertLocalizationInput = {
  create: AssetCreateLocalizationDataInput;
  locale: Locale;
  update: AssetUpdateLocalizationDataInput;
};

export type AssetUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: AssetUpsertInput;
  /** Unique document search */
  where: AssetWhereUniqueInput;
};

/** Identifies documents */
export type AssetWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  assetsConclusion_every?: InputMaybe<ConclusionWhereInput>;
  assetsConclusion_none?: InputMaybe<ConclusionWhereInput>;
  assetsConclusion_some?: InputMaybe<ConclusionWhereInput>;
  courseImageCourse_every?: InputMaybe<CourseWhereInput>;
  courseImageCourse_none?: InputMaybe<CourseWhereInput>;
  courseImageCourse_some?: InputMaybe<CourseWhereInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  fileName?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  fileName_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  fileName_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  fileName_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  fileName_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  fileName_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  fileName_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  fileName_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  fileName_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  fileName_starts_with?: InputMaybe<Scalars['String']>;
  handle?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  handle_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  handle_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  handle_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  handle_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  handle_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  handle_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  handle_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  handle_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  handle_starts_with?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Float']>;
  /** All values greater than the given value. */
  height_gt?: InputMaybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  height_gte?: InputMaybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  height_in?: InputMaybe<Array<Scalars['Float']>>;
  /** All values less than the given value. */
  height_lt?: InputMaybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  height_lte?: InputMaybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  height_not?: InputMaybe<Scalars['Float']>;
  /** All values that are not contained in given list. */
  height_not_in?: InputMaybe<Array<Scalars['Float']>>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  imageTeacher_every?: InputMaybe<TeacherWhereInput>;
  imageTeacher_none?: InputMaybe<TeacherWhereInput>;
  imageTeacher_some?: InputMaybe<TeacherWhereInput>;
  mimeType?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  mimeType_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  mimeType_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  mimeType_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  mimeType_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  mimeType_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  mimeType_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  mimeType_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  mimeType_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  mimeType_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  size?: InputMaybe<Scalars['Float']>;
  /** All values greater than the given value. */
  size_gt?: InputMaybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  size_gte?: InputMaybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  size_in?: InputMaybe<Array<Scalars['Float']>>;
  /** All values less than the given value. */
  size_lt?: InputMaybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  size_lte?: InputMaybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  size_not?: InputMaybe<Scalars['Float']>;
  /** All values that are not contained in given list. */
  size_not_in?: InputMaybe<Array<Scalars['Float']>>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  videoLesson_every?: InputMaybe<LessonWhereInput>;
  videoLesson_none?: InputMaybe<LessonWhereInput>;
  videoLesson_some?: InputMaybe<LessonWhereInput>;
  width?: InputMaybe<Scalars['Float']>;
  /** All values greater than the given value. */
  width_gt?: InputMaybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  width_gte?: InputMaybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  width_in?: InputMaybe<Array<Scalars['Float']>>;
  /** All values less than the given value. */
  width_lt?: InputMaybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  width_lte?: InputMaybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  width_not?: InputMaybe<Scalars['Float']>;
  /** All values that are not contained in given list. */
  width_not_in?: InputMaybe<Array<Scalars['Float']>>;
};

/** References Asset record uniquely */
export type AssetWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type BatchPayload = {
  __typename?: 'BatchPayload';
  /** The number of nodes that have been affected by the Batch operation. */
  count: Scalars['Long'];
};

/** Conteúdo de capítulo de aulas assíncronas */
export type Chapter = Node & {
  __typename?: 'Chapter';
  conclusion?: Maybe<Conclusion>;
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Chapter>;
  /** Duração do capítulo */
  duration?: Maybe<Scalars['Int']>;
  /** List of Chapter versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  lessons: Array<Lesson>;
  practice?: Maybe<Practice>;
  presentation?: Maybe<ChapterPresentation>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  quiz: Array<ChapterQuiz>;
  scheduledIn: Array<ScheduledOperation>;
  /** Slug do capítulo */
  slug?: Maybe<Scalars['String']>;
  /** System stage field */
  stage: Stage;
  /** Título do capítulo */
  title: Scalars['String'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


/** Conteúdo de capítulo de aulas assíncronas */
export type ChapterConclusionArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Conteúdo de capítulo de aulas assíncronas */
export type ChapterCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Conteúdo de capítulo de aulas assíncronas */
export type ChapterDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


/** Conteúdo de capítulo de aulas assíncronas */
export type ChapterHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


/** Conteúdo de capítulo de aulas assíncronas */
export type ChapterLessonsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<LessonOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<LessonWhereInput>;
};


/** Conteúdo de capítulo de aulas assíncronas */
export type ChapterPracticeArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Conteúdo de capítulo de aulas assíncronas */
export type ChapterPresentationArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Conteúdo de capítulo de aulas assíncronas */
export type ChapterPublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Conteúdo de capítulo de aulas assíncronas */
export type ChapterQuizArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
};


/** Conteúdo de capítulo de aulas assíncronas */
export type ChapterScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


/** Conteúdo de capítulo de aulas assíncronas */
export type ChapterUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type ChapterConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ChapterWhereUniqueInput;
};

/** A connection to a list of items. */
export type ChapterConnection = {
  __typename?: 'ChapterConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ChapterEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ChapterCreateInput = {
  cl6iawxrf4icq01uhgcaj79n0?: InputMaybe<ModuleCreateManyInlineInput>;
  conclusion?: InputMaybe<ConclusionCreateOneInlineInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  duration?: InputMaybe<Scalars['Int']>;
  lessons?: InputMaybe<LessonCreateManyInlineInput>;
  practice?: InputMaybe<PracticeCreateOneInlineInput>;
  presentation?: InputMaybe<ChapterPresentationCreateOneInlineInput>;
  quiz?: InputMaybe<ChapterQuizCreateManyInlineInput>;
  slug?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ChapterCreateManyInlineInput = {
  /** Connect multiple existing Chapter documents */
  connect?: InputMaybe<Array<ChapterWhereUniqueInput>>;
  /** Create and connect multiple existing Chapter documents */
  create?: InputMaybe<Array<ChapterCreateInput>>;
};

export type ChapterCreateOneInlineInput = {
  /** Connect one existing Chapter document */
  connect?: InputMaybe<ChapterWhereUniqueInput>;
  /** Create and connect one Chapter document */
  create?: InputMaybe<ChapterCreateInput>;
};

/** An edge in a connection. */
export type ChapterEdge = {
  __typename?: 'ChapterEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Chapter;
};

/** Identifies documents */
export type ChapterManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ChapterWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ChapterWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ChapterWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  conclusion?: InputMaybe<ConclusionWhereInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  duration?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  duration_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  duration_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  duration_in?: InputMaybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  duration_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  duration_lte?: InputMaybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  duration_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  duration_not_in?: InputMaybe<Array<Scalars['Int']>>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  lessons_every?: InputMaybe<LessonWhereInput>;
  lessons_none?: InputMaybe<LessonWhereInput>;
  lessons_some?: InputMaybe<LessonWhereInput>;
  practice?: InputMaybe<PracticeWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  slug?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  slug_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum ChapterOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DurationAsc = 'duration_ASC',
  DurationDesc = 'duration_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type ChapterPresentation = Presentation;

export type ChapterPresentationConnectInput = {
  Presentation?: InputMaybe<PresentationConnectInput>;
};

export type ChapterPresentationCreateInput = {
  Presentation?: InputMaybe<PresentationCreateInput>;
};

export type ChapterPresentationCreateManyInlineInput = {
  /** Connect multiple existing ChapterPresentation documents */
  connect?: InputMaybe<Array<ChapterPresentationWhereUniqueInput>>;
  /** Create and connect multiple existing ChapterPresentation documents */
  create?: InputMaybe<Array<ChapterPresentationCreateInput>>;
};

export type ChapterPresentationCreateOneInlineInput = {
  /** Connect one existing ChapterPresentation document */
  connect?: InputMaybe<ChapterPresentationWhereUniqueInput>;
  /** Create and connect one ChapterPresentation document */
  create?: InputMaybe<ChapterPresentationCreateInput>;
};

export type ChapterPresentationUpdateInput = {
  Presentation?: InputMaybe<PresentationUpdateInput>;
};

export type ChapterPresentationUpdateManyInlineInput = {
  /** Connect multiple existing ChapterPresentation documents */
  connect?: InputMaybe<Array<ChapterPresentationConnectInput>>;
  /** Create and connect multiple ChapterPresentation documents */
  create?: InputMaybe<Array<ChapterPresentationCreateInput>>;
  /** Delete multiple ChapterPresentation documents */
  delete?: InputMaybe<Array<ChapterPresentationWhereUniqueInput>>;
  /** Disconnect multiple ChapterPresentation documents */
  disconnect?: InputMaybe<Array<ChapterPresentationWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ChapterPresentation documents */
  set?: InputMaybe<Array<ChapterPresentationWhereUniqueInput>>;
  /** Update multiple ChapterPresentation documents */
  update?: InputMaybe<Array<ChapterPresentationUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple ChapterPresentation documents */
  upsert?: InputMaybe<Array<ChapterPresentationUpsertWithNestedWhereUniqueInput>>;
};

export type ChapterPresentationUpdateManyWithNestedWhereInput = {
  Presentation?: InputMaybe<PresentationUpdateManyWithNestedWhereInput>;
};

export type ChapterPresentationUpdateOneInlineInput = {
  /** Connect existing ChapterPresentation document */
  connect?: InputMaybe<ChapterPresentationWhereUniqueInput>;
  /** Create and connect one ChapterPresentation document */
  create?: InputMaybe<ChapterPresentationCreateInput>;
  /** Delete currently connected ChapterPresentation document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected ChapterPresentation document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single ChapterPresentation document */
  update?: InputMaybe<ChapterPresentationUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ChapterPresentation document */
  upsert?: InputMaybe<ChapterPresentationUpsertWithNestedWhereUniqueInput>;
};

export type ChapterPresentationUpdateWithNestedWhereUniqueInput = {
  Presentation?: InputMaybe<PresentationUpdateWithNestedWhereUniqueInput>;
};

export type ChapterPresentationUpsertWithNestedWhereUniqueInput = {
  Presentation?: InputMaybe<PresentationUpsertWithNestedWhereUniqueInput>;
};

export type ChapterPresentationWhereInput = {
  Presentation?: InputMaybe<PresentationWhereInput>;
};

export type ChapterPresentationWhereUniqueInput = {
  Presentation?: InputMaybe<PresentationWhereUniqueInput>;
};

export type ChapterQuiz = Quiz;

export type ChapterQuizConnectInput = {
  Quiz?: InputMaybe<QuizConnectInput>;
};

export type ChapterQuizCreateInput = {
  Quiz?: InputMaybe<QuizCreateInput>;
};

export type ChapterQuizCreateManyInlineInput = {
  /** Connect multiple existing ChapterQuiz documents */
  connect?: InputMaybe<Array<ChapterQuizWhereUniqueInput>>;
  /** Create and connect multiple existing ChapterQuiz documents */
  create?: InputMaybe<Array<ChapterQuizCreateInput>>;
};

export type ChapterQuizCreateOneInlineInput = {
  /** Connect one existing ChapterQuiz document */
  connect?: InputMaybe<ChapterQuizWhereUniqueInput>;
  /** Create and connect one ChapterQuiz document */
  create?: InputMaybe<ChapterQuizCreateInput>;
};

export type ChapterQuizUpdateInput = {
  Quiz?: InputMaybe<QuizUpdateInput>;
};

export type ChapterQuizUpdateManyInlineInput = {
  /** Connect multiple existing ChapterQuiz documents */
  connect?: InputMaybe<Array<ChapterQuizConnectInput>>;
  /** Create and connect multiple ChapterQuiz documents */
  create?: InputMaybe<Array<ChapterQuizCreateInput>>;
  /** Delete multiple ChapterQuiz documents */
  delete?: InputMaybe<Array<ChapterQuizWhereUniqueInput>>;
  /** Disconnect multiple ChapterQuiz documents */
  disconnect?: InputMaybe<Array<ChapterQuizWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ChapterQuiz documents */
  set?: InputMaybe<Array<ChapterQuizWhereUniqueInput>>;
  /** Update multiple ChapterQuiz documents */
  update?: InputMaybe<Array<ChapterQuizUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple ChapterQuiz documents */
  upsert?: InputMaybe<Array<ChapterQuizUpsertWithNestedWhereUniqueInput>>;
};

export type ChapterQuizUpdateManyWithNestedWhereInput = {
  Quiz?: InputMaybe<QuizUpdateManyWithNestedWhereInput>;
};

export type ChapterQuizUpdateOneInlineInput = {
  /** Connect existing ChapterQuiz document */
  connect?: InputMaybe<ChapterQuizWhereUniqueInput>;
  /** Create and connect one ChapterQuiz document */
  create?: InputMaybe<ChapterQuizCreateInput>;
  /** Delete currently connected ChapterQuiz document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected ChapterQuiz document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single ChapterQuiz document */
  update?: InputMaybe<ChapterQuizUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ChapterQuiz document */
  upsert?: InputMaybe<ChapterQuizUpsertWithNestedWhereUniqueInput>;
};

export type ChapterQuizUpdateWithNestedWhereUniqueInput = {
  Quiz?: InputMaybe<QuizUpdateWithNestedWhereUniqueInput>;
};

export type ChapterQuizUpsertWithNestedWhereUniqueInput = {
  Quiz?: InputMaybe<QuizUpsertWithNestedWhereUniqueInput>;
};

export type ChapterQuizWhereInput = {
  Quiz?: InputMaybe<QuizWhereInput>;
};

export type ChapterQuizWhereUniqueInput = {
  Quiz?: InputMaybe<QuizWhereUniqueInput>;
};

export type ChapterUpdateInput = {
  cl6iawxrf4icq01uhgcaj79n0?: InputMaybe<ModuleUpdateManyInlineInput>;
  conclusion?: InputMaybe<ConclusionUpdateOneInlineInput>;
  duration?: InputMaybe<Scalars['Int']>;
  lessons?: InputMaybe<LessonUpdateManyInlineInput>;
  practice?: InputMaybe<PracticeUpdateOneInlineInput>;
  presentation?: InputMaybe<ChapterPresentationUpdateOneInlineInput>;
  quiz?: InputMaybe<ChapterQuizUpdateManyInlineInput>;
  slug?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ChapterUpdateManyInlineInput = {
  /** Connect multiple existing Chapter documents */
  connect?: InputMaybe<Array<ChapterConnectInput>>;
  /** Create and connect multiple Chapter documents */
  create?: InputMaybe<Array<ChapterCreateInput>>;
  /** Delete multiple Chapter documents */
  delete?: InputMaybe<Array<ChapterWhereUniqueInput>>;
  /** Disconnect multiple Chapter documents */
  disconnect?: InputMaybe<Array<ChapterWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Chapter documents */
  set?: InputMaybe<Array<ChapterWhereUniqueInput>>;
  /** Update multiple Chapter documents */
  update?: InputMaybe<Array<ChapterUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Chapter documents */
  upsert?: InputMaybe<Array<ChapterUpsertWithNestedWhereUniqueInput>>;
};

export type ChapterUpdateManyInput = {
  duration?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ChapterUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ChapterUpdateManyInput;
  /** Document search */
  where: ChapterWhereInput;
};

export type ChapterUpdateOneInlineInput = {
  /** Connect existing Chapter document */
  connect?: InputMaybe<ChapterWhereUniqueInput>;
  /** Create and connect one Chapter document */
  create?: InputMaybe<ChapterCreateInput>;
  /** Delete currently connected Chapter document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected Chapter document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single Chapter document */
  update?: InputMaybe<ChapterUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Chapter document */
  upsert?: InputMaybe<ChapterUpsertWithNestedWhereUniqueInput>;
};

export type ChapterUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ChapterUpdateInput;
  /** Unique document search */
  where: ChapterWhereUniqueInput;
};

export type ChapterUpsertInput = {
  /** Create document if it didn't exist */
  create: ChapterCreateInput;
  /** Update document if it exists */
  update: ChapterUpdateInput;
};

export type ChapterUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ChapterUpsertInput;
  /** Unique document search */
  where: ChapterWhereUniqueInput;
};

/** Identifies documents */
export type ChapterWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ChapterWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ChapterWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ChapterWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  conclusion?: InputMaybe<ConclusionWhereInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  duration?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  duration_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  duration_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  duration_in?: InputMaybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  duration_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  duration_lte?: InputMaybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  duration_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  duration_not_in?: InputMaybe<Array<Scalars['Int']>>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  lessons_every?: InputMaybe<LessonWhereInput>;
  lessons_none?: InputMaybe<LessonWhereInput>;
  lessons_some?: InputMaybe<LessonWhereInput>;
  practice?: InputMaybe<PracticeWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  slug?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  slug_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** References Chapter record uniquely */
export type ChapterWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
  slug?: InputMaybe<Scalars['String']>;
};

/** Representing a color value comprising of HEX, RGBA and css color values */
export type Color = {
  __typename?: 'Color';
  css: Scalars['String'];
  hex: Scalars['Hex'];
  rgba: Rgba;
};

/** Accepts either HEX or RGBA color value. At least one of hex or rgba value should be passed. If both are passed RGBA is used. */
export type ColorInput = {
  hex?: InputMaybe<Scalars['Hex']>;
  rgba?: InputMaybe<RgbaInput>;
};

/** Conclusão do capítulo */
export type Conclusion = Node & {
  __typename?: 'Conclusion';
  /** Slides ou qualquer outra mídia necessária */
  assets: Asset;
  /** Checklist do que foi ensinado no capítulo */
  checklist: RichText;
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Conclusion>;
  /** List of Conclusion versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  summary: RichText;
  title: Scalars['String'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


/** Conclusão do capítulo */
export type ConclusionAssetsArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Conclusão do capítulo */
export type ConclusionCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Conclusão do capítulo */
export type ConclusionDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


/** Conclusão do capítulo */
export type ConclusionHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


/** Conclusão do capítulo */
export type ConclusionPublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Conclusão do capítulo */
export type ConclusionScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


/** Conclusão do capítulo */
export type ConclusionUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type ConclusionConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ConclusionWhereUniqueInput;
};

/** A connection to a list of items. */
export type ConclusionConnection = {
  __typename?: 'ConclusionConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ConclusionEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ConclusionCreateInput = {
  assets: AssetCreateOneInlineInput;
  checklist: Scalars['RichTextAST'];
  cl66pvn84bftg01t5fxtxhmy2?: InputMaybe<ChapterCreateManyInlineInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  summary: Scalars['RichTextAST'];
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ConclusionCreateManyInlineInput = {
  /** Connect multiple existing Conclusion documents */
  connect?: InputMaybe<Array<ConclusionWhereUniqueInput>>;
  /** Create and connect multiple existing Conclusion documents */
  create?: InputMaybe<Array<ConclusionCreateInput>>;
};

export type ConclusionCreateOneInlineInput = {
  /** Connect one existing Conclusion document */
  connect?: InputMaybe<ConclusionWhereUniqueInput>;
  /** Create and connect one Conclusion document */
  create?: InputMaybe<ConclusionCreateInput>;
};

/** An edge in a connection. */
export type ConclusionEdge = {
  __typename?: 'ConclusionEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Conclusion;
};

/** Identifies documents */
export type ConclusionManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ConclusionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ConclusionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ConclusionWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  assets?: InputMaybe<AssetWhereInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum ConclusionOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type ConclusionUpdateInput = {
  assets?: InputMaybe<AssetUpdateOneInlineInput>;
  checklist?: InputMaybe<Scalars['RichTextAST']>;
  cl66pvn84bftg01t5fxtxhmy2?: InputMaybe<ChapterUpdateManyInlineInput>;
  summary?: InputMaybe<Scalars['RichTextAST']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ConclusionUpdateManyInlineInput = {
  /** Connect multiple existing Conclusion documents */
  connect?: InputMaybe<Array<ConclusionConnectInput>>;
  /** Create and connect multiple Conclusion documents */
  create?: InputMaybe<Array<ConclusionCreateInput>>;
  /** Delete multiple Conclusion documents */
  delete?: InputMaybe<Array<ConclusionWhereUniqueInput>>;
  /** Disconnect multiple Conclusion documents */
  disconnect?: InputMaybe<Array<ConclusionWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Conclusion documents */
  set?: InputMaybe<Array<ConclusionWhereUniqueInput>>;
  /** Update multiple Conclusion documents */
  update?: InputMaybe<Array<ConclusionUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Conclusion documents */
  upsert?: InputMaybe<Array<ConclusionUpsertWithNestedWhereUniqueInput>>;
};

export type ConclusionUpdateManyInput = {
  checklist?: InputMaybe<Scalars['RichTextAST']>;
  summary?: InputMaybe<Scalars['RichTextAST']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ConclusionUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ConclusionUpdateManyInput;
  /** Document search */
  where: ConclusionWhereInput;
};

export type ConclusionUpdateOneInlineInput = {
  /** Connect existing Conclusion document */
  connect?: InputMaybe<ConclusionWhereUniqueInput>;
  /** Create and connect one Conclusion document */
  create?: InputMaybe<ConclusionCreateInput>;
  /** Delete currently connected Conclusion document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected Conclusion document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single Conclusion document */
  update?: InputMaybe<ConclusionUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Conclusion document */
  upsert?: InputMaybe<ConclusionUpsertWithNestedWhereUniqueInput>;
};

export type ConclusionUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ConclusionUpdateInput;
  /** Unique document search */
  where: ConclusionWhereUniqueInput;
};

export type ConclusionUpsertInput = {
  /** Create document if it didn't exist */
  create: ConclusionCreateInput;
  /** Update document if it exists */
  update: ConclusionUpdateInput;
};

export type ConclusionUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ConclusionUpsertInput;
  /** Unique document search */
  where: ConclusionWhereUniqueInput;
};

/** Identifies documents */
export type ConclusionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ConclusionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ConclusionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ConclusionWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  assets?: InputMaybe<AssetWhereInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** References Conclusion record uniquely */
export type ConclusionWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type ConnectPositionInput = {
  /** Connect document after specified document */
  after?: InputMaybe<Scalars['ID']>;
  /** Connect document before specified document */
  before?: InputMaybe<Scalars['ID']>;
  /** Connect document at last position */
  end?: InputMaybe<Scalars['Boolean']>;
  /** Connect document at first position */
  start?: InputMaybe<Scalars['Boolean']>;
};

export type Course = Node & {
  __typename?: 'Course';
  /** Slug para a página de captura do curso */
  alternativeSlug?: Maybe<Scalars['String']>;
  /** Acrônimo do curso */
  courseAcronym?: Maybe<Scalars['String']>;
  /** Imagem/logo do curso */
  courseImage?: Maybe<Asset>;
  /** Nome do curso */
  courseName: Scalars['String'];
  /** Período do curso */
  coursePeriod?: Maybe<Scalars['String']>;
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Course>;
  /** List of Course versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  modules: Array<Module>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  slug?: Maybe<Scalars['String']>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type CourseCourseImageArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type CourseCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type CourseDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type CourseHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


export type CourseModulesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<ModuleOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ModuleWhereInput>;
};


export type CoursePublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type CourseScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type CourseUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type CourseConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: CourseWhereUniqueInput;
};

/** A connection to a list of items. */
export type CourseConnection = {
  __typename?: 'CourseConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<CourseEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type CourseCreateInput = {
  alternativeSlug?: InputMaybe<Scalars['String']>;
  courseAcronym?: InputMaybe<Scalars['String']>;
  courseImage?: InputMaybe<AssetCreateOneInlineInput>;
  courseName: Scalars['String'];
  coursePeriod?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  modules?: InputMaybe<ModuleCreateManyInlineInput>;
  slug?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type CourseCreateManyInlineInput = {
  /** Connect multiple existing Course documents */
  connect?: InputMaybe<Array<CourseWhereUniqueInput>>;
  /** Create and connect multiple existing Course documents */
  create?: InputMaybe<Array<CourseCreateInput>>;
};

export type CourseCreateOneInlineInput = {
  /** Connect one existing Course document */
  connect?: InputMaybe<CourseWhereUniqueInput>;
  /** Create and connect one Course document */
  create?: InputMaybe<CourseCreateInput>;
};

/** An edge in a connection. */
export type CourseEdge = {
  __typename?: 'CourseEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Course;
};

/** Identifies documents */
export type CourseManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<CourseWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<CourseWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<CourseWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  alternativeSlug?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  alternativeSlug_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  alternativeSlug_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  alternativeSlug_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  alternativeSlug_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  alternativeSlug_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  alternativeSlug_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  alternativeSlug_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  alternativeSlug_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  alternativeSlug_starts_with?: InputMaybe<Scalars['String']>;
  courseAcronym?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  courseAcronym_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  courseAcronym_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  courseAcronym_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  courseAcronym_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  courseAcronym_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  courseAcronym_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  courseAcronym_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  courseAcronym_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  courseAcronym_starts_with?: InputMaybe<Scalars['String']>;
  courseImage?: InputMaybe<AssetWhereInput>;
  courseName?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  courseName_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  courseName_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  courseName_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  courseName_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  courseName_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  courseName_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  courseName_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  courseName_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  courseName_starts_with?: InputMaybe<Scalars['String']>;
  coursePeriod?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  coursePeriod_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  coursePeriod_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  coursePeriod_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  coursePeriod_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  coursePeriod_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  coursePeriod_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  coursePeriod_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  coursePeriod_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  coursePeriod_starts_with?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  modules_every?: InputMaybe<ModuleWhereInput>;
  modules_none?: InputMaybe<ModuleWhereInput>;
  modules_some?: InputMaybe<ModuleWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  slug?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  slug_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum CourseOrderByInput {
  AlternativeSlugAsc = 'alternativeSlug_ASC',
  AlternativeSlugDesc = 'alternativeSlug_DESC',
  CourseAcronymAsc = 'courseAcronym_ASC',
  CourseAcronymDesc = 'courseAcronym_DESC',
  CourseNameAsc = 'courseName_ASC',
  CourseNameDesc = 'courseName_DESC',
  CoursePeriodAsc = 'coursePeriod_ASC',
  CoursePeriodDesc = 'coursePeriod_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type CourseUpdateInput = {
  alternativeSlug?: InputMaybe<Scalars['String']>;
  courseAcronym?: InputMaybe<Scalars['String']>;
  courseImage?: InputMaybe<AssetUpdateOneInlineInput>;
  courseName?: InputMaybe<Scalars['String']>;
  coursePeriod?: InputMaybe<Scalars['String']>;
  modules?: InputMaybe<ModuleUpdateManyInlineInput>;
  slug?: InputMaybe<Scalars['String']>;
};

export type CourseUpdateManyInlineInput = {
  /** Connect multiple existing Course documents */
  connect?: InputMaybe<Array<CourseConnectInput>>;
  /** Create and connect multiple Course documents */
  create?: InputMaybe<Array<CourseCreateInput>>;
  /** Delete multiple Course documents */
  delete?: InputMaybe<Array<CourseWhereUniqueInput>>;
  /** Disconnect multiple Course documents */
  disconnect?: InputMaybe<Array<CourseWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Course documents */
  set?: InputMaybe<Array<CourseWhereUniqueInput>>;
  /** Update multiple Course documents */
  update?: InputMaybe<Array<CourseUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Course documents */
  upsert?: InputMaybe<Array<CourseUpsertWithNestedWhereUniqueInput>>;
};

export type CourseUpdateManyInput = {
  alternativeSlug?: InputMaybe<Scalars['String']>;
  coursePeriod?: InputMaybe<Scalars['String']>;
};

export type CourseUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: CourseUpdateManyInput;
  /** Document search */
  where: CourseWhereInput;
};

export type CourseUpdateOneInlineInput = {
  /** Connect existing Course document */
  connect?: InputMaybe<CourseWhereUniqueInput>;
  /** Create and connect one Course document */
  create?: InputMaybe<CourseCreateInput>;
  /** Delete currently connected Course document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected Course document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single Course document */
  update?: InputMaybe<CourseUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Course document */
  upsert?: InputMaybe<CourseUpsertWithNestedWhereUniqueInput>;
};

export type CourseUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: CourseUpdateInput;
  /** Unique document search */
  where: CourseWhereUniqueInput;
};

export type CourseUpsertInput = {
  /** Create document if it didn't exist */
  create: CourseCreateInput;
  /** Update document if it exists */
  update: CourseUpdateInput;
};

export type CourseUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: CourseUpsertInput;
  /** Unique document search */
  where: CourseWhereUniqueInput;
};

/** Identifies documents */
export type CourseWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<CourseWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<CourseWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<CourseWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  alternativeSlug?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  alternativeSlug_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  alternativeSlug_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  alternativeSlug_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  alternativeSlug_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  alternativeSlug_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  alternativeSlug_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  alternativeSlug_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  alternativeSlug_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  alternativeSlug_starts_with?: InputMaybe<Scalars['String']>;
  courseAcronym?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  courseAcronym_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  courseAcronym_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  courseAcronym_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  courseAcronym_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  courseAcronym_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  courseAcronym_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  courseAcronym_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  courseAcronym_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  courseAcronym_starts_with?: InputMaybe<Scalars['String']>;
  courseImage?: InputMaybe<AssetWhereInput>;
  courseName?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  courseName_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  courseName_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  courseName_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  courseName_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  courseName_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  courseName_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  courseName_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  courseName_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  courseName_starts_with?: InputMaybe<Scalars['String']>;
  coursePeriod?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  coursePeriod_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  coursePeriod_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  coursePeriod_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  coursePeriod_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  coursePeriod_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  coursePeriod_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  coursePeriod_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  coursePeriod_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  coursePeriod_starts_with?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  modules_every?: InputMaybe<ModuleWhereInput>;
  modules_none?: InputMaybe<ModuleWhereInput>;
  modules_some?: InputMaybe<ModuleWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  slug?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  slug_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** References Course record uniquely */
export type CourseWhereUniqueInput = {
  courseAcronym?: InputMaybe<Scalars['String']>;
  courseName?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  slug?: InputMaybe<Scalars['String']>;
};

/** This model can be used, for example, as a simple form on a website, app, database with several text fields already added. */
export type DemoModel = Node & {
  __typename?: 'DemoModel';
  content: DemoModelContentRichText;
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<DemoModel>;
  /** List of DemoModel versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  /** Que bom que você veio! */
  salutation?: Maybe<Scalars['String']>;
  scheduledIn: Array<ScheduledOperation>;
  slug: Scalars['String'];
  /** System stage field */
  stage: Stage;
  title: Scalars['String'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


/** This model can be used, for example, as a simple form on a website, app, database with several text fields already added. */
export type DemoModelCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** This model can be used, for example, as a simple form on a website, app, database with several text fields already added. */
export type DemoModelDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


/** This model can be used, for example, as a simple form on a website, app, database with several text fields already added. */
export type DemoModelHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


/** This model can be used, for example, as a simple form on a website, app, database with several text fields already added. */
export type DemoModelPublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** This model can be used, for example, as a simple form on a website, app, database with several text fields already added. */
export type DemoModelScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


/** This model can be used, for example, as a simple form on a website, app, database with several text fields already added. */
export type DemoModelUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type DemoModelConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: DemoModelWhereUniqueInput;
};

/** A connection to a list of items. */
export type DemoModelConnection = {
  __typename?: 'DemoModelConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<DemoModelEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type DemoModelContentRichText = {
  __typename?: 'DemoModelContentRichText';
  /** Returns HTMl representation */
  html: Scalars['String'];
  json: Scalars['RichTextAST'];
  /** Returns Markdown representation */
  markdown: Scalars['String'];
  /** @deprecated Please use the 'json' field */
  raw: Scalars['RichTextAST'];
  references: Array<DemoModelContentRichTextEmbeddedTypes>;
  /** Returns plain-text contents of RichText */
  text: Scalars['String'];
};

export type DemoModelContentRichTextEmbeddedTypes = Asset;

export type DemoModelCreateInput = {
  content: Scalars['RichTextAST'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  salutation?: InputMaybe<Scalars['String']>;
  slug: Scalars['String'];
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type DemoModelCreateManyInlineInput = {
  /** Connect multiple existing DemoModel documents */
  connect?: InputMaybe<Array<DemoModelWhereUniqueInput>>;
  /** Create and connect multiple existing DemoModel documents */
  create?: InputMaybe<Array<DemoModelCreateInput>>;
};

export type DemoModelCreateOneInlineInput = {
  /** Connect one existing DemoModel document */
  connect?: InputMaybe<DemoModelWhereUniqueInput>;
  /** Create and connect one DemoModel document */
  create?: InputMaybe<DemoModelCreateInput>;
};

/** An edge in a connection. */
export type DemoModelEdge = {
  __typename?: 'DemoModelEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: DemoModel;
};

/** Identifies documents */
export type DemoModelManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<DemoModelWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<DemoModelWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<DemoModelWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  salutation?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  salutation_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  salutation_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  salutation_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  salutation_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  salutation_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  salutation_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  salutation_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  salutation_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  salutation_starts_with?: InputMaybe<Scalars['String']>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  slug?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  slug_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum DemoModelOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SalutationAsc = 'salutation_ASC',
  SalutationDesc = 'salutation_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type DemoModelUpdateInput = {
  content?: InputMaybe<Scalars['RichTextAST']>;
  salutation?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type DemoModelUpdateManyInlineInput = {
  /** Connect multiple existing DemoModel documents */
  connect?: InputMaybe<Array<DemoModelConnectInput>>;
  /** Create and connect multiple DemoModel documents */
  create?: InputMaybe<Array<DemoModelCreateInput>>;
  /** Delete multiple DemoModel documents */
  delete?: InputMaybe<Array<DemoModelWhereUniqueInput>>;
  /** Disconnect multiple DemoModel documents */
  disconnect?: InputMaybe<Array<DemoModelWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing DemoModel documents */
  set?: InputMaybe<Array<DemoModelWhereUniqueInput>>;
  /** Update multiple DemoModel documents */
  update?: InputMaybe<Array<DemoModelUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple DemoModel documents */
  upsert?: InputMaybe<Array<DemoModelUpsertWithNestedWhereUniqueInput>>;
};

export type DemoModelUpdateManyInput = {
  content?: InputMaybe<Scalars['RichTextAST']>;
  salutation?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type DemoModelUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: DemoModelUpdateManyInput;
  /** Document search */
  where: DemoModelWhereInput;
};

export type DemoModelUpdateOneInlineInput = {
  /** Connect existing DemoModel document */
  connect?: InputMaybe<DemoModelWhereUniqueInput>;
  /** Create and connect one DemoModel document */
  create?: InputMaybe<DemoModelCreateInput>;
  /** Delete currently connected DemoModel document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected DemoModel document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single DemoModel document */
  update?: InputMaybe<DemoModelUpdateWithNestedWhereUniqueInput>;
  /** Upsert single DemoModel document */
  upsert?: InputMaybe<DemoModelUpsertWithNestedWhereUniqueInput>;
};

export type DemoModelUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: DemoModelUpdateInput;
  /** Unique document search */
  where: DemoModelWhereUniqueInput;
};

export type DemoModelUpsertInput = {
  /** Create document if it didn't exist */
  create: DemoModelCreateInput;
  /** Update document if it exists */
  update: DemoModelUpdateInput;
};

export type DemoModelUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: DemoModelUpsertInput;
  /** Unique document search */
  where: DemoModelWhereUniqueInput;
};

/** Identifies documents */
export type DemoModelWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<DemoModelWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<DemoModelWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<DemoModelWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  salutation?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  salutation_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  salutation_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  salutation_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  salutation_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  salutation_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  salutation_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  salutation_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  salutation_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  salutation_starts_with?: InputMaybe<Scalars['String']>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  slug?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  slug_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** References DemoModel record uniquely */
export type DemoModelWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
  slug?: InputMaybe<Scalars['String']>;
};

export enum DocumentFileTypes {
  Doc = 'doc',
  Docx = 'docx',
  Html = 'html',
  Jpg = 'jpg',
  Odp = 'odp',
  Ods = 'ods',
  Odt = 'odt',
  Pdf = 'pdf',
  Png = 'png',
  Ppt = 'ppt',
  Pptx = 'pptx',
  Svg = 'svg',
  Txt = 'txt',
  Webp = 'webp',
  Xls = 'xls',
  Xlsx = 'xlsx'
}

export type DocumentOutputInput = {
  /**
   * Transforms a document into a desired file type.
   * See this matrix for format support:
   *
   * PDF:	jpg, odp, ods, odt, png, svg, txt, and webp
   * DOC:	docx, html, jpg, odt, pdf, png, svg, txt, and webp
   * DOCX:	doc, html, jpg, odt, pdf, png, svg, txt, and webp
   * ODT:	doc, docx, html, jpg, pdf, png, svg, txt, and webp
   * XLS:	jpg, pdf, ods, png, svg, xlsx, and webp
   * XLSX:	jpg, pdf, ods, png, svg, xls, and webp
   * ODS:	jpg, pdf, png, xls, svg, xlsx, and webp
   * PPT:	jpg, odp, pdf, png, svg, pptx, and webp
   * PPTX:	jpg, odp, pdf, png, svg, ppt, and webp
   * ODP:	jpg, pdf, png, ppt, svg, pptx, and webp
   * BMP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * GIF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * JPG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * PNG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * WEBP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * TIFF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * AI:	    jpg, odp, ods, odt, pdf, png, svg, and webp
   * PSD:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * SVG:	jpg, odp, ods, odt, pdf, png, and webp
   * HTML:	jpg, odt, pdf, svg, txt, and webp
   * TXT:	jpg, html, odt, pdf, svg, and webp
   */
  format?: InputMaybe<DocumentFileTypes>;
};

/** Transformations for Documents */
export type DocumentTransformationInput = {
  /** Changes the output for the file. */
  output?: InputMaybe<DocumentOutputInput>;
};

export type DocumentVersion = {
  __typename?: 'DocumentVersion';
  createdAt: Scalars['DateTime'];
  data?: Maybe<Scalars['Json']>;
  id: Scalars['ID'];
  revision: Scalars['Int'];
  stage: Stage;
};

export enum ImageFit {
  /** Resizes the image to fit within the specified parameters without distorting, cropping, or changing the aspect ratio. */
  Clip = 'clip',
  /** Resizes the image to fit the specified parameters exactly by removing any parts of the image that don't fit within the boundaries. */
  Crop = 'crop',
  /** Resizes the image to fit within the parameters, but as opposed to 'fit:clip' will not scale the image if the image is smaller than the output size. */
  Max = 'max',
  /** Resizes the image to fit the specified parameters exactly by scaling the image to the desired size. The aspect ratio of the image is not respected and the image can be distorted using this method. */
  Scale = 'scale'
}

export type ImageResizeInput = {
  /** The default value for the fit parameter is fit:clip. */
  fit?: InputMaybe<ImageFit>;
  /** The height in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  height?: InputMaybe<Scalars['Int']>;
  /** The width in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  width?: InputMaybe<Scalars['Int']>;
};

/** Transformations for Images */
export type ImageTransformationInput = {
  /** Resizes the image */
  resize?: InputMaybe<ImageResizeInput>;
};

/** Aula assíncrona referente a um capítulo */
export type Lesson = Node & {
  __typename?: 'Lesson';
  /** Conteúdo da aula */
  content: RichText;
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Lesson>;
  /** List of Lesson versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  slug?: Maybe<Scalars['String']>;
  /** System stage field */
  stage: Stage;
  /** Resumo da aula */
  summary: RichText;
  /** Título da aula */
  title: Scalars['String'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  /** Vídeo da aula */
  video?: Maybe<Asset>;
};


/** Aula assíncrona referente a um capítulo */
export type LessonCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Aula assíncrona referente a um capítulo */
export type LessonDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


/** Aula assíncrona referente a um capítulo */
export type LessonHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


/** Aula assíncrona referente a um capítulo */
export type LessonPublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Aula assíncrona referente a um capítulo */
export type LessonScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


/** Aula assíncrona referente a um capítulo */
export type LessonUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Aula assíncrona referente a um capítulo */
export type LessonVideoArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type LessonConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: LessonWhereUniqueInput;
};

/** A connection to a list of items. */
export type LessonConnection = {
  __typename?: 'LessonConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<LessonEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type LessonCreateInput = {
  cl66pd4x1bcgd01t79tnkalgu?: InputMaybe<ChapterCreateManyInlineInput>;
  content: Scalars['RichTextAST'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  slug?: InputMaybe<Scalars['String']>;
  summary: Scalars['RichTextAST'];
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  video?: InputMaybe<AssetCreateOneInlineInput>;
};

export type LessonCreateManyInlineInput = {
  /** Connect multiple existing Lesson documents */
  connect?: InputMaybe<Array<LessonWhereUniqueInput>>;
  /** Create and connect multiple existing Lesson documents */
  create?: InputMaybe<Array<LessonCreateInput>>;
};

export type LessonCreateOneInlineInput = {
  /** Connect one existing Lesson document */
  connect?: InputMaybe<LessonWhereUniqueInput>;
  /** Create and connect one Lesson document */
  create?: InputMaybe<LessonCreateInput>;
};

/** An edge in a connection. */
export type LessonEdge = {
  __typename?: 'LessonEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Lesson;
};

/** Identifies documents */
export type LessonManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<LessonWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<LessonWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<LessonWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  slug?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  slug_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  video?: InputMaybe<AssetWhereInput>;
};

export enum LessonOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type LessonUpdateInput = {
  cl66pd4x1bcgd01t79tnkalgu?: InputMaybe<ChapterUpdateManyInlineInput>;
  content?: InputMaybe<Scalars['RichTextAST']>;
  slug?: InputMaybe<Scalars['String']>;
  summary?: InputMaybe<Scalars['RichTextAST']>;
  title?: InputMaybe<Scalars['String']>;
  video?: InputMaybe<AssetUpdateOneInlineInput>;
};

export type LessonUpdateManyInlineInput = {
  /** Connect multiple existing Lesson documents */
  connect?: InputMaybe<Array<LessonConnectInput>>;
  /** Create and connect multiple Lesson documents */
  create?: InputMaybe<Array<LessonCreateInput>>;
  /** Delete multiple Lesson documents */
  delete?: InputMaybe<Array<LessonWhereUniqueInput>>;
  /** Disconnect multiple Lesson documents */
  disconnect?: InputMaybe<Array<LessonWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Lesson documents */
  set?: InputMaybe<Array<LessonWhereUniqueInput>>;
  /** Update multiple Lesson documents */
  update?: InputMaybe<Array<LessonUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Lesson documents */
  upsert?: InputMaybe<Array<LessonUpsertWithNestedWhereUniqueInput>>;
};

export type LessonUpdateManyInput = {
  content?: InputMaybe<Scalars['RichTextAST']>;
  summary?: InputMaybe<Scalars['RichTextAST']>;
  title?: InputMaybe<Scalars['String']>;
};

export type LessonUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: LessonUpdateManyInput;
  /** Document search */
  where: LessonWhereInput;
};

export type LessonUpdateOneInlineInput = {
  /** Connect existing Lesson document */
  connect?: InputMaybe<LessonWhereUniqueInput>;
  /** Create and connect one Lesson document */
  create?: InputMaybe<LessonCreateInput>;
  /** Delete currently connected Lesson document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected Lesson document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single Lesson document */
  update?: InputMaybe<LessonUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Lesson document */
  upsert?: InputMaybe<LessonUpsertWithNestedWhereUniqueInput>;
};

export type LessonUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: LessonUpdateInput;
  /** Unique document search */
  where: LessonWhereUniqueInput;
};

export type LessonUpsertInput = {
  /** Create document if it didn't exist */
  create: LessonCreateInput;
  /** Update document if it exists */
  update: LessonUpdateInput;
};

export type LessonUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: LessonUpsertInput;
  /** Unique document search */
  where: LessonWhereUniqueInput;
};

/** Identifies documents */
export type LessonWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<LessonWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<LessonWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<LessonWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  slug?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  slug_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  video?: InputMaybe<AssetWhereInput>;
};

/** References Lesson record uniquely */
export type LessonWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
  slug?: InputMaybe<Scalars['String']>;
};

/** Aula ao vivo */
export type LiveLesson = Node & {
  __typename?: 'LiveLesson';
  /** Sobre a aula */
  about?: Maybe<RichText>;
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Data da aula */
  date?: Maybe<Scalars['Date']>;
  /** Get the document in other stages */
  documentInStages: Array<LiveLesson>;
  /** Horário de encerramento */
  endTime?: Maybe<Scalars['Int']>;
  /** List of LiveLesson versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** Objetivos da aula */
  objectives?: Maybe<RichText>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  slug?: Maybe<Scalars['String']>;
  /** System stage field */
  stage: Stage;
  /** Horário de início */
  startTime?: Maybe<Scalars['Int']>;
  teacher?: Maybe<Teacher>;
  /** Título da aula ao vivo */
  title?: Maybe<Scalars['String']>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


/** Aula ao vivo */
export type LiveLessonCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Aula ao vivo */
export type LiveLessonDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


/** Aula ao vivo */
export type LiveLessonHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


/** Aula ao vivo */
export type LiveLessonPublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Aula ao vivo */
export type LiveLessonScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


/** Aula ao vivo */
export type LiveLessonTeacherArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Aula ao vivo */
export type LiveLessonUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type LiveLessonConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: LiveLessonWhereUniqueInput;
};

/** A connection to a list of items. */
export type LiveLessonConnection = {
  __typename?: 'LiveLessonConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<LiveLessonEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type LiveLessonCreateInput = {
  about?: InputMaybe<Scalars['RichTextAST']>;
  cl6ihxwiq4rja01uqh6mu9u6s?: InputMaybe<ModuleCreateManyInlineInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  date?: InputMaybe<Scalars['Date']>;
  endTime?: InputMaybe<Scalars['Int']>;
  objectives?: InputMaybe<Scalars['RichTextAST']>;
  slug?: InputMaybe<Scalars['String']>;
  startTime?: InputMaybe<Scalars['Int']>;
  teacher?: InputMaybe<TeacherCreateOneInlineInput>;
  title?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type LiveLessonCreateManyInlineInput = {
  /** Connect multiple existing LiveLesson documents */
  connect?: InputMaybe<Array<LiveLessonWhereUniqueInput>>;
  /** Create and connect multiple existing LiveLesson documents */
  create?: InputMaybe<Array<LiveLessonCreateInput>>;
};

export type LiveLessonCreateOneInlineInput = {
  /** Connect one existing LiveLesson document */
  connect?: InputMaybe<LiveLessonWhereUniqueInput>;
  /** Create and connect one LiveLesson document */
  create?: InputMaybe<LiveLessonCreateInput>;
};

/** An edge in a connection. */
export type LiveLessonEdge = {
  __typename?: 'LiveLessonEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: LiveLesson;
};

/** Identifies documents */
export type LiveLessonManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<LiveLessonWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<LiveLessonWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<LiveLessonWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  date?: InputMaybe<Scalars['Date']>;
  /** All values greater than the given value. */
  date_gt?: InputMaybe<Scalars['Date']>;
  /** All values greater than or equal the given value. */
  date_gte?: InputMaybe<Scalars['Date']>;
  /** All values that are contained in given list. */
  date_in?: InputMaybe<Array<Scalars['Date']>>;
  /** All values less than the given value. */
  date_lt?: InputMaybe<Scalars['Date']>;
  /** All values less than or equal the given value. */
  date_lte?: InputMaybe<Scalars['Date']>;
  /** All values that are not equal to given value. */
  date_not?: InputMaybe<Scalars['Date']>;
  /** All values that are not contained in given list. */
  date_not_in?: InputMaybe<Array<Scalars['Date']>>;
  endTime?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  endTime_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  endTime_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  endTime_in?: InputMaybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  endTime_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  endTime_lte?: InputMaybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  endTime_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  endTime_not_in?: InputMaybe<Array<Scalars['Int']>>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  slug?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  slug_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']>;
  startTime?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  startTime_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  startTime_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  startTime_in?: InputMaybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  startTime_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  startTime_lte?: InputMaybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  startTime_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  startTime_not_in?: InputMaybe<Array<Scalars['Int']>>;
  teacher?: InputMaybe<TeacherWhereInput>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum LiveLessonOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DateAsc = 'date_ASC',
  DateDesc = 'date_DESC',
  EndTimeAsc = 'endTime_ASC',
  EndTimeDesc = 'endTime_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  StartTimeAsc = 'startTime_ASC',
  StartTimeDesc = 'startTime_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type LiveLessonUpdateInput = {
  about?: InputMaybe<Scalars['RichTextAST']>;
  cl6ihxwiq4rja01uqh6mu9u6s?: InputMaybe<ModuleUpdateManyInlineInput>;
  date?: InputMaybe<Scalars['Date']>;
  endTime?: InputMaybe<Scalars['Int']>;
  objectives?: InputMaybe<Scalars['RichTextAST']>;
  slug?: InputMaybe<Scalars['String']>;
  startTime?: InputMaybe<Scalars['Int']>;
  teacher?: InputMaybe<TeacherUpdateOneInlineInput>;
  title?: InputMaybe<Scalars['String']>;
};

export type LiveLessonUpdateManyInlineInput = {
  /** Connect multiple existing LiveLesson documents */
  connect?: InputMaybe<Array<LiveLessonConnectInput>>;
  /** Create and connect multiple LiveLesson documents */
  create?: InputMaybe<Array<LiveLessonCreateInput>>;
  /** Delete multiple LiveLesson documents */
  delete?: InputMaybe<Array<LiveLessonWhereUniqueInput>>;
  /** Disconnect multiple LiveLesson documents */
  disconnect?: InputMaybe<Array<LiveLessonWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing LiveLesson documents */
  set?: InputMaybe<Array<LiveLessonWhereUniqueInput>>;
  /** Update multiple LiveLesson documents */
  update?: InputMaybe<Array<LiveLessonUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple LiveLesson documents */
  upsert?: InputMaybe<Array<LiveLessonUpsertWithNestedWhereUniqueInput>>;
};

export type LiveLessonUpdateManyInput = {
  about?: InputMaybe<Scalars['RichTextAST']>;
  date?: InputMaybe<Scalars['Date']>;
  endTime?: InputMaybe<Scalars['Int']>;
  objectives?: InputMaybe<Scalars['RichTextAST']>;
  startTime?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
};

export type LiveLessonUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: LiveLessonUpdateManyInput;
  /** Document search */
  where: LiveLessonWhereInput;
};

export type LiveLessonUpdateOneInlineInput = {
  /** Connect existing LiveLesson document */
  connect?: InputMaybe<LiveLessonWhereUniqueInput>;
  /** Create and connect one LiveLesson document */
  create?: InputMaybe<LiveLessonCreateInput>;
  /** Delete currently connected LiveLesson document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected LiveLesson document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single LiveLesson document */
  update?: InputMaybe<LiveLessonUpdateWithNestedWhereUniqueInput>;
  /** Upsert single LiveLesson document */
  upsert?: InputMaybe<LiveLessonUpsertWithNestedWhereUniqueInput>;
};

export type LiveLessonUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: LiveLessonUpdateInput;
  /** Unique document search */
  where: LiveLessonWhereUniqueInput;
};

export type LiveLessonUpsertInput = {
  /** Create document if it didn't exist */
  create: LiveLessonCreateInput;
  /** Update document if it exists */
  update: LiveLessonUpdateInput;
};

export type LiveLessonUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: LiveLessonUpsertInput;
  /** Unique document search */
  where: LiveLessonWhereUniqueInput;
};

/** Identifies documents */
export type LiveLessonWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<LiveLessonWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<LiveLessonWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<LiveLessonWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  date?: InputMaybe<Scalars['Date']>;
  /** All values greater than the given value. */
  date_gt?: InputMaybe<Scalars['Date']>;
  /** All values greater than or equal the given value. */
  date_gte?: InputMaybe<Scalars['Date']>;
  /** All values that are contained in given list. */
  date_in?: InputMaybe<Array<Scalars['Date']>>;
  /** All values less than the given value. */
  date_lt?: InputMaybe<Scalars['Date']>;
  /** All values less than or equal the given value. */
  date_lte?: InputMaybe<Scalars['Date']>;
  /** All values that are not equal to given value. */
  date_not?: InputMaybe<Scalars['Date']>;
  /** All values that are not contained in given list. */
  date_not_in?: InputMaybe<Array<Scalars['Date']>>;
  endTime?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  endTime_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  endTime_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  endTime_in?: InputMaybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  endTime_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  endTime_lte?: InputMaybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  endTime_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  endTime_not_in?: InputMaybe<Array<Scalars['Int']>>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  slug?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  slug_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']>;
  startTime?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  startTime_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  startTime_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  startTime_in?: InputMaybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  startTime_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  startTime_lte?: InputMaybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  startTime_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  startTime_not_in?: InputMaybe<Array<Scalars['Int']>>;
  teacher?: InputMaybe<TeacherWhereInput>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** References LiveLesson record uniquely */
export type LiveLessonWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
  slug?: InputMaybe<Scalars['String']>;
};

/** Locale system enumeration */
export enum Locale {
  /** System locale */
  En = 'en'
}

/** Representing a geolocation point with latitude and longitude */
export type Location = {
  __typename?: 'Location';
  distance: Scalars['Float'];
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
};


/** Representing a geolocation point with latitude and longitude */
export type LocationDistanceArgs = {
  from: LocationInput;
};

/** Input for a geolocation point with latitude and longitude */
export type LocationInput = {
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
};

/** Módulos do curso */
export type Module = Node & {
  __typename?: 'Module';
  chapters: Array<Chapter>;
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Module>;
  /** List of Module versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** Aulas ao vivo */
  liveLessons: Array<LiveLesson>;
  /** Número do módulo */
  moduleNumber: Scalars['Int'];
  /** Título do módulo */
  moduleTitle: Scalars['String'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  slug?: Maybe<Scalars['String']>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


/** Módulos do curso */
export type ModuleChaptersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<ChapterOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ChapterWhereInput>;
};


/** Módulos do curso */
export type ModuleCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Módulos do curso */
export type ModuleDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


/** Módulos do curso */
export type ModuleHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


/** Módulos do curso */
export type ModuleLiveLessonsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<LiveLessonOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<LiveLessonWhereInput>;
};


/** Módulos do curso */
export type ModulePublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Módulos do curso */
export type ModuleScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


/** Módulos do curso */
export type ModuleUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type ModuleConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ModuleWhereUniqueInput;
};

/** A connection to a list of items. */
export type ModuleConnection = {
  __typename?: 'ModuleConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ModuleEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ModuleCreateInput = {
  chapters?: InputMaybe<ChapterCreateManyInlineInput>;
  cl69xi1k6da0g01ukcdvmdrc8?: InputMaybe<CourseCreateManyInlineInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  liveLessons?: InputMaybe<LiveLessonCreateManyInlineInput>;
  moduleNumber: Scalars['Int'];
  moduleTitle: Scalars['String'];
  slug?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ModuleCreateManyInlineInput = {
  /** Connect multiple existing Module documents */
  connect?: InputMaybe<Array<ModuleWhereUniqueInput>>;
  /** Create and connect multiple existing Module documents */
  create?: InputMaybe<Array<ModuleCreateInput>>;
};

export type ModuleCreateOneInlineInput = {
  /** Connect one existing Module document */
  connect?: InputMaybe<ModuleWhereUniqueInput>;
  /** Create and connect one Module document */
  create?: InputMaybe<ModuleCreateInput>;
};

/** An edge in a connection. */
export type ModuleEdge = {
  __typename?: 'ModuleEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Module;
};

/** Identifies documents */
export type ModuleManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ModuleWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ModuleWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ModuleWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  chapters_every?: InputMaybe<ChapterWhereInput>;
  chapters_none?: InputMaybe<ChapterWhereInput>;
  chapters_some?: InputMaybe<ChapterWhereInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  liveLessons_every?: InputMaybe<LiveLessonWhereInput>;
  liveLessons_none?: InputMaybe<LiveLessonWhereInput>;
  liveLessons_some?: InputMaybe<LiveLessonWhereInput>;
  moduleNumber?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  moduleNumber_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  moduleNumber_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  moduleNumber_in?: InputMaybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  moduleNumber_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  moduleNumber_lte?: InputMaybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  moduleNumber_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  moduleNumber_not_in?: InputMaybe<Array<Scalars['Int']>>;
  moduleTitle?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  moduleTitle_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  moduleTitle_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  moduleTitle_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  moduleTitle_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  moduleTitle_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  moduleTitle_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  moduleTitle_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  moduleTitle_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  moduleTitle_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  slug?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  slug_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum ModuleOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  ModuleNumberAsc = 'moduleNumber_ASC',
  ModuleNumberDesc = 'moduleNumber_DESC',
  ModuleTitleAsc = 'moduleTitle_ASC',
  ModuleTitleDesc = 'moduleTitle_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type ModuleUpdateInput = {
  chapters?: InputMaybe<ChapterUpdateManyInlineInput>;
  cl69xi1k6da0g01ukcdvmdrc8?: InputMaybe<CourseUpdateManyInlineInput>;
  liveLessons?: InputMaybe<LiveLessonUpdateManyInlineInput>;
  moduleNumber?: InputMaybe<Scalars['Int']>;
  moduleTitle?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
};

export type ModuleUpdateManyInlineInput = {
  /** Connect multiple existing Module documents */
  connect?: InputMaybe<Array<ModuleConnectInput>>;
  /** Create and connect multiple Module documents */
  create?: InputMaybe<Array<ModuleCreateInput>>;
  /** Delete multiple Module documents */
  delete?: InputMaybe<Array<ModuleWhereUniqueInput>>;
  /** Disconnect multiple Module documents */
  disconnect?: InputMaybe<Array<ModuleWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Module documents */
  set?: InputMaybe<Array<ModuleWhereUniqueInput>>;
  /** Update multiple Module documents */
  update?: InputMaybe<Array<ModuleUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Module documents */
  upsert?: InputMaybe<Array<ModuleUpsertWithNestedWhereUniqueInput>>;
};

export type ModuleUpdateManyInput = {
  moduleNumber?: InputMaybe<Scalars['Int']>;
  moduleTitle?: InputMaybe<Scalars['String']>;
};

export type ModuleUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ModuleUpdateManyInput;
  /** Document search */
  where: ModuleWhereInput;
};

export type ModuleUpdateOneInlineInput = {
  /** Connect existing Module document */
  connect?: InputMaybe<ModuleWhereUniqueInput>;
  /** Create and connect one Module document */
  create?: InputMaybe<ModuleCreateInput>;
  /** Delete currently connected Module document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected Module document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single Module document */
  update?: InputMaybe<ModuleUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Module document */
  upsert?: InputMaybe<ModuleUpsertWithNestedWhereUniqueInput>;
};

export type ModuleUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ModuleUpdateInput;
  /** Unique document search */
  where: ModuleWhereUniqueInput;
};

export type ModuleUpsertInput = {
  /** Create document if it didn't exist */
  create: ModuleCreateInput;
  /** Update document if it exists */
  update: ModuleUpdateInput;
};

export type ModuleUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ModuleUpsertInput;
  /** Unique document search */
  where: ModuleWhereUniqueInput;
};

/** Identifies documents */
export type ModuleWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ModuleWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ModuleWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ModuleWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  chapters_every?: InputMaybe<ChapterWhereInput>;
  chapters_none?: InputMaybe<ChapterWhereInput>;
  chapters_some?: InputMaybe<ChapterWhereInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  liveLessons_every?: InputMaybe<LiveLessonWhereInput>;
  liveLessons_none?: InputMaybe<LiveLessonWhereInput>;
  liveLessons_some?: InputMaybe<LiveLessonWhereInput>;
  moduleNumber?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  moduleNumber_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  moduleNumber_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  moduleNumber_in?: InputMaybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  moduleNumber_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  moduleNumber_lte?: InputMaybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  moduleNumber_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  moduleNumber_not_in?: InputMaybe<Array<Scalars['Int']>>;
  moduleTitle?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  moduleTitle_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  moduleTitle_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  moduleTitle_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  moduleTitle_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  moduleTitle_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  moduleTitle_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  moduleTitle_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  moduleTitle_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  moduleTitle_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  slug?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  slug_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** References Module record uniquely */
export type ModuleWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
  slug?: InputMaybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /**
   * Create one asset
   * @deprecated Asset mutations will be overhauled soon
   */
  createAsset?: Maybe<Asset>;
  /** Create one chapter */
  createChapter?: Maybe<Chapter>;
  /** Create one conclusion */
  createConclusion?: Maybe<Conclusion>;
  /** Create one course */
  createCourse?: Maybe<Course>;
  /** Create one demoModel */
  createDemoModel?: Maybe<DemoModel>;
  /** Create one lesson */
  createLesson?: Maybe<Lesson>;
  /** Create one liveLesson */
  createLiveLesson?: Maybe<LiveLesson>;
  /** Create one module */
  createModule?: Maybe<Module>;
  /** Create one practice */
  createPractice?: Maybe<Practice>;
  /** Create one presentation */
  createPresentation?: Maybe<Presentation>;
  /** Create one quiz */
  createQuiz?: Maybe<Quiz>;
  /** Create one scheduledRelease */
  createScheduledRelease?: Maybe<ScheduledRelease>;
  /** Create one subscribe */
  createSubscribe?: Maybe<Subscribe>;
  /** Create one teacher */
  createTeacher?: Maybe<Teacher>;
  /** Delete one asset from _all_ existing stages. Returns deleted document. */
  deleteAsset?: Maybe<Asset>;
  /** Delete one chapter from _all_ existing stages. Returns deleted document. */
  deleteChapter?: Maybe<Chapter>;
  /** Delete one conclusion from _all_ existing stages. Returns deleted document. */
  deleteConclusion?: Maybe<Conclusion>;
  /** Delete one course from _all_ existing stages. Returns deleted document. */
  deleteCourse?: Maybe<Course>;
  /** Delete one demoModel from _all_ existing stages. Returns deleted document. */
  deleteDemoModel?: Maybe<DemoModel>;
  /** Delete one lesson from _all_ existing stages. Returns deleted document. */
  deleteLesson?: Maybe<Lesson>;
  /** Delete one liveLesson from _all_ existing stages. Returns deleted document. */
  deleteLiveLesson?: Maybe<LiveLesson>;
  /**
   * Delete many Asset documents
   * @deprecated Please use the new paginated many mutation (deleteManyAssetsConnection)
   */
  deleteManyAssets: BatchPayload;
  /** Delete many Asset documents, return deleted documents */
  deleteManyAssetsConnection: AssetConnection;
  /**
   * Delete many Chapter documents
   * @deprecated Please use the new paginated many mutation (deleteManyChaptersConnection)
   */
  deleteManyChapters: BatchPayload;
  /** Delete many Chapter documents, return deleted documents */
  deleteManyChaptersConnection: ChapterConnection;
  /**
   * Delete many Conclusion documents
   * @deprecated Please use the new paginated many mutation (deleteManyConclusionsConnection)
   */
  deleteManyConclusions: BatchPayload;
  /** Delete many Conclusion documents, return deleted documents */
  deleteManyConclusionsConnection: ConclusionConnection;
  /**
   * Delete many Course documents
   * @deprecated Please use the new paginated many mutation (deleteManyCoursesConnection)
   */
  deleteManyCourses: BatchPayload;
  /** Delete many Course documents, return deleted documents */
  deleteManyCoursesConnection: CourseConnection;
  /**
   * Delete many DemoModel documents
   * @deprecated Please use the new paginated many mutation (deleteManyDemoModelsConnection)
   */
  deleteManyDemoModels: BatchPayload;
  /** Delete many DemoModel documents, return deleted documents */
  deleteManyDemoModelsConnection: DemoModelConnection;
  /**
   * Delete many Lesson documents
   * @deprecated Please use the new paginated many mutation (deleteManyLessonsConnection)
   */
  deleteManyLessons: BatchPayload;
  /** Delete many Lesson documents, return deleted documents */
  deleteManyLessonsConnection: LessonConnection;
  /**
   * Delete many LiveLesson documents
   * @deprecated Please use the new paginated many mutation (deleteManyLiveLessonsConnection)
   */
  deleteManyLiveLessons: BatchPayload;
  /** Delete many LiveLesson documents, return deleted documents */
  deleteManyLiveLessonsConnection: LiveLessonConnection;
  /**
   * Delete many Module documents
   * @deprecated Please use the new paginated many mutation (deleteManyModulesConnection)
   */
  deleteManyModules: BatchPayload;
  /** Delete many Module documents, return deleted documents */
  deleteManyModulesConnection: ModuleConnection;
  /**
   * Delete many Practice documents
   * @deprecated Please use the new paginated many mutation (deleteManyPracticesConnection)
   */
  deleteManyPractices: BatchPayload;
  /** Delete many Practice documents, return deleted documents */
  deleteManyPracticesConnection: PracticeConnection;
  /**
   * Delete many Presentation documents
   * @deprecated Please use the new paginated many mutation (deleteManyPresentationsConnection)
   */
  deleteManyPresentations: BatchPayload;
  /** Delete many Presentation documents, return deleted documents */
  deleteManyPresentationsConnection: PresentationConnection;
  /**
   * Delete many Quiz documents
   * @deprecated Please use the new paginated many mutation (deleteManyQuizzesConnection)
   */
  deleteManyQuizzes: BatchPayload;
  /** Delete many Quiz documents, return deleted documents */
  deleteManyQuizzesConnection: QuizConnection;
  /**
   * Delete many Subscribe documents
   * @deprecated Please use the new paginated many mutation (deleteManySubscribesConnection)
   */
  deleteManySubscribes: BatchPayload;
  /** Delete many Subscribe documents, return deleted documents */
  deleteManySubscribesConnection: SubscribeConnection;
  /**
   * Delete many Teacher documents
   * @deprecated Please use the new paginated many mutation (deleteManyTeachersConnection)
   */
  deleteManyTeachers: BatchPayload;
  /** Delete many Teacher documents, return deleted documents */
  deleteManyTeachersConnection: TeacherConnection;
  /** Delete one module from _all_ existing stages. Returns deleted document. */
  deleteModule?: Maybe<Module>;
  /** Delete one practice from _all_ existing stages. Returns deleted document. */
  deletePractice?: Maybe<Practice>;
  /** Delete one presentation from _all_ existing stages. Returns deleted document. */
  deletePresentation?: Maybe<Presentation>;
  /** Delete one quiz from _all_ existing stages. Returns deleted document. */
  deleteQuiz?: Maybe<Quiz>;
  /** Delete and return scheduled operation */
  deleteScheduledOperation?: Maybe<ScheduledOperation>;
  /** Delete one scheduledRelease from _all_ existing stages. Returns deleted document. */
  deleteScheduledRelease?: Maybe<ScheduledRelease>;
  /** Delete one subscribe from _all_ existing stages. Returns deleted document. */
  deleteSubscribe?: Maybe<Subscribe>;
  /** Delete one teacher from _all_ existing stages. Returns deleted document. */
  deleteTeacher?: Maybe<Teacher>;
  /** Publish one asset */
  publishAsset?: Maybe<Asset>;
  /** Publish one chapter */
  publishChapter?: Maybe<Chapter>;
  /** Publish one conclusion */
  publishConclusion?: Maybe<Conclusion>;
  /** Publish one course */
  publishCourse?: Maybe<Course>;
  /** Publish one demoModel */
  publishDemoModel?: Maybe<DemoModel>;
  /** Publish one lesson */
  publishLesson?: Maybe<Lesson>;
  /** Publish one liveLesson */
  publishLiveLesson?: Maybe<LiveLesson>;
  /**
   * Publish many Asset documents
   * @deprecated Please use the new paginated many mutation (publishManyAssetsConnection)
   */
  publishManyAssets: BatchPayload;
  /** Publish many Asset documents */
  publishManyAssetsConnection: AssetConnection;
  /**
   * Publish many Chapter documents
   * @deprecated Please use the new paginated many mutation (publishManyChaptersConnection)
   */
  publishManyChapters: BatchPayload;
  /** Publish many Chapter documents */
  publishManyChaptersConnection: ChapterConnection;
  /**
   * Publish many Conclusion documents
   * @deprecated Please use the new paginated many mutation (publishManyConclusionsConnection)
   */
  publishManyConclusions: BatchPayload;
  /** Publish many Conclusion documents */
  publishManyConclusionsConnection: ConclusionConnection;
  /**
   * Publish many Course documents
   * @deprecated Please use the new paginated many mutation (publishManyCoursesConnection)
   */
  publishManyCourses: BatchPayload;
  /** Publish many Course documents */
  publishManyCoursesConnection: CourseConnection;
  /**
   * Publish many DemoModel documents
   * @deprecated Please use the new paginated many mutation (publishManyDemoModelsConnection)
   */
  publishManyDemoModels: BatchPayload;
  /** Publish many DemoModel documents */
  publishManyDemoModelsConnection: DemoModelConnection;
  /**
   * Publish many Lesson documents
   * @deprecated Please use the new paginated many mutation (publishManyLessonsConnection)
   */
  publishManyLessons: BatchPayload;
  /** Publish many Lesson documents */
  publishManyLessonsConnection: LessonConnection;
  /**
   * Publish many LiveLesson documents
   * @deprecated Please use the new paginated many mutation (publishManyLiveLessonsConnection)
   */
  publishManyLiveLessons: BatchPayload;
  /** Publish many LiveLesson documents */
  publishManyLiveLessonsConnection: LiveLessonConnection;
  /**
   * Publish many Module documents
   * @deprecated Please use the new paginated many mutation (publishManyModulesConnection)
   */
  publishManyModules: BatchPayload;
  /** Publish many Module documents */
  publishManyModulesConnection: ModuleConnection;
  /**
   * Publish many Practice documents
   * @deprecated Please use the new paginated many mutation (publishManyPracticesConnection)
   */
  publishManyPractices: BatchPayload;
  /** Publish many Practice documents */
  publishManyPracticesConnection: PracticeConnection;
  /**
   * Publish many Presentation documents
   * @deprecated Please use the new paginated many mutation (publishManyPresentationsConnection)
   */
  publishManyPresentations: BatchPayload;
  /** Publish many Presentation documents */
  publishManyPresentationsConnection: PresentationConnection;
  /**
   * Publish many Quiz documents
   * @deprecated Please use the new paginated many mutation (publishManyQuizzesConnection)
   */
  publishManyQuizzes: BatchPayload;
  /** Publish many Quiz documents */
  publishManyQuizzesConnection: QuizConnection;
  /**
   * Publish many Subscribe documents
   * @deprecated Please use the new paginated many mutation (publishManySubscribesConnection)
   */
  publishManySubscribes: BatchPayload;
  /** Publish many Subscribe documents */
  publishManySubscribesConnection: SubscribeConnection;
  /**
   * Publish many Teacher documents
   * @deprecated Please use the new paginated many mutation (publishManyTeachersConnection)
   */
  publishManyTeachers: BatchPayload;
  /** Publish many Teacher documents */
  publishManyTeachersConnection: TeacherConnection;
  /** Publish one module */
  publishModule?: Maybe<Module>;
  /** Publish one practice */
  publishPractice?: Maybe<Practice>;
  /** Publish one presentation */
  publishPresentation?: Maybe<Presentation>;
  /** Publish one quiz */
  publishQuiz?: Maybe<Quiz>;
  /** Publish one subscribe */
  publishSubscribe?: Maybe<Subscribe>;
  /** Publish one teacher */
  publishTeacher?: Maybe<Teacher>;
  /** Schedule to publish one asset */
  schedulePublishAsset?: Maybe<Asset>;
  /** Schedule to publish one chapter */
  schedulePublishChapter?: Maybe<Chapter>;
  /** Schedule to publish one conclusion */
  schedulePublishConclusion?: Maybe<Conclusion>;
  /** Schedule to publish one course */
  schedulePublishCourse?: Maybe<Course>;
  /** Schedule to publish one demoModel */
  schedulePublishDemoModel?: Maybe<DemoModel>;
  /** Schedule to publish one lesson */
  schedulePublishLesson?: Maybe<Lesson>;
  /** Schedule to publish one liveLesson */
  schedulePublishLiveLesson?: Maybe<LiveLesson>;
  /** Schedule to publish one module */
  schedulePublishModule?: Maybe<Module>;
  /** Schedule to publish one practice */
  schedulePublishPractice?: Maybe<Practice>;
  /** Schedule to publish one presentation */
  schedulePublishPresentation?: Maybe<Presentation>;
  /** Schedule to publish one quiz */
  schedulePublishQuiz?: Maybe<Quiz>;
  /** Schedule to publish one subscribe */
  schedulePublishSubscribe?: Maybe<Subscribe>;
  /** Schedule to publish one teacher */
  schedulePublishTeacher?: Maybe<Teacher>;
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishAsset?: Maybe<Asset>;
  /** Unpublish one chapter from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishChapter?: Maybe<Chapter>;
  /** Unpublish one conclusion from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishConclusion?: Maybe<Conclusion>;
  /** Unpublish one course from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishCourse?: Maybe<Course>;
  /** Unpublish one demoModel from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishDemoModel?: Maybe<DemoModel>;
  /** Unpublish one lesson from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishLesson?: Maybe<Lesson>;
  /** Unpublish one liveLesson from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishLiveLesson?: Maybe<LiveLesson>;
  /** Unpublish one module from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishModule?: Maybe<Module>;
  /** Unpublish one practice from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishPractice?: Maybe<Practice>;
  /** Unpublish one presentation from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishPresentation?: Maybe<Presentation>;
  /** Unpublish one quiz from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishQuiz?: Maybe<Quiz>;
  /** Unpublish one subscribe from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishSubscribe?: Maybe<Subscribe>;
  /** Unpublish one teacher from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishTeacher?: Maybe<Teacher>;
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishAsset?: Maybe<Asset>;
  /** Unpublish one chapter from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishChapter?: Maybe<Chapter>;
  /** Unpublish one conclusion from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishConclusion?: Maybe<Conclusion>;
  /** Unpublish one course from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishCourse?: Maybe<Course>;
  /** Unpublish one demoModel from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishDemoModel?: Maybe<DemoModel>;
  /** Unpublish one lesson from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishLesson?: Maybe<Lesson>;
  /** Unpublish one liveLesson from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishLiveLesson?: Maybe<LiveLesson>;
  /**
   * Unpublish many Asset documents
   * @deprecated Please use the new paginated many mutation (unpublishManyAssetsConnection)
   */
  unpublishManyAssets: BatchPayload;
  /** Find many Asset documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyAssetsConnection: AssetConnection;
  /**
   * Unpublish many Chapter documents
   * @deprecated Please use the new paginated many mutation (unpublishManyChaptersConnection)
   */
  unpublishManyChapters: BatchPayload;
  /** Find many Chapter documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyChaptersConnection: ChapterConnection;
  /**
   * Unpublish many Conclusion documents
   * @deprecated Please use the new paginated many mutation (unpublishManyConclusionsConnection)
   */
  unpublishManyConclusions: BatchPayload;
  /** Find many Conclusion documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyConclusionsConnection: ConclusionConnection;
  /**
   * Unpublish many Course documents
   * @deprecated Please use the new paginated many mutation (unpublishManyCoursesConnection)
   */
  unpublishManyCourses: BatchPayload;
  /** Find many Course documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyCoursesConnection: CourseConnection;
  /**
   * Unpublish many DemoModel documents
   * @deprecated Please use the new paginated many mutation (unpublishManyDemoModelsConnection)
   */
  unpublishManyDemoModels: BatchPayload;
  /** Find many DemoModel documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyDemoModelsConnection: DemoModelConnection;
  /**
   * Unpublish many Lesson documents
   * @deprecated Please use the new paginated many mutation (unpublishManyLessonsConnection)
   */
  unpublishManyLessons: BatchPayload;
  /** Find many Lesson documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyLessonsConnection: LessonConnection;
  /**
   * Unpublish many LiveLesson documents
   * @deprecated Please use the new paginated many mutation (unpublishManyLiveLessonsConnection)
   */
  unpublishManyLiveLessons: BatchPayload;
  /** Find many LiveLesson documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyLiveLessonsConnection: LiveLessonConnection;
  /**
   * Unpublish many Module documents
   * @deprecated Please use the new paginated many mutation (unpublishManyModulesConnection)
   */
  unpublishManyModules: BatchPayload;
  /** Find many Module documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyModulesConnection: ModuleConnection;
  /**
   * Unpublish many Practice documents
   * @deprecated Please use the new paginated many mutation (unpublishManyPracticesConnection)
   */
  unpublishManyPractices: BatchPayload;
  /** Find many Practice documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyPracticesConnection: PracticeConnection;
  /**
   * Unpublish many Presentation documents
   * @deprecated Please use the new paginated many mutation (unpublishManyPresentationsConnection)
   */
  unpublishManyPresentations: BatchPayload;
  /** Find many Presentation documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyPresentationsConnection: PresentationConnection;
  /**
   * Unpublish many Quiz documents
   * @deprecated Please use the new paginated many mutation (unpublishManyQuizzesConnection)
   */
  unpublishManyQuizzes: BatchPayload;
  /** Find many Quiz documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyQuizzesConnection: QuizConnection;
  /**
   * Unpublish many Subscribe documents
   * @deprecated Please use the new paginated many mutation (unpublishManySubscribesConnection)
   */
  unpublishManySubscribes: BatchPayload;
  /** Find many Subscribe documents that match criteria in specified stage and unpublish from target stages */
  unpublishManySubscribesConnection: SubscribeConnection;
  /**
   * Unpublish many Teacher documents
   * @deprecated Please use the new paginated many mutation (unpublishManyTeachersConnection)
   */
  unpublishManyTeachers: BatchPayload;
  /** Find many Teacher documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyTeachersConnection: TeacherConnection;
  /** Unpublish one module from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishModule?: Maybe<Module>;
  /** Unpublish one practice from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishPractice?: Maybe<Practice>;
  /** Unpublish one presentation from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishPresentation?: Maybe<Presentation>;
  /** Unpublish one quiz from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishQuiz?: Maybe<Quiz>;
  /** Unpublish one subscribe from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishSubscribe?: Maybe<Subscribe>;
  /** Unpublish one teacher from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishTeacher?: Maybe<Teacher>;
  /** Update one asset */
  updateAsset?: Maybe<Asset>;
  /** Update one chapter */
  updateChapter?: Maybe<Chapter>;
  /** Update one conclusion */
  updateConclusion?: Maybe<Conclusion>;
  /** Update one course */
  updateCourse?: Maybe<Course>;
  /** Update one demoModel */
  updateDemoModel?: Maybe<DemoModel>;
  /** Update one lesson */
  updateLesson?: Maybe<Lesson>;
  /** Update one liveLesson */
  updateLiveLesson?: Maybe<LiveLesson>;
  /**
   * Update many assets
   * @deprecated Please use the new paginated many mutation (updateManyAssetsConnection)
   */
  updateManyAssets: BatchPayload;
  /** Update many Asset documents */
  updateManyAssetsConnection: AssetConnection;
  /**
   * Update many chapters
   * @deprecated Please use the new paginated many mutation (updateManyChaptersConnection)
   */
  updateManyChapters: BatchPayload;
  /** Update many Chapter documents */
  updateManyChaptersConnection: ChapterConnection;
  /**
   * Update many conclusions
   * @deprecated Please use the new paginated many mutation (updateManyConclusionsConnection)
   */
  updateManyConclusions: BatchPayload;
  /** Update many Conclusion documents */
  updateManyConclusionsConnection: ConclusionConnection;
  /**
   * Update many courses
   * @deprecated Please use the new paginated many mutation (updateManyCoursesConnection)
   */
  updateManyCourses: BatchPayload;
  /** Update many Course documents */
  updateManyCoursesConnection: CourseConnection;
  /**
   * Update many demoModels
   * @deprecated Please use the new paginated many mutation (updateManyDemoModelsConnection)
   */
  updateManyDemoModels: BatchPayload;
  /** Update many DemoModel documents */
  updateManyDemoModelsConnection: DemoModelConnection;
  /**
   * Update many lessons
   * @deprecated Please use the new paginated many mutation (updateManyLessonsConnection)
   */
  updateManyLessons: BatchPayload;
  /** Update many Lesson documents */
  updateManyLessonsConnection: LessonConnection;
  /**
   * Update many liveLessons
   * @deprecated Please use the new paginated many mutation (updateManyLiveLessonsConnection)
   */
  updateManyLiveLessons: BatchPayload;
  /** Update many LiveLesson documents */
  updateManyLiveLessonsConnection: LiveLessonConnection;
  /**
   * Update many modules
   * @deprecated Please use the new paginated many mutation (updateManyModulesConnection)
   */
  updateManyModules: BatchPayload;
  /** Update many Module documents */
  updateManyModulesConnection: ModuleConnection;
  /**
   * Update many practices
   * @deprecated Please use the new paginated many mutation (updateManyPracticesConnection)
   */
  updateManyPractices: BatchPayload;
  /** Update many Practice documents */
  updateManyPracticesConnection: PracticeConnection;
  /**
   * Update many presentations
   * @deprecated Please use the new paginated many mutation (updateManyPresentationsConnection)
   */
  updateManyPresentations: BatchPayload;
  /** Update many Presentation documents */
  updateManyPresentationsConnection: PresentationConnection;
  /**
   * Update many quizzes
   * @deprecated Please use the new paginated many mutation (updateManyQuizzesConnection)
   */
  updateManyQuizzes: BatchPayload;
  /** Update many Quiz documents */
  updateManyQuizzesConnection: QuizConnection;
  /**
   * Update many subscribes
   * @deprecated Please use the new paginated many mutation (updateManySubscribesConnection)
   */
  updateManySubscribes: BatchPayload;
  /** Update many Subscribe documents */
  updateManySubscribesConnection: SubscribeConnection;
  /**
   * Update many teachers
   * @deprecated Please use the new paginated many mutation (updateManyTeachersConnection)
   */
  updateManyTeachers: BatchPayload;
  /** Update many Teacher documents */
  updateManyTeachersConnection: TeacherConnection;
  /** Update one module */
  updateModule?: Maybe<Module>;
  /** Update one practice */
  updatePractice?: Maybe<Practice>;
  /** Update one presentation */
  updatePresentation?: Maybe<Presentation>;
  /** Update one quiz */
  updateQuiz?: Maybe<Quiz>;
  /** Update one scheduledRelease */
  updateScheduledRelease?: Maybe<ScheduledRelease>;
  /** Update one subscribe */
  updateSubscribe?: Maybe<Subscribe>;
  /** Update one teacher */
  updateTeacher?: Maybe<Teacher>;
  /** Upsert one asset */
  upsertAsset?: Maybe<Asset>;
  /** Upsert one chapter */
  upsertChapter?: Maybe<Chapter>;
  /** Upsert one conclusion */
  upsertConclusion?: Maybe<Conclusion>;
  /** Upsert one course */
  upsertCourse?: Maybe<Course>;
  /** Upsert one demoModel */
  upsertDemoModel?: Maybe<DemoModel>;
  /** Upsert one lesson */
  upsertLesson?: Maybe<Lesson>;
  /** Upsert one liveLesson */
  upsertLiveLesson?: Maybe<LiveLesson>;
  /** Upsert one module */
  upsertModule?: Maybe<Module>;
  /** Upsert one practice */
  upsertPractice?: Maybe<Practice>;
  /** Upsert one presentation */
  upsertPresentation?: Maybe<Presentation>;
  /** Upsert one quiz */
  upsertQuiz?: Maybe<Quiz>;
  /** Upsert one subscribe */
  upsertSubscribe?: Maybe<Subscribe>;
  /** Upsert one teacher */
  upsertTeacher?: Maybe<Teacher>;
};


export type MutationCreateAssetArgs = {
  data: AssetCreateInput;
};


export type MutationCreateChapterArgs = {
  data: ChapterCreateInput;
};


export type MutationCreateConclusionArgs = {
  data: ConclusionCreateInput;
};


export type MutationCreateCourseArgs = {
  data: CourseCreateInput;
};


export type MutationCreateDemoModelArgs = {
  data: DemoModelCreateInput;
};


export type MutationCreateLessonArgs = {
  data: LessonCreateInput;
};


export type MutationCreateLiveLessonArgs = {
  data: LiveLessonCreateInput;
};


export type MutationCreateModuleArgs = {
  data: ModuleCreateInput;
};


export type MutationCreatePracticeArgs = {
  data: PracticeCreateInput;
};


export type MutationCreatePresentationArgs = {
  data: PresentationCreateInput;
};


export type MutationCreateQuizArgs = {
  data: QuizCreateInput;
};


export type MutationCreateScheduledReleaseArgs = {
  data: ScheduledReleaseCreateInput;
};


export type MutationCreateSubscribeArgs = {
  data: SubscribeCreateInput;
};


export type MutationCreateTeacherArgs = {
  data: TeacherCreateInput;
};


export type MutationDeleteAssetArgs = {
  where: AssetWhereUniqueInput;
};


export type MutationDeleteChapterArgs = {
  where: ChapterWhereUniqueInput;
};


export type MutationDeleteConclusionArgs = {
  where: ConclusionWhereUniqueInput;
};


export type MutationDeleteCourseArgs = {
  where: CourseWhereUniqueInput;
};


export type MutationDeleteDemoModelArgs = {
  where: DemoModelWhereUniqueInput;
};


export type MutationDeleteLessonArgs = {
  where: LessonWhereUniqueInput;
};


export type MutationDeleteLiveLessonArgs = {
  where: LiveLessonWhereUniqueInput;
};


export type MutationDeleteManyAssetsArgs = {
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationDeleteManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationDeleteManyChaptersArgs = {
  where?: InputMaybe<ChapterManyWhereInput>;
};


export type MutationDeleteManyChaptersConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ChapterManyWhereInput>;
};


export type MutationDeleteManyConclusionsArgs = {
  where?: InputMaybe<ConclusionManyWhereInput>;
};


export type MutationDeleteManyConclusionsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ConclusionManyWhereInput>;
};


export type MutationDeleteManyCoursesArgs = {
  where?: InputMaybe<CourseManyWhereInput>;
};


export type MutationDeleteManyCoursesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CourseManyWhereInput>;
};


export type MutationDeleteManyDemoModelsArgs = {
  where?: InputMaybe<DemoModelManyWhereInput>;
};


export type MutationDeleteManyDemoModelsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<DemoModelManyWhereInput>;
};


export type MutationDeleteManyLessonsArgs = {
  where?: InputMaybe<LessonManyWhereInput>;
};


export type MutationDeleteManyLessonsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<LessonManyWhereInput>;
};


export type MutationDeleteManyLiveLessonsArgs = {
  where?: InputMaybe<LiveLessonManyWhereInput>;
};


export type MutationDeleteManyLiveLessonsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<LiveLessonManyWhereInput>;
};


export type MutationDeleteManyModulesArgs = {
  where?: InputMaybe<ModuleManyWhereInput>;
};


export type MutationDeleteManyModulesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ModuleManyWhereInput>;
};


export type MutationDeleteManyPracticesArgs = {
  where?: InputMaybe<PracticeManyWhereInput>;
};


export type MutationDeleteManyPracticesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PracticeManyWhereInput>;
};


export type MutationDeleteManyPresentationsArgs = {
  where?: InputMaybe<PresentationManyWhereInput>;
};


export type MutationDeleteManyPresentationsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PresentationManyWhereInput>;
};


export type MutationDeleteManyQuizzesArgs = {
  where?: InputMaybe<QuizManyWhereInput>;
};


export type MutationDeleteManyQuizzesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<QuizManyWhereInput>;
};


export type MutationDeleteManySubscribesArgs = {
  where?: InputMaybe<SubscribeManyWhereInput>;
};


export type MutationDeleteManySubscribesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SubscribeManyWhereInput>;
};


export type MutationDeleteManyTeachersArgs = {
  where?: InputMaybe<TeacherManyWhereInput>;
};


export type MutationDeleteManyTeachersConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TeacherManyWhereInput>;
};


export type MutationDeleteModuleArgs = {
  where: ModuleWhereUniqueInput;
};


export type MutationDeletePracticeArgs = {
  where: PracticeWhereUniqueInput;
};


export type MutationDeletePresentationArgs = {
  where: PresentationWhereUniqueInput;
};


export type MutationDeleteQuizArgs = {
  where: QuizWhereUniqueInput;
};


export type MutationDeleteScheduledOperationArgs = {
  where: ScheduledOperationWhereUniqueInput;
};


export type MutationDeleteScheduledReleaseArgs = {
  where: ScheduledReleaseWhereUniqueInput;
};


export type MutationDeleteSubscribeArgs = {
  where: SubscribeWhereUniqueInput;
};


export type MutationDeleteTeacherArgs = {
  where: TeacherWhereUniqueInput;
};


export type MutationPublishAssetArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  to?: Array<Stage>;
  where: AssetWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPublishChapterArgs = {
  to?: Array<Stage>;
  where: ChapterWhereUniqueInput;
};


export type MutationPublishConclusionArgs = {
  to?: Array<Stage>;
  where: ConclusionWhereUniqueInput;
};


export type MutationPublishCourseArgs = {
  to?: Array<Stage>;
  where: CourseWhereUniqueInput;
};


export type MutationPublishDemoModelArgs = {
  to?: Array<Stage>;
  where: DemoModelWhereUniqueInput;
};


export type MutationPublishLessonArgs = {
  to?: Array<Stage>;
  where: LessonWhereUniqueInput;
};


export type MutationPublishLiveLessonArgs = {
  to?: Array<Stage>;
  where: LiveLessonWhereUniqueInput;
};


export type MutationPublishManyAssetsArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  to?: Array<Stage>;
  where?: InputMaybe<AssetManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPublishManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<AssetManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPublishManyChaptersArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<ChapterManyWhereInput>;
};


export type MutationPublishManyChaptersConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<ChapterManyWhereInput>;
};


export type MutationPublishManyConclusionsArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<ConclusionManyWhereInput>;
};


export type MutationPublishManyConclusionsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<ConclusionManyWhereInput>;
};


export type MutationPublishManyCoursesArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<CourseManyWhereInput>;
};


export type MutationPublishManyCoursesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<CourseManyWhereInput>;
};


export type MutationPublishManyDemoModelsArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<DemoModelManyWhereInput>;
};


export type MutationPublishManyDemoModelsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<DemoModelManyWhereInput>;
};


export type MutationPublishManyLessonsArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<LessonManyWhereInput>;
};


export type MutationPublishManyLessonsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<LessonManyWhereInput>;
};


export type MutationPublishManyLiveLessonsArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<LiveLessonManyWhereInput>;
};


export type MutationPublishManyLiveLessonsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<LiveLessonManyWhereInput>;
};


export type MutationPublishManyModulesArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<ModuleManyWhereInput>;
};


export type MutationPublishManyModulesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<ModuleManyWhereInput>;
};


export type MutationPublishManyPracticesArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<PracticeManyWhereInput>;
};


export type MutationPublishManyPracticesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<PracticeManyWhereInput>;
};


export type MutationPublishManyPresentationsArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<PresentationManyWhereInput>;
};


export type MutationPublishManyPresentationsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<PresentationManyWhereInput>;
};


export type MutationPublishManyQuizzesArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<QuizManyWhereInput>;
};


export type MutationPublishManyQuizzesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<QuizManyWhereInput>;
};


export type MutationPublishManySubscribesArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<SubscribeManyWhereInput>;
};


export type MutationPublishManySubscribesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<SubscribeManyWhereInput>;
};


export type MutationPublishManyTeachersArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<TeacherManyWhereInput>;
};


export type MutationPublishManyTeachersConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<TeacherManyWhereInput>;
};


export type MutationPublishModuleArgs = {
  to?: Array<Stage>;
  where: ModuleWhereUniqueInput;
};


export type MutationPublishPracticeArgs = {
  to?: Array<Stage>;
  where: PracticeWhereUniqueInput;
};


export type MutationPublishPresentationArgs = {
  to?: Array<Stage>;
  where: PresentationWhereUniqueInput;
};


export type MutationPublishQuizArgs = {
  to?: Array<Stage>;
  where: QuizWhereUniqueInput;
};


export type MutationPublishSubscribeArgs = {
  to?: Array<Stage>;
  where: SubscribeWhereUniqueInput;
};


export type MutationPublishTeacherArgs = {
  to?: Array<Stage>;
  where: TeacherWhereUniqueInput;
};


export type MutationSchedulePublishAssetArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: AssetWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationSchedulePublishChapterArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: ChapterWhereUniqueInput;
};


export type MutationSchedulePublishConclusionArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: ConclusionWhereUniqueInput;
};


export type MutationSchedulePublishCourseArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: CourseWhereUniqueInput;
};


export type MutationSchedulePublishDemoModelArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: DemoModelWhereUniqueInput;
};


export type MutationSchedulePublishLessonArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: LessonWhereUniqueInput;
};


export type MutationSchedulePublishLiveLessonArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: LiveLessonWhereUniqueInput;
};


export type MutationSchedulePublishModuleArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: ModuleWhereUniqueInput;
};


export type MutationSchedulePublishPracticeArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: PracticeWhereUniqueInput;
};


export type MutationSchedulePublishPresentationArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: PresentationWhereUniqueInput;
};


export type MutationSchedulePublishQuizArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: QuizWhereUniqueInput;
};


export type MutationSchedulePublishSubscribeArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: SubscribeWhereUniqueInput;
};


export type MutationSchedulePublishTeacherArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: TeacherWhereUniqueInput;
};


export type MutationScheduleUnpublishAssetArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where: AssetWhereUniqueInput;
};


export type MutationScheduleUnpublishChapterArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  where: ChapterWhereUniqueInput;
};


export type MutationScheduleUnpublishConclusionArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  where: ConclusionWhereUniqueInput;
};


export type MutationScheduleUnpublishCourseArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  where: CourseWhereUniqueInput;
};


export type MutationScheduleUnpublishDemoModelArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  where: DemoModelWhereUniqueInput;
};


export type MutationScheduleUnpublishLessonArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  where: LessonWhereUniqueInput;
};


export type MutationScheduleUnpublishLiveLessonArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  where: LiveLessonWhereUniqueInput;
};


export type MutationScheduleUnpublishModuleArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  where: ModuleWhereUniqueInput;
};


export type MutationScheduleUnpublishPracticeArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  where: PracticeWhereUniqueInput;
};


export type MutationScheduleUnpublishPresentationArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  where: PresentationWhereUniqueInput;
};


export type MutationScheduleUnpublishQuizArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  where: QuizWhereUniqueInput;
};


export type MutationScheduleUnpublishSubscribeArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  where: SubscribeWhereUniqueInput;
};


export type MutationScheduleUnpublishTeacherArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  where: TeacherWhereUniqueInput;
};


export type MutationUnpublishAssetArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where: AssetWhereUniqueInput;
};


export type MutationUnpublishChapterArgs = {
  from?: Array<Stage>;
  where: ChapterWhereUniqueInput;
};


export type MutationUnpublishConclusionArgs = {
  from?: Array<Stage>;
  where: ConclusionWhereUniqueInput;
};


export type MutationUnpublishCourseArgs = {
  from?: Array<Stage>;
  where: CourseWhereUniqueInput;
};


export type MutationUnpublishDemoModelArgs = {
  from?: Array<Stage>;
  where: DemoModelWhereUniqueInput;
};


export type MutationUnpublishLessonArgs = {
  from?: Array<Stage>;
  where: LessonWhereUniqueInput;
};


export type MutationUnpublishLiveLessonArgs = {
  from?: Array<Stage>;
  where: LiveLessonWhereUniqueInput;
};


export type MutationUnpublishManyAssetsArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationUnpublishManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationUnpublishManyChaptersArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<ChapterManyWhereInput>;
};


export type MutationUnpublishManyChaptersConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<ChapterManyWhereInput>;
};


export type MutationUnpublishManyConclusionsArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<ConclusionManyWhereInput>;
};


export type MutationUnpublishManyConclusionsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<ConclusionManyWhereInput>;
};


export type MutationUnpublishManyCoursesArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<CourseManyWhereInput>;
};


export type MutationUnpublishManyCoursesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<CourseManyWhereInput>;
};


export type MutationUnpublishManyDemoModelsArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<DemoModelManyWhereInput>;
};


export type MutationUnpublishManyDemoModelsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<DemoModelManyWhereInput>;
};


export type MutationUnpublishManyLessonsArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<LessonManyWhereInput>;
};


export type MutationUnpublishManyLessonsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<LessonManyWhereInput>;
};


export type MutationUnpublishManyLiveLessonsArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<LiveLessonManyWhereInput>;
};


export type MutationUnpublishManyLiveLessonsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<LiveLessonManyWhereInput>;
};


export type MutationUnpublishManyModulesArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<ModuleManyWhereInput>;
};


export type MutationUnpublishManyModulesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<ModuleManyWhereInput>;
};


export type MutationUnpublishManyPracticesArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<PracticeManyWhereInput>;
};


export type MutationUnpublishManyPracticesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<PracticeManyWhereInput>;
};


export type MutationUnpublishManyPresentationsArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<PresentationManyWhereInput>;
};


export type MutationUnpublishManyPresentationsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<PresentationManyWhereInput>;
};


export type MutationUnpublishManyQuizzesArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<QuizManyWhereInput>;
};


export type MutationUnpublishManyQuizzesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<QuizManyWhereInput>;
};


export type MutationUnpublishManySubscribesArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<SubscribeManyWhereInput>;
};


export type MutationUnpublishManySubscribesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<SubscribeManyWhereInput>;
};


export type MutationUnpublishManyTeachersArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<TeacherManyWhereInput>;
};


export type MutationUnpublishManyTeachersConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<TeacherManyWhereInput>;
};


export type MutationUnpublishModuleArgs = {
  from?: Array<Stage>;
  where: ModuleWhereUniqueInput;
};


export type MutationUnpublishPracticeArgs = {
  from?: Array<Stage>;
  where: PracticeWhereUniqueInput;
};


export type MutationUnpublishPresentationArgs = {
  from?: Array<Stage>;
  where: PresentationWhereUniqueInput;
};


export type MutationUnpublishQuizArgs = {
  from?: Array<Stage>;
  where: QuizWhereUniqueInput;
};


export type MutationUnpublishSubscribeArgs = {
  from?: Array<Stage>;
  where: SubscribeWhereUniqueInput;
};


export type MutationUnpublishTeacherArgs = {
  from?: Array<Stage>;
  where: TeacherWhereUniqueInput;
};


export type MutationUpdateAssetArgs = {
  data: AssetUpdateInput;
  where: AssetWhereUniqueInput;
};


export type MutationUpdateChapterArgs = {
  data: ChapterUpdateInput;
  where: ChapterWhereUniqueInput;
};


export type MutationUpdateConclusionArgs = {
  data: ConclusionUpdateInput;
  where: ConclusionWhereUniqueInput;
};


export type MutationUpdateCourseArgs = {
  data: CourseUpdateInput;
  where: CourseWhereUniqueInput;
};


export type MutationUpdateDemoModelArgs = {
  data: DemoModelUpdateInput;
  where: DemoModelWhereUniqueInput;
};


export type MutationUpdateLessonArgs = {
  data: LessonUpdateInput;
  where: LessonWhereUniqueInput;
};


export type MutationUpdateLiveLessonArgs = {
  data: LiveLessonUpdateInput;
  where: LiveLessonWhereUniqueInput;
};


export type MutationUpdateManyAssetsArgs = {
  data: AssetUpdateManyInput;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationUpdateManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: AssetUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationUpdateManyChaptersArgs = {
  data: ChapterUpdateManyInput;
  where?: InputMaybe<ChapterManyWhereInput>;
};


export type MutationUpdateManyChaptersConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: ChapterUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ChapterManyWhereInput>;
};


export type MutationUpdateManyConclusionsArgs = {
  data: ConclusionUpdateManyInput;
  where?: InputMaybe<ConclusionManyWhereInput>;
};


export type MutationUpdateManyConclusionsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: ConclusionUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ConclusionManyWhereInput>;
};


export type MutationUpdateManyCoursesArgs = {
  data: CourseUpdateManyInput;
  where?: InputMaybe<CourseManyWhereInput>;
};


export type MutationUpdateManyCoursesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: CourseUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CourseManyWhereInput>;
};


export type MutationUpdateManyDemoModelsArgs = {
  data: DemoModelUpdateManyInput;
  where?: InputMaybe<DemoModelManyWhereInput>;
};


export type MutationUpdateManyDemoModelsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: DemoModelUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<DemoModelManyWhereInput>;
};


export type MutationUpdateManyLessonsArgs = {
  data: LessonUpdateManyInput;
  where?: InputMaybe<LessonManyWhereInput>;
};


export type MutationUpdateManyLessonsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: LessonUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<LessonManyWhereInput>;
};


export type MutationUpdateManyLiveLessonsArgs = {
  data: LiveLessonUpdateManyInput;
  where?: InputMaybe<LiveLessonManyWhereInput>;
};


export type MutationUpdateManyLiveLessonsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: LiveLessonUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<LiveLessonManyWhereInput>;
};


export type MutationUpdateManyModulesArgs = {
  data: ModuleUpdateManyInput;
  where?: InputMaybe<ModuleManyWhereInput>;
};


export type MutationUpdateManyModulesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: ModuleUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ModuleManyWhereInput>;
};


export type MutationUpdateManyPracticesArgs = {
  data: PracticeUpdateManyInput;
  where?: InputMaybe<PracticeManyWhereInput>;
};


export type MutationUpdateManyPracticesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: PracticeUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PracticeManyWhereInput>;
};


export type MutationUpdateManyPresentationsArgs = {
  data: PresentationUpdateManyInput;
  where?: InputMaybe<PresentationManyWhereInput>;
};


export type MutationUpdateManyPresentationsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: PresentationUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PresentationManyWhereInput>;
};


export type MutationUpdateManyQuizzesArgs = {
  data: QuizUpdateManyInput;
  where?: InputMaybe<QuizManyWhereInput>;
};


export type MutationUpdateManyQuizzesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: QuizUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<QuizManyWhereInput>;
};


export type MutationUpdateManySubscribesArgs = {
  data: SubscribeUpdateManyInput;
  where?: InputMaybe<SubscribeManyWhereInput>;
};


export type MutationUpdateManySubscribesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: SubscribeUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SubscribeManyWhereInput>;
};


export type MutationUpdateManyTeachersArgs = {
  data: TeacherUpdateManyInput;
  where?: InputMaybe<TeacherManyWhereInput>;
};


export type MutationUpdateManyTeachersConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: TeacherUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TeacherManyWhereInput>;
};


export type MutationUpdateModuleArgs = {
  data: ModuleUpdateInput;
  where: ModuleWhereUniqueInput;
};


export type MutationUpdatePracticeArgs = {
  data: PracticeUpdateInput;
  where: PracticeWhereUniqueInput;
};


export type MutationUpdatePresentationArgs = {
  data: PresentationUpdateInput;
  where: PresentationWhereUniqueInput;
};


export type MutationUpdateQuizArgs = {
  data: QuizUpdateInput;
  where: QuizWhereUniqueInput;
};


export type MutationUpdateScheduledReleaseArgs = {
  data: ScheduledReleaseUpdateInput;
  where: ScheduledReleaseWhereUniqueInput;
};


export type MutationUpdateSubscribeArgs = {
  data: SubscribeUpdateInput;
  where: SubscribeWhereUniqueInput;
};


export type MutationUpdateTeacherArgs = {
  data: TeacherUpdateInput;
  where: TeacherWhereUniqueInput;
};


export type MutationUpsertAssetArgs = {
  upsert: AssetUpsertInput;
  where: AssetWhereUniqueInput;
};


export type MutationUpsertChapterArgs = {
  upsert: ChapterUpsertInput;
  where: ChapterWhereUniqueInput;
};


export type MutationUpsertConclusionArgs = {
  upsert: ConclusionUpsertInput;
  where: ConclusionWhereUniqueInput;
};


export type MutationUpsertCourseArgs = {
  upsert: CourseUpsertInput;
  where: CourseWhereUniqueInput;
};


export type MutationUpsertDemoModelArgs = {
  upsert: DemoModelUpsertInput;
  where: DemoModelWhereUniqueInput;
};


export type MutationUpsertLessonArgs = {
  upsert: LessonUpsertInput;
  where: LessonWhereUniqueInput;
};


export type MutationUpsertLiveLessonArgs = {
  upsert: LiveLessonUpsertInput;
  where: LiveLessonWhereUniqueInput;
};


export type MutationUpsertModuleArgs = {
  upsert: ModuleUpsertInput;
  where: ModuleWhereUniqueInput;
};


export type MutationUpsertPracticeArgs = {
  upsert: PracticeUpsertInput;
  where: PracticeWhereUniqueInput;
};


export type MutationUpsertPresentationArgs = {
  upsert: PresentationUpsertInput;
  where: PresentationWhereUniqueInput;
};


export type MutationUpsertQuizArgs = {
  upsert: QuizUpsertInput;
  where: QuizWhereUniqueInput;
};


export type MutationUpsertSubscribeArgs = {
  upsert: SubscribeUpsertInput;
  where: SubscribeWhereUniqueInput;
};


export type MutationUpsertTeacherArgs = {
  upsert: TeacherUpsertInput;
  where: TeacherWhereUniqueInput;
};

/** An object with an ID */
export type Node = {
  /** The id of the object. */
  id: Scalars['ID'];
  /** The Stage of an object */
  stage: Stage;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Number of items in the current page. */
  pageSize?: Maybe<Scalars['Int']>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Exercício sugerido */
export type Practice = Node & {
  __typename?: 'Practice';
  /** Conteúdo */
  content: Array<RichText>;
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Practice>;
  /** Tempo estimado para conclusão do exercício (em minutos) */
  duration: Scalars['Int'];
  /** List of Practice versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** Texto após duração */
  lastText: RichText;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  title: Scalars['String'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


/** Exercício sugerido */
export type PracticeCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Exercício sugerido */
export type PracticeDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


/** Exercício sugerido */
export type PracticeHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


/** Exercício sugerido */
export type PracticePublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Exercício sugerido */
export type PracticeScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


/** Exercício sugerido */
export type PracticeUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type PracticeConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: PracticeWhereUniqueInput;
};

/** A connection to a list of items. */
export type PracticeConnection = {
  __typename?: 'PracticeConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<PracticeEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type PracticeCreateInput = {
  cl66pw3z3ba7b01ut76di8owi?: InputMaybe<ChapterCreateManyInlineInput>;
  content?: InputMaybe<Array<Scalars['RichTextAST']>>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  duration: Scalars['Int'];
  lastText: Scalars['RichTextAST'];
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type PracticeCreateManyInlineInput = {
  /** Connect multiple existing Practice documents */
  connect?: InputMaybe<Array<PracticeWhereUniqueInput>>;
  /** Create and connect multiple existing Practice documents */
  create?: InputMaybe<Array<PracticeCreateInput>>;
};

export type PracticeCreateOneInlineInput = {
  /** Connect one existing Practice document */
  connect?: InputMaybe<PracticeWhereUniqueInput>;
  /** Create and connect one Practice document */
  create?: InputMaybe<PracticeCreateInput>;
};

/** An edge in a connection. */
export type PracticeEdge = {
  __typename?: 'PracticeEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Practice;
};

/** Identifies documents */
export type PracticeManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<PracticeWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<PracticeWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<PracticeWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  duration?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  duration_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  duration_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  duration_in?: InputMaybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  duration_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  duration_lte?: InputMaybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  duration_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  duration_not_in?: InputMaybe<Array<Scalars['Int']>>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum PracticeOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DurationAsc = 'duration_ASC',
  DurationDesc = 'duration_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type PracticeUpdateInput = {
  cl66pw3z3ba7b01ut76di8owi?: InputMaybe<ChapterUpdateManyInlineInput>;
  content?: InputMaybe<Array<Scalars['RichTextAST']>>;
  duration?: InputMaybe<Scalars['Int']>;
  lastText?: InputMaybe<Scalars['RichTextAST']>;
  title?: InputMaybe<Scalars['String']>;
};

export type PracticeUpdateManyInlineInput = {
  /** Connect multiple existing Practice documents */
  connect?: InputMaybe<Array<PracticeConnectInput>>;
  /** Create and connect multiple Practice documents */
  create?: InputMaybe<Array<PracticeCreateInput>>;
  /** Delete multiple Practice documents */
  delete?: InputMaybe<Array<PracticeWhereUniqueInput>>;
  /** Disconnect multiple Practice documents */
  disconnect?: InputMaybe<Array<PracticeWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Practice documents */
  set?: InputMaybe<Array<PracticeWhereUniqueInput>>;
  /** Update multiple Practice documents */
  update?: InputMaybe<Array<PracticeUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Practice documents */
  upsert?: InputMaybe<Array<PracticeUpsertWithNestedWhereUniqueInput>>;
};

export type PracticeUpdateManyInput = {
  content?: InputMaybe<Array<Scalars['RichTextAST']>>;
  duration?: InputMaybe<Scalars['Int']>;
  lastText?: InputMaybe<Scalars['RichTextAST']>;
  title?: InputMaybe<Scalars['String']>;
};

export type PracticeUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: PracticeUpdateManyInput;
  /** Document search */
  where: PracticeWhereInput;
};

export type PracticeUpdateOneInlineInput = {
  /** Connect existing Practice document */
  connect?: InputMaybe<PracticeWhereUniqueInput>;
  /** Create and connect one Practice document */
  create?: InputMaybe<PracticeCreateInput>;
  /** Delete currently connected Practice document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected Practice document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single Practice document */
  update?: InputMaybe<PracticeUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Practice document */
  upsert?: InputMaybe<PracticeUpsertWithNestedWhereUniqueInput>;
};

export type PracticeUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: PracticeUpdateInput;
  /** Unique document search */
  where: PracticeWhereUniqueInput;
};

export type PracticeUpsertInput = {
  /** Create document if it didn't exist */
  create: PracticeCreateInput;
  /** Update document if it exists */
  update: PracticeUpdateInput;
};

export type PracticeUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: PracticeUpsertInput;
  /** Unique document search */
  where: PracticeWhereUniqueInput;
};

/** Identifies documents */
export type PracticeWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<PracticeWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<PracticeWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<PracticeWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  duration?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  duration_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  duration_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  duration_in?: InputMaybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  duration_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  duration_lte?: InputMaybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  duration_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  duration_not_in?: InputMaybe<Array<Scalars['Int']>>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** References Practice record uniquely */
export type PracticeWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

/** Apresentação presente no início de todos os capítulos */
export type Presentation = Node & {
  __typename?: 'Presentation';
  chapter?: Maybe<Chapter>;
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Tempo de dedicação para a aula */
  dedication: Scalars['String'];
  /** Get the document in other stages */
  documentInStages: Array<Presentation>;
  /** List of Presentation versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** Último texto após tempo de dedicação */
  lasttext: RichText;
  /** Objetivos de aprendizagem */
  objectives: RichText;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  /** Resumo do capítulo */
  summary: RichText;
  /** Que bom que você veio! */
  title?: Maybe<Scalars['String']>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


/** Apresentação presente no início de todos os capítulos */
export type PresentationChapterArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Apresentação presente no início de todos os capítulos */
export type PresentationCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Apresentação presente no início de todos os capítulos */
export type PresentationDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


/** Apresentação presente no início de todos os capítulos */
export type PresentationHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


/** Apresentação presente no início de todos os capítulos */
export type PresentationPublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Apresentação presente no início de todos os capítulos */
export type PresentationScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


/** Apresentação presente no início de todos os capítulos */
export type PresentationUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type PresentationConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: PresentationWhereUniqueInput;
};

/** A connection to a list of items. */
export type PresentationConnection = {
  __typename?: 'PresentationConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<PresentationEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type PresentationCreateInput = {
  chapter?: InputMaybe<ChapterCreateOneInlineInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  dedication: Scalars['String'];
  lasttext: Scalars['RichTextAST'];
  objectives: Scalars['RichTextAST'];
  summary: Scalars['RichTextAST'];
  title?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type PresentationCreateManyInlineInput = {
  /** Connect multiple existing Presentation documents */
  connect?: InputMaybe<Array<PresentationWhereUniqueInput>>;
  /** Create and connect multiple existing Presentation documents */
  create?: InputMaybe<Array<PresentationCreateInput>>;
};

export type PresentationCreateOneInlineInput = {
  /** Connect one existing Presentation document */
  connect?: InputMaybe<PresentationWhereUniqueInput>;
  /** Create and connect one Presentation document */
  create?: InputMaybe<PresentationCreateInput>;
};

/** An edge in a connection. */
export type PresentationEdge = {
  __typename?: 'PresentationEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Presentation;
};

/** Identifies documents */
export type PresentationManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<PresentationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<PresentationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<PresentationWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  chapter?: InputMaybe<ChapterWhereInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  dedication?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  dedication_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  dedication_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  dedication_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  dedication_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  dedication_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  dedication_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  dedication_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  dedication_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  dedication_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum PresentationOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DedicationAsc = 'dedication_ASC',
  DedicationDesc = 'dedication_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type PresentationUpdateInput = {
  chapter?: InputMaybe<ChapterUpdateOneInlineInput>;
  dedication?: InputMaybe<Scalars['String']>;
  lasttext?: InputMaybe<Scalars['RichTextAST']>;
  objectives?: InputMaybe<Scalars['RichTextAST']>;
  summary?: InputMaybe<Scalars['RichTextAST']>;
  title?: InputMaybe<Scalars['String']>;
};

export type PresentationUpdateManyInlineInput = {
  /** Connect multiple existing Presentation documents */
  connect?: InputMaybe<Array<PresentationConnectInput>>;
  /** Create and connect multiple Presentation documents */
  create?: InputMaybe<Array<PresentationCreateInput>>;
  /** Delete multiple Presentation documents */
  delete?: InputMaybe<Array<PresentationWhereUniqueInput>>;
  /** Disconnect multiple Presentation documents */
  disconnect?: InputMaybe<Array<PresentationWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Presentation documents */
  set?: InputMaybe<Array<PresentationWhereUniqueInput>>;
  /** Update multiple Presentation documents */
  update?: InputMaybe<Array<PresentationUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Presentation documents */
  upsert?: InputMaybe<Array<PresentationUpsertWithNestedWhereUniqueInput>>;
};

export type PresentationUpdateManyInput = {
  dedication?: InputMaybe<Scalars['String']>;
  lasttext?: InputMaybe<Scalars['RichTextAST']>;
  objectives?: InputMaybe<Scalars['RichTextAST']>;
  summary?: InputMaybe<Scalars['RichTextAST']>;
  title?: InputMaybe<Scalars['String']>;
};

export type PresentationUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: PresentationUpdateManyInput;
  /** Document search */
  where: PresentationWhereInput;
};

export type PresentationUpdateOneInlineInput = {
  /** Connect existing Presentation document */
  connect?: InputMaybe<PresentationWhereUniqueInput>;
  /** Create and connect one Presentation document */
  create?: InputMaybe<PresentationCreateInput>;
  /** Delete currently connected Presentation document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected Presentation document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single Presentation document */
  update?: InputMaybe<PresentationUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Presentation document */
  upsert?: InputMaybe<PresentationUpsertWithNestedWhereUniqueInput>;
};

export type PresentationUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: PresentationUpdateInput;
  /** Unique document search */
  where: PresentationWhereUniqueInput;
};

export type PresentationUpsertInput = {
  /** Create document if it didn't exist */
  create: PresentationCreateInput;
  /** Update document if it exists */
  update: PresentationUpdateInput;
};

export type PresentationUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: PresentationUpsertInput;
  /** Unique document search */
  where: PresentationWhereUniqueInput;
};

/** Identifies documents */
export type PresentationWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<PresentationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<PresentationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<PresentationWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  chapter?: InputMaybe<ChapterWhereInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  dedication?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  dedication_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  dedication_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  dedication_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  dedication_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  dedication_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  dedication_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  dedication_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  dedication_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  dedication_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** References Presentation record uniquely */
export type PresentationWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type PublishLocaleInput = {
  /** Locales to publish */
  locale: Locale;
  /** Stages to publish selected locales to */
  stages: Array<Stage>;
};

export type Query = {
  __typename?: 'Query';
  /** Retrieve a single asset */
  asset?: Maybe<Asset>;
  /** Retrieve document version */
  assetVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple assets */
  assets: Array<Asset>;
  /** Retrieve multiple assets using the Relay connection interface */
  assetsConnection: AssetConnection;
  /** Retrieve a single chapter */
  chapter?: Maybe<Chapter>;
  /** Retrieve document version */
  chapterVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple chapters */
  chapters: Array<Chapter>;
  /** Retrieve multiple chapters using the Relay connection interface */
  chaptersConnection: ChapterConnection;
  /** Retrieve a single conclusion */
  conclusion?: Maybe<Conclusion>;
  /** Retrieve document version */
  conclusionVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple conclusions */
  conclusions: Array<Conclusion>;
  /** Retrieve multiple conclusions using the Relay connection interface */
  conclusionsConnection: ConclusionConnection;
  /** Retrieve a single course */
  course?: Maybe<Course>;
  /** Retrieve document version */
  courseVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple courses */
  courses: Array<Course>;
  /** Retrieve multiple courses using the Relay connection interface */
  coursesConnection: CourseConnection;
  /** Retrieve a single demoModel */
  demoModel?: Maybe<DemoModel>;
  /** Retrieve document version */
  demoModelVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple demoModels */
  demoModels: Array<DemoModel>;
  /** Retrieve multiple demoModels using the Relay connection interface */
  demoModelsConnection: DemoModelConnection;
  /** Retrieve a single lesson */
  lesson?: Maybe<Lesson>;
  /** Retrieve document version */
  lessonVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple lessons */
  lessons: Array<Lesson>;
  /** Retrieve multiple lessons using the Relay connection interface */
  lessonsConnection: LessonConnection;
  /** Retrieve a single liveLesson */
  liveLesson?: Maybe<LiveLesson>;
  /** Retrieve document version */
  liveLessonVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple liveLessons */
  liveLessons: Array<LiveLesson>;
  /** Retrieve multiple liveLessons using the Relay connection interface */
  liveLessonsConnection: LiveLessonConnection;
  /** Retrieve a single module */
  module?: Maybe<Module>;
  /** Retrieve document version */
  moduleVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple modules */
  modules: Array<Module>;
  /** Retrieve multiple modules using the Relay connection interface */
  modulesConnection: ModuleConnection;
  /** Fetches an object given its ID */
  node?: Maybe<Node>;
  /** Retrieve a single practice */
  practice?: Maybe<Practice>;
  /** Retrieve document version */
  practiceVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple practices */
  practices: Array<Practice>;
  /** Retrieve multiple practices using the Relay connection interface */
  practicesConnection: PracticeConnection;
  /** Retrieve a single presentation */
  presentation?: Maybe<Presentation>;
  /** Retrieve document version */
  presentationVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple presentations */
  presentations: Array<Presentation>;
  /** Retrieve multiple presentations using the Relay connection interface */
  presentationsConnection: PresentationConnection;
  /** Retrieve a single quiz */
  quiz?: Maybe<Quiz>;
  /** Retrieve document version */
  quizVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple quizzes */
  quizzes: Array<Quiz>;
  /** Retrieve multiple quizzes using the Relay connection interface */
  quizzesConnection: QuizConnection;
  /** Retrieve a single scheduledOperation */
  scheduledOperation?: Maybe<ScheduledOperation>;
  /** Retrieve multiple scheduledOperations */
  scheduledOperations: Array<ScheduledOperation>;
  /** Retrieve multiple scheduledOperations using the Relay connection interface */
  scheduledOperationsConnection: ScheduledOperationConnection;
  /** Retrieve a single scheduledRelease */
  scheduledRelease?: Maybe<ScheduledRelease>;
  /** Retrieve multiple scheduledReleases */
  scheduledReleases: Array<ScheduledRelease>;
  /** Retrieve multiple scheduledReleases using the Relay connection interface */
  scheduledReleasesConnection: ScheduledReleaseConnection;
  /** Retrieve a single subscribe */
  subscribe?: Maybe<Subscribe>;
  /** Retrieve document version */
  subscribeVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple subscribes */
  subscribes: Array<Subscribe>;
  /** Retrieve multiple subscribes using the Relay connection interface */
  subscribesConnection: SubscribeConnection;
  /** Retrieve a single teacher */
  teacher?: Maybe<Teacher>;
  /** Retrieve document version */
  teacherVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple teachers */
  teachers: Array<Teacher>;
  /** Retrieve multiple teachers using the Relay connection interface */
  teachersConnection: TeacherConnection;
  /** Retrieve a single user */
  user?: Maybe<User>;
  /** Retrieve multiple users */
  users: Array<User>;
  /** Retrieve multiple users using the Relay connection interface */
  usersConnection: UserConnection;
};


export type QueryAssetArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: AssetWhereUniqueInput;
};


export type QueryAssetVersionArgs = {
  where: VersionWhereInput;
};


export type QueryAssetsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<AssetOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<AssetWhereInput>;
};


export type QueryAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<AssetOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<AssetWhereInput>;
};


export type QueryChapterArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ChapterWhereUniqueInput;
};


export type QueryChapterVersionArgs = {
  where: VersionWhereInput;
};


export type QueryChaptersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ChapterOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ChapterWhereInput>;
};


export type QueryChaptersConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ChapterOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ChapterWhereInput>;
};


export type QueryConclusionArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ConclusionWhereUniqueInput;
};


export type QueryConclusionVersionArgs = {
  where: VersionWhereInput;
};


export type QueryConclusionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ConclusionOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ConclusionWhereInput>;
};


export type QueryConclusionsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ConclusionOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ConclusionWhereInput>;
};


export type QueryCourseArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: CourseWhereUniqueInput;
};


export type QueryCourseVersionArgs = {
  where: VersionWhereInput;
};


export type QueryCoursesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<CourseOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<CourseWhereInput>;
};


export type QueryCoursesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<CourseOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<CourseWhereInput>;
};


export type QueryDemoModelArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: DemoModelWhereUniqueInput;
};


export type QueryDemoModelVersionArgs = {
  where: VersionWhereInput;
};


export type QueryDemoModelsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<DemoModelOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<DemoModelWhereInput>;
};


export type QueryDemoModelsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<DemoModelOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<DemoModelWhereInput>;
};


export type QueryLessonArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: LessonWhereUniqueInput;
};


export type QueryLessonVersionArgs = {
  where: VersionWhereInput;
};


export type QueryLessonsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<LessonOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<LessonWhereInput>;
};


export type QueryLessonsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<LessonOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<LessonWhereInput>;
};


export type QueryLiveLessonArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: LiveLessonWhereUniqueInput;
};


export type QueryLiveLessonVersionArgs = {
  where: VersionWhereInput;
};


export type QueryLiveLessonsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<LiveLessonOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<LiveLessonWhereInput>;
};


export type QueryLiveLessonsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<LiveLessonOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<LiveLessonWhereInput>;
};


export type QueryModuleArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ModuleWhereUniqueInput;
};


export type QueryModuleVersionArgs = {
  where: VersionWhereInput;
};


export type QueryModulesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ModuleOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ModuleWhereInput>;
};


export type QueryModulesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ModuleOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ModuleWhereInput>;
};


export type QueryNodeArgs = {
  id: Scalars['ID'];
  locales?: Array<Locale>;
  stage?: Stage;
};


export type QueryPracticeArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: PracticeWhereUniqueInput;
};


export type QueryPracticeVersionArgs = {
  where: VersionWhereInput;
};


export type QueryPracticesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<PracticeOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<PracticeWhereInput>;
};


export type QueryPracticesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<PracticeOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<PracticeWhereInput>;
};


export type QueryPresentationArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: PresentationWhereUniqueInput;
};


export type QueryPresentationVersionArgs = {
  where: VersionWhereInput;
};


export type QueryPresentationsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<PresentationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<PresentationWhereInput>;
};


export type QueryPresentationsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<PresentationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<PresentationWhereInput>;
};


export type QueryQuizArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: QuizWhereUniqueInput;
};


export type QueryQuizVersionArgs = {
  where: VersionWhereInput;
};


export type QueryQuizzesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<QuizOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<QuizWhereInput>;
};


export type QueryQuizzesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<QuizOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<QuizWhereInput>;
};


export type QueryScheduledOperationArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ScheduledOperationWhereUniqueInput;
};


export type QueryScheduledOperationsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type QueryScheduledOperationsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type QueryScheduledReleaseArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ScheduledReleaseWhereUniqueInput;
};


export type QueryScheduledReleasesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledReleaseOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledReleaseWhereInput>;
};


export type QueryScheduledReleasesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledReleaseOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledReleaseWhereInput>;
};


export type QuerySubscribeArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: SubscribeWhereUniqueInput;
};


export type QuerySubscribeVersionArgs = {
  where: VersionWhereInput;
};


export type QuerySubscribesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<SubscribeOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<SubscribeWhereInput>;
};


export type QuerySubscribesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<SubscribeOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<SubscribeWhereInput>;
};


export type QueryTeacherArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: TeacherWhereUniqueInput;
};


export type QueryTeacherVersionArgs = {
  where: VersionWhereInput;
};


export type QueryTeachersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<TeacherOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<TeacherWhereInput>;
};


export type QueryTeachersConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<TeacherOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<TeacherWhereInput>;
};


export type QueryUserArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: UserWhereUniqueInput;
};


export type QueryUsersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<UserOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryUsersConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<UserOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<UserWhereInput>;
};

export type Quiz = Node & {
  __typename?: 'Quiz';
  chapter?: Maybe<Chapter>;
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Quiz>;
  /** List of Quiz versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** Opções para resposta */
  options: Array<RichText>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  question: Scalars['String'];
  /** Resultado da resposta, se incorreta ou correta */
  result: Array<RichText>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  /** Pergunta */
  title: Scalars['String'];
  type?: Maybe<Scalars['String']>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type QuizChapterArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type QuizCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type QuizDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type QuizHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


export type QuizPublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type QuizScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type QuizUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type QuizConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: QuizWhereUniqueInput;
};

/** A connection to a list of items. */
export type QuizConnection = {
  __typename?: 'QuizConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<QuizEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type QuizCreateInput = {
  chapter?: InputMaybe<ChapterCreateOneInlineInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  options?: InputMaybe<Array<Scalars['RichTextAST']>>;
  question: Scalars['String'];
  result?: InputMaybe<Array<Scalars['RichTextAST']>>;
  title: Scalars['String'];
  type?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type QuizCreateManyInlineInput = {
  /** Connect multiple existing Quiz documents */
  connect?: InputMaybe<Array<QuizWhereUniqueInput>>;
  /** Create and connect multiple existing Quiz documents */
  create?: InputMaybe<Array<QuizCreateInput>>;
};

export type QuizCreateOneInlineInput = {
  /** Connect one existing Quiz document */
  connect?: InputMaybe<QuizWhereUniqueInput>;
  /** Create and connect one Quiz document */
  create?: InputMaybe<QuizCreateInput>;
};

/** An edge in a connection. */
export type QuizEdge = {
  __typename?: 'QuizEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Quiz;
};

/** Identifies documents */
export type QuizManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<QuizWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<QuizWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<QuizWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  chapter?: InputMaybe<ChapterWhereInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  question?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  question_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  question_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  question_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  question_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  question_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  question_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  question_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  question_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  question_starts_with?: InputMaybe<Scalars['String']>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  type_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  type_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  type_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  type_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  type_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  type_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  type_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  type_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  type_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum QuizOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  QuestionAsc = 'question_ASC',
  QuestionDesc = 'question_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type QuizUpdateInput = {
  chapter?: InputMaybe<ChapterUpdateOneInlineInput>;
  options?: InputMaybe<Array<Scalars['RichTextAST']>>;
  question?: InputMaybe<Scalars['String']>;
  result?: InputMaybe<Array<Scalars['RichTextAST']>>;
  title?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
};

export type QuizUpdateManyInlineInput = {
  /** Connect multiple existing Quiz documents */
  connect?: InputMaybe<Array<QuizConnectInput>>;
  /** Create and connect multiple Quiz documents */
  create?: InputMaybe<Array<QuizCreateInput>>;
  /** Delete multiple Quiz documents */
  delete?: InputMaybe<Array<QuizWhereUniqueInput>>;
  /** Disconnect multiple Quiz documents */
  disconnect?: InputMaybe<Array<QuizWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Quiz documents */
  set?: InputMaybe<Array<QuizWhereUniqueInput>>;
  /** Update multiple Quiz documents */
  update?: InputMaybe<Array<QuizUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Quiz documents */
  upsert?: InputMaybe<Array<QuizUpsertWithNestedWhereUniqueInput>>;
};

export type QuizUpdateManyInput = {
  options?: InputMaybe<Array<Scalars['RichTextAST']>>;
  question?: InputMaybe<Scalars['String']>;
  result?: InputMaybe<Array<Scalars['RichTextAST']>>;
  title?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
};

export type QuizUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: QuizUpdateManyInput;
  /** Document search */
  where: QuizWhereInput;
};

export type QuizUpdateOneInlineInput = {
  /** Connect existing Quiz document */
  connect?: InputMaybe<QuizWhereUniqueInput>;
  /** Create and connect one Quiz document */
  create?: InputMaybe<QuizCreateInput>;
  /** Delete currently connected Quiz document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected Quiz document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single Quiz document */
  update?: InputMaybe<QuizUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Quiz document */
  upsert?: InputMaybe<QuizUpsertWithNestedWhereUniqueInput>;
};

export type QuizUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: QuizUpdateInput;
  /** Unique document search */
  where: QuizWhereUniqueInput;
};

export type QuizUpsertInput = {
  /** Create document if it didn't exist */
  create: QuizCreateInput;
  /** Update document if it exists */
  update: QuizUpdateInput;
};

export type QuizUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: QuizUpsertInput;
  /** Unique document search */
  where: QuizWhereUniqueInput;
};

/** Identifies documents */
export type QuizWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<QuizWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<QuizWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<QuizWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  chapter?: InputMaybe<ChapterWhereInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  question?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  question_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  question_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  question_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  question_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  question_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  question_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  question_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  question_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  question_starts_with?: InputMaybe<Scalars['String']>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  type_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  type_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  type_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  type_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  type_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  type_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  type_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  type_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  type_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** References Quiz record uniquely */
export type QuizWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

/** Representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type Rgba = {
  __typename?: 'RGBA';
  a: Scalars['RGBATransparency'];
  b: Scalars['RGBAHue'];
  g: Scalars['RGBAHue'];
  r: Scalars['RGBAHue'];
};

/** Input type representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type RgbaInput = {
  a: Scalars['RGBATransparency'];
  b: Scalars['RGBAHue'];
  g: Scalars['RGBAHue'];
  r: Scalars['RGBAHue'];
};

/** Custom type representing a rich text value comprising of raw rich text ast, html, markdown and text values */
export type RichText = {
  __typename?: 'RichText';
  /** Returns HTMl representation */
  html: Scalars['String'];
  /** Returns Markdown representation */
  markdown: Scalars['String'];
  /** Returns AST representation */
  raw: Scalars['RichTextAST'];
  /** Returns plain-text contents of RichText */
  text: Scalars['String'];
};

/** Scheduled Operation system model */
export type ScheduledOperation = Node & {
  __typename?: 'ScheduledOperation';
  affectedDocuments: Array<ScheduledOperationAffectedDocument>;
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Operation description */
  description?: Maybe<Scalars['String']>;
  /** Get the document in other stages */
  documentInStages: Array<ScheduledOperation>;
  /** Operation error message */
  errorMessage?: Maybe<Scalars['String']>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  /** Raw operation payload including all details, this field is subject to change */
  rawPayload: Scalars['Json'];
  /** The release this operation is scheduled for */
  release?: Maybe<ScheduledRelease>;
  /** System stage field */
  stage: Stage;
  /** operation Status */
  status: ScheduledOperationStatus;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


/** Scheduled Operation system model */
export type ScheduledOperationAffectedDocumentsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
};


/** Scheduled Operation system model */
export type ScheduledOperationCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Operation system model */
export type ScheduledOperationDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


/** Scheduled Operation system model */
export type ScheduledOperationPublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Operation system model */
export type ScheduledOperationReleaseArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Operation system model */
export type ScheduledOperationUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type ScheduledOperationAffectedDocument = Asset | Chapter | Conclusion | Course | DemoModel | Lesson | LiveLesson | Module | Practice | Presentation | Quiz | Subscribe | Teacher;

export type ScheduledOperationConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ScheduledOperationWhereUniqueInput;
};

/** A connection to a list of items. */
export type ScheduledOperationConnection = {
  __typename?: 'ScheduledOperationConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ScheduledOperationEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ScheduledOperationCreateManyInlineInput = {
  /** Connect multiple existing ScheduledOperation documents */
  connect?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
};

export type ScheduledOperationCreateOneInlineInput = {
  /** Connect one existing ScheduledOperation document */
  connect?: InputMaybe<ScheduledOperationWhereUniqueInput>;
};

/** An edge in a connection. */
export type ScheduledOperationEdge = {
  __typename?: 'ScheduledOperationEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: ScheduledOperation;
};

/** Identifies documents */
export type ScheduledOperationManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  errorMessage_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  release?: InputMaybe<ScheduledReleaseWhereInput>;
  status?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<ScheduledOperationStatus>>;
  /** All values that are not equal to given value. */
  status_not?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<ScheduledOperationStatus>>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum ScheduledOperationOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  ErrorMessageAsc = 'errorMessage_ASC',
  ErrorMessageDesc = 'errorMessage_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** System Scheduled Operation Status */
export enum ScheduledOperationStatus {
  Canceled = 'CANCELED',
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  InProgress = 'IN_PROGRESS',
  Pending = 'PENDING'
}

export type ScheduledOperationUpdateManyInlineInput = {
  /** Connect multiple existing ScheduledOperation documents */
  connect?: InputMaybe<Array<ScheduledOperationConnectInput>>;
  /** Disconnect multiple ScheduledOperation documents */
  disconnect?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ScheduledOperation documents */
  set?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
};

export type ScheduledOperationUpdateOneInlineInput = {
  /** Connect existing ScheduledOperation document */
  connect?: InputMaybe<ScheduledOperationWhereUniqueInput>;
  /** Disconnect currently connected ScheduledOperation document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type ScheduledOperationWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  errorMessage_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  release?: InputMaybe<ScheduledReleaseWhereInput>;
  status?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<ScheduledOperationStatus>>;
  /** All values that are not equal to given value. */
  status_not?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<ScheduledOperationStatus>>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** References ScheduledOperation record uniquely */
export type ScheduledOperationWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

/** Scheduled Release system model */
export type ScheduledRelease = Node & {
  __typename?: 'ScheduledRelease';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Release description */
  description?: Maybe<Scalars['String']>;
  /** Get the document in other stages */
  documentInStages: Array<ScheduledRelease>;
  /** Release error message */
  errorMessage?: Maybe<Scalars['String']>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** Whether scheduled release should be run */
  isActive: Scalars['Boolean'];
  /** Whether scheduled release is implicit */
  isImplicit: Scalars['Boolean'];
  /** Operations to run with this release */
  operations: Array<ScheduledOperation>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  /** Release date and time */
  releaseAt?: Maybe<Scalars['DateTime']>;
  /** System stage field */
  stage: Stage;
  /** Release Status */
  status: ScheduledReleaseStatus;
  /** Release Title */
  title?: Maybe<Scalars['String']>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


/** Scheduled Release system model */
export type ScheduledReleaseCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Release system model */
export type ScheduledReleaseDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


/** Scheduled Release system model */
export type ScheduledReleaseOperationsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


/** Scheduled Release system model */
export type ScheduledReleasePublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Release system model */
export type ScheduledReleaseUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type ScheduledReleaseConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ScheduledReleaseWhereUniqueInput;
};

/** A connection to a list of items. */
export type ScheduledReleaseConnection = {
  __typename?: 'ScheduledReleaseConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ScheduledReleaseEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ScheduledReleaseCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ScheduledReleaseCreateManyInlineInput = {
  /** Connect multiple existing ScheduledRelease documents */
  connect?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Create and connect multiple existing ScheduledRelease documents */
  create?: InputMaybe<Array<ScheduledReleaseCreateInput>>;
};

export type ScheduledReleaseCreateOneInlineInput = {
  /** Connect one existing ScheduledRelease document */
  connect?: InputMaybe<ScheduledReleaseWhereUniqueInput>;
  /** Create and connect one ScheduledRelease document */
  create?: InputMaybe<ScheduledReleaseCreateInput>;
};

/** An edge in a connection. */
export type ScheduledReleaseEdge = {
  __typename?: 'ScheduledReleaseEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: ScheduledRelease;
};

/** Identifies documents */
export type ScheduledReleaseManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  errorMessage_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']>;
  isImplicit?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isImplicit_not?: InputMaybe<Scalars['Boolean']>;
  operations_every?: InputMaybe<ScheduledOperationWhereInput>;
  operations_none?: InputMaybe<ScheduledOperationWhereInput>;
  operations_some?: InputMaybe<ScheduledOperationWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  releaseAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  releaseAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  releaseAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  releaseAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  releaseAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  releaseAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  releaseAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  status?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<ScheduledReleaseStatus>>;
  /** All values that are not equal to given value. */
  status_not?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<ScheduledReleaseStatus>>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum ScheduledReleaseOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  ErrorMessageAsc = 'errorMessage_ASC',
  ErrorMessageDesc = 'errorMessage_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsActiveAsc = 'isActive_ASC',
  IsActiveDesc = 'isActive_DESC',
  IsImplicitAsc = 'isImplicit_ASC',
  IsImplicitDesc = 'isImplicit_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  ReleaseAtAsc = 'releaseAt_ASC',
  ReleaseAtDesc = 'releaseAt_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** System Scheduled Release Status */
export enum ScheduledReleaseStatus {
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  InProgress = 'IN_PROGRESS',
  Pending = 'PENDING'
}

export type ScheduledReleaseUpdateInput = {
  description?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ScheduledReleaseUpdateManyInlineInput = {
  /** Connect multiple existing ScheduledRelease documents */
  connect?: InputMaybe<Array<ScheduledReleaseConnectInput>>;
  /** Create and connect multiple ScheduledRelease documents */
  create?: InputMaybe<Array<ScheduledReleaseCreateInput>>;
  /** Delete multiple ScheduledRelease documents */
  delete?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Disconnect multiple ScheduledRelease documents */
  disconnect?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ScheduledRelease documents */
  set?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Update multiple ScheduledRelease documents */
  update?: InputMaybe<Array<ScheduledReleaseUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple ScheduledRelease documents */
  upsert?: InputMaybe<Array<ScheduledReleaseUpsertWithNestedWhereUniqueInput>>;
};

export type ScheduledReleaseUpdateManyInput = {
  description?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ScheduledReleaseUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ScheduledReleaseUpdateManyInput;
  /** Document search */
  where: ScheduledReleaseWhereInput;
};

export type ScheduledReleaseUpdateOneInlineInput = {
  /** Connect existing ScheduledRelease document */
  connect?: InputMaybe<ScheduledReleaseWhereUniqueInput>;
  /** Create and connect one ScheduledRelease document */
  create?: InputMaybe<ScheduledReleaseCreateInput>;
  /** Delete currently connected ScheduledRelease document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected ScheduledRelease document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single ScheduledRelease document */
  update?: InputMaybe<ScheduledReleaseUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ScheduledRelease document */
  upsert?: InputMaybe<ScheduledReleaseUpsertWithNestedWhereUniqueInput>;
};

export type ScheduledReleaseUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ScheduledReleaseUpdateInput;
  /** Unique document search */
  where: ScheduledReleaseWhereUniqueInput;
};

export type ScheduledReleaseUpsertInput = {
  /** Create document if it didn't exist */
  create: ScheduledReleaseCreateInput;
  /** Update document if it exists */
  update: ScheduledReleaseUpdateInput;
};

export type ScheduledReleaseUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ScheduledReleaseUpsertInput;
  /** Unique document search */
  where: ScheduledReleaseWhereUniqueInput;
};

/** Identifies documents */
export type ScheduledReleaseWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  errorMessage_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']>;
  isImplicit?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isImplicit_not?: InputMaybe<Scalars['Boolean']>;
  operations_every?: InputMaybe<ScheduledOperationWhereInput>;
  operations_none?: InputMaybe<ScheduledOperationWhereInput>;
  operations_some?: InputMaybe<ScheduledOperationWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  releaseAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  releaseAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  releaseAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  releaseAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  releaseAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  releaseAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  releaseAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  status?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<ScheduledReleaseStatus>>;
  /** All values that are not equal to given value. */
  status_not?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<ScheduledReleaseStatus>>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** References ScheduledRelease record uniquely */
export type ScheduledReleaseWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

/** Stage system enumeration */
export enum Stage {
  /** The Draft is the default stage for all your content. */
  Draft = 'DRAFT',
  /** The Published stage is where you can publish your content to. */
  Published = 'PUBLISHED'
}

/** Inscritos */
export type Subscribe = Node & {
  __typename?: 'Subscribe';
  /** Curso */
  course: Scalars['String'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Subscribe>;
  /** List of Subscribe versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  name: Scalars['String'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


/** Inscritos */
export type SubscribeCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Inscritos */
export type SubscribeDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


/** Inscritos */
export type SubscribeHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


/** Inscritos */
export type SubscribePublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Inscritos */
export type SubscribeScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


/** Inscritos */
export type SubscribeUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type SubscribeConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: SubscribeWhereUniqueInput;
};

/** A connection to a list of items. */
export type SubscribeConnection = {
  __typename?: 'SubscribeConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<SubscribeEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type SubscribeCreateInput = {
  course: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  name: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type SubscribeCreateManyInlineInput = {
  /** Connect multiple existing Subscribe documents */
  connect?: InputMaybe<Array<SubscribeWhereUniqueInput>>;
  /** Create and connect multiple existing Subscribe documents */
  create?: InputMaybe<Array<SubscribeCreateInput>>;
};

export type SubscribeCreateOneInlineInput = {
  /** Connect one existing Subscribe document */
  connect?: InputMaybe<SubscribeWhereUniqueInput>;
  /** Create and connect one Subscribe document */
  create?: InputMaybe<SubscribeCreateInput>;
};

/** An edge in a connection. */
export type SubscribeEdge = {
  __typename?: 'SubscribeEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Subscribe;
};

/** Identifies documents */
export type SubscribeManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<SubscribeWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<SubscribeWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<SubscribeWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  course?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  course_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  course_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  course_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  course_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  course_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  course_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  course_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  course_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  course_starts_with?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum SubscribeOrderByInput {
  CourseAsc = 'course_ASC',
  CourseDesc = 'course_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type SubscribeUpdateInput = {
  course?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type SubscribeUpdateManyInlineInput = {
  /** Connect multiple existing Subscribe documents */
  connect?: InputMaybe<Array<SubscribeConnectInput>>;
  /** Create and connect multiple Subscribe documents */
  create?: InputMaybe<Array<SubscribeCreateInput>>;
  /** Delete multiple Subscribe documents */
  delete?: InputMaybe<Array<SubscribeWhereUniqueInput>>;
  /** Disconnect multiple Subscribe documents */
  disconnect?: InputMaybe<Array<SubscribeWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Subscribe documents */
  set?: InputMaybe<Array<SubscribeWhereUniqueInput>>;
  /** Update multiple Subscribe documents */
  update?: InputMaybe<Array<SubscribeUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Subscribe documents */
  upsert?: InputMaybe<Array<SubscribeUpsertWithNestedWhereUniqueInput>>;
};

export type SubscribeUpdateManyInput = {
  course?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type SubscribeUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: SubscribeUpdateManyInput;
  /** Document search */
  where: SubscribeWhereInput;
};

export type SubscribeUpdateOneInlineInput = {
  /** Connect existing Subscribe document */
  connect?: InputMaybe<SubscribeWhereUniqueInput>;
  /** Create and connect one Subscribe document */
  create?: InputMaybe<SubscribeCreateInput>;
  /** Delete currently connected Subscribe document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected Subscribe document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single Subscribe document */
  update?: InputMaybe<SubscribeUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Subscribe document */
  upsert?: InputMaybe<SubscribeUpsertWithNestedWhereUniqueInput>;
};

export type SubscribeUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: SubscribeUpdateInput;
  /** Unique document search */
  where: SubscribeWhereUniqueInput;
};

export type SubscribeUpsertInput = {
  /** Create document if it didn't exist */
  create: SubscribeCreateInput;
  /** Update document if it exists */
  update: SubscribeUpdateInput;
};

export type SubscribeUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: SubscribeUpsertInput;
  /** Unique document search */
  where: SubscribeWhereUniqueInput;
};

/** Identifies documents */
export type SubscribeWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<SubscribeWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<SubscribeWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<SubscribeWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  course?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  course_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  course_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  course_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  course_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  course_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  course_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  course_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  course_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  course_starts_with?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** References Subscribe record uniquely */
export type SubscribeWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export enum SystemDateTimeFieldVariation {
  Base = 'BASE',
  Combined = 'COMBINED',
  Localization = 'LOCALIZATION'
}

/** Professor */
export type Teacher = Node & {
  __typename?: 'Teacher';
  /** Biografia do professor */
  bio?: Maybe<Scalars['String']>;
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Teacher>;
  /** List of Teacher versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** Imagem do professor */
  image?: Maybe<Asset>;
  /** LinkedIn do professor */
  linkedin?: Maybe<Scalars['String']>;
  /** Nome do professor */
  name?: Maybe<Scalars['String']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


/** Professor */
export type TeacherCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Professor */
export type TeacherDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


/** Professor */
export type TeacherHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


/** Professor */
export type TeacherImageArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Professor */
export type TeacherPublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Professor */
export type TeacherScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


/** Professor */
export type TeacherUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type TeacherConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: TeacherWhereUniqueInput;
};

/** A connection to a list of items. */
export type TeacherConnection = {
  __typename?: 'TeacherConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<TeacherEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type TeacherCreateInput = {
  bio?: InputMaybe<Scalars['String']>;
  cl6azmgpj0jbf01umbvjsd6bb?: InputMaybe<LiveLessonCreateManyInlineInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  image?: InputMaybe<AssetCreateOneInlineInput>;
  linkedin?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type TeacherCreateManyInlineInput = {
  /** Connect multiple existing Teacher documents */
  connect?: InputMaybe<Array<TeacherWhereUniqueInput>>;
  /** Create and connect multiple existing Teacher documents */
  create?: InputMaybe<Array<TeacherCreateInput>>;
};

export type TeacherCreateOneInlineInput = {
  /** Connect one existing Teacher document */
  connect?: InputMaybe<TeacherWhereUniqueInput>;
  /** Create and connect one Teacher document */
  create?: InputMaybe<TeacherCreateInput>;
};

/** An edge in a connection. */
export type TeacherEdge = {
  __typename?: 'TeacherEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Teacher;
};

/** Identifies documents */
export type TeacherManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<TeacherWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<TeacherWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<TeacherWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  bio?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  bio_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  bio_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  bio_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  bio_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  bio_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  bio_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  bio_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  bio_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  bio_starts_with?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  image?: InputMaybe<AssetWhereInput>;
  linkedin?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  linkedin_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  linkedin_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  linkedin_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  linkedin_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  linkedin_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  linkedin_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  linkedin_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  linkedin_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  linkedin_starts_with?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum TeacherOrderByInput {
  BioAsc = 'bio_ASC',
  BioDesc = 'bio_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  LinkedinAsc = 'linkedin_ASC',
  LinkedinDesc = 'linkedin_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type TeacherUpdateInput = {
  bio?: InputMaybe<Scalars['String']>;
  cl6azmgpj0jbf01umbvjsd6bb?: InputMaybe<LiveLessonUpdateManyInlineInput>;
  image?: InputMaybe<AssetUpdateOneInlineInput>;
  linkedin?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type TeacherUpdateManyInlineInput = {
  /** Connect multiple existing Teacher documents */
  connect?: InputMaybe<Array<TeacherConnectInput>>;
  /** Create and connect multiple Teacher documents */
  create?: InputMaybe<Array<TeacherCreateInput>>;
  /** Delete multiple Teacher documents */
  delete?: InputMaybe<Array<TeacherWhereUniqueInput>>;
  /** Disconnect multiple Teacher documents */
  disconnect?: InputMaybe<Array<TeacherWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Teacher documents */
  set?: InputMaybe<Array<TeacherWhereUniqueInput>>;
  /** Update multiple Teacher documents */
  update?: InputMaybe<Array<TeacherUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Teacher documents */
  upsert?: InputMaybe<Array<TeacherUpsertWithNestedWhereUniqueInput>>;
};

export type TeacherUpdateManyInput = {
  bio?: InputMaybe<Scalars['String']>;
  linkedin?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type TeacherUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: TeacherUpdateManyInput;
  /** Document search */
  where: TeacherWhereInput;
};

export type TeacherUpdateOneInlineInput = {
  /** Connect existing Teacher document */
  connect?: InputMaybe<TeacherWhereUniqueInput>;
  /** Create and connect one Teacher document */
  create?: InputMaybe<TeacherCreateInput>;
  /** Delete currently connected Teacher document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected Teacher document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single Teacher document */
  update?: InputMaybe<TeacherUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Teacher document */
  upsert?: InputMaybe<TeacherUpsertWithNestedWhereUniqueInput>;
};

export type TeacherUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: TeacherUpdateInput;
  /** Unique document search */
  where: TeacherWhereUniqueInput;
};

export type TeacherUpsertInput = {
  /** Create document if it didn't exist */
  create: TeacherCreateInput;
  /** Update document if it exists */
  update: TeacherUpdateInput;
};

export type TeacherUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: TeacherUpsertInput;
  /** Unique document search */
  where: TeacherWhereUniqueInput;
};

/** Identifies documents */
export type TeacherWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<TeacherWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<TeacherWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<TeacherWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  bio?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  bio_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  bio_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  bio_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  bio_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  bio_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  bio_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  bio_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  bio_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  bio_starts_with?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  image?: InputMaybe<AssetWhereInput>;
  linkedin?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  linkedin_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  linkedin_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  linkedin_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  linkedin_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  linkedin_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  linkedin_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  linkedin_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  linkedin_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  linkedin_starts_with?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** References Teacher record uniquely */
export type TeacherWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type UnpublishLocaleInput = {
  /** Locales to unpublish */
  locale: Locale;
  /** Stages to unpublish selected locales from */
  stages: Array<Stage>;
};

/** User system model */
export type User = Node & {
  __typename?: 'User';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** Get the document in other stages */
  documentInStages: Array<User>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** Flag to determine if user is active or not */
  isActive: Scalars['Boolean'];
  /** User Kind. Can be either MEMBER, PAT or PUBLIC */
  kind: UserKind;
  /** The username */
  name: Scalars['String'];
  /** Profile Picture url */
  picture?: Maybe<Scalars['String']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
};


/** User system model */
export type UserDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};

export type UserConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: UserWhereUniqueInput;
};

/** A connection to a list of items. */
export type UserConnection = {
  __typename?: 'UserConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<UserEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type UserCreateManyInlineInput = {
  /** Connect multiple existing User documents */
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
};

export type UserCreateOneInlineInput = {
  /** Connect one existing User document */
  connect?: InputMaybe<UserWhereUniqueInput>;
};

/** An edge in a connection. */
export type UserEdge = {
  __typename?: 'UserEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: User;
};

/** System User Kind */
export enum UserKind {
  Member = 'MEMBER',
  Pat = 'PAT',
  Public = 'PUBLIC',
  Webhook = 'WEBHOOK'
}

/** Identifies documents */
export type UserManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<UserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<UserWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<UserWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']>;
  kind?: InputMaybe<UserKind>;
  /** All values that are contained in given list. */
  kind_in?: InputMaybe<Array<UserKind>>;
  /** All values that are not equal to given value. */
  kind_not?: InputMaybe<UserKind>;
  /** All values that are not contained in given list. */
  kind_not_in?: InputMaybe<Array<UserKind>>;
  name?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  picture?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  picture_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  picture_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  picture_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  picture_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  picture_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  picture_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  picture_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  picture_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  picture_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
};

export enum UserOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsActiveAsc = 'isActive_ASC',
  IsActiveDesc = 'isActive_DESC',
  KindAsc = 'kind_ASC',
  KindDesc = 'kind_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PictureAsc = 'picture_ASC',
  PictureDesc = 'picture_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type UserUpdateManyInlineInput = {
  /** Connect multiple existing User documents */
  connect?: InputMaybe<Array<UserConnectInput>>;
  /** Disconnect multiple User documents */
  disconnect?: InputMaybe<Array<UserWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing User documents */
  set?: InputMaybe<Array<UserWhereUniqueInput>>;
};

export type UserUpdateOneInlineInput = {
  /** Connect existing User document */
  connect?: InputMaybe<UserWhereUniqueInput>;
  /** Disconnect currently connected User document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type UserWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<UserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<UserWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<UserWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']>;
  kind?: InputMaybe<UserKind>;
  /** All values that are contained in given list. */
  kind_in?: InputMaybe<Array<UserKind>>;
  /** All values that are not equal to given value. */
  kind_not?: InputMaybe<UserKind>;
  /** All values that are not contained in given list. */
  kind_not_in?: InputMaybe<Array<UserKind>>;
  name?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  picture?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  picture_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  picture_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  picture_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  picture_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  picture_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  picture_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  picture_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  picture_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  picture_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
};

/** References User record uniquely */
export type UserWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type Version = {
  __typename?: 'Version';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  revision: Scalars['Int'];
  stage: Stage;
};

export type VersionWhereInput = {
  id: Scalars['ID'];
  revision: Scalars['Int'];
  stage: Stage;
};

export enum _FilterKind {
  And = 'AND',
  Not = 'NOT',
  Or = 'OR',
  Contains = 'contains',
  ContainsAll = 'contains_all',
  ContainsNone = 'contains_none',
  ContainsSome = 'contains_some',
  EndsWith = 'ends_with',
  Eq = 'eq',
  EqNot = 'eq_not',
  Gt = 'gt',
  Gte = 'gte',
  In = 'in',
  Lt = 'lt',
  Lte = 'lte',
  NotContains = 'not_contains',
  NotEndsWith = 'not_ends_with',
  NotIn = 'not_in',
  NotStartsWith = 'not_starts_with',
  RelationalEvery = 'relational_every',
  RelationalNone = 'relational_none',
  RelationalSingle = 'relational_single',
  RelationalSome = 'relational_some',
  Search = 'search',
  StartsWith = 'starts_with'
}

export enum _MutationInputFieldKind {
  Enum = 'enum',
  Relation = 'relation',
  RichText = 'richText',
  RichTextWithEmbeds = 'richTextWithEmbeds',
  Scalar = 'scalar',
  Union = 'union',
  Virtual = 'virtual'
}

export enum _MutationKind {
  Create = 'create',
  Delete = 'delete',
  DeleteMany = 'deleteMany',
  Publish = 'publish',
  PublishMany = 'publishMany',
  SchedulePublish = 'schedulePublish',
  ScheduleUnpublish = 'scheduleUnpublish',
  Unpublish = 'unpublish',
  UnpublishMany = 'unpublishMany',
  Update = 'update',
  UpdateMany = 'updateMany',
  Upsert = 'upsert'
}

export enum _OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export enum _RelationInputCardinality {
  Many = 'many',
  One = 'one'
}

export enum _RelationInputKind {
  Create = 'create',
  Update = 'update'
}

export enum _RelationKind {
  Regular = 'regular',
  Union = 'union'
}

export enum _SystemDateTimeFieldVariation {
  Base = 'base',
  Combined = 'combined',
  Localization = 'localization'
}

export type GetCoursesByAcronymQueryVariables = Exact<{
  acronym?: InputMaybe<Scalars['String']>;
}>;


export type GetCoursesByAcronymQuery = { __typename?: 'Query', courses: Array<{ __typename?: 'Course', id: string, slug?: string | null, courseName: string, courseAcronym?: string | null, coursePeriod?: string | null, alternativeSlug?: string | null, courseImage?: { __typename?: 'Asset', url: string } | null }> };

export type GetCoursesHomeQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCoursesHomeQuery = { __typename?: 'Query', courses: Array<{ __typename?: 'Course', id: string, slug?: string | null, alternativeSlug?: string | null, courseName: string, courseAcronym?: string | null, coursePeriod?: string | null, courseImage?: { __typename?: 'Asset', url: string } | null }> };

export type GetLessonsByChapterSlugQueryVariables = Exact<{
  slug?: InputMaybe<Scalars['String']>;
}>;


export type GetLessonsByChapterSlugQuery = { __typename?: 'Query', chapters: Array<{ __typename?: 'Chapter', id: string, slug?: string | null, title: string, duration?: number | null, conclusion?: { __typename?: 'Conclusion', id: string, title: string, summary: { __typename?: 'RichText', html: string } } | null, presentation?: { __typename?: 'Presentation', id: string, title?: string | null, dedication: string, summary: { __typename?: 'RichText', html: string }, objectives: { __typename?: 'RichText', html: string } } | null, lessons: Array<{ __typename?: 'Lesson', id: string, slug?: string | null, title: string, summary: { __typename?: 'RichText', html: string }, content: { __typename?: 'RichText', html: string }, video?: { __typename?: 'Asset', url: string } | null }>, practice?: { __typename?: 'Practice', id: string, title: string, duration: number, content: Array<{ __typename?: 'RichText', html: string }> } | null }> };

export type GetModulesAndChaptersQueryVariables = Exact<{
  courseAcronym?: InputMaybe<Scalars['String']>;
}>;


export type GetModulesAndChaptersQuery = { __typename?: 'Query', course?: { __typename?: 'Course', courseName: string, courseAcronym?: string | null, coursePeriod?: string | null, id: string, slug?: string | null, courseImage?: { __typename?: 'Asset', url: string } | null, modules: Array<{ __typename?: 'Module', id: string, moduleNumber: number, moduleTitle: string, liveLessons: Array<{ __typename?: 'LiveLesson', id: string, slug?: string | null, title?: string | null, date?: any | null, startTime?: number | null, endTime?: number | null, about?: { __typename?: 'RichText', html: string } | null, objectives?: { __typename?: 'RichText', html: string } | null, teacher?: { __typename?: 'Teacher', name?: string | null, bio?: string | null, linkedin?: string | null, image?: { __typename?: 'Asset', url: string } | null } | null }>, chapters: Array<{ __typename?: 'Chapter', id: string, slug?: string | null, title: string, duration?: number | null, lessons: Array<{ __typename?: 'Lesson', id: string, video?: { __typename?: 'Asset', url: string } | null }> }> }> } | null };


export const GetCoursesByAcronymDocument = gql`
    query GetCoursesByAcronym($acronym: String) {
  courses(where: {courseAcronym: $acronym}) {
    id
    slug
    courseName
    courseAcronym
    coursePeriod
    alternativeSlug
    courseImage {
      url
    }
  }
}
    `;

/**
 * __useGetCoursesByAcronymQuery__
 *
 * To run a query within a React component, call `useGetCoursesByAcronymQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCoursesByAcronymQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCoursesByAcronymQuery({
 *   variables: {
 *      acronym: // value for 'acronym'
 *   },
 * });
 */
export function useGetCoursesByAcronymQuery(baseOptions?: Apollo.QueryHookOptions<GetCoursesByAcronymQuery, GetCoursesByAcronymQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCoursesByAcronymQuery, GetCoursesByAcronymQueryVariables>(GetCoursesByAcronymDocument, options);
      }
export function useGetCoursesByAcronymLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCoursesByAcronymQuery, GetCoursesByAcronymQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCoursesByAcronymQuery, GetCoursesByAcronymQueryVariables>(GetCoursesByAcronymDocument, options);
        }
export type GetCoursesByAcronymQueryHookResult = ReturnType<typeof useGetCoursesByAcronymQuery>;
export type GetCoursesByAcronymLazyQueryHookResult = ReturnType<typeof useGetCoursesByAcronymLazyQuery>;
export type GetCoursesByAcronymQueryResult = Apollo.QueryResult<GetCoursesByAcronymQuery, GetCoursesByAcronymQueryVariables>;
export const GetCoursesHomeDocument = gql`
    query GetCoursesHome {
  courses {
    id
    slug
    alternativeSlug
    courseImage {
      url
    }
    courseName
    courseAcronym
    coursePeriod
  }
}
    `;

/**
 * __useGetCoursesHomeQuery__
 *
 * To run a query within a React component, call `useGetCoursesHomeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCoursesHomeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCoursesHomeQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCoursesHomeQuery(baseOptions?: Apollo.QueryHookOptions<GetCoursesHomeQuery, GetCoursesHomeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCoursesHomeQuery, GetCoursesHomeQueryVariables>(GetCoursesHomeDocument, options);
      }
export function useGetCoursesHomeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCoursesHomeQuery, GetCoursesHomeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCoursesHomeQuery, GetCoursesHomeQueryVariables>(GetCoursesHomeDocument, options);
        }
export type GetCoursesHomeQueryHookResult = ReturnType<typeof useGetCoursesHomeQuery>;
export type GetCoursesHomeLazyQueryHookResult = ReturnType<typeof useGetCoursesHomeLazyQuery>;
export type GetCoursesHomeQueryResult = Apollo.QueryResult<GetCoursesHomeQuery, GetCoursesHomeQueryVariables>;
export const GetLessonsByChapterSlugDocument = gql`
    query GetLessonsByChapterSlug($slug: String) {
  chapters(where: {slug: $slug}) {
    id
    slug
    title
    duration
    conclusion {
      id
      title
      summary {
        html
      }
    }
    presentation {
      ... on Presentation {
        id
        title
        summary {
          html
        }
        objectives {
          html
        }
        dedication
      }
    }
    lessons {
      id
      slug
      title
      summary {
        html
      }
      content {
        html
      }
      video {
        url
      }
    }
    practice {
      id
      content {
        html
      }
      title
      duration
    }
  }
}
    `;

/**
 * __useGetLessonsByChapterSlugQuery__
 *
 * To run a query within a React component, call `useGetLessonsByChapterSlugQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLessonsByChapterSlugQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLessonsByChapterSlugQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useGetLessonsByChapterSlugQuery(baseOptions?: Apollo.QueryHookOptions<GetLessonsByChapterSlugQuery, GetLessonsByChapterSlugQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetLessonsByChapterSlugQuery, GetLessonsByChapterSlugQueryVariables>(GetLessonsByChapterSlugDocument, options);
      }
export function useGetLessonsByChapterSlugLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetLessonsByChapterSlugQuery, GetLessonsByChapterSlugQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetLessonsByChapterSlugQuery, GetLessonsByChapterSlugQueryVariables>(GetLessonsByChapterSlugDocument, options);
        }
export type GetLessonsByChapterSlugQueryHookResult = ReturnType<typeof useGetLessonsByChapterSlugQuery>;
export type GetLessonsByChapterSlugLazyQueryHookResult = ReturnType<typeof useGetLessonsByChapterSlugLazyQuery>;
export type GetLessonsByChapterSlugQueryResult = Apollo.QueryResult<GetLessonsByChapterSlugQuery, GetLessonsByChapterSlugQueryVariables>;
export const GetModulesAndChaptersDocument = gql`
    query GetModulesAndChapters($courseAcronym: String) {
  course(where: {courseAcronym: $courseAcronym}) {
    courseName
    courseAcronym
    courseImage {
      url
    }
    coursePeriod
    id
    slug
    modules {
      liveLessons {
        id
        slug
        title
        date
        startTime
        endTime
        about {
          html
        }
        objectives {
          html
        }
        teacher {
          name
          image {
            url
          }
          bio
          linkedin
        }
      }
      id
      moduleNumber
      moduleTitle
      chapters {
        id
        slug
        title
        duration
        lessons {
          id
          video {
            url
          }
        }
      }
    }
  }
}
    `;

/**
 * __useGetModulesAndChaptersQuery__
 *
 * To run a query within a React component, call `useGetModulesAndChaptersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetModulesAndChaptersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetModulesAndChaptersQuery({
 *   variables: {
 *      courseAcronym: // value for 'courseAcronym'
 *   },
 * });
 */
export function useGetModulesAndChaptersQuery(baseOptions?: Apollo.QueryHookOptions<GetModulesAndChaptersQuery, GetModulesAndChaptersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetModulesAndChaptersQuery, GetModulesAndChaptersQueryVariables>(GetModulesAndChaptersDocument, options);
      }
export function useGetModulesAndChaptersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetModulesAndChaptersQuery, GetModulesAndChaptersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetModulesAndChaptersQuery, GetModulesAndChaptersQueryVariables>(GetModulesAndChaptersDocument, options);
        }
export type GetModulesAndChaptersQueryHookResult = ReturnType<typeof useGetModulesAndChaptersQuery>;
export type GetModulesAndChaptersLazyQueryHookResult = ReturnType<typeof useGetModulesAndChaptersLazyQuery>;
export type GetModulesAndChaptersQueryResult = Apollo.QueryResult<GetModulesAndChaptersQuery, GetModulesAndChaptersQueryVariables>;