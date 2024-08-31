1. Home Screen Flow

```mermaid
graph TD
    A[Home Screen] --> B[Search Bar: Users can type to search for nearby stores or food boxes.]
    A --> C[Map View: Displays stores/restaurants with color-coded markers.]
    A --> D[List View Toggle: Option to switch to a list view.]
    A --> E[Filter Section: Expandable filter options...]

    A --> F[Profile & History: Access user profile and reservation history.]
    C --> C1[Green Marker: Indicates available food boxes.]
    C --> C2[Red Marker: Indicates no availability.]
    E --> E1[Food Type Filter: Select food categories - manual, vegetarian, bakery, etc.]
    E --> E2[Store Type Filter: Filter by restaurant, grocery store.]
    E --> E3[Distance Filter: Adjust range from the user's location.]
```

2. Store/Restaurant Detail Dialog Flow

```mermaid
graph TD
    A[Store/Restaurant Detail Dialog] --> B[Store/Restaurant Name: Displayed prominently.]
    A --> C[Box Availability: Shows how many boxes are available.]
    A --> D[Box Description: Provides details about the box contents.]
    A --> E[Reserve Button: Allows users to reserve available boxes.]
    A --> F[Pickup Information: Address and time for pickup.]

    C --> C1[Available Box Count]
    E --> E1[Select Quantity]
```

3. Reservation Confirmation Dialog Flow

```mermaid
graph TD
    A[Reservation Confirmation Dialog] --> B[Confirm Reservation: Users can confirm their box reservation.]
    A --> C[Cancel: Option to go back to the Store/Restaurant Detail Dialog.]
    A --> D[Reservation Details: Shows the number of boxes and pickup details.]
```

4. User Profile & History Screen Flow

```mermaid
graph TD
    A[User Profile & History Screen] --> B[Profile Details: View and edit user information.]
    A --> C[Order History: List of past reservations and statuses.]
    A --> D[Volunteer Opt-In: Option to register as a volunteer to pick up boxes for others.]

    C --> C1[Reservation Status: View past and current reservations.]
    D --> D1[Request for volunteer status. Allows you to book more than 2 boxes in one location.]
```

Interaction Flow Diagram with Transitions

```mermaid
graph TD
    A[Home Screen]
    B[Store/Restaurant Detail Dialog]
    C[Reservation Confirmation Dialog]
    D[User Profile & History Screen]
    E[Filter Section]

    %% Home Screen transitions
    A --> B[Click on Store Marker: Opens Store Detail]
    A --> D[Click on Profile Icon: Opens User Profile & History]
    A --> E[Filter Section: Users apply filters directly on the Home Screen]

    %% Store/Restaurant Detail transitions
    B --> C[Click Reserve: Opens Reservation Confirmation]
    B --> A[Back to Home: Map/List View]

    %% Reservation Confirmation transitions
    C --> A[Back to Home Screen: After Reservation]

    %% User Profile & History transitions
    D --> A[Back to Home Screen: After Viewing Profile]
```

# Explanation of the Transitions

## 1. From Home Screen:
- **To Store/Restaurant Detail Dialog:**
  - When the user clicks on a store or restaurant marker on the map, the **Store/Restaurant Detail Dialog** opens.
  
- **To User Profile & History Screen:**
  - When the user clicks on the profile icon, the **Profile & History Screen** opens, allowing them to view or edit their profile and reservation history.
  
- **Using the Integrated Filter Section:**
  - The filter section is part of the **Home Screen**, so users can apply filters directly without opening a separate dialog.

## 2. From Store/Restaurant Detail Dialog:
- **To Reservation Confirmation Dialog:**
  - When the user clicks the **Reserve** button, they are taken to the **Reservation Confirmation Dialog** to confirm their booking.
  
- **Back to Home Screen:**
  - If the user navigates back, they return to the **Home Screen** (either map or list view).

## 3. From Reservation Confirmation Dialog:
- **Back to Home Screen:**
  - After confirming a reservation, the user is directed back to the **Home Screen**.

## 4. From User Profile & History Screen:
- **Back to Home Screen:**
  - After viewing or editing their profile, the user can return to the **Home Screen**.
 

------------

Questions for discussion:

- think about the differences between the profiles of a regular user and a store/restaurant in order to unify the application as much as possible. For example, notifications about an order from a regular user and notifications about an ordered food box from a food distributor are similar.

- it would be appropriate for a store/restaurant user to provide the ability to automatically generate food boxes for the period Monday-Saturday (before the weekend, food leftovers may be higher than usual). In this case, the store gets more automation and its task will be reduced only to preparing the required number of ordered boxes, which cannot exceed the daily limit.

- the issue of replenishing the balance/automatically assigning a conditional balance of 20-50 euros to the user.
...
