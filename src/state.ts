// Enumeration of API operations that require computing usage for GET requests
export enum GetApiOperationEnums {
  getCatalogItem = 'getCatalogItem',
  searchCatalogItems = 'searchCatalogItems',

  getFeedDocument = 'getFeedDocument',
  getFeed = 'getFeed',

  listFinancialEventsByOrderId = 'listFinancialEventsByOrderId',

  getListingsItem = 'getListingsItem',
  searchListingsItems = 'searchListingsItems',

  getOrders = 'getOrders',
  getOrder = 'getOrder',
  getOrderAddress = 'getOrderAddress',
  getOrderItems = 'getOrderItems',

  getPricing = 'getPricing',
  // 这个接口目前不计费
  // getItemOffers = 'getItemOffers',

  getReport = 'getReport',
  getReportDocument = 'getReportDocument',

  getMarketplaceParticipations = 'getMarketplaceParticipations',
}

export const getApiUrlPathMap: {
  [key in GetApiOperationEnums]: string;
} = {
  [GetApiOperationEnums.getCatalogItem]: '/catalog/2022-04-01/items',
  [GetApiOperationEnums.searchCatalogItems]: '/catalog/2022-04-01/items',

  [GetApiOperationEnums.getFeedDocument]: '/feeds/2021-06-30/documents/{feedDocumentId}',
  [GetApiOperationEnums.getFeed]: '/feeds/2021-06-30/documents/{feedDocumentId}',

  [GetApiOperationEnums.listFinancialEventsByOrderId]: '/finances/v0/orders/{orderId}/financialEvents',

  [GetApiOperationEnums.getListingsItem]: '/listings/2021-08-01/items/{sellerId}',
  [GetApiOperationEnums.searchListingsItems]: '/listings/2021-08-01/items/{sellerId}',

  [GetApiOperationEnums.getOrders]: '/orders/v0/orders',
  [GetApiOperationEnums.getOrder]: '/orders/v0/orders/{orderId}',
  [GetApiOperationEnums.getOrderAddress]: '/orders/v0/orders/{orderId}/address',
  [GetApiOperationEnums.getOrderItems]: '/orders/v0/orders/{orderId}/orderItems',

  [GetApiOperationEnums.getPricing]: '/products/pricing/v0/price',

  [GetApiOperationEnums.getReport]: '/reports/2021-06-30/reports/{reportId}',
  [GetApiOperationEnums.getReportDocument]: '/reports/2021-06-30/documents/{reportDocumentId}',

  [GetApiOperationEnums.getMarketplaceParticipations]: '/sellers/v1/marketplaceParticipations',
};
