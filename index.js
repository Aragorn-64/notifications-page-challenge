// let unread = document.querySelectorAll(".noti-unread");
// let toInsertAlert = document.querySelectorAll(".noti-unread .pt1");
const countEle = document.querySelector(".noti-count");
let markReadBtn = document.querySelector(".mark-read");
let unreadCount = 0;

function removeAlert(noti){
    console.log("removing");
    let alert = noti.querySelector(".alert");
    alert.style.display = 'none';
    
}

markReadBtn.addEventListener('click', () => {
    document.querySelectorAll(".noti-unread").forEach((noti) => {
        noti.classList.remove("noti-unread");
        noti.classList.add("noti-read");
        removeAlert(noti);
        recount();
    });
})

function recount(){
    console.log("recounting");
    unreadCount=0;
    document.querySelectorAll(".noti-unread").forEach((noti) => {
        unreadCount += 1;
        // console.log('count += 1');
    });
    countEle.innerHTML = unreadCount;
}


document.querySelectorAll(".noti-unread .pt1").forEach((pt) => {
    pt.innerHTML += '<span class="alert"></span>';
});

document.querySelectorAll(".noti-unread").forEach((noti) => {
    noti.addEventListener( 'click', () => {
        noti.classList.remove("noti-unread");
        noti.classList.add("noti-read");
        removeAlert(noti);
        // unreadCount -= 1;
        recount();

    });
});

recount();

// 