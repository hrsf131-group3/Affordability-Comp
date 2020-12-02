## Server API

### Get mortgage info
  * GET `/api/mortgage/:id`

**Path Parameters:**
  * `id` mortgage id

**Success Status Code:** `200`

**Returns:** JSON

```json
    {
      "id": "Number",
      "homePrice": "Number"
    }
```

### Add mortgage
  * POST `/api/mortgages`

**Success Status Code:** `201`

**Request Body**: Expects JSON with the following keys.

```json
    {
      "id": "Number",
      homePrice: "Number"
    }
```


### Update restaurant info
  * PATCH `/api/mortgage/:id`

**Path Parameters:**
  * `id` mortgage id

**Success Status Code:** `204`

**Request Body**: Expects JSON with any of the following keys (include only keys to be updated)

```json
    {
      "homePrice": "Number"
    }
```

### Delete restaurant
  * DELETE `/api/mortgage/:id`

**Path Parameters:**
  * `id` mortgage id

**Success Status Code:** `204`


```
