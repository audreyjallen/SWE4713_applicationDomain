const dummyAccounts = [

    {
        name: "Basic Assets Account",
        id: "12345"
    },
    {
        name: "Basic Liabilities Account",
        id: "54321"
    }

]

export const getAccounts = () => {

    const res = localStorage.getItem("accounts")
    if (!res) {
        localStorage.setItem("accounts", JSON.stringify(dummyAccounts))
        return dummyAccounts
    }
    return JSON.parse(res)
}