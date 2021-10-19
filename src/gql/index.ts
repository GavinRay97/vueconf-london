/* eslint-disable */
import * as graphql from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

const documents = {
    "\n  subscription AllUsersSubscription {\n    user {\n      id\n      email\n    }\n  }\n": graphql.AllUsersSubscriptionDocument,
    "\n  query AllUsers {\n    user {\n      id\n      email\n    }\n  }\n": graphql.AllUsersDocument,
};

export function gql(source: "\n  subscription AllUsersSubscription {\n    user {\n      id\n      email\n    }\n  }\n"): (typeof documents)["\n  subscription AllUsersSubscription {\n    user {\n      id\n      email\n    }\n  }\n"];
export function gql(source: "\n  query AllUsers {\n    user {\n      id\n      email\n    }\n  }\n"): (typeof documents)["\n  query AllUsers {\n    user {\n      id\n      email\n    }\n  }\n"];

export function gql(source: string): unknown;
export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;