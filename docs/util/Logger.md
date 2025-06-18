# Logger
The purpose of this class is just to have a customized Log output that is
distinct from other logs that the system may print. logcat is notorious for
printing a lot of logs.

## Fields

### LogLevel
```java
public enum LogLevel {
    INFO,
    WARNING,
    CRITICAL,
}
```
This enum contains the different log levels that `Logger` may print. This
logically doesn't add anything. These just serve as labels for how important a
log is.

## Methods

### log()
```java
public static void log(String message, LogLevel level)
```
Log a `message` with a log level of `level`.

### getLog()
```java
public static void log(String message, LogLevel level)
```
For whatever reason, if you need to get the output string of the log statement,
This method is available. Returns the output log statement without printing the
log.

