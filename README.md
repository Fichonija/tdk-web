# Tvornica Drvenih Konstrukcija Website

This project contains the source code for the _Tvornica Drvenih Konstrukcija_ website. The website is build with the
**Astro** framework and hosted on _Vercel_.

## Project Structure

### Modules

Groups separate website pages and their local dependencies. Use this folder when creating a new website page to
co-locate its code.

### Pages

Astro-specific directory which is used to route paths to specific pages. Use it when creating a new page to map a
component to route. This directory's name should not change!

### Shared

Groups shared concerns (eg. base layout). Use it when there is a concern which cannot be cleanly map to other project
domains (eg. a base layout, or a util which is used in several modules). All types of code artifacts can live here:
components, utils, constants, etc.

### UI

Everything closely related to UI should live here, like basic UI components (buttons, inputs), global styles, assets
(images, icons), theming setups, etc. If a code artefact is abstract and closely related to UI - it belongs here.
