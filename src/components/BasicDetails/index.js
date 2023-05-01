import './index.css'

const BasicDetails = props => {
    const {selectedCustomer} = props
    return (<div className="basic-details">
        <p>Account Holder :{selectedCustomer.Account_holder_name}</p>
        <p>Account Number :{selectedCustomer.account_number}</p>
        <p>Account Balance :{selectedCustomer.Account_balance}</p>
    </div>)

}

export default BasicDetails

