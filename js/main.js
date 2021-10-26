const elUserSection = $_(".js-users-section");
const elPostsSection = $_(".js-posts-section");
const elCommentsSection = $_(".js-comments-section");
const elUserList = $_(".js-users-list");
const elPost = $_(".js-post");
const elComments = $_(".js-comments");

main(createUserCard, "users");

//================================================
// GET DATA FUNC==============================
// ========================================
function main(createSectionFunc, what){
    fetch(`https://jsonplaceholder.typicode.com/${what}`)
    .then((res) => res.json())
    .then((data) => {
        renderArray(data, createSectionFunc)
    })
}

//================================================
// RENDER FUNC================================
// ========================================
function renderArray(array ,func){
    array.forEach(element => {
        func(element);
    });
}


//================================================
// CREATE USER CARDS FUNC=====================
// ========================================
function createUserCard(object){
    let newLi = createElement({tagName: 'li', text: '', className: 'border border-1 rounded-3 p-3  shadow-sm hover mb-2 js-user', node: elUserList});
    let userTitle = createElement({tagName: 'div', className: "h4", text: object.name, node: newLi});
    let userName = createElement({tagName: 'div', text: "Username: " + object.username, node: newLi});
    let userEmail = createElement({tagName: 'div', text: "Email: " + object.email, node: newLi});
    let userAddress = createElement({tagName: 'div', className: "fst-italic", text: "Address: <br>" + object.address.city + ', ' + object.address.street + ', ' + object.address.suite, node: newLi});

    newLi.addEventListener('click', function(){
        $$_(".js-user", elUserList).forEach(function(item){
            item.classList.remove("active");
        });
        elCommentsSection.classList.remove("bg-white");
        newLi.classList.add('active');
        elPostsSection.classList.add('bg-white');
        elPost.innerHTML = '';
        elComments.innerHTML = '';
        main(createPostsCard, "users/"+ object.id +"/posts");
    });
}


//================================================
// CREATE POST CARDS FUNC======================
// ========================================
function createPostsCard(object){
    let newLi = createElement({tagName: 'li', className: 'border border-1 hover rounded-3 p-3 bg-light mb-2 js-post', node: elPost});
    let postTitle = createElement({tagName: 'div', className: "h6", text: object.title, node: newLi});
    let postBody = createElement({tagName: 'div', text: object.body, node: newLi});

    newLi.addEventListener('click', function(){
        $$_(".js-post", elPost).forEach(function(item){
            item.classList.remove("active");
        });
        elPostsSection.classList.remove("bg-white");
        elCommentsSection.classList.add("bg-white");
        
        newLi.classList.add('active');
        elComments.innerHTML = '';
        main(createComment, "posts/"+ object.id +"/comments");
    });
}


//================================================
// CREATE COMMENTS CARD FUNC==================
//=========================================
function createComment(object){
    let newLi = createElement({tagName: 'li', className: 'border border-1 rounded-3 p-3 bg-light mb-2 hover', node: elComments});
    let commentTitle = createElement({tagName: 'div', className: "h6", text: object.name, node: newLi});
    let commentEmail = createElement({tagName: 'div', text: object.email, node: newLi});
    let commentBody = createElement({tagName: 'div', text: object.body, node: newLi});
}