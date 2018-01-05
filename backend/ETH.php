<?php
header("Content-Type: application/json; charset=UTF-8");
require('lib.php');
$btc = cryptobot("bitcoin");
$dec_btc = json_decode($btc, true);
$json_array = array(
        // =====================================================
        // /////////////////////////////////////////////////////
        // =====================================================
            // =====================================================
            // =====================================================
            "RANK" => "{$dec_btc['0']['rank']}",
            "NAME" => "{$dec_btc['0']['name']}",
            "SYMBOL" => "{$dec_btc['0']['symbol']}",
            "PRICE_USD" => "{$dec_btc['0']['price_usd']}",
            "PRICE_EUR" => "{$dec_btc['0']['price_eur']}",
            "CH24" => "{$dec_btc['0']['percent_change_24h']}"
            // =====================================================
            // =====================================================
        // =====================================================
        // /////////////////////////////////////////////////////
        // =====================================================
);
$prices = json_encode($json_array);
echo $prices;
?>