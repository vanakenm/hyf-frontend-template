Client Journey Diagram:

```mermaid
graph TD
    A[Client: User who uses the app to find and reserve food boxes.] --> B[Browse Available Boxes: Open app, view nearby stores.]
    B --> B1[Open the app]
    B --> B2[View map of nearby stores/restaurants]
    B --> B3[Use filters to search]
    B --> B4[Map markers show availability]
    A --> C[Reserve a Box: Reserve food from stores/restaurants.]
    C --> C1[Click on store marker]
    C --> C2[View available boxes]
    C --> C3[Reserve quantity]
    C --> C4[Receive confirmation]
    A --> D[User Profile & History: View profile, order history.]
    D --> D1[Profile Information]
    D --> D2[Order History]
```

Stores & Restaurants Journey Diagram:

```mermaid
graph TD
    A[Food Providers: Stores/restaurants with excess food.] --> B[Identify Excess Food: Determine available food.]
    B --> B1[Log in to the app]
    B --> B2[Choose pickup date]
    B --> B3[Select volunteer organization]
    B --> B4[Specify food box quantity]
    B --> B5[Confirm donation]
    A --> C[Box Management: Manage food boxes for donation.]
    C --> C1[Manage available boxes]
    C --> C2[Update box details]
    A --> D[Admin Dashboard: Manage reservations, pickup, and donations.]
    D --> D1[View Reservations]
    D --> D2[View Pickup Schedule]
    D --> D3[Manage Donations]
