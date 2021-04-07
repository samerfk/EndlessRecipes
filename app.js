// navigation bar
// sign up modal link

let signupbtn = document.querySelector('#signupbtn');
let signupModal = document.querySelector('#signup-modal');
let signupModalBg = document.querySelector('#signup-modalbg');
signupbtn.addEventListener('click', () => {
  signupModal.classList.add('is-active');
});

signupModalBg.addEventListener('click', () => {
  signupModal.classList.remove('is-active');
});

// navigation bar
// sign in modal link

let signinbtn = document.querySelector('#signinbtn');
let signinModal = document.querySelector('#signin-modal');
let signinModalBg = document.querySelector('#signin-modalbg');
signinbtn.addEventListener('click', () => {
  signinModal.classList.add('is-active');
})

signinModalBg.addEventListener('click', () => {
  signinModal.classList.remove('is-active');
});

// navigation bar
// post recipe nav bar link

let postRecipeBtn = document.querySelector("#postRecipeBtn");
let main = document.querySelector('#main');
let html = '<h1 class="title is-size-3">Post a Recipe</h1>';
html += `
<div class = "field" >
    <label class = "label" > Title </label> 
    <div class = "control" >
    <input class = "input" type = "text" id="recipe-title" placeholder = "Title of Recipe" >
    </div> 
</div>

<div class="field">
  <label class="label">Description</label>
  <div class="control">
    <textarea class="textarea" placeholder="Description" id="recipe-description"></textarea>
  </div>
</div>

<div class="field">
  <label class="label">Image</label>
  <div class="control">
   <input class = "input" type = "file" id="recipe-image" placeholder = "Choose Image" >
  </div>
</div>

<div class="field is-grouped">
  <div class="control">
    <button class="button is-link">Submit</button>
  </div>
</div>

`;
let submitRecipeForm = document.querySelector('#submitrecipeform');
postRecipeBtn.addEventListener('click', () => {

  document.querySelector('#content').innerHTML = "";

  submitRecipeForm.innerHTML = html;

})