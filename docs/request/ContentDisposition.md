# ContentDisposition

According to the
[RFC2616](https://www.rfc-editor.org/rfc/rfc2616#section-19.5.1), the
Content-Disposition response header was proposed as a means to set a default
filename for requests that involve saving a file. However, The application
utilizes this as a means to transfer the actual filename along with the file's
byte data.

## Constructors
```java
private ContentDisposition()
```

```java
public ContentDisposition(String data)
```
Initializes the ContentDisposition with the literal value of the
Content-Disposition HTTP header.

## Fields
### data
```java
private String data;
```
The value of the Content-Disposition header.

## Methods
### attachment()
```java
public static ContentDisposition attachment()
```
Creates a new ContentDisposition instance for attachments.

> [!IMPORTANT]
> You should use this if you're creating a new Content-Disposition header from
> scratch.

> [!NOTE]
> There are currently no plans to create other types of Content-Disposition as
> I am not aware of them yet and I don't see a use for having anything other
> than the attachment Content-Disposition.

### addDisposition
```java
public ContentDisposition addDisposition(String key, String value)
```
Adds a Content-Disposition field. It is Identified by **key**, and has a value
of **value**

### getField
```java
public String getField(String key) 
```
Get a specific field from the Content-Disposition data in [`data`](#data). This
is extracted using [`extractSection`](#extractsection).

### getHeader
```java
public String getHeader()
```
Get the entire Content-Disposition header in [`data`](#data).

### extractSection
```java
private String extractSection(String key) 
```
Parses [`data`](#data) and returns the value of the Content-Disposition field
with the key, **key**.
