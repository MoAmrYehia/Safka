## Safka

<p align="center">
    <img src="https://raw.githubusercontent.com/MoAmrYehia/Safka/main/static/assets/hero_image.png">
</p>

1.  **AITO.AI Junction challenge solution proposal**

    The main goal of the application is to provide a quick way to
    decide where to eat together with friends, family or co-workers.

    The main restaurant list pulls data and it can become predictive,
    other users who join your Safka session can apply filters to the shared list.

2.  **Setup**

    The only difference to the Gatsby starter pack is the .env.development file (check the example).

    Steps:
    > - clone repo
    > - open terminal in folder
    ```
    npm i
    gatsby develop
    ```
    The app should now be running at `http://localhost:8000`!

3.  **Features (some mock)**

    - simple (unfiltered) search to your own aito instance API
    - no account needed to start a group session
    - filter local restaurants
    - option to make an account
    - room chat
    - basic app pipeline/design etc

4. **Tech stack**
    
    - gatsby
    - react
    - material-ui
    - different data handlers/helpers (axios, graphql etc)
    - aito.ai used as an API/backend

5.  **Missing, next up**

    Most of the functionality is mock, there is a built in handler for an aito.ai API search

    Most important missing (not even mocked) features are:
    - restaurant details
    - deciding together
    - "enter code" - view
    - dynamic handling based on user (host or joined session)
    - restaurant filtering
    - session based restaurant filtering
    - choosing another location
    - timer to end that automatically ends vote
    - "coin flip" or "force" to end vote
    - either "get directions" or "order" (from a food delivery app)
    - map functionality
