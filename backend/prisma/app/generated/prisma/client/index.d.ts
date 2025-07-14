
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model GlobalMessage
 * 
 */
export type GlobalMessage = $Result.DefaultSelection<Prisma.$GlobalMessagePayload>
/**
 * Model Friends
 * 
 */
export type Friends = $Result.DefaultSelection<Prisma.$FriendsPayload>
/**
 * Model FriendRequest
 * 
 */
export type FriendRequest = $Result.DefaultSelection<Prisma.$FriendRequestPayload>
/**
 * Model BlockList
 * 
 */
export type BlockList = $Result.DefaultSelection<Prisma.$BlockListPayload>
/**
 * Model GroupChat
 * 
 */
export type GroupChat = $Result.DefaultSelection<Prisma.$GroupChatPayload>
/**
 * Model GroupMember
 * 
 */
export type GroupMember = $Result.DefaultSelection<Prisma.$GroupMemberPayload>
/**
 * Model GroupJoinRequest
 * 
 */
export type GroupJoinRequest = $Result.DefaultSelection<Prisma.$GroupJoinRequestPayload>
/**
 * Model GroupMessage
 * 
 */
export type GroupMessage = $Result.DefaultSelection<Prisma.$GroupMessagePayload>
/**
 * Model PrivateMessage
 * 
 */
export type PrivateMessage = $Result.DefaultSelection<Prisma.$PrivateMessagePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  GUEST: 'GUEST',
  USER: 'USER'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.globalMessage`: Exposes CRUD operations for the **GlobalMessage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GlobalMessages
    * const globalMessages = await prisma.globalMessage.findMany()
    * ```
    */
  get globalMessage(): Prisma.GlobalMessageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.friends`: Exposes CRUD operations for the **Friends** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Friends
    * const friends = await prisma.friends.findMany()
    * ```
    */
  get friends(): Prisma.FriendsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.friendRequest`: Exposes CRUD operations for the **FriendRequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FriendRequests
    * const friendRequests = await prisma.friendRequest.findMany()
    * ```
    */
  get friendRequest(): Prisma.FriendRequestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.blockList`: Exposes CRUD operations for the **BlockList** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BlockLists
    * const blockLists = await prisma.blockList.findMany()
    * ```
    */
  get blockList(): Prisma.BlockListDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.groupChat`: Exposes CRUD operations for the **GroupChat** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GroupChats
    * const groupChats = await prisma.groupChat.findMany()
    * ```
    */
  get groupChat(): Prisma.GroupChatDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.groupMember`: Exposes CRUD operations for the **GroupMember** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GroupMembers
    * const groupMembers = await prisma.groupMember.findMany()
    * ```
    */
  get groupMember(): Prisma.GroupMemberDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.groupJoinRequest`: Exposes CRUD operations for the **GroupJoinRequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GroupJoinRequests
    * const groupJoinRequests = await prisma.groupJoinRequest.findMany()
    * ```
    */
  get groupJoinRequest(): Prisma.GroupJoinRequestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.groupMessage`: Exposes CRUD operations for the **GroupMessage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GroupMessages
    * const groupMessages = await prisma.groupMessage.findMany()
    * ```
    */
  get groupMessage(): Prisma.GroupMessageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.privateMessage`: Exposes CRUD operations for the **PrivateMessage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PrivateMessages
    * const privateMessages = await prisma.privateMessage.findMany()
    * ```
    */
  get privateMessage(): Prisma.PrivateMessageDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.11.1
   * Query Engine version: f40f79ec31188888a2e33acda0ecc8fd10a853a9
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
    User: 'User',
    GlobalMessage: 'GlobalMessage',
    Friends: 'Friends',
    FriendRequest: 'FriendRequest',
    BlockList: 'BlockList',
    GroupChat: 'GroupChat',
    GroupMember: 'GroupMember',
    GroupJoinRequest: 'GroupJoinRequest',
    GroupMessage: 'GroupMessage',
    PrivateMessage: 'PrivateMessage'
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
      modelProps: "user" | "globalMessage" | "friends" | "friendRequest" | "blockList" | "groupChat" | "groupMember" | "groupJoinRequest" | "groupMessage" | "privateMessage"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      GlobalMessage: {
        payload: Prisma.$GlobalMessagePayload<ExtArgs>
        fields: Prisma.GlobalMessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GlobalMessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalMessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GlobalMessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalMessagePayload>
          }
          findFirst: {
            args: Prisma.GlobalMessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalMessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GlobalMessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalMessagePayload>
          }
          findMany: {
            args: Prisma.GlobalMessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalMessagePayload>[]
          }
          create: {
            args: Prisma.GlobalMessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalMessagePayload>
          }
          createMany: {
            args: Prisma.GlobalMessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GlobalMessageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalMessagePayload>[]
          }
          delete: {
            args: Prisma.GlobalMessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalMessagePayload>
          }
          update: {
            args: Prisma.GlobalMessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalMessagePayload>
          }
          deleteMany: {
            args: Prisma.GlobalMessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GlobalMessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GlobalMessageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalMessagePayload>[]
          }
          upsert: {
            args: Prisma.GlobalMessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalMessagePayload>
          }
          aggregate: {
            args: Prisma.GlobalMessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGlobalMessage>
          }
          groupBy: {
            args: Prisma.GlobalMessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<GlobalMessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.GlobalMessageCountArgs<ExtArgs>
            result: $Utils.Optional<GlobalMessageCountAggregateOutputType> | number
          }
        }
      }
      Friends: {
        payload: Prisma.$FriendsPayload<ExtArgs>
        fields: Prisma.FriendsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FriendsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FriendsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendsPayload>
          }
          findFirst: {
            args: Prisma.FriendsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FriendsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendsPayload>
          }
          findMany: {
            args: Prisma.FriendsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendsPayload>[]
          }
          create: {
            args: Prisma.FriendsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendsPayload>
          }
          createMany: {
            args: Prisma.FriendsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FriendsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendsPayload>[]
          }
          delete: {
            args: Prisma.FriendsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendsPayload>
          }
          update: {
            args: Prisma.FriendsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendsPayload>
          }
          deleteMany: {
            args: Prisma.FriendsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FriendsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FriendsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendsPayload>[]
          }
          upsert: {
            args: Prisma.FriendsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendsPayload>
          }
          aggregate: {
            args: Prisma.FriendsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFriends>
          }
          groupBy: {
            args: Prisma.FriendsGroupByArgs<ExtArgs>
            result: $Utils.Optional<FriendsGroupByOutputType>[]
          }
          count: {
            args: Prisma.FriendsCountArgs<ExtArgs>
            result: $Utils.Optional<FriendsCountAggregateOutputType> | number
          }
        }
      }
      FriendRequest: {
        payload: Prisma.$FriendRequestPayload<ExtArgs>
        fields: Prisma.FriendRequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FriendRequestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendRequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FriendRequestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendRequestPayload>
          }
          findFirst: {
            args: Prisma.FriendRequestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendRequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FriendRequestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendRequestPayload>
          }
          findMany: {
            args: Prisma.FriendRequestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendRequestPayload>[]
          }
          create: {
            args: Prisma.FriendRequestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendRequestPayload>
          }
          createMany: {
            args: Prisma.FriendRequestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FriendRequestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendRequestPayload>[]
          }
          delete: {
            args: Prisma.FriendRequestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendRequestPayload>
          }
          update: {
            args: Prisma.FriendRequestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendRequestPayload>
          }
          deleteMany: {
            args: Prisma.FriendRequestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FriendRequestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FriendRequestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendRequestPayload>[]
          }
          upsert: {
            args: Prisma.FriendRequestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendRequestPayload>
          }
          aggregate: {
            args: Prisma.FriendRequestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFriendRequest>
          }
          groupBy: {
            args: Prisma.FriendRequestGroupByArgs<ExtArgs>
            result: $Utils.Optional<FriendRequestGroupByOutputType>[]
          }
          count: {
            args: Prisma.FriendRequestCountArgs<ExtArgs>
            result: $Utils.Optional<FriendRequestCountAggregateOutputType> | number
          }
        }
      }
      BlockList: {
        payload: Prisma.$BlockListPayload<ExtArgs>
        fields: Prisma.BlockListFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BlockListFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockListPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BlockListFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockListPayload>
          }
          findFirst: {
            args: Prisma.BlockListFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockListPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BlockListFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockListPayload>
          }
          findMany: {
            args: Prisma.BlockListFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockListPayload>[]
          }
          create: {
            args: Prisma.BlockListCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockListPayload>
          }
          createMany: {
            args: Prisma.BlockListCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BlockListCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockListPayload>[]
          }
          delete: {
            args: Prisma.BlockListDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockListPayload>
          }
          update: {
            args: Prisma.BlockListUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockListPayload>
          }
          deleteMany: {
            args: Prisma.BlockListDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BlockListUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BlockListUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockListPayload>[]
          }
          upsert: {
            args: Prisma.BlockListUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockListPayload>
          }
          aggregate: {
            args: Prisma.BlockListAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBlockList>
          }
          groupBy: {
            args: Prisma.BlockListGroupByArgs<ExtArgs>
            result: $Utils.Optional<BlockListGroupByOutputType>[]
          }
          count: {
            args: Prisma.BlockListCountArgs<ExtArgs>
            result: $Utils.Optional<BlockListCountAggregateOutputType> | number
          }
        }
      }
      GroupChat: {
        payload: Prisma.$GroupChatPayload<ExtArgs>
        fields: Prisma.GroupChatFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GroupChatFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupChatPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GroupChatFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupChatPayload>
          }
          findFirst: {
            args: Prisma.GroupChatFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupChatPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GroupChatFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupChatPayload>
          }
          findMany: {
            args: Prisma.GroupChatFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupChatPayload>[]
          }
          create: {
            args: Prisma.GroupChatCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupChatPayload>
          }
          createMany: {
            args: Prisma.GroupChatCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GroupChatCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupChatPayload>[]
          }
          delete: {
            args: Prisma.GroupChatDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupChatPayload>
          }
          update: {
            args: Prisma.GroupChatUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupChatPayload>
          }
          deleteMany: {
            args: Prisma.GroupChatDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GroupChatUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GroupChatUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupChatPayload>[]
          }
          upsert: {
            args: Prisma.GroupChatUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupChatPayload>
          }
          aggregate: {
            args: Prisma.GroupChatAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGroupChat>
          }
          groupBy: {
            args: Prisma.GroupChatGroupByArgs<ExtArgs>
            result: $Utils.Optional<GroupChatGroupByOutputType>[]
          }
          count: {
            args: Prisma.GroupChatCountArgs<ExtArgs>
            result: $Utils.Optional<GroupChatCountAggregateOutputType> | number
          }
        }
      }
      GroupMember: {
        payload: Prisma.$GroupMemberPayload<ExtArgs>
        fields: Prisma.GroupMemberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GroupMemberFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMemberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GroupMemberFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMemberPayload>
          }
          findFirst: {
            args: Prisma.GroupMemberFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMemberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GroupMemberFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMemberPayload>
          }
          findMany: {
            args: Prisma.GroupMemberFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMemberPayload>[]
          }
          create: {
            args: Prisma.GroupMemberCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMemberPayload>
          }
          createMany: {
            args: Prisma.GroupMemberCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GroupMemberCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMemberPayload>[]
          }
          delete: {
            args: Prisma.GroupMemberDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMemberPayload>
          }
          update: {
            args: Prisma.GroupMemberUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMemberPayload>
          }
          deleteMany: {
            args: Prisma.GroupMemberDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GroupMemberUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GroupMemberUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMemberPayload>[]
          }
          upsert: {
            args: Prisma.GroupMemberUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMemberPayload>
          }
          aggregate: {
            args: Prisma.GroupMemberAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGroupMember>
          }
          groupBy: {
            args: Prisma.GroupMemberGroupByArgs<ExtArgs>
            result: $Utils.Optional<GroupMemberGroupByOutputType>[]
          }
          count: {
            args: Prisma.GroupMemberCountArgs<ExtArgs>
            result: $Utils.Optional<GroupMemberCountAggregateOutputType> | number
          }
        }
      }
      GroupJoinRequest: {
        payload: Prisma.$GroupJoinRequestPayload<ExtArgs>
        fields: Prisma.GroupJoinRequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GroupJoinRequestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupJoinRequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GroupJoinRequestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupJoinRequestPayload>
          }
          findFirst: {
            args: Prisma.GroupJoinRequestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupJoinRequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GroupJoinRequestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupJoinRequestPayload>
          }
          findMany: {
            args: Prisma.GroupJoinRequestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupJoinRequestPayload>[]
          }
          create: {
            args: Prisma.GroupJoinRequestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupJoinRequestPayload>
          }
          createMany: {
            args: Prisma.GroupJoinRequestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GroupJoinRequestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupJoinRequestPayload>[]
          }
          delete: {
            args: Prisma.GroupJoinRequestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupJoinRequestPayload>
          }
          update: {
            args: Prisma.GroupJoinRequestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupJoinRequestPayload>
          }
          deleteMany: {
            args: Prisma.GroupJoinRequestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GroupJoinRequestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GroupJoinRequestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupJoinRequestPayload>[]
          }
          upsert: {
            args: Prisma.GroupJoinRequestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupJoinRequestPayload>
          }
          aggregate: {
            args: Prisma.GroupJoinRequestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGroupJoinRequest>
          }
          groupBy: {
            args: Prisma.GroupJoinRequestGroupByArgs<ExtArgs>
            result: $Utils.Optional<GroupJoinRequestGroupByOutputType>[]
          }
          count: {
            args: Prisma.GroupJoinRequestCountArgs<ExtArgs>
            result: $Utils.Optional<GroupJoinRequestCountAggregateOutputType> | number
          }
        }
      }
      GroupMessage: {
        payload: Prisma.$GroupMessagePayload<ExtArgs>
        fields: Prisma.GroupMessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GroupMessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GroupMessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMessagePayload>
          }
          findFirst: {
            args: Prisma.GroupMessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GroupMessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMessagePayload>
          }
          findMany: {
            args: Prisma.GroupMessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMessagePayload>[]
          }
          create: {
            args: Prisma.GroupMessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMessagePayload>
          }
          createMany: {
            args: Prisma.GroupMessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GroupMessageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMessagePayload>[]
          }
          delete: {
            args: Prisma.GroupMessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMessagePayload>
          }
          update: {
            args: Prisma.GroupMessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMessagePayload>
          }
          deleteMany: {
            args: Prisma.GroupMessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GroupMessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GroupMessageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMessagePayload>[]
          }
          upsert: {
            args: Prisma.GroupMessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMessagePayload>
          }
          aggregate: {
            args: Prisma.GroupMessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGroupMessage>
          }
          groupBy: {
            args: Prisma.GroupMessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<GroupMessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.GroupMessageCountArgs<ExtArgs>
            result: $Utils.Optional<GroupMessageCountAggregateOutputType> | number
          }
        }
      }
      PrivateMessage: {
        payload: Prisma.$PrivateMessagePayload<ExtArgs>
        fields: Prisma.PrivateMessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PrivateMessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrivateMessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PrivateMessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrivateMessagePayload>
          }
          findFirst: {
            args: Prisma.PrivateMessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrivateMessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PrivateMessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrivateMessagePayload>
          }
          findMany: {
            args: Prisma.PrivateMessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrivateMessagePayload>[]
          }
          create: {
            args: Prisma.PrivateMessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrivateMessagePayload>
          }
          createMany: {
            args: Prisma.PrivateMessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PrivateMessageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrivateMessagePayload>[]
          }
          delete: {
            args: Prisma.PrivateMessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrivateMessagePayload>
          }
          update: {
            args: Prisma.PrivateMessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrivateMessagePayload>
          }
          deleteMany: {
            args: Prisma.PrivateMessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PrivateMessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PrivateMessageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrivateMessagePayload>[]
          }
          upsert: {
            args: Prisma.PrivateMessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrivateMessagePayload>
          }
          aggregate: {
            args: Prisma.PrivateMessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePrivateMessage>
          }
          groupBy: {
            args: Prisma.PrivateMessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<PrivateMessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.PrivateMessageCountArgs<ExtArgs>
            result: $Utils.Optional<PrivateMessageCountAggregateOutputType> | number
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
    user?: UserOmit
    globalMessage?: GlobalMessageOmit
    friends?: FriendsOmit
    friendRequest?: FriendRequestOmit
    blockList?: BlockListOmit
    groupChat?: GroupChatOmit
    groupMember?: GroupMemberOmit
    groupJoinRequest?: GroupJoinRequestOmit
    groupMessage?: GroupMessageOmit
    privateMessage?: PrivateMessageOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    globalMessages: number
    friends: number
    friendOf: number
    friendRequests: number
    receivedRequests: number
    blocked: number
    blockedBy: number
    groupChatsCreated: number
    groupMembers: number
    groupJoinRequests: number
    receivedGroupJoinRequests: number
    groupMessages: number
    privateMessagesSent: number
    privateMessagesReceived: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    globalMessages?: boolean | UserCountOutputTypeCountGlobalMessagesArgs
    friends?: boolean | UserCountOutputTypeCountFriendsArgs
    friendOf?: boolean | UserCountOutputTypeCountFriendOfArgs
    friendRequests?: boolean | UserCountOutputTypeCountFriendRequestsArgs
    receivedRequests?: boolean | UserCountOutputTypeCountReceivedRequestsArgs
    blocked?: boolean | UserCountOutputTypeCountBlockedArgs
    blockedBy?: boolean | UserCountOutputTypeCountBlockedByArgs
    groupChatsCreated?: boolean | UserCountOutputTypeCountGroupChatsCreatedArgs
    groupMembers?: boolean | UserCountOutputTypeCountGroupMembersArgs
    groupJoinRequests?: boolean | UserCountOutputTypeCountGroupJoinRequestsArgs
    receivedGroupJoinRequests?: boolean | UserCountOutputTypeCountReceivedGroupJoinRequestsArgs
    groupMessages?: boolean | UserCountOutputTypeCountGroupMessagesArgs
    privateMessagesSent?: boolean | UserCountOutputTypeCountPrivateMessagesSentArgs
    privateMessagesReceived?: boolean | UserCountOutputTypeCountPrivateMessagesReceivedArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountGlobalMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GlobalMessageWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFriendsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FriendsWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFriendOfArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FriendsWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFriendRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FriendRequestWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReceivedRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FriendRequestWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBlockedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlockListWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBlockedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlockListWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountGroupChatsCreatedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupChatWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountGroupMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupMemberWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountGroupJoinRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupJoinRequestWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReceivedGroupJoinRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupJoinRequestWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountGroupMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupMessageWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPrivateMessagesSentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PrivateMessageWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPrivateMessagesReceivedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PrivateMessageWhereInput
  }


  /**
   * Count Type GroupChatCountOutputType
   */

  export type GroupChatCountOutputType = {
    members: number
    messages: number
    joinRequests: number
  }

  export type GroupChatCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    members?: boolean | GroupChatCountOutputTypeCountMembersArgs
    messages?: boolean | GroupChatCountOutputTypeCountMessagesArgs
    joinRequests?: boolean | GroupChatCountOutputTypeCountJoinRequestsArgs
  }

  // Custom InputTypes
  /**
   * GroupChatCountOutputType without action
   */
  export type GroupChatCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupChatCountOutputType
     */
    select?: GroupChatCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GroupChatCountOutputType without action
   */
  export type GroupChatCountOutputTypeCountMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupMemberWhereInput
  }

  /**
   * GroupChatCountOutputType without action
   */
  export type GroupChatCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupMessageWhereInput
  }

  /**
   * GroupChatCountOutputType without action
   */
  export type GroupChatCountOutputTypeCountJoinRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupJoinRequestWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    displayName: string | null
    username: string | null
    photoUrl: string | null
    role: $Enums.Role | null
    creationDate: Date | null
    lastSeenAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    displayName: string | null
    username: string | null
    photoUrl: string | null
    role: $Enums.Role | null
    creationDate: Date | null
    lastSeenAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    displayName: number
    username: number
    photoUrl: number
    role: number
    creationDate: number
    lastSeenAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    displayName?: true
    username?: true
    photoUrl?: true
    role?: true
    creationDate?: true
    lastSeenAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    displayName?: true
    username?: true
    photoUrl?: true
    role?: true
    creationDate?: true
    lastSeenAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    displayName?: true
    username?: true
    photoUrl?: true
    role?: true
    creationDate?: true
    lastSeenAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    password: string
    displayName: string
    username: string
    photoUrl: string | null
    role: $Enums.Role
    creationDate: Date
    lastSeenAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    displayName?: boolean
    username?: boolean
    photoUrl?: boolean
    role?: boolean
    creationDate?: boolean
    lastSeenAt?: boolean
    globalMessages?: boolean | User$globalMessagesArgs<ExtArgs>
    friends?: boolean | User$friendsArgs<ExtArgs>
    friendOf?: boolean | User$friendOfArgs<ExtArgs>
    friendRequests?: boolean | User$friendRequestsArgs<ExtArgs>
    receivedRequests?: boolean | User$receivedRequestsArgs<ExtArgs>
    blocked?: boolean | User$blockedArgs<ExtArgs>
    blockedBy?: boolean | User$blockedByArgs<ExtArgs>
    groupChatsCreated?: boolean | User$groupChatsCreatedArgs<ExtArgs>
    groupMembers?: boolean | User$groupMembersArgs<ExtArgs>
    groupJoinRequests?: boolean | User$groupJoinRequestsArgs<ExtArgs>
    receivedGroupJoinRequests?: boolean | User$receivedGroupJoinRequestsArgs<ExtArgs>
    groupMessages?: boolean | User$groupMessagesArgs<ExtArgs>
    privateMessagesSent?: boolean | User$privateMessagesSentArgs<ExtArgs>
    privateMessagesReceived?: boolean | User$privateMessagesReceivedArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    displayName?: boolean
    username?: boolean
    photoUrl?: boolean
    role?: boolean
    creationDate?: boolean
    lastSeenAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    displayName?: boolean
    username?: boolean
    photoUrl?: boolean
    role?: boolean
    creationDate?: boolean
    lastSeenAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    displayName?: boolean
    username?: boolean
    photoUrl?: boolean
    role?: boolean
    creationDate?: boolean
    lastSeenAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "displayName" | "username" | "photoUrl" | "role" | "creationDate" | "lastSeenAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    globalMessages?: boolean | User$globalMessagesArgs<ExtArgs>
    friends?: boolean | User$friendsArgs<ExtArgs>
    friendOf?: boolean | User$friendOfArgs<ExtArgs>
    friendRequests?: boolean | User$friendRequestsArgs<ExtArgs>
    receivedRequests?: boolean | User$receivedRequestsArgs<ExtArgs>
    blocked?: boolean | User$blockedArgs<ExtArgs>
    blockedBy?: boolean | User$blockedByArgs<ExtArgs>
    groupChatsCreated?: boolean | User$groupChatsCreatedArgs<ExtArgs>
    groupMembers?: boolean | User$groupMembersArgs<ExtArgs>
    groupJoinRequests?: boolean | User$groupJoinRequestsArgs<ExtArgs>
    receivedGroupJoinRequests?: boolean | User$receivedGroupJoinRequestsArgs<ExtArgs>
    groupMessages?: boolean | User$groupMessagesArgs<ExtArgs>
    privateMessagesSent?: boolean | User$privateMessagesSentArgs<ExtArgs>
    privateMessagesReceived?: boolean | User$privateMessagesReceivedArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      globalMessages: Prisma.$GlobalMessagePayload<ExtArgs>[]
      friends: Prisma.$FriendsPayload<ExtArgs>[]
      friendOf: Prisma.$FriendsPayload<ExtArgs>[]
      friendRequests: Prisma.$FriendRequestPayload<ExtArgs>[]
      receivedRequests: Prisma.$FriendRequestPayload<ExtArgs>[]
      blocked: Prisma.$BlockListPayload<ExtArgs>[]
      blockedBy: Prisma.$BlockListPayload<ExtArgs>[]
      groupChatsCreated: Prisma.$GroupChatPayload<ExtArgs>[]
      groupMembers: Prisma.$GroupMemberPayload<ExtArgs>[]
      groupJoinRequests: Prisma.$GroupJoinRequestPayload<ExtArgs>[]
      receivedGroupJoinRequests: Prisma.$GroupJoinRequestPayload<ExtArgs>[]
      groupMessages: Prisma.$GroupMessagePayload<ExtArgs>[]
      privateMessagesSent: Prisma.$PrivateMessagePayload<ExtArgs>[]
      privateMessagesReceived: Prisma.$PrivateMessagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      displayName: string
      username: string
      photoUrl: string | null
      role: $Enums.Role
      creationDate: Date
      lastSeenAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    globalMessages<T extends User$globalMessagesArgs<ExtArgs> = {}>(args?: Subset<T, User$globalMessagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GlobalMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    friends<T extends User$friendsArgs<ExtArgs> = {}>(args?: Subset<T, User$friendsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FriendsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    friendOf<T extends User$friendOfArgs<ExtArgs> = {}>(args?: Subset<T, User$friendOfArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FriendsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    friendRequests<T extends User$friendRequestsArgs<ExtArgs> = {}>(args?: Subset<T, User$friendRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FriendRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    receivedRequests<T extends User$receivedRequestsArgs<ExtArgs> = {}>(args?: Subset<T, User$receivedRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FriendRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    blocked<T extends User$blockedArgs<ExtArgs> = {}>(args?: Subset<T, User$blockedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlockListPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    blockedBy<T extends User$blockedByArgs<ExtArgs> = {}>(args?: Subset<T, User$blockedByArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlockListPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    groupChatsCreated<T extends User$groupChatsCreatedArgs<ExtArgs> = {}>(args?: Subset<T, User$groupChatsCreatedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupChatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    groupMembers<T extends User$groupMembersArgs<ExtArgs> = {}>(args?: Subset<T, User$groupMembersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    groupJoinRequests<T extends User$groupJoinRequestsArgs<ExtArgs> = {}>(args?: Subset<T, User$groupJoinRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupJoinRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    receivedGroupJoinRequests<T extends User$receivedGroupJoinRequestsArgs<ExtArgs> = {}>(args?: Subset<T, User$receivedGroupJoinRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupJoinRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    groupMessages<T extends User$groupMessagesArgs<ExtArgs> = {}>(args?: Subset<T, User$groupMessagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    privateMessagesSent<T extends User$privateMessagesSentArgs<ExtArgs> = {}>(args?: Subset<T, User$privateMessagesSentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrivateMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    privateMessagesReceived<T extends User$privateMessagesReceivedArgs<ExtArgs> = {}>(args?: Subset<T, User$privateMessagesReceivedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrivateMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly displayName: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly photoUrl: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly creationDate: FieldRef<"User", 'DateTime'>
    readonly lastSeenAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.globalMessages
   */
  export type User$globalMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalMessage
     */
    select?: GlobalMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalMessage
     */
    omit?: GlobalMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GlobalMessageInclude<ExtArgs> | null
    where?: GlobalMessageWhereInput
    orderBy?: GlobalMessageOrderByWithRelationInput | GlobalMessageOrderByWithRelationInput[]
    cursor?: GlobalMessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GlobalMessageScalarFieldEnum | GlobalMessageScalarFieldEnum[]
  }

  /**
   * User.friends
   */
  export type User$friendsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friends
     */
    select?: FriendsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friends
     */
    omit?: FriendsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendsInclude<ExtArgs> | null
    where?: FriendsWhereInput
    orderBy?: FriendsOrderByWithRelationInput | FriendsOrderByWithRelationInput[]
    cursor?: FriendsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FriendsScalarFieldEnum | FriendsScalarFieldEnum[]
  }

  /**
   * User.friendOf
   */
  export type User$friendOfArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friends
     */
    select?: FriendsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friends
     */
    omit?: FriendsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendsInclude<ExtArgs> | null
    where?: FriendsWhereInput
    orderBy?: FriendsOrderByWithRelationInput | FriendsOrderByWithRelationInput[]
    cursor?: FriendsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FriendsScalarFieldEnum | FriendsScalarFieldEnum[]
  }

  /**
   * User.friendRequests
   */
  export type User$friendRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FriendRequest
     */
    select?: FriendRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FriendRequest
     */
    omit?: FriendRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendRequestInclude<ExtArgs> | null
    where?: FriendRequestWhereInput
    orderBy?: FriendRequestOrderByWithRelationInput | FriendRequestOrderByWithRelationInput[]
    cursor?: FriendRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FriendRequestScalarFieldEnum | FriendRequestScalarFieldEnum[]
  }

  /**
   * User.receivedRequests
   */
  export type User$receivedRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FriendRequest
     */
    select?: FriendRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FriendRequest
     */
    omit?: FriendRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendRequestInclude<ExtArgs> | null
    where?: FriendRequestWhereInput
    orderBy?: FriendRequestOrderByWithRelationInput | FriendRequestOrderByWithRelationInput[]
    cursor?: FriendRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FriendRequestScalarFieldEnum | FriendRequestScalarFieldEnum[]
  }

  /**
   * User.blocked
   */
  export type User$blockedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockList
     */
    select?: BlockListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlockList
     */
    omit?: BlockListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockListInclude<ExtArgs> | null
    where?: BlockListWhereInput
    orderBy?: BlockListOrderByWithRelationInput | BlockListOrderByWithRelationInput[]
    cursor?: BlockListWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BlockListScalarFieldEnum | BlockListScalarFieldEnum[]
  }

  /**
   * User.blockedBy
   */
  export type User$blockedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockList
     */
    select?: BlockListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlockList
     */
    omit?: BlockListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockListInclude<ExtArgs> | null
    where?: BlockListWhereInput
    orderBy?: BlockListOrderByWithRelationInput | BlockListOrderByWithRelationInput[]
    cursor?: BlockListWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BlockListScalarFieldEnum | BlockListScalarFieldEnum[]
  }

  /**
   * User.groupChatsCreated
   */
  export type User$groupChatsCreatedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupChat
     */
    select?: GroupChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupChat
     */
    omit?: GroupChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupChatInclude<ExtArgs> | null
    where?: GroupChatWhereInput
    orderBy?: GroupChatOrderByWithRelationInput | GroupChatOrderByWithRelationInput[]
    cursor?: GroupChatWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GroupChatScalarFieldEnum | GroupChatScalarFieldEnum[]
  }

  /**
   * User.groupMembers
   */
  export type User$groupMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMember
     */
    omit?: GroupMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberInclude<ExtArgs> | null
    where?: GroupMemberWhereInput
    orderBy?: GroupMemberOrderByWithRelationInput | GroupMemberOrderByWithRelationInput[]
    cursor?: GroupMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GroupMemberScalarFieldEnum | GroupMemberScalarFieldEnum[]
  }

  /**
   * User.groupJoinRequests
   */
  export type User$groupJoinRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupJoinRequest
     */
    select?: GroupJoinRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupJoinRequest
     */
    omit?: GroupJoinRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupJoinRequestInclude<ExtArgs> | null
    where?: GroupJoinRequestWhereInput
    orderBy?: GroupJoinRequestOrderByWithRelationInput | GroupJoinRequestOrderByWithRelationInput[]
    cursor?: GroupJoinRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GroupJoinRequestScalarFieldEnum | GroupJoinRequestScalarFieldEnum[]
  }

  /**
   * User.receivedGroupJoinRequests
   */
  export type User$receivedGroupJoinRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupJoinRequest
     */
    select?: GroupJoinRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupJoinRequest
     */
    omit?: GroupJoinRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupJoinRequestInclude<ExtArgs> | null
    where?: GroupJoinRequestWhereInput
    orderBy?: GroupJoinRequestOrderByWithRelationInput | GroupJoinRequestOrderByWithRelationInput[]
    cursor?: GroupJoinRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GroupJoinRequestScalarFieldEnum | GroupJoinRequestScalarFieldEnum[]
  }

  /**
   * User.groupMessages
   */
  export type User$groupMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMessage
     */
    select?: GroupMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMessage
     */
    omit?: GroupMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMessageInclude<ExtArgs> | null
    where?: GroupMessageWhereInput
    orderBy?: GroupMessageOrderByWithRelationInput | GroupMessageOrderByWithRelationInput[]
    cursor?: GroupMessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GroupMessageScalarFieldEnum | GroupMessageScalarFieldEnum[]
  }

  /**
   * User.privateMessagesSent
   */
  export type User$privateMessagesSentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivateMessage
     */
    select?: PrivateMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrivateMessage
     */
    omit?: PrivateMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrivateMessageInclude<ExtArgs> | null
    where?: PrivateMessageWhereInput
    orderBy?: PrivateMessageOrderByWithRelationInput | PrivateMessageOrderByWithRelationInput[]
    cursor?: PrivateMessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PrivateMessageScalarFieldEnum | PrivateMessageScalarFieldEnum[]
  }

  /**
   * User.privateMessagesReceived
   */
  export type User$privateMessagesReceivedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivateMessage
     */
    select?: PrivateMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrivateMessage
     */
    omit?: PrivateMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrivateMessageInclude<ExtArgs> | null
    where?: PrivateMessageWhereInput
    orderBy?: PrivateMessageOrderByWithRelationInput | PrivateMessageOrderByWithRelationInput[]
    cursor?: PrivateMessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PrivateMessageScalarFieldEnum | PrivateMessageScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model GlobalMessage
   */

  export type AggregateGlobalMessage = {
    _count: GlobalMessageCountAggregateOutputType | null
    _min: GlobalMessageMinAggregateOutputType | null
    _max: GlobalMessageMaxAggregateOutputType | null
  }

  export type GlobalMessageMinAggregateOutputType = {
    id: string | null
    authorId: string | null
    content: string | null
    photoUrl: string | null
    type: string | null
    createdAt: Date | null
    deleted: boolean | null
  }

  export type GlobalMessageMaxAggregateOutputType = {
    id: string | null
    authorId: string | null
    content: string | null
    photoUrl: string | null
    type: string | null
    createdAt: Date | null
    deleted: boolean | null
  }

  export type GlobalMessageCountAggregateOutputType = {
    id: number
    authorId: number
    content: number
    photoUrl: number
    type: number
    createdAt: number
    deleted: number
    _all: number
  }


  export type GlobalMessageMinAggregateInputType = {
    id?: true
    authorId?: true
    content?: true
    photoUrl?: true
    type?: true
    createdAt?: true
    deleted?: true
  }

  export type GlobalMessageMaxAggregateInputType = {
    id?: true
    authorId?: true
    content?: true
    photoUrl?: true
    type?: true
    createdAt?: true
    deleted?: true
  }

  export type GlobalMessageCountAggregateInputType = {
    id?: true
    authorId?: true
    content?: true
    photoUrl?: true
    type?: true
    createdAt?: true
    deleted?: true
    _all?: true
  }

  export type GlobalMessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GlobalMessage to aggregate.
     */
    where?: GlobalMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GlobalMessages to fetch.
     */
    orderBy?: GlobalMessageOrderByWithRelationInput | GlobalMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GlobalMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GlobalMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GlobalMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GlobalMessages
    **/
    _count?: true | GlobalMessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GlobalMessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GlobalMessageMaxAggregateInputType
  }

  export type GetGlobalMessageAggregateType<T extends GlobalMessageAggregateArgs> = {
        [P in keyof T & keyof AggregateGlobalMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGlobalMessage[P]>
      : GetScalarType<T[P], AggregateGlobalMessage[P]>
  }




  export type GlobalMessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GlobalMessageWhereInput
    orderBy?: GlobalMessageOrderByWithAggregationInput | GlobalMessageOrderByWithAggregationInput[]
    by: GlobalMessageScalarFieldEnum[] | GlobalMessageScalarFieldEnum
    having?: GlobalMessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GlobalMessageCountAggregateInputType | true
    _min?: GlobalMessageMinAggregateInputType
    _max?: GlobalMessageMaxAggregateInputType
  }

  export type GlobalMessageGroupByOutputType = {
    id: string
    authorId: string
    content: string | null
    photoUrl: string | null
    type: string | null
    createdAt: Date
    deleted: boolean
    _count: GlobalMessageCountAggregateOutputType | null
    _min: GlobalMessageMinAggregateOutputType | null
    _max: GlobalMessageMaxAggregateOutputType | null
  }

  type GetGlobalMessageGroupByPayload<T extends GlobalMessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GlobalMessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GlobalMessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GlobalMessageGroupByOutputType[P]>
            : GetScalarType<T[P], GlobalMessageGroupByOutputType[P]>
        }
      >
    >


  export type GlobalMessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    authorId?: boolean
    content?: boolean
    photoUrl?: boolean
    type?: boolean
    createdAt?: boolean
    deleted?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["globalMessage"]>

  export type GlobalMessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    authorId?: boolean
    content?: boolean
    photoUrl?: boolean
    type?: boolean
    createdAt?: boolean
    deleted?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["globalMessage"]>

  export type GlobalMessageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    authorId?: boolean
    content?: boolean
    photoUrl?: boolean
    type?: boolean
    createdAt?: boolean
    deleted?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["globalMessage"]>

  export type GlobalMessageSelectScalar = {
    id?: boolean
    authorId?: boolean
    content?: boolean
    photoUrl?: boolean
    type?: boolean
    createdAt?: boolean
    deleted?: boolean
  }

  export type GlobalMessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "authorId" | "content" | "photoUrl" | "type" | "createdAt" | "deleted", ExtArgs["result"]["globalMessage"]>
  export type GlobalMessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type GlobalMessageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type GlobalMessageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $GlobalMessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GlobalMessage"
    objects: {
      author: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      authorId: string
      content: string | null
      photoUrl: string | null
      type: string | null
      createdAt: Date
      deleted: boolean
    }, ExtArgs["result"]["globalMessage"]>
    composites: {}
  }

  type GlobalMessageGetPayload<S extends boolean | null | undefined | GlobalMessageDefaultArgs> = $Result.GetResult<Prisma.$GlobalMessagePayload, S>

  type GlobalMessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GlobalMessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GlobalMessageCountAggregateInputType | true
    }

  export interface GlobalMessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GlobalMessage'], meta: { name: 'GlobalMessage' } }
    /**
     * Find zero or one GlobalMessage that matches the filter.
     * @param {GlobalMessageFindUniqueArgs} args - Arguments to find a GlobalMessage
     * @example
     * // Get one GlobalMessage
     * const globalMessage = await prisma.globalMessage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GlobalMessageFindUniqueArgs>(args: SelectSubset<T, GlobalMessageFindUniqueArgs<ExtArgs>>): Prisma__GlobalMessageClient<$Result.GetResult<Prisma.$GlobalMessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GlobalMessage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GlobalMessageFindUniqueOrThrowArgs} args - Arguments to find a GlobalMessage
     * @example
     * // Get one GlobalMessage
     * const globalMessage = await prisma.globalMessage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GlobalMessageFindUniqueOrThrowArgs>(args: SelectSubset<T, GlobalMessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GlobalMessageClient<$Result.GetResult<Prisma.$GlobalMessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GlobalMessage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GlobalMessageFindFirstArgs} args - Arguments to find a GlobalMessage
     * @example
     * // Get one GlobalMessage
     * const globalMessage = await prisma.globalMessage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GlobalMessageFindFirstArgs>(args?: SelectSubset<T, GlobalMessageFindFirstArgs<ExtArgs>>): Prisma__GlobalMessageClient<$Result.GetResult<Prisma.$GlobalMessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GlobalMessage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GlobalMessageFindFirstOrThrowArgs} args - Arguments to find a GlobalMessage
     * @example
     * // Get one GlobalMessage
     * const globalMessage = await prisma.globalMessage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GlobalMessageFindFirstOrThrowArgs>(args?: SelectSubset<T, GlobalMessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__GlobalMessageClient<$Result.GetResult<Prisma.$GlobalMessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GlobalMessages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GlobalMessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GlobalMessages
     * const globalMessages = await prisma.globalMessage.findMany()
     * 
     * // Get first 10 GlobalMessages
     * const globalMessages = await prisma.globalMessage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const globalMessageWithIdOnly = await prisma.globalMessage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GlobalMessageFindManyArgs>(args?: SelectSubset<T, GlobalMessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GlobalMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GlobalMessage.
     * @param {GlobalMessageCreateArgs} args - Arguments to create a GlobalMessage.
     * @example
     * // Create one GlobalMessage
     * const GlobalMessage = await prisma.globalMessage.create({
     *   data: {
     *     // ... data to create a GlobalMessage
     *   }
     * })
     * 
     */
    create<T extends GlobalMessageCreateArgs>(args: SelectSubset<T, GlobalMessageCreateArgs<ExtArgs>>): Prisma__GlobalMessageClient<$Result.GetResult<Prisma.$GlobalMessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GlobalMessages.
     * @param {GlobalMessageCreateManyArgs} args - Arguments to create many GlobalMessages.
     * @example
     * // Create many GlobalMessages
     * const globalMessage = await prisma.globalMessage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GlobalMessageCreateManyArgs>(args?: SelectSubset<T, GlobalMessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GlobalMessages and returns the data saved in the database.
     * @param {GlobalMessageCreateManyAndReturnArgs} args - Arguments to create many GlobalMessages.
     * @example
     * // Create many GlobalMessages
     * const globalMessage = await prisma.globalMessage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GlobalMessages and only return the `id`
     * const globalMessageWithIdOnly = await prisma.globalMessage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GlobalMessageCreateManyAndReturnArgs>(args?: SelectSubset<T, GlobalMessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GlobalMessagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GlobalMessage.
     * @param {GlobalMessageDeleteArgs} args - Arguments to delete one GlobalMessage.
     * @example
     * // Delete one GlobalMessage
     * const GlobalMessage = await prisma.globalMessage.delete({
     *   where: {
     *     // ... filter to delete one GlobalMessage
     *   }
     * })
     * 
     */
    delete<T extends GlobalMessageDeleteArgs>(args: SelectSubset<T, GlobalMessageDeleteArgs<ExtArgs>>): Prisma__GlobalMessageClient<$Result.GetResult<Prisma.$GlobalMessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GlobalMessage.
     * @param {GlobalMessageUpdateArgs} args - Arguments to update one GlobalMessage.
     * @example
     * // Update one GlobalMessage
     * const globalMessage = await prisma.globalMessage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GlobalMessageUpdateArgs>(args: SelectSubset<T, GlobalMessageUpdateArgs<ExtArgs>>): Prisma__GlobalMessageClient<$Result.GetResult<Prisma.$GlobalMessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GlobalMessages.
     * @param {GlobalMessageDeleteManyArgs} args - Arguments to filter GlobalMessages to delete.
     * @example
     * // Delete a few GlobalMessages
     * const { count } = await prisma.globalMessage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GlobalMessageDeleteManyArgs>(args?: SelectSubset<T, GlobalMessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GlobalMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GlobalMessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GlobalMessages
     * const globalMessage = await prisma.globalMessage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GlobalMessageUpdateManyArgs>(args: SelectSubset<T, GlobalMessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GlobalMessages and returns the data updated in the database.
     * @param {GlobalMessageUpdateManyAndReturnArgs} args - Arguments to update many GlobalMessages.
     * @example
     * // Update many GlobalMessages
     * const globalMessage = await prisma.globalMessage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GlobalMessages and only return the `id`
     * const globalMessageWithIdOnly = await prisma.globalMessage.updateManyAndReturn({
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
    updateManyAndReturn<T extends GlobalMessageUpdateManyAndReturnArgs>(args: SelectSubset<T, GlobalMessageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GlobalMessagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GlobalMessage.
     * @param {GlobalMessageUpsertArgs} args - Arguments to update or create a GlobalMessage.
     * @example
     * // Update or create a GlobalMessage
     * const globalMessage = await prisma.globalMessage.upsert({
     *   create: {
     *     // ... data to create a GlobalMessage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GlobalMessage we want to update
     *   }
     * })
     */
    upsert<T extends GlobalMessageUpsertArgs>(args: SelectSubset<T, GlobalMessageUpsertArgs<ExtArgs>>): Prisma__GlobalMessageClient<$Result.GetResult<Prisma.$GlobalMessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GlobalMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GlobalMessageCountArgs} args - Arguments to filter GlobalMessages to count.
     * @example
     * // Count the number of GlobalMessages
     * const count = await prisma.globalMessage.count({
     *   where: {
     *     // ... the filter for the GlobalMessages we want to count
     *   }
     * })
    **/
    count<T extends GlobalMessageCountArgs>(
      args?: Subset<T, GlobalMessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GlobalMessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GlobalMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GlobalMessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GlobalMessageAggregateArgs>(args: Subset<T, GlobalMessageAggregateArgs>): Prisma.PrismaPromise<GetGlobalMessageAggregateType<T>>

    /**
     * Group by GlobalMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GlobalMessageGroupByArgs} args - Group by arguments.
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
      T extends GlobalMessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GlobalMessageGroupByArgs['orderBy'] }
        : { orderBy?: GlobalMessageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GlobalMessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGlobalMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GlobalMessage model
   */
  readonly fields: GlobalMessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GlobalMessage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GlobalMessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    author<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the GlobalMessage model
   */
  interface GlobalMessageFieldRefs {
    readonly id: FieldRef<"GlobalMessage", 'String'>
    readonly authorId: FieldRef<"GlobalMessage", 'String'>
    readonly content: FieldRef<"GlobalMessage", 'String'>
    readonly photoUrl: FieldRef<"GlobalMessage", 'String'>
    readonly type: FieldRef<"GlobalMessage", 'String'>
    readonly createdAt: FieldRef<"GlobalMessage", 'DateTime'>
    readonly deleted: FieldRef<"GlobalMessage", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * GlobalMessage findUnique
   */
  export type GlobalMessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalMessage
     */
    select?: GlobalMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalMessage
     */
    omit?: GlobalMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GlobalMessageInclude<ExtArgs> | null
    /**
     * Filter, which GlobalMessage to fetch.
     */
    where: GlobalMessageWhereUniqueInput
  }

  /**
   * GlobalMessage findUniqueOrThrow
   */
  export type GlobalMessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalMessage
     */
    select?: GlobalMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalMessage
     */
    omit?: GlobalMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GlobalMessageInclude<ExtArgs> | null
    /**
     * Filter, which GlobalMessage to fetch.
     */
    where: GlobalMessageWhereUniqueInput
  }

  /**
   * GlobalMessage findFirst
   */
  export type GlobalMessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalMessage
     */
    select?: GlobalMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalMessage
     */
    omit?: GlobalMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GlobalMessageInclude<ExtArgs> | null
    /**
     * Filter, which GlobalMessage to fetch.
     */
    where?: GlobalMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GlobalMessages to fetch.
     */
    orderBy?: GlobalMessageOrderByWithRelationInput | GlobalMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GlobalMessages.
     */
    cursor?: GlobalMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GlobalMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GlobalMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GlobalMessages.
     */
    distinct?: GlobalMessageScalarFieldEnum | GlobalMessageScalarFieldEnum[]
  }

  /**
   * GlobalMessage findFirstOrThrow
   */
  export type GlobalMessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalMessage
     */
    select?: GlobalMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalMessage
     */
    omit?: GlobalMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GlobalMessageInclude<ExtArgs> | null
    /**
     * Filter, which GlobalMessage to fetch.
     */
    where?: GlobalMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GlobalMessages to fetch.
     */
    orderBy?: GlobalMessageOrderByWithRelationInput | GlobalMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GlobalMessages.
     */
    cursor?: GlobalMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GlobalMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GlobalMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GlobalMessages.
     */
    distinct?: GlobalMessageScalarFieldEnum | GlobalMessageScalarFieldEnum[]
  }

  /**
   * GlobalMessage findMany
   */
  export type GlobalMessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalMessage
     */
    select?: GlobalMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalMessage
     */
    omit?: GlobalMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GlobalMessageInclude<ExtArgs> | null
    /**
     * Filter, which GlobalMessages to fetch.
     */
    where?: GlobalMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GlobalMessages to fetch.
     */
    orderBy?: GlobalMessageOrderByWithRelationInput | GlobalMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GlobalMessages.
     */
    cursor?: GlobalMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GlobalMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GlobalMessages.
     */
    skip?: number
    distinct?: GlobalMessageScalarFieldEnum | GlobalMessageScalarFieldEnum[]
  }

  /**
   * GlobalMessage create
   */
  export type GlobalMessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalMessage
     */
    select?: GlobalMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalMessage
     */
    omit?: GlobalMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GlobalMessageInclude<ExtArgs> | null
    /**
     * The data needed to create a GlobalMessage.
     */
    data: XOR<GlobalMessageCreateInput, GlobalMessageUncheckedCreateInput>
  }

  /**
   * GlobalMessage createMany
   */
  export type GlobalMessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GlobalMessages.
     */
    data: GlobalMessageCreateManyInput | GlobalMessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GlobalMessage createManyAndReturn
   */
  export type GlobalMessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalMessage
     */
    select?: GlobalMessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalMessage
     */
    omit?: GlobalMessageOmit<ExtArgs> | null
    /**
     * The data used to create many GlobalMessages.
     */
    data: GlobalMessageCreateManyInput | GlobalMessageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GlobalMessageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * GlobalMessage update
   */
  export type GlobalMessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalMessage
     */
    select?: GlobalMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalMessage
     */
    omit?: GlobalMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GlobalMessageInclude<ExtArgs> | null
    /**
     * The data needed to update a GlobalMessage.
     */
    data: XOR<GlobalMessageUpdateInput, GlobalMessageUncheckedUpdateInput>
    /**
     * Choose, which GlobalMessage to update.
     */
    where: GlobalMessageWhereUniqueInput
  }

  /**
   * GlobalMessage updateMany
   */
  export type GlobalMessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GlobalMessages.
     */
    data: XOR<GlobalMessageUpdateManyMutationInput, GlobalMessageUncheckedUpdateManyInput>
    /**
     * Filter which GlobalMessages to update
     */
    where?: GlobalMessageWhereInput
    /**
     * Limit how many GlobalMessages to update.
     */
    limit?: number
  }

  /**
   * GlobalMessage updateManyAndReturn
   */
  export type GlobalMessageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalMessage
     */
    select?: GlobalMessageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalMessage
     */
    omit?: GlobalMessageOmit<ExtArgs> | null
    /**
     * The data used to update GlobalMessages.
     */
    data: XOR<GlobalMessageUpdateManyMutationInput, GlobalMessageUncheckedUpdateManyInput>
    /**
     * Filter which GlobalMessages to update
     */
    where?: GlobalMessageWhereInput
    /**
     * Limit how many GlobalMessages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GlobalMessageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * GlobalMessage upsert
   */
  export type GlobalMessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalMessage
     */
    select?: GlobalMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalMessage
     */
    omit?: GlobalMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GlobalMessageInclude<ExtArgs> | null
    /**
     * The filter to search for the GlobalMessage to update in case it exists.
     */
    where: GlobalMessageWhereUniqueInput
    /**
     * In case the GlobalMessage found by the `where` argument doesn't exist, create a new GlobalMessage with this data.
     */
    create: XOR<GlobalMessageCreateInput, GlobalMessageUncheckedCreateInput>
    /**
     * In case the GlobalMessage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GlobalMessageUpdateInput, GlobalMessageUncheckedUpdateInput>
  }

  /**
   * GlobalMessage delete
   */
  export type GlobalMessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalMessage
     */
    select?: GlobalMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalMessage
     */
    omit?: GlobalMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GlobalMessageInclude<ExtArgs> | null
    /**
     * Filter which GlobalMessage to delete.
     */
    where: GlobalMessageWhereUniqueInput
  }

  /**
   * GlobalMessage deleteMany
   */
  export type GlobalMessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GlobalMessages to delete
     */
    where?: GlobalMessageWhereInput
    /**
     * Limit how many GlobalMessages to delete.
     */
    limit?: number
  }

  /**
   * GlobalMessage without action
   */
  export type GlobalMessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalMessage
     */
    select?: GlobalMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalMessage
     */
    omit?: GlobalMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GlobalMessageInclude<ExtArgs> | null
  }


  /**
   * Model Friends
   */

  export type AggregateFriends = {
    _count: FriendsCountAggregateOutputType | null
    _min: FriendsMinAggregateOutputType | null
    _max: FriendsMaxAggregateOutputType | null
  }

  export type FriendsMinAggregateOutputType = {
    userId: string | null
    friendId: string | null
    friendsSince: Date | null
  }

  export type FriendsMaxAggregateOutputType = {
    userId: string | null
    friendId: string | null
    friendsSince: Date | null
  }

  export type FriendsCountAggregateOutputType = {
    userId: number
    friendId: number
    friendsSince: number
    _all: number
  }


  export type FriendsMinAggregateInputType = {
    userId?: true
    friendId?: true
    friendsSince?: true
  }

  export type FriendsMaxAggregateInputType = {
    userId?: true
    friendId?: true
    friendsSince?: true
  }

  export type FriendsCountAggregateInputType = {
    userId?: true
    friendId?: true
    friendsSince?: true
    _all?: true
  }

  export type FriendsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Friends to aggregate.
     */
    where?: FriendsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Friends to fetch.
     */
    orderBy?: FriendsOrderByWithRelationInput | FriendsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FriendsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Friends from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Friends.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Friends
    **/
    _count?: true | FriendsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FriendsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FriendsMaxAggregateInputType
  }

  export type GetFriendsAggregateType<T extends FriendsAggregateArgs> = {
        [P in keyof T & keyof AggregateFriends]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFriends[P]>
      : GetScalarType<T[P], AggregateFriends[P]>
  }




  export type FriendsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FriendsWhereInput
    orderBy?: FriendsOrderByWithAggregationInput | FriendsOrderByWithAggregationInput[]
    by: FriendsScalarFieldEnum[] | FriendsScalarFieldEnum
    having?: FriendsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FriendsCountAggregateInputType | true
    _min?: FriendsMinAggregateInputType
    _max?: FriendsMaxAggregateInputType
  }

  export type FriendsGroupByOutputType = {
    userId: string
    friendId: string
    friendsSince: Date
    _count: FriendsCountAggregateOutputType | null
    _min: FriendsMinAggregateOutputType | null
    _max: FriendsMaxAggregateOutputType | null
  }

  type GetFriendsGroupByPayload<T extends FriendsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FriendsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FriendsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FriendsGroupByOutputType[P]>
            : GetScalarType<T[P], FriendsGroupByOutputType[P]>
        }
      >
    >


  export type FriendsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    friendId?: boolean
    friendsSince?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    friend?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["friends"]>

  export type FriendsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    friendId?: boolean
    friendsSince?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    friend?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["friends"]>

  export type FriendsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    friendId?: boolean
    friendsSince?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    friend?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["friends"]>

  export type FriendsSelectScalar = {
    userId?: boolean
    friendId?: boolean
    friendsSince?: boolean
  }

  export type FriendsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "friendId" | "friendsSince", ExtArgs["result"]["friends"]>
  export type FriendsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    friend?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type FriendsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    friend?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type FriendsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    friend?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $FriendsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Friends"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      friend: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: string
      friendId: string
      friendsSince: Date
    }, ExtArgs["result"]["friends"]>
    composites: {}
  }

  type FriendsGetPayload<S extends boolean | null | undefined | FriendsDefaultArgs> = $Result.GetResult<Prisma.$FriendsPayload, S>

  type FriendsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FriendsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FriendsCountAggregateInputType | true
    }

  export interface FriendsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Friends'], meta: { name: 'Friends' } }
    /**
     * Find zero or one Friends that matches the filter.
     * @param {FriendsFindUniqueArgs} args - Arguments to find a Friends
     * @example
     * // Get one Friends
     * const friends = await prisma.friends.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FriendsFindUniqueArgs>(args: SelectSubset<T, FriendsFindUniqueArgs<ExtArgs>>): Prisma__FriendsClient<$Result.GetResult<Prisma.$FriendsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Friends that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FriendsFindUniqueOrThrowArgs} args - Arguments to find a Friends
     * @example
     * // Get one Friends
     * const friends = await prisma.friends.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FriendsFindUniqueOrThrowArgs>(args: SelectSubset<T, FriendsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FriendsClient<$Result.GetResult<Prisma.$FriendsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Friends that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendsFindFirstArgs} args - Arguments to find a Friends
     * @example
     * // Get one Friends
     * const friends = await prisma.friends.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FriendsFindFirstArgs>(args?: SelectSubset<T, FriendsFindFirstArgs<ExtArgs>>): Prisma__FriendsClient<$Result.GetResult<Prisma.$FriendsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Friends that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendsFindFirstOrThrowArgs} args - Arguments to find a Friends
     * @example
     * // Get one Friends
     * const friends = await prisma.friends.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FriendsFindFirstOrThrowArgs>(args?: SelectSubset<T, FriendsFindFirstOrThrowArgs<ExtArgs>>): Prisma__FriendsClient<$Result.GetResult<Prisma.$FriendsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Friends that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Friends
     * const friends = await prisma.friends.findMany()
     * 
     * // Get first 10 Friends
     * const friends = await prisma.friends.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const friendsWithUserIdOnly = await prisma.friends.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends FriendsFindManyArgs>(args?: SelectSubset<T, FriendsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FriendsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Friends.
     * @param {FriendsCreateArgs} args - Arguments to create a Friends.
     * @example
     * // Create one Friends
     * const Friends = await prisma.friends.create({
     *   data: {
     *     // ... data to create a Friends
     *   }
     * })
     * 
     */
    create<T extends FriendsCreateArgs>(args: SelectSubset<T, FriendsCreateArgs<ExtArgs>>): Prisma__FriendsClient<$Result.GetResult<Prisma.$FriendsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Friends.
     * @param {FriendsCreateManyArgs} args - Arguments to create many Friends.
     * @example
     * // Create many Friends
     * const friends = await prisma.friends.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FriendsCreateManyArgs>(args?: SelectSubset<T, FriendsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Friends and returns the data saved in the database.
     * @param {FriendsCreateManyAndReturnArgs} args - Arguments to create many Friends.
     * @example
     * // Create many Friends
     * const friends = await prisma.friends.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Friends and only return the `userId`
     * const friendsWithUserIdOnly = await prisma.friends.createManyAndReturn({
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FriendsCreateManyAndReturnArgs>(args?: SelectSubset<T, FriendsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FriendsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Friends.
     * @param {FriendsDeleteArgs} args - Arguments to delete one Friends.
     * @example
     * // Delete one Friends
     * const Friends = await prisma.friends.delete({
     *   where: {
     *     // ... filter to delete one Friends
     *   }
     * })
     * 
     */
    delete<T extends FriendsDeleteArgs>(args: SelectSubset<T, FriendsDeleteArgs<ExtArgs>>): Prisma__FriendsClient<$Result.GetResult<Prisma.$FriendsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Friends.
     * @param {FriendsUpdateArgs} args - Arguments to update one Friends.
     * @example
     * // Update one Friends
     * const friends = await prisma.friends.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FriendsUpdateArgs>(args: SelectSubset<T, FriendsUpdateArgs<ExtArgs>>): Prisma__FriendsClient<$Result.GetResult<Prisma.$FriendsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Friends.
     * @param {FriendsDeleteManyArgs} args - Arguments to filter Friends to delete.
     * @example
     * // Delete a few Friends
     * const { count } = await prisma.friends.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FriendsDeleteManyArgs>(args?: SelectSubset<T, FriendsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Friends.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Friends
     * const friends = await prisma.friends.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FriendsUpdateManyArgs>(args: SelectSubset<T, FriendsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Friends and returns the data updated in the database.
     * @param {FriendsUpdateManyAndReturnArgs} args - Arguments to update many Friends.
     * @example
     * // Update many Friends
     * const friends = await prisma.friends.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Friends and only return the `userId`
     * const friendsWithUserIdOnly = await prisma.friends.updateManyAndReturn({
     *   select: { userId: true },
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
    updateManyAndReturn<T extends FriendsUpdateManyAndReturnArgs>(args: SelectSubset<T, FriendsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FriendsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Friends.
     * @param {FriendsUpsertArgs} args - Arguments to update or create a Friends.
     * @example
     * // Update or create a Friends
     * const friends = await prisma.friends.upsert({
     *   create: {
     *     // ... data to create a Friends
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Friends we want to update
     *   }
     * })
     */
    upsert<T extends FriendsUpsertArgs>(args: SelectSubset<T, FriendsUpsertArgs<ExtArgs>>): Prisma__FriendsClient<$Result.GetResult<Prisma.$FriendsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Friends.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendsCountArgs} args - Arguments to filter Friends to count.
     * @example
     * // Count the number of Friends
     * const count = await prisma.friends.count({
     *   where: {
     *     // ... the filter for the Friends we want to count
     *   }
     * })
    **/
    count<T extends FriendsCountArgs>(
      args?: Subset<T, FriendsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FriendsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Friends.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FriendsAggregateArgs>(args: Subset<T, FriendsAggregateArgs>): Prisma.PrismaPromise<GetFriendsAggregateType<T>>

    /**
     * Group by Friends.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendsGroupByArgs} args - Group by arguments.
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
      T extends FriendsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FriendsGroupByArgs['orderBy'] }
        : { orderBy?: FriendsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FriendsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFriendsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Friends model
   */
  readonly fields: FriendsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Friends.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FriendsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    friend<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Friends model
   */
  interface FriendsFieldRefs {
    readonly userId: FieldRef<"Friends", 'String'>
    readonly friendId: FieldRef<"Friends", 'String'>
    readonly friendsSince: FieldRef<"Friends", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Friends findUnique
   */
  export type FriendsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friends
     */
    select?: FriendsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friends
     */
    omit?: FriendsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendsInclude<ExtArgs> | null
    /**
     * Filter, which Friends to fetch.
     */
    where: FriendsWhereUniqueInput
  }

  /**
   * Friends findUniqueOrThrow
   */
  export type FriendsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friends
     */
    select?: FriendsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friends
     */
    omit?: FriendsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendsInclude<ExtArgs> | null
    /**
     * Filter, which Friends to fetch.
     */
    where: FriendsWhereUniqueInput
  }

  /**
   * Friends findFirst
   */
  export type FriendsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friends
     */
    select?: FriendsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friends
     */
    omit?: FriendsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendsInclude<ExtArgs> | null
    /**
     * Filter, which Friends to fetch.
     */
    where?: FriendsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Friends to fetch.
     */
    orderBy?: FriendsOrderByWithRelationInput | FriendsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Friends.
     */
    cursor?: FriendsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Friends from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Friends.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Friends.
     */
    distinct?: FriendsScalarFieldEnum | FriendsScalarFieldEnum[]
  }

  /**
   * Friends findFirstOrThrow
   */
  export type FriendsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friends
     */
    select?: FriendsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friends
     */
    omit?: FriendsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendsInclude<ExtArgs> | null
    /**
     * Filter, which Friends to fetch.
     */
    where?: FriendsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Friends to fetch.
     */
    orderBy?: FriendsOrderByWithRelationInput | FriendsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Friends.
     */
    cursor?: FriendsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Friends from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Friends.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Friends.
     */
    distinct?: FriendsScalarFieldEnum | FriendsScalarFieldEnum[]
  }

  /**
   * Friends findMany
   */
  export type FriendsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friends
     */
    select?: FriendsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friends
     */
    omit?: FriendsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendsInclude<ExtArgs> | null
    /**
     * Filter, which Friends to fetch.
     */
    where?: FriendsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Friends to fetch.
     */
    orderBy?: FriendsOrderByWithRelationInput | FriendsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Friends.
     */
    cursor?: FriendsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Friends from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Friends.
     */
    skip?: number
    distinct?: FriendsScalarFieldEnum | FriendsScalarFieldEnum[]
  }

  /**
   * Friends create
   */
  export type FriendsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friends
     */
    select?: FriendsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friends
     */
    omit?: FriendsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendsInclude<ExtArgs> | null
    /**
     * The data needed to create a Friends.
     */
    data: XOR<FriendsCreateInput, FriendsUncheckedCreateInput>
  }

  /**
   * Friends createMany
   */
  export type FriendsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Friends.
     */
    data: FriendsCreateManyInput | FriendsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Friends createManyAndReturn
   */
  export type FriendsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friends
     */
    select?: FriendsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Friends
     */
    omit?: FriendsOmit<ExtArgs> | null
    /**
     * The data used to create many Friends.
     */
    data: FriendsCreateManyInput | FriendsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Friends update
   */
  export type FriendsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friends
     */
    select?: FriendsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friends
     */
    omit?: FriendsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendsInclude<ExtArgs> | null
    /**
     * The data needed to update a Friends.
     */
    data: XOR<FriendsUpdateInput, FriendsUncheckedUpdateInput>
    /**
     * Choose, which Friends to update.
     */
    where: FriendsWhereUniqueInput
  }

  /**
   * Friends updateMany
   */
  export type FriendsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Friends.
     */
    data: XOR<FriendsUpdateManyMutationInput, FriendsUncheckedUpdateManyInput>
    /**
     * Filter which Friends to update
     */
    where?: FriendsWhereInput
    /**
     * Limit how many Friends to update.
     */
    limit?: number
  }

  /**
   * Friends updateManyAndReturn
   */
  export type FriendsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friends
     */
    select?: FriendsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Friends
     */
    omit?: FriendsOmit<ExtArgs> | null
    /**
     * The data used to update Friends.
     */
    data: XOR<FriendsUpdateManyMutationInput, FriendsUncheckedUpdateManyInput>
    /**
     * Filter which Friends to update
     */
    where?: FriendsWhereInput
    /**
     * Limit how many Friends to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Friends upsert
   */
  export type FriendsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friends
     */
    select?: FriendsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friends
     */
    omit?: FriendsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendsInclude<ExtArgs> | null
    /**
     * The filter to search for the Friends to update in case it exists.
     */
    where: FriendsWhereUniqueInput
    /**
     * In case the Friends found by the `where` argument doesn't exist, create a new Friends with this data.
     */
    create: XOR<FriendsCreateInput, FriendsUncheckedCreateInput>
    /**
     * In case the Friends was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FriendsUpdateInput, FriendsUncheckedUpdateInput>
  }

  /**
   * Friends delete
   */
  export type FriendsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friends
     */
    select?: FriendsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friends
     */
    omit?: FriendsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendsInclude<ExtArgs> | null
    /**
     * Filter which Friends to delete.
     */
    where: FriendsWhereUniqueInput
  }

  /**
   * Friends deleteMany
   */
  export type FriendsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Friends to delete
     */
    where?: FriendsWhereInput
    /**
     * Limit how many Friends to delete.
     */
    limit?: number
  }

  /**
   * Friends without action
   */
  export type FriendsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friends
     */
    select?: FriendsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friends
     */
    omit?: FriendsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendsInclude<ExtArgs> | null
  }


  /**
   * Model FriendRequest
   */

  export type AggregateFriendRequest = {
    _count: FriendRequestCountAggregateOutputType | null
    _min: FriendRequestMinAggregateOutputType | null
    _max: FriendRequestMaxAggregateOutputType | null
  }

  export type FriendRequestMinAggregateOutputType = {
    id: string | null
    requestFromId: string | null
    requestToId: string | null
    requestedAt: Date | null
  }

  export type FriendRequestMaxAggregateOutputType = {
    id: string | null
    requestFromId: string | null
    requestToId: string | null
    requestedAt: Date | null
  }

  export type FriendRequestCountAggregateOutputType = {
    id: number
    requestFromId: number
    requestToId: number
    requestedAt: number
    _all: number
  }


  export type FriendRequestMinAggregateInputType = {
    id?: true
    requestFromId?: true
    requestToId?: true
    requestedAt?: true
  }

  export type FriendRequestMaxAggregateInputType = {
    id?: true
    requestFromId?: true
    requestToId?: true
    requestedAt?: true
  }

  export type FriendRequestCountAggregateInputType = {
    id?: true
    requestFromId?: true
    requestToId?: true
    requestedAt?: true
    _all?: true
  }

  export type FriendRequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FriendRequest to aggregate.
     */
    where?: FriendRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FriendRequests to fetch.
     */
    orderBy?: FriendRequestOrderByWithRelationInput | FriendRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FriendRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FriendRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FriendRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FriendRequests
    **/
    _count?: true | FriendRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FriendRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FriendRequestMaxAggregateInputType
  }

  export type GetFriendRequestAggregateType<T extends FriendRequestAggregateArgs> = {
        [P in keyof T & keyof AggregateFriendRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFriendRequest[P]>
      : GetScalarType<T[P], AggregateFriendRequest[P]>
  }




  export type FriendRequestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FriendRequestWhereInput
    orderBy?: FriendRequestOrderByWithAggregationInput | FriendRequestOrderByWithAggregationInput[]
    by: FriendRequestScalarFieldEnum[] | FriendRequestScalarFieldEnum
    having?: FriendRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FriendRequestCountAggregateInputType | true
    _min?: FriendRequestMinAggregateInputType
    _max?: FriendRequestMaxAggregateInputType
  }

  export type FriendRequestGroupByOutputType = {
    id: string
    requestFromId: string
    requestToId: string
    requestedAt: Date
    _count: FriendRequestCountAggregateOutputType | null
    _min: FriendRequestMinAggregateOutputType | null
    _max: FriendRequestMaxAggregateOutputType | null
  }

  type GetFriendRequestGroupByPayload<T extends FriendRequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FriendRequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FriendRequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FriendRequestGroupByOutputType[P]>
            : GetScalarType<T[P], FriendRequestGroupByOutputType[P]>
        }
      >
    >


  export type FriendRequestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    requestFromId?: boolean
    requestToId?: boolean
    requestedAt?: boolean
    requestFrom?: boolean | UserDefaultArgs<ExtArgs>
    requestTo?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["friendRequest"]>

  export type FriendRequestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    requestFromId?: boolean
    requestToId?: boolean
    requestedAt?: boolean
    requestFrom?: boolean | UserDefaultArgs<ExtArgs>
    requestTo?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["friendRequest"]>

  export type FriendRequestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    requestFromId?: boolean
    requestToId?: boolean
    requestedAt?: boolean
    requestFrom?: boolean | UserDefaultArgs<ExtArgs>
    requestTo?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["friendRequest"]>

  export type FriendRequestSelectScalar = {
    id?: boolean
    requestFromId?: boolean
    requestToId?: boolean
    requestedAt?: boolean
  }

  export type FriendRequestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "requestFromId" | "requestToId" | "requestedAt", ExtArgs["result"]["friendRequest"]>
  export type FriendRequestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    requestFrom?: boolean | UserDefaultArgs<ExtArgs>
    requestTo?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type FriendRequestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    requestFrom?: boolean | UserDefaultArgs<ExtArgs>
    requestTo?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type FriendRequestIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    requestFrom?: boolean | UserDefaultArgs<ExtArgs>
    requestTo?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $FriendRequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FriendRequest"
    objects: {
      requestFrom: Prisma.$UserPayload<ExtArgs>
      requestTo: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      requestFromId: string
      requestToId: string
      requestedAt: Date
    }, ExtArgs["result"]["friendRequest"]>
    composites: {}
  }

  type FriendRequestGetPayload<S extends boolean | null | undefined | FriendRequestDefaultArgs> = $Result.GetResult<Prisma.$FriendRequestPayload, S>

  type FriendRequestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FriendRequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FriendRequestCountAggregateInputType | true
    }

  export interface FriendRequestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FriendRequest'], meta: { name: 'FriendRequest' } }
    /**
     * Find zero or one FriendRequest that matches the filter.
     * @param {FriendRequestFindUniqueArgs} args - Arguments to find a FriendRequest
     * @example
     * // Get one FriendRequest
     * const friendRequest = await prisma.friendRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FriendRequestFindUniqueArgs>(args: SelectSubset<T, FriendRequestFindUniqueArgs<ExtArgs>>): Prisma__FriendRequestClient<$Result.GetResult<Prisma.$FriendRequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FriendRequest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FriendRequestFindUniqueOrThrowArgs} args - Arguments to find a FriendRequest
     * @example
     * // Get one FriendRequest
     * const friendRequest = await prisma.friendRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FriendRequestFindUniqueOrThrowArgs>(args: SelectSubset<T, FriendRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FriendRequestClient<$Result.GetResult<Prisma.$FriendRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FriendRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendRequestFindFirstArgs} args - Arguments to find a FriendRequest
     * @example
     * // Get one FriendRequest
     * const friendRequest = await prisma.friendRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FriendRequestFindFirstArgs>(args?: SelectSubset<T, FriendRequestFindFirstArgs<ExtArgs>>): Prisma__FriendRequestClient<$Result.GetResult<Prisma.$FriendRequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FriendRequest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendRequestFindFirstOrThrowArgs} args - Arguments to find a FriendRequest
     * @example
     * // Get one FriendRequest
     * const friendRequest = await prisma.friendRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FriendRequestFindFirstOrThrowArgs>(args?: SelectSubset<T, FriendRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma__FriendRequestClient<$Result.GetResult<Prisma.$FriendRequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FriendRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendRequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FriendRequests
     * const friendRequests = await prisma.friendRequest.findMany()
     * 
     * // Get first 10 FriendRequests
     * const friendRequests = await prisma.friendRequest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const friendRequestWithIdOnly = await prisma.friendRequest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FriendRequestFindManyArgs>(args?: SelectSubset<T, FriendRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FriendRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FriendRequest.
     * @param {FriendRequestCreateArgs} args - Arguments to create a FriendRequest.
     * @example
     * // Create one FriendRequest
     * const FriendRequest = await prisma.friendRequest.create({
     *   data: {
     *     // ... data to create a FriendRequest
     *   }
     * })
     * 
     */
    create<T extends FriendRequestCreateArgs>(args: SelectSubset<T, FriendRequestCreateArgs<ExtArgs>>): Prisma__FriendRequestClient<$Result.GetResult<Prisma.$FriendRequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FriendRequests.
     * @param {FriendRequestCreateManyArgs} args - Arguments to create many FriendRequests.
     * @example
     * // Create many FriendRequests
     * const friendRequest = await prisma.friendRequest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FriendRequestCreateManyArgs>(args?: SelectSubset<T, FriendRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FriendRequests and returns the data saved in the database.
     * @param {FriendRequestCreateManyAndReturnArgs} args - Arguments to create many FriendRequests.
     * @example
     * // Create many FriendRequests
     * const friendRequest = await prisma.friendRequest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FriendRequests and only return the `id`
     * const friendRequestWithIdOnly = await prisma.friendRequest.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FriendRequestCreateManyAndReturnArgs>(args?: SelectSubset<T, FriendRequestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FriendRequestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FriendRequest.
     * @param {FriendRequestDeleteArgs} args - Arguments to delete one FriendRequest.
     * @example
     * // Delete one FriendRequest
     * const FriendRequest = await prisma.friendRequest.delete({
     *   where: {
     *     // ... filter to delete one FriendRequest
     *   }
     * })
     * 
     */
    delete<T extends FriendRequestDeleteArgs>(args: SelectSubset<T, FriendRequestDeleteArgs<ExtArgs>>): Prisma__FriendRequestClient<$Result.GetResult<Prisma.$FriendRequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FriendRequest.
     * @param {FriendRequestUpdateArgs} args - Arguments to update one FriendRequest.
     * @example
     * // Update one FriendRequest
     * const friendRequest = await prisma.friendRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FriendRequestUpdateArgs>(args: SelectSubset<T, FriendRequestUpdateArgs<ExtArgs>>): Prisma__FriendRequestClient<$Result.GetResult<Prisma.$FriendRequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FriendRequests.
     * @param {FriendRequestDeleteManyArgs} args - Arguments to filter FriendRequests to delete.
     * @example
     * // Delete a few FriendRequests
     * const { count } = await prisma.friendRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FriendRequestDeleteManyArgs>(args?: SelectSubset<T, FriendRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FriendRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FriendRequests
     * const friendRequest = await prisma.friendRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FriendRequestUpdateManyArgs>(args: SelectSubset<T, FriendRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FriendRequests and returns the data updated in the database.
     * @param {FriendRequestUpdateManyAndReturnArgs} args - Arguments to update many FriendRequests.
     * @example
     * // Update many FriendRequests
     * const friendRequest = await prisma.friendRequest.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FriendRequests and only return the `id`
     * const friendRequestWithIdOnly = await prisma.friendRequest.updateManyAndReturn({
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
    updateManyAndReturn<T extends FriendRequestUpdateManyAndReturnArgs>(args: SelectSubset<T, FriendRequestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FriendRequestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FriendRequest.
     * @param {FriendRequestUpsertArgs} args - Arguments to update or create a FriendRequest.
     * @example
     * // Update or create a FriendRequest
     * const friendRequest = await prisma.friendRequest.upsert({
     *   create: {
     *     // ... data to create a FriendRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FriendRequest we want to update
     *   }
     * })
     */
    upsert<T extends FriendRequestUpsertArgs>(args: SelectSubset<T, FriendRequestUpsertArgs<ExtArgs>>): Prisma__FriendRequestClient<$Result.GetResult<Prisma.$FriendRequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FriendRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendRequestCountArgs} args - Arguments to filter FriendRequests to count.
     * @example
     * // Count the number of FriendRequests
     * const count = await prisma.friendRequest.count({
     *   where: {
     *     // ... the filter for the FriendRequests we want to count
     *   }
     * })
    **/
    count<T extends FriendRequestCountArgs>(
      args?: Subset<T, FriendRequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FriendRequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FriendRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FriendRequestAggregateArgs>(args: Subset<T, FriendRequestAggregateArgs>): Prisma.PrismaPromise<GetFriendRequestAggregateType<T>>

    /**
     * Group by FriendRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendRequestGroupByArgs} args - Group by arguments.
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
      T extends FriendRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FriendRequestGroupByArgs['orderBy'] }
        : { orderBy?: FriendRequestGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FriendRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFriendRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FriendRequest model
   */
  readonly fields: FriendRequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FriendRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FriendRequestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    requestFrom<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    requestTo<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the FriendRequest model
   */
  interface FriendRequestFieldRefs {
    readonly id: FieldRef<"FriendRequest", 'String'>
    readonly requestFromId: FieldRef<"FriendRequest", 'String'>
    readonly requestToId: FieldRef<"FriendRequest", 'String'>
    readonly requestedAt: FieldRef<"FriendRequest", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FriendRequest findUnique
   */
  export type FriendRequestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FriendRequest
     */
    select?: FriendRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FriendRequest
     */
    omit?: FriendRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendRequestInclude<ExtArgs> | null
    /**
     * Filter, which FriendRequest to fetch.
     */
    where: FriendRequestWhereUniqueInput
  }

  /**
   * FriendRequest findUniqueOrThrow
   */
  export type FriendRequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FriendRequest
     */
    select?: FriendRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FriendRequest
     */
    omit?: FriendRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendRequestInclude<ExtArgs> | null
    /**
     * Filter, which FriendRequest to fetch.
     */
    where: FriendRequestWhereUniqueInput
  }

  /**
   * FriendRequest findFirst
   */
  export type FriendRequestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FriendRequest
     */
    select?: FriendRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FriendRequest
     */
    omit?: FriendRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendRequestInclude<ExtArgs> | null
    /**
     * Filter, which FriendRequest to fetch.
     */
    where?: FriendRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FriendRequests to fetch.
     */
    orderBy?: FriendRequestOrderByWithRelationInput | FriendRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FriendRequests.
     */
    cursor?: FriendRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FriendRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FriendRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FriendRequests.
     */
    distinct?: FriendRequestScalarFieldEnum | FriendRequestScalarFieldEnum[]
  }

  /**
   * FriendRequest findFirstOrThrow
   */
  export type FriendRequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FriendRequest
     */
    select?: FriendRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FriendRequest
     */
    omit?: FriendRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendRequestInclude<ExtArgs> | null
    /**
     * Filter, which FriendRequest to fetch.
     */
    where?: FriendRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FriendRequests to fetch.
     */
    orderBy?: FriendRequestOrderByWithRelationInput | FriendRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FriendRequests.
     */
    cursor?: FriendRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FriendRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FriendRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FriendRequests.
     */
    distinct?: FriendRequestScalarFieldEnum | FriendRequestScalarFieldEnum[]
  }

  /**
   * FriendRequest findMany
   */
  export type FriendRequestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FriendRequest
     */
    select?: FriendRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FriendRequest
     */
    omit?: FriendRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendRequestInclude<ExtArgs> | null
    /**
     * Filter, which FriendRequests to fetch.
     */
    where?: FriendRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FriendRequests to fetch.
     */
    orderBy?: FriendRequestOrderByWithRelationInput | FriendRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FriendRequests.
     */
    cursor?: FriendRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FriendRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FriendRequests.
     */
    skip?: number
    distinct?: FriendRequestScalarFieldEnum | FriendRequestScalarFieldEnum[]
  }

  /**
   * FriendRequest create
   */
  export type FriendRequestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FriendRequest
     */
    select?: FriendRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FriendRequest
     */
    omit?: FriendRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendRequestInclude<ExtArgs> | null
    /**
     * The data needed to create a FriendRequest.
     */
    data: XOR<FriendRequestCreateInput, FriendRequestUncheckedCreateInput>
  }

  /**
   * FriendRequest createMany
   */
  export type FriendRequestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FriendRequests.
     */
    data: FriendRequestCreateManyInput | FriendRequestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FriendRequest createManyAndReturn
   */
  export type FriendRequestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FriendRequest
     */
    select?: FriendRequestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FriendRequest
     */
    omit?: FriendRequestOmit<ExtArgs> | null
    /**
     * The data used to create many FriendRequests.
     */
    data: FriendRequestCreateManyInput | FriendRequestCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendRequestIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FriendRequest update
   */
  export type FriendRequestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FriendRequest
     */
    select?: FriendRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FriendRequest
     */
    omit?: FriendRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendRequestInclude<ExtArgs> | null
    /**
     * The data needed to update a FriendRequest.
     */
    data: XOR<FriendRequestUpdateInput, FriendRequestUncheckedUpdateInput>
    /**
     * Choose, which FriendRequest to update.
     */
    where: FriendRequestWhereUniqueInput
  }

  /**
   * FriendRequest updateMany
   */
  export type FriendRequestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FriendRequests.
     */
    data: XOR<FriendRequestUpdateManyMutationInput, FriendRequestUncheckedUpdateManyInput>
    /**
     * Filter which FriendRequests to update
     */
    where?: FriendRequestWhereInput
    /**
     * Limit how many FriendRequests to update.
     */
    limit?: number
  }

  /**
   * FriendRequest updateManyAndReturn
   */
  export type FriendRequestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FriendRequest
     */
    select?: FriendRequestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FriendRequest
     */
    omit?: FriendRequestOmit<ExtArgs> | null
    /**
     * The data used to update FriendRequests.
     */
    data: XOR<FriendRequestUpdateManyMutationInput, FriendRequestUncheckedUpdateManyInput>
    /**
     * Filter which FriendRequests to update
     */
    where?: FriendRequestWhereInput
    /**
     * Limit how many FriendRequests to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendRequestIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * FriendRequest upsert
   */
  export type FriendRequestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FriendRequest
     */
    select?: FriendRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FriendRequest
     */
    omit?: FriendRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendRequestInclude<ExtArgs> | null
    /**
     * The filter to search for the FriendRequest to update in case it exists.
     */
    where: FriendRequestWhereUniqueInput
    /**
     * In case the FriendRequest found by the `where` argument doesn't exist, create a new FriendRequest with this data.
     */
    create: XOR<FriendRequestCreateInput, FriendRequestUncheckedCreateInput>
    /**
     * In case the FriendRequest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FriendRequestUpdateInput, FriendRequestUncheckedUpdateInput>
  }

  /**
   * FriendRequest delete
   */
  export type FriendRequestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FriendRequest
     */
    select?: FriendRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FriendRequest
     */
    omit?: FriendRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendRequestInclude<ExtArgs> | null
    /**
     * Filter which FriendRequest to delete.
     */
    where: FriendRequestWhereUniqueInput
  }

  /**
   * FriendRequest deleteMany
   */
  export type FriendRequestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FriendRequests to delete
     */
    where?: FriendRequestWhereInput
    /**
     * Limit how many FriendRequests to delete.
     */
    limit?: number
  }

  /**
   * FriendRequest without action
   */
  export type FriendRequestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FriendRequest
     */
    select?: FriendRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FriendRequest
     */
    omit?: FriendRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendRequestInclude<ExtArgs> | null
  }


  /**
   * Model BlockList
   */

  export type AggregateBlockList = {
    _count: BlockListCountAggregateOutputType | null
    _min: BlockListMinAggregateOutputType | null
    _max: BlockListMaxAggregateOutputType | null
  }

  export type BlockListMinAggregateOutputType = {
    userId: string | null
    blockedUserId: string | null
    blockedAt: Date | null
  }

  export type BlockListMaxAggregateOutputType = {
    userId: string | null
    blockedUserId: string | null
    blockedAt: Date | null
  }

  export type BlockListCountAggregateOutputType = {
    userId: number
    blockedUserId: number
    blockedAt: number
    _all: number
  }


  export type BlockListMinAggregateInputType = {
    userId?: true
    blockedUserId?: true
    blockedAt?: true
  }

  export type BlockListMaxAggregateInputType = {
    userId?: true
    blockedUserId?: true
    blockedAt?: true
  }

  export type BlockListCountAggregateInputType = {
    userId?: true
    blockedUserId?: true
    blockedAt?: true
    _all?: true
  }

  export type BlockListAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BlockList to aggregate.
     */
    where?: BlockListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlockLists to fetch.
     */
    orderBy?: BlockListOrderByWithRelationInput | BlockListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BlockListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlockLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlockLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BlockLists
    **/
    _count?: true | BlockListCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BlockListMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BlockListMaxAggregateInputType
  }

  export type GetBlockListAggregateType<T extends BlockListAggregateArgs> = {
        [P in keyof T & keyof AggregateBlockList]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBlockList[P]>
      : GetScalarType<T[P], AggregateBlockList[P]>
  }




  export type BlockListGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlockListWhereInput
    orderBy?: BlockListOrderByWithAggregationInput | BlockListOrderByWithAggregationInput[]
    by: BlockListScalarFieldEnum[] | BlockListScalarFieldEnum
    having?: BlockListScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BlockListCountAggregateInputType | true
    _min?: BlockListMinAggregateInputType
    _max?: BlockListMaxAggregateInputType
  }

  export type BlockListGroupByOutputType = {
    userId: string
    blockedUserId: string
    blockedAt: Date
    _count: BlockListCountAggregateOutputType | null
    _min: BlockListMinAggregateOutputType | null
    _max: BlockListMaxAggregateOutputType | null
  }

  type GetBlockListGroupByPayload<T extends BlockListGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BlockListGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BlockListGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BlockListGroupByOutputType[P]>
            : GetScalarType<T[P], BlockListGroupByOutputType[P]>
        }
      >
    >


  export type BlockListSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    blockedUserId?: boolean
    blockedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    blockedUser?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blockList"]>

  export type BlockListSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    blockedUserId?: boolean
    blockedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    blockedUser?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blockList"]>

  export type BlockListSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    blockedUserId?: boolean
    blockedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    blockedUser?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blockList"]>

  export type BlockListSelectScalar = {
    userId?: boolean
    blockedUserId?: boolean
    blockedAt?: boolean
  }

  export type BlockListOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "blockedUserId" | "blockedAt", ExtArgs["result"]["blockList"]>
  export type BlockListInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    blockedUser?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type BlockListIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    blockedUser?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type BlockListIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    blockedUser?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $BlockListPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BlockList"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      blockedUser: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: string
      blockedUserId: string
      blockedAt: Date
    }, ExtArgs["result"]["blockList"]>
    composites: {}
  }

  type BlockListGetPayload<S extends boolean | null | undefined | BlockListDefaultArgs> = $Result.GetResult<Prisma.$BlockListPayload, S>

  type BlockListCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BlockListFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BlockListCountAggregateInputType | true
    }

  export interface BlockListDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BlockList'], meta: { name: 'BlockList' } }
    /**
     * Find zero or one BlockList that matches the filter.
     * @param {BlockListFindUniqueArgs} args - Arguments to find a BlockList
     * @example
     * // Get one BlockList
     * const blockList = await prisma.blockList.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BlockListFindUniqueArgs>(args: SelectSubset<T, BlockListFindUniqueArgs<ExtArgs>>): Prisma__BlockListClient<$Result.GetResult<Prisma.$BlockListPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BlockList that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BlockListFindUniqueOrThrowArgs} args - Arguments to find a BlockList
     * @example
     * // Get one BlockList
     * const blockList = await prisma.blockList.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BlockListFindUniqueOrThrowArgs>(args: SelectSubset<T, BlockListFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BlockListClient<$Result.GetResult<Prisma.$BlockListPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BlockList that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockListFindFirstArgs} args - Arguments to find a BlockList
     * @example
     * // Get one BlockList
     * const blockList = await prisma.blockList.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BlockListFindFirstArgs>(args?: SelectSubset<T, BlockListFindFirstArgs<ExtArgs>>): Prisma__BlockListClient<$Result.GetResult<Prisma.$BlockListPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BlockList that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockListFindFirstOrThrowArgs} args - Arguments to find a BlockList
     * @example
     * // Get one BlockList
     * const blockList = await prisma.blockList.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BlockListFindFirstOrThrowArgs>(args?: SelectSubset<T, BlockListFindFirstOrThrowArgs<ExtArgs>>): Prisma__BlockListClient<$Result.GetResult<Prisma.$BlockListPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BlockLists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockListFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BlockLists
     * const blockLists = await prisma.blockList.findMany()
     * 
     * // Get first 10 BlockLists
     * const blockLists = await prisma.blockList.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const blockListWithUserIdOnly = await prisma.blockList.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends BlockListFindManyArgs>(args?: SelectSubset<T, BlockListFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlockListPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BlockList.
     * @param {BlockListCreateArgs} args - Arguments to create a BlockList.
     * @example
     * // Create one BlockList
     * const BlockList = await prisma.blockList.create({
     *   data: {
     *     // ... data to create a BlockList
     *   }
     * })
     * 
     */
    create<T extends BlockListCreateArgs>(args: SelectSubset<T, BlockListCreateArgs<ExtArgs>>): Prisma__BlockListClient<$Result.GetResult<Prisma.$BlockListPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BlockLists.
     * @param {BlockListCreateManyArgs} args - Arguments to create many BlockLists.
     * @example
     * // Create many BlockLists
     * const blockList = await prisma.blockList.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BlockListCreateManyArgs>(args?: SelectSubset<T, BlockListCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BlockLists and returns the data saved in the database.
     * @param {BlockListCreateManyAndReturnArgs} args - Arguments to create many BlockLists.
     * @example
     * // Create many BlockLists
     * const blockList = await prisma.blockList.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BlockLists and only return the `userId`
     * const blockListWithUserIdOnly = await prisma.blockList.createManyAndReturn({
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BlockListCreateManyAndReturnArgs>(args?: SelectSubset<T, BlockListCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlockListPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BlockList.
     * @param {BlockListDeleteArgs} args - Arguments to delete one BlockList.
     * @example
     * // Delete one BlockList
     * const BlockList = await prisma.blockList.delete({
     *   where: {
     *     // ... filter to delete one BlockList
     *   }
     * })
     * 
     */
    delete<T extends BlockListDeleteArgs>(args: SelectSubset<T, BlockListDeleteArgs<ExtArgs>>): Prisma__BlockListClient<$Result.GetResult<Prisma.$BlockListPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BlockList.
     * @param {BlockListUpdateArgs} args - Arguments to update one BlockList.
     * @example
     * // Update one BlockList
     * const blockList = await prisma.blockList.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BlockListUpdateArgs>(args: SelectSubset<T, BlockListUpdateArgs<ExtArgs>>): Prisma__BlockListClient<$Result.GetResult<Prisma.$BlockListPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BlockLists.
     * @param {BlockListDeleteManyArgs} args - Arguments to filter BlockLists to delete.
     * @example
     * // Delete a few BlockLists
     * const { count } = await prisma.blockList.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BlockListDeleteManyArgs>(args?: SelectSubset<T, BlockListDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BlockLists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockListUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BlockLists
     * const blockList = await prisma.blockList.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BlockListUpdateManyArgs>(args: SelectSubset<T, BlockListUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BlockLists and returns the data updated in the database.
     * @param {BlockListUpdateManyAndReturnArgs} args - Arguments to update many BlockLists.
     * @example
     * // Update many BlockLists
     * const blockList = await prisma.blockList.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BlockLists and only return the `userId`
     * const blockListWithUserIdOnly = await prisma.blockList.updateManyAndReturn({
     *   select: { userId: true },
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
    updateManyAndReturn<T extends BlockListUpdateManyAndReturnArgs>(args: SelectSubset<T, BlockListUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlockListPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BlockList.
     * @param {BlockListUpsertArgs} args - Arguments to update or create a BlockList.
     * @example
     * // Update or create a BlockList
     * const blockList = await prisma.blockList.upsert({
     *   create: {
     *     // ... data to create a BlockList
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BlockList we want to update
     *   }
     * })
     */
    upsert<T extends BlockListUpsertArgs>(args: SelectSubset<T, BlockListUpsertArgs<ExtArgs>>): Prisma__BlockListClient<$Result.GetResult<Prisma.$BlockListPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BlockLists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockListCountArgs} args - Arguments to filter BlockLists to count.
     * @example
     * // Count the number of BlockLists
     * const count = await prisma.blockList.count({
     *   where: {
     *     // ... the filter for the BlockLists we want to count
     *   }
     * })
    **/
    count<T extends BlockListCountArgs>(
      args?: Subset<T, BlockListCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BlockListCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BlockList.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockListAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BlockListAggregateArgs>(args: Subset<T, BlockListAggregateArgs>): Prisma.PrismaPromise<GetBlockListAggregateType<T>>

    /**
     * Group by BlockList.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockListGroupByArgs} args - Group by arguments.
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
      T extends BlockListGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BlockListGroupByArgs['orderBy'] }
        : { orderBy?: BlockListGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BlockListGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBlockListGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BlockList model
   */
  readonly fields: BlockListFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BlockList.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BlockListClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    blockedUser<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the BlockList model
   */
  interface BlockListFieldRefs {
    readonly userId: FieldRef<"BlockList", 'String'>
    readonly blockedUserId: FieldRef<"BlockList", 'String'>
    readonly blockedAt: FieldRef<"BlockList", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BlockList findUnique
   */
  export type BlockListFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockList
     */
    select?: BlockListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlockList
     */
    omit?: BlockListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockListInclude<ExtArgs> | null
    /**
     * Filter, which BlockList to fetch.
     */
    where: BlockListWhereUniqueInput
  }

  /**
   * BlockList findUniqueOrThrow
   */
  export type BlockListFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockList
     */
    select?: BlockListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlockList
     */
    omit?: BlockListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockListInclude<ExtArgs> | null
    /**
     * Filter, which BlockList to fetch.
     */
    where: BlockListWhereUniqueInput
  }

  /**
   * BlockList findFirst
   */
  export type BlockListFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockList
     */
    select?: BlockListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlockList
     */
    omit?: BlockListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockListInclude<ExtArgs> | null
    /**
     * Filter, which BlockList to fetch.
     */
    where?: BlockListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlockLists to fetch.
     */
    orderBy?: BlockListOrderByWithRelationInput | BlockListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BlockLists.
     */
    cursor?: BlockListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlockLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlockLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BlockLists.
     */
    distinct?: BlockListScalarFieldEnum | BlockListScalarFieldEnum[]
  }

  /**
   * BlockList findFirstOrThrow
   */
  export type BlockListFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockList
     */
    select?: BlockListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlockList
     */
    omit?: BlockListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockListInclude<ExtArgs> | null
    /**
     * Filter, which BlockList to fetch.
     */
    where?: BlockListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlockLists to fetch.
     */
    orderBy?: BlockListOrderByWithRelationInput | BlockListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BlockLists.
     */
    cursor?: BlockListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlockLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlockLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BlockLists.
     */
    distinct?: BlockListScalarFieldEnum | BlockListScalarFieldEnum[]
  }

  /**
   * BlockList findMany
   */
  export type BlockListFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockList
     */
    select?: BlockListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlockList
     */
    omit?: BlockListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockListInclude<ExtArgs> | null
    /**
     * Filter, which BlockLists to fetch.
     */
    where?: BlockListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlockLists to fetch.
     */
    orderBy?: BlockListOrderByWithRelationInput | BlockListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BlockLists.
     */
    cursor?: BlockListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlockLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlockLists.
     */
    skip?: number
    distinct?: BlockListScalarFieldEnum | BlockListScalarFieldEnum[]
  }

  /**
   * BlockList create
   */
  export type BlockListCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockList
     */
    select?: BlockListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlockList
     */
    omit?: BlockListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockListInclude<ExtArgs> | null
    /**
     * The data needed to create a BlockList.
     */
    data: XOR<BlockListCreateInput, BlockListUncheckedCreateInput>
  }

  /**
   * BlockList createMany
   */
  export type BlockListCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BlockLists.
     */
    data: BlockListCreateManyInput | BlockListCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BlockList createManyAndReturn
   */
  export type BlockListCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockList
     */
    select?: BlockListSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BlockList
     */
    omit?: BlockListOmit<ExtArgs> | null
    /**
     * The data used to create many BlockLists.
     */
    data: BlockListCreateManyInput | BlockListCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockListIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BlockList update
   */
  export type BlockListUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockList
     */
    select?: BlockListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlockList
     */
    omit?: BlockListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockListInclude<ExtArgs> | null
    /**
     * The data needed to update a BlockList.
     */
    data: XOR<BlockListUpdateInput, BlockListUncheckedUpdateInput>
    /**
     * Choose, which BlockList to update.
     */
    where: BlockListWhereUniqueInput
  }

  /**
   * BlockList updateMany
   */
  export type BlockListUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BlockLists.
     */
    data: XOR<BlockListUpdateManyMutationInput, BlockListUncheckedUpdateManyInput>
    /**
     * Filter which BlockLists to update
     */
    where?: BlockListWhereInput
    /**
     * Limit how many BlockLists to update.
     */
    limit?: number
  }

  /**
   * BlockList updateManyAndReturn
   */
  export type BlockListUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockList
     */
    select?: BlockListSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BlockList
     */
    omit?: BlockListOmit<ExtArgs> | null
    /**
     * The data used to update BlockLists.
     */
    data: XOR<BlockListUpdateManyMutationInput, BlockListUncheckedUpdateManyInput>
    /**
     * Filter which BlockLists to update
     */
    where?: BlockListWhereInput
    /**
     * Limit how many BlockLists to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockListIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BlockList upsert
   */
  export type BlockListUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockList
     */
    select?: BlockListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlockList
     */
    omit?: BlockListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockListInclude<ExtArgs> | null
    /**
     * The filter to search for the BlockList to update in case it exists.
     */
    where: BlockListWhereUniqueInput
    /**
     * In case the BlockList found by the `where` argument doesn't exist, create a new BlockList with this data.
     */
    create: XOR<BlockListCreateInput, BlockListUncheckedCreateInput>
    /**
     * In case the BlockList was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BlockListUpdateInput, BlockListUncheckedUpdateInput>
  }

  /**
   * BlockList delete
   */
  export type BlockListDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockList
     */
    select?: BlockListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlockList
     */
    omit?: BlockListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockListInclude<ExtArgs> | null
    /**
     * Filter which BlockList to delete.
     */
    where: BlockListWhereUniqueInput
  }

  /**
   * BlockList deleteMany
   */
  export type BlockListDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BlockLists to delete
     */
    where?: BlockListWhereInput
    /**
     * Limit how many BlockLists to delete.
     */
    limit?: number
  }

  /**
   * BlockList without action
   */
  export type BlockListDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockList
     */
    select?: BlockListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlockList
     */
    omit?: BlockListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockListInclude<ExtArgs> | null
  }


  /**
   * Model GroupChat
   */

  export type AggregateGroupChat = {
    _count: GroupChatCountAggregateOutputType | null
    _min: GroupChatMinAggregateOutputType | null
    _max: GroupChatMaxAggregateOutputType | null
  }

  export type GroupChatMinAggregateOutputType = {
    id: string | null
    groupName: string | null
    groupPhoto: string | null
    createdById: string | null
    createdAt: Date | null
  }

  export type GroupChatMaxAggregateOutputType = {
    id: string | null
    groupName: string | null
    groupPhoto: string | null
    createdById: string | null
    createdAt: Date | null
  }

  export type GroupChatCountAggregateOutputType = {
    id: number
    groupName: number
    groupPhoto: number
    createdById: number
    createdAt: number
    _all: number
  }


  export type GroupChatMinAggregateInputType = {
    id?: true
    groupName?: true
    groupPhoto?: true
    createdById?: true
    createdAt?: true
  }

  export type GroupChatMaxAggregateInputType = {
    id?: true
    groupName?: true
    groupPhoto?: true
    createdById?: true
    createdAt?: true
  }

  export type GroupChatCountAggregateInputType = {
    id?: true
    groupName?: true
    groupPhoto?: true
    createdById?: true
    createdAt?: true
    _all?: true
  }

  export type GroupChatAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GroupChat to aggregate.
     */
    where?: GroupChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupChats to fetch.
     */
    orderBy?: GroupChatOrderByWithRelationInput | GroupChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GroupChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupChats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupChats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GroupChats
    **/
    _count?: true | GroupChatCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GroupChatMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GroupChatMaxAggregateInputType
  }

  export type GetGroupChatAggregateType<T extends GroupChatAggregateArgs> = {
        [P in keyof T & keyof AggregateGroupChat]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGroupChat[P]>
      : GetScalarType<T[P], AggregateGroupChat[P]>
  }




  export type GroupChatGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupChatWhereInput
    orderBy?: GroupChatOrderByWithAggregationInput | GroupChatOrderByWithAggregationInput[]
    by: GroupChatScalarFieldEnum[] | GroupChatScalarFieldEnum
    having?: GroupChatScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GroupChatCountAggregateInputType | true
    _min?: GroupChatMinAggregateInputType
    _max?: GroupChatMaxAggregateInputType
  }

  export type GroupChatGroupByOutputType = {
    id: string
    groupName: string
    groupPhoto: string | null
    createdById: string
    createdAt: Date
    _count: GroupChatCountAggregateOutputType | null
    _min: GroupChatMinAggregateOutputType | null
    _max: GroupChatMaxAggregateOutputType | null
  }

  type GetGroupChatGroupByPayload<T extends GroupChatGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GroupChatGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GroupChatGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GroupChatGroupByOutputType[P]>
            : GetScalarType<T[P], GroupChatGroupByOutputType[P]>
        }
      >
    >


  export type GroupChatSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    groupName?: boolean
    groupPhoto?: boolean
    createdById?: boolean
    createdAt?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    members?: boolean | GroupChat$membersArgs<ExtArgs>
    messages?: boolean | GroupChat$messagesArgs<ExtArgs>
    joinRequests?: boolean | GroupChat$joinRequestsArgs<ExtArgs>
    _count?: boolean | GroupChatCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["groupChat"]>

  export type GroupChatSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    groupName?: boolean
    groupPhoto?: boolean
    createdById?: boolean
    createdAt?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["groupChat"]>

  export type GroupChatSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    groupName?: boolean
    groupPhoto?: boolean
    createdById?: boolean
    createdAt?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["groupChat"]>

  export type GroupChatSelectScalar = {
    id?: boolean
    groupName?: boolean
    groupPhoto?: boolean
    createdById?: boolean
    createdAt?: boolean
  }

  export type GroupChatOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "groupName" | "groupPhoto" | "createdById" | "createdAt", ExtArgs["result"]["groupChat"]>
  export type GroupChatInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    members?: boolean | GroupChat$membersArgs<ExtArgs>
    messages?: boolean | GroupChat$messagesArgs<ExtArgs>
    joinRequests?: boolean | GroupChat$joinRequestsArgs<ExtArgs>
    _count?: boolean | GroupChatCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GroupChatIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type GroupChatIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $GroupChatPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GroupChat"
    objects: {
      createdBy: Prisma.$UserPayload<ExtArgs>
      members: Prisma.$GroupMemberPayload<ExtArgs>[]
      messages: Prisma.$GroupMessagePayload<ExtArgs>[]
      joinRequests: Prisma.$GroupJoinRequestPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      groupName: string
      groupPhoto: string | null
      createdById: string
      createdAt: Date
    }, ExtArgs["result"]["groupChat"]>
    composites: {}
  }

  type GroupChatGetPayload<S extends boolean | null | undefined | GroupChatDefaultArgs> = $Result.GetResult<Prisma.$GroupChatPayload, S>

  type GroupChatCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GroupChatFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GroupChatCountAggregateInputType | true
    }

  export interface GroupChatDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GroupChat'], meta: { name: 'GroupChat' } }
    /**
     * Find zero or one GroupChat that matches the filter.
     * @param {GroupChatFindUniqueArgs} args - Arguments to find a GroupChat
     * @example
     * // Get one GroupChat
     * const groupChat = await prisma.groupChat.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GroupChatFindUniqueArgs>(args: SelectSubset<T, GroupChatFindUniqueArgs<ExtArgs>>): Prisma__GroupChatClient<$Result.GetResult<Prisma.$GroupChatPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GroupChat that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GroupChatFindUniqueOrThrowArgs} args - Arguments to find a GroupChat
     * @example
     * // Get one GroupChat
     * const groupChat = await prisma.groupChat.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GroupChatFindUniqueOrThrowArgs>(args: SelectSubset<T, GroupChatFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GroupChatClient<$Result.GetResult<Prisma.$GroupChatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GroupChat that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupChatFindFirstArgs} args - Arguments to find a GroupChat
     * @example
     * // Get one GroupChat
     * const groupChat = await prisma.groupChat.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GroupChatFindFirstArgs>(args?: SelectSubset<T, GroupChatFindFirstArgs<ExtArgs>>): Prisma__GroupChatClient<$Result.GetResult<Prisma.$GroupChatPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GroupChat that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupChatFindFirstOrThrowArgs} args - Arguments to find a GroupChat
     * @example
     * // Get one GroupChat
     * const groupChat = await prisma.groupChat.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GroupChatFindFirstOrThrowArgs>(args?: SelectSubset<T, GroupChatFindFirstOrThrowArgs<ExtArgs>>): Prisma__GroupChatClient<$Result.GetResult<Prisma.$GroupChatPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GroupChats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupChatFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GroupChats
     * const groupChats = await prisma.groupChat.findMany()
     * 
     * // Get first 10 GroupChats
     * const groupChats = await prisma.groupChat.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const groupChatWithIdOnly = await prisma.groupChat.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GroupChatFindManyArgs>(args?: SelectSubset<T, GroupChatFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupChatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GroupChat.
     * @param {GroupChatCreateArgs} args - Arguments to create a GroupChat.
     * @example
     * // Create one GroupChat
     * const GroupChat = await prisma.groupChat.create({
     *   data: {
     *     // ... data to create a GroupChat
     *   }
     * })
     * 
     */
    create<T extends GroupChatCreateArgs>(args: SelectSubset<T, GroupChatCreateArgs<ExtArgs>>): Prisma__GroupChatClient<$Result.GetResult<Prisma.$GroupChatPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GroupChats.
     * @param {GroupChatCreateManyArgs} args - Arguments to create many GroupChats.
     * @example
     * // Create many GroupChats
     * const groupChat = await prisma.groupChat.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GroupChatCreateManyArgs>(args?: SelectSubset<T, GroupChatCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GroupChats and returns the data saved in the database.
     * @param {GroupChatCreateManyAndReturnArgs} args - Arguments to create many GroupChats.
     * @example
     * // Create many GroupChats
     * const groupChat = await prisma.groupChat.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GroupChats and only return the `id`
     * const groupChatWithIdOnly = await prisma.groupChat.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GroupChatCreateManyAndReturnArgs>(args?: SelectSubset<T, GroupChatCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupChatPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GroupChat.
     * @param {GroupChatDeleteArgs} args - Arguments to delete one GroupChat.
     * @example
     * // Delete one GroupChat
     * const GroupChat = await prisma.groupChat.delete({
     *   where: {
     *     // ... filter to delete one GroupChat
     *   }
     * })
     * 
     */
    delete<T extends GroupChatDeleteArgs>(args: SelectSubset<T, GroupChatDeleteArgs<ExtArgs>>): Prisma__GroupChatClient<$Result.GetResult<Prisma.$GroupChatPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GroupChat.
     * @param {GroupChatUpdateArgs} args - Arguments to update one GroupChat.
     * @example
     * // Update one GroupChat
     * const groupChat = await prisma.groupChat.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GroupChatUpdateArgs>(args: SelectSubset<T, GroupChatUpdateArgs<ExtArgs>>): Prisma__GroupChatClient<$Result.GetResult<Prisma.$GroupChatPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GroupChats.
     * @param {GroupChatDeleteManyArgs} args - Arguments to filter GroupChats to delete.
     * @example
     * // Delete a few GroupChats
     * const { count } = await prisma.groupChat.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GroupChatDeleteManyArgs>(args?: SelectSubset<T, GroupChatDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GroupChats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupChatUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GroupChats
     * const groupChat = await prisma.groupChat.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GroupChatUpdateManyArgs>(args: SelectSubset<T, GroupChatUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GroupChats and returns the data updated in the database.
     * @param {GroupChatUpdateManyAndReturnArgs} args - Arguments to update many GroupChats.
     * @example
     * // Update many GroupChats
     * const groupChat = await prisma.groupChat.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GroupChats and only return the `id`
     * const groupChatWithIdOnly = await prisma.groupChat.updateManyAndReturn({
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
    updateManyAndReturn<T extends GroupChatUpdateManyAndReturnArgs>(args: SelectSubset<T, GroupChatUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupChatPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GroupChat.
     * @param {GroupChatUpsertArgs} args - Arguments to update or create a GroupChat.
     * @example
     * // Update or create a GroupChat
     * const groupChat = await prisma.groupChat.upsert({
     *   create: {
     *     // ... data to create a GroupChat
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GroupChat we want to update
     *   }
     * })
     */
    upsert<T extends GroupChatUpsertArgs>(args: SelectSubset<T, GroupChatUpsertArgs<ExtArgs>>): Prisma__GroupChatClient<$Result.GetResult<Prisma.$GroupChatPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GroupChats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupChatCountArgs} args - Arguments to filter GroupChats to count.
     * @example
     * // Count the number of GroupChats
     * const count = await prisma.groupChat.count({
     *   where: {
     *     // ... the filter for the GroupChats we want to count
     *   }
     * })
    **/
    count<T extends GroupChatCountArgs>(
      args?: Subset<T, GroupChatCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GroupChatCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GroupChat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupChatAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GroupChatAggregateArgs>(args: Subset<T, GroupChatAggregateArgs>): Prisma.PrismaPromise<GetGroupChatAggregateType<T>>

    /**
     * Group by GroupChat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupChatGroupByArgs} args - Group by arguments.
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
      T extends GroupChatGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GroupChatGroupByArgs['orderBy'] }
        : { orderBy?: GroupChatGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GroupChatGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGroupChatGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GroupChat model
   */
  readonly fields: GroupChatFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GroupChat.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GroupChatClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    createdBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    members<T extends GroupChat$membersArgs<ExtArgs> = {}>(args?: Subset<T, GroupChat$membersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    messages<T extends GroupChat$messagesArgs<ExtArgs> = {}>(args?: Subset<T, GroupChat$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    joinRequests<T extends GroupChat$joinRequestsArgs<ExtArgs> = {}>(args?: Subset<T, GroupChat$joinRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupJoinRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the GroupChat model
   */
  interface GroupChatFieldRefs {
    readonly id: FieldRef<"GroupChat", 'String'>
    readonly groupName: FieldRef<"GroupChat", 'String'>
    readonly groupPhoto: FieldRef<"GroupChat", 'String'>
    readonly createdById: FieldRef<"GroupChat", 'String'>
    readonly createdAt: FieldRef<"GroupChat", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * GroupChat findUnique
   */
  export type GroupChatFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupChat
     */
    select?: GroupChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupChat
     */
    omit?: GroupChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupChatInclude<ExtArgs> | null
    /**
     * Filter, which GroupChat to fetch.
     */
    where: GroupChatWhereUniqueInput
  }

  /**
   * GroupChat findUniqueOrThrow
   */
  export type GroupChatFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupChat
     */
    select?: GroupChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupChat
     */
    omit?: GroupChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupChatInclude<ExtArgs> | null
    /**
     * Filter, which GroupChat to fetch.
     */
    where: GroupChatWhereUniqueInput
  }

  /**
   * GroupChat findFirst
   */
  export type GroupChatFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupChat
     */
    select?: GroupChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupChat
     */
    omit?: GroupChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupChatInclude<ExtArgs> | null
    /**
     * Filter, which GroupChat to fetch.
     */
    where?: GroupChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupChats to fetch.
     */
    orderBy?: GroupChatOrderByWithRelationInput | GroupChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GroupChats.
     */
    cursor?: GroupChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupChats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupChats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GroupChats.
     */
    distinct?: GroupChatScalarFieldEnum | GroupChatScalarFieldEnum[]
  }

  /**
   * GroupChat findFirstOrThrow
   */
  export type GroupChatFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupChat
     */
    select?: GroupChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupChat
     */
    omit?: GroupChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupChatInclude<ExtArgs> | null
    /**
     * Filter, which GroupChat to fetch.
     */
    where?: GroupChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupChats to fetch.
     */
    orderBy?: GroupChatOrderByWithRelationInput | GroupChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GroupChats.
     */
    cursor?: GroupChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupChats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupChats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GroupChats.
     */
    distinct?: GroupChatScalarFieldEnum | GroupChatScalarFieldEnum[]
  }

  /**
   * GroupChat findMany
   */
  export type GroupChatFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupChat
     */
    select?: GroupChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupChat
     */
    omit?: GroupChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupChatInclude<ExtArgs> | null
    /**
     * Filter, which GroupChats to fetch.
     */
    where?: GroupChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupChats to fetch.
     */
    orderBy?: GroupChatOrderByWithRelationInput | GroupChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GroupChats.
     */
    cursor?: GroupChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupChats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupChats.
     */
    skip?: number
    distinct?: GroupChatScalarFieldEnum | GroupChatScalarFieldEnum[]
  }

  /**
   * GroupChat create
   */
  export type GroupChatCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupChat
     */
    select?: GroupChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupChat
     */
    omit?: GroupChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupChatInclude<ExtArgs> | null
    /**
     * The data needed to create a GroupChat.
     */
    data: XOR<GroupChatCreateInput, GroupChatUncheckedCreateInput>
  }

  /**
   * GroupChat createMany
   */
  export type GroupChatCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GroupChats.
     */
    data: GroupChatCreateManyInput | GroupChatCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GroupChat createManyAndReturn
   */
  export type GroupChatCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupChat
     */
    select?: GroupChatSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GroupChat
     */
    omit?: GroupChatOmit<ExtArgs> | null
    /**
     * The data used to create many GroupChats.
     */
    data: GroupChatCreateManyInput | GroupChatCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupChatIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * GroupChat update
   */
  export type GroupChatUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupChat
     */
    select?: GroupChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupChat
     */
    omit?: GroupChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupChatInclude<ExtArgs> | null
    /**
     * The data needed to update a GroupChat.
     */
    data: XOR<GroupChatUpdateInput, GroupChatUncheckedUpdateInput>
    /**
     * Choose, which GroupChat to update.
     */
    where: GroupChatWhereUniqueInput
  }

  /**
   * GroupChat updateMany
   */
  export type GroupChatUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GroupChats.
     */
    data: XOR<GroupChatUpdateManyMutationInput, GroupChatUncheckedUpdateManyInput>
    /**
     * Filter which GroupChats to update
     */
    where?: GroupChatWhereInput
    /**
     * Limit how many GroupChats to update.
     */
    limit?: number
  }

  /**
   * GroupChat updateManyAndReturn
   */
  export type GroupChatUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupChat
     */
    select?: GroupChatSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GroupChat
     */
    omit?: GroupChatOmit<ExtArgs> | null
    /**
     * The data used to update GroupChats.
     */
    data: XOR<GroupChatUpdateManyMutationInput, GroupChatUncheckedUpdateManyInput>
    /**
     * Filter which GroupChats to update
     */
    where?: GroupChatWhereInput
    /**
     * Limit how many GroupChats to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupChatIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * GroupChat upsert
   */
  export type GroupChatUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupChat
     */
    select?: GroupChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupChat
     */
    omit?: GroupChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupChatInclude<ExtArgs> | null
    /**
     * The filter to search for the GroupChat to update in case it exists.
     */
    where: GroupChatWhereUniqueInput
    /**
     * In case the GroupChat found by the `where` argument doesn't exist, create a new GroupChat with this data.
     */
    create: XOR<GroupChatCreateInput, GroupChatUncheckedCreateInput>
    /**
     * In case the GroupChat was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GroupChatUpdateInput, GroupChatUncheckedUpdateInput>
  }

  /**
   * GroupChat delete
   */
  export type GroupChatDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupChat
     */
    select?: GroupChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupChat
     */
    omit?: GroupChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupChatInclude<ExtArgs> | null
    /**
     * Filter which GroupChat to delete.
     */
    where: GroupChatWhereUniqueInput
  }

  /**
   * GroupChat deleteMany
   */
  export type GroupChatDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GroupChats to delete
     */
    where?: GroupChatWhereInput
    /**
     * Limit how many GroupChats to delete.
     */
    limit?: number
  }

  /**
   * GroupChat.members
   */
  export type GroupChat$membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMember
     */
    omit?: GroupMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberInclude<ExtArgs> | null
    where?: GroupMemberWhereInput
    orderBy?: GroupMemberOrderByWithRelationInput | GroupMemberOrderByWithRelationInput[]
    cursor?: GroupMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GroupMemberScalarFieldEnum | GroupMemberScalarFieldEnum[]
  }

  /**
   * GroupChat.messages
   */
  export type GroupChat$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMessage
     */
    select?: GroupMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMessage
     */
    omit?: GroupMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMessageInclude<ExtArgs> | null
    where?: GroupMessageWhereInput
    orderBy?: GroupMessageOrderByWithRelationInput | GroupMessageOrderByWithRelationInput[]
    cursor?: GroupMessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GroupMessageScalarFieldEnum | GroupMessageScalarFieldEnum[]
  }

  /**
   * GroupChat.joinRequests
   */
  export type GroupChat$joinRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupJoinRequest
     */
    select?: GroupJoinRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupJoinRequest
     */
    omit?: GroupJoinRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupJoinRequestInclude<ExtArgs> | null
    where?: GroupJoinRequestWhereInput
    orderBy?: GroupJoinRequestOrderByWithRelationInput | GroupJoinRequestOrderByWithRelationInput[]
    cursor?: GroupJoinRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GroupJoinRequestScalarFieldEnum | GroupJoinRequestScalarFieldEnum[]
  }

  /**
   * GroupChat without action
   */
  export type GroupChatDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupChat
     */
    select?: GroupChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupChat
     */
    omit?: GroupChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupChatInclude<ExtArgs> | null
  }


  /**
   * Model GroupMember
   */

  export type AggregateGroupMember = {
    _count: GroupMemberCountAggregateOutputType | null
    _min: GroupMemberMinAggregateOutputType | null
    _max: GroupMemberMaxAggregateOutputType | null
  }

  export type GroupMemberMinAggregateOutputType = {
    groupId: string | null
    userId: string | null
    isAdmin: boolean | null
    joinedAt: Date | null
  }

  export type GroupMemberMaxAggregateOutputType = {
    groupId: string | null
    userId: string | null
    isAdmin: boolean | null
    joinedAt: Date | null
  }

  export type GroupMemberCountAggregateOutputType = {
    groupId: number
    userId: number
    isAdmin: number
    joinedAt: number
    _all: number
  }


  export type GroupMemberMinAggregateInputType = {
    groupId?: true
    userId?: true
    isAdmin?: true
    joinedAt?: true
  }

  export type GroupMemberMaxAggregateInputType = {
    groupId?: true
    userId?: true
    isAdmin?: true
    joinedAt?: true
  }

  export type GroupMemberCountAggregateInputType = {
    groupId?: true
    userId?: true
    isAdmin?: true
    joinedAt?: true
    _all?: true
  }

  export type GroupMemberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GroupMember to aggregate.
     */
    where?: GroupMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupMembers to fetch.
     */
    orderBy?: GroupMemberOrderByWithRelationInput | GroupMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GroupMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GroupMembers
    **/
    _count?: true | GroupMemberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GroupMemberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GroupMemberMaxAggregateInputType
  }

  export type GetGroupMemberAggregateType<T extends GroupMemberAggregateArgs> = {
        [P in keyof T & keyof AggregateGroupMember]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGroupMember[P]>
      : GetScalarType<T[P], AggregateGroupMember[P]>
  }




  export type GroupMemberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupMemberWhereInput
    orderBy?: GroupMemberOrderByWithAggregationInput | GroupMemberOrderByWithAggregationInput[]
    by: GroupMemberScalarFieldEnum[] | GroupMemberScalarFieldEnum
    having?: GroupMemberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GroupMemberCountAggregateInputType | true
    _min?: GroupMemberMinAggregateInputType
    _max?: GroupMemberMaxAggregateInputType
  }

  export type GroupMemberGroupByOutputType = {
    groupId: string
    userId: string
    isAdmin: boolean
    joinedAt: Date
    _count: GroupMemberCountAggregateOutputType | null
    _min: GroupMemberMinAggregateOutputType | null
    _max: GroupMemberMaxAggregateOutputType | null
  }

  type GetGroupMemberGroupByPayload<T extends GroupMemberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GroupMemberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GroupMemberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GroupMemberGroupByOutputType[P]>
            : GetScalarType<T[P], GroupMemberGroupByOutputType[P]>
        }
      >
    >


  export type GroupMemberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    groupId?: boolean
    userId?: boolean
    isAdmin?: boolean
    joinedAt?: boolean
    group?: boolean | GroupChatDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["groupMember"]>

  export type GroupMemberSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    groupId?: boolean
    userId?: boolean
    isAdmin?: boolean
    joinedAt?: boolean
    group?: boolean | GroupChatDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["groupMember"]>

  export type GroupMemberSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    groupId?: boolean
    userId?: boolean
    isAdmin?: boolean
    joinedAt?: boolean
    group?: boolean | GroupChatDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["groupMember"]>

  export type GroupMemberSelectScalar = {
    groupId?: boolean
    userId?: boolean
    isAdmin?: boolean
    joinedAt?: boolean
  }

  export type GroupMemberOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"groupId" | "userId" | "isAdmin" | "joinedAt", ExtArgs["result"]["groupMember"]>
  export type GroupMemberInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | GroupChatDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type GroupMemberIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | GroupChatDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type GroupMemberIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | GroupChatDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $GroupMemberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GroupMember"
    objects: {
      group: Prisma.$GroupChatPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      groupId: string
      userId: string
      isAdmin: boolean
      joinedAt: Date
    }, ExtArgs["result"]["groupMember"]>
    composites: {}
  }

  type GroupMemberGetPayload<S extends boolean | null | undefined | GroupMemberDefaultArgs> = $Result.GetResult<Prisma.$GroupMemberPayload, S>

  type GroupMemberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GroupMemberFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GroupMemberCountAggregateInputType | true
    }

  export interface GroupMemberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GroupMember'], meta: { name: 'GroupMember' } }
    /**
     * Find zero or one GroupMember that matches the filter.
     * @param {GroupMemberFindUniqueArgs} args - Arguments to find a GroupMember
     * @example
     * // Get one GroupMember
     * const groupMember = await prisma.groupMember.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GroupMemberFindUniqueArgs>(args: SelectSubset<T, GroupMemberFindUniqueArgs<ExtArgs>>): Prisma__GroupMemberClient<$Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GroupMember that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GroupMemberFindUniqueOrThrowArgs} args - Arguments to find a GroupMember
     * @example
     * // Get one GroupMember
     * const groupMember = await prisma.groupMember.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GroupMemberFindUniqueOrThrowArgs>(args: SelectSubset<T, GroupMemberFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GroupMemberClient<$Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GroupMember that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupMemberFindFirstArgs} args - Arguments to find a GroupMember
     * @example
     * // Get one GroupMember
     * const groupMember = await prisma.groupMember.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GroupMemberFindFirstArgs>(args?: SelectSubset<T, GroupMemberFindFirstArgs<ExtArgs>>): Prisma__GroupMemberClient<$Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GroupMember that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupMemberFindFirstOrThrowArgs} args - Arguments to find a GroupMember
     * @example
     * // Get one GroupMember
     * const groupMember = await prisma.groupMember.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GroupMemberFindFirstOrThrowArgs>(args?: SelectSubset<T, GroupMemberFindFirstOrThrowArgs<ExtArgs>>): Prisma__GroupMemberClient<$Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GroupMembers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupMemberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GroupMembers
     * const groupMembers = await prisma.groupMember.findMany()
     * 
     * // Get first 10 GroupMembers
     * const groupMembers = await prisma.groupMember.findMany({ take: 10 })
     * 
     * // Only select the `groupId`
     * const groupMemberWithGroupIdOnly = await prisma.groupMember.findMany({ select: { groupId: true } })
     * 
     */
    findMany<T extends GroupMemberFindManyArgs>(args?: SelectSubset<T, GroupMemberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GroupMember.
     * @param {GroupMemberCreateArgs} args - Arguments to create a GroupMember.
     * @example
     * // Create one GroupMember
     * const GroupMember = await prisma.groupMember.create({
     *   data: {
     *     // ... data to create a GroupMember
     *   }
     * })
     * 
     */
    create<T extends GroupMemberCreateArgs>(args: SelectSubset<T, GroupMemberCreateArgs<ExtArgs>>): Prisma__GroupMemberClient<$Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GroupMembers.
     * @param {GroupMemberCreateManyArgs} args - Arguments to create many GroupMembers.
     * @example
     * // Create many GroupMembers
     * const groupMember = await prisma.groupMember.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GroupMemberCreateManyArgs>(args?: SelectSubset<T, GroupMemberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GroupMembers and returns the data saved in the database.
     * @param {GroupMemberCreateManyAndReturnArgs} args - Arguments to create many GroupMembers.
     * @example
     * // Create many GroupMembers
     * const groupMember = await prisma.groupMember.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GroupMembers and only return the `groupId`
     * const groupMemberWithGroupIdOnly = await prisma.groupMember.createManyAndReturn({
     *   select: { groupId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GroupMemberCreateManyAndReturnArgs>(args?: SelectSubset<T, GroupMemberCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GroupMember.
     * @param {GroupMemberDeleteArgs} args - Arguments to delete one GroupMember.
     * @example
     * // Delete one GroupMember
     * const GroupMember = await prisma.groupMember.delete({
     *   where: {
     *     // ... filter to delete one GroupMember
     *   }
     * })
     * 
     */
    delete<T extends GroupMemberDeleteArgs>(args: SelectSubset<T, GroupMemberDeleteArgs<ExtArgs>>): Prisma__GroupMemberClient<$Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GroupMember.
     * @param {GroupMemberUpdateArgs} args - Arguments to update one GroupMember.
     * @example
     * // Update one GroupMember
     * const groupMember = await prisma.groupMember.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GroupMemberUpdateArgs>(args: SelectSubset<T, GroupMemberUpdateArgs<ExtArgs>>): Prisma__GroupMemberClient<$Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GroupMembers.
     * @param {GroupMemberDeleteManyArgs} args - Arguments to filter GroupMembers to delete.
     * @example
     * // Delete a few GroupMembers
     * const { count } = await prisma.groupMember.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GroupMemberDeleteManyArgs>(args?: SelectSubset<T, GroupMemberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GroupMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupMemberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GroupMembers
     * const groupMember = await prisma.groupMember.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GroupMemberUpdateManyArgs>(args: SelectSubset<T, GroupMemberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GroupMembers and returns the data updated in the database.
     * @param {GroupMemberUpdateManyAndReturnArgs} args - Arguments to update many GroupMembers.
     * @example
     * // Update many GroupMembers
     * const groupMember = await prisma.groupMember.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GroupMembers and only return the `groupId`
     * const groupMemberWithGroupIdOnly = await prisma.groupMember.updateManyAndReturn({
     *   select: { groupId: true },
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
    updateManyAndReturn<T extends GroupMemberUpdateManyAndReturnArgs>(args: SelectSubset<T, GroupMemberUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GroupMember.
     * @param {GroupMemberUpsertArgs} args - Arguments to update or create a GroupMember.
     * @example
     * // Update or create a GroupMember
     * const groupMember = await prisma.groupMember.upsert({
     *   create: {
     *     // ... data to create a GroupMember
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GroupMember we want to update
     *   }
     * })
     */
    upsert<T extends GroupMemberUpsertArgs>(args: SelectSubset<T, GroupMemberUpsertArgs<ExtArgs>>): Prisma__GroupMemberClient<$Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GroupMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupMemberCountArgs} args - Arguments to filter GroupMembers to count.
     * @example
     * // Count the number of GroupMembers
     * const count = await prisma.groupMember.count({
     *   where: {
     *     // ... the filter for the GroupMembers we want to count
     *   }
     * })
    **/
    count<T extends GroupMemberCountArgs>(
      args?: Subset<T, GroupMemberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GroupMemberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GroupMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupMemberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GroupMemberAggregateArgs>(args: Subset<T, GroupMemberAggregateArgs>): Prisma.PrismaPromise<GetGroupMemberAggregateType<T>>

    /**
     * Group by GroupMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupMemberGroupByArgs} args - Group by arguments.
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
      T extends GroupMemberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GroupMemberGroupByArgs['orderBy'] }
        : { orderBy?: GroupMemberGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GroupMemberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGroupMemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GroupMember model
   */
  readonly fields: GroupMemberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GroupMember.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GroupMemberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    group<T extends GroupChatDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GroupChatDefaultArgs<ExtArgs>>): Prisma__GroupChatClient<$Result.GetResult<Prisma.$GroupChatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the GroupMember model
   */
  interface GroupMemberFieldRefs {
    readonly groupId: FieldRef<"GroupMember", 'String'>
    readonly userId: FieldRef<"GroupMember", 'String'>
    readonly isAdmin: FieldRef<"GroupMember", 'Boolean'>
    readonly joinedAt: FieldRef<"GroupMember", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * GroupMember findUnique
   */
  export type GroupMemberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMember
     */
    omit?: GroupMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberInclude<ExtArgs> | null
    /**
     * Filter, which GroupMember to fetch.
     */
    where: GroupMemberWhereUniqueInput
  }

  /**
   * GroupMember findUniqueOrThrow
   */
  export type GroupMemberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMember
     */
    omit?: GroupMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberInclude<ExtArgs> | null
    /**
     * Filter, which GroupMember to fetch.
     */
    where: GroupMemberWhereUniqueInput
  }

  /**
   * GroupMember findFirst
   */
  export type GroupMemberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMember
     */
    omit?: GroupMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberInclude<ExtArgs> | null
    /**
     * Filter, which GroupMember to fetch.
     */
    where?: GroupMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupMembers to fetch.
     */
    orderBy?: GroupMemberOrderByWithRelationInput | GroupMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GroupMembers.
     */
    cursor?: GroupMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GroupMembers.
     */
    distinct?: GroupMemberScalarFieldEnum | GroupMemberScalarFieldEnum[]
  }

  /**
   * GroupMember findFirstOrThrow
   */
  export type GroupMemberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMember
     */
    omit?: GroupMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberInclude<ExtArgs> | null
    /**
     * Filter, which GroupMember to fetch.
     */
    where?: GroupMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupMembers to fetch.
     */
    orderBy?: GroupMemberOrderByWithRelationInput | GroupMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GroupMembers.
     */
    cursor?: GroupMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GroupMembers.
     */
    distinct?: GroupMemberScalarFieldEnum | GroupMemberScalarFieldEnum[]
  }

  /**
   * GroupMember findMany
   */
  export type GroupMemberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMember
     */
    omit?: GroupMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberInclude<ExtArgs> | null
    /**
     * Filter, which GroupMembers to fetch.
     */
    where?: GroupMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupMembers to fetch.
     */
    orderBy?: GroupMemberOrderByWithRelationInput | GroupMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GroupMembers.
     */
    cursor?: GroupMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupMembers.
     */
    skip?: number
    distinct?: GroupMemberScalarFieldEnum | GroupMemberScalarFieldEnum[]
  }

  /**
   * GroupMember create
   */
  export type GroupMemberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMember
     */
    omit?: GroupMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberInclude<ExtArgs> | null
    /**
     * The data needed to create a GroupMember.
     */
    data: XOR<GroupMemberCreateInput, GroupMemberUncheckedCreateInput>
  }

  /**
   * GroupMember createMany
   */
  export type GroupMemberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GroupMembers.
     */
    data: GroupMemberCreateManyInput | GroupMemberCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GroupMember createManyAndReturn
   */
  export type GroupMemberCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMember
     */
    omit?: GroupMemberOmit<ExtArgs> | null
    /**
     * The data used to create many GroupMembers.
     */
    data: GroupMemberCreateManyInput | GroupMemberCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * GroupMember update
   */
  export type GroupMemberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMember
     */
    omit?: GroupMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberInclude<ExtArgs> | null
    /**
     * The data needed to update a GroupMember.
     */
    data: XOR<GroupMemberUpdateInput, GroupMemberUncheckedUpdateInput>
    /**
     * Choose, which GroupMember to update.
     */
    where: GroupMemberWhereUniqueInput
  }

  /**
   * GroupMember updateMany
   */
  export type GroupMemberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GroupMembers.
     */
    data: XOR<GroupMemberUpdateManyMutationInput, GroupMemberUncheckedUpdateManyInput>
    /**
     * Filter which GroupMembers to update
     */
    where?: GroupMemberWhereInput
    /**
     * Limit how many GroupMembers to update.
     */
    limit?: number
  }

  /**
   * GroupMember updateManyAndReturn
   */
  export type GroupMemberUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMember
     */
    omit?: GroupMemberOmit<ExtArgs> | null
    /**
     * The data used to update GroupMembers.
     */
    data: XOR<GroupMemberUpdateManyMutationInput, GroupMemberUncheckedUpdateManyInput>
    /**
     * Filter which GroupMembers to update
     */
    where?: GroupMemberWhereInput
    /**
     * Limit how many GroupMembers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * GroupMember upsert
   */
  export type GroupMemberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMember
     */
    omit?: GroupMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberInclude<ExtArgs> | null
    /**
     * The filter to search for the GroupMember to update in case it exists.
     */
    where: GroupMemberWhereUniqueInput
    /**
     * In case the GroupMember found by the `where` argument doesn't exist, create a new GroupMember with this data.
     */
    create: XOR<GroupMemberCreateInput, GroupMemberUncheckedCreateInput>
    /**
     * In case the GroupMember was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GroupMemberUpdateInput, GroupMemberUncheckedUpdateInput>
  }

  /**
   * GroupMember delete
   */
  export type GroupMemberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMember
     */
    omit?: GroupMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberInclude<ExtArgs> | null
    /**
     * Filter which GroupMember to delete.
     */
    where: GroupMemberWhereUniqueInput
  }

  /**
   * GroupMember deleteMany
   */
  export type GroupMemberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GroupMembers to delete
     */
    where?: GroupMemberWhereInput
    /**
     * Limit how many GroupMembers to delete.
     */
    limit?: number
  }

  /**
   * GroupMember without action
   */
  export type GroupMemberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMember
     */
    omit?: GroupMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberInclude<ExtArgs> | null
  }


  /**
   * Model GroupJoinRequest
   */

  export type AggregateGroupJoinRequest = {
    _count: GroupJoinRequestCountAggregateOutputType | null
    _min: GroupJoinRequestMinAggregateOutputType | null
    _max: GroupJoinRequestMaxAggregateOutputType | null
  }

  export type GroupJoinRequestMinAggregateOutputType = {
    id: string | null
    groupId: string | null
    fromUserId: string | null
    toUserId: string | null
    requestedAt: Date | null
  }

  export type GroupJoinRequestMaxAggregateOutputType = {
    id: string | null
    groupId: string | null
    fromUserId: string | null
    toUserId: string | null
    requestedAt: Date | null
  }

  export type GroupJoinRequestCountAggregateOutputType = {
    id: number
    groupId: number
    fromUserId: number
    toUserId: number
    requestedAt: number
    _all: number
  }


  export type GroupJoinRequestMinAggregateInputType = {
    id?: true
    groupId?: true
    fromUserId?: true
    toUserId?: true
    requestedAt?: true
  }

  export type GroupJoinRequestMaxAggregateInputType = {
    id?: true
    groupId?: true
    fromUserId?: true
    toUserId?: true
    requestedAt?: true
  }

  export type GroupJoinRequestCountAggregateInputType = {
    id?: true
    groupId?: true
    fromUserId?: true
    toUserId?: true
    requestedAt?: true
    _all?: true
  }

  export type GroupJoinRequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GroupJoinRequest to aggregate.
     */
    where?: GroupJoinRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupJoinRequests to fetch.
     */
    orderBy?: GroupJoinRequestOrderByWithRelationInput | GroupJoinRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GroupJoinRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupJoinRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupJoinRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GroupJoinRequests
    **/
    _count?: true | GroupJoinRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GroupJoinRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GroupJoinRequestMaxAggregateInputType
  }

  export type GetGroupJoinRequestAggregateType<T extends GroupJoinRequestAggregateArgs> = {
        [P in keyof T & keyof AggregateGroupJoinRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGroupJoinRequest[P]>
      : GetScalarType<T[P], AggregateGroupJoinRequest[P]>
  }




  export type GroupJoinRequestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupJoinRequestWhereInput
    orderBy?: GroupJoinRequestOrderByWithAggregationInput | GroupJoinRequestOrderByWithAggregationInput[]
    by: GroupJoinRequestScalarFieldEnum[] | GroupJoinRequestScalarFieldEnum
    having?: GroupJoinRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GroupJoinRequestCountAggregateInputType | true
    _min?: GroupJoinRequestMinAggregateInputType
    _max?: GroupJoinRequestMaxAggregateInputType
  }

  export type GroupJoinRequestGroupByOutputType = {
    id: string
    groupId: string
    fromUserId: string
    toUserId: string
    requestedAt: Date
    _count: GroupJoinRequestCountAggregateOutputType | null
    _min: GroupJoinRequestMinAggregateOutputType | null
    _max: GroupJoinRequestMaxAggregateOutputType | null
  }

  type GetGroupJoinRequestGroupByPayload<T extends GroupJoinRequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GroupJoinRequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GroupJoinRequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GroupJoinRequestGroupByOutputType[P]>
            : GetScalarType<T[P], GroupJoinRequestGroupByOutputType[P]>
        }
      >
    >


  export type GroupJoinRequestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    groupId?: boolean
    fromUserId?: boolean
    toUserId?: boolean
    requestedAt?: boolean
    group?: boolean | GroupChatDefaultArgs<ExtArgs>
    fromUser?: boolean | UserDefaultArgs<ExtArgs>
    toUser?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["groupJoinRequest"]>

  export type GroupJoinRequestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    groupId?: boolean
    fromUserId?: boolean
    toUserId?: boolean
    requestedAt?: boolean
    group?: boolean | GroupChatDefaultArgs<ExtArgs>
    fromUser?: boolean | UserDefaultArgs<ExtArgs>
    toUser?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["groupJoinRequest"]>

  export type GroupJoinRequestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    groupId?: boolean
    fromUserId?: boolean
    toUserId?: boolean
    requestedAt?: boolean
    group?: boolean | GroupChatDefaultArgs<ExtArgs>
    fromUser?: boolean | UserDefaultArgs<ExtArgs>
    toUser?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["groupJoinRequest"]>

  export type GroupJoinRequestSelectScalar = {
    id?: boolean
    groupId?: boolean
    fromUserId?: boolean
    toUserId?: boolean
    requestedAt?: boolean
  }

  export type GroupJoinRequestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "groupId" | "fromUserId" | "toUserId" | "requestedAt", ExtArgs["result"]["groupJoinRequest"]>
  export type GroupJoinRequestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | GroupChatDefaultArgs<ExtArgs>
    fromUser?: boolean | UserDefaultArgs<ExtArgs>
    toUser?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type GroupJoinRequestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | GroupChatDefaultArgs<ExtArgs>
    fromUser?: boolean | UserDefaultArgs<ExtArgs>
    toUser?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type GroupJoinRequestIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | GroupChatDefaultArgs<ExtArgs>
    fromUser?: boolean | UserDefaultArgs<ExtArgs>
    toUser?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $GroupJoinRequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GroupJoinRequest"
    objects: {
      group: Prisma.$GroupChatPayload<ExtArgs>
      fromUser: Prisma.$UserPayload<ExtArgs>
      toUser: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      groupId: string
      fromUserId: string
      toUserId: string
      requestedAt: Date
    }, ExtArgs["result"]["groupJoinRequest"]>
    composites: {}
  }

  type GroupJoinRequestGetPayload<S extends boolean | null | undefined | GroupJoinRequestDefaultArgs> = $Result.GetResult<Prisma.$GroupJoinRequestPayload, S>

  type GroupJoinRequestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GroupJoinRequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GroupJoinRequestCountAggregateInputType | true
    }

  export interface GroupJoinRequestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GroupJoinRequest'], meta: { name: 'GroupJoinRequest' } }
    /**
     * Find zero or one GroupJoinRequest that matches the filter.
     * @param {GroupJoinRequestFindUniqueArgs} args - Arguments to find a GroupJoinRequest
     * @example
     * // Get one GroupJoinRequest
     * const groupJoinRequest = await prisma.groupJoinRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GroupJoinRequestFindUniqueArgs>(args: SelectSubset<T, GroupJoinRequestFindUniqueArgs<ExtArgs>>): Prisma__GroupJoinRequestClient<$Result.GetResult<Prisma.$GroupJoinRequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GroupJoinRequest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GroupJoinRequestFindUniqueOrThrowArgs} args - Arguments to find a GroupJoinRequest
     * @example
     * // Get one GroupJoinRequest
     * const groupJoinRequest = await prisma.groupJoinRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GroupJoinRequestFindUniqueOrThrowArgs>(args: SelectSubset<T, GroupJoinRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GroupJoinRequestClient<$Result.GetResult<Prisma.$GroupJoinRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GroupJoinRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupJoinRequestFindFirstArgs} args - Arguments to find a GroupJoinRequest
     * @example
     * // Get one GroupJoinRequest
     * const groupJoinRequest = await prisma.groupJoinRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GroupJoinRequestFindFirstArgs>(args?: SelectSubset<T, GroupJoinRequestFindFirstArgs<ExtArgs>>): Prisma__GroupJoinRequestClient<$Result.GetResult<Prisma.$GroupJoinRequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GroupJoinRequest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupJoinRequestFindFirstOrThrowArgs} args - Arguments to find a GroupJoinRequest
     * @example
     * // Get one GroupJoinRequest
     * const groupJoinRequest = await prisma.groupJoinRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GroupJoinRequestFindFirstOrThrowArgs>(args?: SelectSubset<T, GroupJoinRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma__GroupJoinRequestClient<$Result.GetResult<Prisma.$GroupJoinRequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GroupJoinRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupJoinRequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GroupJoinRequests
     * const groupJoinRequests = await prisma.groupJoinRequest.findMany()
     * 
     * // Get first 10 GroupJoinRequests
     * const groupJoinRequests = await prisma.groupJoinRequest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const groupJoinRequestWithIdOnly = await prisma.groupJoinRequest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GroupJoinRequestFindManyArgs>(args?: SelectSubset<T, GroupJoinRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupJoinRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GroupJoinRequest.
     * @param {GroupJoinRequestCreateArgs} args - Arguments to create a GroupJoinRequest.
     * @example
     * // Create one GroupJoinRequest
     * const GroupJoinRequest = await prisma.groupJoinRequest.create({
     *   data: {
     *     // ... data to create a GroupJoinRequest
     *   }
     * })
     * 
     */
    create<T extends GroupJoinRequestCreateArgs>(args: SelectSubset<T, GroupJoinRequestCreateArgs<ExtArgs>>): Prisma__GroupJoinRequestClient<$Result.GetResult<Prisma.$GroupJoinRequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GroupJoinRequests.
     * @param {GroupJoinRequestCreateManyArgs} args - Arguments to create many GroupJoinRequests.
     * @example
     * // Create many GroupJoinRequests
     * const groupJoinRequest = await prisma.groupJoinRequest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GroupJoinRequestCreateManyArgs>(args?: SelectSubset<T, GroupJoinRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GroupJoinRequests and returns the data saved in the database.
     * @param {GroupJoinRequestCreateManyAndReturnArgs} args - Arguments to create many GroupJoinRequests.
     * @example
     * // Create many GroupJoinRequests
     * const groupJoinRequest = await prisma.groupJoinRequest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GroupJoinRequests and only return the `id`
     * const groupJoinRequestWithIdOnly = await prisma.groupJoinRequest.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GroupJoinRequestCreateManyAndReturnArgs>(args?: SelectSubset<T, GroupJoinRequestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupJoinRequestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GroupJoinRequest.
     * @param {GroupJoinRequestDeleteArgs} args - Arguments to delete one GroupJoinRequest.
     * @example
     * // Delete one GroupJoinRequest
     * const GroupJoinRequest = await prisma.groupJoinRequest.delete({
     *   where: {
     *     // ... filter to delete one GroupJoinRequest
     *   }
     * })
     * 
     */
    delete<T extends GroupJoinRequestDeleteArgs>(args: SelectSubset<T, GroupJoinRequestDeleteArgs<ExtArgs>>): Prisma__GroupJoinRequestClient<$Result.GetResult<Prisma.$GroupJoinRequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GroupJoinRequest.
     * @param {GroupJoinRequestUpdateArgs} args - Arguments to update one GroupJoinRequest.
     * @example
     * // Update one GroupJoinRequest
     * const groupJoinRequest = await prisma.groupJoinRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GroupJoinRequestUpdateArgs>(args: SelectSubset<T, GroupJoinRequestUpdateArgs<ExtArgs>>): Prisma__GroupJoinRequestClient<$Result.GetResult<Prisma.$GroupJoinRequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GroupJoinRequests.
     * @param {GroupJoinRequestDeleteManyArgs} args - Arguments to filter GroupJoinRequests to delete.
     * @example
     * // Delete a few GroupJoinRequests
     * const { count } = await prisma.groupJoinRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GroupJoinRequestDeleteManyArgs>(args?: SelectSubset<T, GroupJoinRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GroupJoinRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupJoinRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GroupJoinRequests
     * const groupJoinRequest = await prisma.groupJoinRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GroupJoinRequestUpdateManyArgs>(args: SelectSubset<T, GroupJoinRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GroupJoinRequests and returns the data updated in the database.
     * @param {GroupJoinRequestUpdateManyAndReturnArgs} args - Arguments to update many GroupJoinRequests.
     * @example
     * // Update many GroupJoinRequests
     * const groupJoinRequest = await prisma.groupJoinRequest.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GroupJoinRequests and only return the `id`
     * const groupJoinRequestWithIdOnly = await prisma.groupJoinRequest.updateManyAndReturn({
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
    updateManyAndReturn<T extends GroupJoinRequestUpdateManyAndReturnArgs>(args: SelectSubset<T, GroupJoinRequestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupJoinRequestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GroupJoinRequest.
     * @param {GroupJoinRequestUpsertArgs} args - Arguments to update or create a GroupJoinRequest.
     * @example
     * // Update or create a GroupJoinRequest
     * const groupJoinRequest = await prisma.groupJoinRequest.upsert({
     *   create: {
     *     // ... data to create a GroupJoinRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GroupJoinRequest we want to update
     *   }
     * })
     */
    upsert<T extends GroupJoinRequestUpsertArgs>(args: SelectSubset<T, GroupJoinRequestUpsertArgs<ExtArgs>>): Prisma__GroupJoinRequestClient<$Result.GetResult<Prisma.$GroupJoinRequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GroupJoinRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupJoinRequestCountArgs} args - Arguments to filter GroupJoinRequests to count.
     * @example
     * // Count the number of GroupJoinRequests
     * const count = await prisma.groupJoinRequest.count({
     *   where: {
     *     // ... the filter for the GroupJoinRequests we want to count
     *   }
     * })
    **/
    count<T extends GroupJoinRequestCountArgs>(
      args?: Subset<T, GroupJoinRequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GroupJoinRequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GroupJoinRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupJoinRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GroupJoinRequestAggregateArgs>(args: Subset<T, GroupJoinRequestAggregateArgs>): Prisma.PrismaPromise<GetGroupJoinRequestAggregateType<T>>

    /**
     * Group by GroupJoinRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupJoinRequestGroupByArgs} args - Group by arguments.
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
      T extends GroupJoinRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GroupJoinRequestGroupByArgs['orderBy'] }
        : { orderBy?: GroupJoinRequestGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GroupJoinRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGroupJoinRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GroupJoinRequest model
   */
  readonly fields: GroupJoinRequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GroupJoinRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GroupJoinRequestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    group<T extends GroupChatDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GroupChatDefaultArgs<ExtArgs>>): Prisma__GroupChatClient<$Result.GetResult<Prisma.$GroupChatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    fromUser<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    toUser<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the GroupJoinRequest model
   */
  interface GroupJoinRequestFieldRefs {
    readonly id: FieldRef<"GroupJoinRequest", 'String'>
    readonly groupId: FieldRef<"GroupJoinRequest", 'String'>
    readonly fromUserId: FieldRef<"GroupJoinRequest", 'String'>
    readonly toUserId: FieldRef<"GroupJoinRequest", 'String'>
    readonly requestedAt: FieldRef<"GroupJoinRequest", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * GroupJoinRequest findUnique
   */
  export type GroupJoinRequestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupJoinRequest
     */
    select?: GroupJoinRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupJoinRequest
     */
    omit?: GroupJoinRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupJoinRequestInclude<ExtArgs> | null
    /**
     * Filter, which GroupJoinRequest to fetch.
     */
    where: GroupJoinRequestWhereUniqueInput
  }

  /**
   * GroupJoinRequest findUniqueOrThrow
   */
  export type GroupJoinRequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupJoinRequest
     */
    select?: GroupJoinRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupJoinRequest
     */
    omit?: GroupJoinRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupJoinRequestInclude<ExtArgs> | null
    /**
     * Filter, which GroupJoinRequest to fetch.
     */
    where: GroupJoinRequestWhereUniqueInput
  }

  /**
   * GroupJoinRequest findFirst
   */
  export type GroupJoinRequestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupJoinRequest
     */
    select?: GroupJoinRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupJoinRequest
     */
    omit?: GroupJoinRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupJoinRequestInclude<ExtArgs> | null
    /**
     * Filter, which GroupJoinRequest to fetch.
     */
    where?: GroupJoinRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupJoinRequests to fetch.
     */
    orderBy?: GroupJoinRequestOrderByWithRelationInput | GroupJoinRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GroupJoinRequests.
     */
    cursor?: GroupJoinRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupJoinRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupJoinRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GroupJoinRequests.
     */
    distinct?: GroupJoinRequestScalarFieldEnum | GroupJoinRequestScalarFieldEnum[]
  }

  /**
   * GroupJoinRequest findFirstOrThrow
   */
  export type GroupJoinRequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupJoinRequest
     */
    select?: GroupJoinRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupJoinRequest
     */
    omit?: GroupJoinRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupJoinRequestInclude<ExtArgs> | null
    /**
     * Filter, which GroupJoinRequest to fetch.
     */
    where?: GroupJoinRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupJoinRequests to fetch.
     */
    orderBy?: GroupJoinRequestOrderByWithRelationInput | GroupJoinRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GroupJoinRequests.
     */
    cursor?: GroupJoinRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupJoinRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupJoinRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GroupJoinRequests.
     */
    distinct?: GroupJoinRequestScalarFieldEnum | GroupJoinRequestScalarFieldEnum[]
  }

  /**
   * GroupJoinRequest findMany
   */
  export type GroupJoinRequestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupJoinRequest
     */
    select?: GroupJoinRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupJoinRequest
     */
    omit?: GroupJoinRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupJoinRequestInclude<ExtArgs> | null
    /**
     * Filter, which GroupJoinRequests to fetch.
     */
    where?: GroupJoinRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupJoinRequests to fetch.
     */
    orderBy?: GroupJoinRequestOrderByWithRelationInput | GroupJoinRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GroupJoinRequests.
     */
    cursor?: GroupJoinRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupJoinRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupJoinRequests.
     */
    skip?: number
    distinct?: GroupJoinRequestScalarFieldEnum | GroupJoinRequestScalarFieldEnum[]
  }

  /**
   * GroupJoinRequest create
   */
  export type GroupJoinRequestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupJoinRequest
     */
    select?: GroupJoinRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupJoinRequest
     */
    omit?: GroupJoinRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupJoinRequestInclude<ExtArgs> | null
    /**
     * The data needed to create a GroupJoinRequest.
     */
    data: XOR<GroupJoinRequestCreateInput, GroupJoinRequestUncheckedCreateInput>
  }

  /**
   * GroupJoinRequest createMany
   */
  export type GroupJoinRequestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GroupJoinRequests.
     */
    data: GroupJoinRequestCreateManyInput | GroupJoinRequestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GroupJoinRequest createManyAndReturn
   */
  export type GroupJoinRequestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupJoinRequest
     */
    select?: GroupJoinRequestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GroupJoinRequest
     */
    omit?: GroupJoinRequestOmit<ExtArgs> | null
    /**
     * The data used to create many GroupJoinRequests.
     */
    data: GroupJoinRequestCreateManyInput | GroupJoinRequestCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupJoinRequestIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * GroupJoinRequest update
   */
  export type GroupJoinRequestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupJoinRequest
     */
    select?: GroupJoinRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupJoinRequest
     */
    omit?: GroupJoinRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupJoinRequestInclude<ExtArgs> | null
    /**
     * The data needed to update a GroupJoinRequest.
     */
    data: XOR<GroupJoinRequestUpdateInput, GroupJoinRequestUncheckedUpdateInput>
    /**
     * Choose, which GroupJoinRequest to update.
     */
    where: GroupJoinRequestWhereUniqueInput
  }

  /**
   * GroupJoinRequest updateMany
   */
  export type GroupJoinRequestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GroupJoinRequests.
     */
    data: XOR<GroupJoinRequestUpdateManyMutationInput, GroupJoinRequestUncheckedUpdateManyInput>
    /**
     * Filter which GroupJoinRequests to update
     */
    where?: GroupJoinRequestWhereInput
    /**
     * Limit how many GroupJoinRequests to update.
     */
    limit?: number
  }

  /**
   * GroupJoinRequest updateManyAndReturn
   */
  export type GroupJoinRequestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupJoinRequest
     */
    select?: GroupJoinRequestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GroupJoinRequest
     */
    omit?: GroupJoinRequestOmit<ExtArgs> | null
    /**
     * The data used to update GroupJoinRequests.
     */
    data: XOR<GroupJoinRequestUpdateManyMutationInput, GroupJoinRequestUncheckedUpdateManyInput>
    /**
     * Filter which GroupJoinRequests to update
     */
    where?: GroupJoinRequestWhereInput
    /**
     * Limit how many GroupJoinRequests to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupJoinRequestIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * GroupJoinRequest upsert
   */
  export type GroupJoinRequestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupJoinRequest
     */
    select?: GroupJoinRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupJoinRequest
     */
    omit?: GroupJoinRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupJoinRequestInclude<ExtArgs> | null
    /**
     * The filter to search for the GroupJoinRequest to update in case it exists.
     */
    where: GroupJoinRequestWhereUniqueInput
    /**
     * In case the GroupJoinRequest found by the `where` argument doesn't exist, create a new GroupJoinRequest with this data.
     */
    create: XOR<GroupJoinRequestCreateInput, GroupJoinRequestUncheckedCreateInput>
    /**
     * In case the GroupJoinRequest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GroupJoinRequestUpdateInput, GroupJoinRequestUncheckedUpdateInput>
  }

  /**
   * GroupJoinRequest delete
   */
  export type GroupJoinRequestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupJoinRequest
     */
    select?: GroupJoinRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupJoinRequest
     */
    omit?: GroupJoinRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupJoinRequestInclude<ExtArgs> | null
    /**
     * Filter which GroupJoinRequest to delete.
     */
    where: GroupJoinRequestWhereUniqueInput
  }

  /**
   * GroupJoinRequest deleteMany
   */
  export type GroupJoinRequestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GroupJoinRequests to delete
     */
    where?: GroupJoinRequestWhereInput
    /**
     * Limit how many GroupJoinRequests to delete.
     */
    limit?: number
  }

  /**
   * GroupJoinRequest without action
   */
  export type GroupJoinRequestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupJoinRequest
     */
    select?: GroupJoinRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupJoinRequest
     */
    omit?: GroupJoinRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupJoinRequestInclude<ExtArgs> | null
  }


  /**
   * Model GroupMessage
   */

  export type AggregateGroupMessage = {
    _count: GroupMessageCountAggregateOutputType | null
    _min: GroupMessageMinAggregateOutputType | null
    _max: GroupMessageMaxAggregateOutputType | null
  }

  export type GroupMessageMinAggregateOutputType = {
    id: string | null
    groupId: string | null
    authorId: string | null
    content: string | null
    photoUrl: string | null
    type: string | null
    createdAt: Date | null
    deleted: boolean | null
  }

  export type GroupMessageMaxAggregateOutputType = {
    id: string | null
    groupId: string | null
    authorId: string | null
    content: string | null
    photoUrl: string | null
    type: string | null
    createdAt: Date | null
    deleted: boolean | null
  }

  export type GroupMessageCountAggregateOutputType = {
    id: number
    groupId: number
    authorId: number
    content: number
    photoUrl: number
    type: number
    createdAt: number
    deleted: number
    _all: number
  }


  export type GroupMessageMinAggregateInputType = {
    id?: true
    groupId?: true
    authorId?: true
    content?: true
    photoUrl?: true
    type?: true
    createdAt?: true
    deleted?: true
  }

  export type GroupMessageMaxAggregateInputType = {
    id?: true
    groupId?: true
    authorId?: true
    content?: true
    photoUrl?: true
    type?: true
    createdAt?: true
    deleted?: true
  }

  export type GroupMessageCountAggregateInputType = {
    id?: true
    groupId?: true
    authorId?: true
    content?: true
    photoUrl?: true
    type?: true
    createdAt?: true
    deleted?: true
    _all?: true
  }

  export type GroupMessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GroupMessage to aggregate.
     */
    where?: GroupMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupMessages to fetch.
     */
    orderBy?: GroupMessageOrderByWithRelationInput | GroupMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GroupMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GroupMessages
    **/
    _count?: true | GroupMessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GroupMessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GroupMessageMaxAggregateInputType
  }

  export type GetGroupMessageAggregateType<T extends GroupMessageAggregateArgs> = {
        [P in keyof T & keyof AggregateGroupMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGroupMessage[P]>
      : GetScalarType<T[P], AggregateGroupMessage[P]>
  }




  export type GroupMessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupMessageWhereInput
    orderBy?: GroupMessageOrderByWithAggregationInput | GroupMessageOrderByWithAggregationInput[]
    by: GroupMessageScalarFieldEnum[] | GroupMessageScalarFieldEnum
    having?: GroupMessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GroupMessageCountAggregateInputType | true
    _min?: GroupMessageMinAggregateInputType
    _max?: GroupMessageMaxAggregateInputType
  }

  export type GroupMessageGroupByOutputType = {
    id: string
    groupId: string
    authorId: string
    content: string | null
    photoUrl: string | null
    type: string | null
    createdAt: Date
    deleted: boolean
    _count: GroupMessageCountAggregateOutputType | null
    _min: GroupMessageMinAggregateOutputType | null
    _max: GroupMessageMaxAggregateOutputType | null
  }

  type GetGroupMessageGroupByPayload<T extends GroupMessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GroupMessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GroupMessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GroupMessageGroupByOutputType[P]>
            : GetScalarType<T[P], GroupMessageGroupByOutputType[P]>
        }
      >
    >


  export type GroupMessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    groupId?: boolean
    authorId?: boolean
    content?: boolean
    photoUrl?: boolean
    type?: boolean
    createdAt?: boolean
    deleted?: boolean
    group?: boolean | GroupChatDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["groupMessage"]>

  export type GroupMessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    groupId?: boolean
    authorId?: boolean
    content?: boolean
    photoUrl?: boolean
    type?: boolean
    createdAt?: boolean
    deleted?: boolean
    group?: boolean | GroupChatDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["groupMessage"]>

  export type GroupMessageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    groupId?: boolean
    authorId?: boolean
    content?: boolean
    photoUrl?: boolean
    type?: boolean
    createdAt?: boolean
    deleted?: boolean
    group?: boolean | GroupChatDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["groupMessage"]>

  export type GroupMessageSelectScalar = {
    id?: boolean
    groupId?: boolean
    authorId?: boolean
    content?: boolean
    photoUrl?: boolean
    type?: boolean
    createdAt?: boolean
    deleted?: boolean
  }

  export type GroupMessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "groupId" | "authorId" | "content" | "photoUrl" | "type" | "createdAt" | "deleted", ExtArgs["result"]["groupMessage"]>
  export type GroupMessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | GroupChatDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type GroupMessageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | GroupChatDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type GroupMessageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | GroupChatDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $GroupMessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GroupMessage"
    objects: {
      group: Prisma.$GroupChatPayload<ExtArgs>
      author: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      groupId: string
      authorId: string
      content: string | null
      photoUrl: string | null
      type: string | null
      createdAt: Date
      deleted: boolean
    }, ExtArgs["result"]["groupMessage"]>
    composites: {}
  }

  type GroupMessageGetPayload<S extends boolean | null | undefined | GroupMessageDefaultArgs> = $Result.GetResult<Prisma.$GroupMessagePayload, S>

  type GroupMessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GroupMessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GroupMessageCountAggregateInputType | true
    }

  export interface GroupMessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GroupMessage'], meta: { name: 'GroupMessage' } }
    /**
     * Find zero or one GroupMessage that matches the filter.
     * @param {GroupMessageFindUniqueArgs} args - Arguments to find a GroupMessage
     * @example
     * // Get one GroupMessage
     * const groupMessage = await prisma.groupMessage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GroupMessageFindUniqueArgs>(args: SelectSubset<T, GroupMessageFindUniqueArgs<ExtArgs>>): Prisma__GroupMessageClient<$Result.GetResult<Prisma.$GroupMessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GroupMessage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GroupMessageFindUniqueOrThrowArgs} args - Arguments to find a GroupMessage
     * @example
     * // Get one GroupMessage
     * const groupMessage = await prisma.groupMessage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GroupMessageFindUniqueOrThrowArgs>(args: SelectSubset<T, GroupMessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GroupMessageClient<$Result.GetResult<Prisma.$GroupMessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GroupMessage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupMessageFindFirstArgs} args - Arguments to find a GroupMessage
     * @example
     * // Get one GroupMessage
     * const groupMessage = await prisma.groupMessage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GroupMessageFindFirstArgs>(args?: SelectSubset<T, GroupMessageFindFirstArgs<ExtArgs>>): Prisma__GroupMessageClient<$Result.GetResult<Prisma.$GroupMessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GroupMessage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupMessageFindFirstOrThrowArgs} args - Arguments to find a GroupMessage
     * @example
     * // Get one GroupMessage
     * const groupMessage = await prisma.groupMessage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GroupMessageFindFirstOrThrowArgs>(args?: SelectSubset<T, GroupMessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__GroupMessageClient<$Result.GetResult<Prisma.$GroupMessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GroupMessages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupMessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GroupMessages
     * const groupMessages = await prisma.groupMessage.findMany()
     * 
     * // Get first 10 GroupMessages
     * const groupMessages = await prisma.groupMessage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const groupMessageWithIdOnly = await prisma.groupMessage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GroupMessageFindManyArgs>(args?: SelectSubset<T, GroupMessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GroupMessage.
     * @param {GroupMessageCreateArgs} args - Arguments to create a GroupMessage.
     * @example
     * // Create one GroupMessage
     * const GroupMessage = await prisma.groupMessage.create({
     *   data: {
     *     // ... data to create a GroupMessage
     *   }
     * })
     * 
     */
    create<T extends GroupMessageCreateArgs>(args: SelectSubset<T, GroupMessageCreateArgs<ExtArgs>>): Prisma__GroupMessageClient<$Result.GetResult<Prisma.$GroupMessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GroupMessages.
     * @param {GroupMessageCreateManyArgs} args - Arguments to create many GroupMessages.
     * @example
     * // Create many GroupMessages
     * const groupMessage = await prisma.groupMessage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GroupMessageCreateManyArgs>(args?: SelectSubset<T, GroupMessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GroupMessages and returns the data saved in the database.
     * @param {GroupMessageCreateManyAndReturnArgs} args - Arguments to create many GroupMessages.
     * @example
     * // Create many GroupMessages
     * const groupMessage = await prisma.groupMessage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GroupMessages and only return the `id`
     * const groupMessageWithIdOnly = await prisma.groupMessage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GroupMessageCreateManyAndReturnArgs>(args?: SelectSubset<T, GroupMessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupMessagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GroupMessage.
     * @param {GroupMessageDeleteArgs} args - Arguments to delete one GroupMessage.
     * @example
     * // Delete one GroupMessage
     * const GroupMessage = await prisma.groupMessage.delete({
     *   where: {
     *     // ... filter to delete one GroupMessage
     *   }
     * })
     * 
     */
    delete<T extends GroupMessageDeleteArgs>(args: SelectSubset<T, GroupMessageDeleteArgs<ExtArgs>>): Prisma__GroupMessageClient<$Result.GetResult<Prisma.$GroupMessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GroupMessage.
     * @param {GroupMessageUpdateArgs} args - Arguments to update one GroupMessage.
     * @example
     * // Update one GroupMessage
     * const groupMessage = await prisma.groupMessage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GroupMessageUpdateArgs>(args: SelectSubset<T, GroupMessageUpdateArgs<ExtArgs>>): Prisma__GroupMessageClient<$Result.GetResult<Prisma.$GroupMessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GroupMessages.
     * @param {GroupMessageDeleteManyArgs} args - Arguments to filter GroupMessages to delete.
     * @example
     * // Delete a few GroupMessages
     * const { count } = await prisma.groupMessage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GroupMessageDeleteManyArgs>(args?: SelectSubset<T, GroupMessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GroupMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupMessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GroupMessages
     * const groupMessage = await prisma.groupMessage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GroupMessageUpdateManyArgs>(args: SelectSubset<T, GroupMessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GroupMessages and returns the data updated in the database.
     * @param {GroupMessageUpdateManyAndReturnArgs} args - Arguments to update many GroupMessages.
     * @example
     * // Update many GroupMessages
     * const groupMessage = await prisma.groupMessage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GroupMessages and only return the `id`
     * const groupMessageWithIdOnly = await prisma.groupMessage.updateManyAndReturn({
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
    updateManyAndReturn<T extends GroupMessageUpdateManyAndReturnArgs>(args: SelectSubset<T, GroupMessageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupMessagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GroupMessage.
     * @param {GroupMessageUpsertArgs} args - Arguments to update or create a GroupMessage.
     * @example
     * // Update or create a GroupMessage
     * const groupMessage = await prisma.groupMessage.upsert({
     *   create: {
     *     // ... data to create a GroupMessage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GroupMessage we want to update
     *   }
     * })
     */
    upsert<T extends GroupMessageUpsertArgs>(args: SelectSubset<T, GroupMessageUpsertArgs<ExtArgs>>): Prisma__GroupMessageClient<$Result.GetResult<Prisma.$GroupMessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GroupMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupMessageCountArgs} args - Arguments to filter GroupMessages to count.
     * @example
     * // Count the number of GroupMessages
     * const count = await prisma.groupMessage.count({
     *   where: {
     *     // ... the filter for the GroupMessages we want to count
     *   }
     * })
    **/
    count<T extends GroupMessageCountArgs>(
      args?: Subset<T, GroupMessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GroupMessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GroupMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupMessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GroupMessageAggregateArgs>(args: Subset<T, GroupMessageAggregateArgs>): Prisma.PrismaPromise<GetGroupMessageAggregateType<T>>

    /**
     * Group by GroupMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupMessageGroupByArgs} args - Group by arguments.
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
      T extends GroupMessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GroupMessageGroupByArgs['orderBy'] }
        : { orderBy?: GroupMessageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GroupMessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGroupMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GroupMessage model
   */
  readonly fields: GroupMessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GroupMessage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GroupMessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    group<T extends GroupChatDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GroupChatDefaultArgs<ExtArgs>>): Prisma__GroupChatClient<$Result.GetResult<Prisma.$GroupChatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    author<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the GroupMessage model
   */
  interface GroupMessageFieldRefs {
    readonly id: FieldRef<"GroupMessage", 'String'>
    readonly groupId: FieldRef<"GroupMessage", 'String'>
    readonly authorId: FieldRef<"GroupMessage", 'String'>
    readonly content: FieldRef<"GroupMessage", 'String'>
    readonly photoUrl: FieldRef<"GroupMessage", 'String'>
    readonly type: FieldRef<"GroupMessage", 'String'>
    readonly createdAt: FieldRef<"GroupMessage", 'DateTime'>
    readonly deleted: FieldRef<"GroupMessage", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * GroupMessage findUnique
   */
  export type GroupMessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMessage
     */
    select?: GroupMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMessage
     */
    omit?: GroupMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMessageInclude<ExtArgs> | null
    /**
     * Filter, which GroupMessage to fetch.
     */
    where: GroupMessageWhereUniqueInput
  }

  /**
   * GroupMessage findUniqueOrThrow
   */
  export type GroupMessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMessage
     */
    select?: GroupMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMessage
     */
    omit?: GroupMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMessageInclude<ExtArgs> | null
    /**
     * Filter, which GroupMessage to fetch.
     */
    where: GroupMessageWhereUniqueInput
  }

  /**
   * GroupMessage findFirst
   */
  export type GroupMessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMessage
     */
    select?: GroupMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMessage
     */
    omit?: GroupMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMessageInclude<ExtArgs> | null
    /**
     * Filter, which GroupMessage to fetch.
     */
    where?: GroupMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupMessages to fetch.
     */
    orderBy?: GroupMessageOrderByWithRelationInput | GroupMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GroupMessages.
     */
    cursor?: GroupMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GroupMessages.
     */
    distinct?: GroupMessageScalarFieldEnum | GroupMessageScalarFieldEnum[]
  }

  /**
   * GroupMessage findFirstOrThrow
   */
  export type GroupMessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMessage
     */
    select?: GroupMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMessage
     */
    omit?: GroupMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMessageInclude<ExtArgs> | null
    /**
     * Filter, which GroupMessage to fetch.
     */
    where?: GroupMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupMessages to fetch.
     */
    orderBy?: GroupMessageOrderByWithRelationInput | GroupMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GroupMessages.
     */
    cursor?: GroupMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GroupMessages.
     */
    distinct?: GroupMessageScalarFieldEnum | GroupMessageScalarFieldEnum[]
  }

  /**
   * GroupMessage findMany
   */
  export type GroupMessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMessage
     */
    select?: GroupMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMessage
     */
    omit?: GroupMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMessageInclude<ExtArgs> | null
    /**
     * Filter, which GroupMessages to fetch.
     */
    where?: GroupMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupMessages to fetch.
     */
    orderBy?: GroupMessageOrderByWithRelationInput | GroupMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GroupMessages.
     */
    cursor?: GroupMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupMessages.
     */
    skip?: number
    distinct?: GroupMessageScalarFieldEnum | GroupMessageScalarFieldEnum[]
  }

  /**
   * GroupMessage create
   */
  export type GroupMessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMessage
     */
    select?: GroupMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMessage
     */
    omit?: GroupMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMessageInclude<ExtArgs> | null
    /**
     * The data needed to create a GroupMessage.
     */
    data: XOR<GroupMessageCreateInput, GroupMessageUncheckedCreateInput>
  }

  /**
   * GroupMessage createMany
   */
  export type GroupMessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GroupMessages.
     */
    data: GroupMessageCreateManyInput | GroupMessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GroupMessage createManyAndReturn
   */
  export type GroupMessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMessage
     */
    select?: GroupMessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMessage
     */
    omit?: GroupMessageOmit<ExtArgs> | null
    /**
     * The data used to create many GroupMessages.
     */
    data: GroupMessageCreateManyInput | GroupMessageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMessageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * GroupMessage update
   */
  export type GroupMessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMessage
     */
    select?: GroupMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMessage
     */
    omit?: GroupMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMessageInclude<ExtArgs> | null
    /**
     * The data needed to update a GroupMessage.
     */
    data: XOR<GroupMessageUpdateInput, GroupMessageUncheckedUpdateInput>
    /**
     * Choose, which GroupMessage to update.
     */
    where: GroupMessageWhereUniqueInput
  }

  /**
   * GroupMessage updateMany
   */
  export type GroupMessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GroupMessages.
     */
    data: XOR<GroupMessageUpdateManyMutationInput, GroupMessageUncheckedUpdateManyInput>
    /**
     * Filter which GroupMessages to update
     */
    where?: GroupMessageWhereInput
    /**
     * Limit how many GroupMessages to update.
     */
    limit?: number
  }

  /**
   * GroupMessage updateManyAndReturn
   */
  export type GroupMessageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMessage
     */
    select?: GroupMessageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMessage
     */
    omit?: GroupMessageOmit<ExtArgs> | null
    /**
     * The data used to update GroupMessages.
     */
    data: XOR<GroupMessageUpdateManyMutationInput, GroupMessageUncheckedUpdateManyInput>
    /**
     * Filter which GroupMessages to update
     */
    where?: GroupMessageWhereInput
    /**
     * Limit how many GroupMessages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMessageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * GroupMessage upsert
   */
  export type GroupMessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMessage
     */
    select?: GroupMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMessage
     */
    omit?: GroupMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMessageInclude<ExtArgs> | null
    /**
     * The filter to search for the GroupMessage to update in case it exists.
     */
    where: GroupMessageWhereUniqueInput
    /**
     * In case the GroupMessage found by the `where` argument doesn't exist, create a new GroupMessage with this data.
     */
    create: XOR<GroupMessageCreateInput, GroupMessageUncheckedCreateInput>
    /**
     * In case the GroupMessage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GroupMessageUpdateInput, GroupMessageUncheckedUpdateInput>
  }

  /**
   * GroupMessage delete
   */
  export type GroupMessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMessage
     */
    select?: GroupMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMessage
     */
    omit?: GroupMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMessageInclude<ExtArgs> | null
    /**
     * Filter which GroupMessage to delete.
     */
    where: GroupMessageWhereUniqueInput
  }

  /**
   * GroupMessage deleteMany
   */
  export type GroupMessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GroupMessages to delete
     */
    where?: GroupMessageWhereInput
    /**
     * Limit how many GroupMessages to delete.
     */
    limit?: number
  }

  /**
   * GroupMessage without action
   */
  export type GroupMessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMessage
     */
    select?: GroupMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMessage
     */
    omit?: GroupMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMessageInclude<ExtArgs> | null
  }


  /**
   * Model PrivateMessage
   */

  export type AggregatePrivateMessage = {
    _count: PrivateMessageCountAggregateOutputType | null
    _min: PrivateMessageMinAggregateOutputType | null
    _max: PrivateMessageMaxAggregateOutputType | null
  }

  export type PrivateMessageMinAggregateOutputType = {
    id: string | null
    fromUserId: string | null
    toUserId: string | null
    content: string | null
    photoUrl: string | null
    type: string | null
    createdAt: Date | null
    deleted: boolean | null
  }

  export type PrivateMessageMaxAggregateOutputType = {
    id: string | null
    fromUserId: string | null
    toUserId: string | null
    content: string | null
    photoUrl: string | null
    type: string | null
    createdAt: Date | null
    deleted: boolean | null
  }

  export type PrivateMessageCountAggregateOutputType = {
    id: number
    fromUserId: number
    toUserId: number
    content: number
    photoUrl: number
    type: number
    createdAt: number
    deleted: number
    _all: number
  }


  export type PrivateMessageMinAggregateInputType = {
    id?: true
    fromUserId?: true
    toUserId?: true
    content?: true
    photoUrl?: true
    type?: true
    createdAt?: true
    deleted?: true
  }

  export type PrivateMessageMaxAggregateInputType = {
    id?: true
    fromUserId?: true
    toUserId?: true
    content?: true
    photoUrl?: true
    type?: true
    createdAt?: true
    deleted?: true
  }

  export type PrivateMessageCountAggregateInputType = {
    id?: true
    fromUserId?: true
    toUserId?: true
    content?: true
    photoUrl?: true
    type?: true
    createdAt?: true
    deleted?: true
    _all?: true
  }

  export type PrivateMessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PrivateMessage to aggregate.
     */
    where?: PrivateMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PrivateMessages to fetch.
     */
    orderBy?: PrivateMessageOrderByWithRelationInput | PrivateMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PrivateMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PrivateMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PrivateMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PrivateMessages
    **/
    _count?: true | PrivateMessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PrivateMessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PrivateMessageMaxAggregateInputType
  }

  export type GetPrivateMessageAggregateType<T extends PrivateMessageAggregateArgs> = {
        [P in keyof T & keyof AggregatePrivateMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePrivateMessage[P]>
      : GetScalarType<T[P], AggregatePrivateMessage[P]>
  }




  export type PrivateMessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PrivateMessageWhereInput
    orderBy?: PrivateMessageOrderByWithAggregationInput | PrivateMessageOrderByWithAggregationInput[]
    by: PrivateMessageScalarFieldEnum[] | PrivateMessageScalarFieldEnum
    having?: PrivateMessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PrivateMessageCountAggregateInputType | true
    _min?: PrivateMessageMinAggregateInputType
    _max?: PrivateMessageMaxAggregateInputType
  }

  export type PrivateMessageGroupByOutputType = {
    id: string
    fromUserId: string
    toUserId: string
    content: string | null
    photoUrl: string | null
    type: string | null
    createdAt: Date
    deleted: boolean
    _count: PrivateMessageCountAggregateOutputType | null
    _min: PrivateMessageMinAggregateOutputType | null
    _max: PrivateMessageMaxAggregateOutputType | null
  }

  type GetPrivateMessageGroupByPayload<T extends PrivateMessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PrivateMessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PrivateMessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PrivateMessageGroupByOutputType[P]>
            : GetScalarType<T[P], PrivateMessageGroupByOutputType[P]>
        }
      >
    >


  export type PrivateMessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fromUserId?: boolean
    toUserId?: boolean
    content?: boolean
    photoUrl?: boolean
    type?: boolean
    createdAt?: boolean
    deleted?: boolean
    fromUser?: boolean | UserDefaultArgs<ExtArgs>
    toUser?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["privateMessage"]>

  export type PrivateMessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fromUserId?: boolean
    toUserId?: boolean
    content?: boolean
    photoUrl?: boolean
    type?: boolean
    createdAt?: boolean
    deleted?: boolean
    fromUser?: boolean | UserDefaultArgs<ExtArgs>
    toUser?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["privateMessage"]>

  export type PrivateMessageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fromUserId?: boolean
    toUserId?: boolean
    content?: boolean
    photoUrl?: boolean
    type?: boolean
    createdAt?: boolean
    deleted?: boolean
    fromUser?: boolean | UserDefaultArgs<ExtArgs>
    toUser?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["privateMessage"]>

  export type PrivateMessageSelectScalar = {
    id?: boolean
    fromUserId?: boolean
    toUserId?: boolean
    content?: boolean
    photoUrl?: boolean
    type?: boolean
    createdAt?: boolean
    deleted?: boolean
  }

  export type PrivateMessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fromUserId" | "toUserId" | "content" | "photoUrl" | "type" | "createdAt" | "deleted", ExtArgs["result"]["privateMessage"]>
  export type PrivateMessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fromUser?: boolean | UserDefaultArgs<ExtArgs>
    toUser?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PrivateMessageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fromUser?: boolean | UserDefaultArgs<ExtArgs>
    toUser?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PrivateMessageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fromUser?: boolean | UserDefaultArgs<ExtArgs>
    toUser?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PrivateMessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PrivateMessage"
    objects: {
      fromUser: Prisma.$UserPayload<ExtArgs>
      toUser: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      fromUserId: string
      toUserId: string
      content: string | null
      photoUrl: string | null
      type: string | null
      createdAt: Date
      deleted: boolean
    }, ExtArgs["result"]["privateMessage"]>
    composites: {}
  }

  type PrivateMessageGetPayload<S extends boolean | null | undefined | PrivateMessageDefaultArgs> = $Result.GetResult<Prisma.$PrivateMessagePayload, S>

  type PrivateMessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PrivateMessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PrivateMessageCountAggregateInputType | true
    }

  export interface PrivateMessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PrivateMessage'], meta: { name: 'PrivateMessage' } }
    /**
     * Find zero or one PrivateMessage that matches the filter.
     * @param {PrivateMessageFindUniqueArgs} args - Arguments to find a PrivateMessage
     * @example
     * // Get one PrivateMessage
     * const privateMessage = await prisma.privateMessage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PrivateMessageFindUniqueArgs>(args: SelectSubset<T, PrivateMessageFindUniqueArgs<ExtArgs>>): Prisma__PrivateMessageClient<$Result.GetResult<Prisma.$PrivateMessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PrivateMessage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PrivateMessageFindUniqueOrThrowArgs} args - Arguments to find a PrivateMessage
     * @example
     * // Get one PrivateMessage
     * const privateMessage = await prisma.privateMessage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PrivateMessageFindUniqueOrThrowArgs>(args: SelectSubset<T, PrivateMessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PrivateMessageClient<$Result.GetResult<Prisma.$PrivateMessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PrivateMessage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrivateMessageFindFirstArgs} args - Arguments to find a PrivateMessage
     * @example
     * // Get one PrivateMessage
     * const privateMessage = await prisma.privateMessage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PrivateMessageFindFirstArgs>(args?: SelectSubset<T, PrivateMessageFindFirstArgs<ExtArgs>>): Prisma__PrivateMessageClient<$Result.GetResult<Prisma.$PrivateMessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PrivateMessage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrivateMessageFindFirstOrThrowArgs} args - Arguments to find a PrivateMessage
     * @example
     * // Get one PrivateMessage
     * const privateMessage = await prisma.privateMessage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PrivateMessageFindFirstOrThrowArgs>(args?: SelectSubset<T, PrivateMessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__PrivateMessageClient<$Result.GetResult<Prisma.$PrivateMessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PrivateMessages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrivateMessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PrivateMessages
     * const privateMessages = await prisma.privateMessage.findMany()
     * 
     * // Get first 10 PrivateMessages
     * const privateMessages = await prisma.privateMessage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const privateMessageWithIdOnly = await prisma.privateMessage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PrivateMessageFindManyArgs>(args?: SelectSubset<T, PrivateMessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrivateMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PrivateMessage.
     * @param {PrivateMessageCreateArgs} args - Arguments to create a PrivateMessage.
     * @example
     * // Create one PrivateMessage
     * const PrivateMessage = await prisma.privateMessage.create({
     *   data: {
     *     // ... data to create a PrivateMessage
     *   }
     * })
     * 
     */
    create<T extends PrivateMessageCreateArgs>(args: SelectSubset<T, PrivateMessageCreateArgs<ExtArgs>>): Prisma__PrivateMessageClient<$Result.GetResult<Prisma.$PrivateMessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PrivateMessages.
     * @param {PrivateMessageCreateManyArgs} args - Arguments to create many PrivateMessages.
     * @example
     * // Create many PrivateMessages
     * const privateMessage = await prisma.privateMessage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PrivateMessageCreateManyArgs>(args?: SelectSubset<T, PrivateMessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PrivateMessages and returns the data saved in the database.
     * @param {PrivateMessageCreateManyAndReturnArgs} args - Arguments to create many PrivateMessages.
     * @example
     * // Create many PrivateMessages
     * const privateMessage = await prisma.privateMessage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PrivateMessages and only return the `id`
     * const privateMessageWithIdOnly = await prisma.privateMessage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PrivateMessageCreateManyAndReturnArgs>(args?: SelectSubset<T, PrivateMessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrivateMessagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PrivateMessage.
     * @param {PrivateMessageDeleteArgs} args - Arguments to delete one PrivateMessage.
     * @example
     * // Delete one PrivateMessage
     * const PrivateMessage = await prisma.privateMessage.delete({
     *   where: {
     *     // ... filter to delete one PrivateMessage
     *   }
     * })
     * 
     */
    delete<T extends PrivateMessageDeleteArgs>(args: SelectSubset<T, PrivateMessageDeleteArgs<ExtArgs>>): Prisma__PrivateMessageClient<$Result.GetResult<Prisma.$PrivateMessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PrivateMessage.
     * @param {PrivateMessageUpdateArgs} args - Arguments to update one PrivateMessage.
     * @example
     * // Update one PrivateMessage
     * const privateMessage = await prisma.privateMessage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PrivateMessageUpdateArgs>(args: SelectSubset<T, PrivateMessageUpdateArgs<ExtArgs>>): Prisma__PrivateMessageClient<$Result.GetResult<Prisma.$PrivateMessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PrivateMessages.
     * @param {PrivateMessageDeleteManyArgs} args - Arguments to filter PrivateMessages to delete.
     * @example
     * // Delete a few PrivateMessages
     * const { count } = await prisma.privateMessage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PrivateMessageDeleteManyArgs>(args?: SelectSubset<T, PrivateMessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PrivateMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrivateMessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PrivateMessages
     * const privateMessage = await prisma.privateMessage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PrivateMessageUpdateManyArgs>(args: SelectSubset<T, PrivateMessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PrivateMessages and returns the data updated in the database.
     * @param {PrivateMessageUpdateManyAndReturnArgs} args - Arguments to update many PrivateMessages.
     * @example
     * // Update many PrivateMessages
     * const privateMessage = await prisma.privateMessage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PrivateMessages and only return the `id`
     * const privateMessageWithIdOnly = await prisma.privateMessage.updateManyAndReturn({
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
    updateManyAndReturn<T extends PrivateMessageUpdateManyAndReturnArgs>(args: SelectSubset<T, PrivateMessageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrivateMessagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PrivateMessage.
     * @param {PrivateMessageUpsertArgs} args - Arguments to update or create a PrivateMessage.
     * @example
     * // Update or create a PrivateMessage
     * const privateMessage = await prisma.privateMessage.upsert({
     *   create: {
     *     // ... data to create a PrivateMessage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PrivateMessage we want to update
     *   }
     * })
     */
    upsert<T extends PrivateMessageUpsertArgs>(args: SelectSubset<T, PrivateMessageUpsertArgs<ExtArgs>>): Prisma__PrivateMessageClient<$Result.GetResult<Prisma.$PrivateMessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PrivateMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrivateMessageCountArgs} args - Arguments to filter PrivateMessages to count.
     * @example
     * // Count the number of PrivateMessages
     * const count = await prisma.privateMessage.count({
     *   where: {
     *     // ... the filter for the PrivateMessages we want to count
     *   }
     * })
    **/
    count<T extends PrivateMessageCountArgs>(
      args?: Subset<T, PrivateMessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PrivateMessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PrivateMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrivateMessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PrivateMessageAggregateArgs>(args: Subset<T, PrivateMessageAggregateArgs>): Prisma.PrismaPromise<GetPrivateMessageAggregateType<T>>

    /**
     * Group by PrivateMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrivateMessageGroupByArgs} args - Group by arguments.
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
      T extends PrivateMessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PrivateMessageGroupByArgs['orderBy'] }
        : { orderBy?: PrivateMessageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PrivateMessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPrivateMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PrivateMessage model
   */
  readonly fields: PrivateMessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PrivateMessage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PrivateMessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    fromUser<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    toUser<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PrivateMessage model
   */
  interface PrivateMessageFieldRefs {
    readonly id: FieldRef<"PrivateMessage", 'String'>
    readonly fromUserId: FieldRef<"PrivateMessage", 'String'>
    readonly toUserId: FieldRef<"PrivateMessage", 'String'>
    readonly content: FieldRef<"PrivateMessage", 'String'>
    readonly photoUrl: FieldRef<"PrivateMessage", 'String'>
    readonly type: FieldRef<"PrivateMessage", 'String'>
    readonly createdAt: FieldRef<"PrivateMessage", 'DateTime'>
    readonly deleted: FieldRef<"PrivateMessage", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * PrivateMessage findUnique
   */
  export type PrivateMessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivateMessage
     */
    select?: PrivateMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrivateMessage
     */
    omit?: PrivateMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrivateMessageInclude<ExtArgs> | null
    /**
     * Filter, which PrivateMessage to fetch.
     */
    where: PrivateMessageWhereUniqueInput
  }

  /**
   * PrivateMessage findUniqueOrThrow
   */
  export type PrivateMessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivateMessage
     */
    select?: PrivateMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrivateMessage
     */
    omit?: PrivateMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrivateMessageInclude<ExtArgs> | null
    /**
     * Filter, which PrivateMessage to fetch.
     */
    where: PrivateMessageWhereUniqueInput
  }

  /**
   * PrivateMessage findFirst
   */
  export type PrivateMessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivateMessage
     */
    select?: PrivateMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrivateMessage
     */
    omit?: PrivateMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrivateMessageInclude<ExtArgs> | null
    /**
     * Filter, which PrivateMessage to fetch.
     */
    where?: PrivateMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PrivateMessages to fetch.
     */
    orderBy?: PrivateMessageOrderByWithRelationInput | PrivateMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PrivateMessages.
     */
    cursor?: PrivateMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PrivateMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PrivateMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PrivateMessages.
     */
    distinct?: PrivateMessageScalarFieldEnum | PrivateMessageScalarFieldEnum[]
  }

  /**
   * PrivateMessage findFirstOrThrow
   */
  export type PrivateMessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivateMessage
     */
    select?: PrivateMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrivateMessage
     */
    omit?: PrivateMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrivateMessageInclude<ExtArgs> | null
    /**
     * Filter, which PrivateMessage to fetch.
     */
    where?: PrivateMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PrivateMessages to fetch.
     */
    orderBy?: PrivateMessageOrderByWithRelationInput | PrivateMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PrivateMessages.
     */
    cursor?: PrivateMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PrivateMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PrivateMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PrivateMessages.
     */
    distinct?: PrivateMessageScalarFieldEnum | PrivateMessageScalarFieldEnum[]
  }

  /**
   * PrivateMessage findMany
   */
  export type PrivateMessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivateMessage
     */
    select?: PrivateMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrivateMessage
     */
    omit?: PrivateMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrivateMessageInclude<ExtArgs> | null
    /**
     * Filter, which PrivateMessages to fetch.
     */
    where?: PrivateMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PrivateMessages to fetch.
     */
    orderBy?: PrivateMessageOrderByWithRelationInput | PrivateMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PrivateMessages.
     */
    cursor?: PrivateMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PrivateMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PrivateMessages.
     */
    skip?: number
    distinct?: PrivateMessageScalarFieldEnum | PrivateMessageScalarFieldEnum[]
  }

  /**
   * PrivateMessage create
   */
  export type PrivateMessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivateMessage
     */
    select?: PrivateMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrivateMessage
     */
    omit?: PrivateMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrivateMessageInclude<ExtArgs> | null
    /**
     * The data needed to create a PrivateMessage.
     */
    data: XOR<PrivateMessageCreateInput, PrivateMessageUncheckedCreateInput>
  }

  /**
   * PrivateMessage createMany
   */
  export type PrivateMessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PrivateMessages.
     */
    data: PrivateMessageCreateManyInput | PrivateMessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PrivateMessage createManyAndReturn
   */
  export type PrivateMessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivateMessage
     */
    select?: PrivateMessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PrivateMessage
     */
    omit?: PrivateMessageOmit<ExtArgs> | null
    /**
     * The data used to create many PrivateMessages.
     */
    data: PrivateMessageCreateManyInput | PrivateMessageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrivateMessageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PrivateMessage update
   */
  export type PrivateMessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivateMessage
     */
    select?: PrivateMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrivateMessage
     */
    omit?: PrivateMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrivateMessageInclude<ExtArgs> | null
    /**
     * The data needed to update a PrivateMessage.
     */
    data: XOR<PrivateMessageUpdateInput, PrivateMessageUncheckedUpdateInput>
    /**
     * Choose, which PrivateMessage to update.
     */
    where: PrivateMessageWhereUniqueInput
  }

  /**
   * PrivateMessage updateMany
   */
  export type PrivateMessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PrivateMessages.
     */
    data: XOR<PrivateMessageUpdateManyMutationInput, PrivateMessageUncheckedUpdateManyInput>
    /**
     * Filter which PrivateMessages to update
     */
    where?: PrivateMessageWhereInput
    /**
     * Limit how many PrivateMessages to update.
     */
    limit?: number
  }

  /**
   * PrivateMessage updateManyAndReturn
   */
  export type PrivateMessageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivateMessage
     */
    select?: PrivateMessageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PrivateMessage
     */
    omit?: PrivateMessageOmit<ExtArgs> | null
    /**
     * The data used to update PrivateMessages.
     */
    data: XOR<PrivateMessageUpdateManyMutationInput, PrivateMessageUncheckedUpdateManyInput>
    /**
     * Filter which PrivateMessages to update
     */
    where?: PrivateMessageWhereInput
    /**
     * Limit how many PrivateMessages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrivateMessageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PrivateMessage upsert
   */
  export type PrivateMessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivateMessage
     */
    select?: PrivateMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrivateMessage
     */
    omit?: PrivateMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrivateMessageInclude<ExtArgs> | null
    /**
     * The filter to search for the PrivateMessage to update in case it exists.
     */
    where: PrivateMessageWhereUniqueInput
    /**
     * In case the PrivateMessage found by the `where` argument doesn't exist, create a new PrivateMessage with this data.
     */
    create: XOR<PrivateMessageCreateInput, PrivateMessageUncheckedCreateInput>
    /**
     * In case the PrivateMessage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PrivateMessageUpdateInput, PrivateMessageUncheckedUpdateInput>
  }

  /**
   * PrivateMessage delete
   */
  export type PrivateMessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivateMessage
     */
    select?: PrivateMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrivateMessage
     */
    omit?: PrivateMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrivateMessageInclude<ExtArgs> | null
    /**
     * Filter which PrivateMessage to delete.
     */
    where: PrivateMessageWhereUniqueInput
  }

  /**
   * PrivateMessage deleteMany
   */
  export type PrivateMessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PrivateMessages to delete
     */
    where?: PrivateMessageWhereInput
    /**
     * Limit how many PrivateMessages to delete.
     */
    limit?: number
  }

  /**
   * PrivateMessage without action
   */
  export type PrivateMessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivateMessage
     */
    select?: PrivateMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrivateMessage
     */
    omit?: PrivateMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrivateMessageInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    displayName: 'displayName',
    username: 'username',
    photoUrl: 'photoUrl',
    role: 'role',
    creationDate: 'creationDate',
    lastSeenAt: 'lastSeenAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const GlobalMessageScalarFieldEnum: {
    id: 'id',
    authorId: 'authorId',
    content: 'content',
    photoUrl: 'photoUrl',
    type: 'type',
    createdAt: 'createdAt',
    deleted: 'deleted'
  };

  export type GlobalMessageScalarFieldEnum = (typeof GlobalMessageScalarFieldEnum)[keyof typeof GlobalMessageScalarFieldEnum]


  export const FriendsScalarFieldEnum: {
    userId: 'userId',
    friendId: 'friendId',
    friendsSince: 'friendsSince'
  };

  export type FriendsScalarFieldEnum = (typeof FriendsScalarFieldEnum)[keyof typeof FriendsScalarFieldEnum]


  export const FriendRequestScalarFieldEnum: {
    id: 'id',
    requestFromId: 'requestFromId',
    requestToId: 'requestToId',
    requestedAt: 'requestedAt'
  };

  export type FriendRequestScalarFieldEnum = (typeof FriendRequestScalarFieldEnum)[keyof typeof FriendRequestScalarFieldEnum]


  export const BlockListScalarFieldEnum: {
    userId: 'userId',
    blockedUserId: 'blockedUserId',
    blockedAt: 'blockedAt'
  };

  export type BlockListScalarFieldEnum = (typeof BlockListScalarFieldEnum)[keyof typeof BlockListScalarFieldEnum]


  export const GroupChatScalarFieldEnum: {
    id: 'id',
    groupName: 'groupName',
    groupPhoto: 'groupPhoto',
    createdById: 'createdById',
    createdAt: 'createdAt'
  };

  export type GroupChatScalarFieldEnum = (typeof GroupChatScalarFieldEnum)[keyof typeof GroupChatScalarFieldEnum]


  export const GroupMemberScalarFieldEnum: {
    groupId: 'groupId',
    userId: 'userId',
    isAdmin: 'isAdmin',
    joinedAt: 'joinedAt'
  };

  export type GroupMemberScalarFieldEnum = (typeof GroupMemberScalarFieldEnum)[keyof typeof GroupMemberScalarFieldEnum]


  export const GroupJoinRequestScalarFieldEnum: {
    id: 'id',
    groupId: 'groupId',
    fromUserId: 'fromUserId',
    toUserId: 'toUserId',
    requestedAt: 'requestedAt'
  };

  export type GroupJoinRequestScalarFieldEnum = (typeof GroupJoinRequestScalarFieldEnum)[keyof typeof GroupJoinRequestScalarFieldEnum]


  export const GroupMessageScalarFieldEnum: {
    id: 'id',
    groupId: 'groupId',
    authorId: 'authorId',
    content: 'content',
    photoUrl: 'photoUrl',
    type: 'type',
    createdAt: 'createdAt',
    deleted: 'deleted'
  };

  export type GroupMessageScalarFieldEnum = (typeof GroupMessageScalarFieldEnum)[keyof typeof GroupMessageScalarFieldEnum]


  export const PrivateMessageScalarFieldEnum: {
    id: 'id',
    fromUserId: 'fromUserId',
    toUserId: 'toUserId',
    content: 'content',
    photoUrl: 'photoUrl',
    type: 'type',
    createdAt: 'createdAt',
    deleted: 'deleted'
  };

  export type PrivateMessageScalarFieldEnum = (typeof PrivateMessageScalarFieldEnum)[keyof typeof PrivateMessageScalarFieldEnum]


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
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    displayName?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    photoUrl?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    creationDate?: DateTimeFilter<"User"> | Date | string
    lastSeenAt?: DateTimeFilter<"User"> | Date | string
    globalMessages?: GlobalMessageListRelationFilter
    friends?: FriendsListRelationFilter
    friendOf?: FriendsListRelationFilter
    friendRequests?: FriendRequestListRelationFilter
    receivedRequests?: FriendRequestListRelationFilter
    blocked?: BlockListListRelationFilter
    blockedBy?: BlockListListRelationFilter
    groupChatsCreated?: GroupChatListRelationFilter
    groupMembers?: GroupMemberListRelationFilter
    groupJoinRequests?: GroupJoinRequestListRelationFilter
    receivedGroupJoinRequests?: GroupJoinRequestListRelationFilter
    groupMessages?: GroupMessageListRelationFilter
    privateMessagesSent?: PrivateMessageListRelationFilter
    privateMessagesReceived?: PrivateMessageListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    displayName?: SortOrder
    username?: SortOrder
    photoUrl?: SortOrderInput | SortOrder
    role?: SortOrder
    creationDate?: SortOrder
    lastSeenAt?: SortOrder
    globalMessages?: GlobalMessageOrderByRelationAggregateInput
    friends?: FriendsOrderByRelationAggregateInput
    friendOf?: FriendsOrderByRelationAggregateInput
    friendRequests?: FriendRequestOrderByRelationAggregateInput
    receivedRequests?: FriendRequestOrderByRelationAggregateInput
    blocked?: BlockListOrderByRelationAggregateInput
    blockedBy?: BlockListOrderByRelationAggregateInput
    groupChatsCreated?: GroupChatOrderByRelationAggregateInput
    groupMembers?: GroupMemberOrderByRelationAggregateInput
    groupJoinRequests?: GroupJoinRequestOrderByRelationAggregateInput
    receivedGroupJoinRequests?: GroupJoinRequestOrderByRelationAggregateInput
    groupMessages?: GroupMessageOrderByRelationAggregateInput
    privateMessagesSent?: PrivateMessageOrderByRelationAggregateInput
    privateMessagesReceived?: PrivateMessageOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    username?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    displayName?: StringFilter<"User"> | string
    photoUrl?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    creationDate?: DateTimeFilter<"User"> | Date | string
    lastSeenAt?: DateTimeFilter<"User"> | Date | string
    globalMessages?: GlobalMessageListRelationFilter
    friends?: FriendsListRelationFilter
    friendOf?: FriendsListRelationFilter
    friendRequests?: FriendRequestListRelationFilter
    receivedRequests?: FriendRequestListRelationFilter
    blocked?: BlockListListRelationFilter
    blockedBy?: BlockListListRelationFilter
    groupChatsCreated?: GroupChatListRelationFilter
    groupMembers?: GroupMemberListRelationFilter
    groupJoinRequests?: GroupJoinRequestListRelationFilter
    receivedGroupJoinRequests?: GroupJoinRequestListRelationFilter
    groupMessages?: GroupMessageListRelationFilter
    privateMessagesSent?: PrivateMessageListRelationFilter
    privateMessagesReceived?: PrivateMessageListRelationFilter
  }, "id" | "email" | "username">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    displayName?: SortOrder
    username?: SortOrder
    photoUrl?: SortOrderInput | SortOrder
    role?: SortOrder
    creationDate?: SortOrder
    lastSeenAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    displayName?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    photoUrl?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    creationDate?: DateTimeWithAggregatesFilter<"User"> | Date | string
    lastSeenAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type GlobalMessageWhereInput = {
    AND?: GlobalMessageWhereInput | GlobalMessageWhereInput[]
    OR?: GlobalMessageWhereInput[]
    NOT?: GlobalMessageWhereInput | GlobalMessageWhereInput[]
    id?: StringFilter<"GlobalMessage"> | string
    authorId?: StringFilter<"GlobalMessage"> | string
    content?: StringNullableFilter<"GlobalMessage"> | string | null
    photoUrl?: StringNullableFilter<"GlobalMessage"> | string | null
    type?: StringNullableFilter<"GlobalMessage"> | string | null
    createdAt?: DateTimeFilter<"GlobalMessage"> | Date | string
    deleted?: BoolFilter<"GlobalMessage"> | boolean
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type GlobalMessageOrderByWithRelationInput = {
    id?: SortOrder
    authorId?: SortOrder
    content?: SortOrderInput | SortOrder
    photoUrl?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    deleted?: SortOrder
    author?: UserOrderByWithRelationInput
  }

  export type GlobalMessageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GlobalMessageWhereInput | GlobalMessageWhereInput[]
    OR?: GlobalMessageWhereInput[]
    NOT?: GlobalMessageWhereInput | GlobalMessageWhereInput[]
    authorId?: StringFilter<"GlobalMessage"> | string
    content?: StringNullableFilter<"GlobalMessage"> | string | null
    photoUrl?: StringNullableFilter<"GlobalMessage"> | string | null
    type?: StringNullableFilter<"GlobalMessage"> | string | null
    createdAt?: DateTimeFilter<"GlobalMessage"> | Date | string
    deleted?: BoolFilter<"GlobalMessage"> | boolean
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type GlobalMessageOrderByWithAggregationInput = {
    id?: SortOrder
    authorId?: SortOrder
    content?: SortOrderInput | SortOrder
    photoUrl?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    deleted?: SortOrder
    _count?: GlobalMessageCountOrderByAggregateInput
    _max?: GlobalMessageMaxOrderByAggregateInput
    _min?: GlobalMessageMinOrderByAggregateInput
  }

  export type GlobalMessageScalarWhereWithAggregatesInput = {
    AND?: GlobalMessageScalarWhereWithAggregatesInput | GlobalMessageScalarWhereWithAggregatesInput[]
    OR?: GlobalMessageScalarWhereWithAggregatesInput[]
    NOT?: GlobalMessageScalarWhereWithAggregatesInput | GlobalMessageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"GlobalMessage"> | string
    authorId?: StringWithAggregatesFilter<"GlobalMessage"> | string
    content?: StringNullableWithAggregatesFilter<"GlobalMessage"> | string | null
    photoUrl?: StringNullableWithAggregatesFilter<"GlobalMessage"> | string | null
    type?: StringNullableWithAggregatesFilter<"GlobalMessage"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"GlobalMessage"> | Date | string
    deleted?: BoolWithAggregatesFilter<"GlobalMessage"> | boolean
  }

  export type FriendsWhereInput = {
    AND?: FriendsWhereInput | FriendsWhereInput[]
    OR?: FriendsWhereInput[]
    NOT?: FriendsWhereInput | FriendsWhereInput[]
    userId?: StringFilter<"Friends"> | string
    friendId?: StringFilter<"Friends"> | string
    friendsSince?: DateTimeFilter<"Friends"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    friend?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type FriendsOrderByWithRelationInput = {
    userId?: SortOrder
    friendId?: SortOrder
    friendsSince?: SortOrder
    user?: UserOrderByWithRelationInput
    friend?: UserOrderByWithRelationInput
  }

  export type FriendsWhereUniqueInput = Prisma.AtLeast<{
    userId_friendId?: FriendsUserIdFriendIdCompoundUniqueInput
    AND?: FriendsWhereInput | FriendsWhereInput[]
    OR?: FriendsWhereInput[]
    NOT?: FriendsWhereInput | FriendsWhereInput[]
    userId?: StringFilter<"Friends"> | string
    friendId?: StringFilter<"Friends"> | string
    friendsSince?: DateTimeFilter<"Friends"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    friend?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "userId_friendId">

  export type FriendsOrderByWithAggregationInput = {
    userId?: SortOrder
    friendId?: SortOrder
    friendsSince?: SortOrder
    _count?: FriendsCountOrderByAggregateInput
    _max?: FriendsMaxOrderByAggregateInput
    _min?: FriendsMinOrderByAggregateInput
  }

  export type FriendsScalarWhereWithAggregatesInput = {
    AND?: FriendsScalarWhereWithAggregatesInput | FriendsScalarWhereWithAggregatesInput[]
    OR?: FriendsScalarWhereWithAggregatesInput[]
    NOT?: FriendsScalarWhereWithAggregatesInput | FriendsScalarWhereWithAggregatesInput[]
    userId?: StringWithAggregatesFilter<"Friends"> | string
    friendId?: StringWithAggregatesFilter<"Friends"> | string
    friendsSince?: DateTimeWithAggregatesFilter<"Friends"> | Date | string
  }

  export type FriendRequestWhereInput = {
    AND?: FriendRequestWhereInput | FriendRequestWhereInput[]
    OR?: FriendRequestWhereInput[]
    NOT?: FriendRequestWhereInput | FriendRequestWhereInput[]
    id?: StringFilter<"FriendRequest"> | string
    requestFromId?: StringFilter<"FriendRequest"> | string
    requestToId?: StringFilter<"FriendRequest"> | string
    requestedAt?: DateTimeFilter<"FriendRequest"> | Date | string
    requestFrom?: XOR<UserScalarRelationFilter, UserWhereInput>
    requestTo?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type FriendRequestOrderByWithRelationInput = {
    id?: SortOrder
    requestFromId?: SortOrder
    requestToId?: SortOrder
    requestedAt?: SortOrder
    requestFrom?: UserOrderByWithRelationInput
    requestTo?: UserOrderByWithRelationInput
  }

  export type FriendRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FriendRequestWhereInput | FriendRequestWhereInput[]
    OR?: FriendRequestWhereInput[]
    NOT?: FriendRequestWhereInput | FriendRequestWhereInput[]
    requestFromId?: StringFilter<"FriendRequest"> | string
    requestToId?: StringFilter<"FriendRequest"> | string
    requestedAt?: DateTimeFilter<"FriendRequest"> | Date | string
    requestFrom?: XOR<UserScalarRelationFilter, UserWhereInput>
    requestTo?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type FriendRequestOrderByWithAggregationInput = {
    id?: SortOrder
    requestFromId?: SortOrder
    requestToId?: SortOrder
    requestedAt?: SortOrder
    _count?: FriendRequestCountOrderByAggregateInput
    _max?: FriendRequestMaxOrderByAggregateInput
    _min?: FriendRequestMinOrderByAggregateInput
  }

  export type FriendRequestScalarWhereWithAggregatesInput = {
    AND?: FriendRequestScalarWhereWithAggregatesInput | FriendRequestScalarWhereWithAggregatesInput[]
    OR?: FriendRequestScalarWhereWithAggregatesInput[]
    NOT?: FriendRequestScalarWhereWithAggregatesInput | FriendRequestScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FriendRequest"> | string
    requestFromId?: StringWithAggregatesFilter<"FriendRequest"> | string
    requestToId?: StringWithAggregatesFilter<"FriendRequest"> | string
    requestedAt?: DateTimeWithAggregatesFilter<"FriendRequest"> | Date | string
  }

  export type BlockListWhereInput = {
    AND?: BlockListWhereInput | BlockListWhereInput[]
    OR?: BlockListWhereInput[]
    NOT?: BlockListWhereInput | BlockListWhereInput[]
    userId?: StringFilter<"BlockList"> | string
    blockedUserId?: StringFilter<"BlockList"> | string
    blockedAt?: DateTimeFilter<"BlockList"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    blockedUser?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type BlockListOrderByWithRelationInput = {
    userId?: SortOrder
    blockedUserId?: SortOrder
    blockedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    blockedUser?: UserOrderByWithRelationInput
  }

  export type BlockListWhereUniqueInput = Prisma.AtLeast<{
    userId_blockedUserId?: BlockListUserIdBlockedUserIdCompoundUniqueInput
    AND?: BlockListWhereInput | BlockListWhereInput[]
    OR?: BlockListWhereInput[]
    NOT?: BlockListWhereInput | BlockListWhereInput[]
    userId?: StringFilter<"BlockList"> | string
    blockedUserId?: StringFilter<"BlockList"> | string
    blockedAt?: DateTimeFilter<"BlockList"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    blockedUser?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "userId_blockedUserId">

  export type BlockListOrderByWithAggregationInput = {
    userId?: SortOrder
    blockedUserId?: SortOrder
    blockedAt?: SortOrder
    _count?: BlockListCountOrderByAggregateInput
    _max?: BlockListMaxOrderByAggregateInput
    _min?: BlockListMinOrderByAggregateInput
  }

  export type BlockListScalarWhereWithAggregatesInput = {
    AND?: BlockListScalarWhereWithAggregatesInput | BlockListScalarWhereWithAggregatesInput[]
    OR?: BlockListScalarWhereWithAggregatesInput[]
    NOT?: BlockListScalarWhereWithAggregatesInput | BlockListScalarWhereWithAggregatesInput[]
    userId?: StringWithAggregatesFilter<"BlockList"> | string
    blockedUserId?: StringWithAggregatesFilter<"BlockList"> | string
    blockedAt?: DateTimeWithAggregatesFilter<"BlockList"> | Date | string
  }

  export type GroupChatWhereInput = {
    AND?: GroupChatWhereInput | GroupChatWhereInput[]
    OR?: GroupChatWhereInput[]
    NOT?: GroupChatWhereInput | GroupChatWhereInput[]
    id?: StringFilter<"GroupChat"> | string
    groupName?: StringFilter<"GroupChat"> | string
    groupPhoto?: StringNullableFilter<"GroupChat"> | string | null
    createdById?: StringFilter<"GroupChat"> | string
    createdAt?: DateTimeFilter<"GroupChat"> | Date | string
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    members?: GroupMemberListRelationFilter
    messages?: GroupMessageListRelationFilter
    joinRequests?: GroupJoinRequestListRelationFilter
  }

  export type GroupChatOrderByWithRelationInput = {
    id?: SortOrder
    groupName?: SortOrder
    groupPhoto?: SortOrderInput | SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    createdBy?: UserOrderByWithRelationInput
    members?: GroupMemberOrderByRelationAggregateInput
    messages?: GroupMessageOrderByRelationAggregateInput
    joinRequests?: GroupJoinRequestOrderByRelationAggregateInput
  }

  export type GroupChatWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GroupChatWhereInput | GroupChatWhereInput[]
    OR?: GroupChatWhereInput[]
    NOT?: GroupChatWhereInput | GroupChatWhereInput[]
    groupName?: StringFilter<"GroupChat"> | string
    groupPhoto?: StringNullableFilter<"GroupChat"> | string | null
    createdById?: StringFilter<"GroupChat"> | string
    createdAt?: DateTimeFilter<"GroupChat"> | Date | string
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    members?: GroupMemberListRelationFilter
    messages?: GroupMessageListRelationFilter
    joinRequests?: GroupJoinRequestListRelationFilter
  }, "id">

  export type GroupChatOrderByWithAggregationInput = {
    id?: SortOrder
    groupName?: SortOrder
    groupPhoto?: SortOrderInput | SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    _count?: GroupChatCountOrderByAggregateInput
    _max?: GroupChatMaxOrderByAggregateInput
    _min?: GroupChatMinOrderByAggregateInput
  }

  export type GroupChatScalarWhereWithAggregatesInput = {
    AND?: GroupChatScalarWhereWithAggregatesInput | GroupChatScalarWhereWithAggregatesInput[]
    OR?: GroupChatScalarWhereWithAggregatesInput[]
    NOT?: GroupChatScalarWhereWithAggregatesInput | GroupChatScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"GroupChat"> | string
    groupName?: StringWithAggregatesFilter<"GroupChat"> | string
    groupPhoto?: StringNullableWithAggregatesFilter<"GroupChat"> | string | null
    createdById?: StringWithAggregatesFilter<"GroupChat"> | string
    createdAt?: DateTimeWithAggregatesFilter<"GroupChat"> | Date | string
  }

  export type GroupMemberWhereInput = {
    AND?: GroupMemberWhereInput | GroupMemberWhereInput[]
    OR?: GroupMemberWhereInput[]
    NOT?: GroupMemberWhereInput | GroupMemberWhereInput[]
    groupId?: StringFilter<"GroupMember"> | string
    userId?: StringFilter<"GroupMember"> | string
    isAdmin?: BoolFilter<"GroupMember"> | boolean
    joinedAt?: DateTimeFilter<"GroupMember"> | Date | string
    group?: XOR<GroupChatScalarRelationFilter, GroupChatWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type GroupMemberOrderByWithRelationInput = {
    groupId?: SortOrder
    userId?: SortOrder
    isAdmin?: SortOrder
    joinedAt?: SortOrder
    group?: GroupChatOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type GroupMemberWhereUniqueInput = Prisma.AtLeast<{
    groupId_userId?: GroupMemberGroupIdUserIdCompoundUniqueInput
    AND?: GroupMemberWhereInput | GroupMemberWhereInput[]
    OR?: GroupMemberWhereInput[]
    NOT?: GroupMemberWhereInput | GroupMemberWhereInput[]
    groupId?: StringFilter<"GroupMember"> | string
    userId?: StringFilter<"GroupMember"> | string
    isAdmin?: BoolFilter<"GroupMember"> | boolean
    joinedAt?: DateTimeFilter<"GroupMember"> | Date | string
    group?: XOR<GroupChatScalarRelationFilter, GroupChatWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "groupId_userId">

  export type GroupMemberOrderByWithAggregationInput = {
    groupId?: SortOrder
    userId?: SortOrder
    isAdmin?: SortOrder
    joinedAt?: SortOrder
    _count?: GroupMemberCountOrderByAggregateInput
    _max?: GroupMemberMaxOrderByAggregateInput
    _min?: GroupMemberMinOrderByAggregateInput
  }

  export type GroupMemberScalarWhereWithAggregatesInput = {
    AND?: GroupMemberScalarWhereWithAggregatesInput | GroupMemberScalarWhereWithAggregatesInput[]
    OR?: GroupMemberScalarWhereWithAggregatesInput[]
    NOT?: GroupMemberScalarWhereWithAggregatesInput | GroupMemberScalarWhereWithAggregatesInput[]
    groupId?: StringWithAggregatesFilter<"GroupMember"> | string
    userId?: StringWithAggregatesFilter<"GroupMember"> | string
    isAdmin?: BoolWithAggregatesFilter<"GroupMember"> | boolean
    joinedAt?: DateTimeWithAggregatesFilter<"GroupMember"> | Date | string
  }

  export type GroupJoinRequestWhereInput = {
    AND?: GroupJoinRequestWhereInput | GroupJoinRequestWhereInput[]
    OR?: GroupJoinRequestWhereInput[]
    NOT?: GroupJoinRequestWhereInput | GroupJoinRequestWhereInput[]
    id?: StringFilter<"GroupJoinRequest"> | string
    groupId?: StringFilter<"GroupJoinRequest"> | string
    fromUserId?: StringFilter<"GroupJoinRequest"> | string
    toUserId?: StringFilter<"GroupJoinRequest"> | string
    requestedAt?: DateTimeFilter<"GroupJoinRequest"> | Date | string
    group?: XOR<GroupChatScalarRelationFilter, GroupChatWhereInput>
    fromUser?: XOR<UserScalarRelationFilter, UserWhereInput>
    toUser?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type GroupJoinRequestOrderByWithRelationInput = {
    id?: SortOrder
    groupId?: SortOrder
    fromUserId?: SortOrder
    toUserId?: SortOrder
    requestedAt?: SortOrder
    group?: GroupChatOrderByWithRelationInput
    fromUser?: UserOrderByWithRelationInput
    toUser?: UserOrderByWithRelationInput
  }

  export type GroupJoinRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GroupJoinRequestWhereInput | GroupJoinRequestWhereInput[]
    OR?: GroupJoinRequestWhereInput[]
    NOT?: GroupJoinRequestWhereInput | GroupJoinRequestWhereInput[]
    groupId?: StringFilter<"GroupJoinRequest"> | string
    fromUserId?: StringFilter<"GroupJoinRequest"> | string
    toUserId?: StringFilter<"GroupJoinRequest"> | string
    requestedAt?: DateTimeFilter<"GroupJoinRequest"> | Date | string
    group?: XOR<GroupChatScalarRelationFilter, GroupChatWhereInput>
    fromUser?: XOR<UserScalarRelationFilter, UserWhereInput>
    toUser?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type GroupJoinRequestOrderByWithAggregationInput = {
    id?: SortOrder
    groupId?: SortOrder
    fromUserId?: SortOrder
    toUserId?: SortOrder
    requestedAt?: SortOrder
    _count?: GroupJoinRequestCountOrderByAggregateInput
    _max?: GroupJoinRequestMaxOrderByAggregateInput
    _min?: GroupJoinRequestMinOrderByAggregateInput
  }

  export type GroupJoinRequestScalarWhereWithAggregatesInput = {
    AND?: GroupJoinRequestScalarWhereWithAggregatesInput | GroupJoinRequestScalarWhereWithAggregatesInput[]
    OR?: GroupJoinRequestScalarWhereWithAggregatesInput[]
    NOT?: GroupJoinRequestScalarWhereWithAggregatesInput | GroupJoinRequestScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"GroupJoinRequest"> | string
    groupId?: StringWithAggregatesFilter<"GroupJoinRequest"> | string
    fromUserId?: StringWithAggregatesFilter<"GroupJoinRequest"> | string
    toUserId?: StringWithAggregatesFilter<"GroupJoinRequest"> | string
    requestedAt?: DateTimeWithAggregatesFilter<"GroupJoinRequest"> | Date | string
  }

  export type GroupMessageWhereInput = {
    AND?: GroupMessageWhereInput | GroupMessageWhereInput[]
    OR?: GroupMessageWhereInput[]
    NOT?: GroupMessageWhereInput | GroupMessageWhereInput[]
    id?: StringFilter<"GroupMessage"> | string
    groupId?: StringFilter<"GroupMessage"> | string
    authorId?: StringFilter<"GroupMessage"> | string
    content?: StringNullableFilter<"GroupMessage"> | string | null
    photoUrl?: StringNullableFilter<"GroupMessage"> | string | null
    type?: StringNullableFilter<"GroupMessage"> | string | null
    createdAt?: DateTimeFilter<"GroupMessage"> | Date | string
    deleted?: BoolFilter<"GroupMessage"> | boolean
    group?: XOR<GroupChatScalarRelationFilter, GroupChatWhereInput>
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type GroupMessageOrderByWithRelationInput = {
    id?: SortOrder
    groupId?: SortOrder
    authorId?: SortOrder
    content?: SortOrderInput | SortOrder
    photoUrl?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    deleted?: SortOrder
    group?: GroupChatOrderByWithRelationInput
    author?: UserOrderByWithRelationInput
  }

  export type GroupMessageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GroupMessageWhereInput | GroupMessageWhereInput[]
    OR?: GroupMessageWhereInput[]
    NOT?: GroupMessageWhereInput | GroupMessageWhereInput[]
    groupId?: StringFilter<"GroupMessage"> | string
    authorId?: StringFilter<"GroupMessage"> | string
    content?: StringNullableFilter<"GroupMessage"> | string | null
    photoUrl?: StringNullableFilter<"GroupMessage"> | string | null
    type?: StringNullableFilter<"GroupMessage"> | string | null
    createdAt?: DateTimeFilter<"GroupMessage"> | Date | string
    deleted?: BoolFilter<"GroupMessage"> | boolean
    group?: XOR<GroupChatScalarRelationFilter, GroupChatWhereInput>
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type GroupMessageOrderByWithAggregationInput = {
    id?: SortOrder
    groupId?: SortOrder
    authorId?: SortOrder
    content?: SortOrderInput | SortOrder
    photoUrl?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    deleted?: SortOrder
    _count?: GroupMessageCountOrderByAggregateInput
    _max?: GroupMessageMaxOrderByAggregateInput
    _min?: GroupMessageMinOrderByAggregateInput
  }

  export type GroupMessageScalarWhereWithAggregatesInput = {
    AND?: GroupMessageScalarWhereWithAggregatesInput | GroupMessageScalarWhereWithAggregatesInput[]
    OR?: GroupMessageScalarWhereWithAggregatesInput[]
    NOT?: GroupMessageScalarWhereWithAggregatesInput | GroupMessageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"GroupMessage"> | string
    groupId?: StringWithAggregatesFilter<"GroupMessage"> | string
    authorId?: StringWithAggregatesFilter<"GroupMessage"> | string
    content?: StringNullableWithAggregatesFilter<"GroupMessage"> | string | null
    photoUrl?: StringNullableWithAggregatesFilter<"GroupMessage"> | string | null
    type?: StringNullableWithAggregatesFilter<"GroupMessage"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"GroupMessage"> | Date | string
    deleted?: BoolWithAggregatesFilter<"GroupMessage"> | boolean
  }

  export type PrivateMessageWhereInput = {
    AND?: PrivateMessageWhereInput | PrivateMessageWhereInput[]
    OR?: PrivateMessageWhereInput[]
    NOT?: PrivateMessageWhereInput | PrivateMessageWhereInput[]
    id?: StringFilter<"PrivateMessage"> | string
    fromUserId?: StringFilter<"PrivateMessage"> | string
    toUserId?: StringFilter<"PrivateMessage"> | string
    content?: StringNullableFilter<"PrivateMessage"> | string | null
    photoUrl?: StringNullableFilter<"PrivateMessage"> | string | null
    type?: StringNullableFilter<"PrivateMessage"> | string | null
    createdAt?: DateTimeFilter<"PrivateMessage"> | Date | string
    deleted?: BoolFilter<"PrivateMessage"> | boolean
    fromUser?: XOR<UserScalarRelationFilter, UserWhereInput>
    toUser?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PrivateMessageOrderByWithRelationInput = {
    id?: SortOrder
    fromUserId?: SortOrder
    toUserId?: SortOrder
    content?: SortOrderInput | SortOrder
    photoUrl?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    deleted?: SortOrder
    fromUser?: UserOrderByWithRelationInput
    toUser?: UserOrderByWithRelationInput
  }

  export type PrivateMessageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PrivateMessageWhereInput | PrivateMessageWhereInput[]
    OR?: PrivateMessageWhereInput[]
    NOT?: PrivateMessageWhereInput | PrivateMessageWhereInput[]
    fromUserId?: StringFilter<"PrivateMessage"> | string
    toUserId?: StringFilter<"PrivateMessage"> | string
    content?: StringNullableFilter<"PrivateMessage"> | string | null
    photoUrl?: StringNullableFilter<"PrivateMessage"> | string | null
    type?: StringNullableFilter<"PrivateMessage"> | string | null
    createdAt?: DateTimeFilter<"PrivateMessage"> | Date | string
    deleted?: BoolFilter<"PrivateMessage"> | boolean
    fromUser?: XOR<UserScalarRelationFilter, UserWhereInput>
    toUser?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type PrivateMessageOrderByWithAggregationInput = {
    id?: SortOrder
    fromUserId?: SortOrder
    toUserId?: SortOrder
    content?: SortOrderInput | SortOrder
    photoUrl?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    deleted?: SortOrder
    _count?: PrivateMessageCountOrderByAggregateInput
    _max?: PrivateMessageMaxOrderByAggregateInput
    _min?: PrivateMessageMinOrderByAggregateInput
  }

  export type PrivateMessageScalarWhereWithAggregatesInput = {
    AND?: PrivateMessageScalarWhereWithAggregatesInput | PrivateMessageScalarWhereWithAggregatesInput[]
    OR?: PrivateMessageScalarWhereWithAggregatesInput[]
    NOT?: PrivateMessageScalarWhereWithAggregatesInput | PrivateMessageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PrivateMessage"> | string
    fromUserId?: StringWithAggregatesFilter<"PrivateMessage"> | string
    toUserId?: StringWithAggregatesFilter<"PrivateMessage"> | string
    content?: StringNullableWithAggregatesFilter<"PrivateMessage"> | string | null
    photoUrl?: StringNullableWithAggregatesFilter<"PrivateMessage"> | string | null
    type?: StringNullableWithAggregatesFilter<"PrivateMessage"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"PrivateMessage"> | Date | string
    deleted?: BoolWithAggregatesFilter<"PrivateMessage"> | boolean
  }

  export type UserCreateInput = {
    id?: string
    email: string
    password: string
    displayName: string
    username: string
    photoUrl?: string | null
    role?: $Enums.Role
    creationDate?: Date | string
    lastSeenAt?: Date | string
    globalMessages?: GlobalMessageCreateNestedManyWithoutAuthorInput
    friends?: FriendsCreateNestedManyWithoutUserInput
    friendOf?: FriendsCreateNestedManyWithoutFriendInput
    friendRequests?: FriendRequestCreateNestedManyWithoutRequestFromInput
    receivedRequests?: FriendRequestCreateNestedManyWithoutRequestToInput
    blocked?: BlockListCreateNestedManyWithoutUserInput
    blockedBy?: BlockListCreateNestedManyWithoutBlockedUserInput
    groupChatsCreated?: GroupChatCreateNestedManyWithoutCreatedByInput
    groupMembers?: GroupMemberCreateNestedManyWithoutUserInput
    groupJoinRequests?: GroupJoinRequestCreateNestedManyWithoutFromUserInput
    receivedGroupJoinRequests?: GroupJoinRequestCreateNestedManyWithoutToUserInput
    groupMessages?: GroupMessageCreateNestedManyWithoutAuthorInput
    privateMessagesSent?: PrivateMessageCreateNestedManyWithoutFromUserInput
    privateMessagesReceived?: PrivateMessageCreateNestedManyWithoutToUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    displayName: string
    username: string
    photoUrl?: string | null
    role?: $Enums.Role
    creationDate?: Date | string
    lastSeenAt?: Date | string
    globalMessages?: GlobalMessageUncheckedCreateNestedManyWithoutAuthorInput
    friends?: FriendsUncheckedCreateNestedManyWithoutUserInput
    friendOf?: FriendsUncheckedCreateNestedManyWithoutFriendInput
    friendRequests?: FriendRequestUncheckedCreateNestedManyWithoutRequestFromInput
    receivedRequests?: FriendRequestUncheckedCreateNestedManyWithoutRequestToInput
    blocked?: BlockListUncheckedCreateNestedManyWithoutUserInput
    blockedBy?: BlockListUncheckedCreateNestedManyWithoutBlockedUserInput
    groupChatsCreated?: GroupChatUncheckedCreateNestedManyWithoutCreatedByInput
    groupMembers?: GroupMemberUncheckedCreateNestedManyWithoutUserInput
    groupJoinRequests?: GroupJoinRequestUncheckedCreateNestedManyWithoutFromUserInput
    receivedGroupJoinRequests?: GroupJoinRequestUncheckedCreateNestedManyWithoutToUserInput
    groupMessages?: GroupMessageUncheckedCreateNestedManyWithoutAuthorInput
    privateMessagesSent?: PrivateMessageUncheckedCreateNestedManyWithoutFromUserInput
    privateMessagesReceived?: PrivateMessageUncheckedCreateNestedManyWithoutToUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    creationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSeenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    globalMessages?: GlobalMessageUpdateManyWithoutAuthorNestedInput
    friends?: FriendsUpdateManyWithoutUserNestedInput
    friendOf?: FriendsUpdateManyWithoutFriendNestedInput
    friendRequests?: FriendRequestUpdateManyWithoutRequestFromNestedInput
    receivedRequests?: FriendRequestUpdateManyWithoutRequestToNestedInput
    blocked?: BlockListUpdateManyWithoutUserNestedInput
    blockedBy?: BlockListUpdateManyWithoutBlockedUserNestedInput
    groupChatsCreated?: GroupChatUpdateManyWithoutCreatedByNestedInput
    groupMembers?: GroupMemberUpdateManyWithoutUserNestedInput
    groupJoinRequests?: GroupJoinRequestUpdateManyWithoutFromUserNestedInput
    receivedGroupJoinRequests?: GroupJoinRequestUpdateManyWithoutToUserNestedInput
    groupMessages?: GroupMessageUpdateManyWithoutAuthorNestedInput
    privateMessagesSent?: PrivateMessageUpdateManyWithoutFromUserNestedInput
    privateMessagesReceived?: PrivateMessageUpdateManyWithoutToUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    creationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSeenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    globalMessages?: GlobalMessageUncheckedUpdateManyWithoutAuthorNestedInput
    friends?: FriendsUncheckedUpdateManyWithoutUserNestedInput
    friendOf?: FriendsUncheckedUpdateManyWithoutFriendNestedInput
    friendRequests?: FriendRequestUncheckedUpdateManyWithoutRequestFromNestedInput
    receivedRequests?: FriendRequestUncheckedUpdateManyWithoutRequestToNestedInput
    blocked?: BlockListUncheckedUpdateManyWithoutUserNestedInput
    blockedBy?: BlockListUncheckedUpdateManyWithoutBlockedUserNestedInput
    groupChatsCreated?: GroupChatUncheckedUpdateManyWithoutCreatedByNestedInput
    groupMembers?: GroupMemberUncheckedUpdateManyWithoutUserNestedInput
    groupJoinRequests?: GroupJoinRequestUncheckedUpdateManyWithoutFromUserNestedInput
    receivedGroupJoinRequests?: GroupJoinRequestUncheckedUpdateManyWithoutToUserNestedInput
    groupMessages?: GroupMessageUncheckedUpdateManyWithoutAuthorNestedInput
    privateMessagesSent?: PrivateMessageUncheckedUpdateManyWithoutFromUserNestedInput
    privateMessagesReceived?: PrivateMessageUncheckedUpdateManyWithoutToUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    password: string
    displayName: string
    username: string
    photoUrl?: string | null
    role?: $Enums.Role
    creationDate?: Date | string
    lastSeenAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    creationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSeenAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    creationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSeenAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GlobalMessageCreateInput = {
    id?: string
    content?: string | null
    photoUrl?: string | null
    type?: string | null
    createdAt?: Date | string
    deleted?: boolean
    author: UserCreateNestedOneWithoutGlobalMessagesInput
  }

  export type GlobalMessageUncheckedCreateInput = {
    id?: string
    authorId: string
    content?: string | null
    photoUrl?: string | null
    type?: string | null
    createdAt?: Date | string
    deleted?: boolean
  }

  export type GlobalMessageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
    author?: UserUpdateOneRequiredWithoutGlobalMessagesNestedInput
  }

  export type GlobalMessageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type GlobalMessageCreateManyInput = {
    id?: string
    authorId: string
    content?: string | null
    photoUrl?: string | null
    type?: string | null
    createdAt?: Date | string
    deleted?: boolean
  }

  export type GlobalMessageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type GlobalMessageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type FriendsCreateInput = {
    friendsSince?: Date | string
    user: UserCreateNestedOneWithoutFriendsInput
    friend: UserCreateNestedOneWithoutFriendOfInput
  }

  export type FriendsUncheckedCreateInput = {
    userId: string
    friendId: string
    friendsSince?: Date | string
  }

  export type FriendsUpdateInput = {
    friendsSince?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFriendsNestedInput
    friend?: UserUpdateOneRequiredWithoutFriendOfNestedInput
  }

  export type FriendsUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    friendId?: StringFieldUpdateOperationsInput | string
    friendsSince?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FriendsCreateManyInput = {
    userId: string
    friendId: string
    friendsSince?: Date | string
  }

  export type FriendsUpdateManyMutationInput = {
    friendsSince?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FriendsUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    friendId?: StringFieldUpdateOperationsInput | string
    friendsSince?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FriendRequestCreateInput = {
    id?: string
    requestedAt?: Date | string
    requestFrom: UserCreateNestedOneWithoutFriendRequestsInput
    requestTo: UserCreateNestedOneWithoutReceivedRequestsInput
  }

  export type FriendRequestUncheckedCreateInput = {
    id?: string
    requestFromId: string
    requestToId: string
    requestedAt?: Date | string
  }

  export type FriendRequestUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requestFrom?: UserUpdateOneRequiredWithoutFriendRequestsNestedInput
    requestTo?: UserUpdateOneRequiredWithoutReceivedRequestsNestedInput
  }

  export type FriendRequestUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestFromId?: StringFieldUpdateOperationsInput | string
    requestToId?: StringFieldUpdateOperationsInput | string
    requestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FriendRequestCreateManyInput = {
    id?: string
    requestFromId: string
    requestToId: string
    requestedAt?: Date | string
  }

  export type FriendRequestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FriendRequestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestFromId?: StringFieldUpdateOperationsInput | string
    requestToId?: StringFieldUpdateOperationsInput | string
    requestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlockListCreateInput = {
    blockedAt?: Date | string
    user: UserCreateNestedOneWithoutBlockedInput
    blockedUser: UserCreateNestedOneWithoutBlockedByInput
  }

  export type BlockListUncheckedCreateInput = {
    userId: string
    blockedUserId: string
    blockedAt?: Date | string
  }

  export type BlockListUpdateInput = {
    blockedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBlockedNestedInput
    blockedUser?: UserUpdateOneRequiredWithoutBlockedByNestedInput
  }

  export type BlockListUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    blockedUserId?: StringFieldUpdateOperationsInput | string
    blockedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlockListCreateManyInput = {
    userId: string
    blockedUserId: string
    blockedAt?: Date | string
  }

  export type BlockListUpdateManyMutationInput = {
    blockedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlockListUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    blockedUserId?: StringFieldUpdateOperationsInput | string
    blockedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupChatCreateInput = {
    id?: string
    groupName: string
    groupPhoto?: string | null
    createdAt?: Date | string
    createdBy: UserCreateNestedOneWithoutGroupChatsCreatedInput
    members?: GroupMemberCreateNestedManyWithoutGroupInput
    messages?: GroupMessageCreateNestedManyWithoutGroupInput
    joinRequests?: GroupJoinRequestCreateNestedManyWithoutGroupInput
  }

  export type GroupChatUncheckedCreateInput = {
    id?: string
    groupName: string
    groupPhoto?: string | null
    createdById: string
    createdAt?: Date | string
    members?: GroupMemberUncheckedCreateNestedManyWithoutGroupInput
    messages?: GroupMessageUncheckedCreateNestedManyWithoutGroupInput
    joinRequests?: GroupJoinRequestUncheckedCreateNestedManyWithoutGroupInput
  }

  export type GroupChatUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupName?: StringFieldUpdateOperationsInput | string
    groupPhoto?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutGroupChatsCreatedNestedInput
    members?: GroupMemberUpdateManyWithoutGroupNestedInput
    messages?: GroupMessageUpdateManyWithoutGroupNestedInput
    joinRequests?: GroupJoinRequestUpdateManyWithoutGroupNestedInput
  }

  export type GroupChatUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupName?: StringFieldUpdateOperationsInput | string
    groupPhoto?: NullableStringFieldUpdateOperationsInput | string | null
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: GroupMemberUncheckedUpdateManyWithoutGroupNestedInput
    messages?: GroupMessageUncheckedUpdateManyWithoutGroupNestedInput
    joinRequests?: GroupJoinRequestUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type GroupChatCreateManyInput = {
    id?: string
    groupName: string
    groupPhoto?: string | null
    createdById: string
    createdAt?: Date | string
  }

  export type GroupChatUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupName?: StringFieldUpdateOperationsInput | string
    groupPhoto?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupChatUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupName?: StringFieldUpdateOperationsInput | string
    groupPhoto?: NullableStringFieldUpdateOperationsInput | string | null
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupMemberCreateInput = {
    isAdmin?: boolean
    joinedAt?: Date | string
    group: GroupChatCreateNestedOneWithoutMembersInput
    user: UserCreateNestedOneWithoutGroupMembersInput
  }

  export type GroupMemberUncheckedCreateInput = {
    groupId: string
    userId: string
    isAdmin?: boolean
    joinedAt?: Date | string
  }

  export type GroupMemberUpdateInput = {
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    group?: GroupChatUpdateOneRequiredWithoutMembersNestedInput
    user?: UserUpdateOneRequiredWithoutGroupMembersNestedInput
  }

  export type GroupMemberUncheckedUpdateInput = {
    groupId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupMemberCreateManyInput = {
    groupId: string
    userId: string
    isAdmin?: boolean
    joinedAt?: Date | string
  }

  export type GroupMemberUpdateManyMutationInput = {
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupMemberUncheckedUpdateManyInput = {
    groupId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupJoinRequestCreateInput = {
    id?: string
    requestedAt?: Date | string
    group: GroupChatCreateNestedOneWithoutJoinRequestsInput
    fromUser: UserCreateNestedOneWithoutGroupJoinRequestsInput
    toUser: UserCreateNestedOneWithoutReceivedGroupJoinRequestsInput
  }

  export type GroupJoinRequestUncheckedCreateInput = {
    id?: string
    groupId: string
    fromUserId: string
    toUserId: string
    requestedAt?: Date | string
  }

  export type GroupJoinRequestUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    group?: GroupChatUpdateOneRequiredWithoutJoinRequestsNestedInput
    fromUser?: UserUpdateOneRequiredWithoutGroupJoinRequestsNestedInput
    toUser?: UserUpdateOneRequiredWithoutReceivedGroupJoinRequestsNestedInput
  }

  export type GroupJoinRequestUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupId?: StringFieldUpdateOperationsInput | string
    fromUserId?: StringFieldUpdateOperationsInput | string
    toUserId?: StringFieldUpdateOperationsInput | string
    requestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupJoinRequestCreateManyInput = {
    id?: string
    groupId: string
    fromUserId: string
    toUserId: string
    requestedAt?: Date | string
  }

  export type GroupJoinRequestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupJoinRequestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupId?: StringFieldUpdateOperationsInput | string
    fromUserId?: StringFieldUpdateOperationsInput | string
    toUserId?: StringFieldUpdateOperationsInput | string
    requestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupMessageCreateInput = {
    id?: string
    content?: string | null
    photoUrl?: string | null
    type?: string | null
    createdAt?: Date | string
    deleted?: boolean
    group: GroupChatCreateNestedOneWithoutMessagesInput
    author: UserCreateNestedOneWithoutGroupMessagesInput
  }

  export type GroupMessageUncheckedCreateInput = {
    id?: string
    groupId: string
    authorId: string
    content?: string | null
    photoUrl?: string | null
    type?: string | null
    createdAt?: Date | string
    deleted?: boolean
  }

  export type GroupMessageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
    group?: GroupChatUpdateOneRequiredWithoutMessagesNestedInput
    author?: UserUpdateOneRequiredWithoutGroupMessagesNestedInput
  }

  export type GroupMessageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupId?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type GroupMessageCreateManyInput = {
    id?: string
    groupId: string
    authorId: string
    content?: string | null
    photoUrl?: string | null
    type?: string | null
    createdAt?: Date | string
    deleted?: boolean
  }

  export type GroupMessageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type GroupMessageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupId?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PrivateMessageCreateInput = {
    id?: string
    content?: string | null
    photoUrl?: string | null
    type?: string | null
    createdAt?: Date | string
    deleted?: boolean
    fromUser: UserCreateNestedOneWithoutPrivateMessagesSentInput
    toUser: UserCreateNestedOneWithoutPrivateMessagesReceivedInput
  }

  export type PrivateMessageUncheckedCreateInput = {
    id?: string
    fromUserId: string
    toUserId: string
    content?: string | null
    photoUrl?: string | null
    type?: string | null
    createdAt?: Date | string
    deleted?: boolean
  }

  export type PrivateMessageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
    fromUser?: UserUpdateOneRequiredWithoutPrivateMessagesSentNestedInput
    toUser?: UserUpdateOneRequiredWithoutPrivateMessagesReceivedNestedInput
  }

  export type PrivateMessageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromUserId?: StringFieldUpdateOperationsInput | string
    toUserId?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PrivateMessageCreateManyInput = {
    id?: string
    fromUserId: string
    toUserId: string
    content?: string | null
    photoUrl?: string | null
    type?: string | null
    createdAt?: Date | string
    deleted?: boolean
  }

  export type PrivateMessageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PrivateMessageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromUserId?: StringFieldUpdateOperationsInput | string
    toUserId?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
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

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type GlobalMessageListRelationFilter = {
    every?: GlobalMessageWhereInput
    some?: GlobalMessageWhereInput
    none?: GlobalMessageWhereInput
  }

  export type FriendsListRelationFilter = {
    every?: FriendsWhereInput
    some?: FriendsWhereInput
    none?: FriendsWhereInput
  }

  export type FriendRequestListRelationFilter = {
    every?: FriendRequestWhereInput
    some?: FriendRequestWhereInput
    none?: FriendRequestWhereInput
  }

  export type BlockListListRelationFilter = {
    every?: BlockListWhereInput
    some?: BlockListWhereInput
    none?: BlockListWhereInput
  }

  export type GroupChatListRelationFilter = {
    every?: GroupChatWhereInput
    some?: GroupChatWhereInput
    none?: GroupChatWhereInput
  }

  export type GroupMemberListRelationFilter = {
    every?: GroupMemberWhereInput
    some?: GroupMemberWhereInput
    none?: GroupMemberWhereInput
  }

  export type GroupJoinRequestListRelationFilter = {
    every?: GroupJoinRequestWhereInput
    some?: GroupJoinRequestWhereInput
    none?: GroupJoinRequestWhereInput
  }

  export type GroupMessageListRelationFilter = {
    every?: GroupMessageWhereInput
    some?: GroupMessageWhereInput
    none?: GroupMessageWhereInput
  }

  export type PrivateMessageListRelationFilter = {
    every?: PrivateMessageWhereInput
    some?: PrivateMessageWhereInput
    none?: PrivateMessageWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type GlobalMessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FriendsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FriendRequestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BlockListOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GroupChatOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GroupMemberOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GroupJoinRequestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GroupMessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PrivateMessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    displayName?: SortOrder
    username?: SortOrder
    photoUrl?: SortOrder
    role?: SortOrder
    creationDate?: SortOrder
    lastSeenAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    displayName?: SortOrder
    username?: SortOrder
    photoUrl?: SortOrder
    role?: SortOrder
    creationDate?: SortOrder
    lastSeenAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    displayName?: SortOrder
    username?: SortOrder
    photoUrl?: SortOrder
    role?: SortOrder
    creationDate?: SortOrder
    lastSeenAt?: SortOrder
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

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type GlobalMessageCountOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
    content?: SortOrder
    photoUrl?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    deleted?: SortOrder
  }

  export type GlobalMessageMaxOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
    content?: SortOrder
    photoUrl?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    deleted?: SortOrder
  }

  export type GlobalMessageMinOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
    content?: SortOrder
    photoUrl?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    deleted?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type FriendsUserIdFriendIdCompoundUniqueInput = {
    userId: string
    friendId: string
  }

  export type FriendsCountOrderByAggregateInput = {
    userId?: SortOrder
    friendId?: SortOrder
    friendsSince?: SortOrder
  }

  export type FriendsMaxOrderByAggregateInput = {
    userId?: SortOrder
    friendId?: SortOrder
    friendsSince?: SortOrder
  }

  export type FriendsMinOrderByAggregateInput = {
    userId?: SortOrder
    friendId?: SortOrder
    friendsSince?: SortOrder
  }

  export type FriendRequestCountOrderByAggregateInput = {
    id?: SortOrder
    requestFromId?: SortOrder
    requestToId?: SortOrder
    requestedAt?: SortOrder
  }

  export type FriendRequestMaxOrderByAggregateInput = {
    id?: SortOrder
    requestFromId?: SortOrder
    requestToId?: SortOrder
    requestedAt?: SortOrder
  }

  export type FriendRequestMinOrderByAggregateInput = {
    id?: SortOrder
    requestFromId?: SortOrder
    requestToId?: SortOrder
    requestedAt?: SortOrder
  }

  export type BlockListUserIdBlockedUserIdCompoundUniqueInput = {
    userId: string
    blockedUserId: string
  }

  export type BlockListCountOrderByAggregateInput = {
    userId?: SortOrder
    blockedUserId?: SortOrder
    blockedAt?: SortOrder
  }

  export type BlockListMaxOrderByAggregateInput = {
    userId?: SortOrder
    blockedUserId?: SortOrder
    blockedAt?: SortOrder
  }

  export type BlockListMinOrderByAggregateInput = {
    userId?: SortOrder
    blockedUserId?: SortOrder
    blockedAt?: SortOrder
  }

  export type GroupChatCountOrderByAggregateInput = {
    id?: SortOrder
    groupName?: SortOrder
    groupPhoto?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
  }

  export type GroupChatMaxOrderByAggregateInput = {
    id?: SortOrder
    groupName?: SortOrder
    groupPhoto?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
  }

  export type GroupChatMinOrderByAggregateInput = {
    id?: SortOrder
    groupName?: SortOrder
    groupPhoto?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
  }

  export type GroupChatScalarRelationFilter = {
    is?: GroupChatWhereInput
    isNot?: GroupChatWhereInput
  }

  export type GroupMemberGroupIdUserIdCompoundUniqueInput = {
    groupId: string
    userId: string
  }

  export type GroupMemberCountOrderByAggregateInput = {
    groupId?: SortOrder
    userId?: SortOrder
    isAdmin?: SortOrder
    joinedAt?: SortOrder
  }

  export type GroupMemberMaxOrderByAggregateInput = {
    groupId?: SortOrder
    userId?: SortOrder
    isAdmin?: SortOrder
    joinedAt?: SortOrder
  }

  export type GroupMemberMinOrderByAggregateInput = {
    groupId?: SortOrder
    userId?: SortOrder
    isAdmin?: SortOrder
    joinedAt?: SortOrder
  }

  export type GroupJoinRequestCountOrderByAggregateInput = {
    id?: SortOrder
    groupId?: SortOrder
    fromUserId?: SortOrder
    toUserId?: SortOrder
    requestedAt?: SortOrder
  }

  export type GroupJoinRequestMaxOrderByAggregateInput = {
    id?: SortOrder
    groupId?: SortOrder
    fromUserId?: SortOrder
    toUserId?: SortOrder
    requestedAt?: SortOrder
  }

  export type GroupJoinRequestMinOrderByAggregateInput = {
    id?: SortOrder
    groupId?: SortOrder
    fromUserId?: SortOrder
    toUserId?: SortOrder
    requestedAt?: SortOrder
  }

  export type GroupMessageCountOrderByAggregateInput = {
    id?: SortOrder
    groupId?: SortOrder
    authorId?: SortOrder
    content?: SortOrder
    photoUrl?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    deleted?: SortOrder
  }

  export type GroupMessageMaxOrderByAggregateInput = {
    id?: SortOrder
    groupId?: SortOrder
    authorId?: SortOrder
    content?: SortOrder
    photoUrl?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    deleted?: SortOrder
  }

  export type GroupMessageMinOrderByAggregateInput = {
    id?: SortOrder
    groupId?: SortOrder
    authorId?: SortOrder
    content?: SortOrder
    photoUrl?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    deleted?: SortOrder
  }

  export type PrivateMessageCountOrderByAggregateInput = {
    id?: SortOrder
    fromUserId?: SortOrder
    toUserId?: SortOrder
    content?: SortOrder
    photoUrl?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    deleted?: SortOrder
  }

  export type PrivateMessageMaxOrderByAggregateInput = {
    id?: SortOrder
    fromUserId?: SortOrder
    toUserId?: SortOrder
    content?: SortOrder
    photoUrl?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    deleted?: SortOrder
  }

  export type PrivateMessageMinOrderByAggregateInput = {
    id?: SortOrder
    fromUserId?: SortOrder
    toUserId?: SortOrder
    content?: SortOrder
    photoUrl?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    deleted?: SortOrder
  }

  export type GlobalMessageCreateNestedManyWithoutAuthorInput = {
    create?: XOR<GlobalMessageCreateWithoutAuthorInput, GlobalMessageUncheckedCreateWithoutAuthorInput> | GlobalMessageCreateWithoutAuthorInput[] | GlobalMessageUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: GlobalMessageCreateOrConnectWithoutAuthorInput | GlobalMessageCreateOrConnectWithoutAuthorInput[]
    createMany?: GlobalMessageCreateManyAuthorInputEnvelope
    connect?: GlobalMessageWhereUniqueInput | GlobalMessageWhereUniqueInput[]
  }

  export type FriendsCreateNestedManyWithoutUserInput = {
    create?: XOR<FriendsCreateWithoutUserInput, FriendsUncheckedCreateWithoutUserInput> | FriendsCreateWithoutUserInput[] | FriendsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FriendsCreateOrConnectWithoutUserInput | FriendsCreateOrConnectWithoutUserInput[]
    createMany?: FriendsCreateManyUserInputEnvelope
    connect?: FriendsWhereUniqueInput | FriendsWhereUniqueInput[]
  }

  export type FriendsCreateNestedManyWithoutFriendInput = {
    create?: XOR<FriendsCreateWithoutFriendInput, FriendsUncheckedCreateWithoutFriendInput> | FriendsCreateWithoutFriendInput[] | FriendsUncheckedCreateWithoutFriendInput[]
    connectOrCreate?: FriendsCreateOrConnectWithoutFriendInput | FriendsCreateOrConnectWithoutFriendInput[]
    createMany?: FriendsCreateManyFriendInputEnvelope
    connect?: FriendsWhereUniqueInput | FriendsWhereUniqueInput[]
  }

  export type FriendRequestCreateNestedManyWithoutRequestFromInput = {
    create?: XOR<FriendRequestCreateWithoutRequestFromInput, FriendRequestUncheckedCreateWithoutRequestFromInput> | FriendRequestCreateWithoutRequestFromInput[] | FriendRequestUncheckedCreateWithoutRequestFromInput[]
    connectOrCreate?: FriendRequestCreateOrConnectWithoutRequestFromInput | FriendRequestCreateOrConnectWithoutRequestFromInput[]
    createMany?: FriendRequestCreateManyRequestFromInputEnvelope
    connect?: FriendRequestWhereUniqueInput | FriendRequestWhereUniqueInput[]
  }

  export type FriendRequestCreateNestedManyWithoutRequestToInput = {
    create?: XOR<FriendRequestCreateWithoutRequestToInput, FriendRequestUncheckedCreateWithoutRequestToInput> | FriendRequestCreateWithoutRequestToInput[] | FriendRequestUncheckedCreateWithoutRequestToInput[]
    connectOrCreate?: FriendRequestCreateOrConnectWithoutRequestToInput | FriendRequestCreateOrConnectWithoutRequestToInput[]
    createMany?: FriendRequestCreateManyRequestToInputEnvelope
    connect?: FriendRequestWhereUniqueInput | FriendRequestWhereUniqueInput[]
  }

  export type BlockListCreateNestedManyWithoutUserInput = {
    create?: XOR<BlockListCreateWithoutUserInput, BlockListUncheckedCreateWithoutUserInput> | BlockListCreateWithoutUserInput[] | BlockListUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BlockListCreateOrConnectWithoutUserInput | BlockListCreateOrConnectWithoutUserInput[]
    createMany?: BlockListCreateManyUserInputEnvelope
    connect?: BlockListWhereUniqueInput | BlockListWhereUniqueInput[]
  }

  export type BlockListCreateNestedManyWithoutBlockedUserInput = {
    create?: XOR<BlockListCreateWithoutBlockedUserInput, BlockListUncheckedCreateWithoutBlockedUserInput> | BlockListCreateWithoutBlockedUserInput[] | BlockListUncheckedCreateWithoutBlockedUserInput[]
    connectOrCreate?: BlockListCreateOrConnectWithoutBlockedUserInput | BlockListCreateOrConnectWithoutBlockedUserInput[]
    createMany?: BlockListCreateManyBlockedUserInputEnvelope
    connect?: BlockListWhereUniqueInput | BlockListWhereUniqueInput[]
  }

  export type GroupChatCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<GroupChatCreateWithoutCreatedByInput, GroupChatUncheckedCreateWithoutCreatedByInput> | GroupChatCreateWithoutCreatedByInput[] | GroupChatUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: GroupChatCreateOrConnectWithoutCreatedByInput | GroupChatCreateOrConnectWithoutCreatedByInput[]
    createMany?: GroupChatCreateManyCreatedByInputEnvelope
    connect?: GroupChatWhereUniqueInput | GroupChatWhereUniqueInput[]
  }

  export type GroupMemberCreateNestedManyWithoutUserInput = {
    create?: XOR<GroupMemberCreateWithoutUserInput, GroupMemberUncheckedCreateWithoutUserInput> | GroupMemberCreateWithoutUserInput[] | GroupMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GroupMemberCreateOrConnectWithoutUserInput | GroupMemberCreateOrConnectWithoutUserInput[]
    createMany?: GroupMemberCreateManyUserInputEnvelope
    connect?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
  }

  export type GroupJoinRequestCreateNestedManyWithoutFromUserInput = {
    create?: XOR<GroupJoinRequestCreateWithoutFromUserInput, GroupJoinRequestUncheckedCreateWithoutFromUserInput> | GroupJoinRequestCreateWithoutFromUserInput[] | GroupJoinRequestUncheckedCreateWithoutFromUserInput[]
    connectOrCreate?: GroupJoinRequestCreateOrConnectWithoutFromUserInput | GroupJoinRequestCreateOrConnectWithoutFromUserInput[]
    createMany?: GroupJoinRequestCreateManyFromUserInputEnvelope
    connect?: GroupJoinRequestWhereUniqueInput | GroupJoinRequestWhereUniqueInput[]
  }

  export type GroupJoinRequestCreateNestedManyWithoutToUserInput = {
    create?: XOR<GroupJoinRequestCreateWithoutToUserInput, GroupJoinRequestUncheckedCreateWithoutToUserInput> | GroupJoinRequestCreateWithoutToUserInput[] | GroupJoinRequestUncheckedCreateWithoutToUserInput[]
    connectOrCreate?: GroupJoinRequestCreateOrConnectWithoutToUserInput | GroupJoinRequestCreateOrConnectWithoutToUserInput[]
    createMany?: GroupJoinRequestCreateManyToUserInputEnvelope
    connect?: GroupJoinRequestWhereUniqueInput | GroupJoinRequestWhereUniqueInput[]
  }

  export type GroupMessageCreateNestedManyWithoutAuthorInput = {
    create?: XOR<GroupMessageCreateWithoutAuthorInput, GroupMessageUncheckedCreateWithoutAuthorInput> | GroupMessageCreateWithoutAuthorInput[] | GroupMessageUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: GroupMessageCreateOrConnectWithoutAuthorInput | GroupMessageCreateOrConnectWithoutAuthorInput[]
    createMany?: GroupMessageCreateManyAuthorInputEnvelope
    connect?: GroupMessageWhereUniqueInput | GroupMessageWhereUniqueInput[]
  }

  export type PrivateMessageCreateNestedManyWithoutFromUserInput = {
    create?: XOR<PrivateMessageCreateWithoutFromUserInput, PrivateMessageUncheckedCreateWithoutFromUserInput> | PrivateMessageCreateWithoutFromUserInput[] | PrivateMessageUncheckedCreateWithoutFromUserInput[]
    connectOrCreate?: PrivateMessageCreateOrConnectWithoutFromUserInput | PrivateMessageCreateOrConnectWithoutFromUserInput[]
    createMany?: PrivateMessageCreateManyFromUserInputEnvelope
    connect?: PrivateMessageWhereUniqueInput | PrivateMessageWhereUniqueInput[]
  }

  export type PrivateMessageCreateNestedManyWithoutToUserInput = {
    create?: XOR<PrivateMessageCreateWithoutToUserInput, PrivateMessageUncheckedCreateWithoutToUserInput> | PrivateMessageCreateWithoutToUserInput[] | PrivateMessageUncheckedCreateWithoutToUserInput[]
    connectOrCreate?: PrivateMessageCreateOrConnectWithoutToUserInput | PrivateMessageCreateOrConnectWithoutToUserInput[]
    createMany?: PrivateMessageCreateManyToUserInputEnvelope
    connect?: PrivateMessageWhereUniqueInput | PrivateMessageWhereUniqueInput[]
  }

  export type GlobalMessageUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<GlobalMessageCreateWithoutAuthorInput, GlobalMessageUncheckedCreateWithoutAuthorInput> | GlobalMessageCreateWithoutAuthorInput[] | GlobalMessageUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: GlobalMessageCreateOrConnectWithoutAuthorInput | GlobalMessageCreateOrConnectWithoutAuthorInput[]
    createMany?: GlobalMessageCreateManyAuthorInputEnvelope
    connect?: GlobalMessageWhereUniqueInput | GlobalMessageWhereUniqueInput[]
  }

  export type FriendsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<FriendsCreateWithoutUserInput, FriendsUncheckedCreateWithoutUserInput> | FriendsCreateWithoutUserInput[] | FriendsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FriendsCreateOrConnectWithoutUserInput | FriendsCreateOrConnectWithoutUserInput[]
    createMany?: FriendsCreateManyUserInputEnvelope
    connect?: FriendsWhereUniqueInput | FriendsWhereUniqueInput[]
  }

  export type FriendsUncheckedCreateNestedManyWithoutFriendInput = {
    create?: XOR<FriendsCreateWithoutFriendInput, FriendsUncheckedCreateWithoutFriendInput> | FriendsCreateWithoutFriendInput[] | FriendsUncheckedCreateWithoutFriendInput[]
    connectOrCreate?: FriendsCreateOrConnectWithoutFriendInput | FriendsCreateOrConnectWithoutFriendInput[]
    createMany?: FriendsCreateManyFriendInputEnvelope
    connect?: FriendsWhereUniqueInput | FriendsWhereUniqueInput[]
  }

  export type FriendRequestUncheckedCreateNestedManyWithoutRequestFromInput = {
    create?: XOR<FriendRequestCreateWithoutRequestFromInput, FriendRequestUncheckedCreateWithoutRequestFromInput> | FriendRequestCreateWithoutRequestFromInput[] | FriendRequestUncheckedCreateWithoutRequestFromInput[]
    connectOrCreate?: FriendRequestCreateOrConnectWithoutRequestFromInput | FriendRequestCreateOrConnectWithoutRequestFromInput[]
    createMany?: FriendRequestCreateManyRequestFromInputEnvelope
    connect?: FriendRequestWhereUniqueInput | FriendRequestWhereUniqueInput[]
  }

  export type FriendRequestUncheckedCreateNestedManyWithoutRequestToInput = {
    create?: XOR<FriendRequestCreateWithoutRequestToInput, FriendRequestUncheckedCreateWithoutRequestToInput> | FriendRequestCreateWithoutRequestToInput[] | FriendRequestUncheckedCreateWithoutRequestToInput[]
    connectOrCreate?: FriendRequestCreateOrConnectWithoutRequestToInput | FriendRequestCreateOrConnectWithoutRequestToInput[]
    createMany?: FriendRequestCreateManyRequestToInputEnvelope
    connect?: FriendRequestWhereUniqueInput | FriendRequestWhereUniqueInput[]
  }

  export type BlockListUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<BlockListCreateWithoutUserInput, BlockListUncheckedCreateWithoutUserInput> | BlockListCreateWithoutUserInput[] | BlockListUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BlockListCreateOrConnectWithoutUserInput | BlockListCreateOrConnectWithoutUserInput[]
    createMany?: BlockListCreateManyUserInputEnvelope
    connect?: BlockListWhereUniqueInput | BlockListWhereUniqueInput[]
  }

  export type BlockListUncheckedCreateNestedManyWithoutBlockedUserInput = {
    create?: XOR<BlockListCreateWithoutBlockedUserInput, BlockListUncheckedCreateWithoutBlockedUserInput> | BlockListCreateWithoutBlockedUserInput[] | BlockListUncheckedCreateWithoutBlockedUserInput[]
    connectOrCreate?: BlockListCreateOrConnectWithoutBlockedUserInput | BlockListCreateOrConnectWithoutBlockedUserInput[]
    createMany?: BlockListCreateManyBlockedUserInputEnvelope
    connect?: BlockListWhereUniqueInput | BlockListWhereUniqueInput[]
  }

  export type GroupChatUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<GroupChatCreateWithoutCreatedByInput, GroupChatUncheckedCreateWithoutCreatedByInput> | GroupChatCreateWithoutCreatedByInput[] | GroupChatUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: GroupChatCreateOrConnectWithoutCreatedByInput | GroupChatCreateOrConnectWithoutCreatedByInput[]
    createMany?: GroupChatCreateManyCreatedByInputEnvelope
    connect?: GroupChatWhereUniqueInput | GroupChatWhereUniqueInput[]
  }

  export type GroupMemberUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<GroupMemberCreateWithoutUserInput, GroupMemberUncheckedCreateWithoutUserInput> | GroupMemberCreateWithoutUserInput[] | GroupMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GroupMemberCreateOrConnectWithoutUserInput | GroupMemberCreateOrConnectWithoutUserInput[]
    createMany?: GroupMemberCreateManyUserInputEnvelope
    connect?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
  }

  export type GroupJoinRequestUncheckedCreateNestedManyWithoutFromUserInput = {
    create?: XOR<GroupJoinRequestCreateWithoutFromUserInput, GroupJoinRequestUncheckedCreateWithoutFromUserInput> | GroupJoinRequestCreateWithoutFromUserInput[] | GroupJoinRequestUncheckedCreateWithoutFromUserInput[]
    connectOrCreate?: GroupJoinRequestCreateOrConnectWithoutFromUserInput | GroupJoinRequestCreateOrConnectWithoutFromUserInput[]
    createMany?: GroupJoinRequestCreateManyFromUserInputEnvelope
    connect?: GroupJoinRequestWhereUniqueInput | GroupJoinRequestWhereUniqueInput[]
  }

  export type GroupJoinRequestUncheckedCreateNestedManyWithoutToUserInput = {
    create?: XOR<GroupJoinRequestCreateWithoutToUserInput, GroupJoinRequestUncheckedCreateWithoutToUserInput> | GroupJoinRequestCreateWithoutToUserInput[] | GroupJoinRequestUncheckedCreateWithoutToUserInput[]
    connectOrCreate?: GroupJoinRequestCreateOrConnectWithoutToUserInput | GroupJoinRequestCreateOrConnectWithoutToUserInput[]
    createMany?: GroupJoinRequestCreateManyToUserInputEnvelope
    connect?: GroupJoinRequestWhereUniqueInput | GroupJoinRequestWhereUniqueInput[]
  }

  export type GroupMessageUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<GroupMessageCreateWithoutAuthorInput, GroupMessageUncheckedCreateWithoutAuthorInput> | GroupMessageCreateWithoutAuthorInput[] | GroupMessageUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: GroupMessageCreateOrConnectWithoutAuthorInput | GroupMessageCreateOrConnectWithoutAuthorInput[]
    createMany?: GroupMessageCreateManyAuthorInputEnvelope
    connect?: GroupMessageWhereUniqueInput | GroupMessageWhereUniqueInput[]
  }

  export type PrivateMessageUncheckedCreateNestedManyWithoutFromUserInput = {
    create?: XOR<PrivateMessageCreateWithoutFromUserInput, PrivateMessageUncheckedCreateWithoutFromUserInput> | PrivateMessageCreateWithoutFromUserInput[] | PrivateMessageUncheckedCreateWithoutFromUserInput[]
    connectOrCreate?: PrivateMessageCreateOrConnectWithoutFromUserInput | PrivateMessageCreateOrConnectWithoutFromUserInput[]
    createMany?: PrivateMessageCreateManyFromUserInputEnvelope
    connect?: PrivateMessageWhereUniqueInput | PrivateMessageWhereUniqueInput[]
  }

  export type PrivateMessageUncheckedCreateNestedManyWithoutToUserInput = {
    create?: XOR<PrivateMessageCreateWithoutToUserInput, PrivateMessageUncheckedCreateWithoutToUserInput> | PrivateMessageCreateWithoutToUserInput[] | PrivateMessageUncheckedCreateWithoutToUserInput[]
    connectOrCreate?: PrivateMessageCreateOrConnectWithoutToUserInput | PrivateMessageCreateOrConnectWithoutToUserInput[]
    createMany?: PrivateMessageCreateManyToUserInputEnvelope
    connect?: PrivateMessageWhereUniqueInput | PrivateMessageWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type GlobalMessageUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<GlobalMessageCreateWithoutAuthorInput, GlobalMessageUncheckedCreateWithoutAuthorInput> | GlobalMessageCreateWithoutAuthorInput[] | GlobalMessageUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: GlobalMessageCreateOrConnectWithoutAuthorInput | GlobalMessageCreateOrConnectWithoutAuthorInput[]
    upsert?: GlobalMessageUpsertWithWhereUniqueWithoutAuthorInput | GlobalMessageUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: GlobalMessageCreateManyAuthorInputEnvelope
    set?: GlobalMessageWhereUniqueInput | GlobalMessageWhereUniqueInput[]
    disconnect?: GlobalMessageWhereUniqueInput | GlobalMessageWhereUniqueInput[]
    delete?: GlobalMessageWhereUniqueInput | GlobalMessageWhereUniqueInput[]
    connect?: GlobalMessageWhereUniqueInput | GlobalMessageWhereUniqueInput[]
    update?: GlobalMessageUpdateWithWhereUniqueWithoutAuthorInput | GlobalMessageUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: GlobalMessageUpdateManyWithWhereWithoutAuthorInput | GlobalMessageUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: GlobalMessageScalarWhereInput | GlobalMessageScalarWhereInput[]
  }

  export type FriendsUpdateManyWithoutUserNestedInput = {
    create?: XOR<FriendsCreateWithoutUserInput, FriendsUncheckedCreateWithoutUserInput> | FriendsCreateWithoutUserInput[] | FriendsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FriendsCreateOrConnectWithoutUserInput | FriendsCreateOrConnectWithoutUserInput[]
    upsert?: FriendsUpsertWithWhereUniqueWithoutUserInput | FriendsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FriendsCreateManyUserInputEnvelope
    set?: FriendsWhereUniqueInput | FriendsWhereUniqueInput[]
    disconnect?: FriendsWhereUniqueInput | FriendsWhereUniqueInput[]
    delete?: FriendsWhereUniqueInput | FriendsWhereUniqueInput[]
    connect?: FriendsWhereUniqueInput | FriendsWhereUniqueInput[]
    update?: FriendsUpdateWithWhereUniqueWithoutUserInput | FriendsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FriendsUpdateManyWithWhereWithoutUserInput | FriendsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FriendsScalarWhereInput | FriendsScalarWhereInput[]
  }

  export type FriendsUpdateManyWithoutFriendNestedInput = {
    create?: XOR<FriendsCreateWithoutFriendInput, FriendsUncheckedCreateWithoutFriendInput> | FriendsCreateWithoutFriendInput[] | FriendsUncheckedCreateWithoutFriendInput[]
    connectOrCreate?: FriendsCreateOrConnectWithoutFriendInput | FriendsCreateOrConnectWithoutFriendInput[]
    upsert?: FriendsUpsertWithWhereUniqueWithoutFriendInput | FriendsUpsertWithWhereUniqueWithoutFriendInput[]
    createMany?: FriendsCreateManyFriendInputEnvelope
    set?: FriendsWhereUniqueInput | FriendsWhereUniqueInput[]
    disconnect?: FriendsWhereUniqueInput | FriendsWhereUniqueInput[]
    delete?: FriendsWhereUniqueInput | FriendsWhereUniqueInput[]
    connect?: FriendsWhereUniqueInput | FriendsWhereUniqueInput[]
    update?: FriendsUpdateWithWhereUniqueWithoutFriendInput | FriendsUpdateWithWhereUniqueWithoutFriendInput[]
    updateMany?: FriendsUpdateManyWithWhereWithoutFriendInput | FriendsUpdateManyWithWhereWithoutFriendInput[]
    deleteMany?: FriendsScalarWhereInput | FriendsScalarWhereInput[]
  }

  export type FriendRequestUpdateManyWithoutRequestFromNestedInput = {
    create?: XOR<FriendRequestCreateWithoutRequestFromInput, FriendRequestUncheckedCreateWithoutRequestFromInput> | FriendRequestCreateWithoutRequestFromInput[] | FriendRequestUncheckedCreateWithoutRequestFromInput[]
    connectOrCreate?: FriendRequestCreateOrConnectWithoutRequestFromInput | FriendRequestCreateOrConnectWithoutRequestFromInput[]
    upsert?: FriendRequestUpsertWithWhereUniqueWithoutRequestFromInput | FriendRequestUpsertWithWhereUniqueWithoutRequestFromInput[]
    createMany?: FriendRequestCreateManyRequestFromInputEnvelope
    set?: FriendRequestWhereUniqueInput | FriendRequestWhereUniqueInput[]
    disconnect?: FriendRequestWhereUniqueInput | FriendRequestWhereUniqueInput[]
    delete?: FriendRequestWhereUniqueInput | FriendRequestWhereUniqueInput[]
    connect?: FriendRequestWhereUniqueInput | FriendRequestWhereUniqueInput[]
    update?: FriendRequestUpdateWithWhereUniqueWithoutRequestFromInput | FriendRequestUpdateWithWhereUniqueWithoutRequestFromInput[]
    updateMany?: FriendRequestUpdateManyWithWhereWithoutRequestFromInput | FriendRequestUpdateManyWithWhereWithoutRequestFromInput[]
    deleteMany?: FriendRequestScalarWhereInput | FriendRequestScalarWhereInput[]
  }

  export type FriendRequestUpdateManyWithoutRequestToNestedInput = {
    create?: XOR<FriendRequestCreateWithoutRequestToInput, FriendRequestUncheckedCreateWithoutRequestToInput> | FriendRequestCreateWithoutRequestToInput[] | FriendRequestUncheckedCreateWithoutRequestToInput[]
    connectOrCreate?: FriendRequestCreateOrConnectWithoutRequestToInput | FriendRequestCreateOrConnectWithoutRequestToInput[]
    upsert?: FriendRequestUpsertWithWhereUniqueWithoutRequestToInput | FriendRequestUpsertWithWhereUniqueWithoutRequestToInput[]
    createMany?: FriendRequestCreateManyRequestToInputEnvelope
    set?: FriendRequestWhereUniqueInput | FriendRequestWhereUniqueInput[]
    disconnect?: FriendRequestWhereUniqueInput | FriendRequestWhereUniqueInput[]
    delete?: FriendRequestWhereUniqueInput | FriendRequestWhereUniqueInput[]
    connect?: FriendRequestWhereUniqueInput | FriendRequestWhereUniqueInput[]
    update?: FriendRequestUpdateWithWhereUniqueWithoutRequestToInput | FriendRequestUpdateWithWhereUniqueWithoutRequestToInput[]
    updateMany?: FriendRequestUpdateManyWithWhereWithoutRequestToInput | FriendRequestUpdateManyWithWhereWithoutRequestToInput[]
    deleteMany?: FriendRequestScalarWhereInput | FriendRequestScalarWhereInput[]
  }

  export type BlockListUpdateManyWithoutUserNestedInput = {
    create?: XOR<BlockListCreateWithoutUserInput, BlockListUncheckedCreateWithoutUserInput> | BlockListCreateWithoutUserInput[] | BlockListUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BlockListCreateOrConnectWithoutUserInput | BlockListCreateOrConnectWithoutUserInput[]
    upsert?: BlockListUpsertWithWhereUniqueWithoutUserInput | BlockListUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BlockListCreateManyUserInputEnvelope
    set?: BlockListWhereUniqueInput | BlockListWhereUniqueInput[]
    disconnect?: BlockListWhereUniqueInput | BlockListWhereUniqueInput[]
    delete?: BlockListWhereUniqueInput | BlockListWhereUniqueInput[]
    connect?: BlockListWhereUniqueInput | BlockListWhereUniqueInput[]
    update?: BlockListUpdateWithWhereUniqueWithoutUserInput | BlockListUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BlockListUpdateManyWithWhereWithoutUserInput | BlockListUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BlockListScalarWhereInput | BlockListScalarWhereInput[]
  }

  export type BlockListUpdateManyWithoutBlockedUserNestedInput = {
    create?: XOR<BlockListCreateWithoutBlockedUserInput, BlockListUncheckedCreateWithoutBlockedUserInput> | BlockListCreateWithoutBlockedUserInput[] | BlockListUncheckedCreateWithoutBlockedUserInput[]
    connectOrCreate?: BlockListCreateOrConnectWithoutBlockedUserInput | BlockListCreateOrConnectWithoutBlockedUserInput[]
    upsert?: BlockListUpsertWithWhereUniqueWithoutBlockedUserInput | BlockListUpsertWithWhereUniqueWithoutBlockedUserInput[]
    createMany?: BlockListCreateManyBlockedUserInputEnvelope
    set?: BlockListWhereUniqueInput | BlockListWhereUniqueInput[]
    disconnect?: BlockListWhereUniqueInput | BlockListWhereUniqueInput[]
    delete?: BlockListWhereUniqueInput | BlockListWhereUniqueInput[]
    connect?: BlockListWhereUniqueInput | BlockListWhereUniqueInput[]
    update?: BlockListUpdateWithWhereUniqueWithoutBlockedUserInput | BlockListUpdateWithWhereUniqueWithoutBlockedUserInput[]
    updateMany?: BlockListUpdateManyWithWhereWithoutBlockedUserInput | BlockListUpdateManyWithWhereWithoutBlockedUserInput[]
    deleteMany?: BlockListScalarWhereInput | BlockListScalarWhereInput[]
  }

  export type GroupChatUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<GroupChatCreateWithoutCreatedByInput, GroupChatUncheckedCreateWithoutCreatedByInput> | GroupChatCreateWithoutCreatedByInput[] | GroupChatUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: GroupChatCreateOrConnectWithoutCreatedByInput | GroupChatCreateOrConnectWithoutCreatedByInput[]
    upsert?: GroupChatUpsertWithWhereUniqueWithoutCreatedByInput | GroupChatUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: GroupChatCreateManyCreatedByInputEnvelope
    set?: GroupChatWhereUniqueInput | GroupChatWhereUniqueInput[]
    disconnect?: GroupChatWhereUniqueInput | GroupChatWhereUniqueInput[]
    delete?: GroupChatWhereUniqueInput | GroupChatWhereUniqueInput[]
    connect?: GroupChatWhereUniqueInput | GroupChatWhereUniqueInput[]
    update?: GroupChatUpdateWithWhereUniqueWithoutCreatedByInput | GroupChatUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: GroupChatUpdateManyWithWhereWithoutCreatedByInput | GroupChatUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: GroupChatScalarWhereInput | GroupChatScalarWhereInput[]
  }

  export type GroupMemberUpdateManyWithoutUserNestedInput = {
    create?: XOR<GroupMemberCreateWithoutUserInput, GroupMemberUncheckedCreateWithoutUserInput> | GroupMemberCreateWithoutUserInput[] | GroupMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GroupMemberCreateOrConnectWithoutUserInput | GroupMemberCreateOrConnectWithoutUserInput[]
    upsert?: GroupMemberUpsertWithWhereUniqueWithoutUserInput | GroupMemberUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: GroupMemberCreateManyUserInputEnvelope
    set?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    disconnect?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    delete?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    connect?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    update?: GroupMemberUpdateWithWhereUniqueWithoutUserInput | GroupMemberUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: GroupMemberUpdateManyWithWhereWithoutUserInput | GroupMemberUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: GroupMemberScalarWhereInput | GroupMemberScalarWhereInput[]
  }

  export type GroupJoinRequestUpdateManyWithoutFromUserNestedInput = {
    create?: XOR<GroupJoinRequestCreateWithoutFromUserInput, GroupJoinRequestUncheckedCreateWithoutFromUserInput> | GroupJoinRequestCreateWithoutFromUserInput[] | GroupJoinRequestUncheckedCreateWithoutFromUserInput[]
    connectOrCreate?: GroupJoinRequestCreateOrConnectWithoutFromUserInput | GroupJoinRequestCreateOrConnectWithoutFromUserInput[]
    upsert?: GroupJoinRequestUpsertWithWhereUniqueWithoutFromUserInput | GroupJoinRequestUpsertWithWhereUniqueWithoutFromUserInput[]
    createMany?: GroupJoinRequestCreateManyFromUserInputEnvelope
    set?: GroupJoinRequestWhereUniqueInput | GroupJoinRequestWhereUniqueInput[]
    disconnect?: GroupJoinRequestWhereUniqueInput | GroupJoinRequestWhereUniqueInput[]
    delete?: GroupJoinRequestWhereUniqueInput | GroupJoinRequestWhereUniqueInput[]
    connect?: GroupJoinRequestWhereUniqueInput | GroupJoinRequestWhereUniqueInput[]
    update?: GroupJoinRequestUpdateWithWhereUniqueWithoutFromUserInput | GroupJoinRequestUpdateWithWhereUniqueWithoutFromUserInput[]
    updateMany?: GroupJoinRequestUpdateManyWithWhereWithoutFromUserInput | GroupJoinRequestUpdateManyWithWhereWithoutFromUserInput[]
    deleteMany?: GroupJoinRequestScalarWhereInput | GroupJoinRequestScalarWhereInput[]
  }

  export type GroupJoinRequestUpdateManyWithoutToUserNestedInput = {
    create?: XOR<GroupJoinRequestCreateWithoutToUserInput, GroupJoinRequestUncheckedCreateWithoutToUserInput> | GroupJoinRequestCreateWithoutToUserInput[] | GroupJoinRequestUncheckedCreateWithoutToUserInput[]
    connectOrCreate?: GroupJoinRequestCreateOrConnectWithoutToUserInput | GroupJoinRequestCreateOrConnectWithoutToUserInput[]
    upsert?: GroupJoinRequestUpsertWithWhereUniqueWithoutToUserInput | GroupJoinRequestUpsertWithWhereUniqueWithoutToUserInput[]
    createMany?: GroupJoinRequestCreateManyToUserInputEnvelope
    set?: GroupJoinRequestWhereUniqueInput | GroupJoinRequestWhereUniqueInput[]
    disconnect?: GroupJoinRequestWhereUniqueInput | GroupJoinRequestWhereUniqueInput[]
    delete?: GroupJoinRequestWhereUniqueInput | GroupJoinRequestWhereUniqueInput[]
    connect?: GroupJoinRequestWhereUniqueInput | GroupJoinRequestWhereUniqueInput[]
    update?: GroupJoinRequestUpdateWithWhereUniqueWithoutToUserInput | GroupJoinRequestUpdateWithWhereUniqueWithoutToUserInput[]
    updateMany?: GroupJoinRequestUpdateManyWithWhereWithoutToUserInput | GroupJoinRequestUpdateManyWithWhereWithoutToUserInput[]
    deleteMany?: GroupJoinRequestScalarWhereInput | GroupJoinRequestScalarWhereInput[]
  }

  export type GroupMessageUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<GroupMessageCreateWithoutAuthorInput, GroupMessageUncheckedCreateWithoutAuthorInput> | GroupMessageCreateWithoutAuthorInput[] | GroupMessageUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: GroupMessageCreateOrConnectWithoutAuthorInput | GroupMessageCreateOrConnectWithoutAuthorInput[]
    upsert?: GroupMessageUpsertWithWhereUniqueWithoutAuthorInput | GroupMessageUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: GroupMessageCreateManyAuthorInputEnvelope
    set?: GroupMessageWhereUniqueInput | GroupMessageWhereUniqueInput[]
    disconnect?: GroupMessageWhereUniqueInput | GroupMessageWhereUniqueInput[]
    delete?: GroupMessageWhereUniqueInput | GroupMessageWhereUniqueInput[]
    connect?: GroupMessageWhereUniqueInput | GroupMessageWhereUniqueInput[]
    update?: GroupMessageUpdateWithWhereUniqueWithoutAuthorInput | GroupMessageUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: GroupMessageUpdateManyWithWhereWithoutAuthorInput | GroupMessageUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: GroupMessageScalarWhereInput | GroupMessageScalarWhereInput[]
  }

  export type PrivateMessageUpdateManyWithoutFromUserNestedInput = {
    create?: XOR<PrivateMessageCreateWithoutFromUserInput, PrivateMessageUncheckedCreateWithoutFromUserInput> | PrivateMessageCreateWithoutFromUserInput[] | PrivateMessageUncheckedCreateWithoutFromUserInput[]
    connectOrCreate?: PrivateMessageCreateOrConnectWithoutFromUserInput | PrivateMessageCreateOrConnectWithoutFromUserInput[]
    upsert?: PrivateMessageUpsertWithWhereUniqueWithoutFromUserInput | PrivateMessageUpsertWithWhereUniqueWithoutFromUserInput[]
    createMany?: PrivateMessageCreateManyFromUserInputEnvelope
    set?: PrivateMessageWhereUniqueInput | PrivateMessageWhereUniqueInput[]
    disconnect?: PrivateMessageWhereUniqueInput | PrivateMessageWhereUniqueInput[]
    delete?: PrivateMessageWhereUniqueInput | PrivateMessageWhereUniqueInput[]
    connect?: PrivateMessageWhereUniqueInput | PrivateMessageWhereUniqueInput[]
    update?: PrivateMessageUpdateWithWhereUniqueWithoutFromUserInput | PrivateMessageUpdateWithWhereUniqueWithoutFromUserInput[]
    updateMany?: PrivateMessageUpdateManyWithWhereWithoutFromUserInput | PrivateMessageUpdateManyWithWhereWithoutFromUserInput[]
    deleteMany?: PrivateMessageScalarWhereInput | PrivateMessageScalarWhereInput[]
  }

  export type PrivateMessageUpdateManyWithoutToUserNestedInput = {
    create?: XOR<PrivateMessageCreateWithoutToUserInput, PrivateMessageUncheckedCreateWithoutToUserInput> | PrivateMessageCreateWithoutToUserInput[] | PrivateMessageUncheckedCreateWithoutToUserInput[]
    connectOrCreate?: PrivateMessageCreateOrConnectWithoutToUserInput | PrivateMessageCreateOrConnectWithoutToUserInput[]
    upsert?: PrivateMessageUpsertWithWhereUniqueWithoutToUserInput | PrivateMessageUpsertWithWhereUniqueWithoutToUserInput[]
    createMany?: PrivateMessageCreateManyToUserInputEnvelope
    set?: PrivateMessageWhereUniqueInput | PrivateMessageWhereUniqueInput[]
    disconnect?: PrivateMessageWhereUniqueInput | PrivateMessageWhereUniqueInput[]
    delete?: PrivateMessageWhereUniqueInput | PrivateMessageWhereUniqueInput[]
    connect?: PrivateMessageWhereUniqueInput | PrivateMessageWhereUniqueInput[]
    update?: PrivateMessageUpdateWithWhereUniqueWithoutToUserInput | PrivateMessageUpdateWithWhereUniqueWithoutToUserInput[]
    updateMany?: PrivateMessageUpdateManyWithWhereWithoutToUserInput | PrivateMessageUpdateManyWithWhereWithoutToUserInput[]
    deleteMany?: PrivateMessageScalarWhereInput | PrivateMessageScalarWhereInput[]
  }

  export type GlobalMessageUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<GlobalMessageCreateWithoutAuthorInput, GlobalMessageUncheckedCreateWithoutAuthorInput> | GlobalMessageCreateWithoutAuthorInput[] | GlobalMessageUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: GlobalMessageCreateOrConnectWithoutAuthorInput | GlobalMessageCreateOrConnectWithoutAuthorInput[]
    upsert?: GlobalMessageUpsertWithWhereUniqueWithoutAuthorInput | GlobalMessageUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: GlobalMessageCreateManyAuthorInputEnvelope
    set?: GlobalMessageWhereUniqueInput | GlobalMessageWhereUniqueInput[]
    disconnect?: GlobalMessageWhereUniqueInput | GlobalMessageWhereUniqueInput[]
    delete?: GlobalMessageWhereUniqueInput | GlobalMessageWhereUniqueInput[]
    connect?: GlobalMessageWhereUniqueInput | GlobalMessageWhereUniqueInput[]
    update?: GlobalMessageUpdateWithWhereUniqueWithoutAuthorInput | GlobalMessageUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: GlobalMessageUpdateManyWithWhereWithoutAuthorInput | GlobalMessageUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: GlobalMessageScalarWhereInput | GlobalMessageScalarWhereInput[]
  }

  export type FriendsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<FriendsCreateWithoutUserInput, FriendsUncheckedCreateWithoutUserInput> | FriendsCreateWithoutUserInput[] | FriendsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FriendsCreateOrConnectWithoutUserInput | FriendsCreateOrConnectWithoutUserInput[]
    upsert?: FriendsUpsertWithWhereUniqueWithoutUserInput | FriendsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FriendsCreateManyUserInputEnvelope
    set?: FriendsWhereUniqueInput | FriendsWhereUniqueInput[]
    disconnect?: FriendsWhereUniqueInput | FriendsWhereUniqueInput[]
    delete?: FriendsWhereUniqueInput | FriendsWhereUniqueInput[]
    connect?: FriendsWhereUniqueInput | FriendsWhereUniqueInput[]
    update?: FriendsUpdateWithWhereUniqueWithoutUserInput | FriendsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FriendsUpdateManyWithWhereWithoutUserInput | FriendsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FriendsScalarWhereInput | FriendsScalarWhereInput[]
  }

  export type FriendsUncheckedUpdateManyWithoutFriendNestedInput = {
    create?: XOR<FriendsCreateWithoutFriendInput, FriendsUncheckedCreateWithoutFriendInput> | FriendsCreateWithoutFriendInput[] | FriendsUncheckedCreateWithoutFriendInput[]
    connectOrCreate?: FriendsCreateOrConnectWithoutFriendInput | FriendsCreateOrConnectWithoutFriendInput[]
    upsert?: FriendsUpsertWithWhereUniqueWithoutFriendInput | FriendsUpsertWithWhereUniqueWithoutFriendInput[]
    createMany?: FriendsCreateManyFriendInputEnvelope
    set?: FriendsWhereUniqueInput | FriendsWhereUniqueInput[]
    disconnect?: FriendsWhereUniqueInput | FriendsWhereUniqueInput[]
    delete?: FriendsWhereUniqueInput | FriendsWhereUniqueInput[]
    connect?: FriendsWhereUniqueInput | FriendsWhereUniqueInput[]
    update?: FriendsUpdateWithWhereUniqueWithoutFriendInput | FriendsUpdateWithWhereUniqueWithoutFriendInput[]
    updateMany?: FriendsUpdateManyWithWhereWithoutFriendInput | FriendsUpdateManyWithWhereWithoutFriendInput[]
    deleteMany?: FriendsScalarWhereInput | FriendsScalarWhereInput[]
  }

  export type FriendRequestUncheckedUpdateManyWithoutRequestFromNestedInput = {
    create?: XOR<FriendRequestCreateWithoutRequestFromInput, FriendRequestUncheckedCreateWithoutRequestFromInput> | FriendRequestCreateWithoutRequestFromInput[] | FriendRequestUncheckedCreateWithoutRequestFromInput[]
    connectOrCreate?: FriendRequestCreateOrConnectWithoutRequestFromInput | FriendRequestCreateOrConnectWithoutRequestFromInput[]
    upsert?: FriendRequestUpsertWithWhereUniqueWithoutRequestFromInput | FriendRequestUpsertWithWhereUniqueWithoutRequestFromInput[]
    createMany?: FriendRequestCreateManyRequestFromInputEnvelope
    set?: FriendRequestWhereUniqueInput | FriendRequestWhereUniqueInput[]
    disconnect?: FriendRequestWhereUniqueInput | FriendRequestWhereUniqueInput[]
    delete?: FriendRequestWhereUniqueInput | FriendRequestWhereUniqueInput[]
    connect?: FriendRequestWhereUniqueInput | FriendRequestWhereUniqueInput[]
    update?: FriendRequestUpdateWithWhereUniqueWithoutRequestFromInput | FriendRequestUpdateWithWhereUniqueWithoutRequestFromInput[]
    updateMany?: FriendRequestUpdateManyWithWhereWithoutRequestFromInput | FriendRequestUpdateManyWithWhereWithoutRequestFromInput[]
    deleteMany?: FriendRequestScalarWhereInput | FriendRequestScalarWhereInput[]
  }

  export type FriendRequestUncheckedUpdateManyWithoutRequestToNestedInput = {
    create?: XOR<FriendRequestCreateWithoutRequestToInput, FriendRequestUncheckedCreateWithoutRequestToInput> | FriendRequestCreateWithoutRequestToInput[] | FriendRequestUncheckedCreateWithoutRequestToInput[]
    connectOrCreate?: FriendRequestCreateOrConnectWithoutRequestToInput | FriendRequestCreateOrConnectWithoutRequestToInput[]
    upsert?: FriendRequestUpsertWithWhereUniqueWithoutRequestToInput | FriendRequestUpsertWithWhereUniqueWithoutRequestToInput[]
    createMany?: FriendRequestCreateManyRequestToInputEnvelope
    set?: FriendRequestWhereUniqueInput | FriendRequestWhereUniqueInput[]
    disconnect?: FriendRequestWhereUniqueInput | FriendRequestWhereUniqueInput[]
    delete?: FriendRequestWhereUniqueInput | FriendRequestWhereUniqueInput[]
    connect?: FriendRequestWhereUniqueInput | FriendRequestWhereUniqueInput[]
    update?: FriendRequestUpdateWithWhereUniqueWithoutRequestToInput | FriendRequestUpdateWithWhereUniqueWithoutRequestToInput[]
    updateMany?: FriendRequestUpdateManyWithWhereWithoutRequestToInput | FriendRequestUpdateManyWithWhereWithoutRequestToInput[]
    deleteMany?: FriendRequestScalarWhereInput | FriendRequestScalarWhereInput[]
  }

  export type BlockListUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<BlockListCreateWithoutUserInput, BlockListUncheckedCreateWithoutUserInput> | BlockListCreateWithoutUserInput[] | BlockListUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BlockListCreateOrConnectWithoutUserInput | BlockListCreateOrConnectWithoutUserInput[]
    upsert?: BlockListUpsertWithWhereUniqueWithoutUserInput | BlockListUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BlockListCreateManyUserInputEnvelope
    set?: BlockListWhereUniqueInput | BlockListWhereUniqueInput[]
    disconnect?: BlockListWhereUniqueInput | BlockListWhereUniqueInput[]
    delete?: BlockListWhereUniqueInput | BlockListWhereUniqueInput[]
    connect?: BlockListWhereUniqueInput | BlockListWhereUniqueInput[]
    update?: BlockListUpdateWithWhereUniqueWithoutUserInput | BlockListUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BlockListUpdateManyWithWhereWithoutUserInput | BlockListUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BlockListScalarWhereInput | BlockListScalarWhereInput[]
  }

  export type BlockListUncheckedUpdateManyWithoutBlockedUserNestedInput = {
    create?: XOR<BlockListCreateWithoutBlockedUserInput, BlockListUncheckedCreateWithoutBlockedUserInput> | BlockListCreateWithoutBlockedUserInput[] | BlockListUncheckedCreateWithoutBlockedUserInput[]
    connectOrCreate?: BlockListCreateOrConnectWithoutBlockedUserInput | BlockListCreateOrConnectWithoutBlockedUserInput[]
    upsert?: BlockListUpsertWithWhereUniqueWithoutBlockedUserInput | BlockListUpsertWithWhereUniqueWithoutBlockedUserInput[]
    createMany?: BlockListCreateManyBlockedUserInputEnvelope
    set?: BlockListWhereUniqueInput | BlockListWhereUniqueInput[]
    disconnect?: BlockListWhereUniqueInput | BlockListWhereUniqueInput[]
    delete?: BlockListWhereUniqueInput | BlockListWhereUniqueInput[]
    connect?: BlockListWhereUniqueInput | BlockListWhereUniqueInput[]
    update?: BlockListUpdateWithWhereUniqueWithoutBlockedUserInput | BlockListUpdateWithWhereUniqueWithoutBlockedUserInput[]
    updateMany?: BlockListUpdateManyWithWhereWithoutBlockedUserInput | BlockListUpdateManyWithWhereWithoutBlockedUserInput[]
    deleteMany?: BlockListScalarWhereInput | BlockListScalarWhereInput[]
  }

  export type GroupChatUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<GroupChatCreateWithoutCreatedByInput, GroupChatUncheckedCreateWithoutCreatedByInput> | GroupChatCreateWithoutCreatedByInput[] | GroupChatUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: GroupChatCreateOrConnectWithoutCreatedByInput | GroupChatCreateOrConnectWithoutCreatedByInput[]
    upsert?: GroupChatUpsertWithWhereUniqueWithoutCreatedByInput | GroupChatUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: GroupChatCreateManyCreatedByInputEnvelope
    set?: GroupChatWhereUniqueInput | GroupChatWhereUniqueInput[]
    disconnect?: GroupChatWhereUniqueInput | GroupChatWhereUniqueInput[]
    delete?: GroupChatWhereUniqueInput | GroupChatWhereUniqueInput[]
    connect?: GroupChatWhereUniqueInput | GroupChatWhereUniqueInput[]
    update?: GroupChatUpdateWithWhereUniqueWithoutCreatedByInput | GroupChatUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: GroupChatUpdateManyWithWhereWithoutCreatedByInput | GroupChatUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: GroupChatScalarWhereInput | GroupChatScalarWhereInput[]
  }

  export type GroupMemberUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<GroupMemberCreateWithoutUserInput, GroupMemberUncheckedCreateWithoutUserInput> | GroupMemberCreateWithoutUserInput[] | GroupMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GroupMemberCreateOrConnectWithoutUserInput | GroupMemberCreateOrConnectWithoutUserInput[]
    upsert?: GroupMemberUpsertWithWhereUniqueWithoutUserInput | GroupMemberUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: GroupMemberCreateManyUserInputEnvelope
    set?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    disconnect?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    delete?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    connect?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    update?: GroupMemberUpdateWithWhereUniqueWithoutUserInput | GroupMemberUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: GroupMemberUpdateManyWithWhereWithoutUserInput | GroupMemberUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: GroupMemberScalarWhereInput | GroupMemberScalarWhereInput[]
  }

  export type GroupJoinRequestUncheckedUpdateManyWithoutFromUserNestedInput = {
    create?: XOR<GroupJoinRequestCreateWithoutFromUserInput, GroupJoinRequestUncheckedCreateWithoutFromUserInput> | GroupJoinRequestCreateWithoutFromUserInput[] | GroupJoinRequestUncheckedCreateWithoutFromUserInput[]
    connectOrCreate?: GroupJoinRequestCreateOrConnectWithoutFromUserInput | GroupJoinRequestCreateOrConnectWithoutFromUserInput[]
    upsert?: GroupJoinRequestUpsertWithWhereUniqueWithoutFromUserInput | GroupJoinRequestUpsertWithWhereUniqueWithoutFromUserInput[]
    createMany?: GroupJoinRequestCreateManyFromUserInputEnvelope
    set?: GroupJoinRequestWhereUniqueInput | GroupJoinRequestWhereUniqueInput[]
    disconnect?: GroupJoinRequestWhereUniqueInput | GroupJoinRequestWhereUniqueInput[]
    delete?: GroupJoinRequestWhereUniqueInput | GroupJoinRequestWhereUniqueInput[]
    connect?: GroupJoinRequestWhereUniqueInput | GroupJoinRequestWhereUniqueInput[]
    update?: GroupJoinRequestUpdateWithWhereUniqueWithoutFromUserInput | GroupJoinRequestUpdateWithWhereUniqueWithoutFromUserInput[]
    updateMany?: GroupJoinRequestUpdateManyWithWhereWithoutFromUserInput | GroupJoinRequestUpdateManyWithWhereWithoutFromUserInput[]
    deleteMany?: GroupJoinRequestScalarWhereInput | GroupJoinRequestScalarWhereInput[]
  }

  export type GroupJoinRequestUncheckedUpdateManyWithoutToUserNestedInput = {
    create?: XOR<GroupJoinRequestCreateWithoutToUserInput, GroupJoinRequestUncheckedCreateWithoutToUserInput> | GroupJoinRequestCreateWithoutToUserInput[] | GroupJoinRequestUncheckedCreateWithoutToUserInput[]
    connectOrCreate?: GroupJoinRequestCreateOrConnectWithoutToUserInput | GroupJoinRequestCreateOrConnectWithoutToUserInput[]
    upsert?: GroupJoinRequestUpsertWithWhereUniqueWithoutToUserInput | GroupJoinRequestUpsertWithWhereUniqueWithoutToUserInput[]
    createMany?: GroupJoinRequestCreateManyToUserInputEnvelope
    set?: GroupJoinRequestWhereUniqueInput | GroupJoinRequestWhereUniqueInput[]
    disconnect?: GroupJoinRequestWhereUniqueInput | GroupJoinRequestWhereUniqueInput[]
    delete?: GroupJoinRequestWhereUniqueInput | GroupJoinRequestWhereUniqueInput[]
    connect?: GroupJoinRequestWhereUniqueInput | GroupJoinRequestWhereUniqueInput[]
    update?: GroupJoinRequestUpdateWithWhereUniqueWithoutToUserInput | GroupJoinRequestUpdateWithWhereUniqueWithoutToUserInput[]
    updateMany?: GroupJoinRequestUpdateManyWithWhereWithoutToUserInput | GroupJoinRequestUpdateManyWithWhereWithoutToUserInput[]
    deleteMany?: GroupJoinRequestScalarWhereInput | GroupJoinRequestScalarWhereInput[]
  }

  export type GroupMessageUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<GroupMessageCreateWithoutAuthorInput, GroupMessageUncheckedCreateWithoutAuthorInput> | GroupMessageCreateWithoutAuthorInput[] | GroupMessageUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: GroupMessageCreateOrConnectWithoutAuthorInput | GroupMessageCreateOrConnectWithoutAuthorInput[]
    upsert?: GroupMessageUpsertWithWhereUniqueWithoutAuthorInput | GroupMessageUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: GroupMessageCreateManyAuthorInputEnvelope
    set?: GroupMessageWhereUniqueInput | GroupMessageWhereUniqueInput[]
    disconnect?: GroupMessageWhereUniqueInput | GroupMessageWhereUniqueInput[]
    delete?: GroupMessageWhereUniqueInput | GroupMessageWhereUniqueInput[]
    connect?: GroupMessageWhereUniqueInput | GroupMessageWhereUniqueInput[]
    update?: GroupMessageUpdateWithWhereUniqueWithoutAuthorInput | GroupMessageUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: GroupMessageUpdateManyWithWhereWithoutAuthorInput | GroupMessageUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: GroupMessageScalarWhereInput | GroupMessageScalarWhereInput[]
  }

  export type PrivateMessageUncheckedUpdateManyWithoutFromUserNestedInput = {
    create?: XOR<PrivateMessageCreateWithoutFromUserInput, PrivateMessageUncheckedCreateWithoutFromUserInput> | PrivateMessageCreateWithoutFromUserInput[] | PrivateMessageUncheckedCreateWithoutFromUserInput[]
    connectOrCreate?: PrivateMessageCreateOrConnectWithoutFromUserInput | PrivateMessageCreateOrConnectWithoutFromUserInput[]
    upsert?: PrivateMessageUpsertWithWhereUniqueWithoutFromUserInput | PrivateMessageUpsertWithWhereUniqueWithoutFromUserInput[]
    createMany?: PrivateMessageCreateManyFromUserInputEnvelope
    set?: PrivateMessageWhereUniqueInput | PrivateMessageWhereUniqueInput[]
    disconnect?: PrivateMessageWhereUniqueInput | PrivateMessageWhereUniqueInput[]
    delete?: PrivateMessageWhereUniqueInput | PrivateMessageWhereUniqueInput[]
    connect?: PrivateMessageWhereUniqueInput | PrivateMessageWhereUniqueInput[]
    update?: PrivateMessageUpdateWithWhereUniqueWithoutFromUserInput | PrivateMessageUpdateWithWhereUniqueWithoutFromUserInput[]
    updateMany?: PrivateMessageUpdateManyWithWhereWithoutFromUserInput | PrivateMessageUpdateManyWithWhereWithoutFromUserInput[]
    deleteMany?: PrivateMessageScalarWhereInput | PrivateMessageScalarWhereInput[]
  }

  export type PrivateMessageUncheckedUpdateManyWithoutToUserNestedInput = {
    create?: XOR<PrivateMessageCreateWithoutToUserInput, PrivateMessageUncheckedCreateWithoutToUserInput> | PrivateMessageCreateWithoutToUserInput[] | PrivateMessageUncheckedCreateWithoutToUserInput[]
    connectOrCreate?: PrivateMessageCreateOrConnectWithoutToUserInput | PrivateMessageCreateOrConnectWithoutToUserInput[]
    upsert?: PrivateMessageUpsertWithWhereUniqueWithoutToUserInput | PrivateMessageUpsertWithWhereUniqueWithoutToUserInput[]
    createMany?: PrivateMessageCreateManyToUserInputEnvelope
    set?: PrivateMessageWhereUniqueInput | PrivateMessageWhereUniqueInput[]
    disconnect?: PrivateMessageWhereUniqueInput | PrivateMessageWhereUniqueInput[]
    delete?: PrivateMessageWhereUniqueInput | PrivateMessageWhereUniqueInput[]
    connect?: PrivateMessageWhereUniqueInput | PrivateMessageWhereUniqueInput[]
    update?: PrivateMessageUpdateWithWhereUniqueWithoutToUserInput | PrivateMessageUpdateWithWhereUniqueWithoutToUserInput[]
    updateMany?: PrivateMessageUpdateManyWithWhereWithoutToUserInput | PrivateMessageUpdateManyWithWhereWithoutToUserInput[]
    deleteMany?: PrivateMessageScalarWhereInput | PrivateMessageScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutGlobalMessagesInput = {
    create?: XOR<UserCreateWithoutGlobalMessagesInput, UserUncheckedCreateWithoutGlobalMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutGlobalMessagesInput
    connect?: UserWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutGlobalMessagesNestedInput = {
    create?: XOR<UserCreateWithoutGlobalMessagesInput, UserUncheckedCreateWithoutGlobalMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutGlobalMessagesInput
    upsert?: UserUpsertWithoutGlobalMessagesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutGlobalMessagesInput, UserUpdateWithoutGlobalMessagesInput>, UserUncheckedUpdateWithoutGlobalMessagesInput>
  }

  export type UserCreateNestedOneWithoutFriendsInput = {
    create?: XOR<UserCreateWithoutFriendsInput, UserUncheckedCreateWithoutFriendsInput>
    connectOrCreate?: UserCreateOrConnectWithoutFriendsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutFriendOfInput = {
    create?: XOR<UserCreateWithoutFriendOfInput, UserUncheckedCreateWithoutFriendOfInput>
    connectOrCreate?: UserCreateOrConnectWithoutFriendOfInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutFriendsNestedInput = {
    create?: XOR<UserCreateWithoutFriendsInput, UserUncheckedCreateWithoutFriendsInput>
    connectOrCreate?: UserCreateOrConnectWithoutFriendsInput
    upsert?: UserUpsertWithoutFriendsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFriendsInput, UserUpdateWithoutFriendsInput>, UserUncheckedUpdateWithoutFriendsInput>
  }

  export type UserUpdateOneRequiredWithoutFriendOfNestedInput = {
    create?: XOR<UserCreateWithoutFriendOfInput, UserUncheckedCreateWithoutFriendOfInput>
    connectOrCreate?: UserCreateOrConnectWithoutFriendOfInput
    upsert?: UserUpsertWithoutFriendOfInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFriendOfInput, UserUpdateWithoutFriendOfInput>, UserUncheckedUpdateWithoutFriendOfInput>
  }

  export type UserCreateNestedOneWithoutFriendRequestsInput = {
    create?: XOR<UserCreateWithoutFriendRequestsInput, UserUncheckedCreateWithoutFriendRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutFriendRequestsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReceivedRequestsInput = {
    create?: XOR<UserCreateWithoutReceivedRequestsInput, UserUncheckedCreateWithoutReceivedRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceivedRequestsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutFriendRequestsNestedInput = {
    create?: XOR<UserCreateWithoutFriendRequestsInput, UserUncheckedCreateWithoutFriendRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutFriendRequestsInput
    upsert?: UserUpsertWithoutFriendRequestsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFriendRequestsInput, UserUpdateWithoutFriendRequestsInput>, UserUncheckedUpdateWithoutFriendRequestsInput>
  }

  export type UserUpdateOneRequiredWithoutReceivedRequestsNestedInput = {
    create?: XOR<UserCreateWithoutReceivedRequestsInput, UserUncheckedCreateWithoutReceivedRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceivedRequestsInput
    upsert?: UserUpsertWithoutReceivedRequestsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReceivedRequestsInput, UserUpdateWithoutReceivedRequestsInput>, UserUncheckedUpdateWithoutReceivedRequestsInput>
  }

  export type UserCreateNestedOneWithoutBlockedInput = {
    create?: XOR<UserCreateWithoutBlockedInput, UserUncheckedCreateWithoutBlockedInput>
    connectOrCreate?: UserCreateOrConnectWithoutBlockedInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutBlockedByInput = {
    create?: XOR<UserCreateWithoutBlockedByInput, UserUncheckedCreateWithoutBlockedByInput>
    connectOrCreate?: UserCreateOrConnectWithoutBlockedByInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutBlockedNestedInput = {
    create?: XOR<UserCreateWithoutBlockedInput, UserUncheckedCreateWithoutBlockedInput>
    connectOrCreate?: UserCreateOrConnectWithoutBlockedInput
    upsert?: UserUpsertWithoutBlockedInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBlockedInput, UserUpdateWithoutBlockedInput>, UserUncheckedUpdateWithoutBlockedInput>
  }

  export type UserUpdateOneRequiredWithoutBlockedByNestedInput = {
    create?: XOR<UserCreateWithoutBlockedByInput, UserUncheckedCreateWithoutBlockedByInput>
    connectOrCreate?: UserCreateOrConnectWithoutBlockedByInput
    upsert?: UserUpsertWithoutBlockedByInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBlockedByInput, UserUpdateWithoutBlockedByInput>, UserUncheckedUpdateWithoutBlockedByInput>
  }

  export type UserCreateNestedOneWithoutGroupChatsCreatedInput = {
    create?: XOR<UserCreateWithoutGroupChatsCreatedInput, UserUncheckedCreateWithoutGroupChatsCreatedInput>
    connectOrCreate?: UserCreateOrConnectWithoutGroupChatsCreatedInput
    connect?: UserWhereUniqueInput
  }

  export type GroupMemberCreateNestedManyWithoutGroupInput = {
    create?: XOR<GroupMemberCreateWithoutGroupInput, GroupMemberUncheckedCreateWithoutGroupInput> | GroupMemberCreateWithoutGroupInput[] | GroupMemberUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: GroupMemberCreateOrConnectWithoutGroupInput | GroupMemberCreateOrConnectWithoutGroupInput[]
    createMany?: GroupMemberCreateManyGroupInputEnvelope
    connect?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
  }

  export type GroupMessageCreateNestedManyWithoutGroupInput = {
    create?: XOR<GroupMessageCreateWithoutGroupInput, GroupMessageUncheckedCreateWithoutGroupInput> | GroupMessageCreateWithoutGroupInput[] | GroupMessageUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: GroupMessageCreateOrConnectWithoutGroupInput | GroupMessageCreateOrConnectWithoutGroupInput[]
    createMany?: GroupMessageCreateManyGroupInputEnvelope
    connect?: GroupMessageWhereUniqueInput | GroupMessageWhereUniqueInput[]
  }

  export type GroupJoinRequestCreateNestedManyWithoutGroupInput = {
    create?: XOR<GroupJoinRequestCreateWithoutGroupInput, GroupJoinRequestUncheckedCreateWithoutGroupInput> | GroupJoinRequestCreateWithoutGroupInput[] | GroupJoinRequestUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: GroupJoinRequestCreateOrConnectWithoutGroupInput | GroupJoinRequestCreateOrConnectWithoutGroupInput[]
    createMany?: GroupJoinRequestCreateManyGroupInputEnvelope
    connect?: GroupJoinRequestWhereUniqueInput | GroupJoinRequestWhereUniqueInput[]
  }

  export type GroupMemberUncheckedCreateNestedManyWithoutGroupInput = {
    create?: XOR<GroupMemberCreateWithoutGroupInput, GroupMemberUncheckedCreateWithoutGroupInput> | GroupMemberCreateWithoutGroupInput[] | GroupMemberUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: GroupMemberCreateOrConnectWithoutGroupInput | GroupMemberCreateOrConnectWithoutGroupInput[]
    createMany?: GroupMemberCreateManyGroupInputEnvelope
    connect?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
  }

  export type GroupMessageUncheckedCreateNestedManyWithoutGroupInput = {
    create?: XOR<GroupMessageCreateWithoutGroupInput, GroupMessageUncheckedCreateWithoutGroupInput> | GroupMessageCreateWithoutGroupInput[] | GroupMessageUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: GroupMessageCreateOrConnectWithoutGroupInput | GroupMessageCreateOrConnectWithoutGroupInput[]
    createMany?: GroupMessageCreateManyGroupInputEnvelope
    connect?: GroupMessageWhereUniqueInput | GroupMessageWhereUniqueInput[]
  }

  export type GroupJoinRequestUncheckedCreateNestedManyWithoutGroupInput = {
    create?: XOR<GroupJoinRequestCreateWithoutGroupInput, GroupJoinRequestUncheckedCreateWithoutGroupInput> | GroupJoinRequestCreateWithoutGroupInput[] | GroupJoinRequestUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: GroupJoinRequestCreateOrConnectWithoutGroupInput | GroupJoinRequestCreateOrConnectWithoutGroupInput[]
    createMany?: GroupJoinRequestCreateManyGroupInputEnvelope
    connect?: GroupJoinRequestWhereUniqueInput | GroupJoinRequestWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutGroupChatsCreatedNestedInput = {
    create?: XOR<UserCreateWithoutGroupChatsCreatedInput, UserUncheckedCreateWithoutGroupChatsCreatedInput>
    connectOrCreate?: UserCreateOrConnectWithoutGroupChatsCreatedInput
    upsert?: UserUpsertWithoutGroupChatsCreatedInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutGroupChatsCreatedInput, UserUpdateWithoutGroupChatsCreatedInput>, UserUncheckedUpdateWithoutGroupChatsCreatedInput>
  }

  export type GroupMemberUpdateManyWithoutGroupNestedInput = {
    create?: XOR<GroupMemberCreateWithoutGroupInput, GroupMemberUncheckedCreateWithoutGroupInput> | GroupMemberCreateWithoutGroupInput[] | GroupMemberUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: GroupMemberCreateOrConnectWithoutGroupInput | GroupMemberCreateOrConnectWithoutGroupInput[]
    upsert?: GroupMemberUpsertWithWhereUniqueWithoutGroupInput | GroupMemberUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: GroupMemberCreateManyGroupInputEnvelope
    set?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    disconnect?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    delete?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    connect?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    update?: GroupMemberUpdateWithWhereUniqueWithoutGroupInput | GroupMemberUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: GroupMemberUpdateManyWithWhereWithoutGroupInput | GroupMemberUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: GroupMemberScalarWhereInput | GroupMemberScalarWhereInput[]
  }

  export type GroupMessageUpdateManyWithoutGroupNestedInput = {
    create?: XOR<GroupMessageCreateWithoutGroupInput, GroupMessageUncheckedCreateWithoutGroupInput> | GroupMessageCreateWithoutGroupInput[] | GroupMessageUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: GroupMessageCreateOrConnectWithoutGroupInput | GroupMessageCreateOrConnectWithoutGroupInput[]
    upsert?: GroupMessageUpsertWithWhereUniqueWithoutGroupInput | GroupMessageUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: GroupMessageCreateManyGroupInputEnvelope
    set?: GroupMessageWhereUniqueInput | GroupMessageWhereUniqueInput[]
    disconnect?: GroupMessageWhereUniqueInput | GroupMessageWhereUniqueInput[]
    delete?: GroupMessageWhereUniqueInput | GroupMessageWhereUniqueInput[]
    connect?: GroupMessageWhereUniqueInput | GroupMessageWhereUniqueInput[]
    update?: GroupMessageUpdateWithWhereUniqueWithoutGroupInput | GroupMessageUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: GroupMessageUpdateManyWithWhereWithoutGroupInput | GroupMessageUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: GroupMessageScalarWhereInput | GroupMessageScalarWhereInput[]
  }

  export type GroupJoinRequestUpdateManyWithoutGroupNestedInput = {
    create?: XOR<GroupJoinRequestCreateWithoutGroupInput, GroupJoinRequestUncheckedCreateWithoutGroupInput> | GroupJoinRequestCreateWithoutGroupInput[] | GroupJoinRequestUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: GroupJoinRequestCreateOrConnectWithoutGroupInput | GroupJoinRequestCreateOrConnectWithoutGroupInput[]
    upsert?: GroupJoinRequestUpsertWithWhereUniqueWithoutGroupInput | GroupJoinRequestUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: GroupJoinRequestCreateManyGroupInputEnvelope
    set?: GroupJoinRequestWhereUniqueInput | GroupJoinRequestWhereUniqueInput[]
    disconnect?: GroupJoinRequestWhereUniqueInput | GroupJoinRequestWhereUniqueInput[]
    delete?: GroupJoinRequestWhereUniqueInput | GroupJoinRequestWhereUniqueInput[]
    connect?: GroupJoinRequestWhereUniqueInput | GroupJoinRequestWhereUniqueInput[]
    update?: GroupJoinRequestUpdateWithWhereUniqueWithoutGroupInput | GroupJoinRequestUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: GroupJoinRequestUpdateManyWithWhereWithoutGroupInput | GroupJoinRequestUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: GroupJoinRequestScalarWhereInput | GroupJoinRequestScalarWhereInput[]
  }

  export type GroupMemberUncheckedUpdateManyWithoutGroupNestedInput = {
    create?: XOR<GroupMemberCreateWithoutGroupInput, GroupMemberUncheckedCreateWithoutGroupInput> | GroupMemberCreateWithoutGroupInput[] | GroupMemberUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: GroupMemberCreateOrConnectWithoutGroupInput | GroupMemberCreateOrConnectWithoutGroupInput[]
    upsert?: GroupMemberUpsertWithWhereUniqueWithoutGroupInput | GroupMemberUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: GroupMemberCreateManyGroupInputEnvelope
    set?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    disconnect?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    delete?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    connect?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    update?: GroupMemberUpdateWithWhereUniqueWithoutGroupInput | GroupMemberUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: GroupMemberUpdateManyWithWhereWithoutGroupInput | GroupMemberUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: GroupMemberScalarWhereInput | GroupMemberScalarWhereInput[]
  }

  export type GroupMessageUncheckedUpdateManyWithoutGroupNestedInput = {
    create?: XOR<GroupMessageCreateWithoutGroupInput, GroupMessageUncheckedCreateWithoutGroupInput> | GroupMessageCreateWithoutGroupInput[] | GroupMessageUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: GroupMessageCreateOrConnectWithoutGroupInput | GroupMessageCreateOrConnectWithoutGroupInput[]
    upsert?: GroupMessageUpsertWithWhereUniqueWithoutGroupInput | GroupMessageUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: GroupMessageCreateManyGroupInputEnvelope
    set?: GroupMessageWhereUniqueInput | GroupMessageWhereUniqueInput[]
    disconnect?: GroupMessageWhereUniqueInput | GroupMessageWhereUniqueInput[]
    delete?: GroupMessageWhereUniqueInput | GroupMessageWhereUniqueInput[]
    connect?: GroupMessageWhereUniqueInput | GroupMessageWhereUniqueInput[]
    update?: GroupMessageUpdateWithWhereUniqueWithoutGroupInput | GroupMessageUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: GroupMessageUpdateManyWithWhereWithoutGroupInput | GroupMessageUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: GroupMessageScalarWhereInput | GroupMessageScalarWhereInput[]
  }

  export type GroupJoinRequestUncheckedUpdateManyWithoutGroupNestedInput = {
    create?: XOR<GroupJoinRequestCreateWithoutGroupInput, GroupJoinRequestUncheckedCreateWithoutGroupInput> | GroupJoinRequestCreateWithoutGroupInput[] | GroupJoinRequestUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: GroupJoinRequestCreateOrConnectWithoutGroupInput | GroupJoinRequestCreateOrConnectWithoutGroupInput[]
    upsert?: GroupJoinRequestUpsertWithWhereUniqueWithoutGroupInput | GroupJoinRequestUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: GroupJoinRequestCreateManyGroupInputEnvelope
    set?: GroupJoinRequestWhereUniqueInput | GroupJoinRequestWhereUniqueInput[]
    disconnect?: GroupJoinRequestWhereUniqueInput | GroupJoinRequestWhereUniqueInput[]
    delete?: GroupJoinRequestWhereUniqueInput | GroupJoinRequestWhereUniqueInput[]
    connect?: GroupJoinRequestWhereUniqueInput | GroupJoinRequestWhereUniqueInput[]
    update?: GroupJoinRequestUpdateWithWhereUniqueWithoutGroupInput | GroupJoinRequestUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: GroupJoinRequestUpdateManyWithWhereWithoutGroupInput | GroupJoinRequestUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: GroupJoinRequestScalarWhereInput | GroupJoinRequestScalarWhereInput[]
  }

  export type GroupChatCreateNestedOneWithoutMembersInput = {
    create?: XOR<GroupChatCreateWithoutMembersInput, GroupChatUncheckedCreateWithoutMembersInput>
    connectOrCreate?: GroupChatCreateOrConnectWithoutMembersInput
    connect?: GroupChatWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutGroupMembersInput = {
    create?: XOR<UserCreateWithoutGroupMembersInput, UserUncheckedCreateWithoutGroupMembersInput>
    connectOrCreate?: UserCreateOrConnectWithoutGroupMembersInput
    connect?: UserWhereUniqueInput
  }

  export type GroupChatUpdateOneRequiredWithoutMembersNestedInput = {
    create?: XOR<GroupChatCreateWithoutMembersInput, GroupChatUncheckedCreateWithoutMembersInput>
    connectOrCreate?: GroupChatCreateOrConnectWithoutMembersInput
    upsert?: GroupChatUpsertWithoutMembersInput
    connect?: GroupChatWhereUniqueInput
    update?: XOR<XOR<GroupChatUpdateToOneWithWhereWithoutMembersInput, GroupChatUpdateWithoutMembersInput>, GroupChatUncheckedUpdateWithoutMembersInput>
  }

  export type UserUpdateOneRequiredWithoutGroupMembersNestedInput = {
    create?: XOR<UserCreateWithoutGroupMembersInput, UserUncheckedCreateWithoutGroupMembersInput>
    connectOrCreate?: UserCreateOrConnectWithoutGroupMembersInput
    upsert?: UserUpsertWithoutGroupMembersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutGroupMembersInput, UserUpdateWithoutGroupMembersInput>, UserUncheckedUpdateWithoutGroupMembersInput>
  }

  export type GroupChatCreateNestedOneWithoutJoinRequestsInput = {
    create?: XOR<GroupChatCreateWithoutJoinRequestsInput, GroupChatUncheckedCreateWithoutJoinRequestsInput>
    connectOrCreate?: GroupChatCreateOrConnectWithoutJoinRequestsInput
    connect?: GroupChatWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutGroupJoinRequestsInput = {
    create?: XOR<UserCreateWithoutGroupJoinRequestsInput, UserUncheckedCreateWithoutGroupJoinRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutGroupJoinRequestsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReceivedGroupJoinRequestsInput = {
    create?: XOR<UserCreateWithoutReceivedGroupJoinRequestsInput, UserUncheckedCreateWithoutReceivedGroupJoinRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceivedGroupJoinRequestsInput
    connect?: UserWhereUniqueInput
  }

  export type GroupChatUpdateOneRequiredWithoutJoinRequestsNestedInput = {
    create?: XOR<GroupChatCreateWithoutJoinRequestsInput, GroupChatUncheckedCreateWithoutJoinRequestsInput>
    connectOrCreate?: GroupChatCreateOrConnectWithoutJoinRequestsInput
    upsert?: GroupChatUpsertWithoutJoinRequestsInput
    connect?: GroupChatWhereUniqueInput
    update?: XOR<XOR<GroupChatUpdateToOneWithWhereWithoutJoinRequestsInput, GroupChatUpdateWithoutJoinRequestsInput>, GroupChatUncheckedUpdateWithoutJoinRequestsInput>
  }

  export type UserUpdateOneRequiredWithoutGroupJoinRequestsNestedInput = {
    create?: XOR<UserCreateWithoutGroupJoinRequestsInput, UserUncheckedCreateWithoutGroupJoinRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutGroupJoinRequestsInput
    upsert?: UserUpsertWithoutGroupJoinRequestsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutGroupJoinRequestsInput, UserUpdateWithoutGroupJoinRequestsInput>, UserUncheckedUpdateWithoutGroupJoinRequestsInput>
  }

  export type UserUpdateOneRequiredWithoutReceivedGroupJoinRequestsNestedInput = {
    create?: XOR<UserCreateWithoutReceivedGroupJoinRequestsInput, UserUncheckedCreateWithoutReceivedGroupJoinRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceivedGroupJoinRequestsInput
    upsert?: UserUpsertWithoutReceivedGroupJoinRequestsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReceivedGroupJoinRequestsInput, UserUpdateWithoutReceivedGroupJoinRequestsInput>, UserUncheckedUpdateWithoutReceivedGroupJoinRequestsInput>
  }

  export type GroupChatCreateNestedOneWithoutMessagesInput = {
    create?: XOR<GroupChatCreateWithoutMessagesInput, GroupChatUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: GroupChatCreateOrConnectWithoutMessagesInput
    connect?: GroupChatWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutGroupMessagesInput = {
    create?: XOR<UserCreateWithoutGroupMessagesInput, UserUncheckedCreateWithoutGroupMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutGroupMessagesInput
    connect?: UserWhereUniqueInput
  }

  export type GroupChatUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<GroupChatCreateWithoutMessagesInput, GroupChatUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: GroupChatCreateOrConnectWithoutMessagesInput
    upsert?: GroupChatUpsertWithoutMessagesInput
    connect?: GroupChatWhereUniqueInput
    update?: XOR<XOR<GroupChatUpdateToOneWithWhereWithoutMessagesInput, GroupChatUpdateWithoutMessagesInput>, GroupChatUncheckedUpdateWithoutMessagesInput>
  }

  export type UserUpdateOneRequiredWithoutGroupMessagesNestedInput = {
    create?: XOR<UserCreateWithoutGroupMessagesInput, UserUncheckedCreateWithoutGroupMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutGroupMessagesInput
    upsert?: UserUpsertWithoutGroupMessagesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutGroupMessagesInput, UserUpdateWithoutGroupMessagesInput>, UserUncheckedUpdateWithoutGroupMessagesInput>
  }

  export type UserCreateNestedOneWithoutPrivateMessagesSentInput = {
    create?: XOR<UserCreateWithoutPrivateMessagesSentInput, UserUncheckedCreateWithoutPrivateMessagesSentInput>
    connectOrCreate?: UserCreateOrConnectWithoutPrivateMessagesSentInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutPrivateMessagesReceivedInput = {
    create?: XOR<UserCreateWithoutPrivateMessagesReceivedInput, UserUncheckedCreateWithoutPrivateMessagesReceivedInput>
    connectOrCreate?: UserCreateOrConnectWithoutPrivateMessagesReceivedInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutPrivateMessagesSentNestedInput = {
    create?: XOR<UserCreateWithoutPrivateMessagesSentInput, UserUncheckedCreateWithoutPrivateMessagesSentInput>
    connectOrCreate?: UserCreateOrConnectWithoutPrivateMessagesSentInput
    upsert?: UserUpsertWithoutPrivateMessagesSentInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPrivateMessagesSentInput, UserUpdateWithoutPrivateMessagesSentInput>, UserUncheckedUpdateWithoutPrivateMessagesSentInput>
  }

  export type UserUpdateOneRequiredWithoutPrivateMessagesReceivedNestedInput = {
    create?: XOR<UserCreateWithoutPrivateMessagesReceivedInput, UserUncheckedCreateWithoutPrivateMessagesReceivedInput>
    connectOrCreate?: UserCreateOrConnectWithoutPrivateMessagesReceivedInput
    upsert?: UserUpsertWithoutPrivateMessagesReceivedInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPrivateMessagesReceivedInput, UserUpdateWithoutPrivateMessagesReceivedInput>, UserUncheckedUpdateWithoutPrivateMessagesReceivedInput>
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

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type GlobalMessageCreateWithoutAuthorInput = {
    id?: string
    content?: string | null
    photoUrl?: string | null
    type?: string | null
    createdAt?: Date | string
    deleted?: boolean
  }

  export type GlobalMessageUncheckedCreateWithoutAuthorInput = {
    id?: string
    content?: string | null
    photoUrl?: string | null
    type?: string | null
    createdAt?: Date | string
    deleted?: boolean
  }

  export type GlobalMessageCreateOrConnectWithoutAuthorInput = {
    where: GlobalMessageWhereUniqueInput
    create: XOR<GlobalMessageCreateWithoutAuthorInput, GlobalMessageUncheckedCreateWithoutAuthorInput>
  }

  export type GlobalMessageCreateManyAuthorInputEnvelope = {
    data: GlobalMessageCreateManyAuthorInput | GlobalMessageCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type FriendsCreateWithoutUserInput = {
    friendsSince?: Date | string
    friend: UserCreateNestedOneWithoutFriendOfInput
  }

  export type FriendsUncheckedCreateWithoutUserInput = {
    friendId: string
    friendsSince?: Date | string
  }

  export type FriendsCreateOrConnectWithoutUserInput = {
    where: FriendsWhereUniqueInput
    create: XOR<FriendsCreateWithoutUserInput, FriendsUncheckedCreateWithoutUserInput>
  }

  export type FriendsCreateManyUserInputEnvelope = {
    data: FriendsCreateManyUserInput | FriendsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type FriendsCreateWithoutFriendInput = {
    friendsSince?: Date | string
    user: UserCreateNestedOneWithoutFriendsInput
  }

  export type FriendsUncheckedCreateWithoutFriendInput = {
    userId: string
    friendsSince?: Date | string
  }

  export type FriendsCreateOrConnectWithoutFriendInput = {
    where: FriendsWhereUniqueInput
    create: XOR<FriendsCreateWithoutFriendInput, FriendsUncheckedCreateWithoutFriendInput>
  }

  export type FriendsCreateManyFriendInputEnvelope = {
    data: FriendsCreateManyFriendInput | FriendsCreateManyFriendInput[]
    skipDuplicates?: boolean
  }

  export type FriendRequestCreateWithoutRequestFromInput = {
    id?: string
    requestedAt?: Date | string
    requestTo: UserCreateNestedOneWithoutReceivedRequestsInput
  }

  export type FriendRequestUncheckedCreateWithoutRequestFromInput = {
    id?: string
    requestToId: string
    requestedAt?: Date | string
  }

  export type FriendRequestCreateOrConnectWithoutRequestFromInput = {
    where: FriendRequestWhereUniqueInput
    create: XOR<FriendRequestCreateWithoutRequestFromInput, FriendRequestUncheckedCreateWithoutRequestFromInput>
  }

  export type FriendRequestCreateManyRequestFromInputEnvelope = {
    data: FriendRequestCreateManyRequestFromInput | FriendRequestCreateManyRequestFromInput[]
    skipDuplicates?: boolean
  }

  export type FriendRequestCreateWithoutRequestToInput = {
    id?: string
    requestedAt?: Date | string
    requestFrom: UserCreateNestedOneWithoutFriendRequestsInput
  }

  export type FriendRequestUncheckedCreateWithoutRequestToInput = {
    id?: string
    requestFromId: string
    requestedAt?: Date | string
  }

  export type FriendRequestCreateOrConnectWithoutRequestToInput = {
    where: FriendRequestWhereUniqueInput
    create: XOR<FriendRequestCreateWithoutRequestToInput, FriendRequestUncheckedCreateWithoutRequestToInput>
  }

  export type FriendRequestCreateManyRequestToInputEnvelope = {
    data: FriendRequestCreateManyRequestToInput | FriendRequestCreateManyRequestToInput[]
    skipDuplicates?: boolean
  }

  export type BlockListCreateWithoutUserInput = {
    blockedAt?: Date | string
    blockedUser: UserCreateNestedOneWithoutBlockedByInput
  }

  export type BlockListUncheckedCreateWithoutUserInput = {
    blockedUserId: string
    blockedAt?: Date | string
  }

  export type BlockListCreateOrConnectWithoutUserInput = {
    where: BlockListWhereUniqueInput
    create: XOR<BlockListCreateWithoutUserInput, BlockListUncheckedCreateWithoutUserInput>
  }

  export type BlockListCreateManyUserInputEnvelope = {
    data: BlockListCreateManyUserInput | BlockListCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type BlockListCreateWithoutBlockedUserInput = {
    blockedAt?: Date | string
    user: UserCreateNestedOneWithoutBlockedInput
  }

  export type BlockListUncheckedCreateWithoutBlockedUserInput = {
    userId: string
    blockedAt?: Date | string
  }

  export type BlockListCreateOrConnectWithoutBlockedUserInput = {
    where: BlockListWhereUniqueInput
    create: XOR<BlockListCreateWithoutBlockedUserInput, BlockListUncheckedCreateWithoutBlockedUserInput>
  }

  export type BlockListCreateManyBlockedUserInputEnvelope = {
    data: BlockListCreateManyBlockedUserInput | BlockListCreateManyBlockedUserInput[]
    skipDuplicates?: boolean
  }

  export type GroupChatCreateWithoutCreatedByInput = {
    id?: string
    groupName: string
    groupPhoto?: string | null
    createdAt?: Date | string
    members?: GroupMemberCreateNestedManyWithoutGroupInput
    messages?: GroupMessageCreateNestedManyWithoutGroupInput
    joinRequests?: GroupJoinRequestCreateNestedManyWithoutGroupInput
  }

  export type GroupChatUncheckedCreateWithoutCreatedByInput = {
    id?: string
    groupName: string
    groupPhoto?: string | null
    createdAt?: Date | string
    members?: GroupMemberUncheckedCreateNestedManyWithoutGroupInput
    messages?: GroupMessageUncheckedCreateNestedManyWithoutGroupInput
    joinRequests?: GroupJoinRequestUncheckedCreateNestedManyWithoutGroupInput
  }

  export type GroupChatCreateOrConnectWithoutCreatedByInput = {
    where: GroupChatWhereUniqueInput
    create: XOR<GroupChatCreateWithoutCreatedByInput, GroupChatUncheckedCreateWithoutCreatedByInput>
  }

  export type GroupChatCreateManyCreatedByInputEnvelope = {
    data: GroupChatCreateManyCreatedByInput | GroupChatCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type GroupMemberCreateWithoutUserInput = {
    isAdmin?: boolean
    joinedAt?: Date | string
    group: GroupChatCreateNestedOneWithoutMembersInput
  }

  export type GroupMemberUncheckedCreateWithoutUserInput = {
    groupId: string
    isAdmin?: boolean
    joinedAt?: Date | string
  }

  export type GroupMemberCreateOrConnectWithoutUserInput = {
    where: GroupMemberWhereUniqueInput
    create: XOR<GroupMemberCreateWithoutUserInput, GroupMemberUncheckedCreateWithoutUserInput>
  }

  export type GroupMemberCreateManyUserInputEnvelope = {
    data: GroupMemberCreateManyUserInput | GroupMemberCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type GroupJoinRequestCreateWithoutFromUserInput = {
    id?: string
    requestedAt?: Date | string
    group: GroupChatCreateNestedOneWithoutJoinRequestsInput
    toUser: UserCreateNestedOneWithoutReceivedGroupJoinRequestsInput
  }

  export type GroupJoinRequestUncheckedCreateWithoutFromUserInput = {
    id?: string
    groupId: string
    toUserId: string
    requestedAt?: Date | string
  }

  export type GroupJoinRequestCreateOrConnectWithoutFromUserInput = {
    where: GroupJoinRequestWhereUniqueInput
    create: XOR<GroupJoinRequestCreateWithoutFromUserInput, GroupJoinRequestUncheckedCreateWithoutFromUserInput>
  }

  export type GroupJoinRequestCreateManyFromUserInputEnvelope = {
    data: GroupJoinRequestCreateManyFromUserInput | GroupJoinRequestCreateManyFromUserInput[]
    skipDuplicates?: boolean
  }

  export type GroupJoinRequestCreateWithoutToUserInput = {
    id?: string
    requestedAt?: Date | string
    group: GroupChatCreateNestedOneWithoutJoinRequestsInput
    fromUser: UserCreateNestedOneWithoutGroupJoinRequestsInput
  }

  export type GroupJoinRequestUncheckedCreateWithoutToUserInput = {
    id?: string
    groupId: string
    fromUserId: string
    requestedAt?: Date | string
  }

  export type GroupJoinRequestCreateOrConnectWithoutToUserInput = {
    where: GroupJoinRequestWhereUniqueInput
    create: XOR<GroupJoinRequestCreateWithoutToUserInput, GroupJoinRequestUncheckedCreateWithoutToUserInput>
  }

  export type GroupJoinRequestCreateManyToUserInputEnvelope = {
    data: GroupJoinRequestCreateManyToUserInput | GroupJoinRequestCreateManyToUserInput[]
    skipDuplicates?: boolean
  }

  export type GroupMessageCreateWithoutAuthorInput = {
    id?: string
    content?: string | null
    photoUrl?: string | null
    type?: string | null
    createdAt?: Date | string
    deleted?: boolean
    group: GroupChatCreateNestedOneWithoutMessagesInput
  }

  export type GroupMessageUncheckedCreateWithoutAuthorInput = {
    id?: string
    groupId: string
    content?: string | null
    photoUrl?: string | null
    type?: string | null
    createdAt?: Date | string
    deleted?: boolean
  }

  export type GroupMessageCreateOrConnectWithoutAuthorInput = {
    where: GroupMessageWhereUniqueInput
    create: XOR<GroupMessageCreateWithoutAuthorInput, GroupMessageUncheckedCreateWithoutAuthorInput>
  }

  export type GroupMessageCreateManyAuthorInputEnvelope = {
    data: GroupMessageCreateManyAuthorInput | GroupMessageCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type PrivateMessageCreateWithoutFromUserInput = {
    id?: string
    content?: string | null
    photoUrl?: string | null
    type?: string | null
    createdAt?: Date | string
    deleted?: boolean
    toUser: UserCreateNestedOneWithoutPrivateMessagesReceivedInput
  }

  export type PrivateMessageUncheckedCreateWithoutFromUserInput = {
    id?: string
    toUserId: string
    content?: string | null
    photoUrl?: string | null
    type?: string | null
    createdAt?: Date | string
    deleted?: boolean
  }

  export type PrivateMessageCreateOrConnectWithoutFromUserInput = {
    where: PrivateMessageWhereUniqueInput
    create: XOR<PrivateMessageCreateWithoutFromUserInput, PrivateMessageUncheckedCreateWithoutFromUserInput>
  }

  export type PrivateMessageCreateManyFromUserInputEnvelope = {
    data: PrivateMessageCreateManyFromUserInput | PrivateMessageCreateManyFromUserInput[]
    skipDuplicates?: boolean
  }

  export type PrivateMessageCreateWithoutToUserInput = {
    id?: string
    content?: string | null
    photoUrl?: string | null
    type?: string | null
    createdAt?: Date | string
    deleted?: boolean
    fromUser: UserCreateNestedOneWithoutPrivateMessagesSentInput
  }

  export type PrivateMessageUncheckedCreateWithoutToUserInput = {
    id?: string
    fromUserId: string
    content?: string | null
    photoUrl?: string | null
    type?: string | null
    createdAt?: Date | string
    deleted?: boolean
  }

  export type PrivateMessageCreateOrConnectWithoutToUserInput = {
    where: PrivateMessageWhereUniqueInput
    create: XOR<PrivateMessageCreateWithoutToUserInput, PrivateMessageUncheckedCreateWithoutToUserInput>
  }

  export type PrivateMessageCreateManyToUserInputEnvelope = {
    data: PrivateMessageCreateManyToUserInput | PrivateMessageCreateManyToUserInput[]
    skipDuplicates?: boolean
  }

  export type GlobalMessageUpsertWithWhereUniqueWithoutAuthorInput = {
    where: GlobalMessageWhereUniqueInput
    update: XOR<GlobalMessageUpdateWithoutAuthorInput, GlobalMessageUncheckedUpdateWithoutAuthorInput>
    create: XOR<GlobalMessageCreateWithoutAuthorInput, GlobalMessageUncheckedCreateWithoutAuthorInput>
  }

  export type GlobalMessageUpdateWithWhereUniqueWithoutAuthorInput = {
    where: GlobalMessageWhereUniqueInput
    data: XOR<GlobalMessageUpdateWithoutAuthorInput, GlobalMessageUncheckedUpdateWithoutAuthorInput>
  }

  export type GlobalMessageUpdateManyWithWhereWithoutAuthorInput = {
    where: GlobalMessageScalarWhereInput
    data: XOR<GlobalMessageUpdateManyMutationInput, GlobalMessageUncheckedUpdateManyWithoutAuthorInput>
  }

  export type GlobalMessageScalarWhereInput = {
    AND?: GlobalMessageScalarWhereInput | GlobalMessageScalarWhereInput[]
    OR?: GlobalMessageScalarWhereInput[]
    NOT?: GlobalMessageScalarWhereInput | GlobalMessageScalarWhereInput[]
    id?: StringFilter<"GlobalMessage"> | string
    authorId?: StringFilter<"GlobalMessage"> | string
    content?: StringNullableFilter<"GlobalMessage"> | string | null
    photoUrl?: StringNullableFilter<"GlobalMessage"> | string | null
    type?: StringNullableFilter<"GlobalMessage"> | string | null
    createdAt?: DateTimeFilter<"GlobalMessage"> | Date | string
    deleted?: BoolFilter<"GlobalMessage"> | boolean
  }

  export type FriendsUpsertWithWhereUniqueWithoutUserInput = {
    where: FriendsWhereUniqueInput
    update: XOR<FriendsUpdateWithoutUserInput, FriendsUncheckedUpdateWithoutUserInput>
    create: XOR<FriendsCreateWithoutUserInput, FriendsUncheckedCreateWithoutUserInput>
  }

  export type FriendsUpdateWithWhereUniqueWithoutUserInput = {
    where: FriendsWhereUniqueInput
    data: XOR<FriendsUpdateWithoutUserInput, FriendsUncheckedUpdateWithoutUserInput>
  }

  export type FriendsUpdateManyWithWhereWithoutUserInput = {
    where: FriendsScalarWhereInput
    data: XOR<FriendsUpdateManyMutationInput, FriendsUncheckedUpdateManyWithoutUserInput>
  }

  export type FriendsScalarWhereInput = {
    AND?: FriendsScalarWhereInput | FriendsScalarWhereInput[]
    OR?: FriendsScalarWhereInput[]
    NOT?: FriendsScalarWhereInput | FriendsScalarWhereInput[]
    userId?: StringFilter<"Friends"> | string
    friendId?: StringFilter<"Friends"> | string
    friendsSince?: DateTimeFilter<"Friends"> | Date | string
  }

  export type FriendsUpsertWithWhereUniqueWithoutFriendInput = {
    where: FriendsWhereUniqueInput
    update: XOR<FriendsUpdateWithoutFriendInput, FriendsUncheckedUpdateWithoutFriendInput>
    create: XOR<FriendsCreateWithoutFriendInput, FriendsUncheckedCreateWithoutFriendInput>
  }

  export type FriendsUpdateWithWhereUniqueWithoutFriendInput = {
    where: FriendsWhereUniqueInput
    data: XOR<FriendsUpdateWithoutFriendInput, FriendsUncheckedUpdateWithoutFriendInput>
  }

  export type FriendsUpdateManyWithWhereWithoutFriendInput = {
    where: FriendsScalarWhereInput
    data: XOR<FriendsUpdateManyMutationInput, FriendsUncheckedUpdateManyWithoutFriendInput>
  }

  export type FriendRequestUpsertWithWhereUniqueWithoutRequestFromInput = {
    where: FriendRequestWhereUniqueInput
    update: XOR<FriendRequestUpdateWithoutRequestFromInput, FriendRequestUncheckedUpdateWithoutRequestFromInput>
    create: XOR<FriendRequestCreateWithoutRequestFromInput, FriendRequestUncheckedCreateWithoutRequestFromInput>
  }

  export type FriendRequestUpdateWithWhereUniqueWithoutRequestFromInput = {
    where: FriendRequestWhereUniqueInput
    data: XOR<FriendRequestUpdateWithoutRequestFromInput, FriendRequestUncheckedUpdateWithoutRequestFromInput>
  }

  export type FriendRequestUpdateManyWithWhereWithoutRequestFromInput = {
    where: FriendRequestScalarWhereInput
    data: XOR<FriendRequestUpdateManyMutationInput, FriendRequestUncheckedUpdateManyWithoutRequestFromInput>
  }

  export type FriendRequestScalarWhereInput = {
    AND?: FriendRequestScalarWhereInput | FriendRequestScalarWhereInput[]
    OR?: FriendRequestScalarWhereInput[]
    NOT?: FriendRequestScalarWhereInput | FriendRequestScalarWhereInput[]
    id?: StringFilter<"FriendRequest"> | string
    requestFromId?: StringFilter<"FriendRequest"> | string
    requestToId?: StringFilter<"FriendRequest"> | string
    requestedAt?: DateTimeFilter<"FriendRequest"> | Date | string
  }

  export type FriendRequestUpsertWithWhereUniqueWithoutRequestToInput = {
    where: FriendRequestWhereUniqueInput
    update: XOR<FriendRequestUpdateWithoutRequestToInput, FriendRequestUncheckedUpdateWithoutRequestToInput>
    create: XOR<FriendRequestCreateWithoutRequestToInput, FriendRequestUncheckedCreateWithoutRequestToInput>
  }

  export type FriendRequestUpdateWithWhereUniqueWithoutRequestToInput = {
    where: FriendRequestWhereUniqueInput
    data: XOR<FriendRequestUpdateWithoutRequestToInput, FriendRequestUncheckedUpdateWithoutRequestToInput>
  }

  export type FriendRequestUpdateManyWithWhereWithoutRequestToInput = {
    where: FriendRequestScalarWhereInput
    data: XOR<FriendRequestUpdateManyMutationInput, FriendRequestUncheckedUpdateManyWithoutRequestToInput>
  }

  export type BlockListUpsertWithWhereUniqueWithoutUserInput = {
    where: BlockListWhereUniqueInput
    update: XOR<BlockListUpdateWithoutUserInput, BlockListUncheckedUpdateWithoutUserInput>
    create: XOR<BlockListCreateWithoutUserInput, BlockListUncheckedCreateWithoutUserInput>
  }

  export type BlockListUpdateWithWhereUniqueWithoutUserInput = {
    where: BlockListWhereUniqueInput
    data: XOR<BlockListUpdateWithoutUserInput, BlockListUncheckedUpdateWithoutUserInput>
  }

  export type BlockListUpdateManyWithWhereWithoutUserInput = {
    where: BlockListScalarWhereInput
    data: XOR<BlockListUpdateManyMutationInput, BlockListUncheckedUpdateManyWithoutUserInput>
  }

  export type BlockListScalarWhereInput = {
    AND?: BlockListScalarWhereInput | BlockListScalarWhereInput[]
    OR?: BlockListScalarWhereInput[]
    NOT?: BlockListScalarWhereInput | BlockListScalarWhereInput[]
    userId?: StringFilter<"BlockList"> | string
    blockedUserId?: StringFilter<"BlockList"> | string
    blockedAt?: DateTimeFilter<"BlockList"> | Date | string
  }

  export type BlockListUpsertWithWhereUniqueWithoutBlockedUserInput = {
    where: BlockListWhereUniqueInput
    update: XOR<BlockListUpdateWithoutBlockedUserInput, BlockListUncheckedUpdateWithoutBlockedUserInput>
    create: XOR<BlockListCreateWithoutBlockedUserInput, BlockListUncheckedCreateWithoutBlockedUserInput>
  }

  export type BlockListUpdateWithWhereUniqueWithoutBlockedUserInput = {
    where: BlockListWhereUniqueInput
    data: XOR<BlockListUpdateWithoutBlockedUserInput, BlockListUncheckedUpdateWithoutBlockedUserInput>
  }

  export type BlockListUpdateManyWithWhereWithoutBlockedUserInput = {
    where: BlockListScalarWhereInput
    data: XOR<BlockListUpdateManyMutationInput, BlockListUncheckedUpdateManyWithoutBlockedUserInput>
  }

  export type GroupChatUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: GroupChatWhereUniqueInput
    update: XOR<GroupChatUpdateWithoutCreatedByInput, GroupChatUncheckedUpdateWithoutCreatedByInput>
    create: XOR<GroupChatCreateWithoutCreatedByInput, GroupChatUncheckedCreateWithoutCreatedByInput>
  }

  export type GroupChatUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: GroupChatWhereUniqueInput
    data: XOR<GroupChatUpdateWithoutCreatedByInput, GroupChatUncheckedUpdateWithoutCreatedByInput>
  }

  export type GroupChatUpdateManyWithWhereWithoutCreatedByInput = {
    where: GroupChatScalarWhereInput
    data: XOR<GroupChatUpdateManyMutationInput, GroupChatUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type GroupChatScalarWhereInput = {
    AND?: GroupChatScalarWhereInput | GroupChatScalarWhereInput[]
    OR?: GroupChatScalarWhereInput[]
    NOT?: GroupChatScalarWhereInput | GroupChatScalarWhereInput[]
    id?: StringFilter<"GroupChat"> | string
    groupName?: StringFilter<"GroupChat"> | string
    groupPhoto?: StringNullableFilter<"GroupChat"> | string | null
    createdById?: StringFilter<"GroupChat"> | string
    createdAt?: DateTimeFilter<"GroupChat"> | Date | string
  }

  export type GroupMemberUpsertWithWhereUniqueWithoutUserInput = {
    where: GroupMemberWhereUniqueInput
    update: XOR<GroupMemberUpdateWithoutUserInput, GroupMemberUncheckedUpdateWithoutUserInput>
    create: XOR<GroupMemberCreateWithoutUserInput, GroupMemberUncheckedCreateWithoutUserInput>
  }

  export type GroupMemberUpdateWithWhereUniqueWithoutUserInput = {
    where: GroupMemberWhereUniqueInput
    data: XOR<GroupMemberUpdateWithoutUserInput, GroupMemberUncheckedUpdateWithoutUserInput>
  }

  export type GroupMemberUpdateManyWithWhereWithoutUserInput = {
    where: GroupMemberScalarWhereInput
    data: XOR<GroupMemberUpdateManyMutationInput, GroupMemberUncheckedUpdateManyWithoutUserInput>
  }

  export type GroupMemberScalarWhereInput = {
    AND?: GroupMemberScalarWhereInput | GroupMemberScalarWhereInput[]
    OR?: GroupMemberScalarWhereInput[]
    NOT?: GroupMemberScalarWhereInput | GroupMemberScalarWhereInput[]
    groupId?: StringFilter<"GroupMember"> | string
    userId?: StringFilter<"GroupMember"> | string
    isAdmin?: BoolFilter<"GroupMember"> | boolean
    joinedAt?: DateTimeFilter<"GroupMember"> | Date | string
  }

  export type GroupJoinRequestUpsertWithWhereUniqueWithoutFromUserInput = {
    where: GroupJoinRequestWhereUniqueInput
    update: XOR<GroupJoinRequestUpdateWithoutFromUserInput, GroupJoinRequestUncheckedUpdateWithoutFromUserInput>
    create: XOR<GroupJoinRequestCreateWithoutFromUserInput, GroupJoinRequestUncheckedCreateWithoutFromUserInput>
  }

  export type GroupJoinRequestUpdateWithWhereUniqueWithoutFromUserInput = {
    where: GroupJoinRequestWhereUniqueInput
    data: XOR<GroupJoinRequestUpdateWithoutFromUserInput, GroupJoinRequestUncheckedUpdateWithoutFromUserInput>
  }

  export type GroupJoinRequestUpdateManyWithWhereWithoutFromUserInput = {
    where: GroupJoinRequestScalarWhereInput
    data: XOR<GroupJoinRequestUpdateManyMutationInput, GroupJoinRequestUncheckedUpdateManyWithoutFromUserInput>
  }

  export type GroupJoinRequestScalarWhereInput = {
    AND?: GroupJoinRequestScalarWhereInput | GroupJoinRequestScalarWhereInput[]
    OR?: GroupJoinRequestScalarWhereInput[]
    NOT?: GroupJoinRequestScalarWhereInput | GroupJoinRequestScalarWhereInput[]
    id?: StringFilter<"GroupJoinRequest"> | string
    groupId?: StringFilter<"GroupJoinRequest"> | string
    fromUserId?: StringFilter<"GroupJoinRequest"> | string
    toUserId?: StringFilter<"GroupJoinRequest"> | string
    requestedAt?: DateTimeFilter<"GroupJoinRequest"> | Date | string
  }

  export type GroupJoinRequestUpsertWithWhereUniqueWithoutToUserInput = {
    where: GroupJoinRequestWhereUniqueInput
    update: XOR<GroupJoinRequestUpdateWithoutToUserInput, GroupJoinRequestUncheckedUpdateWithoutToUserInput>
    create: XOR<GroupJoinRequestCreateWithoutToUserInput, GroupJoinRequestUncheckedCreateWithoutToUserInput>
  }

  export type GroupJoinRequestUpdateWithWhereUniqueWithoutToUserInput = {
    where: GroupJoinRequestWhereUniqueInput
    data: XOR<GroupJoinRequestUpdateWithoutToUserInput, GroupJoinRequestUncheckedUpdateWithoutToUserInput>
  }

  export type GroupJoinRequestUpdateManyWithWhereWithoutToUserInput = {
    where: GroupJoinRequestScalarWhereInput
    data: XOR<GroupJoinRequestUpdateManyMutationInput, GroupJoinRequestUncheckedUpdateManyWithoutToUserInput>
  }

  export type GroupMessageUpsertWithWhereUniqueWithoutAuthorInput = {
    where: GroupMessageWhereUniqueInput
    update: XOR<GroupMessageUpdateWithoutAuthorInput, GroupMessageUncheckedUpdateWithoutAuthorInput>
    create: XOR<GroupMessageCreateWithoutAuthorInput, GroupMessageUncheckedCreateWithoutAuthorInput>
  }

  export type GroupMessageUpdateWithWhereUniqueWithoutAuthorInput = {
    where: GroupMessageWhereUniqueInput
    data: XOR<GroupMessageUpdateWithoutAuthorInput, GroupMessageUncheckedUpdateWithoutAuthorInput>
  }

  export type GroupMessageUpdateManyWithWhereWithoutAuthorInput = {
    where: GroupMessageScalarWhereInput
    data: XOR<GroupMessageUpdateManyMutationInput, GroupMessageUncheckedUpdateManyWithoutAuthorInput>
  }

  export type GroupMessageScalarWhereInput = {
    AND?: GroupMessageScalarWhereInput | GroupMessageScalarWhereInput[]
    OR?: GroupMessageScalarWhereInput[]
    NOT?: GroupMessageScalarWhereInput | GroupMessageScalarWhereInput[]
    id?: StringFilter<"GroupMessage"> | string
    groupId?: StringFilter<"GroupMessage"> | string
    authorId?: StringFilter<"GroupMessage"> | string
    content?: StringNullableFilter<"GroupMessage"> | string | null
    photoUrl?: StringNullableFilter<"GroupMessage"> | string | null
    type?: StringNullableFilter<"GroupMessage"> | string | null
    createdAt?: DateTimeFilter<"GroupMessage"> | Date | string
    deleted?: BoolFilter<"GroupMessage"> | boolean
  }

  export type PrivateMessageUpsertWithWhereUniqueWithoutFromUserInput = {
    where: PrivateMessageWhereUniqueInput
    update: XOR<PrivateMessageUpdateWithoutFromUserInput, PrivateMessageUncheckedUpdateWithoutFromUserInput>
    create: XOR<PrivateMessageCreateWithoutFromUserInput, PrivateMessageUncheckedCreateWithoutFromUserInput>
  }

  export type PrivateMessageUpdateWithWhereUniqueWithoutFromUserInput = {
    where: PrivateMessageWhereUniqueInput
    data: XOR<PrivateMessageUpdateWithoutFromUserInput, PrivateMessageUncheckedUpdateWithoutFromUserInput>
  }

  export type PrivateMessageUpdateManyWithWhereWithoutFromUserInput = {
    where: PrivateMessageScalarWhereInput
    data: XOR<PrivateMessageUpdateManyMutationInput, PrivateMessageUncheckedUpdateManyWithoutFromUserInput>
  }

  export type PrivateMessageScalarWhereInput = {
    AND?: PrivateMessageScalarWhereInput | PrivateMessageScalarWhereInput[]
    OR?: PrivateMessageScalarWhereInput[]
    NOT?: PrivateMessageScalarWhereInput | PrivateMessageScalarWhereInput[]
    id?: StringFilter<"PrivateMessage"> | string
    fromUserId?: StringFilter<"PrivateMessage"> | string
    toUserId?: StringFilter<"PrivateMessage"> | string
    content?: StringNullableFilter<"PrivateMessage"> | string | null
    photoUrl?: StringNullableFilter<"PrivateMessage"> | string | null
    type?: StringNullableFilter<"PrivateMessage"> | string | null
    createdAt?: DateTimeFilter<"PrivateMessage"> | Date | string
    deleted?: BoolFilter<"PrivateMessage"> | boolean
  }

  export type PrivateMessageUpsertWithWhereUniqueWithoutToUserInput = {
    where: PrivateMessageWhereUniqueInput
    update: XOR<PrivateMessageUpdateWithoutToUserInput, PrivateMessageUncheckedUpdateWithoutToUserInput>
    create: XOR<PrivateMessageCreateWithoutToUserInput, PrivateMessageUncheckedCreateWithoutToUserInput>
  }

  export type PrivateMessageUpdateWithWhereUniqueWithoutToUserInput = {
    where: PrivateMessageWhereUniqueInput
    data: XOR<PrivateMessageUpdateWithoutToUserInput, PrivateMessageUncheckedUpdateWithoutToUserInput>
  }

  export type PrivateMessageUpdateManyWithWhereWithoutToUserInput = {
    where: PrivateMessageScalarWhereInput
    data: XOR<PrivateMessageUpdateManyMutationInput, PrivateMessageUncheckedUpdateManyWithoutToUserInput>
  }

  export type UserCreateWithoutGlobalMessagesInput = {
    id?: string
    email: string
    password: string
    displayName: string
    username: string
    photoUrl?: string | null
    role?: $Enums.Role
    creationDate?: Date | string
    lastSeenAt?: Date | string
    friends?: FriendsCreateNestedManyWithoutUserInput
    friendOf?: FriendsCreateNestedManyWithoutFriendInput
    friendRequests?: FriendRequestCreateNestedManyWithoutRequestFromInput
    receivedRequests?: FriendRequestCreateNestedManyWithoutRequestToInput
    blocked?: BlockListCreateNestedManyWithoutUserInput
    blockedBy?: BlockListCreateNestedManyWithoutBlockedUserInput
    groupChatsCreated?: GroupChatCreateNestedManyWithoutCreatedByInput
    groupMembers?: GroupMemberCreateNestedManyWithoutUserInput
    groupJoinRequests?: GroupJoinRequestCreateNestedManyWithoutFromUserInput
    receivedGroupJoinRequests?: GroupJoinRequestCreateNestedManyWithoutToUserInput
    groupMessages?: GroupMessageCreateNestedManyWithoutAuthorInput
    privateMessagesSent?: PrivateMessageCreateNestedManyWithoutFromUserInput
    privateMessagesReceived?: PrivateMessageCreateNestedManyWithoutToUserInput
  }

  export type UserUncheckedCreateWithoutGlobalMessagesInput = {
    id?: string
    email: string
    password: string
    displayName: string
    username: string
    photoUrl?: string | null
    role?: $Enums.Role
    creationDate?: Date | string
    lastSeenAt?: Date | string
    friends?: FriendsUncheckedCreateNestedManyWithoutUserInput
    friendOf?: FriendsUncheckedCreateNestedManyWithoutFriendInput
    friendRequests?: FriendRequestUncheckedCreateNestedManyWithoutRequestFromInput
    receivedRequests?: FriendRequestUncheckedCreateNestedManyWithoutRequestToInput
    blocked?: BlockListUncheckedCreateNestedManyWithoutUserInput
    blockedBy?: BlockListUncheckedCreateNestedManyWithoutBlockedUserInput
    groupChatsCreated?: GroupChatUncheckedCreateNestedManyWithoutCreatedByInput
    groupMembers?: GroupMemberUncheckedCreateNestedManyWithoutUserInput
    groupJoinRequests?: GroupJoinRequestUncheckedCreateNestedManyWithoutFromUserInput
    receivedGroupJoinRequests?: GroupJoinRequestUncheckedCreateNestedManyWithoutToUserInput
    groupMessages?: GroupMessageUncheckedCreateNestedManyWithoutAuthorInput
    privateMessagesSent?: PrivateMessageUncheckedCreateNestedManyWithoutFromUserInput
    privateMessagesReceived?: PrivateMessageUncheckedCreateNestedManyWithoutToUserInput
  }

  export type UserCreateOrConnectWithoutGlobalMessagesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutGlobalMessagesInput, UserUncheckedCreateWithoutGlobalMessagesInput>
  }

  export type UserUpsertWithoutGlobalMessagesInput = {
    update: XOR<UserUpdateWithoutGlobalMessagesInput, UserUncheckedUpdateWithoutGlobalMessagesInput>
    create: XOR<UserCreateWithoutGlobalMessagesInput, UserUncheckedCreateWithoutGlobalMessagesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutGlobalMessagesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutGlobalMessagesInput, UserUncheckedUpdateWithoutGlobalMessagesInput>
  }

  export type UserUpdateWithoutGlobalMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    creationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSeenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    friends?: FriendsUpdateManyWithoutUserNestedInput
    friendOf?: FriendsUpdateManyWithoutFriendNestedInput
    friendRequests?: FriendRequestUpdateManyWithoutRequestFromNestedInput
    receivedRequests?: FriendRequestUpdateManyWithoutRequestToNestedInput
    blocked?: BlockListUpdateManyWithoutUserNestedInput
    blockedBy?: BlockListUpdateManyWithoutBlockedUserNestedInput
    groupChatsCreated?: GroupChatUpdateManyWithoutCreatedByNestedInput
    groupMembers?: GroupMemberUpdateManyWithoutUserNestedInput
    groupJoinRequests?: GroupJoinRequestUpdateManyWithoutFromUserNestedInput
    receivedGroupJoinRequests?: GroupJoinRequestUpdateManyWithoutToUserNestedInput
    groupMessages?: GroupMessageUpdateManyWithoutAuthorNestedInput
    privateMessagesSent?: PrivateMessageUpdateManyWithoutFromUserNestedInput
    privateMessagesReceived?: PrivateMessageUpdateManyWithoutToUserNestedInput
  }

  export type UserUncheckedUpdateWithoutGlobalMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    creationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSeenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    friends?: FriendsUncheckedUpdateManyWithoutUserNestedInput
    friendOf?: FriendsUncheckedUpdateManyWithoutFriendNestedInput
    friendRequests?: FriendRequestUncheckedUpdateManyWithoutRequestFromNestedInput
    receivedRequests?: FriendRequestUncheckedUpdateManyWithoutRequestToNestedInput
    blocked?: BlockListUncheckedUpdateManyWithoutUserNestedInput
    blockedBy?: BlockListUncheckedUpdateManyWithoutBlockedUserNestedInput
    groupChatsCreated?: GroupChatUncheckedUpdateManyWithoutCreatedByNestedInput
    groupMembers?: GroupMemberUncheckedUpdateManyWithoutUserNestedInput
    groupJoinRequests?: GroupJoinRequestUncheckedUpdateManyWithoutFromUserNestedInput
    receivedGroupJoinRequests?: GroupJoinRequestUncheckedUpdateManyWithoutToUserNestedInput
    groupMessages?: GroupMessageUncheckedUpdateManyWithoutAuthorNestedInput
    privateMessagesSent?: PrivateMessageUncheckedUpdateManyWithoutFromUserNestedInput
    privateMessagesReceived?: PrivateMessageUncheckedUpdateManyWithoutToUserNestedInput
  }

  export type UserCreateWithoutFriendsInput = {
    id?: string
    email: string
    password: string
    displayName: string
    username: string
    photoUrl?: string | null
    role?: $Enums.Role
    creationDate?: Date | string
    lastSeenAt?: Date | string
    globalMessages?: GlobalMessageCreateNestedManyWithoutAuthorInput
    friendOf?: FriendsCreateNestedManyWithoutFriendInput
    friendRequests?: FriendRequestCreateNestedManyWithoutRequestFromInput
    receivedRequests?: FriendRequestCreateNestedManyWithoutRequestToInput
    blocked?: BlockListCreateNestedManyWithoutUserInput
    blockedBy?: BlockListCreateNestedManyWithoutBlockedUserInput
    groupChatsCreated?: GroupChatCreateNestedManyWithoutCreatedByInput
    groupMembers?: GroupMemberCreateNestedManyWithoutUserInput
    groupJoinRequests?: GroupJoinRequestCreateNestedManyWithoutFromUserInput
    receivedGroupJoinRequests?: GroupJoinRequestCreateNestedManyWithoutToUserInput
    groupMessages?: GroupMessageCreateNestedManyWithoutAuthorInput
    privateMessagesSent?: PrivateMessageCreateNestedManyWithoutFromUserInput
    privateMessagesReceived?: PrivateMessageCreateNestedManyWithoutToUserInput
  }

  export type UserUncheckedCreateWithoutFriendsInput = {
    id?: string
    email: string
    password: string
    displayName: string
    username: string
    photoUrl?: string | null
    role?: $Enums.Role
    creationDate?: Date | string
    lastSeenAt?: Date | string
    globalMessages?: GlobalMessageUncheckedCreateNestedManyWithoutAuthorInput
    friendOf?: FriendsUncheckedCreateNestedManyWithoutFriendInput
    friendRequests?: FriendRequestUncheckedCreateNestedManyWithoutRequestFromInput
    receivedRequests?: FriendRequestUncheckedCreateNestedManyWithoutRequestToInput
    blocked?: BlockListUncheckedCreateNestedManyWithoutUserInput
    blockedBy?: BlockListUncheckedCreateNestedManyWithoutBlockedUserInput
    groupChatsCreated?: GroupChatUncheckedCreateNestedManyWithoutCreatedByInput
    groupMembers?: GroupMemberUncheckedCreateNestedManyWithoutUserInput
    groupJoinRequests?: GroupJoinRequestUncheckedCreateNestedManyWithoutFromUserInput
    receivedGroupJoinRequests?: GroupJoinRequestUncheckedCreateNestedManyWithoutToUserInput
    groupMessages?: GroupMessageUncheckedCreateNestedManyWithoutAuthorInput
    privateMessagesSent?: PrivateMessageUncheckedCreateNestedManyWithoutFromUserInput
    privateMessagesReceived?: PrivateMessageUncheckedCreateNestedManyWithoutToUserInput
  }

  export type UserCreateOrConnectWithoutFriendsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFriendsInput, UserUncheckedCreateWithoutFriendsInput>
  }

  export type UserCreateWithoutFriendOfInput = {
    id?: string
    email: string
    password: string
    displayName: string
    username: string
    photoUrl?: string | null
    role?: $Enums.Role
    creationDate?: Date | string
    lastSeenAt?: Date | string
    globalMessages?: GlobalMessageCreateNestedManyWithoutAuthorInput
    friends?: FriendsCreateNestedManyWithoutUserInput
    friendRequests?: FriendRequestCreateNestedManyWithoutRequestFromInput
    receivedRequests?: FriendRequestCreateNestedManyWithoutRequestToInput
    blocked?: BlockListCreateNestedManyWithoutUserInput
    blockedBy?: BlockListCreateNestedManyWithoutBlockedUserInput
    groupChatsCreated?: GroupChatCreateNestedManyWithoutCreatedByInput
    groupMembers?: GroupMemberCreateNestedManyWithoutUserInput
    groupJoinRequests?: GroupJoinRequestCreateNestedManyWithoutFromUserInput
    receivedGroupJoinRequests?: GroupJoinRequestCreateNestedManyWithoutToUserInput
    groupMessages?: GroupMessageCreateNestedManyWithoutAuthorInput
    privateMessagesSent?: PrivateMessageCreateNestedManyWithoutFromUserInput
    privateMessagesReceived?: PrivateMessageCreateNestedManyWithoutToUserInput
  }

  export type UserUncheckedCreateWithoutFriendOfInput = {
    id?: string
    email: string
    password: string
    displayName: string
    username: string
    photoUrl?: string | null
    role?: $Enums.Role
    creationDate?: Date | string
    lastSeenAt?: Date | string
    globalMessages?: GlobalMessageUncheckedCreateNestedManyWithoutAuthorInput
    friends?: FriendsUncheckedCreateNestedManyWithoutUserInput
    friendRequests?: FriendRequestUncheckedCreateNestedManyWithoutRequestFromInput
    receivedRequests?: FriendRequestUncheckedCreateNestedManyWithoutRequestToInput
    blocked?: BlockListUncheckedCreateNestedManyWithoutUserInput
    blockedBy?: BlockListUncheckedCreateNestedManyWithoutBlockedUserInput
    groupChatsCreated?: GroupChatUncheckedCreateNestedManyWithoutCreatedByInput
    groupMembers?: GroupMemberUncheckedCreateNestedManyWithoutUserInput
    groupJoinRequests?: GroupJoinRequestUncheckedCreateNestedManyWithoutFromUserInput
    receivedGroupJoinRequests?: GroupJoinRequestUncheckedCreateNestedManyWithoutToUserInput
    groupMessages?: GroupMessageUncheckedCreateNestedManyWithoutAuthorInput
    privateMessagesSent?: PrivateMessageUncheckedCreateNestedManyWithoutFromUserInput
    privateMessagesReceived?: PrivateMessageUncheckedCreateNestedManyWithoutToUserInput
  }

  export type UserCreateOrConnectWithoutFriendOfInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFriendOfInput, UserUncheckedCreateWithoutFriendOfInput>
  }

  export type UserUpsertWithoutFriendsInput = {
    update: XOR<UserUpdateWithoutFriendsInput, UserUncheckedUpdateWithoutFriendsInput>
    create: XOR<UserCreateWithoutFriendsInput, UserUncheckedCreateWithoutFriendsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFriendsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFriendsInput, UserUncheckedUpdateWithoutFriendsInput>
  }

  export type UserUpdateWithoutFriendsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    creationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSeenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    globalMessages?: GlobalMessageUpdateManyWithoutAuthorNestedInput
    friendOf?: FriendsUpdateManyWithoutFriendNestedInput
    friendRequests?: FriendRequestUpdateManyWithoutRequestFromNestedInput
    receivedRequests?: FriendRequestUpdateManyWithoutRequestToNestedInput
    blocked?: BlockListUpdateManyWithoutUserNestedInput
    blockedBy?: BlockListUpdateManyWithoutBlockedUserNestedInput
    groupChatsCreated?: GroupChatUpdateManyWithoutCreatedByNestedInput
    groupMembers?: GroupMemberUpdateManyWithoutUserNestedInput
    groupJoinRequests?: GroupJoinRequestUpdateManyWithoutFromUserNestedInput
    receivedGroupJoinRequests?: GroupJoinRequestUpdateManyWithoutToUserNestedInput
    groupMessages?: GroupMessageUpdateManyWithoutAuthorNestedInput
    privateMessagesSent?: PrivateMessageUpdateManyWithoutFromUserNestedInput
    privateMessagesReceived?: PrivateMessageUpdateManyWithoutToUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFriendsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    creationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSeenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    globalMessages?: GlobalMessageUncheckedUpdateManyWithoutAuthorNestedInput
    friendOf?: FriendsUncheckedUpdateManyWithoutFriendNestedInput
    friendRequests?: FriendRequestUncheckedUpdateManyWithoutRequestFromNestedInput
    receivedRequests?: FriendRequestUncheckedUpdateManyWithoutRequestToNestedInput
    blocked?: BlockListUncheckedUpdateManyWithoutUserNestedInput
    blockedBy?: BlockListUncheckedUpdateManyWithoutBlockedUserNestedInput
    groupChatsCreated?: GroupChatUncheckedUpdateManyWithoutCreatedByNestedInput
    groupMembers?: GroupMemberUncheckedUpdateManyWithoutUserNestedInput
    groupJoinRequests?: GroupJoinRequestUncheckedUpdateManyWithoutFromUserNestedInput
    receivedGroupJoinRequests?: GroupJoinRequestUncheckedUpdateManyWithoutToUserNestedInput
    groupMessages?: GroupMessageUncheckedUpdateManyWithoutAuthorNestedInput
    privateMessagesSent?: PrivateMessageUncheckedUpdateManyWithoutFromUserNestedInput
    privateMessagesReceived?: PrivateMessageUncheckedUpdateManyWithoutToUserNestedInput
  }

  export type UserUpsertWithoutFriendOfInput = {
    update: XOR<UserUpdateWithoutFriendOfInput, UserUncheckedUpdateWithoutFriendOfInput>
    create: XOR<UserCreateWithoutFriendOfInput, UserUncheckedCreateWithoutFriendOfInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFriendOfInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFriendOfInput, UserUncheckedUpdateWithoutFriendOfInput>
  }

  export type UserUpdateWithoutFriendOfInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    creationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSeenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    globalMessages?: GlobalMessageUpdateManyWithoutAuthorNestedInput
    friends?: FriendsUpdateManyWithoutUserNestedInput
    friendRequests?: FriendRequestUpdateManyWithoutRequestFromNestedInput
    receivedRequests?: FriendRequestUpdateManyWithoutRequestToNestedInput
    blocked?: BlockListUpdateManyWithoutUserNestedInput
    blockedBy?: BlockListUpdateManyWithoutBlockedUserNestedInput
    groupChatsCreated?: GroupChatUpdateManyWithoutCreatedByNestedInput
    groupMembers?: GroupMemberUpdateManyWithoutUserNestedInput
    groupJoinRequests?: GroupJoinRequestUpdateManyWithoutFromUserNestedInput
    receivedGroupJoinRequests?: GroupJoinRequestUpdateManyWithoutToUserNestedInput
    groupMessages?: GroupMessageUpdateManyWithoutAuthorNestedInput
    privateMessagesSent?: PrivateMessageUpdateManyWithoutFromUserNestedInput
    privateMessagesReceived?: PrivateMessageUpdateManyWithoutToUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFriendOfInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    creationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSeenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    globalMessages?: GlobalMessageUncheckedUpdateManyWithoutAuthorNestedInput
    friends?: FriendsUncheckedUpdateManyWithoutUserNestedInput
    friendRequests?: FriendRequestUncheckedUpdateManyWithoutRequestFromNestedInput
    receivedRequests?: FriendRequestUncheckedUpdateManyWithoutRequestToNestedInput
    blocked?: BlockListUncheckedUpdateManyWithoutUserNestedInput
    blockedBy?: BlockListUncheckedUpdateManyWithoutBlockedUserNestedInput
    groupChatsCreated?: GroupChatUncheckedUpdateManyWithoutCreatedByNestedInput
    groupMembers?: GroupMemberUncheckedUpdateManyWithoutUserNestedInput
    groupJoinRequests?: GroupJoinRequestUncheckedUpdateManyWithoutFromUserNestedInput
    receivedGroupJoinRequests?: GroupJoinRequestUncheckedUpdateManyWithoutToUserNestedInput
    groupMessages?: GroupMessageUncheckedUpdateManyWithoutAuthorNestedInput
    privateMessagesSent?: PrivateMessageUncheckedUpdateManyWithoutFromUserNestedInput
    privateMessagesReceived?: PrivateMessageUncheckedUpdateManyWithoutToUserNestedInput
  }

  export type UserCreateWithoutFriendRequestsInput = {
    id?: string
    email: string
    password: string
    displayName: string
    username: string
    photoUrl?: string | null
    role?: $Enums.Role
    creationDate?: Date | string
    lastSeenAt?: Date | string
    globalMessages?: GlobalMessageCreateNestedManyWithoutAuthorInput
    friends?: FriendsCreateNestedManyWithoutUserInput
    friendOf?: FriendsCreateNestedManyWithoutFriendInput
    receivedRequests?: FriendRequestCreateNestedManyWithoutRequestToInput
    blocked?: BlockListCreateNestedManyWithoutUserInput
    blockedBy?: BlockListCreateNestedManyWithoutBlockedUserInput
    groupChatsCreated?: GroupChatCreateNestedManyWithoutCreatedByInput
    groupMembers?: GroupMemberCreateNestedManyWithoutUserInput
    groupJoinRequests?: GroupJoinRequestCreateNestedManyWithoutFromUserInput
    receivedGroupJoinRequests?: GroupJoinRequestCreateNestedManyWithoutToUserInput
    groupMessages?: GroupMessageCreateNestedManyWithoutAuthorInput
    privateMessagesSent?: PrivateMessageCreateNestedManyWithoutFromUserInput
    privateMessagesReceived?: PrivateMessageCreateNestedManyWithoutToUserInput
  }

  export type UserUncheckedCreateWithoutFriendRequestsInput = {
    id?: string
    email: string
    password: string
    displayName: string
    username: string
    photoUrl?: string | null
    role?: $Enums.Role
    creationDate?: Date | string
    lastSeenAt?: Date | string
    globalMessages?: GlobalMessageUncheckedCreateNestedManyWithoutAuthorInput
    friends?: FriendsUncheckedCreateNestedManyWithoutUserInput
    friendOf?: FriendsUncheckedCreateNestedManyWithoutFriendInput
    receivedRequests?: FriendRequestUncheckedCreateNestedManyWithoutRequestToInput
    blocked?: BlockListUncheckedCreateNestedManyWithoutUserInput
    blockedBy?: BlockListUncheckedCreateNestedManyWithoutBlockedUserInput
    groupChatsCreated?: GroupChatUncheckedCreateNestedManyWithoutCreatedByInput
    groupMembers?: GroupMemberUncheckedCreateNestedManyWithoutUserInput
    groupJoinRequests?: GroupJoinRequestUncheckedCreateNestedManyWithoutFromUserInput
    receivedGroupJoinRequests?: GroupJoinRequestUncheckedCreateNestedManyWithoutToUserInput
    groupMessages?: GroupMessageUncheckedCreateNestedManyWithoutAuthorInput
    privateMessagesSent?: PrivateMessageUncheckedCreateNestedManyWithoutFromUserInput
    privateMessagesReceived?: PrivateMessageUncheckedCreateNestedManyWithoutToUserInput
  }

  export type UserCreateOrConnectWithoutFriendRequestsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFriendRequestsInput, UserUncheckedCreateWithoutFriendRequestsInput>
  }

  export type UserCreateWithoutReceivedRequestsInput = {
    id?: string
    email: string
    password: string
    displayName: string
    username: string
    photoUrl?: string | null
    role?: $Enums.Role
    creationDate?: Date | string
    lastSeenAt?: Date | string
    globalMessages?: GlobalMessageCreateNestedManyWithoutAuthorInput
    friends?: FriendsCreateNestedManyWithoutUserInput
    friendOf?: FriendsCreateNestedManyWithoutFriendInput
    friendRequests?: FriendRequestCreateNestedManyWithoutRequestFromInput
    blocked?: BlockListCreateNestedManyWithoutUserInput
    blockedBy?: BlockListCreateNestedManyWithoutBlockedUserInput
    groupChatsCreated?: GroupChatCreateNestedManyWithoutCreatedByInput
    groupMembers?: GroupMemberCreateNestedManyWithoutUserInput
    groupJoinRequests?: GroupJoinRequestCreateNestedManyWithoutFromUserInput
    receivedGroupJoinRequests?: GroupJoinRequestCreateNestedManyWithoutToUserInput
    groupMessages?: GroupMessageCreateNestedManyWithoutAuthorInput
    privateMessagesSent?: PrivateMessageCreateNestedManyWithoutFromUserInput
    privateMessagesReceived?: PrivateMessageCreateNestedManyWithoutToUserInput
  }

  export type UserUncheckedCreateWithoutReceivedRequestsInput = {
    id?: string
    email: string
    password: string
    displayName: string
    username: string
    photoUrl?: string | null
    role?: $Enums.Role
    creationDate?: Date | string
    lastSeenAt?: Date | string
    globalMessages?: GlobalMessageUncheckedCreateNestedManyWithoutAuthorInput
    friends?: FriendsUncheckedCreateNestedManyWithoutUserInput
    friendOf?: FriendsUncheckedCreateNestedManyWithoutFriendInput
    friendRequests?: FriendRequestUncheckedCreateNestedManyWithoutRequestFromInput
    blocked?: BlockListUncheckedCreateNestedManyWithoutUserInput
    blockedBy?: BlockListUncheckedCreateNestedManyWithoutBlockedUserInput
    groupChatsCreated?: GroupChatUncheckedCreateNestedManyWithoutCreatedByInput
    groupMembers?: GroupMemberUncheckedCreateNestedManyWithoutUserInput
    groupJoinRequests?: GroupJoinRequestUncheckedCreateNestedManyWithoutFromUserInput
    receivedGroupJoinRequests?: GroupJoinRequestUncheckedCreateNestedManyWithoutToUserInput
    groupMessages?: GroupMessageUncheckedCreateNestedManyWithoutAuthorInput
    privateMessagesSent?: PrivateMessageUncheckedCreateNestedManyWithoutFromUserInput
    privateMessagesReceived?: PrivateMessageUncheckedCreateNestedManyWithoutToUserInput
  }

  export type UserCreateOrConnectWithoutReceivedRequestsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReceivedRequestsInput, UserUncheckedCreateWithoutReceivedRequestsInput>
  }

  export type UserUpsertWithoutFriendRequestsInput = {
    update: XOR<UserUpdateWithoutFriendRequestsInput, UserUncheckedUpdateWithoutFriendRequestsInput>
    create: XOR<UserCreateWithoutFriendRequestsInput, UserUncheckedCreateWithoutFriendRequestsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFriendRequestsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFriendRequestsInput, UserUncheckedUpdateWithoutFriendRequestsInput>
  }

  export type UserUpdateWithoutFriendRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    creationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSeenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    globalMessages?: GlobalMessageUpdateManyWithoutAuthorNestedInput
    friends?: FriendsUpdateManyWithoutUserNestedInput
    friendOf?: FriendsUpdateManyWithoutFriendNestedInput
    receivedRequests?: FriendRequestUpdateManyWithoutRequestToNestedInput
    blocked?: BlockListUpdateManyWithoutUserNestedInput
    blockedBy?: BlockListUpdateManyWithoutBlockedUserNestedInput
    groupChatsCreated?: GroupChatUpdateManyWithoutCreatedByNestedInput
    groupMembers?: GroupMemberUpdateManyWithoutUserNestedInput
    groupJoinRequests?: GroupJoinRequestUpdateManyWithoutFromUserNestedInput
    receivedGroupJoinRequests?: GroupJoinRequestUpdateManyWithoutToUserNestedInput
    groupMessages?: GroupMessageUpdateManyWithoutAuthorNestedInput
    privateMessagesSent?: PrivateMessageUpdateManyWithoutFromUserNestedInput
    privateMessagesReceived?: PrivateMessageUpdateManyWithoutToUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFriendRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    creationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSeenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    globalMessages?: GlobalMessageUncheckedUpdateManyWithoutAuthorNestedInput
    friends?: FriendsUncheckedUpdateManyWithoutUserNestedInput
    friendOf?: FriendsUncheckedUpdateManyWithoutFriendNestedInput
    receivedRequests?: FriendRequestUncheckedUpdateManyWithoutRequestToNestedInput
    blocked?: BlockListUncheckedUpdateManyWithoutUserNestedInput
    blockedBy?: BlockListUncheckedUpdateManyWithoutBlockedUserNestedInput
    groupChatsCreated?: GroupChatUncheckedUpdateManyWithoutCreatedByNestedInput
    groupMembers?: GroupMemberUncheckedUpdateManyWithoutUserNestedInput
    groupJoinRequests?: GroupJoinRequestUncheckedUpdateManyWithoutFromUserNestedInput
    receivedGroupJoinRequests?: GroupJoinRequestUncheckedUpdateManyWithoutToUserNestedInput
    groupMessages?: GroupMessageUncheckedUpdateManyWithoutAuthorNestedInput
    privateMessagesSent?: PrivateMessageUncheckedUpdateManyWithoutFromUserNestedInput
    privateMessagesReceived?: PrivateMessageUncheckedUpdateManyWithoutToUserNestedInput
  }

  export type UserUpsertWithoutReceivedRequestsInput = {
    update: XOR<UserUpdateWithoutReceivedRequestsInput, UserUncheckedUpdateWithoutReceivedRequestsInput>
    create: XOR<UserCreateWithoutReceivedRequestsInput, UserUncheckedCreateWithoutReceivedRequestsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReceivedRequestsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReceivedRequestsInput, UserUncheckedUpdateWithoutReceivedRequestsInput>
  }

  export type UserUpdateWithoutReceivedRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    creationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSeenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    globalMessages?: GlobalMessageUpdateManyWithoutAuthorNestedInput
    friends?: FriendsUpdateManyWithoutUserNestedInput
    friendOf?: FriendsUpdateManyWithoutFriendNestedInput
    friendRequests?: FriendRequestUpdateManyWithoutRequestFromNestedInput
    blocked?: BlockListUpdateManyWithoutUserNestedInput
    blockedBy?: BlockListUpdateManyWithoutBlockedUserNestedInput
    groupChatsCreated?: GroupChatUpdateManyWithoutCreatedByNestedInput
    groupMembers?: GroupMemberUpdateManyWithoutUserNestedInput
    groupJoinRequests?: GroupJoinRequestUpdateManyWithoutFromUserNestedInput
    receivedGroupJoinRequests?: GroupJoinRequestUpdateManyWithoutToUserNestedInput
    groupMessages?: GroupMessageUpdateManyWithoutAuthorNestedInput
    privateMessagesSent?: PrivateMessageUpdateManyWithoutFromUserNestedInput
    privateMessagesReceived?: PrivateMessageUpdateManyWithoutToUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReceivedRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    creationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSeenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    globalMessages?: GlobalMessageUncheckedUpdateManyWithoutAuthorNestedInput
    friends?: FriendsUncheckedUpdateManyWithoutUserNestedInput
    friendOf?: FriendsUncheckedUpdateManyWithoutFriendNestedInput
    friendRequests?: FriendRequestUncheckedUpdateManyWithoutRequestFromNestedInput
    blocked?: BlockListUncheckedUpdateManyWithoutUserNestedInput
    blockedBy?: BlockListUncheckedUpdateManyWithoutBlockedUserNestedInput
    groupChatsCreated?: GroupChatUncheckedUpdateManyWithoutCreatedByNestedInput
    groupMembers?: GroupMemberUncheckedUpdateManyWithoutUserNestedInput
    groupJoinRequests?: GroupJoinRequestUncheckedUpdateManyWithoutFromUserNestedInput
    receivedGroupJoinRequests?: GroupJoinRequestUncheckedUpdateManyWithoutToUserNestedInput
    groupMessages?: GroupMessageUncheckedUpdateManyWithoutAuthorNestedInput
    privateMessagesSent?: PrivateMessageUncheckedUpdateManyWithoutFromUserNestedInput
    privateMessagesReceived?: PrivateMessageUncheckedUpdateManyWithoutToUserNestedInput
  }

  export type UserCreateWithoutBlockedInput = {
    id?: string
    email: string
    password: string
    displayName: string
    username: string
    photoUrl?: string | null
    role?: $Enums.Role
    creationDate?: Date | string
    lastSeenAt?: Date | string
    globalMessages?: GlobalMessageCreateNestedManyWithoutAuthorInput
    friends?: FriendsCreateNestedManyWithoutUserInput
    friendOf?: FriendsCreateNestedManyWithoutFriendInput
    friendRequests?: FriendRequestCreateNestedManyWithoutRequestFromInput
    receivedRequests?: FriendRequestCreateNestedManyWithoutRequestToInput
    blockedBy?: BlockListCreateNestedManyWithoutBlockedUserInput
    groupChatsCreated?: GroupChatCreateNestedManyWithoutCreatedByInput
    groupMembers?: GroupMemberCreateNestedManyWithoutUserInput
    groupJoinRequests?: GroupJoinRequestCreateNestedManyWithoutFromUserInput
    receivedGroupJoinRequests?: GroupJoinRequestCreateNestedManyWithoutToUserInput
    groupMessages?: GroupMessageCreateNestedManyWithoutAuthorInput
    privateMessagesSent?: PrivateMessageCreateNestedManyWithoutFromUserInput
    privateMessagesReceived?: PrivateMessageCreateNestedManyWithoutToUserInput
  }

  export type UserUncheckedCreateWithoutBlockedInput = {
    id?: string
    email: string
    password: string
    displayName: string
    username: string
    photoUrl?: string | null
    role?: $Enums.Role
    creationDate?: Date | string
    lastSeenAt?: Date | string
    globalMessages?: GlobalMessageUncheckedCreateNestedManyWithoutAuthorInput
    friends?: FriendsUncheckedCreateNestedManyWithoutUserInput
    friendOf?: FriendsUncheckedCreateNestedManyWithoutFriendInput
    friendRequests?: FriendRequestUncheckedCreateNestedManyWithoutRequestFromInput
    receivedRequests?: FriendRequestUncheckedCreateNestedManyWithoutRequestToInput
    blockedBy?: BlockListUncheckedCreateNestedManyWithoutBlockedUserInput
    groupChatsCreated?: GroupChatUncheckedCreateNestedManyWithoutCreatedByInput
    groupMembers?: GroupMemberUncheckedCreateNestedManyWithoutUserInput
    groupJoinRequests?: GroupJoinRequestUncheckedCreateNestedManyWithoutFromUserInput
    receivedGroupJoinRequests?: GroupJoinRequestUncheckedCreateNestedManyWithoutToUserInput
    groupMessages?: GroupMessageUncheckedCreateNestedManyWithoutAuthorInput
    privateMessagesSent?: PrivateMessageUncheckedCreateNestedManyWithoutFromUserInput
    privateMessagesReceived?: PrivateMessageUncheckedCreateNestedManyWithoutToUserInput
  }

  export type UserCreateOrConnectWithoutBlockedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBlockedInput, UserUncheckedCreateWithoutBlockedInput>
  }

  export type UserCreateWithoutBlockedByInput = {
    id?: string
    email: string
    password: string
    displayName: string
    username: string
    photoUrl?: string | null
    role?: $Enums.Role
    creationDate?: Date | string
    lastSeenAt?: Date | string
    globalMessages?: GlobalMessageCreateNestedManyWithoutAuthorInput
    friends?: FriendsCreateNestedManyWithoutUserInput
    friendOf?: FriendsCreateNestedManyWithoutFriendInput
    friendRequests?: FriendRequestCreateNestedManyWithoutRequestFromInput
    receivedRequests?: FriendRequestCreateNestedManyWithoutRequestToInput
    blocked?: BlockListCreateNestedManyWithoutUserInput
    groupChatsCreated?: GroupChatCreateNestedManyWithoutCreatedByInput
    groupMembers?: GroupMemberCreateNestedManyWithoutUserInput
    groupJoinRequests?: GroupJoinRequestCreateNestedManyWithoutFromUserInput
    receivedGroupJoinRequests?: GroupJoinRequestCreateNestedManyWithoutToUserInput
    groupMessages?: GroupMessageCreateNestedManyWithoutAuthorInput
    privateMessagesSent?: PrivateMessageCreateNestedManyWithoutFromUserInput
    privateMessagesReceived?: PrivateMessageCreateNestedManyWithoutToUserInput
  }

  export type UserUncheckedCreateWithoutBlockedByInput = {
    id?: string
    email: string
    password: string
    displayName: string
    username: string
    photoUrl?: string | null
    role?: $Enums.Role
    creationDate?: Date | string
    lastSeenAt?: Date | string
    globalMessages?: GlobalMessageUncheckedCreateNestedManyWithoutAuthorInput
    friends?: FriendsUncheckedCreateNestedManyWithoutUserInput
    friendOf?: FriendsUncheckedCreateNestedManyWithoutFriendInput
    friendRequests?: FriendRequestUncheckedCreateNestedManyWithoutRequestFromInput
    receivedRequests?: FriendRequestUncheckedCreateNestedManyWithoutRequestToInput
    blocked?: BlockListUncheckedCreateNestedManyWithoutUserInput
    groupChatsCreated?: GroupChatUncheckedCreateNestedManyWithoutCreatedByInput
    groupMembers?: GroupMemberUncheckedCreateNestedManyWithoutUserInput
    groupJoinRequests?: GroupJoinRequestUncheckedCreateNestedManyWithoutFromUserInput
    receivedGroupJoinRequests?: GroupJoinRequestUncheckedCreateNestedManyWithoutToUserInput
    groupMessages?: GroupMessageUncheckedCreateNestedManyWithoutAuthorInput
    privateMessagesSent?: PrivateMessageUncheckedCreateNestedManyWithoutFromUserInput
    privateMessagesReceived?: PrivateMessageUncheckedCreateNestedManyWithoutToUserInput
  }

  export type UserCreateOrConnectWithoutBlockedByInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBlockedByInput, UserUncheckedCreateWithoutBlockedByInput>
  }

  export type UserUpsertWithoutBlockedInput = {
    update: XOR<UserUpdateWithoutBlockedInput, UserUncheckedUpdateWithoutBlockedInput>
    create: XOR<UserCreateWithoutBlockedInput, UserUncheckedCreateWithoutBlockedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBlockedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBlockedInput, UserUncheckedUpdateWithoutBlockedInput>
  }

  export type UserUpdateWithoutBlockedInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    creationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSeenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    globalMessages?: GlobalMessageUpdateManyWithoutAuthorNestedInput
    friends?: FriendsUpdateManyWithoutUserNestedInput
    friendOf?: FriendsUpdateManyWithoutFriendNestedInput
    friendRequests?: FriendRequestUpdateManyWithoutRequestFromNestedInput
    receivedRequests?: FriendRequestUpdateManyWithoutRequestToNestedInput
    blockedBy?: BlockListUpdateManyWithoutBlockedUserNestedInput
    groupChatsCreated?: GroupChatUpdateManyWithoutCreatedByNestedInput
    groupMembers?: GroupMemberUpdateManyWithoutUserNestedInput
    groupJoinRequests?: GroupJoinRequestUpdateManyWithoutFromUserNestedInput
    receivedGroupJoinRequests?: GroupJoinRequestUpdateManyWithoutToUserNestedInput
    groupMessages?: GroupMessageUpdateManyWithoutAuthorNestedInput
    privateMessagesSent?: PrivateMessageUpdateManyWithoutFromUserNestedInput
    privateMessagesReceived?: PrivateMessageUpdateManyWithoutToUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBlockedInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    creationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSeenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    globalMessages?: GlobalMessageUncheckedUpdateManyWithoutAuthorNestedInput
    friends?: FriendsUncheckedUpdateManyWithoutUserNestedInput
    friendOf?: FriendsUncheckedUpdateManyWithoutFriendNestedInput
    friendRequests?: FriendRequestUncheckedUpdateManyWithoutRequestFromNestedInput
    receivedRequests?: FriendRequestUncheckedUpdateManyWithoutRequestToNestedInput
    blockedBy?: BlockListUncheckedUpdateManyWithoutBlockedUserNestedInput
    groupChatsCreated?: GroupChatUncheckedUpdateManyWithoutCreatedByNestedInput
    groupMembers?: GroupMemberUncheckedUpdateManyWithoutUserNestedInput
    groupJoinRequests?: GroupJoinRequestUncheckedUpdateManyWithoutFromUserNestedInput
    receivedGroupJoinRequests?: GroupJoinRequestUncheckedUpdateManyWithoutToUserNestedInput
    groupMessages?: GroupMessageUncheckedUpdateManyWithoutAuthorNestedInput
    privateMessagesSent?: PrivateMessageUncheckedUpdateManyWithoutFromUserNestedInput
    privateMessagesReceived?: PrivateMessageUncheckedUpdateManyWithoutToUserNestedInput
  }

  export type UserUpsertWithoutBlockedByInput = {
    update: XOR<UserUpdateWithoutBlockedByInput, UserUncheckedUpdateWithoutBlockedByInput>
    create: XOR<UserCreateWithoutBlockedByInput, UserUncheckedCreateWithoutBlockedByInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBlockedByInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBlockedByInput, UserUncheckedUpdateWithoutBlockedByInput>
  }

  export type UserUpdateWithoutBlockedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    creationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSeenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    globalMessages?: GlobalMessageUpdateManyWithoutAuthorNestedInput
    friends?: FriendsUpdateManyWithoutUserNestedInput
    friendOf?: FriendsUpdateManyWithoutFriendNestedInput
    friendRequests?: FriendRequestUpdateManyWithoutRequestFromNestedInput
    receivedRequests?: FriendRequestUpdateManyWithoutRequestToNestedInput
    blocked?: BlockListUpdateManyWithoutUserNestedInput
    groupChatsCreated?: GroupChatUpdateManyWithoutCreatedByNestedInput
    groupMembers?: GroupMemberUpdateManyWithoutUserNestedInput
    groupJoinRequests?: GroupJoinRequestUpdateManyWithoutFromUserNestedInput
    receivedGroupJoinRequests?: GroupJoinRequestUpdateManyWithoutToUserNestedInput
    groupMessages?: GroupMessageUpdateManyWithoutAuthorNestedInput
    privateMessagesSent?: PrivateMessageUpdateManyWithoutFromUserNestedInput
    privateMessagesReceived?: PrivateMessageUpdateManyWithoutToUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBlockedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    creationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSeenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    globalMessages?: GlobalMessageUncheckedUpdateManyWithoutAuthorNestedInput
    friends?: FriendsUncheckedUpdateManyWithoutUserNestedInput
    friendOf?: FriendsUncheckedUpdateManyWithoutFriendNestedInput
    friendRequests?: FriendRequestUncheckedUpdateManyWithoutRequestFromNestedInput
    receivedRequests?: FriendRequestUncheckedUpdateManyWithoutRequestToNestedInput
    blocked?: BlockListUncheckedUpdateManyWithoutUserNestedInput
    groupChatsCreated?: GroupChatUncheckedUpdateManyWithoutCreatedByNestedInput
    groupMembers?: GroupMemberUncheckedUpdateManyWithoutUserNestedInput
    groupJoinRequests?: GroupJoinRequestUncheckedUpdateManyWithoutFromUserNestedInput
    receivedGroupJoinRequests?: GroupJoinRequestUncheckedUpdateManyWithoutToUserNestedInput
    groupMessages?: GroupMessageUncheckedUpdateManyWithoutAuthorNestedInput
    privateMessagesSent?: PrivateMessageUncheckedUpdateManyWithoutFromUserNestedInput
    privateMessagesReceived?: PrivateMessageUncheckedUpdateManyWithoutToUserNestedInput
  }

  export type UserCreateWithoutGroupChatsCreatedInput = {
    id?: string
    email: string
    password: string
    displayName: string
    username: string
    photoUrl?: string | null
    role?: $Enums.Role
    creationDate?: Date | string
    lastSeenAt?: Date | string
    globalMessages?: GlobalMessageCreateNestedManyWithoutAuthorInput
    friends?: FriendsCreateNestedManyWithoutUserInput
    friendOf?: FriendsCreateNestedManyWithoutFriendInput
    friendRequests?: FriendRequestCreateNestedManyWithoutRequestFromInput
    receivedRequests?: FriendRequestCreateNestedManyWithoutRequestToInput
    blocked?: BlockListCreateNestedManyWithoutUserInput
    blockedBy?: BlockListCreateNestedManyWithoutBlockedUserInput
    groupMembers?: GroupMemberCreateNestedManyWithoutUserInput
    groupJoinRequests?: GroupJoinRequestCreateNestedManyWithoutFromUserInput
    receivedGroupJoinRequests?: GroupJoinRequestCreateNestedManyWithoutToUserInput
    groupMessages?: GroupMessageCreateNestedManyWithoutAuthorInput
    privateMessagesSent?: PrivateMessageCreateNestedManyWithoutFromUserInput
    privateMessagesReceived?: PrivateMessageCreateNestedManyWithoutToUserInput
  }

  export type UserUncheckedCreateWithoutGroupChatsCreatedInput = {
    id?: string
    email: string
    password: string
    displayName: string
    username: string
    photoUrl?: string | null
    role?: $Enums.Role
    creationDate?: Date | string
    lastSeenAt?: Date | string
    globalMessages?: GlobalMessageUncheckedCreateNestedManyWithoutAuthorInput
    friends?: FriendsUncheckedCreateNestedManyWithoutUserInput
    friendOf?: FriendsUncheckedCreateNestedManyWithoutFriendInput
    friendRequests?: FriendRequestUncheckedCreateNestedManyWithoutRequestFromInput
    receivedRequests?: FriendRequestUncheckedCreateNestedManyWithoutRequestToInput
    blocked?: BlockListUncheckedCreateNestedManyWithoutUserInput
    blockedBy?: BlockListUncheckedCreateNestedManyWithoutBlockedUserInput
    groupMembers?: GroupMemberUncheckedCreateNestedManyWithoutUserInput
    groupJoinRequests?: GroupJoinRequestUncheckedCreateNestedManyWithoutFromUserInput
    receivedGroupJoinRequests?: GroupJoinRequestUncheckedCreateNestedManyWithoutToUserInput
    groupMessages?: GroupMessageUncheckedCreateNestedManyWithoutAuthorInput
    privateMessagesSent?: PrivateMessageUncheckedCreateNestedManyWithoutFromUserInput
    privateMessagesReceived?: PrivateMessageUncheckedCreateNestedManyWithoutToUserInput
  }

  export type UserCreateOrConnectWithoutGroupChatsCreatedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutGroupChatsCreatedInput, UserUncheckedCreateWithoutGroupChatsCreatedInput>
  }

  export type GroupMemberCreateWithoutGroupInput = {
    isAdmin?: boolean
    joinedAt?: Date | string
    user: UserCreateNestedOneWithoutGroupMembersInput
  }

  export type GroupMemberUncheckedCreateWithoutGroupInput = {
    userId: string
    isAdmin?: boolean
    joinedAt?: Date | string
  }

  export type GroupMemberCreateOrConnectWithoutGroupInput = {
    where: GroupMemberWhereUniqueInput
    create: XOR<GroupMemberCreateWithoutGroupInput, GroupMemberUncheckedCreateWithoutGroupInput>
  }

  export type GroupMemberCreateManyGroupInputEnvelope = {
    data: GroupMemberCreateManyGroupInput | GroupMemberCreateManyGroupInput[]
    skipDuplicates?: boolean
  }

  export type GroupMessageCreateWithoutGroupInput = {
    id?: string
    content?: string | null
    photoUrl?: string | null
    type?: string | null
    createdAt?: Date | string
    deleted?: boolean
    author: UserCreateNestedOneWithoutGroupMessagesInput
  }

  export type GroupMessageUncheckedCreateWithoutGroupInput = {
    id?: string
    authorId: string
    content?: string | null
    photoUrl?: string | null
    type?: string | null
    createdAt?: Date | string
    deleted?: boolean
  }

  export type GroupMessageCreateOrConnectWithoutGroupInput = {
    where: GroupMessageWhereUniqueInput
    create: XOR<GroupMessageCreateWithoutGroupInput, GroupMessageUncheckedCreateWithoutGroupInput>
  }

  export type GroupMessageCreateManyGroupInputEnvelope = {
    data: GroupMessageCreateManyGroupInput | GroupMessageCreateManyGroupInput[]
    skipDuplicates?: boolean
  }

  export type GroupJoinRequestCreateWithoutGroupInput = {
    id?: string
    requestedAt?: Date | string
    fromUser: UserCreateNestedOneWithoutGroupJoinRequestsInput
    toUser: UserCreateNestedOneWithoutReceivedGroupJoinRequestsInput
  }

  export type GroupJoinRequestUncheckedCreateWithoutGroupInput = {
    id?: string
    fromUserId: string
    toUserId: string
    requestedAt?: Date | string
  }

  export type GroupJoinRequestCreateOrConnectWithoutGroupInput = {
    where: GroupJoinRequestWhereUniqueInput
    create: XOR<GroupJoinRequestCreateWithoutGroupInput, GroupJoinRequestUncheckedCreateWithoutGroupInput>
  }

  export type GroupJoinRequestCreateManyGroupInputEnvelope = {
    data: GroupJoinRequestCreateManyGroupInput | GroupJoinRequestCreateManyGroupInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutGroupChatsCreatedInput = {
    update: XOR<UserUpdateWithoutGroupChatsCreatedInput, UserUncheckedUpdateWithoutGroupChatsCreatedInput>
    create: XOR<UserCreateWithoutGroupChatsCreatedInput, UserUncheckedCreateWithoutGroupChatsCreatedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutGroupChatsCreatedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutGroupChatsCreatedInput, UserUncheckedUpdateWithoutGroupChatsCreatedInput>
  }

  export type UserUpdateWithoutGroupChatsCreatedInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    creationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSeenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    globalMessages?: GlobalMessageUpdateManyWithoutAuthorNestedInput
    friends?: FriendsUpdateManyWithoutUserNestedInput
    friendOf?: FriendsUpdateManyWithoutFriendNestedInput
    friendRequests?: FriendRequestUpdateManyWithoutRequestFromNestedInput
    receivedRequests?: FriendRequestUpdateManyWithoutRequestToNestedInput
    blocked?: BlockListUpdateManyWithoutUserNestedInput
    blockedBy?: BlockListUpdateManyWithoutBlockedUserNestedInput
    groupMembers?: GroupMemberUpdateManyWithoutUserNestedInput
    groupJoinRequests?: GroupJoinRequestUpdateManyWithoutFromUserNestedInput
    receivedGroupJoinRequests?: GroupJoinRequestUpdateManyWithoutToUserNestedInput
    groupMessages?: GroupMessageUpdateManyWithoutAuthorNestedInput
    privateMessagesSent?: PrivateMessageUpdateManyWithoutFromUserNestedInput
    privateMessagesReceived?: PrivateMessageUpdateManyWithoutToUserNestedInput
  }

  export type UserUncheckedUpdateWithoutGroupChatsCreatedInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    creationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSeenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    globalMessages?: GlobalMessageUncheckedUpdateManyWithoutAuthorNestedInput
    friends?: FriendsUncheckedUpdateManyWithoutUserNestedInput
    friendOf?: FriendsUncheckedUpdateManyWithoutFriendNestedInput
    friendRequests?: FriendRequestUncheckedUpdateManyWithoutRequestFromNestedInput
    receivedRequests?: FriendRequestUncheckedUpdateManyWithoutRequestToNestedInput
    blocked?: BlockListUncheckedUpdateManyWithoutUserNestedInput
    blockedBy?: BlockListUncheckedUpdateManyWithoutBlockedUserNestedInput
    groupMembers?: GroupMemberUncheckedUpdateManyWithoutUserNestedInput
    groupJoinRequests?: GroupJoinRequestUncheckedUpdateManyWithoutFromUserNestedInput
    receivedGroupJoinRequests?: GroupJoinRequestUncheckedUpdateManyWithoutToUserNestedInput
    groupMessages?: GroupMessageUncheckedUpdateManyWithoutAuthorNestedInput
    privateMessagesSent?: PrivateMessageUncheckedUpdateManyWithoutFromUserNestedInput
    privateMessagesReceived?: PrivateMessageUncheckedUpdateManyWithoutToUserNestedInput
  }

  export type GroupMemberUpsertWithWhereUniqueWithoutGroupInput = {
    where: GroupMemberWhereUniqueInput
    update: XOR<GroupMemberUpdateWithoutGroupInput, GroupMemberUncheckedUpdateWithoutGroupInput>
    create: XOR<GroupMemberCreateWithoutGroupInput, GroupMemberUncheckedCreateWithoutGroupInput>
  }

  export type GroupMemberUpdateWithWhereUniqueWithoutGroupInput = {
    where: GroupMemberWhereUniqueInput
    data: XOR<GroupMemberUpdateWithoutGroupInput, GroupMemberUncheckedUpdateWithoutGroupInput>
  }

  export type GroupMemberUpdateManyWithWhereWithoutGroupInput = {
    where: GroupMemberScalarWhereInput
    data: XOR<GroupMemberUpdateManyMutationInput, GroupMemberUncheckedUpdateManyWithoutGroupInput>
  }

  export type GroupMessageUpsertWithWhereUniqueWithoutGroupInput = {
    where: GroupMessageWhereUniqueInput
    update: XOR<GroupMessageUpdateWithoutGroupInput, GroupMessageUncheckedUpdateWithoutGroupInput>
    create: XOR<GroupMessageCreateWithoutGroupInput, GroupMessageUncheckedCreateWithoutGroupInput>
  }

  export type GroupMessageUpdateWithWhereUniqueWithoutGroupInput = {
    where: GroupMessageWhereUniqueInput
    data: XOR<GroupMessageUpdateWithoutGroupInput, GroupMessageUncheckedUpdateWithoutGroupInput>
  }

  export type GroupMessageUpdateManyWithWhereWithoutGroupInput = {
    where: GroupMessageScalarWhereInput
    data: XOR<GroupMessageUpdateManyMutationInput, GroupMessageUncheckedUpdateManyWithoutGroupInput>
  }

  export type GroupJoinRequestUpsertWithWhereUniqueWithoutGroupInput = {
    where: GroupJoinRequestWhereUniqueInput
    update: XOR<GroupJoinRequestUpdateWithoutGroupInput, GroupJoinRequestUncheckedUpdateWithoutGroupInput>
    create: XOR<GroupJoinRequestCreateWithoutGroupInput, GroupJoinRequestUncheckedCreateWithoutGroupInput>
  }

  export type GroupJoinRequestUpdateWithWhereUniqueWithoutGroupInput = {
    where: GroupJoinRequestWhereUniqueInput
    data: XOR<GroupJoinRequestUpdateWithoutGroupInput, GroupJoinRequestUncheckedUpdateWithoutGroupInput>
  }

  export type GroupJoinRequestUpdateManyWithWhereWithoutGroupInput = {
    where: GroupJoinRequestScalarWhereInput
    data: XOR<GroupJoinRequestUpdateManyMutationInput, GroupJoinRequestUncheckedUpdateManyWithoutGroupInput>
  }

  export type GroupChatCreateWithoutMembersInput = {
    id?: string
    groupName: string
    groupPhoto?: string | null
    createdAt?: Date | string
    createdBy: UserCreateNestedOneWithoutGroupChatsCreatedInput
    messages?: GroupMessageCreateNestedManyWithoutGroupInput
    joinRequests?: GroupJoinRequestCreateNestedManyWithoutGroupInput
  }

  export type GroupChatUncheckedCreateWithoutMembersInput = {
    id?: string
    groupName: string
    groupPhoto?: string | null
    createdById: string
    createdAt?: Date | string
    messages?: GroupMessageUncheckedCreateNestedManyWithoutGroupInput
    joinRequests?: GroupJoinRequestUncheckedCreateNestedManyWithoutGroupInput
  }

  export type GroupChatCreateOrConnectWithoutMembersInput = {
    where: GroupChatWhereUniqueInput
    create: XOR<GroupChatCreateWithoutMembersInput, GroupChatUncheckedCreateWithoutMembersInput>
  }

  export type UserCreateWithoutGroupMembersInput = {
    id?: string
    email: string
    password: string
    displayName: string
    username: string
    photoUrl?: string | null
    role?: $Enums.Role
    creationDate?: Date | string
    lastSeenAt?: Date | string
    globalMessages?: GlobalMessageCreateNestedManyWithoutAuthorInput
    friends?: FriendsCreateNestedManyWithoutUserInput
    friendOf?: FriendsCreateNestedManyWithoutFriendInput
    friendRequests?: FriendRequestCreateNestedManyWithoutRequestFromInput
    receivedRequests?: FriendRequestCreateNestedManyWithoutRequestToInput
    blocked?: BlockListCreateNestedManyWithoutUserInput
    blockedBy?: BlockListCreateNestedManyWithoutBlockedUserInput
    groupChatsCreated?: GroupChatCreateNestedManyWithoutCreatedByInput
    groupJoinRequests?: GroupJoinRequestCreateNestedManyWithoutFromUserInput
    receivedGroupJoinRequests?: GroupJoinRequestCreateNestedManyWithoutToUserInput
    groupMessages?: GroupMessageCreateNestedManyWithoutAuthorInput
    privateMessagesSent?: PrivateMessageCreateNestedManyWithoutFromUserInput
    privateMessagesReceived?: PrivateMessageCreateNestedManyWithoutToUserInput
  }

  export type UserUncheckedCreateWithoutGroupMembersInput = {
    id?: string
    email: string
    password: string
    displayName: string
    username: string
    photoUrl?: string | null
    role?: $Enums.Role
    creationDate?: Date | string
    lastSeenAt?: Date | string
    globalMessages?: GlobalMessageUncheckedCreateNestedManyWithoutAuthorInput
    friends?: FriendsUncheckedCreateNestedManyWithoutUserInput
    friendOf?: FriendsUncheckedCreateNestedManyWithoutFriendInput
    friendRequests?: FriendRequestUncheckedCreateNestedManyWithoutRequestFromInput
    receivedRequests?: FriendRequestUncheckedCreateNestedManyWithoutRequestToInput
    blocked?: BlockListUncheckedCreateNestedManyWithoutUserInput
    blockedBy?: BlockListUncheckedCreateNestedManyWithoutBlockedUserInput
    groupChatsCreated?: GroupChatUncheckedCreateNestedManyWithoutCreatedByInput
    groupJoinRequests?: GroupJoinRequestUncheckedCreateNestedManyWithoutFromUserInput
    receivedGroupJoinRequests?: GroupJoinRequestUncheckedCreateNestedManyWithoutToUserInput
    groupMessages?: GroupMessageUncheckedCreateNestedManyWithoutAuthorInput
    privateMessagesSent?: PrivateMessageUncheckedCreateNestedManyWithoutFromUserInput
    privateMessagesReceived?: PrivateMessageUncheckedCreateNestedManyWithoutToUserInput
  }

  export type UserCreateOrConnectWithoutGroupMembersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutGroupMembersInput, UserUncheckedCreateWithoutGroupMembersInput>
  }

  export type GroupChatUpsertWithoutMembersInput = {
    update: XOR<GroupChatUpdateWithoutMembersInput, GroupChatUncheckedUpdateWithoutMembersInput>
    create: XOR<GroupChatCreateWithoutMembersInput, GroupChatUncheckedCreateWithoutMembersInput>
    where?: GroupChatWhereInput
  }

  export type GroupChatUpdateToOneWithWhereWithoutMembersInput = {
    where?: GroupChatWhereInput
    data: XOR<GroupChatUpdateWithoutMembersInput, GroupChatUncheckedUpdateWithoutMembersInput>
  }

  export type GroupChatUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupName?: StringFieldUpdateOperationsInput | string
    groupPhoto?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutGroupChatsCreatedNestedInput
    messages?: GroupMessageUpdateManyWithoutGroupNestedInput
    joinRequests?: GroupJoinRequestUpdateManyWithoutGroupNestedInput
  }

  export type GroupChatUncheckedUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupName?: StringFieldUpdateOperationsInput | string
    groupPhoto?: NullableStringFieldUpdateOperationsInput | string | null
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: GroupMessageUncheckedUpdateManyWithoutGroupNestedInput
    joinRequests?: GroupJoinRequestUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type UserUpsertWithoutGroupMembersInput = {
    update: XOR<UserUpdateWithoutGroupMembersInput, UserUncheckedUpdateWithoutGroupMembersInput>
    create: XOR<UserCreateWithoutGroupMembersInput, UserUncheckedCreateWithoutGroupMembersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutGroupMembersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutGroupMembersInput, UserUncheckedUpdateWithoutGroupMembersInput>
  }

  export type UserUpdateWithoutGroupMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    creationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSeenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    globalMessages?: GlobalMessageUpdateManyWithoutAuthorNestedInput
    friends?: FriendsUpdateManyWithoutUserNestedInput
    friendOf?: FriendsUpdateManyWithoutFriendNestedInput
    friendRequests?: FriendRequestUpdateManyWithoutRequestFromNestedInput
    receivedRequests?: FriendRequestUpdateManyWithoutRequestToNestedInput
    blocked?: BlockListUpdateManyWithoutUserNestedInput
    blockedBy?: BlockListUpdateManyWithoutBlockedUserNestedInput
    groupChatsCreated?: GroupChatUpdateManyWithoutCreatedByNestedInput
    groupJoinRequests?: GroupJoinRequestUpdateManyWithoutFromUserNestedInput
    receivedGroupJoinRequests?: GroupJoinRequestUpdateManyWithoutToUserNestedInput
    groupMessages?: GroupMessageUpdateManyWithoutAuthorNestedInput
    privateMessagesSent?: PrivateMessageUpdateManyWithoutFromUserNestedInput
    privateMessagesReceived?: PrivateMessageUpdateManyWithoutToUserNestedInput
  }

  export type UserUncheckedUpdateWithoutGroupMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    creationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSeenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    globalMessages?: GlobalMessageUncheckedUpdateManyWithoutAuthorNestedInput
    friends?: FriendsUncheckedUpdateManyWithoutUserNestedInput
    friendOf?: FriendsUncheckedUpdateManyWithoutFriendNestedInput
    friendRequests?: FriendRequestUncheckedUpdateManyWithoutRequestFromNestedInput
    receivedRequests?: FriendRequestUncheckedUpdateManyWithoutRequestToNestedInput
    blocked?: BlockListUncheckedUpdateManyWithoutUserNestedInput
    blockedBy?: BlockListUncheckedUpdateManyWithoutBlockedUserNestedInput
    groupChatsCreated?: GroupChatUncheckedUpdateManyWithoutCreatedByNestedInput
    groupJoinRequests?: GroupJoinRequestUncheckedUpdateManyWithoutFromUserNestedInput
    receivedGroupJoinRequests?: GroupJoinRequestUncheckedUpdateManyWithoutToUserNestedInput
    groupMessages?: GroupMessageUncheckedUpdateManyWithoutAuthorNestedInput
    privateMessagesSent?: PrivateMessageUncheckedUpdateManyWithoutFromUserNestedInput
    privateMessagesReceived?: PrivateMessageUncheckedUpdateManyWithoutToUserNestedInput
  }

  export type GroupChatCreateWithoutJoinRequestsInput = {
    id?: string
    groupName: string
    groupPhoto?: string | null
    createdAt?: Date | string
    createdBy: UserCreateNestedOneWithoutGroupChatsCreatedInput
    members?: GroupMemberCreateNestedManyWithoutGroupInput
    messages?: GroupMessageCreateNestedManyWithoutGroupInput
  }

  export type GroupChatUncheckedCreateWithoutJoinRequestsInput = {
    id?: string
    groupName: string
    groupPhoto?: string | null
    createdById: string
    createdAt?: Date | string
    members?: GroupMemberUncheckedCreateNestedManyWithoutGroupInput
    messages?: GroupMessageUncheckedCreateNestedManyWithoutGroupInput
  }

  export type GroupChatCreateOrConnectWithoutJoinRequestsInput = {
    where: GroupChatWhereUniqueInput
    create: XOR<GroupChatCreateWithoutJoinRequestsInput, GroupChatUncheckedCreateWithoutJoinRequestsInput>
  }

  export type UserCreateWithoutGroupJoinRequestsInput = {
    id?: string
    email: string
    password: string
    displayName: string
    username: string
    photoUrl?: string | null
    role?: $Enums.Role
    creationDate?: Date | string
    lastSeenAt?: Date | string
    globalMessages?: GlobalMessageCreateNestedManyWithoutAuthorInput
    friends?: FriendsCreateNestedManyWithoutUserInput
    friendOf?: FriendsCreateNestedManyWithoutFriendInput
    friendRequests?: FriendRequestCreateNestedManyWithoutRequestFromInput
    receivedRequests?: FriendRequestCreateNestedManyWithoutRequestToInput
    blocked?: BlockListCreateNestedManyWithoutUserInput
    blockedBy?: BlockListCreateNestedManyWithoutBlockedUserInput
    groupChatsCreated?: GroupChatCreateNestedManyWithoutCreatedByInput
    groupMembers?: GroupMemberCreateNestedManyWithoutUserInput
    receivedGroupJoinRequests?: GroupJoinRequestCreateNestedManyWithoutToUserInput
    groupMessages?: GroupMessageCreateNestedManyWithoutAuthorInput
    privateMessagesSent?: PrivateMessageCreateNestedManyWithoutFromUserInput
    privateMessagesReceived?: PrivateMessageCreateNestedManyWithoutToUserInput
  }

  export type UserUncheckedCreateWithoutGroupJoinRequestsInput = {
    id?: string
    email: string
    password: string
    displayName: string
    username: string
    photoUrl?: string | null
    role?: $Enums.Role
    creationDate?: Date | string
    lastSeenAt?: Date | string
    globalMessages?: GlobalMessageUncheckedCreateNestedManyWithoutAuthorInput
    friends?: FriendsUncheckedCreateNestedManyWithoutUserInput
    friendOf?: FriendsUncheckedCreateNestedManyWithoutFriendInput
    friendRequests?: FriendRequestUncheckedCreateNestedManyWithoutRequestFromInput
    receivedRequests?: FriendRequestUncheckedCreateNestedManyWithoutRequestToInput
    blocked?: BlockListUncheckedCreateNestedManyWithoutUserInput
    blockedBy?: BlockListUncheckedCreateNestedManyWithoutBlockedUserInput
    groupChatsCreated?: GroupChatUncheckedCreateNestedManyWithoutCreatedByInput
    groupMembers?: GroupMemberUncheckedCreateNestedManyWithoutUserInput
    receivedGroupJoinRequests?: GroupJoinRequestUncheckedCreateNestedManyWithoutToUserInput
    groupMessages?: GroupMessageUncheckedCreateNestedManyWithoutAuthorInput
    privateMessagesSent?: PrivateMessageUncheckedCreateNestedManyWithoutFromUserInput
    privateMessagesReceived?: PrivateMessageUncheckedCreateNestedManyWithoutToUserInput
  }

  export type UserCreateOrConnectWithoutGroupJoinRequestsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutGroupJoinRequestsInput, UserUncheckedCreateWithoutGroupJoinRequestsInput>
  }

  export type UserCreateWithoutReceivedGroupJoinRequestsInput = {
    id?: string
    email: string
    password: string
    displayName: string
    username: string
    photoUrl?: string | null
    role?: $Enums.Role
    creationDate?: Date | string
    lastSeenAt?: Date | string
    globalMessages?: GlobalMessageCreateNestedManyWithoutAuthorInput
    friends?: FriendsCreateNestedManyWithoutUserInput
    friendOf?: FriendsCreateNestedManyWithoutFriendInput
    friendRequests?: FriendRequestCreateNestedManyWithoutRequestFromInput
    receivedRequests?: FriendRequestCreateNestedManyWithoutRequestToInput
    blocked?: BlockListCreateNestedManyWithoutUserInput
    blockedBy?: BlockListCreateNestedManyWithoutBlockedUserInput
    groupChatsCreated?: GroupChatCreateNestedManyWithoutCreatedByInput
    groupMembers?: GroupMemberCreateNestedManyWithoutUserInput
    groupJoinRequests?: GroupJoinRequestCreateNestedManyWithoutFromUserInput
    groupMessages?: GroupMessageCreateNestedManyWithoutAuthorInput
    privateMessagesSent?: PrivateMessageCreateNestedManyWithoutFromUserInput
    privateMessagesReceived?: PrivateMessageCreateNestedManyWithoutToUserInput
  }

  export type UserUncheckedCreateWithoutReceivedGroupJoinRequestsInput = {
    id?: string
    email: string
    password: string
    displayName: string
    username: string
    photoUrl?: string | null
    role?: $Enums.Role
    creationDate?: Date | string
    lastSeenAt?: Date | string
    globalMessages?: GlobalMessageUncheckedCreateNestedManyWithoutAuthorInput
    friends?: FriendsUncheckedCreateNestedManyWithoutUserInput
    friendOf?: FriendsUncheckedCreateNestedManyWithoutFriendInput
    friendRequests?: FriendRequestUncheckedCreateNestedManyWithoutRequestFromInput
    receivedRequests?: FriendRequestUncheckedCreateNestedManyWithoutRequestToInput
    blocked?: BlockListUncheckedCreateNestedManyWithoutUserInput
    blockedBy?: BlockListUncheckedCreateNestedManyWithoutBlockedUserInput
    groupChatsCreated?: GroupChatUncheckedCreateNestedManyWithoutCreatedByInput
    groupMembers?: GroupMemberUncheckedCreateNestedManyWithoutUserInput
    groupJoinRequests?: GroupJoinRequestUncheckedCreateNestedManyWithoutFromUserInput
    groupMessages?: GroupMessageUncheckedCreateNestedManyWithoutAuthorInput
    privateMessagesSent?: PrivateMessageUncheckedCreateNestedManyWithoutFromUserInput
    privateMessagesReceived?: PrivateMessageUncheckedCreateNestedManyWithoutToUserInput
  }

  export type UserCreateOrConnectWithoutReceivedGroupJoinRequestsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReceivedGroupJoinRequestsInput, UserUncheckedCreateWithoutReceivedGroupJoinRequestsInput>
  }

  export type GroupChatUpsertWithoutJoinRequestsInput = {
    update: XOR<GroupChatUpdateWithoutJoinRequestsInput, GroupChatUncheckedUpdateWithoutJoinRequestsInput>
    create: XOR<GroupChatCreateWithoutJoinRequestsInput, GroupChatUncheckedCreateWithoutJoinRequestsInput>
    where?: GroupChatWhereInput
  }

  export type GroupChatUpdateToOneWithWhereWithoutJoinRequestsInput = {
    where?: GroupChatWhereInput
    data: XOR<GroupChatUpdateWithoutJoinRequestsInput, GroupChatUncheckedUpdateWithoutJoinRequestsInput>
  }

  export type GroupChatUpdateWithoutJoinRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupName?: StringFieldUpdateOperationsInput | string
    groupPhoto?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutGroupChatsCreatedNestedInput
    members?: GroupMemberUpdateManyWithoutGroupNestedInput
    messages?: GroupMessageUpdateManyWithoutGroupNestedInput
  }

  export type GroupChatUncheckedUpdateWithoutJoinRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupName?: StringFieldUpdateOperationsInput | string
    groupPhoto?: NullableStringFieldUpdateOperationsInput | string | null
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: GroupMemberUncheckedUpdateManyWithoutGroupNestedInput
    messages?: GroupMessageUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type UserUpsertWithoutGroupJoinRequestsInput = {
    update: XOR<UserUpdateWithoutGroupJoinRequestsInput, UserUncheckedUpdateWithoutGroupJoinRequestsInput>
    create: XOR<UserCreateWithoutGroupJoinRequestsInput, UserUncheckedCreateWithoutGroupJoinRequestsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutGroupJoinRequestsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutGroupJoinRequestsInput, UserUncheckedUpdateWithoutGroupJoinRequestsInput>
  }

  export type UserUpdateWithoutGroupJoinRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    creationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSeenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    globalMessages?: GlobalMessageUpdateManyWithoutAuthorNestedInput
    friends?: FriendsUpdateManyWithoutUserNestedInput
    friendOf?: FriendsUpdateManyWithoutFriendNestedInput
    friendRequests?: FriendRequestUpdateManyWithoutRequestFromNestedInput
    receivedRequests?: FriendRequestUpdateManyWithoutRequestToNestedInput
    blocked?: BlockListUpdateManyWithoutUserNestedInput
    blockedBy?: BlockListUpdateManyWithoutBlockedUserNestedInput
    groupChatsCreated?: GroupChatUpdateManyWithoutCreatedByNestedInput
    groupMembers?: GroupMemberUpdateManyWithoutUserNestedInput
    receivedGroupJoinRequests?: GroupJoinRequestUpdateManyWithoutToUserNestedInput
    groupMessages?: GroupMessageUpdateManyWithoutAuthorNestedInput
    privateMessagesSent?: PrivateMessageUpdateManyWithoutFromUserNestedInput
    privateMessagesReceived?: PrivateMessageUpdateManyWithoutToUserNestedInput
  }

  export type UserUncheckedUpdateWithoutGroupJoinRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    creationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSeenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    globalMessages?: GlobalMessageUncheckedUpdateManyWithoutAuthorNestedInput
    friends?: FriendsUncheckedUpdateManyWithoutUserNestedInput
    friendOf?: FriendsUncheckedUpdateManyWithoutFriendNestedInput
    friendRequests?: FriendRequestUncheckedUpdateManyWithoutRequestFromNestedInput
    receivedRequests?: FriendRequestUncheckedUpdateManyWithoutRequestToNestedInput
    blocked?: BlockListUncheckedUpdateManyWithoutUserNestedInput
    blockedBy?: BlockListUncheckedUpdateManyWithoutBlockedUserNestedInput
    groupChatsCreated?: GroupChatUncheckedUpdateManyWithoutCreatedByNestedInput
    groupMembers?: GroupMemberUncheckedUpdateManyWithoutUserNestedInput
    receivedGroupJoinRequests?: GroupJoinRequestUncheckedUpdateManyWithoutToUserNestedInput
    groupMessages?: GroupMessageUncheckedUpdateManyWithoutAuthorNestedInput
    privateMessagesSent?: PrivateMessageUncheckedUpdateManyWithoutFromUserNestedInput
    privateMessagesReceived?: PrivateMessageUncheckedUpdateManyWithoutToUserNestedInput
  }

  export type UserUpsertWithoutReceivedGroupJoinRequestsInput = {
    update: XOR<UserUpdateWithoutReceivedGroupJoinRequestsInput, UserUncheckedUpdateWithoutReceivedGroupJoinRequestsInput>
    create: XOR<UserCreateWithoutReceivedGroupJoinRequestsInput, UserUncheckedCreateWithoutReceivedGroupJoinRequestsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReceivedGroupJoinRequestsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReceivedGroupJoinRequestsInput, UserUncheckedUpdateWithoutReceivedGroupJoinRequestsInput>
  }

  export type UserUpdateWithoutReceivedGroupJoinRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    creationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSeenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    globalMessages?: GlobalMessageUpdateManyWithoutAuthorNestedInput
    friends?: FriendsUpdateManyWithoutUserNestedInput
    friendOf?: FriendsUpdateManyWithoutFriendNestedInput
    friendRequests?: FriendRequestUpdateManyWithoutRequestFromNestedInput
    receivedRequests?: FriendRequestUpdateManyWithoutRequestToNestedInput
    blocked?: BlockListUpdateManyWithoutUserNestedInput
    blockedBy?: BlockListUpdateManyWithoutBlockedUserNestedInput
    groupChatsCreated?: GroupChatUpdateManyWithoutCreatedByNestedInput
    groupMembers?: GroupMemberUpdateManyWithoutUserNestedInput
    groupJoinRequests?: GroupJoinRequestUpdateManyWithoutFromUserNestedInput
    groupMessages?: GroupMessageUpdateManyWithoutAuthorNestedInput
    privateMessagesSent?: PrivateMessageUpdateManyWithoutFromUserNestedInput
    privateMessagesReceived?: PrivateMessageUpdateManyWithoutToUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReceivedGroupJoinRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    creationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSeenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    globalMessages?: GlobalMessageUncheckedUpdateManyWithoutAuthorNestedInput
    friends?: FriendsUncheckedUpdateManyWithoutUserNestedInput
    friendOf?: FriendsUncheckedUpdateManyWithoutFriendNestedInput
    friendRequests?: FriendRequestUncheckedUpdateManyWithoutRequestFromNestedInput
    receivedRequests?: FriendRequestUncheckedUpdateManyWithoutRequestToNestedInput
    blocked?: BlockListUncheckedUpdateManyWithoutUserNestedInput
    blockedBy?: BlockListUncheckedUpdateManyWithoutBlockedUserNestedInput
    groupChatsCreated?: GroupChatUncheckedUpdateManyWithoutCreatedByNestedInput
    groupMembers?: GroupMemberUncheckedUpdateManyWithoutUserNestedInput
    groupJoinRequests?: GroupJoinRequestUncheckedUpdateManyWithoutFromUserNestedInput
    groupMessages?: GroupMessageUncheckedUpdateManyWithoutAuthorNestedInput
    privateMessagesSent?: PrivateMessageUncheckedUpdateManyWithoutFromUserNestedInput
    privateMessagesReceived?: PrivateMessageUncheckedUpdateManyWithoutToUserNestedInput
  }

  export type GroupChatCreateWithoutMessagesInput = {
    id?: string
    groupName: string
    groupPhoto?: string | null
    createdAt?: Date | string
    createdBy: UserCreateNestedOneWithoutGroupChatsCreatedInput
    members?: GroupMemberCreateNestedManyWithoutGroupInput
    joinRequests?: GroupJoinRequestCreateNestedManyWithoutGroupInput
  }

  export type GroupChatUncheckedCreateWithoutMessagesInput = {
    id?: string
    groupName: string
    groupPhoto?: string | null
    createdById: string
    createdAt?: Date | string
    members?: GroupMemberUncheckedCreateNestedManyWithoutGroupInput
    joinRequests?: GroupJoinRequestUncheckedCreateNestedManyWithoutGroupInput
  }

  export type GroupChatCreateOrConnectWithoutMessagesInput = {
    where: GroupChatWhereUniqueInput
    create: XOR<GroupChatCreateWithoutMessagesInput, GroupChatUncheckedCreateWithoutMessagesInput>
  }

  export type UserCreateWithoutGroupMessagesInput = {
    id?: string
    email: string
    password: string
    displayName: string
    username: string
    photoUrl?: string | null
    role?: $Enums.Role
    creationDate?: Date | string
    lastSeenAt?: Date | string
    globalMessages?: GlobalMessageCreateNestedManyWithoutAuthorInput
    friends?: FriendsCreateNestedManyWithoutUserInput
    friendOf?: FriendsCreateNestedManyWithoutFriendInput
    friendRequests?: FriendRequestCreateNestedManyWithoutRequestFromInput
    receivedRequests?: FriendRequestCreateNestedManyWithoutRequestToInput
    blocked?: BlockListCreateNestedManyWithoutUserInput
    blockedBy?: BlockListCreateNestedManyWithoutBlockedUserInput
    groupChatsCreated?: GroupChatCreateNestedManyWithoutCreatedByInput
    groupMembers?: GroupMemberCreateNestedManyWithoutUserInput
    groupJoinRequests?: GroupJoinRequestCreateNestedManyWithoutFromUserInput
    receivedGroupJoinRequests?: GroupJoinRequestCreateNestedManyWithoutToUserInput
    privateMessagesSent?: PrivateMessageCreateNestedManyWithoutFromUserInput
    privateMessagesReceived?: PrivateMessageCreateNestedManyWithoutToUserInput
  }

  export type UserUncheckedCreateWithoutGroupMessagesInput = {
    id?: string
    email: string
    password: string
    displayName: string
    username: string
    photoUrl?: string | null
    role?: $Enums.Role
    creationDate?: Date | string
    lastSeenAt?: Date | string
    globalMessages?: GlobalMessageUncheckedCreateNestedManyWithoutAuthorInput
    friends?: FriendsUncheckedCreateNestedManyWithoutUserInput
    friendOf?: FriendsUncheckedCreateNestedManyWithoutFriendInput
    friendRequests?: FriendRequestUncheckedCreateNestedManyWithoutRequestFromInput
    receivedRequests?: FriendRequestUncheckedCreateNestedManyWithoutRequestToInput
    blocked?: BlockListUncheckedCreateNestedManyWithoutUserInput
    blockedBy?: BlockListUncheckedCreateNestedManyWithoutBlockedUserInput
    groupChatsCreated?: GroupChatUncheckedCreateNestedManyWithoutCreatedByInput
    groupMembers?: GroupMemberUncheckedCreateNestedManyWithoutUserInput
    groupJoinRequests?: GroupJoinRequestUncheckedCreateNestedManyWithoutFromUserInput
    receivedGroupJoinRequests?: GroupJoinRequestUncheckedCreateNestedManyWithoutToUserInput
    privateMessagesSent?: PrivateMessageUncheckedCreateNestedManyWithoutFromUserInput
    privateMessagesReceived?: PrivateMessageUncheckedCreateNestedManyWithoutToUserInput
  }

  export type UserCreateOrConnectWithoutGroupMessagesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutGroupMessagesInput, UserUncheckedCreateWithoutGroupMessagesInput>
  }

  export type GroupChatUpsertWithoutMessagesInput = {
    update: XOR<GroupChatUpdateWithoutMessagesInput, GroupChatUncheckedUpdateWithoutMessagesInput>
    create: XOR<GroupChatCreateWithoutMessagesInput, GroupChatUncheckedCreateWithoutMessagesInput>
    where?: GroupChatWhereInput
  }

  export type GroupChatUpdateToOneWithWhereWithoutMessagesInput = {
    where?: GroupChatWhereInput
    data: XOR<GroupChatUpdateWithoutMessagesInput, GroupChatUncheckedUpdateWithoutMessagesInput>
  }

  export type GroupChatUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupName?: StringFieldUpdateOperationsInput | string
    groupPhoto?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutGroupChatsCreatedNestedInput
    members?: GroupMemberUpdateManyWithoutGroupNestedInput
    joinRequests?: GroupJoinRequestUpdateManyWithoutGroupNestedInput
  }

  export type GroupChatUncheckedUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupName?: StringFieldUpdateOperationsInput | string
    groupPhoto?: NullableStringFieldUpdateOperationsInput | string | null
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: GroupMemberUncheckedUpdateManyWithoutGroupNestedInput
    joinRequests?: GroupJoinRequestUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type UserUpsertWithoutGroupMessagesInput = {
    update: XOR<UserUpdateWithoutGroupMessagesInput, UserUncheckedUpdateWithoutGroupMessagesInput>
    create: XOR<UserCreateWithoutGroupMessagesInput, UserUncheckedCreateWithoutGroupMessagesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutGroupMessagesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutGroupMessagesInput, UserUncheckedUpdateWithoutGroupMessagesInput>
  }

  export type UserUpdateWithoutGroupMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    creationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSeenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    globalMessages?: GlobalMessageUpdateManyWithoutAuthorNestedInput
    friends?: FriendsUpdateManyWithoutUserNestedInput
    friendOf?: FriendsUpdateManyWithoutFriendNestedInput
    friendRequests?: FriendRequestUpdateManyWithoutRequestFromNestedInput
    receivedRequests?: FriendRequestUpdateManyWithoutRequestToNestedInput
    blocked?: BlockListUpdateManyWithoutUserNestedInput
    blockedBy?: BlockListUpdateManyWithoutBlockedUserNestedInput
    groupChatsCreated?: GroupChatUpdateManyWithoutCreatedByNestedInput
    groupMembers?: GroupMemberUpdateManyWithoutUserNestedInput
    groupJoinRequests?: GroupJoinRequestUpdateManyWithoutFromUserNestedInput
    receivedGroupJoinRequests?: GroupJoinRequestUpdateManyWithoutToUserNestedInput
    privateMessagesSent?: PrivateMessageUpdateManyWithoutFromUserNestedInput
    privateMessagesReceived?: PrivateMessageUpdateManyWithoutToUserNestedInput
  }

  export type UserUncheckedUpdateWithoutGroupMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    creationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSeenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    globalMessages?: GlobalMessageUncheckedUpdateManyWithoutAuthorNestedInput
    friends?: FriendsUncheckedUpdateManyWithoutUserNestedInput
    friendOf?: FriendsUncheckedUpdateManyWithoutFriendNestedInput
    friendRequests?: FriendRequestUncheckedUpdateManyWithoutRequestFromNestedInput
    receivedRequests?: FriendRequestUncheckedUpdateManyWithoutRequestToNestedInput
    blocked?: BlockListUncheckedUpdateManyWithoutUserNestedInput
    blockedBy?: BlockListUncheckedUpdateManyWithoutBlockedUserNestedInput
    groupChatsCreated?: GroupChatUncheckedUpdateManyWithoutCreatedByNestedInput
    groupMembers?: GroupMemberUncheckedUpdateManyWithoutUserNestedInput
    groupJoinRequests?: GroupJoinRequestUncheckedUpdateManyWithoutFromUserNestedInput
    receivedGroupJoinRequests?: GroupJoinRequestUncheckedUpdateManyWithoutToUserNestedInput
    privateMessagesSent?: PrivateMessageUncheckedUpdateManyWithoutFromUserNestedInput
    privateMessagesReceived?: PrivateMessageUncheckedUpdateManyWithoutToUserNestedInput
  }

  export type UserCreateWithoutPrivateMessagesSentInput = {
    id?: string
    email: string
    password: string
    displayName: string
    username: string
    photoUrl?: string | null
    role?: $Enums.Role
    creationDate?: Date | string
    lastSeenAt?: Date | string
    globalMessages?: GlobalMessageCreateNestedManyWithoutAuthorInput
    friends?: FriendsCreateNestedManyWithoutUserInput
    friendOf?: FriendsCreateNestedManyWithoutFriendInput
    friendRequests?: FriendRequestCreateNestedManyWithoutRequestFromInput
    receivedRequests?: FriendRequestCreateNestedManyWithoutRequestToInput
    blocked?: BlockListCreateNestedManyWithoutUserInput
    blockedBy?: BlockListCreateNestedManyWithoutBlockedUserInput
    groupChatsCreated?: GroupChatCreateNestedManyWithoutCreatedByInput
    groupMembers?: GroupMemberCreateNestedManyWithoutUserInput
    groupJoinRequests?: GroupJoinRequestCreateNestedManyWithoutFromUserInput
    receivedGroupJoinRequests?: GroupJoinRequestCreateNestedManyWithoutToUserInput
    groupMessages?: GroupMessageCreateNestedManyWithoutAuthorInput
    privateMessagesReceived?: PrivateMessageCreateNestedManyWithoutToUserInput
  }

  export type UserUncheckedCreateWithoutPrivateMessagesSentInput = {
    id?: string
    email: string
    password: string
    displayName: string
    username: string
    photoUrl?: string | null
    role?: $Enums.Role
    creationDate?: Date | string
    lastSeenAt?: Date | string
    globalMessages?: GlobalMessageUncheckedCreateNestedManyWithoutAuthorInput
    friends?: FriendsUncheckedCreateNestedManyWithoutUserInput
    friendOf?: FriendsUncheckedCreateNestedManyWithoutFriendInput
    friendRequests?: FriendRequestUncheckedCreateNestedManyWithoutRequestFromInput
    receivedRequests?: FriendRequestUncheckedCreateNestedManyWithoutRequestToInput
    blocked?: BlockListUncheckedCreateNestedManyWithoutUserInput
    blockedBy?: BlockListUncheckedCreateNestedManyWithoutBlockedUserInput
    groupChatsCreated?: GroupChatUncheckedCreateNestedManyWithoutCreatedByInput
    groupMembers?: GroupMemberUncheckedCreateNestedManyWithoutUserInput
    groupJoinRequests?: GroupJoinRequestUncheckedCreateNestedManyWithoutFromUserInput
    receivedGroupJoinRequests?: GroupJoinRequestUncheckedCreateNestedManyWithoutToUserInput
    groupMessages?: GroupMessageUncheckedCreateNestedManyWithoutAuthorInput
    privateMessagesReceived?: PrivateMessageUncheckedCreateNestedManyWithoutToUserInput
  }

  export type UserCreateOrConnectWithoutPrivateMessagesSentInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPrivateMessagesSentInput, UserUncheckedCreateWithoutPrivateMessagesSentInput>
  }

  export type UserCreateWithoutPrivateMessagesReceivedInput = {
    id?: string
    email: string
    password: string
    displayName: string
    username: string
    photoUrl?: string | null
    role?: $Enums.Role
    creationDate?: Date | string
    lastSeenAt?: Date | string
    globalMessages?: GlobalMessageCreateNestedManyWithoutAuthorInput
    friends?: FriendsCreateNestedManyWithoutUserInput
    friendOf?: FriendsCreateNestedManyWithoutFriendInput
    friendRequests?: FriendRequestCreateNestedManyWithoutRequestFromInput
    receivedRequests?: FriendRequestCreateNestedManyWithoutRequestToInput
    blocked?: BlockListCreateNestedManyWithoutUserInput
    blockedBy?: BlockListCreateNestedManyWithoutBlockedUserInput
    groupChatsCreated?: GroupChatCreateNestedManyWithoutCreatedByInput
    groupMembers?: GroupMemberCreateNestedManyWithoutUserInput
    groupJoinRequests?: GroupJoinRequestCreateNestedManyWithoutFromUserInput
    receivedGroupJoinRequests?: GroupJoinRequestCreateNestedManyWithoutToUserInput
    groupMessages?: GroupMessageCreateNestedManyWithoutAuthorInput
    privateMessagesSent?: PrivateMessageCreateNestedManyWithoutFromUserInput
  }

  export type UserUncheckedCreateWithoutPrivateMessagesReceivedInput = {
    id?: string
    email: string
    password: string
    displayName: string
    username: string
    photoUrl?: string | null
    role?: $Enums.Role
    creationDate?: Date | string
    lastSeenAt?: Date | string
    globalMessages?: GlobalMessageUncheckedCreateNestedManyWithoutAuthorInput
    friends?: FriendsUncheckedCreateNestedManyWithoutUserInput
    friendOf?: FriendsUncheckedCreateNestedManyWithoutFriendInput
    friendRequests?: FriendRequestUncheckedCreateNestedManyWithoutRequestFromInput
    receivedRequests?: FriendRequestUncheckedCreateNestedManyWithoutRequestToInput
    blocked?: BlockListUncheckedCreateNestedManyWithoutUserInput
    blockedBy?: BlockListUncheckedCreateNestedManyWithoutBlockedUserInput
    groupChatsCreated?: GroupChatUncheckedCreateNestedManyWithoutCreatedByInput
    groupMembers?: GroupMemberUncheckedCreateNestedManyWithoutUserInput
    groupJoinRequests?: GroupJoinRequestUncheckedCreateNestedManyWithoutFromUserInput
    receivedGroupJoinRequests?: GroupJoinRequestUncheckedCreateNestedManyWithoutToUserInput
    groupMessages?: GroupMessageUncheckedCreateNestedManyWithoutAuthorInput
    privateMessagesSent?: PrivateMessageUncheckedCreateNestedManyWithoutFromUserInput
  }

  export type UserCreateOrConnectWithoutPrivateMessagesReceivedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPrivateMessagesReceivedInput, UserUncheckedCreateWithoutPrivateMessagesReceivedInput>
  }

  export type UserUpsertWithoutPrivateMessagesSentInput = {
    update: XOR<UserUpdateWithoutPrivateMessagesSentInput, UserUncheckedUpdateWithoutPrivateMessagesSentInput>
    create: XOR<UserCreateWithoutPrivateMessagesSentInput, UserUncheckedCreateWithoutPrivateMessagesSentInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPrivateMessagesSentInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPrivateMessagesSentInput, UserUncheckedUpdateWithoutPrivateMessagesSentInput>
  }

  export type UserUpdateWithoutPrivateMessagesSentInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    creationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSeenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    globalMessages?: GlobalMessageUpdateManyWithoutAuthorNestedInput
    friends?: FriendsUpdateManyWithoutUserNestedInput
    friendOf?: FriendsUpdateManyWithoutFriendNestedInput
    friendRequests?: FriendRequestUpdateManyWithoutRequestFromNestedInput
    receivedRequests?: FriendRequestUpdateManyWithoutRequestToNestedInput
    blocked?: BlockListUpdateManyWithoutUserNestedInput
    blockedBy?: BlockListUpdateManyWithoutBlockedUserNestedInput
    groupChatsCreated?: GroupChatUpdateManyWithoutCreatedByNestedInput
    groupMembers?: GroupMemberUpdateManyWithoutUserNestedInput
    groupJoinRequests?: GroupJoinRequestUpdateManyWithoutFromUserNestedInput
    receivedGroupJoinRequests?: GroupJoinRequestUpdateManyWithoutToUserNestedInput
    groupMessages?: GroupMessageUpdateManyWithoutAuthorNestedInput
    privateMessagesReceived?: PrivateMessageUpdateManyWithoutToUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPrivateMessagesSentInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    creationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSeenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    globalMessages?: GlobalMessageUncheckedUpdateManyWithoutAuthorNestedInput
    friends?: FriendsUncheckedUpdateManyWithoutUserNestedInput
    friendOf?: FriendsUncheckedUpdateManyWithoutFriendNestedInput
    friendRequests?: FriendRequestUncheckedUpdateManyWithoutRequestFromNestedInput
    receivedRequests?: FriendRequestUncheckedUpdateManyWithoutRequestToNestedInput
    blocked?: BlockListUncheckedUpdateManyWithoutUserNestedInput
    blockedBy?: BlockListUncheckedUpdateManyWithoutBlockedUserNestedInput
    groupChatsCreated?: GroupChatUncheckedUpdateManyWithoutCreatedByNestedInput
    groupMembers?: GroupMemberUncheckedUpdateManyWithoutUserNestedInput
    groupJoinRequests?: GroupJoinRequestUncheckedUpdateManyWithoutFromUserNestedInput
    receivedGroupJoinRequests?: GroupJoinRequestUncheckedUpdateManyWithoutToUserNestedInput
    groupMessages?: GroupMessageUncheckedUpdateManyWithoutAuthorNestedInput
    privateMessagesReceived?: PrivateMessageUncheckedUpdateManyWithoutToUserNestedInput
  }

  export type UserUpsertWithoutPrivateMessagesReceivedInput = {
    update: XOR<UserUpdateWithoutPrivateMessagesReceivedInput, UserUncheckedUpdateWithoutPrivateMessagesReceivedInput>
    create: XOR<UserCreateWithoutPrivateMessagesReceivedInput, UserUncheckedCreateWithoutPrivateMessagesReceivedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPrivateMessagesReceivedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPrivateMessagesReceivedInput, UserUncheckedUpdateWithoutPrivateMessagesReceivedInput>
  }

  export type UserUpdateWithoutPrivateMessagesReceivedInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    creationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSeenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    globalMessages?: GlobalMessageUpdateManyWithoutAuthorNestedInput
    friends?: FriendsUpdateManyWithoutUserNestedInput
    friendOf?: FriendsUpdateManyWithoutFriendNestedInput
    friendRequests?: FriendRequestUpdateManyWithoutRequestFromNestedInput
    receivedRequests?: FriendRequestUpdateManyWithoutRequestToNestedInput
    blocked?: BlockListUpdateManyWithoutUserNestedInput
    blockedBy?: BlockListUpdateManyWithoutBlockedUserNestedInput
    groupChatsCreated?: GroupChatUpdateManyWithoutCreatedByNestedInput
    groupMembers?: GroupMemberUpdateManyWithoutUserNestedInput
    groupJoinRequests?: GroupJoinRequestUpdateManyWithoutFromUserNestedInput
    receivedGroupJoinRequests?: GroupJoinRequestUpdateManyWithoutToUserNestedInput
    groupMessages?: GroupMessageUpdateManyWithoutAuthorNestedInput
    privateMessagesSent?: PrivateMessageUpdateManyWithoutFromUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPrivateMessagesReceivedInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    creationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSeenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    globalMessages?: GlobalMessageUncheckedUpdateManyWithoutAuthorNestedInput
    friends?: FriendsUncheckedUpdateManyWithoutUserNestedInput
    friendOf?: FriendsUncheckedUpdateManyWithoutFriendNestedInput
    friendRequests?: FriendRequestUncheckedUpdateManyWithoutRequestFromNestedInput
    receivedRequests?: FriendRequestUncheckedUpdateManyWithoutRequestToNestedInput
    blocked?: BlockListUncheckedUpdateManyWithoutUserNestedInput
    blockedBy?: BlockListUncheckedUpdateManyWithoutBlockedUserNestedInput
    groupChatsCreated?: GroupChatUncheckedUpdateManyWithoutCreatedByNestedInput
    groupMembers?: GroupMemberUncheckedUpdateManyWithoutUserNestedInput
    groupJoinRequests?: GroupJoinRequestUncheckedUpdateManyWithoutFromUserNestedInput
    receivedGroupJoinRequests?: GroupJoinRequestUncheckedUpdateManyWithoutToUserNestedInput
    groupMessages?: GroupMessageUncheckedUpdateManyWithoutAuthorNestedInput
    privateMessagesSent?: PrivateMessageUncheckedUpdateManyWithoutFromUserNestedInput
  }

  export type GlobalMessageCreateManyAuthorInput = {
    id?: string
    content?: string | null
    photoUrl?: string | null
    type?: string | null
    createdAt?: Date | string
    deleted?: boolean
  }

  export type FriendsCreateManyUserInput = {
    friendId: string
    friendsSince?: Date | string
  }

  export type FriendsCreateManyFriendInput = {
    userId: string
    friendsSince?: Date | string
  }

  export type FriendRequestCreateManyRequestFromInput = {
    id?: string
    requestToId: string
    requestedAt?: Date | string
  }

  export type FriendRequestCreateManyRequestToInput = {
    id?: string
    requestFromId: string
    requestedAt?: Date | string
  }

  export type BlockListCreateManyUserInput = {
    blockedUserId: string
    blockedAt?: Date | string
  }

  export type BlockListCreateManyBlockedUserInput = {
    userId: string
    blockedAt?: Date | string
  }

  export type GroupChatCreateManyCreatedByInput = {
    id?: string
    groupName: string
    groupPhoto?: string | null
    createdAt?: Date | string
  }

  export type GroupMemberCreateManyUserInput = {
    groupId: string
    isAdmin?: boolean
    joinedAt?: Date | string
  }

  export type GroupJoinRequestCreateManyFromUserInput = {
    id?: string
    groupId: string
    toUserId: string
    requestedAt?: Date | string
  }

  export type GroupJoinRequestCreateManyToUserInput = {
    id?: string
    groupId: string
    fromUserId: string
    requestedAt?: Date | string
  }

  export type GroupMessageCreateManyAuthorInput = {
    id?: string
    groupId: string
    content?: string | null
    photoUrl?: string | null
    type?: string | null
    createdAt?: Date | string
    deleted?: boolean
  }

  export type PrivateMessageCreateManyFromUserInput = {
    id?: string
    toUserId: string
    content?: string | null
    photoUrl?: string | null
    type?: string | null
    createdAt?: Date | string
    deleted?: boolean
  }

  export type PrivateMessageCreateManyToUserInput = {
    id?: string
    fromUserId: string
    content?: string | null
    photoUrl?: string | null
    type?: string | null
    createdAt?: Date | string
    deleted?: boolean
  }

  export type GlobalMessageUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type GlobalMessageUncheckedUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type GlobalMessageUncheckedUpdateManyWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type FriendsUpdateWithoutUserInput = {
    friendsSince?: DateTimeFieldUpdateOperationsInput | Date | string
    friend?: UserUpdateOneRequiredWithoutFriendOfNestedInput
  }

  export type FriendsUncheckedUpdateWithoutUserInput = {
    friendId?: StringFieldUpdateOperationsInput | string
    friendsSince?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FriendsUncheckedUpdateManyWithoutUserInput = {
    friendId?: StringFieldUpdateOperationsInput | string
    friendsSince?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FriendsUpdateWithoutFriendInput = {
    friendsSince?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFriendsNestedInput
  }

  export type FriendsUncheckedUpdateWithoutFriendInput = {
    userId?: StringFieldUpdateOperationsInput | string
    friendsSince?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FriendsUncheckedUpdateManyWithoutFriendInput = {
    userId?: StringFieldUpdateOperationsInput | string
    friendsSince?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FriendRequestUpdateWithoutRequestFromInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requestTo?: UserUpdateOneRequiredWithoutReceivedRequestsNestedInput
  }

  export type FriendRequestUncheckedUpdateWithoutRequestFromInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestToId?: StringFieldUpdateOperationsInput | string
    requestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FriendRequestUncheckedUpdateManyWithoutRequestFromInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestToId?: StringFieldUpdateOperationsInput | string
    requestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FriendRequestUpdateWithoutRequestToInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requestFrom?: UserUpdateOneRequiredWithoutFriendRequestsNestedInput
  }

  export type FriendRequestUncheckedUpdateWithoutRequestToInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestFromId?: StringFieldUpdateOperationsInput | string
    requestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FriendRequestUncheckedUpdateManyWithoutRequestToInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestFromId?: StringFieldUpdateOperationsInput | string
    requestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlockListUpdateWithoutUserInput = {
    blockedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blockedUser?: UserUpdateOneRequiredWithoutBlockedByNestedInput
  }

  export type BlockListUncheckedUpdateWithoutUserInput = {
    blockedUserId?: StringFieldUpdateOperationsInput | string
    blockedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlockListUncheckedUpdateManyWithoutUserInput = {
    blockedUserId?: StringFieldUpdateOperationsInput | string
    blockedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlockListUpdateWithoutBlockedUserInput = {
    blockedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBlockedNestedInput
  }

  export type BlockListUncheckedUpdateWithoutBlockedUserInput = {
    userId?: StringFieldUpdateOperationsInput | string
    blockedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlockListUncheckedUpdateManyWithoutBlockedUserInput = {
    userId?: StringFieldUpdateOperationsInput | string
    blockedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupChatUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupName?: StringFieldUpdateOperationsInput | string
    groupPhoto?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: GroupMemberUpdateManyWithoutGroupNestedInput
    messages?: GroupMessageUpdateManyWithoutGroupNestedInput
    joinRequests?: GroupJoinRequestUpdateManyWithoutGroupNestedInput
  }

  export type GroupChatUncheckedUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupName?: StringFieldUpdateOperationsInput | string
    groupPhoto?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: GroupMemberUncheckedUpdateManyWithoutGroupNestedInput
    messages?: GroupMessageUncheckedUpdateManyWithoutGroupNestedInput
    joinRequests?: GroupJoinRequestUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type GroupChatUncheckedUpdateManyWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupName?: StringFieldUpdateOperationsInput | string
    groupPhoto?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupMemberUpdateWithoutUserInput = {
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    group?: GroupChatUpdateOneRequiredWithoutMembersNestedInput
  }

  export type GroupMemberUncheckedUpdateWithoutUserInput = {
    groupId?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupMemberUncheckedUpdateManyWithoutUserInput = {
    groupId?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupJoinRequestUpdateWithoutFromUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    group?: GroupChatUpdateOneRequiredWithoutJoinRequestsNestedInput
    toUser?: UserUpdateOneRequiredWithoutReceivedGroupJoinRequestsNestedInput
  }

  export type GroupJoinRequestUncheckedUpdateWithoutFromUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupId?: StringFieldUpdateOperationsInput | string
    toUserId?: StringFieldUpdateOperationsInput | string
    requestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupJoinRequestUncheckedUpdateManyWithoutFromUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupId?: StringFieldUpdateOperationsInput | string
    toUserId?: StringFieldUpdateOperationsInput | string
    requestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupJoinRequestUpdateWithoutToUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    group?: GroupChatUpdateOneRequiredWithoutJoinRequestsNestedInput
    fromUser?: UserUpdateOneRequiredWithoutGroupJoinRequestsNestedInput
  }

  export type GroupJoinRequestUncheckedUpdateWithoutToUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupId?: StringFieldUpdateOperationsInput | string
    fromUserId?: StringFieldUpdateOperationsInput | string
    requestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupJoinRequestUncheckedUpdateManyWithoutToUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupId?: StringFieldUpdateOperationsInput | string
    fromUserId?: StringFieldUpdateOperationsInput | string
    requestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupMessageUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
    group?: GroupChatUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type GroupMessageUncheckedUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupId?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type GroupMessageUncheckedUpdateManyWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupId?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PrivateMessageUpdateWithoutFromUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
    toUser?: UserUpdateOneRequiredWithoutPrivateMessagesReceivedNestedInput
  }

  export type PrivateMessageUncheckedUpdateWithoutFromUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    toUserId?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PrivateMessageUncheckedUpdateManyWithoutFromUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    toUserId?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PrivateMessageUpdateWithoutToUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
    fromUser?: UserUpdateOneRequiredWithoutPrivateMessagesSentNestedInput
  }

  export type PrivateMessageUncheckedUpdateWithoutToUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromUserId?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PrivateMessageUncheckedUpdateManyWithoutToUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromUserId?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type GroupMemberCreateManyGroupInput = {
    userId: string
    isAdmin?: boolean
    joinedAt?: Date | string
  }

  export type GroupMessageCreateManyGroupInput = {
    id?: string
    authorId: string
    content?: string | null
    photoUrl?: string | null
    type?: string | null
    createdAt?: Date | string
    deleted?: boolean
  }

  export type GroupJoinRequestCreateManyGroupInput = {
    id?: string
    fromUserId: string
    toUserId: string
    requestedAt?: Date | string
  }

  export type GroupMemberUpdateWithoutGroupInput = {
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutGroupMembersNestedInput
  }

  export type GroupMemberUncheckedUpdateWithoutGroupInput = {
    userId?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupMemberUncheckedUpdateManyWithoutGroupInput = {
    userId?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupMessageUpdateWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
    author?: UserUpdateOneRequiredWithoutGroupMessagesNestedInput
  }

  export type GroupMessageUncheckedUpdateWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type GroupMessageUncheckedUpdateManyWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type GroupJoinRequestUpdateWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fromUser?: UserUpdateOneRequiredWithoutGroupJoinRequestsNestedInput
    toUser?: UserUpdateOneRequiredWithoutReceivedGroupJoinRequestsNestedInput
  }

  export type GroupJoinRequestUncheckedUpdateWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromUserId?: StringFieldUpdateOperationsInput | string
    toUserId?: StringFieldUpdateOperationsInput | string
    requestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupJoinRequestUncheckedUpdateManyWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromUserId?: StringFieldUpdateOperationsInput | string
    toUserId?: StringFieldUpdateOperationsInput | string
    requestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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