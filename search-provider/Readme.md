# search-provider

A search provider using meili search

- https://docs.meilisearch.com/
- https://www.meilisearch.com/docs/learn/getting_started/quick_start#setup-and-installation
- https://www.meilisearch.com/docs/learn/configuration/instance_options#disable-analytics
- https://docs.medusajs.com/plugins/search/meilisearch

master key: sauRHKP34MR7CmYIwx1aBe6pUamAySrijIw2IFQ2h3g

```bash
# create an api key for the store front
curl \
  -X POST 'https://search-provider-production.up.railway.app/keys' \
  -H 'Content-Type: application/json' \
  -H 'Authorization: Bearer sauRHKP34MR7CmYIwx1aBe6pUamAySrijIw2IFQ2h3g' \
  --data-binary '{
    "description": "Search products",
    "actions": ["search"],
    "indexes": ["products"],
    "expiresAt": "2044-01-01T00:00:00Z"
  }'
```
