# JobListing

> [!WARNING]
> There is no implementation for this entity yet. This doc page will temporarly
> serve to display conceptual information about `JobListing`s


The following are the json fields that come this entity's
[Response](/request/Response.md) content:
* job_id: `int` <br>
The Job ID of the requested resource.
* job_title: `String` <br>
The title of the Job Listing.
* job_description: `String` <br>
The description of the Job Listing.
* job_type: `String` <br>
The type of Job Listing (`HIRING` | `GIG`)
* job_category: `String` <br>
The category of the Job Listing (`GRAPHICS` | `FINANCE` | `PHOTOGRAPHY` |
`PROGRAMMING` | `WRITING` | `VOICE_OVERS` | `NONE` ).
* date_posted: `String` <br>
The date in which the Job Listing was published
* user_id: `int` <br>
The user_id of the user who created the Job Listing.

