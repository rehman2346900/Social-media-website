const data = async () => {
  await fetch("http://dummyjson.com/posts/?limit=10")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      displayCocktail(data.posts);
    });
};
data();

const search = async () => {
  await fetch("https://dummyjson.com/posts/search?q=love")
    .then((res) => {
      return res.json();
    })
    .then((dataseaech)=>{
      
      console.log(dataseaech.posts)
    });
};
search();

// const fetchcmnt = async () => {
//   fetch("https://dummyjson.com/posts/1/comments")
//     .then((res) => {
//       return res.json();
//     })
//     .then((cmnt) => {
//       console.log(cmnt.comments);
//     });
// };
// fetchcmnt();

function displayCocktail(data, cmnt) {
  // const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  // const cocktail = data;

  data.map((val) => {
    const cocktailDiv = document.getElementById("postcontent");

    const ptop = document.createElement("div");
    ptop.setAttribute("class", "posttop");
    const picpart = document.createElement("img");
    picpart.setAttribute("src", "./images/girl.jpg");
    const textPic = document.createElement("h4");
    textPic.setAttribute("class", "textpic");
    textPic.innerHTML = "Alexandra";
    cocktailDiv.appendChild(ptop);
    ptop.appendChild(picpart);
    ptop.appendChild(textPic);

    const heading = document.createElement("h2");
    heading.setAttribute("id", "titlee");
    heading.innerHTML = val.title;
    cocktailDiv.appendChild(heading);
    const tags = val.tags;
    const tagpart = document.createElement("h4");
    tagpart.innerHTML = tags;
    cocktailDiv.appendChild(tagpart);
    tagpart.setAttribute("id", "mainA");

    const Body = val.body;
    const main = document.createElement("p");
    main.setAttribute("id", "mainA");
    main.innerHTML = Body;
    cocktailDiv.appendChild(main);

    const postBot = document.createElement("div");
    postBot.setAttribute("class", "act");
    const cmntBtn = document.createElement("i");
    cmntBtn.setAttribute("class", "far fa-comment");
    cmntBtn.setAttribute("id", "cmntb");
    const textCmnt = document.createElement("h5");
    textCmnt.setAttribute("class", "textB");
    textCmnt.innerHTML = "Comment";
    const likeBtn = document.createElement("i");
    likeBtn.setAttribute("class", "far fa-thumbs-up");
    const react = val.reactions;
    likeBtn.innerHTML = react;
    const textBtn = document.createElement("h5");
    textBtn.setAttribute("class", "textB");
    textBtn.innerHTML = "Like";
    const shareBtn = document.createElement("i");
    shareBtn.setAttribute("class", "fa fa-share");
    shareBtn.setAttribute("id", "shareb");

    const cmntArea = document.createElement("div");
    cmntArea.setAttribute("id", "cmntera");
    const dellBtn = document.createElement("button");
    // const fetchdata = data.comments;
    dellBtn.setAttribute("id", "dellbtn");
    dellBtn.innerHTML = "Delete";

    postBot.appendChild(likeBtn);
    postBot.appendChild(textBtn);
    postBot.appendChild(cmntBtn);
    postBot.appendChild(textCmnt);
    postBot.appendChild(shareBtn);

    cocktailDiv.appendChild(postBot);
    cocktailDiv.appendChild(cmntArea);
    cocktailDiv.appendChild(dellBtn);

    cmntBtn.addEventListener("click", function cmntDisp(e) {
      e.preventDefault();
      const cmntBox = document.getElementById("cmntBocMain");
      const textEra = document.getElementById("textEra");
      const btn = document.getElementById("submitBtn");
      cmntBox.style.display = "block";
      const showera = document.createElement("div");
      cocktailDiv.appendChild(showera);
      btn.addEventListener("click", function saveCmnt() {
        cmntArea.innerHTML += `
        <div>
          <p>${textEra.value}</p>
          <span class="options">
            
          <i onClick="clrData()" class="fas fa-trash-alt"></i>
            
          </span>
        </div>
        `;
        cmntBox.style.display = "none";
      });
      function clrData() {
        textEra.value.remove();
      }
    });
  });
}

const going = document.getElementById("submit");
console.log(going);

function removeLocal(e) {
  localStorage.removeItem("token");
  localStorage.removeItem("username");
  localStorage.removeItem("password");

  window.location.href = "/index.html";
}

going.addEventListener("click", removeLocal);
