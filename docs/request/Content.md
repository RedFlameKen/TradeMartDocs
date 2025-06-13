# Content
Usually, the data ContentType of the requests being sent to the server is
`application/json`. This project makes use of `org.json` to build JSON objects.
The `Content` class is meant to make making these json content data easier. The
`Content` class however, is not meant to be directly used when creating an
instance. Instead, `Content` has the static class
[`ContentBuilder`](#contentbuilder) to build a `Content` instance.

## ContentBuilder
This should be used when creating a new Content instance. This class contains
numerous setters for adding entries to the `JSONObject` inside of `Content`.
Once done setting elements, invoke the `build()` method to get the resulting
Content instance.

Example:
```java
Content content = new Content.ContentBuilder()
    .put("username", "RedFlameKen")
    .put("password", "asoejdjc4==dao")
    .build();
```
The above example generates the following json:
```json
{
    "username": "RedFlameKen",
    "password": "asoejdjc4==dao"
}
```

The following is a list of methods inside of `ContentBuilder`:
* [put(String key, String data)](#put-string-key-string-data)
* [put(String key, int data)](#put-string-key-int-data)
* [put(String key, double data)](#put-string-key-double-data)
* [put(String key, boolean data)](#put-string-key-boolean-data)
* [put(String key, Content data)](#put-string-key-content-data)
* [put(String key, ContentArray data)](#put-string-key-contentarray-data)
* [build()](#build)
* [parseJson(String json)](#parsejson-string-json)

### put(String key, String data)
Adds an item to the content JSON wherein `key` is the json key and `data` is
the json value.

For example, if we want to make the following json:
```json
{ 
    "name": "foo",
    "age": 18
}
```
         
We can use the following block of code:
```java
Content content = new ContentBuilder()
    .put("name", "foo")
    .put("age", 18)
    .build();
```

### put(String key, int data)
Same as [put(String key, String data)](#put-string-key-string-data) but data is
an `int`.
### put(String key, double data)
Same as [put(String key, String data)](#put-string-key-string-data) but data is
an `double`.
### put(String key, boolean data)
Same as [put(String key, String data)](#put-string-key-string-data) but data is
an `boolean`.
### put(String key, Content data)
This method inserts data similar to [put(String key, String
data)](#put-string-key-string-data). But this method inserts a nested JSON
object inside of the current content being built.

For example, if we want to make the following json:
```json
{ 
    "person": {
        "name": "foo",
        "age": 18,
        "is_alive": true
    }
}
```
         
We can use the following block of code:
```java
Content person = new Content.ContentBuilder()
    .put("name", "foo")
    .put("age", 18)
    .put("is_alive", true)
    .build();

Content content = new Content.ContentBuilder()
    .put("person", person)
    .build();
```

### put(String key, ContentArray data)
This method inserts data similar to [put(String key, String
data)](#put-string-key-string-data). But this method inserts a JSONArray inside
of the current content being built.

For example, if we want to make the following json:
```json
{ 
    "subjects": [
        "english",
        "math",
        "science"
    ]
}
```

We can use the following block of code:
```java
ContentArray subjects = new ContentArray.ContentArrayBuilder()
    .put("english")
    .put("math")
    .put("science")
    .build();

Content content = new Content.ContentBuilder()
    .put("subjects", subjects)
    .build(); 
```

### build()
This method creates a new instance of [`Content`](#content) and returns it.

### parseJson(String json)
Takes in a json string and parses it into a JSONObject. This method call also
calls build and returns the built content Object. Make sure that when using
this method, don't call any other methods to reduce overhead.



