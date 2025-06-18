# Decryptor
```java
public class Decryptor extends Encryption
```
This class is used to decrypt an encrypted String. This class extends
[`Encryption`](Encryption.md)

> [!TIP]
> When using this, ensure that it is possible to provide the
> [salt](Encryption.md#salt) and [IV](Encryption.md#iv) that was used to
> encrypt the encrypted String.

## Constructor
```java
public Decryptor(byte[] salt, byte[] iv)
```
This constructor initalizes [`Encryption`](Encryption.md)'s
[salt](Encryption.md#salt) to `salt` and [IV](Encryption.md#iv) to `iv`.
[`initKey()`](Encryption.md#initkey) is afterwards.

```java
public Decryptor(String saltIV)
```
This constructor takes a concatenation of the encrypted String's salt and IV in
the form of a String. [salt](Encryption.md#salt) and [iv](Encryption.md#iv) are
initialized to `new byte[16]`. [`extractSaltIV()`](#extractsaltiv) is then
called to extract the salt and iv from `saltIV`.
[`initKey()`](Encryption.md#initkey) is afterwards.


## Methods

### decrypt()
```java
public String decrypt(String data)
```
Decrypts the encrypted `data` using a `Cipher`. Returns the decrypted form of
`data`


### extractSaltIV()
```java
private void extractSaltIV(String saltIV, byte[] salt_dest, byte[] iv_dest)
```
This separates the salt and IV from `saltIV` and stores them to the `salt_dest`
and `iv_dest` arrays.

