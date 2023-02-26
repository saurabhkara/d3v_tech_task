

//Current Time function 
export function getCurrentTime() {
    const date = new Date();
    // const fullDate = date.getDate() + " " + date.getMonth() + 1 + " " + date.getHours() + " : " + date.getMinutes();
    let fullDate = date.toLocaleDateString('en-US', {
        month: 'short',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit'
    })
    fullDate = fullDate + ","+ date.getHours() + ":"+ date.getMinutes();
    return fullDate;
}
