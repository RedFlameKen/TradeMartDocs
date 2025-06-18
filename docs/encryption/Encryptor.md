# Encryptor
```java
public class Encryptor extends Encryption
```
This class is used to encrypt a String and also get the salt and iv from the
encryption. This class extends [`Encryption`](Encryption.md)


## Constructors
```java
public Encryptor()
```
This constructor (the only constructor) initializes
[`salt`](Encryption.md#salt) and [`iv`](Encryption.md#iv) by calling
[`generateBytes()`](#generatebytes) for each.
[`initKey()`](Encryption.md#initkey) is then called afterwards.

## Methods

### encrypt()
```java
public String encrypt(String data)
```
Encrypts `data` using a `Cipher`. Returns the encrypted form of `data`.

### generateBytes()
```java
private byte[] generateBytes(int range)
```
Generates random bytes with a length of `range`.

### getSaltIv()
```java
public String getSaltIV()
```
Returns a concatenation of the Base64 encoded salt and iv respectively.

