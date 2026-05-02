<?php
    /*
     * This is a simple "API endpoint" that simulates the computation of a
     * plagiarism score on a submitted
     */

    header('Content-Type: application/json');

    /*
     * Only accept POST requests
     */
    if ($_SERVER['REQUEST_METHOD'] != 'POST') {
    	http_response_code(405);
    	die(json_encode(['err' => 'Only POST requests are accepted']));
    }

    /*
     * Make sure file was uploaded.
     */
    if (empty($_FILES) || !isset($_FILES['submission'])) {
        http_response_code(400);
	    die(json_encode(['err' => '`submission` file not specified']));
    }

    /*
     * Make sure uploaded file is not empty.
     */
    if ($_FILES['submission']['size'] <= 0) {
        http_response_code(400);
	    die(json_encode(['err' => '`submission` file is empty']));
    }

    /*
     * Compute random plagiarism score between 1 and 100 and random delay
     * between 1 and 10 seconds.
     */
    $score = rand(0, 100);
    $delay = rand(1, 10);
    sleep($delay);
    http_response_code(200);
    die(json_encode(['score' => $score]));
?>
