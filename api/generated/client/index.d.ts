
/**
 * Client
**/

import * as runtime from './runtime/data-proxy';
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends Prisma.PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model Log
 * 
 */
export type Log = {
  id: number
  level: Level
  message: string
  meta: Prisma.JsonValue
  log_type: LogType
  created_at: Date
  request_id: string | null
}

/**
 * Model Profile
 * 
 */
export type Profile = {
  id: number
  username: string
  avatar: string | null
  created_at: Date
  updated_at: Date | null
  display_name: string | null
  global_name: string | null
  locale: string | null
  avatar_decoration: string | null
  trainer_id: number
  user_id: string
}

/**
 * Model Trainer
 * 
 */
export type Trainer = {
  id: number
  username: string
  trainer_name: string
  trainer_code: string
  created_at: Date
  source: string | null
}

/**
 * Model TrainerAlt
 * 
 */
export type TrainerAlt = {
  id: number
  trainer_id: number
  alt_trainer_name: string
  alt_trainer_code: string
  order: number | null
}

/**
 * Model SyncHistory
 * 
 */
export type SyncHistory = {
  id: number
  total_rows_imported: number
  total_rows_deleted: number
  total_row_created: number
  created_at: Date
  source: string | null
}


/**
 * Enums
 */

// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

export const Level: {
  Info: 'Info',
  Warn: 'Warn',
  Error: 'Error'
};

export type Level = (typeof Level)[keyof typeof Level]


export const LogType: {
  Request: 'Request',
  Internal: 'Internal'
};

export type LogType = (typeof LogType)[keyof typeof LogType]


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Logs
 * const logs = await prisma.log.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Logs
   * const logs = await prisma.log.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<this, "$connect" | "$disconnect" | "$on" | "$transaction" | "$use">) => Promise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<R>

      /**
   * `prisma.log`: Exposes CRUD operations for the **Log** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Logs
    * const logs = await prisma.log.findMany()
    * ```
    */
  get log(): Prisma.LogDelegate<GlobalReject>;

  /**
   * `prisma.profile`: Exposes CRUD operations for the **Profile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Profiles
    * const profiles = await prisma.profile.findMany()
    * ```
    */
  get profile(): Prisma.ProfileDelegate<GlobalReject>;

  /**
   * `prisma.trainer`: Exposes CRUD operations for the **Trainer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Trainers
    * const trainers = await prisma.trainer.findMany()
    * ```
    */
  get trainer(): Prisma.TrainerDelegate<GlobalReject>;

  /**
   * `prisma.trainerAlt`: Exposes CRUD operations for the **TrainerAlt** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TrainerAlts
    * const trainerAlts = await prisma.trainerAlt.findMany()
    * ```
    */
  get trainerAlt(): Prisma.TrainerAltDelegate<GlobalReject>;

  /**
   * `prisma.syncHistory`: Exposes CRUD operations for the **SyncHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SyncHistories
    * const syncHistories = await prisma.syncHistory.findMany()
    * ```
    */
  get syncHistory(): Prisma.SyncHistoryDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 4.10.1
   * Query Engine version: aead147aa326ccb985dcfed5b065b4fdabd44b19
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

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
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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

  export function validator<V>(): <S>(select: runtime.Types.Utils.LegacyExact<S, V>) => S;

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
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Log: 'Log',
    Profile: 'Profile',
    Trainer: 'Trainer',
    TrainerAlt: 'TrainerAlt',
    SyncHistory: 'SyncHistory'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type DefaultPrismaClient = PrismaClient
  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

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
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
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
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

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
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, '$connect' | '$disconnect' | '$on' | '$transaction' | '$use'>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type TrainerCountOutputType
   */


  export type TrainerCountOutputType = {
    alts: number
  }

  export type TrainerCountOutputTypeSelect = {
    alts?: boolean
  }

  export type TrainerCountOutputTypeGetPayload<S extends boolean | null | undefined | TrainerCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? TrainerCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (TrainerCountOutputTypeArgs)
    ? TrainerCountOutputType 
    : S extends { select: any } & (TrainerCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof TrainerCountOutputType ? TrainerCountOutputType[P] : never
  } 
      : TrainerCountOutputType




  // Custom InputTypes

  /**
   * TrainerCountOutputType without action
   */
  export type TrainerCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the TrainerCountOutputType
     */
    select?: TrainerCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model Log
   */


  export type AggregateLog = {
    _count: LogCountAggregateOutputType | null
    _avg: LogAvgAggregateOutputType | null
    _sum: LogSumAggregateOutputType | null
    _min: LogMinAggregateOutputType | null
    _max: LogMaxAggregateOutputType | null
  }

  export type LogAvgAggregateOutputType = {
    id: number | null
  }

  export type LogSumAggregateOutputType = {
    id: number | null
  }

  export type LogMinAggregateOutputType = {
    id: number | null
    level: Level | null
    message: string | null
    log_type: LogType | null
    created_at: Date | null
    request_id: string | null
  }

  export type LogMaxAggregateOutputType = {
    id: number | null
    level: Level | null
    message: string | null
    log_type: LogType | null
    created_at: Date | null
    request_id: string | null
  }

  export type LogCountAggregateOutputType = {
    id: number
    level: number
    message: number
    meta: number
    log_type: number
    created_at: number
    request_id: number
    _all: number
  }


  export type LogAvgAggregateInputType = {
    id?: true
  }

  export type LogSumAggregateInputType = {
    id?: true
  }

  export type LogMinAggregateInputType = {
    id?: true
    level?: true
    message?: true
    log_type?: true
    created_at?: true
    request_id?: true
  }

  export type LogMaxAggregateInputType = {
    id?: true
    level?: true
    message?: true
    log_type?: true
    created_at?: true
    request_id?: true
  }

  export type LogCountAggregateInputType = {
    id?: true
    level?: true
    message?: true
    meta?: true
    log_type?: true
    created_at?: true
    request_id?: true
    _all?: true
  }

  export type LogAggregateArgs = {
    /**
     * Filter which Log to aggregate.
     */
    where?: LogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Logs to fetch.
     */
    orderBy?: Enumerable<LogOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Logs
    **/
    _count?: true | LogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LogMaxAggregateInputType
  }

  export type GetLogAggregateType<T extends LogAggregateArgs> = {
        [P in keyof T & keyof AggregateLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLog[P]>
      : GetScalarType<T[P], AggregateLog[P]>
  }




  export type LogGroupByArgs = {
    where?: LogWhereInput
    orderBy?: Enumerable<LogOrderByWithAggregationInput>
    by: LogScalarFieldEnum[]
    having?: LogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LogCountAggregateInputType | true
    _avg?: LogAvgAggregateInputType
    _sum?: LogSumAggregateInputType
    _min?: LogMinAggregateInputType
    _max?: LogMaxAggregateInputType
  }


  export type LogGroupByOutputType = {
    id: number
    level: Level
    message: string
    meta: JsonValue
    log_type: LogType
    created_at: Date
    request_id: string | null
    _count: LogCountAggregateOutputType | null
    _avg: LogAvgAggregateOutputType | null
    _sum: LogSumAggregateOutputType | null
    _min: LogMinAggregateOutputType | null
    _max: LogMaxAggregateOutputType | null
  }

  type GetLogGroupByPayload<T extends LogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<LogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LogGroupByOutputType[P]>
            : GetScalarType<T[P], LogGroupByOutputType[P]>
        }
      >
    >


  export type LogSelect = {
    id?: boolean
    level?: boolean
    message?: boolean
    meta?: boolean
    log_type?: boolean
    created_at?: boolean
    request_id?: boolean
  }


  export type LogGetPayload<S extends boolean | null | undefined | LogArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Log :
    S extends undefined ? never :
    S extends { include: any } & (LogArgs | LogFindManyArgs)
    ? Log 
    : S extends { select: any } & (LogArgs | LogFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof Log ? Log[P] : never
  } 
      : Log


  type LogCountArgs = 
    Omit<LogFindManyArgs, 'select' | 'include'> & {
      select?: LogCountAggregateInputType | true
    }

  export interface LogDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Log that matches the filter.
     * @param {LogFindUniqueArgs} args - Arguments to find a Log
     * @example
     * // Get one Log
     * const log = await prisma.log.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends LogFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, LogFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Log'> extends True ? Prisma__LogClient<LogGetPayload<T>> : Prisma__LogClient<LogGetPayload<T> | null, null>

    /**
     * Find one Log that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {LogFindUniqueOrThrowArgs} args - Arguments to find a Log
     * @example
     * // Get one Log
     * const log = await prisma.log.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends LogFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, LogFindUniqueOrThrowArgs>
    ): Prisma__LogClient<LogGetPayload<T>>

    /**
     * Find the first Log that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogFindFirstArgs} args - Arguments to find a Log
     * @example
     * // Get one Log
     * const log = await prisma.log.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends LogFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, LogFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Log'> extends True ? Prisma__LogClient<LogGetPayload<T>> : Prisma__LogClient<LogGetPayload<T> | null, null>

    /**
     * Find the first Log that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogFindFirstOrThrowArgs} args - Arguments to find a Log
     * @example
     * // Get one Log
     * const log = await prisma.log.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends LogFindFirstOrThrowArgs>(
      args?: SelectSubset<T, LogFindFirstOrThrowArgs>
    ): Prisma__LogClient<LogGetPayload<T>>

    /**
     * Find zero or more Logs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Logs
     * const logs = await prisma.log.findMany()
     * 
     * // Get first 10 Logs
     * const logs = await prisma.log.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const logWithIdOnly = await prisma.log.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends LogFindManyArgs>(
      args?: SelectSubset<T, LogFindManyArgs>
    ): Prisma.PrismaPromise<Array<LogGetPayload<T>>>

    /**
     * Create a Log.
     * @param {LogCreateArgs} args - Arguments to create a Log.
     * @example
     * // Create one Log
     * const Log = await prisma.log.create({
     *   data: {
     *     // ... data to create a Log
     *   }
     * })
     * 
    **/
    create<T extends LogCreateArgs>(
      args: SelectSubset<T, LogCreateArgs>
    ): Prisma__LogClient<LogGetPayload<T>>

    /**
     * Create many Logs.
     *     @param {LogCreateManyArgs} args - Arguments to create many Logs.
     *     @example
     *     // Create many Logs
     *     const log = await prisma.log.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends LogCreateManyArgs>(
      args?: SelectSubset<T, LogCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Log.
     * @param {LogDeleteArgs} args - Arguments to delete one Log.
     * @example
     * // Delete one Log
     * const Log = await prisma.log.delete({
     *   where: {
     *     // ... filter to delete one Log
     *   }
     * })
     * 
    **/
    delete<T extends LogDeleteArgs>(
      args: SelectSubset<T, LogDeleteArgs>
    ): Prisma__LogClient<LogGetPayload<T>>

    /**
     * Update one Log.
     * @param {LogUpdateArgs} args - Arguments to update one Log.
     * @example
     * // Update one Log
     * const log = await prisma.log.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends LogUpdateArgs>(
      args: SelectSubset<T, LogUpdateArgs>
    ): Prisma__LogClient<LogGetPayload<T>>

    /**
     * Delete zero or more Logs.
     * @param {LogDeleteManyArgs} args - Arguments to filter Logs to delete.
     * @example
     * // Delete a few Logs
     * const { count } = await prisma.log.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends LogDeleteManyArgs>(
      args?: SelectSubset<T, LogDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Logs
     * const log = await prisma.log.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends LogUpdateManyArgs>(
      args: SelectSubset<T, LogUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Log.
     * @param {LogUpsertArgs} args - Arguments to update or create a Log.
     * @example
     * // Update or create a Log
     * const log = await prisma.log.upsert({
     *   create: {
     *     // ... data to create a Log
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Log we want to update
     *   }
     * })
    **/
    upsert<T extends LogUpsertArgs>(
      args: SelectSubset<T, LogUpsertArgs>
    ): Prisma__LogClient<LogGetPayload<T>>

    /**
     * Count the number of Logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogCountArgs} args - Arguments to filter Logs to count.
     * @example
     * // Count the number of Logs
     * const count = await prisma.log.count({
     *   where: {
     *     // ... the filter for the Logs we want to count
     *   }
     * })
    **/
    count<T extends LogCountArgs>(
      args?: Subset<T, LogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Log.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LogAggregateArgs>(args: Subset<T, LogAggregateArgs>): Prisma.PrismaPromise<GetLogAggregateType<T>>

    /**
     * Group by Log.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogGroupByArgs} args - Group by arguments.
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
      T extends LogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LogGroupByArgs['orderBy'] }
        : { orderBy?: LogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, LogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Log.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__LogClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Log base type for findUnique actions
   */
  export type LogFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect | null
    /**
     * Filter, which Log to fetch.
     */
    where: LogWhereUniqueInput
  }

  /**
   * Log findUnique
   */
  export interface LogFindUniqueArgs extends LogFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Log findUniqueOrThrow
   */
  export type LogFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect | null
    /**
     * Filter, which Log to fetch.
     */
    where: LogWhereUniqueInput
  }


  /**
   * Log base type for findFirst actions
   */
  export type LogFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect | null
    /**
     * Filter, which Log to fetch.
     */
    where?: LogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Logs to fetch.
     */
    orderBy?: Enumerable<LogOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Logs.
     */
    cursor?: LogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Logs.
     */
    distinct?: Enumerable<LogScalarFieldEnum>
  }

  /**
   * Log findFirst
   */
  export interface LogFindFirstArgs extends LogFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Log findFirstOrThrow
   */
  export type LogFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect | null
    /**
     * Filter, which Log to fetch.
     */
    where?: LogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Logs to fetch.
     */
    orderBy?: Enumerable<LogOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Logs.
     */
    cursor?: LogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Logs.
     */
    distinct?: Enumerable<LogScalarFieldEnum>
  }


  /**
   * Log findMany
   */
  export type LogFindManyArgs = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect | null
    /**
     * Filter, which Logs to fetch.
     */
    where?: LogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Logs to fetch.
     */
    orderBy?: Enumerable<LogOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Logs.
     */
    cursor?: LogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Logs.
     */
    skip?: number
    distinct?: Enumerable<LogScalarFieldEnum>
  }


  /**
   * Log create
   */
  export type LogCreateArgs = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect | null
    /**
     * The data needed to create a Log.
     */
    data: XOR<LogCreateInput, LogUncheckedCreateInput>
  }


  /**
   * Log createMany
   */
  export type LogCreateManyArgs = {
    /**
     * The data used to create many Logs.
     */
    data: Enumerable<LogCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Log update
   */
  export type LogUpdateArgs = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect | null
    /**
     * The data needed to update a Log.
     */
    data: XOR<LogUpdateInput, LogUncheckedUpdateInput>
    /**
     * Choose, which Log to update.
     */
    where: LogWhereUniqueInput
  }


  /**
   * Log updateMany
   */
  export type LogUpdateManyArgs = {
    /**
     * The data used to update Logs.
     */
    data: XOR<LogUpdateManyMutationInput, LogUncheckedUpdateManyInput>
    /**
     * Filter which Logs to update
     */
    where?: LogWhereInput
  }


  /**
   * Log upsert
   */
  export type LogUpsertArgs = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect | null
    /**
     * The filter to search for the Log to update in case it exists.
     */
    where: LogWhereUniqueInput
    /**
     * In case the Log found by the `where` argument doesn't exist, create a new Log with this data.
     */
    create: XOR<LogCreateInput, LogUncheckedCreateInput>
    /**
     * In case the Log was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LogUpdateInput, LogUncheckedUpdateInput>
  }


  /**
   * Log delete
   */
  export type LogDeleteArgs = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect | null
    /**
     * Filter which Log to delete.
     */
    where: LogWhereUniqueInput
  }


  /**
   * Log deleteMany
   */
  export type LogDeleteManyArgs = {
    /**
     * Filter which Logs to delete
     */
    where?: LogWhereInput
  }


  /**
   * Log without action
   */
  export type LogArgs = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect | null
  }



  /**
   * Model Profile
   */


  export type AggregateProfile = {
    _count: ProfileCountAggregateOutputType | null
    _avg: ProfileAvgAggregateOutputType | null
    _sum: ProfileSumAggregateOutputType | null
    _min: ProfileMinAggregateOutputType | null
    _max: ProfileMaxAggregateOutputType | null
  }

  export type ProfileAvgAggregateOutputType = {
    id: number | null
    trainer_id: number | null
  }

  export type ProfileSumAggregateOutputType = {
    id: number | null
    trainer_id: number | null
  }

  export type ProfileMinAggregateOutputType = {
    id: number | null
    username: string | null
    avatar: string | null
    created_at: Date | null
    updated_at: Date | null
    display_name: string | null
    global_name: string | null
    locale: string | null
    avatar_decoration: string | null
    trainer_id: number | null
    user_id: string | null
  }

  export type ProfileMaxAggregateOutputType = {
    id: number | null
    username: string | null
    avatar: string | null
    created_at: Date | null
    updated_at: Date | null
    display_name: string | null
    global_name: string | null
    locale: string | null
    avatar_decoration: string | null
    trainer_id: number | null
    user_id: string | null
  }

  export type ProfileCountAggregateOutputType = {
    id: number
    username: number
    avatar: number
    created_at: number
    updated_at: number
    display_name: number
    global_name: number
    locale: number
    avatar_decoration: number
    trainer_id: number
    user_id: number
    _all: number
  }


  export type ProfileAvgAggregateInputType = {
    id?: true
    trainer_id?: true
  }

  export type ProfileSumAggregateInputType = {
    id?: true
    trainer_id?: true
  }

  export type ProfileMinAggregateInputType = {
    id?: true
    username?: true
    avatar?: true
    created_at?: true
    updated_at?: true
    display_name?: true
    global_name?: true
    locale?: true
    avatar_decoration?: true
    trainer_id?: true
    user_id?: true
  }

  export type ProfileMaxAggregateInputType = {
    id?: true
    username?: true
    avatar?: true
    created_at?: true
    updated_at?: true
    display_name?: true
    global_name?: true
    locale?: true
    avatar_decoration?: true
    trainer_id?: true
    user_id?: true
  }

  export type ProfileCountAggregateInputType = {
    id?: true
    username?: true
    avatar?: true
    created_at?: true
    updated_at?: true
    display_name?: true
    global_name?: true
    locale?: true
    avatar_decoration?: true
    trainer_id?: true
    user_id?: true
    _all?: true
  }

  export type ProfileAggregateArgs = {
    /**
     * Filter which Profile to aggregate.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: Enumerable<ProfileOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Profiles
    **/
    _count?: true | ProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProfileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProfileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProfileMaxAggregateInputType
  }

  export type GetProfileAggregateType<T extends ProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfile[P]>
      : GetScalarType<T[P], AggregateProfile[P]>
  }




  export type ProfileGroupByArgs = {
    where?: ProfileWhereInput
    orderBy?: Enumerable<ProfileOrderByWithAggregationInput>
    by: ProfileScalarFieldEnum[]
    having?: ProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProfileCountAggregateInputType | true
    _avg?: ProfileAvgAggregateInputType
    _sum?: ProfileSumAggregateInputType
    _min?: ProfileMinAggregateInputType
    _max?: ProfileMaxAggregateInputType
  }


  export type ProfileGroupByOutputType = {
    id: number
    username: string
    avatar: string | null
    created_at: Date
    updated_at: Date | null
    display_name: string | null
    global_name: string | null
    locale: string | null
    avatar_decoration: string | null
    trainer_id: number
    user_id: string
    _count: ProfileCountAggregateOutputType | null
    _avg: ProfileAvgAggregateOutputType | null
    _sum: ProfileSumAggregateOutputType | null
    _min: ProfileMinAggregateOutputType | null
    _max: ProfileMaxAggregateOutputType | null
  }

  type GetProfileGroupByPayload<T extends ProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<ProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfileGroupByOutputType[P]>
            : GetScalarType<T[P], ProfileGroupByOutputType[P]>
        }
      >
    >


  export type ProfileSelect = {
    id?: boolean
    username?: boolean
    avatar?: boolean
    created_at?: boolean
    updated_at?: boolean
    display_name?: boolean
    global_name?: boolean
    locale?: boolean
    avatar_decoration?: boolean
    trainer?: boolean | TrainerArgs
    trainer_id?: boolean
    user_id?: boolean
  }


  export type ProfileInclude = {
    trainer?: boolean | TrainerArgs
  }

  export type ProfileGetPayload<S extends boolean | null | undefined | ProfileArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Profile :
    S extends undefined ? never :
    S extends { include: any } & (ProfileArgs | ProfileFindManyArgs)
    ? Profile  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'trainer' ? TrainerGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (ProfileArgs | ProfileFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'trainer' ? TrainerGetPayload<S['select'][P]> :  P extends keyof Profile ? Profile[P] : never
  } 
      : Profile


  type ProfileCountArgs = 
    Omit<ProfileFindManyArgs, 'select' | 'include'> & {
      select?: ProfileCountAggregateInputType | true
    }

  export interface ProfileDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Profile that matches the filter.
     * @param {ProfileFindUniqueArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ProfileFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ProfileFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Profile'> extends True ? Prisma__ProfileClient<ProfileGetPayload<T>> : Prisma__ProfileClient<ProfileGetPayload<T> | null, null>

    /**
     * Find one Profile that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ProfileFindUniqueOrThrowArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ProfileFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, ProfileFindUniqueOrThrowArgs>
    ): Prisma__ProfileClient<ProfileGetPayload<T>>

    /**
     * Find the first Profile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindFirstArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ProfileFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ProfileFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Profile'> extends True ? Prisma__ProfileClient<ProfileGetPayload<T>> : Prisma__ProfileClient<ProfileGetPayload<T> | null, null>

    /**
     * Find the first Profile that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindFirstOrThrowArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ProfileFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ProfileFindFirstOrThrowArgs>
    ): Prisma__ProfileClient<ProfileGetPayload<T>>

    /**
     * Find zero or more Profiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Profiles
     * const profiles = await prisma.profile.findMany()
     * 
     * // Get first 10 Profiles
     * const profiles = await prisma.profile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const profileWithIdOnly = await prisma.profile.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ProfileFindManyArgs>(
      args?: SelectSubset<T, ProfileFindManyArgs>
    ): Prisma.PrismaPromise<Array<ProfileGetPayload<T>>>

    /**
     * Create a Profile.
     * @param {ProfileCreateArgs} args - Arguments to create a Profile.
     * @example
     * // Create one Profile
     * const Profile = await prisma.profile.create({
     *   data: {
     *     // ... data to create a Profile
     *   }
     * })
     * 
    **/
    create<T extends ProfileCreateArgs>(
      args: SelectSubset<T, ProfileCreateArgs>
    ): Prisma__ProfileClient<ProfileGetPayload<T>>

    /**
     * Create many Profiles.
     *     @param {ProfileCreateManyArgs} args - Arguments to create many Profiles.
     *     @example
     *     // Create many Profiles
     *     const profile = await prisma.profile.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ProfileCreateManyArgs>(
      args?: SelectSubset<T, ProfileCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Profile.
     * @param {ProfileDeleteArgs} args - Arguments to delete one Profile.
     * @example
     * // Delete one Profile
     * const Profile = await prisma.profile.delete({
     *   where: {
     *     // ... filter to delete one Profile
     *   }
     * })
     * 
    **/
    delete<T extends ProfileDeleteArgs>(
      args: SelectSubset<T, ProfileDeleteArgs>
    ): Prisma__ProfileClient<ProfileGetPayload<T>>

    /**
     * Update one Profile.
     * @param {ProfileUpdateArgs} args - Arguments to update one Profile.
     * @example
     * // Update one Profile
     * const profile = await prisma.profile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ProfileUpdateArgs>(
      args: SelectSubset<T, ProfileUpdateArgs>
    ): Prisma__ProfileClient<ProfileGetPayload<T>>

    /**
     * Delete zero or more Profiles.
     * @param {ProfileDeleteManyArgs} args - Arguments to filter Profiles to delete.
     * @example
     * // Delete a few Profiles
     * const { count } = await prisma.profile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ProfileDeleteManyArgs>(
      args?: SelectSubset<T, ProfileDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Profiles
     * const profile = await prisma.profile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ProfileUpdateManyArgs>(
      args: SelectSubset<T, ProfileUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Profile.
     * @param {ProfileUpsertArgs} args - Arguments to update or create a Profile.
     * @example
     * // Update or create a Profile
     * const profile = await prisma.profile.upsert({
     *   create: {
     *     // ... data to create a Profile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Profile we want to update
     *   }
     * })
    **/
    upsert<T extends ProfileUpsertArgs>(
      args: SelectSubset<T, ProfileUpsertArgs>
    ): Prisma__ProfileClient<ProfileGetPayload<T>>

    /**
     * Count the number of Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileCountArgs} args - Arguments to filter Profiles to count.
     * @example
     * // Count the number of Profiles
     * const count = await prisma.profile.count({
     *   where: {
     *     // ... the filter for the Profiles we want to count
     *   }
     * })
    **/
    count<T extends ProfileCountArgs>(
      args?: Subset<T, ProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProfileAggregateArgs>(args: Subset<T, ProfileAggregateArgs>): Prisma.PrismaPromise<GetProfileAggregateType<T>>

    /**
     * Group by Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileGroupByArgs} args - Group by arguments.
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
      T extends ProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProfileGroupByArgs['orderBy'] }
        : { orderBy?: ProfileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, ProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Profile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ProfileClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    trainer<T extends TrainerArgs= {}>(args?: Subset<T, TrainerArgs>): Prisma__TrainerClient<TrainerGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Profile base type for findUnique actions
   */
  export type ProfileFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProfileInclude | null
    /**
     * Filter, which Profile to fetch.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile findUnique
   */
  export interface ProfileFindUniqueArgs extends ProfileFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Profile findUniqueOrThrow
   */
  export type ProfileFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProfileInclude | null
    /**
     * Filter, which Profile to fetch.
     */
    where: ProfileWhereUniqueInput
  }


  /**
   * Profile base type for findFirst actions
   */
  export type ProfileFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProfileInclude | null
    /**
     * Filter, which Profile to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: Enumerable<ProfileOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profiles.
     */
    distinct?: Enumerable<ProfileScalarFieldEnum>
  }

  /**
   * Profile findFirst
   */
  export interface ProfileFindFirstArgs extends ProfileFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Profile findFirstOrThrow
   */
  export type ProfileFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProfileInclude | null
    /**
     * Filter, which Profile to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: Enumerable<ProfileOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profiles.
     */
    distinct?: Enumerable<ProfileScalarFieldEnum>
  }


  /**
   * Profile findMany
   */
  export type ProfileFindManyArgs = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProfileInclude | null
    /**
     * Filter, which Profiles to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: Enumerable<ProfileOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    distinct?: Enumerable<ProfileScalarFieldEnum>
  }


  /**
   * Profile create
   */
  export type ProfileCreateArgs = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProfileInclude | null
    /**
     * The data needed to create a Profile.
     */
    data: XOR<ProfileCreateInput, ProfileUncheckedCreateInput>
  }


  /**
   * Profile createMany
   */
  export type ProfileCreateManyArgs = {
    /**
     * The data used to create many Profiles.
     */
    data: Enumerable<ProfileCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Profile update
   */
  export type ProfileUpdateArgs = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProfileInclude | null
    /**
     * The data needed to update a Profile.
     */
    data: XOR<ProfileUpdateInput, ProfileUncheckedUpdateInput>
    /**
     * Choose, which Profile to update.
     */
    where: ProfileWhereUniqueInput
  }


  /**
   * Profile updateMany
   */
  export type ProfileUpdateManyArgs = {
    /**
     * The data used to update Profiles.
     */
    data: XOR<ProfileUpdateManyMutationInput, ProfileUncheckedUpdateManyInput>
    /**
     * Filter which Profiles to update
     */
    where?: ProfileWhereInput
  }


  /**
   * Profile upsert
   */
  export type ProfileUpsertArgs = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProfileInclude | null
    /**
     * The filter to search for the Profile to update in case it exists.
     */
    where: ProfileWhereUniqueInput
    /**
     * In case the Profile found by the `where` argument doesn't exist, create a new Profile with this data.
     */
    create: XOR<ProfileCreateInput, ProfileUncheckedCreateInput>
    /**
     * In case the Profile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProfileUpdateInput, ProfileUncheckedUpdateInput>
  }


  /**
   * Profile delete
   */
  export type ProfileDeleteArgs = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProfileInclude | null
    /**
     * Filter which Profile to delete.
     */
    where: ProfileWhereUniqueInput
  }


  /**
   * Profile deleteMany
   */
  export type ProfileDeleteManyArgs = {
    /**
     * Filter which Profiles to delete
     */
    where?: ProfileWhereInput
  }


  /**
   * Profile without action
   */
  export type ProfileArgs = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProfileInclude | null
  }



  /**
   * Model Trainer
   */


  export type AggregateTrainer = {
    _count: TrainerCountAggregateOutputType | null
    _avg: TrainerAvgAggregateOutputType | null
    _sum: TrainerSumAggregateOutputType | null
    _min: TrainerMinAggregateOutputType | null
    _max: TrainerMaxAggregateOutputType | null
  }

  export type TrainerAvgAggregateOutputType = {
    id: number | null
  }

  export type TrainerSumAggregateOutputType = {
    id: number | null
  }

  export type TrainerMinAggregateOutputType = {
    id: number | null
    username: string | null
    trainer_name: string | null
    trainer_code: string | null
    created_at: Date | null
    source: string | null
  }

  export type TrainerMaxAggregateOutputType = {
    id: number | null
    username: string | null
    trainer_name: string | null
    trainer_code: string | null
    created_at: Date | null
    source: string | null
  }

  export type TrainerCountAggregateOutputType = {
    id: number
    username: number
    trainer_name: number
    trainer_code: number
    created_at: number
    source: number
    _all: number
  }


  export type TrainerAvgAggregateInputType = {
    id?: true
  }

  export type TrainerSumAggregateInputType = {
    id?: true
  }

  export type TrainerMinAggregateInputType = {
    id?: true
    username?: true
    trainer_name?: true
    trainer_code?: true
    created_at?: true
    source?: true
  }

  export type TrainerMaxAggregateInputType = {
    id?: true
    username?: true
    trainer_name?: true
    trainer_code?: true
    created_at?: true
    source?: true
  }

  export type TrainerCountAggregateInputType = {
    id?: true
    username?: true
    trainer_name?: true
    trainer_code?: true
    created_at?: true
    source?: true
    _all?: true
  }

  export type TrainerAggregateArgs = {
    /**
     * Filter which Trainer to aggregate.
     */
    where?: TrainerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trainers to fetch.
     */
    orderBy?: Enumerable<TrainerOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TrainerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trainers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trainers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Trainers
    **/
    _count?: true | TrainerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TrainerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TrainerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TrainerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TrainerMaxAggregateInputType
  }

  export type GetTrainerAggregateType<T extends TrainerAggregateArgs> = {
        [P in keyof T & keyof AggregateTrainer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTrainer[P]>
      : GetScalarType<T[P], AggregateTrainer[P]>
  }




  export type TrainerGroupByArgs = {
    where?: TrainerWhereInput
    orderBy?: Enumerable<TrainerOrderByWithAggregationInput>
    by: TrainerScalarFieldEnum[]
    having?: TrainerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TrainerCountAggregateInputType | true
    _avg?: TrainerAvgAggregateInputType
    _sum?: TrainerSumAggregateInputType
    _min?: TrainerMinAggregateInputType
    _max?: TrainerMaxAggregateInputType
  }


  export type TrainerGroupByOutputType = {
    id: number
    username: string
    trainer_name: string
    trainer_code: string
    created_at: Date
    source: string | null
    _count: TrainerCountAggregateOutputType | null
    _avg: TrainerAvgAggregateOutputType | null
    _sum: TrainerSumAggregateOutputType | null
    _min: TrainerMinAggregateOutputType | null
    _max: TrainerMaxAggregateOutputType | null
  }

  type GetTrainerGroupByPayload<T extends TrainerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<TrainerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TrainerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TrainerGroupByOutputType[P]>
            : GetScalarType<T[P], TrainerGroupByOutputType[P]>
        }
      >
    >


  export type TrainerSelect = {
    id?: boolean
    username?: boolean
    trainer_name?: boolean
    trainer_code?: boolean
    created_at?: boolean
    alts?: boolean | Trainer$altsArgs
    source?: boolean
    profile?: boolean | ProfileArgs
    _count?: boolean | TrainerCountOutputTypeArgs
  }


  export type TrainerInclude = {
    alts?: boolean | Trainer$altsArgs
    profile?: boolean | ProfileArgs
    _count?: boolean | TrainerCountOutputTypeArgs
  }

  export type TrainerGetPayload<S extends boolean | null | undefined | TrainerArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Trainer :
    S extends undefined ? never :
    S extends { include: any } & (TrainerArgs | TrainerFindManyArgs)
    ? Trainer  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'alts' ? Array < TrainerAltGetPayload<S['include'][P]>>  :
        P extends 'profile' ? ProfileGetPayload<S['include'][P]> | null :
        P extends '_count' ? TrainerCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (TrainerArgs | TrainerFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'alts' ? Array < TrainerAltGetPayload<S['select'][P]>>  :
        P extends 'profile' ? ProfileGetPayload<S['select'][P]> | null :
        P extends '_count' ? TrainerCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Trainer ? Trainer[P] : never
  } 
      : Trainer


  type TrainerCountArgs = 
    Omit<TrainerFindManyArgs, 'select' | 'include'> & {
      select?: TrainerCountAggregateInputType | true
    }

  export interface TrainerDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Trainer that matches the filter.
     * @param {TrainerFindUniqueArgs} args - Arguments to find a Trainer
     * @example
     * // Get one Trainer
     * const trainer = await prisma.trainer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TrainerFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, TrainerFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Trainer'> extends True ? Prisma__TrainerClient<TrainerGetPayload<T>> : Prisma__TrainerClient<TrainerGetPayload<T> | null, null>

    /**
     * Find one Trainer that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TrainerFindUniqueOrThrowArgs} args - Arguments to find a Trainer
     * @example
     * // Get one Trainer
     * const trainer = await prisma.trainer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TrainerFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, TrainerFindUniqueOrThrowArgs>
    ): Prisma__TrainerClient<TrainerGetPayload<T>>

    /**
     * Find the first Trainer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainerFindFirstArgs} args - Arguments to find a Trainer
     * @example
     * // Get one Trainer
     * const trainer = await prisma.trainer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TrainerFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, TrainerFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Trainer'> extends True ? Prisma__TrainerClient<TrainerGetPayload<T>> : Prisma__TrainerClient<TrainerGetPayload<T> | null, null>

    /**
     * Find the first Trainer that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainerFindFirstOrThrowArgs} args - Arguments to find a Trainer
     * @example
     * // Get one Trainer
     * const trainer = await prisma.trainer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TrainerFindFirstOrThrowArgs>(
      args?: SelectSubset<T, TrainerFindFirstOrThrowArgs>
    ): Prisma__TrainerClient<TrainerGetPayload<T>>

    /**
     * Find zero or more Trainers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainerFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Trainers
     * const trainers = await prisma.trainer.findMany()
     * 
     * // Get first 10 Trainers
     * const trainers = await prisma.trainer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const trainerWithIdOnly = await prisma.trainer.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TrainerFindManyArgs>(
      args?: SelectSubset<T, TrainerFindManyArgs>
    ): Prisma.PrismaPromise<Array<TrainerGetPayload<T>>>

    /**
     * Create a Trainer.
     * @param {TrainerCreateArgs} args - Arguments to create a Trainer.
     * @example
     * // Create one Trainer
     * const Trainer = await prisma.trainer.create({
     *   data: {
     *     // ... data to create a Trainer
     *   }
     * })
     * 
    **/
    create<T extends TrainerCreateArgs>(
      args: SelectSubset<T, TrainerCreateArgs>
    ): Prisma__TrainerClient<TrainerGetPayload<T>>

    /**
     * Create many Trainers.
     *     @param {TrainerCreateManyArgs} args - Arguments to create many Trainers.
     *     @example
     *     // Create many Trainers
     *     const trainer = await prisma.trainer.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TrainerCreateManyArgs>(
      args?: SelectSubset<T, TrainerCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Trainer.
     * @param {TrainerDeleteArgs} args - Arguments to delete one Trainer.
     * @example
     * // Delete one Trainer
     * const Trainer = await prisma.trainer.delete({
     *   where: {
     *     // ... filter to delete one Trainer
     *   }
     * })
     * 
    **/
    delete<T extends TrainerDeleteArgs>(
      args: SelectSubset<T, TrainerDeleteArgs>
    ): Prisma__TrainerClient<TrainerGetPayload<T>>

    /**
     * Update one Trainer.
     * @param {TrainerUpdateArgs} args - Arguments to update one Trainer.
     * @example
     * // Update one Trainer
     * const trainer = await prisma.trainer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TrainerUpdateArgs>(
      args: SelectSubset<T, TrainerUpdateArgs>
    ): Prisma__TrainerClient<TrainerGetPayload<T>>

    /**
     * Delete zero or more Trainers.
     * @param {TrainerDeleteManyArgs} args - Arguments to filter Trainers to delete.
     * @example
     * // Delete a few Trainers
     * const { count } = await prisma.trainer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TrainerDeleteManyArgs>(
      args?: SelectSubset<T, TrainerDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Trainers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Trainers
     * const trainer = await prisma.trainer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TrainerUpdateManyArgs>(
      args: SelectSubset<T, TrainerUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Trainer.
     * @param {TrainerUpsertArgs} args - Arguments to update or create a Trainer.
     * @example
     * // Update or create a Trainer
     * const trainer = await prisma.trainer.upsert({
     *   create: {
     *     // ... data to create a Trainer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Trainer we want to update
     *   }
     * })
    **/
    upsert<T extends TrainerUpsertArgs>(
      args: SelectSubset<T, TrainerUpsertArgs>
    ): Prisma__TrainerClient<TrainerGetPayload<T>>

    /**
     * Count the number of Trainers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainerCountArgs} args - Arguments to filter Trainers to count.
     * @example
     * // Count the number of Trainers
     * const count = await prisma.trainer.count({
     *   where: {
     *     // ... the filter for the Trainers we want to count
     *   }
     * })
    **/
    count<T extends TrainerCountArgs>(
      args?: Subset<T, TrainerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TrainerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Trainer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TrainerAggregateArgs>(args: Subset<T, TrainerAggregateArgs>): Prisma.PrismaPromise<GetTrainerAggregateType<T>>

    /**
     * Group by Trainer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainerGroupByArgs} args - Group by arguments.
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
      T extends TrainerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TrainerGroupByArgs['orderBy'] }
        : { orderBy?: TrainerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, TrainerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTrainerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Trainer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__TrainerClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    alts<T extends Trainer$altsArgs= {}>(args?: Subset<T, Trainer$altsArgs>): Prisma.PrismaPromise<Array<TrainerAltGetPayload<T>>| Null>;

    profile<T extends ProfileArgs= {}>(args?: Subset<T, ProfileArgs>): Prisma__ProfileClient<ProfileGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Trainer base type for findUnique actions
   */
  export type TrainerFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Trainer
     */
    select?: TrainerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrainerInclude | null
    /**
     * Filter, which Trainer to fetch.
     */
    where: TrainerWhereUniqueInput
  }

  /**
   * Trainer findUnique
   */
  export interface TrainerFindUniqueArgs extends TrainerFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Trainer findUniqueOrThrow
   */
  export type TrainerFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Trainer
     */
    select?: TrainerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrainerInclude | null
    /**
     * Filter, which Trainer to fetch.
     */
    where: TrainerWhereUniqueInput
  }


  /**
   * Trainer base type for findFirst actions
   */
  export type TrainerFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Trainer
     */
    select?: TrainerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrainerInclude | null
    /**
     * Filter, which Trainer to fetch.
     */
    where?: TrainerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trainers to fetch.
     */
    orderBy?: Enumerable<TrainerOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Trainers.
     */
    cursor?: TrainerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trainers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trainers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Trainers.
     */
    distinct?: Enumerable<TrainerScalarFieldEnum>
  }

  /**
   * Trainer findFirst
   */
  export interface TrainerFindFirstArgs extends TrainerFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Trainer findFirstOrThrow
   */
  export type TrainerFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Trainer
     */
    select?: TrainerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrainerInclude | null
    /**
     * Filter, which Trainer to fetch.
     */
    where?: TrainerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trainers to fetch.
     */
    orderBy?: Enumerable<TrainerOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Trainers.
     */
    cursor?: TrainerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trainers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trainers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Trainers.
     */
    distinct?: Enumerable<TrainerScalarFieldEnum>
  }


  /**
   * Trainer findMany
   */
  export type TrainerFindManyArgs = {
    /**
     * Select specific fields to fetch from the Trainer
     */
    select?: TrainerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrainerInclude | null
    /**
     * Filter, which Trainers to fetch.
     */
    where?: TrainerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trainers to fetch.
     */
    orderBy?: Enumerable<TrainerOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Trainers.
     */
    cursor?: TrainerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trainers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trainers.
     */
    skip?: number
    distinct?: Enumerable<TrainerScalarFieldEnum>
  }


  /**
   * Trainer create
   */
  export type TrainerCreateArgs = {
    /**
     * Select specific fields to fetch from the Trainer
     */
    select?: TrainerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrainerInclude | null
    /**
     * The data needed to create a Trainer.
     */
    data: XOR<TrainerCreateInput, TrainerUncheckedCreateInput>
  }


  /**
   * Trainer createMany
   */
  export type TrainerCreateManyArgs = {
    /**
     * The data used to create many Trainers.
     */
    data: Enumerable<TrainerCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Trainer update
   */
  export type TrainerUpdateArgs = {
    /**
     * Select specific fields to fetch from the Trainer
     */
    select?: TrainerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrainerInclude | null
    /**
     * The data needed to update a Trainer.
     */
    data: XOR<TrainerUpdateInput, TrainerUncheckedUpdateInput>
    /**
     * Choose, which Trainer to update.
     */
    where: TrainerWhereUniqueInput
  }


  /**
   * Trainer updateMany
   */
  export type TrainerUpdateManyArgs = {
    /**
     * The data used to update Trainers.
     */
    data: XOR<TrainerUpdateManyMutationInput, TrainerUncheckedUpdateManyInput>
    /**
     * Filter which Trainers to update
     */
    where?: TrainerWhereInput
  }


  /**
   * Trainer upsert
   */
  export type TrainerUpsertArgs = {
    /**
     * Select specific fields to fetch from the Trainer
     */
    select?: TrainerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrainerInclude | null
    /**
     * The filter to search for the Trainer to update in case it exists.
     */
    where: TrainerWhereUniqueInput
    /**
     * In case the Trainer found by the `where` argument doesn't exist, create a new Trainer with this data.
     */
    create: XOR<TrainerCreateInput, TrainerUncheckedCreateInput>
    /**
     * In case the Trainer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TrainerUpdateInput, TrainerUncheckedUpdateInput>
  }


  /**
   * Trainer delete
   */
  export type TrainerDeleteArgs = {
    /**
     * Select specific fields to fetch from the Trainer
     */
    select?: TrainerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrainerInclude | null
    /**
     * Filter which Trainer to delete.
     */
    where: TrainerWhereUniqueInput
  }


  /**
   * Trainer deleteMany
   */
  export type TrainerDeleteManyArgs = {
    /**
     * Filter which Trainers to delete
     */
    where?: TrainerWhereInput
  }


  /**
   * Trainer.alts
   */
  export type Trainer$altsArgs = {
    /**
     * Select specific fields to fetch from the TrainerAlt
     */
    select?: TrainerAltSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrainerAltInclude | null
    where?: TrainerAltWhereInput
    orderBy?: Enumerable<TrainerAltOrderByWithRelationInput>
    cursor?: TrainerAltWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<TrainerAltScalarFieldEnum>
  }


  /**
   * Trainer without action
   */
  export type TrainerArgs = {
    /**
     * Select specific fields to fetch from the Trainer
     */
    select?: TrainerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrainerInclude | null
  }



  /**
   * Model TrainerAlt
   */


  export type AggregateTrainerAlt = {
    _count: TrainerAltCountAggregateOutputType | null
    _avg: TrainerAltAvgAggregateOutputType | null
    _sum: TrainerAltSumAggregateOutputType | null
    _min: TrainerAltMinAggregateOutputType | null
    _max: TrainerAltMaxAggregateOutputType | null
  }

  export type TrainerAltAvgAggregateOutputType = {
    id: number | null
    trainer_id: number | null
    order: number | null
  }

  export type TrainerAltSumAggregateOutputType = {
    id: number | null
    trainer_id: number | null
    order: number | null
  }

  export type TrainerAltMinAggregateOutputType = {
    id: number | null
    trainer_id: number | null
    alt_trainer_name: string | null
    alt_trainer_code: string | null
    order: number | null
  }

  export type TrainerAltMaxAggregateOutputType = {
    id: number | null
    trainer_id: number | null
    alt_trainer_name: string | null
    alt_trainer_code: string | null
    order: number | null
  }

  export type TrainerAltCountAggregateOutputType = {
    id: number
    trainer_id: number
    alt_trainer_name: number
    alt_trainer_code: number
    order: number
    _all: number
  }


  export type TrainerAltAvgAggregateInputType = {
    id?: true
    trainer_id?: true
    order?: true
  }

  export type TrainerAltSumAggregateInputType = {
    id?: true
    trainer_id?: true
    order?: true
  }

  export type TrainerAltMinAggregateInputType = {
    id?: true
    trainer_id?: true
    alt_trainer_name?: true
    alt_trainer_code?: true
    order?: true
  }

  export type TrainerAltMaxAggregateInputType = {
    id?: true
    trainer_id?: true
    alt_trainer_name?: true
    alt_trainer_code?: true
    order?: true
  }

  export type TrainerAltCountAggregateInputType = {
    id?: true
    trainer_id?: true
    alt_trainer_name?: true
    alt_trainer_code?: true
    order?: true
    _all?: true
  }

  export type TrainerAltAggregateArgs = {
    /**
     * Filter which TrainerAlt to aggregate.
     */
    where?: TrainerAltWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrainerAlts to fetch.
     */
    orderBy?: Enumerable<TrainerAltOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TrainerAltWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrainerAlts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrainerAlts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TrainerAlts
    **/
    _count?: true | TrainerAltCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TrainerAltAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TrainerAltSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TrainerAltMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TrainerAltMaxAggregateInputType
  }

  export type GetTrainerAltAggregateType<T extends TrainerAltAggregateArgs> = {
        [P in keyof T & keyof AggregateTrainerAlt]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTrainerAlt[P]>
      : GetScalarType<T[P], AggregateTrainerAlt[P]>
  }




  export type TrainerAltGroupByArgs = {
    where?: TrainerAltWhereInput
    orderBy?: Enumerable<TrainerAltOrderByWithAggregationInput>
    by: TrainerAltScalarFieldEnum[]
    having?: TrainerAltScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TrainerAltCountAggregateInputType | true
    _avg?: TrainerAltAvgAggregateInputType
    _sum?: TrainerAltSumAggregateInputType
    _min?: TrainerAltMinAggregateInputType
    _max?: TrainerAltMaxAggregateInputType
  }


  export type TrainerAltGroupByOutputType = {
    id: number
    trainer_id: number
    alt_trainer_name: string
    alt_trainer_code: string
    order: number | null
    _count: TrainerAltCountAggregateOutputType | null
    _avg: TrainerAltAvgAggregateOutputType | null
    _sum: TrainerAltSumAggregateOutputType | null
    _min: TrainerAltMinAggregateOutputType | null
    _max: TrainerAltMaxAggregateOutputType | null
  }

  type GetTrainerAltGroupByPayload<T extends TrainerAltGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<TrainerAltGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TrainerAltGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TrainerAltGroupByOutputType[P]>
            : GetScalarType<T[P], TrainerAltGroupByOutputType[P]>
        }
      >
    >


  export type TrainerAltSelect = {
    id?: boolean
    trainer?: boolean | TrainerArgs
    trainer_id?: boolean
    alt_trainer_name?: boolean
    alt_trainer_code?: boolean
    order?: boolean
  }


  export type TrainerAltInclude = {
    trainer?: boolean | TrainerArgs
  }

  export type TrainerAltGetPayload<S extends boolean | null | undefined | TrainerAltArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? TrainerAlt :
    S extends undefined ? never :
    S extends { include: any } & (TrainerAltArgs | TrainerAltFindManyArgs)
    ? TrainerAlt  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'trainer' ? TrainerGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (TrainerAltArgs | TrainerAltFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'trainer' ? TrainerGetPayload<S['select'][P]> :  P extends keyof TrainerAlt ? TrainerAlt[P] : never
  } 
      : TrainerAlt


  type TrainerAltCountArgs = 
    Omit<TrainerAltFindManyArgs, 'select' | 'include'> & {
      select?: TrainerAltCountAggregateInputType | true
    }

  export interface TrainerAltDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one TrainerAlt that matches the filter.
     * @param {TrainerAltFindUniqueArgs} args - Arguments to find a TrainerAlt
     * @example
     * // Get one TrainerAlt
     * const trainerAlt = await prisma.trainerAlt.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TrainerAltFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, TrainerAltFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'TrainerAlt'> extends True ? Prisma__TrainerAltClient<TrainerAltGetPayload<T>> : Prisma__TrainerAltClient<TrainerAltGetPayload<T> | null, null>

    /**
     * Find one TrainerAlt that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TrainerAltFindUniqueOrThrowArgs} args - Arguments to find a TrainerAlt
     * @example
     * // Get one TrainerAlt
     * const trainerAlt = await prisma.trainerAlt.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TrainerAltFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, TrainerAltFindUniqueOrThrowArgs>
    ): Prisma__TrainerAltClient<TrainerAltGetPayload<T>>

    /**
     * Find the first TrainerAlt that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainerAltFindFirstArgs} args - Arguments to find a TrainerAlt
     * @example
     * // Get one TrainerAlt
     * const trainerAlt = await prisma.trainerAlt.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TrainerAltFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, TrainerAltFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'TrainerAlt'> extends True ? Prisma__TrainerAltClient<TrainerAltGetPayload<T>> : Prisma__TrainerAltClient<TrainerAltGetPayload<T> | null, null>

    /**
     * Find the first TrainerAlt that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainerAltFindFirstOrThrowArgs} args - Arguments to find a TrainerAlt
     * @example
     * // Get one TrainerAlt
     * const trainerAlt = await prisma.trainerAlt.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TrainerAltFindFirstOrThrowArgs>(
      args?: SelectSubset<T, TrainerAltFindFirstOrThrowArgs>
    ): Prisma__TrainerAltClient<TrainerAltGetPayload<T>>

    /**
     * Find zero or more TrainerAlts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainerAltFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TrainerAlts
     * const trainerAlts = await prisma.trainerAlt.findMany()
     * 
     * // Get first 10 TrainerAlts
     * const trainerAlts = await prisma.trainerAlt.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const trainerAltWithIdOnly = await prisma.trainerAlt.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TrainerAltFindManyArgs>(
      args?: SelectSubset<T, TrainerAltFindManyArgs>
    ): Prisma.PrismaPromise<Array<TrainerAltGetPayload<T>>>

    /**
     * Create a TrainerAlt.
     * @param {TrainerAltCreateArgs} args - Arguments to create a TrainerAlt.
     * @example
     * // Create one TrainerAlt
     * const TrainerAlt = await prisma.trainerAlt.create({
     *   data: {
     *     // ... data to create a TrainerAlt
     *   }
     * })
     * 
    **/
    create<T extends TrainerAltCreateArgs>(
      args: SelectSubset<T, TrainerAltCreateArgs>
    ): Prisma__TrainerAltClient<TrainerAltGetPayload<T>>

    /**
     * Create many TrainerAlts.
     *     @param {TrainerAltCreateManyArgs} args - Arguments to create many TrainerAlts.
     *     @example
     *     // Create many TrainerAlts
     *     const trainerAlt = await prisma.trainerAlt.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TrainerAltCreateManyArgs>(
      args?: SelectSubset<T, TrainerAltCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TrainerAlt.
     * @param {TrainerAltDeleteArgs} args - Arguments to delete one TrainerAlt.
     * @example
     * // Delete one TrainerAlt
     * const TrainerAlt = await prisma.trainerAlt.delete({
     *   where: {
     *     // ... filter to delete one TrainerAlt
     *   }
     * })
     * 
    **/
    delete<T extends TrainerAltDeleteArgs>(
      args: SelectSubset<T, TrainerAltDeleteArgs>
    ): Prisma__TrainerAltClient<TrainerAltGetPayload<T>>

    /**
     * Update one TrainerAlt.
     * @param {TrainerAltUpdateArgs} args - Arguments to update one TrainerAlt.
     * @example
     * // Update one TrainerAlt
     * const trainerAlt = await prisma.trainerAlt.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TrainerAltUpdateArgs>(
      args: SelectSubset<T, TrainerAltUpdateArgs>
    ): Prisma__TrainerAltClient<TrainerAltGetPayload<T>>

    /**
     * Delete zero or more TrainerAlts.
     * @param {TrainerAltDeleteManyArgs} args - Arguments to filter TrainerAlts to delete.
     * @example
     * // Delete a few TrainerAlts
     * const { count } = await prisma.trainerAlt.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TrainerAltDeleteManyArgs>(
      args?: SelectSubset<T, TrainerAltDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TrainerAlts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainerAltUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TrainerAlts
     * const trainerAlt = await prisma.trainerAlt.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TrainerAltUpdateManyArgs>(
      args: SelectSubset<T, TrainerAltUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TrainerAlt.
     * @param {TrainerAltUpsertArgs} args - Arguments to update or create a TrainerAlt.
     * @example
     * // Update or create a TrainerAlt
     * const trainerAlt = await prisma.trainerAlt.upsert({
     *   create: {
     *     // ... data to create a TrainerAlt
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TrainerAlt we want to update
     *   }
     * })
    **/
    upsert<T extends TrainerAltUpsertArgs>(
      args: SelectSubset<T, TrainerAltUpsertArgs>
    ): Prisma__TrainerAltClient<TrainerAltGetPayload<T>>

    /**
     * Count the number of TrainerAlts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainerAltCountArgs} args - Arguments to filter TrainerAlts to count.
     * @example
     * // Count the number of TrainerAlts
     * const count = await prisma.trainerAlt.count({
     *   where: {
     *     // ... the filter for the TrainerAlts we want to count
     *   }
     * })
    **/
    count<T extends TrainerAltCountArgs>(
      args?: Subset<T, TrainerAltCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TrainerAltCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TrainerAlt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainerAltAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TrainerAltAggregateArgs>(args: Subset<T, TrainerAltAggregateArgs>): Prisma.PrismaPromise<GetTrainerAltAggregateType<T>>

    /**
     * Group by TrainerAlt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainerAltGroupByArgs} args - Group by arguments.
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
      T extends TrainerAltGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TrainerAltGroupByArgs['orderBy'] }
        : { orderBy?: TrainerAltGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, TrainerAltGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTrainerAltGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for TrainerAlt.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__TrainerAltClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    trainer<T extends TrainerArgs= {}>(args?: Subset<T, TrainerArgs>): Prisma__TrainerClient<TrainerGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * TrainerAlt base type for findUnique actions
   */
  export type TrainerAltFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the TrainerAlt
     */
    select?: TrainerAltSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrainerAltInclude | null
    /**
     * Filter, which TrainerAlt to fetch.
     */
    where: TrainerAltWhereUniqueInput
  }

  /**
   * TrainerAlt findUnique
   */
  export interface TrainerAltFindUniqueArgs extends TrainerAltFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * TrainerAlt findUniqueOrThrow
   */
  export type TrainerAltFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the TrainerAlt
     */
    select?: TrainerAltSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrainerAltInclude | null
    /**
     * Filter, which TrainerAlt to fetch.
     */
    where: TrainerAltWhereUniqueInput
  }


  /**
   * TrainerAlt base type for findFirst actions
   */
  export type TrainerAltFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the TrainerAlt
     */
    select?: TrainerAltSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrainerAltInclude | null
    /**
     * Filter, which TrainerAlt to fetch.
     */
    where?: TrainerAltWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrainerAlts to fetch.
     */
    orderBy?: Enumerable<TrainerAltOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TrainerAlts.
     */
    cursor?: TrainerAltWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrainerAlts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrainerAlts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TrainerAlts.
     */
    distinct?: Enumerable<TrainerAltScalarFieldEnum>
  }

  /**
   * TrainerAlt findFirst
   */
  export interface TrainerAltFindFirstArgs extends TrainerAltFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * TrainerAlt findFirstOrThrow
   */
  export type TrainerAltFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the TrainerAlt
     */
    select?: TrainerAltSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrainerAltInclude | null
    /**
     * Filter, which TrainerAlt to fetch.
     */
    where?: TrainerAltWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrainerAlts to fetch.
     */
    orderBy?: Enumerable<TrainerAltOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TrainerAlts.
     */
    cursor?: TrainerAltWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrainerAlts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrainerAlts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TrainerAlts.
     */
    distinct?: Enumerable<TrainerAltScalarFieldEnum>
  }


  /**
   * TrainerAlt findMany
   */
  export type TrainerAltFindManyArgs = {
    /**
     * Select specific fields to fetch from the TrainerAlt
     */
    select?: TrainerAltSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrainerAltInclude | null
    /**
     * Filter, which TrainerAlts to fetch.
     */
    where?: TrainerAltWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrainerAlts to fetch.
     */
    orderBy?: Enumerable<TrainerAltOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TrainerAlts.
     */
    cursor?: TrainerAltWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrainerAlts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrainerAlts.
     */
    skip?: number
    distinct?: Enumerable<TrainerAltScalarFieldEnum>
  }


  /**
   * TrainerAlt create
   */
  export type TrainerAltCreateArgs = {
    /**
     * Select specific fields to fetch from the TrainerAlt
     */
    select?: TrainerAltSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrainerAltInclude | null
    /**
     * The data needed to create a TrainerAlt.
     */
    data: XOR<TrainerAltCreateInput, TrainerAltUncheckedCreateInput>
  }


  /**
   * TrainerAlt createMany
   */
  export type TrainerAltCreateManyArgs = {
    /**
     * The data used to create many TrainerAlts.
     */
    data: Enumerable<TrainerAltCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * TrainerAlt update
   */
  export type TrainerAltUpdateArgs = {
    /**
     * Select specific fields to fetch from the TrainerAlt
     */
    select?: TrainerAltSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrainerAltInclude | null
    /**
     * The data needed to update a TrainerAlt.
     */
    data: XOR<TrainerAltUpdateInput, TrainerAltUncheckedUpdateInput>
    /**
     * Choose, which TrainerAlt to update.
     */
    where: TrainerAltWhereUniqueInput
  }


  /**
   * TrainerAlt updateMany
   */
  export type TrainerAltUpdateManyArgs = {
    /**
     * The data used to update TrainerAlts.
     */
    data: XOR<TrainerAltUpdateManyMutationInput, TrainerAltUncheckedUpdateManyInput>
    /**
     * Filter which TrainerAlts to update
     */
    where?: TrainerAltWhereInput
  }


  /**
   * TrainerAlt upsert
   */
  export type TrainerAltUpsertArgs = {
    /**
     * Select specific fields to fetch from the TrainerAlt
     */
    select?: TrainerAltSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrainerAltInclude | null
    /**
     * The filter to search for the TrainerAlt to update in case it exists.
     */
    where: TrainerAltWhereUniqueInput
    /**
     * In case the TrainerAlt found by the `where` argument doesn't exist, create a new TrainerAlt with this data.
     */
    create: XOR<TrainerAltCreateInput, TrainerAltUncheckedCreateInput>
    /**
     * In case the TrainerAlt was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TrainerAltUpdateInput, TrainerAltUncheckedUpdateInput>
  }


  /**
   * TrainerAlt delete
   */
  export type TrainerAltDeleteArgs = {
    /**
     * Select specific fields to fetch from the TrainerAlt
     */
    select?: TrainerAltSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrainerAltInclude | null
    /**
     * Filter which TrainerAlt to delete.
     */
    where: TrainerAltWhereUniqueInput
  }


  /**
   * TrainerAlt deleteMany
   */
  export type TrainerAltDeleteManyArgs = {
    /**
     * Filter which TrainerAlts to delete
     */
    where?: TrainerAltWhereInput
  }


  /**
   * TrainerAlt without action
   */
  export type TrainerAltArgs = {
    /**
     * Select specific fields to fetch from the TrainerAlt
     */
    select?: TrainerAltSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrainerAltInclude | null
  }



  /**
   * Model SyncHistory
   */


  export type AggregateSyncHistory = {
    _count: SyncHistoryCountAggregateOutputType | null
    _avg: SyncHistoryAvgAggregateOutputType | null
    _sum: SyncHistorySumAggregateOutputType | null
    _min: SyncHistoryMinAggregateOutputType | null
    _max: SyncHistoryMaxAggregateOutputType | null
  }

  export type SyncHistoryAvgAggregateOutputType = {
    id: number | null
    total_rows_imported: number | null
    total_rows_deleted: number | null
    total_row_created: number | null
  }

  export type SyncHistorySumAggregateOutputType = {
    id: number | null
    total_rows_imported: number | null
    total_rows_deleted: number | null
    total_row_created: number | null
  }

  export type SyncHistoryMinAggregateOutputType = {
    id: number | null
    total_rows_imported: number | null
    total_rows_deleted: number | null
    total_row_created: number | null
    created_at: Date | null
    source: string | null
  }

  export type SyncHistoryMaxAggregateOutputType = {
    id: number | null
    total_rows_imported: number | null
    total_rows_deleted: number | null
    total_row_created: number | null
    created_at: Date | null
    source: string | null
  }

  export type SyncHistoryCountAggregateOutputType = {
    id: number
    total_rows_imported: number
    total_rows_deleted: number
    total_row_created: number
    created_at: number
    source: number
    _all: number
  }


  export type SyncHistoryAvgAggregateInputType = {
    id?: true
    total_rows_imported?: true
    total_rows_deleted?: true
    total_row_created?: true
  }

  export type SyncHistorySumAggregateInputType = {
    id?: true
    total_rows_imported?: true
    total_rows_deleted?: true
    total_row_created?: true
  }

  export type SyncHistoryMinAggregateInputType = {
    id?: true
    total_rows_imported?: true
    total_rows_deleted?: true
    total_row_created?: true
    created_at?: true
    source?: true
  }

  export type SyncHistoryMaxAggregateInputType = {
    id?: true
    total_rows_imported?: true
    total_rows_deleted?: true
    total_row_created?: true
    created_at?: true
    source?: true
  }

  export type SyncHistoryCountAggregateInputType = {
    id?: true
    total_rows_imported?: true
    total_rows_deleted?: true
    total_row_created?: true
    created_at?: true
    source?: true
    _all?: true
  }

  export type SyncHistoryAggregateArgs = {
    /**
     * Filter which SyncHistory to aggregate.
     */
    where?: SyncHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SyncHistories to fetch.
     */
    orderBy?: Enumerable<SyncHistoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SyncHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SyncHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SyncHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SyncHistories
    **/
    _count?: true | SyncHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SyncHistoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SyncHistorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SyncHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SyncHistoryMaxAggregateInputType
  }

  export type GetSyncHistoryAggregateType<T extends SyncHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateSyncHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSyncHistory[P]>
      : GetScalarType<T[P], AggregateSyncHistory[P]>
  }




  export type SyncHistoryGroupByArgs = {
    where?: SyncHistoryWhereInput
    orderBy?: Enumerable<SyncHistoryOrderByWithAggregationInput>
    by: SyncHistoryScalarFieldEnum[]
    having?: SyncHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SyncHistoryCountAggregateInputType | true
    _avg?: SyncHistoryAvgAggregateInputType
    _sum?: SyncHistorySumAggregateInputType
    _min?: SyncHistoryMinAggregateInputType
    _max?: SyncHistoryMaxAggregateInputType
  }


  export type SyncHistoryGroupByOutputType = {
    id: number
    total_rows_imported: number
    total_rows_deleted: number
    total_row_created: number
    created_at: Date
    source: string | null
    _count: SyncHistoryCountAggregateOutputType | null
    _avg: SyncHistoryAvgAggregateOutputType | null
    _sum: SyncHistorySumAggregateOutputType | null
    _min: SyncHistoryMinAggregateOutputType | null
    _max: SyncHistoryMaxAggregateOutputType | null
  }

  type GetSyncHistoryGroupByPayload<T extends SyncHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<SyncHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SyncHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SyncHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], SyncHistoryGroupByOutputType[P]>
        }
      >
    >


  export type SyncHistorySelect = {
    id?: boolean
    total_rows_imported?: boolean
    total_rows_deleted?: boolean
    total_row_created?: boolean
    created_at?: boolean
    source?: boolean
  }


  export type SyncHistoryGetPayload<S extends boolean | null | undefined | SyncHistoryArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? SyncHistory :
    S extends undefined ? never :
    S extends { include: any } & (SyncHistoryArgs | SyncHistoryFindManyArgs)
    ? SyncHistory 
    : S extends { select: any } & (SyncHistoryArgs | SyncHistoryFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof SyncHistory ? SyncHistory[P] : never
  } 
      : SyncHistory


  type SyncHistoryCountArgs = 
    Omit<SyncHistoryFindManyArgs, 'select' | 'include'> & {
      select?: SyncHistoryCountAggregateInputType | true
    }

  export interface SyncHistoryDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one SyncHistory that matches the filter.
     * @param {SyncHistoryFindUniqueArgs} args - Arguments to find a SyncHistory
     * @example
     * // Get one SyncHistory
     * const syncHistory = await prisma.syncHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SyncHistoryFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, SyncHistoryFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'SyncHistory'> extends True ? Prisma__SyncHistoryClient<SyncHistoryGetPayload<T>> : Prisma__SyncHistoryClient<SyncHistoryGetPayload<T> | null, null>

    /**
     * Find one SyncHistory that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {SyncHistoryFindUniqueOrThrowArgs} args - Arguments to find a SyncHistory
     * @example
     * // Get one SyncHistory
     * const syncHistory = await prisma.syncHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SyncHistoryFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, SyncHistoryFindUniqueOrThrowArgs>
    ): Prisma__SyncHistoryClient<SyncHistoryGetPayload<T>>

    /**
     * Find the first SyncHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SyncHistoryFindFirstArgs} args - Arguments to find a SyncHistory
     * @example
     * // Get one SyncHistory
     * const syncHistory = await prisma.syncHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SyncHistoryFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, SyncHistoryFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'SyncHistory'> extends True ? Prisma__SyncHistoryClient<SyncHistoryGetPayload<T>> : Prisma__SyncHistoryClient<SyncHistoryGetPayload<T> | null, null>

    /**
     * Find the first SyncHistory that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SyncHistoryFindFirstOrThrowArgs} args - Arguments to find a SyncHistory
     * @example
     * // Get one SyncHistory
     * const syncHistory = await prisma.syncHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SyncHistoryFindFirstOrThrowArgs>(
      args?: SelectSubset<T, SyncHistoryFindFirstOrThrowArgs>
    ): Prisma__SyncHistoryClient<SyncHistoryGetPayload<T>>

    /**
     * Find zero or more SyncHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SyncHistoryFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SyncHistories
     * const syncHistories = await prisma.syncHistory.findMany()
     * 
     * // Get first 10 SyncHistories
     * const syncHistories = await prisma.syncHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const syncHistoryWithIdOnly = await prisma.syncHistory.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SyncHistoryFindManyArgs>(
      args?: SelectSubset<T, SyncHistoryFindManyArgs>
    ): Prisma.PrismaPromise<Array<SyncHistoryGetPayload<T>>>

    /**
     * Create a SyncHistory.
     * @param {SyncHistoryCreateArgs} args - Arguments to create a SyncHistory.
     * @example
     * // Create one SyncHistory
     * const SyncHistory = await prisma.syncHistory.create({
     *   data: {
     *     // ... data to create a SyncHistory
     *   }
     * })
     * 
    **/
    create<T extends SyncHistoryCreateArgs>(
      args: SelectSubset<T, SyncHistoryCreateArgs>
    ): Prisma__SyncHistoryClient<SyncHistoryGetPayload<T>>

    /**
     * Create many SyncHistories.
     *     @param {SyncHistoryCreateManyArgs} args - Arguments to create many SyncHistories.
     *     @example
     *     // Create many SyncHistories
     *     const syncHistory = await prisma.syncHistory.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SyncHistoryCreateManyArgs>(
      args?: SelectSubset<T, SyncHistoryCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SyncHistory.
     * @param {SyncHistoryDeleteArgs} args - Arguments to delete one SyncHistory.
     * @example
     * // Delete one SyncHistory
     * const SyncHistory = await prisma.syncHistory.delete({
     *   where: {
     *     // ... filter to delete one SyncHistory
     *   }
     * })
     * 
    **/
    delete<T extends SyncHistoryDeleteArgs>(
      args: SelectSubset<T, SyncHistoryDeleteArgs>
    ): Prisma__SyncHistoryClient<SyncHistoryGetPayload<T>>

    /**
     * Update one SyncHistory.
     * @param {SyncHistoryUpdateArgs} args - Arguments to update one SyncHistory.
     * @example
     * // Update one SyncHistory
     * const syncHistory = await prisma.syncHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SyncHistoryUpdateArgs>(
      args: SelectSubset<T, SyncHistoryUpdateArgs>
    ): Prisma__SyncHistoryClient<SyncHistoryGetPayload<T>>

    /**
     * Delete zero or more SyncHistories.
     * @param {SyncHistoryDeleteManyArgs} args - Arguments to filter SyncHistories to delete.
     * @example
     * // Delete a few SyncHistories
     * const { count } = await prisma.syncHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SyncHistoryDeleteManyArgs>(
      args?: SelectSubset<T, SyncHistoryDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SyncHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SyncHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SyncHistories
     * const syncHistory = await prisma.syncHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SyncHistoryUpdateManyArgs>(
      args: SelectSubset<T, SyncHistoryUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SyncHistory.
     * @param {SyncHistoryUpsertArgs} args - Arguments to update or create a SyncHistory.
     * @example
     * // Update or create a SyncHistory
     * const syncHistory = await prisma.syncHistory.upsert({
     *   create: {
     *     // ... data to create a SyncHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SyncHistory we want to update
     *   }
     * })
    **/
    upsert<T extends SyncHistoryUpsertArgs>(
      args: SelectSubset<T, SyncHistoryUpsertArgs>
    ): Prisma__SyncHistoryClient<SyncHistoryGetPayload<T>>

    /**
     * Count the number of SyncHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SyncHistoryCountArgs} args - Arguments to filter SyncHistories to count.
     * @example
     * // Count the number of SyncHistories
     * const count = await prisma.syncHistory.count({
     *   where: {
     *     // ... the filter for the SyncHistories we want to count
     *   }
     * })
    **/
    count<T extends SyncHistoryCountArgs>(
      args?: Subset<T, SyncHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SyncHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SyncHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SyncHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SyncHistoryAggregateArgs>(args: Subset<T, SyncHistoryAggregateArgs>): Prisma.PrismaPromise<GetSyncHistoryAggregateType<T>>

    /**
     * Group by SyncHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SyncHistoryGroupByArgs} args - Group by arguments.
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
      T extends SyncHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SyncHistoryGroupByArgs['orderBy'] }
        : { orderBy?: SyncHistoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, SyncHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSyncHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for SyncHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__SyncHistoryClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * SyncHistory base type for findUnique actions
   */
  export type SyncHistoryFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the SyncHistory
     */
    select?: SyncHistorySelect | null
    /**
     * Filter, which SyncHistory to fetch.
     */
    where: SyncHistoryWhereUniqueInput
  }

  /**
   * SyncHistory findUnique
   */
  export interface SyncHistoryFindUniqueArgs extends SyncHistoryFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * SyncHistory findUniqueOrThrow
   */
  export type SyncHistoryFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the SyncHistory
     */
    select?: SyncHistorySelect | null
    /**
     * Filter, which SyncHistory to fetch.
     */
    where: SyncHistoryWhereUniqueInput
  }


  /**
   * SyncHistory base type for findFirst actions
   */
  export type SyncHistoryFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the SyncHistory
     */
    select?: SyncHistorySelect | null
    /**
     * Filter, which SyncHistory to fetch.
     */
    where?: SyncHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SyncHistories to fetch.
     */
    orderBy?: Enumerable<SyncHistoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SyncHistories.
     */
    cursor?: SyncHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SyncHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SyncHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SyncHistories.
     */
    distinct?: Enumerable<SyncHistoryScalarFieldEnum>
  }

  /**
   * SyncHistory findFirst
   */
  export interface SyncHistoryFindFirstArgs extends SyncHistoryFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * SyncHistory findFirstOrThrow
   */
  export type SyncHistoryFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the SyncHistory
     */
    select?: SyncHistorySelect | null
    /**
     * Filter, which SyncHistory to fetch.
     */
    where?: SyncHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SyncHistories to fetch.
     */
    orderBy?: Enumerable<SyncHistoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SyncHistories.
     */
    cursor?: SyncHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SyncHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SyncHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SyncHistories.
     */
    distinct?: Enumerable<SyncHistoryScalarFieldEnum>
  }


  /**
   * SyncHistory findMany
   */
  export type SyncHistoryFindManyArgs = {
    /**
     * Select specific fields to fetch from the SyncHistory
     */
    select?: SyncHistorySelect | null
    /**
     * Filter, which SyncHistories to fetch.
     */
    where?: SyncHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SyncHistories to fetch.
     */
    orderBy?: Enumerable<SyncHistoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SyncHistories.
     */
    cursor?: SyncHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SyncHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SyncHistories.
     */
    skip?: number
    distinct?: Enumerable<SyncHistoryScalarFieldEnum>
  }


  /**
   * SyncHistory create
   */
  export type SyncHistoryCreateArgs = {
    /**
     * Select specific fields to fetch from the SyncHistory
     */
    select?: SyncHistorySelect | null
    /**
     * The data needed to create a SyncHistory.
     */
    data: XOR<SyncHistoryCreateInput, SyncHistoryUncheckedCreateInput>
  }


  /**
   * SyncHistory createMany
   */
  export type SyncHistoryCreateManyArgs = {
    /**
     * The data used to create many SyncHistories.
     */
    data: Enumerable<SyncHistoryCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * SyncHistory update
   */
  export type SyncHistoryUpdateArgs = {
    /**
     * Select specific fields to fetch from the SyncHistory
     */
    select?: SyncHistorySelect | null
    /**
     * The data needed to update a SyncHistory.
     */
    data: XOR<SyncHistoryUpdateInput, SyncHistoryUncheckedUpdateInput>
    /**
     * Choose, which SyncHistory to update.
     */
    where: SyncHistoryWhereUniqueInput
  }


  /**
   * SyncHistory updateMany
   */
  export type SyncHistoryUpdateManyArgs = {
    /**
     * The data used to update SyncHistories.
     */
    data: XOR<SyncHistoryUpdateManyMutationInput, SyncHistoryUncheckedUpdateManyInput>
    /**
     * Filter which SyncHistories to update
     */
    where?: SyncHistoryWhereInput
  }


  /**
   * SyncHistory upsert
   */
  export type SyncHistoryUpsertArgs = {
    /**
     * Select specific fields to fetch from the SyncHistory
     */
    select?: SyncHistorySelect | null
    /**
     * The filter to search for the SyncHistory to update in case it exists.
     */
    where: SyncHistoryWhereUniqueInput
    /**
     * In case the SyncHistory found by the `where` argument doesn't exist, create a new SyncHistory with this data.
     */
    create: XOR<SyncHistoryCreateInput, SyncHistoryUncheckedCreateInput>
    /**
     * In case the SyncHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SyncHistoryUpdateInput, SyncHistoryUncheckedUpdateInput>
  }


  /**
   * SyncHistory delete
   */
  export type SyncHistoryDeleteArgs = {
    /**
     * Select specific fields to fetch from the SyncHistory
     */
    select?: SyncHistorySelect | null
    /**
     * Filter which SyncHistory to delete.
     */
    where: SyncHistoryWhereUniqueInput
  }


  /**
   * SyncHistory deleteMany
   */
  export type SyncHistoryDeleteManyArgs = {
    /**
     * Filter which SyncHistories to delete
     */
    where?: SyncHistoryWhereInput
  }


  /**
   * SyncHistory without action
   */
  export type SyncHistoryArgs = {
    /**
     * Select specific fields to fetch from the SyncHistory
     */
    select?: SyncHistorySelect | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const LogScalarFieldEnum: {
    id: 'id',
    level: 'level',
    message: 'message',
    meta: 'meta',
    log_type: 'log_type',
    created_at: 'created_at',
    request_id: 'request_id'
  };

  export type LogScalarFieldEnum = (typeof LogScalarFieldEnum)[keyof typeof LogScalarFieldEnum]


  export const ProfileScalarFieldEnum: {
    id: 'id',
    username: 'username',
    avatar: 'avatar',
    created_at: 'created_at',
    updated_at: 'updated_at',
    display_name: 'display_name',
    global_name: 'global_name',
    locale: 'locale',
    avatar_decoration: 'avatar_decoration',
    trainer_id: 'trainer_id',
    user_id: 'user_id'
  };

  export type ProfileScalarFieldEnum = (typeof ProfileScalarFieldEnum)[keyof typeof ProfileScalarFieldEnum]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const SyncHistoryScalarFieldEnum: {
    id: 'id',
    total_rows_imported: 'total_rows_imported',
    total_rows_deleted: 'total_rows_deleted',
    total_row_created: 'total_row_created',
    created_at: 'created_at',
    source: 'source'
  };

  export type SyncHistoryScalarFieldEnum = (typeof SyncHistoryScalarFieldEnum)[keyof typeof SyncHistoryScalarFieldEnum]


  export const TrainerAltScalarFieldEnum: {
    id: 'id',
    trainer_id: 'trainer_id',
    alt_trainer_name: 'alt_trainer_name',
    alt_trainer_code: 'alt_trainer_code',
    order: 'order'
  };

  export type TrainerAltScalarFieldEnum = (typeof TrainerAltScalarFieldEnum)[keyof typeof TrainerAltScalarFieldEnum]


  export const TrainerScalarFieldEnum: {
    id: 'id',
    username: 'username',
    trainer_name: 'trainer_name',
    trainer_code: 'trainer_code',
    created_at: 'created_at',
    source: 'source'
  };

  export type TrainerScalarFieldEnum = (typeof TrainerScalarFieldEnum)[keyof typeof TrainerScalarFieldEnum]


  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  /**
   * Deep Input Types
   */


  export type LogWhereInput = {
    AND?: Enumerable<LogWhereInput>
    OR?: Enumerable<LogWhereInput>
    NOT?: Enumerable<LogWhereInput>
    id?: IntFilter | number
    level?: EnumLevelFilter | Level
    message?: StringFilter | string
    meta?: JsonFilter
    log_type?: EnumLogTypeFilter | LogType
    created_at?: DateTimeFilter | Date | string
    request_id?: StringNullableFilter | string | null
  }

  export type LogOrderByWithRelationInput = {
    id?: SortOrder
    level?: SortOrder
    message?: SortOrder
    meta?: SortOrder
    log_type?: SortOrder
    created_at?: SortOrder
    request_id?: SortOrder
  }

  export type LogWhereUniqueInput = {
    id?: number
  }

  export type LogOrderByWithAggregationInput = {
    id?: SortOrder
    level?: SortOrder
    message?: SortOrder
    meta?: SortOrder
    log_type?: SortOrder
    created_at?: SortOrder
    request_id?: SortOrder
    _count?: LogCountOrderByAggregateInput
    _avg?: LogAvgOrderByAggregateInput
    _max?: LogMaxOrderByAggregateInput
    _min?: LogMinOrderByAggregateInput
    _sum?: LogSumOrderByAggregateInput
  }

  export type LogScalarWhereWithAggregatesInput = {
    AND?: Enumerable<LogScalarWhereWithAggregatesInput>
    OR?: Enumerable<LogScalarWhereWithAggregatesInput>
    NOT?: Enumerable<LogScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    level?: EnumLevelWithAggregatesFilter | Level
    message?: StringWithAggregatesFilter | string
    meta?: JsonWithAggregatesFilter
    log_type?: EnumLogTypeWithAggregatesFilter | LogType
    created_at?: DateTimeWithAggregatesFilter | Date | string
    request_id?: StringNullableWithAggregatesFilter | string | null
  }

  export type ProfileWhereInput = {
    AND?: Enumerable<ProfileWhereInput>
    OR?: Enumerable<ProfileWhereInput>
    NOT?: Enumerable<ProfileWhereInput>
    id?: IntFilter | number
    username?: StringFilter | string
    avatar?: StringNullableFilter | string | null
    created_at?: DateTimeFilter | Date | string
    updated_at?: DateTimeNullableFilter | Date | string | null
    display_name?: StringNullableFilter | string | null
    global_name?: StringNullableFilter | string | null
    locale?: StringNullableFilter | string | null
    avatar_decoration?: StringNullableFilter | string | null
    trainer?: XOR<TrainerRelationFilter, TrainerWhereInput>
    trainer_id?: IntFilter | number
    user_id?: StringFilter | string
  }

  export type ProfileOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    avatar?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    display_name?: SortOrder
    global_name?: SortOrder
    locale?: SortOrder
    avatar_decoration?: SortOrder
    trainer?: TrainerOrderByWithRelationInput
    trainer_id?: SortOrder
    user_id?: SortOrder
  }

  export type ProfileWhereUniqueInput = {
    id?: number
    trainer_id?: number
    user_id?: string
  }

  export type ProfileOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    avatar?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    display_name?: SortOrder
    global_name?: SortOrder
    locale?: SortOrder
    avatar_decoration?: SortOrder
    trainer_id?: SortOrder
    user_id?: SortOrder
    _count?: ProfileCountOrderByAggregateInput
    _avg?: ProfileAvgOrderByAggregateInput
    _max?: ProfileMaxOrderByAggregateInput
    _min?: ProfileMinOrderByAggregateInput
    _sum?: ProfileSumOrderByAggregateInput
  }

  export type ProfileScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ProfileScalarWhereWithAggregatesInput>
    OR?: Enumerable<ProfileScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ProfileScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    username?: StringWithAggregatesFilter | string
    avatar?: StringNullableWithAggregatesFilter | string | null
    created_at?: DateTimeWithAggregatesFilter | Date | string
    updated_at?: DateTimeNullableWithAggregatesFilter | Date | string | null
    display_name?: StringNullableWithAggregatesFilter | string | null
    global_name?: StringNullableWithAggregatesFilter | string | null
    locale?: StringNullableWithAggregatesFilter | string | null
    avatar_decoration?: StringNullableWithAggregatesFilter | string | null
    trainer_id?: IntWithAggregatesFilter | number
    user_id?: StringWithAggregatesFilter | string
  }

  export type TrainerWhereInput = {
    AND?: Enumerable<TrainerWhereInput>
    OR?: Enumerable<TrainerWhereInput>
    NOT?: Enumerable<TrainerWhereInput>
    id?: IntFilter | number
    username?: StringFilter | string
    trainer_name?: StringFilter | string
    trainer_code?: StringFilter | string
    created_at?: DateTimeFilter | Date | string
    alts?: TrainerAltListRelationFilter
    source?: StringNullableFilter | string | null
    profile?: XOR<ProfileRelationFilter, ProfileWhereInput> | null
  }

  export type TrainerOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    trainer_name?: SortOrder
    trainer_code?: SortOrder
    created_at?: SortOrder
    alts?: TrainerAltOrderByRelationAggregateInput
    source?: SortOrder
    profile?: ProfileOrderByWithRelationInput
  }

  export type TrainerWhereUniqueInput = {
    id?: number
  }

  export type TrainerOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    trainer_name?: SortOrder
    trainer_code?: SortOrder
    created_at?: SortOrder
    source?: SortOrder
    _count?: TrainerCountOrderByAggregateInput
    _avg?: TrainerAvgOrderByAggregateInput
    _max?: TrainerMaxOrderByAggregateInput
    _min?: TrainerMinOrderByAggregateInput
    _sum?: TrainerSumOrderByAggregateInput
  }

  export type TrainerScalarWhereWithAggregatesInput = {
    AND?: Enumerable<TrainerScalarWhereWithAggregatesInput>
    OR?: Enumerable<TrainerScalarWhereWithAggregatesInput>
    NOT?: Enumerable<TrainerScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    username?: StringWithAggregatesFilter | string
    trainer_name?: StringWithAggregatesFilter | string
    trainer_code?: StringWithAggregatesFilter | string
    created_at?: DateTimeWithAggregatesFilter | Date | string
    source?: StringNullableWithAggregatesFilter | string | null
  }

  export type TrainerAltWhereInput = {
    AND?: Enumerable<TrainerAltWhereInput>
    OR?: Enumerable<TrainerAltWhereInput>
    NOT?: Enumerable<TrainerAltWhereInput>
    id?: IntFilter | number
    trainer?: XOR<TrainerRelationFilter, TrainerWhereInput>
    trainer_id?: IntFilter | number
    alt_trainer_name?: StringFilter | string
    alt_trainer_code?: StringFilter | string
    order?: IntNullableFilter | number | null
  }

  export type TrainerAltOrderByWithRelationInput = {
    id?: SortOrder
    trainer?: TrainerOrderByWithRelationInput
    trainer_id?: SortOrder
    alt_trainer_name?: SortOrder
    alt_trainer_code?: SortOrder
    order?: SortOrder
  }

  export type TrainerAltWhereUniqueInput = {
    id?: number
    alt_trainer_name?: string
    alt_trainer_code?: string
  }

  export type TrainerAltOrderByWithAggregationInput = {
    id?: SortOrder
    trainer_id?: SortOrder
    alt_trainer_name?: SortOrder
    alt_trainer_code?: SortOrder
    order?: SortOrder
    _count?: TrainerAltCountOrderByAggregateInput
    _avg?: TrainerAltAvgOrderByAggregateInput
    _max?: TrainerAltMaxOrderByAggregateInput
    _min?: TrainerAltMinOrderByAggregateInput
    _sum?: TrainerAltSumOrderByAggregateInput
  }

  export type TrainerAltScalarWhereWithAggregatesInput = {
    AND?: Enumerable<TrainerAltScalarWhereWithAggregatesInput>
    OR?: Enumerable<TrainerAltScalarWhereWithAggregatesInput>
    NOT?: Enumerable<TrainerAltScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    trainer_id?: IntWithAggregatesFilter | number
    alt_trainer_name?: StringWithAggregatesFilter | string
    alt_trainer_code?: StringWithAggregatesFilter | string
    order?: IntNullableWithAggregatesFilter | number | null
  }

  export type SyncHistoryWhereInput = {
    AND?: Enumerable<SyncHistoryWhereInput>
    OR?: Enumerable<SyncHistoryWhereInput>
    NOT?: Enumerable<SyncHistoryWhereInput>
    id?: IntFilter | number
    total_rows_imported?: IntFilter | number
    total_rows_deleted?: IntFilter | number
    total_row_created?: IntFilter | number
    created_at?: DateTimeFilter | Date | string
    source?: StringNullableFilter | string | null
  }

  export type SyncHistoryOrderByWithRelationInput = {
    id?: SortOrder
    total_rows_imported?: SortOrder
    total_rows_deleted?: SortOrder
    total_row_created?: SortOrder
    created_at?: SortOrder
    source?: SortOrder
  }

  export type SyncHistoryWhereUniqueInput = {
    id?: number
  }

  export type SyncHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    total_rows_imported?: SortOrder
    total_rows_deleted?: SortOrder
    total_row_created?: SortOrder
    created_at?: SortOrder
    source?: SortOrder
    _count?: SyncHistoryCountOrderByAggregateInput
    _avg?: SyncHistoryAvgOrderByAggregateInput
    _max?: SyncHistoryMaxOrderByAggregateInput
    _min?: SyncHistoryMinOrderByAggregateInput
    _sum?: SyncHistorySumOrderByAggregateInput
  }

  export type SyncHistoryScalarWhereWithAggregatesInput = {
    AND?: Enumerable<SyncHistoryScalarWhereWithAggregatesInput>
    OR?: Enumerable<SyncHistoryScalarWhereWithAggregatesInput>
    NOT?: Enumerable<SyncHistoryScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    total_rows_imported?: IntWithAggregatesFilter | number
    total_rows_deleted?: IntWithAggregatesFilter | number
    total_row_created?: IntWithAggregatesFilter | number
    created_at?: DateTimeWithAggregatesFilter | Date | string
    source?: StringNullableWithAggregatesFilter | string | null
  }

  export type LogCreateInput = {
    level: Level
    message: string
    meta: JsonNullValueInput | InputJsonValue
    log_type: LogType
    created_at?: Date | string
    request_id?: string | null
  }

  export type LogUncheckedCreateInput = {
    id?: number
    level: Level
    message: string
    meta: JsonNullValueInput | InputJsonValue
    log_type: LogType
    created_at?: Date | string
    request_id?: string | null
  }

  export type LogUpdateInput = {
    level?: EnumLevelFieldUpdateOperationsInput | Level
    message?: StringFieldUpdateOperationsInput | string
    meta?: JsonNullValueInput | InputJsonValue
    log_type?: EnumLogTypeFieldUpdateOperationsInput | LogType
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    request_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LogUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    level?: EnumLevelFieldUpdateOperationsInput | Level
    message?: StringFieldUpdateOperationsInput | string
    meta?: JsonNullValueInput | InputJsonValue
    log_type?: EnumLogTypeFieldUpdateOperationsInput | LogType
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    request_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LogCreateManyInput = {
    id?: number
    level: Level
    message: string
    meta: JsonNullValueInput | InputJsonValue
    log_type: LogType
    created_at?: Date | string
    request_id?: string | null
  }

  export type LogUpdateManyMutationInput = {
    level?: EnumLevelFieldUpdateOperationsInput | Level
    message?: StringFieldUpdateOperationsInput | string
    meta?: JsonNullValueInput | InputJsonValue
    log_type?: EnumLogTypeFieldUpdateOperationsInput | LogType
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    request_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LogUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    level?: EnumLevelFieldUpdateOperationsInput | Level
    message?: StringFieldUpdateOperationsInput | string
    meta?: JsonNullValueInput | InputJsonValue
    log_type?: EnumLogTypeFieldUpdateOperationsInput | LogType
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    request_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProfileCreateInput = {
    username: string
    avatar?: string | null
    created_at?: Date | string
    updated_at?: Date | string | null
    display_name?: string | null
    global_name?: string | null
    locale?: string | null
    avatar_decoration?: string | null
    trainer: TrainerCreateNestedOneWithoutProfileInput
    user_id: string
  }

  export type ProfileUncheckedCreateInput = {
    id?: number
    username: string
    avatar?: string | null
    created_at?: Date | string
    updated_at?: Date | string | null
    display_name?: string | null
    global_name?: string | null
    locale?: string | null
    avatar_decoration?: string | null
    trainer_id: number
    user_id: string
  }

  export type ProfileUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    display_name?: NullableStringFieldUpdateOperationsInput | string | null
    global_name?: NullableStringFieldUpdateOperationsInput | string | null
    locale?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_decoration?: NullableStringFieldUpdateOperationsInput | string | null
    trainer?: TrainerUpdateOneRequiredWithoutProfileNestedInput
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type ProfileUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    display_name?: NullableStringFieldUpdateOperationsInput | string | null
    global_name?: NullableStringFieldUpdateOperationsInput | string | null
    locale?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_decoration?: NullableStringFieldUpdateOperationsInput | string | null
    trainer_id?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type ProfileCreateManyInput = {
    id?: number
    username: string
    avatar?: string | null
    created_at?: Date | string
    updated_at?: Date | string | null
    display_name?: string | null
    global_name?: string | null
    locale?: string | null
    avatar_decoration?: string | null
    trainer_id: number
    user_id: string
  }

  export type ProfileUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    display_name?: NullableStringFieldUpdateOperationsInput | string | null
    global_name?: NullableStringFieldUpdateOperationsInput | string | null
    locale?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_decoration?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type ProfileUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    display_name?: NullableStringFieldUpdateOperationsInput | string | null
    global_name?: NullableStringFieldUpdateOperationsInput | string | null
    locale?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_decoration?: NullableStringFieldUpdateOperationsInput | string | null
    trainer_id?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type TrainerCreateInput = {
    username: string
    trainer_name: string
    trainer_code: string
    created_at?: Date | string
    alts?: TrainerAltCreateNestedManyWithoutTrainerInput
    source?: string | null
    profile?: ProfileCreateNestedOneWithoutTrainerInput
  }

  export type TrainerUncheckedCreateInput = {
    id?: number
    username: string
    trainer_name: string
    trainer_code: string
    created_at?: Date | string
    alts?: TrainerAltUncheckedCreateNestedManyWithoutTrainerInput
    source?: string | null
    profile?: ProfileUncheckedCreateNestedOneWithoutTrainerInput
  }

  export type TrainerUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    trainer_name?: StringFieldUpdateOperationsInput | string
    trainer_code?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    alts?: TrainerAltUpdateManyWithoutTrainerNestedInput
    source?: NullableStringFieldUpdateOperationsInput | string | null
    profile?: ProfileUpdateOneWithoutTrainerNestedInput
  }

  export type TrainerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    trainer_name?: StringFieldUpdateOperationsInput | string
    trainer_code?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    alts?: TrainerAltUncheckedUpdateManyWithoutTrainerNestedInput
    source?: NullableStringFieldUpdateOperationsInput | string | null
    profile?: ProfileUncheckedUpdateOneWithoutTrainerNestedInput
  }

  export type TrainerCreateManyInput = {
    id?: number
    username: string
    trainer_name: string
    trainer_code: string
    created_at?: Date | string
    source?: string | null
  }

  export type TrainerUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    trainer_name?: StringFieldUpdateOperationsInput | string
    trainer_code?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    source?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TrainerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    trainer_name?: StringFieldUpdateOperationsInput | string
    trainer_code?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    source?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TrainerAltCreateInput = {
    trainer: TrainerCreateNestedOneWithoutAltsInput
    alt_trainer_name: string
    alt_trainer_code: string
    order?: number | null
  }

  export type TrainerAltUncheckedCreateInput = {
    id?: number
    trainer_id: number
    alt_trainer_name: string
    alt_trainer_code: string
    order?: number | null
  }

  export type TrainerAltUpdateInput = {
    trainer?: TrainerUpdateOneRequiredWithoutAltsNestedInput
    alt_trainer_name?: StringFieldUpdateOperationsInput | string
    alt_trainer_code?: StringFieldUpdateOperationsInput | string
    order?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TrainerAltUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    trainer_id?: IntFieldUpdateOperationsInput | number
    alt_trainer_name?: StringFieldUpdateOperationsInput | string
    alt_trainer_code?: StringFieldUpdateOperationsInput | string
    order?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TrainerAltCreateManyInput = {
    id?: number
    trainer_id: number
    alt_trainer_name: string
    alt_trainer_code: string
    order?: number | null
  }

  export type TrainerAltUpdateManyMutationInput = {
    alt_trainer_name?: StringFieldUpdateOperationsInput | string
    alt_trainer_code?: StringFieldUpdateOperationsInput | string
    order?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TrainerAltUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    trainer_id?: IntFieldUpdateOperationsInput | number
    alt_trainer_name?: StringFieldUpdateOperationsInput | string
    alt_trainer_code?: StringFieldUpdateOperationsInput | string
    order?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type SyncHistoryCreateInput = {
    total_rows_imported: number
    total_rows_deleted: number
    total_row_created: number
    created_at?: Date | string
    source?: string | null
  }

  export type SyncHistoryUncheckedCreateInput = {
    id?: number
    total_rows_imported: number
    total_rows_deleted: number
    total_row_created: number
    created_at?: Date | string
    source?: string | null
  }

  export type SyncHistoryUpdateInput = {
    total_rows_imported?: IntFieldUpdateOperationsInput | number
    total_rows_deleted?: IntFieldUpdateOperationsInput | number
    total_row_created?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    source?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SyncHistoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    total_rows_imported?: IntFieldUpdateOperationsInput | number
    total_rows_deleted?: IntFieldUpdateOperationsInput | number
    total_row_created?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    source?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SyncHistoryCreateManyInput = {
    id?: number
    total_rows_imported: number
    total_rows_deleted: number
    total_row_created: number
    created_at?: Date | string
    source?: string | null
  }

  export type SyncHistoryUpdateManyMutationInput = {
    total_rows_imported?: IntFieldUpdateOperationsInput | number
    total_rows_deleted?: IntFieldUpdateOperationsInput | number
    total_row_created?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    source?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SyncHistoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    total_rows_imported?: IntFieldUpdateOperationsInput | number
    total_rows_deleted?: IntFieldUpdateOperationsInput | number
    total_row_created?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    source?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type EnumLevelFilter = {
    equals?: Level
    in?: Enumerable<Level>
    notIn?: Enumerable<Level>
    not?: NestedEnumLevelFilter | Level
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }
  export type JsonFilter = 
    | PatchUndefined<
        Either<Required<JsonFilterBase>, Exclude<keyof Required<JsonFilterBase>, 'path'>>,
        Required<JsonFilterBase>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase>, 'path'>>

  export type JsonFilterBase = {
    equals?: InputJsonValue | JsonNullValueFilter
    path?: string[]
    string_contains?: string
    string_starts_with?: string
    string_ends_with?: string
    array_contains?: InputJsonValue | null
    array_starts_with?: InputJsonValue | null
    array_ends_with?: InputJsonValue | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonNullValueFilter
  }

  export type EnumLogTypeFilter = {
    equals?: LogType
    in?: Enumerable<LogType>
    notIn?: Enumerable<LogType>
    not?: NestedEnumLogTypeFilter | LogType
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableFilter | string | null
  }

  export type LogCountOrderByAggregateInput = {
    id?: SortOrder
    level?: SortOrder
    message?: SortOrder
    meta?: SortOrder
    log_type?: SortOrder
    created_at?: SortOrder
    request_id?: SortOrder
  }

  export type LogAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type LogMaxOrderByAggregateInput = {
    id?: SortOrder
    level?: SortOrder
    message?: SortOrder
    log_type?: SortOrder
    created_at?: SortOrder
    request_id?: SortOrder
  }

  export type LogMinOrderByAggregateInput = {
    id?: SortOrder
    level?: SortOrder
    message?: SortOrder
    log_type?: SortOrder
    created_at?: SortOrder
    request_id?: SortOrder
  }

  export type LogSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type EnumLevelWithAggregatesFilter = {
    equals?: Level
    in?: Enumerable<Level>
    notIn?: Enumerable<Level>
    not?: NestedEnumLevelWithAggregatesFilter | Level
    _count?: NestedIntFilter
    _min?: NestedEnumLevelFilter
    _max?: NestedEnumLevelFilter
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }
  export type JsonWithAggregatesFilter = 
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase>, Exclude<keyof Required<JsonWithAggregatesFilterBase>, 'path'>>,
        Required<JsonWithAggregatesFilterBase>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase>, 'path'>>

  export type JsonWithAggregatesFilterBase = {
    equals?: InputJsonValue | JsonNullValueFilter
    path?: string[]
    string_contains?: string
    string_starts_with?: string
    string_ends_with?: string
    array_contains?: InputJsonValue | null
    array_starts_with?: InputJsonValue | null
    array_ends_with?: InputJsonValue | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonNullValueFilter
    _count?: NestedIntFilter
    _min?: NestedJsonFilter
    _max?: NestedJsonFilter
  }

  export type EnumLogTypeWithAggregatesFilter = {
    equals?: LogType
    in?: Enumerable<LogType>
    notIn?: Enumerable<LogType>
    not?: NestedEnumLogTypeWithAggregatesFilter | LogType
    _count?: NestedIntFilter
    _min?: NestedEnumLogTypeFilter
    _max?: NestedEnumLogTypeFilter
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type DateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type TrainerRelationFilter = {
    is?: TrainerWhereInput
    isNot?: TrainerWhereInput
  }

  export type ProfileCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    avatar?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    display_name?: SortOrder
    global_name?: SortOrder
    locale?: SortOrder
    avatar_decoration?: SortOrder
    trainer_id?: SortOrder
    user_id?: SortOrder
  }

  export type ProfileAvgOrderByAggregateInput = {
    id?: SortOrder
    trainer_id?: SortOrder
  }

  export type ProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    avatar?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    display_name?: SortOrder
    global_name?: SortOrder
    locale?: SortOrder
    avatar_decoration?: SortOrder
    trainer_id?: SortOrder
    user_id?: SortOrder
  }

  export type ProfileMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    avatar?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    display_name?: SortOrder
    global_name?: SortOrder
    locale?: SortOrder
    avatar_decoration?: SortOrder
    trainer_id?: SortOrder
    user_id?: SortOrder
  }

  export type ProfileSumOrderByAggregateInput = {
    id?: SortOrder
    trainer_id?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type TrainerAltListRelationFilter = {
    every?: TrainerAltWhereInput
    some?: TrainerAltWhereInput
    none?: TrainerAltWhereInput
  }

  export type ProfileRelationFilter = {
    is?: ProfileWhereInput | null
    isNot?: ProfileWhereInput | null
  }

  export type TrainerAltOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TrainerCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    trainer_name?: SortOrder
    trainer_code?: SortOrder
    created_at?: SortOrder
    source?: SortOrder
  }

  export type TrainerAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TrainerMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    trainer_name?: SortOrder
    trainer_code?: SortOrder
    created_at?: SortOrder
    source?: SortOrder
  }

  export type TrainerMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    trainer_name?: SortOrder
    trainer_code?: SortOrder
    created_at?: SortOrder
    source?: SortOrder
  }

  export type TrainerSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type TrainerAltCountOrderByAggregateInput = {
    id?: SortOrder
    trainer_id?: SortOrder
    alt_trainer_name?: SortOrder
    alt_trainer_code?: SortOrder
    order?: SortOrder
  }

  export type TrainerAltAvgOrderByAggregateInput = {
    id?: SortOrder
    trainer_id?: SortOrder
    order?: SortOrder
  }

  export type TrainerAltMaxOrderByAggregateInput = {
    id?: SortOrder
    trainer_id?: SortOrder
    alt_trainer_name?: SortOrder
    alt_trainer_code?: SortOrder
    order?: SortOrder
  }

  export type TrainerAltMinOrderByAggregateInput = {
    id?: SortOrder
    trainer_id?: SortOrder
    alt_trainer_name?: SortOrder
    alt_trainer_code?: SortOrder
    order?: SortOrder
  }

  export type TrainerAltSumOrderByAggregateInput = {
    id?: SortOrder
    trainer_id?: SortOrder
    order?: SortOrder
  }

  export type IntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type SyncHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    total_rows_imported?: SortOrder
    total_rows_deleted?: SortOrder
    total_row_created?: SortOrder
    created_at?: SortOrder
    source?: SortOrder
  }

  export type SyncHistoryAvgOrderByAggregateInput = {
    id?: SortOrder
    total_rows_imported?: SortOrder
    total_rows_deleted?: SortOrder
    total_row_created?: SortOrder
  }

  export type SyncHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    total_rows_imported?: SortOrder
    total_rows_deleted?: SortOrder
    total_row_created?: SortOrder
    created_at?: SortOrder
    source?: SortOrder
  }

  export type SyncHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    total_rows_imported?: SortOrder
    total_rows_deleted?: SortOrder
    total_row_created?: SortOrder
    created_at?: SortOrder
    source?: SortOrder
  }

  export type SyncHistorySumOrderByAggregateInput = {
    id?: SortOrder
    total_rows_imported?: SortOrder
    total_rows_deleted?: SortOrder
    total_row_created?: SortOrder
  }

  export type EnumLevelFieldUpdateOperationsInput = {
    set?: Level
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumLogTypeFieldUpdateOperationsInput = {
    set?: LogType
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TrainerCreateNestedOneWithoutProfileInput = {
    create?: XOR<TrainerCreateWithoutProfileInput, TrainerUncheckedCreateWithoutProfileInput>
    connectOrCreate?: TrainerCreateOrConnectWithoutProfileInput
    connect?: TrainerWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type TrainerUpdateOneRequiredWithoutProfileNestedInput = {
    create?: XOR<TrainerCreateWithoutProfileInput, TrainerUncheckedCreateWithoutProfileInput>
    connectOrCreate?: TrainerCreateOrConnectWithoutProfileInput
    upsert?: TrainerUpsertWithoutProfileInput
    connect?: TrainerWhereUniqueInput
    update?: XOR<TrainerUpdateWithoutProfileInput, TrainerUncheckedUpdateWithoutProfileInput>
  }

  export type TrainerAltCreateNestedManyWithoutTrainerInput = {
    create?: XOR<Enumerable<TrainerAltCreateWithoutTrainerInput>, Enumerable<TrainerAltUncheckedCreateWithoutTrainerInput>>
    connectOrCreate?: Enumerable<TrainerAltCreateOrConnectWithoutTrainerInput>
    createMany?: TrainerAltCreateManyTrainerInputEnvelope
    connect?: Enumerable<TrainerAltWhereUniqueInput>
  }

  export type ProfileCreateNestedOneWithoutTrainerInput = {
    create?: XOR<ProfileCreateWithoutTrainerInput, ProfileUncheckedCreateWithoutTrainerInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutTrainerInput
    connect?: ProfileWhereUniqueInput
  }

  export type TrainerAltUncheckedCreateNestedManyWithoutTrainerInput = {
    create?: XOR<Enumerable<TrainerAltCreateWithoutTrainerInput>, Enumerable<TrainerAltUncheckedCreateWithoutTrainerInput>>
    connectOrCreate?: Enumerable<TrainerAltCreateOrConnectWithoutTrainerInput>
    createMany?: TrainerAltCreateManyTrainerInputEnvelope
    connect?: Enumerable<TrainerAltWhereUniqueInput>
  }

  export type ProfileUncheckedCreateNestedOneWithoutTrainerInput = {
    create?: XOR<ProfileCreateWithoutTrainerInput, ProfileUncheckedCreateWithoutTrainerInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutTrainerInput
    connect?: ProfileWhereUniqueInput
  }

  export type TrainerAltUpdateManyWithoutTrainerNestedInput = {
    create?: XOR<Enumerable<TrainerAltCreateWithoutTrainerInput>, Enumerable<TrainerAltUncheckedCreateWithoutTrainerInput>>
    connectOrCreate?: Enumerable<TrainerAltCreateOrConnectWithoutTrainerInput>
    upsert?: Enumerable<TrainerAltUpsertWithWhereUniqueWithoutTrainerInput>
    createMany?: TrainerAltCreateManyTrainerInputEnvelope
    set?: Enumerable<TrainerAltWhereUniqueInput>
    disconnect?: Enumerable<TrainerAltWhereUniqueInput>
    delete?: Enumerable<TrainerAltWhereUniqueInput>
    connect?: Enumerable<TrainerAltWhereUniqueInput>
    update?: Enumerable<TrainerAltUpdateWithWhereUniqueWithoutTrainerInput>
    updateMany?: Enumerable<TrainerAltUpdateManyWithWhereWithoutTrainerInput>
    deleteMany?: Enumerable<TrainerAltScalarWhereInput>
  }

  export type ProfileUpdateOneWithoutTrainerNestedInput = {
    create?: XOR<ProfileCreateWithoutTrainerInput, ProfileUncheckedCreateWithoutTrainerInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutTrainerInput
    upsert?: ProfileUpsertWithoutTrainerInput
    disconnect?: boolean
    delete?: boolean
    connect?: ProfileWhereUniqueInput
    update?: XOR<ProfileUpdateWithoutTrainerInput, ProfileUncheckedUpdateWithoutTrainerInput>
  }

  export type TrainerAltUncheckedUpdateManyWithoutTrainerNestedInput = {
    create?: XOR<Enumerable<TrainerAltCreateWithoutTrainerInput>, Enumerable<TrainerAltUncheckedCreateWithoutTrainerInput>>
    connectOrCreate?: Enumerable<TrainerAltCreateOrConnectWithoutTrainerInput>
    upsert?: Enumerable<TrainerAltUpsertWithWhereUniqueWithoutTrainerInput>
    createMany?: TrainerAltCreateManyTrainerInputEnvelope
    set?: Enumerable<TrainerAltWhereUniqueInput>
    disconnect?: Enumerable<TrainerAltWhereUniqueInput>
    delete?: Enumerable<TrainerAltWhereUniqueInput>
    connect?: Enumerable<TrainerAltWhereUniqueInput>
    update?: Enumerable<TrainerAltUpdateWithWhereUniqueWithoutTrainerInput>
    updateMany?: Enumerable<TrainerAltUpdateManyWithWhereWithoutTrainerInput>
    deleteMany?: Enumerable<TrainerAltScalarWhereInput>
  }

  export type ProfileUncheckedUpdateOneWithoutTrainerNestedInput = {
    create?: XOR<ProfileCreateWithoutTrainerInput, ProfileUncheckedCreateWithoutTrainerInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutTrainerInput
    upsert?: ProfileUpsertWithoutTrainerInput
    disconnect?: boolean
    delete?: boolean
    connect?: ProfileWhereUniqueInput
    update?: XOR<ProfileUpdateWithoutTrainerInput, ProfileUncheckedUpdateWithoutTrainerInput>
  }

  export type TrainerCreateNestedOneWithoutAltsInput = {
    create?: XOR<TrainerCreateWithoutAltsInput, TrainerUncheckedCreateWithoutAltsInput>
    connectOrCreate?: TrainerCreateOrConnectWithoutAltsInput
    connect?: TrainerWhereUniqueInput
  }

  export type TrainerUpdateOneRequiredWithoutAltsNestedInput = {
    create?: XOR<TrainerCreateWithoutAltsInput, TrainerUncheckedCreateWithoutAltsInput>
    connectOrCreate?: TrainerCreateOrConnectWithoutAltsInput
    upsert?: TrainerUpsertWithoutAltsInput
    connect?: TrainerWhereUniqueInput
    update?: XOR<TrainerUpdateWithoutAltsInput, TrainerUncheckedUpdateWithoutAltsInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedEnumLevelFilter = {
    equals?: Level
    in?: Enumerable<Level>
    notIn?: Enumerable<Level>
    not?: NestedEnumLevelFilter | Level
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedEnumLogTypeFilter = {
    equals?: LogType
    in?: Enumerable<LogType>
    notIn?: Enumerable<LogType>
    not?: NestedEnumLogTypeFilter | LogType
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedEnumLevelWithAggregatesFilter = {
    equals?: Level
    in?: Enumerable<Level>
    notIn?: Enumerable<Level>
    not?: NestedEnumLevelWithAggregatesFilter | Level
    _count?: NestedIntFilter
    _min?: NestedEnumLevelFilter
    _max?: NestedEnumLevelFilter
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }
  export type NestedJsonFilter = 
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase>, Exclude<keyof Required<NestedJsonFilterBase>, 'path'>>,
        Required<NestedJsonFilterBase>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase>, 'path'>>

  export type NestedJsonFilterBase = {
    equals?: InputJsonValue | JsonNullValueFilter
    path?: string[]
    string_contains?: string
    string_starts_with?: string
    string_ends_with?: string
    array_contains?: InputJsonValue | null
    array_starts_with?: InputJsonValue | null
    array_ends_with?: InputJsonValue | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonNullValueFilter
  }

  export type NestedEnumLogTypeWithAggregatesFilter = {
    equals?: LogType
    in?: Enumerable<LogType>
    notIn?: Enumerable<LogType>
    not?: NestedEnumLogTypeWithAggregatesFilter | LogType
    _count?: NestedIntFilter
    _min?: NestedEnumLogTypeFilter
    _max?: NestedEnumLogTypeFilter
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedDateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type NestedIntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type NestedFloatNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableFilter | number | null
  }

  export type TrainerCreateWithoutProfileInput = {
    username: string
    trainer_name: string
    trainer_code: string
    created_at?: Date | string
    alts?: TrainerAltCreateNestedManyWithoutTrainerInput
    source?: string | null
  }

  export type TrainerUncheckedCreateWithoutProfileInput = {
    id?: number
    username: string
    trainer_name: string
    trainer_code: string
    created_at?: Date | string
    alts?: TrainerAltUncheckedCreateNestedManyWithoutTrainerInput
    source?: string | null
  }

  export type TrainerCreateOrConnectWithoutProfileInput = {
    where: TrainerWhereUniqueInput
    create: XOR<TrainerCreateWithoutProfileInput, TrainerUncheckedCreateWithoutProfileInput>
  }

  export type TrainerUpsertWithoutProfileInput = {
    update: XOR<TrainerUpdateWithoutProfileInput, TrainerUncheckedUpdateWithoutProfileInput>
    create: XOR<TrainerCreateWithoutProfileInput, TrainerUncheckedCreateWithoutProfileInput>
  }

  export type TrainerUpdateWithoutProfileInput = {
    username?: StringFieldUpdateOperationsInput | string
    trainer_name?: StringFieldUpdateOperationsInput | string
    trainer_code?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    alts?: TrainerAltUpdateManyWithoutTrainerNestedInput
    source?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TrainerUncheckedUpdateWithoutProfileInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    trainer_name?: StringFieldUpdateOperationsInput | string
    trainer_code?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    alts?: TrainerAltUncheckedUpdateManyWithoutTrainerNestedInput
    source?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TrainerAltCreateWithoutTrainerInput = {
    alt_trainer_name: string
    alt_trainer_code: string
    order?: number | null
  }

  export type TrainerAltUncheckedCreateWithoutTrainerInput = {
    id?: number
    alt_trainer_name: string
    alt_trainer_code: string
    order?: number | null
  }

  export type TrainerAltCreateOrConnectWithoutTrainerInput = {
    where: TrainerAltWhereUniqueInput
    create: XOR<TrainerAltCreateWithoutTrainerInput, TrainerAltUncheckedCreateWithoutTrainerInput>
  }

  export type TrainerAltCreateManyTrainerInputEnvelope = {
    data: Enumerable<TrainerAltCreateManyTrainerInput>
    skipDuplicates?: boolean
  }

  export type ProfileCreateWithoutTrainerInput = {
    username: string
    avatar?: string | null
    created_at?: Date | string
    updated_at?: Date | string | null
    display_name?: string | null
    global_name?: string | null
    locale?: string | null
    avatar_decoration?: string | null
    user_id: string
  }

  export type ProfileUncheckedCreateWithoutTrainerInput = {
    id?: number
    username: string
    avatar?: string | null
    created_at?: Date | string
    updated_at?: Date | string | null
    display_name?: string | null
    global_name?: string | null
    locale?: string | null
    avatar_decoration?: string | null
    user_id: string
  }

  export type ProfileCreateOrConnectWithoutTrainerInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutTrainerInput, ProfileUncheckedCreateWithoutTrainerInput>
  }

  export type TrainerAltUpsertWithWhereUniqueWithoutTrainerInput = {
    where: TrainerAltWhereUniqueInput
    update: XOR<TrainerAltUpdateWithoutTrainerInput, TrainerAltUncheckedUpdateWithoutTrainerInput>
    create: XOR<TrainerAltCreateWithoutTrainerInput, TrainerAltUncheckedCreateWithoutTrainerInput>
  }

  export type TrainerAltUpdateWithWhereUniqueWithoutTrainerInput = {
    where: TrainerAltWhereUniqueInput
    data: XOR<TrainerAltUpdateWithoutTrainerInput, TrainerAltUncheckedUpdateWithoutTrainerInput>
  }

  export type TrainerAltUpdateManyWithWhereWithoutTrainerInput = {
    where: TrainerAltScalarWhereInput
    data: XOR<TrainerAltUpdateManyMutationInput, TrainerAltUncheckedUpdateManyWithoutAltsInput>
  }

  export type TrainerAltScalarWhereInput = {
    AND?: Enumerable<TrainerAltScalarWhereInput>
    OR?: Enumerable<TrainerAltScalarWhereInput>
    NOT?: Enumerable<TrainerAltScalarWhereInput>
    id?: IntFilter | number
    trainer_id?: IntFilter | number
    alt_trainer_name?: StringFilter | string
    alt_trainer_code?: StringFilter | string
    order?: IntNullableFilter | number | null
  }

  export type ProfileUpsertWithoutTrainerInput = {
    update: XOR<ProfileUpdateWithoutTrainerInput, ProfileUncheckedUpdateWithoutTrainerInput>
    create: XOR<ProfileCreateWithoutTrainerInput, ProfileUncheckedCreateWithoutTrainerInput>
  }

  export type ProfileUpdateWithoutTrainerInput = {
    username?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    display_name?: NullableStringFieldUpdateOperationsInput | string | null
    global_name?: NullableStringFieldUpdateOperationsInput | string | null
    locale?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_decoration?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type ProfileUncheckedUpdateWithoutTrainerInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    display_name?: NullableStringFieldUpdateOperationsInput | string | null
    global_name?: NullableStringFieldUpdateOperationsInput | string | null
    locale?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_decoration?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type TrainerCreateWithoutAltsInput = {
    username: string
    trainer_name: string
    trainer_code: string
    created_at?: Date | string
    source?: string | null
    profile?: ProfileCreateNestedOneWithoutTrainerInput
  }

  export type TrainerUncheckedCreateWithoutAltsInput = {
    id?: number
    username: string
    trainer_name: string
    trainer_code: string
    created_at?: Date | string
    source?: string | null
    profile?: ProfileUncheckedCreateNestedOneWithoutTrainerInput
  }

  export type TrainerCreateOrConnectWithoutAltsInput = {
    where: TrainerWhereUniqueInput
    create: XOR<TrainerCreateWithoutAltsInput, TrainerUncheckedCreateWithoutAltsInput>
  }

  export type TrainerUpsertWithoutAltsInput = {
    update: XOR<TrainerUpdateWithoutAltsInput, TrainerUncheckedUpdateWithoutAltsInput>
    create: XOR<TrainerCreateWithoutAltsInput, TrainerUncheckedCreateWithoutAltsInput>
  }

  export type TrainerUpdateWithoutAltsInput = {
    username?: StringFieldUpdateOperationsInput | string
    trainer_name?: StringFieldUpdateOperationsInput | string
    trainer_code?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    source?: NullableStringFieldUpdateOperationsInput | string | null
    profile?: ProfileUpdateOneWithoutTrainerNestedInput
  }

  export type TrainerUncheckedUpdateWithoutAltsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    trainer_name?: StringFieldUpdateOperationsInput | string
    trainer_code?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    source?: NullableStringFieldUpdateOperationsInput | string | null
    profile?: ProfileUncheckedUpdateOneWithoutTrainerNestedInput
  }

  export type TrainerAltCreateManyTrainerInput = {
    id?: number
    alt_trainer_name: string
    alt_trainer_code: string
    order?: number | null
  }

  export type TrainerAltUpdateWithoutTrainerInput = {
    alt_trainer_name?: StringFieldUpdateOperationsInput | string
    alt_trainer_code?: StringFieldUpdateOperationsInput | string
    order?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TrainerAltUncheckedUpdateWithoutTrainerInput = {
    id?: IntFieldUpdateOperationsInput | number
    alt_trainer_name?: StringFieldUpdateOperationsInput | string
    alt_trainer_code?: StringFieldUpdateOperationsInput | string
    order?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TrainerAltUncheckedUpdateManyWithoutAltsInput = {
    id?: IntFieldUpdateOperationsInput | number
    alt_trainer_name?: StringFieldUpdateOperationsInput | string
    alt_trainer_code?: StringFieldUpdateOperationsInput | string
    order?: NullableIntFieldUpdateOperationsInput | number | null
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