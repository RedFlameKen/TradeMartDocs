# Encoder
This util class is used to encode text to a different encoding format, mainly
Base64.

## Methods

### encodeBase64()
2 Overloads
```java
public static String encodeBase64(String data)
```

```java
public static String encodeBase64(byte[] data)
```
Encodes `data` to Base64.

### decodeBase64()
```java
public static byte[] decodeBase64(String data)
```
Decodes the Base64 encoded `data` to bytes.

### decodeBase64String()
```java
public static String decodeBase64String(String data)
```
Decodes the Base64 encoded `data` a String.
