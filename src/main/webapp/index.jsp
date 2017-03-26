<html>
<!DOCTYPE html>
<html lang="en">

<head>
<meta charset="utf-8">
<title>View Gene Variations</title>

<!-- jquery library -->
<script src="https://code.jquery.com/jquery-3.1.0.min.js"></script>

<!-- bootstrap -->
<link href="js/vendor/bootstrap-3.3.5/dist/css/bootstrap.min.css"
	rel="stylesheet">

<link rel="stylesheet" type="text/css"
	href="js/vendor/svg/jquery.svg.css" />

<!-- font awesome icons -->
<link rel="stylesheet" href="css/font-awesome.min.css" />

<!--  autocomplete -->
<script src="js/vendor/typeahead/typeahead.bundle.min.js"></script>
<script src="js/vendor/typeahead/typeahead.jquery.min.js"></script>

<!--  DataTables -->
<link rel="stylesheet" type="text/css"
	href="//cdn.datatables.net/1.10.13/css/jquery.dataTables.css">
<script type="text/javascript" charset="utf8"
	src="//cdn.datatables.net/1.10.13/js/jquery.dataTables.js"></script>

<!--  page specific javascript code -->
<script src="js/app.js?ver=a2"></script>
<link rel="stylesheet" href="css/app.css?ver=a2">

</head>
<body>

	<div class="container">

		<div id="dialog">&nbsp;</div>

		<div class="btn-toolbar " role="toolbar" style="padding-bottom: 3px;">

			<div class="col-md-2 input-group pull-left">

				<input id="getgenenames" type="text" class="form-control typeahead"
					placeholder="Enter Gene Name">

				<var id="result-container" class="result-container"></var>

				<div class="input-group-btn ">
					<button id="searchbutton" class="btn btn-group"
						style="height: 34px;" type="submit">
						<i class="fa fa-search"></i>
					</button>
				</div>


			</div>
		</div>

		<table id="table_id" class="display" cellspacing="0" width="100%">
			<thead>
				<tr>
					<th>Gene</th>
					<th>Nucleotide Change</th>
					<th>Protein Change</th>

				</tr>
			</thead>

		</table>

	</div>



</body>
</html>