---
title: Some App Service v1.0.0
language_tabs:
  - javascript: JavaScript
  - javascript--nodejs: Node.JS
  - python: Python
  - go: Go
  - http: HTTP
  - ruby: Ruby
language_clients:
  - javascript: ""
  - javascript--nodejs: ""
  - python: ""
  - go: ""
  - http: ""
  - ruby: ""
toc_footers: []
includes: []
search: true
highlight_theme: darkula
headingLevel: 2

---

<!-- Generator: Widdershins v4.0.1 -->

<h1 id="some-app-service">Some App Service v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Basic description of service resources.

Base URLs:

* <a href="http://localhost:8080">http://localhost:8080</a>

* <a href="https://alpha.com">https://alpha.com</a>

* <a href="https://bravo.com">https://bravo.com</a>

* <a href="https://charlie.com">https://charlie.com</a>

* <a href="https://delta.com">https://delta.com</a>

<a href="http://website.io/terms/">Terms of service</a>
Email: <a href="mailto:open-source@joewingard.com">Joe Wingard</a> Web: <a href="https://github.com/sudowing/service-engine">Joe Wingard</a> 

<h1 id="some-app-service-cmsliveserviceperformance">CmsLiveServicePerformance</h1>

## search cms_live_service_performance

<a id="opIdsearchCmsLiveServicePerformance"></a>

> Code samples

```javascript

const headers = {
  'Accept':'application/json',
  'x-get-count':'string',
  'x-get-sql':'string'
};

fetch('http://localhost:8080/service-engine-app/service/cms_live_service_performance',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```javascript--nodejs
const fetch = require('node-fetch');

const headers = {
  'Accept':'application/json',
  'x-get-count':'string',
  'x-get-sql':'string'
};

fetch('http://localhost:8080/service-engine-app/service/cms_live_service_performance',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'x-get-count': 'string',
  'x-get-sql': 'string'
}

r = requests.get('http://localhost:8080/service-engine-app/service/cms_live_service_performance', headers = headers)

print(r.json())

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
        "x-get-count": []string{"string"},
        "x-get-sql": []string{"string"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://localhost:8080/service-engine-app/service/cms_live_service_performance", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```http
GET http://localhost:8080/service-engine-app/service/cms_live_service_performance HTTP/1.1
Host: localhost:8080
Accept: application/json
x-get-count: string
x-get-sql: string

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'x-get-count' => 'string',
  'x-get-sql' => 'string'
}

result = RestClient.get 'http://localhost:8080/service-engine-app/service/cms_live_service_performance',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /service-engine-app/service/cms_live_service_performance`

<h3 id="search-cms_live_service_performance-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|avg_avg_mcare_allowed_amt|query|string|false|avg_avg_mcare_allowed_amt|
|avg_avg_mcare_pay_amt|query|string|false|avg_avg_mcare_pay_amt|
|avg_avg_mcare_standardized_amt|query|string|false|avg_avg_mcare_standardized_amt|
|avg_avg_submitted_charge_amt|query|string|false|avg_avg_submitted_charge_amt|
|entity_type|query|string|false|entity_type|
|est_ttl_mcare_allowed_amt|query|string|false|est_ttl_mcare_allowed_amt|
|est_ttl_mcare_pay_amt|query|string|false|est_ttl_mcare_pay_amt|
|est_ttl_mcare_standardized_amt|query|string|false|est_ttl_mcare_standardized_amt|
|est_ttl_submitted_charge_amt|query|string|false|est_ttl_submitted_charge_amt|
|hcpcs_code|query|string|false|hcpcs_code|
|max_avg_mcare_allowed_amt|query|string|false|max_avg_mcare_allowed_amt|
|max_avg_mcare_pay_amt|query|string|false|max_avg_mcare_pay_amt|
|max_avg_mcare_standardized_amt|query|string|false|max_avg_mcare_standardized_amt|
|max_avg_submitted_charge_amt|query|string|false|max_avg_submitted_charge_amt|
|min_avg_mcare_allowed_amt|query|string|false|min_avg_mcare_allowed_amt|
|min_avg_mcare_pay_amt|query|string|false|min_avg_mcare_pay_amt|
|min_avg_mcare_standardized_amt|query|string|false|min_avg_mcare_standardized_amt|
|min_avg_submitted_charge_amt|query|string|false|min_avg_submitted_charge_amt|
|n_of_distinct_mcare_beneficiary_per_day_svcs|query|string|false|n_of_distinct_mcare_beneficiary_per_day_svcs|
|n_of_mcare_beneficiaries|query|string|false|n_of_mcare_beneficiaries|
|n_of_svcs|query|string|false|n_of_svcs|
|providers|query|string|false|providers|
|rank_avg_avg_mcare_allowed_amt|query|string|false|rank_avg_avg_mcare_allowed_amt|
|rank_avg_avg_mcare_pay_amt|query|string|false|rank_avg_avg_mcare_pay_amt|
|rank_avg_avg_mcare_standardized_amt|query|string|false|rank_avg_avg_mcare_standardized_amt|
|rank_avg_avg_submitted_charge_amt|query|string|false|rank_avg_avg_submitted_charge_amt|
|rank_est_ttl_mcare_allowed_amt|query|string|false|rank_est_ttl_mcare_allowed_amt|
|rank_est_ttl_mcare_pay_amt|query|string|false|rank_est_ttl_mcare_pay_amt|
|rank_est_ttl_mcare_standardized_amt|query|string|false|rank_est_ttl_mcare_standardized_amt|
|rank_est_ttl_submitted_charge_amt|query|string|false|rank_est_ttl_submitted_charge_amt|
|rank_max_avg_mcare_allowed_amt|query|string|false|rank_max_avg_mcare_allowed_amt|
|rank_max_avg_mcare_pay_amt|query|string|false|rank_max_avg_mcare_pay_amt|
|rank_max_avg_mcare_standardized_amt|query|string|false|rank_max_avg_mcare_standardized_amt|
|rank_max_avg_submitted_charge_amt|query|string|false|rank_max_avg_submitted_charge_amt|
|rank_min_avg_mcare_allowed_amt|query|string|false|rank_min_avg_mcare_allowed_amt|
|rank_min_avg_mcare_pay_amt|query|string|false|rank_min_avg_mcare_pay_amt|
|rank_min_avg_mcare_standardized_amt|query|string|false|rank_min_avg_mcare_standardized_amt|
|rank_min_avg_submitted_charge_amt|query|string|false|rank_min_avg_submitted_charge_amt|
|rank_n_of_distinct_mcare_beneficiary_per_day_svcs|query|string|false|rank_n_of_distinct_mcare_beneficiary_per_day_svcs|
|rank_n_of_mcare_beneficiaries|query|string|false|rank_n_of_mcare_beneficiaries|
|rank_n_of_svcs|query|string|false|rank_n_of_svcs|
|rank_providers|query|string|false|rank_providers|
|rank_var_avg_mcare_allowed_amt|query|string|false|rank_var_avg_mcare_allowed_amt|
|rank_var_avg_mcare_pay_amt|query|string|false|rank_var_avg_mcare_pay_amt|
|rank_var_avg_mcare_standardized_amt|query|string|false|rank_var_avg_mcare_standardized_amt|
|rank_var_avg_mcare_submitted_charge_pay_amt|query|string|false|rank_var_avg_mcare_submitted_charge_pay_amt|
|rank_var_avg_submitted_charge_amt|query|string|false|rank_var_avg_submitted_charge_amt|
|var_avg_mcare_allowed_amt|query|string|false|var_avg_mcare_allowed_amt|
|var_avg_mcare_pay_amt|query|string|false|var_avg_mcare_pay_amt|
|var_avg_mcare_standardized_amt|query|string|false|var_avg_mcare_standardized_amt|
|var_avg_mcare_submitted_charge_pay_amt|query|string|false|var_avg_mcare_submitted_charge_pay_amt|
|var_avg_submitted_charge_amt|query|string|false|var_avg_submitted_charge_amt|
||fields|query|string|false|record fields to return in results|
||seperator|query|string|false|character to be used as seperator in context & operations values. default is pipe `|`|
||notWhere|query|string|false|SQL query context. Apply query components to where OR get the inverse. Default is false.|
||statementContext|query|string|false|SQL query context. Apply query components all together (and each) OR select any matching (OR).|
||orderBy|query|string|false|seperated list of orderBy fields + direction (field desc || field asc). acs is default.|
||page|query|number|false|pagination page|
||limit|query|number|false|pagination limit|
|x-get-count|header|string|false|Request Search Query count(*) be sent back in a response header.|
|x-get-sql|header|string|false|Request plaintext SQL be sent back in a response header.|

> Example responses

> 200 Response

```json
[
  {
    "avg_avg_mcare_allowed_amt": "string",
    "avg_avg_mcare_pay_amt": "string",
    "avg_avg_mcare_standardized_amt": "string",
    "avg_avg_submitted_charge_amt": "string",
    "entity_type": "string",
    "est_ttl_mcare_allowed_amt": "string",
    "est_ttl_mcare_pay_amt": "string",
    "est_ttl_mcare_standardized_amt": "string",
    "est_ttl_submitted_charge_amt": "string",
    "hcpcs_code": "string",
    "max_avg_mcare_allowed_amt": "string",
    "max_avg_mcare_pay_amt": "string",
    "max_avg_mcare_standardized_amt": "string",
    "max_avg_submitted_charge_amt": "string",
    "min_avg_mcare_allowed_amt": "string",
    "min_avg_mcare_pay_amt": "string",
    "min_avg_mcare_standardized_amt": "string",
    "min_avg_submitted_charge_amt": "string",
    "n_of_distinct_mcare_beneficiary_per_day_svcs": "string",
    "n_of_mcare_beneficiaries": "string",
    "n_of_svcs": "string",
    "providers": "string",
    "rank_avg_avg_mcare_allowed_amt": "string",
    "rank_avg_avg_mcare_pay_amt": "string",
    "rank_avg_avg_mcare_standardized_amt": "string",
    "rank_avg_avg_submitted_charge_amt": "string",
    "rank_est_ttl_mcare_allowed_amt": "string",
    "rank_est_ttl_mcare_pay_amt": "string",
    "rank_est_ttl_mcare_standardized_amt": "string",
    "rank_est_ttl_submitted_charge_amt": "string",
    "rank_max_avg_mcare_allowed_amt": "string",
    "rank_max_avg_mcare_pay_amt": "string",
    "rank_max_avg_mcare_standardized_amt": "string",
    "rank_max_avg_submitted_charge_amt": "string",
    "rank_min_avg_mcare_allowed_amt": "string",
    "rank_min_avg_mcare_pay_amt": "string",
    "rank_min_avg_mcare_standardized_amt": "string",
    "rank_min_avg_submitted_charge_amt": "string",
    "rank_n_of_distinct_mcare_beneficiary_per_day_svcs": "string",
    "rank_n_of_mcare_beneficiaries": "string",
    "rank_n_of_svcs": "string",
    "rank_providers": "string",
    "rank_var_avg_mcare_allowed_amt": "string",
    "rank_var_avg_mcare_pay_amt": "string",
    "rank_var_avg_mcare_standardized_amt": "string",
    "rank_var_avg_mcare_submitted_charge_pay_amt": "string",
    "rank_var_avg_submitted_charge_amt": "string",
    "var_avg_mcare_allowed_amt": "string",
    "var_avg_mcare_pay_amt": "string",
    "var_avg_mcare_standardized_amt": "string",
    "var_avg_mcare_submitted_charge_pay_amt": "string",
    "var_avg_submitted_charge_amt": "string"
  }
]
```

<h3 id="search-cms_live_service_performance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A paged array of CmsLiveServicePerformance Records|Inline|

<h3 id="search-cms_live_service_performance-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[CmsLiveServicePerformance](#schemacmsliveserviceperformance)]|false|none|none|
|» avg_avg_mcare_allowed_amt|string¦null|false|none|none|
|» avg_avg_mcare_pay_amt|string¦null|false|none|none|
|» avg_avg_mcare_standardized_amt|string¦null|false|none|none|
|» avg_avg_submitted_charge_amt|string¦null|false|none|none|
|» entity_type|string¦null|false|none|none|
|» est_ttl_mcare_allowed_amt|string¦null|false|none|none|
|» est_ttl_mcare_pay_amt|string¦null|false|none|none|
|» est_ttl_mcare_standardized_amt|string¦null|false|none|none|
|» est_ttl_submitted_charge_amt|string¦null|false|none|none|
|» hcpcs_code|string¦null|false|none|none|
|» max_avg_mcare_allowed_amt|string¦null|false|none|none|
|» max_avg_mcare_pay_amt|string¦null|false|none|none|
|» max_avg_mcare_standardized_amt|string¦null|false|none|none|
|» max_avg_submitted_charge_amt|string¦null|false|none|none|
|» min_avg_mcare_allowed_amt|string¦null|false|none|none|
|» min_avg_mcare_pay_amt|string¦null|false|none|none|
|» min_avg_mcare_standardized_amt|string¦null|false|none|none|
|» min_avg_submitted_charge_amt|string¦null|false|none|none|
|» n_of_distinct_mcare_beneficiary_per_day_svcs|string¦null|false|none|none|
|» n_of_mcare_beneficiaries|string¦null|false|none|none|
|» n_of_svcs|string¦null|false|none|none|
|» providers|string¦null|false|none|none|
|» rank_avg_avg_mcare_allowed_amt|string¦null|false|none|none|
|» rank_avg_avg_mcare_pay_amt|string¦null|false|none|none|
|» rank_avg_avg_mcare_standardized_amt|string¦null|false|none|none|
|» rank_avg_avg_submitted_charge_amt|string¦null|false|none|none|
|» rank_est_ttl_mcare_allowed_amt|string¦null|false|none|none|
|» rank_est_ttl_mcare_pay_amt|string¦null|false|none|none|
|» rank_est_ttl_mcare_standardized_amt|string¦null|false|none|none|
|» rank_est_ttl_submitted_charge_amt|string¦null|false|none|none|
|» rank_max_avg_mcare_allowed_amt|string¦null|false|none|none|
|» rank_max_avg_mcare_pay_amt|string¦null|false|none|none|
|» rank_max_avg_mcare_standardized_amt|string¦null|false|none|none|
|» rank_max_avg_submitted_charge_amt|string¦null|false|none|none|
|» rank_min_avg_mcare_allowed_amt|string¦null|false|none|none|
|» rank_min_avg_mcare_pay_amt|string¦null|false|none|none|
|» rank_min_avg_mcare_standardized_amt|string¦null|false|none|none|
|» rank_min_avg_submitted_charge_amt|string¦null|false|none|none|
|» rank_n_of_distinct_mcare_beneficiary_per_day_svcs|string¦null|false|none|none|
|» rank_n_of_mcare_beneficiaries|string¦null|false|none|none|
|» rank_n_of_svcs|string¦null|false|none|none|
|» rank_providers|string¦null|false|none|none|
|» rank_var_avg_mcare_allowed_amt|string¦null|false|none|none|
|» rank_var_avg_mcare_pay_amt|string¦null|false|none|none|
|» rank_var_avg_mcare_standardized_amt|string¦null|false|none|none|
|» rank_var_avg_mcare_submitted_charge_pay_amt|string¦null|false|none|none|
|» rank_var_avg_submitted_charge_amt|string¦null|false|none|none|
|» var_avg_mcare_allowed_amt|string¦null|false|none|none|
|» var_avg_mcare_pay_amt|string¦null|false|none|none|
|» var_avg_mcare_standardized_amt|string¦null|false|none|none|
|» var_avg_mcare_submitted_charge_pay_amt|string¦null|false|none|none|
|» var_avg_submitted_charge_amt|string¦null|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-request-id|string||uuid issued to each request. Injected into all server logs. useful for debugging|
|200|x-sql|string||plaintext SQL used to complete db transaction.|
|200|x-count|string||full count of all records that meet query criteria (omitting any pagiation specs). useful for rendering pagiation limits without making another service call.|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="some-app-service-cmsliveserviceproviderperformance">CmsLiveServiceProviderPerformance</h1>

## search cms_live_service_provider_performance

<a id="opIdsearchCmsLiveServiceProviderPerformance"></a>

> Code samples

```javascript

const headers = {
  'Accept':'application/json',
  'x-get-count':'string',
  'x-get-sql':'string'
};

fetch('http://localhost:8080/service-engine-app/service/cms_live_service_provider_performance',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```javascript--nodejs
const fetch = require('node-fetch');

const headers = {
  'Accept':'application/json',
  'x-get-count':'string',
  'x-get-sql':'string'
};

fetch('http://localhost:8080/service-engine-app/service/cms_live_service_provider_performance',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'x-get-count': 'string',
  'x-get-sql': 'string'
}

r = requests.get('http://localhost:8080/service-engine-app/service/cms_live_service_provider_performance', headers = headers)

print(r.json())

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
        "x-get-count": []string{"string"},
        "x-get-sql": []string{"string"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://localhost:8080/service-engine-app/service/cms_live_service_provider_performance", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```http
GET http://localhost:8080/service-engine-app/service/cms_live_service_provider_performance HTTP/1.1
Host: localhost:8080
Accept: application/json
x-get-count: string
x-get-sql: string

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'x-get-count' => 'string',
  'x-get-sql' => 'string'
}

result = RestClient.get 'http://localhost:8080/service-engine-app/service/cms_live_service_provider_performance',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /service-engine-app/service/cms_live_service_provider_performance`

<h3 id="search-cms_live_service_provider_performance-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|avg_mcare_allowed_amt|query|string|false|avg_mcare_allowed_amt|
|avg_mcare_pay_amt|query|string|false|avg_mcare_pay_amt|
|avg_mcare_standardized_amt|query|string|false|avg_mcare_standardized_amt|
|avg_submitted_charge_amt|query|string|false|avg_submitted_charge_amt|
|entity_type|query|string|false|entity_type|
|est_ttl_mcare_pay_amt|query|string|false|est_ttl_mcare_pay_amt|
|est_ttl_submitted_charge_amt|query|string|false|est_ttl_submitted_charge_amt|
|hcpcs_code|query|string|false|hcpcs_code|
|mcare_participation_indicator|query|string|false|mcare_participation_indicator|
|n_of_distinct_mcare_beneficiary_per_day_svcs|query|integer|false|n_of_distinct_mcare_beneficiary_per_day_svcs|
|n_of_mcare_beneficiaries|query|integer|false|n_of_mcare_beneficiaries|
|n_of_svcs|query|string|false|n_of_svcs|
|npi|query|integer|false|npi|
|place_of_service|query|string|false|place_of_service|
|rank_avg_mcare_allowed_amt|query|string|false|rank_avg_mcare_allowed_amt|
|rank_avg_mcare_pay_amt|query|string|false|rank_avg_mcare_pay_amt|
|rank_avg_mcare_standardized_amt|query|string|false|rank_avg_mcare_standardized_amt|
|rank_avg_submitted_charge_amt|query|string|false|rank_avg_submitted_charge_amt|
|rank_est_ttl_mcare_pay_amt|query|string|false|rank_est_ttl_mcare_pay_amt|
|rank_est_ttl_submitted_charge_amt|query|string|false|rank_est_ttl_submitted_charge_amt|
|rank_n_of_distinct_mcare_beneficiary_per_day_svcs|query|string|false|rank_n_of_distinct_mcare_beneficiary_per_day_svcs|
|rank_n_of_mcare_beneficiaries|query|string|false|rank_n_of_mcare_beneficiaries|
|rank_n_of_svcs|query|string|false|rank_n_of_svcs|
|rank_var_avg_mcare_submitted_charge_pay_amt|query|string|false|rank_var_avg_mcare_submitted_charge_pay_amt|
|var_avg_mcare_submitted_charge_pay_amt|query|string|false|var_avg_mcare_submitted_charge_pay_amt|
||fields|query|string|false|record fields to return in results|
||seperator|query|string|false|character to be used as seperator in context & operations values. default is pipe `|`|
||notWhere|query|string|false|SQL query context. Apply query components to where OR get the inverse. Default is false.|
||statementContext|query|string|false|SQL query context. Apply query components all together (and each) OR select any matching (OR).|
||orderBy|query|string|false|seperated list of orderBy fields + direction (field desc || field asc). acs is default.|
||page|query|number|false|pagination page|
||limit|query|number|false|pagination limit|
|x-get-count|header|string|false|Request Search Query count(*) be sent back in a response header.|
|x-get-sql|header|string|false|Request plaintext SQL be sent back in a response header.|

> Example responses

> 200 Response

```json
[
  {
    "avg_mcare_allowed_amt": "string",
    "avg_mcare_pay_amt": "string",
    "avg_mcare_standardized_amt": "string",
    "avg_submitted_charge_amt": "string",
    "entity_type": "string",
    "est_ttl_mcare_pay_amt": "string",
    "est_ttl_submitted_charge_amt": "string",
    "hcpcs_code": "string",
    "mcare_participation_indicator": "string",
    "n_of_distinct_mcare_beneficiary_per_day_svcs": 0,
    "n_of_mcare_beneficiaries": 0,
    "n_of_svcs": "string",
    "npi": 0,
    "place_of_service": "string",
    "rank_avg_mcare_allowed_amt": "string",
    "rank_avg_mcare_pay_amt": "string",
    "rank_avg_mcare_standardized_amt": "string",
    "rank_avg_submitted_charge_amt": "string",
    "rank_est_ttl_mcare_pay_amt": "string",
    "rank_est_ttl_submitted_charge_amt": "string",
    "rank_n_of_distinct_mcare_beneficiary_per_day_svcs": "string",
    "rank_n_of_mcare_beneficiaries": "string",
    "rank_n_of_svcs": "string",
    "rank_var_avg_mcare_submitted_charge_pay_amt": "string",
    "var_avg_mcare_submitted_charge_pay_amt": "string"
  }
]
```

<h3 id="search-cms_live_service_provider_performance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A paged array of CmsLiveServiceProviderPerformance Records|Inline|

<h3 id="search-cms_live_service_provider_performance-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[CmsLiveServiceProviderPerformance](#schemacmsliveserviceproviderperformance)]|false|none|none|
|» avg_mcare_allowed_amt|string¦null|false|none|none|
|» avg_mcare_pay_amt|string¦null|false|none|none|
|» avg_mcare_standardized_amt|string¦null|false|none|none|
|» avg_submitted_charge_amt|string¦null|false|none|none|
|» entity_type|string¦null|false|none|none|
|» est_ttl_mcare_pay_amt|string¦null|false|none|none|
|» est_ttl_submitted_charge_amt|string¦null|false|none|none|
|» hcpcs_code|string¦null|false|none|none|
|» mcare_participation_indicator|string¦null|false|none|none|
|» n_of_distinct_mcare_beneficiary_per_day_svcs|integer¦null|false|none|none|
|» n_of_mcare_beneficiaries|integer¦null|false|none|none|
|» n_of_svcs|string¦null|false|none|none|
|» npi|integer¦null|false|none|none|
|» place_of_service|string¦null|false|none|none|
|» rank_avg_mcare_allowed_amt|string¦null|false|none|none|
|» rank_avg_mcare_pay_amt|string¦null|false|none|none|
|» rank_avg_mcare_standardized_amt|string¦null|false|none|none|
|» rank_avg_submitted_charge_amt|string¦null|false|none|none|
|» rank_est_ttl_mcare_pay_amt|string¦null|false|none|none|
|» rank_est_ttl_submitted_charge_amt|string¦null|false|none|none|
|» rank_n_of_distinct_mcare_beneficiary_per_day_svcs|string¦null|false|none|none|
|» rank_n_of_mcare_beneficiaries|string¦null|false|none|none|
|» rank_n_of_svcs|string¦null|false|none|none|
|» rank_var_avg_mcare_submitted_charge_pay_amt|string¦null|false|none|none|
|» var_avg_mcare_submitted_charge_pay_amt|string¦null|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-request-id|string||uuid issued to each request. Injected into all server logs. useful for debugging|
|200|x-sql|string||plaintext SQL used to complete db transaction.|
|200|x-count|string||full count of all records that meet query criteria (omitting any pagiation specs). useful for rendering pagiation limits without making another service call.|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="some-app-service-cmsliveserviceproviderperformancesummarydrugno">CmsLiveServiceProviderPerformanceSummaryDrugNo</h1>

## search cms_live_service_provider_performance_summary_drug_no

<a id="opIdsearchCmsLiveServiceProviderPerformanceSummaryDrugNo"></a>

> Code samples

```javascript

const headers = {
  'Accept':'application/json',
  'x-get-count':'string',
  'x-get-sql':'string'
};

fetch('http://localhost:8080/service-engine-app/service/cms_live_service_provider_performance_summary_drug_no',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```javascript--nodejs
const fetch = require('node-fetch');

const headers = {
  'Accept':'application/json',
  'x-get-count':'string',
  'x-get-sql':'string'
};

fetch('http://localhost:8080/service-engine-app/service/cms_live_service_provider_performance_summary_drug_no',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'x-get-count': 'string',
  'x-get-sql': 'string'
}

r = requests.get('http://localhost:8080/service-engine-app/service/cms_live_service_provider_performance_summary_drug_no', headers = headers)

print(r.json())

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
        "x-get-count": []string{"string"},
        "x-get-sql": []string{"string"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://localhost:8080/service-engine-app/service/cms_live_service_provider_performance_summary_drug_no", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```http
GET http://localhost:8080/service-engine-app/service/cms_live_service_provider_performance_summary_drug_no HTTP/1.1
Host: localhost:8080
Accept: application/json
x-get-count: string
x-get-sql: string

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'x-get-count' => 'string',
  'x-get-sql' => 'string'
}

result = RestClient.get 'http://localhost:8080/service-engine-app/service/cms_live_service_provider_performance_summary_drug_no',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /service-engine-app/service/cms_live_service_provider_performance_summary_drug_no`

<h3 id="search-cms_live_service_provider_performance_summary_drug_no-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|entity_type|query|string|false|entity_type|
|est_ttl_mcare_pay_amt|query|string|false|est_ttl_mcare_pay_amt|
|est_ttl_mcare_pay_amt_by_ttl_hcpcs_code|query|string|false|est_ttl_mcare_pay_amt_by_ttl_hcpcs_code|
|est_ttl_mcare_pay_amt_by_ttl_n_of_svcs|query|string|false|est_ttl_mcare_pay_amt_by_ttl_n_of_svcs|
|est_ttl_submitted_charge_amt|query|string|false|est_ttl_submitted_charge_amt|
|npi|query|integer|false|npi|
|rank_est_ttl_mcare_pay_amt|query|string|false|rank_est_ttl_mcare_pay_amt|
|rank_est_ttl_mcare_pay_amt_by_ttl_hcpcs_code|query|string|false|rank_est_ttl_mcare_pay_amt_by_ttl_hcpcs_code|
|rank_est_ttl_mcare_pay_amt_by_ttl_n_of_servi|query|string|false|rank_est_ttl_mcare_pay_amt_by_ttl_n_of_servi|
|rank_est_ttl_submitted_charge_amt|query|string|false|rank_est_ttl_submitted_charge_amt|
|rank_ttl_hcpcs_code|query|string|false|rank_ttl_hcpcs_code|
|rank_ttl_n_of_svcs|query|string|false|rank_ttl_n_of_svcs|
|rank_var_est_ttl_mcare_submitted_charge_pay_amoun|query|string|false|rank_var_est_ttl_mcare_submitted_charge_pay_amoun|
|summary_type|query|integer|false|summary_type|
|ttl_hcpcs_code|query|string|false|ttl_hcpcs_code|
|ttl_n_of_svcs|query|string|false|ttl_n_of_svcs|
|var_est_ttl_mcare_submitted_charge_pay_amt|query|string|false|var_est_ttl_mcare_submitted_charge_pay_amt|
||fields|query|string|false|record fields to return in results|
||seperator|query|string|false|character to be used as seperator in context & operations values. default is pipe `|`|
||notWhere|query|string|false|SQL query context. Apply query components to where OR get the inverse. Default is false.|
||statementContext|query|string|false|SQL query context. Apply query components all together (and each) OR select any matching (OR).|
||orderBy|query|string|false|seperated list of orderBy fields + direction (field desc || field asc). acs is default.|
||page|query|number|false|pagination page|
||limit|query|number|false|pagination limit|
|x-get-count|header|string|false|Request Search Query count(*) be sent back in a response header.|
|x-get-sql|header|string|false|Request plaintext SQL be sent back in a response header.|

> Example responses

> 200 Response

```json
[
  {
    "entity_type": "string",
    "est_ttl_mcare_pay_amt": "string",
    "est_ttl_mcare_pay_amt_by_ttl_hcpcs_code": "string",
    "est_ttl_mcare_pay_amt_by_ttl_n_of_svcs": "string",
    "est_ttl_submitted_charge_amt": "string",
    "npi": 0,
    "rank_est_ttl_mcare_pay_amt": "string",
    "rank_est_ttl_mcare_pay_amt_by_ttl_hcpcs_code": "string",
    "rank_est_ttl_mcare_pay_amt_by_ttl_n_of_servi": "string",
    "rank_est_ttl_submitted_charge_amt": "string",
    "rank_ttl_hcpcs_code": "string",
    "rank_ttl_n_of_svcs": "string",
    "rank_var_est_ttl_mcare_submitted_charge_pay_amoun": "string",
    "summary_type": 0,
    "ttl_hcpcs_code": "string",
    "ttl_n_of_svcs": "string",
    "var_est_ttl_mcare_submitted_charge_pay_amt": "string"
  }
]
```

<h3 id="search-cms_live_service_provider_performance_summary_drug_no-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A paged array of CmsLiveServiceProviderPerformanceSummaryDrugNo Records|Inline|

<h3 id="search-cms_live_service_provider_performance_summary_drug_no-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[CmsLiveServiceProviderPerformanceSummaryDrugNo](#schemacmsliveserviceproviderperformancesummarydrugno)]|false|none|none|
|» entity_type|string¦null|false|none|none|
|» est_ttl_mcare_pay_amt|string¦null|false|none|none|
|» est_ttl_mcare_pay_amt_by_ttl_hcpcs_code|string¦null|false|none|none|
|» est_ttl_mcare_pay_amt_by_ttl_n_of_svcs|string¦null|false|none|none|
|» est_ttl_submitted_charge_amt|string¦null|false|none|none|
|» npi|integer¦null|false|none|none|
|» rank_est_ttl_mcare_pay_amt|string¦null|false|none|none|
|» rank_est_ttl_mcare_pay_amt_by_ttl_hcpcs_code|string¦null|false|none|none|
|» rank_est_ttl_mcare_pay_amt_by_ttl_n_of_servi|string¦null|false|none|none|
|» rank_est_ttl_submitted_charge_amt|string¦null|false|none|none|
|» rank_ttl_hcpcs_code|string¦null|false|none|none|
|» rank_ttl_n_of_svcs|string¦null|false|none|none|
|» rank_var_est_ttl_mcare_submitted_charge_pay_amoun|string¦null|false|none|none|
|» summary_type|integer¦null|false|none|none|
|» ttl_hcpcs_code|string¦null|false|none|none|
|» ttl_n_of_svcs|string¦null|false|none|none|
|» var_est_ttl_mcare_submitted_charge_pay_amt|string¦null|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-request-id|string||uuid issued to each request. Injected into all server logs. useful for debugging|
|200|x-sql|string||plaintext SQL used to complete db transaction.|
|200|x-count|string||full count of all records that meet query criteria (omitting any pagiation specs). useful for rendering pagiation limits without making another service call.|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="some-app-service-cmsliveserviceproviderperformancesummarydrugyes">CmsLiveServiceProviderPerformanceSummaryDrugYes</h1>

## search cms_live_service_provider_performance_summary_drug_yes

<a id="opIdsearchCmsLiveServiceProviderPerformanceSummaryDrugYes"></a>

> Code samples

```javascript

const headers = {
  'Accept':'application/json',
  'x-get-count':'string',
  'x-get-sql':'string'
};

fetch('http://localhost:8080/service-engine-app/service/cms_live_service_provider_performance_summary_drug_yes',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```javascript--nodejs
const fetch = require('node-fetch');

const headers = {
  'Accept':'application/json',
  'x-get-count':'string',
  'x-get-sql':'string'
};

fetch('http://localhost:8080/service-engine-app/service/cms_live_service_provider_performance_summary_drug_yes',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'x-get-count': 'string',
  'x-get-sql': 'string'
}

r = requests.get('http://localhost:8080/service-engine-app/service/cms_live_service_provider_performance_summary_drug_yes', headers = headers)

print(r.json())

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
        "x-get-count": []string{"string"},
        "x-get-sql": []string{"string"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://localhost:8080/service-engine-app/service/cms_live_service_provider_performance_summary_drug_yes", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```http
GET http://localhost:8080/service-engine-app/service/cms_live_service_provider_performance_summary_drug_yes HTTP/1.1
Host: localhost:8080
Accept: application/json
x-get-count: string
x-get-sql: string

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'x-get-count' => 'string',
  'x-get-sql' => 'string'
}

result = RestClient.get 'http://localhost:8080/service-engine-app/service/cms_live_service_provider_performance_summary_drug_yes',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /service-engine-app/service/cms_live_service_provider_performance_summary_drug_yes`

<h3 id="search-cms_live_service_provider_performance_summary_drug_yes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|entity_type|query|string|false|entity_type|
|est_ttl_mcare_pay_amt|query|string|false|est_ttl_mcare_pay_amt|
|est_ttl_mcare_pay_amt_by_ttl_hcpcs_code|query|string|false|est_ttl_mcare_pay_amt_by_ttl_hcpcs_code|
|est_ttl_mcare_pay_amt_by_ttl_n_of_svcs|query|string|false|est_ttl_mcare_pay_amt_by_ttl_n_of_svcs|
|est_ttl_submitted_charge_amt|query|string|false|est_ttl_submitted_charge_amt|
|npi|query|integer|false|npi|
|rank_est_ttl_mcare_pay_amt|query|string|false|rank_est_ttl_mcare_pay_amt|
|rank_est_ttl_mcare_pay_amt_by_ttl_hcpcs_code|query|string|false|rank_est_ttl_mcare_pay_amt_by_ttl_hcpcs_code|
|rank_est_ttl_mcare_pay_amt_by_ttl_n_of_servi|query|string|false|rank_est_ttl_mcare_pay_amt_by_ttl_n_of_servi|
|rank_est_ttl_submitted_charge_amt|query|string|false|rank_est_ttl_submitted_charge_amt|
|rank_ttl_hcpcs_code|query|string|false|rank_ttl_hcpcs_code|
|rank_ttl_n_of_svcs|query|string|false|rank_ttl_n_of_svcs|
|rank_var_est_ttl_mcare_submitted_charge_pay_amoun|query|string|false|rank_var_est_ttl_mcare_submitted_charge_pay_amoun|
|summary_type|query|integer|false|summary_type|
|ttl_hcpcs_code|query|string|false|ttl_hcpcs_code|
|ttl_n_of_svcs|query|string|false|ttl_n_of_svcs|
|var_est_ttl_mcare_submitted_charge_pay_amt|query|string|false|var_est_ttl_mcare_submitted_charge_pay_amt|
||fields|query|string|false|record fields to return in results|
||seperator|query|string|false|character to be used as seperator in context & operations values. default is pipe `|`|
||notWhere|query|string|false|SQL query context. Apply query components to where OR get the inverse. Default is false.|
||statementContext|query|string|false|SQL query context. Apply query components all together (and each) OR select any matching (OR).|
||orderBy|query|string|false|seperated list of orderBy fields + direction (field desc || field asc). acs is default.|
||page|query|number|false|pagination page|
||limit|query|number|false|pagination limit|
|x-get-count|header|string|false|Request Search Query count(*) be sent back in a response header.|
|x-get-sql|header|string|false|Request plaintext SQL be sent back in a response header.|

> Example responses

> 200 Response

```json
[
  {
    "entity_type": "string",
    "est_ttl_mcare_pay_amt": "string",
    "est_ttl_mcare_pay_amt_by_ttl_hcpcs_code": "string",
    "est_ttl_mcare_pay_amt_by_ttl_n_of_svcs": "string",
    "est_ttl_submitted_charge_amt": "string",
    "npi": 0,
    "rank_est_ttl_mcare_pay_amt": "string",
    "rank_est_ttl_mcare_pay_amt_by_ttl_hcpcs_code": "string",
    "rank_est_ttl_mcare_pay_amt_by_ttl_n_of_servi": "string",
    "rank_est_ttl_submitted_charge_amt": "string",
    "rank_ttl_hcpcs_code": "string",
    "rank_ttl_n_of_svcs": "string",
    "rank_var_est_ttl_mcare_submitted_charge_pay_amoun": "string",
    "summary_type": 0,
    "ttl_hcpcs_code": "string",
    "ttl_n_of_svcs": "string",
    "var_est_ttl_mcare_submitted_charge_pay_amt": "string"
  }
]
```

<h3 id="search-cms_live_service_provider_performance_summary_drug_yes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A paged array of CmsLiveServiceProviderPerformanceSummaryDrugYes Records|Inline|

<h3 id="search-cms_live_service_provider_performance_summary_drug_yes-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[CmsLiveServiceProviderPerformanceSummaryDrugYes](#schemacmsliveserviceproviderperformancesummarydrugyes)]|false|none|none|
|» entity_type|string¦null|false|none|none|
|» est_ttl_mcare_pay_amt|string¦null|false|none|none|
|» est_ttl_mcare_pay_amt_by_ttl_hcpcs_code|string¦null|false|none|none|
|» est_ttl_mcare_pay_amt_by_ttl_n_of_svcs|string¦null|false|none|none|
|» est_ttl_submitted_charge_amt|string¦null|false|none|none|
|» npi|integer¦null|false|none|none|
|» rank_est_ttl_mcare_pay_amt|string¦null|false|none|none|
|» rank_est_ttl_mcare_pay_amt_by_ttl_hcpcs_code|string¦null|false|none|none|
|» rank_est_ttl_mcare_pay_amt_by_ttl_n_of_servi|string¦null|false|none|none|
|» rank_est_ttl_submitted_charge_amt|string¦null|false|none|none|
|» rank_ttl_hcpcs_code|string¦null|false|none|none|
|» rank_ttl_n_of_svcs|string¦null|false|none|none|
|» rank_var_est_ttl_mcare_submitted_charge_pay_amoun|string¦null|false|none|none|
|» summary_type|integer¦null|false|none|none|
|» ttl_hcpcs_code|string¦null|false|none|none|
|» ttl_n_of_svcs|string¦null|false|none|none|
|» var_est_ttl_mcare_submitted_charge_pay_amt|string¦null|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-request-id|string||uuid issued to each request. Injected into all server logs. useful for debugging|
|200|x-sql|string||plaintext SQL used to complete db transaction.|
|200|x-count|string||full count of all records that meet query criteria (omitting any pagiation specs). useful for rendering pagiation limits without making another service call.|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="some-app-service-cmsliveserviceproviderperformancesummaryoverall">CmsLiveServiceProviderPerformanceSummaryOverall</h1>

## search cms_live_service_provider_performance_summary_overall

<a id="opIdsearchCmsLiveServiceProviderPerformanceSummaryOverall"></a>

> Code samples

```javascript

const headers = {
  'Accept':'application/json',
  'x-get-count':'string',
  'x-get-sql':'string'
};

fetch('http://localhost:8080/service-engine-app/service/cms_live_service_provider_performance_summary_overall',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```javascript--nodejs
const fetch = require('node-fetch');

const headers = {
  'Accept':'application/json',
  'x-get-count':'string',
  'x-get-sql':'string'
};

fetch('http://localhost:8080/service-engine-app/service/cms_live_service_provider_performance_summary_overall',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'x-get-count': 'string',
  'x-get-sql': 'string'
}

r = requests.get('http://localhost:8080/service-engine-app/service/cms_live_service_provider_performance_summary_overall', headers = headers)

print(r.json())

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
        "x-get-count": []string{"string"},
        "x-get-sql": []string{"string"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://localhost:8080/service-engine-app/service/cms_live_service_provider_performance_summary_overall", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```http
GET http://localhost:8080/service-engine-app/service/cms_live_service_provider_performance_summary_overall HTTP/1.1
Host: localhost:8080
Accept: application/json
x-get-count: string
x-get-sql: string

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'x-get-count' => 'string',
  'x-get-sql' => 'string'
}

result = RestClient.get 'http://localhost:8080/service-engine-app/service/cms_live_service_provider_performance_summary_overall',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /service-engine-app/service/cms_live_service_provider_performance_summary_overall`

<h3 id="search-cms_live_service_provider_performance_summary_overall-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|entity_type|query|string|false|entity_type|
|est_ttl_mcare_pay_amt|query|string|false|est_ttl_mcare_pay_amt|
|est_ttl_mcare_pay_amt_by_ttl_hcpcs_code|query|string|false|est_ttl_mcare_pay_amt_by_ttl_hcpcs_code|
|est_ttl_mcare_pay_amt_by_ttl_n_of_svcs|query|string|false|est_ttl_mcare_pay_amt_by_ttl_n_of_svcs|
|est_ttl_submitted_charge_amt|query|string|false|est_ttl_submitted_charge_amt|
|npi|query|integer|false|npi|
|rank_est_ttl_mcare_pay_amt|query|string|false|rank_est_ttl_mcare_pay_amt|
|rank_est_ttl_mcare_pay_amt_by_ttl_hcpcs_code|query|string|false|rank_est_ttl_mcare_pay_amt_by_ttl_hcpcs_code|
|rank_est_ttl_mcare_pay_amt_by_ttl_n_of_servi|query|string|false|rank_est_ttl_mcare_pay_amt_by_ttl_n_of_servi|
|rank_est_ttl_submitted_charge_amt|query|string|false|rank_est_ttl_submitted_charge_amt|
|rank_ttl_hcpcs_code|query|string|false|rank_ttl_hcpcs_code|
|rank_ttl_n_of_svcs|query|string|false|rank_ttl_n_of_svcs|
|rank_var_est_ttl_mcare_submitted_charge_pay_amoun|query|string|false|rank_var_est_ttl_mcare_submitted_charge_pay_amoun|
|summary_type|query|integer|false|summary_type|
|ttl_hcpcs_code|query|string|false|ttl_hcpcs_code|
|ttl_n_of_svcs|query|string|false|ttl_n_of_svcs|
|var_est_ttl_mcare_submitted_charge_pay_amt|query|string|false|var_est_ttl_mcare_submitted_charge_pay_amt|
||fields|query|string|false|record fields to return in results|
||seperator|query|string|false|character to be used as seperator in context & operations values. default is pipe `|`|
||notWhere|query|string|false|SQL query context. Apply query components to where OR get the inverse. Default is false.|
||statementContext|query|string|false|SQL query context. Apply query components all together (and each) OR select any matching (OR).|
||orderBy|query|string|false|seperated list of orderBy fields + direction (field desc || field asc). acs is default.|
||page|query|number|false|pagination page|
||limit|query|number|false|pagination limit|
|x-get-count|header|string|false|Request Search Query count(*) be sent back in a response header.|
|x-get-sql|header|string|false|Request plaintext SQL be sent back in a response header.|

> Example responses

> 200 Response

```json
[
  {
    "entity_type": "string",
    "est_ttl_mcare_pay_amt": "string",
    "est_ttl_mcare_pay_amt_by_ttl_hcpcs_code": "string",
    "est_ttl_mcare_pay_amt_by_ttl_n_of_svcs": "string",
    "est_ttl_submitted_charge_amt": "string",
    "npi": 0,
    "rank_est_ttl_mcare_pay_amt": "string",
    "rank_est_ttl_mcare_pay_amt_by_ttl_hcpcs_code": "string",
    "rank_est_ttl_mcare_pay_amt_by_ttl_n_of_servi": "string",
    "rank_est_ttl_submitted_charge_amt": "string",
    "rank_ttl_hcpcs_code": "string",
    "rank_ttl_n_of_svcs": "string",
    "rank_var_est_ttl_mcare_submitted_charge_pay_amoun": "string",
    "summary_type": 0,
    "ttl_hcpcs_code": "string",
    "ttl_n_of_svcs": "string",
    "var_est_ttl_mcare_submitted_charge_pay_amt": "string"
  }
]
```

<h3 id="search-cms_live_service_provider_performance_summary_overall-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A paged array of CmsLiveServiceProviderPerformanceSummaryOverall Records|Inline|

<h3 id="search-cms_live_service_provider_performance_summary_overall-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[CmsLiveServiceProviderPerformanceSummaryOverall](#schemacmsliveserviceproviderperformancesummaryoverall)]|false|none|none|
|» entity_type|string¦null|false|none|none|
|» est_ttl_mcare_pay_amt|string¦null|false|none|none|
|» est_ttl_mcare_pay_amt_by_ttl_hcpcs_code|string¦null|false|none|none|
|» est_ttl_mcare_pay_amt_by_ttl_n_of_svcs|string¦null|false|none|none|
|» est_ttl_submitted_charge_amt|string¦null|false|none|none|
|» npi|integer¦null|false|none|none|
|» rank_est_ttl_mcare_pay_amt|string¦null|false|none|none|
|» rank_est_ttl_mcare_pay_amt_by_ttl_hcpcs_code|string¦null|false|none|none|
|» rank_est_ttl_mcare_pay_amt_by_ttl_n_of_servi|string¦null|false|none|none|
|» rank_est_ttl_submitted_charge_amt|string¦null|false|none|none|
|» rank_ttl_hcpcs_code|string¦null|false|none|none|
|» rank_ttl_n_of_svcs|string¦null|false|none|none|
|» rank_var_est_ttl_mcare_submitted_charge_pay_amoun|string¦null|false|none|none|
|» summary_type|integer¦null|false|none|none|
|» ttl_hcpcs_code|string¦null|false|none|none|
|» ttl_n_of_svcs|string¦null|false|none|none|
|» var_est_ttl_mcare_submitted_charge_pay_amt|string¦null|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-request-id|string||uuid issued to each request. Injected into all server logs. useful for debugging|
|200|x-sql|string||plaintext SQL used to complete db transaction.|
|200|x-count|string||full count of all records that meet query criteria (omitting any pagiation specs). useful for rendering pagiation limits without making another service call.|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="some-app-service-cmsproviderperformance">CmsProviderPerformance</h1>

## search cms_provider_performance

<a id="opIdsearchCmsProviderPerformance"></a>

> Code samples

```javascript

const headers = {
  'Accept':'application/json',
  'x-get-count':'string',
  'x-get-sql':'string'
};

fetch('http://localhost:8080/service-engine-app/service/cms_provider_performance',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```javascript--nodejs
const fetch = require('node-fetch');

const headers = {
  'Accept':'application/json',
  'x-get-count':'string',
  'x-get-sql':'string'
};

fetch('http://localhost:8080/service-engine-app/service/cms_provider_performance',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'x-get-count': 'string',
  'x-get-sql': 'string'
}

r = requests.get('http://localhost:8080/service-engine-app/service/cms_provider_performance', headers = headers)

print(r.json())

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
        "x-get-count": []string{"string"},
        "x-get-sql": []string{"string"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://localhost:8080/service-engine-app/service/cms_provider_performance", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```http
GET http://localhost:8080/service-engine-app/service/cms_provider_performance HTTP/1.1
Host: localhost:8080
Accept: application/json
x-get-count: string
x-get-sql: string

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'x-get-count' => 'string',
  'x-get-sql' => 'string'
}

result = RestClient.get 'http://localhost:8080/service-engine-app/service/cms_provider_performance',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /service-engine-app/service/cms_provider_performance`

<h3 id="search-cms_provider_performance-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|avg_mcare_allowed_amt|query|string|false|avg_mcare_allowed_amt|
|avg_mcare_pay_amt|query|string|false|avg_mcare_pay_amt|
|avg_mcare_standardized_amt|query|string|false|avg_mcare_standardized_amt|
|avg_submitted_charge_amt|query|string|false|avg_submitted_charge_amt|
|hcpcs_code|query|string|false|hcpcs_code|
|mcare_participation_indicator|query|string|false|mcare_participation_indicator|
|n_of_distinct_mcare_beneficiary_per_day_svcs|query|integer|false|n_of_distinct_mcare_beneficiary_per_day_svcs|
|n_of_mcare_beneficiaries|query|integer|false|n_of_mcare_beneficiaries|
|n_of_svcs|query|string|false|n_of_svcs|
|npi|query|integer|false|npi|
|place_of_service|query|string|false|place_of_service|
|prisma_id|query|integer|false|prisma_id|
||fields|query|string|false|record fields to return in results|
||seperator|query|string|false|character to be used as seperator in context & operations values. default is pipe `|`|
||notWhere|query|string|false|SQL query context. Apply query components to where OR get the inverse. Default is false.|
||statementContext|query|string|false|SQL query context. Apply query components all together (and each) OR select any matching (OR).|
||orderBy|query|string|false|seperated list of orderBy fields + direction (field desc || field asc). acs is default.|
||page|query|number|false|pagination page|
||limit|query|number|false|pagination limit|
|x-get-count|header|string|false|Request Search Query count(*) be sent back in a response header.|
|x-get-sql|header|string|false|Request plaintext SQL be sent back in a response header.|

> Example responses

> 200 Response

```json
[
  {
    "avg_mcare_allowed_amt": "string",
    "avg_mcare_pay_amt": "string",
    "avg_mcare_standardized_amt": "string",
    "avg_submitted_charge_amt": "string",
    "hcpcs_code": "string",
    "mcare_participation_indicator": "string",
    "n_of_distinct_mcare_beneficiary_per_day_svcs": 0,
    "n_of_mcare_beneficiaries": 0,
    "n_of_svcs": "string",
    "npi": 0,
    "place_of_service": "string",
    "prisma_id": 0
  }
]
```

<h3 id="search-cms_provider_performance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A paged array of CmsProviderPerformance Records|Inline|

<h3 id="search-cms_provider_performance-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[CmsProviderPerformance](#schemacmsproviderperformance)]|false|none|none|
|» avg_mcare_allowed_amt|string¦null|false|none|none|
|» avg_mcare_pay_amt|string¦null|false|none|none|
|» avg_mcare_standardized_amt|string¦null|false|none|none|
|» avg_submitted_charge_amt|string¦null|false|none|none|
|» hcpcs_code|string|false|none|none|
|» mcare_participation_indicator|string¦null|false|none|none|
|» n_of_distinct_mcare_beneficiary_per_day_svcs|integer¦null|false|none|none|
|» n_of_mcare_beneficiaries|integer¦null|false|none|none|
|» n_of_svcs|string¦null|false|none|none|
|» npi|integer|false|none|none|
|» place_of_service|string|false|none|none|
|» prisma_id|integer|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-request-id|string||uuid issued to each request. Injected into all server logs. useful for debugging|
|200|x-sql|string||plaintext SQL used to complete db transaction.|
|200|x-count|string||full count of all records that meet query criteria (omitting any pagiation specs). useful for rendering pagiation limits without making another service call.|

<aside class="success">
This operation does not require authentication
</aside>

## create cms_provider_performance

<a id="opIdcreateCmsProviderPerformance"></a>

> Code samples

```javascript
const inputBody = '[
  {
    "avg_mcare_allowed_amt": "string",
    "avg_mcare_pay_amt": "string",
    "avg_mcare_standardized_amt": "string",
    "avg_submitted_charge_amt": "string",
    "hcpcs_code": "string",
    "mcare_participation_indicator": "string",
    "n_of_distinct_mcare_beneficiary_per_day_svcs": 0,
    "n_of_mcare_beneficiaries": 0,
    "n_of_svcs": "string",
    "npi": 0,
    "place_of_service": "string",
    "prisma_id": 0
  }
]';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('http://localhost:8080/service-engine-app/service/cms_provider_performance',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```javascript--nodejs
const fetch = require('node-fetch');
const inputBody = [
  {
    "avg_mcare_allowed_amt": "string",
    "avg_mcare_pay_amt": "string",
    "avg_mcare_standardized_amt": "string",
    "avg_submitted_charge_amt": "string",
    "hcpcs_code": "string",
    "mcare_participation_indicator": "string",
    "n_of_distinct_mcare_beneficiary_per_day_svcs": 0,
    "n_of_mcare_beneficiaries": 0,
    "n_of_svcs": "string",
    "npi": 0,
    "place_of_service": "string",
    "prisma_id": 0
  }
];
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('http://localhost:8080/service-engine-app/service/cms_provider_performance',
{
  method: 'POST',
  body: JSON.stringify(inputBody),
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

r = requests.post('http://localhost:8080/service-engine-app/service/cms_provider_performance', headers = headers)

print(r.json())

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "http://localhost:8080/service-engine-app/service/cms_provider_performance", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```http
POST http://localhost:8080/service-engine-app/service/cms_provider_performance HTTP/1.1
Host: localhost:8080
Content-Type: application/json
Accept: application/json

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json'
}

result = RestClient.post 'http://localhost:8080/service-engine-app/service/cms_provider_performance',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`POST /service-engine-app/service/cms_provider_performance`

> Body parameter

```json
[
  {
    "avg_mcare_allowed_amt": "string",
    "avg_mcare_pay_amt": "string",
    "avg_mcare_standardized_amt": "string",
    "avg_submitted_charge_amt": "string",
    "hcpcs_code": "string",
    "mcare_participation_indicator": "string",
    "n_of_distinct_mcare_beneficiary_per_day_svcs": 0,
    "n_of_mcare_beneficiaries": 0,
    "n_of_svcs": "string",
    "npi": 0,
    "place_of_service": "string",
    "prisma_id": 0
  }
]
```

<h3 id="create-cms_provider_performance-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
||fields|query|string|false|record fields to return in results|
|body|body|[CmsProviderPerformance](#schemacmsproviderperformance)|true|Single CmsProviderPerformance or array of CmsProviderPerformance|

> Example responses

> 200 Response

```json
[
  {
    "avg_mcare_allowed_amt": "string",
    "avg_mcare_pay_amt": "string",
    "avg_mcare_standardized_amt": "string",
    "avg_submitted_charge_amt": "string",
    "hcpcs_code": "string",
    "mcare_participation_indicator": "string",
    "n_of_distinct_mcare_beneficiary_per_day_svcs": 0,
    "n_of_mcare_beneficiaries": 0,
    "n_of_svcs": "string",
    "npi": 0,
    "place_of_service": "string",
    "prisma_id": 0
  }
]
```

<h3 id="create-cms_provider_performance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A CmsProviderPerformance Record|Inline|

<h3 id="create-cms_provider_performance-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[CmsProviderPerformance](#schemacmsproviderperformance)]|false|none|none|
|» avg_mcare_allowed_amt|string¦null|false|none|none|
|» avg_mcare_pay_amt|string¦null|false|none|none|
|» avg_mcare_standardized_amt|string¦null|false|none|none|
|» avg_submitted_charge_amt|string¦null|false|none|none|
|» hcpcs_code|string|false|none|none|
|» mcare_participation_indicator|string¦null|false|none|none|
|» n_of_distinct_mcare_beneficiary_per_day_svcs|integer¦null|false|none|none|
|» n_of_mcare_beneficiaries|integer¦null|false|none|none|
|» n_of_svcs|string¦null|false|none|none|
|» npi|integer|false|none|none|
|» place_of_service|string|false|none|none|
|» prisma_id|integer|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-request-id|string||uuid issued to each request. Injected into all server logs. useful for debugging|
|200|x-sql|string||plaintext SQL used to complete db transaction.|

<aside class="success">
This operation does not require authentication
</aside>

## read cms_provider_performance

<a id="opIdreadCmsProviderPerformance"></a>

> Code samples

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('http://localhost:8080/service-engine-app/service/cms_provider_performance/record?prisma_id=0',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```javascript--nodejs
const fetch = require('node-fetch');

const headers = {
  'Accept':'application/json'
};

fetch('http://localhost:8080/service-engine-app/service/cms_provider_performance/record?prisma_id=0',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('http://localhost:8080/service-engine-app/service/cms_provider_performance/record', params={
  'prisma_id': '0'
}, headers = headers)

print(r.json())

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://localhost:8080/service-engine-app/service/cms_provider_performance/record", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```http
GET http://localhost:8080/service-engine-app/service/cms_provider_performance/record?prisma_id=0 HTTP/1.1
Host: localhost:8080
Accept: application/json

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'http://localhost:8080/service-engine-app/service/cms_provider_performance/record',
  params: {
  'prisma_id' => 'integer'
}, headers: headers

p JSON.parse(result)

```

`GET /service-engine-app/service/cms_provider_performance/record`

<h3 id="read-cms_provider_performance-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|prisma_id|query|integer|true|prisma_id|
||fields|query|string|false|record fields to return in results|

> Example responses

> 200 Response

```json
{
  "avg_mcare_allowed_amt": "string",
  "avg_mcare_pay_amt": "string",
  "avg_mcare_standardized_amt": "string",
  "avg_submitted_charge_amt": "string",
  "hcpcs_code": "string",
  "mcare_participation_indicator": "string",
  "n_of_distinct_mcare_beneficiary_per_day_svcs": 0,
  "n_of_mcare_beneficiaries": 0,
  "n_of_svcs": "string",
  "npi": 0,
  "place_of_service": "string",
  "prisma_id": 0
}
```

<h3 id="read-cms_provider_performance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A CmsProviderPerformance Record|[CmsProviderPerformance](#schemacmsproviderperformance)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-request-id|string||uuid issued to each request. Injected into all server logs. useful for debugging|
|200|x-sql|string||plaintext SQL used to complete db transaction.|

<aside class="success">
This operation does not require authentication
</aside>

## update cms_provider_performance

<a id="opIdupdateCmsProviderPerformance"></a>

> Code samples

```javascript
const inputBody = '{
  "avg_mcare_allowed_amt": "string",
  "avg_mcare_pay_amt": "string",
  "avg_mcare_standardized_amt": "string",
  "avg_submitted_charge_amt": "string",
  "hcpcs_code": "string",
  "mcare_participation_indicator": "string",
  "n_of_distinct_mcare_beneficiary_per_day_svcs": 0,
  "n_of_mcare_beneficiaries": 0,
  "n_of_svcs": "string",
  "npi": 0,
  "place_of_service": "string",
  "prisma_id": 0
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('http://localhost:8080/service-engine-app/service/cms_provider_performance/record?prisma_id=0',
{
  method: 'PUT',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```javascript--nodejs
const fetch = require('node-fetch');
const inputBody = {
  "avg_mcare_allowed_amt": "string",
  "avg_mcare_pay_amt": "string",
  "avg_mcare_standardized_amt": "string",
  "avg_submitted_charge_amt": "string",
  "hcpcs_code": "string",
  "mcare_participation_indicator": "string",
  "n_of_distinct_mcare_beneficiary_per_day_svcs": 0,
  "n_of_mcare_beneficiaries": 0,
  "n_of_svcs": "string",
  "npi": 0,
  "place_of_service": "string",
  "prisma_id": 0
};
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('http://localhost:8080/service-engine-app/service/cms_provider_performance/record?prisma_id=0',
{
  method: 'PUT',
  body: JSON.stringify(inputBody),
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

r = requests.put('http://localhost:8080/service-engine-app/service/cms_provider_performance/record', params={
  'prisma_id': '0'
}, headers = headers)

print(r.json())

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("PUT", "http://localhost:8080/service-engine-app/service/cms_provider_performance/record", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```http
PUT http://localhost:8080/service-engine-app/service/cms_provider_performance/record?prisma_id=0 HTTP/1.1
Host: localhost:8080
Content-Type: application/json
Accept: application/json

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json'
}

result = RestClient.put 'http://localhost:8080/service-engine-app/service/cms_provider_performance/record',
  params: {
  'prisma_id' => 'integer'
}, headers: headers

p JSON.parse(result)

```

`PUT /service-engine-app/service/cms_provider_performance/record`

> Body parameter

```json
{
  "avg_mcare_allowed_amt": "string",
  "avg_mcare_pay_amt": "string",
  "avg_mcare_standardized_amt": "string",
  "avg_submitted_charge_amt": "string",
  "hcpcs_code": "string",
  "mcare_participation_indicator": "string",
  "n_of_distinct_mcare_beneficiary_per_day_svcs": 0,
  "n_of_mcare_beneficiaries": 0,
  "n_of_svcs": "string",
  "npi": 0,
  "place_of_service": "string",
  "prisma_id": 0
}
```

<h3 id="update-cms_provider_performance-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|prisma_id|query|integer|true|prisma_id|
||fields|query|string|false|record fields to return in results|
|body|body|[CmsProviderPerformance](#schemacmsproviderperformance)|true|Single CmsProviderPerformance|

> Example responses

> 200 Response

```json
{
  "avg_mcare_allowed_amt": "string",
  "avg_mcare_pay_amt": "string",
  "avg_mcare_standardized_amt": "string",
  "avg_submitted_charge_amt": "string",
  "hcpcs_code": "string",
  "mcare_participation_indicator": "string",
  "n_of_distinct_mcare_beneficiary_per_day_svcs": 0,
  "n_of_mcare_beneficiaries": 0,
  "n_of_svcs": "string",
  "npi": 0,
  "place_of_service": "string",
  "prisma_id": 0
}
```

<h3 id="update-cms_provider_performance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A CmsProviderPerformance Record|[CmsProviderPerformance](#schemacmsproviderperformance)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-request-id|string||uuid issued to each request. Injected into all server logs. useful for debugging|
|200|x-sql|string||plaintext SQL used to complete db transaction.|

<aside class="success">
This operation does not require authentication
</aside>

## delete cms_provider_performance

<a id="opIddeleteCmsProviderPerformance"></a>

> Code samples

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('http://localhost:8080/service-engine-app/service/cms_provider_performance/record?prisma_id=0',
{
  method: 'DELETE',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```javascript--nodejs
const fetch = require('node-fetch');

const headers = {
  'Accept':'application/json'
};

fetch('http://localhost:8080/service-engine-app/service/cms_provider_performance/record?prisma_id=0',
{
  method: 'DELETE',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.delete('http://localhost:8080/service-engine-app/service/cms_provider_performance/record', params={
  'prisma_id': '0'
}, headers = headers)

print(r.json())

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("DELETE", "http://localhost:8080/service-engine-app/service/cms_provider_performance/record", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```http
DELETE http://localhost:8080/service-engine-app/service/cms_provider_performance/record?prisma_id=0 HTTP/1.1
Host: localhost:8080
Accept: application/json

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.delete 'http://localhost:8080/service-engine-app/service/cms_provider_performance/record',
  params: {
  'prisma_id' => 'integer'
}, headers: headers

p JSON.parse(result)

```

`DELETE /service-engine-app/service/cms_provider_performance/record`

<h3 id="delete-cms_provider_performance-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|prisma_id|query|integer|true|prisma_id|

> Example responses

> 200 Response

```json
{
  "count": 0
}
```

<h3 id="delete-cms_provider_performance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A CmsProviderPerformance Record|[_service_count](#schema_service_count)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-request-id|string||uuid issued to each request. Injected into all server logs. useful for debugging|
|200|x-sql|string||plaintext SQL used to complete db transaction.|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="some-app-service-cmsproviders">CmsProviders</h1>

## search cms_providers

<a id="opIdsearchCmsProviders"></a>

> Code samples

```javascript

const headers = {
  'Accept':'application/json',
  'x-get-count':'string',
  'x-get-sql':'string'
};

fetch('http://localhost:8080/service-engine-app/service/cms_providers',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```javascript--nodejs
const fetch = require('node-fetch');

const headers = {
  'Accept':'application/json',
  'x-get-count':'string',
  'x-get-sql':'string'
};

fetch('http://localhost:8080/service-engine-app/service/cms_providers',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'x-get-count': 'string',
  'x-get-sql': 'string'
}

r = requests.get('http://localhost:8080/service-engine-app/service/cms_providers', headers = headers)

print(r.json())

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
        "x-get-count": []string{"string"},
        "x-get-sql": []string{"string"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://localhost:8080/service-engine-app/service/cms_providers", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```http
GET http://localhost:8080/service-engine-app/service/cms_providers HTTP/1.1
Host: localhost:8080
Accept: application/json
x-get-count: string
x-get-sql: string

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'x-get-count' => 'string',
  'x-get-sql' => 'string'
}

result = RestClient.get 'http://localhost:8080/service-engine-app/service/cms_providers',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /service-engine-app/service/cms_providers`

<h3 id="search-cms_providers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|address_city|query|string|false|address_city|
|address_country|query|string|false|address_country|
|address_latitude|query|string|false|address_latitude|
|address_longitude|query|string|false|address_longitude|
|address_state|query|string|false|address_state|
|address_street_01|query|string|false|address_street_01|
|address_street_02|query|string|false|address_street_02|
|address_zip_code|query|string|false|address_zip_code|
|entity_type|query|string|false|entity_type|
|npi|query|integer|false|npi|
|provider_type|query|string|false|provider_type|
||fields|query|string|false|record fields to return in results|
||seperator|query|string|false|character to be used as seperator in context & operations values. default is pipe `|`|
||notWhere|query|string|false|SQL query context. Apply query components to where OR get the inverse. Default is false.|
||statementContext|query|string|false|SQL query context. Apply query components all together (and each) OR select any matching (OR).|
||orderBy|query|string|false|seperated list of orderBy fields + direction (field desc || field asc). acs is default.|
||page|query|number|false|pagination page|
||limit|query|number|false|pagination limit|
|x-get-count|header|string|false|Request Search Query count(*) be sent back in a response header.|
|x-get-sql|header|string|false|Request plaintext SQL be sent back in a response header.|

> Example responses

> 200 Response

```json
[
  {
    "address_city": "string",
    "address_country": "string",
    "address_latitude": "string",
    "address_longitude": "string",
    "address_state": "string",
    "address_street_01": "string",
    "address_street_02": "string",
    "address_zip_code": "string",
    "entity_type": "string",
    "npi": 0,
    "provider_type": "string"
  }
]
```

<h3 id="search-cms_providers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A paged array of CmsProviders Records|Inline|

<h3 id="search-cms_providers-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[CmsProviders](#schemacmsproviders)]|false|none|none|
|» address_city|string¦null|false|none|none|
|» address_country|string¦null|false|none|none|
|» address_latitude|string¦null|false|none|none|
|» address_longitude|string¦null|false|none|none|
|» address_state|string¦null|false|none|none|
|» address_street_01|string¦null|false|none|none|
|» address_street_02|string¦null|false|none|none|
|» address_zip_code|string¦null|false|none|none|
|» entity_type|string¦null|false|none|none|
|» npi|integer|false|none|none|
|» provider_type|string¦null|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-request-id|string||uuid issued to each request. Injected into all server logs. useful for debugging|
|200|x-sql|string||plaintext SQL used to complete db transaction.|
|200|x-count|string||full count of all records that meet query criteria (omitting any pagiation specs). useful for rendering pagiation limits without making another service call.|

<aside class="success">
This operation does not require authentication
</aside>

## create cms_providers

<a id="opIdcreateCmsProviders"></a>

> Code samples

```javascript
const inputBody = '[
  {
    "address_city": "string",
    "address_country": "string",
    "address_latitude": "string",
    "address_longitude": "string",
    "address_state": "string",
    "address_street_01": "string",
    "address_street_02": "string",
    "address_zip_code": "string",
    "entity_type": "string",
    "npi": 0,
    "provider_type": "string"
  }
]';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('http://localhost:8080/service-engine-app/service/cms_providers',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```javascript--nodejs
const fetch = require('node-fetch');
const inputBody = [
  {
    "address_city": "string",
    "address_country": "string",
    "address_latitude": "string",
    "address_longitude": "string",
    "address_state": "string",
    "address_street_01": "string",
    "address_street_02": "string",
    "address_zip_code": "string",
    "entity_type": "string",
    "npi": 0,
    "provider_type": "string"
  }
];
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('http://localhost:8080/service-engine-app/service/cms_providers',
{
  method: 'POST',
  body: JSON.stringify(inputBody),
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

r = requests.post('http://localhost:8080/service-engine-app/service/cms_providers', headers = headers)

print(r.json())

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "http://localhost:8080/service-engine-app/service/cms_providers", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```http
POST http://localhost:8080/service-engine-app/service/cms_providers HTTP/1.1
Host: localhost:8080
Content-Type: application/json
Accept: application/json

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json'
}

result = RestClient.post 'http://localhost:8080/service-engine-app/service/cms_providers',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`POST /service-engine-app/service/cms_providers`

> Body parameter

```json
[
  {
    "address_city": "string",
    "address_country": "string",
    "address_latitude": "string",
    "address_longitude": "string",
    "address_state": "string",
    "address_street_01": "string",
    "address_street_02": "string",
    "address_zip_code": "string",
    "entity_type": "string",
    "npi": 0,
    "provider_type": "string"
  }
]
```

<h3 id="create-cms_providers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
||fields|query|string|false|record fields to return in results|
|body|body|[CmsProviders](#schemacmsproviders)|true|Single CmsProviders or array of CmsProviders|

> Example responses

> 200 Response

```json
[
  {
    "address_city": "string",
    "address_country": "string",
    "address_latitude": "string",
    "address_longitude": "string",
    "address_state": "string",
    "address_street_01": "string",
    "address_street_02": "string",
    "address_zip_code": "string",
    "entity_type": "string",
    "npi": 0,
    "provider_type": "string"
  }
]
```

<h3 id="create-cms_providers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A CmsProviders Record|Inline|

<h3 id="create-cms_providers-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[CmsProviders](#schemacmsproviders)]|false|none|none|
|» address_city|string¦null|false|none|none|
|» address_country|string¦null|false|none|none|
|» address_latitude|string¦null|false|none|none|
|» address_longitude|string¦null|false|none|none|
|» address_state|string¦null|false|none|none|
|» address_street_01|string¦null|false|none|none|
|» address_street_02|string¦null|false|none|none|
|» address_zip_code|string¦null|false|none|none|
|» entity_type|string¦null|false|none|none|
|» npi|integer|false|none|none|
|» provider_type|string¦null|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-request-id|string||uuid issued to each request. Injected into all server logs. useful for debugging|
|200|x-sql|string||plaintext SQL used to complete db transaction.|

<aside class="success">
This operation does not require authentication
</aside>

## read cms_providers

<a id="opIdreadCmsProviders"></a>

> Code samples

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('http://localhost:8080/service-engine-app/service/cms_providers/record?npi=0',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```javascript--nodejs
const fetch = require('node-fetch');

const headers = {
  'Accept':'application/json'
};

fetch('http://localhost:8080/service-engine-app/service/cms_providers/record?npi=0',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('http://localhost:8080/service-engine-app/service/cms_providers/record', params={
  'npi': '0'
}, headers = headers)

print(r.json())

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://localhost:8080/service-engine-app/service/cms_providers/record", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```http
GET http://localhost:8080/service-engine-app/service/cms_providers/record?npi=0 HTTP/1.1
Host: localhost:8080
Accept: application/json

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'http://localhost:8080/service-engine-app/service/cms_providers/record',
  params: {
  'npi' => 'integer'
}, headers: headers

p JSON.parse(result)

```

`GET /service-engine-app/service/cms_providers/record`

<h3 id="read-cms_providers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|npi|query|integer|true|npi|
||fields|query|string|false|record fields to return in results|

> Example responses

> 200 Response

```json
{
  "address_city": "string",
  "address_country": "string",
  "address_latitude": "string",
  "address_longitude": "string",
  "address_state": "string",
  "address_street_01": "string",
  "address_street_02": "string",
  "address_zip_code": "string",
  "entity_type": "string",
  "npi": 0,
  "provider_type": "string"
}
```

<h3 id="read-cms_providers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A CmsProviders Record|[CmsProviders](#schemacmsproviders)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-request-id|string||uuid issued to each request. Injected into all server logs. useful for debugging|
|200|x-sql|string||plaintext SQL used to complete db transaction.|

<aside class="success">
This operation does not require authentication
</aside>

## update cms_providers

<a id="opIdupdateCmsProviders"></a>

> Code samples

```javascript
const inputBody = '{
  "address_city": "string",
  "address_country": "string",
  "address_latitude": "string",
  "address_longitude": "string",
  "address_state": "string",
  "address_street_01": "string",
  "address_street_02": "string",
  "address_zip_code": "string",
  "entity_type": "string",
  "npi": 0,
  "provider_type": "string"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('http://localhost:8080/service-engine-app/service/cms_providers/record?npi=0',
{
  method: 'PUT',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```javascript--nodejs
const fetch = require('node-fetch');
const inputBody = {
  "address_city": "string",
  "address_country": "string",
  "address_latitude": "string",
  "address_longitude": "string",
  "address_state": "string",
  "address_street_01": "string",
  "address_street_02": "string",
  "address_zip_code": "string",
  "entity_type": "string",
  "npi": 0,
  "provider_type": "string"
};
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('http://localhost:8080/service-engine-app/service/cms_providers/record?npi=0',
{
  method: 'PUT',
  body: JSON.stringify(inputBody),
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

r = requests.put('http://localhost:8080/service-engine-app/service/cms_providers/record', params={
  'npi': '0'
}, headers = headers)

print(r.json())

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("PUT", "http://localhost:8080/service-engine-app/service/cms_providers/record", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```http
PUT http://localhost:8080/service-engine-app/service/cms_providers/record?npi=0 HTTP/1.1
Host: localhost:8080
Content-Type: application/json
Accept: application/json

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json'
}

result = RestClient.put 'http://localhost:8080/service-engine-app/service/cms_providers/record',
  params: {
  'npi' => 'integer'
}, headers: headers

p JSON.parse(result)

```

`PUT /service-engine-app/service/cms_providers/record`

> Body parameter

```json
{
  "address_city": "string",
  "address_country": "string",
  "address_latitude": "string",
  "address_longitude": "string",
  "address_state": "string",
  "address_street_01": "string",
  "address_street_02": "string",
  "address_zip_code": "string",
  "entity_type": "string",
  "npi": 0,
  "provider_type": "string"
}
```

<h3 id="update-cms_providers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|npi|query|integer|true|npi|
||fields|query|string|false|record fields to return in results|
|body|body|[CmsProviders](#schemacmsproviders)|true|Single CmsProviders|

> Example responses

> 200 Response

```json
{
  "address_city": "string",
  "address_country": "string",
  "address_latitude": "string",
  "address_longitude": "string",
  "address_state": "string",
  "address_street_01": "string",
  "address_street_02": "string",
  "address_zip_code": "string",
  "entity_type": "string",
  "npi": 0,
  "provider_type": "string"
}
```

<h3 id="update-cms_providers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A CmsProviders Record|[CmsProviders](#schemacmsproviders)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-request-id|string||uuid issued to each request. Injected into all server logs. useful for debugging|
|200|x-sql|string||plaintext SQL used to complete db transaction.|

<aside class="success">
This operation does not require authentication
</aside>

## delete cms_providers

<a id="opIddeleteCmsProviders"></a>

> Code samples

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('http://localhost:8080/service-engine-app/service/cms_providers/record?npi=0',
{
  method: 'DELETE',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```javascript--nodejs
const fetch = require('node-fetch');

const headers = {
  'Accept':'application/json'
};

fetch('http://localhost:8080/service-engine-app/service/cms_providers/record?npi=0',
{
  method: 'DELETE',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.delete('http://localhost:8080/service-engine-app/service/cms_providers/record', params={
  'npi': '0'
}, headers = headers)

print(r.json())

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("DELETE", "http://localhost:8080/service-engine-app/service/cms_providers/record", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```http
DELETE http://localhost:8080/service-engine-app/service/cms_providers/record?npi=0 HTTP/1.1
Host: localhost:8080
Accept: application/json

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.delete 'http://localhost:8080/service-engine-app/service/cms_providers/record',
  params: {
  'npi' => 'integer'
}, headers: headers

p JSON.parse(result)

```

`DELETE /service-engine-app/service/cms_providers/record`

<h3 id="delete-cms_providers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|npi|query|integer|true|npi|

> Example responses

> 200 Response

```json
{
  "count": 0
}
```

<h3 id="delete-cms_providers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A CmsProviders Record|[_service_count](#schema_service_count)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-request-id|string||uuid issued to each request. Injected into all server logs. useful for debugging|
|200|x-sql|string||plaintext SQL used to complete db transaction.|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="some-app-service-cmsprovidersindividuals">CmsProvidersIndividuals</h1>

## search cms_providers_individuals

<a id="opIdsearchCmsProvidersIndividuals"></a>

> Code samples

```javascript

const headers = {
  'Accept':'application/json',
  'x-get-count':'string',
  'x-get-sql':'string'
};

fetch('http://localhost:8080/service-engine-app/service/cms_providers_individuals',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```javascript--nodejs
const fetch = require('node-fetch');

const headers = {
  'Accept':'application/json',
  'x-get-count':'string',
  'x-get-sql':'string'
};

fetch('http://localhost:8080/service-engine-app/service/cms_providers_individuals',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'x-get-count': 'string',
  'x-get-sql': 'string'
}

r = requests.get('http://localhost:8080/service-engine-app/service/cms_providers_individuals', headers = headers)

print(r.json())

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
        "x-get-count": []string{"string"},
        "x-get-sql": []string{"string"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://localhost:8080/service-engine-app/service/cms_providers_individuals", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```http
GET http://localhost:8080/service-engine-app/service/cms_providers_individuals HTTP/1.1
Host: localhost:8080
Accept: application/json
x-get-count: string
x-get-sql: string

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'x-get-count' => 'string',
  'x-get-sql' => 'string'
}

result = RestClient.get 'http://localhost:8080/service-engine-app/service/cms_providers_individuals',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /service-engine-app/service/cms_providers_individuals`

<h3 id="search-cms_providers_individuals-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|credentials|query|string|false|credentials|
|gender|query|string|false|gender|
|name_first|query|string|false|name_first|
|name_last|query|string|false|name_last|
|name_middle|query|string|false|name_middle|
|npi|query|integer|false|npi|
||fields|query|string|false|record fields to return in results|
||seperator|query|string|false|character to be used as seperator in context & operations values. default is pipe `|`|
||notWhere|query|string|false|SQL query context. Apply query components to where OR get the inverse. Default is false.|
||statementContext|query|string|false|SQL query context. Apply query components all together (and each) OR select any matching (OR).|
||orderBy|query|string|false|seperated list of orderBy fields + direction (field desc || field asc). acs is default.|
||page|query|number|false|pagination page|
||limit|query|number|false|pagination limit|
|x-get-count|header|string|false|Request Search Query count(*) be sent back in a response header.|
|x-get-sql|header|string|false|Request plaintext SQL be sent back in a response header.|

> Example responses

> 200 Response

```json
[
  {
    "credentials": "string",
    "gender": "string",
    "name_first": "string",
    "name_last": "string",
    "name_middle": "string",
    "npi": 0
  }
]
```

<h3 id="search-cms_providers_individuals-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A paged array of CmsProvidersIndividuals Records|Inline|

<h3 id="search-cms_providers_individuals-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[CmsProvidersIndividuals](#schemacmsprovidersindividuals)]|false|none|none|
|» credentials|string¦null|false|none|none|
|» gender|string¦null|false|none|none|
|» name_first|string¦null|false|none|none|
|» name_last|string¦null|false|none|none|
|» name_middle|string¦null|false|none|none|
|» npi|integer|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-request-id|string||uuid issued to each request. Injected into all server logs. useful for debugging|
|200|x-sql|string||plaintext SQL used to complete db transaction.|
|200|x-count|string||full count of all records that meet query criteria (omitting any pagiation specs). useful for rendering pagiation limits without making another service call.|

<aside class="success">
This operation does not require authentication
</aside>

## create cms_providers_individuals

<a id="opIdcreateCmsProvidersIndividuals"></a>

> Code samples

```javascript
const inputBody = '[
  {
    "credentials": "string",
    "gender": "string",
    "name_first": "string",
    "name_last": "string",
    "name_middle": "string",
    "npi": 0
  }
]';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('http://localhost:8080/service-engine-app/service/cms_providers_individuals',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```javascript--nodejs
const fetch = require('node-fetch');
const inputBody = [
  {
    "credentials": "string",
    "gender": "string",
    "name_first": "string",
    "name_last": "string",
    "name_middle": "string",
    "npi": 0
  }
];
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('http://localhost:8080/service-engine-app/service/cms_providers_individuals',
{
  method: 'POST',
  body: JSON.stringify(inputBody),
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

r = requests.post('http://localhost:8080/service-engine-app/service/cms_providers_individuals', headers = headers)

print(r.json())

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "http://localhost:8080/service-engine-app/service/cms_providers_individuals", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```http
POST http://localhost:8080/service-engine-app/service/cms_providers_individuals HTTP/1.1
Host: localhost:8080
Content-Type: application/json
Accept: application/json

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json'
}

result = RestClient.post 'http://localhost:8080/service-engine-app/service/cms_providers_individuals',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`POST /service-engine-app/service/cms_providers_individuals`

> Body parameter

```json
[
  {
    "credentials": "string",
    "gender": "string",
    "name_first": "string",
    "name_last": "string",
    "name_middle": "string",
    "npi": 0
  }
]
```

<h3 id="create-cms_providers_individuals-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
||fields|query|string|false|record fields to return in results|
|body|body|[CmsProvidersIndividuals](#schemacmsprovidersindividuals)|true|Single CmsProvidersIndividuals or array of CmsProvidersIndividuals|

> Example responses

> 200 Response

```json
[
  {
    "credentials": "string",
    "gender": "string",
    "name_first": "string",
    "name_last": "string",
    "name_middle": "string",
    "npi": 0
  }
]
```

<h3 id="create-cms_providers_individuals-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A CmsProvidersIndividuals Record|Inline|

<h3 id="create-cms_providers_individuals-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[CmsProvidersIndividuals](#schemacmsprovidersindividuals)]|false|none|none|
|» credentials|string¦null|false|none|none|
|» gender|string¦null|false|none|none|
|» name_first|string¦null|false|none|none|
|» name_last|string¦null|false|none|none|
|» name_middle|string¦null|false|none|none|
|» npi|integer|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-request-id|string||uuid issued to each request. Injected into all server logs. useful for debugging|
|200|x-sql|string||plaintext SQL used to complete db transaction.|

<aside class="success">
This operation does not require authentication
</aside>

## read cms_providers_individuals

<a id="opIdreadCmsProvidersIndividuals"></a>

> Code samples

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('http://localhost:8080/service-engine-app/service/cms_providers_individuals/record?npi=0',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```javascript--nodejs
const fetch = require('node-fetch');

const headers = {
  'Accept':'application/json'
};

fetch('http://localhost:8080/service-engine-app/service/cms_providers_individuals/record?npi=0',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('http://localhost:8080/service-engine-app/service/cms_providers_individuals/record', params={
  'npi': '0'
}, headers = headers)

print(r.json())

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://localhost:8080/service-engine-app/service/cms_providers_individuals/record", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```http
GET http://localhost:8080/service-engine-app/service/cms_providers_individuals/record?npi=0 HTTP/1.1
Host: localhost:8080
Accept: application/json

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'http://localhost:8080/service-engine-app/service/cms_providers_individuals/record',
  params: {
  'npi' => 'integer'
}, headers: headers

p JSON.parse(result)

```

`GET /service-engine-app/service/cms_providers_individuals/record`

<h3 id="read-cms_providers_individuals-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|npi|query|integer|true|npi|
||fields|query|string|false|record fields to return in results|

> Example responses

> 200 Response

```json
{
  "credentials": "string",
  "gender": "string",
  "name_first": "string",
  "name_last": "string",
  "name_middle": "string",
  "npi": 0
}
```

<h3 id="read-cms_providers_individuals-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A CmsProvidersIndividuals Record|[CmsProvidersIndividuals](#schemacmsprovidersindividuals)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-request-id|string||uuid issued to each request. Injected into all server logs. useful for debugging|
|200|x-sql|string||plaintext SQL used to complete db transaction.|

<aside class="success">
This operation does not require authentication
</aside>

## update cms_providers_individuals

<a id="opIdupdateCmsProvidersIndividuals"></a>

> Code samples

```javascript
const inputBody = '{
  "credentials": "string",
  "gender": "string",
  "name_first": "string",
  "name_last": "string",
  "name_middle": "string",
  "npi": 0
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('http://localhost:8080/service-engine-app/service/cms_providers_individuals/record?npi=0',
{
  method: 'PUT',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```javascript--nodejs
const fetch = require('node-fetch');
const inputBody = {
  "credentials": "string",
  "gender": "string",
  "name_first": "string",
  "name_last": "string",
  "name_middle": "string",
  "npi": 0
};
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('http://localhost:8080/service-engine-app/service/cms_providers_individuals/record?npi=0',
{
  method: 'PUT',
  body: JSON.stringify(inputBody),
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

r = requests.put('http://localhost:8080/service-engine-app/service/cms_providers_individuals/record', params={
  'npi': '0'
}, headers = headers)

print(r.json())

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("PUT", "http://localhost:8080/service-engine-app/service/cms_providers_individuals/record", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```http
PUT http://localhost:8080/service-engine-app/service/cms_providers_individuals/record?npi=0 HTTP/1.1
Host: localhost:8080
Content-Type: application/json
Accept: application/json

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json'
}

result = RestClient.put 'http://localhost:8080/service-engine-app/service/cms_providers_individuals/record',
  params: {
  'npi' => 'integer'
}, headers: headers

p JSON.parse(result)

```

`PUT /service-engine-app/service/cms_providers_individuals/record`

> Body parameter

```json
{
  "credentials": "string",
  "gender": "string",
  "name_first": "string",
  "name_last": "string",
  "name_middle": "string",
  "npi": 0
}
```

<h3 id="update-cms_providers_individuals-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|npi|query|integer|true|npi|
||fields|query|string|false|record fields to return in results|
|body|body|[CmsProvidersIndividuals](#schemacmsprovidersindividuals)|true|Single CmsProvidersIndividuals|

> Example responses

> 200 Response

```json
{
  "credentials": "string",
  "gender": "string",
  "name_first": "string",
  "name_last": "string",
  "name_middle": "string",
  "npi": 0
}
```

<h3 id="update-cms_providers_individuals-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A CmsProvidersIndividuals Record|[CmsProvidersIndividuals](#schemacmsprovidersindividuals)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-request-id|string||uuid issued to each request. Injected into all server logs. useful for debugging|
|200|x-sql|string||plaintext SQL used to complete db transaction.|

<aside class="success">
This operation does not require authentication
</aside>

## delete cms_providers_individuals

<a id="opIddeleteCmsProvidersIndividuals"></a>

> Code samples

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('http://localhost:8080/service-engine-app/service/cms_providers_individuals/record?npi=0',
{
  method: 'DELETE',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```javascript--nodejs
const fetch = require('node-fetch');

const headers = {
  'Accept':'application/json'
};

fetch('http://localhost:8080/service-engine-app/service/cms_providers_individuals/record?npi=0',
{
  method: 'DELETE',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.delete('http://localhost:8080/service-engine-app/service/cms_providers_individuals/record', params={
  'npi': '0'
}, headers = headers)

print(r.json())

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("DELETE", "http://localhost:8080/service-engine-app/service/cms_providers_individuals/record", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```http
DELETE http://localhost:8080/service-engine-app/service/cms_providers_individuals/record?npi=0 HTTP/1.1
Host: localhost:8080
Accept: application/json

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.delete 'http://localhost:8080/service-engine-app/service/cms_providers_individuals/record',
  params: {
  'npi' => 'integer'
}, headers: headers

p JSON.parse(result)

```

`DELETE /service-engine-app/service/cms_providers_individuals/record`

<h3 id="delete-cms_providers_individuals-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|npi|query|integer|true|npi|

> Example responses

> 200 Response

```json
{
  "count": 0
}
```

<h3 id="delete-cms_providers_individuals-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A CmsProvidersIndividuals Record|[_service_count](#schema_service_count)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-request-id|string||uuid issued to each request. Injected into all server logs. useful for debugging|
|200|x-sql|string||plaintext SQL used to complete db transaction.|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="some-app-service-cmsprovidersorganizations">CmsProvidersOrganizations</h1>

## search cms_providers_organizations

<a id="opIdsearchCmsProvidersOrganizations"></a>

> Code samples

```javascript

const headers = {
  'Accept':'application/json',
  'x-get-count':'string',
  'x-get-sql':'string'
};

fetch('http://localhost:8080/service-engine-app/service/cms_providers_organizations',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```javascript--nodejs
const fetch = require('node-fetch');

const headers = {
  'Accept':'application/json',
  'x-get-count':'string',
  'x-get-sql':'string'
};

fetch('http://localhost:8080/service-engine-app/service/cms_providers_organizations',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'x-get-count': 'string',
  'x-get-sql': 'string'
}

r = requests.get('http://localhost:8080/service-engine-app/service/cms_providers_organizations', headers = headers)

print(r.json())

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
        "x-get-count": []string{"string"},
        "x-get-sql": []string{"string"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://localhost:8080/service-engine-app/service/cms_providers_organizations", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```http
GET http://localhost:8080/service-engine-app/service/cms_providers_organizations HTTP/1.1
Host: localhost:8080
Accept: application/json
x-get-count: string
x-get-sql: string

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'x-get-count' => 'string',
  'x-get-sql' => 'string'
}

result = RestClient.get 'http://localhost:8080/service-engine-app/service/cms_providers_organizations',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /service-engine-app/service/cms_providers_organizations`

<h3 id="search-cms_providers_organizations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|query|string|false|name|
|npi|query|integer|false|npi|
||fields|query|string|false|record fields to return in results|
||seperator|query|string|false|character to be used as seperator in context & operations values. default is pipe `|`|
||notWhere|query|string|false|SQL query context. Apply query components to where OR get the inverse. Default is false.|
||statementContext|query|string|false|SQL query context. Apply query components all together (and each) OR select any matching (OR).|
||orderBy|query|string|false|seperated list of orderBy fields + direction (field desc || field asc). acs is default.|
||page|query|number|false|pagination page|
||limit|query|number|false|pagination limit|
|x-get-count|header|string|false|Request Search Query count(*) be sent back in a response header.|
|x-get-sql|header|string|false|Request plaintext SQL be sent back in a response header.|

> Example responses

> 200 Response

```json
[
  {
    "name": "string",
    "npi": 0
  }
]
```

<h3 id="search-cms_providers_organizations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A paged array of CmsProvidersOrganizations Records|Inline|

<h3 id="search-cms_providers_organizations-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[CmsProvidersOrganizations](#schemacmsprovidersorganizations)]|false|none|none|
|» name|string¦null|false|none|none|
|» npi|integer|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-request-id|string||uuid issued to each request. Injected into all server logs. useful for debugging|
|200|x-sql|string||plaintext SQL used to complete db transaction.|
|200|x-count|string||full count of all records that meet query criteria (omitting any pagiation specs). useful for rendering pagiation limits without making another service call.|

<aside class="success">
This operation does not require authentication
</aside>

## create cms_providers_organizations

<a id="opIdcreateCmsProvidersOrganizations"></a>

> Code samples

```javascript
const inputBody = '[
  {
    "name": "string",
    "npi": 0
  }
]';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('http://localhost:8080/service-engine-app/service/cms_providers_organizations',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```javascript--nodejs
const fetch = require('node-fetch');
const inputBody = [
  {
    "name": "string",
    "npi": 0
  }
];
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('http://localhost:8080/service-engine-app/service/cms_providers_organizations',
{
  method: 'POST',
  body: JSON.stringify(inputBody),
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

r = requests.post('http://localhost:8080/service-engine-app/service/cms_providers_organizations', headers = headers)

print(r.json())

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "http://localhost:8080/service-engine-app/service/cms_providers_organizations", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```http
POST http://localhost:8080/service-engine-app/service/cms_providers_organizations HTTP/1.1
Host: localhost:8080
Content-Type: application/json
Accept: application/json

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json'
}

result = RestClient.post 'http://localhost:8080/service-engine-app/service/cms_providers_organizations',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`POST /service-engine-app/service/cms_providers_organizations`

> Body parameter

```json
[
  {
    "name": "string",
    "npi": 0
  }
]
```

<h3 id="create-cms_providers_organizations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
||fields|query|string|false|record fields to return in results|
|body|body|[CmsProvidersOrganizations](#schemacmsprovidersorganizations)|true|Single CmsProvidersOrganizations or array of CmsProvidersOrganizations|

> Example responses

> 200 Response

```json
[
  {
    "name": "string",
    "npi": 0
  }
]
```

<h3 id="create-cms_providers_organizations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A CmsProvidersOrganizations Record|Inline|

<h3 id="create-cms_providers_organizations-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[CmsProvidersOrganizations](#schemacmsprovidersorganizations)]|false|none|none|
|» name|string¦null|false|none|none|
|» npi|integer|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-request-id|string||uuid issued to each request. Injected into all server logs. useful for debugging|
|200|x-sql|string||plaintext SQL used to complete db transaction.|

<aside class="success">
This operation does not require authentication
</aside>

## read cms_providers_organizations

<a id="opIdreadCmsProvidersOrganizations"></a>

> Code samples

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('http://localhost:8080/service-engine-app/service/cms_providers_organizations/record?npi=0',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```javascript--nodejs
const fetch = require('node-fetch');

const headers = {
  'Accept':'application/json'
};

fetch('http://localhost:8080/service-engine-app/service/cms_providers_organizations/record?npi=0',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('http://localhost:8080/service-engine-app/service/cms_providers_organizations/record', params={
  'npi': '0'
}, headers = headers)

print(r.json())

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://localhost:8080/service-engine-app/service/cms_providers_organizations/record", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```http
GET http://localhost:8080/service-engine-app/service/cms_providers_organizations/record?npi=0 HTTP/1.1
Host: localhost:8080
Accept: application/json

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'http://localhost:8080/service-engine-app/service/cms_providers_organizations/record',
  params: {
  'npi' => 'integer'
}, headers: headers

p JSON.parse(result)

```

`GET /service-engine-app/service/cms_providers_organizations/record`

<h3 id="read-cms_providers_organizations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|npi|query|integer|true|npi|
||fields|query|string|false|record fields to return in results|

> Example responses

> 200 Response

```json
{
  "name": "string",
  "npi": 0
}
```

<h3 id="read-cms_providers_organizations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A CmsProvidersOrganizations Record|[CmsProvidersOrganizations](#schemacmsprovidersorganizations)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-request-id|string||uuid issued to each request. Injected into all server logs. useful for debugging|
|200|x-sql|string||plaintext SQL used to complete db transaction.|

<aside class="success">
This operation does not require authentication
</aside>

## update cms_providers_organizations

<a id="opIdupdateCmsProvidersOrganizations"></a>

> Code samples

```javascript
const inputBody = '{
  "name": "string",
  "npi": 0
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('http://localhost:8080/service-engine-app/service/cms_providers_organizations/record?npi=0',
{
  method: 'PUT',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```javascript--nodejs
const fetch = require('node-fetch');
const inputBody = {
  "name": "string",
  "npi": 0
};
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('http://localhost:8080/service-engine-app/service/cms_providers_organizations/record?npi=0',
{
  method: 'PUT',
  body: JSON.stringify(inputBody),
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

r = requests.put('http://localhost:8080/service-engine-app/service/cms_providers_organizations/record', params={
  'npi': '0'
}, headers = headers)

print(r.json())

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("PUT", "http://localhost:8080/service-engine-app/service/cms_providers_organizations/record", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```http
PUT http://localhost:8080/service-engine-app/service/cms_providers_organizations/record?npi=0 HTTP/1.1
Host: localhost:8080
Content-Type: application/json
Accept: application/json

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json'
}

result = RestClient.put 'http://localhost:8080/service-engine-app/service/cms_providers_organizations/record',
  params: {
  'npi' => 'integer'
}, headers: headers

p JSON.parse(result)

```

`PUT /service-engine-app/service/cms_providers_organizations/record`

> Body parameter

```json
{
  "name": "string",
  "npi": 0
}
```

<h3 id="update-cms_providers_organizations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|npi|query|integer|true|npi|
||fields|query|string|false|record fields to return in results|
|body|body|[CmsProvidersOrganizations](#schemacmsprovidersorganizations)|true|Single CmsProvidersOrganizations|

> Example responses

> 200 Response

```json
{
  "name": "string",
  "npi": 0
}
```

<h3 id="update-cms_providers_organizations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A CmsProvidersOrganizations Record|[CmsProvidersOrganizations](#schemacmsprovidersorganizations)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-request-id|string||uuid issued to each request. Injected into all server logs. useful for debugging|
|200|x-sql|string||plaintext SQL used to complete db transaction.|

<aside class="success">
This operation does not require authentication
</aside>

## delete cms_providers_organizations

<a id="opIddeleteCmsProvidersOrganizations"></a>

> Code samples

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('http://localhost:8080/service-engine-app/service/cms_providers_organizations/record?npi=0',
{
  method: 'DELETE',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```javascript--nodejs
const fetch = require('node-fetch');

const headers = {
  'Accept':'application/json'
};

fetch('http://localhost:8080/service-engine-app/service/cms_providers_organizations/record?npi=0',
{
  method: 'DELETE',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.delete('http://localhost:8080/service-engine-app/service/cms_providers_organizations/record', params={
  'npi': '0'
}, headers = headers)

print(r.json())

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("DELETE", "http://localhost:8080/service-engine-app/service/cms_providers_organizations/record", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```http
DELETE http://localhost:8080/service-engine-app/service/cms_providers_organizations/record?npi=0 HTTP/1.1
Host: localhost:8080
Accept: application/json

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.delete 'http://localhost:8080/service-engine-app/service/cms_providers_organizations/record',
  params: {
  'npi' => 'integer'
}, headers: headers

p JSON.parse(result)

```

`DELETE /service-engine-app/service/cms_providers_organizations/record`

<h3 id="delete-cms_providers_organizations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|npi|query|integer|true|npi|

> Example responses

> 200 Response

```json
{
  "count": 0
}
```

<h3 id="delete-cms_providers_organizations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A CmsProvidersOrganizations Record|[_service_count](#schema_service_count)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-request-id|string||uuid issued to each request. Injected into all server logs. useful for debugging|
|200|x-sql|string||plaintext SQL used to complete db transaction.|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="some-app-service-cmsserviceperformance">CmsServicePerformance</h1>

## search cms_service_performance

<a id="opIdsearchCmsServicePerformance"></a>

> Code samples

```javascript

const headers = {
  'Accept':'application/json',
  'x-get-count':'string',
  'x-get-sql':'string'
};

fetch('http://localhost:8080/service-engine-app/service/cms_service_performance',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```javascript--nodejs
const fetch = require('node-fetch');

const headers = {
  'Accept':'application/json',
  'x-get-count':'string',
  'x-get-sql':'string'
};

fetch('http://localhost:8080/service-engine-app/service/cms_service_performance',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'x-get-count': 'string',
  'x-get-sql': 'string'
}

r = requests.get('http://localhost:8080/service-engine-app/service/cms_service_performance', headers = headers)

print(r.json())

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
        "x-get-count": []string{"string"},
        "x-get-sql": []string{"string"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://localhost:8080/service-engine-app/service/cms_service_performance", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```http
GET http://localhost:8080/service-engine-app/service/cms_service_performance HTTP/1.1
Host: localhost:8080
Accept: application/json
x-get-count: string
x-get-sql: string

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'x-get-count' => 'string',
  'x-get-sql' => 'string'
}

result = RestClient.get 'http://localhost:8080/service-engine-app/service/cms_service_performance',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /service-engine-app/service/cms_service_performance`

<h3 id="search-cms_service_performance-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|avg_avg_mcare_allowed_amt|query|string|false|avg_avg_mcare_allowed_amt|
|avg_avg_mcare_pay_amt|query|string|false|avg_avg_mcare_pay_amt|
|avg_avg_mcare_standardized_amt|query|string|false|avg_avg_mcare_standardized_amt|
|avg_avg_submitted_charge_amt|query|string|false|avg_avg_submitted_charge_amt|
|entity_type|query|string|false|entity_type|
|est_ttl_mcare_allowed_amt|query|string|false|est_ttl_mcare_allowed_amt|
|est_ttl_mcare_pay_amt|query|string|false|est_ttl_mcare_pay_amt|
|est_ttl_mcare_standardized_amt|query|string|false|est_ttl_mcare_standardized_amt|
|est_ttl_submitted_charge_amt|query|string|false|est_ttl_submitted_charge_amt|
|hcpcs_code|query|string|false|hcpcs_code|
|max_avg_mcare_allowed_amt|query|string|false|max_avg_mcare_allowed_amt|
|max_avg_mcare_pay_amt|query|string|false|max_avg_mcare_pay_amt|
|max_avg_mcare_standardized_amt|query|string|false|max_avg_mcare_standardized_amt|
|max_avg_submitted_charge_amt|query|string|false|max_avg_submitted_charge_amt|
|min_avg_mcare_allowed_amt|query|string|false|min_avg_mcare_allowed_amt|
|min_avg_mcare_pay_amt|query|string|false|min_avg_mcare_pay_amt|
|min_avg_mcare_standardized_amt|query|string|false|min_avg_mcare_standardized_amt|
|min_avg_submitted_charge_amt|query|string|false|min_avg_submitted_charge_amt|
|n_of_distinct_mcare_beneficiary_per_day_svcs|query|string|false|n_of_distinct_mcare_beneficiary_per_day_svcs|
|n_of_mcare_beneficiaries|query|string|false|n_of_mcare_beneficiaries|
|n_of_svcs|query|string|false|n_of_svcs|
|prisma_id|query|integer|false|prisma_id|
|providers|query|string|false|providers|
|rank_avg_avg_mcare_allowed_amt|query|string|false|rank_avg_avg_mcare_allowed_amt|
|rank_avg_avg_mcare_pay_amt|query|string|false|rank_avg_avg_mcare_pay_amt|
|rank_avg_avg_mcare_standardized_amt|query|string|false|rank_avg_avg_mcare_standardized_amt|
|rank_avg_avg_submitted_charge_amt|query|string|false|rank_avg_avg_submitted_charge_amt|
|rank_est_ttl_mcare_allowed_amt|query|string|false|rank_est_ttl_mcare_allowed_amt|
|rank_est_ttl_mcare_pay_amt|query|string|false|rank_est_ttl_mcare_pay_amt|
|rank_est_ttl_mcare_standardized_amt|query|string|false|rank_est_ttl_mcare_standardized_amt|
|rank_est_ttl_submitted_charge_amt|query|string|false|rank_est_ttl_submitted_charge_amt|
|rank_max_avg_mcare_allowed_amt|query|string|false|rank_max_avg_mcare_allowed_amt|
|rank_max_avg_mcare_pay_amt|query|string|false|rank_max_avg_mcare_pay_amt|
|rank_max_avg_mcare_standardized_amt|query|string|false|rank_max_avg_mcare_standardized_amt|
|rank_max_avg_submitted_charge_amt|query|string|false|rank_max_avg_submitted_charge_amt|
|rank_min_avg_mcare_allowed_amt|query|string|false|rank_min_avg_mcare_allowed_amt|
|rank_min_avg_mcare_pay_amt|query|string|false|rank_min_avg_mcare_pay_amt|
|rank_min_avg_mcare_standardized_amt|query|string|false|rank_min_avg_mcare_standardized_amt|
|rank_min_avg_submitted_charge_amt|query|string|false|rank_min_avg_submitted_charge_amt|
|rank_n_of_distinct_mcare_beneficiary_per_day_svcs|query|string|false|rank_n_of_distinct_mcare_beneficiary_per_day_svcs|
|rank_n_of_mcare_beneficiaries|query|string|false|rank_n_of_mcare_beneficiaries|
|rank_n_of_svcs|query|string|false|rank_n_of_svcs|
|rank_providers|query|string|false|rank_providers|
|rank_var_avg_mcare_allowed_amt|query|string|false|rank_var_avg_mcare_allowed_amt|
|rank_var_avg_mcare_pay_amt|query|string|false|rank_var_avg_mcare_pay_amt|
|rank_var_avg_mcare_standardized_amt|query|string|false|rank_var_avg_mcare_standardized_amt|
|rank_var_avg_mcare_submitted_charge_pay_amt|query|string|false|rank_var_avg_mcare_submitted_charge_pay_amt|
|rank_var_avg_submitted_charge_amt|query|string|false|rank_var_avg_submitted_charge_amt|
|var_avg_mcare_allowed_amt|query|string|false|var_avg_mcare_allowed_amt|
|var_avg_mcare_pay_amt|query|string|false|var_avg_mcare_pay_amt|
|var_avg_mcare_standardized_amt|query|string|false|var_avg_mcare_standardized_amt|
|var_avg_mcare_submitted_charge_pay_amt|query|string|false|var_avg_mcare_submitted_charge_pay_amt|
|var_avg_submitted_charge_amt|query|string|false|var_avg_submitted_charge_amt|
||fields|query|string|false|record fields to return in results|
||seperator|query|string|false|character to be used as seperator in context & operations values. default is pipe `|`|
||notWhere|query|string|false|SQL query context. Apply query components to where OR get the inverse. Default is false.|
||statementContext|query|string|false|SQL query context. Apply query components all together (and each) OR select any matching (OR).|
||orderBy|query|string|false|seperated list of orderBy fields + direction (field desc || field asc). acs is default.|
||page|query|number|false|pagination page|
||limit|query|number|false|pagination limit|
|x-get-count|header|string|false|Request Search Query count(*) be sent back in a response header.|
|x-get-sql|header|string|false|Request plaintext SQL be sent back in a response header.|

> Example responses

> 200 Response

```json
[
  {
    "avg_avg_mcare_allowed_amt": "string",
    "avg_avg_mcare_pay_amt": "string",
    "avg_avg_mcare_standardized_amt": "string",
    "avg_avg_submitted_charge_amt": "string",
    "entity_type": "string",
    "est_ttl_mcare_allowed_amt": "string",
    "est_ttl_mcare_pay_amt": "string",
    "est_ttl_mcare_standardized_amt": "string",
    "est_ttl_submitted_charge_amt": "string",
    "hcpcs_code": "string",
    "max_avg_mcare_allowed_amt": "string",
    "max_avg_mcare_pay_amt": "string",
    "max_avg_mcare_standardized_amt": "string",
    "max_avg_submitted_charge_amt": "string",
    "min_avg_mcare_allowed_amt": "string",
    "min_avg_mcare_pay_amt": "string",
    "min_avg_mcare_standardized_amt": "string",
    "min_avg_submitted_charge_amt": "string",
    "n_of_distinct_mcare_beneficiary_per_day_svcs": "string",
    "n_of_mcare_beneficiaries": "string",
    "n_of_svcs": "string",
    "prisma_id": 0,
    "providers": "string",
    "rank_avg_avg_mcare_allowed_amt": "string",
    "rank_avg_avg_mcare_pay_amt": "string",
    "rank_avg_avg_mcare_standardized_amt": "string",
    "rank_avg_avg_submitted_charge_amt": "string",
    "rank_est_ttl_mcare_allowed_amt": "string",
    "rank_est_ttl_mcare_pay_amt": "string",
    "rank_est_ttl_mcare_standardized_amt": "string",
    "rank_est_ttl_submitted_charge_amt": "string",
    "rank_max_avg_mcare_allowed_amt": "string",
    "rank_max_avg_mcare_pay_amt": "string",
    "rank_max_avg_mcare_standardized_amt": "string",
    "rank_max_avg_submitted_charge_amt": "string",
    "rank_min_avg_mcare_allowed_amt": "string",
    "rank_min_avg_mcare_pay_amt": "string",
    "rank_min_avg_mcare_standardized_amt": "string",
    "rank_min_avg_submitted_charge_amt": "string",
    "rank_n_of_distinct_mcare_beneficiary_per_day_svcs": "string",
    "rank_n_of_mcare_beneficiaries": "string",
    "rank_n_of_svcs": "string",
    "rank_providers": "string",
    "rank_var_avg_mcare_allowed_amt": "string",
    "rank_var_avg_mcare_pay_amt": "string",
    "rank_var_avg_mcare_standardized_amt": "string",
    "rank_var_avg_mcare_submitted_charge_pay_amt": "string",
    "rank_var_avg_submitted_charge_amt": "string",
    "var_avg_mcare_allowed_amt": "string",
    "var_avg_mcare_pay_amt": "string",
    "var_avg_mcare_standardized_amt": "string",
    "var_avg_mcare_submitted_charge_pay_amt": "string",
    "var_avg_submitted_charge_amt": "string"
  }
]
```

<h3 id="search-cms_service_performance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A paged array of CmsServicePerformance Records|Inline|

<h3 id="search-cms_service_performance-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[CmsServicePerformance](#schemacmsserviceperformance)]|false|none|none|
|» avg_avg_mcare_allowed_amt|string¦null|false|none|none|
|» avg_avg_mcare_pay_amt|string¦null|false|none|none|
|» avg_avg_mcare_standardized_amt|string¦null|false|none|none|
|» avg_avg_submitted_charge_amt|string¦null|false|none|none|
|» entity_type|string|false|none|none|
|» est_ttl_mcare_allowed_amt|string¦null|false|none|none|
|» est_ttl_mcare_pay_amt|string¦null|false|none|none|
|» est_ttl_mcare_standardized_amt|string¦null|false|none|none|
|» est_ttl_submitted_charge_amt|string¦null|false|none|none|
|» hcpcs_code|string|false|none|none|
|» max_avg_mcare_allowed_amt|string¦null|false|none|none|
|» max_avg_mcare_pay_amt|string¦null|false|none|none|
|» max_avg_mcare_standardized_amt|string¦null|false|none|none|
|» max_avg_submitted_charge_amt|string¦null|false|none|none|
|» min_avg_mcare_allowed_amt|string¦null|false|none|none|
|» min_avg_mcare_pay_amt|string¦null|false|none|none|
|» min_avg_mcare_standardized_amt|string¦null|false|none|none|
|» min_avg_submitted_charge_amt|string¦null|false|none|none|
|» n_of_distinct_mcare_beneficiary_per_day_svcs|string¦null|false|none|none|
|» n_of_mcare_beneficiaries|string¦null|false|none|none|
|» n_of_svcs|string¦null|false|none|none|
|» prisma_id|integer|false|none|none|
|» providers|string¦null|false|none|none|
|» rank_avg_avg_mcare_allowed_amt|string¦null|false|none|none|
|» rank_avg_avg_mcare_pay_amt|string¦null|false|none|none|
|» rank_avg_avg_mcare_standardized_amt|string¦null|false|none|none|
|» rank_avg_avg_submitted_charge_amt|string¦null|false|none|none|
|» rank_est_ttl_mcare_allowed_amt|string¦null|false|none|none|
|» rank_est_ttl_mcare_pay_amt|string¦null|false|none|none|
|» rank_est_ttl_mcare_standardized_amt|string¦null|false|none|none|
|» rank_est_ttl_submitted_charge_amt|string¦null|false|none|none|
|» rank_max_avg_mcare_allowed_amt|string¦null|false|none|none|
|» rank_max_avg_mcare_pay_amt|string¦null|false|none|none|
|» rank_max_avg_mcare_standardized_amt|string¦null|false|none|none|
|» rank_max_avg_submitted_charge_amt|string¦null|false|none|none|
|» rank_min_avg_mcare_allowed_amt|string¦null|false|none|none|
|» rank_min_avg_mcare_pay_amt|string¦null|false|none|none|
|» rank_min_avg_mcare_standardized_amt|string¦null|false|none|none|
|» rank_min_avg_submitted_charge_amt|string¦null|false|none|none|
|» rank_n_of_distinct_mcare_beneficiary_per_day_svcs|string¦null|false|none|none|
|» rank_n_of_mcare_beneficiaries|string¦null|false|none|none|
|» rank_n_of_svcs|string¦null|false|none|none|
|» rank_providers|string¦null|false|none|none|
|» rank_var_avg_mcare_allowed_amt|string¦null|false|none|none|
|» rank_var_avg_mcare_pay_amt|string¦null|false|none|none|
|» rank_var_avg_mcare_standardized_amt|string¦null|false|none|none|
|» rank_var_avg_mcare_submitted_charge_pay_amt|string¦null|false|none|none|
|» rank_var_avg_submitted_charge_amt|string¦null|false|none|none|
|» var_avg_mcare_allowed_amt|string¦null|false|none|none|
|» var_avg_mcare_pay_amt|string¦null|false|none|none|
|» var_avg_mcare_standardized_amt|string¦null|false|none|none|
|» var_avg_mcare_submitted_charge_pay_amt|string¦null|false|none|none|
|» var_avg_submitted_charge_amt|string¦null|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-request-id|string||uuid issued to each request. Injected into all server logs. useful for debugging|
|200|x-sql|string||plaintext SQL used to complete db transaction.|
|200|x-count|string||full count of all records that meet query criteria (omitting any pagiation specs). useful for rendering pagiation limits without making another service call.|

<aside class="success">
This operation does not require authentication
</aside>

## create cms_service_performance

<a id="opIdcreateCmsServicePerformance"></a>

> Code samples

```javascript
const inputBody = '[
  {
    "avg_avg_mcare_allowed_amt": "string",
    "avg_avg_mcare_pay_amt": "string",
    "avg_avg_mcare_standardized_amt": "string",
    "avg_avg_submitted_charge_amt": "string",
    "entity_type": "string",
    "est_ttl_mcare_allowed_amt": "string",
    "est_ttl_mcare_pay_amt": "string",
    "est_ttl_mcare_standardized_amt": "string",
    "est_ttl_submitted_charge_amt": "string",
    "hcpcs_code": "string",
    "max_avg_mcare_allowed_amt": "string",
    "max_avg_mcare_pay_amt": "string",
    "max_avg_mcare_standardized_amt": "string",
    "max_avg_submitted_charge_amt": "string",
    "min_avg_mcare_allowed_amt": "string",
    "min_avg_mcare_pay_amt": "string",
    "min_avg_mcare_standardized_amt": "string",
    "min_avg_submitted_charge_amt": "string",
    "n_of_distinct_mcare_beneficiary_per_day_svcs": "string",
    "n_of_mcare_beneficiaries": "string",
    "n_of_svcs": "string",
    "prisma_id": 0,
    "providers": "string",
    "rank_avg_avg_mcare_allowed_amt": "string",
    "rank_avg_avg_mcare_pay_amt": "string",
    "rank_avg_avg_mcare_standardized_amt": "string",
    "rank_avg_avg_submitted_charge_amt": "string",
    "rank_est_ttl_mcare_allowed_amt": "string",
    "rank_est_ttl_mcare_pay_amt": "string",
    "rank_est_ttl_mcare_standardized_amt": "string",
    "rank_est_ttl_submitted_charge_amt": "string",
    "rank_max_avg_mcare_allowed_amt": "string",
    "rank_max_avg_mcare_pay_amt": "string",
    "rank_max_avg_mcare_standardized_amt": "string",
    "rank_max_avg_submitted_charge_amt": "string",
    "rank_min_avg_mcare_allowed_amt": "string",
    "rank_min_avg_mcare_pay_amt": "string",
    "rank_min_avg_mcare_standardized_amt": "string",
    "rank_min_avg_submitted_charge_amt": "string",
    "rank_n_of_distinct_mcare_beneficiary_per_day_svcs": "string",
    "rank_n_of_mcare_beneficiaries": "string",
    "rank_n_of_svcs": "string",
    "rank_providers": "string",
    "rank_var_avg_mcare_allowed_amt": "string",
    "rank_var_avg_mcare_pay_amt": "string",
    "rank_var_avg_mcare_standardized_amt": "string",
    "rank_var_avg_mcare_submitted_charge_pay_amt": "string",
    "rank_var_avg_submitted_charge_amt": "string",
    "var_avg_mcare_allowed_amt": "string",
    "var_avg_mcare_pay_amt": "string",
    "var_avg_mcare_standardized_amt": "string",
    "var_avg_mcare_submitted_charge_pay_amt": "string",
    "var_avg_submitted_charge_amt": "string"
  }
]';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('http://localhost:8080/service-engine-app/service/cms_service_performance',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```javascript--nodejs
const fetch = require('node-fetch');
const inputBody = [
  {
    "avg_avg_mcare_allowed_amt": "string",
    "avg_avg_mcare_pay_amt": "string",
    "avg_avg_mcare_standardized_amt": "string",
    "avg_avg_submitted_charge_amt": "string",
    "entity_type": "string",
    "est_ttl_mcare_allowed_amt": "string",
    "est_ttl_mcare_pay_amt": "string",
    "est_ttl_mcare_standardized_amt": "string",
    "est_ttl_submitted_charge_amt": "string",
    "hcpcs_code": "string",
    "max_avg_mcare_allowed_amt": "string",
    "max_avg_mcare_pay_amt": "string",
    "max_avg_mcare_standardized_amt": "string",
    "max_avg_submitted_charge_amt": "string",
    "min_avg_mcare_allowed_amt": "string",
    "min_avg_mcare_pay_amt": "string",
    "min_avg_mcare_standardized_amt": "string",
    "min_avg_submitted_charge_amt": "string",
    "n_of_distinct_mcare_beneficiary_per_day_svcs": "string",
    "n_of_mcare_beneficiaries": "string",
    "n_of_svcs": "string",
    "prisma_id": 0,
    "providers": "string",
    "rank_avg_avg_mcare_allowed_amt": "string",
    "rank_avg_avg_mcare_pay_amt": "string",
    "rank_avg_avg_mcare_standardized_amt": "string",
    "rank_avg_avg_submitted_charge_amt": "string",
    "rank_est_ttl_mcare_allowed_amt": "string",
    "rank_est_ttl_mcare_pay_amt": "string",
    "rank_est_ttl_mcare_standardized_amt": "string",
    "rank_est_ttl_submitted_charge_amt": "string",
    "rank_max_avg_mcare_allowed_amt": "string",
    "rank_max_avg_mcare_pay_amt": "string",
    "rank_max_avg_mcare_standardized_amt": "string",
    "rank_max_avg_submitted_charge_amt": "string",
    "rank_min_avg_mcare_allowed_amt": "string",
    "rank_min_avg_mcare_pay_amt": "string",
    "rank_min_avg_mcare_standardized_amt": "string",
    "rank_min_avg_submitted_charge_amt": "string",
    "rank_n_of_distinct_mcare_beneficiary_per_day_svcs": "string",
    "rank_n_of_mcare_beneficiaries": "string",
    "rank_n_of_svcs": "string",
    "rank_providers": "string",
    "rank_var_avg_mcare_allowed_amt": "string",
    "rank_var_avg_mcare_pay_amt": "string",
    "rank_var_avg_mcare_standardized_amt": "string",
    "rank_var_avg_mcare_submitted_charge_pay_amt": "string",
    "rank_var_avg_submitted_charge_amt": "string",
    "var_avg_mcare_allowed_amt": "string",
    "var_avg_mcare_pay_amt": "string",
    "var_avg_mcare_standardized_amt": "string",
    "var_avg_mcare_submitted_charge_pay_amt": "string",
    "var_avg_submitted_charge_amt": "string"
  }
];
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('http://localhost:8080/service-engine-app/service/cms_service_performance',
{
  method: 'POST',
  body: JSON.stringify(inputBody),
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

r = requests.post('http://localhost:8080/service-engine-app/service/cms_service_performance', headers = headers)

print(r.json())

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "http://localhost:8080/service-engine-app/service/cms_service_performance", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```http
POST http://localhost:8080/service-engine-app/service/cms_service_performance HTTP/1.1
Host: localhost:8080
Content-Type: application/json
Accept: application/json

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json'
}

result = RestClient.post 'http://localhost:8080/service-engine-app/service/cms_service_performance',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`POST /service-engine-app/service/cms_service_performance`

> Body parameter

```json
[
  {
    "avg_avg_mcare_allowed_amt": "string",
    "avg_avg_mcare_pay_amt": "string",
    "avg_avg_mcare_standardized_amt": "string",
    "avg_avg_submitted_charge_amt": "string",
    "entity_type": "string",
    "est_ttl_mcare_allowed_amt": "string",
    "est_ttl_mcare_pay_amt": "string",
    "est_ttl_mcare_standardized_amt": "string",
    "est_ttl_submitted_charge_amt": "string",
    "hcpcs_code": "string",
    "max_avg_mcare_allowed_amt": "string",
    "max_avg_mcare_pay_amt": "string",
    "max_avg_mcare_standardized_amt": "string",
    "max_avg_submitted_charge_amt": "string",
    "min_avg_mcare_allowed_amt": "string",
    "min_avg_mcare_pay_amt": "string",
    "min_avg_mcare_standardized_amt": "string",
    "min_avg_submitted_charge_amt": "string",
    "n_of_distinct_mcare_beneficiary_per_day_svcs": "string",
    "n_of_mcare_beneficiaries": "string",
    "n_of_svcs": "string",
    "prisma_id": 0,
    "providers": "string",
    "rank_avg_avg_mcare_allowed_amt": "string",
    "rank_avg_avg_mcare_pay_amt": "string",
    "rank_avg_avg_mcare_standardized_amt": "string",
    "rank_avg_avg_submitted_charge_amt": "string",
    "rank_est_ttl_mcare_allowed_amt": "string",
    "rank_est_ttl_mcare_pay_amt": "string",
    "rank_est_ttl_mcare_standardized_amt": "string",
    "rank_est_ttl_submitted_charge_amt": "string",
    "rank_max_avg_mcare_allowed_amt": "string",
    "rank_max_avg_mcare_pay_amt": "string",
    "rank_max_avg_mcare_standardized_amt": "string",
    "rank_max_avg_submitted_charge_amt": "string",
    "rank_min_avg_mcare_allowed_amt": "string",
    "rank_min_avg_mcare_pay_amt": "string",
    "rank_min_avg_mcare_standardized_amt": "string",
    "rank_min_avg_submitted_charge_amt": "string",
    "rank_n_of_distinct_mcare_beneficiary_per_day_svcs": "string",
    "rank_n_of_mcare_beneficiaries": "string",
    "rank_n_of_svcs": "string",
    "rank_providers": "string",
    "rank_var_avg_mcare_allowed_amt": "string",
    "rank_var_avg_mcare_pay_amt": "string",
    "rank_var_avg_mcare_standardized_amt": "string",
    "rank_var_avg_mcare_submitted_charge_pay_amt": "string",
    "rank_var_avg_submitted_charge_amt": "string",
    "var_avg_mcare_allowed_amt": "string",
    "var_avg_mcare_pay_amt": "string",
    "var_avg_mcare_standardized_amt": "string",
    "var_avg_mcare_submitted_charge_pay_amt": "string",
    "var_avg_submitted_charge_amt": "string"
  }
]
```

<h3 id="create-cms_service_performance-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
||fields|query|string|false|record fields to return in results|
|body|body|[CmsServicePerformance](#schemacmsserviceperformance)|true|Single CmsServicePerformance or array of CmsServicePerformance|

> Example responses

> 200 Response

```json
[
  {
    "avg_avg_mcare_allowed_amt": "string",
    "avg_avg_mcare_pay_amt": "string",
    "avg_avg_mcare_standardized_amt": "string",
    "avg_avg_submitted_charge_amt": "string",
    "entity_type": "string",
    "est_ttl_mcare_allowed_amt": "string",
    "est_ttl_mcare_pay_amt": "string",
    "est_ttl_mcare_standardized_amt": "string",
    "est_ttl_submitted_charge_amt": "string",
    "hcpcs_code": "string",
    "max_avg_mcare_allowed_amt": "string",
    "max_avg_mcare_pay_amt": "string",
    "max_avg_mcare_standardized_amt": "string",
    "max_avg_submitted_charge_amt": "string",
    "min_avg_mcare_allowed_amt": "string",
    "min_avg_mcare_pay_amt": "string",
    "min_avg_mcare_standardized_amt": "string",
    "min_avg_submitted_charge_amt": "string",
    "n_of_distinct_mcare_beneficiary_per_day_svcs": "string",
    "n_of_mcare_beneficiaries": "string",
    "n_of_svcs": "string",
    "prisma_id": 0,
    "providers": "string",
    "rank_avg_avg_mcare_allowed_amt": "string",
    "rank_avg_avg_mcare_pay_amt": "string",
    "rank_avg_avg_mcare_standardized_amt": "string",
    "rank_avg_avg_submitted_charge_amt": "string",
    "rank_est_ttl_mcare_allowed_amt": "string",
    "rank_est_ttl_mcare_pay_amt": "string",
    "rank_est_ttl_mcare_standardized_amt": "string",
    "rank_est_ttl_submitted_charge_amt": "string",
    "rank_max_avg_mcare_allowed_amt": "string",
    "rank_max_avg_mcare_pay_amt": "string",
    "rank_max_avg_mcare_standardized_amt": "string",
    "rank_max_avg_submitted_charge_amt": "string",
    "rank_min_avg_mcare_allowed_amt": "string",
    "rank_min_avg_mcare_pay_amt": "string",
    "rank_min_avg_mcare_standardized_amt": "string",
    "rank_min_avg_submitted_charge_amt": "string",
    "rank_n_of_distinct_mcare_beneficiary_per_day_svcs": "string",
    "rank_n_of_mcare_beneficiaries": "string",
    "rank_n_of_svcs": "string",
    "rank_providers": "string",
    "rank_var_avg_mcare_allowed_amt": "string",
    "rank_var_avg_mcare_pay_amt": "string",
    "rank_var_avg_mcare_standardized_amt": "string",
    "rank_var_avg_mcare_submitted_charge_pay_amt": "string",
    "rank_var_avg_submitted_charge_amt": "string",
    "var_avg_mcare_allowed_amt": "string",
    "var_avg_mcare_pay_amt": "string",
    "var_avg_mcare_standardized_amt": "string",
    "var_avg_mcare_submitted_charge_pay_amt": "string",
    "var_avg_submitted_charge_amt": "string"
  }
]
```

<h3 id="create-cms_service_performance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A CmsServicePerformance Record|Inline|

<h3 id="create-cms_service_performance-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[CmsServicePerformance](#schemacmsserviceperformance)]|false|none|none|
|» avg_avg_mcare_allowed_amt|string¦null|false|none|none|
|» avg_avg_mcare_pay_amt|string¦null|false|none|none|
|» avg_avg_mcare_standardized_amt|string¦null|false|none|none|
|» avg_avg_submitted_charge_amt|string¦null|false|none|none|
|» entity_type|string|false|none|none|
|» est_ttl_mcare_allowed_amt|string¦null|false|none|none|
|» est_ttl_mcare_pay_amt|string¦null|false|none|none|
|» est_ttl_mcare_standardized_amt|string¦null|false|none|none|
|» est_ttl_submitted_charge_amt|string¦null|false|none|none|
|» hcpcs_code|string|false|none|none|
|» max_avg_mcare_allowed_amt|string¦null|false|none|none|
|» max_avg_mcare_pay_amt|string¦null|false|none|none|
|» max_avg_mcare_standardized_amt|string¦null|false|none|none|
|» max_avg_submitted_charge_amt|string¦null|false|none|none|
|» min_avg_mcare_allowed_amt|string¦null|false|none|none|
|» min_avg_mcare_pay_amt|string¦null|false|none|none|
|» min_avg_mcare_standardized_amt|string¦null|false|none|none|
|» min_avg_submitted_charge_amt|string¦null|false|none|none|
|» n_of_distinct_mcare_beneficiary_per_day_svcs|string¦null|false|none|none|
|» n_of_mcare_beneficiaries|string¦null|false|none|none|
|» n_of_svcs|string¦null|false|none|none|
|» prisma_id|integer|false|none|none|
|» providers|string¦null|false|none|none|
|» rank_avg_avg_mcare_allowed_amt|string¦null|false|none|none|
|» rank_avg_avg_mcare_pay_amt|string¦null|false|none|none|
|» rank_avg_avg_mcare_standardized_amt|string¦null|false|none|none|
|» rank_avg_avg_submitted_charge_amt|string¦null|false|none|none|
|» rank_est_ttl_mcare_allowed_amt|string¦null|false|none|none|
|» rank_est_ttl_mcare_pay_amt|string¦null|false|none|none|
|» rank_est_ttl_mcare_standardized_amt|string¦null|false|none|none|
|» rank_est_ttl_submitted_charge_amt|string¦null|false|none|none|
|» rank_max_avg_mcare_allowed_amt|string¦null|false|none|none|
|» rank_max_avg_mcare_pay_amt|string¦null|false|none|none|
|» rank_max_avg_mcare_standardized_amt|string¦null|false|none|none|
|» rank_max_avg_submitted_charge_amt|string¦null|false|none|none|
|» rank_min_avg_mcare_allowed_amt|string¦null|false|none|none|
|» rank_min_avg_mcare_pay_amt|string¦null|false|none|none|
|» rank_min_avg_mcare_standardized_amt|string¦null|false|none|none|
|» rank_min_avg_submitted_charge_amt|string¦null|false|none|none|
|» rank_n_of_distinct_mcare_beneficiary_per_day_svcs|string¦null|false|none|none|
|» rank_n_of_mcare_beneficiaries|string¦null|false|none|none|
|» rank_n_of_svcs|string¦null|false|none|none|
|» rank_providers|string¦null|false|none|none|
|» rank_var_avg_mcare_allowed_amt|string¦null|false|none|none|
|» rank_var_avg_mcare_pay_amt|string¦null|false|none|none|
|» rank_var_avg_mcare_standardized_amt|string¦null|false|none|none|
|» rank_var_avg_mcare_submitted_charge_pay_amt|string¦null|false|none|none|
|» rank_var_avg_submitted_charge_amt|string¦null|false|none|none|
|» var_avg_mcare_allowed_amt|string¦null|false|none|none|
|» var_avg_mcare_pay_amt|string¦null|false|none|none|
|» var_avg_mcare_standardized_amt|string¦null|false|none|none|
|» var_avg_mcare_submitted_charge_pay_amt|string¦null|false|none|none|
|» var_avg_submitted_charge_amt|string¦null|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-request-id|string||uuid issued to each request. Injected into all server logs. useful for debugging|
|200|x-sql|string||plaintext SQL used to complete db transaction.|

<aside class="success">
This operation does not require authentication
</aside>

## read cms_service_performance

<a id="opIdreadCmsServicePerformance"></a>

> Code samples

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('http://localhost:8080/service-engine-app/service/cms_service_performance/record?prisma_id=0',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```javascript--nodejs
const fetch = require('node-fetch');

const headers = {
  'Accept':'application/json'
};

fetch('http://localhost:8080/service-engine-app/service/cms_service_performance/record?prisma_id=0',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('http://localhost:8080/service-engine-app/service/cms_service_performance/record', params={
  'prisma_id': '0'
}, headers = headers)

print(r.json())

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://localhost:8080/service-engine-app/service/cms_service_performance/record", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```http
GET http://localhost:8080/service-engine-app/service/cms_service_performance/record?prisma_id=0 HTTP/1.1
Host: localhost:8080
Accept: application/json

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'http://localhost:8080/service-engine-app/service/cms_service_performance/record',
  params: {
  'prisma_id' => 'integer'
}, headers: headers

p JSON.parse(result)

```

`GET /service-engine-app/service/cms_service_performance/record`

<h3 id="read-cms_service_performance-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|prisma_id|query|integer|true|prisma_id|
||fields|query|string|false|record fields to return in results|

> Example responses

> 200 Response

```json
{
  "avg_avg_mcare_allowed_amt": "string",
  "avg_avg_mcare_pay_amt": "string",
  "avg_avg_mcare_standardized_amt": "string",
  "avg_avg_submitted_charge_amt": "string",
  "entity_type": "string",
  "est_ttl_mcare_allowed_amt": "string",
  "est_ttl_mcare_pay_amt": "string",
  "est_ttl_mcare_standardized_amt": "string",
  "est_ttl_submitted_charge_amt": "string",
  "hcpcs_code": "string",
  "max_avg_mcare_allowed_amt": "string",
  "max_avg_mcare_pay_amt": "string",
  "max_avg_mcare_standardized_amt": "string",
  "max_avg_submitted_charge_amt": "string",
  "min_avg_mcare_allowed_amt": "string",
  "min_avg_mcare_pay_amt": "string",
  "min_avg_mcare_standardized_amt": "string",
  "min_avg_submitted_charge_amt": "string",
  "n_of_distinct_mcare_beneficiary_per_day_svcs": "string",
  "n_of_mcare_beneficiaries": "string",
  "n_of_svcs": "string",
  "prisma_id": 0,
  "providers": "string",
  "rank_avg_avg_mcare_allowed_amt": "string",
  "rank_avg_avg_mcare_pay_amt": "string",
  "rank_avg_avg_mcare_standardized_amt": "string",
  "rank_avg_avg_submitted_charge_amt": "string",
  "rank_est_ttl_mcare_allowed_amt": "string",
  "rank_est_ttl_mcare_pay_amt": "string",
  "rank_est_ttl_mcare_standardized_amt": "string",
  "rank_est_ttl_submitted_charge_amt": "string",
  "rank_max_avg_mcare_allowed_amt": "string",
  "rank_max_avg_mcare_pay_amt": "string",
  "rank_max_avg_mcare_standardized_amt": "string",
  "rank_max_avg_submitted_charge_amt": "string",
  "rank_min_avg_mcare_allowed_amt": "string",
  "rank_min_avg_mcare_pay_amt": "string",
  "rank_min_avg_mcare_standardized_amt": "string",
  "rank_min_avg_submitted_charge_amt": "string",
  "rank_n_of_distinct_mcare_beneficiary_per_day_svcs": "string",
  "rank_n_of_mcare_beneficiaries": "string",
  "rank_n_of_svcs": "string",
  "rank_providers": "string",
  "rank_var_avg_mcare_allowed_amt": "string",
  "rank_var_avg_mcare_pay_amt": "string",
  "rank_var_avg_mcare_standardized_amt": "string",
  "rank_var_avg_mcare_submitted_charge_pay_amt": "string",
  "rank_var_avg_submitted_charge_amt": "string",
  "var_avg_mcare_allowed_amt": "string",
  "var_avg_mcare_pay_amt": "string",
  "var_avg_mcare_standardized_amt": "string",
  "var_avg_mcare_submitted_charge_pay_amt": "string",
  "var_avg_submitted_charge_amt": "string"
}
```

<h3 id="read-cms_service_performance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A CmsServicePerformance Record|[CmsServicePerformance](#schemacmsserviceperformance)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-request-id|string||uuid issued to each request. Injected into all server logs. useful for debugging|
|200|x-sql|string||plaintext SQL used to complete db transaction.|

<aside class="success">
This operation does not require authentication
</aside>

## update cms_service_performance

<a id="opIdupdateCmsServicePerformance"></a>

> Code samples

```javascript
const inputBody = '{
  "avg_avg_mcare_allowed_amt": "string",
  "avg_avg_mcare_pay_amt": "string",
  "avg_avg_mcare_standardized_amt": "string",
  "avg_avg_submitted_charge_amt": "string",
  "entity_type": "string",
  "est_ttl_mcare_allowed_amt": "string",
  "est_ttl_mcare_pay_amt": "string",
  "est_ttl_mcare_standardized_amt": "string",
  "est_ttl_submitted_charge_amt": "string",
  "hcpcs_code": "string",
  "max_avg_mcare_allowed_amt": "string",
  "max_avg_mcare_pay_amt": "string",
  "max_avg_mcare_standardized_amt": "string",
  "max_avg_submitted_charge_amt": "string",
  "min_avg_mcare_allowed_amt": "string",
  "min_avg_mcare_pay_amt": "string",
  "min_avg_mcare_standardized_amt": "string",
  "min_avg_submitted_charge_amt": "string",
  "n_of_distinct_mcare_beneficiary_per_day_svcs": "string",
  "n_of_mcare_beneficiaries": "string",
  "n_of_svcs": "string",
  "prisma_id": 0,
  "providers": "string",
  "rank_avg_avg_mcare_allowed_amt": "string",
  "rank_avg_avg_mcare_pay_amt": "string",
  "rank_avg_avg_mcare_standardized_amt": "string",
  "rank_avg_avg_submitted_charge_amt": "string",
  "rank_est_ttl_mcare_allowed_amt": "string",
  "rank_est_ttl_mcare_pay_amt": "string",
  "rank_est_ttl_mcare_standardized_amt": "string",
  "rank_est_ttl_submitted_charge_amt": "string",
  "rank_max_avg_mcare_allowed_amt": "string",
  "rank_max_avg_mcare_pay_amt": "string",
  "rank_max_avg_mcare_standardized_amt": "string",
  "rank_max_avg_submitted_charge_amt": "string",
  "rank_min_avg_mcare_allowed_amt": "string",
  "rank_min_avg_mcare_pay_amt": "string",
  "rank_min_avg_mcare_standardized_amt": "string",
  "rank_min_avg_submitted_charge_amt": "string",
  "rank_n_of_distinct_mcare_beneficiary_per_day_svcs": "string",
  "rank_n_of_mcare_beneficiaries": "string",
  "rank_n_of_svcs": "string",
  "rank_providers": "string",
  "rank_var_avg_mcare_allowed_amt": "string",
  "rank_var_avg_mcare_pay_amt": "string",
  "rank_var_avg_mcare_standardized_amt": "string",
  "rank_var_avg_mcare_submitted_charge_pay_amt": "string",
  "rank_var_avg_submitted_charge_amt": "string",
  "var_avg_mcare_allowed_amt": "string",
  "var_avg_mcare_pay_amt": "string",
  "var_avg_mcare_standardized_amt": "string",
  "var_avg_mcare_submitted_charge_pay_amt": "string",
  "var_avg_submitted_charge_amt": "string"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('http://localhost:8080/service-engine-app/service/cms_service_performance/record?prisma_id=0',
{
  method: 'PUT',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```javascript--nodejs
const fetch = require('node-fetch');
const inputBody = {
  "avg_avg_mcare_allowed_amt": "string",
  "avg_avg_mcare_pay_amt": "string",
  "avg_avg_mcare_standardized_amt": "string",
  "avg_avg_submitted_charge_amt": "string",
  "entity_type": "string",
  "est_ttl_mcare_allowed_amt": "string",
  "est_ttl_mcare_pay_amt": "string",
  "est_ttl_mcare_standardized_amt": "string",
  "est_ttl_submitted_charge_amt": "string",
  "hcpcs_code": "string",
  "max_avg_mcare_allowed_amt": "string",
  "max_avg_mcare_pay_amt": "string",
  "max_avg_mcare_standardized_amt": "string",
  "max_avg_submitted_charge_amt": "string",
  "min_avg_mcare_allowed_amt": "string",
  "min_avg_mcare_pay_amt": "string",
  "min_avg_mcare_standardized_amt": "string",
  "min_avg_submitted_charge_amt": "string",
  "n_of_distinct_mcare_beneficiary_per_day_svcs": "string",
  "n_of_mcare_beneficiaries": "string",
  "n_of_svcs": "string",
  "prisma_id": 0,
  "providers": "string",
  "rank_avg_avg_mcare_allowed_amt": "string",
  "rank_avg_avg_mcare_pay_amt": "string",
  "rank_avg_avg_mcare_standardized_amt": "string",
  "rank_avg_avg_submitted_charge_amt": "string",
  "rank_est_ttl_mcare_allowed_amt": "string",
  "rank_est_ttl_mcare_pay_amt": "string",
  "rank_est_ttl_mcare_standardized_amt": "string",
  "rank_est_ttl_submitted_charge_amt": "string",
  "rank_max_avg_mcare_allowed_amt": "string",
  "rank_max_avg_mcare_pay_amt": "string",
  "rank_max_avg_mcare_standardized_amt": "string",
  "rank_max_avg_submitted_charge_amt": "string",
  "rank_min_avg_mcare_allowed_amt": "string",
  "rank_min_avg_mcare_pay_amt": "string",
  "rank_min_avg_mcare_standardized_amt": "string",
  "rank_min_avg_submitted_charge_amt": "string",
  "rank_n_of_distinct_mcare_beneficiary_per_day_svcs": "string",
  "rank_n_of_mcare_beneficiaries": "string",
  "rank_n_of_svcs": "string",
  "rank_providers": "string",
  "rank_var_avg_mcare_allowed_amt": "string",
  "rank_var_avg_mcare_pay_amt": "string",
  "rank_var_avg_mcare_standardized_amt": "string",
  "rank_var_avg_mcare_submitted_charge_pay_amt": "string",
  "rank_var_avg_submitted_charge_amt": "string",
  "var_avg_mcare_allowed_amt": "string",
  "var_avg_mcare_pay_amt": "string",
  "var_avg_mcare_standardized_amt": "string",
  "var_avg_mcare_submitted_charge_pay_amt": "string",
  "var_avg_submitted_charge_amt": "string"
};
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('http://localhost:8080/service-engine-app/service/cms_service_performance/record?prisma_id=0',
{
  method: 'PUT',
  body: JSON.stringify(inputBody),
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

r = requests.put('http://localhost:8080/service-engine-app/service/cms_service_performance/record', params={
  'prisma_id': '0'
}, headers = headers)

print(r.json())

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("PUT", "http://localhost:8080/service-engine-app/service/cms_service_performance/record", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```http
PUT http://localhost:8080/service-engine-app/service/cms_service_performance/record?prisma_id=0 HTTP/1.1
Host: localhost:8080
Content-Type: application/json
Accept: application/json

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json'
}

result = RestClient.put 'http://localhost:8080/service-engine-app/service/cms_service_performance/record',
  params: {
  'prisma_id' => 'integer'
}, headers: headers

p JSON.parse(result)

```

`PUT /service-engine-app/service/cms_service_performance/record`

> Body parameter

```json
{
  "avg_avg_mcare_allowed_amt": "string",
  "avg_avg_mcare_pay_amt": "string",
  "avg_avg_mcare_standardized_amt": "string",
  "avg_avg_submitted_charge_amt": "string",
  "entity_type": "string",
  "est_ttl_mcare_allowed_amt": "string",
  "est_ttl_mcare_pay_amt": "string",
  "est_ttl_mcare_standardized_amt": "string",
  "est_ttl_submitted_charge_amt": "string",
  "hcpcs_code": "string",
  "max_avg_mcare_allowed_amt": "string",
  "max_avg_mcare_pay_amt": "string",
  "max_avg_mcare_standardized_amt": "string",
  "max_avg_submitted_charge_amt": "string",
  "min_avg_mcare_allowed_amt": "string",
  "min_avg_mcare_pay_amt": "string",
  "min_avg_mcare_standardized_amt": "string",
  "min_avg_submitted_charge_amt": "string",
  "n_of_distinct_mcare_beneficiary_per_day_svcs": "string",
  "n_of_mcare_beneficiaries": "string",
  "n_of_svcs": "string",
  "prisma_id": 0,
  "providers": "string",
  "rank_avg_avg_mcare_allowed_amt": "string",
  "rank_avg_avg_mcare_pay_amt": "string",
  "rank_avg_avg_mcare_standardized_amt": "string",
  "rank_avg_avg_submitted_charge_amt": "string",
  "rank_est_ttl_mcare_allowed_amt": "string",
  "rank_est_ttl_mcare_pay_amt": "string",
  "rank_est_ttl_mcare_standardized_amt": "string",
  "rank_est_ttl_submitted_charge_amt": "string",
  "rank_max_avg_mcare_allowed_amt": "string",
  "rank_max_avg_mcare_pay_amt": "string",
  "rank_max_avg_mcare_standardized_amt": "string",
  "rank_max_avg_submitted_charge_amt": "string",
  "rank_min_avg_mcare_allowed_amt": "string",
  "rank_min_avg_mcare_pay_amt": "string",
  "rank_min_avg_mcare_standardized_amt": "string",
  "rank_min_avg_submitted_charge_amt": "string",
  "rank_n_of_distinct_mcare_beneficiary_per_day_svcs": "string",
  "rank_n_of_mcare_beneficiaries": "string",
  "rank_n_of_svcs": "string",
  "rank_providers": "string",
  "rank_var_avg_mcare_allowed_amt": "string",
  "rank_var_avg_mcare_pay_amt": "string",
  "rank_var_avg_mcare_standardized_amt": "string",
  "rank_var_avg_mcare_submitted_charge_pay_amt": "string",
  "rank_var_avg_submitted_charge_amt": "string",
  "var_avg_mcare_allowed_amt": "string",
  "var_avg_mcare_pay_amt": "string",
  "var_avg_mcare_standardized_amt": "string",
  "var_avg_mcare_submitted_charge_pay_amt": "string",
  "var_avg_submitted_charge_amt": "string"
}
```

<h3 id="update-cms_service_performance-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|prisma_id|query|integer|true|prisma_id|
||fields|query|string|false|record fields to return in results|
|body|body|[CmsServicePerformance](#schemacmsserviceperformance)|true|Single CmsServicePerformance|

> Example responses

> 200 Response

```json
{
  "avg_avg_mcare_allowed_amt": "string",
  "avg_avg_mcare_pay_amt": "string",
  "avg_avg_mcare_standardized_amt": "string",
  "avg_avg_submitted_charge_amt": "string",
  "entity_type": "string",
  "est_ttl_mcare_allowed_amt": "string",
  "est_ttl_mcare_pay_amt": "string",
  "est_ttl_mcare_standardized_amt": "string",
  "est_ttl_submitted_charge_amt": "string",
  "hcpcs_code": "string",
  "max_avg_mcare_allowed_amt": "string",
  "max_avg_mcare_pay_amt": "string",
  "max_avg_mcare_standardized_amt": "string",
  "max_avg_submitted_charge_amt": "string",
  "min_avg_mcare_allowed_amt": "string",
  "min_avg_mcare_pay_amt": "string",
  "min_avg_mcare_standardized_amt": "string",
  "min_avg_submitted_charge_amt": "string",
  "n_of_distinct_mcare_beneficiary_per_day_svcs": "string",
  "n_of_mcare_beneficiaries": "string",
  "n_of_svcs": "string",
  "prisma_id": 0,
  "providers": "string",
  "rank_avg_avg_mcare_allowed_amt": "string",
  "rank_avg_avg_mcare_pay_amt": "string",
  "rank_avg_avg_mcare_standardized_amt": "string",
  "rank_avg_avg_submitted_charge_amt": "string",
  "rank_est_ttl_mcare_allowed_amt": "string",
  "rank_est_ttl_mcare_pay_amt": "string",
  "rank_est_ttl_mcare_standardized_amt": "string",
  "rank_est_ttl_submitted_charge_amt": "string",
  "rank_max_avg_mcare_allowed_amt": "string",
  "rank_max_avg_mcare_pay_amt": "string",
  "rank_max_avg_mcare_standardized_amt": "string",
  "rank_max_avg_submitted_charge_amt": "string",
  "rank_min_avg_mcare_allowed_amt": "string",
  "rank_min_avg_mcare_pay_amt": "string",
  "rank_min_avg_mcare_standardized_amt": "string",
  "rank_min_avg_submitted_charge_amt": "string",
  "rank_n_of_distinct_mcare_beneficiary_per_day_svcs": "string",
  "rank_n_of_mcare_beneficiaries": "string",
  "rank_n_of_svcs": "string",
  "rank_providers": "string",
  "rank_var_avg_mcare_allowed_amt": "string",
  "rank_var_avg_mcare_pay_amt": "string",
  "rank_var_avg_mcare_standardized_amt": "string",
  "rank_var_avg_mcare_submitted_charge_pay_amt": "string",
  "rank_var_avg_submitted_charge_amt": "string",
  "var_avg_mcare_allowed_amt": "string",
  "var_avg_mcare_pay_amt": "string",
  "var_avg_mcare_standardized_amt": "string",
  "var_avg_mcare_submitted_charge_pay_amt": "string",
  "var_avg_submitted_charge_amt": "string"
}
```

<h3 id="update-cms_service_performance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A CmsServicePerformance Record|[CmsServicePerformance](#schemacmsserviceperformance)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-request-id|string||uuid issued to each request. Injected into all server logs. useful for debugging|
|200|x-sql|string||plaintext SQL used to complete db transaction.|

<aside class="success">
This operation does not require authentication
</aside>

## delete cms_service_performance

<a id="opIddeleteCmsServicePerformance"></a>

> Code samples

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('http://localhost:8080/service-engine-app/service/cms_service_performance/record?prisma_id=0',
{
  method: 'DELETE',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```javascript--nodejs
const fetch = require('node-fetch');

const headers = {
  'Accept':'application/json'
};

fetch('http://localhost:8080/service-engine-app/service/cms_service_performance/record?prisma_id=0',
{
  method: 'DELETE',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.delete('http://localhost:8080/service-engine-app/service/cms_service_performance/record', params={
  'prisma_id': '0'
}, headers = headers)

print(r.json())

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("DELETE", "http://localhost:8080/service-engine-app/service/cms_service_performance/record", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```http
DELETE http://localhost:8080/service-engine-app/service/cms_service_performance/record?prisma_id=0 HTTP/1.1
Host: localhost:8080
Accept: application/json

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.delete 'http://localhost:8080/service-engine-app/service/cms_service_performance/record',
  params: {
  'prisma_id' => 'integer'
}, headers: headers

p JSON.parse(result)

```

`DELETE /service-engine-app/service/cms_service_performance/record`

<h3 id="delete-cms_service_performance-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|prisma_id|query|integer|true|prisma_id|

> Example responses

> 200 Response

```json
{
  "count": 0
}
```

<h3 id="delete-cms_service_performance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A CmsServicePerformance Record|[_service_count](#schema_service_count)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-request-id|string||uuid issued to each request. Injected into all server logs. useful for debugging|
|200|x-sql|string||plaintext SQL used to complete db transaction.|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="some-app-service-cmsserviceproviderperformance">CmsServiceProviderPerformance</h1>

## search cms_service_provider_performance

<a id="opIdsearchCmsServiceProviderPerformance"></a>

> Code samples

```javascript

const headers = {
  'Accept':'application/json',
  'x-get-count':'string',
  'x-get-sql':'string'
};

fetch('http://localhost:8080/service-engine-app/service/cms_service_provider_performance',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```javascript--nodejs
const fetch = require('node-fetch');

const headers = {
  'Accept':'application/json',
  'x-get-count':'string',
  'x-get-sql':'string'
};

fetch('http://localhost:8080/service-engine-app/service/cms_service_provider_performance',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'x-get-count': 'string',
  'x-get-sql': 'string'
}

r = requests.get('http://localhost:8080/service-engine-app/service/cms_service_provider_performance', headers = headers)

print(r.json())

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
        "x-get-count": []string{"string"},
        "x-get-sql": []string{"string"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://localhost:8080/service-engine-app/service/cms_service_provider_performance", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```http
GET http://localhost:8080/service-engine-app/service/cms_service_provider_performance HTTP/1.1
Host: localhost:8080
Accept: application/json
x-get-count: string
x-get-sql: string

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'x-get-count' => 'string',
  'x-get-sql' => 'string'
}

result = RestClient.get 'http://localhost:8080/service-engine-app/service/cms_service_provider_performance',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /service-engine-app/service/cms_service_provider_performance`

<h3 id="search-cms_service_provider_performance-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|avg_mcare_allowed_amt|query|string|false|avg_mcare_allowed_amt|
|avg_mcare_pay_amt|query|string|false|avg_mcare_pay_amt|
|avg_mcare_standardized_amt|query|string|false|avg_mcare_standardized_amt|
|avg_submitted_charge_amt|query|string|false|avg_submitted_charge_amt|
|entity_type|query|string|false|entity_type|
|est_ttl_mcare_pay_amt|query|string|false|est_ttl_mcare_pay_amt|
|est_ttl_submitted_charge_amt|query|string|false|est_ttl_submitted_charge_amt|
|hcpcs_code|query|string|false|hcpcs_code|
|mcare_participation_indicator|query|string|false|mcare_participation_indicator|
|n_of_distinct_mcare_beneficiary_per_day_svcs|query|integer|false|n_of_distinct_mcare_beneficiary_per_day_svcs|
|n_of_mcare_beneficiaries|query|integer|false|n_of_mcare_beneficiaries|
|n_of_svcs|query|string|false|n_of_svcs|
|npi|query|integer|false|npi|
|place_of_service|query|string|false|place_of_service|
|prisma_id|query|integer|false|prisma_id|
|rank_avg_mcare_allowed_amt|query|string|false|rank_avg_mcare_allowed_amt|
|rank_avg_mcare_pay_amt|query|string|false|rank_avg_mcare_pay_amt|
|rank_avg_mcare_standardized_amt|query|string|false|rank_avg_mcare_standardized_amt|
|rank_avg_submitted_charge_amt|query|string|false|rank_avg_submitted_charge_amt|
|rank_est_ttl_mcare_pay_amt|query|string|false|rank_est_ttl_mcare_pay_amt|
|rank_est_ttl_submitted_charge_amt|query|string|false|rank_est_ttl_submitted_charge_amt|
|rank_n_of_distinct_mcare_beneficiary_per_day_svcs|query|string|false|rank_n_of_distinct_mcare_beneficiary_per_day_svcs|
|rank_n_of_mcare_beneficiaries|query|string|false|rank_n_of_mcare_beneficiaries|
|rank_n_of_svcs|query|string|false|rank_n_of_svcs|
|rank_var_avg_mcare_submitted_charge_pay_amt|query|string|false|rank_var_avg_mcare_submitted_charge_pay_amt|
|var_avg_mcare_submitted_charge_pay_amt|query|string|false|var_avg_mcare_submitted_charge_pay_amt|
||fields|query|string|false|record fields to return in results|
||seperator|query|string|false|character to be used as seperator in context & operations values. default is pipe `|`|
||notWhere|query|string|false|SQL query context. Apply query components to where OR get the inverse. Default is false.|
||statementContext|query|string|false|SQL query context. Apply query components all together (and each) OR select any matching (OR).|
||orderBy|query|string|false|seperated list of orderBy fields + direction (field desc || field asc). acs is default.|
||page|query|number|false|pagination page|
||limit|query|number|false|pagination limit|
|x-get-count|header|string|false|Request Search Query count(*) be sent back in a response header.|
|x-get-sql|header|string|false|Request plaintext SQL be sent back in a response header.|

> Example responses

> 200 Response

```json
[
  {
    "avg_mcare_allowed_amt": "string",
    "avg_mcare_pay_amt": "string",
    "avg_mcare_standardized_amt": "string",
    "avg_submitted_charge_amt": "string",
    "entity_type": "string",
    "est_ttl_mcare_pay_amt": "string",
    "est_ttl_submitted_charge_amt": "string",
    "hcpcs_code": "string",
    "mcare_participation_indicator": "string",
    "n_of_distinct_mcare_beneficiary_per_day_svcs": 0,
    "n_of_mcare_beneficiaries": 0,
    "n_of_svcs": "string",
    "npi": 0,
    "place_of_service": "string",
    "prisma_id": 0,
    "rank_avg_mcare_allowed_amt": "string",
    "rank_avg_mcare_pay_amt": "string",
    "rank_avg_mcare_standardized_amt": "string",
    "rank_avg_submitted_charge_amt": "string",
    "rank_est_ttl_mcare_pay_amt": "string",
    "rank_est_ttl_submitted_charge_amt": "string",
    "rank_n_of_distinct_mcare_beneficiary_per_day_svcs": "string",
    "rank_n_of_mcare_beneficiaries": "string",
    "rank_n_of_svcs": "string",
    "rank_var_avg_mcare_submitted_charge_pay_amt": "string",
    "var_avg_mcare_submitted_charge_pay_amt": "string"
  }
]
```

<h3 id="search-cms_service_provider_performance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A paged array of CmsServiceProviderPerformance Records|Inline|

<h3 id="search-cms_service_provider_performance-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[CmsServiceProviderPerformance](#schemacmsserviceproviderperformance)]|false|none|none|
|» avg_mcare_allowed_amt|string¦null|false|none|none|
|» avg_mcare_pay_amt|string¦null|false|none|none|
|» avg_mcare_standardized_amt|string¦null|false|none|none|
|» avg_submitted_charge_amt|string¦null|false|none|none|
|» entity_type|string¦null|false|none|none|
|» est_ttl_mcare_pay_amt|string¦null|false|none|none|
|» est_ttl_submitted_charge_amt|string¦null|false|none|none|
|» hcpcs_code|string|false|none|none|
|» mcare_participation_indicator|string¦null|false|none|none|
|» n_of_distinct_mcare_beneficiary_per_day_svcs|integer¦null|false|none|none|
|» n_of_mcare_beneficiaries|integer¦null|false|none|none|
|» n_of_svcs|string¦null|false|none|none|
|» npi|integer|false|none|none|
|» place_of_service|string|false|none|none|
|» prisma_id|integer|false|none|none|
|» rank_avg_mcare_allowed_amt|string¦null|false|none|none|
|» rank_avg_mcare_pay_amt|string¦null|false|none|none|
|» rank_avg_mcare_standardized_amt|string¦null|false|none|none|
|» rank_avg_submitted_charge_amt|string¦null|false|none|none|
|» rank_est_ttl_mcare_pay_amt|string¦null|false|none|none|
|» rank_est_ttl_submitted_charge_amt|string¦null|false|none|none|
|» rank_n_of_distinct_mcare_beneficiary_per_day_svcs|string¦null|false|none|none|
|» rank_n_of_mcare_beneficiaries|string¦null|false|none|none|
|» rank_n_of_svcs|string¦null|false|none|none|
|» rank_var_avg_mcare_submitted_charge_pay_amt|string¦null|false|none|none|
|» var_avg_mcare_submitted_charge_pay_amt|string¦null|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-request-id|string||uuid issued to each request. Injected into all server logs. useful for debugging|
|200|x-sql|string||plaintext SQL used to complete db transaction.|
|200|x-count|string||full count of all records that meet query criteria (omitting any pagiation specs). useful for rendering pagiation limits without making another service call.|

<aside class="success">
This operation does not require authentication
</aside>

## create cms_service_provider_performance

<a id="opIdcreateCmsServiceProviderPerformance"></a>

> Code samples

```javascript
const inputBody = '[
  {
    "avg_mcare_allowed_amt": "string",
    "avg_mcare_pay_amt": "string",
    "avg_mcare_standardized_amt": "string",
    "avg_submitted_charge_amt": "string",
    "entity_type": "string",
    "est_ttl_mcare_pay_amt": "string",
    "est_ttl_submitted_charge_amt": "string",
    "hcpcs_code": "string",
    "mcare_participation_indicator": "string",
    "n_of_distinct_mcare_beneficiary_per_day_svcs": 0,
    "n_of_mcare_beneficiaries": 0,
    "n_of_svcs": "string",
    "npi": 0,
    "place_of_service": "string",
    "prisma_id": 0,
    "rank_avg_mcare_allowed_amt": "string",
    "rank_avg_mcare_pay_amt": "string",
    "rank_avg_mcare_standardized_amt": "string",
    "rank_avg_submitted_charge_amt": "string",
    "rank_est_ttl_mcare_pay_amt": "string",
    "rank_est_ttl_submitted_charge_amt": "string",
    "rank_n_of_distinct_mcare_beneficiary_per_day_svcs": "string",
    "rank_n_of_mcare_beneficiaries": "string",
    "rank_n_of_svcs": "string",
    "rank_var_avg_mcare_submitted_charge_pay_amt": "string",
    "var_avg_mcare_submitted_charge_pay_amt": "string"
  }
]';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('http://localhost:8080/service-engine-app/service/cms_service_provider_performance',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```javascript--nodejs
const fetch = require('node-fetch');
const inputBody = [
  {
    "avg_mcare_allowed_amt": "string",
    "avg_mcare_pay_amt": "string",
    "avg_mcare_standardized_amt": "string",
    "avg_submitted_charge_amt": "string",
    "entity_type": "string",
    "est_ttl_mcare_pay_amt": "string",
    "est_ttl_submitted_charge_amt": "string",
    "hcpcs_code": "string",
    "mcare_participation_indicator": "string",
    "n_of_distinct_mcare_beneficiary_per_day_svcs": 0,
    "n_of_mcare_beneficiaries": 0,
    "n_of_svcs": "string",
    "npi": 0,
    "place_of_service": "string",
    "prisma_id": 0,
    "rank_avg_mcare_allowed_amt": "string",
    "rank_avg_mcare_pay_amt": "string",
    "rank_avg_mcare_standardized_amt": "string",
    "rank_avg_submitted_charge_amt": "string",
    "rank_est_ttl_mcare_pay_amt": "string",
    "rank_est_ttl_submitted_charge_amt": "string",
    "rank_n_of_distinct_mcare_beneficiary_per_day_svcs": "string",
    "rank_n_of_mcare_beneficiaries": "string",
    "rank_n_of_svcs": "string",
    "rank_var_avg_mcare_submitted_charge_pay_amt": "string",
    "var_avg_mcare_submitted_charge_pay_amt": "string"
  }
];
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('http://localhost:8080/service-engine-app/service/cms_service_provider_performance',
{
  method: 'POST',
  body: JSON.stringify(inputBody),
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

r = requests.post('http://localhost:8080/service-engine-app/service/cms_service_provider_performance', headers = headers)

print(r.json())

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "http://localhost:8080/service-engine-app/service/cms_service_provider_performance", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```http
POST http://localhost:8080/service-engine-app/service/cms_service_provider_performance HTTP/1.1
Host: localhost:8080
Content-Type: application/json
Accept: application/json

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json'
}

result = RestClient.post 'http://localhost:8080/service-engine-app/service/cms_service_provider_performance',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`POST /service-engine-app/service/cms_service_provider_performance`

> Body parameter

```json
[
  {
    "avg_mcare_allowed_amt": "string",
    "avg_mcare_pay_amt": "string",
    "avg_mcare_standardized_amt": "string",
    "avg_submitted_charge_amt": "string",
    "entity_type": "string",
    "est_ttl_mcare_pay_amt": "string",
    "est_ttl_submitted_charge_amt": "string",
    "hcpcs_code": "string",
    "mcare_participation_indicator": "string",
    "n_of_distinct_mcare_beneficiary_per_day_svcs": 0,
    "n_of_mcare_beneficiaries": 0,
    "n_of_svcs": "string",
    "npi": 0,
    "place_of_service": "string",
    "prisma_id": 0,
    "rank_avg_mcare_allowed_amt": "string",
    "rank_avg_mcare_pay_amt": "string",
    "rank_avg_mcare_standardized_amt": "string",
    "rank_avg_submitted_charge_amt": "string",
    "rank_est_ttl_mcare_pay_amt": "string",
    "rank_est_ttl_submitted_charge_amt": "string",
    "rank_n_of_distinct_mcare_beneficiary_per_day_svcs": "string",
    "rank_n_of_mcare_beneficiaries": "string",
    "rank_n_of_svcs": "string",
    "rank_var_avg_mcare_submitted_charge_pay_amt": "string",
    "var_avg_mcare_submitted_charge_pay_amt": "string"
  }
]
```

<h3 id="create-cms_service_provider_performance-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
||fields|query|string|false|record fields to return in results|
|body|body|[CmsServiceProviderPerformance](#schemacmsserviceproviderperformance)|true|Single CmsServiceProviderPerformance or array of CmsServiceProviderPerformance|

> Example responses

> 200 Response

```json
[
  {
    "avg_mcare_allowed_amt": "string",
    "avg_mcare_pay_amt": "string",
    "avg_mcare_standardized_amt": "string",
    "avg_submitted_charge_amt": "string",
    "entity_type": "string",
    "est_ttl_mcare_pay_amt": "string",
    "est_ttl_submitted_charge_amt": "string",
    "hcpcs_code": "string",
    "mcare_participation_indicator": "string",
    "n_of_distinct_mcare_beneficiary_per_day_svcs": 0,
    "n_of_mcare_beneficiaries": 0,
    "n_of_svcs": "string",
    "npi": 0,
    "place_of_service": "string",
    "prisma_id": 0,
    "rank_avg_mcare_allowed_amt": "string",
    "rank_avg_mcare_pay_amt": "string",
    "rank_avg_mcare_standardized_amt": "string",
    "rank_avg_submitted_charge_amt": "string",
    "rank_est_ttl_mcare_pay_amt": "string",
    "rank_est_ttl_submitted_charge_amt": "string",
    "rank_n_of_distinct_mcare_beneficiary_per_day_svcs": "string",
    "rank_n_of_mcare_beneficiaries": "string",
    "rank_n_of_svcs": "string",
    "rank_var_avg_mcare_submitted_charge_pay_amt": "string",
    "var_avg_mcare_submitted_charge_pay_amt": "string"
  }
]
```

<h3 id="create-cms_service_provider_performance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A CmsServiceProviderPerformance Record|Inline|

<h3 id="create-cms_service_provider_performance-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[CmsServiceProviderPerformance](#schemacmsserviceproviderperformance)]|false|none|none|
|» avg_mcare_allowed_amt|string¦null|false|none|none|
|» avg_mcare_pay_amt|string¦null|false|none|none|
|» avg_mcare_standardized_amt|string¦null|false|none|none|
|» avg_submitted_charge_amt|string¦null|false|none|none|
|» entity_type|string¦null|false|none|none|
|» est_ttl_mcare_pay_amt|string¦null|false|none|none|
|» est_ttl_submitted_charge_amt|string¦null|false|none|none|
|» hcpcs_code|string|false|none|none|
|» mcare_participation_indicator|string¦null|false|none|none|
|» n_of_distinct_mcare_beneficiary_per_day_svcs|integer¦null|false|none|none|
|» n_of_mcare_beneficiaries|integer¦null|false|none|none|
|» n_of_svcs|string¦null|false|none|none|
|» npi|integer|false|none|none|
|» place_of_service|string|false|none|none|
|» prisma_id|integer|false|none|none|
|» rank_avg_mcare_allowed_amt|string¦null|false|none|none|
|» rank_avg_mcare_pay_amt|string¦null|false|none|none|
|» rank_avg_mcare_standardized_amt|string¦null|false|none|none|
|» rank_avg_submitted_charge_amt|string¦null|false|none|none|
|» rank_est_ttl_mcare_pay_amt|string¦null|false|none|none|
|» rank_est_ttl_submitted_charge_amt|string¦null|false|none|none|
|» rank_n_of_distinct_mcare_beneficiary_per_day_svcs|string¦null|false|none|none|
|» rank_n_of_mcare_beneficiaries|string¦null|false|none|none|
|» rank_n_of_svcs|string¦null|false|none|none|
|» rank_var_avg_mcare_submitted_charge_pay_amt|string¦null|false|none|none|
|» var_avg_mcare_submitted_charge_pay_amt|string¦null|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-request-id|string||uuid issued to each request. Injected into all server logs. useful for debugging|
|200|x-sql|string||plaintext SQL used to complete db transaction.|

<aside class="success">
This operation does not require authentication
</aside>

## read cms_service_provider_performance

<a id="opIdreadCmsServiceProviderPerformance"></a>

> Code samples

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('http://localhost:8080/service-engine-app/service/cms_service_provider_performance/record?prisma_id=0',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```javascript--nodejs
const fetch = require('node-fetch');

const headers = {
  'Accept':'application/json'
};

fetch('http://localhost:8080/service-engine-app/service/cms_service_provider_performance/record?prisma_id=0',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('http://localhost:8080/service-engine-app/service/cms_service_provider_performance/record', params={
  'prisma_id': '0'
}, headers = headers)

print(r.json())

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://localhost:8080/service-engine-app/service/cms_service_provider_performance/record", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```http
GET http://localhost:8080/service-engine-app/service/cms_service_provider_performance/record?prisma_id=0 HTTP/1.1
Host: localhost:8080
Accept: application/json

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'http://localhost:8080/service-engine-app/service/cms_service_provider_performance/record',
  params: {
  'prisma_id' => 'integer'
}, headers: headers

p JSON.parse(result)

```

`GET /service-engine-app/service/cms_service_provider_performance/record`

<h3 id="read-cms_service_provider_performance-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|prisma_id|query|integer|true|prisma_id|
||fields|query|string|false|record fields to return in results|

> Example responses

> 200 Response

```json
{
  "avg_mcare_allowed_amt": "string",
  "avg_mcare_pay_amt": "string",
  "avg_mcare_standardized_amt": "string",
  "avg_submitted_charge_amt": "string",
  "entity_type": "string",
  "est_ttl_mcare_pay_amt": "string",
  "est_ttl_submitted_charge_amt": "string",
  "hcpcs_code": "string",
  "mcare_participation_indicator": "string",
  "n_of_distinct_mcare_beneficiary_per_day_svcs": 0,
  "n_of_mcare_beneficiaries": 0,
  "n_of_svcs": "string",
  "npi": 0,
  "place_of_service": "string",
  "prisma_id": 0,
  "rank_avg_mcare_allowed_amt": "string",
  "rank_avg_mcare_pay_amt": "string",
  "rank_avg_mcare_standardized_amt": "string",
  "rank_avg_submitted_charge_amt": "string",
  "rank_est_ttl_mcare_pay_amt": "string",
  "rank_est_ttl_submitted_charge_amt": "string",
  "rank_n_of_distinct_mcare_beneficiary_per_day_svcs": "string",
  "rank_n_of_mcare_beneficiaries": "string",
  "rank_n_of_svcs": "string",
  "rank_var_avg_mcare_submitted_charge_pay_amt": "string",
  "var_avg_mcare_submitted_charge_pay_amt": "string"
}
```

<h3 id="read-cms_service_provider_performance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A CmsServiceProviderPerformance Record|[CmsServiceProviderPerformance](#schemacmsserviceproviderperformance)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-request-id|string||uuid issued to each request. Injected into all server logs. useful for debugging|
|200|x-sql|string||plaintext SQL used to complete db transaction.|

<aside class="success">
This operation does not require authentication
</aside>

## update cms_service_provider_performance

<a id="opIdupdateCmsServiceProviderPerformance"></a>

> Code samples

```javascript
const inputBody = '{
  "avg_mcare_allowed_amt": "string",
  "avg_mcare_pay_amt": "string",
  "avg_mcare_standardized_amt": "string",
  "avg_submitted_charge_amt": "string",
  "entity_type": "string",
  "est_ttl_mcare_pay_amt": "string",
  "est_ttl_submitted_charge_amt": "string",
  "hcpcs_code": "string",
  "mcare_participation_indicator": "string",
  "n_of_distinct_mcare_beneficiary_per_day_svcs": 0,
  "n_of_mcare_beneficiaries": 0,
  "n_of_svcs": "string",
  "npi": 0,
  "place_of_service": "string",
  "prisma_id": 0,
  "rank_avg_mcare_allowed_amt": "string",
  "rank_avg_mcare_pay_amt": "string",
  "rank_avg_mcare_standardized_amt": "string",
  "rank_avg_submitted_charge_amt": "string",
  "rank_est_ttl_mcare_pay_amt": "string",
  "rank_est_ttl_submitted_charge_amt": "string",
  "rank_n_of_distinct_mcare_beneficiary_per_day_svcs": "string",
  "rank_n_of_mcare_beneficiaries": "string",
  "rank_n_of_svcs": "string",
  "rank_var_avg_mcare_submitted_charge_pay_amt": "string",
  "var_avg_mcare_submitted_charge_pay_amt": "string"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('http://localhost:8080/service-engine-app/service/cms_service_provider_performance/record?prisma_id=0',
{
  method: 'PUT',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```javascript--nodejs
const fetch = require('node-fetch');
const inputBody = {
  "avg_mcare_allowed_amt": "string",
  "avg_mcare_pay_amt": "string",
  "avg_mcare_standardized_amt": "string",
  "avg_submitted_charge_amt": "string",
  "entity_type": "string",
  "est_ttl_mcare_pay_amt": "string",
  "est_ttl_submitted_charge_amt": "string",
  "hcpcs_code": "string",
  "mcare_participation_indicator": "string",
  "n_of_distinct_mcare_beneficiary_per_day_svcs": 0,
  "n_of_mcare_beneficiaries": 0,
  "n_of_svcs": "string",
  "npi": 0,
  "place_of_service": "string",
  "prisma_id": 0,
  "rank_avg_mcare_allowed_amt": "string",
  "rank_avg_mcare_pay_amt": "string",
  "rank_avg_mcare_standardized_amt": "string",
  "rank_avg_submitted_charge_amt": "string",
  "rank_est_ttl_mcare_pay_amt": "string",
  "rank_est_ttl_submitted_charge_amt": "string",
  "rank_n_of_distinct_mcare_beneficiary_per_day_svcs": "string",
  "rank_n_of_mcare_beneficiaries": "string",
  "rank_n_of_svcs": "string",
  "rank_var_avg_mcare_submitted_charge_pay_amt": "string",
  "var_avg_mcare_submitted_charge_pay_amt": "string"
};
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('http://localhost:8080/service-engine-app/service/cms_service_provider_performance/record?prisma_id=0',
{
  method: 'PUT',
  body: JSON.stringify(inputBody),
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

r = requests.put('http://localhost:8080/service-engine-app/service/cms_service_provider_performance/record', params={
  'prisma_id': '0'
}, headers = headers)

print(r.json())

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("PUT", "http://localhost:8080/service-engine-app/service/cms_service_provider_performance/record", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```http
PUT http://localhost:8080/service-engine-app/service/cms_service_provider_performance/record?prisma_id=0 HTTP/1.1
Host: localhost:8080
Content-Type: application/json
Accept: application/json

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json'
}

result = RestClient.put 'http://localhost:8080/service-engine-app/service/cms_service_provider_performance/record',
  params: {
  'prisma_id' => 'integer'
}, headers: headers

p JSON.parse(result)

```

`PUT /service-engine-app/service/cms_service_provider_performance/record`

> Body parameter

```json
{
  "avg_mcare_allowed_amt": "string",
  "avg_mcare_pay_amt": "string",
  "avg_mcare_standardized_amt": "string",
  "avg_submitted_charge_amt": "string",
  "entity_type": "string",
  "est_ttl_mcare_pay_amt": "string",
  "est_ttl_submitted_charge_amt": "string",
  "hcpcs_code": "string",
  "mcare_participation_indicator": "string",
  "n_of_distinct_mcare_beneficiary_per_day_svcs": 0,
  "n_of_mcare_beneficiaries": 0,
  "n_of_svcs": "string",
  "npi": 0,
  "place_of_service": "string",
  "prisma_id": 0,
  "rank_avg_mcare_allowed_amt": "string",
  "rank_avg_mcare_pay_amt": "string",
  "rank_avg_mcare_standardized_amt": "string",
  "rank_avg_submitted_charge_amt": "string",
  "rank_est_ttl_mcare_pay_amt": "string",
  "rank_est_ttl_submitted_charge_amt": "string",
  "rank_n_of_distinct_mcare_beneficiary_per_day_svcs": "string",
  "rank_n_of_mcare_beneficiaries": "string",
  "rank_n_of_svcs": "string",
  "rank_var_avg_mcare_submitted_charge_pay_amt": "string",
  "var_avg_mcare_submitted_charge_pay_amt": "string"
}
```

<h3 id="update-cms_service_provider_performance-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|prisma_id|query|integer|true|prisma_id|
||fields|query|string|false|record fields to return in results|
|body|body|[CmsServiceProviderPerformance](#schemacmsserviceproviderperformance)|true|Single CmsServiceProviderPerformance|

> Example responses

> 200 Response

```json
{
  "avg_mcare_allowed_amt": "string",
  "avg_mcare_pay_amt": "string",
  "avg_mcare_standardized_amt": "string",
  "avg_submitted_charge_amt": "string",
  "entity_type": "string",
  "est_ttl_mcare_pay_amt": "string",
  "est_ttl_submitted_charge_amt": "string",
  "hcpcs_code": "string",
  "mcare_participation_indicator": "string",
  "n_of_distinct_mcare_beneficiary_per_day_svcs": 0,
  "n_of_mcare_beneficiaries": 0,
  "n_of_svcs": "string",
  "npi": 0,
  "place_of_service": "string",
  "prisma_id": 0,
  "rank_avg_mcare_allowed_amt": "string",
  "rank_avg_mcare_pay_amt": "string",
  "rank_avg_mcare_standardized_amt": "string",
  "rank_avg_submitted_charge_amt": "string",
  "rank_est_ttl_mcare_pay_amt": "string",
  "rank_est_ttl_submitted_charge_amt": "string",
  "rank_n_of_distinct_mcare_beneficiary_per_day_svcs": "string",
  "rank_n_of_mcare_beneficiaries": "string",
  "rank_n_of_svcs": "string",
  "rank_var_avg_mcare_submitted_charge_pay_amt": "string",
  "var_avg_mcare_submitted_charge_pay_amt": "string"
}
```

<h3 id="update-cms_service_provider_performance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A CmsServiceProviderPerformance Record|[CmsServiceProviderPerformance](#schemacmsserviceproviderperformance)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-request-id|string||uuid issued to each request. Injected into all server logs. useful for debugging|
|200|x-sql|string||plaintext SQL used to complete db transaction.|

<aside class="success">
This operation does not require authentication
</aside>

## delete cms_service_provider_performance

<a id="opIddeleteCmsServiceProviderPerformance"></a>

> Code samples

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('http://localhost:8080/service-engine-app/service/cms_service_provider_performance/record?prisma_id=0',
{
  method: 'DELETE',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```javascript--nodejs
const fetch = require('node-fetch');

const headers = {
  'Accept':'application/json'
};

fetch('http://localhost:8080/service-engine-app/service/cms_service_provider_performance/record?prisma_id=0',
{
  method: 'DELETE',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.delete('http://localhost:8080/service-engine-app/service/cms_service_provider_performance/record', params={
  'prisma_id': '0'
}, headers = headers)

print(r.json())

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("DELETE", "http://localhost:8080/service-engine-app/service/cms_service_provider_performance/record", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```http
DELETE http://localhost:8080/service-engine-app/service/cms_service_provider_performance/record?prisma_id=0 HTTP/1.1
Host: localhost:8080
Accept: application/json

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.delete 'http://localhost:8080/service-engine-app/service/cms_service_provider_performance/record',
  params: {
  'prisma_id' => 'integer'
}, headers: headers

p JSON.parse(result)

```

`DELETE /service-engine-app/service/cms_service_provider_performance/record`

<h3 id="delete-cms_service_provider_performance-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|prisma_id|query|integer|true|prisma_id|

> Example responses

> 200 Response

```json
{
  "count": 0
}
```

<h3 id="delete-cms_service_provider_performance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A CmsServiceProviderPerformance Record|[_service_count](#schema_service_count)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-request-id|string||uuid issued to each request. Injected into all server logs. useful for debugging|
|200|x-sql|string||plaintext SQL used to complete db transaction.|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="some-app-service-cmsserviceproviderperformancesummary">CmsServiceProviderPerformanceSummary</h1>

## search cms_service_provider_performance_summary

<a id="opIdsearchCmsServiceProviderPerformanceSummary"></a>

> Code samples

```javascript

const headers = {
  'Accept':'application/json',
  'x-get-count':'string',
  'x-get-sql':'string'
};

fetch('http://localhost:8080/service-engine-app/service/cms_service_provider_performance_summary',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```javascript--nodejs
const fetch = require('node-fetch');

const headers = {
  'Accept':'application/json',
  'x-get-count':'string',
  'x-get-sql':'string'
};

fetch('http://localhost:8080/service-engine-app/service/cms_service_provider_performance_summary',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'x-get-count': 'string',
  'x-get-sql': 'string'
}

r = requests.get('http://localhost:8080/service-engine-app/service/cms_service_provider_performance_summary', headers = headers)

print(r.json())

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
        "x-get-count": []string{"string"},
        "x-get-sql": []string{"string"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://localhost:8080/service-engine-app/service/cms_service_provider_performance_summary", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```http
GET http://localhost:8080/service-engine-app/service/cms_service_provider_performance_summary HTTP/1.1
Host: localhost:8080
Accept: application/json
x-get-count: string
x-get-sql: string

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'x-get-count' => 'string',
  'x-get-sql' => 'string'
}

result = RestClient.get 'http://localhost:8080/service-engine-app/service/cms_service_provider_performance_summary',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /service-engine-app/service/cms_service_provider_performance_summary`

<h3 id="search-cms_service_provider_performance_summary-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|entity_type|query|string|false|entity_type|
|est_ttl_mcare_pay_amt|query|string|false|est_ttl_mcare_pay_amt|
|est_ttl_mcare_pay_amt_by_ttl_hcpcs_code|query|string|false|est_ttl_mcare_pay_amt_by_ttl_hcpcs_code|
|est_ttl_mcare_pay_amt_by_ttl_n_of_svcs|query|string|false|est_ttl_mcare_pay_amt_by_ttl_n_of_svcs|
|est_ttl_submitted_charge_amt|query|string|false|est_ttl_submitted_charge_amt|
|npi|query|integer|false|npi|
|prisma_id|query|integer|false|prisma_id|
|rank_est_ttl_mcare_pay_amt|query|string|false|rank_est_ttl_mcare_pay_amt|
|rank_est_ttl_mcare_pay_amt_by_ttl_hcpcs_code|query|string|false|rank_est_ttl_mcare_pay_amt_by_ttl_hcpcs_code|
|rank_est_ttl_mcare_pay_amt_by_ttl_n_of_servi|query|string|false|rank_est_ttl_mcare_pay_amt_by_ttl_n_of_servi|
|rank_est_ttl_submitted_charge_amt|query|string|false|rank_est_ttl_submitted_charge_amt|
|rank_ttl_hcpcs_code|query|string|false|rank_ttl_hcpcs_code|
|rank_ttl_n_of_svcs|query|string|false|rank_ttl_n_of_svcs|
|rank_var_est_ttl_mcare_submitted_charge_pay_amoun|query|string|false|rank_var_est_ttl_mcare_submitted_charge_pay_amoun|
|summary_type|query|integer|false|summary_type|
|ttl_hcpcs_code|query|string|false|ttl_hcpcs_code|
|ttl_n_of_svcs|query|string|false|ttl_n_of_svcs|
|var_est_ttl_mcare_submitted_charge_pay_amt|query|string|false|var_est_ttl_mcare_submitted_charge_pay_amt|
||fields|query|string|false|record fields to return in results|
||seperator|query|string|false|character to be used as seperator in context & operations values. default is pipe `|`|
||notWhere|query|string|false|SQL query context. Apply query components to where OR get the inverse. Default is false.|
||statementContext|query|string|false|SQL query context. Apply query components all together (and each) OR select any matching (OR).|
||orderBy|query|string|false|seperated list of orderBy fields + direction (field desc || field asc). acs is default.|
||page|query|number|false|pagination page|
||limit|query|number|false|pagination limit|
|x-get-count|header|string|false|Request Search Query count(*) be sent back in a response header.|
|x-get-sql|header|string|false|Request plaintext SQL be sent back in a response header.|

> Example responses

> 200 Response

```json
[
  {
    "entity_type": "string",
    "est_ttl_mcare_pay_amt": "string",
    "est_ttl_mcare_pay_amt_by_ttl_hcpcs_code": "string",
    "est_ttl_mcare_pay_amt_by_ttl_n_of_svcs": "string",
    "est_ttl_submitted_charge_amt": "string",
    "npi": 0,
    "prisma_id": 0,
    "rank_est_ttl_mcare_pay_amt": "string",
    "rank_est_ttl_mcare_pay_amt_by_ttl_hcpcs_code": "string",
    "rank_est_ttl_mcare_pay_amt_by_ttl_n_of_servi": "string",
    "rank_est_ttl_submitted_charge_amt": "string",
    "rank_ttl_hcpcs_code": "string",
    "rank_ttl_n_of_svcs": "string",
    "rank_var_est_ttl_mcare_submitted_charge_pay_amoun": "string",
    "summary_type": 0,
    "ttl_hcpcs_code": "string",
    "ttl_n_of_svcs": "string",
    "var_est_ttl_mcare_submitted_charge_pay_amt": "string"
  }
]
```

<h3 id="search-cms_service_provider_performance_summary-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A paged array of CmsServiceProviderPerformanceSummary Records|Inline|

<h3 id="search-cms_service_provider_performance_summary-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[CmsServiceProviderPerformanceSummary](#schemacmsserviceproviderperformancesummary)]|false|none|none|
|» entity_type|string¦null|false|none|none|
|» est_ttl_mcare_pay_amt|string¦null|false|none|none|
|» est_ttl_mcare_pay_amt_by_ttl_hcpcs_code|string¦null|false|none|none|
|» est_ttl_mcare_pay_amt_by_ttl_n_of_svcs|string¦null|false|none|none|
|» est_ttl_submitted_charge_amt|string¦null|false|none|none|
|» npi|integer|false|none|none|
|» prisma_id|integer|false|none|none|
|» rank_est_ttl_mcare_pay_amt|string¦null|false|none|none|
|» rank_est_ttl_mcare_pay_amt_by_ttl_hcpcs_code|string¦null|false|none|none|
|» rank_est_ttl_mcare_pay_amt_by_ttl_n_of_servi|string¦null|false|none|none|
|» rank_est_ttl_submitted_charge_amt|string¦null|false|none|none|
|» rank_ttl_hcpcs_code|string¦null|false|none|none|
|» rank_ttl_n_of_svcs|string¦null|false|none|none|
|» rank_var_est_ttl_mcare_submitted_charge_pay_amoun|string¦null|false|none|none|
|» summary_type|integer|false|none|none|
|» ttl_hcpcs_code|string¦null|false|none|none|
|» ttl_n_of_svcs|string¦null|false|none|none|
|» var_est_ttl_mcare_submitted_charge_pay_amt|string¦null|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-request-id|string||uuid issued to each request. Injected into all server logs. useful for debugging|
|200|x-sql|string||plaintext SQL used to complete db transaction.|
|200|x-count|string||full count of all records that meet query criteria (omitting any pagiation specs). useful for rendering pagiation limits without making another service call.|

<aside class="success">
This operation does not require authentication
</aside>

## create cms_service_provider_performance_summary

<a id="opIdcreateCmsServiceProviderPerformanceSummary"></a>

> Code samples

```javascript
const inputBody = '[
  {
    "entity_type": "string",
    "est_ttl_mcare_pay_amt": "string",
    "est_ttl_mcare_pay_amt_by_ttl_hcpcs_code": "string",
    "est_ttl_mcare_pay_amt_by_ttl_n_of_svcs": "string",
    "est_ttl_submitted_charge_amt": "string",
    "npi": 0,
    "prisma_id": 0,
    "rank_est_ttl_mcare_pay_amt": "string",
    "rank_est_ttl_mcare_pay_amt_by_ttl_hcpcs_code": "string",
    "rank_est_ttl_mcare_pay_amt_by_ttl_n_of_servi": "string",
    "rank_est_ttl_submitted_charge_amt": "string",
    "rank_ttl_hcpcs_code": "string",
    "rank_ttl_n_of_svcs": "string",
    "rank_var_est_ttl_mcare_submitted_charge_pay_amoun": "string",
    "summary_type": 0,
    "ttl_hcpcs_code": "string",
    "ttl_n_of_svcs": "string",
    "var_est_ttl_mcare_submitted_charge_pay_amt": "string"
  }
]';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('http://localhost:8080/service-engine-app/service/cms_service_provider_performance_summary',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```javascript--nodejs
const fetch = require('node-fetch');
const inputBody = [
  {
    "entity_type": "string",
    "est_ttl_mcare_pay_amt": "string",
    "est_ttl_mcare_pay_amt_by_ttl_hcpcs_code": "string",
    "est_ttl_mcare_pay_amt_by_ttl_n_of_svcs": "string",
    "est_ttl_submitted_charge_amt": "string",
    "npi": 0,
    "prisma_id": 0,
    "rank_est_ttl_mcare_pay_amt": "string",
    "rank_est_ttl_mcare_pay_amt_by_ttl_hcpcs_code": "string",
    "rank_est_ttl_mcare_pay_amt_by_ttl_n_of_servi": "string",
    "rank_est_ttl_submitted_charge_amt": "string",
    "rank_ttl_hcpcs_code": "string",
    "rank_ttl_n_of_svcs": "string",
    "rank_var_est_ttl_mcare_submitted_charge_pay_amoun": "string",
    "summary_type": 0,
    "ttl_hcpcs_code": "string",
    "ttl_n_of_svcs": "string",
    "var_est_ttl_mcare_submitted_charge_pay_amt": "string"
  }
];
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('http://localhost:8080/service-engine-app/service/cms_service_provider_performance_summary',
{
  method: 'POST',
  body: JSON.stringify(inputBody),
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

r = requests.post('http://localhost:8080/service-engine-app/service/cms_service_provider_performance_summary', headers = headers)

print(r.json())

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "http://localhost:8080/service-engine-app/service/cms_service_provider_performance_summary", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```http
POST http://localhost:8080/service-engine-app/service/cms_service_provider_performance_summary HTTP/1.1
Host: localhost:8080
Content-Type: application/json
Accept: application/json

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json'
}

result = RestClient.post 'http://localhost:8080/service-engine-app/service/cms_service_provider_performance_summary',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`POST /service-engine-app/service/cms_service_provider_performance_summary`

> Body parameter

```json
[
  {
    "entity_type": "string",
    "est_ttl_mcare_pay_amt": "string",
    "est_ttl_mcare_pay_amt_by_ttl_hcpcs_code": "string",
    "est_ttl_mcare_pay_amt_by_ttl_n_of_svcs": "string",
    "est_ttl_submitted_charge_amt": "string",
    "npi": 0,
    "prisma_id": 0,
    "rank_est_ttl_mcare_pay_amt": "string",
    "rank_est_ttl_mcare_pay_amt_by_ttl_hcpcs_code": "string",
    "rank_est_ttl_mcare_pay_amt_by_ttl_n_of_servi": "string",
    "rank_est_ttl_submitted_charge_amt": "string",
    "rank_ttl_hcpcs_code": "string",
    "rank_ttl_n_of_svcs": "string",
    "rank_var_est_ttl_mcare_submitted_charge_pay_amoun": "string",
    "summary_type": 0,
    "ttl_hcpcs_code": "string",
    "ttl_n_of_svcs": "string",
    "var_est_ttl_mcare_submitted_charge_pay_amt": "string"
  }
]
```

<h3 id="create-cms_service_provider_performance_summary-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
||fields|query|string|false|record fields to return in results|
|body|body|[CmsServiceProviderPerformanceSummary](#schemacmsserviceproviderperformancesummary)|true|Single CmsServiceProviderPerformanceSummary or array of CmsServiceProviderPerformanceSummary|

> Example responses

> 200 Response

```json
[
  {
    "entity_type": "string",
    "est_ttl_mcare_pay_amt": "string",
    "est_ttl_mcare_pay_amt_by_ttl_hcpcs_code": "string",
    "est_ttl_mcare_pay_amt_by_ttl_n_of_svcs": "string",
    "est_ttl_submitted_charge_amt": "string",
    "npi": 0,
    "prisma_id": 0,
    "rank_est_ttl_mcare_pay_amt": "string",
    "rank_est_ttl_mcare_pay_amt_by_ttl_hcpcs_code": "string",
    "rank_est_ttl_mcare_pay_amt_by_ttl_n_of_servi": "string",
    "rank_est_ttl_submitted_charge_amt": "string",
    "rank_ttl_hcpcs_code": "string",
    "rank_ttl_n_of_svcs": "string",
    "rank_var_est_ttl_mcare_submitted_charge_pay_amoun": "string",
    "summary_type": 0,
    "ttl_hcpcs_code": "string",
    "ttl_n_of_svcs": "string",
    "var_est_ttl_mcare_submitted_charge_pay_amt": "string"
  }
]
```

<h3 id="create-cms_service_provider_performance_summary-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A CmsServiceProviderPerformanceSummary Record|Inline|

<h3 id="create-cms_service_provider_performance_summary-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[CmsServiceProviderPerformanceSummary](#schemacmsserviceproviderperformancesummary)]|false|none|none|
|» entity_type|string¦null|false|none|none|
|» est_ttl_mcare_pay_amt|string¦null|false|none|none|
|» est_ttl_mcare_pay_amt_by_ttl_hcpcs_code|string¦null|false|none|none|
|» est_ttl_mcare_pay_amt_by_ttl_n_of_svcs|string¦null|false|none|none|
|» est_ttl_submitted_charge_amt|string¦null|false|none|none|
|» npi|integer|false|none|none|
|» prisma_id|integer|false|none|none|
|» rank_est_ttl_mcare_pay_amt|string¦null|false|none|none|
|» rank_est_ttl_mcare_pay_amt_by_ttl_hcpcs_code|string¦null|false|none|none|
|» rank_est_ttl_mcare_pay_amt_by_ttl_n_of_servi|string¦null|false|none|none|
|» rank_est_ttl_submitted_charge_amt|string¦null|false|none|none|
|» rank_ttl_hcpcs_code|string¦null|false|none|none|
|» rank_ttl_n_of_svcs|string¦null|false|none|none|
|» rank_var_est_ttl_mcare_submitted_charge_pay_amoun|string¦null|false|none|none|
|» summary_type|integer|false|none|none|
|» ttl_hcpcs_code|string¦null|false|none|none|
|» ttl_n_of_svcs|string¦null|false|none|none|
|» var_est_ttl_mcare_submitted_charge_pay_amt|string¦null|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-request-id|string||uuid issued to each request. Injected into all server logs. useful for debugging|
|200|x-sql|string||plaintext SQL used to complete db transaction.|

<aside class="success">
This operation does not require authentication
</aside>

## read cms_service_provider_performance_summary

<a id="opIdreadCmsServiceProviderPerformanceSummary"></a>

> Code samples

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('http://localhost:8080/service-engine-app/service/cms_service_provider_performance_summary/record?prisma_id=0',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```javascript--nodejs
const fetch = require('node-fetch');

const headers = {
  'Accept':'application/json'
};

fetch('http://localhost:8080/service-engine-app/service/cms_service_provider_performance_summary/record?prisma_id=0',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('http://localhost:8080/service-engine-app/service/cms_service_provider_performance_summary/record', params={
  'prisma_id': '0'
}, headers = headers)

print(r.json())

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://localhost:8080/service-engine-app/service/cms_service_provider_performance_summary/record", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```http
GET http://localhost:8080/service-engine-app/service/cms_service_provider_performance_summary/record?prisma_id=0 HTTP/1.1
Host: localhost:8080
Accept: application/json

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'http://localhost:8080/service-engine-app/service/cms_service_provider_performance_summary/record',
  params: {
  'prisma_id' => 'integer'
}, headers: headers

p JSON.parse(result)

```

`GET /service-engine-app/service/cms_service_provider_performance_summary/record`

<h3 id="read-cms_service_provider_performance_summary-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|prisma_id|query|integer|true|prisma_id|
||fields|query|string|false|record fields to return in results|

> Example responses

> 200 Response

```json
{
  "entity_type": "string",
  "est_ttl_mcare_pay_amt": "string",
  "est_ttl_mcare_pay_amt_by_ttl_hcpcs_code": "string",
  "est_ttl_mcare_pay_amt_by_ttl_n_of_svcs": "string",
  "est_ttl_submitted_charge_amt": "string",
  "npi": 0,
  "prisma_id": 0,
  "rank_est_ttl_mcare_pay_amt": "string",
  "rank_est_ttl_mcare_pay_amt_by_ttl_hcpcs_code": "string",
  "rank_est_ttl_mcare_pay_amt_by_ttl_n_of_servi": "string",
  "rank_est_ttl_submitted_charge_amt": "string",
  "rank_ttl_hcpcs_code": "string",
  "rank_ttl_n_of_svcs": "string",
  "rank_var_est_ttl_mcare_submitted_charge_pay_amoun": "string",
  "summary_type": 0,
  "ttl_hcpcs_code": "string",
  "ttl_n_of_svcs": "string",
  "var_est_ttl_mcare_submitted_charge_pay_amt": "string"
}
```

<h3 id="read-cms_service_provider_performance_summary-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A CmsServiceProviderPerformanceSummary Record|[CmsServiceProviderPerformanceSummary](#schemacmsserviceproviderperformancesummary)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-request-id|string||uuid issued to each request. Injected into all server logs. useful for debugging|
|200|x-sql|string||plaintext SQL used to complete db transaction.|

<aside class="success">
This operation does not require authentication
</aside>

## update cms_service_provider_performance_summary

<a id="opIdupdateCmsServiceProviderPerformanceSummary"></a>

> Code samples

```javascript
const inputBody = '{
  "entity_type": "string",
  "est_ttl_mcare_pay_amt": "string",
  "est_ttl_mcare_pay_amt_by_ttl_hcpcs_code": "string",
  "est_ttl_mcare_pay_amt_by_ttl_n_of_svcs": "string",
  "est_ttl_submitted_charge_amt": "string",
  "npi": 0,
  "prisma_id": 0,
  "rank_est_ttl_mcare_pay_amt": "string",
  "rank_est_ttl_mcare_pay_amt_by_ttl_hcpcs_code": "string",
  "rank_est_ttl_mcare_pay_amt_by_ttl_n_of_servi": "string",
  "rank_est_ttl_submitted_charge_amt": "string",
  "rank_ttl_hcpcs_code": "string",
  "rank_ttl_n_of_svcs": "string",
  "rank_var_est_ttl_mcare_submitted_charge_pay_amoun": "string",
  "summary_type": 0,
  "ttl_hcpcs_code": "string",
  "ttl_n_of_svcs": "string",
  "var_est_ttl_mcare_submitted_charge_pay_amt": "string"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('http://localhost:8080/service-engine-app/service/cms_service_provider_performance_summary/record?prisma_id=0',
{
  method: 'PUT',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```javascript--nodejs
const fetch = require('node-fetch');
const inputBody = {
  "entity_type": "string",
  "est_ttl_mcare_pay_amt": "string",
  "est_ttl_mcare_pay_amt_by_ttl_hcpcs_code": "string",
  "est_ttl_mcare_pay_amt_by_ttl_n_of_svcs": "string",
  "est_ttl_submitted_charge_amt": "string",
  "npi": 0,
  "prisma_id": 0,
  "rank_est_ttl_mcare_pay_amt": "string",
  "rank_est_ttl_mcare_pay_amt_by_ttl_hcpcs_code": "string",
  "rank_est_ttl_mcare_pay_amt_by_ttl_n_of_servi": "string",
  "rank_est_ttl_submitted_charge_amt": "string",
  "rank_ttl_hcpcs_code": "string",
  "rank_ttl_n_of_svcs": "string",
  "rank_var_est_ttl_mcare_submitted_charge_pay_amoun": "string",
  "summary_type": 0,
  "ttl_hcpcs_code": "string",
  "ttl_n_of_svcs": "string",
  "var_est_ttl_mcare_submitted_charge_pay_amt": "string"
};
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('http://localhost:8080/service-engine-app/service/cms_service_provider_performance_summary/record?prisma_id=0',
{
  method: 'PUT',
  body: JSON.stringify(inputBody),
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

r = requests.put('http://localhost:8080/service-engine-app/service/cms_service_provider_performance_summary/record', params={
  'prisma_id': '0'
}, headers = headers)

print(r.json())

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("PUT", "http://localhost:8080/service-engine-app/service/cms_service_provider_performance_summary/record", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```http
PUT http://localhost:8080/service-engine-app/service/cms_service_provider_performance_summary/record?prisma_id=0 HTTP/1.1
Host: localhost:8080
Content-Type: application/json
Accept: application/json

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json'
}

result = RestClient.put 'http://localhost:8080/service-engine-app/service/cms_service_provider_performance_summary/record',
  params: {
  'prisma_id' => 'integer'
}, headers: headers

p JSON.parse(result)

```

`PUT /service-engine-app/service/cms_service_provider_performance_summary/record`

> Body parameter

```json
{
  "entity_type": "string",
  "est_ttl_mcare_pay_amt": "string",
  "est_ttl_mcare_pay_amt_by_ttl_hcpcs_code": "string",
  "est_ttl_mcare_pay_amt_by_ttl_n_of_svcs": "string",
  "est_ttl_submitted_charge_amt": "string",
  "npi": 0,
  "prisma_id": 0,
  "rank_est_ttl_mcare_pay_amt": "string",
  "rank_est_ttl_mcare_pay_amt_by_ttl_hcpcs_code": "string",
  "rank_est_ttl_mcare_pay_amt_by_ttl_n_of_servi": "string",
  "rank_est_ttl_submitted_charge_amt": "string",
  "rank_ttl_hcpcs_code": "string",
  "rank_ttl_n_of_svcs": "string",
  "rank_var_est_ttl_mcare_submitted_charge_pay_amoun": "string",
  "summary_type": 0,
  "ttl_hcpcs_code": "string",
  "ttl_n_of_svcs": "string",
  "var_est_ttl_mcare_submitted_charge_pay_amt": "string"
}
```

<h3 id="update-cms_service_provider_performance_summary-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|prisma_id|query|integer|true|prisma_id|
||fields|query|string|false|record fields to return in results|
|body|body|[CmsServiceProviderPerformanceSummary](#schemacmsserviceproviderperformancesummary)|true|Single CmsServiceProviderPerformanceSummary|

> Example responses

> 200 Response

```json
{
  "entity_type": "string",
  "est_ttl_mcare_pay_amt": "string",
  "est_ttl_mcare_pay_amt_by_ttl_hcpcs_code": "string",
  "est_ttl_mcare_pay_amt_by_ttl_n_of_svcs": "string",
  "est_ttl_submitted_charge_amt": "string",
  "npi": 0,
  "prisma_id": 0,
  "rank_est_ttl_mcare_pay_amt": "string",
  "rank_est_ttl_mcare_pay_amt_by_ttl_hcpcs_code": "string",
  "rank_est_ttl_mcare_pay_amt_by_ttl_n_of_servi": "string",
  "rank_est_ttl_submitted_charge_amt": "string",
  "rank_ttl_hcpcs_code": "string",
  "rank_ttl_n_of_svcs": "string",
  "rank_var_est_ttl_mcare_submitted_charge_pay_amoun": "string",
  "summary_type": 0,
  "ttl_hcpcs_code": "string",
  "ttl_n_of_svcs": "string",
  "var_est_ttl_mcare_submitted_charge_pay_amt": "string"
}
```

<h3 id="update-cms_service_provider_performance_summary-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A CmsServiceProviderPerformanceSummary Record|[CmsServiceProviderPerformanceSummary](#schemacmsserviceproviderperformancesummary)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-request-id|string||uuid issued to each request. Injected into all server logs. useful for debugging|
|200|x-sql|string||plaintext SQL used to complete db transaction.|

<aside class="success">
This operation does not require authentication
</aside>

## delete cms_service_provider_performance_summary

<a id="opIddeleteCmsServiceProviderPerformanceSummary"></a>

> Code samples

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('http://localhost:8080/service-engine-app/service/cms_service_provider_performance_summary/record?prisma_id=0',
{
  method: 'DELETE',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```javascript--nodejs
const fetch = require('node-fetch');

const headers = {
  'Accept':'application/json'
};

fetch('http://localhost:8080/service-engine-app/service/cms_service_provider_performance_summary/record?prisma_id=0',
{
  method: 'DELETE',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.delete('http://localhost:8080/service-engine-app/service/cms_service_provider_performance_summary/record', params={
  'prisma_id': '0'
}, headers = headers)

print(r.json())

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("DELETE", "http://localhost:8080/service-engine-app/service/cms_service_provider_performance_summary/record", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```http
DELETE http://localhost:8080/service-engine-app/service/cms_service_provider_performance_summary/record?prisma_id=0 HTTP/1.1
Host: localhost:8080
Accept: application/json

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.delete 'http://localhost:8080/service-engine-app/service/cms_service_provider_performance_summary/record',
  params: {
  'prisma_id' => 'integer'
}, headers: headers

p JSON.parse(result)

```

`DELETE /service-engine-app/service/cms_service_provider_performance_summary/record`

<h3 id="delete-cms_service_provider_performance_summary-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|prisma_id|query|integer|true|prisma_id|

> Example responses

> 200 Response

```json
{
  "count": 0
}
```

<h3 id="delete-cms_service_provider_performance_summary-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A CmsServiceProviderPerformanceSummary Record|[_service_count](#schema_service_count)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-request-id|string||uuid issued to each request. Injected into all server logs. useful for debugging|
|200|x-sql|string||plaintext SQL used to complete db transaction.|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="some-app-service-cmsserviceproviderperformancesummarytype">CmsServiceProviderPerformanceSummaryType</h1>

## search cms_service_provider_performance_summary_type

<a id="opIdsearchCmsServiceProviderPerformanceSummaryType"></a>

> Code samples

```javascript

const headers = {
  'Accept':'application/json',
  'x-get-count':'string',
  'x-get-sql':'string'
};

fetch('http://localhost:8080/service-engine-app/service/cms_service_provider_performance_summary_type',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```javascript--nodejs
const fetch = require('node-fetch');

const headers = {
  'Accept':'application/json',
  'x-get-count':'string',
  'x-get-sql':'string'
};

fetch('http://localhost:8080/service-engine-app/service/cms_service_provider_performance_summary_type',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'x-get-count': 'string',
  'x-get-sql': 'string'
}

r = requests.get('http://localhost:8080/service-engine-app/service/cms_service_provider_performance_summary_type', headers = headers)

print(r.json())

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
        "x-get-count": []string{"string"},
        "x-get-sql": []string{"string"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://localhost:8080/service-engine-app/service/cms_service_provider_performance_summary_type", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```http
GET http://localhost:8080/service-engine-app/service/cms_service_provider_performance_summary_type HTTP/1.1
Host: localhost:8080
Accept: application/json
x-get-count: string
x-get-sql: string

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'x-get-count' => 'string',
  'x-get-sql' => 'string'
}

result = RestClient.get 'http://localhost:8080/service-engine-app/service/cms_service_provider_performance_summary_type',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /service-engine-app/service/cms_service_provider_performance_summary_type`

<h3 id="search-cms_service_provider_performance_summary_type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|description|query|string|false|description|
|group_membership|query|boolean|false|group_membership|
|id|query|integer|false|id|
|slug|query|string|false|slug|
||fields|query|string|false|record fields to return in results|
||seperator|query|string|false|character to be used as seperator in context & operations values. default is pipe `|`|
||notWhere|query|string|false|SQL query context. Apply query components to where OR get the inverse. Default is false.|
||statementContext|query|string|false|SQL query context. Apply query components all together (and each) OR select any matching (OR).|
||orderBy|query|string|false|seperated list of orderBy fields + direction (field desc || field asc). acs is default.|
||page|query|number|false|pagination page|
||limit|query|number|false|pagination limit|
|x-get-count|header|string|false|Request Search Query count(*) be sent back in a response header.|
|x-get-sql|header|string|false|Request plaintext SQL be sent back in a response header.|

> Example responses

> 200 Response

```json
[
  {
    "description": "string",
    "group_membership": true,
    "id": 0,
    "slug": "string"
  }
]
```

<h3 id="search-cms_service_provider_performance_summary_type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A paged array of CmsServiceProviderPerformanceSummaryType Records|Inline|

<h3 id="search-cms_service_provider_performance_summary_type-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[CmsServiceProviderPerformanceSummaryType](#schemacmsserviceproviderperformancesummarytype)]|false|none|none|
|» description|string|false|none|none|
|» group_membership|boolean|false|none|none|
|» id|integer|false|none|none|
|» slug|string¦null|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-request-id|string||uuid issued to each request. Injected into all server logs. useful for debugging|
|200|x-sql|string||plaintext SQL used to complete db transaction.|
|200|x-count|string||full count of all records that meet query criteria (omitting any pagiation specs). useful for rendering pagiation limits without making another service call.|

<aside class="success">
This operation does not require authentication
</aside>

## create cms_service_provider_performance_summary_type

<a id="opIdcreateCmsServiceProviderPerformanceSummaryType"></a>

> Code samples

```javascript
const inputBody = '[
  {
    "description": "string",
    "group_membership": true,
    "id": 0,
    "slug": "string"
  }
]';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('http://localhost:8080/service-engine-app/service/cms_service_provider_performance_summary_type',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```javascript--nodejs
const fetch = require('node-fetch');
const inputBody = [
  {
    "description": "string",
    "group_membership": true,
    "id": 0,
    "slug": "string"
  }
];
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('http://localhost:8080/service-engine-app/service/cms_service_provider_performance_summary_type',
{
  method: 'POST',
  body: JSON.stringify(inputBody),
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

r = requests.post('http://localhost:8080/service-engine-app/service/cms_service_provider_performance_summary_type', headers = headers)

print(r.json())

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "http://localhost:8080/service-engine-app/service/cms_service_provider_performance_summary_type", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```http
POST http://localhost:8080/service-engine-app/service/cms_service_provider_performance_summary_type HTTP/1.1
Host: localhost:8080
Content-Type: application/json
Accept: application/json

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json'
}

result = RestClient.post 'http://localhost:8080/service-engine-app/service/cms_service_provider_performance_summary_type',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`POST /service-engine-app/service/cms_service_provider_performance_summary_type`

> Body parameter

```json
[
  {
    "description": "string",
    "group_membership": true,
    "id": 0,
    "slug": "string"
  }
]
```

<h3 id="create-cms_service_provider_performance_summary_type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
||fields|query|string|false|record fields to return in results|
|body|body|[CmsServiceProviderPerformanceSummaryType](#schemacmsserviceproviderperformancesummarytype)|true|Single CmsServiceProviderPerformanceSummaryType or array of CmsServiceProviderPerformanceSummaryType|

> Example responses

> 200 Response

```json
[
  {
    "description": "string",
    "group_membership": true,
    "id": 0,
    "slug": "string"
  }
]
```

<h3 id="create-cms_service_provider_performance_summary_type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A CmsServiceProviderPerformanceSummaryType Record|Inline|

<h3 id="create-cms_service_provider_performance_summary_type-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[CmsServiceProviderPerformanceSummaryType](#schemacmsserviceproviderperformancesummarytype)]|false|none|none|
|» description|string|false|none|none|
|» group_membership|boolean|false|none|none|
|» id|integer|false|none|none|
|» slug|string¦null|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-request-id|string||uuid issued to each request. Injected into all server logs. useful for debugging|
|200|x-sql|string||plaintext SQL used to complete db transaction.|

<aside class="success">
This operation does not require authentication
</aside>

## read cms_service_provider_performance_summary_type

<a id="opIdreadCmsServiceProviderPerformanceSummaryType"></a>

> Code samples

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('http://localhost:8080/service-engine-app/service/cms_service_provider_performance_summary_type/record?id=0',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```javascript--nodejs
const fetch = require('node-fetch');

const headers = {
  'Accept':'application/json'
};

fetch('http://localhost:8080/service-engine-app/service/cms_service_provider_performance_summary_type/record?id=0',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('http://localhost:8080/service-engine-app/service/cms_service_provider_performance_summary_type/record', params={
  'id': '0'
}, headers = headers)

print(r.json())

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://localhost:8080/service-engine-app/service/cms_service_provider_performance_summary_type/record", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```http
GET http://localhost:8080/service-engine-app/service/cms_service_provider_performance_summary_type/record?id=0 HTTP/1.1
Host: localhost:8080
Accept: application/json

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'http://localhost:8080/service-engine-app/service/cms_service_provider_performance_summary_type/record',
  params: {
  'id' => 'integer'
}, headers: headers

p JSON.parse(result)

```

`GET /service-engine-app/service/cms_service_provider_performance_summary_type/record`

<h3 id="read-cms_service_provider_performance_summary_type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|integer|true|id|
||fields|query|string|false|record fields to return in results|

> Example responses

> 200 Response

```json
{
  "description": "string",
  "group_membership": true,
  "id": 0,
  "slug": "string"
}
```

<h3 id="read-cms_service_provider_performance_summary_type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A CmsServiceProviderPerformanceSummaryType Record|[CmsServiceProviderPerformanceSummaryType](#schemacmsserviceproviderperformancesummarytype)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-request-id|string||uuid issued to each request. Injected into all server logs. useful for debugging|
|200|x-sql|string||plaintext SQL used to complete db transaction.|

<aside class="success">
This operation does not require authentication
</aside>

## update cms_service_provider_performance_summary_type

<a id="opIdupdateCmsServiceProviderPerformanceSummaryType"></a>

> Code samples

```javascript
const inputBody = '{
  "description": "string",
  "group_membership": true,
  "id": 0,
  "slug": "string"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('http://localhost:8080/service-engine-app/service/cms_service_provider_performance_summary_type/record?id=0',
{
  method: 'PUT',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```javascript--nodejs
const fetch = require('node-fetch');
const inputBody = {
  "description": "string",
  "group_membership": true,
  "id": 0,
  "slug": "string"
};
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('http://localhost:8080/service-engine-app/service/cms_service_provider_performance_summary_type/record?id=0',
{
  method: 'PUT',
  body: JSON.stringify(inputBody),
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

r = requests.put('http://localhost:8080/service-engine-app/service/cms_service_provider_performance_summary_type/record', params={
  'id': '0'
}, headers = headers)

print(r.json())

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("PUT", "http://localhost:8080/service-engine-app/service/cms_service_provider_performance_summary_type/record", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```http
PUT http://localhost:8080/service-engine-app/service/cms_service_provider_performance_summary_type/record?id=0 HTTP/1.1
Host: localhost:8080
Content-Type: application/json
Accept: application/json

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json'
}

result = RestClient.put 'http://localhost:8080/service-engine-app/service/cms_service_provider_performance_summary_type/record',
  params: {
  'id' => 'integer'
}, headers: headers

p JSON.parse(result)

```

`PUT /service-engine-app/service/cms_service_provider_performance_summary_type/record`

> Body parameter

```json
{
  "description": "string",
  "group_membership": true,
  "id": 0,
  "slug": "string"
}
```

<h3 id="update-cms_service_provider_performance_summary_type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|integer|true|id|
||fields|query|string|false|record fields to return in results|
|body|body|[CmsServiceProviderPerformanceSummaryType](#schemacmsserviceproviderperformancesummarytype)|true|Single CmsServiceProviderPerformanceSummaryType|

> Example responses

> 200 Response

```json
{
  "description": "string",
  "group_membership": true,
  "id": 0,
  "slug": "string"
}
```

<h3 id="update-cms_service_provider_performance_summary_type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A CmsServiceProviderPerformanceSummaryType Record|[CmsServiceProviderPerformanceSummaryType](#schemacmsserviceproviderperformancesummarytype)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-request-id|string||uuid issued to each request. Injected into all server logs. useful for debugging|
|200|x-sql|string||plaintext SQL used to complete db transaction.|

<aside class="success">
This operation does not require authentication
</aside>

## delete cms_service_provider_performance_summary_type

<a id="opIddeleteCmsServiceProviderPerformanceSummaryType"></a>

> Code samples

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('http://localhost:8080/service-engine-app/service/cms_service_provider_performance_summary_type/record?id=0',
{
  method: 'DELETE',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```javascript--nodejs
const fetch = require('node-fetch');

const headers = {
  'Accept':'application/json'
};

fetch('http://localhost:8080/service-engine-app/service/cms_service_provider_performance_summary_type/record?id=0',
{
  method: 'DELETE',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.delete('http://localhost:8080/service-engine-app/service/cms_service_provider_performance_summary_type/record', params={
  'id': '0'
}, headers = headers)

print(r.json())

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("DELETE", "http://localhost:8080/service-engine-app/service/cms_service_provider_performance_summary_type/record", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```http
DELETE http://localhost:8080/service-engine-app/service/cms_service_provider_performance_summary_type/record?id=0 HTTP/1.1
Host: localhost:8080
Accept: application/json

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.delete 'http://localhost:8080/service-engine-app/service/cms_service_provider_performance_summary_type/record',
  params: {
  'id' => 'integer'
}, headers: headers

p JSON.parse(result)

```

`DELETE /service-engine-app/service/cms_service_provider_performance_summary_type/record`

<h3 id="delete-cms_service_provider_performance_summary_type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|integer|true|id|

> Example responses

> 200 Response

```json
{
  "count": 0
}
```

<h3 id="delete-cms_service_provider_performance_summary_type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A CmsServiceProviderPerformanceSummaryType Record|[_service_count](#schema_service_count)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-request-id|string||uuid issued to each request. Injected into all server logs. useful for debugging|
|200|x-sql|string||plaintext SQL used to complete db transaction.|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="some-app-service-cmsservices">CmsServices</h1>

## search cms_services

<a id="opIdsearchCmsServices"></a>

> Code samples

```javascript

const headers = {
  'Accept':'application/json',
  'x-get-count':'string',
  'x-get-sql':'string'
};

fetch('http://localhost:8080/service-engine-app/service/cms_services',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```javascript--nodejs
const fetch = require('node-fetch');

const headers = {
  'Accept':'application/json',
  'x-get-count':'string',
  'x-get-sql':'string'
};

fetch('http://localhost:8080/service-engine-app/service/cms_services',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'x-get-count': 'string',
  'x-get-sql': 'string'
}

r = requests.get('http://localhost:8080/service-engine-app/service/cms_services', headers = headers)

print(r.json())

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
        "x-get-count": []string{"string"},
        "x-get-sql": []string{"string"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://localhost:8080/service-engine-app/service/cms_services", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```http
GET http://localhost:8080/service-engine-app/service/cms_services HTTP/1.1
Host: localhost:8080
Accept: application/json
x-get-count: string
x-get-sql: string

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'x-get-count' => 'string',
  'x-get-sql' => 'string'
}

result = RestClient.get 'http://localhost:8080/service-engine-app/service/cms_services',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /service-engine-app/service/cms_services`

<h3 id="search-cms_services-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|hcpcs_code|query|string|false|hcpcs_code|
|hcpcs_description|query|string|false|hcpcs_description|
|hcpcs_drug_indicator|query|string|false|hcpcs_drug_indicator|
||fields|query|string|false|record fields to return in results|
||seperator|query|string|false|character to be used as seperator in context & operations values. default is pipe `|`|
||notWhere|query|string|false|SQL query context. Apply query components to where OR get the inverse. Default is false.|
||statementContext|query|string|false|SQL query context. Apply query components all together (and each) OR select any matching (OR).|
||orderBy|query|string|false|seperated list of orderBy fields + direction (field desc || field asc). acs is default.|
||page|query|number|false|pagination page|
||limit|query|number|false|pagination limit|
|x-get-count|header|string|false|Request Search Query count(*) be sent back in a response header.|
|x-get-sql|header|string|false|Request plaintext SQL be sent back in a response header.|

> Example responses

> 200 Response

```json
[
  {
    "hcpcs_code": "string",
    "hcpcs_description": "string",
    "hcpcs_drug_indicator": "string"
  }
]
```

<h3 id="search-cms_services-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A paged array of CmsServices Records|Inline|

<h3 id="search-cms_services-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[CmsServices](#schemacmsservices)]|false|none|none|
|» hcpcs_code|string|false|none|none|
|» hcpcs_description|string¦null|false|none|none|
|» hcpcs_drug_indicator|string¦null|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-request-id|string||uuid issued to each request. Injected into all server logs. useful for debugging|
|200|x-sql|string||plaintext SQL used to complete db transaction.|
|200|x-count|string||full count of all records that meet query criteria (omitting any pagiation specs). useful for rendering pagiation limits without making another service call.|

<aside class="success">
This operation does not require authentication
</aside>

## create cms_services

<a id="opIdcreateCmsServices"></a>

> Code samples

```javascript
const inputBody = '[
  {
    "hcpcs_code": "string",
    "hcpcs_description": "string",
    "hcpcs_drug_indicator": "string"
  }
]';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('http://localhost:8080/service-engine-app/service/cms_services',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```javascript--nodejs
const fetch = require('node-fetch');
const inputBody = [
  {
    "hcpcs_code": "string",
    "hcpcs_description": "string",
    "hcpcs_drug_indicator": "string"
  }
];
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('http://localhost:8080/service-engine-app/service/cms_services',
{
  method: 'POST',
  body: JSON.stringify(inputBody),
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

r = requests.post('http://localhost:8080/service-engine-app/service/cms_services', headers = headers)

print(r.json())

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "http://localhost:8080/service-engine-app/service/cms_services", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```http
POST http://localhost:8080/service-engine-app/service/cms_services HTTP/1.1
Host: localhost:8080
Content-Type: application/json
Accept: application/json

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json'
}

result = RestClient.post 'http://localhost:8080/service-engine-app/service/cms_services',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`POST /service-engine-app/service/cms_services`

> Body parameter

```json
[
  {
    "hcpcs_code": "string",
    "hcpcs_description": "string",
    "hcpcs_drug_indicator": "string"
  }
]
```

<h3 id="create-cms_services-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
||fields|query|string|false|record fields to return in results|
|body|body|[CmsServices](#schemacmsservices)|true|Single CmsServices or array of CmsServices|

> Example responses

> 200 Response

```json
[
  {
    "hcpcs_code": "string",
    "hcpcs_description": "string",
    "hcpcs_drug_indicator": "string"
  }
]
```

<h3 id="create-cms_services-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A CmsServices Record|Inline|

<h3 id="create-cms_services-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[CmsServices](#schemacmsservices)]|false|none|none|
|» hcpcs_code|string|false|none|none|
|» hcpcs_description|string¦null|false|none|none|
|» hcpcs_drug_indicator|string¦null|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-request-id|string||uuid issued to each request. Injected into all server logs. useful for debugging|
|200|x-sql|string||plaintext SQL used to complete db transaction.|

<aside class="success">
This operation does not require authentication
</aside>

## read cms_services

<a id="opIdreadCmsServices"></a>

> Code samples

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('http://localhost:8080/service-engine-app/service/cms_services/record?hcpcs_code=string',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```javascript--nodejs
const fetch = require('node-fetch');

const headers = {
  'Accept':'application/json'
};

fetch('http://localhost:8080/service-engine-app/service/cms_services/record?hcpcs_code=string',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('http://localhost:8080/service-engine-app/service/cms_services/record', params={
  'hcpcs_code': 'string'
}, headers = headers)

print(r.json())

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://localhost:8080/service-engine-app/service/cms_services/record", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```http
GET http://localhost:8080/service-engine-app/service/cms_services/record?hcpcs_code=string HTTP/1.1
Host: localhost:8080
Accept: application/json

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'http://localhost:8080/service-engine-app/service/cms_services/record',
  params: {
  'hcpcs_code' => 'string'
}, headers: headers

p JSON.parse(result)

```

`GET /service-engine-app/service/cms_services/record`

<h3 id="read-cms_services-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|hcpcs_code|query|string|true|hcpcs_code|
||fields|query|string|false|record fields to return in results|

> Example responses

> 200 Response

```json
{
  "hcpcs_code": "string",
  "hcpcs_description": "string",
  "hcpcs_drug_indicator": "string"
}
```

<h3 id="read-cms_services-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A CmsServices Record|[CmsServices](#schemacmsservices)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-request-id|string||uuid issued to each request. Injected into all server logs. useful for debugging|
|200|x-sql|string||plaintext SQL used to complete db transaction.|

<aside class="success">
This operation does not require authentication
</aside>

## update cms_services

<a id="opIdupdateCmsServices"></a>

> Code samples

```javascript
const inputBody = '{
  "hcpcs_code": "string",
  "hcpcs_description": "string",
  "hcpcs_drug_indicator": "string"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('http://localhost:8080/service-engine-app/service/cms_services/record?hcpcs_code=string',
{
  method: 'PUT',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```javascript--nodejs
const fetch = require('node-fetch');
const inputBody = {
  "hcpcs_code": "string",
  "hcpcs_description": "string",
  "hcpcs_drug_indicator": "string"
};
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('http://localhost:8080/service-engine-app/service/cms_services/record?hcpcs_code=string',
{
  method: 'PUT',
  body: JSON.stringify(inputBody),
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

r = requests.put('http://localhost:8080/service-engine-app/service/cms_services/record', params={
  'hcpcs_code': 'string'
}, headers = headers)

print(r.json())

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("PUT", "http://localhost:8080/service-engine-app/service/cms_services/record", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```http
PUT http://localhost:8080/service-engine-app/service/cms_services/record?hcpcs_code=string HTTP/1.1
Host: localhost:8080
Content-Type: application/json
Accept: application/json

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json'
}

result = RestClient.put 'http://localhost:8080/service-engine-app/service/cms_services/record',
  params: {
  'hcpcs_code' => 'string'
}, headers: headers

p JSON.parse(result)

```

`PUT /service-engine-app/service/cms_services/record`

> Body parameter

```json
{
  "hcpcs_code": "string",
  "hcpcs_description": "string",
  "hcpcs_drug_indicator": "string"
}
```

<h3 id="update-cms_services-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|hcpcs_code|query|string|true|hcpcs_code|
||fields|query|string|false|record fields to return in results|
|body|body|[CmsServices](#schemacmsservices)|true|Single CmsServices|

> Example responses

> 200 Response

```json
{
  "hcpcs_code": "string",
  "hcpcs_description": "string",
  "hcpcs_drug_indicator": "string"
}
```

<h3 id="update-cms_services-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A CmsServices Record|[CmsServices](#schemacmsservices)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-request-id|string||uuid issued to each request. Injected into all server logs. useful for debugging|
|200|x-sql|string||plaintext SQL used to complete db transaction.|

<aside class="success">
This operation does not require authentication
</aside>

## delete cms_services

<a id="opIddeleteCmsServices"></a>

> Code samples

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('http://localhost:8080/service-engine-app/service/cms_services/record?hcpcs_code=string',
{
  method: 'DELETE',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```javascript--nodejs
const fetch = require('node-fetch');

const headers = {
  'Accept':'application/json'
};

fetch('http://localhost:8080/service-engine-app/service/cms_services/record?hcpcs_code=string',
{
  method: 'DELETE',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.delete('http://localhost:8080/service-engine-app/service/cms_services/record', params={
  'hcpcs_code': 'string'
}, headers = headers)

print(r.json())

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("DELETE", "http://localhost:8080/service-engine-app/service/cms_services/record", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```http
DELETE http://localhost:8080/service-engine-app/service/cms_services/record?hcpcs_code=string HTTP/1.1
Host: localhost:8080
Accept: application/json

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.delete 'http://localhost:8080/service-engine-app/service/cms_services/record',
  params: {
  'hcpcs_code' => 'string'
}, headers: headers

p JSON.parse(result)

```

`DELETE /service-engine-app/service/cms_services/record`

<h3 id="delete-cms_services-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|hcpcs_code|query|string|true|hcpcs_code|

> Example responses

> 200 Response

```json
{
  "count": 0
}
```

<h3 id="delete-cms_services-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A CmsServices Record|[_service_count](#schema_service_count)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-request-id|string||uuid issued to each request. Injected into all server logs. useful for debugging|
|200|x-sql|string||plaintext SQL used to complete db transaction.|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="some-app-service-publicfasttest">PublicFastTest</h1>

## search public_fast_test

<a id="opIdsearchPublicFastTest"></a>

> Code samples

```javascript

const headers = {
  'Accept':'application/json',
  'x-get-count':'string',
  'x-get-sql':'string'
};

fetch('http://localhost:8080/service-engine-app/service/public_fast_test',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```javascript--nodejs
const fetch = require('node-fetch');

const headers = {
  'Accept':'application/json',
  'x-get-count':'string',
  'x-get-sql':'string'
};

fetch('http://localhost:8080/service-engine-app/service/public_fast_test',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'x-get-count': 'string',
  'x-get-sql': 'string'
}

r = requests.get('http://localhost:8080/service-engine-app/service/public_fast_test', headers = headers)

print(r.json())

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
        "x-get-count": []string{"string"},
        "x-get-sql": []string{"string"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://localhost:8080/service-engine-app/service/public_fast_test", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```http
GET http://localhost:8080/service-engine-app/service/public_fast_test HTTP/1.1
Host: localhost:8080
Accept: application/json
x-get-count: string
x-get-sql: string

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'x-get-count' => 'string',
  'x-get-sql' => 'string'
}

result = RestClient.get 'http://localhost:8080/service-engine-app/service/public_fast_test',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /service-engine-app/service/public_fast_test`

<h3 id="search-public_fast_test-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|address_city|query|string|false|address_city|
|address_country|query|string|false|address_country|
|address_latitude|query|string|false|address_latitude|
|address_longitude|query|string|false|address_longitude|
|address_state|query|string|false|address_state|
|address_street_01|query|string|false|address_street_01|
|address_street_02|query|string|false|address_street_02|
|address_zip_code|query|string|false|address_zip_code|
|entity_type|query|string|false|entity_type|
|npi|query|integer|false|npi|
|provider_type|query|string|false|provider_type|
||fields|query|string|false|record fields to return in results|
||seperator|query|string|false|character to be used as seperator in context & operations values. default is pipe `|`|
||notWhere|query|string|false|SQL query context. Apply query components to where OR get the inverse. Default is false.|
||statementContext|query|string|false|SQL query context. Apply query components all together (and each) OR select any matching (OR).|
||orderBy|query|string|false|seperated list of orderBy fields + direction (field desc || field asc). acs is default.|
||page|query|number|false|pagination page|
||limit|query|number|false|pagination limit|
|x-get-count|header|string|false|Request Search Query count(*) be sent back in a response header.|
|x-get-sql|header|string|false|Request plaintext SQL be sent back in a response header.|

> Example responses

> 200 Response

```json
[
  {
    "address_city": "string",
    "address_country": "string",
    "address_latitude": "string",
    "address_longitude": "string",
    "address_state": "string",
    "address_street_01": "string",
    "address_street_02": "string",
    "address_zip_code": "string",
    "entity_type": "string",
    "npi": 0,
    "provider_type": "string"
  }
]
```

<h3 id="search-public_fast_test-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A paged array of PublicFastTest Records|Inline|

<h3 id="search-public_fast_test-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[PublicFastTest](#schemapublicfasttest)]|false|none|none|
|» address_city|string¦null|false|none|none|
|» address_country|string¦null|false|none|none|
|» address_latitude|string¦null|false|none|none|
|» address_longitude|string¦null|false|none|none|
|» address_state|string¦null|false|none|none|
|» address_street_01|string¦null|false|none|none|
|» address_street_02|string¦null|false|none|none|
|» address_zip_code|string¦null|false|none|none|
|» entity_type|string¦null|false|none|none|
|» npi|integer¦null|false|none|none|
|» provider_type|string¦null|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-request-id|string||uuid issued to each request. Injected into all server logs. useful for debugging|
|200|x-sql|string||plaintext SQL used to complete db transaction.|
|200|x-count|string||full count of all records that meet query criteria (omitting any pagiation specs). useful for rendering pagiation limits without making another service call.|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="some-app-service-publici001citystateentityprovidern">PublicI001CityStateEntityProviderN</h1>

## search public_i001_city_state_entity_provider_n

<a id="opIdsearchPublicI001CityStateEntityProviderN"></a>

> Code samples

```javascript

const headers = {
  'Accept':'application/json',
  'x-get-count':'string',
  'x-get-sql':'string'
};

fetch('http://localhost:8080/service-engine-app/service/public_i001_city_state_entity_provider_n',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```javascript--nodejs
const fetch = require('node-fetch');

const headers = {
  'Accept':'application/json',
  'x-get-count':'string',
  'x-get-sql':'string'
};

fetch('http://localhost:8080/service-engine-app/service/public_i001_city_state_entity_provider_n',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'x-get-count': 'string',
  'x-get-sql': 'string'
}

r = requests.get('http://localhost:8080/service-engine-app/service/public_i001_city_state_entity_provider_n', headers = headers)

print(r.json())

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
        "x-get-count": []string{"string"},
        "x-get-sql": []string{"string"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://localhost:8080/service-engine-app/service/public_i001_city_state_entity_provider_n", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```http
GET http://localhost:8080/service-engine-app/service/public_i001_city_state_entity_provider_n HTTP/1.1
Host: localhost:8080
Accept: application/json
x-get-count: string
x-get-sql: string

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'x-get-count' => 'string',
  'x-get-sql' => 'string'
}

result = RestClient.get 'http://localhost:8080/service-engine-app/service/public_i001_city_state_entity_provider_n',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /service-engine-app/service/public_i001_city_state_entity_provider_n`

<h3 id="search-public_i001_city_state_entity_provider_n-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|address_city|query|string|false|address_city|
|address_state|query|string|false|address_state|
|entity_type|query|string|false|entity_type|
|n|query|string|false|n|
|provider_type|query|string|false|provider_type|
||fields|query|string|false|record fields to return in results|
||seperator|query|string|false|character to be used as seperator in context & operations values. default is pipe `|`|
||notWhere|query|string|false|SQL query context. Apply query components to where OR get the inverse. Default is false.|
||statementContext|query|string|false|SQL query context. Apply query components all together (and each) OR select any matching (OR).|
||orderBy|query|string|false|seperated list of orderBy fields + direction (field desc || field asc). acs is default.|
||page|query|number|false|pagination page|
||limit|query|number|false|pagination limit|
|x-get-count|header|string|false|Request Search Query count(*) be sent back in a response header.|
|x-get-sql|header|string|false|Request plaintext SQL be sent back in a response header.|

> Example responses

> 200 Response

```json
[
  {
    "address_city": "string",
    "address_state": "string",
    "entity_type": "string",
    "n": "string",
    "provider_type": "string"
  }
]
```

<h3 id="search-public_i001_city_state_entity_provider_n-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A paged array of PublicI001CityStateEntityProviderN Records|Inline|

<h3 id="search-public_i001_city_state_entity_provider_n-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[PublicI001CityStateEntityProviderN](#schemapublici001citystateentityprovidern)]|false|none|none|
|» address_city|string¦null|false|none|none|
|» address_state|string¦null|false|none|none|
|» entity_type|string¦null|false|none|none|
|» n|string¦null|false|none|none|
|» provider_type|string¦null|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-request-id|string||uuid issued to each request. Injected into all server logs. useful for debugging|
|200|x-sql|string||plaintext SQL used to complete db transaction.|
|200|x-count|string||full count of all records that meet query criteria (omitting any pagiation specs). useful for rendering pagiation limits without making another service call.|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="some-app-service-_service">_service</h1>

## heathcheck resource

<a id="opIdhealthz"></a>

> Code samples

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('http://localhost:8080/healthz',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```javascript--nodejs
const fetch = require('node-fetch');

const headers = {
  'Accept':'application/json'
};

fetch('http://localhost:8080/healthz',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('http://localhost:8080/healthz', headers = headers)

print(r.json())

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://localhost:8080/healthz", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```http
GET http://localhost:8080/healthz HTTP/1.1
Host: localhost:8080
Accept: application/json

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'http://localhost:8080/healthz',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /healthz`

> Example responses

> 200 Response

```json
{}
```

<h3 id="heathcheck-resource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|heathcheck resource|Inline|

<h3 id="heathcheck-resource-responseschema">Response Schema</h3>

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-request-id|string||uuid issued to each request. Injected into all server logs. useful for debugging|

<aside class="success">
This operation does not require authentication
</aside>

## proto txt

<a id="opIdproto"></a>

> Code samples

```javascript

fetch('http://localhost:8080/proto',
{
  method: 'GET'

})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```javascript--nodejs
const fetch = require('node-fetch');

fetch('http://localhost:8080/proto',
{
  method: 'GET'

})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```python
import requests

r = requests.get('http://localhost:8080/proto')

print(r.json())

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://localhost:8080/proto", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```http
GET http://localhost:8080/proto HTTP/1.1
Host: localhost:8080

```

```ruby
require 'rest-client'
require 'json'

result = RestClient.get 'http://localhost:8080/proto',
  params: {
  }

p JSON.parse(result)

```

`GET /proto`

<h3 id="proto-txt-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Text content for .proto file.|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-request-id|string||uuid issued to each request. Injected into all server logs. useful for debugging|

<aside class="success">
This operation does not require authentication
</aside>

## openapi json

<a id="opIdopenapi"></a>

> Code samples

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('http://localhost:8080/openapi',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```javascript--nodejs
const fetch = require('node-fetch');

const headers = {
  'Accept':'application/json'
};

fetch('http://localhost:8080/openapi',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('http://localhost:8080/openapi', headers = headers)

print(r.json())

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://localhost:8080/openapi", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```http
GET http://localhost:8080/openapi HTTP/1.1
Host: localhost:8080
Accept: application/json

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'http://localhost:8080/openapi',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /openapi`

<h3 id="openapi-json-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|debug|query|string|false|include debug routes (disabled by default)|

> Example responses

> 200 Response

```json
{}
```

<h3 id="openapi-json-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A paged array of Account Records|Inline|

<h3 id="openapi-json-responseschema">Response Schema</h3>

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-request-id|string||uuid issued to each request. Injected into all server logs. useful for debugging|

<aside class="success">
This operation does not require authentication
</aside>

## resources available in service (resource & CRUD + Search Operations)

<a id="opIdresources"></a>

> Code samples

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('http://localhost:8080/resources',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```javascript--nodejs
const fetch = require('node-fetch');

const headers = {
  'Accept':'application/json'
};

fetch('http://localhost:8080/resources',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('http://localhost:8080/resources', headers = headers)

print(r.json())

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://localhost:8080/resources", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```http
GET http://localhost:8080/resources HTTP/1.1
Host: localhost:8080
Accept: application/json

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'http://localhost:8080/resources',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /resources`

> Example responses

> 200 Response

```json
{}
```

<h3 id="resources-available-in-service-(resource-&-crud-+-search-operations)-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|blah blah blah|Inline|

<h3 id="resources-available-in-service-(resource-&-crud-+-search-operations)-responseschema">Response Schema</h3>

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-request-id|string||uuid issued to each request. Injected into all server logs. useful for debugging|

<aside class="success">
This operation does not require authentication
</aside>

## db resources available in service (tables, views, mat views)

<a id="opIddbResources"></a>

> Code samples

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('http://localhost:8080/db_resources',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```javascript--nodejs
const fetch = require('node-fetch');

const headers = {
  'Accept':'application/json'
};

fetch('http://localhost:8080/db_resources',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('http://localhost:8080/db_resources', headers = headers)

print(r.json())

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://localhost:8080/db_resources", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```http
GET http://localhost:8080/db_resources HTTP/1.1
Host: localhost:8080
Accept: application/json

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'http://localhost:8080/db_resources',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /db_resources`

<h3 id="db-resources-available-in-service-(tables,-views,-mat-views)-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resource|query|string|false|name of single db resource (table/view/materialized view)|

> Example responses

> 200 Response

```json
{}
```

<h3 id="db-resources-available-in-service-(tables,-views,-mat-views)-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A paged array of Account Records|Inline|

<h3 id="db-resources-available-in-service-(tables,-views,-mat-views)-responseschema">Response Schema</h3>

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-request-id|string||uuid issued to each request. Injected into all server logs. useful for debugging|

<aside class="success">
This operation does not require authentication
</aside>

## db resources available in service

<a id="opIddbResourcesRaw"></a>

> Code samples

```javascript

fetch('http://localhost:8080/db_resources/raw',
{
  method: 'GET'

})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```javascript--nodejs
const fetch = require('node-fetch');

fetch('http://localhost:8080/db_resources/raw',
{
  method: 'GET'

})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```python
import requests

r = requests.get('http://localhost:8080/db_resources/raw')

print(r.json())

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://localhost:8080/db_resources/raw", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```http
GET http://localhost:8080/db_resources/raw HTTP/1.1
Host: localhost:8080

```

```ruby
require 'rest-client'
require 'json'

result = RestClient.get 'http://localhost:8080/db_resources/raw',
  params: {
  }

p JSON.parse(result)

```

`GET /db_resources/raw`

<h3 id="db-resources-available-in-service-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A paged array of Account Records|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-request-id|string||uuid issued to each request. Injected into all server logs. useful for debugging|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS__service_count">_service_count</h2>
<!-- backwards compatibility -->
<a id="schema_service_count"></a>
<a id="schema__service_count"></a>
<a id="tocS_service_count"></a>
<a id="tocs_service_count"></a>

```json
{
  "count": 0
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|number|false|none|none|

<h2 id="tocS__search_interfaces">_search_interfaces</h2>
<!-- backwards compatibility -->
<a id="schema_search_interfaces"></a>
<a id="schema__search_interfaces"></a>
<a id="tocS_search_interfaces"></a>
<a id="tocs_search_interfaces"></a>

```json
{
  "field.equal": "string",
  "field.gt": "string",
  "field.gte": "string",
  "field.lt": "string",
  "field.lte": "string",
  "field.not": "string",
  "field.like": "string",
  "field.null": "string",
  "field.not_null": "string",
  "field.in": "string",
  "field.not_in": "string",
  "field.range": "string",
  "field.not_range": "string",
  "field.geo_bbox": "string",
  "field.geo_radius": "string",
  "field.geo_polygon": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|field.equal|string|false|none|none|
|field.gt|string|false|none|none|
|field.gte|string|false|none|none|
|field.lt|string|false|none|none|
|field.lte|string|false|none|none|
|field.not|string|false|none|none|
|field.like|string|false|none|none|
|field.null|string|false|none|none|
|field.not_null|string|false|none|none|
|field.in|string|false|none|none|
|field.not_in|string|false|none|none|
|field.range|string|false|none|none|
|field.not_range|string|false|none|none|
|field.geo_bbox|string|false|none|none|
|field.geo_radius|string|false|none|none|
|field.geo_polygon|string|false|none|none|

<h2 id="tocS__debug_resource_response">_debug_resource_response</h2>
<!-- backwards compatibility -->
<a id="schema_debug_resource_response"></a>
<a id="schema__debug_resource_response"></a>
<a id="tocS_debug_resource_response"></a>
<a id="tocs_debug_resource_response"></a>

```json
{
  "payload": {},
  "context": {},
  "requestId": "string",
  "searchQuery": {},
  "hardDelete": true,
  "sql": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|payload|object|false|none|none|
|context|object|false|none|none|
|requestId|string|false|none|none|
|searchQuery|object¦null|false|none|none|
|hardDelete|boolean¦null|false|none|none|
|sql|string|false|none|none|

<h2 id="tocS_CmsLiveServicePerformance">CmsLiveServicePerformance</h2>
<!-- backwards compatibility -->
<a id="schemacmsliveserviceperformance"></a>
<a id="schema_CmsLiveServicePerformance"></a>
<a id="tocScmsliveserviceperformance"></a>
<a id="tocscmsliveserviceperformance"></a>

```json
{
  "avg_avg_mcare_allowed_amt": "string",
  "avg_avg_mcare_pay_amt": "string",
  "avg_avg_mcare_standardized_amt": "string",
  "avg_avg_submitted_charge_amt": "string",
  "entity_type": "string",
  "est_ttl_mcare_allowed_amt": "string",
  "est_ttl_mcare_pay_amt": "string",
  "est_ttl_mcare_standardized_amt": "string",
  "est_ttl_submitted_charge_amt": "string",
  "hcpcs_code": "string",
  "max_avg_mcare_allowed_amt": "string",
  "max_avg_mcare_pay_amt": "string",
  "max_avg_mcare_standardized_amt": "string",
  "max_avg_submitted_charge_amt": "string",
  "min_avg_mcare_allowed_amt": "string",
  "min_avg_mcare_pay_amt": "string",
  "min_avg_mcare_standardized_amt": "string",
  "min_avg_submitted_charge_amt": "string",
  "n_of_distinct_mcare_beneficiary_per_day_svcs": "string",
  "n_of_mcare_beneficiaries": "string",
  "n_of_svcs": "string",
  "providers": "string",
  "rank_avg_avg_mcare_allowed_amt": "string",
  "rank_avg_avg_mcare_pay_amt": "string",
  "rank_avg_avg_mcare_standardized_amt": "string",
  "rank_avg_avg_submitted_charge_amt": "string",
  "rank_est_ttl_mcare_allowed_amt": "string",
  "rank_est_ttl_mcare_pay_amt": "string",
  "rank_est_ttl_mcare_standardized_amt": "string",
  "rank_est_ttl_submitted_charge_amt": "string",
  "rank_max_avg_mcare_allowed_amt": "string",
  "rank_max_avg_mcare_pay_amt": "string",
  "rank_max_avg_mcare_standardized_amt": "string",
  "rank_max_avg_submitted_charge_amt": "string",
  "rank_min_avg_mcare_allowed_amt": "string",
  "rank_min_avg_mcare_pay_amt": "string",
  "rank_min_avg_mcare_standardized_amt": "string",
  "rank_min_avg_submitted_charge_amt": "string",
  "rank_n_of_distinct_mcare_beneficiary_per_day_svcs": "string",
  "rank_n_of_mcare_beneficiaries": "string",
  "rank_n_of_svcs": "string",
  "rank_providers": "string",
  "rank_var_avg_mcare_allowed_amt": "string",
  "rank_var_avg_mcare_pay_amt": "string",
  "rank_var_avg_mcare_standardized_amt": "string",
  "rank_var_avg_mcare_submitted_charge_pay_amt": "string",
  "rank_var_avg_submitted_charge_amt": "string",
  "var_avg_mcare_allowed_amt": "string",
  "var_avg_mcare_pay_amt": "string",
  "var_avg_mcare_standardized_amt": "string",
  "var_avg_mcare_submitted_charge_pay_amt": "string",
  "var_avg_submitted_charge_amt": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|avg_avg_mcare_allowed_amt|string¦null|false|none|none|
|avg_avg_mcare_pay_amt|string¦null|false|none|none|
|avg_avg_mcare_standardized_amt|string¦null|false|none|none|
|avg_avg_submitted_charge_amt|string¦null|false|none|none|
|entity_type|string¦null|false|none|none|
|est_ttl_mcare_allowed_amt|string¦null|false|none|none|
|est_ttl_mcare_pay_amt|string¦null|false|none|none|
|est_ttl_mcare_standardized_amt|string¦null|false|none|none|
|est_ttl_submitted_charge_amt|string¦null|false|none|none|
|hcpcs_code|string¦null|false|none|none|
|max_avg_mcare_allowed_amt|string¦null|false|none|none|
|max_avg_mcare_pay_amt|string¦null|false|none|none|
|max_avg_mcare_standardized_amt|string¦null|false|none|none|
|max_avg_submitted_charge_amt|string¦null|false|none|none|
|min_avg_mcare_allowed_amt|string¦null|false|none|none|
|min_avg_mcare_pay_amt|string¦null|false|none|none|
|min_avg_mcare_standardized_amt|string¦null|false|none|none|
|min_avg_submitted_charge_amt|string¦null|false|none|none|
|n_of_distinct_mcare_beneficiary_per_day_svcs|string¦null|false|none|none|
|n_of_mcare_beneficiaries|string¦null|false|none|none|
|n_of_svcs|string¦null|false|none|none|
|providers|string¦null|false|none|none|
|rank_avg_avg_mcare_allowed_amt|string¦null|false|none|none|
|rank_avg_avg_mcare_pay_amt|string¦null|false|none|none|
|rank_avg_avg_mcare_standardized_amt|string¦null|false|none|none|
|rank_avg_avg_submitted_charge_amt|string¦null|false|none|none|
|rank_est_ttl_mcare_allowed_amt|string¦null|false|none|none|
|rank_est_ttl_mcare_pay_amt|string¦null|false|none|none|
|rank_est_ttl_mcare_standardized_amt|string¦null|false|none|none|
|rank_est_ttl_submitted_charge_amt|string¦null|false|none|none|
|rank_max_avg_mcare_allowed_amt|string¦null|false|none|none|
|rank_max_avg_mcare_pay_amt|string¦null|false|none|none|
|rank_max_avg_mcare_standardized_amt|string¦null|false|none|none|
|rank_max_avg_submitted_charge_amt|string¦null|false|none|none|
|rank_min_avg_mcare_allowed_amt|string¦null|false|none|none|
|rank_min_avg_mcare_pay_amt|string¦null|false|none|none|
|rank_min_avg_mcare_standardized_amt|string¦null|false|none|none|
|rank_min_avg_submitted_charge_amt|string¦null|false|none|none|
|rank_n_of_distinct_mcare_beneficiary_per_day_svcs|string¦null|false|none|none|
|rank_n_of_mcare_beneficiaries|string¦null|false|none|none|
|rank_n_of_svcs|string¦null|false|none|none|
|rank_providers|string¦null|false|none|none|
|rank_var_avg_mcare_allowed_amt|string¦null|false|none|none|
|rank_var_avg_mcare_pay_amt|string¦null|false|none|none|
|rank_var_avg_mcare_standardized_amt|string¦null|false|none|none|
|rank_var_avg_mcare_submitted_charge_pay_amt|string¦null|false|none|none|
|rank_var_avg_submitted_charge_amt|string¦null|false|none|none|
|var_avg_mcare_allowed_amt|string¦null|false|none|none|
|var_avg_mcare_pay_amt|string¦null|false|none|none|
|var_avg_mcare_standardized_amt|string¦null|false|none|none|
|var_avg_mcare_submitted_charge_pay_amt|string¦null|false|none|none|
|var_avg_submitted_charge_amt|string¦null|false|none|none|

<h2 id="tocS_CmsLiveServiceProviderPerformance">CmsLiveServiceProviderPerformance</h2>
<!-- backwards compatibility -->
<a id="schemacmsliveserviceproviderperformance"></a>
<a id="schema_CmsLiveServiceProviderPerformance"></a>
<a id="tocScmsliveserviceproviderperformance"></a>
<a id="tocscmsliveserviceproviderperformance"></a>

```json
{
  "avg_mcare_allowed_amt": "string",
  "avg_mcare_pay_amt": "string",
  "avg_mcare_standardized_amt": "string",
  "avg_submitted_charge_amt": "string",
  "entity_type": "string",
  "est_ttl_mcare_pay_amt": "string",
  "est_ttl_submitted_charge_amt": "string",
  "hcpcs_code": "string",
  "mcare_participation_indicator": "string",
  "n_of_distinct_mcare_beneficiary_per_day_svcs": 0,
  "n_of_mcare_beneficiaries": 0,
  "n_of_svcs": "string",
  "npi": 0,
  "place_of_service": "string",
  "rank_avg_mcare_allowed_amt": "string",
  "rank_avg_mcare_pay_amt": "string",
  "rank_avg_mcare_standardized_amt": "string",
  "rank_avg_submitted_charge_amt": "string",
  "rank_est_ttl_mcare_pay_amt": "string",
  "rank_est_ttl_submitted_charge_amt": "string",
  "rank_n_of_distinct_mcare_beneficiary_per_day_svcs": "string",
  "rank_n_of_mcare_beneficiaries": "string",
  "rank_n_of_svcs": "string",
  "rank_var_avg_mcare_submitted_charge_pay_amt": "string",
  "var_avg_mcare_submitted_charge_pay_amt": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|avg_mcare_allowed_amt|string¦null|false|none|none|
|avg_mcare_pay_amt|string¦null|false|none|none|
|avg_mcare_standardized_amt|string¦null|false|none|none|
|avg_submitted_charge_amt|string¦null|false|none|none|
|entity_type|string¦null|false|none|none|
|est_ttl_mcare_pay_amt|string¦null|false|none|none|
|est_ttl_submitted_charge_amt|string¦null|false|none|none|
|hcpcs_code|string¦null|false|none|none|
|mcare_participation_indicator|string¦null|false|none|none|
|n_of_distinct_mcare_beneficiary_per_day_svcs|integer¦null|false|none|none|
|n_of_mcare_beneficiaries|integer¦null|false|none|none|
|n_of_svcs|string¦null|false|none|none|
|npi|integer¦null|false|none|none|
|place_of_service|string¦null|false|none|none|
|rank_avg_mcare_allowed_amt|string¦null|false|none|none|
|rank_avg_mcare_pay_amt|string¦null|false|none|none|
|rank_avg_mcare_standardized_amt|string¦null|false|none|none|
|rank_avg_submitted_charge_amt|string¦null|false|none|none|
|rank_est_ttl_mcare_pay_amt|string¦null|false|none|none|
|rank_est_ttl_submitted_charge_amt|string¦null|false|none|none|
|rank_n_of_distinct_mcare_beneficiary_per_day_svcs|string¦null|false|none|none|
|rank_n_of_mcare_beneficiaries|string¦null|false|none|none|
|rank_n_of_svcs|string¦null|false|none|none|
|rank_var_avg_mcare_submitted_charge_pay_amt|string¦null|false|none|none|
|var_avg_mcare_submitted_charge_pay_amt|string¦null|false|none|none|

<h2 id="tocS_CmsLiveServiceProviderPerformanceSummaryDrugNo">CmsLiveServiceProviderPerformanceSummaryDrugNo</h2>
<!-- backwards compatibility -->
<a id="schemacmsliveserviceproviderperformancesummarydrugno"></a>
<a id="schema_CmsLiveServiceProviderPerformanceSummaryDrugNo"></a>
<a id="tocScmsliveserviceproviderperformancesummarydrugno"></a>
<a id="tocscmsliveserviceproviderperformancesummarydrugno"></a>

```json
{
  "entity_type": "string",
  "est_ttl_mcare_pay_amt": "string",
  "est_ttl_mcare_pay_amt_by_ttl_hcpcs_code": "string",
  "est_ttl_mcare_pay_amt_by_ttl_n_of_svcs": "string",
  "est_ttl_submitted_charge_amt": "string",
  "npi": 0,
  "rank_est_ttl_mcare_pay_amt": "string",
  "rank_est_ttl_mcare_pay_amt_by_ttl_hcpcs_code": "string",
  "rank_est_ttl_mcare_pay_amt_by_ttl_n_of_servi": "string",
  "rank_est_ttl_submitted_charge_amt": "string",
  "rank_ttl_hcpcs_code": "string",
  "rank_ttl_n_of_svcs": "string",
  "rank_var_est_ttl_mcare_submitted_charge_pay_amoun": "string",
  "summary_type": 0,
  "ttl_hcpcs_code": "string",
  "ttl_n_of_svcs": "string",
  "var_est_ttl_mcare_submitted_charge_pay_amt": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entity_type|string¦null|false|none|none|
|est_ttl_mcare_pay_amt|string¦null|false|none|none|
|est_ttl_mcare_pay_amt_by_ttl_hcpcs_code|string¦null|false|none|none|
|est_ttl_mcare_pay_amt_by_ttl_n_of_svcs|string¦null|false|none|none|
|est_ttl_submitted_charge_amt|string¦null|false|none|none|
|npi|integer¦null|false|none|none|
|rank_est_ttl_mcare_pay_amt|string¦null|false|none|none|
|rank_est_ttl_mcare_pay_amt_by_ttl_hcpcs_code|string¦null|false|none|none|
|rank_est_ttl_mcare_pay_amt_by_ttl_n_of_servi|string¦null|false|none|none|
|rank_est_ttl_submitted_charge_amt|string¦null|false|none|none|
|rank_ttl_hcpcs_code|string¦null|false|none|none|
|rank_ttl_n_of_svcs|string¦null|false|none|none|
|rank_var_est_ttl_mcare_submitted_charge_pay_amoun|string¦null|false|none|none|
|summary_type|integer¦null|false|none|none|
|ttl_hcpcs_code|string¦null|false|none|none|
|ttl_n_of_svcs|string¦null|false|none|none|
|var_est_ttl_mcare_submitted_charge_pay_amt|string¦null|false|none|none|

<h2 id="tocS_CmsLiveServiceProviderPerformanceSummaryDrugYes">CmsLiveServiceProviderPerformanceSummaryDrugYes</h2>
<!-- backwards compatibility -->
<a id="schemacmsliveserviceproviderperformancesummarydrugyes"></a>
<a id="schema_CmsLiveServiceProviderPerformanceSummaryDrugYes"></a>
<a id="tocScmsliveserviceproviderperformancesummarydrugyes"></a>
<a id="tocscmsliveserviceproviderperformancesummarydrugyes"></a>

```json
{
  "entity_type": "string",
  "est_ttl_mcare_pay_amt": "string",
  "est_ttl_mcare_pay_amt_by_ttl_hcpcs_code": "string",
  "est_ttl_mcare_pay_amt_by_ttl_n_of_svcs": "string",
  "est_ttl_submitted_charge_amt": "string",
  "npi": 0,
  "rank_est_ttl_mcare_pay_amt": "string",
  "rank_est_ttl_mcare_pay_amt_by_ttl_hcpcs_code": "string",
  "rank_est_ttl_mcare_pay_amt_by_ttl_n_of_servi": "string",
  "rank_est_ttl_submitted_charge_amt": "string",
  "rank_ttl_hcpcs_code": "string",
  "rank_ttl_n_of_svcs": "string",
  "rank_var_est_ttl_mcare_submitted_charge_pay_amoun": "string",
  "summary_type": 0,
  "ttl_hcpcs_code": "string",
  "ttl_n_of_svcs": "string",
  "var_est_ttl_mcare_submitted_charge_pay_amt": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entity_type|string¦null|false|none|none|
|est_ttl_mcare_pay_amt|string¦null|false|none|none|
|est_ttl_mcare_pay_amt_by_ttl_hcpcs_code|string¦null|false|none|none|
|est_ttl_mcare_pay_amt_by_ttl_n_of_svcs|string¦null|false|none|none|
|est_ttl_submitted_charge_amt|string¦null|false|none|none|
|npi|integer¦null|false|none|none|
|rank_est_ttl_mcare_pay_amt|string¦null|false|none|none|
|rank_est_ttl_mcare_pay_amt_by_ttl_hcpcs_code|string¦null|false|none|none|
|rank_est_ttl_mcare_pay_amt_by_ttl_n_of_servi|string¦null|false|none|none|
|rank_est_ttl_submitted_charge_amt|string¦null|false|none|none|
|rank_ttl_hcpcs_code|string¦null|false|none|none|
|rank_ttl_n_of_svcs|string¦null|false|none|none|
|rank_var_est_ttl_mcare_submitted_charge_pay_amoun|string¦null|false|none|none|
|summary_type|integer¦null|false|none|none|
|ttl_hcpcs_code|string¦null|false|none|none|
|ttl_n_of_svcs|string¦null|false|none|none|
|var_est_ttl_mcare_submitted_charge_pay_amt|string¦null|false|none|none|

<h2 id="tocS_CmsLiveServiceProviderPerformanceSummaryOverall">CmsLiveServiceProviderPerformanceSummaryOverall</h2>
<!-- backwards compatibility -->
<a id="schemacmsliveserviceproviderperformancesummaryoverall"></a>
<a id="schema_CmsLiveServiceProviderPerformanceSummaryOverall"></a>
<a id="tocScmsliveserviceproviderperformancesummaryoverall"></a>
<a id="tocscmsliveserviceproviderperformancesummaryoverall"></a>

```json
{
  "entity_type": "string",
  "est_ttl_mcare_pay_amt": "string",
  "est_ttl_mcare_pay_amt_by_ttl_hcpcs_code": "string",
  "est_ttl_mcare_pay_amt_by_ttl_n_of_svcs": "string",
  "est_ttl_submitted_charge_amt": "string",
  "npi": 0,
  "rank_est_ttl_mcare_pay_amt": "string",
  "rank_est_ttl_mcare_pay_amt_by_ttl_hcpcs_code": "string",
  "rank_est_ttl_mcare_pay_amt_by_ttl_n_of_servi": "string",
  "rank_est_ttl_submitted_charge_amt": "string",
  "rank_ttl_hcpcs_code": "string",
  "rank_ttl_n_of_svcs": "string",
  "rank_var_est_ttl_mcare_submitted_charge_pay_amoun": "string",
  "summary_type": 0,
  "ttl_hcpcs_code": "string",
  "ttl_n_of_svcs": "string",
  "var_est_ttl_mcare_submitted_charge_pay_amt": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entity_type|string¦null|false|none|none|
|est_ttl_mcare_pay_amt|string¦null|false|none|none|
|est_ttl_mcare_pay_amt_by_ttl_hcpcs_code|string¦null|false|none|none|
|est_ttl_mcare_pay_amt_by_ttl_n_of_svcs|string¦null|false|none|none|
|est_ttl_submitted_charge_amt|string¦null|false|none|none|
|npi|integer¦null|false|none|none|
|rank_est_ttl_mcare_pay_amt|string¦null|false|none|none|
|rank_est_ttl_mcare_pay_amt_by_ttl_hcpcs_code|string¦null|false|none|none|
|rank_est_ttl_mcare_pay_amt_by_ttl_n_of_servi|string¦null|false|none|none|
|rank_est_ttl_submitted_charge_amt|string¦null|false|none|none|
|rank_ttl_hcpcs_code|string¦null|false|none|none|
|rank_ttl_n_of_svcs|string¦null|false|none|none|
|rank_var_est_ttl_mcare_submitted_charge_pay_amoun|string¦null|false|none|none|
|summary_type|integer¦null|false|none|none|
|ttl_hcpcs_code|string¦null|false|none|none|
|ttl_n_of_svcs|string¦null|false|none|none|
|var_est_ttl_mcare_submitted_charge_pay_amt|string¦null|false|none|none|

<h2 id="tocS_CmsProviderPerformance">CmsProviderPerformance</h2>
<!-- backwards compatibility -->
<a id="schemacmsproviderperformance"></a>
<a id="schema_CmsProviderPerformance"></a>
<a id="tocScmsproviderperformance"></a>
<a id="tocscmsproviderperformance"></a>

```json
{
  "avg_mcare_allowed_amt": "string",
  "avg_mcare_pay_amt": "string",
  "avg_mcare_standardized_amt": "string",
  "avg_submitted_charge_amt": "string",
  "hcpcs_code": "string",
  "mcare_participation_indicator": "string",
  "n_of_distinct_mcare_beneficiary_per_day_svcs": 0,
  "n_of_mcare_beneficiaries": 0,
  "n_of_svcs": "string",
  "npi": 0,
  "place_of_service": "string",
  "prisma_id": 0
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|avg_mcare_allowed_amt|string¦null|false|none|none|
|avg_mcare_pay_amt|string¦null|false|none|none|
|avg_mcare_standardized_amt|string¦null|false|none|none|
|avg_submitted_charge_amt|string¦null|false|none|none|
|hcpcs_code|string|false|none|none|
|mcare_participation_indicator|string¦null|false|none|none|
|n_of_distinct_mcare_beneficiary_per_day_svcs|integer¦null|false|none|none|
|n_of_mcare_beneficiaries|integer¦null|false|none|none|
|n_of_svcs|string¦null|false|none|none|
|npi|integer|false|none|none|
|place_of_service|string|false|none|none|
|prisma_id|integer|false|none|none|

<h2 id="tocS_CmsProviders">CmsProviders</h2>
<!-- backwards compatibility -->
<a id="schemacmsproviders"></a>
<a id="schema_CmsProviders"></a>
<a id="tocScmsproviders"></a>
<a id="tocscmsproviders"></a>

```json
{
  "address_city": "string",
  "address_country": "string",
  "address_latitude": "string",
  "address_longitude": "string",
  "address_state": "string",
  "address_street_01": "string",
  "address_street_02": "string",
  "address_zip_code": "string",
  "entity_type": "string",
  "npi": 0,
  "provider_type": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address_city|string¦null|false|none|none|
|address_country|string¦null|false|none|none|
|address_latitude|string¦null|false|none|none|
|address_longitude|string¦null|false|none|none|
|address_state|string¦null|false|none|none|
|address_street_01|string¦null|false|none|none|
|address_street_02|string¦null|false|none|none|
|address_zip_code|string¦null|false|none|none|
|entity_type|string¦null|false|none|none|
|npi|integer|false|none|none|
|provider_type|string¦null|false|none|none|

<h2 id="tocS_CmsProvidersIndividuals">CmsProvidersIndividuals</h2>
<!-- backwards compatibility -->
<a id="schemacmsprovidersindividuals"></a>
<a id="schema_CmsProvidersIndividuals"></a>
<a id="tocScmsprovidersindividuals"></a>
<a id="tocscmsprovidersindividuals"></a>

```json
{
  "credentials": "string",
  "gender": "string",
  "name_first": "string",
  "name_last": "string",
  "name_middle": "string",
  "npi": 0
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|credentials|string¦null|false|none|none|
|gender|string¦null|false|none|none|
|name_first|string¦null|false|none|none|
|name_last|string¦null|false|none|none|
|name_middle|string¦null|false|none|none|
|npi|integer|false|none|none|

<h2 id="tocS_CmsProvidersOrganizations">CmsProvidersOrganizations</h2>
<!-- backwards compatibility -->
<a id="schemacmsprovidersorganizations"></a>
<a id="schema_CmsProvidersOrganizations"></a>
<a id="tocScmsprovidersorganizations"></a>
<a id="tocscmsprovidersorganizations"></a>

```json
{
  "name": "string",
  "npi": 0
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string¦null|false|none|none|
|npi|integer|false|none|none|

<h2 id="tocS_CmsServicePerformance">CmsServicePerformance</h2>
<!-- backwards compatibility -->
<a id="schemacmsserviceperformance"></a>
<a id="schema_CmsServicePerformance"></a>
<a id="tocScmsserviceperformance"></a>
<a id="tocscmsserviceperformance"></a>

```json
{
  "avg_avg_mcare_allowed_amt": "string",
  "avg_avg_mcare_pay_amt": "string",
  "avg_avg_mcare_standardized_amt": "string",
  "avg_avg_submitted_charge_amt": "string",
  "entity_type": "string",
  "est_ttl_mcare_allowed_amt": "string",
  "est_ttl_mcare_pay_amt": "string",
  "est_ttl_mcare_standardized_amt": "string",
  "est_ttl_submitted_charge_amt": "string",
  "hcpcs_code": "string",
  "max_avg_mcare_allowed_amt": "string",
  "max_avg_mcare_pay_amt": "string",
  "max_avg_mcare_standardized_amt": "string",
  "max_avg_submitted_charge_amt": "string",
  "min_avg_mcare_allowed_amt": "string",
  "min_avg_mcare_pay_amt": "string",
  "min_avg_mcare_standardized_amt": "string",
  "min_avg_submitted_charge_amt": "string",
  "n_of_distinct_mcare_beneficiary_per_day_svcs": "string",
  "n_of_mcare_beneficiaries": "string",
  "n_of_svcs": "string",
  "prisma_id": 0,
  "providers": "string",
  "rank_avg_avg_mcare_allowed_amt": "string",
  "rank_avg_avg_mcare_pay_amt": "string",
  "rank_avg_avg_mcare_standardized_amt": "string",
  "rank_avg_avg_submitted_charge_amt": "string",
  "rank_est_ttl_mcare_allowed_amt": "string",
  "rank_est_ttl_mcare_pay_amt": "string",
  "rank_est_ttl_mcare_standardized_amt": "string",
  "rank_est_ttl_submitted_charge_amt": "string",
  "rank_max_avg_mcare_allowed_amt": "string",
  "rank_max_avg_mcare_pay_amt": "string",
  "rank_max_avg_mcare_standardized_amt": "string",
  "rank_max_avg_submitted_charge_amt": "string",
  "rank_min_avg_mcare_allowed_amt": "string",
  "rank_min_avg_mcare_pay_amt": "string",
  "rank_min_avg_mcare_standardized_amt": "string",
  "rank_min_avg_submitted_charge_amt": "string",
  "rank_n_of_distinct_mcare_beneficiary_per_day_svcs": "string",
  "rank_n_of_mcare_beneficiaries": "string",
  "rank_n_of_svcs": "string",
  "rank_providers": "string",
  "rank_var_avg_mcare_allowed_amt": "string",
  "rank_var_avg_mcare_pay_amt": "string",
  "rank_var_avg_mcare_standardized_amt": "string",
  "rank_var_avg_mcare_submitted_charge_pay_amt": "string",
  "rank_var_avg_submitted_charge_amt": "string",
  "var_avg_mcare_allowed_amt": "string",
  "var_avg_mcare_pay_amt": "string",
  "var_avg_mcare_standardized_amt": "string",
  "var_avg_mcare_submitted_charge_pay_amt": "string",
  "var_avg_submitted_charge_amt": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|avg_avg_mcare_allowed_amt|string¦null|false|none|none|
|avg_avg_mcare_pay_amt|string¦null|false|none|none|
|avg_avg_mcare_standardized_amt|string¦null|false|none|none|
|avg_avg_submitted_charge_amt|string¦null|false|none|none|
|entity_type|string|false|none|none|
|est_ttl_mcare_allowed_amt|string¦null|false|none|none|
|est_ttl_mcare_pay_amt|string¦null|false|none|none|
|est_ttl_mcare_standardized_amt|string¦null|false|none|none|
|est_ttl_submitted_charge_amt|string¦null|false|none|none|
|hcpcs_code|string|false|none|none|
|max_avg_mcare_allowed_amt|string¦null|false|none|none|
|max_avg_mcare_pay_amt|string¦null|false|none|none|
|max_avg_mcare_standardized_amt|string¦null|false|none|none|
|max_avg_submitted_charge_amt|string¦null|false|none|none|
|min_avg_mcare_allowed_amt|string¦null|false|none|none|
|min_avg_mcare_pay_amt|string¦null|false|none|none|
|min_avg_mcare_standardized_amt|string¦null|false|none|none|
|min_avg_submitted_charge_amt|string¦null|false|none|none|
|n_of_distinct_mcare_beneficiary_per_day_svcs|string¦null|false|none|none|
|n_of_mcare_beneficiaries|string¦null|false|none|none|
|n_of_svcs|string¦null|false|none|none|
|prisma_id|integer|false|none|none|
|providers|string¦null|false|none|none|
|rank_avg_avg_mcare_allowed_amt|string¦null|false|none|none|
|rank_avg_avg_mcare_pay_amt|string¦null|false|none|none|
|rank_avg_avg_mcare_standardized_amt|string¦null|false|none|none|
|rank_avg_avg_submitted_charge_amt|string¦null|false|none|none|
|rank_est_ttl_mcare_allowed_amt|string¦null|false|none|none|
|rank_est_ttl_mcare_pay_amt|string¦null|false|none|none|
|rank_est_ttl_mcare_standardized_amt|string¦null|false|none|none|
|rank_est_ttl_submitted_charge_amt|string¦null|false|none|none|
|rank_max_avg_mcare_allowed_amt|string¦null|false|none|none|
|rank_max_avg_mcare_pay_amt|string¦null|false|none|none|
|rank_max_avg_mcare_standardized_amt|string¦null|false|none|none|
|rank_max_avg_submitted_charge_amt|string¦null|false|none|none|
|rank_min_avg_mcare_allowed_amt|string¦null|false|none|none|
|rank_min_avg_mcare_pay_amt|string¦null|false|none|none|
|rank_min_avg_mcare_standardized_amt|string¦null|false|none|none|
|rank_min_avg_submitted_charge_amt|string¦null|false|none|none|
|rank_n_of_distinct_mcare_beneficiary_per_day_svcs|string¦null|false|none|none|
|rank_n_of_mcare_beneficiaries|string¦null|false|none|none|
|rank_n_of_svcs|string¦null|false|none|none|
|rank_providers|string¦null|false|none|none|
|rank_var_avg_mcare_allowed_amt|string¦null|false|none|none|
|rank_var_avg_mcare_pay_amt|string¦null|false|none|none|
|rank_var_avg_mcare_standardized_amt|string¦null|false|none|none|
|rank_var_avg_mcare_submitted_charge_pay_amt|string¦null|false|none|none|
|rank_var_avg_submitted_charge_amt|string¦null|false|none|none|
|var_avg_mcare_allowed_amt|string¦null|false|none|none|
|var_avg_mcare_pay_amt|string¦null|false|none|none|
|var_avg_mcare_standardized_amt|string¦null|false|none|none|
|var_avg_mcare_submitted_charge_pay_amt|string¦null|false|none|none|
|var_avg_submitted_charge_amt|string¦null|false|none|none|

<h2 id="tocS_CmsServiceProviderPerformance">CmsServiceProviderPerformance</h2>
<!-- backwards compatibility -->
<a id="schemacmsserviceproviderperformance"></a>
<a id="schema_CmsServiceProviderPerformance"></a>
<a id="tocScmsserviceproviderperformance"></a>
<a id="tocscmsserviceproviderperformance"></a>

```json
{
  "avg_mcare_allowed_amt": "string",
  "avg_mcare_pay_amt": "string",
  "avg_mcare_standardized_amt": "string",
  "avg_submitted_charge_amt": "string",
  "entity_type": "string",
  "est_ttl_mcare_pay_amt": "string",
  "est_ttl_submitted_charge_amt": "string",
  "hcpcs_code": "string",
  "mcare_participation_indicator": "string",
  "n_of_distinct_mcare_beneficiary_per_day_svcs": 0,
  "n_of_mcare_beneficiaries": 0,
  "n_of_svcs": "string",
  "npi": 0,
  "place_of_service": "string",
  "prisma_id": 0,
  "rank_avg_mcare_allowed_amt": "string",
  "rank_avg_mcare_pay_amt": "string",
  "rank_avg_mcare_standardized_amt": "string",
  "rank_avg_submitted_charge_amt": "string",
  "rank_est_ttl_mcare_pay_amt": "string",
  "rank_est_ttl_submitted_charge_amt": "string",
  "rank_n_of_distinct_mcare_beneficiary_per_day_svcs": "string",
  "rank_n_of_mcare_beneficiaries": "string",
  "rank_n_of_svcs": "string",
  "rank_var_avg_mcare_submitted_charge_pay_amt": "string",
  "var_avg_mcare_submitted_charge_pay_amt": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|avg_mcare_allowed_amt|string¦null|false|none|none|
|avg_mcare_pay_amt|string¦null|false|none|none|
|avg_mcare_standardized_amt|string¦null|false|none|none|
|avg_submitted_charge_amt|string¦null|false|none|none|
|entity_type|string¦null|false|none|none|
|est_ttl_mcare_pay_amt|string¦null|false|none|none|
|est_ttl_submitted_charge_amt|string¦null|false|none|none|
|hcpcs_code|string|false|none|none|
|mcare_participation_indicator|string¦null|false|none|none|
|n_of_distinct_mcare_beneficiary_per_day_svcs|integer¦null|false|none|none|
|n_of_mcare_beneficiaries|integer¦null|false|none|none|
|n_of_svcs|string¦null|false|none|none|
|npi|integer|false|none|none|
|place_of_service|string|false|none|none|
|prisma_id|integer|false|none|none|
|rank_avg_mcare_allowed_amt|string¦null|false|none|none|
|rank_avg_mcare_pay_amt|string¦null|false|none|none|
|rank_avg_mcare_standardized_amt|string¦null|false|none|none|
|rank_avg_submitted_charge_amt|string¦null|false|none|none|
|rank_est_ttl_mcare_pay_amt|string¦null|false|none|none|
|rank_est_ttl_submitted_charge_amt|string¦null|false|none|none|
|rank_n_of_distinct_mcare_beneficiary_per_day_svcs|string¦null|false|none|none|
|rank_n_of_mcare_beneficiaries|string¦null|false|none|none|
|rank_n_of_svcs|string¦null|false|none|none|
|rank_var_avg_mcare_submitted_charge_pay_amt|string¦null|false|none|none|
|var_avg_mcare_submitted_charge_pay_amt|string¦null|false|none|none|

<h2 id="tocS_CmsServiceProviderPerformanceSummary">CmsServiceProviderPerformanceSummary</h2>
<!-- backwards compatibility -->
<a id="schemacmsserviceproviderperformancesummary"></a>
<a id="schema_CmsServiceProviderPerformanceSummary"></a>
<a id="tocScmsserviceproviderperformancesummary"></a>
<a id="tocscmsserviceproviderperformancesummary"></a>

```json
{
  "entity_type": "string",
  "est_ttl_mcare_pay_amt": "string",
  "est_ttl_mcare_pay_amt_by_ttl_hcpcs_code": "string",
  "est_ttl_mcare_pay_amt_by_ttl_n_of_svcs": "string",
  "est_ttl_submitted_charge_amt": "string",
  "npi": 0,
  "prisma_id": 0,
  "rank_est_ttl_mcare_pay_amt": "string",
  "rank_est_ttl_mcare_pay_amt_by_ttl_hcpcs_code": "string",
  "rank_est_ttl_mcare_pay_amt_by_ttl_n_of_servi": "string",
  "rank_est_ttl_submitted_charge_amt": "string",
  "rank_ttl_hcpcs_code": "string",
  "rank_ttl_n_of_svcs": "string",
  "rank_var_est_ttl_mcare_submitted_charge_pay_amoun": "string",
  "summary_type": 0,
  "ttl_hcpcs_code": "string",
  "ttl_n_of_svcs": "string",
  "var_est_ttl_mcare_submitted_charge_pay_amt": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entity_type|string¦null|false|none|none|
|est_ttl_mcare_pay_amt|string¦null|false|none|none|
|est_ttl_mcare_pay_amt_by_ttl_hcpcs_code|string¦null|false|none|none|
|est_ttl_mcare_pay_amt_by_ttl_n_of_svcs|string¦null|false|none|none|
|est_ttl_submitted_charge_amt|string¦null|false|none|none|
|npi|integer|false|none|none|
|prisma_id|integer|false|none|none|
|rank_est_ttl_mcare_pay_amt|string¦null|false|none|none|
|rank_est_ttl_mcare_pay_amt_by_ttl_hcpcs_code|string¦null|false|none|none|
|rank_est_ttl_mcare_pay_amt_by_ttl_n_of_servi|string¦null|false|none|none|
|rank_est_ttl_submitted_charge_amt|string¦null|false|none|none|
|rank_ttl_hcpcs_code|string¦null|false|none|none|
|rank_ttl_n_of_svcs|string¦null|false|none|none|
|rank_var_est_ttl_mcare_submitted_charge_pay_amoun|string¦null|false|none|none|
|summary_type|integer|false|none|none|
|ttl_hcpcs_code|string¦null|false|none|none|
|ttl_n_of_svcs|string¦null|false|none|none|
|var_est_ttl_mcare_submitted_charge_pay_amt|string¦null|false|none|none|

<h2 id="tocS_CmsServiceProviderPerformanceSummaryType">CmsServiceProviderPerformanceSummaryType</h2>
<!-- backwards compatibility -->
<a id="schemacmsserviceproviderperformancesummarytype"></a>
<a id="schema_CmsServiceProviderPerformanceSummaryType"></a>
<a id="tocScmsserviceproviderperformancesummarytype"></a>
<a id="tocscmsserviceproviderperformancesummarytype"></a>

```json
{
  "description": "string",
  "group_membership": true,
  "id": 0,
  "slug": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|none|
|group_membership|boolean|false|none|none|
|id|integer|false|none|none|
|slug|string¦null|false|none|none|

<h2 id="tocS_CmsServices">CmsServices</h2>
<!-- backwards compatibility -->
<a id="schemacmsservices"></a>
<a id="schema_CmsServices"></a>
<a id="tocScmsservices"></a>
<a id="tocscmsservices"></a>

```json
{
  "hcpcs_code": "string",
  "hcpcs_description": "string",
  "hcpcs_drug_indicator": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hcpcs_code|string|false|none|none|
|hcpcs_description|string¦null|false|none|none|
|hcpcs_drug_indicator|string¦null|false|none|none|

<h2 id="tocS_PublicFastTest">PublicFastTest</h2>
<!-- backwards compatibility -->
<a id="schemapublicfasttest"></a>
<a id="schema_PublicFastTest"></a>
<a id="tocSpublicfasttest"></a>
<a id="tocspublicfasttest"></a>

```json
{
  "address_city": "string",
  "address_country": "string",
  "address_latitude": "string",
  "address_longitude": "string",
  "address_state": "string",
  "address_street_01": "string",
  "address_street_02": "string",
  "address_zip_code": "string",
  "entity_type": "string",
  "npi": 0,
  "provider_type": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address_city|string¦null|false|none|none|
|address_country|string¦null|false|none|none|
|address_latitude|string¦null|false|none|none|
|address_longitude|string¦null|false|none|none|
|address_state|string¦null|false|none|none|
|address_street_01|string¦null|false|none|none|
|address_street_02|string¦null|false|none|none|
|address_zip_code|string¦null|false|none|none|
|entity_type|string¦null|false|none|none|
|npi|integer¦null|false|none|none|
|provider_type|string¦null|false|none|none|

<h2 id="tocS_PublicI001CityStateEntityProviderN">PublicI001CityStateEntityProviderN</h2>
<!-- backwards compatibility -->
<a id="schemapublici001citystateentityprovidern"></a>
<a id="schema_PublicI001CityStateEntityProviderN"></a>
<a id="tocSpublici001citystateentityprovidern"></a>
<a id="tocspublici001citystateentityprovidern"></a>

```json
{
  "address_city": "string",
  "address_state": "string",
  "entity_type": "string",
  "n": "string",
  "provider_type": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address_city|string¦null|false|none|none|
|address_state|string¦null|false|none|none|
|entity_type|string¦null|false|none|none|
|n|string¦null|false|none|none|
|provider_type|string¦null|false|none|none|

