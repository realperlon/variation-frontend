
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

$(function() {
	$('#getgenenames').typeahead(null,{
		name: 'geneAutosuggest',
		minLength: 2,
		hint: false,
		highlight: false,
		maxItems: 20,
		source: geneAutosuggest.ttAdapter(),				
		
	}).bind("typeahead:selected", function(obj, datum, name) {
		
		showVariationForGene(datum);
	});

});


function showVariationForGene(geneName){
	console.log("user requested:" + geneName);
	
	
	$('#example').DataTable( {
		"ajax": {
            "url": "variation-service/rest/variation/variants/"+geneName,
                    
            	
        },
        "columns": [
                    { "results": "gene" },
                    { "results": "nucleotideChange" },
                    { "results": "proteinChange"}
                  ],
        "render": function ( data, type, full, meta ) {
        	console.log(data);
            return '<a href="'+data+'">Download</a>';
          }
	    
	} );
	
	
	
	
}