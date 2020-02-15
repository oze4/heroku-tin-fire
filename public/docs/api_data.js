define({ "api": [
  {
    "type": "post",
    "url": "/api/v1/login",
    "title": "Authentication",
    "version": "0.0.1",
    "name": "Authentication",
    "group": "Getting_Started",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "un",
            "description": "<p>User's username.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pw",
            "description": "<p>User's password.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "token",
            "description": "<p>Object with single key, 'token', which contains the Bearer token which must be sent to protected routes.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>Returns 401 status on bad authentication request.</p>"
          }
        ]
      }
    },
    "filename": "src/routes.ts",
    "groupTitle": "Getting_Started"
  },
  {
    "type": "post",
    "url": "/api/v1/user/createtestuser",
    "title": "Create Test User",
    "version": "0.0.1",
    "name": "ApiV1CreateTestUser",
    "group": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>JWT token. Must be in <code>Bearer token-goes-here</code> format</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>Returns created user object (minus password) This is for testing purposes.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "optional": false,
            "field": "Bad",
            "description": "<p>Request  Returns 401 status on bad authentication request.</p>"
          }
        ]
      }
    },
    "filename": "src/routes.ts",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/api/v1/user/create",
    "title": "Create User",
    "version": "0.0.1",
    "name": "ApiV1CreateUser",
    "group": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>JWT token. Must be in <code>Bearer token-goes-here</code> format</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "un",
            "description": "<p>Username of account you want to create.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pw",
            "description": "<p>Password of account you want to create.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Returns",
            "description": "<p>created user object (minus password).</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "optional": false,
            "field": "401",
            "description": "<p>Returns 401 status on bad authentication request.</p>"
          }
        ]
      }
    },
    "filename": "src/routes.ts",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/api/v1/user/find",
    "title": "Find User",
    "version": "0.0.1",
    "name": "ApiV1FindUser",
    "group": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>JWT token. Must be in <code>Bearer token-goes-here</code> format</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "un",
            "description": "<p>Username of the user you want to find.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Returns",
            "description": "<p>found user object.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "optional": false,
            "field": "401",
            "description": "<p>Returns 401 status on bad authentication request.</p>"
          }
        ]
      }
    },
    "filename": "src/routes.ts",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/api/v1/user/test",
    "title": "Test",
    "version": "0.0.1",
    "name": "ApiV1User",
    "group": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>JWT token. Must be in <code>Bearer token-goes-here</code> format</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Test",
            "description": "<p>Returns <code>Test</code>.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "optional": false,
            "field": "Bad",
            "description": "<p>Request  Returns 401 status on bad authentication request.</p>"
          }
        ]
      }
    },
    "filename": "src/routes.ts",
    "groupTitle": "User"
  }
] });
