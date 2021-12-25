const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});

var printed; //printed cards.

function drawcontent()
{
    var databaseRef = firebase.database().ref('images/'+localStorage.getItem("username")+'/');
  
    databaseRef.once('value', function(snapshot) {
      snapshot.forEach(function(childSnapshot) {
     var childKey = childSnapshot.key;
     var childData = childSnapshot.val();
   //display name and image

   var img_name = childData["img_name"];
   var img_url_object = childData["img_url"];
   var img_url = img_url_object["url"];
   
   





   var node = document.createElement("div");                 // Create a  div node
   var textnode = document.createTextNode(img_name);         // Create a text node
   var h2 = document.createElement("h2");
   h2.appendChild(textnode);   
   var text = document.createElement("div");
   text.className = "project-info";
   text.appendChild(h2);
   

   var image_div = document.createElement("div");
   image_div.className = "project-img";

   var img_src = document.createElement("img");

   img_src.src = img_url;
   image_div.appendChild(img_src);
   node.appendChild(image_div);
   node.appendChild(text);
   node.className = "project-item";
   //window.open(img_url);

   
   
   
   document.getElementById("display_cards").appendChild(node);
   
   



    });
  });
   
}