# Imatic Persistent Bugnote Text Plugin

## Overview

The Imatic Persistent Bugnote Text plugin enhances the functionality of Mantis Bugtracker by providing a feature to persist draft bugnote texts even after page refreshes or browser crashes. This ensures that users do not lose their work-in-progress when entering lengthy bugnote descriptions.

## Features

- **Automatic Text Persistence**: Draft bugnote texts are automatically saved to the browser's local storage as the user types.
- **Restoration on Page Load**: Upon reloading the page or revisiting the issue, the previously saved bugnote text is restored in the bugnote textarea.
- **Data Integrity**: Text is stored in its original format, including HTML tags and special characters, using `encodeURIComponent` to ensure compatibility and integrity.

## Usage

### Installation

1. Copy all files into plugins/ImaticPersistentBugnoteText directory
2. Install the plugin in Mantis Bugtracker by going to Manage -> Manage Plugins.
