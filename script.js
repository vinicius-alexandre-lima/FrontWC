async function getStatus() {

    //fazer a requisição
    // let res = await fetch()
    let res = { 
        header : "dasdsadsa",
        data: { status: "processando pagamento..." }
    }
    let result = res.data
    let count = 0
    setInterval(() => {
        count++
        let statusContainer = document.querySelector(".status-container")
        statusContainer.innerHTML = result.status + ": " + count
    }, 2000)
}

getStatus()