# spapi-get-usage-count

Lightweight helper to determine whether a given SP-API GET operation should have usage computed and to map GET operation names to their URL paths.

- Source: [src/index.ts](src/index.ts)
- Enum / mapping: [src/state.ts](src/state.ts)

## Install

```sh
pnpm add spapi-get-usage-count
```

## Usage

To use the functions `checkIsNeedComputeUsageByGetApi` and `transformGetApiOperationToUrlPath` from the `spapi-get-usage-count` package, you can import them as follows:

```typescript
import { checkIsNeedComputeUsageByGetApi, transformGetApiOperationToUrlPath } from 'spapi-get-usage-count';
```

### Example

Here's a basic example of how you might use these functions in your code:

```typescript
const operationName = 'getFeed';
const isComputeUsageNeeded = checkIsNeedComputeUsageByGetApi(operationName);

if (isComputeUsageNeeded) {
  const urlPath = transformGetApiOperationToUrlPath(operationName);
  console.log(`The URL path for the operation is: ${urlPath}`);
} else {
  console.log('No usage computation needed for this operation.');
}
```

## API

### `checkIsNeedComputeUsageByGetApi(operationName: string): boolean`

Determines if usage computation is needed for the given SP-API GET operation.

- `operationName`: The name of the SP-API GET operation.
- Returns `true` if usage computation is needed, `false` otherwise.

### `transformGetApiOperationToUrlPath(operationName: string): string`

Maps the given SP-API GET operation name to its corresponding URL path.

- `operationName`: The name of the SP-API GET operation.
- Returns the URL path as a string.
