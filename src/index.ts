export * from './state';

import { GetApiOperationEnums, getApiUrlPathMap } from './state';

export function checkIsNeedComputeUsageByGetApi(operation: string): boolean {
  if (operation in GetApiOperationEnums) {
    return true;
  } else {
    return false;
  }
}

export function transformGetApiOperationToUrlPath(operation: string): string {
  if (operation in GetApiOperationEnums) {
    return getApiUrlPathMap[operation as GetApiOperationEnums];
  } else {
    return '';
  }
}
