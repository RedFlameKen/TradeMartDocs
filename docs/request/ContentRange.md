# ContentRange
The `ContentRange` class serves as a structure to store Information about the
Response's Content-Range header. 

> [!INFO]
> The Content-Range header is usually provided for Partial Content *201*
> Responses. This means, the Content-Body received with the response is only
> part of the original full Content-Body. For example, if the desired content
> is only 128 bytes starting from the 32nd byte wherein the actual size of the
> content is 1024, the Content-Range may look like **bytes 31-127/1024**.

## Fields
### start
```java
private long start
```

This defines where the content-range starts.

### end
```java
private long end
```

This defines where the content-range ends.

### size
```java
private long size
```

This defines the size of the original full Content-Body.

## Methods
### getStart()
```java
public long getStart()
```
returns the value of [start](#start).

### getEnd()
```java
public long getEnd()
```
returns the value of [end](#end).

### getSize()
```java
public long getSize()
```
returns the value of [size](#size).

### parse()
```java
public static ContentRange parse(String range)
```
Converts the Content-Range header string straight to ContentRange.

