// assets-images
// components - screens (screens = folder -> all componenents for home), backend, common (something use across multiple screens)
// functions file -- all one and put it at top of src





import React, { useState, useEffect } from 'react';
import axios from 'axios';

const StockInfo = ({ symbol }) => {
    const [stockData, setStockData] = useState(null);
    const [cashFlowData, setCashFlowData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const profileResponse = await axios.get(`https://financialmodelingprep.com/api/v3/profile/${symbol}?apikey=7b2b04af203b96586946293f38387361`);
                setStockData(profileResponse.data);

                const cashFlowResponse = await axios.get(`https://financialmodelingprep.com/api/v3/cash-flow-statement/${symbol}?apikey=7b2b04af203b96586946293f38387361`);
                setCashFlowData(cashFlowResponse.data[0]);
            } catch (err) {
                console.error(err);
            }
        }

        if (symbol) {
            fetchData();
        }
    }, [symbol]);

    if (!stockData || !cashFlowData) {
        return <div>Loading...</div>
    }

    return (
        <div style={styles.container}>
            <h2>{stockData[0].symbol}</h2>
            <p>Company Name: {stockData[0].companyName}</p>
            <p>Price: {stockData[0].price}</p>
            <p>Exchange: {stockData[0].exchangeShortName}</p>
            {/* Add more data fields as necessary */}
            <h2>Cash Flow Data</h2>
            <table style={styles.table}>
                <tbody>
                {Object.entries(cashFlowData).map(([key, value]) => (
                    <tr key={key} style={styles.row}>
                        <td style={styles.cell}>{key}</td>
                        <td style={styles.cell}>{value}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

const styles = {
    container: {
        width: '80%',
        margin: 'auto',
    },
    table: {
        width: '100%',
        borderCollapse: 'collapse',
    },
    row: {
        borderBottom: '1px solid #ccc',
    },
    cell: {
        padding: '10px',
    }
};

export default StockInfo;








// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const StockInfo = ({ symbol }) => {
//   const [balanceSheetData, setBalanceSheetData] = useState(null);

//   useEffect(() => {
//     axios.get(`https://financialmodelingprep.com/api/v3/balance-sheet-statement/${symbol}?period=quarter&limit=400`)
//       .then(response => {
//         setBalanceSheetData(response.data);
//       })
//       .catch(error => console.error(`There was an error retrieving the balance sheet data: ${error}`));
//   }, [symbol]);

//   if (!balanceSheetData) {
//     return <div>Loading...</div>;
//   }

//   // Extract the balance sheet statements from the response data
//   const balanceSheetStatements = balanceSheetData.financialStatementList;

//   return (
//     <div>
//       <h2>Balance Sheet for {symbol}</h2>
//       {balanceSheetStatements.map((statement, index) => (
//         <pre key={index}>{JSON.stringify(statement, null, 2)}</pre>
//       ))}
//     </div>
//   );
// };

// export default StockInfo;













// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const StockInfo = ({ symbol }) => {
//     const [stockData, setStockData] = useState(null);

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await axios.get(`https://financialmodelingprep.com/api/v3/profile/${symbol}?apikey=7b2b04af203b96586946293f38387361`);
//                 setStockData(response.data);
//             } catch (err) {
//                 console.error(err);
//             }
//         }

//         if (symbol) {
//             fetchData();
//         }
//     }, [symbol]);

//     if (!stockData) {
//         return <div>Loading...</div>
//     }

//     return (
//         <div>
//             <h2>{stockData[0].symbol}</h2>
//             <p>Company Name: {stockData[0].companyName}</p>
//             <p>Price: {stockData[0].price}</p>
//             <p>Exchange: {stockData[0].exchangeShortName}</p>
//             {/* Add more data fields as necessary */}
//         </div>
//     );
// }

// export default StockInfo;
