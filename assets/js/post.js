function onFormSubmitted() {
    event.preventDefault();

    var ref = new Firebase("https://resplendent-torch-7515.firebaseio.com/");

    var _name = document.getElementById("name").value;
    var _date = new Date().getTime();

    var postsRef = ref.child("formData");
    if (_name === "") {

    } else {
        var newPostRef = postsRef.push({
            name: _name,
            date: _date
        });
    }

    // Get the unique ID generated by push()
    var postID = newPostRef.key();
}