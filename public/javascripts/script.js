function cancel() {
    let chk = confirm("취소하시겠습니까?")
    if (chk) {
        window.location.href = '/';
    }
}