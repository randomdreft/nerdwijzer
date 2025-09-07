<?php
// Simple PHP server for NerdWijzer
// Run with: php server.php

$port = 8000;
$host = '0.0.0.0';

echo "NerdWijzer server starting on http://localhost:$port\n";
echo "Press Ctrl+C to stop the server\n\n";

// Start the built-in PHP server
$command = "php -S $host:$port";
system($command);
?>
