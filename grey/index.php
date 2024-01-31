<?php 
function selectABVersion($lang,$sites){
	error_reporting(E_ALL);

	$pages = $sites[$lang];
	$ab = array();
	foreach($pages as $key => $value){
		for($i=0;$i<$value;$i++){
			array_push($ab,$key);
		}
	}
	$rand = rand(0,count($ab)-1);
	error_log("AB random is ".$rand);
	return $ab[$rand];
}
?>
<?php $lang = isset($_GET['lang']) ? $_GET['lang'] : "en";

$sites = [
	'it' => ['1.0' => 100],
	'si' => ['1.0' => 100],
	'hr' => ['1.0' => 100],
	'cz' => ['1.0' => 100],
	'hu' => ['1.0' => 100],
	'sk' => ['1.0' => 100],
	'de' => ['1.0' => 100],
	'pl' => ['1.0' => 100],
	'at' => ['1.0' => 100],
	'fr' => ['1.0' => 100],
	'ch' => ['1.0' => 100],
	'lt' => ['1.0' => 100],
	'lv' => ['1.0' => 100],
	'ee' => ['1.0' => 100],
	'nl' => ['1.0' => 100],
	'be' => ['1.0' => 100],
	'lu' => ['1.0' => 100],
];
$ver = selectABVersion($lang,$sites);

?>

<?php include_once "/home/campaign/campaign/active/cdn/ayra/inc/grey/header-$ver.php";?>

<?php include_once "/home/campaign/campaign/active/cdn/ayra/inc/grey/grey-$ver-$lang.php";?>

<?php include_once "/home/campaign/campaign/active/cdn/ayra/inc/grey/footer-$ver.php";?>