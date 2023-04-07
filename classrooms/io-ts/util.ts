import {getOrElse} from 'fp-ts/lib/Either';
import {pipe} from 'fp-ts/lib/function';
import type * as t from 'io-ts';

export const decode = <T>(codec: t.Type<T, unknown>) => {
  return (value: unknown): T =>
    pipe(
      value,
      codec.decode,
      getOrElse((): T => {
        throw new TypeError('Invalid object');
      }),
    );
};
