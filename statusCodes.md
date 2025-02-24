# HTTP Status Codes

### 1xx - Informational
- **100 Continue**: The initial part of the request has been received, and the client should continue sending the rest.
- **101 Switching Protocols**: The server is switching protocols as requested by the client.

### 2xx - Successful
- **200 OK**: The request was successful, and the server returned the requested resource.
- **201 Created**: The request was successful, and a new resource has been created.
- **204 No Content**: The request was successful, but the server has no content to return.

### 3xx - Redirection
- **301 Moved Permanently**: The requested resource has been permanently moved to a new URL.
- **302 Found (Previously "Moved Temporarily")**: The requested resource has temporarily moved to a new URL.
- **304 Not Modified**: The resource has not been modified since the last request, so the client can use its cached version.

### 4xx - Client Errors
- **400 Bad Request**: The server could not understand the request due to invalid syntax.
- **401 Unauthorized**: The client must authenticate to access the resource.
- **403 Forbidden**: The server understood the request, but the client doesn't have permission to access it.
- **404 Not Found**: The requested resource could not be found.
- **405 Method Not Allowed**: The method used is not allowed for the resource.
- **408 Request Timeout**: The server timed out waiting for the request.

### 5xx - Server Errors
- **500 Internal Server Error**: The server encountered an unexpected condition that prevented it from fulfilling the request.
- **502 Bad Gateway**: The server, while acting as a gateway, received an invalid response from the upstream server.
- **503 Service Unavailable**: The server is currently unavailable, typically due to overload or maintenance.
- **504 Gateway Timeout**: The server, while acting as a gateway, did not receive a timely response from the upstream server.
