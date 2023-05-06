Launch by `npm run dev` command. 

**Attention, the `.env` file is required for the fake API to work and placed in the
repository intentionally (don't do this in real projects).** 

You can launch this project either with a fake backend or witan an actual backend located [here](https://github.com/rukivbruki/User-Auth-Credit-Card-Server)

Functionality:
1. User registration.
2. Authorization of the user through a fake API with the issuance of a fake jwt token. 
3. Entering and saving t e user's credit card data (except CVC) to avoid re-entry data during the user's session.
4. View all registered users.
5. Editing user data. 
6. Deleting users.
7. When reloading the browser or closing the browser tab, the user remains authorized in the system.
8. When the logout button is pressed, the user's authorization is terminated, but the user has the opportunity to re-login to the application using his credentials. 
9. Implemented simple form field validation. 
10. Implemented notification of the user about the status of their actions.
