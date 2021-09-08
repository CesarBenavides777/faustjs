import type { RequiredSchema } from '@faustjs/react';
import type { NextClientHooks, UseClient } from '.';

export function create<
  Schema extends RequiredSchema,
  ObjectTypesNames extends string = never,
  ObjectTypes extends {
    [P in ObjectTypesNames]: {
      __typename: P | undefined;
    };
  } = never,
>(
  useClient: UseClient<Schema, ObjectTypesNames, ObjectTypes>,
): NextClientHooks<Schema>['useTransactionQuery'] {
  return (fn, ...args) => {
    return useClient().useTransactionQuery(fn, ...args);
  };
}