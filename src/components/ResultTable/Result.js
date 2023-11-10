const formatter = new Intl.NumberFormat('en-US' , {
  style : 'currency',
  currency: 'IND',
  minimumFractionDigits: 2,
  maximumFractionDigits: 3,
});

function Result(props) {
  return (
    <table className="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {props.info.map((yearData) => (
          <tr key={yearData.year}>
            <td>{yearData.year}</td>
            <td>{yearData.savingsEndOfYear}</td>
            <td>{formatter.format(yearData.yearlyInterest)}</td>
            <td>{formatter.format(yearData.savingsEndOfYear -
              props.initialInvestment -
              yearData.yearlyContribution *
              yearData.year)}</td>
            <td>{formatter.format(props.initialInvestment +
              yearData.yearlyContribution *
              yearData.year)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};


export default Result;