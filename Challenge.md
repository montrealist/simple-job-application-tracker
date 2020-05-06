## Today's Objective: Job Application Tracker

Everyone here has been through the process of applying for jobs. We all know that it can be a rigorous process. Expert career coaches recommend applying to anywhere between 20 and 200 jobs per week. The average junior developer can expect to apply for jobs for about 6 months before they find their first software development job. That's a total of roughly 500 to 5000 job applications over the course of your job search!

Tracking job applications is very much a personal process that differs from person to person. In this exercise, we will all create job application trackers that are personal to our own job hunt styles. 

## Requirements

Create a job application tracker that is personal to you, with some kind of long-term persistence (either a database or using localstorage, or (better) IndexedDB).

The design can be of your own choosing, and so this project is very open-ended. Here is how you should be thinking about the design process:

### SAMPLE Data Model Design

(this is only a sample of what could be built in 4 hours)

The data model is the seed that what will determine the look, feel, and functionality of your application.

Here is a sample data model that I would use if I were to create this application:

```javascript
    // Options include Applied, PhoneInterviewScheduled, PhoneInterviewComplete, InPersonInterviewScheduled, 
    // InPersonInterviewComplete, OfferReceived, and Rejected
    type: "PhoneInterviewComplete",
    company: "Acme Inc.",
    jobDescriptionUrl: "Junior Software Developer",
    notes: "This is a really cool job. The interviewer seemed like a really chill person. I hope they get back to me.",
    createdAt: Date,
    updatedAt: Date
}
```

### SAMPLE plan for UX layout

(this is only a sample of what could be built in 4 hours)

For the above data model, I would create the following views:

Stuff I consider 'required' for my application:
1. "List" of job applications, with sort+filter
1. "Show" view for an individual application
1. "Create" view for an application
1. "Update" view for an application

Nice to haves (in order of attempt):
1. (if I have time to build this) Dashboard view with some charts 
1. (if I have time to build this) On the list view, allow statuses to be updated using dropdowns
1. (if I have time to build this) Add an iFrame so Google automatically shows up with search results for the "company" field
1. (if I have time to build this) Add graphs that show me my # of applications over time
1. (if I have time to build this) Add a "step counter" line on the header that tells me 

### SAMPLE persistence plan

You should build some kind of persistence. This can be a simple localstorage system, or it can be a more elaborate IndexedDB-based system (probably through a library like Dexie). Maybe Firebase.

If you are feeling adventurous, you can even build a full stack application.

I'm going to use localStorage to persist my data.

### Or, do your own thing!

You can create something cooler if you wish. Please don't copy/paste old projects, though -- write from scratch, even if you're inspired by the old project :-)

## Restrictions

You must be able to deploy your project online.
Your project must use JavaScript.

There are no other restrictions.

## Technology suggestions

You should use whatever you are most comfortable with.

### Look/feel
* Skeleton CSS
* Bulma CSS
* Bootstrap

### Functionality
* React
* Vue
* Angular
* Server-rendered HTML (EJS, Pug, Handlebars, Mustache, etc.)

### Persistence
* LocalStorage
* IndexedDB (with a library like Dexie)
* Firebase
* SQLite / MongoDB / Postgres

## Tips for success:

1. The project is intentionally simple so you can focus on code quality.
1. The requirements are intentionally minimalistic so you can get as creative as you'd like.
1. You get a LOT of time for code review comments. So you can win even if you feel your project isn't great, simply on the strength of your code review comments!
1. Keep in mind, 33% of your score is based on aesthetic appeal! So try to make it look nice.
