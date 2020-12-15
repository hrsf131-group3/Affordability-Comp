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
      "price": "Number",
      "hoa": "Number",
      "insurance": "Number",
      "taxAndAssesment": [{
           "year": "Date",
           "tax": "Number",
           "assesment": "Number"
      }],
      "priceHistory": [{
           "date": "Date",
           "price": "Number",
           "event": "String"
      }],
      "neighborhood": {
           "zip": "Number", 
           "interestRate": "Number"
      }
    }
```

### Add mortgage
  * POST `/api/mortgages`

**Success Status Code:** `201`

**Request Body**: Expects JSON with the following keys.

```json
        {
      "id": "Number",
      "price": "Number",
      "taxAndAssesment": {
           "year": "Date",
           "tax": "Number",
           "assesment": "Number"
      },
      "priceHistory": [{
           "date": "Date",
           "price": "Number",
           "event": "String"
      }],
      "neighborhood": {
           "zip": "Number",
           "interestRate": "Number"
      }
 
    }
```


### Update mortgage tax and assesment
  * PATCH `/api/mortgage/:id/`

**Path Parameters:**
  * `id` mortgage id

**Success Status Code:** `204`

**Request Body**: Expects JSON with any of the following keys (include only keys to be updated)

```json
        {
      "id": "Number",
      "price": "Number",
      "taxAndAssesment": [{
           "year": "Date",
           "tax": "Number",
           "assesment": "Number"
      }],
      "priceHistory": [{
           "date": "Date",
           "price": "Number",
           "event": "String"
      }],
      "neighborhood": {
           "zip": "Number",
           "interestRate": "Number"
      }
 
    }
```

### Delete mortgage
  * DELETE `/api/mortgage/:id`

**Path Parameters:**
  * `id` mortgage id

**Success Status Code:** `204`