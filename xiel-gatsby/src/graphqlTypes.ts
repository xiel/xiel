export type Maybe<T> = T | undefined
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  /** A date string, such as 2007-12-03, compliant with the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any
}

export type BooleanQueryOperatorInput = {
  eq?: Maybe<Scalars["Boolean"]>
  in?: Maybe<Array<Maybe<Scalars["Boolean"]>>>
  ne?: Maybe<Scalars["Boolean"]>
  nin?: Maybe<Array<Maybe<Scalars["Boolean"]>>>
}

export type DateQueryOperatorInput = {
  eq?: Maybe<Scalars["Date"]>
  gt?: Maybe<Scalars["Date"]>
  gte?: Maybe<Scalars["Date"]>
  in?: Maybe<Array<Maybe<Scalars["Date"]>>>
  lt?: Maybe<Scalars["Date"]>
  lte?: Maybe<Scalars["Date"]>
  ne?: Maybe<Scalars["Date"]>
  nin?: Maybe<Array<Maybe<Scalars["Date"]>>>
}

export type Directory = Node & {
  __typename?: "Directory"
  absolutePath?: Maybe<Scalars["String"]>
  accessTime?: Maybe<Scalars["Date"]>
  atime?: Maybe<Scalars["Date"]>
  atimeMs?: Maybe<Scalars["Float"]>
  base?: Maybe<Scalars["String"]>
  birthTime?: Maybe<Scalars["Date"]>
  birthtime?: Maybe<Scalars["Date"]>
  birthtimeMs?: Maybe<Scalars["Float"]>
  blksize?: Maybe<Scalars["Int"]>
  blocks?: Maybe<Scalars["Int"]>
  changeTime?: Maybe<Scalars["Date"]>
  children: Array<Node>
  ctime?: Maybe<Scalars["Date"]>
  ctimeMs?: Maybe<Scalars["Float"]>
  dev?: Maybe<Scalars["Int"]>
  dir?: Maybe<Scalars["String"]>
  ext?: Maybe<Scalars["String"]>
  extension?: Maybe<Scalars["String"]>
  gid?: Maybe<Scalars["Int"]>
  id: Scalars["ID"]
  ino?: Maybe<Scalars["Float"]>
  internal: Internal
  mode?: Maybe<Scalars["Int"]>
  modifiedTime?: Maybe<Scalars["Date"]>
  mtime?: Maybe<Scalars["Date"]>
  mtimeMs?: Maybe<Scalars["Float"]>
  name?: Maybe<Scalars["String"]>
  nlink?: Maybe<Scalars["Int"]>
  parent?: Maybe<Node>
  prettySize?: Maybe<Scalars["String"]>
  rdev?: Maybe<Scalars["Int"]>
  relativeDirectory?: Maybe<Scalars["String"]>
  relativePath?: Maybe<Scalars["String"]>
  root?: Maybe<Scalars["String"]>
  size?: Maybe<Scalars["Int"]>
  sourceInstanceName?: Maybe<Scalars["String"]>
  uid?: Maybe<Scalars["Int"]>
}

export type DirectoryAccessTimeArgs = {
  difference?: Maybe<Scalars["String"]>
  formatString?: Maybe<Scalars["String"]>
  fromNow?: Maybe<Scalars["Boolean"]>
  locale?: Maybe<Scalars["String"]>
}

export type DirectoryAtimeArgs = {
  difference?: Maybe<Scalars["String"]>
  formatString?: Maybe<Scalars["String"]>
  fromNow?: Maybe<Scalars["Boolean"]>
  locale?: Maybe<Scalars["String"]>
}

export type DirectoryBirthTimeArgs = {
  difference?: Maybe<Scalars["String"]>
  formatString?: Maybe<Scalars["String"]>
  fromNow?: Maybe<Scalars["Boolean"]>
  locale?: Maybe<Scalars["String"]>
}

export type DirectoryBirthtimeArgs = {
  difference?: Maybe<Scalars["String"]>
  formatString?: Maybe<Scalars["String"]>
  fromNow?: Maybe<Scalars["Boolean"]>
  locale?: Maybe<Scalars["String"]>
}

export type DirectoryChangeTimeArgs = {
  difference?: Maybe<Scalars["String"]>
  formatString?: Maybe<Scalars["String"]>
  fromNow?: Maybe<Scalars["Boolean"]>
  locale?: Maybe<Scalars["String"]>
}

export type DirectoryCtimeArgs = {
  difference?: Maybe<Scalars["String"]>
  formatString?: Maybe<Scalars["String"]>
  fromNow?: Maybe<Scalars["Boolean"]>
  locale?: Maybe<Scalars["String"]>
}

export type DirectoryModifiedTimeArgs = {
  difference?: Maybe<Scalars["String"]>
  formatString?: Maybe<Scalars["String"]>
  fromNow?: Maybe<Scalars["Boolean"]>
  locale?: Maybe<Scalars["String"]>
}

export type DirectoryMtimeArgs = {
  difference?: Maybe<Scalars["String"]>
  formatString?: Maybe<Scalars["String"]>
  fromNow?: Maybe<Scalars["Boolean"]>
  locale?: Maybe<Scalars["String"]>
}

export type DirectoryConnection = {
  __typename?: "DirectoryConnection"
  distinct: Array<Scalars["String"]>
  edges: Array<DirectoryEdge>
  group: Array<DirectoryGroupConnection>
  nodes: Array<Directory>
  pageInfo: PageInfo
  totalCount: Scalars["Int"]
}

export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum
}

export type DirectoryConnectionGroupArgs = {
  field: DirectoryFieldsEnum
  limit?: Maybe<Scalars["Int"]>
  skip?: Maybe<Scalars["Int"]>
}

export type DirectoryEdge = {
  __typename?: "DirectoryEdge"
  next?: Maybe<Directory>
  node: Directory
  previous?: Maybe<Directory>
}

export enum DirectoryFieldsEnum {
  AbsolutePath = "absolutePath",
  AccessTime = "accessTime",
  Atime = "atime",
  AtimeMs = "atimeMs",
  Base = "base",
  BirthTime = "birthTime",
  Birthtime = "birthtime",
  BirthtimeMs = "birthtimeMs",
  Blksize = "blksize",
  Blocks = "blocks",
  ChangeTime = "changeTime",
  Children = "children",
  ChildrenChildren = "children___children",
  ChildrenChildrenChildren = "children___children___children",
  ChildrenChildrenChildrenChildren = "children___children___children___children",
  ChildrenChildrenChildrenId = "children___children___children___id",
  ChildrenChildrenId = "children___children___id",
  ChildrenChildrenInternalContent = "children___children___internal___content",
  ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
  ChildrenChildrenInternalDescription = "children___children___internal___description",
  ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
  ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
  ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
  ChildrenChildrenInternalOwner = "children___children___internal___owner",
  ChildrenChildrenInternalType = "children___children___internal___type",
  ChildrenChildrenParentChildren = "children___children___parent___children",
  ChildrenChildrenParentId = "children___children___parent___id",
  ChildrenId = "children___id",
  ChildrenInternalContent = "children___internal___content",
  ChildrenInternalContentDigest = "children___internal___contentDigest",
  ChildrenInternalDescription = "children___internal___description",
  ChildrenInternalFieldOwners = "children___internal___fieldOwners",
  ChildrenInternalIgnoreType = "children___internal___ignoreType",
  ChildrenInternalMediaType = "children___internal___mediaType",
  ChildrenInternalOwner = "children___internal___owner",
  ChildrenInternalType = "children___internal___type",
  ChildrenParentChildren = "children___parent___children",
  ChildrenParentChildrenChildren = "children___parent___children___children",
  ChildrenParentChildrenId = "children___parent___children___id",
  ChildrenParentId = "children___parent___id",
  ChildrenParentInternalContent = "children___parent___internal___content",
  ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
  ChildrenParentInternalDescription = "children___parent___internal___description",
  ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
  ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
  ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
  ChildrenParentInternalOwner = "children___parent___internal___owner",
  ChildrenParentInternalType = "children___parent___internal___type",
  ChildrenParentParentChildren = "children___parent___parent___children",
  ChildrenParentParentId = "children___parent___parent___id",
  Ctime = "ctime",
  CtimeMs = "ctimeMs",
  Dev = "dev",
  Dir = "dir",
  Ext = "ext",
  Extension = "extension",
  Gid = "gid",
  Id = "id",
  Ino = "ino",
  InternalContent = "internal___content",
  InternalContentDigest = "internal___contentDigest",
  InternalDescription = "internal___description",
  InternalFieldOwners = "internal___fieldOwners",
  InternalIgnoreType = "internal___ignoreType",
  InternalMediaType = "internal___mediaType",
  InternalOwner = "internal___owner",
  InternalType = "internal___type",
  Mode = "mode",
  ModifiedTime = "modifiedTime",
  Mtime = "mtime",
  MtimeMs = "mtimeMs",
  Name = "name",
  Nlink = "nlink",
  ParentChildren = "parent___children",
  ParentChildrenChildren = "parent___children___children",
  ParentChildrenChildrenChildren = "parent___children___children___children",
  ParentChildrenChildrenId = "parent___children___children___id",
  ParentChildrenId = "parent___children___id",
  ParentChildrenInternalContent = "parent___children___internal___content",
  ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
  ParentChildrenInternalDescription = "parent___children___internal___description",
  ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
  ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
  ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
  ParentChildrenInternalOwner = "parent___children___internal___owner",
  ParentChildrenInternalType = "parent___children___internal___type",
  ParentChildrenParentChildren = "parent___children___parent___children",
  ParentChildrenParentId = "parent___children___parent___id",
  ParentId = "parent___id",
  ParentInternalContent = "parent___internal___content",
  ParentInternalContentDigest = "parent___internal___contentDigest",
  ParentInternalDescription = "parent___internal___description",
  ParentInternalFieldOwners = "parent___internal___fieldOwners",
  ParentInternalIgnoreType = "parent___internal___ignoreType",
  ParentInternalMediaType = "parent___internal___mediaType",
  ParentInternalOwner = "parent___internal___owner",
  ParentInternalType = "parent___internal___type",
  ParentParentChildren = "parent___parent___children",
  ParentParentChildrenChildren = "parent___parent___children___children",
  ParentParentChildrenId = "parent___parent___children___id",
  ParentParentId = "parent___parent___id",
  ParentParentInternalContent = "parent___parent___internal___content",
  ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
  ParentParentInternalDescription = "parent___parent___internal___description",
  ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
  ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
  ParentParentInternalMediaType = "parent___parent___internal___mediaType",
  ParentParentInternalOwner = "parent___parent___internal___owner",
  ParentParentInternalType = "parent___parent___internal___type",
  ParentParentParentChildren = "parent___parent___parent___children",
  ParentParentParentId = "parent___parent___parent___id",
  PrettySize = "prettySize",
  Rdev = "rdev",
  RelativeDirectory = "relativeDirectory",
  RelativePath = "relativePath",
  Root = "root",
  Size = "size",
  SourceInstanceName = "sourceInstanceName",
  Uid = "uid",
}

export type DirectoryFilterInput = {
  absolutePath?: Maybe<StringQueryOperatorInput>
  accessTime?: Maybe<DateQueryOperatorInput>
  atime?: Maybe<DateQueryOperatorInput>
  atimeMs?: Maybe<FloatQueryOperatorInput>
  base?: Maybe<StringQueryOperatorInput>
  birthTime?: Maybe<DateQueryOperatorInput>
  birthtime?: Maybe<DateQueryOperatorInput>
  birthtimeMs?: Maybe<FloatQueryOperatorInput>
  blksize?: Maybe<IntQueryOperatorInput>
  blocks?: Maybe<IntQueryOperatorInput>
  changeTime?: Maybe<DateQueryOperatorInput>
  children?: Maybe<NodeFilterListInput>
  ctime?: Maybe<DateQueryOperatorInput>
  ctimeMs?: Maybe<FloatQueryOperatorInput>
  dev?: Maybe<IntQueryOperatorInput>
  dir?: Maybe<StringQueryOperatorInput>
  ext?: Maybe<StringQueryOperatorInput>
  extension?: Maybe<StringQueryOperatorInput>
  gid?: Maybe<IntQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  ino?: Maybe<FloatQueryOperatorInput>
  internal?: Maybe<InternalFilterInput>
  mode?: Maybe<IntQueryOperatorInput>
  modifiedTime?: Maybe<DateQueryOperatorInput>
  mtime?: Maybe<DateQueryOperatorInput>
  mtimeMs?: Maybe<FloatQueryOperatorInput>
  name?: Maybe<StringQueryOperatorInput>
  nlink?: Maybe<IntQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  prettySize?: Maybe<StringQueryOperatorInput>
  rdev?: Maybe<IntQueryOperatorInput>
  relativeDirectory?: Maybe<StringQueryOperatorInput>
  relativePath?: Maybe<StringQueryOperatorInput>
  root?: Maybe<StringQueryOperatorInput>
  size?: Maybe<IntQueryOperatorInput>
  sourceInstanceName?: Maybe<StringQueryOperatorInput>
  uid?: Maybe<IntQueryOperatorInput>
}

export type DirectoryGroupConnection = {
  __typename?: "DirectoryGroupConnection"
  edges: Array<DirectoryEdge>
  field: Scalars["String"]
  fieldValue?: Maybe<Scalars["String"]>
  nodes: Array<Directory>
  pageInfo: PageInfo
  totalCount: Scalars["Int"]
}

export type DirectorySortInput = {
  fields?: Maybe<Array<Maybe<DirectoryFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type DuotoneGradient = {
  highlight?: Maybe<Scalars["String"]>
  opacity?: Maybe<Scalars["Int"]>
  shadow?: Maybe<Scalars["String"]>
}

export type File = Node & {
  __typename?: "File"
  absolutePath?: Maybe<Scalars["String"]>
  accessTime?: Maybe<Scalars["Date"]>
  atime?: Maybe<Scalars["Date"]>
  atimeMs?: Maybe<Scalars["Float"]>
  base?: Maybe<Scalars["String"]>
  birthTime?: Maybe<Scalars["Date"]>
  birthtime?: Maybe<Scalars["Date"]>
  birthtimeMs?: Maybe<Scalars["Float"]>
  blksize?: Maybe<Scalars["Int"]>
  blocks?: Maybe<Scalars["Int"]>
  changeTime?: Maybe<Scalars["Date"]>
  childImageSharp?: Maybe<ImageSharp>
  children: Array<Node>
  childrenProjectJson?: Maybe<Array<Maybe<ProjectJson>>>
  ctime?: Maybe<Scalars["Date"]>
  ctimeMs?: Maybe<Scalars["Float"]>
  dev?: Maybe<Scalars["Int"]>
  dir?: Maybe<Scalars["String"]>
  ext?: Maybe<Scalars["String"]>
  extension?: Maybe<Scalars["String"]>
  gid?: Maybe<Scalars["Int"]>
  id: Scalars["ID"]
  ino?: Maybe<Scalars["Float"]>
  internal: Internal
  mode?: Maybe<Scalars["Int"]>
  modifiedTime?: Maybe<Scalars["Date"]>
  mtime?: Maybe<Scalars["Date"]>
  mtimeMs?: Maybe<Scalars["Float"]>
  name?: Maybe<Scalars["String"]>
  nlink?: Maybe<Scalars["Int"]>
  parent?: Maybe<Node>
  prettySize?: Maybe<Scalars["String"]>
  /** Copy file to static directory and return public url to it */
  publicURL?: Maybe<Scalars["String"]>
  rdev?: Maybe<Scalars["Int"]>
  relativeDirectory?: Maybe<Scalars["String"]>
  relativePath?: Maybe<Scalars["String"]>
  root?: Maybe<Scalars["String"]>
  size?: Maybe<Scalars["Int"]>
  sourceInstanceName?: Maybe<Scalars["String"]>
  uid?: Maybe<Scalars["Int"]>
}

export type FileAccessTimeArgs = {
  difference?: Maybe<Scalars["String"]>
  formatString?: Maybe<Scalars["String"]>
  fromNow?: Maybe<Scalars["Boolean"]>
  locale?: Maybe<Scalars["String"]>
}

export type FileAtimeArgs = {
  difference?: Maybe<Scalars["String"]>
  formatString?: Maybe<Scalars["String"]>
  fromNow?: Maybe<Scalars["Boolean"]>
  locale?: Maybe<Scalars["String"]>
}

export type FileBirthTimeArgs = {
  difference?: Maybe<Scalars["String"]>
  formatString?: Maybe<Scalars["String"]>
  fromNow?: Maybe<Scalars["Boolean"]>
  locale?: Maybe<Scalars["String"]>
}

export type FileBirthtimeArgs = {
  difference?: Maybe<Scalars["String"]>
  formatString?: Maybe<Scalars["String"]>
  fromNow?: Maybe<Scalars["Boolean"]>
  locale?: Maybe<Scalars["String"]>
}

export type FileChangeTimeArgs = {
  difference?: Maybe<Scalars["String"]>
  formatString?: Maybe<Scalars["String"]>
  fromNow?: Maybe<Scalars["Boolean"]>
  locale?: Maybe<Scalars["String"]>
}

export type FileCtimeArgs = {
  difference?: Maybe<Scalars["String"]>
  formatString?: Maybe<Scalars["String"]>
  fromNow?: Maybe<Scalars["Boolean"]>
  locale?: Maybe<Scalars["String"]>
}

export type FileModifiedTimeArgs = {
  difference?: Maybe<Scalars["String"]>
  formatString?: Maybe<Scalars["String"]>
  fromNow?: Maybe<Scalars["Boolean"]>
  locale?: Maybe<Scalars["String"]>
}

export type FileMtimeArgs = {
  difference?: Maybe<Scalars["String"]>
  formatString?: Maybe<Scalars["String"]>
  fromNow?: Maybe<Scalars["Boolean"]>
  locale?: Maybe<Scalars["String"]>
}

export type FileConnection = {
  __typename?: "FileConnection"
  distinct: Array<Scalars["String"]>
  edges: Array<FileEdge>
  group: Array<FileGroupConnection>
  nodes: Array<File>
  pageInfo: PageInfo
  totalCount: Scalars["Int"]
}

export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum
}

export type FileConnectionGroupArgs = {
  field: FileFieldsEnum
  limit?: Maybe<Scalars["Int"]>
  skip?: Maybe<Scalars["Int"]>
}

export type FileEdge = {
  __typename?: "FileEdge"
  next?: Maybe<File>
  node: File
  previous?: Maybe<File>
}

export enum FileFieldsEnum {
  AbsolutePath = "absolutePath",
  AccessTime = "accessTime",
  Atime = "atime",
  AtimeMs = "atimeMs",
  Base = "base",
  BirthTime = "birthTime",
  Birthtime = "birthtime",
  BirthtimeMs = "birthtimeMs",
  Blksize = "blksize",
  Blocks = "blocks",
  ChangeTime = "changeTime",
  Children = "children",
  ChildrenChildren = "children___children",
  ChildrenChildrenChildren = "children___children___children",
  ChildrenChildrenChildrenChildren = "children___children___children___children",
  ChildrenChildrenChildrenId = "children___children___children___id",
  ChildrenChildrenId = "children___children___id",
  ChildrenChildrenInternalContent = "children___children___internal___content",
  ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
  ChildrenChildrenInternalDescription = "children___children___internal___description",
  ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
  ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
  ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
  ChildrenChildrenInternalOwner = "children___children___internal___owner",
  ChildrenChildrenInternalType = "children___children___internal___type",
  ChildrenChildrenParentChildren = "children___children___parent___children",
  ChildrenChildrenParentId = "children___children___parent___id",
  ChildrenId = "children___id",
  ChildrenInternalContent = "children___internal___content",
  ChildrenInternalContentDigest = "children___internal___contentDigest",
  ChildrenInternalDescription = "children___internal___description",
  ChildrenInternalFieldOwners = "children___internal___fieldOwners",
  ChildrenInternalIgnoreType = "children___internal___ignoreType",
  ChildrenInternalMediaType = "children___internal___mediaType",
  ChildrenInternalOwner = "children___internal___owner",
  ChildrenInternalType = "children___internal___type",
  ChildrenParentChildren = "children___parent___children",
  ChildrenParentChildrenChildren = "children___parent___children___children",
  ChildrenParentChildrenId = "children___parent___children___id",
  ChildrenParentId = "children___parent___id",
  ChildrenParentInternalContent = "children___parent___internal___content",
  ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
  ChildrenParentInternalDescription = "children___parent___internal___description",
  ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
  ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
  ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
  ChildrenParentInternalOwner = "children___parent___internal___owner",
  ChildrenParentInternalType = "children___parent___internal___type",
  ChildrenParentParentChildren = "children___parent___parent___children",
  ChildrenParentParentId = "children___parent___parent___id",
  Ctime = "ctime",
  CtimeMs = "ctimeMs",
  Dev = "dev",
  Dir = "dir",
  Ext = "ext",
  Extension = "extension",
  Gid = "gid",
  Id = "id",
  Ino = "ino",
  InternalContent = "internal___content",
  InternalContentDigest = "internal___contentDigest",
  InternalDescription = "internal___description",
  InternalFieldOwners = "internal___fieldOwners",
  InternalIgnoreType = "internal___ignoreType",
  InternalMediaType = "internal___mediaType",
  InternalOwner = "internal___owner",
  InternalType = "internal___type",
  Mode = "mode",
  ModifiedTime = "modifiedTime",
  Mtime = "mtime",
  MtimeMs = "mtimeMs",
  Name = "name",
  Nlink = "nlink",
  ParentChildren = "parent___children",
  ParentChildrenChildren = "parent___children___children",
  ParentChildrenChildrenChildren = "parent___children___children___children",
  ParentChildrenChildrenId = "parent___children___children___id",
  ParentChildrenId = "parent___children___id",
  ParentChildrenInternalContent = "parent___children___internal___content",
  ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
  ParentChildrenInternalDescription = "parent___children___internal___description",
  ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
  ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
  ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
  ParentChildrenInternalOwner = "parent___children___internal___owner",
  ParentChildrenInternalType = "parent___children___internal___type",
  ParentChildrenParentChildren = "parent___children___parent___children",
  ParentChildrenParentId = "parent___children___parent___id",
  ParentId = "parent___id",
  ParentInternalContent = "parent___internal___content",
  ParentInternalContentDigest = "parent___internal___contentDigest",
  ParentInternalDescription = "parent___internal___description",
  ParentInternalFieldOwners = "parent___internal___fieldOwners",
  ParentInternalIgnoreType = "parent___internal___ignoreType",
  ParentInternalMediaType = "parent___internal___mediaType",
  ParentInternalOwner = "parent___internal___owner",
  ParentInternalType = "parent___internal___type",
  ParentParentChildren = "parent___parent___children",
  ParentParentChildrenChildren = "parent___parent___children___children",
  ParentParentChildrenId = "parent___parent___children___id",
  ParentParentId = "parent___parent___id",
  ParentParentInternalContent = "parent___parent___internal___content",
  ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
  ParentParentInternalDescription = "parent___parent___internal___description",
  ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
  ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
  ParentParentInternalMediaType = "parent___parent___internal___mediaType",
  ParentParentInternalOwner = "parent___parent___internal___owner",
  ParentParentInternalType = "parent___parent___internal___type",
  ParentParentParentChildren = "parent___parent___parent___children",
  ParentParentParentId = "parent___parent___parent___id",
  PrettySize = "prettySize",
  PublicUrl = "publicURL",
  Rdev = "rdev",
  RelativeDirectory = "relativeDirectory",
  RelativePath = "relativePath",
  Root = "root",
  Size = "size",
  SourceInstanceName = "sourceInstanceName",
  Uid = "uid",
}

export type FileFilterInput = {
  absolutePath?: Maybe<StringQueryOperatorInput>
  accessTime?: Maybe<DateQueryOperatorInput>
  atime?: Maybe<DateQueryOperatorInput>
  atimeMs?: Maybe<FloatQueryOperatorInput>
  base?: Maybe<StringQueryOperatorInput>
  birthTime?: Maybe<DateQueryOperatorInput>
  birthtime?: Maybe<DateQueryOperatorInput>
  birthtimeMs?: Maybe<FloatQueryOperatorInput>
  blksize?: Maybe<IntQueryOperatorInput>
  blocks?: Maybe<IntQueryOperatorInput>
  changeTime?: Maybe<DateQueryOperatorInput>
  children?: Maybe<NodeFilterListInput>
  ctime?: Maybe<DateQueryOperatorInput>
  ctimeMs?: Maybe<FloatQueryOperatorInput>
  dev?: Maybe<IntQueryOperatorInput>
  dir?: Maybe<StringQueryOperatorInput>
  ext?: Maybe<StringQueryOperatorInput>
  extension?: Maybe<StringQueryOperatorInput>
  gid?: Maybe<IntQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  ino?: Maybe<FloatQueryOperatorInput>
  internal?: Maybe<InternalFilterInput>
  mode?: Maybe<IntQueryOperatorInput>
  modifiedTime?: Maybe<DateQueryOperatorInput>
  mtime?: Maybe<DateQueryOperatorInput>
  mtimeMs?: Maybe<FloatQueryOperatorInput>
  name?: Maybe<StringQueryOperatorInput>
  nlink?: Maybe<IntQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  prettySize?: Maybe<StringQueryOperatorInput>
  publicURL?: Maybe<StringQueryOperatorInput>
  rdev?: Maybe<IntQueryOperatorInput>
  relativeDirectory?: Maybe<StringQueryOperatorInput>
  relativePath?: Maybe<StringQueryOperatorInput>
  root?: Maybe<StringQueryOperatorInput>
  size?: Maybe<IntQueryOperatorInput>
  sourceInstanceName?: Maybe<StringQueryOperatorInput>
  uid?: Maybe<IntQueryOperatorInput>
}

export type FileGroupConnection = {
  __typename?: "FileGroupConnection"
  edges: Array<FileEdge>
  field: Scalars["String"]
  fieldValue?: Maybe<Scalars["String"]>
  nodes: Array<File>
  pageInfo: PageInfo
  totalCount: Scalars["Int"]
}

export type FileSortInput = {
  fields?: Maybe<Array<Maybe<FileFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type FloatQueryOperatorInput = {
  eq?: Maybe<Scalars["Float"]>
  gt?: Maybe<Scalars["Float"]>
  gte?: Maybe<Scalars["Float"]>
  in?: Maybe<Array<Maybe<Scalars["Float"]>>>
  lt?: Maybe<Scalars["Float"]>
  lte?: Maybe<Scalars["Float"]>
  ne?: Maybe<Scalars["Float"]>
  nin?: Maybe<Array<Maybe<Scalars["Float"]>>>
}

export enum ImageCropFocus {
  Attention = "ATTENTION",
  Center = "CENTER",
  East = "EAST",
  Entropy = "ENTROPY",
  North = "NORTH",
  Northeast = "NORTHEAST",
  Northwest = "NORTHWEST",
  South = "SOUTH",
  Southeast = "SOUTHEAST",
  Southwest = "SOUTHWEST",
  West = "WEST",
}

export enum ImageFit {
  Contain = "CONTAIN",
  Cover = "COVER",
  Fill = "FILL",
}

export enum ImageFormat {
  Jpg = "JPG",
  NoChange = "NO_CHANGE",
  Png = "PNG",
  Webp = "WEBP",
}

export type ImageSharp = Node & {
  __typename?: "ImageSharp"
  children: Array<Node>
  fixed?: Maybe<ImageSharpFixed>
  fluid?: Maybe<ImageSharpFluid>
  id: Scalars["ID"]
  internal: Internal
  original?: Maybe<ImageSharpOriginal>
  parent?: Maybe<Node>
  resize?: Maybe<ImageSharpResize>
  resolutions?: Maybe<ImageSharpResolutions>
  sizes?: Maybe<ImageSharpSizes>
}

export type ImageSharpFixedArgs = {
  background: Scalars["String"]
  base64Width?: Maybe<Scalars["Int"]>
  cropFocus: ImageCropFocus
  duotone?: Maybe<DuotoneGradient>
  fit: ImageFit
  grayscale: Scalars["Boolean"]
  height?: Maybe<Scalars["Int"]>
  jpegProgressive: Scalars["Boolean"]
  pngCompressionSpeed: Scalars["Int"]
  quality?: Maybe<Scalars["Int"]>
  rotate: Scalars["Int"]
  toFormat: ImageFormat
  toFormatBase64: ImageFormat
  traceSVG?: Maybe<Potrace>
  trim: Scalars["Float"]
  width?: Maybe<Scalars["Int"]>
}

export type ImageSharpFluidArgs = {
  background: Scalars["String"]
  base64Width?: Maybe<Scalars["Int"]>
  cropFocus: ImageCropFocus
  duotone?: Maybe<DuotoneGradient>
  fit: ImageFit
  grayscale: Scalars["Boolean"]
  jpegProgressive: Scalars["Boolean"]
  maxHeight?: Maybe<Scalars["Int"]>
  maxWidth?: Maybe<Scalars["Int"]>
  pngCompressionSpeed: Scalars["Int"]
  quality?: Maybe<Scalars["Int"]>
  rotate: Scalars["Int"]
  sizes: Scalars["String"]
  srcSetBreakpoints: Array<Maybe<Scalars["Int"]>>
  toFormat: ImageFormat
  toFormatBase64: ImageFormat
  traceSVG?: Maybe<Potrace>
  trim: Scalars["Float"]
}

export type ImageSharpResizeArgs = {
  background: Scalars["String"]
  base64: Scalars["Boolean"]
  cropFocus: ImageCropFocus
  duotone?: Maybe<DuotoneGradient>
  fit: ImageFit
  grayscale: Scalars["Boolean"]
  height?: Maybe<Scalars["Int"]>
  jpegProgressive: Scalars["Boolean"]
  pngCompressionLevel: Scalars["Int"]
  pngCompressionSpeed: Scalars["Int"]
  quality?: Maybe<Scalars["Int"]>
  rotate: Scalars["Int"]
  toFormat: ImageFormat
  traceSVG?: Maybe<Potrace>
  trim: Scalars["Float"]
  width?: Maybe<Scalars["Int"]>
}

export type ImageSharpResolutionsArgs = {
  background: Scalars["String"]
  base64Width?: Maybe<Scalars["Int"]>
  cropFocus: ImageCropFocus
  duotone?: Maybe<DuotoneGradient>
  fit: ImageFit
  grayscale: Scalars["Boolean"]
  height?: Maybe<Scalars["Int"]>
  jpegProgressive: Scalars["Boolean"]
  pngCompressionSpeed: Scalars["Int"]
  quality?: Maybe<Scalars["Int"]>
  rotate: Scalars["Int"]
  toFormat: ImageFormat
  toFormatBase64: ImageFormat
  traceSVG?: Maybe<Potrace>
  trim: Scalars["Float"]
  width?: Maybe<Scalars["Int"]>
}

export type ImageSharpSizesArgs = {
  background: Scalars["String"]
  base64Width?: Maybe<Scalars["Int"]>
  cropFocus: ImageCropFocus
  duotone?: Maybe<DuotoneGradient>
  fit: ImageFit
  grayscale: Scalars["Boolean"]
  jpegProgressive: Scalars["Boolean"]
  maxHeight?: Maybe<Scalars["Int"]>
  maxWidth?: Maybe<Scalars["Int"]>
  pngCompressionSpeed: Scalars["Int"]
  quality?: Maybe<Scalars["Int"]>
  rotate: Scalars["Int"]
  sizes: Scalars["String"]
  srcSetBreakpoints: Array<Maybe<Scalars["Int"]>>
  toFormat: ImageFormat
  toFormatBase64: ImageFormat
  traceSVG?: Maybe<Potrace>
  trim: Scalars["Float"]
}

export type ImageSharpConnection = {
  __typename?: "ImageSharpConnection"
  distinct: Array<Scalars["String"]>
  edges: Array<ImageSharpEdge>
  group: Array<ImageSharpGroupConnection>
  nodes: Array<ImageSharp>
  pageInfo: PageInfo
  totalCount: Scalars["Int"]
}

export type ImageSharpConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum
}

export type ImageSharpConnectionGroupArgs = {
  field: ImageSharpFieldsEnum
  limit?: Maybe<Scalars["Int"]>
  skip?: Maybe<Scalars["Int"]>
}

export type ImageSharpEdge = {
  __typename?: "ImageSharpEdge"
  next?: Maybe<ImageSharp>
  node: ImageSharp
  previous?: Maybe<ImageSharp>
}

export enum ImageSharpFieldsEnum {
  Children = "children",
  ChildrenChildren = "children___children",
  ChildrenChildrenChildren = "children___children___children",
  ChildrenChildrenChildrenChildren = "children___children___children___children",
  ChildrenChildrenChildrenId = "children___children___children___id",
  ChildrenChildrenId = "children___children___id",
  ChildrenChildrenInternalContent = "children___children___internal___content",
  ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
  ChildrenChildrenInternalDescription = "children___children___internal___description",
  ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
  ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
  ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
  ChildrenChildrenInternalOwner = "children___children___internal___owner",
  ChildrenChildrenInternalType = "children___children___internal___type",
  ChildrenChildrenParentChildren = "children___children___parent___children",
  ChildrenChildrenParentId = "children___children___parent___id",
  ChildrenId = "children___id",
  ChildrenInternalContent = "children___internal___content",
  ChildrenInternalContentDigest = "children___internal___contentDigest",
  ChildrenInternalDescription = "children___internal___description",
  ChildrenInternalFieldOwners = "children___internal___fieldOwners",
  ChildrenInternalIgnoreType = "children___internal___ignoreType",
  ChildrenInternalMediaType = "children___internal___mediaType",
  ChildrenInternalOwner = "children___internal___owner",
  ChildrenInternalType = "children___internal___type",
  ChildrenParentChildren = "children___parent___children",
  ChildrenParentChildrenChildren = "children___parent___children___children",
  ChildrenParentChildrenId = "children___parent___children___id",
  ChildrenParentId = "children___parent___id",
  ChildrenParentInternalContent = "children___parent___internal___content",
  ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
  ChildrenParentInternalDescription = "children___parent___internal___description",
  ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
  ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
  ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
  ChildrenParentInternalOwner = "children___parent___internal___owner",
  ChildrenParentInternalType = "children___parent___internal___type",
  ChildrenParentParentChildren = "children___parent___parent___children",
  ChildrenParentParentId = "children___parent___parent___id",
  FixedAspectRatio = "fixed___aspectRatio",
  FixedBase64 = "fixed___base64",
  FixedHeight = "fixed___height",
  FixedOriginalName = "fixed___originalName",
  FixedSrc = "fixed___src",
  FixedSrcSet = "fixed___srcSet",
  FixedSrcSetWebp = "fixed___srcSetWebp",
  FixedSrcWebp = "fixed___srcWebp",
  FixedTracedSvg = "fixed___tracedSVG",
  FixedWidth = "fixed___width",
  FluidAspectRatio = "fluid___aspectRatio",
  FluidBase64 = "fluid___base64",
  FluidOriginalImg = "fluid___originalImg",
  FluidOriginalName = "fluid___originalName",
  FluidPresentationHeight = "fluid___presentationHeight",
  FluidPresentationWidth = "fluid___presentationWidth",
  FluidSizes = "fluid___sizes",
  FluidSrc = "fluid___src",
  FluidSrcSet = "fluid___srcSet",
  FluidSrcSetWebp = "fluid___srcSetWebp",
  FluidSrcWebp = "fluid___srcWebp",
  FluidTracedSvg = "fluid___tracedSVG",
  Id = "id",
  InternalContent = "internal___content",
  InternalContentDigest = "internal___contentDigest",
  InternalDescription = "internal___description",
  InternalFieldOwners = "internal___fieldOwners",
  InternalIgnoreType = "internal___ignoreType",
  InternalMediaType = "internal___mediaType",
  InternalOwner = "internal___owner",
  InternalType = "internal___type",
  OriginalHeight = "original___height",
  OriginalSrc = "original___src",
  OriginalWidth = "original___width",
  ParentChildren = "parent___children",
  ParentChildrenChildren = "parent___children___children",
  ParentChildrenChildrenChildren = "parent___children___children___children",
  ParentChildrenChildrenId = "parent___children___children___id",
  ParentChildrenId = "parent___children___id",
  ParentChildrenInternalContent = "parent___children___internal___content",
  ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
  ParentChildrenInternalDescription = "parent___children___internal___description",
  ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
  ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
  ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
  ParentChildrenInternalOwner = "parent___children___internal___owner",
  ParentChildrenInternalType = "parent___children___internal___type",
  ParentChildrenParentChildren = "parent___children___parent___children",
  ParentChildrenParentId = "parent___children___parent___id",
  ParentId = "parent___id",
  ParentInternalContent = "parent___internal___content",
  ParentInternalContentDigest = "parent___internal___contentDigest",
  ParentInternalDescription = "parent___internal___description",
  ParentInternalFieldOwners = "parent___internal___fieldOwners",
  ParentInternalIgnoreType = "parent___internal___ignoreType",
  ParentInternalMediaType = "parent___internal___mediaType",
  ParentInternalOwner = "parent___internal___owner",
  ParentInternalType = "parent___internal___type",
  ParentParentChildren = "parent___parent___children",
  ParentParentChildrenChildren = "parent___parent___children___children",
  ParentParentChildrenId = "parent___parent___children___id",
  ParentParentId = "parent___parent___id",
  ParentParentInternalContent = "parent___parent___internal___content",
  ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
  ParentParentInternalDescription = "parent___parent___internal___description",
  ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
  ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
  ParentParentInternalMediaType = "parent___parent___internal___mediaType",
  ParentParentInternalOwner = "parent___parent___internal___owner",
  ParentParentInternalType = "parent___parent___internal___type",
  ParentParentParentChildren = "parent___parent___parent___children",
  ParentParentParentId = "parent___parent___parent___id",
  ResizeAspectRatio = "resize___aspectRatio",
  ResizeHeight = "resize___height",
  ResizeOriginalName = "resize___originalName",
  ResizeSrc = "resize___src",
  ResizeTracedSvg = "resize___tracedSVG",
  ResizeWidth = "resize___width",
  ResolutionsAspectRatio = "resolutions___aspectRatio",
  ResolutionsBase64 = "resolutions___base64",
  ResolutionsHeight = "resolutions___height",
  ResolutionsOriginalName = "resolutions___originalName",
  ResolutionsSrc = "resolutions___src",
  ResolutionsSrcSet = "resolutions___srcSet",
  ResolutionsSrcSetWebp = "resolutions___srcSetWebp",
  ResolutionsSrcWebp = "resolutions___srcWebp",
  ResolutionsTracedSvg = "resolutions___tracedSVG",
  ResolutionsWidth = "resolutions___width",
  SizesAspectRatio = "sizes___aspectRatio",
  SizesBase64 = "sizes___base64",
  SizesOriginalImg = "sizes___originalImg",
  SizesOriginalName = "sizes___originalName",
  SizesPresentationHeight = "sizes___presentationHeight",
  SizesPresentationWidth = "sizes___presentationWidth",
  SizesSizes = "sizes___sizes",
  SizesSrc = "sizes___src",
  SizesSrcSet = "sizes___srcSet",
  SizesSrcSetWebp = "sizes___srcSetWebp",
  SizesSrcWebp = "sizes___srcWebp",
  SizesTracedSvg = "sizes___tracedSVG",
}

export type ImageSharpFilterInput = {
  children?: Maybe<NodeFilterListInput>
  fixed?: Maybe<ImageSharpFixedFilterInput>
  fluid?: Maybe<ImageSharpFluidFilterInput>
  id?: Maybe<StringQueryOperatorInput>
  internal?: Maybe<InternalFilterInput>
  original?: Maybe<ImageSharpOriginalFilterInput>
  parent?: Maybe<NodeFilterInput>
  resize?: Maybe<ImageSharpResizeFilterInput>
  resolutions?: Maybe<ImageSharpResolutionsFilterInput>
  sizes?: Maybe<ImageSharpSizesFilterInput>
}

export type ImageSharpFixed = {
  __typename?: "ImageSharpFixed"
  aspectRatio?: Maybe<Scalars["Float"]>
  base64?: Maybe<Scalars["String"]>
  height?: Maybe<Scalars["Float"]>
  originalName?: Maybe<Scalars["String"]>
  src?: Maybe<Scalars["String"]>
  srcSet?: Maybe<Scalars["String"]>
  srcSetWebp?: Maybe<Scalars["String"]>
  srcWebp?: Maybe<Scalars["String"]>
  tracedSVG?: Maybe<Scalars["String"]>
  width?: Maybe<Scalars["Float"]>
}

export type ImageSharpFixedFilterInput = {
  aspectRatio?: Maybe<FloatQueryOperatorInput>
  base64?: Maybe<StringQueryOperatorInput>
  height?: Maybe<FloatQueryOperatorInput>
  originalName?: Maybe<StringQueryOperatorInput>
  src?: Maybe<StringQueryOperatorInput>
  srcSet?: Maybe<StringQueryOperatorInput>
  srcSetWebp?: Maybe<StringQueryOperatorInput>
  srcWebp?: Maybe<StringQueryOperatorInput>
  tracedSVG?: Maybe<StringQueryOperatorInput>
  width?: Maybe<FloatQueryOperatorInput>
}

export type ImageSharpFluid = {
  __typename?: "ImageSharpFluid"
  aspectRatio?: Maybe<Scalars["Float"]>
  base64?: Maybe<Scalars["String"]>
  originalImg?: Maybe<Scalars["String"]>
  originalName?: Maybe<Scalars["String"]>
  presentationHeight?: Maybe<Scalars["Int"]>
  presentationWidth?: Maybe<Scalars["Int"]>
  sizes?: Maybe<Scalars["String"]>
  src?: Maybe<Scalars["String"]>
  srcSet?: Maybe<Scalars["String"]>
  srcSetWebp?: Maybe<Scalars["String"]>
  srcWebp?: Maybe<Scalars["String"]>
  tracedSVG?: Maybe<Scalars["String"]>
}

export type ImageSharpFluidFilterInput = {
  aspectRatio?: Maybe<FloatQueryOperatorInput>
  base64?: Maybe<StringQueryOperatorInput>
  originalImg?: Maybe<StringQueryOperatorInput>
  originalName?: Maybe<StringQueryOperatorInput>
  presentationHeight?: Maybe<IntQueryOperatorInput>
  presentationWidth?: Maybe<IntQueryOperatorInput>
  sizes?: Maybe<StringQueryOperatorInput>
  src?: Maybe<StringQueryOperatorInput>
  srcSet?: Maybe<StringQueryOperatorInput>
  srcSetWebp?: Maybe<StringQueryOperatorInput>
  srcWebp?: Maybe<StringQueryOperatorInput>
  tracedSVG?: Maybe<StringQueryOperatorInput>
}

export type ImageSharpGroupConnection = {
  __typename?: "ImageSharpGroupConnection"
  edges: Array<ImageSharpEdge>
  field: Scalars["String"]
  fieldValue?: Maybe<Scalars["String"]>
  nodes: Array<ImageSharp>
  pageInfo: PageInfo
  totalCount: Scalars["Int"]
}

export type ImageSharpOriginal = {
  __typename?: "ImageSharpOriginal"
  height?: Maybe<Scalars["Float"]>
  src?: Maybe<Scalars["String"]>
  width?: Maybe<Scalars["Float"]>
}

export type ImageSharpOriginalFilterInput = {
  height?: Maybe<FloatQueryOperatorInput>
  src?: Maybe<StringQueryOperatorInput>
  width?: Maybe<FloatQueryOperatorInput>
}

export type ImageSharpResize = {
  __typename?: "ImageSharpResize"
  aspectRatio?: Maybe<Scalars["Float"]>
  height?: Maybe<Scalars["Int"]>
  originalName?: Maybe<Scalars["String"]>
  src?: Maybe<Scalars["String"]>
  tracedSVG?: Maybe<Scalars["String"]>
  width?: Maybe<Scalars["Int"]>
}

export type ImageSharpResizeFilterInput = {
  aspectRatio?: Maybe<FloatQueryOperatorInput>
  height?: Maybe<IntQueryOperatorInput>
  originalName?: Maybe<StringQueryOperatorInput>
  src?: Maybe<StringQueryOperatorInput>
  tracedSVG?: Maybe<StringQueryOperatorInput>
  width?: Maybe<IntQueryOperatorInput>
}

export type ImageSharpResolutions = {
  __typename?: "ImageSharpResolutions"
  aspectRatio?: Maybe<Scalars["Float"]>
  base64?: Maybe<Scalars["String"]>
  height?: Maybe<Scalars["Float"]>
  originalName?: Maybe<Scalars["String"]>
  src?: Maybe<Scalars["String"]>
  srcSet?: Maybe<Scalars["String"]>
  srcSetWebp?: Maybe<Scalars["String"]>
  srcWebp?: Maybe<Scalars["String"]>
  tracedSVG?: Maybe<Scalars["String"]>
  width?: Maybe<Scalars["Float"]>
}

export type ImageSharpResolutionsFilterInput = {
  aspectRatio?: Maybe<FloatQueryOperatorInput>
  base64?: Maybe<StringQueryOperatorInput>
  height?: Maybe<FloatQueryOperatorInput>
  originalName?: Maybe<StringQueryOperatorInput>
  src?: Maybe<StringQueryOperatorInput>
  srcSet?: Maybe<StringQueryOperatorInput>
  srcSetWebp?: Maybe<StringQueryOperatorInput>
  srcWebp?: Maybe<StringQueryOperatorInput>
  tracedSVG?: Maybe<StringQueryOperatorInput>
  width?: Maybe<FloatQueryOperatorInput>
}

export type ImageSharpSizes = {
  __typename?: "ImageSharpSizes"
  aspectRatio?: Maybe<Scalars["Float"]>
  base64?: Maybe<Scalars["String"]>
  originalImg?: Maybe<Scalars["String"]>
  originalName?: Maybe<Scalars["String"]>
  presentationHeight?: Maybe<Scalars["Int"]>
  presentationWidth?: Maybe<Scalars["Int"]>
  sizes?: Maybe<Scalars["String"]>
  src?: Maybe<Scalars["String"]>
  srcSet?: Maybe<Scalars["String"]>
  srcSetWebp?: Maybe<Scalars["String"]>
  srcWebp?: Maybe<Scalars["String"]>
  tracedSVG?: Maybe<Scalars["String"]>
}

export type ImageSharpSizesFilterInput = {
  aspectRatio?: Maybe<FloatQueryOperatorInput>
  base64?: Maybe<StringQueryOperatorInput>
  originalImg?: Maybe<StringQueryOperatorInput>
  originalName?: Maybe<StringQueryOperatorInput>
  presentationHeight?: Maybe<IntQueryOperatorInput>
  presentationWidth?: Maybe<IntQueryOperatorInput>
  sizes?: Maybe<StringQueryOperatorInput>
  src?: Maybe<StringQueryOperatorInput>
  srcSet?: Maybe<StringQueryOperatorInput>
  srcSetWebp?: Maybe<StringQueryOperatorInput>
  srcWebp?: Maybe<StringQueryOperatorInput>
  tracedSVG?: Maybe<StringQueryOperatorInput>
}

export type ImageSharpSortInput = {
  fields?: Maybe<Array<Maybe<ImageSharpFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type Internal = {
  __typename?: "Internal"
  content?: Maybe<Scalars["String"]>
  contentDigest: Scalars["String"]
  description?: Maybe<Scalars["String"]>
  fieldOwners?: Maybe<Array<Maybe<Scalars["String"]>>>
  ignoreType?: Maybe<Scalars["Boolean"]>
  mediaType?: Maybe<Scalars["String"]>
  owner: Scalars["String"]
  type: Scalars["String"]
}

export type InternalFilterInput = {
  content?: Maybe<StringQueryOperatorInput>
  contentDigest?: Maybe<StringQueryOperatorInput>
  description?: Maybe<StringQueryOperatorInput>
  fieldOwners?: Maybe<StringQueryOperatorInput>
  ignoreType?: Maybe<BooleanQueryOperatorInput>
  mediaType?: Maybe<StringQueryOperatorInput>
  owner?: Maybe<StringQueryOperatorInput>
  type?: Maybe<StringQueryOperatorInput>
}

export type IntQueryOperatorInput = {
  eq?: Maybe<Scalars["Int"]>
  gt?: Maybe<Scalars["Int"]>
  gte?: Maybe<Scalars["Int"]>
  in?: Maybe<Array<Maybe<Scalars["Int"]>>>
  lt?: Maybe<Scalars["Int"]>
  lte?: Maybe<Scalars["Int"]>
  ne?: Maybe<Scalars["Int"]>
  nin?: Maybe<Array<Maybe<Scalars["Int"]>>>
}

/** Node Interface */
export type Node = {
  __typename?: "Node"
  children: Array<Node>
  id: Scalars["ID"]
  internal: Internal
  parent?: Maybe<Node>
}

export type NodeFilterInput = {
  children?: Maybe<NodeFilterListInput>
  id?: Maybe<StringQueryOperatorInput>
  internal?: Maybe<InternalFilterInput>
  parent?: Maybe<NodeFilterInput>
}

export type NodeFilterListInput = {
  elemMatch?: Maybe<NodeFilterInput>
}

export type PageInfo = {
  __typename?: "PageInfo"
  currentPage: Scalars["Int"]
  hasNextPage: Scalars["Boolean"]
  hasPreviousPage: Scalars["Boolean"]
  itemCount: Scalars["Int"]
  pageCount: Scalars["Int"]
  perPage?: Maybe<Scalars["Int"]>
}

export type Potrace = {
  alphaMax?: Maybe<Scalars["Float"]>
  background?: Maybe<Scalars["String"]>
  blackOnWhite?: Maybe<Scalars["Boolean"]>
  color?: Maybe<Scalars["String"]>
  optCurve?: Maybe<Scalars["Boolean"]>
  optTolerance?: Maybe<Scalars["Float"]>
  threshold?: Maybe<Scalars["Int"]>
  turdSize?: Maybe<Scalars["Float"]>
  turnPolicy?: Maybe<PotraceTurnPolicy>
}

export enum PotraceTurnPolicy {
  TurnpolicyBlack = "TURNPOLICY_BLACK",
  TurnpolicyLeft = "TURNPOLICY_LEFT",
  TurnpolicyMajority = "TURNPOLICY_MAJORITY",
  TurnpolicyMinority = "TURNPOLICY_MINORITY",
  TurnpolicyRight = "TURNPOLICY_RIGHT",
  TurnpolicyWhite = "TURNPOLICY_WHITE",
}

export type ProjectJson = Node & {
  __typename?: "ProjectJson"
  children: Array<Node>
  desc?: Maybe<Scalars["String"]>
  id: Scalars["ID"]
  image?: Maybe<File>
  internal: Internal
  parent?: Maybe<Node>
  slug?: Maybe<Scalars["String"]>
  title?: Maybe<Scalars["String"]>
}

export type ProjectJsonConnection = {
  __typename?: "ProjectJsonConnection"
  distinct: Array<Scalars["String"]>
  edges: Array<ProjectJsonEdge>
  group: Array<ProjectJsonGroupConnection>
  nodes: Array<ProjectJson>
  pageInfo: PageInfo
  totalCount: Scalars["Int"]
}

export type ProjectJsonConnectionDistinctArgs = {
  field: ProjectJsonFieldsEnum
}

export type ProjectJsonConnectionGroupArgs = {
  field: ProjectJsonFieldsEnum
  limit?: Maybe<Scalars["Int"]>
  skip?: Maybe<Scalars["Int"]>
}

export type ProjectJsonEdge = {
  __typename?: "ProjectJsonEdge"
  next?: Maybe<ProjectJson>
  node: ProjectJson
  previous?: Maybe<ProjectJson>
}

export enum ProjectJsonFieldsEnum {
  Children = "children",
  ChildrenChildren = "children___children",
  ChildrenChildrenChildren = "children___children___children",
  ChildrenChildrenChildrenChildren = "children___children___children___children",
  ChildrenChildrenChildrenId = "children___children___children___id",
  ChildrenChildrenId = "children___children___id",
  ChildrenChildrenInternalContent = "children___children___internal___content",
  ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
  ChildrenChildrenInternalDescription = "children___children___internal___description",
  ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
  ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
  ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
  ChildrenChildrenInternalOwner = "children___children___internal___owner",
  ChildrenChildrenInternalType = "children___children___internal___type",
  ChildrenChildrenParentChildren = "children___children___parent___children",
  ChildrenChildrenParentId = "children___children___parent___id",
  ChildrenId = "children___id",
  ChildrenInternalContent = "children___internal___content",
  ChildrenInternalContentDigest = "children___internal___contentDigest",
  ChildrenInternalDescription = "children___internal___description",
  ChildrenInternalFieldOwners = "children___internal___fieldOwners",
  ChildrenInternalIgnoreType = "children___internal___ignoreType",
  ChildrenInternalMediaType = "children___internal___mediaType",
  ChildrenInternalOwner = "children___internal___owner",
  ChildrenInternalType = "children___internal___type",
  ChildrenParentChildren = "children___parent___children",
  ChildrenParentChildrenChildren = "children___parent___children___children",
  ChildrenParentChildrenId = "children___parent___children___id",
  ChildrenParentId = "children___parent___id",
  ChildrenParentInternalContent = "children___parent___internal___content",
  ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
  ChildrenParentInternalDescription = "children___parent___internal___description",
  ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
  ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
  ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
  ChildrenParentInternalOwner = "children___parent___internal___owner",
  ChildrenParentInternalType = "children___parent___internal___type",
  ChildrenParentParentChildren = "children___parent___parent___children",
  ChildrenParentParentId = "children___parent___parent___id",
  Desc = "desc",
  Id = "id",
  ImageAbsolutePath = "image___absolutePath",
  ImageAccessTime = "image___accessTime",
  ImageAtime = "image___atime",
  ImageAtimeMs = "image___atimeMs",
  ImageBase = "image___base",
  ImageBirthTime = "image___birthTime",
  ImageBirthtime = "image___birthtime",
  ImageBirthtimeMs = "image___birthtimeMs",
  ImageBlksize = "image___blksize",
  ImageBlocks = "image___blocks",
  ImageChangeTime = "image___changeTime",
  ImageChildren = "image___children",
  ImageChildrenChildren = "image___children___children",
  ImageChildrenChildrenChildren = "image___children___children___children",
  ImageChildrenChildrenId = "image___children___children___id",
  ImageChildrenId = "image___children___id",
  ImageChildrenInternalContent = "image___children___internal___content",
  ImageChildrenInternalContentDigest = "image___children___internal___contentDigest",
  ImageChildrenInternalDescription = "image___children___internal___description",
  ImageChildrenInternalFieldOwners = "image___children___internal___fieldOwners",
  ImageChildrenInternalIgnoreType = "image___children___internal___ignoreType",
  ImageChildrenInternalMediaType = "image___children___internal___mediaType",
  ImageChildrenInternalOwner = "image___children___internal___owner",
  ImageChildrenInternalType = "image___children___internal___type",
  ImageChildrenParentChildren = "image___children___parent___children",
  ImageChildrenParentId = "image___children___parent___id",
  ImageCtime = "image___ctime",
  ImageCtimeMs = "image___ctimeMs",
  ImageDev = "image___dev",
  ImageDir = "image___dir",
  ImageExt = "image___ext",
  ImageExtension = "image___extension",
  ImageGid = "image___gid",
  ImageId = "image___id",
  ImageIno = "image___ino",
  ImageInternalContent = "image___internal___content",
  ImageInternalContentDigest = "image___internal___contentDigest",
  ImageInternalDescription = "image___internal___description",
  ImageInternalFieldOwners = "image___internal___fieldOwners",
  ImageInternalIgnoreType = "image___internal___ignoreType",
  ImageInternalMediaType = "image___internal___mediaType",
  ImageInternalOwner = "image___internal___owner",
  ImageInternalType = "image___internal___type",
  ImageMode = "image___mode",
  ImageModifiedTime = "image___modifiedTime",
  ImageMtime = "image___mtime",
  ImageMtimeMs = "image___mtimeMs",
  ImageName = "image___name",
  ImageNlink = "image___nlink",
  ImageParentChildren = "image___parent___children",
  ImageParentChildrenChildren = "image___parent___children___children",
  ImageParentChildrenId = "image___parent___children___id",
  ImageParentId = "image___parent___id",
  ImageParentInternalContent = "image___parent___internal___content",
  ImageParentInternalContentDigest = "image___parent___internal___contentDigest",
  ImageParentInternalDescription = "image___parent___internal___description",
  ImageParentInternalFieldOwners = "image___parent___internal___fieldOwners",
  ImageParentInternalIgnoreType = "image___parent___internal___ignoreType",
  ImageParentInternalMediaType = "image___parent___internal___mediaType",
  ImageParentInternalOwner = "image___parent___internal___owner",
  ImageParentInternalType = "image___parent___internal___type",
  ImageParentParentChildren = "image___parent___parent___children",
  ImageParentParentId = "image___parent___parent___id",
  ImagePrettySize = "image___prettySize",
  ImagePublicUrl = "image___publicURL",
  ImageRdev = "image___rdev",
  ImageRelativeDirectory = "image___relativeDirectory",
  ImageRelativePath = "image___relativePath",
  ImageRoot = "image___root",
  ImageSize = "image___size",
  ImageSourceInstanceName = "image___sourceInstanceName",
  ImageUid = "image___uid",
  InternalContent = "internal___content",
  InternalContentDigest = "internal___contentDigest",
  InternalDescription = "internal___description",
  InternalFieldOwners = "internal___fieldOwners",
  InternalIgnoreType = "internal___ignoreType",
  InternalMediaType = "internal___mediaType",
  InternalOwner = "internal___owner",
  InternalType = "internal___type",
  ParentChildren = "parent___children",
  ParentChildrenChildren = "parent___children___children",
  ParentChildrenChildrenChildren = "parent___children___children___children",
  ParentChildrenChildrenId = "parent___children___children___id",
  ParentChildrenId = "parent___children___id",
  ParentChildrenInternalContent = "parent___children___internal___content",
  ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
  ParentChildrenInternalDescription = "parent___children___internal___description",
  ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
  ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
  ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
  ParentChildrenInternalOwner = "parent___children___internal___owner",
  ParentChildrenInternalType = "parent___children___internal___type",
  ParentChildrenParentChildren = "parent___children___parent___children",
  ParentChildrenParentId = "parent___children___parent___id",
  ParentId = "parent___id",
  ParentInternalContent = "parent___internal___content",
  ParentInternalContentDigest = "parent___internal___contentDigest",
  ParentInternalDescription = "parent___internal___description",
  ParentInternalFieldOwners = "parent___internal___fieldOwners",
  ParentInternalIgnoreType = "parent___internal___ignoreType",
  ParentInternalMediaType = "parent___internal___mediaType",
  ParentInternalOwner = "parent___internal___owner",
  ParentInternalType = "parent___internal___type",
  ParentParentChildren = "parent___parent___children",
  ParentParentChildrenChildren = "parent___parent___children___children",
  ParentParentChildrenId = "parent___parent___children___id",
  ParentParentId = "parent___parent___id",
  ParentParentInternalContent = "parent___parent___internal___content",
  ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
  ParentParentInternalDescription = "parent___parent___internal___description",
  ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
  ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
  ParentParentInternalMediaType = "parent___parent___internal___mediaType",
  ParentParentInternalOwner = "parent___parent___internal___owner",
  ParentParentInternalType = "parent___parent___internal___type",
  ParentParentParentChildren = "parent___parent___parent___children",
  ParentParentParentId = "parent___parent___parent___id",
  Slug = "slug",
  Title = "title",
}

export type ProjectJsonFilterInput = {
  children?: Maybe<NodeFilterListInput>
  desc?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  image?: Maybe<FileFilterInput>
  internal?: Maybe<InternalFilterInput>
  parent?: Maybe<NodeFilterInput>
  slug?: Maybe<StringQueryOperatorInput>
  title?: Maybe<StringQueryOperatorInput>
}

export type ProjectJsonGroupConnection = {
  __typename?: "ProjectJsonGroupConnection"
  edges: Array<ProjectJsonEdge>
  field: Scalars["String"]
  fieldValue?: Maybe<Scalars["String"]>
  nodes: Array<ProjectJson>
  pageInfo: PageInfo
  totalCount: Scalars["Int"]
}

export type ProjectJsonSortInput = {
  fields?: Maybe<Array<Maybe<ProjectJsonFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type Query = {
  __typename?: "Query"
  allDirectory?: Maybe<DirectoryConnection>
  allFile?: Maybe<FileConnection>
  allImageSharp?: Maybe<ImageSharpConnection>
  allProjectJson?: Maybe<ProjectJsonConnection>
  allSite?: Maybe<SiteConnection>
  allSitePage?: Maybe<SitePageConnection>
  allSitePlugin?: Maybe<SitePluginConnection>
  directory?: Maybe<Directory>
  file?: Maybe<File>
  imageSharp?: Maybe<ImageSharp>
  projectJson?: Maybe<ProjectJson>
  site?: Maybe<Site>
  sitePage?: Maybe<SitePage>
  sitePlugin?: Maybe<SitePlugin>
}

export type QueryAllDirectoryArgs = {
  filter?: Maybe<DirectoryFilterInput>
  limit?: Maybe<Scalars["Int"]>
  skip?: Maybe<Scalars["Int"]>
  sort?: Maybe<DirectorySortInput>
}

export type QueryAllFileArgs = {
  filter?: Maybe<FileFilterInput>
  limit?: Maybe<Scalars["Int"]>
  skip?: Maybe<Scalars["Int"]>
  sort?: Maybe<FileSortInput>
}

export type QueryAllImageSharpArgs = {
  filter?: Maybe<ImageSharpFilterInput>
  limit?: Maybe<Scalars["Int"]>
  skip?: Maybe<Scalars["Int"]>
  sort?: Maybe<ImageSharpSortInput>
}

export type QueryAllProjectJsonArgs = {
  filter?: Maybe<ProjectJsonFilterInput>
  limit?: Maybe<Scalars["Int"]>
  skip?: Maybe<Scalars["Int"]>
  sort?: Maybe<ProjectJsonSortInput>
}

export type QueryAllSiteArgs = {
  filter?: Maybe<SiteFilterInput>
  limit?: Maybe<Scalars["Int"]>
  skip?: Maybe<Scalars["Int"]>
  sort?: Maybe<SiteSortInput>
}

export type QueryAllSitePageArgs = {
  filter?: Maybe<SitePageFilterInput>
  limit?: Maybe<Scalars["Int"]>
  skip?: Maybe<Scalars["Int"]>
  sort?: Maybe<SitePageSortInput>
}

export type QueryAllSitePluginArgs = {
  filter?: Maybe<SitePluginFilterInput>
  limit?: Maybe<Scalars["Int"]>
  skip?: Maybe<Scalars["Int"]>
  sort?: Maybe<SitePluginSortInput>
}

export type QueryDirectoryArgs = {
  absolutePath?: Maybe<StringQueryOperatorInput>
  accessTime?: Maybe<DateQueryOperatorInput>
  atime?: Maybe<DateQueryOperatorInput>
  atimeMs?: Maybe<FloatQueryOperatorInput>
  base?: Maybe<StringQueryOperatorInput>
  birthTime?: Maybe<DateQueryOperatorInput>
  birthtime?: Maybe<DateQueryOperatorInput>
  birthtimeMs?: Maybe<FloatQueryOperatorInput>
  blksize?: Maybe<IntQueryOperatorInput>
  blocks?: Maybe<IntQueryOperatorInput>
  changeTime?: Maybe<DateQueryOperatorInput>
  children?: Maybe<NodeFilterListInput>
  ctime?: Maybe<DateQueryOperatorInput>
  ctimeMs?: Maybe<FloatQueryOperatorInput>
  dev?: Maybe<IntQueryOperatorInput>
  dir?: Maybe<StringQueryOperatorInput>
  ext?: Maybe<StringQueryOperatorInput>
  extension?: Maybe<StringQueryOperatorInput>
  gid?: Maybe<IntQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  ino?: Maybe<FloatQueryOperatorInput>
  internal?: Maybe<InternalFilterInput>
  mode?: Maybe<IntQueryOperatorInput>
  modifiedTime?: Maybe<DateQueryOperatorInput>
  mtime?: Maybe<DateQueryOperatorInput>
  mtimeMs?: Maybe<FloatQueryOperatorInput>
  name?: Maybe<StringQueryOperatorInput>
  nlink?: Maybe<IntQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  prettySize?: Maybe<StringQueryOperatorInput>
  rdev?: Maybe<IntQueryOperatorInput>
  relativeDirectory?: Maybe<StringQueryOperatorInput>
  relativePath?: Maybe<StringQueryOperatorInput>
  root?: Maybe<StringQueryOperatorInput>
  size?: Maybe<IntQueryOperatorInput>
  sourceInstanceName?: Maybe<StringQueryOperatorInput>
  uid?: Maybe<IntQueryOperatorInput>
}

export type QueryFileArgs = {
  absolutePath?: Maybe<StringQueryOperatorInput>
  accessTime?: Maybe<DateQueryOperatorInput>
  atime?: Maybe<DateQueryOperatorInput>
  atimeMs?: Maybe<FloatQueryOperatorInput>
  base?: Maybe<StringQueryOperatorInput>
  birthTime?: Maybe<DateQueryOperatorInput>
  birthtime?: Maybe<DateQueryOperatorInput>
  birthtimeMs?: Maybe<FloatQueryOperatorInput>
  blksize?: Maybe<IntQueryOperatorInput>
  blocks?: Maybe<IntQueryOperatorInput>
  changeTime?: Maybe<DateQueryOperatorInput>
  children?: Maybe<NodeFilterListInput>
  ctime?: Maybe<DateQueryOperatorInput>
  ctimeMs?: Maybe<FloatQueryOperatorInput>
  dev?: Maybe<IntQueryOperatorInput>
  dir?: Maybe<StringQueryOperatorInput>
  ext?: Maybe<StringQueryOperatorInput>
  extension?: Maybe<StringQueryOperatorInput>
  gid?: Maybe<IntQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  ino?: Maybe<FloatQueryOperatorInput>
  internal?: Maybe<InternalFilterInput>
  mode?: Maybe<IntQueryOperatorInput>
  modifiedTime?: Maybe<DateQueryOperatorInput>
  mtime?: Maybe<DateQueryOperatorInput>
  mtimeMs?: Maybe<FloatQueryOperatorInput>
  name?: Maybe<StringQueryOperatorInput>
  nlink?: Maybe<IntQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  prettySize?: Maybe<StringQueryOperatorInput>
  publicURL?: Maybe<StringQueryOperatorInput>
  rdev?: Maybe<IntQueryOperatorInput>
  relativeDirectory?: Maybe<StringQueryOperatorInput>
  relativePath?: Maybe<StringQueryOperatorInput>
  root?: Maybe<StringQueryOperatorInput>
  size?: Maybe<IntQueryOperatorInput>
  sourceInstanceName?: Maybe<StringQueryOperatorInput>
  uid?: Maybe<IntQueryOperatorInput>
}

export type QueryImageSharpArgs = {
  children?: Maybe<NodeFilterListInput>
  fixed?: Maybe<ImageSharpFixedFilterInput>
  fluid?: Maybe<ImageSharpFluidFilterInput>
  id?: Maybe<StringQueryOperatorInput>
  internal?: Maybe<InternalFilterInput>
  original?: Maybe<ImageSharpOriginalFilterInput>
  parent?: Maybe<NodeFilterInput>
  resize?: Maybe<ImageSharpResizeFilterInput>
  resolutions?: Maybe<ImageSharpResolutionsFilterInput>
  sizes?: Maybe<ImageSharpSizesFilterInput>
}

export type QueryProjectJsonArgs = {
  children?: Maybe<NodeFilterListInput>
  desc?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  image?: Maybe<FileFilterInput>
  internal?: Maybe<InternalFilterInput>
  parent?: Maybe<NodeFilterInput>
  slug?: Maybe<StringQueryOperatorInput>
  title?: Maybe<StringQueryOperatorInput>
}

export type QuerySiteArgs = {
  buildTime?: Maybe<DateQueryOperatorInput>
  children?: Maybe<NodeFilterListInput>
  host?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  internal?: Maybe<InternalFilterInput>
  parent?: Maybe<NodeFilterInput>
  pathPrefix?: Maybe<StringQueryOperatorInput>
  polyfill?: Maybe<BooleanQueryOperatorInput>
  port?: Maybe<IntQueryOperatorInput>
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>
}

export type QuerySitePageArgs = {
  children?: Maybe<NodeFilterListInput>
  component?: Maybe<StringQueryOperatorInput>
  componentChunkName?: Maybe<StringQueryOperatorInput>
  componentPath?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  internal?: Maybe<InternalFilterInput>
  internalComponentName?: Maybe<StringQueryOperatorInput>
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>
  jsonName?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  path?: Maybe<StringQueryOperatorInput>
  pluginCreator?: Maybe<SitePluginFilterInput>
  pluginCreatorId?: Maybe<StringQueryOperatorInput>
}

export type QuerySitePluginArgs = {
  children?: Maybe<NodeFilterListInput>
  id?: Maybe<StringQueryOperatorInput>
  internal?: Maybe<InternalFilterInput>
  name?: Maybe<StringQueryOperatorInput>
  nodeAPIs?: Maybe<StringQueryOperatorInput>
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>
  parent?: Maybe<NodeFilterInput>
  pluginFilepath?: Maybe<StringQueryOperatorInput>
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>
  resolve?: Maybe<StringQueryOperatorInput>
  ssrAPIs?: Maybe<StringQueryOperatorInput>
  version?: Maybe<StringQueryOperatorInput>
}

export type Site = Node & {
  __typename?: "Site"
  buildTime?: Maybe<Scalars["Date"]>
  children: Array<Node>
  host?: Maybe<Scalars["String"]>
  id: Scalars["ID"]
  internal: Internal
  parent?: Maybe<Node>
  pathPrefix?: Maybe<Scalars["String"]>
  polyfill?: Maybe<Scalars["Boolean"]>
  port?: Maybe<Scalars["Int"]>
  siteMetadata?: Maybe<SiteSiteMetadata>
}

export type SiteBuildTimeArgs = {
  difference?: Maybe<Scalars["String"]>
  formatString?: Maybe<Scalars["String"]>
  fromNow?: Maybe<Scalars["Boolean"]>
  locale?: Maybe<Scalars["String"]>
}

export type SiteConnection = {
  __typename?: "SiteConnection"
  distinct: Array<Scalars["String"]>
  edges: Array<SiteEdge>
  group: Array<SiteGroupConnection>
  nodes: Array<Site>
  pageInfo: PageInfo
  totalCount: Scalars["Int"]
}

export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum
}

export type SiteConnectionGroupArgs = {
  field: SiteFieldsEnum
  limit?: Maybe<Scalars["Int"]>
  skip?: Maybe<Scalars["Int"]>
}

export type SiteEdge = {
  __typename?: "SiteEdge"
  next?: Maybe<Site>
  node: Site
  previous?: Maybe<Site>
}

export enum SiteFieldsEnum {
  BuildTime = "buildTime",
  Children = "children",
  ChildrenChildren = "children___children",
  ChildrenChildrenChildren = "children___children___children",
  ChildrenChildrenChildrenChildren = "children___children___children___children",
  ChildrenChildrenChildrenId = "children___children___children___id",
  ChildrenChildrenId = "children___children___id",
  ChildrenChildrenInternalContent = "children___children___internal___content",
  ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
  ChildrenChildrenInternalDescription = "children___children___internal___description",
  ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
  ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
  ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
  ChildrenChildrenInternalOwner = "children___children___internal___owner",
  ChildrenChildrenInternalType = "children___children___internal___type",
  ChildrenChildrenParentChildren = "children___children___parent___children",
  ChildrenChildrenParentId = "children___children___parent___id",
  ChildrenId = "children___id",
  ChildrenInternalContent = "children___internal___content",
  ChildrenInternalContentDigest = "children___internal___contentDigest",
  ChildrenInternalDescription = "children___internal___description",
  ChildrenInternalFieldOwners = "children___internal___fieldOwners",
  ChildrenInternalIgnoreType = "children___internal___ignoreType",
  ChildrenInternalMediaType = "children___internal___mediaType",
  ChildrenInternalOwner = "children___internal___owner",
  ChildrenInternalType = "children___internal___type",
  ChildrenParentChildren = "children___parent___children",
  ChildrenParentChildrenChildren = "children___parent___children___children",
  ChildrenParentChildrenId = "children___parent___children___id",
  ChildrenParentId = "children___parent___id",
  ChildrenParentInternalContent = "children___parent___internal___content",
  ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
  ChildrenParentInternalDescription = "children___parent___internal___description",
  ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
  ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
  ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
  ChildrenParentInternalOwner = "children___parent___internal___owner",
  ChildrenParentInternalType = "children___parent___internal___type",
  ChildrenParentParentChildren = "children___parent___parent___children",
  ChildrenParentParentId = "children___parent___parent___id",
  Host = "host",
  Id = "id",
  InternalContent = "internal___content",
  InternalContentDigest = "internal___contentDigest",
  InternalDescription = "internal___description",
  InternalFieldOwners = "internal___fieldOwners",
  InternalIgnoreType = "internal___ignoreType",
  InternalMediaType = "internal___mediaType",
  InternalOwner = "internal___owner",
  InternalType = "internal___type",
  ParentChildren = "parent___children",
  ParentChildrenChildren = "parent___children___children",
  ParentChildrenChildrenChildren = "parent___children___children___children",
  ParentChildrenChildrenId = "parent___children___children___id",
  ParentChildrenId = "parent___children___id",
  ParentChildrenInternalContent = "parent___children___internal___content",
  ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
  ParentChildrenInternalDescription = "parent___children___internal___description",
  ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
  ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
  ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
  ParentChildrenInternalOwner = "parent___children___internal___owner",
  ParentChildrenInternalType = "parent___children___internal___type",
  ParentChildrenParentChildren = "parent___children___parent___children",
  ParentChildrenParentId = "parent___children___parent___id",
  ParentId = "parent___id",
  ParentInternalContent = "parent___internal___content",
  ParentInternalContentDigest = "parent___internal___contentDigest",
  ParentInternalDescription = "parent___internal___description",
  ParentInternalFieldOwners = "parent___internal___fieldOwners",
  ParentInternalIgnoreType = "parent___internal___ignoreType",
  ParentInternalMediaType = "parent___internal___mediaType",
  ParentInternalOwner = "parent___internal___owner",
  ParentInternalType = "parent___internal___type",
  ParentParentChildren = "parent___parent___children",
  ParentParentChildrenChildren = "parent___parent___children___children",
  ParentParentChildrenId = "parent___parent___children___id",
  ParentParentId = "parent___parent___id",
  ParentParentInternalContent = "parent___parent___internal___content",
  ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
  ParentParentInternalDescription = "parent___parent___internal___description",
  ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
  ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
  ParentParentInternalMediaType = "parent___parent___internal___mediaType",
  ParentParentInternalOwner = "parent___parent___internal___owner",
  ParentParentInternalType = "parent___parent___internal___type",
  ParentParentParentChildren = "parent___parent___parent___children",
  ParentParentParentId = "parent___parent___parent___id",
  PathPrefix = "pathPrefix",
  Polyfill = "polyfill",
  Port = "port",
  SiteMetadataAuthor = "siteMetadata___author",
  SiteMetadataDescription = "siteMetadata___description",
  SiteMetadataTitle = "siteMetadata___title",
}

export type SiteFilterInput = {
  buildTime?: Maybe<DateQueryOperatorInput>
  children?: Maybe<NodeFilterListInput>
  host?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  internal?: Maybe<InternalFilterInput>
  parent?: Maybe<NodeFilterInput>
  pathPrefix?: Maybe<StringQueryOperatorInput>
  polyfill?: Maybe<BooleanQueryOperatorInput>
  port?: Maybe<IntQueryOperatorInput>
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>
}

export type SiteGroupConnection = {
  __typename?: "SiteGroupConnection"
  edges: Array<SiteEdge>
  field: Scalars["String"]
  fieldValue?: Maybe<Scalars["String"]>
  nodes: Array<Site>
  pageInfo: PageInfo
  totalCount: Scalars["Int"]
}

export type SitePage = Node & {
  __typename?: "SitePage"
  children: Array<Node>
  component?: Maybe<Scalars["String"]>
  componentChunkName?: Maybe<Scalars["String"]>
  componentPath?: Maybe<Scalars["String"]>
  id: Scalars["ID"]
  internal: Internal
  internalComponentName?: Maybe<Scalars["String"]>
  isCreatedByStatefulCreatePages?: Maybe<Scalars["Boolean"]>
  jsonName?: Maybe<Scalars["String"]>
  parent?: Maybe<Node>
  path?: Maybe<Scalars["String"]>
  pluginCreator?: Maybe<SitePlugin>
  pluginCreatorId?: Maybe<Scalars["String"]>
}

export type SitePageConnection = {
  __typename?: "SitePageConnection"
  distinct: Array<Scalars["String"]>
  edges: Array<SitePageEdge>
  group: Array<SitePageGroupConnection>
  nodes: Array<SitePage>
  pageInfo: PageInfo
  totalCount: Scalars["Int"]
}

export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum
}

export type SitePageConnectionGroupArgs = {
  field: SitePageFieldsEnum
  limit?: Maybe<Scalars["Int"]>
  skip?: Maybe<Scalars["Int"]>
}

export type SitePageEdge = {
  __typename?: "SitePageEdge"
  next?: Maybe<SitePage>
  node: SitePage
  previous?: Maybe<SitePage>
}

export enum SitePageFieldsEnum {
  Children = "children",
  ChildrenChildren = "children___children",
  ChildrenChildrenChildren = "children___children___children",
  ChildrenChildrenChildrenChildren = "children___children___children___children",
  ChildrenChildrenChildrenId = "children___children___children___id",
  ChildrenChildrenId = "children___children___id",
  ChildrenChildrenInternalContent = "children___children___internal___content",
  ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
  ChildrenChildrenInternalDescription = "children___children___internal___description",
  ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
  ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
  ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
  ChildrenChildrenInternalOwner = "children___children___internal___owner",
  ChildrenChildrenInternalType = "children___children___internal___type",
  ChildrenChildrenParentChildren = "children___children___parent___children",
  ChildrenChildrenParentId = "children___children___parent___id",
  ChildrenId = "children___id",
  ChildrenInternalContent = "children___internal___content",
  ChildrenInternalContentDigest = "children___internal___contentDigest",
  ChildrenInternalDescription = "children___internal___description",
  ChildrenInternalFieldOwners = "children___internal___fieldOwners",
  ChildrenInternalIgnoreType = "children___internal___ignoreType",
  ChildrenInternalMediaType = "children___internal___mediaType",
  ChildrenInternalOwner = "children___internal___owner",
  ChildrenInternalType = "children___internal___type",
  ChildrenParentChildren = "children___parent___children",
  ChildrenParentChildrenChildren = "children___parent___children___children",
  ChildrenParentChildrenId = "children___parent___children___id",
  ChildrenParentId = "children___parent___id",
  ChildrenParentInternalContent = "children___parent___internal___content",
  ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
  ChildrenParentInternalDescription = "children___parent___internal___description",
  ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
  ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
  ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
  ChildrenParentInternalOwner = "children___parent___internal___owner",
  ChildrenParentInternalType = "children___parent___internal___type",
  ChildrenParentParentChildren = "children___parent___parent___children",
  ChildrenParentParentId = "children___parent___parent___id",
  Component = "component",
  ComponentChunkName = "componentChunkName",
  ComponentPath = "componentPath",
  Id = "id",
  InternalComponentName = "internalComponentName",
  InternalContent = "internal___content",
  InternalContentDigest = "internal___contentDigest",
  InternalDescription = "internal___description",
  InternalFieldOwners = "internal___fieldOwners",
  InternalIgnoreType = "internal___ignoreType",
  InternalMediaType = "internal___mediaType",
  InternalOwner = "internal___owner",
  InternalType = "internal___type",
  IsCreatedByStatefulCreatePages = "isCreatedByStatefulCreatePages",
  JsonName = "jsonName",
  ParentChildren = "parent___children",
  ParentChildrenChildren = "parent___children___children",
  ParentChildrenChildrenChildren = "parent___children___children___children",
  ParentChildrenChildrenId = "parent___children___children___id",
  ParentChildrenId = "parent___children___id",
  ParentChildrenInternalContent = "parent___children___internal___content",
  ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
  ParentChildrenInternalDescription = "parent___children___internal___description",
  ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
  ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
  ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
  ParentChildrenInternalOwner = "parent___children___internal___owner",
  ParentChildrenInternalType = "parent___children___internal___type",
  ParentChildrenParentChildren = "parent___children___parent___children",
  ParentChildrenParentId = "parent___children___parent___id",
  ParentId = "parent___id",
  ParentInternalContent = "parent___internal___content",
  ParentInternalContentDigest = "parent___internal___contentDigest",
  ParentInternalDescription = "parent___internal___description",
  ParentInternalFieldOwners = "parent___internal___fieldOwners",
  ParentInternalIgnoreType = "parent___internal___ignoreType",
  ParentInternalMediaType = "parent___internal___mediaType",
  ParentInternalOwner = "parent___internal___owner",
  ParentInternalType = "parent___internal___type",
  ParentParentChildren = "parent___parent___children",
  ParentParentChildrenChildren = "parent___parent___children___children",
  ParentParentChildrenId = "parent___parent___children___id",
  ParentParentId = "parent___parent___id",
  ParentParentInternalContent = "parent___parent___internal___content",
  ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
  ParentParentInternalDescription = "parent___parent___internal___description",
  ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
  ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
  ParentParentInternalMediaType = "parent___parent___internal___mediaType",
  ParentParentInternalOwner = "parent___parent___internal___owner",
  ParentParentInternalType = "parent___parent___internal___type",
  ParentParentParentChildren = "parent___parent___parent___children",
  ParentParentParentId = "parent___parent___parent___id",
  Path = "path",
  PluginCreatorId = "pluginCreatorId",
  PluginCreatorChildren = "pluginCreator___children",
  PluginCreatorChildrenChildren = "pluginCreator___children___children",
  PluginCreatorChildrenChildrenChildren = "pluginCreator___children___children___children",
  PluginCreatorChildrenChildrenId = "pluginCreator___children___children___id",
  PluginCreatorChildrenId = "pluginCreator___children___id",
  PluginCreatorChildrenInternalContent = "pluginCreator___children___internal___content",
  PluginCreatorChildrenInternalContentDigest = "pluginCreator___children___internal___contentDigest",
  PluginCreatorChildrenInternalDescription = "pluginCreator___children___internal___description",
  PluginCreatorChildrenInternalFieldOwners = "pluginCreator___children___internal___fieldOwners",
  PluginCreatorChildrenInternalIgnoreType = "pluginCreator___children___internal___ignoreType",
  PluginCreatorChildrenInternalMediaType = "pluginCreator___children___internal___mediaType",
  PluginCreatorChildrenInternalOwner = "pluginCreator___children___internal___owner",
  PluginCreatorChildrenInternalType = "pluginCreator___children___internal___type",
  PluginCreatorChildrenParentChildren = "pluginCreator___children___parent___children",
  PluginCreatorChildrenParentId = "pluginCreator___children___parent___id",
  PluginCreatorId = "pluginCreator___id",
  PluginCreatorInternalContent = "pluginCreator___internal___content",
  PluginCreatorInternalContentDigest = "pluginCreator___internal___contentDigest",
  PluginCreatorInternalDescription = "pluginCreator___internal___description",
  PluginCreatorInternalFieldOwners = "pluginCreator___internal___fieldOwners",
  PluginCreatorInternalIgnoreType = "pluginCreator___internal___ignoreType",
  PluginCreatorInternalMediaType = "pluginCreator___internal___mediaType",
  PluginCreatorInternalOwner = "pluginCreator___internal___owner",
  PluginCreatorInternalType = "pluginCreator___internal___type",
  PluginCreatorName = "pluginCreator___name",
  PluginCreatorNodeApIs = "pluginCreator___nodeAPIs",
  PluginCreatorPackageJsonAuthor = "pluginCreator___packageJson___author",
  PluginCreatorPackageJsonDependencies = "pluginCreator___packageJson___dependencies",
  PluginCreatorPackageJsonDependenciesName = "pluginCreator___packageJson___dependencies___name",
  PluginCreatorPackageJsonDependenciesVersion = "pluginCreator___packageJson___dependencies___version",
  PluginCreatorPackageJsonDescription = "pluginCreator___packageJson___description",
  PluginCreatorPackageJsonDevDependencies = "pluginCreator___packageJson___devDependencies",
  PluginCreatorPackageJsonDevDependenciesName = "pluginCreator___packageJson___devDependencies___name",
  PluginCreatorPackageJsonDevDependenciesVersion = "pluginCreator___packageJson___devDependencies___version",
  PluginCreatorPackageJsonKeywords = "pluginCreator___packageJson___keywords",
  PluginCreatorPackageJsonLicense = "pluginCreator___packageJson___license",
  PluginCreatorPackageJsonMain = "pluginCreator___packageJson___main",
  PluginCreatorPackageJsonName = "pluginCreator___packageJson___name",
  PluginCreatorPackageJsonPeerDependencies = "pluginCreator___packageJson___peerDependencies",
  PluginCreatorPackageJsonPeerDependenciesName = "pluginCreator___packageJson___peerDependencies___name",
  PluginCreatorPackageJsonPeerDependenciesVersion = "pluginCreator___packageJson___peerDependencies___version",
  PluginCreatorPackageJsonVersion = "pluginCreator___packageJson___version",
  PluginCreatorParentChildren = "pluginCreator___parent___children",
  PluginCreatorParentChildrenChildren = "pluginCreator___parent___children___children",
  PluginCreatorParentChildrenId = "pluginCreator___parent___children___id",
  PluginCreatorParentId = "pluginCreator___parent___id",
  PluginCreatorParentInternalContent = "pluginCreator___parent___internal___content",
  PluginCreatorParentInternalContentDigest = "pluginCreator___parent___internal___contentDigest",
  PluginCreatorParentInternalDescription = "pluginCreator___parent___internal___description",
  PluginCreatorParentInternalFieldOwners = "pluginCreator___parent___internal___fieldOwners",
  PluginCreatorParentInternalIgnoreType = "pluginCreator___parent___internal___ignoreType",
  PluginCreatorParentInternalMediaType = "pluginCreator___parent___internal___mediaType",
  PluginCreatorParentInternalOwner = "pluginCreator___parent___internal___owner",
  PluginCreatorParentInternalType = "pluginCreator___parent___internal___type",
  PluginCreatorParentParentChildren = "pluginCreator___parent___parent___children",
  PluginCreatorParentParentId = "pluginCreator___parent___parent___id",
  PluginCreatorPluginFilepath = "pluginCreator___pluginFilepath",
  PluginCreatorPluginOptionsBackgroundColor = "pluginCreator___pluginOptions___background_color",
  PluginCreatorPluginOptionsDisplay = "pluginCreator___pluginOptions___display",
  PluginCreatorPluginOptionsIcon = "pluginCreator___pluginOptions___icon",
  PluginCreatorPluginOptionsIgnore = "pluginCreator___pluginOptions___ignore",
  PluginCreatorPluginOptionsName = "pluginCreator___pluginOptions___name",
  PluginCreatorPluginOptionsPath = "pluginCreator___pluginOptions___path",
  PluginCreatorPluginOptionsPathCheck = "pluginCreator___pluginOptions___pathCheck",
  PluginCreatorPluginOptionsShortName = "pluginCreator___pluginOptions___short_name",
  PluginCreatorPluginOptionsStartUrl = "pluginCreator___pluginOptions___start_url",
  PluginCreatorPluginOptionsThemeColor = "pluginCreator___pluginOptions___theme_color",
  PluginCreatorResolve = "pluginCreator___resolve",
  PluginCreatorSsrApIs = "pluginCreator___ssrAPIs",
  PluginCreatorVersion = "pluginCreator___version",
}

export type SitePageFilterInput = {
  children?: Maybe<NodeFilterListInput>
  component?: Maybe<StringQueryOperatorInput>
  componentChunkName?: Maybe<StringQueryOperatorInput>
  componentPath?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  internal?: Maybe<InternalFilterInput>
  internalComponentName?: Maybe<StringQueryOperatorInput>
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>
  jsonName?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  path?: Maybe<StringQueryOperatorInput>
  pluginCreator?: Maybe<SitePluginFilterInput>
  pluginCreatorId?: Maybe<StringQueryOperatorInput>
}

export type SitePageGroupConnection = {
  __typename?: "SitePageGroupConnection"
  edges: Array<SitePageEdge>
  field: Scalars["String"]
  fieldValue?: Maybe<Scalars["String"]>
  nodes: Array<SitePage>
  pageInfo: PageInfo
  totalCount: Scalars["Int"]
}

export type SitePageSortInput = {
  fields?: Maybe<Array<Maybe<SitePageFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type SitePlugin = Node & {
  __typename?: "SitePlugin"
  children: Array<Node>
  id: Scalars["ID"]
  internal: Internal
  name?: Maybe<Scalars["String"]>
  nodeAPIs?: Maybe<Array<Maybe<Scalars["String"]>>>
  packageJson?: Maybe<SitePluginPackageJson>
  parent?: Maybe<Node>
  pluginFilepath?: Maybe<Scalars["String"]>
  pluginOptions?: Maybe<SitePluginPluginOptions>
  resolve?: Maybe<Scalars["String"]>
  ssrAPIs?: Maybe<Array<Maybe<Scalars["String"]>>>
  version?: Maybe<Scalars["String"]>
}

export type SitePluginConnection = {
  __typename?: "SitePluginConnection"
  distinct: Array<Scalars["String"]>
  edges: Array<SitePluginEdge>
  group: Array<SitePluginGroupConnection>
  nodes: Array<SitePlugin>
  pageInfo: PageInfo
  totalCount: Scalars["Int"]
}

export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum
}

export type SitePluginConnectionGroupArgs = {
  field: SitePluginFieldsEnum
  limit?: Maybe<Scalars["Int"]>
  skip?: Maybe<Scalars["Int"]>
}

export type SitePluginEdge = {
  __typename?: "SitePluginEdge"
  next?: Maybe<SitePlugin>
  node: SitePlugin
  previous?: Maybe<SitePlugin>
}

export enum SitePluginFieldsEnum {
  Children = "children",
  ChildrenChildren = "children___children",
  ChildrenChildrenChildren = "children___children___children",
  ChildrenChildrenChildrenChildren = "children___children___children___children",
  ChildrenChildrenChildrenId = "children___children___children___id",
  ChildrenChildrenId = "children___children___id",
  ChildrenChildrenInternalContent = "children___children___internal___content",
  ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
  ChildrenChildrenInternalDescription = "children___children___internal___description",
  ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
  ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
  ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
  ChildrenChildrenInternalOwner = "children___children___internal___owner",
  ChildrenChildrenInternalType = "children___children___internal___type",
  ChildrenChildrenParentChildren = "children___children___parent___children",
  ChildrenChildrenParentId = "children___children___parent___id",
  ChildrenId = "children___id",
  ChildrenInternalContent = "children___internal___content",
  ChildrenInternalContentDigest = "children___internal___contentDigest",
  ChildrenInternalDescription = "children___internal___description",
  ChildrenInternalFieldOwners = "children___internal___fieldOwners",
  ChildrenInternalIgnoreType = "children___internal___ignoreType",
  ChildrenInternalMediaType = "children___internal___mediaType",
  ChildrenInternalOwner = "children___internal___owner",
  ChildrenInternalType = "children___internal___type",
  ChildrenParentChildren = "children___parent___children",
  ChildrenParentChildrenChildren = "children___parent___children___children",
  ChildrenParentChildrenId = "children___parent___children___id",
  ChildrenParentId = "children___parent___id",
  ChildrenParentInternalContent = "children___parent___internal___content",
  ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
  ChildrenParentInternalDescription = "children___parent___internal___description",
  ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
  ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
  ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
  ChildrenParentInternalOwner = "children___parent___internal___owner",
  ChildrenParentInternalType = "children___parent___internal___type",
  ChildrenParentParentChildren = "children___parent___parent___children",
  ChildrenParentParentId = "children___parent___parent___id",
  Id = "id",
  InternalContent = "internal___content",
  InternalContentDigest = "internal___contentDigest",
  InternalDescription = "internal___description",
  InternalFieldOwners = "internal___fieldOwners",
  InternalIgnoreType = "internal___ignoreType",
  InternalMediaType = "internal___mediaType",
  InternalOwner = "internal___owner",
  InternalType = "internal___type",
  Name = "name",
  NodeApIs = "nodeAPIs",
  PackageJsonAuthor = "packageJson___author",
  PackageJsonDependencies = "packageJson___dependencies",
  PackageJsonDependenciesName = "packageJson___dependencies___name",
  PackageJsonDependenciesVersion = "packageJson___dependencies___version",
  PackageJsonDescription = "packageJson___description",
  PackageJsonDevDependencies = "packageJson___devDependencies",
  PackageJsonDevDependenciesName = "packageJson___devDependencies___name",
  PackageJsonDevDependenciesVersion = "packageJson___devDependencies___version",
  PackageJsonKeywords = "packageJson___keywords",
  PackageJsonLicense = "packageJson___license",
  PackageJsonMain = "packageJson___main",
  PackageJsonName = "packageJson___name",
  PackageJsonPeerDependencies = "packageJson___peerDependencies",
  PackageJsonPeerDependenciesName = "packageJson___peerDependencies___name",
  PackageJsonPeerDependenciesVersion = "packageJson___peerDependencies___version",
  PackageJsonVersion = "packageJson___version",
  ParentChildren = "parent___children",
  ParentChildrenChildren = "parent___children___children",
  ParentChildrenChildrenChildren = "parent___children___children___children",
  ParentChildrenChildrenId = "parent___children___children___id",
  ParentChildrenId = "parent___children___id",
  ParentChildrenInternalContent = "parent___children___internal___content",
  ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
  ParentChildrenInternalDescription = "parent___children___internal___description",
  ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
  ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
  ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
  ParentChildrenInternalOwner = "parent___children___internal___owner",
  ParentChildrenInternalType = "parent___children___internal___type",
  ParentChildrenParentChildren = "parent___children___parent___children",
  ParentChildrenParentId = "parent___children___parent___id",
  ParentId = "parent___id",
  ParentInternalContent = "parent___internal___content",
  ParentInternalContentDigest = "parent___internal___contentDigest",
  ParentInternalDescription = "parent___internal___description",
  ParentInternalFieldOwners = "parent___internal___fieldOwners",
  ParentInternalIgnoreType = "parent___internal___ignoreType",
  ParentInternalMediaType = "parent___internal___mediaType",
  ParentInternalOwner = "parent___internal___owner",
  ParentInternalType = "parent___internal___type",
  ParentParentChildren = "parent___parent___children",
  ParentParentChildrenChildren = "parent___parent___children___children",
  ParentParentChildrenId = "parent___parent___children___id",
  ParentParentId = "parent___parent___id",
  ParentParentInternalContent = "parent___parent___internal___content",
  ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
  ParentParentInternalDescription = "parent___parent___internal___description",
  ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
  ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
  ParentParentInternalMediaType = "parent___parent___internal___mediaType",
  ParentParentInternalOwner = "parent___parent___internal___owner",
  ParentParentInternalType = "parent___parent___internal___type",
  ParentParentParentChildren = "parent___parent___parent___children",
  ParentParentParentId = "parent___parent___parent___id",
  PluginFilepath = "pluginFilepath",
  PluginOptionsBackgroundColor = "pluginOptions___background_color",
  PluginOptionsDisplay = "pluginOptions___display",
  PluginOptionsIcon = "pluginOptions___icon",
  PluginOptionsIgnore = "pluginOptions___ignore",
  PluginOptionsName = "pluginOptions___name",
  PluginOptionsPath = "pluginOptions___path",
  PluginOptionsPathCheck = "pluginOptions___pathCheck",
  PluginOptionsShortName = "pluginOptions___short_name",
  PluginOptionsStartUrl = "pluginOptions___start_url",
  PluginOptionsThemeColor = "pluginOptions___theme_color",
  Resolve = "resolve",
  SsrApIs = "ssrAPIs",
  Version = "version",
}

export type SitePluginFilterInput = {
  children?: Maybe<NodeFilterListInput>
  id?: Maybe<StringQueryOperatorInput>
  internal?: Maybe<InternalFilterInput>
  name?: Maybe<StringQueryOperatorInput>
  nodeAPIs?: Maybe<StringQueryOperatorInput>
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>
  parent?: Maybe<NodeFilterInput>
  pluginFilepath?: Maybe<StringQueryOperatorInput>
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>
  resolve?: Maybe<StringQueryOperatorInput>
  ssrAPIs?: Maybe<StringQueryOperatorInput>
  version?: Maybe<StringQueryOperatorInput>
}

export type SitePluginGroupConnection = {
  __typename?: "SitePluginGroupConnection"
  edges: Array<SitePluginEdge>
  field: Scalars["String"]
  fieldValue?: Maybe<Scalars["String"]>
  nodes: Array<SitePlugin>
  pageInfo: PageInfo
  totalCount: Scalars["Int"]
}

export type SitePluginPackageJson = {
  __typename?: "SitePluginPackageJson"
  author?: Maybe<Scalars["String"]>
  dependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDependencies>>>
  description?: Maybe<Scalars["String"]>
  devDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDevDependencies>>>
  keywords?: Maybe<Array<Maybe<Scalars["String"]>>>
  license?: Maybe<Scalars["String"]>
  main?: Maybe<Scalars["String"]>
  name?: Maybe<Scalars["String"]>
  peerDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonPeerDependencies>>>
  version?: Maybe<Scalars["String"]>
}

export type SitePluginPackageJsonDependencies = {
  __typename?: "SitePluginPackageJsonDependencies"
  name?: Maybe<Scalars["String"]>
  version?: Maybe<Scalars["String"]>
}

export type SitePluginPackageJsonDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>
  version?: Maybe<StringQueryOperatorInput>
}

export type SitePluginPackageJsonDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDependenciesFilterInput>
}

export type SitePluginPackageJsonDevDependencies = {
  __typename?: "SitePluginPackageJsonDevDependencies"
  name?: Maybe<Scalars["String"]>
  version?: Maybe<Scalars["String"]>
}

export type SitePluginPackageJsonDevDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>
  version?: Maybe<StringQueryOperatorInput>
}

export type SitePluginPackageJsonDevDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>
}

export type SitePluginPackageJsonFilterInput = {
  author?: Maybe<StringQueryOperatorInput>
  dependencies?: Maybe<SitePluginPackageJsonDependenciesFilterListInput>
  description?: Maybe<StringQueryOperatorInput>
  devDependencies?: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>
  keywords?: Maybe<StringQueryOperatorInput>
  license?: Maybe<StringQueryOperatorInput>
  main?: Maybe<StringQueryOperatorInput>
  name?: Maybe<StringQueryOperatorInput>
  peerDependencies?: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>
  version?: Maybe<StringQueryOperatorInput>
}

export type SitePluginPackageJsonPeerDependencies = {
  __typename?: "SitePluginPackageJsonPeerDependencies"
  name?: Maybe<Scalars["String"]>
  version?: Maybe<Scalars["String"]>
}

export type SitePluginPackageJsonPeerDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>
  version?: Maybe<StringQueryOperatorInput>
}

export type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>
}

export type SitePluginPluginOptions = {
  __typename?: "SitePluginPluginOptions"
  background_color?: Maybe<Scalars["String"]>
  display?: Maybe<Scalars["String"]>
  icon?: Maybe<Scalars["String"]>
  ignore?: Maybe<Array<Maybe<Scalars["String"]>>>
  name?: Maybe<Scalars["String"]>
  path?: Maybe<Scalars["String"]>
  pathCheck?: Maybe<Scalars["Boolean"]>
  short_name?: Maybe<Scalars["String"]>
  start_url?: Maybe<Scalars["String"]>
  theme_color?: Maybe<Scalars["String"]>
}

export type SitePluginPluginOptionsFilterInput = {
  background_color?: Maybe<StringQueryOperatorInput>
  display?: Maybe<StringQueryOperatorInput>
  icon?: Maybe<StringQueryOperatorInput>
  ignore?: Maybe<StringQueryOperatorInput>
  name?: Maybe<StringQueryOperatorInput>
  path?: Maybe<StringQueryOperatorInput>
  pathCheck?: Maybe<BooleanQueryOperatorInput>
  short_name?: Maybe<StringQueryOperatorInput>
  start_url?: Maybe<StringQueryOperatorInput>
  theme_color?: Maybe<StringQueryOperatorInput>
}

export type SitePluginSortInput = {
  fields?: Maybe<Array<Maybe<SitePluginFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type SiteSiteMetadata = {
  __typename?: "SiteSiteMetadata"
  author?: Maybe<Scalars["String"]>
  description?: Maybe<Scalars["String"]>
  title?: Maybe<Scalars["String"]>
}

export type SiteSiteMetadataFilterInput = {
  author?: Maybe<StringQueryOperatorInput>
  description?: Maybe<StringQueryOperatorInput>
  title?: Maybe<StringQueryOperatorInput>
}

export type SiteSortInput = {
  fields?: Maybe<Array<Maybe<SiteFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export enum SortOrderEnum {
  Asc = "ASC",
  Desc = "DESC",
}

export type StringQueryOperatorInput = {
  eq?: Maybe<Scalars["String"]>
  glob?: Maybe<Scalars["String"]>
  in?: Maybe<Array<Maybe<Scalars["String"]>>>
  ne?: Maybe<Scalars["String"]>
  nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  regex?: Maybe<Scalars["String"]>
}
export type Unnamed_1_QueryVariables = {}

export type Unnamed_1_Query = { __typename?: "Query" } & {
  placeholderImage: Maybe<
    { __typename?: "File" } & {
      childImageSharp: Maybe<
        { __typename?: "ImageSharp" } & {
          fluid: Maybe<
            { __typename?: "ImageSharpFluid" } & GatsbyImageSharpFluidFragment
          >
        }
      >
    }
  >
}

export type SiteTitleQueryQueryVariables = {}

export type SiteTitleQueryQuery = { __typename?: "Query" } & {
  site: Maybe<
    { __typename?: "Site" } & {
      siteMetadata: Maybe<
        { __typename?: "SiteSiteMetadata" } & Pick<SiteSiteMetadata, "title">
      >
    }
  >
}

export type Unnamed_2_QueryVariables = {}

export type Unnamed_2_Query = { __typename?: "Query" } & {
  site: Maybe<
    { __typename?: "Site" } & {
      siteMetadata: Maybe<
        { __typename?: "SiteSiteMetadata" } & Pick<
          SiteSiteMetadata,
          "title" | "description" | "author"
        >
      >
    }
  >
}

export type ProjectsQueryVariables = {}

export type ProjectsQuery = { __typename?: "Query" } & {
  projects: Maybe<
    { __typename?: "ProjectJsonConnection" } & {
      edges: Array<
        { __typename?: "ProjectJsonEdge" } & {
          node: { __typename?: "ProjectJson" } & Pick<
            ProjectJson,
            "title" | "desc" | "slug"
          > & {
              image: Maybe<
                { __typename?: "File" } & {
                  childImageSharp: Maybe<
                    { __typename?: "ImageSharp" } & {
                      fluid: Maybe<
                        {
                          __typename?: "ImageSharpFluid"
                        } & GatsbyImageSharpFluidFragment
                      >
                    }
                  >
                }
              >
            }
        }
      >
    }
  >
}

export type GatsbyImageSharpFixedFragment = {
  __typename?: "ImageSharpFixed"
} & Pick<ImageSharpFixed, "base64" | "width" | "height" | "src" | "srcSet">

export type GatsbyImageSharpFixed_TracedSvgFragment = {
  __typename?: "ImageSharpFixed"
} & Pick<ImageSharpFixed, "tracedSVG" | "width" | "height" | "src" | "srcSet">

export type GatsbyImageSharpFixed_WithWebpFragment = {
  __typename?: "ImageSharpFixed"
} & Pick<
  ImageSharpFixed,
  "base64" | "width" | "height" | "src" | "srcSet" | "srcWebp" | "srcSetWebp"
>

export type GatsbyImageSharpFixed_WithWebp_TracedSvgFragment = {
  __typename?: "ImageSharpFixed"
} & Pick<
  ImageSharpFixed,
  "tracedSVG" | "width" | "height" | "src" | "srcSet" | "srcWebp" | "srcSetWebp"
>

export type GatsbyImageSharpFixed_NoBase64Fragment = {
  __typename?: "ImageSharpFixed"
} & Pick<ImageSharpFixed, "width" | "height" | "src" | "srcSet">

export type GatsbyImageSharpFixed_WithWebp_NoBase64Fragment = {
  __typename?: "ImageSharpFixed"
} & Pick<
  ImageSharpFixed,
  "width" | "height" | "src" | "srcSet" | "srcWebp" | "srcSetWebp"
>

export type GatsbyImageSharpFluidFragment = {
  __typename?: "ImageSharpFluid"
} & Pick<ImageSharpFluid, "base64" | "aspectRatio" | "src" | "srcSet" | "sizes">

export type GatsbyImageSharpFluid_TracedSvgFragment = {
  __typename?: "ImageSharpFluid"
} & Pick<
  ImageSharpFluid,
  "tracedSVG" | "aspectRatio" | "src" | "srcSet" | "sizes"
>

export type GatsbyImageSharpFluid_WithWebpFragment = {
  __typename?: "ImageSharpFluid"
} & Pick<
  ImageSharpFluid,
  | "base64"
  | "aspectRatio"
  | "src"
  | "srcSet"
  | "srcWebp"
  | "srcSetWebp"
  | "sizes"
>

export type GatsbyImageSharpFluid_WithWebp_TracedSvgFragment = {
  __typename?: "ImageSharpFluid"
} & Pick<
  ImageSharpFluid,
  | "tracedSVG"
  | "aspectRatio"
  | "src"
  | "srcSet"
  | "srcWebp"
  | "srcSetWebp"
  | "sizes"
>

export type GatsbyImageSharpFluid_NoBase64Fragment = {
  __typename?: "ImageSharpFluid"
} & Pick<ImageSharpFluid, "aspectRatio" | "src" | "srcSet" | "sizes">

export type GatsbyImageSharpFluid_WithWebp_NoBase64Fragment = {
  __typename?: "ImageSharpFluid"
} & Pick<
  ImageSharpFluid,
  "aspectRatio" | "src" | "srcSet" | "srcWebp" | "srcSetWebp" | "sizes"
>

export type GatsbyImageSharpResolutionsFragment = {
  __typename?: "ImageSharpResolutions"
} & Pick<
  ImageSharpResolutions,
  "base64" | "width" | "height" | "src" | "srcSet"
>

export type GatsbyImageSharpResolutions_TracedSvgFragment = {
  __typename?: "ImageSharpResolutions"
} & Pick<
  ImageSharpResolutions,
  "tracedSVG" | "width" | "height" | "src" | "srcSet"
>

export type GatsbyImageSharpResolutions_WithWebpFragment = {
  __typename?: "ImageSharpResolutions"
} & Pick<
  ImageSharpResolutions,
  "base64" | "width" | "height" | "src" | "srcSet" | "srcWebp" | "srcSetWebp"
>

export type GatsbyImageSharpResolutions_WithWebp_TracedSvgFragment = {
  __typename?: "ImageSharpResolutions"
} & Pick<
  ImageSharpResolutions,
  "tracedSVG" | "width" | "height" | "src" | "srcSet" | "srcWebp" | "srcSetWebp"
>

export type GatsbyImageSharpResolutions_NoBase64Fragment = {
  __typename?: "ImageSharpResolutions"
} & Pick<ImageSharpResolutions, "width" | "height" | "src" | "srcSet">

export type GatsbyImageSharpResolutions_WithWebp_NoBase64Fragment = {
  __typename?: "ImageSharpResolutions"
} & Pick<
  ImageSharpResolutions,
  "width" | "height" | "src" | "srcSet" | "srcWebp" | "srcSetWebp"
>

export type GatsbyImageSharpSizesFragment = {
  __typename?: "ImageSharpSizes"
} & Pick<ImageSharpSizes, "base64" | "aspectRatio" | "src" | "srcSet" | "sizes">

export type GatsbyImageSharpSizes_TracedSvgFragment = {
  __typename?: "ImageSharpSizes"
} & Pick<
  ImageSharpSizes,
  "tracedSVG" | "aspectRatio" | "src" | "srcSet" | "sizes"
>

export type GatsbyImageSharpSizes_WithWebpFragment = {
  __typename?: "ImageSharpSizes"
} & Pick<
  ImageSharpSizes,
  | "base64"
  | "aspectRatio"
  | "src"
  | "srcSet"
  | "srcWebp"
  | "srcSetWebp"
  | "sizes"
>

export type GatsbyImageSharpSizes_WithWebp_TracedSvgFragment = {
  __typename?: "ImageSharpSizes"
} & Pick<
  ImageSharpSizes,
  | "tracedSVG"
  | "aspectRatio"
  | "src"
  | "srcSet"
  | "srcWebp"
  | "srcSetWebp"
  | "sizes"
>

export type GatsbyImageSharpSizes_NoBase64Fragment = {
  __typename?: "ImageSharpSizes"
} & Pick<ImageSharpSizes, "aspectRatio" | "src" | "srcSet" | "sizes">

export type GatsbyImageSharpSizes_WithWebp_NoBase64Fragment = {
  __typename?: "ImageSharpSizes"
} & Pick<
  ImageSharpSizes,
  "aspectRatio" | "src" | "srcSet" | "srcWebp" | "srcSetWebp" | "sizes"
>
