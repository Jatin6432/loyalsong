function form() {
 
    var name = document.getElementById('name1').value;
    var lastName = document.getElementById('name2').value;
    var email = document.getElementById('mail').value;
    var subject = document.getElementById('subject').value;
    var text = document.getElementById('text').value;

    alert(email)
    // alert(name)
    if (name == '') {
        alert('please enter your first name')
        return false;

    }
    if (lastName == '') {
        alert('please enter your first name')
        return false;
    }
    if (email == '') {
        alert('please enter your first name')
        return false;
    }
    if (subject == '') {
        alert('please enter your first name')
        return false;
    }
    if (text == '') {
        alert('please enter your first name')
        return false
    }
}