# Endpoints
The following is a list of endpoints on the
[server](https://github.com/RedFlameKen/TradeMartServer) that you may access.
Endpoints with **\{...\}** on them should have those be substituted with the
appropriate data.

| Endpoint                                                      | Method    |
|---------------------------------------------------------------|-----------|
| [/user/login](#user-login)                                    | POST      |
| [/user/signup](#user-signup)                                  | POST      |
| [/user/profile/\{user_id\}](#user-profile-user-id)            | GET       |
| [/post/\{post_id\}](#post-post-id)                            | GET       |
| [/post/\{post_id\}/media](#post-post-id-media)                | GET       |
| [/post/publish](#post-publish)                                | POST      |
| [/post/publish/\{post_id\}/media](#post-publish-post-id-media)| POST      |
| [/post/user/\{user_id\}](#post-user-user-id)                  | POST      |
| [/media/\{media_id\}](#media-media-id)                        | GET       |
| [/media/video/\{filename\}](#media-video-filename)            | GET       |
| [/service/\{job_id\}](#service-job-id)                        | GET       |
| [/service/create](#service-create)                            | POST      |

## /user/login
This **POST** endpoint asks for a JSON containing login information then sends
back verification information about the sent login information. 

The following are the JSON fields that are expected to be in the request's
content body:

* username: `String` <br>
The username of the user to be logged in.

* password: `String` <br>
The user's password. This **MUST** be encrypted using
[`Encryptor`](/encryption/Encryptor.md). `Encryptor` will also encode it in
Base64.

* salt_iv: `JSONObject` <br>
Random bytes that are used to increase the randomness of the password
encryption. This is encoded in base64 so that it can be placed in a JSON. 

> [!IMPORTANT]
> This **MUST** be obtained via the [`Encryptor`](/encryption/Encryptor.md)
> used to encrypt the password.

The verification information comes in the form of a json with the following
fields:

* status: `String` <br>
Whether or not the request was successful ("success" | "failed")

* message: `String` <br>
A message pertaining to the status of the request.

* user_data?: `JSONObject` <br>
Information about the logged in user.

## /user/signup
This **POST** endpoint asks for a JSON containing signup information then sends
back success and verification information about the sent signup information.

The following are the JSON fields that expected in the request's content body:
* username: `String` <br>
The username of the user to be created.

* password: `String` <br>
The user's created password. This **MUST** be encrypted using
[`Encryptor`](/encryption/Encryptor.md). `Encryptor` will also encode it in
Base64.

* salt_iv: `JSONObject` <br>
Random bytes that are used to increase the randomness of the password
encryption. This is encoded in base64 so that it can be placed in a JSON. 

> [!IMPORTANT]
> This **MUST** be obtained via the [`Encryptor`](/encryption/Encryptor.md)
> used to encrypt the password.

The creation verification information comes in the form of a json with the
following fields:

* status: `String` <br>
Whether or not the request was successful ("success" | "failed")

* message: `String` <br>
A message pertaining to the status of the request.

* user_data?: `JSONObject` <br>
Information about the created user if the request was successful.


## /user/profile/\{user_id\}
This **GET** endpoint is used to gather profile data of the user with the
userid, **{user_id}**.

## /post/\{post_id\}
This **GET** endpoint is used to fetch post information except for media.

> [!TIP]
> Should media be needed after making a request to this endpoint, one should
> make a follow-up **GET** request to
> [/post/\{post_id\}/media](#post-post-id-media) to gather the needed media
> IDs. The actual media files should then be gathered by making a **GET**
> request to [/media/\{media_id\}](#media-media-id) using the media IDs that
> were retreived from the previous request.

## /post/\{post_id\}/media
This **GET** endpoint is used to fetch a list of media IDs related to a post
with the post ID, **{post_id}**.

## /post/publish
This **POST** endpoint asks for a JSON containing post data except for media. A
post will be generated on the server and published. Assuming that the success
status of the request is **"success"**, the Response will contain post
information about the created post.

> [!TIP]
> The post information that comes with the response from this endpoint will
> contain the post's **post_id** which can be used to make follow-up requests.

## /post/publish/\{post_id\}/media
This **POST** endpoint serves as a follow-up request endpoint for uploading
media for a previously sent [/post/publish](#post-publish) request. This
endpoint only accepts one media file at a time. So if a post has multiple media
files, multiple requests to this endpoint should be made. 

Requests to this endpoint should have a `Content-Disposition` header that
contains the filename of the media file to be uploaded. The Request's
Content-Body should also contain the raw byte data of the file to be uploaded.

## /post/user/\{user_id\}
This **POST** endpoint is used to gather post IDs related to the user with the
user ID, **{user_id}**. This endpoint asks for a JSON which contains a list of
**"loadedIds"**. This tells the server that the client already gathered
information about these posts, and should not be included in the response.

## /media/\{media_id\}
This **GET** endpoint is used to get a media file from the server. This
endpoint's Response will have a `Content-Disposition` header containing the
filename of the requested resource. The content of the Response contain the
byte data of the requested file.

## /media/image/\{filename\}
This **GET** endpoint is used to get a video file from the server. This
endpoint's Response will have a `Content-Disposition` header containing the
filename of the requested image. This endpoint's generated response will
contain the byte data of the image file.

## /media/video/\{filename\}
This **GET** endpoint is used to get an
[HLS](https://en.wikipedia.org/wiki/HTTP_Live_Streaming) video file from the
server. This endpoint's generated response will contain the contents of the HLS
(.m3u8) file which contains its corresponding the video segment (.ts) file.

## /service/\{job_id\}
This **GET** endpoint is used to get a *Job Listing's* details in the for of a
json. Information about `JobListing` can be viewed
[here](/entity/JobListing.md).

## /service/create
This **POST** endpoint is used to publish a new Job Listing. This accepts a
JSON content containing Job Listing details. Information about `JobListing` can
be viewed [here](/entity/JobListing.md).

A Request to this endpoint will result in a JobListing creation verification in
the form of a JSON with the following fields:

* status: `String` <br>
Whether or not the request was successful ("success" | "failed")

* message: `String` <br>
A message pertaining to the status of the request.

