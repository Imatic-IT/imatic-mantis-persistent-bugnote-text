<?php

class ImaticPersistentBugnoteTextPlugin extends MantisPlugin
{
    public function register(): void
    {
        $this->name = 'Imatic Persistent Bugnote Text ';
        $this->description = '';
        $this->version = '1.0.0';
        $this->requires = [
            'MantisCore' => '2.0.0',
        ];

        $this->author = 'Imatic Software s.r.o.';
        $this->contact = 'info@imatic.cz';
        $this->url = 'https://www.imatic.cz/';
    }

    public function config(): array
    {
        return [];
    }

    public function hooks(): array
    {
        return [
            'EVENT_LAYOUT_BODY_END' => 'layout_body_end_hook',
        ];
    }

    public function layout_body_end_hook()
    {
        if (isset($_GET['id'])) {
            $t_data = htmlspecialchars(json_encode([
                'user_id' => auth_get_current_user_id(),
                'issue_id' => $_GET['id'],
            ]));

            echo '<script src="' . plugin_file('crypto-js.min.js') . '"></script><script id="ImaticPersistentBugnoteText" data-settings="' . $t_data . '" src="' . plugin_file('imatic-persistent-bugnote-text.js') . '&v=' . $this->version . '"></script>';
        }
    }
}
