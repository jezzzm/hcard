# Design/Development Notes

- > started 1:30pm 9th Jan
- > worked until 4:30pm
- > picked up again 8pm
- > finished 10:30pm
- > total 5.5h

## steps taken

### **create-react-app**

Or, `crapp hcard`, as configured in my bash profile.

Decided to boostrap with this in order to get developing quickly. If this hcard will be abstracted for use elsewhere, I imagine the boilerplate React stuff will already be configured.

### **determining required h-card data per instructions**

HTML classes [per spec](http://microformats.org/wiki/hcard):

vcard

- fn n
  - given-name
  - family-name
- email
- tel
- photo
- adr
  - street-address
  - locality
  - region
  - postal-code
  - country-name

### **representation in app state**

```js
INITIAL_STATE = {
  givenName: "",
  familyName: "",
  email: "", //input type: email
  phone: "", //input type: tel (browser finds saved phone numbers for autocomplete)
  photo: "", //input type: file (for upload)
  streetNumber: "",
  street: "",
  locality: "", //aka suburb
  region: "", //aka state
  postcode: "",
  country: ""
};
```

- flat for easy access and update
- all string input, difference is labels and matching state -> reuse same component
- exception for image upload and submit buttons

**input field props:**

- labelText -> string
- placeholderText -> string
- inputType -> string
- changeHandler -> function

### **folder/file structure**

Because there is clear separation between the input zone and the preview zone, I separated components used for each to their own folder within Components. Structure at the moment:

- src/Components
  - App
  - InputZone
  - PreviewZone

### **CSS in JS with @emotion/styled**

When chatting with Matt at SydCSS last month, he mentioned that at Domain they're using CSS in JS. At that point I hadn't tried it out, so I resolved to learn it. My next project, [storytime](https://github.com/jezzzm/storytime), was entirely styled in this method - I love it.

I figured it makes sense to use it again for this little project.

### **managing state in this app**

It's not a huge app and there are two clear places that need access to the same state: the input zone and the preview zone. Therefore it's simplest to store state within their immediate parent, in this case, the `App` component.

Because there are many types of string state with similar interaction required, I decided to use a class-based component to take advantage of a single input change handler applied to all state entries. This could also be achieved with a function component using the hook `useState`, but I think the class implementation is less repetitive (more DRY).

### **file upload button customisation**

This was probably the trickiest aspect, in light of not using a third party image hosting service. To keep it simple, I wanted to use the HTML File API and create a temp URL to access for image preview.

The built-in `<input type="file" />` does not permit modification of the button text or uploaded file label. I think the implentation is good in that it shows you the name of the currently selected file, though it doesn't often work nicely visually.

The solution was to use a `useRef()` hook on an invisible input field of type `file`, and tie it to a standard button with an `onClick()` handler. I think it works nicely.

### **implementation of responsive behaviour**

I used both CSS display `grid` and `flex` together with two `max-width` media query breakpoints.

The medium screen size breakpoint forces the preview zone to move below the input zone. this is achieved by simply changing the `flex-direction` of the parent to `column` instead of `row`.

The small screen size breakpoint shifts all input fields to be on their own line, so that it is easy to view on mobiles in portait mode. The containers around the inputs have their `grid-column-template` changed to `1fr` from `1fr 1fr`.

### **note on testing**

Assumed not required as the instructions state there is a dedicated testing team.

### **TODOs**

NB. package.json updated to include testing libraries

- extract styling away from React components -> componentname.style.js
- where styling is applied to parents and children/descendants in one component:
  - refactor nested CSS styling
  - each separated into own component + styling?
- tests?
