import { expect, test } from 'vitest';
import { checkIsNeedComputeUsageByGetApi, transformGetApiOperationToUrlPath } from '../src/index';

test('checkIsNeedComputeUsageByGetApi', () => {
  expect(checkIsNeedComputeUsageByGetApi('getFeed')).toBe(true);
  expect(checkIsNeedComputeUsageByGetApi('searchListingsItems')).toBe(true);
});

test('transformGetApiOperationToUrlPath', () => {
  expect(transformGetApiOperationToUrlPath('getFeed')).toBe('/feeds/2021-06-30/documents/{feedDocumentId}');
  expect(transformGetApiOperationToUrlPath('searchListingsItems')).toBe('/listings/2021-08-01/items/{sellerId}');
});
