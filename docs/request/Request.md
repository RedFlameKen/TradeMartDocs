# Request

The mobile app makes use of `java.net.HttpURLConnection` to make requests to
the server. This class is what's being configured for the request. The
`com.realeyez.trademart.request.Request` class was created to make making
requests easier. 

> [!NOTE]
> While the `Request` class made it much easier to make requests, A lot of code
> is still being repeated. To solve this, the
> `com.realeyez.trademart.request.Request` was made to reduce this code
> repitition.
