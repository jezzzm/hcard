# Design/Development Notes

> started 1:30pm 9th Jan

## running thoughts

- images: use cloudinary or similar? localstorage? too hacky?
- input validation?

## steps taken

### **create-react-app**

Or, `crapp hcard`, as configured in my bash profile.

Decided to boostrap with this in order to get developing quickly. If this hcard will be abstracted for use elsewhere, I imagine the boilerplate React stuff will already be configured.

### **determining required h-card data per instructions**

HTML classes [per spec](http://microformats.org/wiki/h-card):

h-card

- p-given-name
- p-family-name
- u-email
- p-tel
- p-adr h-adr
  - p-street-address
  - p-locality
  - p-region
  - p-postal-code
  - p-country-name
- u-photo

### **representation in app state**

```js
INITIAL_STATE = {
  givenName: "",
  familyName: "",
  email: "", //input type: email
  phone: "", //input type: tel (browser finds saved phone numbers for autocomplete)
  photo: "", //input type: file (for upload)
  address: {
    number: "",
    street: "",
    locality: "", //aka suburb
    region: "", //aka state
    postcode: "",
    country: ""
  }
};
```

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

When chatting with Matt at SydCSS last month, he mentioned that at Domain they're using CSS in JS. At that point I hadn't tried it out, so I resolved to learn it. My next project [storytime](https://github.com/jezzzm/storytime) was entirely styled in this method - I love it.

I figured it makes sense to use it again for this little project.
