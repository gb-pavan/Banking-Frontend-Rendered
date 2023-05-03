import './index.css'

const DisplayTransaction = props => {
    const {eachTransaction} = props


    const amount = (eachTransaction.credited_amount === '') ? eachTransaction.debited_amount : eachTransaction.credited_amount
    const time = (eachTransaction.credited_amount === '') ? eachTransaction.debited_time : eachTransaction.credited_time
    const creditedBy = (eachTransaction.credited_amount === '') ? '' : eachTransaction.credited_by
    const depositedTo = (eachTransaction.credited_amount === '') ? eachTransaction.deposited_to : ''

    const amountStyle = (eachTransaction.credited_amount === '') ? 'color-pink' :  'color-green'
    
    const amoutVar = amount + ' '
    
    return (
        <tr key={eachTransaction.id}>
            <td>{time}</td>
            <td className={amountStyle} >{creditedBy}</td>
            <td className={amountStyle} >{depositedTo}</td>
            <td className={amountStyle} >{amoutVar}</td>
            <td>{eachTransaction.Remaining_balance}</td>
        </tr>
    )
}

export default DisplayTransaction