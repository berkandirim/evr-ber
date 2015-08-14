function onFormSubmitted() {
    event.preventDefault();

    var ref = new Firebase("https://resplendent-torch-7515.firebaseio.com/");

    var _name = document.getElementById("name").value;
    var _email = document.getElementById("email").value;
    var _note = document.getElementById("note").value;
    var _date = new Date().getTime();

    var postsRef = ref.child("formData");
    var newPostRef = postsRef.push({
        name: _name,
        email: _email,
        note: _note,
        date: _date

    });

    // Get the unique ID generated by push()
    var postID = newPostRef.key();
}