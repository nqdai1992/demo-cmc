async function sleep (time) {
  return new Promise ((resolve) => {
    setTimeout(resolve, time)
  })
} 
async function excuteQueueRequestAPI (listRequest, time) {
  for (let i = 0; i < listRequest.length; i++) {
    let request = listRequest[i]
    await request[i]()
    await sleep(time)
  }
}

export {
  sleep,
  excuteQueueRequestAPI
}