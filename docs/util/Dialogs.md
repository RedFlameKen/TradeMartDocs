# Dialogs
This is meant to be an imitation of Java swing's JOptionPane. This utility
class contains methods for showing graphical messages.

## Methods

### showDialog()
```java
public static void showDialog(String title, String message, Context context)
```
Display an android Dialog with the title `title`, the message `message` within
the activity context `context`.

### showMessageDialog()
```java
public static void showMessageDialog(String message, Context context)
```
Display an android Dialog with the title **"Info"**, the message `message` within
the activity context `context`.

### showWarningDialog()
```java
public static void showWarningDialog(String message, Context context)
```
Display an android Dialog with the title **"Warning"**, the message `message` within
the activity context `context`.

### showErrorDialog()
```java
public static void showErrorDialog(String message, Context context)
```
Display an android Dialog with the title **"Error"**, the message `message` within
the activity context `context`.


