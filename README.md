# variation-frontend
A simple UI to show variation information for selected genes.

This frontend talks to the [variation-service](https://github.com/realperlon/variation-service) and pulls all data from its REST API.

This is essentially a one-page application, based on a few javascript and css libraries.

It is wrapped as a Java webapp, so it can be easily hosted together with the [variation-service](https://github.com/realperlon/variation-service) app on the same tomcat instance (see [docker](https://github.com/realperlon/docker) image for an easy setup of this). Besides this, there is no need for this to be a Java webapp, since it does not contain any Java code and can be hosted as static files. 

## Technology stack used:

* jQuery
* Bootstrap 
* Typeahead / Bloodhound (autosuggest)
* Datatables (table implementation)

## Possible next steps:
* Show a progressbar while variants for a gene are getting loaded (e.g. The 12k variants for BRCA2 take about 3 seconds to load for me)
* Add testing of the web-frontend (e.g using [Cucumber](https://cucumber.io/) )
* Allow to customize the displayed columns
* Add some graphics, e.g. a view where on a chromosome a selected gene is located, like [karyotypeSVG](https://github.com/andreasprlic/karyotypeSVG)

