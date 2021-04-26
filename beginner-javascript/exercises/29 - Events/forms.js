const wes = document.querySelector('.wes');

wes.addEventListener('click', function (e) {
  const shouldChangePage = confirm(
    'This website might be malicious! Do you want wish to proceed?'
  );
  if (!shouldChangePage) {
    e.preventDefault();
  }
});

const signupForm = document.querySelector('[name="signup"]');

signupForm.addEventListener('submit', function (e) {
  e.preventDefault();
  //   console.log(e.currentTarget.name.value);
  //   console.log(e.currentTarget.email.value);
  //   console.log(e.currentTarget.agree.checked);
  const name = e.currentTarget.name.value;
  if (name.includes('chad')) {
    alert('Sorry bro');
    e.preventDefault();
  }
});

function logEvent(e) {
  console.log(e.type);
  console.log(e.currentTarget.value);
}

signupForm.name.addEventListener('keyup', logEvent);
signupForm.name.addEventListener('keydown', logEvent);
signupForm.name.addEventListener('focus', logEvent);
signupForm.name.addEventListener('blur', logEvent);
// 'keyup'
// 'keydown'
// 'focus'
// 'blur'

const photo = document.querySelector('.photo');

function handlePhotoClick(e) {
  if (e.type === 'click' || e.key === 'Enter') {
    console.log('You clicked the photo');
  }
}

photo.addEventListener('click', handlePhotoClick);
photo.addEventListener('keyup', handlePhotoClick);

// keycode.info
