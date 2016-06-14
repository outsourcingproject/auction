## Routes

Front end route settings.

**Not prepared to work currently.**

Set the routes in `routes.json` like:
```json
{
    "path": "/test",
    "as": "Test",
    "component": "test",
    "privilege": 0
}
```
which will be translated to
```js
{ path: '/test', as: 'Test', component: require('component/test') }
```
The `privilege` here is for authentication and 0 means no authentication required.

### API

+ `Routes.config()` gets the RouteConfig for ng2.
+ `Routes.privilege()` gets the privilege.
