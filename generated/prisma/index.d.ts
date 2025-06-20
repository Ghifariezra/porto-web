
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model login
 * 
 */
export type login = $Result.DefaultSelection<Prisma.$loginPayload>
/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>
/**
 * Model blogs
 * 
 */
export type blogs = $Result.DefaultSelection<Prisma.$blogsPayload>
/**
 * Model project_icons
 * 
 */
export type project_icons = $Result.DefaultSelection<Prisma.$project_iconsPayload>
/**
 * Model project_linkedin_partners
 * 
 */
export type project_linkedin_partners = $Result.DefaultSelection<Prisma.$project_linkedin_partnersPayload>
/**
 * Model project_linkedin_teams
 * 
 */
export type project_linkedin_teams = $Result.DefaultSelection<Prisma.$project_linkedin_teamsPayload>
/**
 * Model project_partners
 * 
 */
export type project_partners = $Result.DefaultSelection<Prisma.$project_partnersPayload>
/**
 * Model project_teams
 * 
 */
export type project_teams = $Result.DefaultSelection<Prisma.$project_teamsPayload>
/**
 * Model projects
 * 
 */
export type projects = $Result.DefaultSelection<Prisma.$projectsPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Logins
 * const logins = await prisma.login.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Logins
   * const logins = await prisma.login.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.login`: Exposes CRUD operations for the **login** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Logins
    * const logins = await prisma.login.findMany()
    * ```
    */
  get login(): Prisma.loginDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.blogs`: Exposes CRUD operations for the **blogs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Blogs
    * const blogs = await prisma.blogs.findMany()
    * ```
    */
  get blogs(): Prisma.blogsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.project_icons`: Exposes CRUD operations for the **project_icons** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Project_icons
    * const project_icons = await prisma.project_icons.findMany()
    * ```
    */
  get project_icons(): Prisma.project_iconsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.project_linkedin_partners`: Exposes CRUD operations for the **project_linkedin_partners** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Project_linkedin_partners
    * const project_linkedin_partners = await prisma.project_linkedin_partners.findMany()
    * ```
    */
  get project_linkedin_partners(): Prisma.project_linkedin_partnersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.project_linkedin_teams`: Exposes CRUD operations for the **project_linkedin_teams** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Project_linkedin_teams
    * const project_linkedin_teams = await prisma.project_linkedin_teams.findMany()
    * ```
    */
  get project_linkedin_teams(): Prisma.project_linkedin_teamsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.project_partners`: Exposes CRUD operations for the **project_partners** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Project_partners
    * const project_partners = await prisma.project_partners.findMany()
    * ```
    */
  get project_partners(): Prisma.project_partnersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.project_teams`: Exposes CRUD operations for the **project_teams** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Project_teams
    * const project_teams = await prisma.project_teams.findMany()
    * ```
    */
  get project_teams(): Prisma.project_teamsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.projects`: Exposes CRUD operations for the **projects** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projects
    * const projects = await prisma.projects.findMany()
    * ```
    */
  get projects(): Prisma.projectsDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.9.0
   * Query Engine version: 81e4af48011447c3cc503a190e86995b66d2a28e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    login: 'login',
    users: 'users',
    blogs: 'blogs',
    project_icons: 'project_icons',
    project_linkedin_partners: 'project_linkedin_partners',
    project_linkedin_teams: 'project_linkedin_teams',
    project_partners: 'project_partners',
    project_teams: 'project_teams',
    projects: 'projects'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "login" | "users" | "blogs" | "project_icons" | "project_linkedin_partners" | "project_linkedin_teams" | "project_partners" | "project_teams" | "projects"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      login: {
        payload: Prisma.$loginPayload<ExtArgs>
        fields: Prisma.loginFieldRefs
        operations: {
          findUnique: {
            args: Prisma.loginFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$loginPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.loginFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$loginPayload>
          }
          findFirst: {
            args: Prisma.loginFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$loginPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.loginFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$loginPayload>
          }
          findMany: {
            args: Prisma.loginFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$loginPayload>[]
          }
          create: {
            args: Prisma.loginCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$loginPayload>
          }
          createMany: {
            args: Prisma.loginCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.loginCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$loginPayload>[]
          }
          delete: {
            args: Prisma.loginDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$loginPayload>
          }
          update: {
            args: Prisma.loginUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$loginPayload>
          }
          deleteMany: {
            args: Prisma.loginDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.loginUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.loginUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$loginPayload>[]
          }
          upsert: {
            args: Prisma.loginUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$loginPayload>
          }
          aggregate: {
            args: Prisma.LoginAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLogin>
          }
          groupBy: {
            args: Prisma.loginGroupByArgs<ExtArgs>
            result: $Utils.Optional<LoginGroupByOutputType>[]
          }
          count: {
            args: Prisma.loginCountArgs<ExtArgs>
            result: $Utils.Optional<LoginCountAggregateOutputType> | number
          }
        }
      }
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      blogs: {
        payload: Prisma.$blogsPayload<ExtArgs>
        fields: Prisma.blogsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.blogsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blogsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.blogsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blogsPayload>
          }
          findFirst: {
            args: Prisma.blogsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blogsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.blogsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blogsPayload>
          }
          findMany: {
            args: Prisma.blogsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blogsPayload>[]
          }
          create: {
            args: Prisma.blogsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blogsPayload>
          }
          createMany: {
            args: Prisma.blogsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.blogsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blogsPayload>[]
          }
          delete: {
            args: Prisma.blogsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blogsPayload>
          }
          update: {
            args: Prisma.blogsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blogsPayload>
          }
          deleteMany: {
            args: Prisma.blogsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.blogsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.blogsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blogsPayload>[]
          }
          upsert: {
            args: Prisma.blogsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blogsPayload>
          }
          aggregate: {
            args: Prisma.BlogsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBlogs>
          }
          groupBy: {
            args: Prisma.blogsGroupByArgs<ExtArgs>
            result: $Utils.Optional<BlogsGroupByOutputType>[]
          }
          count: {
            args: Prisma.blogsCountArgs<ExtArgs>
            result: $Utils.Optional<BlogsCountAggregateOutputType> | number
          }
        }
      }
      project_icons: {
        payload: Prisma.$project_iconsPayload<ExtArgs>
        fields: Prisma.project_iconsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.project_iconsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$project_iconsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.project_iconsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$project_iconsPayload>
          }
          findFirst: {
            args: Prisma.project_iconsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$project_iconsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.project_iconsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$project_iconsPayload>
          }
          findMany: {
            args: Prisma.project_iconsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$project_iconsPayload>[]
          }
          create: {
            args: Prisma.project_iconsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$project_iconsPayload>
          }
          createMany: {
            args: Prisma.project_iconsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.project_iconsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$project_iconsPayload>[]
          }
          delete: {
            args: Prisma.project_iconsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$project_iconsPayload>
          }
          update: {
            args: Prisma.project_iconsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$project_iconsPayload>
          }
          deleteMany: {
            args: Prisma.project_iconsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.project_iconsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.project_iconsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$project_iconsPayload>[]
          }
          upsert: {
            args: Prisma.project_iconsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$project_iconsPayload>
          }
          aggregate: {
            args: Prisma.Project_iconsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProject_icons>
          }
          groupBy: {
            args: Prisma.project_iconsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Project_iconsGroupByOutputType>[]
          }
          count: {
            args: Prisma.project_iconsCountArgs<ExtArgs>
            result: $Utils.Optional<Project_iconsCountAggregateOutputType> | number
          }
        }
      }
      project_linkedin_partners: {
        payload: Prisma.$project_linkedin_partnersPayload<ExtArgs>
        fields: Prisma.project_linkedin_partnersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.project_linkedin_partnersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$project_linkedin_partnersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.project_linkedin_partnersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$project_linkedin_partnersPayload>
          }
          findFirst: {
            args: Prisma.project_linkedin_partnersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$project_linkedin_partnersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.project_linkedin_partnersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$project_linkedin_partnersPayload>
          }
          findMany: {
            args: Prisma.project_linkedin_partnersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$project_linkedin_partnersPayload>[]
          }
          create: {
            args: Prisma.project_linkedin_partnersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$project_linkedin_partnersPayload>
          }
          createMany: {
            args: Prisma.project_linkedin_partnersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.project_linkedin_partnersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$project_linkedin_partnersPayload>[]
          }
          delete: {
            args: Prisma.project_linkedin_partnersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$project_linkedin_partnersPayload>
          }
          update: {
            args: Prisma.project_linkedin_partnersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$project_linkedin_partnersPayload>
          }
          deleteMany: {
            args: Prisma.project_linkedin_partnersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.project_linkedin_partnersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.project_linkedin_partnersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$project_linkedin_partnersPayload>[]
          }
          upsert: {
            args: Prisma.project_linkedin_partnersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$project_linkedin_partnersPayload>
          }
          aggregate: {
            args: Prisma.Project_linkedin_partnersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProject_linkedin_partners>
          }
          groupBy: {
            args: Prisma.project_linkedin_partnersGroupByArgs<ExtArgs>
            result: $Utils.Optional<Project_linkedin_partnersGroupByOutputType>[]
          }
          count: {
            args: Prisma.project_linkedin_partnersCountArgs<ExtArgs>
            result: $Utils.Optional<Project_linkedin_partnersCountAggregateOutputType> | number
          }
        }
      }
      project_linkedin_teams: {
        payload: Prisma.$project_linkedin_teamsPayload<ExtArgs>
        fields: Prisma.project_linkedin_teamsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.project_linkedin_teamsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$project_linkedin_teamsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.project_linkedin_teamsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$project_linkedin_teamsPayload>
          }
          findFirst: {
            args: Prisma.project_linkedin_teamsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$project_linkedin_teamsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.project_linkedin_teamsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$project_linkedin_teamsPayload>
          }
          findMany: {
            args: Prisma.project_linkedin_teamsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$project_linkedin_teamsPayload>[]
          }
          create: {
            args: Prisma.project_linkedin_teamsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$project_linkedin_teamsPayload>
          }
          createMany: {
            args: Prisma.project_linkedin_teamsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.project_linkedin_teamsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$project_linkedin_teamsPayload>[]
          }
          delete: {
            args: Prisma.project_linkedin_teamsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$project_linkedin_teamsPayload>
          }
          update: {
            args: Prisma.project_linkedin_teamsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$project_linkedin_teamsPayload>
          }
          deleteMany: {
            args: Prisma.project_linkedin_teamsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.project_linkedin_teamsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.project_linkedin_teamsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$project_linkedin_teamsPayload>[]
          }
          upsert: {
            args: Prisma.project_linkedin_teamsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$project_linkedin_teamsPayload>
          }
          aggregate: {
            args: Prisma.Project_linkedin_teamsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProject_linkedin_teams>
          }
          groupBy: {
            args: Prisma.project_linkedin_teamsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Project_linkedin_teamsGroupByOutputType>[]
          }
          count: {
            args: Prisma.project_linkedin_teamsCountArgs<ExtArgs>
            result: $Utils.Optional<Project_linkedin_teamsCountAggregateOutputType> | number
          }
        }
      }
      project_partners: {
        payload: Prisma.$project_partnersPayload<ExtArgs>
        fields: Prisma.project_partnersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.project_partnersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$project_partnersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.project_partnersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$project_partnersPayload>
          }
          findFirst: {
            args: Prisma.project_partnersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$project_partnersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.project_partnersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$project_partnersPayload>
          }
          findMany: {
            args: Prisma.project_partnersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$project_partnersPayload>[]
          }
          create: {
            args: Prisma.project_partnersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$project_partnersPayload>
          }
          createMany: {
            args: Prisma.project_partnersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.project_partnersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$project_partnersPayload>[]
          }
          delete: {
            args: Prisma.project_partnersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$project_partnersPayload>
          }
          update: {
            args: Prisma.project_partnersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$project_partnersPayload>
          }
          deleteMany: {
            args: Prisma.project_partnersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.project_partnersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.project_partnersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$project_partnersPayload>[]
          }
          upsert: {
            args: Prisma.project_partnersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$project_partnersPayload>
          }
          aggregate: {
            args: Prisma.Project_partnersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProject_partners>
          }
          groupBy: {
            args: Prisma.project_partnersGroupByArgs<ExtArgs>
            result: $Utils.Optional<Project_partnersGroupByOutputType>[]
          }
          count: {
            args: Prisma.project_partnersCountArgs<ExtArgs>
            result: $Utils.Optional<Project_partnersCountAggregateOutputType> | number
          }
        }
      }
      project_teams: {
        payload: Prisma.$project_teamsPayload<ExtArgs>
        fields: Prisma.project_teamsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.project_teamsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$project_teamsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.project_teamsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$project_teamsPayload>
          }
          findFirst: {
            args: Prisma.project_teamsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$project_teamsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.project_teamsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$project_teamsPayload>
          }
          findMany: {
            args: Prisma.project_teamsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$project_teamsPayload>[]
          }
          create: {
            args: Prisma.project_teamsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$project_teamsPayload>
          }
          createMany: {
            args: Prisma.project_teamsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.project_teamsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$project_teamsPayload>[]
          }
          delete: {
            args: Prisma.project_teamsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$project_teamsPayload>
          }
          update: {
            args: Prisma.project_teamsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$project_teamsPayload>
          }
          deleteMany: {
            args: Prisma.project_teamsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.project_teamsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.project_teamsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$project_teamsPayload>[]
          }
          upsert: {
            args: Prisma.project_teamsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$project_teamsPayload>
          }
          aggregate: {
            args: Prisma.Project_teamsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProject_teams>
          }
          groupBy: {
            args: Prisma.project_teamsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Project_teamsGroupByOutputType>[]
          }
          count: {
            args: Prisma.project_teamsCountArgs<ExtArgs>
            result: $Utils.Optional<Project_teamsCountAggregateOutputType> | number
          }
        }
      }
      projects: {
        payload: Prisma.$projectsPayload<ExtArgs>
        fields: Prisma.projectsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.projectsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.projectsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectsPayload>
          }
          findFirst: {
            args: Prisma.projectsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.projectsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectsPayload>
          }
          findMany: {
            args: Prisma.projectsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectsPayload>[]
          }
          create: {
            args: Prisma.projectsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectsPayload>
          }
          createMany: {
            args: Prisma.projectsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.projectsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectsPayload>[]
          }
          delete: {
            args: Prisma.projectsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectsPayload>
          }
          update: {
            args: Prisma.projectsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectsPayload>
          }
          deleteMany: {
            args: Prisma.projectsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.projectsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.projectsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectsPayload>[]
          }
          upsert: {
            args: Prisma.projectsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectsPayload>
          }
          aggregate: {
            args: Prisma.ProjectsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProjects>
          }
          groupBy: {
            args: Prisma.projectsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectsGroupByOutputType>[]
          }
          count: {
            args: Prisma.projectsCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    login?: loginOmit
    users?: usersOmit
    blogs?: blogsOmit
    project_icons?: project_iconsOmit
    project_linkedin_partners?: project_linkedin_partnersOmit
    project_linkedin_teams?: project_linkedin_teamsOmit
    project_partners?: project_partnersOmit
    project_teams?: project_teamsOmit
    projects?: projectsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    blogs: number
    login: number
    projects: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    blogs?: boolean | UsersCountOutputTypeCountBlogsArgs
    login?: boolean | UsersCountOutputTypeCountLoginArgs
    projects?: boolean | UsersCountOutputTypeCountProjectsArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountBlogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: blogsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountLoginArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: loginWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountProjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: projectsWhereInput
  }


  /**
   * Count Type ProjectsCountOutputType
   */

  export type ProjectsCountOutputType = {
    project_icons: number
    project_linkedin_partners: number
    project_linkedin_teams: number
    project_partners: number
    project_teams: number
  }

  export type ProjectsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project_icons?: boolean | ProjectsCountOutputTypeCountProject_iconsArgs
    project_linkedin_partners?: boolean | ProjectsCountOutputTypeCountProject_linkedin_partnersArgs
    project_linkedin_teams?: boolean | ProjectsCountOutputTypeCountProject_linkedin_teamsArgs
    project_partners?: boolean | ProjectsCountOutputTypeCountProject_partnersArgs
    project_teams?: boolean | ProjectsCountOutputTypeCountProject_teamsArgs
  }

  // Custom InputTypes
  /**
   * ProjectsCountOutputType without action
   */
  export type ProjectsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectsCountOutputType
     */
    select?: ProjectsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProjectsCountOutputType without action
   */
  export type ProjectsCountOutputTypeCountProject_iconsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: project_iconsWhereInput
  }

  /**
   * ProjectsCountOutputType without action
   */
  export type ProjectsCountOutputTypeCountProject_linkedin_partnersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: project_linkedin_partnersWhereInput
  }

  /**
   * ProjectsCountOutputType without action
   */
  export type ProjectsCountOutputTypeCountProject_linkedin_teamsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: project_linkedin_teamsWhereInput
  }

  /**
   * ProjectsCountOutputType without action
   */
  export type ProjectsCountOutputTypeCountProject_partnersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: project_partnersWhereInput
  }

  /**
   * ProjectsCountOutputType without action
   */
  export type ProjectsCountOutputTypeCountProject_teamsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: project_teamsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model login
   */

  export type AggregateLogin = {
    _count: LoginCountAggregateOutputType | null
    _avg: LoginAvgAggregateOutputType | null
    _sum: LoginSumAggregateOutputType | null
    _min: LoginMinAggregateOutputType | null
    _max: LoginMaxAggregateOutputType | null
  }

  export type LoginAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type LoginSumAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type LoginMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    token: string | null
    created_at: Date | null
    expires_at: Date | null
  }

  export type LoginMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    token: string | null
    created_at: Date | null
    expires_at: Date | null
  }

  export type LoginCountAggregateOutputType = {
    id: number
    user_id: number
    token: number
    created_at: number
    expires_at: number
    _all: number
  }


  export type LoginAvgAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type LoginSumAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type LoginMinAggregateInputType = {
    id?: true
    user_id?: true
    token?: true
    created_at?: true
    expires_at?: true
  }

  export type LoginMaxAggregateInputType = {
    id?: true
    user_id?: true
    token?: true
    created_at?: true
    expires_at?: true
  }

  export type LoginCountAggregateInputType = {
    id?: true
    user_id?: true
    token?: true
    created_at?: true
    expires_at?: true
    _all?: true
  }

  export type LoginAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which login to aggregate.
     */
    where?: loginWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of logins to fetch.
     */
    orderBy?: loginOrderByWithRelationInput | loginOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: loginWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` logins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` logins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned logins
    **/
    _count?: true | LoginCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LoginAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LoginSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LoginMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LoginMaxAggregateInputType
  }

  export type GetLoginAggregateType<T extends LoginAggregateArgs> = {
        [P in keyof T & keyof AggregateLogin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLogin[P]>
      : GetScalarType<T[P], AggregateLogin[P]>
  }




  export type loginGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: loginWhereInput
    orderBy?: loginOrderByWithAggregationInput | loginOrderByWithAggregationInput[]
    by: LoginScalarFieldEnum[] | LoginScalarFieldEnum
    having?: loginScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LoginCountAggregateInputType | true
    _avg?: LoginAvgAggregateInputType
    _sum?: LoginSumAggregateInputType
    _min?: LoginMinAggregateInputType
    _max?: LoginMaxAggregateInputType
  }

  export type LoginGroupByOutputType = {
    id: number
    user_id: number
    token: string
    created_at: Date | null
    expires_at: Date | null
    _count: LoginCountAggregateOutputType | null
    _avg: LoginAvgAggregateOutputType | null
    _sum: LoginSumAggregateOutputType | null
    _min: LoginMinAggregateOutputType | null
    _max: LoginMaxAggregateOutputType | null
  }

  type GetLoginGroupByPayload<T extends loginGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LoginGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LoginGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LoginGroupByOutputType[P]>
            : GetScalarType<T[P], LoginGroupByOutputType[P]>
        }
      >
    >


  export type loginSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    token?: boolean
    created_at?: boolean
    expires_at?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["login"]>

  export type loginSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    token?: boolean
    created_at?: boolean
    expires_at?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["login"]>

  export type loginSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    token?: boolean
    created_at?: boolean
    expires_at?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["login"]>

  export type loginSelectScalar = {
    id?: boolean
    user_id?: boolean
    token?: boolean
    created_at?: boolean
    expires_at?: boolean
  }

  export type loginOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "token" | "created_at" | "expires_at", ExtArgs["result"]["login"]>
  export type loginInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type loginIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type loginIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $loginPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "login"
    objects: {
      users: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number
      token: string
      created_at: Date | null
      expires_at: Date | null
    }, ExtArgs["result"]["login"]>
    composites: {}
  }

  type loginGetPayload<S extends boolean | null | undefined | loginDefaultArgs> = $Result.GetResult<Prisma.$loginPayload, S>

  type loginCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<loginFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LoginCountAggregateInputType | true
    }

  export interface loginDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['login'], meta: { name: 'login' } }
    /**
     * Find zero or one Login that matches the filter.
     * @param {loginFindUniqueArgs} args - Arguments to find a Login
     * @example
     * // Get one Login
     * const login = await prisma.login.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends loginFindUniqueArgs>(args: SelectSubset<T, loginFindUniqueArgs<ExtArgs>>): Prisma__loginClient<$Result.GetResult<Prisma.$loginPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Login that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {loginFindUniqueOrThrowArgs} args - Arguments to find a Login
     * @example
     * // Get one Login
     * const login = await prisma.login.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends loginFindUniqueOrThrowArgs>(args: SelectSubset<T, loginFindUniqueOrThrowArgs<ExtArgs>>): Prisma__loginClient<$Result.GetResult<Prisma.$loginPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Login that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {loginFindFirstArgs} args - Arguments to find a Login
     * @example
     * // Get one Login
     * const login = await prisma.login.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends loginFindFirstArgs>(args?: SelectSubset<T, loginFindFirstArgs<ExtArgs>>): Prisma__loginClient<$Result.GetResult<Prisma.$loginPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Login that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {loginFindFirstOrThrowArgs} args - Arguments to find a Login
     * @example
     * // Get one Login
     * const login = await prisma.login.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends loginFindFirstOrThrowArgs>(args?: SelectSubset<T, loginFindFirstOrThrowArgs<ExtArgs>>): Prisma__loginClient<$Result.GetResult<Prisma.$loginPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Logins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {loginFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Logins
     * const logins = await prisma.login.findMany()
     * 
     * // Get first 10 Logins
     * const logins = await prisma.login.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const loginWithIdOnly = await prisma.login.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends loginFindManyArgs>(args?: SelectSubset<T, loginFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$loginPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Login.
     * @param {loginCreateArgs} args - Arguments to create a Login.
     * @example
     * // Create one Login
     * const Login = await prisma.login.create({
     *   data: {
     *     // ... data to create a Login
     *   }
     * })
     * 
     */
    create<T extends loginCreateArgs>(args: SelectSubset<T, loginCreateArgs<ExtArgs>>): Prisma__loginClient<$Result.GetResult<Prisma.$loginPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Logins.
     * @param {loginCreateManyArgs} args - Arguments to create many Logins.
     * @example
     * // Create many Logins
     * const login = await prisma.login.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends loginCreateManyArgs>(args?: SelectSubset<T, loginCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Logins and returns the data saved in the database.
     * @param {loginCreateManyAndReturnArgs} args - Arguments to create many Logins.
     * @example
     * // Create many Logins
     * const login = await prisma.login.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Logins and only return the `id`
     * const loginWithIdOnly = await prisma.login.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends loginCreateManyAndReturnArgs>(args?: SelectSubset<T, loginCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$loginPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Login.
     * @param {loginDeleteArgs} args - Arguments to delete one Login.
     * @example
     * // Delete one Login
     * const Login = await prisma.login.delete({
     *   where: {
     *     // ... filter to delete one Login
     *   }
     * })
     * 
     */
    delete<T extends loginDeleteArgs>(args: SelectSubset<T, loginDeleteArgs<ExtArgs>>): Prisma__loginClient<$Result.GetResult<Prisma.$loginPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Login.
     * @param {loginUpdateArgs} args - Arguments to update one Login.
     * @example
     * // Update one Login
     * const login = await prisma.login.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends loginUpdateArgs>(args: SelectSubset<T, loginUpdateArgs<ExtArgs>>): Prisma__loginClient<$Result.GetResult<Prisma.$loginPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Logins.
     * @param {loginDeleteManyArgs} args - Arguments to filter Logins to delete.
     * @example
     * // Delete a few Logins
     * const { count } = await prisma.login.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends loginDeleteManyArgs>(args?: SelectSubset<T, loginDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Logins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {loginUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Logins
     * const login = await prisma.login.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends loginUpdateManyArgs>(args: SelectSubset<T, loginUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Logins and returns the data updated in the database.
     * @param {loginUpdateManyAndReturnArgs} args - Arguments to update many Logins.
     * @example
     * // Update many Logins
     * const login = await prisma.login.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Logins and only return the `id`
     * const loginWithIdOnly = await prisma.login.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends loginUpdateManyAndReturnArgs>(args: SelectSubset<T, loginUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$loginPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Login.
     * @param {loginUpsertArgs} args - Arguments to update or create a Login.
     * @example
     * // Update or create a Login
     * const login = await prisma.login.upsert({
     *   create: {
     *     // ... data to create a Login
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Login we want to update
     *   }
     * })
     */
    upsert<T extends loginUpsertArgs>(args: SelectSubset<T, loginUpsertArgs<ExtArgs>>): Prisma__loginClient<$Result.GetResult<Prisma.$loginPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Logins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {loginCountArgs} args - Arguments to filter Logins to count.
     * @example
     * // Count the number of Logins
     * const count = await prisma.login.count({
     *   where: {
     *     // ... the filter for the Logins we want to count
     *   }
     * })
    **/
    count<T extends loginCountArgs>(
      args?: Subset<T, loginCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LoginCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Login.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoginAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LoginAggregateArgs>(args: Subset<T, LoginAggregateArgs>): Prisma.PrismaPromise<GetLoginAggregateType<T>>

    /**
     * Group by Login.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {loginGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends loginGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: loginGroupByArgs['orderBy'] }
        : { orderBy?: loginGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, loginGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLoginGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the login model
   */
  readonly fields: loginFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for login.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__loginClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the login model
   */
  interface loginFieldRefs {
    readonly id: FieldRef<"login", 'Int'>
    readonly user_id: FieldRef<"login", 'Int'>
    readonly token: FieldRef<"login", 'String'>
    readonly created_at: FieldRef<"login", 'DateTime'>
    readonly expires_at: FieldRef<"login", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * login findUnique
   */
  export type loginFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the login
     */
    select?: loginSelect<ExtArgs> | null
    /**
     * Omit specific fields from the login
     */
    omit?: loginOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: loginInclude<ExtArgs> | null
    /**
     * Filter, which login to fetch.
     */
    where: loginWhereUniqueInput
  }

  /**
   * login findUniqueOrThrow
   */
  export type loginFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the login
     */
    select?: loginSelect<ExtArgs> | null
    /**
     * Omit specific fields from the login
     */
    omit?: loginOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: loginInclude<ExtArgs> | null
    /**
     * Filter, which login to fetch.
     */
    where: loginWhereUniqueInput
  }

  /**
   * login findFirst
   */
  export type loginFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the login
     */
    select?: loginSelect<ExtArgs> | null
    /**
     * Omit specific fields from the login
     */
    omit?: loginOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: loginInclude<ExtArgs> | null
    /**
     * Filter, which login to fetch.
     */
    where?: loginWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of logins to fetch.
     */
    orderBy?: loginOrderByWithRelationInput | loginOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for logins.
     */
    cursor?: loginWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` logins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` logins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of logins.
     */
    distinct?: LoginScalarFieldEnum | LoginScalarFieldEnum[]
  }

  /**
   * login findFirstOrThrow
   */
  export type loginFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the login
     */
    select?: loginSelect<ExtArgs> | null
    /**
     * Omit specific fields from the login
     */
    omit?: loginOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: loginInclude<ExtArgs> | null
    /**
     * Filter, which login to fetch.
     */
    where?: loginWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of logins to fetch.
     */
    orderBy?: loginOrderByWithRelationInput | loginOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for logins.
     */
    cursor?: loginWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` logins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` logins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of logins.
     */
    distinct?: LoginScalarFieldEnum | LoginScalarFieldEnum[]
  }

  /**
   * login findMany
   */
  export type loginFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the login
     */
    select?: loginSelect<ExtArgs> | null
    /**
     * Omit specific fields from the login
     */
    omit?: loginOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: loginInclude<ExtArgs> | null
    /**
     * Filter, which logins to fetch.
     */
    where?: loginWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of logins to fetch.
     */
    orderBy?: loginOrderByWithRelationInput | loginOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing logins.
     */
    cursor?: loginWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` logins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` logins.
     */
    skip?: number
    distinct?: LoginScalarFieldEnum | LoginScalarFieldEnum[]
  }

  /**
   * login create
   */
  export type loginCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the login
     */
    select?: loginSelect<ExtArgs> | null
    /**
     * Omit specific fields from the login
     */
    omit?: loginOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: loginInclude<ExtArgs> | null
    /**
     * The data needed to create a login.
     */
    data: XOR<loginCreateInput, loginUncheckedCreateInput>
  }

  /**
   * login createMany
   */
  export type loginCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many logins.
     */
    data: loginCreateManyInput | loginCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * login createManyAndReturn
   */
  export type loginCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the login
     */
    select?: loginSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the login
     */
    omit?: loginOmit<ExtArgs> | null
    /**
     * The data used to create many logins.
     */
    data: loginCreateManyInput | loginCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: loginIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * login update
   */
  export type loginUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the login
     */
    select?: loginSelect<ExtArgs> | null
    /**
     * Omit specific fields from the login
     */
    omit?: loginOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: loginInclude<ExtArgs> | null
    /**
     * The data needed to update a login.
     */
    data: XOR<loginUpdateInput, loginUncheckedUpdateInput>
    /**
     * Choose, which login to update.
     */
    where: loginWhereUniqueInput
  }

  /**
   * login updateMany
   */
  export type loginUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update logins.
     */
    data: XOR<loginUpdateManyMutationInput, loginUncheckedUpdateManyInput>
    /**
     * Filter which logins to update
     */
    where?: loginWhereInput
    /**
     * Limit how many logins to update.
     */
    limit?: number
  }

  /**
   * login updateManyAndReturn
   */
  export type loginUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the login
     */
    select?: loginSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the login
     */
    omit?: loginOmit<ExtArgs> | null
    /**
     * The data used to update logins.
     */
    data: XOR<loginUpdateManyMutationInput, loginUncheckedUpdateManyInput>
    /**
     * Filter which logins to update
     */
    where?: loginWhereInput
    /**
     * Limit how many logins to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: loginIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * login upsert
   */
  export type loginUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the login
     */
    select?: loginSelect<ExtArgs> | null
    /**
     * Omit specific fields from the login
     */
    omit?: loginOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: loginInclude<ExtArgs> | null
    /**
     * The filter to search for the login to update in case it exists.
     */
    where: loginWhereUniqueInput
    /**
     * In case the login found by the `where` argument doesn't exist, create a new login with this data.
     */
    create: XOR<loginCreateInput, loginUncheckedCreateInput>
    /**
     * In case the login was found with the provided `where` argument, update it with this data.
     */
    update: XOR<loginUpdateInput, loginUncheckedUpdateInput>
  }

  /**
   * login delete
   */
  export type loginDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the login
     */
    select?: loginSelect<ExtArgs> | null
    /**
     * Omit specific fields from the login
     */
    omit?: loginOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: loginInclude<ExtArgs> | null
    /**
     * Filter which login to delete.
     */
    where: loginWhereUniqueInput
  }

  /**
   * login deleteMany
   */
  export type loginDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which logins to delete
     */
    where?: loginWhereInput
    /**
     * Limit how many logins to delete.
     */
    limit?: number
  }

  /**
   * login without action
   */
  export type loginDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the login
     */
    select?: loginSelect<ExtArgs> | null
    /**
     * Omit specific fields from the login
     */
    omit?: loginOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: loginInclude<ExtArgs> | null
  }


  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: number | null
    username: string | null
    password: string | null
  }

  export type UsersMaxAggregateOutputType = {
    id: number | null
    username: string | null
    password: string | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    username: number
    password: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    username?: true
    password?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    username?: true
    password?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    username?: true
    password?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: number
    username: string
    password: string
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    blogs?: boolean | users$blogsArgs<ExtArgs>
    login?: boolean | users$loginArgs<ExtArgs>
    projects?: boolean | users$projectsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectScalar = {
    id?: boolean
    username?: boolean
    password?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "password", ExtArgs["result"]["users"]>
  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    blogs?: boolean | users$blogsArgs<ExtArgs>
    login?: boolean | users$loginArgs<ExtArgs>
    projects?: boolean | users$projectsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type usersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type usersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      blogs: Prisma.$blogsPayload<ExtArgs>[]
      login: Prisma.$loginPayload<ExtArgs>[]
      projects: Prisma.$projectsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      password: string
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {usersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usersCreateManyAndReturnArgs>(args?: SelectSubset<T, usersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {usersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends usersUpdateManyAndReturnArgs>(args: SelectSubset<T, usersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    blogs<T extends users$blogsArgs<ExtArgs> = {}>(args?: Subset<T, users$blogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$blogsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    login<T extends users$loginArgs<ExtArgs> = {}>(args?: Subset<T, users$loginArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$loginPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    projects<T extends users$projectsArgs<ExtArgs> = {}>(args?: Subset<T, users$projectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly id: FieldRef<"users", 'Int'>
    readonly username: FieldRef<"users", 'String'>
    readonly password: FieldRef<"users", 'String'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users createManyAndReturn
   */
  export type usersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users updateManyAndReturn
   */
  export type usersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users.blogs
   */
  export type users$blogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blogs
     */
    select?: blogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the blogs
     */
    omit?: blogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blogsInclude<ExtArgs> | null
    where?: blogsWhereInput
    orderBy?: blogsOrderByWithRelationInput | blogsOrderByWithRelationInput[]
    cursor?: blogsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BlogsScalarFieldEnum | BlogsScalarFieldEnum[]
  }

  /**
   * users.login
   */
  export type users$loginArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the login
     */
    select?: loginSelect<ExtArgs> | null
    /**
     * Omit specific fields from the login
     */
    omit?: loginOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: loginInclude<ExtArgs> | null
    where?: loginWhereInput
    orderBy?: loginOrderByWithRelationInput | loginOrderByWithRelationInput[]
    cursor?: loginWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LoginScalarFieldEnum | LoginScalarFieldEnum[]
  }

  /**
   * users.projects
   */
  export type users$projectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projects
     */
    omit?: projectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectsInclude<ExtArgs> | null
    where?: projectsWhereInput
    orderBy?: projectsOrderByWithRelationInput | projectsOrderByWithRelationInput[]
    cursor?: projectsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectsScalarFieldEnum | ProjectsScalarFieldEnum[]
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
  }


  /**
   * Model blogs
   */

  export type AggregateBlogs = {
    _count: BlogsCountAggregateOutputType | null
    _avg: BlogsAvgAggregateOutputType | null
    _sum: BlogsSumAggregateOutputType | null
    _min: BlogsMinAggregateOutputType | null
    _max: BlogsMaxAggregateOutputType | null
  }

  export type BlogsAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type BlogsSumAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type BlogsMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    image: string | null
    date: Date | null
    title: string | null
    description: string | null
    content: string | null
    updated_at: Date | null
  }

  export type BlogsMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    image: string | null
    date: Date | null
    title: string | null
    description: string | null
    content: string | null
    updated_at: Date | null
  }

  export type BlogsCountAggregateOutputType = {
    id: number
    user_id: number
    image: number
    date: number
    title: number
    description: number
    content: number
    updated_at: number
    _all: number
  }


  export type BlogsAvgAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type BlogsSumAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type BlogsMinAggregateInputType = {
    id?: true
    user_id?: true
    image?: true
    date?: true
    title?: true
    description?: true
    content?: true
    updated_at?: true
  }

  export type BlogsMaxAggregateInputType = {
    id?: true
    user_id?: true
    image?: true
    date?: true
    title?: true
    description?: true
    content?: true
    updated_at?: true
  }

  export type BlogsCountAggregateInputType = {
    id?: true
    user_id?: true
    image?: true
    date?: true
    title?: true
    description?: true
    content?: true
    updated_at?: true
    _all?: true
  }

  export type BlogsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which blogs to aggregate.
     */
    where?: blogsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of blogs to fetch.
     */
    orderBy?: blogsOrderByWithRelationInput | blogsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: blogsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` blogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` blogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned blogs
    **/
    _count?: true | BlogsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BlogsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BlogsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BlogsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BlogsMaxAggregateInputType
  }

  export type GetBlogsAggregateType<T extends BlogsAggregateArgs> = {
        [P in keyof T & keyof AggregateBlogs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBlogs[P]>
      : GetScalarType<T[P], AggregateBlogs[P]>
  }




  export type blogsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: blogsWhereInput
    orderBy?: blogsOrderByWithAggregationInput | blogsOrderByWithAggregationInput[]
    by: BlogsScalarFieldEnum[] | BlogsScalarFieldEnum
    having?: blogsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BlogsCountAggregateInputType | true
    _avg?: BlogsAvgAggregateInputType
    _sum?: BlogsSumAggregateInputType
    _min?: BlogsMinAggregateInputType
    _max?: BlogsMaxAggregateInputType
  }

  export type BlogsGroupByOutputType = {
    id: number
    user_id: number
    image: string | null
    date: Date
    title: string
    description: string
    content: string | null
    updated_at: Date | null
    _count: BlogsCountAggregateOutputType | null
    _avg: BlogsAvgAggregateOutputType | null
    _sum: BlogsSumAggregateOutputType | null
    _min: BlogsMinAggregateOutputType | null
    _max: BlogsMaxAggregateOutputType | null
  }

  type GetBlogsGroupByPayload<T extends blogsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BlogsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BlogsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BlogsGroupByOutputType[P]>
            : GetScalarType<T[P], BlogsGroupByOutputType[P]>
        }
      >
    >


  export type blogsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    image?: boolean
    date?: boolean
    title?: boolean
    description?: boolean
    content?: boolean
    updated_at?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blogs"]>

  export type blogsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    image?: boolean
    date?: boolean
    title?: boolean
    description?: boolean
    content?: boolean
    updated_at?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blogs"]>

  export type blogsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    image?: boolean
    date?: boolean
    title?: boolean
    description?: boolean
    content?: boolean
    updated_at?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blogs"]>

  export type blogsSelectScalar = {
    id?: boolean
    user_id?: boolean
    image?: boolean
    date?: boolean
    title?: boolean
    description?: boolean
    content?: boolean
    updated_at?: boolean
  }

  export type blogsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "image" | "date" | "title" | "description" | "content" | "updated_at", ExtArgs["result"]["blogs"]>
  export type blogsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type blogsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type blogsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $blogsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "blogs"
    objects: {
      users: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number
      image: string | null
      date: Date
      title: string
      description: string
      content: string | null
      updated_at: Date | null
    }, ExtArgs["result"]["blogs"]>
    composites: {}
  }

  type blogsGetPayload<S extends boolean | null | undefined | blogsDefaultArgs> = $Result.GetResult<Prisma.$blogsPayload, S>

  type blogsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<blogsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BlogsCountAggregateInputType | true
    }

  export interface blogsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['blogs'], meta: { name: 'blogs' } }
    /**
     * Find zero or one Blogs that matches the filter.
     * @param {blogsFindUniqueArgs} args - Arguments to find a Blogs
     * @example
     * // Get one Blogs
     * const blogs = await prisma.blogs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends blogsFindUniqueArgs>(args: SelectSubset<T, blogsFindUniqueArgs<ExtArgs>>): Prisma__blogsClient<$Result.GetResult<Prisma.$blogsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Blogs that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {blogsFindUniqueOrThrowArgs} args - Arguments to find a Blogs
     * @example
     * // Get one Blogs
     * const blogs = await prisma.blogs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends blogsFindUniqueOrThrowArgs>(args: SelectSubset<T, blogsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__blogsClient<$Result.GetResult<Prisma.$blogsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Blogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {blogsFindFirstArgs} args - Arguments to find a Blogs
     * @example
     * // Get one Blogs
     * const blogs = await prisma.blogs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends blogsFindFirstArgs>(args?: SelectSubset<T, blogsFindFirstArgs<ExtArgs>>): Prisma__blogsClient<$Result.GetResult<Prisma.$blogsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Blogs that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {blogsFindFirstOrThrowArgs} args - Arguments to find a Blogs
     * @example
     * // Get one Blogs
     * const blogs = await prisma.blogs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends blogsFindFirstOrThrowArgs>(args?: SelectSubset<T, blogsFindFirstOrThrowArgs<ExtArgs>>): Prisma__blogsClient<$Result.GetResult<Prisma.$blogsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Blogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {blogsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Blogs
     * const blogs = await prisma.blogs.findMany()
     * 
     * // Get first 10 Blogs
     * const blogs = await prisma.blogs.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const blogsWithIdOnly = await prisma.blogs.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends blogsFindManyArgs>(args?: SelectSubset<T, blogsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$blogsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Blogs.
     * @param {blogsCreateArgs} args - Arguments to create a Blogs.
     * @example
     * // Create one Blogs
     * const Blogs = await prisma.blogs.create({
     *   data: {
     *     // ... data to create a Blogs
     *   }
     * })
     * 
     */
    create<T extends blogsCreateArgs>(args: SelectSubset<T, blogsCreateArgs<ExtArgs>>): Prisma__blogsClient<$Result.GetResult<Prisma.$blogsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Blogs.
     * @param {blogsCreateManyArgs} args - Arguments to create many Blogs.
     * @example
     * // Create many Blogs
     * const blogs = await prisma.blogs.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends blogsCreateManyArgs>(args?: SelectSubset<T, blogsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Blogs and returns the data saved in the database.
     * @param {blogsCreateManyAndReturnArgs} args - Arguments to create many Blogs.
     * @example
     * // Create many Blogs
     * const blogs = await prisma.blogs.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Blogs and only return the `id`
     * const blogsWithIdOnly = await prisma.blogs.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends blogsCreateManyAndReturnArgs>(args?: SelectSubset<T, blogsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$blogsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Blogs.
     * @param {blogsDeleteArgs} args - Arguments to delete one Blogs.
     * @example
     * // Delete one Blogs
     * const Blogs = await prisma.blogs.delete({
     *   where: {
     *     // ... filter to delete one Blogs
     *   }
     * })
     * 
     */
    delete<T extends blogsDeleteArgs>(args: SelectSubset<T, blogsDeleteArgs<ExtArgs>>): Prisma__blogsClient<$Result.GetResult<Prisma.$blogsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Blogs.
     * @param {blogsUpdateArgs} args - Arguments to update one Blogs.
     * @example
     * // Update one Blogs
     * const blogs = await prisma.blogs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends blogsUpdateArgs>(args: SelectSubset<T, blogsUpdateArgs<ExtArgs>>): Prisma__blogsClient<$Result.GetResult<Prisma.$blogsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Blogs.
     * @param {blogsDeleteManyArgs} args - Arguments to filter Blogs to delete.
     * @example
     * // Delete a few Blogs
     * const { count } = await prisma.blogs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends blogsDeleteManyArgs>(args?: SelectSubset<T, blogsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Blogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {blogsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Blogs
     * const blogs = await prisma.blogs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends blogsUpdateManyArgs>(args: SelectSubset<T, blogsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Blogs and returns the data updated in the database.
     * @param {blogsUpdateManyAndReturnArgs} args - Arguments to update many Blogs.
     * @example
     * // Update many Blogs
     * const blogs = await prisma.blogs.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Blogs and only return the `id`
     * const blogsWithIdOnly = await prisma.blogs.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends blogsUpdateManyAndReturnArgs>(args: SelectSubset<T, blogsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$blogsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Blogs.
     * @param {blogsUpsertArgs} args - Arguments to update or create a Blogs.
     * @example
     * // Update or create a Blogs
     * const blogs = await prisma.blogs.upsert({
     *   create: {
     *     // ... data to create a Blogs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Blogs we want to update
     *   }
     * })
     */
    upsert<T extends blogsUpsertArgs>(args: SelectSubset<T, blogsUpsertArgs<ExtArgs>>): Prisma__blogsClient<$Result.GetResult<Prisma.$blogsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Blogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {blogsCountArgs} args - Arguments to filter Blogs to count.
     * @example
     * // Count the number of Blogs
     * const count = await prisma.blogs.count({
     *   where: {
     *     // ... the filter for the Blogs we want to count
     *   }
     * })
    **/
    count<T extends blogsCountArgs>(
      args?: Subset<T, blogsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BlogsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Blogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BlogsAggregateArgs>(args: Subset<T, BlogsAggregateArgs>): Prisma.PrismaPromise<GetBlogsAggregateType<T>>

    /**
     * Group by Blogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {blogsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends blogsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: blogsGroupByArgs['orderBy'] }
        : { orderBy?: blogsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, blogsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBlogsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the blogs model
   */
  readonly fields: blogsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for blogs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__blogsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the blogs model
   */
  interface blogsFieldRefs {
    readonly id: FieldRef<"blogs", 'Int'>
    readonly user_id: FieldRef<"blogs", 'Int'>
    readonly image: FieldRef<"blogs", 'String'>
    readonly date: FieldRef<"blogs", 'DateTime'>
    readonly title: FieldRef<"blogs", 'String'>
    readonly description: FieldRef<"blogs", 'String'>
    readonly content: FieldRef<"blogs", 'String'>
    readonly updated_at: FieldRef<"blogs", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * blogs findUnique
   */
  export type blogsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blogs
     */
    select?: blogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the blogs
     */
    omit?: blogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blogsInclude<ExtArgs> | null
    /**
     * Filter, which blogs to fetch.
     */
    where: blogsWhereUniqueInput
  }

  /**
   * blogs findUniqueOrThrow
   */
  export type blogsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blogs
     */
    select?: blogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the blogs
     */
    omit?: blogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blogsInclude<ExtArgs> | null
    /**
     * Filter, which blogs to fetch.
     */
    where: blogsWhereUniqueInput
  }

  /**
   * blogs findFirst
   */
  export type blogsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blogs
     */
    select?: blogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the blogs
     */
    omit?: blogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blogsInclude<ExtArgs> | null
    /**
     * Filter, which blogs to fetch.
     */
    where?: blogsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of blogs to fetch.
     */
    orderBy?: blogsOrderByWithRelationInput | blogsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for blogs.
     */
    cursor?: blogsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` blogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` blogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of blogs.
     */
    distinct?: BlogsScalarFieldEnum | BlogsScalarFieldEnum[]
  }

  /**
   * blogs findFirstOrThrow
   */
  export type blogsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blogs
     */
    select?: blogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the blogs
     */
    omit?: blogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blogsInclude<ExtArgs> | null
    /**
     * Filter, which blogs to fetch.
     */
    where?: blogsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of blogs to fetch.
     */
    orderBy?: blogsOrderByWithRelationInput | blogsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for blogs.
     */
    cursor?: blogsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` blogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` blogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of blogs.
     */
    distinct?: BlogsScalarFieldEnum | BlogsScalarFieldEnum[]
  }

  /**
   * blogs findMany
   */
  export type blogsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blogs
     */
    select?: blogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the blogs
     */
    omit?: blogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blogsInclude<ExtArgs> | null
    /**
     * Filter, which blogs to fetch.
     */
    where?: blogsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of blogs to fetch.
     */
    orderBy?: blogsOrderByWithRelationInput | blogsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing blogs.
     */
    cursor?: blogsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` blogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` blogs.
     */
    skip?: number
    distinct?: BlogsScalarFieldEnum | BlogsScalarFieldEnum[]
  }

  /**
   * blogs create
   */
  export type blogsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blogs
     */
    select?: blogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the blogs
     */
    omit?: blogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blogsInclude<ExtArgs> | null
    /**
     * The data needed to create a blogs.
     */
    data: XOR<blogsCreateInput, blogsUncheckedCreateInput>
  }

  /**
   * blogs createMany
   */
  export type blogsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many blogs.
     */
    data: blogsCreateManyInput | blogsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * blogs createManyAndReturn
   */
  export type blogsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blogs
     */
    select?: blogsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the blogs
     */
    omit?: blogsOmit<ExtArgs> | null
    /**
     * The data used to create many blogs.
     */
    data: blogsCreateManyInput | blogsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blogsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * blogs update
   */
  export type blogsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blogs
     */
    select?: blogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the blogs
     */
    omit?: blogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blogsInclude<ExtArgs> | null
    /**
     * The data needed to update a blogs.
     */
    data: XOR<blogsUpdateInput, blogsUncheckedUpdateInput>
    /**
     * Choose, which blogs to update.
     */
    where: blogsWhereUniqueInput
  }

  /**
   * blogs updateMany
   */
  export type blogsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update blogs.
     */
    data: XOR<blogsUpdateManyMutationInput, blogsUncheckedUpdateManyInput>
    /**
     * Filter which blogs to update
     */
    where?: blogsWhereInput
    /**
     * Limit how many blogs to update.
     */
    limit?: number
  }

  /**
   * blogs updateManyAndReturn
   */
  export type blogsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blogs
     */
    select?: blogsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the blogs
     */
    omit?: blogsOmit<ExtArgs> | null
    /**
     * The data used to update blogs.
     */
    data: XOR<blogsUpdateManyMutationInput, blogsUncheckedUpdateManyInput>
    /**
     * Filter which blogs to update
     */
    where?: blogsWhereInput
    /**
     * Limit how many blogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blogsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * blogs upsert
   */
  export type blogsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blogs
     */
    select?: blogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the blogs
     */
    omit?: blogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blogsInclude<ExtArgs> | null
    /**
     * The filter to search for the blogs to update in case it exists.
     */
    where: blogsWhereUniqueInput
    /**
     * In case the blogs found by the `where` argument doesn't exist, create a new blogs with this data.
     */
    create: XOR<blogsCreateInput, blogsUncheckedCreateInput>
    /**
     * In case the blogs was found with the provided `where` argument, update it with this data.
     */
    update: XOR<blogsUpdateInput, blogsUncheckedUpdateInput>
  }

  /**
   * blogs delete
   */
  export type blogsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blogs
     */
    select?: blogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the blogs
     */
    omit?: blogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blogsInclude<ExtArgs> | null
    /**
     * Filter which blogs to delete.
     */
    where: blogsWhereUniqueInput
  }

  /**
   * blogs deleteMany
   */
  export type blogsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which blogs to delete
     */
    where?: blogsWhereInput
    /**
     * Limit how many blogs to delete.
     */
    limit?: number
  }

  /**
   * blogs without action
   */
  export type blogsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blogs
     */
    select?: blogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the blogs
     */
    omit?: blogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blogsInclude<ExtArgs> | null
  }


  /**
   * Model project_icons
   */

  export type AggregateProject_icons = {
    _count: Project_iconsCountAggregateOutputType | null
    _avg: Project_iconsAvgAggregateOutputType | null
    _sum: Project_iconsSumAggregateOutputType | null
    _min: Project_iconsMinAggregateOutputType | null
    _max: Project_iconsMaxAggregateOutputType | null
  }

  export type Project_iconsAvgAggregateOutputType = {
    id: number | null
    project_id: number | null
  }

  export type Project_iconsSumAggregateOutputType = {
    id: number | null
    project_id: number | null
  }

  export type Project_iconsMinAggregateOutputType = {
    id: number | null
    project_id: number | null
    icon_name: string | null
  }

  export type Project_iconsMaxAggregateOutputType = {
    id: number | null
    project_id: number | null
    icon_name: string | null
  }

  export type Project_iconsCountAggregateOutputType = {
    id: number
    project_id: number
    icon_name: number
    _all: number
  }


  export type Project_iconsAvgAggregateInputType = {
    id?: true
    project_id?: true
  }

  export type Project_iconsSumAggregateInputType = {
    id?: true
    project_id?: true
  }

  export type Project_iconsMinAggregateInputType = {
    id?: true
    project_id?: true
    icon_name?: true
  }

  export type Project_iconsMaxAggregateInputType = {
    id?: true
    project_id?: true
    icon_name?: true
  }

  export type Project_iconsCountAggregateInputType = {
    id?: true
    project_id?: true
    icon_name?: true
    _all?: true
  }

  export type Project_iconsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which project_icons to aggregate.
     */
    where?: project_iconsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of project_icons to fetch.
     */
    orderBy?: project_iconsOrderByWithRelationInput | project_iconsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: project_iconsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` project_icons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` project_icons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned project_icons
    **/
    _count?: true | Project_iconsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Project_iconsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Project_iconsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Project_iconsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Project_iconsMaxAggregateInputType
  }

  export type GetProject_iconsAggregateType<T extends Project_iconsAggregateArgs> = {
        [P in keyof T & keyof AggregateProject_icons]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProject_icons[P]>
      : GetScalarType<T[P], AggregateProject_icons[P]>
  }




  export type project_iconsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: project_iconsWhereInput
    orderBy?: project_iconsOrderByWithAggregationInput | project_iconsOrderByWithAggregationInput[]
    by: Project_iconsScalarFieldEnum[] | Project_iconsScalarFieldEnum
    having?: project_iconsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Project_iconsCountAggregateInputType | true
    _avg?: Project_iconsAvgAggregateInputType
    _sum?: Project_iconsSumAggregateInputType
    _min?: Project_iconsMinAggregateInputType
    _max?: Project_iconsMaxAggregateInputType
  }

  export type Project_iconsGroupByOutputType = {
    id: number
    project_id: number | null
    icon_name: string | null
    _count: Project_iconsCountAggregateOutputType | null
    _avg: Project_iconsAvgAggregateOutputType | null
    _sum: Project_iconsSumAggregateOutputType | null
    _min: Project_iconsMinAggregateOutputType | null
    _max: Project_iconsMaxAggregateOutputType | null
  }

  type GetProject_iconsGroupByPayload<T extends project_iconsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Project_iconsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Project_iconsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Project_iconsGroupByOutputType[P]>
            : GetScalarType<T[P], Project_iconsGroupByOutputType[P]>
        }
      >
    >


  export type project_iconsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    project_id?: boolean
    icon_name?: boolean
    projects?: boolean | project_icons$projectsArgs<ExtArgs>
  }, ExtArgs["result"]["project_icons"]>

  export type project_iconsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    project_id?: boolean
    icon_name?: boolean
    projects?: boolean | project_icons$projectsArgs<ExtArgs>
  }, ExtArgs["result"]["project_icons"]>

  export type project_iconsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    project_id?: boolean
    icon_name?: boolean
    projects?: boolean | project_icons$projectsArgs<ExtArgs>
  }, ExtArgs["result"]["project_icons"]>

  export type project_iconsSelectScalar = {
    id?: boolean
    project_id?: boolean
    icon_name?: boolean
  }

  export type project_iconsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "project_id" | "icon_name", ExtArgs["result"]["project_icons"]>
  export type project_iconsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projects?: boolean | project_icons$projectsArgs<ExtArgs>
  }
  export type project_iconsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projects?: boolean | project_icons$projectsArgs<ExtArgs>
  }
  export type project_iconsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projects?: boolean | project_icons$projectsArgs<ExtArgs>
  }

  export type $project_iconsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "project_icons"
    objects: {
      projects: Prisma.$projectsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      project_id: number | null
      icon_name: string | null
    }, ExtArgs["result"]["project_icons"]>
    composites: {}
  }

  type project_iconsGetPayload<S extends boolean | null | undefined | project_iconsDefaultArgs> = $Result.GetResult<Prisma.$project_iconsPayload, S>

  type project_iconsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<project_iconsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Project_iconsCountAggregateInputType | true
    }

  export interface project_iconsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['project_icons'], meta: { name: 'project_icons' } }
    /**
     * Find zero or one Project_icons that matches the filter.
     * @param {project_iconsFindUniqueArgs} args - Arguments to find a Project_icons
     * @example
     * // Get one Project_icons
     * const project_icons = await prisma.project_icons.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends project_iconsFindUniqueArgs>(args: SelectSubset<T, project_iconsFindUniqueArgs<ExtArgs>>): Prisma__project_iconsClient<$Result.GetResult<Prisma.$project_iconsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Project_icons that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {project_iconsFindUniqueOrThrowArgs} args - Arguments to find a Project_icons
     * @example
     * // Get one Project_icons
     * const project_icons = await prisma.project_icons.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends project_iconsFindUniqueOrThrowArgs>(args: SelectSubset<T, project_iconsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__project_iconsClient<$Result.GetResult<Prisma.$project_iconsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project_icons that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {project_iconsFindFirstArgs} args - Arguments to find a Project_icons
     * @example
     * // Get one Project_icons
     * const project_icons = await prisma.project_icons.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends project_iconsFindFirstArgs>(args?: SelectSubset<T, project_iconsFindFirstArgs<ExtArgs>>): Prisma__project_iconsClient<$Result.GetResult<Prisma.$project_iconsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project_icons that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {project_iconsFindFirstOrThrowArgs} args - Arguments to find a Project_icons
     * @example
     * // Get one Project_icons
     * const project_icons = await prisma.project_icons.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends project_iconsFindFirstOrThrowArgs>(args?: SelectSubset<T, project_iconsFindFirstOrThrowArgs<ExtArgs>>): Prisma__project_iconsClient<$Result.GetResult<Prisma.$project_iconsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Project_icons that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {project_iconsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Project_icons
     * const project_icons = await prisma.project_icons.findMany()
     * 
     * // Get first 10 Project_icons
     * const project_icons = await prisma.project_icons.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const project_iconsWithIdOnly = await prisma.project_icons.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends project_iconsFindManyArgs>(args?: SelectSubset<T, project_iconsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$project_iconsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Project_icons.
     * @param {project_iconsCreateArgs} args - Arguments to create a Project_icons.
     * @example
     * // Create one Project_icons
     * const Project_icons = await prisma.project_icons.create({
     *   data: {
     *     // ... data to create a Project_icons
     *   }
     * })
     * 
     */
    create<T extends project_iconsCreateArgs>(args: SelectSubset<T, project_iconsCreateArgs<ExtArgs>>): Prisma__project_iconsClient<$Result.GetResult<Prisma.$project_iconsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Project_icons.
     * @param {project_iconsCreateManyArgs} args - Arguments to create many Project_icons.
     * @example
     * // Create many Project_icons
     * const project_icons = await prisma.project_icons.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends project_iconsCreateManyArgs>(args?: SelectSubset<T, project_iconsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Project_icons and returns the data saved in the database.
     * @param {project_iconsCreateManyAndReturnArgs} args - Arguments to create many Project_icons.
     * @example
     * // Create many Project_icons
     * const project_icons = await prisma.project_icons.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Project_icons and only return the `id`
     * const project_iconsWithIdOnly = await prisma.project_icons.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends project_iconsCreateManyAndReturnArgs>(args?: SelectSubset<T, project_iconsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$project_iconsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Project_icons.
     * @param {project_iconsDeleteArgs} args - Arguments to delete one Project_icons.
     * @example
     * // Delete one Project_icons
     * const Project_icons = await prisma.project_icons.delete({
     *   where: {
     *     // ... filter to delete one Project_icons
     *   }
     * })
     * 
     */
    delete<T extends project_iconsDeleteArgs>(args: SelectSubset<T, project_iconsDeleteArgs<ExtArgs>>): Prisma__project_iconsClient<$Result.GetResult<Prisma.$project_iconsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Project_icons.
     * @param {project_iconsUpdateArgs} args - Arguments to update one Project_icons.
     * @example
     * // Update one Project_icons
     * const project_icons = await prisma.project_icons.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends project_iconsUpdateArgs>(args: SelectSubset<T, project_iconsUpdateArgs<ExtArgs>>): Prisma__project_iconsClient<$Result.GetResult<Prisma.$project_iconsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Project_icons.
     * @param {project_iconsDeleteManyArgs} args - Arguments to filter Project_icons to delete.
     * @example
     * // Delete a few Project_icons
     * const { count } = await prisma.project_icons.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends project_iconsDeleteManyArgs>(args?: SelectSubset<T, project_iconsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Project_icons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {project_iconsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Project_icons
     * const project_icons = await prisma.project_icons.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends project_iconsUpdateManyArgs>(args: SelectSubset<T, project_iconsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Project_icons and returns the data updated in the database.
     * @param {project_iconsUpdateManyAndReturnArgs} args - Arguments to update many Project_icons.
     * @example
     * // Update many Project_icons
     * const project_icons = await prisma.project_icons.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Project_icons and only return the `id`
     * const project_iconsWithIdOnly = await prisma.project_icons.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends project_iconsUpdateManyAndReturnArgs>(args: SelectSubset<T, project_iconsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$project_iconsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Project_icons.
     * @param {project_iconsUpsertArgs} args - Arguments to update or create a Project_icons.
     * @example
     * // Update or create a Project_icons
     * const project_icons = await prisma.project_icons.upsert({
     *   create: {
     *     // ... data to create a Project_icons
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Project_icons we want to update
     *   }
     * })
     */
    upsert<T extends project_iconsUpsertArgs>(args: SelectSubset<T, project_iconsUpsertArgs<ExtArgs>>): Prisma__project_iconsClient<$Result.GetResult<Prisma.$project_iconsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Project_icons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {project_iconsCountArgs} args - Arguments to filter Project_icons to count.
     * @example
     * // Count the number of Project_icons
     * const count = await prisma.project_icons.count({
     *   where: {
     *     // ... the filter for the Project_icons we want to count
     *   }
     * })
    **/
    count<T extends project_iconsCountArgs>(
      args?: Subset<T, project_iconsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Project_iconsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Project_icons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Project_iconsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Project_iconsAggregateArgs>(args: Subset<T, Project_iconsAggregateArgs>): Prisma.PrismaPromise<GetProject_iconsAggregateType<T>>

    /**
     * Group by Project_icons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {project_iconsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends project_iconsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: project_iconsGroupByArgs['orderBy'] }
        : { orderBy?: project_iconsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, project_iconsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProject_iconsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the project_icons model
   */
  readonly fields: project_iconsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for project_icons.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__project_iconsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    projects<T extends project_icons$projectsArgs<ExtArgs> = {}>(args?: Subset<T, project_icons$projectsArgs<ExtArgs>>): Prisma__projectsClient<$Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the project_icons model
   */
  interface project_iconsFieldRefs {
    readonly id: FieldRef<"project_icons", 'Int'>
    readonly project_id: FieldRef<"project_icons", 'Int'>
    readonly icon_name: FieldRef<"project_icons", 'String'>
  }
    

  // Custom InputTypes
  /**
   * project_icons findUnique
   */
  export type project_iconsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project_icons
     */
    select?: project_iconsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project_icons
     */
    omit?: project_iconsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: project_iconsInclude<ExtArgs> | null
    /**
     * Filter, which project_icons to fetch.
     */
    where: project_iconsWhereUniqueInput
  }

  /**
   * project_icons findUniqueOrThrow
   */
  export type project_iconsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project_icons
     */
    select?: project_iconsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project_icons
     */
    omit?: project_iconsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: project_iconsInclude<ExtArgs> | null
    /**
     * Filter, which project_icons to fetch.
     */
    where: project_iconsWhereUniqueInput
  }

  /**
   * project_icons findFirst
   */
  export type project_iconsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project_icons
     */
    select?: project_iconsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project_icons
     */
    omit?: project_iconsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: project_iconsInclude<ExtArgs> | null
    /**
     * Filter, which project_icons to fetch.
     */
    where?: project_iconsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of project_icons to fetch.
     */
    orderBy?: project_iconsOrderByWithRelationInput | project_iconsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for project_icons.
     */
    cursor?: project_iconsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` project_icons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` project_icons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of project_icons.
     */
    distinct?: Project_iconsScalarFieldEnum | Project_iconsScalarFieldEnum[]
  }

  /**
   * project_icons findFirstOrThrow
   */
  export type project_iconsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project_icons
     */
    select?: project_iconsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project_icons
     */
    omit?: project_iconsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: project_iconsInclude<ExtArgs> | null
    /**
     * Filter, which project_icons to fetch.
     */
    where?: project_iconsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of project_icons to fetch.
     */
    orderBy?: project_iconsOrderByWithRelationInput | project_iconsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for project_icons.
     */
    cursor?: project_iconsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` project_icons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` project_icons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of project_icons.
     */
    distinct?: Project_iconsScalarFieldEnum | Project_iconsScalarFieldEnum[]
  }

  /**
   * project_icons findMany
   */
  export type project_iconsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project_icons
     */
    select?: project_iconsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project_icons
     */
    omit?: project_iconsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: project_iconsInclude<ExtArgs> | null
    /**
     * Filter, which project_icons to fetch.
     */
    where?: project_iconsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of project_icons to fetch.
     */
    orderBy?: project_iconsOrderByWithRelationInput | project_iconsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing project_icons.
     */
    cursor?: project_iconsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` project_icons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` project_icons.
     */
    skip?: number
    distinct?: Project_iconsScalarFieldEnum | Project_iconsScalarFieldEnum[]
  }

  /**
   * project_icons create
   */
  export type project_iconsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project_icons
     */
    select?: project_iconsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project_icons
     */
    omit?: project_iconsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: project_iconsInclude<ExtArgs> | null
    /**
     * The data needed to create a project_icons.
     */
    data?: XOR<project_iconsCreateInput, project_iconsUncheckedCreateInput>
  }

  /**
   * project_icons createMany
   */
  export type project_iconsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many project_icons.
     */
    data: project_iconsCreateManyInput | project_iconsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * project_icons createManyAndReturn
   */
  export type project_iconsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project_icons
     */
    select?: project_iconsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the project_icons
     */
    omit?: project_iconsOmit<ExtArgs> | null
    /**
     * The data used to create many project_icons.
     */
    data: project_iconsCreateManyInput | project_iconsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: project_iconsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * project_icons update
   */
  export type project_iconsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project_icons
     */
    select?: project_iconsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project_icons
     */
    omit?: project_iconsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: project_iconsInclude<ExtArgs> | null
    /**
     * The data needed to update a project_icons.
     */
    data: XOR<project_iconsUpdateInput, project_iconsUncheckedUpdateInput>
    /**
     * Choose, which project_icons to update.
     */
    where: project_iconsWhereUniqueInput
  }

  /**
   * project_icons updateMany
   */
  export type project_iconsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update project_icons.
     */
    data: XOR<project_iconsUpdateManyMutationInput, project_iconsUncheckedUpdateManyInput>
    /**
     * Filter which project_icons to update
     */
    where?: project_iconsWhereInput
    /**
     * Limit how many project_icons to update.
     */
    limit?: number
  }

  /**
   * project_icons updateManyAndReturn
   */
  export type project_iconsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project_icons
     */
    select?: project_iconsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the project_icons
     */
    omit?: project_iconsOmit<ExtArgs> | null
    /**
     * The data used to update project_icons.
     */
    data: XOR<project_iconsUpdateManyMutationInput, project_iconsUncheckedUpdateManyInput>
    /**
     * Filter which project_icons to update
     */
    where?: project_iconsWhereInput
    /**
     * Limit how many project_icons to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: project_iconsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * project_icons upsert
   */
  export type project_iconsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project_icons
     */
    select?: project_iconsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project_icons
     */
    omit?: project_iconsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: project_iconsInclude<ExtArgs> | null
    /**
     * The filter to search for the project_icons to update in case it exists.
     */
    where: project_iconsWhereUniqueInput
    /**
     * In case the project_icons found by the `where` argument doesn't exist, create a new project_icons with this data.
     */
    create: XOR<project_iconsCreateInput, project_iconsUncheckedCreateInput>
    /**
     * In case the project_icons was found with the provided `where` argument, update it with this data.
     */
    update: XOR<project_iconsUpdateInput, project_iconsUncheckedUpdateInput>
  }

  /**
   * project_icons delete
   */
  export type project_iconsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project_icons
     */
    select?: project_iconsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project_icons
     */
    omit?: project_iconsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: project_iconsInclude<ExtArgs> | null
    /**
     * Filter which project_icons to delete.
     */
    where: project_iconsWhereUniqueInput
  }

  /**
   * project_icons deleteMany
   */
  export type project_iconsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which project_icons to delete
     */
    where?: project_iconsWhereInput
    /**
     * Limit how many project_icons to delete.
     */
    limit?: number
  }

  /**
   * project_icons.projects
   */
  export type project_icons$projectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projects
     */
    omit?: projectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectsInclude<ExtArgs> | null
    where?: projectsWhereInput
  }

  /**
   * project_icons without action
   */
  export type project_iconsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project_icons
     */
    select?: project_iconsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project_icons
     */
    omit?: project_iconsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: project_iconsInclude<ExtArgs> | null
  }


  /**
   * Model project_linkedin_partners
   */

  export type AggregateProject_linkedin_partners = {
    _count: Project_linkedin_partnersCountAggregateOutputType | null
    _avg: Project_linkedin_partnersAvgAggregateOutputType | null
    _sum: Project_linkedin_partnersSumAggregateOutputType | null
    _min: Project_linkedin_partnersMinAggregateOutputType | null
    _max: Project_linkedin_partnersMaxAggregateOutputType | null
  }

  export type Project_linkedin_partnersAvgAggregateOutputType = {
    id: number | null
    project_id: number | null
  }

  export type Project_linkedin_partnersSumAggregateOutputType = {
    id: number | null
    project_id: number | null
  }

  export type Project_linkedin_partnersMinAggregateOutputType = {
    id: number | null
    project_id: number | null
    url: string | null
  }

  export type Project_linkedin_partnersMaxAggregateOutputType = {
    id: number | null
    project_id: number | null
    url: string | null
  }

  export type Project_linkedin_partnersCountAggregateOutputType = {
    id: number
    project_id: number
    url: number
    _all: number
  }


  export type Project_linkedin_partnersAvgAggregateInputType = {
    id?: true
    project_id?: true
  }

  export type Project_linkedin_partnersSumAggregateInputType = {
    id?: true
    project_id?: true
  }

  export type Project_linkedin_partnersMinAggregateInputType = {
    id?: true
    project_id?: true
    url?: true
  }

  export type Project_linkedin_partnersMaxAggregateInputType = {
    id?: true
    project_id?: true
    url?: true
  }

  export type Project_linkedin_partnersCountAggregateInputType = {
    id?: true
    project_id?: true
    url?: true
    _all?: true
  }

  export type Project_linkedin_partnersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which project_linkedin_partners to aggregate.
     */
    where?: project_linkedin_partnersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of project_linkedin_partners to fetch.
     */
    orderBy?: project_linkedin_partnersOrderByWithRelationInput | project_linkedin_partnersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: project_linkedin_partnersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` project_linkedin_partners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` project_linkedin_partners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned project_linkedin_partners
    **/
    _count?: true | Project_linkedin_partnersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Project_linkedin_partnersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Project_linkedin_partnersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Project_linkedin_partnersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Project_linkedin_partnersMaxAggregateInputType
  }

  export type GetProject_linkedin_partnersAggregateType<T extends Project_linkedin_partnersAggregateArgs> = {
        [P in keyof T & keyof AggregateProject_linkedin_partners]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProject_linkedin_partners[P]>
      : GetScalarType<T[P], AggregateProject_linkedin_partners[P]>
  }




  export type project_linkedin_partnersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: project_linkedin_partnersWhereInput
    orderBy?: project_linkedin_partnersOrderByWithAggregationInput | project_linkedin_partnersOrderByWithAggregationInput[]
    by: Project_linkedin_partnersScalarFieldEnum[] | Project_linkedin_partnersScalarFieldEnum
    having?: project_linkedin_partnersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Project_linkedin_partnersCountAggregateInputType | true
    _avg?: Project_linkedin_partnersAvgAggregateInputType
    _sum?: Project_linkedin_partnersSumAggregateInputType
    _min?: Project_linkedin_partnersMinAggregateInputType
    _max?: Project_linkedin_partnersMaxAggregateInputType
  }

  export type Project_linkedin_partnersGroupByOutputType = {
    id: number
    project_id: number | null
    url: string | null
    _count: Project_linkedin_partnersCountAggregateOutputType | null
    _avg: Project_linkedin_partnersAvgAggregateOutputType | null
    _sum: Project_linkedin_partnersSumAggregateOutputType | null
    _min: Project_linkedin_partnersMinAggregateOutputType | null
    _max: Project_linkedin_partnersMaxAggregateOutputType | null
  }

  type GetProject_linkedin_partnersGroupByPayload<T extends project_linkedin_partnersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Project_linkedin_partnersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Project_linkedin_partnersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Project_linkedin_partnersGroupByOutputType[P]>
            : GetScalarType<T[P], Project_linkedin_partnersGroupByOutputType[P]>
        }
      >
    >


  export type project_linkedin_partnersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    project_id?: boolean
    url?: boolean
    projects?: boolean | project_linkedin_partners$projectsArgs<ExtArgs>
  }, ExtArgs["result"]["project_linkedin_partners"]>

  export type project_linkedin_partnersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    project_id?: boolean
    url?: boolean
    projects?: boolean | project_linkedin_partners$projectsArgs<ExtArgs>
  }, ExtArgs["result"]["project_linkedin_partners"]>

  export type project_linkedin_partnersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    project_id?: boolean
    url?: boolean
    projects?: boolean | project_linkedin_partners$projectsArgs<ExtArgs>
  }, ExtArgs["result"]["project_linkedin_partners"]>

  export type project_linkedin_partnersSelectScalar = {
    id?: boolean
    project_id?: boolean
    url?: boolean
  }

  export type project_linkedin_partnersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "project_id" | "url", ExtArgs["result"]["project_linkedin_partners"]>
  export type project_linkedin_partnersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projects?: boolean | project_linkedin_partners$projectsArgs<ExtArgs>
  }
  export type project_linkedin_partnersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projects?: boolean | project_linkedin_partners$projectsArgs<ExtArgs>
  }
  export type project_linkedin_partnersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projects?: boolean | project_linkedin_partners$projectsArgs<ExtArgs>
  }

  export type $project_linkedin_partnersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "project_linkedin_partners"
    objects: {
      projects: Prisma.$projectsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      project_id: number | null
      url: string | null
    }, ExtArgs["result"]["project_linkedin_partners"]>
    composites: {}
  }

  type project_linkedin_partnersGetPayload<S extends boolean | null | undefined | project_linkedin_partnersDefaultArgs> = $Result.GetResult<Prisma.$project_linkedin_partnersPayload, S>

  type project_linkedin_partnersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<project_linkedin_partnersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Project_linkedin_partnersCountAggregateInputType | true
    }

  export interface project_linkedin_partnersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['project_linkedin_partners'], meta: { name: 'project_linkedin_partners' } }
    /**
     * Find zero or one Project_linkedin_partners that matches the filter.
     * @param {project_linkedin_partnersFindUniqueArgs} args - Arguments to find a Project_linkedin_partners
     * @example
     * // Get one Project_linkedin_partners
     * const project_linkedin_partners = await prisma.project_linkedin_partners.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends project_linkedin_partnersFindUniqueArgs>(args: SelectSubset<T, project_linkedin_partnersFindUniqueArgs<ExtArgs>>): Prisma__project_linkedin_partnersClient<$Result.GetResult<Prisma.$project_linkedin_partnersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Project_linkedin_partners that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {project_linkedin_partnersFindUniqueOrThrowArgs} args - Arguments to find a Project_linkedin_partners
     * @example
     * // Get one Project_linkedin_partners
     * const project_linkedin_partners = await prisma.project_linkedin_partners.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends project_linkedin_partnersFindUniqueOrThrowArgs>(args: SelectSubset<T, project_linkedin_partnersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__project_linkedin_partnersClient<$Result.GetResult<Prisma.$project_linkedin_partnersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project_linkedin_partners that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {project_linkedin_partnersFindFirstArgs} args - Arguments to find a Project_linkedin_partners
     * @example
     * // Get one Project_linkedin_partners
     * const project_linkedin_partners = await prisma.project_linkedin_partners.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends project_linkedin_partnersFindFirstArgs>(args?: SelectSubset<T, project_linkedin_partnersFindFirstArgs<ExtArgs>>): Prisma__project_linkedin_partnersClient<$Result.GetResult<Prisma.$project_linkedin_partnersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project_linkedin_partners that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {project_linkedin_partnersFindFirstOrThrowArgs} args - Arguments to find a Project_linkedin_partners
     * @example
     * // Get one Project_linkedin_partners
     * const project_linkedin_partners = await prisma.project_linkedin_partners.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends project_linkedin_partnersFindFirstOrThrowArgs>(args?: SelectSubset<T, project_linkedin_partnersFindFirstOrThrowArgs<ExtArgs>>): Prisma__project_linkedin_partnersClient<$Result.GetResult<Prisma.$project_linkedin_partnersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Project_linkedin_partners that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {project_linkedin_partnersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Project_linkedin_partners
     * const project_linkedin_partners = await prisma.project_linkedin_partners.findMany()
     * 
     * // Get first 10 Project_linkedin_partners
     * const project_linkedin_partners = await prisma.project_linkedin_partners.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const project_linkedin_partnersWithIdOnly = await prisma.project_linkedin_partners.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends project_linkedin_partnersFindManyArgs>(args?: SelectSubset<T, project_linkedin_partnersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$project_linkedin_partnersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Project_linkedin_partners.
     * @param {project_linkedin_partnersCreateArgs} args - Arguments to create a Project_linkedin_partners.
     * @example
     * // Create one Project_linkedin_partners
     * const Project_linkedin_partners = await prisma.project_linkedin_partners.create({
     *   data: {
     *     // ... data to create a Project_linkedin_partners
     *   }
     * })
     * 
     */
    create<T extends project_linkedin_partnersCreateArgs>(args: SelectSubset<T, project_linkedin_partnersCreateArgs<ExtArgs>>): Prisma__project_linkedin_partnersClient<$Result.GetResult<Prisma.$project_linkedin_partnersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Project_linkedin_partners.
     * @param {project_linkedin_partnersCreateManyArgs} args - Arguments to create many Project_linkedin_partners.
     * @example
     * // Create many Project_linkedin_partners
     * const project_linkedin_partners = await prisma.project_linkedin_partners.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends project_linkedin_partnersCreateManyArgs>(args?: SelectSubset<T, project_linkedin_partnersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Project_linkedin_partners and returns the data saved in the database.
     * @param {project_linkedin_partnersCreateManyAndReturnArgs} args - Arguments to create many Project_linkedin_partners.
     * @example
     * // Create many Project_linkedin_partners
     * const project_linkedin_partners = await prisma.project_linkedin_partners.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Project_linkedin_partners and only return the `id`
     * const project_linkedin_partnersWithIdOnly = await prisma.project_linkedin_partners.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends project_linkedin_partnersCreateManyAndReturnArgs>(args?: SelectSubset<T, project_linkedin_partnersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$project_linkedin_partnersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Project_linkedin_partners.
     * @param {project_linkedin_partnersDeleteArgs} args - Arguments to delete one Project_linkedin_partners.
     * @example
     * // Delete one Project_linkedin_partners
     * const Project_linkedin_partners = await prisma.project_linkedin_partners.delete({
     *   where: {
     *     // ... filter to delete one Project_linkedin_partners
     *   }
     * })
     * 
     */
    delete<T extends project_linkedin_partnersDeleteArgs>(args: SelectSubset<T, project_linkedin_partnersDeleteArgs<ExtArgs>>): Prisma__project_linkedin_partnersClient<$Result.GetResult<Prisma.$project_linkedin_partnersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Project_linkedin_partners.
     * @param {project_linkedin_partnersUpdateArgs} args - Arguments to update one Project_linkedin_partners.
     * @example
     * // Update one Project_linkedin_partners
     * const project_linkedin_partners = await prisma.project_linkedin_partners.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends project_linkedin_partnersUpdateArgs>(args: SelectSubset<T, project_linkedin_partnersUpdateArgs<ExtArgs>>): Prisma__project_linkedin_partnersClient<$Result.GetResult<Prisma.$project_linkedin_partnersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Project_linkedin_partners.
     * @param {project_linkedin_partnersDeleteManyArgs} args - Arguments to filter Project_linkedin_partners to delete.
     * @example
     * // Delete a few Project_linkedin_partners
     * const { count } = await prisma.project_linkedin_partners.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends project_linkedin_partnersDeleteManyArgs>(args?: SelectSubset<T, project_linkedin_partnersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Project_linkedin_partners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {project_linkedin_partnersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Project_linkedin_partners
     * const project_linkedin_partners = await prisma.project_linkedin_partners.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends project_linkedin_partnersUpdateManyArgs>(args: SelectSubset<T, project_linkedin_partnersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Project_linkedin_partners and returns the data updated in the database.
     * @param {project_linkedin_partnersUpdateManyAndReturnArgs} args - Arguments to update many Project_linkedin_partners.
     * @example
     * // Update many Project_linkedin_partners
     * const project_linkedin_partners = await prisma.project_linkedin_partners.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Project_linkedin_partners and only return the `id`
     * const project_linkedin_partnersWithIdOnly = await prisma.project_linkedin_partners.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends project_linkedin_partnersUpdateManyAndReturnArgs>(args: SelectSubset<T, project_linkedin_partnersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$project_linkedin_partnersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Project_linkedin_partners.
     * @param {project_linkedin_partnersUpsertArgs} args - Arguments to update or create a Project_linkedin_partners.
     * @example
     * // Update or create a Project_linkedin_partners
     * const project_linkedin_partners = await prisma.project_linkedin_partners.upsert({
     *   create: {
     *     // ... data to create a Project_linkedin_partners
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Project_linkedin_partners we want to update
     *   }
     * })
     */
    upsert<T extends project_linkedin_partnersUpsertArgs>(args: SelectSubset<T, project_linkedin_partnersUpsertArgs<ExtArgs>>): Prisma__project_linkedin_partnersClient<$Result.GetResult<Prisma.$project_linkedin_partnersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Project_linkedin_partners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {project_linkedin_partnersCountArgs} args - Arguments to filter Project_linkedin_partners to count.
     * @example
     * // Count the number of Project_linkedin_partners
     * const count = await prisma.project_linkedin_partners.count({
     *   where: {
     *     // ... the filter for the Project_linkedin_partners we want to count
     *   }
     * })
    **/
    count<T extends project_linkedin_partnersCountArgs>(
      args?: Subset<T, project_linkedin_partnersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Project_linkedin_partnersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Project_linkedin_partners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Project_linkedin_partnersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Project_linkedin_partnersAggregateArgs>(args: Subset<T, Project_linkedin_partnersAggregateArgs>): Prisma.PrismaPromise<GetProject_linkedin_partnersAggregateType<T>>

    /**
     * Group by Project_linkedin_partners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {project_linkedin_partnersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends project_linkedin_partnersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: project_linkedin_partnersGroupByArgs['orderBy'] }
        : { orderBy?: project_linkedin_partnersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, project_linkedin_partnersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProject_linkedin_partnersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the project_linkedin_partners model
   */
  readonly fields: project_linkedin_partnersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for project_linkedin_partners.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__project_linkedin_partnersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    projects<T extends project_linkedin_partners$projectsArgs<ExtArgs> = {}>(args?: Subset<T, project_linkedin_partners$projectsArgs<ExtArgs>>): Prisma__projectsClient<$Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the project_linkedin_partners model
   */
  interface project_linkedin_partnersFieldRefs {
    readonly id: FieldRef<"project_linkedin_partners", 'Int'>
    readonly project_id: FieldRef<"project_linkedin_partners", 'Int'>
    readonly url: FieldRef<"project_linkedin_partners", 'String'>
  }
    

  // Custom InputTypes
  /**
   * project_linkedin_partners findUnique
   */
  export type project_linkedin_partnersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project_linkedin_partners
     */
    select?: project_linkedin_partnersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project_linkedin_partners
     */
    omit?: project_linkedin_partnersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: project_linkedin_partnersInclude<ExtArgs> | null
    /**
     * Filter, which project_linkedin_partners to fetch.
     */
    where: project_linkedin_partnersWhereUniqueInput
  }

  /**
   * project_linkedin_partners findUniqueOrThrow
   */
  export type project_linkedin_partnersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project_linkedin_partners
     */
    select?: project_linkedin_partnersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project_linkedin_partners
     */
    omit?: project_linkedin_partnersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: project_linkedin_partnersInclude<ExtArgs> | null
    /**
     * Filter, which project_linkedin_partners to fetch.
     */
    where: project_linkedin_partnersWhereUniqueInput
  }

  /**
   * project_linkedin_partners findFirst
   */
  export type project_linkedin_partnersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project_linkedin_partners
     */
    select?: project_linkedin_partnersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project_linkedin_partners
     */
    omit?: project_linkedin_partnersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: project_linkedin_partnersInclude<ExtArgs> | null
    /**
     * Filter, which project_linkedin_partners to fetch.
     */
    where?: project_linkedin_partnersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of project_linkedin_partners to fetch.
     */
    orderBy?: project_linkedin_partnersOrderByWithRelationInput | project_linkedin_partnersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for project_linkedin_partners.
     */
    cursor?: project_linkedin_partnersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` project_linkedin_partners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` project_linkedin_partners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of project_linkedin_partners.
     */
    distinct?: Project_linkedin_partnersScalarFieldEnum | Project_linkedin_partnersScalarFieldEnum[]
  }

  /**
   * project_linkedin_partners findFirstOrThrow
   */
  export type project_linkedin_partnersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project_linkedin_partners
     */
    select?: project_linkedin_partnersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project_linkedin_partners
     */
    omit?: project_linkedin_partnersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: project_linkedin_partnersInclude<ExtArgs> | null
    /**
     * Filter, which project_linkedin_partners to fetch.
     */
    where?: project_linkedin_partnersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of project_linkedin_partners to fetch.
     */
    orderBy?: project_linkedin_partnersOrderByWithRelationInput | project_linkedin_partnersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for project_linkedin_partners.
     */
    cursor?: project_linkedin_partnersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` project_linkedin_partners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` project_linkedin_partners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of project_linkedin_partners.
     */
    distinct?: Project_linkedin_partnersScalarFieldEnum | Project_linkedin_partnersScalarFieldEnum[]
  }

  /**
   * project_linkedin_partners findMany
   */
  export type project_linkedin_partnersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project_linkedin_partners
     */
    select?: project_linkedin_partnersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project_linkedin_partners
     */
    omit?: project_linkedin_partnersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: project_linkedin_partnersInclude<ExtArgs> | null
    /**
     * Filter, which project_linkedin_partners to fetch.
     */
    where?: project_linkedin_partnersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of project_linkedin_partners to fetch.
     */
    orderBy?: project_linkedin_partnersOrderByWithRelationInput | project_linkedin_partnersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing project_linkedin_partners.
     */
    cursor?: project_linkedin_partnersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` project_linkedin_partners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` project_linkedin_partners.
     */
    skip?: number
    distinct?: Project_linkedin_partnersScalarFieldEnum | Project_linkedin_partnersScalarFieldEnum[]
  }

  /**
   * project_linkedin_partners create
   */
  export type project_linkedin_partnersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project_linkedin_partners
     */
    select?: project_linkedin_partnersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project_linkedin_partners
     */
    omit?: project_linkedin_partnersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: project_linkedin_partnersInclude<ExtArgs> | null
    /**
     * The data needed to create a project_linkedin_partners.
     */
    data?: XOR<project_linkedin_partnersCreateInput, project_linkedin_partnersUncheckedCreateInput>
  }

  /**
   * project_linkedin_partners createMany
   */
  export type project_linkedin_partnersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many project_linkedin_partners.
     */
    data: project_linkedin_partnersCreateManyInput | project_linkedin_partnersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * project_linkedin_partners createManyAndReturn
   */
  export type project_linkedin_partnersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project_linkedin_partners
     */
    select?: project_linkedin_partnersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the project_linkedin_partners
     */
    omit?: project_linkedin_partnersOmit<ExtArgs> | null
    /**
     * The data used to create many project_linkedin_partners.
     */
    data: project_linkedin_partnersCreateManyInput | project_linkedin_partnersCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: project_linkedin_partnersIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * project_linkedin_partners update
   */
  export type project_linkedin_partnersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project_linkedin_partners
     */
    select?: project_linkedin_partnersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project_linkedin_partners
     */
    omit?: project_linkedin_partnersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: project_linkedin_partnersInclude<ExtArgs> | null
    /**
     * The data needed to update a project_linkedin_partners.
     */
    data: XOR<project_linkedin_partnersUpdateInput, project_linkedin_partnersUncheckedUpdateInput>
    /**
     * Choose, which project_linkedin_partners to update.
     */
    where: project_linkedin_partnersWhereUniqueInput
  }

  /**
   * project_linkedin_partners updateMany
   */
  export type project_linkedin_partnersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update project_linkedin_partners.
     */
    data: XOR<project_linkedin_partnersUpdateManyMutationInput, project_linkedin_partnersUncheckedUpdateManyInput>
    /**
     * Filter which project_linkedin_partners to update
     */
    where?: project_linkedin_partnersWhereInput
    /**
     * Limit how many project_linkedin_partners to update.
     */
    limit?: number
  }

  /**
   * project_linkedin_partners updateManyAndReturn
   */
  export type project_linkedin_partnersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project_linkedin_partners
     */
    select?: project_linkedin_partnersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the project_linkedin_partners
     */
    omit?: project_linkedin_partnersOmit<ExtArgs> | null
    /**
     * The data used to update project_linkedin_partners.
     */
    data: XOR<project_linkedin_partnersUpdateManyMutationInput, project_linkedin_partnersUncheckedUpdateManyInput>
    /**
     * Filter which project_linkedin_partners to update
     */
    where?: project_linkedin_partnersWhereInput
    /**
     * Limit how many project_linkedin_partners to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: project_linkedin_partnersIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * project_linkedin_partners upsert
   */
  export type project_linkedin_partnersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project_linkedin_partners
     */
    select?: project_linkedin_partnersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project_linkedin_partners
     */
    omit?: project_linkedin_partnersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: project_linkedin_partnersInclude<ExtArgs> | null
    /**
     * The filter to search for the project_linkedin_partners to update in case it exists.
     */
    where: project_linkedin_partnersWhereUniqueInput
    /**
     * In case the project_linkedin_partners found by the `where` argument doesn't exist, create a new project_linkedin_partners with this data.
     */
    create: XOR<project_linkedin_partnersCreateInput, project_linkedin_partnersUncheckedCreateInput>
    /**
     * In case the project_linkedin_partners was found with the provided `where` argument, update it with this data.
     */
    update: XOR<project_linkedin_partnersUpdateInput, project_linkedin_partnersUncheckedUpdateInput>
  }

  /**
   * project_linkedin_partners delete
   */
  export type project_linkedin_partnersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project_linkedin_partners
     */
    select?: project_linkedin_partnersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project_linkedin_partners
     */
    omit?: project_linkedin_partnersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: project_linkedin_partnersInclude<ExtArgs> | null
    /**
     * Filter which project_linkedin_partners to delete.
     */
    where: project_linkedin_partnersWhereUniqueInput
  }

  /**
   * project_linkedin_partners deleteMany
   */
  export type project_linkedin_partnersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which project_linkedin_partners to delete
     */
    where?: project_linkedin_partnersWhereInput
    /**
     * Limit how many project_linkedin_partners to delete.
     */
    limit?: number
  }

  /**
   * project_linkedin_partners.projects
   */
  export type project_linkedin_partners$projectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projects
     */
    omit?: projectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectsInclude<ExtArgs> | null
    where?: projectsWhereInput
  }

  /**
   * project_linkedin_partners without action
   */
  export type project_linkedin_partnersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project_linkedin_partners
     */
    select?: project_linkedin_partnersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project_linkedin_partners
     */
    omit?: project_linkedin_partnersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: project_linkedin_partnersInclude<ExtArgs> | null
  }


  /**
   * Model project_linkedin_teams
   */

  export type AggregateProject_linkedin_teams = {
    _count: Project_linkedin_teamsCountAggregateOutputType | null
    _avg: Project_linkedin_teamsAvgAggregateOutputType | null
    _sum: Project_linkedin_teamsSumAggregateOutputType | null
    _min: Project_linkedin_teamsMinAggregateOutputType | null
    _max: Project_linkedin_teamsMaxAggregateOutputType | null
  }

  export type Project_linkedin_teamsAvgAggregateOutputType = {
    id: number | null
    project_id: number | null
  }

  export type Project_linkedin_teamsSumAggregateOutputType = {
    id: number | null
    project_id: number | null
  }

  export type Project_linkedin_teamsMinAggregateOutputType = {
    id: number | null
    project_id: number | null
    url: string | null
  }

  export type Project_linkedin_teamsMaxAggregateOutputType = {
    id: number | null
    project_id: number | null
    url: string | null
  }

  export type Project_linkedin_teamsCountAggregateOutputType = {
    id: number
    project_id: number
    url: number
    _all: number
  }


  export type Project_linkedin_teamsAvgAggregateInputType = {
    id?: true
    project_id?: true
  }

  export type Project_linkedin_teamsSumAggregateInputType = {
    id?: true
    project_id?: true
  }

  export type Project_linkedin_teamsMinAggregateInputType = {
    id?: true
    project_id?: true
    url?: true
  }

  export type Project_linkedin_teamsMaxAggregateInputType = {
    id?: true
    project_id?: true
    url?: true
  }

  export type Project_linkedin_teamsCountAggregateInputType = {
    id?: true
    project_id?: true
    url?: true
    _all?: true
  }

  export type Project_linkedin_teamsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which project_linkedin_teams to aggregate.
     */
    where?: project_linkedin_teamsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of project_linkedin_teams to fetch.
     */
    orderBy?: project_linkedin_teamsOrderByWithRelationInput | project_linkedin_teamsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: project_linkedin_teamsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` project_linkedin_teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` project_linkedin_teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned project_linkedin_teams
    **/
    _count?: true | Project_linkedin_teamsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Project_linkedin_teamsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Project_linkedin_teamsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Project_linkedin_teamsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Project_linkedin_teamsMaxAggregateInputType
  }

  export type GetProject_linkedin_teamsAggregateType<T extends Project_linkedin_teamsAggregateArgs> = {
        [P in keyof T & keyof AggregateProject_linkedin_teams]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProject_linkedin_teams[P]>
      : GetScalarType<T[P], AggregateProject_linkedin_teams[P]>
  }




  export type project_linkedin_teamsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: project_linkedin_teamsWhereInput
    orderBy?: project_linkedin_teamsOrderByWithAggregationInput | project_linkedin_teamsOrderByWithAggregationInput[]
    by: Project_linkedin_teamsScalarFieldEnum[] | Project_linkedin_teamsScalarFieldEnum
    having?: project_linkedin_teamsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Project_linkedin_teamsCountAggregateInputType | true
    _avg?: Project_linkedin_teamsAvgAggregateInputType
    _sum?: Project_linkedin_teamsSumAggregateInputType
    _min?: Project_linkedin_teamsMinAggregateInputType
    _max?: Project_linkedin_teamsMaxAggregateInputType
  }

  export type Project_linkedin_teamsGroupByOutputType = {
    id: number
    project_id: number | null
    url: string | null
    _count: Project_linkedin_teamsCountAggregateOutputType | null
    _avg: Project_linkedin_teamsAvgAggregateOutputType | null
    _sum: Project_linkedin_teamsSumAggregateOutputType | null
    _min: Project_linkedin_teamsMinAggregateOutputType | null
    _max: Project_linkedin_teamsMaxAggregateOutputType | null
  }

  type GetProject_linkedin_teamsGroupByPayload<T extends project_linkedin_teamsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Project_linkedin_teamsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Project_linkedin_teamsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Project_linkedin_teamsGroupByOutputType[P]>
            : GetScalarType<T[P], Project_linkedin_teamsGroupByOutputType[P]>
        }
      >
    >


  export type project_linkedin_teamsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    project_id?: boolean
    url?: boolean
    projects?: boolean | project_linkedin_teams$projectsArgs<ExtArgs>
  }, ExtArgs["result"]["project_linkedin_teams"]>

  export type project_linkedin_teamsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    project_id?: boolean
    url?: boolean
    projects?: boolean | project_linkedin_teams$projectsArgs<ExtArgs>
  }, ExtArgs["result"]["project_linkedin_teams"]>

  export type project_linkedin_teamsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    project_id?: boolean
    url?: boolean
    projects?: boolean | project_linkedin_teams$projectsArgs<ExtArgs>
  }, ExtArgs["result"]["project_linkedin_teams"]>

  export type project_linkedin_teamsSelectScalar = {
    id?: boolean
    project_id?: boolean
    url?: boolean
  }

  export type project_linkedin_teamsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "project_id" | "url", ExtArgs["result"]["project_linkedin_teams"]>
  export type project_linkedin_teamsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projects?: boolean | project_linkedin_teams$projectsArgs<ExtArgs>
  }
  export type project_linkedin_teamsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projects?: boolean | project_linkedin_teams$projectsArgs<ExtArgs>
  }
  export type project_linkedin_teamsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projects?: boolean | project_linkedin_teams$projectsArgs<ExtArgs>
  }

  export type $project_linkedin_teamsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "project_linkedin_teams"
    objects: {
      projects: Prisma.$projectsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      project_id: number | null
      url: string | null
    }, ExtArgs["result"]["project_linkedin_teams"]>
    composites: {}
  }

  type project_linkedin_teamsGetPayload<S extends boolean | null | undefined | project_linkedin_teamsDefaultArgs> = $Result.GetResult<Prisma.$project_linkedin_teamsPayload, S>

  type project_linkedin_teamsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<project_linkedin_teamsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Project_linkedin_teamsCountAggregateInputType | true
    }

  export interface project_linkedin_teamsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['project_linkedin_teams'], meta: { name: 'project_linkedin_teams' } }
    /**
     * Find zero or one Project_linkedin_teams that matches the filter.
     * @param {project_linkedin_teamsFindUniqueArgs} args - Arguments to find a Project_linkedin_teams
     * @example
     * // Get one Project_linkedin_teams
     * const project_linkedin_teams = await prisma.project_linkedin_teams.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends project_linkedin_teamsFindUniqueArgs>(args: SelectSubset<T, project_linkedin_teamsFindUniqueArgs<ExtArgs>>): Prisma__project_linkedin_teamsClient<$Result.GetResult<Prisma.$project_linkedin_teamsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Project_linkedin_teams that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {project_linkedin_teamsFindUniqueOrThrowArgs} args - Arguments to find a Project_linkedin_teams
     * @example
     * // Get one Project_linkedin_teams
     * const project_linkedin_teams = await prisma.project_linkedin_teams.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends project_linkedin_teamsFindUniqueOrThrowArgs>(args: SelectSubset<T, project_linkedin_teamsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__project_linkedin_teamsClient<$Result.GetResult<Prisma.$project_linkedin_teamsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project_linkedin_teams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {project_linkedin_teamsFindFirstArgs} args - Arguments to find a Project_linkedin_teams
     * @example
     * // Get one Project_linkedin_teams
     * const project_linkedin_teams = await prisma.project_linkedin_teams.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends project_linkedin_teamsFindFirstArgs>(args?: SelectSubset<T, project_linkedin_teamsFindFirstArgs<ExtArgs>>): Prisma__project_linkedin_teamsClient<$Result.GetResult<Prisma.$project_linkedin_teamsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project_linkedin_teams that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {project_linkedin_teamsFindFirstOrThrowArgs} args - Arguments to find a Project_linkedin_teams
     * @example
     * // Get one Project_linkedin_teams
     * const project_linkedin_teams = await prisma.project_linkedin_teams.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends project_linkedin_teamsFindFirstOrThrowArgs>(args?: SelectSubset<T, project_linkedin_teamsFindFirstOrThrowArgs<ExtArgs>>): Prisma__project_linkedin_teamsClient<$Result.GetResult<Prisma.$project_linkedin_teamsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Project_linkedin_teams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {project_linkedin_teamsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Project_linkedin_teams
     * const project_linkedin_teams = await prisma.project_linkedin_teams.findMany()
     * 
     * // Get first 10 Project_linkedin_teams
     * const project_linkedin_teams = await prisma.project_linkedin_teams.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const project_linkedin_teamsWithIdOnly = await prisma.project_linkedin_teams.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends project_linkedin_teamsFindManyArgs>(args?: SelectSubset<T, project_linkedin_teamsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$project_linkedin_teamsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Project_linkedin_teams.
     * @param {project_linkedin_teamsCreateArgs} args - Arguments to create a Project_linkedin_teams.
     * @example
     * // Create one Project_linkedin_teams
     * const Project_linkedin_teams = await prisma.project_linkedin_teams.create({
     *   data: {
     *     // ... data to create a Project_linkedin_teams
     *   }
     * })
     * 
     */
    create<T extends project_linkedin_teamsCreateArgs>(args: SelectSubset<T, project_linkedin_teamsCreateArgs<ExtArgs>>): Prisma__project_linkedin_teamsClient<$Result.GetResult<Prisma.$project_linkedin_teamsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Project_linkedin_teams.
     * @param {project_linkedin_teamsCreateManyArgs} args - Arguments to create many Project_linkedin_teams.
     * @example
     * // Create many Project_linkedin_teams
     * const project_linkedin_teams = await prisma.project_linkedin_teams.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends project_linkedin_teamsCreateManyArgs>(args?: SelectSubset<T, project_linkedin_teamsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Project_linkedin_teams and returns the data saved in the database.
     * @param {project_linkedin_teamsCreateManyAndReturnArgs} args - Arguments to create many Project_linkedin_teams.
     * @example
     * // Create many Project_linkedin_teams
     * const project_linkedin_teams = await prisma.project_linkedin_teams.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Project_linkedin_teams and only return the `id`
     * const project_linkedin_teamsWithIdOnly = await prisma.project_linkedin_teams.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends project_linkedin_teamsCreateManyAndReturnArgs>(args?: SelectSubset<T, project_linkedin_teamsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$project_linkedin_teamsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Project_linkedin_teams.
     * @param {project_linkedin_teamsDeleteArgs} args - Arguments to delete one Project_linkedin_teams.
     * @example
     * // Delete one Project_linkedin_teams
     * const Project_linkedin_teams = await prisma.project_linkedin_teams.delete({
     *   where: {
     *     // ... filter to delete one Project_linkedin_teams
     *   }
     * })
     * 
     */
    delete<T extends project_linkedin_teamsDeleteArgs>(args: SelectSubset<T, project_linkedin_teamsDeleteArgs<ExtArgs>>): Prisma__project_linkedin_teamsClient<$Result.GetResult<Prisma.$project_linkedin_teamsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Project_linkedin_teams.
     * @param {project_linkedin_teamsUpdateArgs} args - Arguments to update one Project_linkedin_teams.
     * @example
     * // Update one Project_linkedin_teams
     * const project_linkedin_teams = await prisma.project_linkedin_teams.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends project_linkedin_teamsUpdateArgs>(args: SelectSubset<T, project_linkedin_teamsUpdateArgs<ExtArgs>>): Prisma__project_linkedin_teamsClient<$Result.GetResult<Prisma.$project_linkedin_teamsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Project_linkedin_teams.
     * @param {project_linkedin_teamsDeleteManyArgs} args - Arguments to filter Project_linkedin_teams to delete.
     * @example
     * // Delete a few Project_linkedin_teams
     * const { count } = await prisma.project_linkedin_teams.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends project_linkedin_teamsDeleteManyArgs>(args?: SelectSubset<T, project_linkedin_teamsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Project_linkedin_teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {project_linkedin_teamsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Project_linkedin_teams
     * const project_linkedin_teams = await prisma.project_linkedin_teams.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends project_linkedin_teamsUpdateManyArgs>(args: SelectSubset<T, project_linkedin_teamsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Project_linkedin_teams and returns the data updated in the database.
     * @param {project_linkedin_teamsUpdateManyAndReturnArgs} args - Arguments to update many Project_linkedin_teams.
     * @example
     * // Update many Project_linkedin_teams
     * const project_linkedin_teams = await prisma.project_linkedin_teams.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Project_linkedin_teams and only return the `id`
     * const project_linkedin_teamsWithIdOnly = await prisma.project_linkedin_teams.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends project_linkedin_teamsUpdateManyAndReturnArgs>(args: SelectSubset<T, project_linkedin_teamsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$project_linkedin_teamsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Project_linkedin_teams.
     * @param {project_linkedin_teamsUpsertArgs} args - Arguments to update or create a Project_linkedin_teams.
     * @example
     * // Update or create a Project_linkedin_teams
     * const project_linkedin_teams = await prisma.project_linkedin_teams.upsert({
     *   create: {
     *     // ... data to create a Project_linkedin_teams
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Project_linkedin_teams we want to update
     *   }
     * })
     */
    upsert<T extends project_linkedin_teamsUpsertArgs>(args: SelectSubset<T, project_linkedin_teamsUpsertArgs<ExtArgs>>): Prisma__project_linkedin_teamsClient<$Result.GetResult<Prisma.$project_linkedin_teamsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Project_linkedin_teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {project_linkedin_teamsCountArgs} args - Arguments to filter Project_linkedin_teams to count.
     * @example
     * // Count the number of Project_linkedin_teams
     * const count = await prisma.project_linkedin_teams.count({
     *   where: {
     *     // ... the filter for the Project_linkedin_teams we want to count
     *   }
     * })
    **/
    count<T extends project_linkedin_teamsCountArgs>(
      args?: Subset<T, project_linkedin_teamsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Project_linkedin_teamsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Project_linkedin_teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Project_linkedin_teamsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Project_linkedin_teamsAggregateArgs>(args: Subset<T, Project_linkedin_teamsAggregateArgs>): Prisma.PrismaPromise<GetProject_linkedin_teamsAggregateType<T>>

    /**
     * Group by Project_linkedin_teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {project_linkedin_teamsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends project_linkedin_teamsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: project_linkedin_teamsGroupByArgs['orderBy'] }
        : { orderBy?: project_linkedin_teamsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, project_linkedin_teamsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProject_linkedin_teamsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the project_linkedin_teams model
   */
  readonly fields: project_linkedin_teamsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for project_linkedin_teams.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__project_linkedin_teamsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    projects<T extends project_linkedin_teams$projectsArgs<ExtArgs> = {}>(args?: Subset<T, project_linkedin_teams$projectsArgs<ExtArgs>>): Prisma__projectsClient<$Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the project_linkedin_teams model
   */
  interface project_linkedin_teamsFieldRefs {
    readonly id: FieldRef<"project_linkedin_teams", 'Int'>
    readonly project_id: FieldRef<"project_linkedin_teams", 'Int'>
    readonly url: FieldRef<"project_linkedin_teams", 'String'>
  }
    

  // Custom InputTypes
  /**
   * project_linkedin_teams findUnique
   */
  export type project_linkedin_teamsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project_linkedin_teams
     */
    select?: project_linkedin_teamsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project_linkedin_teams
     */
    omit?: project_linkedin_teamsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: project_linkedin_teamsInclude<ExtArgs> | null
    /**
     * Filter, which project_linkedin_teams to fetch.
     */
    where: project_linkedin_teamsWhereUniqueInput
  }

  /**
   * project_linkedin_teams findUniqueOrThrow
   */
  export type project_linkedin_teamsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project_linkedin_teams
     */
    select?: project_linkedin_teamsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project_linkedin_teams
     */
    omit?: project_linkedin_teamsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: project_linkedin_teamsInclude<ExtArgs> | null
    /**
     * Filter, which project_linkedin_teams to fetch.
     */
    where: project_linkedin_teamsWhereUniqueInput
  }

  /**
   * project_linkedin_teams findFirst
   */
  export type project_linkedin_teamsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project_linkedin_teams
     */
    select?: project_linkedin_teamsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project_linkedin_teams
     */
    omit?: project_linkedin_teamsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: project_linkedin_teamsInclude<ExtArgs> | null
    /**
     * Filter, which project_linkedin_teams to fetch.
     */
    where?: project_linkedin_teamsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of project_linkedin_teams to fetch.
     */
    orderBy?: project_linkedin_teamsOrderByWithRelationInput | project_linkedin_teamsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for project_linkedin_teams.
     */
    cursor?: project_linkedin_teamsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` project_linkedin_teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` project_linkedin_teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of project_linkedin_teams.
     */
    distinct?: Project_linkedin_teamsScalarFieldEnum | Project_linkedin_teamsScalarFieldEnum[]
  }

  /**
   * project_linkedin_teams findFirstOrThrow
   */
  export type project_linkedin_teamsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project_linkedin_teams
     */
    select?: project_linkedin_teamsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project_linkedin_teams
     */
    omit?: project_linkedin_teamsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: project_linkedin_teamsInclude<ExtArgs> | null
    /**
     * Filter, which project_linkedin_teams to fetch.
     */
    where?: project_linkedin_teamsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of project_linkedin_teams to fetch.
     */
    orderBy?: project_linkedin_teamsOrderByWithRelationInput | project_linkedin_teamsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for project_linkedin_teams.
     */
    cursor?: project_linkedin_teamsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` project_linkedin_teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` project_linkedin_teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of project_linkedin_teams.
     */
    distinct?: Project_linkedin_teamsScalarFieldEnum | Project_linkedin_teamsScalarFieldEnum[]
  }

  /**
   * project_linkedin_teams findMany
   */
  export type project_linkedin_teamsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project_linkedin_teams
     */
    select?: project_linkedin_teamsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project_linkedin_teams
     */
    omit?: project_linkedin_teamsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: project_linkedin_teamsInclude<ExtArgs> | null
    /**
     * Filter, which project_linkedin_teams to fetch.
     */
    where?: project_linkedin_teamsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of project_linkedin_teams to fetch.
     */
    orderBy?: project_linkedin_teamsOrderByWithRelationInput | project_linkedin_teamsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing project_linkedin_teams.
     */
    cursor?: project_linkedin_teamsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` project_linkedin_teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` project_linkedin_teams.
     */
    skip?: number
    distinct?: Project_linkedin_teamsScalarFieldEnum | Project_linkedin_teamsScalarFieldEnum[]
  }

  /**
   * project_linkedin_teams create
   */
  export type project_linkedin_teamsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project_linkedin_teams
     */
    select?: project_linkedin_teamsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project_linkedin_teams
     */
    omit?: project_linkedin_teamsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: project_linkedin_teamsInclude<ExtArgs> | null
    /**
     * The data needed to create a project_linkedin_teams.
     */
    data?: XOR<project_linkedin_teamsCreateInput, project_linkedin_teamsUncheckedCreateInput>
  }

  /**
   * project_linkedin_teams createMany
   */
  export type project_linkedin_teamsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many project_linkedin_teams.
     */
    data: project_linkedin_teamsCreateManyInput | project_linkedin_teamsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * project_linkedin_teams createManyAndReturn
   */
  export type project_linkedin_teamsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project_linkedin_teams
     */
    select?: project_linkedin_teamsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the project_linkedin_teams
     */
    omit?: project_linkedin_teamsOmit<ExtArgs> | null
    /**
     * The data used to create many project_linkedin_teams.
     */
    data: project_linkedin_teamsCreateManyInput | project_linkedin_teamsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: project_linkedin_teamsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * project_linkedin_teams update
   */
  export type project_linkedin_teamsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project_linkedin_teams
     */
    select?: project_linkedin_teamsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project_linkedin_teams
     */
    omit?: project_linkedin_teamsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: project_linkedin_teamsInclude<ExtArgs> | null
    /**
     * The data needed to update a project_linkedin_teams.
     */
    data: XOR<project_linkedin_teamsUpdateInput, project_linkedin_teamsUncheckedUpdateInput>
    /**
     * Choose, which project_linkedin_teams to update.
     */
    where: project_linkedin_teamsWhereUniqueInput
  }

  /**
   * project_linkedin_teams updateMany
   */
  export type project_linkedin_teamsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update project_linkedin_teams.
     */
    data: XOR<project_linkedin_teamsUpdateManyMutationInput, project_linkedin_teamsUncheckedUpdateManyInput>
    /**
     * Filter which project_linkedin_teams to update
     */
    where?: project_linkedin_teamsWhereInput
    /**
     * Limit how many project_linkedin_teams to update.
     */
    limit?: number
  }

  /**
   * project_linkedin_teams updateManyAndReturn
   */
  export type project_linkedin_teamsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project_linkedin_teams
     */
    select?: project_linkedin_teamsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the project_linkedin_teams
     */
    omit?: project_linkedin_teamsOmit<ExtArgs> | null
    /**
     * The data used to update project_linkedin_teams.
     */
    data: XOR<project_linkedin_teamsUpdateManyMutationInput, project_linkedin_teamsUncheckedUpdateManyInput>
    /**
     * Filter which project_linkedin_teams to update
     */
    where?: project_linkedin_teamsWhereInput
    /**
     * Limit how many project_linkedin_teams to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: project_linkedin_teamsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * project_linkedin_teams upsert
   */
  export type project_linkedin_teamsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project_linkedin_teams
     */
    select?: project_linkedin_teamsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project_linkedin_teams
     */
    omit?: project_linkedin_teamsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: project_linkedin_teamsInclude<ExtArgs> | null
    /**
     * The filter to search for the project_linkedin_teams to update in case it exists.
     */
    where: project_linkedin_teamsWhereUniqueInput
    /**
     * In case the project_linkedin_teams found by the `where` argument doesn't exist, create a new project_linkedin_teams with this data.
     */
    create: XOR<project_linkedin_teamsCreateInput, project_linkedin_teamsUncheckedCreateInput>
    /**
     * In case the project_linkedin_teams was found with the provided `where` argument, update it with this data.
     */
    update: XOR<project_linkedin_teamsUpdateInput, project_linkedin_teamsUncheckedUpdateInput>
  }

  /**
   * project_linkedin_teams delete
   */
  export type project_linkedin_teamsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project_linkedin_teams
     */
    select?: project_linkedin_teamsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project_linkedin_teams
     */
    omit?: project_linkedin_teamsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: project_linkedin_teamsInclude<ExtArgs> | null
    /**
     * Filter which project_linkedin_teams to delete.
     */
    where: project_linkedin_teamsWhereUniqueInput
  }

  /**
   * project_linkedin_teams deleteMany
   */
  export type project_linkedin_teamsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which project_linkedin_teams to delete
     */
    where?: project_linkedin_teamsWhereInput
    /**
     * Limit how many project_linkedin_teams to delete.
     */
    limit?: number
  }

  /**
   * project_linkedin_teams.projects
   */
  export type project_linkedin_teams$projectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projects
     */
    omit?: projectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectsInclude<ExtArgs> | null
    where?: projectsWhereInput
  }

  /**
   * project_linkedin_teams without action
   */
  export type project_linkedin_teamsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project_linkedin_teams
     */
    select?: project_linkedin_teamsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project_linkedin_teams
     */
    omit?: project_linkedin_teamsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: project_linkedin_teamsInclude<ExtArgs> | null
  }


  /**
   * Model project_partners
   */

  export type AggregateProject_partners = {
    _count: Project_partnersCountAggregateOutputType | null
    _avg: Project_partnersAvgAggregateOutputType | null
    _sum: Project_partnersSumAggregateOutputType | null
    _min: Project_partnersMinAggregateOutputType | null
    _max: Project_partnersMaxAggregateOutputType | null
  }

  export type Project_partnersAvgAggregateOutputType = {
    id: number | null
    project_id: number | null
  }

  export type Project_partnersSumAggregateOutputType = {
    id: number | null
    project_id: number | null
  }

  export type Project_partnersMinAggregateOutputType = {
    id: number | null
    project_id: number | null
    name: string | null
  }

  export type Project_partnersMaxAggregateOutputType = {
    id: number | null
    project_id: number | null
    name: string | null
  }

  export type Project_partnersCountAggregateOutputType = {
    id: number
    project_id: number
    name: number
    _all: number
  }


  export type Project_partnersAvgAggregateInputType = {
    id?: true
    project_id?: true
  }

  export type Project_partnersSumAggregateInputType = {
    id?: true
    project_id?: true
  }

  export type Project_partnersMinAggregateInputType = {
    id?: true
    project_id?: true
    name?: true
  }

  export type Project_partnersMaxAggregateInputType = {
    id?: true
    project_id?: true
    name?: true
  }

  export type Project_partnersCountAggregateInputType = {
    id?: true
    project_id?: true
    name?: true
    _all?: true
  }

  export type Project_partnersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which project_partners to aggregate.
     */
    where?: project_partnersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of project_partners to fetch.
     */
    orderBy?: project_partnersOrderByWithRelationInput | project_partnersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: project_partnersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` project_partners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` project_partners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned project_partners
    **/
    _count?: true | Project_partnersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Project_partnersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Project_partnersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Project_partnersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Project_partnersMaxAggregateInputType
  }

  export type GetProject_partnersAggregateType<T extends Project_partnersAggregateArgs> = {
        [P in keyof T & keyof AggregateProject_partners]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProject_partners[P]>
      : GetScalarType<T[P], AggregateProject_partners[P]>
  }




  export type project_partnersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: project_partnersWhereInput
    orderBy?: project_partnersOrderByWithAggregationInput | project_partnersOrderByWithAggregationInput[]
    by: Project_partnersScalarFieldEnum[] | Project_partnersScalarFieldEnum
    having?: project_partnersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Project_partnersCountAggregateInputType | true
    _avg?: Project_partnersAvgAggregateInputType
    _sum?: Project_partnersSumAggregateInputType
    _min?: Project_partnersMinAggregateInputType
    _max?: Project_partnersMaxAggregateInputType
  }

  export type Project_partnersGroupByOutputType = {
    id: number
    project_id: number | null
    name: string | null
    _count: Project_partnersCountAggregateOutputType | null
    _avg: Project_partnersAvgAggregateOutputType | null
    _sum: Project_partnersSumAggregateOutputType | null
    _min: Project_partnersMinAggregateOutputType | null
    _max: Project_partnersMaxAggregateOutputType | null
  }

  type GetProject_partnersGroupByPayload<T extends project_partnersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Project_partnersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Project_partnersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Project_partnersGroupByOutputType[P]>
            : GetScalarType<T[P], Project_partnersGroupByOutputType[P]>
        }
      >
    >


  export type project_partnersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    project_id?: boolean
    name?: boolean
    projects?: boolean | project_partners$projectsArgs<ExtArgs>
  }, ExtArgs["result"]["project_partners"]>

  export type project_partnersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    project_id?: boolean
    name?: boolean
    projects?: boolean | project_partners$projectsArgs<ExtArgs>
  }, ExtArgs["result"]["project_partners"]>

  export type project_partnersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    project_id?: boolean
    name?: boolean
    projects?: boolean | project_partners$projectsArgs<ExtArgs>
  }, ExtArgs["result"]["project_partners"]>

  export type project_partnersSelectScalar = {
    id?: boolean
    project_id?: boolean
    name?: boolean
  }

  export type project_partnersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "project_id" | "name", ExtArgs["result"]["project_partners"]>
  export type project_partnersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projects?: boolean | project_partners$projectsArgs<ExtArgs>
  }
  export type project_partnersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projects?: boolean | project_partners$projectsArgs<ExtArgs>
  }
  export type project_partnersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projects?: boolean | project_partners$projectsArgs<ExtArgs>
  }

  export type $project_partnersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "project_partners"
    objects: {
      projects: Prisma.$projectsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      project_id: number | null
      name: string | null
    }, ExtArgs["result"]["project_partners"]>
    composites: {}
  }

  type project_partnersGetPayload<S extends boolean | null | undefined | project_partnersDefaultArgs> = $Result.GetResult<Prisma.$project_partnersPayload, S>

  type project_partnersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<project_partnersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Project_partnersCountAggregateInputType | true
    }

  export interface project_partnersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['project_partners'], meta: { name: 'project_partners' } }
    /**
     * Find zero or one Project_partners that matches the filter.
     * @param {project_partnersFindUniqueArgs} args - Arguments to find a Project_partners
     * @example
     * // Get one Project_partners
     * const project_partners = await prisma.project_partners.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends project_partnersFindUniqueArgs>(args: SelectSubset<T, project_partnersFindUniqueArgs<ExtArgs>>): Prisma__project_partnersClient<$Result.GetResult<Prisma.$project_partnersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Project_partners that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {project_partnersFindUniqueOrThrowArgs} args - Arguments to find a Project_partners
     * @example
     * // Get one Project_partners
     * const project_partners = await prisma.project_partners.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends project_partnersFindUniqueOrThrowArgs>(args: SelectSubset<T, project_partnersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__project_partnersClient<$Result.GetResult<Prisma.$project_partnersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project_partners that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {project_partnersFindFirstArgs} args - Arguments to find a Project_partners
     * @example
     * // Get one Project_partners
     * const project_partners = await prisma.project_partners.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends project_partnersFindFirstArgs>(args?: SelectSubset<T, project_partnersFindFirstArgs<ExtArgs>>): Prisma__project_partnersClient<$Result.GetResult<Prisma.$project_partnersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project_partners that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {project_partnersFindFirstOrThrowArgs} args - Arguments to find a Project_partners
     * @example
     * // Get one Project_partners
     * const project_partners = await prisma.project_partners.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends project_partnersFindFirstOrThrowArgs>(args?: SelectSubset<T, project_partnersFindFirstOrThrowArgs<ExtArgs>>): Prisma__project_partnersClient<$Result.GetResult<Prisma.$project_partnersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Project_partners that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {project_partnersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Project_partners
     * const project_partners = await prisma.project_partners.findMany()
     * 
     * // Get first 10 Project_partners
     * const project_partners = await prisma.project_partners.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const project_partnersWithIdOnly = await prisma.project_partners.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends project_partnersFindManyArgs>(args?: SelectSubset<T, project_partnersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$project_partnersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Project_partners.
     * @param {project_partnersCreateArgs} args - Arguments to create a Project_partners.
     * @example
     * // Create one Project_partners
     * const Project_partners = await prisma.project_partners.create({
     *   data: {
     *     // ... data to create a Project_partners
     *   }
     * })
     * 
     */
    create<T extends project_partnersCreateArgs>(args: SelectSubset<T, project_partnersCreateArgs<ExtArgs>>): Prisma__project_partnersClient<$Result.GetResult<Prisma.$project_partnersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Project_partners.
     * @param {project_partnersCreateManyArgs} args - Arguments to create many Project_partners.
     * @example
     * // Create many Project_partners
     * const project_partners = await prisma.project_partners.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends project_partnersCreateManyArgs>(args?: SelectSubset<T, project_partnersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Project_partners and returns the data saved in the database.
     * @param {project_partnersCreateManyAndReturnArgs} args - Arguments to create many Project_partners.
     * @example
     * // Create many Project_partners
     * const project_partners = await prisma.project_partners.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Project_partners and only return the `id`
     * const project_partnersWithIdOnly = await prisma.project_partners.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends project_partnersCreateManyAndReturnArgs>(args?: SelectSubset<T, project_partnersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$project_partnersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Project_partners.
     * @param {project_partnersDeleteArgs} args - Arguments to delete one Project_partners.
     * @example
     * // Delete one Project_partners
     * const Project_partners = await prisma.project_partners.delete({
     *   where: {
     *     // ... filter to delete one Project_partners
     *   }
     * })
     * 
     */
    delete<T extends project_partnersDeleteArgs>(args: SelectSubset<T, project_partnersDeleteArgs<ExtArgs>>): Prisma__project_partnersClient<$Result.GetResult<Prisma.$project_partnersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Project_partners.
     * @param {project_partnersUpdateArgs} args - Arguments to update one Project_partners.
     * @example
     * // Update one Project_partners
     * const project_partners = await prisma.project_partners.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends project_partnersUpdateArgs>(args: SelectSubset<T, project_partnersUpdateArgs<ExtArgs>>): Prisma__project_partnersClient<$Result.GetResult<Prisma.$project_partnersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Project_partners.
     * @param {project_partnersDeleteManyArgs} args - Arguments to filter Project_partners to delete.
     * @example
     * // Delete a few Project_partners
     * const { count } = await prisma.project_partners.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends project_partnersDeleteManyArgs>(args?: SelectSubset<T, project_partnersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Project_partners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {project_partnersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Project_partners
     * const project_partners = await prisma.project_partners.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends project_partnersUpdateManyArgs>(args: SelectSubset<T, project_partnersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Project_partners and returns the data updated in the database.
     * @param {project_partnersUpdateManyAndReturnArgs} args - Arguments to update many Project_partners.
     * @example
     * // Update many Project_partners
     * const project_partners = await prisma.project_partners.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Project_partners and only return the `id`
     * const project_partnersWithIdOnly = await prisma.project_partners.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends project_partnersUpdateManyAndReturnArgs>(args: SelectSubset<T, project_partnersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$project_partnersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Project_partners.
     * @param {project_partnersUpsertArgs} args - Arguments to update or create a Project_partners.
     * @example
     * // Update or create a Project_partners
     * const project_partners = await prisma.project_partners.upsert({
     *   create: {
     *     // ... data to create a Project_partners
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Project_partners we want to update
     *   }
     * })
     */
    upsert<T extends project_partnersUpsertArgs>(args: SelectSubset<T, project_partnersUpsertArgs<ExtArgs>>): Prisma__project_partnersClient<$Result.GetResult<Prisma.$project_partnersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Project_partners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {project_partnersCountArgs} args - Arguments to filter Project_partners to count.
     * @example
     * // Count the number of Project_partners
     * const count = await prisma.project_partners.count({
     *   where: {
     *     // ... the filter for the Project_partners we want to count
     *   }
     * })
    **/
    count<T extends project_partnersCountArgs>(
      args?: Subset<T, project_partnersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Project_partnersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Project_partners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Project_partnersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Project_partnersAggregateArgs>(args: Subset<T, Project_partnersAggregateArgs>): Prisma.PrismaPromise<GetProject_partnersAggregateType<T>>

    /**
     * Group by Project_partners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {project_partnersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends project_partnersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: project_partnersGroupByArgs['orderBy'] }
        : { orderBy?: project_partnersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, project_partnersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProject_partnersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the project_partners model
   */
  readonly fields: project_partnersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for project_partners.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__project_partnersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    projects<T extends project_partners$projectsArgs<ExtArgs> = {}>(args?: Subset<T, project_partners$projectsArgs<ExtArgs>>): Prisma__projectsClient<$Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the project_partners model
   */
  interface project_partnersFieldRefs {
    readonly id: FieldRef<"project_partners", 'Int'>
    readonly project_id: FieldRef<"project_partners", 'Int'>
    readonly name: FieldRef<"project_partners", 'String'>
  }
    

  // Custom InputTypes
  /**
   * project_partners findUnique
   */
  export type project_partnersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project_partners
     */
    select?: project_partnersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project_partners
     */
    omit?: project_partnersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: project_partnersInclude<ExtArgs> | null
    /**
     * Filter, which project_partners to fetch.
     */
    where: project_partnersWhereUniqueInput
  }

  /**
   * project_partners findUniqueOrThrow
   */
  export type project_partnersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project_partners
     */
    select?: project_partnersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project_partners
     */
    omit?: project_partnersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: project_partnersInclude<ExtArgs> | null
    /**
     * Filter, which project_partners to fetch.
     */
    where: project_partnersWhereUniqueInput
  }

  /**
   * project_partners findFirst
   */
  export type project_partnersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project_partners
     */
    select?: project_partnersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project_partners
     */
    omit?: project_partnersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: project_partnersInclude<ExtArgs> | null
    /**
     * Filter, which project_partners to fetch.
     */
    where?: project_partnersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of project_partners to fetch.
     */
    orderBy?: project_partnersOrderByWithRelationInput | project_partnersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for project_partners.
     */
    cursor?: project_partnersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` project_partners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` project_partners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of project_partners.
     */
    distinct?: Project_partnersScalarFieldEnum | Project_partnersScalarFieldEnum[]
  }

  /**
   * project_partners findFirstOrThrow
   */
  export type project_partnersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project_partners
     */
    select?: project_partnersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project_partners
     */
    omit?: project_partnersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: project_partnersInclude<ExtArgs> | null
    /**
     * Filter, which project_partners to fetch.
     */
    where?: project_partnersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of project_partners to fetch.
     */
    orderBy?: project_partnersOrderByWithRelationInput | project_partnersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for project_partners.
     */
    cursor?: project_partnersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` project_partners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` project_partners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of project_partners.
     */
    distinct?: Project_partnersScalarFieldEnum | Project_partnersScalarFieldEnum[]
  }

  /**
   * project_partners findMany
   */
  export type project_partnersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project_partners
     */
    select?: project_partnersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project_partners
     */
    omit?: project_partnersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: project_partnersInclude<ExtArgs> | null
    /**
     * Filter, which project_partners to fetch.
     */
    where?: project_partnersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of project_partners to fetch.
     */
    orderBy?: project_partnersOrderByWithRelationInput | project_partnersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing project_partners.
     */
    cursor?: project_partnersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` project_partners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` project_partners.
     */
    skip?: number
    distinct?: Project_partnersScalarFieldEnum | Project_partnersScalarFieldEnum[]
  }

  /**
   * project_partners create
   */
  export type project_partnersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project_partners
     */
    select?: project_partnersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project_partners
     */
    omit?: project_partnersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: project_partnersInclude<ExtArgs> | null
    /**
     * The data needed to create a project_partners.
     */
    data?: XOR<project_partnersCreateInput, project_partnersUncheckedCreateInput>
  }

  /**
   * project_partners createMany
   */
  export type project_partnersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many project_partners.
     */
    data: project_partnersCreateManyInput | project_partnersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * project_partners createManyAndReturn
   */
  export type project_partnersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project_partners
     */
    select?: project_partnersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the project_partners
     */
    omit?: project_partnersOmit<ExtArgs> | null
    /**
     * The data used to create many project_partners.
     */
    data: project_partnersCreateManyInput | project_partnersCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: project_partnersIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * project_partners update
   */
  export type project_partnersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project_partners
     */
    select?: project_partnersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project_partners
     */
    omit?: project_partnersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: project_partnersInclude<ExtArgs> | null
    /**
     * The data needed to update a project_partners.
     */
    data: XOR<project_partnersUpdateInput, project_partnersUncheckedUpdateInput>
    /**
     * Choose, which project_partners to update.
     */
    where: project_partnersWhereUniqueInput
  }

  /**
   * project_partners updateMany
   */
  export type project_partnersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update project_partners.
     */
    data: XOR<project_partnersUpdateManyMutationInput, project_partnersUncheckedUpdateManyInput>
    /**
     * Filter which project_partners to update
     */
    where?: project_partnersWhereInput
    /**
     * Limit how many project_partners to update.
     */
    limit?: number
  }

  /**
   * project_partners updateManyAndReturn
   */
  export type project_partnersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project_partners
     */
    select?: project_partnersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the project_partners
     */
    omit?: project_partnersOmit<ExtArgs> | null
    /**
     * The data used to update project_partners.
     */
    data: XOR<project_partnersUpdateManyMutationInput, project_partnersUncheckedUpdateManyInput>
    /**
     * Filter which project_partners to update
     */
    where?: project_partnersWhereInput
    /**
     * Limit how many project_partners to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: project_partnersIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * project_partners upsert
   */
  export type project_partnersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project_partners
     */
    select?: project_partnersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project_partners
     */
    omit?: project_partnersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: project_partnersInclude<ExtArgs> | null
    /**
     * The filter to search for the project_partners to update in case it exists.
     */
    where: project_partnersWhereUniqueInput
    /**
     * In case the project_partners found by the `where` argument doesn't exist, create a new project_partners with this data.
     */
    create: XOR<project_partnersCreateInput, project_partnersUncheckedCreateInput>
    /**
     * In case the project_partners was found with the provided `where` argument, update it with this data.
     */
    update: XOR<project_partnersUpdateInput, project_partnersUncheckedUpdateInput>
  }

  /**
   * project_partners delete
   */
  export type project_partnersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project_partners
     */
    select?: project_partnersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project_partners
     */
    omit?: project_partnersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: project_partnersInclude<ExtArgs> | null
    /**
     * Filter which project_partners to delete.
     */
    where: project_partnersWhereUniqueInput
  }

  /**
   * project_partners deleteMany
   */
  export type project_partnersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which project_partners to delete
     */
    where?: project_partnersWhereInput
    /**
     * Limit how many project_partners to delete.
     */
    limit?: number
  }

  /**
   * project_partners.projects
   */
  export type project_partners$projectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projects
     */
    omit?: projectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectsInclude<ExtArgs> | null
    where?: projectsWhereInput
  }

  /**
   * project_partners without action
   */
  export type project_partnersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project_partners
     */
    select?: project_partnersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project_partners
     */
    omit?: project_partnersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: project_partnersInclude<ExtArgs> | null
  }


  /**
   * Model project_teams
   */

  export type AggregateProject_teams = {
    _count: Project_teamsCountAggregateOutputType | null
    _avg: Project_teamsAvgAggregateOutputType | null
    _sum: Project_teamsSumAggregateOutputType | null
    _min: Project_teamsMinAggregateOutputType | null
    _max: Project_teamsMaxAggregateOutputType | null
  }

  export type Project_teamsAvgAggregateOutputType = {
    id: number | null
    project_id: number | null
  }

  export type Project_teamsSumAggregateOutputType = {
    id: number | null
    project_id: number | null
  }

  export type Project_teamsMinAggregateOutputType = {
    id: number | null
    project_id: number | null
    name: string | null
  }

  export type Project_teamsMaxAggregateOutputType = {
    id: number | null
    project_id: number | null
    name: string | null
  }

  export type Project_teamsCountAggregateOutputType = {
    id: number
    project_id: number
    name: number
    _all: number
  }


  export type Project_teamsAvgAggregateInputType = {
    id?: true
    project_id?: true
  }

  export type Project_teamsSumAggregateInputType = {
    id?: true
    project_id?: true
  }

  export type Project_teamsMinAggregateInputType = {
    id?: true
    project_id?: true
    name?: true
  }

  export type Project_teamsMaxAggregateInputType = {
    id?: true
    project_id?: true
    name?: true
  }

  export type Project_teamsCountAggregateInputType = {
    id?: true
    project_id?: true
    name?: true
    _all?: true
  }

  export type Project_teamsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which project_teams to aggregate.
     */
    where?: project_teamsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of project_teams to fetch.
     */
    orderBy?: project_teamsOrderByWithRelationInput | project_teamsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: project_teamsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` project_teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` project_teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned project_teams
    **/
    _count?: true | Project_teamsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Project_teamsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Project_teamsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Project_teamsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Project_teamsMaxAggregateInputType
  }

  export type GetProject_teamsAggregateType<T extends Project_teamsAggregateArgs> = {
        [P in keyof T & keyof AggregateProject_teams]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProject_teams[P]>
      : GetScalarType<T[P], AggregateProject_teams[P]>
  }




  export type project_teamsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: project_teamsWhereInput
    orderBy?: project_teamsOrderByWithAggregationInput | project_teamsOrderByWithAggregationInput[]
    by: Project_teamsScalarFieldEnum[] | Project_teamsScalarFieldEnum
    having?: project_teamsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Project_teamsCountAggregateInputType | true
    _avg?: Project_teamsAvgAggregateInputType
    _sum?: Project_teamsSumAggregateInputType
    _min?: Project_teamsMinAggregateInputType
    _max?: Project_teamsMaxAggregateInputType
  }

  export type Project_teamsGroupByOutputType = {
    id: number
    project_id: number | null
    name: string | null
    _count: Project_teamsCountAggregateOutputType | null
    _avg: Project_teamsAvgAggregateOutputType | null
    _sum: Project_teamsSumAggregateOutputType | null
    _min: Project_teamsMinAggregateOutputType | null
    _max: Project_teamsMaxAggregateOutputType | null
  }

  type GetProject_teamsGroupByPayload<T extends project_teamsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Project_teamsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Project_teamsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Project_teamsGroupByOutputType[P]>
            : GetScalarType<T[P], Project_teamsGroupByOutputType[P]>
        }
      >
    >


  export type project_teamsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    project_id?: boolean
    name?: boolean
    projects?: boolean | project_teams$projectsArgs<ExtArgs>
  }, ExtArgs["result"]["project_teams"]>

  export type project_teamsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    project_id?: boolean
    name?: boolean
    projects?: boolean | project_teams$projectsArgs<ExtArgs>
  }, ExtArgs["result"]["project_teams"]>

  export type project_teamsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    project_id?: boolean
    name?: boolean
    projects?: boolean | project_teams$projectsArgs<ExtArgs>
  }, ExtArgs["result"]["project_teams"]>

  export type project_teamsSelectScalar = {
    id?: boolean
    project_id?: boolean
    name?: boolean
  }

  export type project_teamsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "project_id" | "name", ExtArgs["result"]["project_teams"]>
  export type project_teamsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projects?: boolean | project_teams$projectsArgs<ExtArgs>
  }
  export type project_teamsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projects?: boolean | project_teams$projectsArgs<ExtArgs>
  }
  export type project_teamsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projects?: boolean | project_teams$projectsArgs<ExtArgs>
  }

  export type $project_teamsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "project_teams"
    objects: {
      projects: Prisma.$projectsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      project_id: number | null
      name: string | null
    }, ExtArgs["result"]["project_teams"]>
    composites: {}
  }

  type project_teamsGetPayload<S extends boolean | null | undefined | project_teamsDefaultArgs> = $Result.GetResult<Prisma.$project_teamsPayload, S>

  type project_teamsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<project_teamsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Project_teamsCountAggregateInputType | true
    }

  export interface project_teamsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['project_teams'], meta: { name: 'project_teams' } }
    /**
     * Find zero or one Project_teams that matches the filter.
     * @param {project_teamsFindUniqueArgs} args - Arguments to find a Project_teams
     * @example
     * // Get one Project_teams
     * const project_teams = await prisma.project_teams.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends project_teamsFindUniqueArgs>(args: SelectSubset<T, project_teamsFindUniqueArgs<ExtArgs>>): Prisma__project_teamsClient<$Result.GetResult<Prisma.$project_teamsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Project_teams that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {project_teamsFindUniqueOrThrowArgs} args - Arguments to find a Project_teams
     * @example
     * // Get one Project_teams
     * const project_teams = await prisma.project_teams.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends project_teamsFindUniqueOrThrowArgs>(args: SelectSubset<T, project_teamsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__project_teamsClient<$Result.GetResult<Prisma.$project_teamsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project_teams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {project_teamsFindFirstArgs} args - Arguments to find a Project_teams
     * @example
     * // Get one Project_teams
     * const project_teams = await prisma.project_teams.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends project_teamsFindFirstArgs>(args?: SelectSubset<T, project_teamsFindFirstArgs<ExtArgs>>): Prisma__project_teamsClient<$Result.GetResult<Prisma.$project_teamsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project_teams that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {project_teamsFindFirstOrThrowArgs} args - Arguments to find a Project_teams
     * @example
     * // Get one Project_teams
     * const project_teams = await prisma.project_teams.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends project_teamsFindFirstOrThrowArgs>(args?: SelectSubset<T, project_teamsFindFirstOrThrowArgs<ExtArgs>>): Prisma__project_teamsClient<$Result.GetResult<Prisma.$project_teamsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Project_teams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {project_teamsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Project_teams
     * const project_teams = await prisma.project_teams.findMany()
     * 
     * // Get first 10 Project_teams
     * const project_teams = await prisma.project_teams.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const project_teamsWithIdOnly = await prisma.project_teams.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends project_teamsFindManyArgs>(args?: SelectSubset<T, project_teamsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$project_teamsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Project_teams.
     * @param {project_teamsCreateArgs} args - Arguments to create a Project_teams.
     * @example
     * // Create one Project_teams
     * const Project_teams = await prisma.project_teams.create({
     *   data: {
     *     // ... data to create a Project_teams
     *   }
     * })
     * 
     */
    create<T extends project_teamsCreateArgs>(args: SelectSubset<T, project_teamsCreateArgs<ExtArgs>>): Prisma__project_teamsClient<$Result.GetResult<Prisma.$project_teamsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Project_teams.
     * @param {project_teamsCreateManyArgs} args - Arguments to create many Project_teams.
     * @example
     * // Create many Project_teams
     * const project_teams = await prisma.project_teams.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends project_teamsCreateManyArgs>(args?: SelectSubset<T, project_teamsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Project_teams and returns the data saved in the database.
     * @param {project_teamsCreateManyAndReturnArgs} args - Arguments to create many Project_teams.
     * @example
     * // Create many Project_teams
     * const project_teams = await prisma.project_teams.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Project_teams and only return the `id`
     * const project_teamsWithIdOnly = await prisma.project_teams.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends project_teamsCreateManyAndReturnArgs>(args?: SelectSubset<T, project_teamsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$project_teamsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Project_teams.
     * @param {project_teamsDeleteArgs} args - Arguments to delete one Project_teams.
     * @example
     * // Delete one Project_teams
     * const Project_teams = await prisma.project_teams.delete({
     *   where: {
     *     // ... filter to delete one Project_teams
     *   }
     * })
     * 
     */
    delete<T extends project_teamsDeleteArgs>(args: SelectSubset<T, project_teamsDeleteArgs<ExtArgs>>): Prisma__project_teamsClient<$Result.GetResult<Prisma.$project_teamsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Project_teams.
     * @param {project_teamsUpdateArgs} args - Arguments to update one Project_teams.
     * @example
     * // Update one Project_teams
     * const project_teams = await prisma.project_teams.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends project_teamsUpdateArgs>(args: SelectSubset<T, project_teamsUpdateArgs<ExtArgs>>): Prisma__project_teamsClient<$Result.GetResult<Prisma.$project_teamsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Project_teams.
     * @param {project_teamsDeleteManyArgs} args - Arguments to filter Project_teams to delete.
     * @example
     * // Delete a few Project_teams
     * const { count } = await prisma.project_teams.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends project_teamsDeleteManyArgs>(args?: SelectSubset<T, project_teamsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Project_teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {project_teamsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Project_teams
     * const project_teams = await prisma.project_teams.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends project_teamsUpdateManyArgs>(args: SelectSubset<T, project_teamsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Project_teams and returns the data updated in the database.
     * @param {project_teamsUpdateManyAndReturnArgs} args - Arguments to update many Project_teams.
     * @example
     * // Update many Project_teams
     * const project_teams = await prisma.project_teams.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Project_teams and only return the `id`
     * const project_teamsWithIdOnly = await prisma.project_teams.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends project_teamsUpdateManyAndReturnArgs>(args: SelectSubset<T, project_teamsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$project_teamsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Project_teams.
     * @param {project_teamsUpsertArgs} args - Arguments to update or create a Project_teams.
     * @example
     * // Update or create a Project_teams
     * const project_teams = await prisma.project_teams.upsert({
     *   create: {
     *     // ... data to create a Project_teams
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Project_teams we want to update
     *   }
     * })
     */
    upsert<T extends project_teamsUpsertArgs>(args: SelectSubset<T, project_teamsUpsertArgs<ExtArgs>>): Prisma__project_teamsClient<$Result.GetResult<Prisma.$project_teamsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Project_teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {project_teamsCountArgs} args - Arguments to filter Project_teams to count.
     * @example
     * // Count the number of Project_teams
     * const count = await prisma.project_teams.count({
     *   where: {
     *     // ... the filter for the Project_teams we want to count
     *   }
     * })
    **/
    count<T extends project_teamsCountArgs>(
      args?: Subset<T, project_teamsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Project_teamsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Project_teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Project_teamsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Project_teamsAggregateArgs>(args: Subset<T, Project_teamsAggregateArgs>): Prisma.PrismaPromise<GetProject_teamsAggregateType<T>>

    /**
     * Group by Project_teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {project_teamsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends project_teamsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: project_teamsGroupByArgs['orderBy'] }
        : { orderBy?: project_teamsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, project_teamsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProject_teamsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the project_teams model
   */
  readonly fields: project_teamsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for project_teams.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__project_teamsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    projects<T extends project_teams$projectsArgs<ExtArgs> = {}>(args?: Subset<T, project_teams$projectsArgs<ExtArgs>>): Prisma__projectsClient<$Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the project_teams model
   */
  interface project_teamsFieldRefs {
    readonly id: FieldRef<"project_teams", 'Int'>
    readonly project_id: FieldRef<"project_teams", 'Int'>
    readonly name: FieldRef<"project_teams", 'String'>
  }
    

  // Custom InputTypes
  /**
   * project_teams findUnique
   */
  export type project_teamsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project_teams
     */
    select?: project_teamsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project_teams
     */
    omit?: project_teamsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: project_teamsInclude<ExtArgs> | null
    /**
     * Filter, which project_teams to fetch.
     */
    where: project_teamsWhereUniqueInput
  }

  /**
   * project_teams findUniqueOrThrow
   */
  export type project_teamsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project_teams
     */
    select?: project_teamsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project_teams
     */
    omit?: project_teamsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: project_teamsInclude<ExtArgs> | null
    /**
     * Filter, which project_teams to fetch.
     */
    where: project_teamsWhereUniqueInput
  }

  /**
   * project_teams findFirst
   */
  export type project_teamsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project_teams
     */
    select?: project_teamsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project_teams
     */
    omit?: project_teamsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: project_teamsInclude<ExtArgs> | null
    /**
     * Filter, which project_teams to fetch.
     */
    where?: project_teamsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of project_teams to fetch.
     */
    orderBy?: project_teamsOrderByWithRelationInput | project_teamsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for project_teams.
     */
    cursor?: project_teamsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` project_teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` project_teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of project_teams.
     */
    distinct?: Project_teamsScalarFieldEnum | Project_teamsScalarFieldEnum[]
  }

  /**
   * project_teams findFirstOrThrow
   */
  export type project_teamsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project_teams
     */
    select?: project_teamsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project_teams
     */
    omit?: project_teamsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: project_teamsInclude<ExtArgs> | null
    /**
     * Filter, which project_teams to fetch.
     */
    where?: project_teamsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of project_teams to fetch.
     */
    orderBy?: project_teamsOrderByWithRelationInput | project_teamsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for project_teams.
     */
    cursor?: project_teamsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` project_teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` project_teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of project_teams.
     */
    distinct?: Project_teamsScalarFieldEnum | Project_teamsScalarFieldEnum[]
  }

  /**
   * project_teams findMany
   */
  export type project_teamsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project_teams
     */
    select?: project_teamsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project_teams
     */
    omit?: project_teamsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: project_teamsInclude<ExtArgs> | null
    /**
     * Filter, which project_teams to fetch.
     */
    where?: project_teamsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of project_teams to fetch.
     */
    orderBy?: project_teamsOrderByWithRelationInput | project_teamsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing project_teams.
     */
    cursor?: project_teamsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` project_teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` project_teams.
     */
    skip?: number
    distinct?: Project_teamsScalarFieldEnum | Project_teamsScalarFieldEnum[]
  }

  /**
   * project_teams create
   */
  export type project_teamsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project_teams
     */
    select?: project_teamsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project_teams
     */
    omit?: project_teamsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: project_teamsInclude<ExtArgs> | null
    /**
     * The data needed to create a project_teams.
     */
    data?: XOR<project_teamsCreateInput, project_teamsUncheckedCreateInput>
  }

  /**
   * project_teams createMany
   */
  export type project_teamsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many project_teams.
     */
    data: project_teamsCreateManyInput | project_teamsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * project_teams createManyAndReturn
   */
  export type project_teamsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project_teams
     */
    select?: project_teamsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the project_teams
     */
    omit?: project_teamsOmit<ExtArgs> | null
    /**
     * The data used to create many project_teams.
     */
    data: project_teamsCreateManyInput | project_teamsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: project_teamsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * project_teams update
   */
  export type project_teamsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project_teams
     */
    select?: project_teamsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project_teams
     */
    omit?: project_teamsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: project_teamsInclude<ExtArgs> | null
    /**
     * The data needed to update a project_teams.
     */
    data: XOR<project_teamsUpdateInput, project_teamsUncheckedUpdateInput>
    /**
     * Choose, which project_teams to update.
     */
    where: project_teamsWhereUniqueInput
  }

  /**
   * project_teams updateMany
   */
  export type project_teamsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update project_teams.
     */
    data: XOR<project_teamsUpdateManyMutationInput, project_teamsUncheckedUpdateManyInput>
    /**
     * Filter which project_teams to update
     */
    where?: project_teamsWhereInput
    /**
     * Limit how many project_teams to update.
     */
    limit?: number
  }

  /**
   * project_teams updateManyAndReturn
   */
  export type project_teamsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project_teams
     */
    select?: project_teamsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the project_teams
     */
    omit?: project_teamsOmit<ExtArgs> | null
    /**
     * The data used to update project_teams.
     */
    data: XOR<project_teamsUpdateManyMutationInput, project_teamsUncheckedUpdateManyInput>
    /**
     * Filter which project_teams to update
     */
    where?: project_teamsWhereInput
    /**
     * Limit how many project_teams to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: project_teamsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * project_teams upsert
   */
  export type project_teamsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project_teams
     */
    select?: project_teamsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project_teams
     */
    omit?: project_teamsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: project_teamsInclude<ExtArgs> | null
    /**
     * The filter to search for the project_teams to update in case it exists.
     */
    where: project_teamsWhereUniqueInput
    /**
     * In case the project_teams found by the `where` argument doesn't exist, create a new project_teams with this data.
     */
    create: XOR<project_teamsCreateInput, project_teamsUncheckedCreateInput>
    /**
     * In case the project_teams was found with the provided `where` argument, update it with this data.
     */
    update: XOR<project_teamsUpdateInput, project_teamsUncheckedUpdateInput>
  }

  /**
   * project_teams delete
   */
  export type project_teamsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project_teams
     */
    select?: project_teamsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project_teams
     */
    omit?: project_teamsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: project_teamsInclude<ExtArgs> | null
    /**
     * Filter which project_teams to delete.
     */
    where: project_teamsWhereUniqueInput
  }

  /**
   * project_teams deleteMany
   */
  export type project_teamsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which project_teams to delete
     */
    where?: project_teamsWhereInput
    /**
     * Limit how many project_teams to delete.
     */
    limit?: number
  }

  /**
   * project_teams.projects
   */
  export type project_teams$projectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projects
     */
    omit?: projectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectsInclude<ExtArgs> | null
    where?: projectsWhereInput
  }

  /**
   * project_teams without action
   */
  export type project_teamsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project_teams
     */
    select?: project_teamsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project_teams
     */
    omit?: project_teamsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: project_teamsInclude<ExtArgs> | null
  }


  /**
   * Model projects
   */

  export type AggregateProjects = {
    _count: ProjectsCountAggregateOutputType | null
    _avg: ProjectsAvgAggregateOutputType | null
    _sum: ProjectsSumAggregateOutputType | null
    _min: ProjectsMinAggregateOutputType | null
    _max: ProjectsMaxAggregateOutputType | null
  }

  export type ProjectsAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type ProjectsSumAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type ProjectsMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    slug: string | null
    demo: string | null
    head: string | null
    status: string | null
    title: string | null
    years: string | null
    role: string | null
    description: string | null
    image: string | null
  }

  export type ProjectsMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    slug: string | null
    demo: string | null
    head: string | null
    status: string | null
    title: string | null
    years: string | null
    role: string | null
    description: string | null
    image: string | null
  }

  export type ProjectsCountAggregateOutputType = {
    id: number
    user_id: number
    slug: number
    demo: number
    head: number
    status: number
    title: number
    years: number
    role: number
    description: number
    image: number
    _all: number
  }


  export type ProjectsAvgAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type ProjectsSumAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type ProjectsMinAggregateInputType = {
    id?: true
    user_id?: true
    slug?: true
    demo?: true
    head?: true
    status?: true
    title?: true
    years?: true
    role?: true
    description?: true
    image?: true
  }

  export type ProjectsMaxAggregateInputType = {
    id?: true
    user_id?: true
    slug?: true
    demo?: true
    head?: true
    status?: true
    title?: true
    years?: true
    role?: true
    description?: true
    image?: true
  }

  export type ProjectsCountAggregateInputType = {
    id?: true
    user_id?: true
    slug?: true
    demo?: true
    head?: true
    status?: true
    title?: true
    years?: true
    role?: true
    description?: true
    image?: true
    _all?: true
  }

  export type ProjectsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which projects to aggregate.
     */
    where?: projectsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of projects to fetch.
     */
    orderBy?: projectsOrderByWithRelationInput | projectsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: projectsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned projects
    **/
    _count?: true | ProjectsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProjectsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProjectsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectsMaxAggregateInputType
  }

  export type GetProjectsAggregateType<T extends ProjectsAggregateArgs> = {
        [P in keyof T & keyof AggregateProjects]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProjects[P]>
      : GetScalarType<T[P], AggregateProjects[P]>
  }




  export type projectsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: projectsWhereInput
    orderBy?: projectsOrderByWithAggregationInput | projectsOrderByWithAggregationInput[]
    by: ProjectsScalarFieldEnum[] | ProjectsScalarFieldEnum
    having?: projectsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectsCountAggregateInputType | true
    _avg?: ProjectsAvgAggregateInputType
    _sum?: ProjectsSumAggregateInputType
    _min?: ProjectsMinAggregateInputType
    _max?: ProjectsMaxAggregateInputType
  }

  export type ProjectsGroupByOutputType = {
    id: number
    user_id: number
    slug: string
    demo: string | null
    head: string | null
    status: string
    title: string
    years: string
    role: string | null
    description: string
    image: string
    _count: ProjectsCountAggregateOutputType | null
    _avg: ProjectsAvgAggregateOutputType | null
    _sum: ProjectsSumAggregateOutputType | null
    _min: ProjectsMinAggregateOutputType | null
    _max: ProjectsMaxAggregateOutputType | null
  }

  type GetProjectsGroupByPayload<T extends projectsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectsGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectsGroupByOutputType[P]>
        }
      >
    >


  export type projectsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    slug?: boolean
    demo?: boolean
    head?: boolean
    status?: boolean
    title?: boolean
    years?: boolean
    role?: boolean
    description?: boolean
    image?: boolean
    project_icons?: boolean | projects$project_iconsArgs<ExtArgs>
    project_linkedin_partners?: boolean | projects$project_linkedin_partnersArgs<ExtArgs>
    project_linkedin_teams?: boolean | projects$project_linkedin_teamsArgs<ExtArgs>
    project_partners?: boolean | projects$project_partnersArgs<ExtArgs>
    project_teams?: boolean | projects$project_teamsArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
    _count?: boolean | ProjectsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projects"]>

  export type projectsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    slug?: boolean
    demo?: boolean
    head?: boolean
    status?: boolean
    title?: boolean
    years?: boolean
    role?: boolean
    description?: boolean
    image?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projects"]>

  export type projectsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    slug?: boolean
    demo?: boolean
    head?: boolean
    status?: boolean
    title?: boolean
    years?: boolean
    role?: boolean
    description?: boolean
    image?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projects"]>

  export type projectsSelectScalar = {
    id?: boolean
    user_id?: boolean
    slug?: boolean
    demo?: boolean
    head?: boolean
    status?: boolean
    title?: boolean
    years?: boolean
    role?: boolean
    description?: boolean
    image?: boolean
  }

  export type projectsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "slug" | "demo" | "head" | "status" | "title" | "years" | "role" | "description" | "image", ExtArgs["result"]["projects"]>
  export type projectsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project_icons?: boolean | projects$project_iconsArgs<ExtArgs>
    project_linkedin_partners?: boolean | projects$project_linkedin_partnersArgs<ExtArgs>
    project_linkedin_teams?: boolean | projects$project_linkedin_teamsArgs<ExtArgs>
    project_partners?: boolean | projects$project_partnersArgs<ExtArgs>
    project_teams?: boolean | projects$project_teamsArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
    _count?: boolean | ProjectsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type projectsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type projectsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $projectsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "projects"
    objects: {
      project_icons: Prisma.$project_iconsPayload<ExtArgs>[]
      project_linkedin_partners: Prisma.$project_linkedin_partnersPayload<ExtArgs>[]
      project_linkedin_teams: Prisma.$project_linkedin_teamsPayload<ExtArgs>[]
      project_partners: Prisma.$project_partnersPayload<ExtArgs>[]
      project_teams: Prisma.$project_teamsPayload<ExtArgs>[]
      users: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number
      slug: string
      demo: string | null
      head: string | null
      status: string
      title: string
      years: string
      role: string | null
      description: string
      image: string
    }, ExtArgs["result"]["projects"]>
    composites: {}
  }

  type projectsGetPayload<S extends boolean | null | undefined | projectsDefaultArgs> = $Result.GetResult<Prisma.$projectsPayload, S>

  type projectsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<projectsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectsCountAggregateInputType | true
    }

  export interface projectsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['projects'], meta: { name: 'projects' } }
    /**
     * Find zero or one Projects that matches the filter.
     * @param {projectsFindUniqueArgs} args - Arguments to find a Projects
     * @example
     * // Get one Projects
     * const projects = await prisma.projects.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends projectsFindUniqueArgs>(args: SelectSubset<T, projectsFindUniqueArgs<ExtArgs>>): Prisma__projectsClient<$Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Projects that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {projectsFindUniqueOrThrowArgs} args - Arguments to find a Projects
     * @example
     * // Get one Projects
     * const projects = await prisma.projects.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends projectsFindUniqueOrThrowArgs>(args: SelectSubset<T, projectsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__projectsClient<$Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectsFindFirstArgs} args - Arguments to find a Projects
     * @example
     * // Get one Projects
     * const projects = await prisma.projects.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends projectsFindFirstArgs>(args?: SelectSubset<T, projectsFindFirstArgs<ExtArgs>>): Prisma__projectsClient<$Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Projects that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectsFindFirstOrThrowArgs} args - Arguments to find a Projects
     * @example
     * // Get one Projects
     * const projects = await prisma.projects.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends projectsFindFirstOrThrowArgs>(args?: SelectSubset<T, projectsFindFirstOrThrowArgs<ExtArgs>>): Prisma__projectsClient<$Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projects
     * const projects = await prisma.projects.findMany()
     * 
     * // Get first 10 Projects
     * const projects = await prisma.projects.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectsWithIdOnly = await prisma.projects.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends projectsFindManyArgs>(args?: SelectSubset<T, projectsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Projects.
     * @param {projectsCreateArgs} args - Arguments to create a Projects.
     * @example
     * // Create one Projects
     * const Projects = await prisma.projects.create({
     *   data: {
     *     // ... data to create a Projects
     *   }
     * })
     * 
     */
    create<T extends projectsCreateArgs>(args: SelectSubset<T, projectsCreateArgs<ExtArgs>>): Prisma__projectsClient<$Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Projects.
     * @param {projectsCreateManyArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const projects = await prisma.projects.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends projectsCreateManyArgs>(args?: SelectSubset<T, projectsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Projects and returns the data saved in the database.
     * @param {projectsCreateManyAndReturnArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const projects = await prisma.projects.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Projects and only return the `id`
     * const projectsWithIdOnly = await prisma.projects.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends projectsCreateManyAndReturnArgs>(args?: SelectSubset<T, projectsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Projects.
     * @param {projectsDeleteArgs} args - Arguments to delete one Projects.
     * @example
     * // Delete one Projects
     * const Projects = await prisma.projects.delete({
     *   where: {
     *     // ... filter to delete one Projects
     *   }
     * })
     * 
     */
    delete<T extends projectsDeleteArgs>(args: SelectSubset<T, projectsDeleteArgs<ExtArgs>>): Prisma__projectsClient<$Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Projects.
     * @param {projectsUpdateArgs} args - Arguments to update one Projects.
     * @example
     * // Update one Projects
     * const projects = await prisma.projects.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends projectsUpdateArgs>(args: SelectSubset<T, projectsUpdateArgs<ExtArgs>>): Prisma__projectsClient<$Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Projects.
     * @param {projectsDeleteManyArgs} args - Arguments to filter Projects to delete.
     * @example
     * // Delete a few Projects
     * const { count } = await prisma.projects.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends projectsDeleteManyArgs>(args?: SelectSubset<T, projectsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projects
     * const projects = await prisma.projects.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends projectsUpdateManyArgs>(args: SelectSubset<T, projectsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects and returns the data updated in the database.
     * @param {projectsUpdateManyAndReturnArgs} args - Arguments to update many Projects.
     * @example
     * // Update many Projects
     * const projects = await prisma.projects.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Projects and only return the `id`
     * const projectsWithIdOnly = await prisma.projects.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends projectsUpdateManyAndReturnArgs>(args: SelectSubset<T, projectsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Projects.
     * @param {projectsUpsertArgs} args - Arguments to update or create a Projects.
     * @example
     * // Update or create a Projects
     * const projects = await prisma.projects.upsert({
     *   create: {
     *     // ... data to create a Projects
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Projects we want to update
     *   }
     * })
     */
    upsert<T extends projectsUpsertArgs>(args: SelectSubset<T, projectsUpsertArgs<ExtArgs>>): Prisma__projectsClient<$Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectsCountArgs} args - Arguments to filter Projects to count.
     * @example
     * // Count the number of Projects
     * const count = await prisma.projects.count({
     *   where: {
     *     // ... the filter for the Projects we want to count
     *   }
     * })
    **/
    count<T extends projectsCountArgs>(
      args?: Subset<T, projectsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProjectsAggregateArgs>(args: Subset<T, ProjectsAggregateArgs>): Prisma.PrismaPromise<GetProjectsAggregateType<T>>

    /**
     * Group by Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends projectsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: projectsGroupByArgs['orderBy'] }
        : { orderBy?: projectsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, projectsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the projects model
   */
  readonly fields: projectsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for projects.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__projectsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project_icons<T extends projects$project_iconsArgs<ExtArgs> = {}>(args?: Subset<T, projects$project_iconsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$project_iconsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    project_linkedin_partners<T extends projects$project_linkedin_partnersArgs<ExtArgs> = {}>(args?: Subset<T, projects$project_linkedin_partnersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$project_linkedin_partnersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    project_linkedin_teams<T extends projects$project_linkedin_teamsArgs<ExtArgs> = {}>(args?: Subset<T, projects$project_linkedin_teamsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$project_linkedin_teamsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    project_partners<T extends projects$project_partnersArgs<ExtArgs> = {}>(args?: Subset<T, projects$project_partnersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$project_partnersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    project_teams<T extends projects$project_teamsArgs<ExtArgs> = {}>(args?: Subset<T, projects$project_teamsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$project_teamsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the projects model
   */
  interface projectsFieldRefs {
    readonly id: FieldRef<"projects", 'Int'>
    readonly user_id: FieldRef<"projects", 'Int'>
    readonly slug: FieldRef<"projects", 'String'>
    readonly demo: FieldRef<"projects", 'String'>
    readonly head: FieldRef<"projects", 'String'>
    readonly status: FieldRef<"projects", 'String'>
    readonly title: FieldRef<"projects", 'String'>
    readonly years: FieldRef<"projects", 'String'>
    readonly role: FieldRef<"projects", 'String'>
    readonly description: FieldRef<"projects", 'String'>
    readonly image: FieldRef<"projects", 'String'>
  }
    

  // Custom InputTypes
  /**
   * projects findUnique
   */
  export type projectsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projects
     */
    omit?: projectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectsInclude<ExtArgs> | null
    /**
     * Filter, which projects to fetch.
     */
    where: projectsWhereUniqueInput
  }

  /**
   * projects findUniqueOrThrow
   */
  export type projectsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projects
     */
    omit?: projectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectsInclude<ExtArgs> | null
    /**
     * Filter, which projects to fetch.
     */
    where: projectsWhereUniqueInput
  }

  /**
   * projects findFirst
   */
  export type projectsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projects
     */
    omit?: projectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectsInclude<ExtArgs> | null
    /**
     * Filter, which projects to fetch.
     */
    where?: projectsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of projects to fetch.
     */
    orderBy?: projectsOrderByWithRelationInput | projectsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for projects.
     */
    cursor?: projectsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of projects.
     */
    distinct?: ProjectsScalarFieldEnum | ProjectsScalarFieldEnum[]
  }

  /**
   * projects findFirstOrThrow
   */
  export type projectsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projects
     */
    omit?: projectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectsInclude<ExtArgs> | null
    /**
     * Filter, which projects to fetch.
     */
    where?: projectsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of projects to fetch.
     */
    orderBy?: projectsOrderByWithRelationInput | projectsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for projects.
     */
    cursor?: projectsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of projects.
     */
    distinct?: ProjectsScalarFieldEnum | ProjectsScalarFieldEnum[]
  }

  /**
   * projects findMany
   */
  export type projectsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projects
     */
    omit?: projectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectsInclude<ExtArgs> | null
    /**
     * Filter, which projects to fetch.
     */
    where?: projectsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of projects to fetch.
     */
    orderBy?: projectsOrderByWithRelationInput | projectsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing projects.
     */
    cursor?: projectsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` projects.
     */
    skip?: number
    distinct?: ProjectsScalarFieldEnum | ProjectsScalarFieldEnum[]
  }

  /**
   * projects create
   */
  export type projectsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projects
     */
    omit?: projectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectsInclude<ExtArgs> | null
    /**
     * The data needed to create a projects.
     */
    data: XOR<projectsCreateInput, projectsUncheckedCreateInput>
  }

  /**
   * projects createMany
   */
  export type projectsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many projects.
     */
    data: projectsCreateManyInput | projectsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * projects createManyAndReturn
   */
  export type projectsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the projects
     */
    omit?: projectsOmit<ExtArgs> | null
    /**
     * The data used to create many projects.
     */
    data: projectsCreateManyInput | projectsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * projects update
   */
  export type projectsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projects
     */
    omit?: projectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectsInclude<ExtArgs> | null
    /**
     * The data needed to update a projects.
     */
    data: XOR<projectsUpdateInput, projectsUncheckedUpdateInput>
    /**
     * Choose, which projects to update.
     */
    where: projectsWhereUniqueInput
  }

  /**
   * projects updateMany
   */
  export type projectsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update projects.
     */
    data: XOR<projectsUpdateManyMutationInput, projectsUncheckedUpdateManyInput>
    /**
     * Filter which projects to update
     */
    where?: projectsWhereInput
    /**
     * Limit how many projects to update.
     */
    limit?: number
  }

  /**
   * projects updateManyAndReturn
   */
  export type projectsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the projects
     */
    omit?: projectsOmit<ExtArgs> | null
    /**
     * The data used to update projects.
     */
    data: XOR<projectsUpdateManyMutationInput, projectsUncheckedUpdateManyInput>
    /**
     * Filter which projects to update
     */
    where?: projectsWhereInput
    /**
     * Limit how many projects to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * projects upsert
   */
  export type projectsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projects
     */
    omit?: projectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectsInclude<ExtArgs> | null
    /**
     * The filter to search for the projects to update in case it exists.
     */
    where: projectsWhereUniqueInput
    /**
     * In case the projects found by the `where` argument doesn't exist, create a new projects with this data.
     */
    create: XOR<projectsCreateInput, projectsUncheckedCreateInput>
    /**
     * In case the projects was found with the provided `where` argument, update it with this data.
     */
    update: XOR<projectsUpdateInput, projectsUncheckedUpdateInput>
  }

  /**
   * projects delete
   */
  export type projectsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projects
     */
    omit?: projectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectsInclude<ExtArgs> | null
    /**
     * Filter which projects to delete.
     */
    where: projectsWhereUniqueInput
  }

  /**
   * projects deleteMany
   */
  export type projectsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which projects to delete
     */
    where?: projectsWhereInput
    /**
     * Limit how many projects to delete.
     */
    limit?: number
  }

  /**
   * projects.project_icons
   */
  export type projects$project_iconsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project_icons
     */
    select?: project_iconsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project_icons
     */
    omit?: project_iconsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: project_iconsInclude<ExtArgs> | null
    where?: project_iconsWhereInput
    orderBy?: project_iconsOrderByWithRelationInput | project_iconsOrderByWithRelationInput[]
    cursor?: project_iconsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Project_iconsScalarFieldEnum | Project_iconsScalarFieldEnum[]
  }

  /**
   * projects.project_linkedin_partners
   */
  export type projects$project_linkedin_partnersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project_linkedin_partners
     */
    select?: project_linkedin_partnersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project_linkedin_partners
     */
    omit?: project_linkedin_partnersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: project_linkedin_partnersInclude<ExtArgs> | null
    where?: project_linkedin_partnersWhereInput
    orderBy?: project_linkedin_partnersOrderByWithRelationInput | project_linkedin_partnersOrderByWithRelationInput[]
    cursor?: project_linkedin_partnersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Project_linkedin_partnersScalarFieldEnum | Project_linkedin_partnersScalarFieldEnum[]
  }

  /**
   * projects.project_linkedin_teams
   */
  export type projects$project_linkedin_teamsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project_linkedin_teams
     */
    select?: project_linkedin_teamsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project_linkedin_teams
     */
    omit?: project_linkedin_teamsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: project_linkedin_teamsInclude<ExtArgs> | null
    where?: project_linkedin_teamsWhereInput
    orderBy?: project_linkedin_teamsOrderByWithRelationInput | project_linkedin_teamsOrderByWithRelationInput[]
    cursor?: project_linkedin_teamsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Project_linkedin_teamsScalarFieldEnum | Project_linkedin_teamsScalarFieldEnum[]
  }

  /**
   * projects.project_partners
   */
  export type projects$project_partnersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project_partners
     */
    select?: project_partnersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project_partners
     */
    omit?: project_partnersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: project_partnersInclude<ExtArgs> | null
    where?: project_partnersWhereInput
    orderBy?: project_partnersOrderByWithRelationInput | project_partnersOrderByWithRelationInput[]
    cursor?: project_partnersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Project_partnersScalarFieldEnum | Project_partnersScalarFieldEnum[]
  }

  /**
   * projects.project_teams
   */
  export type projects$project_teamsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project_teams
     */
    select?: project_teamsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project_teams
     */
    omit?: project_teamsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: project_teamsInclude<ExtArgs> | null
    where?: project_teamsWhereInput
    orderBy?: project_teamsOrderByWithRelationInput | project_teamsOrderByWithRelationInput[]
    cursor?: project_teamsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Project_teamsScalarFieldEnum | Project_teamsScalarFieldEnum[]
  }

  /**
   * projects without action
   */
  export type projectsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projects
     */
    omit?: projectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectsInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const LoginScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    token: 'token',
    created_at: 'created_at',
    expires_at: 'expires_at'
  };

  export type LoginScalarFieldEnum = (typeof LoginScalarFieldEnum)[keyof typeof LoginScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id: 'id',
    username: 'username',
    password: 'password'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const BlogsScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    image: 'image',
    date: 'date',
    title: 'title',
    description: 'description',
    content: 'content',
    updated_at: 'updated_at'
  };

  export type BlogsScalarFieldEnum = (typeof BlogsScalarFieldEnum)[keyof typeof BlogsScalarFieldEnum]


  export const Project_iconsScalarFieldEnum: {
    id: 'id',
    project_id: 'project_id',
    icon_name: 'icon_name'
  };

  export type Project_iconsScalarFieldEnum = (typeof Project_iconsScalarFieldEnum)[keyof typeof Project_iconsScalarFieldEnum]


  export const Project_linkedin_partnersScalarFieldEnum: {
    id: 'id',
    project_id: 'project_id',
    url: 'url'
  };

  export type Project_linkedin_partnersScalarFieldEnum = (typeof Project_linkedin_partnersScalarFieldEnum)[keyof typeof Project_linkedin_partnersScalarFieldEnum]


  export const Project_linkedin_teamsScalarFieldEnum: {
    id: 'id',
    project_id: 'project_id',
    url: 'url'
  };

  export type Project_linkedin_teamsScalarFieldEnum = (typeof Project_linkedin_teamsScalarFieldEnum)[keyof typeof Project_linkedin_teamsScalarFieldEnum]


  export const Project_partnersScalarFieldEnum: {
    id: 'id',
    project_id: 'project_id',
    name: 'name'
  };

  export type Project_partnersScalarFieldEnum = (typeof Project_partnersScalarFieldEnum)[keyof typeof Project_partnersScalarFieldEnum]


  export const Project_teamsScalarFieldEnum: {
    id: 'id',
    project_id: 'project_id',
    name: 'name'
  };

  export type Project_teamsScalarFieldEnum = (typeof Project_teamsScalarFieldEnum)[keyof typeof Project_teamsScalarFieldEnum]


  export const ProjectsScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    slug: 'slug',
    demo: 'demo',
    head: 'head',
    status: 'status',
    title: 'title',
    years: 'years',
    role: 'role',
    description: 'description',
    image: 'image'
  };

  export type ProjectsScalarFieldEnum = (typeof ProjectsScalarFieldEnum)[keyof typeof ProjectsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type loginWhereInput = {
    AND?: loginWhereInput | loginWhereInput[]
    OR?: loginWhereInput[]
    NOT?: loginWhereInput | loginWhereInput[]
    id?: IntFilter<"login"> | number
    user_id?: IntFilter<"login"> | number
    token?: StringFilter<"login"> | string
    created_at?: DateTimeNullableFilter<"login"> | Date | string | null
    expires_at?: DateTimeNullableFilter<"login"> | Date | string | null
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type loginOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    token?: SortOrder
    created_at?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    users?: usersOrderByWithRelationInput
  }

  export type loginWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: loginWhereInput | loginWhereInput[]
    OR?: loginWhereInput[]
    NOT?: loginWhereInput | loginWhereInput[]
    user_id?: IntFilter<"login"> | number
    token?: StringFilter<"login"> | string
    created_at?: DateTimeNullableFilter<"login"> | Date | string | null
    expires_at?: DateTimeNullableFilter<"login"> | Date | string | null
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id">

  export type loginOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    token?: SortOrder
    created_at?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    _count?: loginCountOrderByAggregateInput
    _avg?: loginAvgOrderByAggregateInput
    _max?: loginMaxOrderByAggregateInput
    _min?: loginMinOrderByAggregateInput
    _sum?: loginSumOrderByAggregateInput
  }

  export type loginScalarWhereWithAggregatesInput = {
    AND?: loginScalarWhereWithAggregatesInput | loginScalarWhereWithAggregatesInput[]
    OR?: loginScalarWhereWithAggregatesInput[]
    NOT?: loginScalarWhereWithAggregatesInput | loginScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"login"> | number
    user_id?: IntWithAggregatesFilter<"login"> | number
    token?: StringWithAggregatesFilter<"login"> | string
    created_at?: DateTimeNullableWithAggregatesFilter<"login"> | Date | string | null
    expires_at?: DateTimeNullableWithAggregatesFilter<"login"> | Date | string | null
  }

  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: IntFilter<"users"> | number
    username?: StringFilter<"users"> | string
    password?: StringFilter<"users"> | string
    blogs?: BlogsListRelationFilter
    login?: LoginListRelationFilter
    projects?: ProjectsListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    blogs?: blogsOrderByRelationAggregateInput
    login?: loginOrderByRelationAggregateInput
    projects?: projectsOrderByRelationAggregateInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    password?: StringFilter<"users"> | string
    blogs?: BlogsListRelationFilter
    login?: LoginListRelationFilter
    projects?: ProjectsListRelationFilter
  }, "id" | "username">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    _count?: usersCountOrderByAggregateInput
    _avg?: usersAvgOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
    _sum?: usersSumOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"users"> | number
    username?: StringWithAggregatesFilter<"users"> | string
    password?: StringWithAggregatesFilter<"users"> | string
  }

  export type blogsWhereInput = {
    AND?: blogsWhereInput | blogsWhereInput[]
    OR?: blogsWhereInput[]
    NOT?: blogsWhereInput | blogsWhereInput[]
    id?: IntFilter<"blogs"> | number
    user_id?: IntFilter<"blogs"> | number
    image?: StringNullableFilter<"blogs"> | string | null
    date?: DateTimeFilter<"blogs"> | Date | string
    title?: StringFilter<"blogs"> | string
    description?: StringFilter<"blogs"> | string
    content?: StringNullableFilter<"blogs"> | string | null
    updated_at?: DateTimeNullableFilter<"blogs"> | Date | string | null
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type blogsOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    image?: SortOrderInput | SortOrder
    date?: SortOrder
    title?: SortOrder
    description?: SortOrder
    content?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    users?: usersOrderByWithRelationInput
  }

  export type blogsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: blogsWhereInput | blogsWhereInput[]
    OR?: blogsWhereInput[]
    NOT?: blogsWhereInput | blogsWhereInput[]
    user_id?: IntFilter<"blogs"> | number
    image?: StringNullableFilter<"blogs"> | string | null
    date?: DateTimeFilter<"blogs"> | Date | string
    title?: StringFilter<"blogs"> | string
    description?: StringFilter<"blogs"> | string
    content?: StringNullableFilter<"blogs"> | string | null
    updated_at?: DateTimeNullableFilter<"blogs"> | Date | string | null
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id">

  export type blogsOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    image?: SortOrderInput | SortOrder
    date?: SortOrder
    title?: SortOrder
    description?: SortOrder
    content?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: blogsCountOrderByAggregateInput
    _avg?: blogsAvgOrderByAggregateInput
    _max?: blogsMaxOrderByAggregateInput
    _min?: blogsMinOrderByAggregateInput
    _sum?: blogsSumOrderByAggregateInput
  }

  export type blogsScalarWhereWithAggregatesInput = {
    AND?: blogsScalarWhereWithAggregatesInput | blogsScalarWhereWithAggregatesInput[]
    OR?: blogsScalarWhereWithAggregatesInput[]
    NOT?: blogsScalarWhereWithAggregatesInput | blogsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"blogs"> | number
    user_id?: IntWithAggregatesFilter<"blogs"> | number
    image?: StringNullableWithAggregatesFilter<"blogs"> | string | null
    date?: DateTimeWithAggregatesFilter<"blogs"> | Date | string
    title?: StringWithAggregatesFilter<"blogs"> | string
    description?: StringWithAggregatesFilter<"blogs"> | string
    content?: StringNullableWithAggregatesFilter<"blogs"> | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"blogs"> | Date | string | null
  }

  export type project_iconsWhereInput = {
    AND?: project_iconsWhereInput | project_iconsWhereInput[]
    OR?: project_iconsWhereInput[]
    NOT?: project_iconsWhereInput | project_iconsWhereInput[]
    id?: IntFilter<"project_icons"> | number
    project_id?: IntNullableFilter<"project_icons"> | number | null
    icon_name?: StringNullableFilter<"project_icons"> | string | null
    projects?: XOR<ProjectsNullableScalarRelationFilter, projectsWhereInput> | null
  }

  export type project_iconsOrderByWithRelationInput = {
    id?: SortOrder
    project_id?: SortOrderInput | SortOrder
    icon_name?: SortOrderInput | SortOrder
    projects?: projectsOrderByWithRelationInput
  }

  export type project_iconsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: project_iconsWhereInput | project_iconsWhereInput[]
    OR?: project_iconsWhereInput[]
    NOT?: project_iconsWhereInput | project_iconsWhereInput[]
    project_id?: IntNullableFilter<"project_icons"> | number | null
    icon_name?: StringNullableFilter<"project_icons"> | string | null
    projects?: XOR<ProjectsNullableScalarRelationFilter, projectsWhereInput> | null
  }, "id">

  export type project_iconsOrderByWithAggregationInput = {
    id?: SortOrder
    project_id?: SortOrderInput | SortOrder
    icon_name?: SortOrderInput | SortOrder
    _count?: project_iconsCountOrderByAggregateInput
    _avg?: project_iconsAvgOrderByAggregateInput
    _max?: project_iconsMaxOrderByAggregateInput
    _min?: project_iconsMinOrderByAggregateInput
    _sum?: project_iconsSumOrderByAggregateInput
  }

  export type project_iconsScalarWhereWithAggregatesInput = {
    AND?: project_iconsScalarWhereWithAggregatesInput | project_iconsScalarWhereWithAggregatesInput[]
    OR?: project_iconsScalarWhereWithAggregatesInput[]
    NOT?: project_iconsScalarWhereWithAggregatesInput | project_iconsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"project_icons"> | number
    project_id?: IntNullableWithAggregatesFilter<"project_icons"> | number | null
    icon_name?: StringNullableWithAggregatesFilter<"project_icons"> | string | null
  }

  export type project_linkedin_partnersWhereInput = {
    AND?: project_linkedin_partnersWhereInput | project_linkedin_partnersWhereInput[]
    OR?: project_linkedin_partnersWhereInput[]
    NOT?: project_linkedin_partnersWhereInput | project_linkedin_partnersWhereInput[]
    id?: IntFilter<"project_linkedin_partners"> | number
    project_id?: IntNullableFilter<"project_linkedin_partners"> | number | null
    url?: StringNullableFilter<"project_linkedin_partners"> | string | null
    projects?: XOR<ProjectsNullableScalarRelationFilter, projectsWhereInput> | null
  }

  export type project_linkedin_partnersOrderByWithRelationInput = {
    id?: SortOrder
    project_id?: SortOrderInput | SortOrder
    url?: SortOrderInput | SortOrder
    projects?: projectsOrderByWithRelationInput
  }

  export type project_linkedin_partnersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: project_linkedin_partnersWhereInput | project_linkedin_partnersWhereInput[]
    OR?: project_linkedin_partnersWhereInput[]
    NOT?: project_linkedin_partnersWhereInput | project_linkedin_partnersWhereInput[]
    project_id?: IntNullableFilter<"project_linkedin_partners"> | number | null
    url?: StringNullableFilter<"project_linkedin_partners"> | string | null
    projects?: XOR<ProjectsNullableScalarRelationFilter, projectsWhereInput> | null
  }, "id">

  export type project_linkedin_partnersOrderByWithAggregationInput = {
    id?: SortOrder
    project_id?: SortOrderInput | SortOrder
    url?: SortOrderInput | SortOrder
    _count?: project_linkedin_partnersCountOrderByAggregateInput
    _avg?: project_linkedin_partnersAvgOrderByAggregateInput
    _max?: project_linkedin_partnersMaxOrderByAggregateInput
    _min?: project_linkedin_partnersMinOrderByAggregateInput
    _sum?: project_linkedin_partnersSumOrderByAggregateInput
  }

  export type project_linkedin_partnersScalarWhereWithAggregatesInput = {
    AND?: project_linkedin_partnersScalarWhereWithAggregatesInput | project_linkedin_partnersScalarWhereWithAggregatesInput[]
    OR?: project_linkedin_partnersScalarWhereWithAggregatesInput[]
    NOT?: project_linkedin_partnersScalarWhereWithAggregatesInput | project_linkedin_partnersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"project_linkedin_partners"> | number
    project_id?: IntNullableWithAggregatesFilter<"project_linkedin_partners"> | number | null
    url?: StringNullableWithAggregatesFilter<"project_linkedin_partners"> | string | null
  }

  export type project_linkedin_teamsWhereInput = {
    AND?: project_linkedin_teamsWhereInput | project_linkedin_teamsWhereInput[]
    OR?: project_linkedin_teamsWhereInput[]
    NOT?: project_linkedin_teamsWhereInput | project_linkedin_teamsWhereInput[]
    id?: IntFilter<"project_linkedin_teams"> | number
    project_id?: IntNullableFilter<"project_linkedin_teams"> | number | null
    url?: StringNullableFilter<"project_linkedin_teams"> | string | null
    projects?: XOR<ProjectsNullableScalarRelationFilter, projectsWhereInput> | null
  }

  export type project_linkedin_teamsOrderByWithRelationInput = {
    id?: SortOrder
    project_id?: SortOrderInput | SortOrder
    url?: SortOrderInput | SortOrder
    projects?: projectsOrderByWithRelationInput
  }

  export type project_linkedin_teamsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: project_linkedin_teamsWhereInput | project_linkedin_teamsWhereInput[]
    OR?: project_linkedin_teamsWhereInput[]
    NOT?: project_linkedin_teamsWhereInput | project_linkedin_teamsWhereInput[]
    project_id?: IntNullableFilter<"project_linkedin_teams"> | number | null
    url?: StringNullableFilter<"project_linkedin_teams"> | string | null
    projects?: XOR<ProjectsNullableScalarRelationFilter, projectsWhereInput> | null
  }, "id">

  export type project_linkedin_teamsOrderByWithAggregationInput = {
    id?: SortOrder
    project_id?: SortOrderInput | SortOrder
    url?: SortOrderInput | SortOrder
    _count?: project_linkedin_teamsCountOrderByAggregateInput
    _avg?: project_linkedin_teamsAvgOrderByAggregateInput
    _max?: project_linkedin_teamsMaxOrderByAggregateInput
    _min?: project_linkedin_teamsMinOrderByAggregateInput
    _sum?: project_linkedin_teamsSumOrderByAggregateInput
  }

  export type project_linkedin_teamsScalarWhereWithAggregatesInput = {
    AND?: project_linkedin_teamsScalarWhereWithAggregatesInput | project_linkedin_teamsScalarWhereWithAggregatesInput[]
    OR?: project_linkedin_teamsScalarWhereWithAggregatesInput[]
    NOT?: project_linkedin_teamsScalarWhereWithAggregatesInput | project_linkedin_teamsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"project_linkedin_teams"> | number
    project_id?: IntNullableWithAggregatesFilter<"project_linkedin_teams"> | number | null
    url?: StringNullableWithAggregatesFilter<"project_linkedin_teams"> | string | null
  }

  export type project_partnersWhereInput = {
    AND?: project_partnersWhereInput | project_partnersWhereInput[]
    OR?: project_partnersWhereInput[]
    NOT?: project_partnersWhereInput | project_partnersWhereInput[]
    id?: IntFilter<"project_partners"> | number
    project_id?: IntNullableFilter<"project_partners"> | number | null
    name?: StringNullableFilter<"project_partners"> | string | null
    projects?: XOR<ProjectsNullableScalarRelationFilter, projectsWhereInput> | null
  }

  export type project_partnersOrderByWithRelationInput = {
    id?: SortOrder
    project_id?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    projects?: projectsOrderByWithRelationInput
  }

  export type project_partnersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: project_partnersWhereInput | project_partnersWhereInput[]
    OR?: project_partnersWhereInput[]
    NOT?: project_partnersWhereInput | project_partnersWhereInput[]
    project_id?: IntNullableFilter<"project_partners"> | number | null
    name?: StringNullableFilter<"project_partners"> | string | null
    projects?: XOR<ProjectsNullableScalarRelationFilter, projectsWhereInput> | null
  }, "id">

  export type project_partnersOrderByWithAggregationInput = {
    id?: SortOrder
    project_id?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    _count?: project_partnersCountOrderByAggregateInput
    _avg?: project_partnersAvgOrderByAggregateInput
    _max?: project_partnersMaxOrderByAggregateInput
    _min?: project_partnersMinOrderByAggregateInput
    _sum?: project_partnersSumOrderByAggregateInput
  }

  export type project_partnersScalarWhereWithAggregatesInput = {
    AND?: project_partnersScalarWhereWithAggregatesInput | project_partnersScalarWhereWithAggregatesInput[]
    OR?: project_partnersScalarWhereWithAggregatesInput[]
    NOT?: project_partnersScalarWhereWithAggregatesInput | project_partnersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"project_partners"> | number
    project_id?: IntNullableWithAggregatesFilter<"project_partners"> | number | null
    name?: StringNullableWithAggregatesFilter<"project_partners"> | string | null
  }

  export type project_teamsWhereInput = {
    AND?: project_teamsWhereInput | project_teamsWhereInput[]
    OR?: project_teamsWhereInput[]
    NOT?: project_teamsWhereInput | project_teamsWhereInput[]
    id?: IntFilter<"project_teams"> | number
    project_id?: IntNullableFilter<"project_teams"> | number | null
    name?: StringNullableFilter<"project_teams"> | string | null
    projects?: XOR<ProjectsNullableScalarRelationFilter, projectsWhereInput> | null
  }

  export type project_teamsOrderByWithRelationInput = {
    id?: SortOrder
    project_id?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    projects?: projectsOrderByWithRelationInput
  }

  export type project_teamsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: project_teamsWhereInput | project_teamsWhereInput[]
    OR?: project_teamsWhereInput[]
    NOT?: project_teamsWhereInput | project_teamsWhereInput[]
    project_id?: IntNullableFilter<"project_teams"> | number | null
    name?: StringNullableFilter<"project_teams"> | string | null
    projects?: XOR<ProjectsNullableScalarRelationFilter, projectsWhereInput> | null
  }, "id">

  export type project_teamsOrderByWithAggregationInput = {
    id?: SortOrder
    project_id?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    _count?: project_teamsCountOrderByAggregateInput
    _avg?: project_teamsAvgOrderByAggregateInput
    _max?: project_teamsMaxOrderByAggregateInput
    _min?: project_teamsMinOrderByAggregateInput
    _sum?: project_teamsSumOrderByAggregateInput
  }

  export type project_teamsScalarWhereWithAggregatesInput = {
    AND?: project_teamsScalarWhereWithAggregatesInput | project_teamsScalarWhereWithAggregatesInput[]
    OR?: project_teamsScalarWhereWithAggregatesInput[]
    NOT?: project_teamsScalarWhereWithAggregatesInput | project_teamsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"project_teams"> | number
    project_id?: IntNullableWithAggregatesFilter<"project_teams"> | number | null
    name?: StringNullableWithAggregatesFilter<"project_teams"> | string | null
  }

  export type projectsWhereInput = {
    AND?: projectsWhereInput | projectsWhereInput[]
    OR?: projectsWhereInput[]
    NOT?: projectsWhereInput | projectsWhereInput[]
    id?: IntFilter<"projects"> | number
    user_id?: IntFilter<"projects"> | number
    slug?: StringFilter<"projects"> | string
    demo?: StringNullableFilter<"projects"> | string | null
    head?: StringNullableFilter<"projects"> | string | null
    status?: StringFilter<"projects"> | string
    title?: StringFilter<"projects"> | string
    years?: StringFilter<"projects"> | string
    role?: StringNullableFilter<"projects"> | string | null
    description?: StringFilter<"projects"> | string
    image?: StringFilter<"projects"> | string
    project_icons?: Project_iconsListRelationFilter
    project_linkedin_partners?: Project_linkedin_partnersListRelationFilter
    project_linkedin_teams?: Project_linkedin_teamsListRelationFilter
    project_partners?: Project_partnersListRelationFilter
    project_teams?: Project_teamsListRelationFilter
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type projectsOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    slug?: SortOrder
    demo?: SortOrderInput | SortOrder
    head?: SortOrderInput | SortOrder
    status?: SortOrder
    title?: SortOrder
    years?: SortOrder
    role?: SortOrderInput | SortOrder
    description?: SortOrder
    image?: SortOrder
    project_icons?: project_iconsOrderByRelationAggregateInput
    project_linkedin_partners?: project_linkedin_partnersOrderByRelationAggregateInput
    project_linkedin_teams?: project_linkedin_teamsOrderByRelationAggregateInput
    project_partners?: project_partnersOrderByRelationAggregateInput
    project_teams?: project_teamsOrderByRelationAggregateInput
    users?: usersOrderByWithRelationInput
  }

  export type projectsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    slug?: string
    AND?: projectsWhereInput | projectsWhereInput[]
    OR?: projectsWhereInput[]
    NOT?: projectsWhereInput | projectsWhereInput[]
    user_id?: IntFilter<"projects"> | number
    demo?: StringNullableFilter<"projects"> | string | null
    head?: StringNullableFilter<"projects"> | string | null
    status?: StringFilter<"projects"> | string
    title?: StringFilter<"projects"> | string
    years?: StringFilter<"projects"> | string
    role?: StringNullableFilter<"projects"> | string | null
    description?: StringFilter<"projects"> | string
    image?: StringFilter<"projects"> | string
    project_icons?: Project_iconsListRelationFilter
    project_linkedin_partners?: Project_linkedin_partnersListRelationFilter
    project_linkedin_teams?: Project_linkedin_teamsListRelationFilter
    project_partners?: Project_partnersListRelationFilter
    project_teams?: Project_teamsListRelationFilter
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id" | "slug">

  export type projectsOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    slug?: SortOrder
    demo?: SortOrderInput | SortOrder
    head?: SortOrderInput | SortOrder
    status?: SortOrder
    title?: SortOrder
    years?: SortOrder
    role?: SortOrderInput | SortOrder
    description?: SortOrder
    image?: SortOrder
    _count?: projectsCountOrderByAggregateInput
    _avg?: projectsAvgOrderByAggregateInput
    _max?: projectsMaxOrderByAggregateInput
    _min?: projectsMinOrderByAggregateInput
    _sum?: projectsSumOrderByAggregateInput
  }

  export type projectsScalarWhereWithAggregatesInput = {
    AND?: projectsScalarWhereWithAggregatesInput | projectsScalarWhereWithAggregatesInput[]
    OR?: projectsScalarWhereWithAggregatesInput[]
    NOT?: projectsScalarWhereWithAggregatesInput | projectsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"projects"> | number
    user_id?: IntWithAggregatesFilter<"projects"> | number
    slug?: StringWithAggregatesFilter<"projects"> | string
    demo?: StringNullableWithAggregatesFilter<"projects"> | string | null
    head?: StringNullableWithAggregatesFilter<"projects"> | string | null
    status?: StringWithAggregatesFilter<"projects"> | string
    title?: StringWithAggregatesFilter<"projects"> | string
    years?: StringWithAggregatesFilter<"projects"> | string
    role?: StringNullableWithAggregatesFilter<"projects"> | string | null
    description?: StringWithAggregatesFilter<"projects"> | string
    image?: StringWithAggregatesFilter<"projects"> | string
  }

  export type loginCreateInput = {
    token: string
    created_at?: Date | string | null
    expires_at?: Date | string | null
    users: usersCreateNestedOneWithoutLoginInput
  }

  export type loginUncheckedCreateInput = {
    id?: number
    user_id: number
    token: string
    created_at?: Date | string | null
    expires_at?: Date | string | null
  }

  export type loginUpdateInput = {
    token?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUpdateOneRequiredWithoutLoginNestedInput
  }

  export type loginUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type loginCreateManyInput = {
    id?: number
    user_id: number
    token: string
    created_at?: Date | string | null
    expires_at?: Date | string | null
  }

  export type loginUpdateManyMutationInput = {
    token?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type loginUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersCreateInput = {
    username: string
    password: string
    blogs?: blogsCreateNestedManyWithoutUsersInput
    login?: loginCreateNestedManyWithoutUsersInput
    projects?: projectsCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateInput = {
    id?: number
    username: string
    password: string
    blogs?: blogsUncheckedCreateNestedManyWithoutUsersInput
    login?: loginUncheckedCreateNestedManyWithoutUsersInput
    projects?: projectsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    blogs?: blogsUpdateManyWithoutUsersNestedInput
    login?: loginUpdateManyWithoutUsersNestedInput
    projects?: projectsUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    blogs?: blogsUncheckedUpdateManyWithoutUsersNestedInput
    login?: loginUncheckedUpdateManyWithoutUsersNestedInput
    projects?: projectsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersCreateManyInput = {
    id?: number
    username: string
    password: string
  }

  export type usersUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type usersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type blogsCreateInput = {
    image?: string | null
    date: Date | string
    title: string
    description: string
    content?: string | null
    updated_at?: Date | string | null
    users: usersCreateNestedOneWithoutBlogsInput
  }

  export type blogsUncheckedCreateInput = {
    id?: number
    user_id: number
    image?: string | null
    date: Date | string
    title: string
    description: string
    content?: string | null
    updated_at?: Date | string | null
  }

  export type blogsUpdateInput = {
    image?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUpdateOneRequiredWithoutBlogsNestedInput
  }

  export type blogsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type blogsCreateManyInput = {
    id?: number
    user_id: number
    image?: string | null
    date: Date | string
    title: string
    description: string
    content?: string | null
    updated_at?: Date | string | null
  }

  export type blogsUpdateManyMutationInput = {
    image?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type blogsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type project_iconsCreateInput = {
    icon_name?: string | null
    projects?: projectsCreateNestedOneWithoutProject_iconsInput
  }

  export type project_iconsUncheckedCreateInput = {
    id?: number
    project_id?: number | null
    icon_name?: string | null
  }

  export type project_iconsUpdateInput = {
    icon_name?: NullableStringFieldUpdateOperationsInput | string | null
    projects?: projectsUpdateOneWithoutProject_iconsNestedInput
  }

  export type project_iconsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    project_id?: NullableIntFieldUpdateOperationsInput | number | null
    icon_name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type project_iconsCreateManyInput = {
    id?: number
    project_id?: number | null
    icon_name?: string | null
  }

  export type project_iconsUpdateManyMutationInput = {
    icon_name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type project_iconsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    project_id?: NullableIntFieldUpdateOperationsInput | number | null
    icon_name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type project_linkedin_partnersCreateInput = {
    url?: string | null
    projects?: projectsCreateNestedOneWithoutProject_linkedin_partnersInput
  }

  export type project_linkedin_partnersUncheckedCreateInput = {
    id?: number
    project_id?: number | null
    url?: string | null
  }

  export type project_linkedin_partnersUpdateInput = {
    url?: NullableStringFieldUpdateOperationsInput | string | null
    projects?: projectsUpdateOneWithoutProject_linkedin_partnersNestedInput
  }

  export type project_linkedin_partnersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    project_id?: NullableIntFieldUpdateOperationsInput | number | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type project_linkedin_partnersCreateManyInput = {
    id?: number
    project_id?: number | null
    url?: string | null
  }

  export type project_linkedin_partnersUpdateManyMutationInput = {
    url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type project_linkedin_partnersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    project_id?: NullableIntFieldUpdateOperationsInput | number | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type project_linkedin_teamsCreateInput = {
    url?: string | null
    projects?: projectsCreateNestedOneWithoutProject_linkedin_teamsInput
  }

  export type project_linkedin_teamsUncheckedCreateInput = {
    id?: number
    project_id?: number | null
    url?: string | null
  }

  export type project_linkedin_teamsUpdateInput = {
    url?: NullableStringFieldUpdateOperationsInput | string | null
    projects?: projectsUpdateOneWithoutProject_linkedin_teamsNestedInput
  }

  export type project_linkedin_teamsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    project_id?: NullableIntFieldUpdateOperationsInput | number | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type project_linkedin_teamsCreateManyInput = {
    id?: number
    project_id?: number | null
    url?: string | null
  }

  export type project_linkedin_teamsUpdateManyMutationInput = {
    url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type project_linkedin_teamsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    project_id?: NullableIntFieldUpdateOperationsInput | number | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type project_partnersCreateInput = {
    name?: string | null
    projects?: projectsCreateNestedOneWithoutProject_partnersInput
  }

  export type project_partnersUncheckedCreateInput = {
    id?: number
    project_id?: number | null
    name?: string | null
  }

  export type project_partnersUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    projects?: projectsUpdateOneWithoutProject_partnersNestedInput
  }

  export type project_partnersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    project_id?: NullableIntFieldUpdateOperationsInput | number | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type project_partnersCreateManyInput = {
    id?: number
    project_id?: number | null
    name?: string | null
  }

  export type project_partnersUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type project_partnersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    project_id?: NullableIntFieldUpdateOperationsInput | number | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type project_teamsCreateInput = {
    name?: string | null
    projects?: projectsCreateNestedOneWithoutProject_teamsInput
  }

  export type project_teamsUncheckedCreateInput = {
    id?: number
    project_id?: number | null
    name?: string | null
  }

  export type project_teamsUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    projects?: projectsUpdateOneWithoutProject_teamsNestedInput
  }

  export type project_teamsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    project_id?: NullableIntFieldUpdateOperationsInput | number | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type project_teamsCreateManyInput = {
    id?: number
    project_id?: number | null
    name?: string | null
  }

  export type project_teamsUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type project_teamsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    project_id?: NullableIntFieldUpdateOperationsInput | number | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type projectsCreateInput = {
    slug: string
    demo?: string | null
    head?: string | null
    status: string
    title: string
    years: string
    role?: string | null
    description: string
    image: string
    project_icons?: project_iconsCreateNestedManyWithoutProjectsInput
    project_linkedin_partners?: project_linkedin_partnersCreateNestedManyWithoutProjectsInput
    project_linkedin_teams?: project_linkedin_teamsCreateNestedManyWithoutProjectsInput
    project_partners?: project_partnersCreateNestedManyWithoutProjectsInput
    project_teams?: project_teamsCreateNestedManyWithoutProjectsInput
    users: usersCreateNestedOneWithoutProjectsInput
  }

  export type projectsUncheckedCreateInput = {
    id?: number
    user_id: number
    slug: string
    demo?: string | null
    head?: string | null
    status: string
    title: string
    years: string
    role?: string | null
    description: string
    image: string
    project_icons?: project_iconsUncheckedCreateNestedManyWithoutProjectsInput
    project_linkedin_partners?: project_linkedin_partnersUncheckedCreateNestedManyWithoutProjectsInput
    project_linkedin_teams?: project_linkedin_teamsUncheckedCreateNestedManyWithoutProjectsInput
    project_partners?: project_partnersUncheckedCreateNestedManyWithoutProjectsInput
    project_teams?: project_teamsUncheckedCreateNestedManyWithoutProjectsInput
  }

  export type projectsUpdateInput = {
    slug?: StringFieldUpdateOperationsInput | string
    demo?: NullableStringFieldUpdateOperationsInput | string | null
    head?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    years?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    project_icons?: project_iconsUpdateManyWithoutProjectsNestedInput
    project_linkedin_partners?: project_linkedin_partnersUpdateManyWithoutProjectsNestedInput
    project_linkedin_teams?: project_linkedin_teamsUpdateManyWithoutProjectsNestedInput
    project_partners?: project_partnersUpdateManyWithoutProjectsNestedInput
    project_teams?: project_teamsUpdateManyWithoutProjectsNestedInput
    users?: usersUpdateOneRequiredWithoutProjectsNestedInput
  }

  export type projectsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    demo?: NullableStringFieldUpdateOperationsInput | string | null
    head?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    years?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    project_icons?: project_iconsUncheckedUpdateManyWithoutProjectsNestedInput
    project_linkedin_partners?: project_linkedin_partnersUncheckedUpdateManyWithoutProjectsNestedInput
    project_linkedin_teams?: project_linkedin_teamsUncheckedUpdateManyWithoutProjectsNestedInput
    project_partners?: project_partnersUncheckedUpdateManyWithoutProjectsNestedInput
    project_teams?: project_teamsUncheckedUpdateManyWithoutProjectsNestedInput
  }

  export type projectsCreateManyInput = {
    id?: number
    user_id: number
    slug: string
    demo?: string | null
    head?: string | null
    status: string
    title: string
    years: string
    role?: string | null
    description: string
    image: string
  }

  export type projectsUpdateManyMutationInput = {
    slug?: StringFieldUpdateOperationsInput | string
    demo?: NullableStringFieldUpdateOperationsInput | string | null
    head?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    years?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
  }

  export type projectsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    demo?: NullableStringFieldUpdateOperationsInput | string | null
    head?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    years?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UsersScalarRelationFilter = {
    is?: usersWhereInput
    isNot?: usersWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type loginCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    token?: SortOrder
    created_at?: SortOrder
    expires_at?: SortOrder
  }

  export type loginAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type loginMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    token?: SortOrder
    created_at?: SortOrder
    expires_at?: SortOrder
  }

  export type loginMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    token?: SortOrder
    created_at?: SortOrder
    expires_at?: SortOrder
  }

  export type loginSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BlogsListRelationFilter = {
    every?: blogsWhereInput
    some?: blogsWhereInput
    none?: blogsWhereInput
  }

  export type LoginListRelationFilter = {
    every?: loginWhereInput
    some?: loginWhereInput
    none?: loginWhereInput
  }

  export type ProjectsListRelationFilter = {
    every?: projectsWhereInput
    some?: projectsWhereInput
    none?: projectsWhereInput
  }

  export type blogsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type loginOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type projectsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type blogsCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    image?: SortOrder
    date?: SortOrder
    title?: SortOrder
    description?: SortOrder
    content?: SortOrder
    updated_at?: SortOrder
  }

  export type blogsAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type blogsMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    image?: SortOrder
    date?: SortOrder
    title?: SortOrder
    description?: SortOrder
    content?: SortOrder
    updated_at?: SortOrder
  }

  export type blogsMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    image?: SortOrder
    date?: SortOrder
    title?: SortOrder
    description?: SortOrder
    content?: SortOrder
    updated_at?: SortOrder
  }

  export type blogsSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type ProjectsNullableScalarRelationFilter = {
    is?: projectsWhereInput | null
    isNot?: projectsWhereInput | null
  }

  export type project_iconsCountOrderByAggregateInput = {
    id?: SortOrder
    project_id?: SortOrder
    icon_name?: SortOrder
  }

  export type project_iconsAvgOrderByAggregateInput = {
    id?: SortOrder
    project_id?: SortOrder
  }

  export type project_iconsMaxOrderByAggregateInput = {
    id?: SortOrder
    project_id?: SortOrder
    icon_name?: SortOrder
  }

  export type project_iconsMinOrderByAggregateInput = {
    id?: SortOrder
    project_id?: SortOrder
    icon_name?: SortOrder
  }

  export type project_iconsSumOrderByAggregateInput = {
    id?: SortOrder
    project_id?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type project_linkedin_partnersCountOrderByAggregateInput = {
    id?: SortOrder
    project_id?: SortOrder
    url?: SortOrder
  }

  export type project_linkedin_partnersAvgOrderByAggregateInput = {
    id?: SortOrder
    project_id?: SortOrder
  }

  export type project_linkedin_partnersMaxOrderByAggregateInput = {
    id?: SortOrder
    project_id?: SortOrder
    url?: SortOrder
  }

  export type project_linkedin_partnersMinOrderByAggregateInput = {
    id?: SortOrder
    project_id?: SortOrder
    url?: SortOrder
  }

  export type project_linkedin_partnersSumOrderByAggregateInput = {
    id?: SortOrder
    project_id?: SortOrder
  }

  export type project_linkedin_teamsCountOrderByAggregateInput = {
    id?: SortOrder
    project_id?: SortOrder
    url?: SortOrder
  }

  export type project_linkedin_teamsAvgOrderByAggregateInput = {
    id?: SortOrder
    project_id?: SortOrder
  }

  export type project_linkedin_teamsMaxOrderByAggregateInput = {
    id?: SortOrder
    project_id?: SortOrder
    url?: SortOrder
  }

  export type project_linkedin_teamsMinOrderByAggregateInput = {
    id?: SortOrder
    project_id?: SortOrder
    url?: SortOrder
  }

  export type project_linkedin_teamsSumOrderByAggregateInput = {
    id?: SortOrder
    project_id?: SortOrder
  }

  export type project_partnersCountOrderByAggregateInput = {
    id?: SortOrder
    project_id?: SortOrder
    name?: SortOrder
  }

  export type project_partnersAvgOrderByAggregateInput = {
    id?: SortOrder
    project_id?: SortOrder
  }

  export type project_partnersMaxOrderByAggregateInput = {
    id?: SortOrder
    project_id?: SortOrder
    name?: SortOrder
  }

  export type project_partnersMinOrderByAggregateInput = {
    id?: SortOrder
    project_id?: SortOrder
    name?: SortOrder
  }

  export type project_partnersSumOrderByAggregateInput = {
    id?: SortOrder
    project_id?: SortOrder
  }

  export type project_teamsCountOrderByAggregateInput = {
    id?: SortOrder
    project_id?: SortOrder
    name?: SortOrder
  }

  export type project_teamsAvgOrderByAggregateInput = {
    id?: SortOrder
    project_id?: SortOrder
  }

  export type project_teamsMaxOrderByAggregateInput = {
    id?: SortOrder
    project_id?: SortOrder
    name?: SortOrder
  }

  export type project_teamsMinOrderByAggregateInput = {
    id?: SortOrder
    project_id?: SortOrder
    name?: SortOrder
  }

  export type project_teamsSumOrderByAggregateInput = {
    id?: SortOrder
    project_id?: SortOrder
  }

  export type Project_iconsListRelationFilter = {
    every?: project_iconsWhereInput
    some?: project_iconsWhereInput
    none?: project_iconsWhereInput
  }

  export type Project_linkedin_partnersListRelationFilter = {
    every?: project_linkedin_partnersWhereInput
    some?: project_linkedin_partnersWhereInput
    none?: project_linkedin_partnersWhereInput
  }

  export type Project_linkedin_teamsListRelationFilter = {
    every?: project_linkedin_teamsWhereInput
    some?: project_linkedin_teamsWhereInput
    none?: project_linkedin_teamsWhereInput
  }

  export type Project_partnersListRelationFilter = {
    every?: project_partnersWhereInput
    some?: project_partnersWhereInput
    none?: project_partnersWhereInput
  }

  export type Project_teamsListRelationFilter = {
    every?: project_teamsWhereInput
    some?: project_teamsWhereInput
    none?: project_teamsWhereInput
  }

  export type project_iconsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type project_linkedin_partnersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type project_linkedin_teamsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type project_partnersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type project_teamsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type projectsCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    slug?: SortOrder
    demo?: SortOrder
    head?: SortOrder
    status?: SortOrder
    title?: SortOrder
    years?: SortOrder
    role?: SortOrder
    description?: SortOrder
    image?: SortOrder
  }

  export type projectsAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type projectsMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    slug?: SortOrder
    demo?: SortOrder
    head?: SortOrder
    status?: SortOrder
    title?: SortOrder
    years?: SortOrder
    role?: SortOrder
    description?: SortOrder
    image?: SortOrder
  }

  export type projectsMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    slug?: SortOrder
    demo?: SortOrder
    head?: SortOrder
    status?: SortOrder
    title?: SortOrder
    years?: SortOrder
    role?: SortOrder
    description?: SortOrder
    image?: SortOrder
  }

  export type projectsSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type usersCreateNestedOneWithoutLoginInput = {
    create?: XOR<usersCreateWithoutLoginInput, usersUncheckedCreateWithoutLoginInput>
    connectOrCreate?: usersCreateOrConnectWithoutLoginInput
    connect?: usersWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type usersUpdateOneRequiredWithoutLoginNestedInput = {
    create?: XOR<usersCreateWithoutLoginInput, usersUncheckedCreateWithoutLoginInput>
    connectOrCreate?: usersCreateOrConnectWithoutLoginInput
    upsert?: usersUpsertWithoutLoginInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutLoginInput, usersUpdateWithoutLoginInput>, usersUncheckedUpdateWithoutLoginInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type blogsCreateNestedManyWithoutUsersInput = {
    create?: XOR<blogsCreateWithoutUsersInput, blogsUncheckedCreateWithoutUsersInput> | blogsCreateWithoutUsersInput[] | blogsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: blogsCreateOrConnectWithoutUsersInput | blogsCreateOrConnectWithoutUsersInput[]
    createMany?: blogsCreateManyUsersInputEnvelope
    connect?: blogsWhereUniqueInput | blogsWhereUniqueInput[]
  }

  export type loginCreateNestedManyWithoutUsersInput = {
    create?: XOR<loginCreateWithoutUsersInput, loginUncheckedCreateWithoutUsersInput> | loginCreateWithoutUsersInput[] | loginUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: loginCreateOrConnectWithoutUsersInput | loginCreateOrConnectWithoutUsersInput[]
    createMany?: loginCreateManyUsersInputEnvelope
    connect?: loginWhereUniqueInput | loginWhereUniqueInput[]
  }

  export type projectsCreateNestedManyWithoutUsersInput = {
    create?: XOR<projectsCreateWithoutUsersInput, projectsUncheckedCreateWithoutUsersInput> | projectsCreateWithoutUsersInput[] | projectsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: projectsCreateOrConnectWithoutUsersInput | projectsCreateOrConnectWithoutUsersInput[]
    createMany?: projectsCreateManyUsersInputEnvelope
    connect?: projectsWhereUniqueInput | projectsWhereUniqueInput[]
  }

  export type blogsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<blogsCreateWithoutUsersInput, blogsUncheckedCreateWithoutUsersInput> | blogsCreateWithoutUsersInput[] | blogsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: blogsCreateOrConnectWithoutUsersInput | blogsCreateOrConnectWithoutUsersInput[]
    createMany?: blogsCreateManyUsersInputEnvelope
    connect?: blogsWhereUniqueInput | blogsWhereUniqueInput[]
  }

  export type loginUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<loginCreateWithoutUsersInput, loginUncheckedCreateWithoutUsersInput> | loginCreateWithoutUsersInput[] | loginUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: loginCreateOrConnectWithoutUsersInput | loginCreateOrConnectWithoutUsersInput[]
    createMany?: loginCreateManyUsersInputEnvelope
    connect?: loginWhereUniqueInput | loginWhereUniqueInput[]
  }

  export type projectsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<projectsCreateWithoutUsersInput, projectsUncheckedCreateWithoutUsersInput> | projectsCreateWithoutUsersInput[] | projectsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: projectsCreateOrConnectWithoutUsersInput | projectsCreateOrConnectWithoutUsersInput[]
    createMany?: projectsCreateManyUsersInputEnvelope
    connect?: projectsWhereUniqueInput | projectsWhereUniqueInput[]
  }

  export type blogsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<blogsCreateWithoutUsersInput, blogsUncheckedCreateWithoutUsersInput> | blogsCreateWithoutUsersInput[] | blogsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: blogsCreateOrConnectWithoutUsersInput | blogsCreateOrConnectWithoutUsersInput[]
    upsert?: blogsUpsertWithWhereUniqueWithoutUsersInput | blogsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: blogsCreateManyUsersInputEnvelope
    set?: blogsWhereUniqueInput | blogsWhereUniqueInput[]
    disconnect?: blogsWhereUniqueInput | blogsWhereUniqueInput[]
    delete?: blogsWhereUniqueInput | blogsWhereUniqueInput[]
    connect?: blogsWhereUniqueInput | blogsWhereUniqueInput[]
    update?: blogsUpdateWithWhereUniqueWithoutUsersInput | blogsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: blogsUpdateManyWithWhereWithoutUsersInput | blogsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: blogsScalarWhereInput | blogsScalarWhereInput[]
  }

  export type loginUpdateManyWithoutUsersNestedInput = {
    create?: XOR<loginCreateWithoutUsersInput, loginUncheckedCreateWithoutUsersInput> | loginCreateWithoutUsersInput[] | loginUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: loginCreateOrConnectWithoutUsersInput | loginCreateOrConnectWithoutUsersInput[]
    upsert?: loginUpsertWithWhereUniqueWithoutUsersInput | loginUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: loginCreateManyUsersInputEnvelope
    set?: loginWhereUniqueInput | loginWhereUniqueInput[]
    disconnect?: loginWhereUniqueInput | loginWhereUniqueInput[]
    delete?: loginWhereUniqueInput | loginWhereUniqueInput[]
    connect?: loginWhereUniqueInput | loginWhereUniqueInput[]
    update?: loginUpdateWithWhereUniqueWithoutUsersInput | loginUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: loginUpdateManyWithWhereWithoutUsersInput | loginUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: loginScalarWhereInput | loginScalarWhereInput[]
  }

  export type projectsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<projectsCreateWithoutUsersInput, projectsUncheckedCreateWithoutUsersInput> | projectsCreateWithoutUsersInput[] | projectsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: projectsCreateOrConnectWithoutUsersInput | projectsCreateOrConnectWithoutUsersInput[]
    upsert?: projectsUpsertWithWhereUniqueWithoutUsersInput | projectsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: projectsCreateManyUsersInputEnvelope
    set?: projectsWhereUniqueInput | projectsWhereUniqueInput[]
    disconnect?: projectsWhereUniqueInput | projectsWhereUniqueInput[]
    delete?: projectsWhereUniqueInput | projectsWhereUniqueInput[]
    connect?: projectsWhereUniqueInput | projectsWhereUniqueInput[]
    update?: projectsUpdateWithWhereUniqueWithoutUsersInput | projectsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: projectsUpdateManyWithWhereWithoutUsersInput | projectsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: projectsScalarWhereInput | projectsScalarWhereInput[]
  }

  export type blogsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<blogsCreateWithoutUsersInput, blogsUncheckedCreateWithoutUsersInput> | blogsCreateWithoutUsersInput[] | blogsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: blogsCreateOrConnectWithoutUsersInput | blogsCreateOrConnectWithoutUsersInput[]
    upsert?: blogsUpsertWithWhereUniqueWithoutUsersInput | blogsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: blogsCreateManyUsersInputEnvelope
    set?: blogsWhereUniqueInput | blogsWhereUniqueInput[]
    disconnect?: blogsWhereUniqueInput | blogsWhereUniqueInput[]
    delete?: blogsWhereUniqueInput | blogsWhereUniqueInput[]
    connect?: blogsWhereUniqueInput | blogsWhereUniqueInput[]
    update?: blogsUpdateWithWhereUniqueWithoutUsersInput | blogsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: blogsUpdateManyWithWhereWithoutUsersInput | blogsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: blogsScalarWhereInput | blogsScalarWhereInput[]
  }

  export type loginUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<loginCreateWithoutUsersInput, loginUncheckedCreateWithoutUsersInput> | loginCreateWithoutUsersInput[] | loginUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: loginCreateOrConnectWithoutUsersInput | loginCreateOrConnectWithoutUsersInput[]
    upsert?: loginUpsertWithWhereUniqueWithoutUsersInput | loginUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: loginCreateManyUsersInputEnvelope
    set?: loginWhereUniqueInput | loginWhereUniqueInput[]
    disconnect?: loginWhereUniqueInput | loginWhereUniqueInput[]
    delete?: loginWhereUniqueInput | loginWhereUniqueInput[]
    connect?: loginWhereUniqueInput | loginWhereUniqueInput[]
    update?: loginUpdateWithWhereUniqueWithoutUsersInput | loginUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: loginUpdateManyWithWhereWithoutUsersInput | loginUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: loginScalarWhereInput | loginScalarWhereInput[]
  }

  export type projectsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<projectsCreateWithoutUsersInput, projectsUncheckedCreateWithoutUsersInput> | projectsCreateWithoutUsersInput[] | projectsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: projectsCreateOrConnectWithoutUsersInput | projectsCreateOrConnectWithoutUsersInput[]
    upsert?: projectsUpsertWithWhereUniqueWithoutUsersInput | projectsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: projectsCreateManyUsersInputEnvelope
    set?: projectsWhereUniqueInput | projectsWhereUniqueInput[]
    disconnect?: projectsWhereUniqueInput | projectsWhereUniqueInput[]
    delete?: projectsWhereUniqueInput | projectsWhereUniqueInput[]
    connect?: projectsWhereUniqueInput | projectsWhereUniqueInput[]
    update?: projectsUpdateWithWhereUniqueWithoutUsersInput | projectsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: projectsUpdateManyWithWhereWithoutUsersInput | projectsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: projectsScalarWhereInput | projectsScalarWhereInput[]
  }

  export type usersCreateNestedOneWithoutBlogsInput = {
    create?: XOR<usersCreateWithoutBlogsInput, usersUncheckedCreateWithoutBlogsInput>
    connectOrCreate?: usersCreateOrConnectWithoutBlogsInput
    connect?: usersWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type usersUpdateOneRequiredWithoutBlogsNestedInput = {
    create?: XOR<usersCreateWithoutBlogsInput, usersUncheckedCreateWithoutBlogsInput>
    connectOrCreate?: usersCreateOrConnectWithoutBlogsInput
    upsert?: usersUpsertWithoutBlogsInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutBlogsInput, usersUpdateWithoutBlogsInput>, usersUncheckedUpdateWithoutBlogsInput>
  }

  export type projectsCreateNestedOneWithoutProject_iconsInput = {
    create?: XOR<projectsCreateWithoutProject_iconsInput, projectsUncheckedCreateWithoutProject_iconsInput>
    connectOrCreate?: projectsCreateOrConnectWithoutProject_iconsInput
    connect?: projectsWhereUniqueInput
  }

  export type projectsUpdateOneWithoutProject_iconsNestedInput = {
    create?: XOR<projectsCreateWithoutProject_iconsInput, projectsUncheckedCreateWithoutProject_iconsInput>
    connectOrCreate?: projectsCreateOrConnectWithoutProject_iconsInput
    upsert?: projectsUpsertWithoutProject_iconsInput
    disconnect?: projectsWhereInput | boolean
    delete?: projectsWhereInput | boolean
    connect?: projectsWhereUniqueInput
    update?: XOR<XOR<projectsUpdateToOneWithWhereWithoutProject_iconsInput, projectsUpdateWithoutProject_iconsInput>, projectsUncheckedUpdateWithoutProject_iconsInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type projectsCreateNestedOneWithoutProject_linkedin_partnersInput = {
    create?: XOR<projectsCreateWithoutProject_linkedin_partnersInput, projectsUncheckedCreateWithoutProject_linkedin_partnersInput>
    connectOrCreate?: projectsCreateOrConnectWithoutProject_linkedin_partnersInput
    connect?: projectsWhereUniqueInput
  }

  export type projectsUpdateOneWithoutProject_linkedin_partnersNestedInput = {
    create?: XOR<projectsCreateWithoutProject_linkedin_partnersInput, projectsUncheckedCreateWithoutProject_linkedin_partnersInput>
    connectOrCreate?: projectsCreateOrConnectWithoutProject_linkedin_partnersInput
    upsert?: projectsUpsertWithoutProject_linkedin_partnersInput
    disconnect?: projectsWhereInput | boolean
    delete?: projectsWhereInput | boolean
    connect?: projectsWhereUniqueInput
    update?: XOR<XOR<projectsUpdateToOneWithWhereWithoutProject_linkedin_partnersInput, projectsUpdateWithoutProject_linkedin_partnersInput>, projectsUncheckedUpdateWithoutProject_linkedin_partnersInput>
  }

  export type projectsCreateNestedOneWithoutProject_linkedin_teamsInput = {
    create?: XOR<projectsCreateWithoutProject_linkedin_teamsInput, projectsUncheckedCreateWithoutProject_linkedin_teamsInput>
    connectOrCreate?: projectsCreateOrConnectWithoutProject_linkedin_teamsInput
    connect?: projectsWhereUniqueInput
  }

  export type projectsUpdateOneWithoutProject_linkedin_teamsNestedInput = {
    create?: XOR<projectsCreateWithoutProject_linkedin_teamsInput, projectsUncheckedCreateWithoutProject_linkedin_teamsInput>
    connectOrCreate?: projectsCreateOrConnectWithoutProject_linkedin_teamsInput
    upsert?: projectsUpsertWithoutProject_linkedin_teamsInput
    disconnect?: projectsWhereInput | boolean
    delete?: projectsWhereInput | boolean
    connect?: projectsWhereUniqueInput
    update?: XOR<XOR<projectsUpdateToOneWithWhereWithoutProject_linkedin_teamsInput, projectsUpdateWithoutProject_linkedin_teamsInput>, projectsUncheckedUpdateWithoutProject_linkedin_teamsInput>
  }

  export type projectsCreateNestedOneWithoutProject_partnersInput = {
    create?: XOR<projectsCreateWithoutProject_partnersInput, projectsUncheckedCreateWithoutProject_partnersInput>
    connectOrCreate?: projectsCreateOrConnectWithoutProject_partnersInput
    connect?: projectsWhereUniqueInput
  }

  export type projectsUpdateOneWithoutProject_partnersNestedInput = {
    create?: XOR<projectsCreateWithoutProject_partnersInput, projectsUncheckedCreateWithoutProject_partnersInput>
    connectOrCreate?: projectsCreateOrConnectWithoutProject_partnersInput
    upsert?: projectsUpsertWithoutProject_partnersInput
    disconnect?: projectsWhereInput | boolean
    delete?: projectsWhereInput | boolean
    connect?: projectsWhereUniqueInput
    update?: XOR<XOR<projectsUpdateToOneWithWhereWithoutProject_partnersInput, projectsUpdateWithoutProject_partnersInput>, projectsUncheckedUpdateWithoutProject_partnersInput>
  }

  export type projectsCreateNestedOneWithoutProject_teamsInput = {
    create?: XOR<projectsCreateWithoutProject_teamsInput, projectsUncheckedCreateWithoutProject_teamsInput>
    connectOrCreate?: projectsCreateOrConnectWithoutProject_teamsInput
    connect?: projectsWhereUniqueInput
  }

  export type projectsUpdateOneWithoutProject_teamsNestedInput = {
    create?: XOR<projectsCreateWithoutProject_teamsInput, projectsUncheckedCreateWithoutProject_teamsInput>
    connectOrCreate?: projectsCreateOrConnectWithoutProject_teamsInput
    upsert?: projectsUpsertWithoutProject_teamsInput
    disconnect?: projectsWhereInput | boolean
    delete?: projectsWhereInput | boolean
    connect?: projectsWhereUniqueInput
    update?: XOR<XOR<projectsUpdateToOneWithWhereWithoutProject_teamsInput, projectsUpdateWithoutProject_teamsInput>, projectsUncheckedUpdateWithoutProject_teamsInput>
  }

  export type project_iconsCreateNestedManyWithoutProjectsInput = {
    create?: XOR<project_iconsCreateWithoutProjectsInput, project_iconsUncheckedCreateWithoutProjectsInput> | project_iconsCreateWithoutProjectsInput[] | project_iconsUncheckedCreateWithoutProjectsInput[]
    connectOrCreate?: project_iconsCreateOrConnectWithoutProjectsInput | project_iconsCreateOrConnectWithoutProjectsInput[]
    createMany?: project_iconsCreateManyProjectsInputEnvelope
    connect?: project_iconsWhereUniqueInput | project_iconsWhereUniqueInput[]
  }

  export type project_linkedin_partnersCreateNestedManyWithoutProjectsInput = {
    create?: XOR<project_linkedin_partnersCreateWithoutProjectsInput, project_linkedin_partnersUncheckedCreateWithoutProjectsInput> | project_linkedin_partnersCreateWithoutProjectsInput[] | project_linkedin_partnersUncheckedCreateWithoutProjectsInput[]
    connectOrCreate?: project_linkedin_partnersCreateOrConnectWithoutProjectsInput | project_linkedin_partnersCreateOrConnectWithoutProjectsInput[]
    createMany?: project_linkedin_partnersCreateManyProjectsInputEnvelope
    connect?: project_linkedin_partnersWhereUniqueInput | project_linkedin_partnersWhereUniqueInput[]
  }

  export type project_linkedin_teamsCreateNestedManyWithoutProjectsInput = {
    create?: XOR<project_linkedin_teamsCreateWithoutProjectsInput, project_linkedin_teamsUncheckedCreateWithoutProjectsInput> | project_linkedin_teamsCreateWithoutProjectsInput[] | project_linkedin_teamsUncheckedCreateWithoutProjectsInput[]
    connectOrCreate?: project_linkedin_teamsCreateOrConnectWithoutProjectsInput | project_linkedin_teamsCreateOrConnectWithoutProjectsInput[]
    createMany?: project_linkedin_teamsCreateManyProjectsInputEnvelope
    connect?: project_linkedin_teamsWhereUniqueInput | project_linkedin_teamsWhereUniqueInput[]
  }

  export type project_partnersCreateNestedManyWithoutProjectsInput = {
    create?: XOR<project_partnersCreateWithoutProjectsInput, project_partnersUncheckedCreateWithoutProjectsInput> | project_partnersCreateWithoutProjectsInput[] | project_partnersUncheckedCreateWithoutProjectsInput[]
    connectOrCreate?: project_partnersCreateOrConnectWithoutProjectsInput | project_partnersCreateOrConnectWithoutProjectsInput[]
    createMany?: project_partnersCreateManyProjectsInputEnvelope
    connect?: project_partnersWhereUniqueInput | project_partnersWhereUniqueInput[]
  }

  export type project_teamsCreateNestedManyWithoutProjectsInput = {
    create?: XOR<project_teamsCreateWithoutProjectsInput, project_teamsUncheckedCreateWithoutProjectsInput> | project_teamsCreateWithoutProjectsInput[] | project_teamsUncheckedCreateWithoutProjectsInput[]
    connectOrCreate?: project_teamsCreateOrConnectWithoutProjectsInput | project_teamsCreateOrConnectWithoutProjectsInput[]
    createMany?: project_teamsCreateManyProjectsInputEnvelope
    connect?: project_teamsWhereUniqueInput | project_teamsWhereUniqueInput[]
  }

  export type usersCreateNestedOneWithoutProjectsInput = {
    create?: XOR<usersCreateWithoutProjectsInput, usersUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: usersCreateOrConnectWithoutProjectsInput
    connect?: usersWhereUniqueInput
  }

  export type project_iconsUncheckedCreateNestedManyWithoutProjectsInput = {
    create?: XOR<project_iconsCreateWithoutProjectsInput, project_iconsUncheckedCreateWithoutProjectsInput> | project_iconsCreateWithoutProjectsInput[] | project_iconsUncheckedCreateWithoutProjectsInput[]
    connectOrCreate?: project_iconsCreateOrConnectWithoutProjectsInput | project_iconsCreateOrConnectWithoutProjectsInput[]
    createMany?: project_iconsCreateManyProjectsInputEnvelope
    connect?: project_iconsWhereUniqueInput | project_iconsWhereUniqueInput[]
  }

  export type project_linkedin_partnersUncheckedCreateNestedManyWithoutProjectsInput = {
    create?: XOR<project_linkedin_partnersCreateWithoutProjectsInput, project_linkedin_partnersUncheckedCreateWithoutProjectsInput> | project_linkedin_partnersCreateWithoutProjectsInput[] | project_linkedin_partnersUncheckedCreateWithoutProjectsInput[]
    connectOrCreate?: project_linkedin_partnersCreateOrConnectWithoutProjectsInput | project_linkedin_partnersCreateOrConnectWithoutProjectsInput[]
    createMany?: project_linkedin_partnersCreateManyProjectsInputEnvelope
    connect?: project_linkedin_partnersWhereUniqueInput | project_linkedin_partnersWhereUniqueInput[]
  }

  export type project_linkedin_teamsUncheckedCreateNestedManyWithoutProjectsInput = {
    create?: XOR<project_linkedin_teamsCreateWithoutProjectsInput, project_linkedin_teamsUncheckedCreateWithoutProjectsInput> | project_linkedin_teamsCreateWithoutProjectsInput[] | project_linkedin_teamsUncheckedCreateWithoutProjectsInput[]
    connectOrCreate?: project_linkedin_teamsCreateOrConnectWithoutProjectsInput | project_linkedin_teamsCreateOrConnectWithoutProjectsInput[]
    createMany?: project_linkedin_teamsCreateManyProjectsInputEnvelope
    connect?: project_linkedin_teamsWhereUniqueInput | project_linkedin_teamsWhereUniqueInput[]
  }

  export type project_partnersUncheckedCreateNestedManyWithoutProjectsInput = {
    create?: XOR<project_partnersCreateWithoutProjectsInput, project_partnersUncheckedCreateWithoutProjectsInput> | project_partnersCreateWithoutProjectsInput[] | project_partnersUncheckedCreateWithoutProjectsInput[]
    connectOrCreate?: project_partnersCreateOrConnectWithoutProjectsInput | project_partnersCreateOrConnectWithoutProjectsInput[]
    createMany?: project_partnersCreateManyProjectsInputEnvelope
    connect?: project_partnersWhereUniqueInput | project_partnersWhereUniqueInput[]
  }

  export type project_teamsUncheckedCreateNestedManyWithoutProjectsInput = {
    create?: XOR<project_teamsCreateWithoutProjectsInput, project_teamsUncheckedCreateWithoutProjectsInput> | project_teamsCreateWithoutProjectsInput[] | project_teamsUncheckedCreateWithoutProjectsInput[]
    connectOrCreate?: project_teamsCreateOrConnectWithoutProjectsInput | project_teamsCreateOrConnectWithoutProjectsInput[]
    createMany?: project_teamsCreateManyProjectsInputEnvelope
    connect?: project_teamsWhereUniqueInput | project_teamsWhereUniqueInput[]
  }

  export type project_iconsUpdateManyWithoutProjectsNestedInput = {
    create?: XOR<project_iconsCreateWithoutProjectsInput, project_iconsUncheckedCreateWithoutProjectsInput> | project_iconsCreateWithoutProjectsInput[] | project_iconsUncheckedCreateWithoutProjectsInput[]
    connectOrCreate?: project_iconsCreateOrConnectWithoutProjectsInput | project_iconsCreateOrConnectWithoutProjectsInput[]
    upsert?: project_iconsUpsertWithWhereUniqueWithoutProjectsInput | project_iconsUpsertWithWhereUniqueWithoutProjectsInput[]
    createMany?: project_iconsCreateManyProjectsInputEnvelope
    set?: project_iconsWhereUniqueInput | project_iconsWhereUniqueInput[]
    disconnect?: project_iconsWhereUniqueInput | project_iconsWhereUniqueInput[]
    delete?: project_iconsWhereUniqueInput | project_iconsWhereUniqueInput[]
    connect?: project_iconsWhereUniqueInput | project_iconsWhereUniqueInput[]
    update?: project_iconsUpdateWithWhereUniqueWithoutProjectsInput | project_iconsUpdateWithWhereUniqueWithoutProjectsInput[]
    updateMany?: project_iconsUpdateManyWithWhereWithoutProjectsInput | project_iconsUpdateManyWithWhereWithoutProjectsInput[]
    deleteMany?: project_iconsScalarWhereInput | project_iconsScalarWhereInput[]
  }

  export type project_linkedin_partnersUpdateManyWithoutProjectsNestedInput = {
    create?: XOR<project_linkedin_partnersCreateWithoutProjectsInput, project_linkedin_partnersUncheckedCreateWithoutProjectsInput> | project_linkedin_partnersCreateWithoutProjectsInput[] | project_linkedin_partnersUncheckedCreateWithoutProjectsInput[]
    connectOrCreate?: project_linkedin_partnersCreateOrConnectWithoutProjectsInput | project_linkedin_partnersCreateOrConnectWithoutProjectsInput[]
    upsert?: project_linkedin_partnersUpsertWithWhereUniqueWithoutProjectsInput | project_linkedin_partnersUpsertWithWhereUniqueWithoutProjectsInput[]
    createMany?: project_linkedin_partnersCreateManyProjectsInputEnvelope
    set?: project_linkedin_partnersWhereUniqueInput | project_linkedin_partnersWhereUniqueInput[]
    disconnect?: project_linkedin_partnersWhereUniqueInput | project_linkedin_partnersWhereUniqueInput[]
    delete?: project_linkedin_partnersWhereUniqueInput | project_linkedin_partnersWhereUniqueInput[]
    connect?: project_linkedin_partnersWhereUniqueInput | project_linkedin_partnersWhereUniqueInput[]
    update?: project_linkedin_partnersUpdateWithWhereUniqueWithoutProjectsInput | project_linkedin_partnersUpdateWithWhereUniqueWithoutProjectsInput[]
    updateMany?: project_linkedin_partnersUpdateManyWithWhereWithoutProjectsInput | project_linkedin_partnersUpdateManyWithWhereWithoutProjectsInput[]
    deleteMany?: project_linkedin_partnersScalarWhereInput | project_linkedin_partnersScalarWhereInput[]
  }

  export type project_linkedin_teamsUpdateManyWithoutProjectsNestedInput = {
    create?: XOR<project_linkedin_teamsCreateWithoutProjectsInput, project_linkedin_teamsUncheckedCreateWithoutProjectsInput> | project_linkedin_teamsCreateWithoutProjectsInput[] | project_linkedin_teamsUncheckedCreateWithoutProjectsInput[]
    connectOrCreate?: project_linkedin_teamsCreateOrConnectWithoutProjectsInput | project_linkedin_teamsCreateOrConnectWithoutProjectsInput[]
    upsert?: project_linkedin_teamsUpsertWithWhereUniqueWithoutProjectsInput | project_linkedin_teamsUpsertWithWhereUniqueWithoutProjectsInput[]
    createMany?: project_linkedin_teamsCreateManyProjectsInputEnvelope
    set?: project_linkedin_teamsWhereUniqueInput | project_linkedin_teamsWhereUniqueInput[]
    disconnect?: project_linkedin_teamsWhereUniqueInput | project_linkedin_teamsWhereUniqueInput[]
    delete?: project_linkedin_teamsWhereUniqueInput | project_linkedin_teamsWhereUniqueInput[]
    connect?: project_linkedin_teamsWhereUniqueInput | project_linkedin_teamsWhereUniqueInput[]
    update?: project_linkedin_teamsUpdateWithWhereUniqueWithoutProjectsInput | project_linkedin_teamsUpdateWithWhereUniqueWithoutProjectsInput[]
    updateMany?: project_linkedin_teamsUpdateManyWithWhereWithoutProjectsInput | project_linkedin_teamsUpdateManyWithWhereWithoutProjectsInput[]
    deleteMany?: project_linkedin_teamsScalarWhereInput | project_linkedin_teamsScalarWhereInput[]
  }

  export type project_partnersUpdateManyWithoutProjectsNestedInput = {
    create?: XOR<project_partnersCreateWithoutProjectsInput, project_partnersUncheckedCreateWithoutProjectsInput> | project_partnersCreateWithoutProjectsInput[] | project_partnersUncheckedCreateWithoutProjectsInput[]
    connectOrCreate?: project_partnersCreateOrConnectWithoutProjectsInput | project_partnersCreateOrConnectWithoutProjectsInput[]
    upsert?: project_partnersUpsertWithWhereUniqueWithoutProjectsInput | project_partnersUpsertWithWhereUniqueWithoutProjectsInput[]
    createMany?: project_partnersCreateManyProjectsInputEnvelope
    set?: project_partnersWhereUniqueInput | project_partnersWhereUniqueInput[]
    disconnect?: project_partnersWhereUniqueInput | project_partnersWhereUniqueInput[]
    delete?: project_partnersWhereUniqueInput | project_partnersWhereUniqueInput[]
    connect?: project_partnersWhereUniqueInput | project_partnersWhereUniqueInput[]
    update?: project_partnersUpdateWithWhereUniqueWithoutProjectsInput | project_partnersUpdateWithWhereUniqueWithoutProjectsInput[]
    updateMany?: project_partnersUpdateManyWithWhereWithoutProjectsInput | project_partnersUpdateManyWithWhereWithoutProjectsInput[]
    deleteMany?: project_partnersScalarWhereInput | project_partnersScalarWhereInput[]
  }

  export type project_teamsUpdateManyWithoutProjectsNestedInput = {
    create?: XOR<project_teamsCreateWithoutProjectsInput, project_teamsUncheckedCreateWithoutProjectsInput> | project_teamsCreateWithoutProjectsInput[] | project_teamsUncheckedCreateWithoutProjectsInput[]
    connectOrCreate?: project_teamsCreateOrConnectWithoutProjectsInput | project_teamsCreateOrConnectWithoutProjectsInput[]
    upsert?: project_teamsUpsertWithWhereUniqueWithoutProjectsInput | project_teamsUpsertWithWhereUniqueWithoutProjectsInput[]
    createMany?: project_teamsCreateManyProjectsInputEnvelope
    set?: project_teamsWhereUniqueInput | project_teamsWhereUniqueInput[]
    disconnect?: project_teamsWhereUniqueInput | project_teamsWhereUniqueInput[]
    delete?: project_teamsWhereUniqueInput | project_teamsWhereUniqueInput[]
    connect?: project_teamsWhereUniqueInput | project_teamsWhereUniqueInput[]
    update?: project_teamsUpdateWithWhereUniqueWithoutProjectsInput | project_teamsUpdateWithWhereUniqueWithoutProjectsInput[]
    updateMany?: project_teamsUpdateManyWithWhereWithoutProjectsInput | project_teamsUpdateManyWithWhereWithoutProjectsInput[]
    deleteMany?: project_teamsScalarWhereInput | project_teamsScalarWhereInput[]
  }

  export type usersUpdateOneRequiredWithoutProjectsNestedInput = {
    create?: XOR<usersCreateWithoutProjectsInput, usersUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: usersCreateOrConnectWithoutProjectsInput
    upsert?: usersUpsertWithoutProjectsInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutProjectsInput, usersUpdateWithoutProjectsInput>, usersUncheckedUpdateWithoutProjectsInput>
  }

  export type project_iconsUncheckedUpdateManyWithoutProjectsNestedInput = {
    create?: XOR<project_iconsCreateWithoutProjectsInput, project_iconsUncheckedCreateWithoutProjectsInput> | project_iconsCreateWithoutProjectsInput[] | project_iconsUncheckedCreateWithoutProjectsInput[]
    connectOrCreate?: project_iconsCreateOrConnectWithoutProjectsInput | project_iconsCreateOrConnectWithoutProjectsInput[]
    upsert?: project_iconsUpsertWithWhereUniqueWithoutProjectsInput | project_iconsUpsertWithWhereUniqueWithoutProjectsInput[]
    createMany?: project_iconsCreateManyProjectsInputEnvelope
    set?: project_iconsWhereUniqueInput | project_iconsWhereUniqueInput[]
    disconnect?: project_iconsWhereUniqueInput | project_iconsWhereUniqueInput[]
    delete?: project_iconsWhereUniqueInput | project_iconsWhereUniqueInput[]
    connect?: project_iconsWhereUniqueInput | project_iconsWhereUniqueInput[]
    update?: project_iconsUpdateWithWhereUniqueWithoutProjectsInput | project_iconsUpdateWithWhereUniqueWithoutProjectsInput[]
    updateMany?: project_iconsUpdateManyWithWhereWithoutProjectsInput | project_iconsUpdateManyWithWhereWithoutProjectsInput[]
    deleteMany?: project_iconsScalarWhereInput | project_iconsScalarWhereInput[]
  }

  export type project_linkedin_partnersUncheckedUpdateManyWithoutProjectsNestedInput = {
    create?: XOR<project_linkedin_partnersCreateWithoutProjectsInput, project_linkedin_partnersUncheckedCreateWithoutProjectsInput> | project_linkedin_partnersCreateWithoutProjectsInput[] | project_linkedin_partnersUncheckedCreateWithoutProjectsInput[]
    connectOrCreate?: project_linkedin_partnersCreateOrConnectWithoutProjectsInput | project_linkedin_partnersCreateOrConnectWithoutProjectsInput[]
    upsert?: project_linkedin_partnersUpsertWithWhereUniqueWithoutProjectsInput | project_linkedin_partnersUpsertWithWhereUniqueWithoutProjectsInput[]
    createMany?: project_linkedin_partnersCreateManyProjectsInputEnvelope
    set?: project_linkedin_partnersWhereUniqueInput | project_linkedin_partnersWhereUniqueInput[]
    disconnect?: project_linkedin_partnersWhereUniqueInput | project_linkedin_partnersWhereUniqueInput[]
    delete?: project_linkedin_partnersWhereUniqueInput | project_linkedin_partnersWhereUniqueInput[]
    connect?: project_linkedin_partnersWhereUniqueInput | project_linkedin_partnersWhereUniqueInput[]
    update?: project_linkedin_partnersUpdateWithWhereUniqueWithoutProjectsInput | project_linkedin_partnersUpdateWithWhereUniqueWithoutProjectsInput[]
    updateMany?: project_linkedin_partnersUpdateManyWithWhereWithoutProjectsInput | project_linkedin_partnersUpdateManyWithWhereWithoutProjectsInput[]
    deleteMany?: project_linkedin_partnersScalarWhereInput | project_linkedin_partnersScalarWhereInput[]
  }

  export type project_linkedin_teamsUncheckedUpdateManyWithoutProjectsNestedInput = {
    create?: XOR<project_linkedin_teamsCreateWithoutProjectsInput, project_linkedin_teamsUncheckedCreateWithoutProjectsInput> | project_linkedin_teamsCreateWithoutProjectsInput[] | project_linkedin_teamsUncheckedCreateWithoutProjectsInput[]
    connectOrCreate?: project_linkedin_teamsCreateOrConnectWithoutProjectsInput | project_linkedin_teamsCreateOrConnectWithoutProjectsInput[]
    upsert?: project_linkedin_teamsUpsertWithWhereUniqueWithoutProjectsInput | project_linkedin_teamsUpsertWithWhereUniqueWithoutProjectsInput[]
    createMany?: project_linkedin_teamsCreateManyProjectsInputEnvelope
    set?: project_linkedin_teamsWhereUniqueInput | project_linkedin_teamsWhereUniqueInput[]
    disconnect?: project_linkedin_teamsWhereUniqueInput | project_linkedin_teamsWhereUniqueInput[]
    delete?: project_linkedin_teamsWhereUniqueInput | project_linkedin_teamsWhereUniqueInput[]
    connect?: project_linkedin_teamsWhereUniqueInput | project_linkedin_teamsWhereUniqueInput[]
    update?: project_linkedin_teamsUpdateWithWhereUniqueWithoutProjectsInput | project_linkedin_teamsUpdateWithWhereUniqueWithoutProjectsInput[]
    updateMany?: project_linkedin_teamsUpdateManyWithWhereWithoutProjectsInput | project_linkedin_teamsUpdateManyWithWhereWithoutProjectsInput[]
    deleteMany?: project_linkedin_teamsScalarWhereInput | project_linkedin_teamsScalarWhereInput[]
  }

  export type project_partnersUncheckedUpdateManyWithoutProjectsNestedInput = {
    create?: XOR<project_partnersCreateWithoutProjectsInput, project_partnersUncheckedCreateWithoutProjectsInput> | project_partnersCreateWithoutProjectsInput[] | project_partnersUncheckedCreateWithoutProjectsInput[]
    connectOrCreate?: project_partnersCreateOrConnectWithoutProjectsInput | project_partnersCreateOrConnectWithoutProjectsInput[]
    upsert?: project_partnersUpsertWithWhereUniqueWithoutProjectsInput | project_partnersUpsertWithWhereUniqueWithoutProjectsInput[]
    createMany?: project_partnersCreateManyProjectsInputEnvelope
    set?: project_partnersWhereUniqueInput | project_partnersWhereUniqueInput[]
    disconnect?: project_partnersWhereUniqueInput | project_partnersWhereUniqueInput[]
    delete?: project_partnersWhereUniqueInput | project_partnersWhereUniqueInput[]
    connect?: project_partnersWhereUniqueInput | project_partnersWhereUniqueInput[]
    update?: project_partnersUpdateWithWhereUniqueWithoutProjectsInput | project_partnersUpdateWithWhereUniqueWithoutProjectsInput[]
    updateMany?: project_partnersUpdateManyWithWhereWithoutProjectsInput | project_partnersUpdateManyWithWhereWithoutProjectsInput[]
    deleteMany?: project_partnersScalarWhereInput | project_partnersScalarWhereInput[]
  }

  export type project_teamsUncheckedUpdateManyWithoutProjectsNestedInput = {
    create?: XOR<project_teamsCreateWithoutProjectsInput, project_teamsUncheckedCreateWithoutProjectsInput> | project_teamsCreateWithoutProjectsInput[] | project_teamsUncheckedCreateWithoutProjectsInput[]
    connectOrCreate?: project_teamsCreateOrConnectWithoutProjectsInput | project_teamsCreateOrConnectWithoutProjectsInput[]
    upsert?: project_teamsUpsertWithWhereUniqueWithoutProjectsInput | project_teamsUpsertWithWhereUniqueWithoutProjectsInput[]
    createMany?: project_teamsCreateManyProjectsInputEnvelope
    set?: project_teamsWhereUniqueInput | project_teamsWhereUniqueInput[]
    disconnect?: project_teamsWhereUniqueInput | project_teamsWhereUniqueInput[]
    delete?: project_teamsWhereUniqueInput | project_teamsWhereUniqueInput[]
    connect?: project_teamsWhereUniqueInput | project_teamsWhereUniqueInput[]
    update?: project_teamsUpdateWithWhereUniqueWithoutProjectsInput | project_teamsUpdateWithWhereUniqueWithoutProjectsInput[]
    updateMany?: project_teamsUpdateManyWithWhereWithoutProjectsInput | project_teamsUpdateManyWithWhereWithoutProjectsInput[]
    deleteMany?: project_teamsScalarWhereInput | project_teamsScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type usersCreateWithoutLoginInput = {
    username: string
    password: string
    blogs?: blogsCreateNestedManyWithoutUsersInput
    projects?: projectsCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutLoginInput = {
    id?: number
    username: string
    password: string
    blogs?: blogsUncheckedCreateNestedManyWithoutUsersInput
    projects?: projectsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutLoginInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutLoginInput, usersUncheckedCreateWithoutLoginInput>
  }

  export type usersUpsertWithoutLoginInput = {
    update: XOR<usersUpdateWithoutLoginInput, usersUncheckedUpdateWithoutLoginInput>
    create: XOR<usersCreateWithoutLoginInput, usersUncheckedCreateWithoutLoginInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutLoginInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutLoginInput, usersUncheckedUpdateWithoutLoginInput>
  }

  export type usersUpdateWithoutLoginInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    blogs?: blogsUpdateManyWithoutUsersNestedInput
    projects?: projectsUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutLoginInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    blogs?: blogsUncheckedUpdateManyWithoutUsersNestedInput
    projects?: projectsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type blogsCreateWithoutUsersInput = {
    image?: string | null
    date: Date | string
    title: string
    description: string
    content?: string | null
    updated_at?: Date | string | null
  }

  export type blogsUncheckedCreateWithoutUsersInput = {
    id?: number
    image?: string | null
    date: Date | string
    title: string
    description: string
    content?: string | null
    updated_at?: Date | string | null
  }

  export type blogsCreateOrConnectWithoutUsersInput = {
    where: blogsWhereUniqueInput
    create: XOR<blogsCreateWithoutUsersInput, blogsUncheckedCreateWithoutUsersInput>
  }

  export type blogsCreateManyUsersInputEnvelope = {
    data: blogsCreateManyUsersInput | blogsCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type loginCreateWithoutUsersInput = {
    token: string
    created_at?: Date | string | null
    expires_at?: Date | string | null
  }

  export type loginUncheckedCreateWithoutUsersInput = {
    id?: number
    token: string
    created_at?: Date | string | null
    expires_at?: Date | string | null
  }

  export type loginCreateOrConnectWithoutUsersInput = {
    where: loginWhereUniqueInput
    create: XOR<loginCreateWithoutUsersInput, loginUncheckedCreateWithoutUsersInput>
  }

  export type loginCreateManyUsersInputEnvelope = {
    data: loginCreateManyUsersInput | loginCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type projectsCreateWithoutUsersInput = {
    slug: string
    demo?: string | null
    head?: string | null
    status: string
    title: string
    years: string
    role?: string | null
    description: string
    image: string
    project_icons?: project_iconsCreateNestedManyWithoutProjectsInput
    project_linkedin_partners?: project_linkedin_partnersCreateNestedManyWithoutProjectsInput
    project_linkedin_teams?: project_linkedin_teamsCreateNestedManyWithoutProjectsInput
    project_partners?: project_partnersCreateNestedManyWithoutProjectsInput
    project_teams?: project_teamsCreateNestedManyWithoutProjectsInput
  }

  export type projectsUncheckedCreateWithoutUsersInput = {
    id?: number
    slug: string
    demo?: string | null
    head?: string | null
    status: string
    title: string
    years: string
    role?: string | null
    description: string
    image: string
    project_icons?: project_iconsUncheckedCreateNestedManyWithoutProjectsInput
    project_linkedin_partners?: project_linkedin_partnersUncheckedCreateNestedManyWithoutProjectsInput
    project_linkedin_teams?: project_linkedin_teamsUncheckedCreateNestedManyWithoutProjectsInput
    project_partners?: project_partnersUncheckedCreateNestedManyWithoutProjectsInput
    project_teams?: project_teamsUncheckedCreateNestedManyWithoutProjectsInput
  }

  export type projectsCreateOrConnectWithoutUsersInput = {
    where: projectsWhereUniqueInput
    create: XOR<projectsCreateWithoutUsersInput, projectsUncheckedCreateWithoutUsersInput>
  }

  export type projectsCreateManyUsersInputEnvelope = {
    data: projectsCreateManyUsersInput | projectsCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type blogsUpsertWithWhereUniqueWithoutUsersInput = {
    where: blogsWhereUniqueInput
    update: XOR<blogsUpdateWithoutUsersInput, blogsUncheckedUpdateWithoutUsersInput>
    create: XOR<blogsCreateWithoutUsersInput, blogsUncheckedCreateWithoutUsersInput>
  }

  export type blogsUpdateWithWhereUniqueWithoutUsersInput = {
    where: blogsWhereUniqueInput
    data: XOR<blogsUpdateWithoutUsersInput, blogsUncheckedUpdateWithoutUsersInput>
  }

  export type blogsUpdateManyWithWhereWithoutUsersInput = {
    where: blogsScalarWhereInput
    data: XOR<blogsUpdateManyMutationInput, blogsUncheckedUpdateManyWithoutUsersInput>
  }

  export type blogsScalarWhereInput = {
    AND?: blogsScalarWhereInput | blogsScalarWhereInput[]
    OR?: blogsScalarWhereInput[]
    NOT?: blogsScalarWhereInput | blogsScalarWhereInput[]
    id?: IntFilter<"blogs"> | number
    user_id?: IntFilter<"blogs"> | number
    image?: StringNullableFilter<"blogs"> | string | null
    date?: DateTimeFilter<"blogs"> | Date | string
    title?: StringFilter<"blogs"> | string
    description?: StringFilter<"blogs"> | string
    content?: StringNullableFilter<"blogs"> | string | null
    updated_at?: DateTimeNullableFilter<"blogs"> | Date | string | null
  }

  export type loginUpsertWithWhereUniqueWithoutUsersInput = {
    where: loginWhereUniqueInput
    update: XOR<loginUpdateWithoutUsersInput, loginUncheckedUpdateWithoutUsersInput>
    create: XOR<loginCreateWithoutUsersInput, loginUncheckedCreateWithoutUsersInput>
  }

  export type loginUpdateWithWhereUniqueWithoutUsersInput = {
    where: loginWhereUniqueInput
    data: XOR<loginUpdateWithoutUsersInput, loginUncheckedUpdateWithoutUsersInput>
  }

  export type loginUpdateManyWithWhereWithoutUsersInput = {
    where: loginScalarWhereInput
    data: XOR<loginUpdateManyMutationInput, loginUncheckedUpdateManyWithoutUsersInput>
  }

  export type loginScalarWhereInput = {
    AND?: loginScalarWhereInput | loginScalarWhereInput[]
    OR?: loginScalarWhereInput[]
    NOT?: loginScalarWhereInput | loginScalarWhereInput[]
    id?: IntFilter<"login"> | number
    user_id?: IntFilter<"login"> | number
    token?: StringFilter<"login"> | string
    created_at?: DateTimeNullableFilter<"login"> | Date | string | null
    expires_at?: DateTimeNullableFilter<"login"> | Date | string | null
  }

  export type projectsUpsertWithWhereUniqueWithoutUsersInput = {
    where: projectsWhereUniqueInput
    update: XOR<projectsUpdateWithoutUsersInput, projectsUncheckedUpdateWithoutUsersInput>
    create: XOR<projectsCreateWithoutUsersInput, projectsUncheckedCreateWithoutUsersInput>
  }

  export type projectsUpdateWithWhereUniqueWithoutUsersInput = {
    where: projectsWhereUniqueInput
    data: XOR<projectsUpdateWithoutUsersInput, projectsUncheckedUpdateWithoutUsersInput>
  }

  export type projectsUpdateManyWithWhereWithoutUsersInput = {
    where: projectsScalarWhereInput
    data: XOR<projectsUpdateManyMutationInput, projectsUncheckedUpdateManyWithoutUsersInput>
  }

  export type projectsScalarWhereInput = {
    AND?: projectsScalarWhereInput | projectsScalarWhereInput[]
    OR?: projectsScalarWhereInput[]
    NOT?: projectsScalarWhereInput | projectsScalarWhereInput[]
    id?: IntFilter<"projects"> | number
    user_id?: IntFilter<"projects"> | number
    slug?: StringFilter<"projects"> | string
    demo?: StringNullableFilter<"projects"> | string | null
    head?: StringNullableFilter<"projects"> | string | null
    status?: StringFilter<"projects"> | string
    title?: StringFilter<"projects"> | string
    years?: StringFilter<"projects"> | string
    role?: StringNullableFilter<"projects"> | string | null
    description?: StringFilter<"projects"> | string
    image?: StringFilter<"projects"> | string
  }

  export type usersCreateWithoutBlogsInput = {
    username: string
    password: string
    login?: loginCreateNestedManyWithoutUsersInput
    projects?: projectsCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutBlogsInput = {
    id?: number
    username: string
    password: string
    login?: loginUncheckedCreateNestedManyWithoutUsersInput
    projects?: projectsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutBlogsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutBlogsInput, usersUncheckedCreateWithoutBlogsInput>
  }

  export type usersUpsertWithoutBlogsInput = {
    update: XOR<usersUpdateWithoutBlogsInput, usersUncheckedUpdateWithoutBlogsInput>
    create: XOR<usersCreateWithoutBlogsInput, usersUncheckedCreateWithoutBlogsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutBlogsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutBlogsInput, usersUncheckedUpdateWithoutBlogsInput>
  }

  export type usersUpdateWithoutBlogsInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    login?: loginUpdateManyWithoutUsersNestedInput
    projects?: projectsUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutBlogsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    login?: loginUncheckedUpdateManyWithoutUsersNestedInput
    projects?: projectsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type projectsCreateWithoutProject_iconsInput = {
    slug: string
    demo?: string | null
    head?: string | null
    status: string
    title: string
    years: string
    role?: string | null
    description: string
    image: string
    project_linkedin_partners?: project_linkedin_partnersCreateNestedManyWithoutProjectsInput
    project_linkedin_teams?: project_linkedin_teamsCreateNestedManyWithoutProjectsInput
    project_partners?: project_partnersCreateNestedManyWithoutProjectsInput
    project_teams?: project_teamsCreateNestedManyWithoutProjectsInput
    users: usersCreateNestedOneWithoutProjectsInput
  }

  export type projectsUncheckedCreateWithoutProject_iconsInput = {
    id?: number
    user_id: number
    slug: string
    demo?: string | null
    head?: string | null
    status: string
    title: string
    years: string
    role?: string | null
    description: string
    image: string
    project_linkedin_partners?: project_linkedin_partnersUncheckedCreateNestedManyWithoutProjectsInput
    project_linkedin_teams?: project_linkedin_teamsUncheckedCreateNestedManyWithoutProjectsInput
    project_partners?: project_partnersUncheckedCreateNestedManyWithoutProjectsInput
    project_teams?: project_teamsUncheckedCreateNestedManyWithoutProjectsInput
  }

  export type projectsCreateOrConnectWithoutProject_iconsInput = {
    where: projectsWhereUniqueInput
    create: XOR<projectsCreateWithoutProject_iconsInput, projectsUncheckedCreateWithoutProject_iconsInput>
  }

  export type projectsUpsertWithoutProject_iconsInput = {
    update: XOR<projectsUpdateWithoutProject_iconsInput, projectsUncheckedUpdateWithoutProject_iconsInput>
    create: XOR<projectsCreateWithoutProject_iconsInput, projectsUncheckedCreateWithoutProject_iconsInput>
    where?: projectsWhereInput
  }

  export type projectsUpdateToOneWithWhereWithoutProject_iconsInput = {
    where?: projectsWhereInput
    data: XOR<projectsUpdateWithoutProject_iconsInput, projectsUncheckedUpdateWithoutProject_iconsInput>
  }

  export type projectsUpdateWithoutProject_iconsInput = {
    slug?: StringFieldUpdateOperationsInput | string
    demo?: NullableStringFieldUpdateOperationsInput | string | null
    head?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    years?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    project_linkedin_partners?: project_linkedin_partnersUpdateManyWithoutProjectsNestedInput
    project_linkedin_teams?: project_linkedin_teamsUpdateManyWithoutProjectsNestedInput
    project_partners?: project_partnersUpdateManyWithoutProjectsNestedInput
    project_teams?: project_teamsUpdateManyWithoutProjectsNestedInput
    users?: usersUpdateOneRequiredWithoutProjectsNestedInput
  }

  export type projectsUncheckedUpdateWithoutProject_iconsInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    demo?: NullableStringFieldUpdateOperationsInput | string | null
    head?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    years?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    project_linkedin_partners?: project_linkedin_partnersUncheckedUpdateManyWithoutProjectsNestedInput
    project_linkedin_teams?: project_linkedin_teamsUncheckedUpdateManyWithoutProjectsNestedInput
    project_partners?: project_partnersUncheckedUpdateManyWithoutProjectsNestedInput
    project_teams?: project_teamsUncheckedUpdateManyWithoutProjectsNestedInput
  }

  export type projectsCreateWithoutProject_linkedin_partnersInput = {
    slug: string
    demo?: string | null
    head?: string | null
    status: string
    title: string
    years: string
    role?: string | null
    description: string
    image: string
    project_icons?: project_iconsCreateNestedManyWithoutProjectsInput
    project_linkedin_teams?: project_linkedin_teamsCreateNestedManyWithoutProjectsInput
    project_partners?: project_partnersCreateNestedManyWithoutProjectsInput
    project_teams?: project_teamsCreateNestedManyWithoutProjectsInput
    users: usersCreateNestedOneWithoutProjectsInput
  }

  export type projectsUncheckedCreateWithoutProject_linkedin_partnersInput = {
    id?: number
    user_id: number
    slug: string
    demo?: string | null
    head?: string | null
    status: string
    title: string
    years: string
    role?: string | null
    description: string
    image: string
    project_icons?: project_iconsUncheckedCreateNestedManyWithoutProjectsInput
    project_linkedin_teams?: project_linkedin_teamsUncheckedCreateNestedManyWithoutProjectsInput
    project_partners?: project_partnersUncheckedCreateNestedManyWithoutProjectsInput
    project_teams?: project_teamsUncheckedCreateNestedManyWithoutProjectsInput
  }

  export type projectsCreateOrConnectWithoutProject_linkedin_partnersInput = {
    where: projectsWhereUniqueInput
    create: XOR<projectsCreateWithoutProject_linkedin_partnersInput, projectsUncheckedCreateWithoutProject_linkedin_partnersInput>
  }

  export type projectsUpsertWithoutProject_linkedin_partnersInput = {
    update: XOR<projectsUpdateWithoutProject_linkedin_partnersInput, projectsUncheckedUpdateWithoutProject_linkedin_partnersInput>
    create: XOR<projectsCreateWithoutProject_linkedin_partnersInput, projectsUncheckedCreateWithoutProject_linkedin_partnersInput>
    where?: projectsWhereInput
  }

  export type projectsUpdateToOneWithWhereWithoutProject_linkedin_partnersInput = {
    where?: projectsWhereInput
    data: XOR<projectsUpdateWithoutProject_linkedin_partnersInput, projectsUncheckedUpdateWithoutProject_linkedin_partnersInput>
  }

  export type projectsUpdateWithoutProject_linkedin_partnersInput = {
    slug?: StringFieldUpdateOperationsInput | string
    demo?: NullableStringFieldUpdateOperationsInput | string | null
    head?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    years?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    project_icons?: project_iconsUpdateManyWithoutProjectsNestedInput
    project_linkedin_teams?: project_linkedin_teamsUpdateManyWithoutProjectsNestedInput
    project_partners?: project_partnersUpdateManyWithoutProjectsNestedInput
    project_teams?: project_teamsUpdateManyWithoutProjectsNestedInput
    users?: usersUpdateOneRequiredWithoutProjectsNestedInput
  }

  export type projectsUncheckedUpdateWithoutProject_linkedin_partnersInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    demo?: NullableStringFieldUpdateOperationsInput | string | null
    head?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    years?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    project_icons?: project_iconsUncheckedUpdateManyWithoutProjectsNestedInput
    project_linkedin_teams?: project_linkedin_teamsUncheckedUpdateManyWithoutProjectsNestedInput
    project_partners?: project_partnersUncheckedUpdateManyWithoutProjectsNestedInput
    project_teams?: project_teamsUncheckedUpdateManyWithoutProjectsNestedInput
  }

  export type projectsCreateWithoutProject_linkedin_teamsInput = {
    slug: string
    demo?: string | null
    head?: string | null
    status: string
    title: string
    years: string
    role?: string | null
    description: string
    image: string
    project_icons?: project_iconsCreateNestedManyWithoutProjectsInput
    project_linkedin_partners?: project_linkedin_partnersCreateNestedManyWithoutProjectsInput
    project_partners?: project_partnersCreateNestedManyWithoutProjectsInput
    project_teams?: project_teamsCreateNestedManyWithoutProjectsInput
    users: usersCreateNestedOneWithoutProjectsInput
  }

  export type projectsUncheckedCreateWithoutProject_linkedin_teamsInput = {
    id?: number
    user_id: number
    slug: string
    demo?: string | null
    head?: string | null
    status: string
    title: string
    years: string
    role?: string | null
    description: string
    image: string
    project_icons?: project_iconsUncheckedCreateNestedManyWithoutProjectsInput
    project_linkedin_partners?: project_linkedin_partnersUncheckedCreateNestedManyWithoutProjectsInput
    project_partners?: project_partnersUncheckedCreateNestedManyWithoutProjectsInput
    project_teams?: project_teamsUncheckedCreateNestedManyWithoutProjectsInput
  }

  export type projectsCreateOrConnectWithoutProject_linkedin_teamsInput = {
    where: projectsWhereUniqueInput
    create: XOR<projectsCreateWithoutProject_linkedin_teamsInput, projectsUncheckedCreateWithoutProject_linkedin_teamsInput>
  }

  export type projectsUpsertWithoutProject_linkedin_teamsInput = {
    update: XOR<projectsUpdateWithoutProject_linkedin_teamsInput, projectsUncheckedUpdateWithoutProject_linkedin_teamsInput>
    create: XOR<projectsCreateWithoutProject_linkedin_teamsInput, projectsUncheckedCreateWithoutProject_linkedin_teamsInput>
    where?: projectsWhereInput
  }

  export type projectsUpdateToOneWithWhereWithoutProject_linkedin_teamsInput = {
    where?: projectsWhereInput
    data: XOR<projectsUpdateWithoutProject_linkedin_teamsInput, projectsUncheckedUpdateWithoutProject_linkedin_teamsInput>
  }

  export type projectsUpdateWithoutProject_linkedin_teamsInput = {
    slug?: StringFieldUpdateOperationsInput | string
    demo?: NullableStringFieldUpdateOperationsInput | string | null
    head?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    years?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    project_icons?: project_iconsUpdateManyWithoutProjectsNestedInput
    project_linkedin_partners?: project_linkedin_partnersUpdateManyWithoutProjectsNestedInput
    project_partners?: project_partnersUpdateManyWithoutProjectsNestedInput
    project_teams?: project_teamsUpdateManyWithoutProjectsNestedInput
    users?: usersUpdateOneRequiredWithoutProjectsNestedInput
  }

  export type projectsUncheckedUpdateWithoutProject_linkedin_teamsInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    demo?: NullableStringFieldUpdateOperationsInput | string | null
    head?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    years?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    project_icons?: project_iconsUncheckedUpdateManyWithoutProjectsNestedInput
    project_linkedin_partners?: project_linkedin_partnersUncheckedUpdateManyWithoutProjectsNestedInput
    project_partners?: project_partnersUncheckedUpdateManyWithoutProjectsNestedInput
    project_teams?: project_teamsUncheckedUpdateManyWithoutProjectsNestedInput
  }

  export type projectsCreateWithoutProject_partnersInput = {
    slug: string
    demo?: string | null
    head?: string | null
    status: string
    title: string
    years: string
    role?: string | null
    description: string
    image: string
    project_icons?: project_iconsCreateNestedManyWithoutProjectsInput
    project_linkedin_partners?: project_linkedin_partnersCreateNestedManyWithoutProjectsInput
    project_linkedin_teams?: project_linkedin_teamsCreateNestedManyWithoutProjectsInput
    project_teams?: project_teamsCreateNestedManyWithoutProjectsInput
    users: usersCreateNestedOneWithoutProjectsInput
  }

  export type projectsUncheckedCreateWithoutProject_partnersInput = {
    id?: number
    user_id: number
    slug: string
    demo?: string | null
    head?: string | null
    status: string
    title: string
    years: string
    role?: string | null
    description: string
    image: string
    project_icons?: project_iconsUncheckedCreateNestedManyWithoutProjectsInput
    project_linkedin_partners?: project_linkedin_partnersUncheckedCreateNestedManyWithoutProjectsInput
    project_linkedin_teams?: project_linkedin_teamsUncheckedCreateNestedManyWithoutProjectsInput
    project_teams?: project_teamsUncheckedCreateNestedManyWithoutProjectsInput
  }

  export type projectsCreateOrConnectWithoutProject_partnersInput = {
    where: projectsWhereUniqueInput
    create: XOR<projectsCreateWithoutProject_partnersInput, projectsUncheckedCreateWithoutProject_partnersInput>
  }

  export type projectsUpsertWithoutProject_partnersInput = {
    update: XOR<projectsUpdateWithoutProject_partnersInput, projectsUncheckedUpdateWithoutProject_partnersInput>
    create: XOR<projectsCreateWithoutProject_partnersInput, projectsUncheckedCreateWithoutProject_partnersInput>
    where?: projectsWhereInput
  }

  export type projectsUpdateToOneWithWhereWithoutProject_partnersInput = {
    where?: projectsWhereInput
    data: XOR<projectsUpdateWithoutProject_partnersInput, projectsUncheckedUpdateWithoutProject_partnersInput>
  }

  export type projectsUpdateWithoutProject_partnersInput = {
    slug?: StringFieldUpdateOperationsInput | string
    demo?: NullableStringFieldUpdateOperationsInput | string | null
    head?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    years?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    project_icons?: project_iconsUpdateManyWithoutProjectsNestedInput
    project_linkedin_partners?: project_linkedin_partnersUpdateManyWithoutProjectsNestedInput
    project_linkedin_teams?: project_linkedin_teamsUpdateManyWithoutProjectsNestedInput
    project_teams?: project_teamsUpdateManyWithoutProjectsNestedInput
    users?: usersUpdateOneRequiredWithoutProjectsNestedInput
  }

  export type projectsUncheckedUpdateWithoutProject_partnersInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    demo?: NullableStringFieldUpdateOperationsInput | string | null
    head?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    years?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    project_icons?: project_iconsUncheckedUpdateManyWithoutProjectsNestedInput
    project_linkedin_partners?: project_linkedin_partnersUncheckedUpdateManyWithoutProjectsNestedInput
    project_linkedin_teams?: project_linkedin_teamsUncheckedUpdateManyWithoutProjectsNestedInput
    project_teams?: project_teamsUncheckedUpdateManyWithoutProjectsNestedInput
  }

  export type projectsCreateWithoutProject_teamsInput = {
    slug: string
    demo?: string | null
    head?: string | null
    status: string
    title: string
    years: string
    role?: string | null
    description: string
    image: string
    project_icons?: project_iconsCreateNestedManyWithoutProjectsInput
    project_linkedin_partners?: project_linkedin_partnersCreateNestedManyWithoutProjectsInput
    project_linkedin_teams?: project_linkedin_teamsCreateNestedManyWithoutProjectsInput
    project_partners?: project_partnersCreateNestedManyWithoutProjectsInput
    users: usersCreateNestedOneWithoutProjectsInput
  }

  export type projectsUncheckedCreateWithoutProject_teamsInput = {
    id?: number
    user_id: number
    slug: string
    demo?: string | null
    head?: string | null
    status: string
    title: string
    years: string
    role?: string | null
    description: string
    image: string
    project_icons?: project_iconsUncheckedCreateNestedManyWithoutProjectsInput
    project_linkedin_partners?: project_linkedin_partnersUncheckedCreateNestedManyWithoutProjectsInput
    project_linkedin_teams?: project_linkedin_teamsUncheckedCreateNestedManyWithoutProjectsInput
    project_partners?: project_partnersUncheckedCreateNestedManyWithoutProjectsInput
  }

  export type projectsCreateOrConnectWithoutProject_teamsInput = {
    where: projectsWhereUniqueInput
    create: XOR<projectsCreateWithoutProject_teamsInput, projectsUncheckedCreateWithoutProject_teamsInput>
  }

  export type projectsUpsertWithoutProject_teamsInput = {
    update: XOR<projectsUpdateWithoutProject_teamsInput, projectsUncheckedUpdateWithoutProject_teamsInput>
    create: XOR<projectsCreateWithoutProject_teamsInput, projectsUncheckedCreateWithoutProject_teamsInput>
    where?: projectsWhereInput
  }

  export type projectsUpdateToOneWithWhereWithoutProject_teamsInput = {
    where?: projectsWhereInput
    data: XOR<projectsUpdateWithoutProject_teamsInput, projectsUncheckedUpdateWithoutProject_teamsInput>
  }

  export type projectsUpdateWithoutProject_teamsInput = {
    slug?: StringFieldUpdateOperationsInput | string
    demo?: NullableStringFieldUpdateOperationsInput | string | null
    head?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    years?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    project_icons?: project_iconsUpdateManyWithoutProjectsNestedInput
    project_linkedin_partners?: project_linkedin_partnersUpdateManyWithoutProjectsNestedInput
    project_linkedin_teams?: project_linkedin_teamsUpdateManyWithoutProjectsNestedInput
    project_partners?: project_partnersUpdateManyWithoutProjectsNestedInput
    users?: usersUpdateOneRequiredWithoutProjectsNestedInput
  }

  export type projectsUncheckedUpdateWithoutProject_teamsInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    demo?: NullableStringFieldUpdateOperationsInput | string | null
    head?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    years?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    project_icons?: project_iconsUncheckedUpdateManyWithoutProjectsNestedInput
    project_linkedin_partners?: project_linkedin_partnersUncheckedUpdateManyWithoutProjectsNestedInput
    project_linkedin_teams?: project_linkedin_teamsUncheckedUpdateManyWithoutProjectsNestedInput
    project_partners?: project_partnersUncheckedUpdateManyWithoutProjectsNestedInput
  }

  export type project_iconsCreateWithoutProjectsInput = {
    icon_name?: string | null
  }

  export type project_iconsUncheckedCreateWithoutProjectsInput = {
    id?: number
    icon_name?: string | null
  }

  export type project_iconsCreateOrConnectWithoutProjectsInput = {
    where: project_iconsWhereUniqueInput
    create: XOR<project_iconsCreateWithoutProjectsInput, project_iconsUncheckedCreateWithoutProjectsInput>
  }

  export type project_iconsCreateManyProjectsInputEnvelope = {
    data: project_iconsCreateManyProjectsInput | project_iconsCreateManyProjectsInput[]
    skipDuplicates?: boolean
  }

  export type project_linkedin_partnersCreateWithoutProjectsInput = {
    url?: string | null
  }

  export type project_linkedin_partnersUncheckedCreateWithoutProjectsInput = {
    id?: number
    url?: string | null
  }

  export type project_linkedin_partnersCreateOrConnectWithoutProjectsInput = {
    where: project_linkedin_partnersWhereUniqueInput
    create: XOR<project_linkedin_partnersCreateWithoutProjectsInput, project_linkedin_partnersUncheckedCreateWithoutProjectsInput>
  }

  export type project_linkedin_partnersCreateManyProjectsInputEnvelope = {
    data: project_linkedin_partnersCreateManyProjectsInput | project_linkedin_partnersCreateManyProjectsInput[]
    skipDuplicates?: boolean
  }

  export type project_linkedin_teamsCreateWithoutProjectsInput = {
    url?: string | null
  }

  export type project_linkedin_teamsUncheckedCreateWithoutProjectsInput = {
    id?: number
    url?: string | null
  }

  export type project_linkedin_teamsCreateOrConnectWithoutProjectsInput = {
    where: project_linkedin_teamsWhereUniqueInput
    create: XOR<project_linkedin_teamsCreateWithoutProjectsInput, project_linkedin_teamsUncheckedCreateWithoutProjectsInput>
  }

  export type project_linkedin_teamsCreateManyProjectsInputEnvelope = {
    data: project_linkedin_teamsCreateManyProjectsInput | project_linkedin_teamsCreateManyProjectsInput[]
    skipDuplicates?: boolean
  }

  export type project_partnersCreateWithoutProjectsInput = {
    name?: string | null
  }

  export type project_partnersUncheckedCreateWithoutProjectsInput = {
    id?: number
    name?: string | null
  }

  export type project_partnersCreateOrConnectWithoutProjectsInput = {
    where: project_partnersWhereUniqueInput
    create: XOR<project_partnersCreateWithoutProjectsInput, project_partnersUncheckedCreateWithoutProjectsInput>
  }

  export type project_partnersCreateManyProjectsInputEnvelope = {
    data: project_partnersCreateManyProjectsInput | project_partnersCreateManyProjectsInput[]
    skipDuplicates?: boolean
  }

  export type project_teamsCreateWithoutProjectsInput = {
    name?: string | null
  }

  export type project_teamsUncheckedCreateWithoutProjectsInput = {
    id?: number
    name?: string | null
  }

  export type project_teamsCreateOrConnectWithoutProjectsInput = {
    where: project_teamsWhereUniqueInput
    create: XOR<project_teamsCreateWithoutProjectsInput, project_teamsUncheckedCreateWithoutProjectsInput>
  }

  export type project_teamsCreateManyProjectsInputEnvelope = {
    data: project_teamsCreateManyProjectsInput | project_teamsCreateManyProjectsInput[]
    skipDuplicates?: boolean
  }

  export type usersCreateWithoutProjectsInput = {
    username: string
    password: string
    blogs?: blogsCreateNestedManyWithoutUsersInput
    login?: loginCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutProjectsInput = {
    id?: number
    username: string
    password: string
    blogs?: blogsUncheckedCreateNestedManyWithoutUsersInput
    login?: loginUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutProjectsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutProjectsInput, usersUncheckedCreateWithoutProjectsInput>
  }

  export type project_iconsUpsertWithWhereUniqueWithoutProjectsInput = {
    where: project_iconsWhereUniqueInput
    update: XOR<project_iconsUpdateWithoutProjectsInput, project_iconsUncheckedUpdateWithoutProjectsInput>
    create: XOR<project_iconsCreateWithoutProjectsInput, project_iconsUncheckedCreateWithoutProjectsInput>
  }

  export type project_iconsUpdateWithWhereUniqueWithoutProjectsInput = {
    where: project_iconsWhereUniqueInput
    data: XOR<project_iconsUpdateWithoutProjectsInput, project_iconsUncheckedUpdateWithoutProjectsInput>
  }

  export type project_iconsUpdateManyWithWhereWithoutProjectsInput = {
    where: project_iconsScalarWhereInput
    data: XOR<project_iconsUpdateManyMutationInput, project_iconsUncheckedUpdateManyWithoutProjectsInput>
  }

  export type project_iconsScalarWhereInput = {
    AND?: project_iconsScalarWhereInput | project_iconsScalarWhereInput[]
    OR?: project_iconsScalarWhereInput[]
    NOT?: project_iconsScalarWhereInput | project_iconsScalarWhereInput[]
    id?: IntFilter<"project_icons"> | number
    project_id?: IntNullableFilter<"project_icons"> | number | null
    icon_name?: StringNullableFilter<"project_icons"> | string | null
  }

  export type project_linkedin_partnersUpsertWithWhereUniqueWithoutProjectsInput = {
    where: project_linkedin_partnersWhereUniqueInput
    update: XOR<project_linkedin_partnersUpdateWithoutProjectsInput, project_linkedin_partnersUncheckedUpdateWithoutProjectsInput>
    create: XOR<project_linkedin_partnersCreateWithoutProjectsInput, project_linkedin_partnersUncheckedCreateWithoutProjectsInput>
  }

  export type project_linkedin_partnersUpdateWithWhereUniqueWithoutProjectsInput = {
    where: project_linkedin_partnersWhereUniqueInput
    data: XOR<project_linkedin_partnersUpdateWithoutProjectsInput, project_linkedin_partnersUncheckedUpdateWithoutProjectsInput>
  }

  export type project_linkedin_partnersUpdateManyWithWhereWithoutProjectsInput = {
    where: project_linkedin_partnersScalarWhereInput
    data: XOR<project_linkedin_partnersUpdateManyMutationInput, project_linkedin_partnersUncheckedUpdateManyWithoutProjectsInput>
  }

  export type project_linkedin_partnersScalarWhereInput = {
    AND?: project_linkedin_partnersScalarWhereInput | project_linkedin_partnersScalarWhereInput[]
    OR?: project_linkedin_partnersScalarWhereInput[]
    NOT?: project_linkedin_partnersScalarWhereInput | project_linkedin_partnersScalarWhereInput[]
    id?: IntFilter<"project_linkedin_partners"> | number
    project_id?: IntNullableFilter<"project_linkedin_partners"> | number | null
    url?: StringNullableFilter<"project_linkedin_partners"> | string | null
  }

  export type project_linkedin_teamsUpsertWithWhereUniqueWithoutProjectsInput = {
    where: project_linkedin_teamsWhereUniqueInput
    update: XOR<project_linkedin_teamsUpdateWithoutProjectsInput, project_linkedin_teamsUncheckedUpdateWithoutProjectsInput>
    create: XOR<project_linkedin_teamsCreateWithoutProjectsInput, project_linkedin_teamsUncheckedCreateWithoutProjectsInput>
  }

  export type project_linkedin_teamsUpdateWithWhereUniqueWithoutProjectsInput = {
    where: project_linkedin_teamsWhereUniqueInput
    data: XOR<project_linkedin_teamsUpdateWithoutProjectsInput, project_linkedin_teamsUncheckedUpdateWithoutProjectsInput>
  }

  export type project_linkedin_teamsUpdateManyWithWhereWithoutProjectsInput = {
    where: project_linkedin_teamsScalarWhereInput
    data: XOR<project_linkedin_teamsUpdateManyMutationInput, project_linkedin_teamsUncheckedUpdateManyWithoutProjectsInput>
  }

  export type project_linkedin_teamsScalarWhereInput = {
    AND?: project_linkedin_teamsScalarWhereInput | project_linkedin_teamsScalarWhereInput[]
    OR?: project_linkedin_teamsScalarWhereInput[]
    NOT?: project_linkedin_teamsScalarWhereInput | project_linkedin_teamsScalarWhereInput[]
    id?: IntFilter<"project_linkedin_teams"> | number
    project_id?: IntNullableFilter<"project_linkedin_teams"> | number | null
    url?: StringNullableFilter<"project_linkedin_teams"> | string | null
  }

  export type project_partnersUpsertWithWhereUniqueWithoutProjectsInput = {
    where: project_partnersWhereUniqueInput
    update: XOR<project_partnersUpdateWithoutProjectsInput, project_partnersUncheckedUpdateWithoutProjectsInput>
    create: XOR<project_partnersCreateWithoutProjectsInput, project_partnersUncheckedCreateWithoutProjectsInput>
  }

  export type project_partnersUpdateWithWhereUniqueWithoutProjectsInput = {
    where: project_partnersWhereUniqueInput
    data: XOR<project_partnersUpdateWithoutProjectsInput, project_partnersUncheckedUpdateWithoutProjectsInput>
  }

  export type project_partnersUpdateManyWithWhereWithoutProjectsInput = {
    where: project_partnersScalarWhereInput
    data: XOR<project_partnersUpdateManyMutationInput, project_partnersUncheckedUpdateManyWithoutProjectsInput>
  }

  export type project_partnersScalarWhereInput = {
    AND?: project_partnersScalarWhereInput | project_partnersScalarWhereInput[]
    OR?: project_partnersScalarWhereInput[]
    NOT?: project_partnersScalarWhereInput | project_partnersScalarWhereInput[]
    id?: IntFilter<"project_partners"> | number
    project_id?: IntNullableFilter<"project_partners"> | number | null
    name?: StringNullableFilter<"project_partners"> | string | null
  }

  export type project_teamsUpsertWithWhereUniqueWithoutProjectsInput = {
    where: project_teamsWhereUniqueInput
    update: XOR<project_teamsUpdateWithoutProjectsInput, project_teamsUncheckedUpdateWithoutProjectsInput>
    create: XOR<project_teamsCreateWithoutProjectsInput, project_teamsUncheckedCreateWithoutProjectsInput>
  }

  export type project_teamsUpdateWithWhereUniqueWithoutProjectsInput = {
    where: project_teamsWhereUniqueInput
    data: XOR<project_teamsUpdateWithoutProjectsInput, project_teamsUncheckedUpdateWithoutProjectsInput>
  }

  export type project_teamsUpdateManyWithWhereWithoutProjectsInput = {
    where: project_teamsScalarWhereInput
    data: XOR<project_teamsUpdateManyMutationInput, project_teamsUncheckedUpdateManyWithoutProjectsInput>
  }

  export type project_teamsScalarWhereInput = {
    AND?: project_teamsScalarWhereInput | project_teamsScalarWhereInput[]
    OR?: project_teamsScalarWhereInput[]
    NOT?: project_teamsScalarWhereInput | project_teamsScalarWhereInput[]
    id?: IntFilter<"project_teams"> | number
    project_id?: IntNullableFilter<"project_teams"> | number | null
    name?: StringNullableFilter<"project_teams"> | string | null
  }

  export type usersUpsertWithoutProjectsInput = {
    update: XOR<usersUpdateWithoutProjectsInput, usersUncheckedUpdateWithoutProjectsInput>
    create: XOR<usersCreateWithoutProjectsInput, usersUncheckedCreateWithoutProjectsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutProjectsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutProjectsInput, usersUncheckedUpdateWithoutProjectsInput>
  }

  export type usersUpdateWithoutProjectsInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    blogs?: blogsUpdateManyWithoutUsersNestedInput
    login?: loginUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutProjectsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    blogs?: blogsUncheckedUpdateManyWithoutUsersNestedInput
    login?: loginUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type blogsCreateManyUsersInput = {
    id?: number
    image?: string | null
    date: Date | string
    title: string
    description: string
    content?: string | null
    updated_at?: Date | string | null
  }

  export type loginCreateManyUsersInput = {
    id?: number
    token: string
    created_at?: Date | string | null
    expires_at?: Date | string | null
  }

  export type projectsCreateManyUsersInput = {
    id?: number
    slug: string
    demo?: string | null
    head?: string | null
    status: string
    title: string
    years: string
    role?: string | null
    description: string
    image: string
  }

  export type blogsUpdateWithoutUsersInput = {
    image?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type blogsUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type blogsUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type loginUpdateWithoutUsersInput = {
    token?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type loginUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type loginUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type projectsUpdateWithoutUsersInput = {
    slug?: StringFieldUpdateOperationsInput | string
    demo?: NullableStringFieldUpdateOperationsInput | string | null
    head?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    years?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    project_icons?: project_iconsUpdateManyWithoutProjectsNestedInput
    project_linkedin_partners?: project_linkedin_partnersUpdateManyWithoutProjectsNestedInput
    project_linkedin_teams?: project_linkedin_teamsUpdateManyWithoutProjectsNestedInput
    project_partners?: project_partnersUpdateManyWithoutProjectsNestedInput
    project_teams?: project_teamsUpdateManyWithoutProjectsNestedInput
  }

  export type projectsUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    demo?: NullableStringFieldUpdateOperationsInput | string | null
    head?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    years?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    project_icons?: project_iconsUncheckedUpdateManyWithoutProjectsNestedInput
    project_linkedin_partners?: project_linkedin_partnersUncheckedUpdateManyWithoutProjectsNestedInput
    project_linkedin_teams?: project_linkedin_teamsUncheckedUpdateManyWithoutProjectsNestedInput
    project_partners?: project_partnersUncheckedUpdateManyWithoutProjectsNestedInput
    project_teams?: project_teamsUncheckedUpdateManyWithoutProjectsNestedInput
  }

  export type projectsUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    demo?: NullableStringFieldUpdateOperationsInput | string | null
    head?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    years?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
  }

  export type project_iconsCreateManyProjectsInput = {
    id?: number
    icon_name?: string | null
  }

  export type project_linkedin_partnersCreateManyProjectsInput = {
    id?: number
    url?: string | null
  }

  export type project_linkedin_teamsCreateManyProjectsInput = {
    id?: number
    url?: string | null
  }

  export type project_partnersCreateManyProjectsInput = {
    id?: number
    name?: string | null
  }

  export type project_teamsCreateManyProjectsInput = {
    id?: number
    name?: string | null
  }

  export type project_iconsUpdateWithoutProjectsInput = {
    icon_name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type project_iconsUncheckedUpdateWithoutProjectsInput = {
    id?: IntFieldUpdateOperationsInput | number
    icon_name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type project_iconsUncheckedUpdateManyWithoutProjectsInput = {
    id?: IntFieldUpdateOperationsInput | number
    icon_name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type project_linkedin_partnersUpdateWithoutProjectsInput = {
    url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type project_linkedin_partnersUncheckedUpdateWithoutProjectsInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type project_linkedin_partnersUncheckedUpdateManyWithoutProjectsInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type project_linkedin_teamsUpdateWithoutProjectsInput = {
    url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type project_linkedin_teamsUncheckedUpdateWithoutProjectsInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type project_linkedin_teamsUncheckedUpdateManyWithoutProjectsInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type project_partnersUpdateWithoutProjectsInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type project_partnersUncheckedUpdateWithoutProjectsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type project_partnersUncheckedUpdateManyWithoutProjectsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type project_teamsUpdateWithoutProjectsInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type project_teamsUncheckedUpdateWithoutProjectsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type project_teamsUncheckedUpdateManyWithoutProjectsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}