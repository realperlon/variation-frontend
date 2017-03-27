/** This is the main javascript code that is providing the functionality for this application.
 * 
 * @author Andreas
 * 
 */

/** This provides the autosuggest-functionality. It is based on typeahead and bloodhound.
 * 
 */
var geneAutosuggest = new Bloodhound({
	datumTokenizer: Bloodhound.tokenizers.obj.whitespace('value'),
	queryTokenizer: Bloodhound.tokenizers.whitespace,	
	remote: {
		url: '/variation-service/rest/variation/suggest/%QUERY',
		wildcard: '%QUERY',
		transform: function(response){

			console.log("got response from server " + response.results);

			return response.results;

		},		
	}
});

geneAutosuggest.initialize();


/** This is for the table display. The table is based on Datatables
 * 
 */
$(function() {
	
	$('#genesTable').hide();
	
	$('#getgenenames').typeahead({
		minLength: 2,
		hint: true,
		highlight: true,
	},{
		name: 'getgenenames',
		
		maxItems: 20,
		source: geneAutosuggest.ttAdapter(),				

	}).bind("typeahead:selected", function(obj, datum, name) {

		showVariationForGene(datum);
	});

});

var table = {};

function showVariationForGene(geneName){
	

	// check if this is the first time we are showing a table
	if ( ! $.fn.DataTable.isDataTable( '#genesTable' ) ) {

		$('#genesTable').show();
		
		table = $('#genesTable').DataTable( {
			"ajax": {
				"url": "/variation-service/rest/variation/variants/"+geneName,
				dataSrc: "results"

			},			
			"columns": [
			            {"data": "gene" },
			            {"data": "nucleotideChange" },
			            {"data": "proteinChange"},
			            {"data": "otherMappings"},
			            {"data": "alias"},
			            {"data": "transcripts"},
			            {"data": "region"},
			            {"data": "reportedClassification"},
			            {"data": "inferredClassification"},
			            {"data": "source"},
			            {"data": "lastEvaluated"},
			            {"data": "url"},
			            {"data": "submitter"},
			            {"data": "comment"},
			            ],	


		} );
		
	} else {

		// re-use existing object and just reload the content
		table.ajax.url("/variation-service/rest/variation/variants/"+geneName).load();

	}

}