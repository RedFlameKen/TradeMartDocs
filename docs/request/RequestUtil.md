# RequestUtil

The RequestUtil is the primary way to make requests. Under the hood, it just
configures the [`Request`](Request.md) class through the use of static methods.
These methods will return an instance of [`Response`](Response.md) which
contains the response data that the server sent back. So make sure to store
store the returned [`Response`](Response.md) value when using any of the
methods that this class provides.

example:
```java
Response response = RequestUtil.sendGetRequest("/user/profile/1234");
```

below is the list of static methods that you may use from the RequestUtil
class:
* [sendGetRequest(String path)](#sendgetrequest-string-path)
* [sendPostRequest(String path, Content content)](#sendpostrequest-string-path-content-content)
* [sendGetRequest(String host, String path, int port, boolean useSSL)](#sendgetrequest-string-host-string-path-int-port-boolean-usessl)
* [sendPostRequest(String host, String path, int port, boolean useSSL, Content content)](#sendpostrequest-string-host-string-path-int-port-boolean-usessl-content-content)

## sendGetRequest(String path)
This is the primary method to use for making GET requests. You only need to
provide the server path that you wish to access.

Example:
```java
Response response = RequestUtil.sendGetRequest("/user/profile/1234");
```

The above example will send a GET request to **/user/profile/1234** which will
return a response that contains information about the profile *1234*.

## sendPostRequest(String path, Content content)
This is the primary method to use for making POST requests. You only need to
provide the server path that you wish to access and a [`Content`](Content.md)
containing the content body of the POST request that you are about to send.

Example:
```java
Content content = new ContentBuilder()
    .put("user_id", "1234")
    .put("username", "RedFlameKen")
    .put("email", "example@mail.com")
    .build();
Response response = RequestUtil.sendPostRequest("/post/publish", content);
```

The above example will send a POST request to **/post/publish** along with the
json data inside of `content` which will return a response that contains
information about the created post.

## sendGetRequest(String host, String path, int port, boolean useSSL)
DO NOT use this method. Only use this if you need to temporarily override the
current [`sendGetRequest(String)`](#sendgetrequest-string-path) functionality
without editing it manually. 

## sendPostRequest(String host, String path, int port, boolean useSSL, Content content)
DO NOT use this method. Only use this if you need to temporarily override the
current [`sendPostRequest(String path, Content
content)`](#sendpostrequest-string-path-content-content) functionality without
editing it manually.

