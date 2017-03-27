# variation-frontend
The fronted for the example

This simple frontend talks to the variation-service and pulls all data from there.

This is essentially a one-page application, based on a few javascript and css libraries.

I wrapped it as a Java webapp, so it can be easily hosted together with the [variation-service](https://github.com/realperlon/variation-service) app on the same tomcat instance (see [docker](https://github.com/realperlon/docker) image for an easy setup of this). Besides this, there is no need for this to be a Java webapp. 

Technology stack used:

* jQuery
* Bootstrap 
* Typeahead / Bloodhound (autosuggest)
* Datatables (table implementation)

