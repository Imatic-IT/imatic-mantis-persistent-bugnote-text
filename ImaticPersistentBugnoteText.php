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
            'EVENT_BUGNOTE_ADD_FORM' => 'event_bugnote_add_form',
        ];
    }

    public function event_bugnote_add_form()
    {
        if (!gpc_isset('id')){
            return;
        }
        $f_bug_id = gpc_get_int( 'id' );
        $t_bug = bug_get( $f_bug_id );

            $t_data = htmlspecialchars(json_encode([
                'user_id' => auth_get_current_user_id(),
                'issue_id' => $f_bug_id,
                'bug_last_updated' => $t_bug->last_updated,
                'check_last_updated_url' => plugin_page('bugCheckLastUpdated'),
            ]));

            echo '<script src="' . plugin_file('crypto-js.min.js') . '"></script><script id="ImaticPersistentBugnoteText" data-settings="' . $t_data . '" src="' . plugin_file('imatic-persistent-bugnote-text.js') . '&v=' . $this->version . '"></script>';
    }
}
