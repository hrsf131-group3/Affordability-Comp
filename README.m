## Server API

### Get mortgage info
  * GET `/api/mortgage/:id`

**Path Parameters:**
  * `id` mortgage id

**Success Status Code:** `200`

**Returns:** JSON

```json
    {
      id: Number,
      Price: Number,
      taxAndAssesment: {
           Year: Date,
           Tax: Number,
           Assesment: Number
      },
      priceHistory: {
           Date: Date,
           Price: Number,
           Event: String
      },
      Neighborhood: {
           Zip: Number 
           InterestRate: Number
      }
 
    }
```

### Add mortgage
  * POST `/api/mortgages`

**Success Status Code:** `201`

**Request Body**: Expects JSON with the following keys.

```json
        {
      id: Number,
      Price: Number,
      taxAndAssesment: {
           Year: Date,
           Tax: Number,
           Assesment: Number
      },
      priceHistory: {
           Date: Date,
           Price: Number,
           Event: String
      },
      Neighborhood: {
           Zip: Number
      }
 
    }
```


### Update mortgage tax and assesment
  * PATCH `/api/mortgage/:id/taxAndAssesment`

**Path Parameters:**
  * `id` mortgage id

**Success Status Code:** `204`

**Request Body**: Expects JSON with any of the following keys (include only keys to be updated)

```json
        {
      id: Number,
      Price: Number,
      taxAndAssesment: {
           Year: Date,
           Tax: Number,
           Assesment: Number
          }
     }


```
 ### Update mortgage price history
 * PATCH `/api/mortgage/:id/priceHistory`
  
 **Path Parameters:**
  * `id` mortgage id

**Success Status Code:** `204`

**Request Body**: Expects JSON with any of the following keys (include only keys to be updated)

```json
        {
      id: Number,
      Price: Number,
      priceHistory: {
           Date: Date,
           Price: Number,
           Event: String
      }
    }

 ### Update mortgage neighborhood
 * PATCH `/api/mortgage/:id/neighborhood`
  
 **Path Parameters:**
  * `id` mortgage id

**Success Status Code:** `204`

**Request Body**: Expects JSON with any of the following keys (include only keys to be updated)

```json
        {
      id: Number,
      Price: Number,
      Neighborhood: {
           Zip: Number
      }
    }

### Delete mortgage
  * DELETE `/api/mortgage/:id`

**Path Parameters:**
  * `id` mortgage id

**Success Status Code:** `204`


```
