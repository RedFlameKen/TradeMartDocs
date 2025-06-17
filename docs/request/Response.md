# Response
A `Response` contains information about the response that the server sent back.
This class is not meant to be configured directly. It must be configured using
its static class `ResponseBuilder`.

> [!WARNING]
> DO NOT build this manually. The [`Request`](Request.md) class's `sendRequest()`
> method will generate the `Response` for you.

## Attributes
The following are the fields of the `Response` class:

| name       | type  | Description                           |
|------------|-------|---------------------------------------|
| code       | int   | The HTTP Response status code         |
| content    | byte[]| The content within the http request   |
| contentType| String| The Content-Type of the Content-Body   |
| contentRange| [ContentRange](ContentRange.md)| The Content-Range of the Content-Body   |
| location   | String| A location path. Usually returned when response is a redirection response or 201 created. |

> [!NOTE]
> content was changed from String to byte[] to allow for raw video data to be
> received.

## Methods
The following are the methods of the Response class that you may use:

### getCode()
Get the response code of the response.

returns: **int**

### getContentBytes()
Get the Content-Body of the response in the form of a **byte array (byte[])**.

returns: **byte[]**

### getContent()
Get the Content-Body of the response casted to a **String**

returns: **String**

### getContentJson()
Get the Content-Body of the response in the form of a **JSONObject**. This
method throws a JSONException. This method should be used if the received
Content-Body is of a json type (e.g. `application/json`).

returns: **JSONObject**

### getContentType()
Get the Content-Type of the response's Content-Body

returns: **String**

### getContentLength()
Get the Content-Length of the response's Content-Body

returns: **int**

### getContentRange()
Get the Content-Range of the response's Content-Body

returns: [**ContentRange**](ContentRange.md)

### getLocation()
Get the Location header field of the response

returns: **String**

## Examples
1. Load Profile
```java
Response response = null;
try {
    response = RequestUtil.sendGetRequest("/user/profile/1234");
} catch (IOException e) {
    // Log errors
}
JSONObject json = null;
String username = "";
String email = "";
int postCount = 0;
try {
    json = response.getContentJSON();
    username = json.getString("username");
    email = json.getString("email");
    postCount = json.getString("post_count");
} catch (JSONException e){
    // Log JSON exception
}
System.out.printf("username: %s\n", username):
System.out.printf("email: %s\n", email):
System.out.printf("postCount: %d\n", postCount):
```

