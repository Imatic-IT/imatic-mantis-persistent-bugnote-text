<?php

header('Content-Type: application/json');

require_api('authentication_api.php');
auth_ensure_user_authenticated();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);

    if (isset($data['bugId']) && isset($data['lastUpdated'])) {

        $bugId = $data['bugId'];
        $t_bug = bug_get( $bugId );


        $response = [
            'bugId' => $data['bugId'],
            'success' => true,
            'existingBugLastUpdated' => $t_bug->last_updated
        ];

    } else {
        $response = [
            'bugId' => $data['bugId'],
            'success' => false
        ];
    }


    header('Content-Type: application/json');
    echo json_encode($response);
} else {
    http_response_code(405);
    echo json_encode(['error' => 'Only POST requests are allowed']);
}
