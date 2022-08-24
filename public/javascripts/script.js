function formatDate(d_t) {
    let year = d_t.getFullYear();
    let month = ("0" + (d_t.getMonth() + 1)).slice(-2);
    let day = ("0" + d_t.getDate()).slice(-2);
    let hour = ("0" + d_t.getHours()).slice(-2);
    let minute = ("0" + d_t.getMinutes()).slice(-2);
    let seconds = ("0" + d_t.getSeconds()).slice(-2);
    return year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + seconds
}

function cancel() {
    let chk = confirm("취소하시겠습니까?");
    if (chk) {
        window.location.href = '/';
    }
}

function del_bbs(id) {
    let chk = confirm("정말로 삭제하시겠습니까?");
    if (chk) {
        // console.log(id)
        fetch('/delete/' + id)
            .then(res => {
                if (res.ok) {
                    alert("삭제되었습니다.");
                    window.location.href='/';
                } else {
                    alert(res.statusText);
                }
            })
    }
}