import useFetch from '../../CustomHooks/useFetch'
import TransactionDetails from '../TransactionDetails'

const ShowCustomerTransactions = props => {

    const {selectedCustomer,handleBankerClick,isAfterLogin} = props

    console.log('selectedCustomer2',selectedCustomer)


    
    const method = 'POST';

    const shouldFetch = false


    const customerData = useFetch('https://bank-application-backend2-author.onrender.com/gettransactiondetails',method,isAfterLogin,selectedCustomer,shouldFetch)

    return (
    <div className='customer-transaction-details'>
        <div>
            <button onClick={() => handleBankerClick()}>Go Back</button>
        </div>
        <TransactionDetails customerData={customerData} />
    </div>)



}

export default ShowCustomerTransactions