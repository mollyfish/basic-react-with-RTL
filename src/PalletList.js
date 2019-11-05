import React from "react";

const PalletList = (props) => {
  console.log(props);
  const results = props.results;
  const tableRows = results.map((result) => <tr key={result.id}><td>{result.friendly_name}</td><td>REPLACE ME</td></tr>);
  return (
    <React.Fragment>
      <h2 data-testid='test-testid'>Available Pallets</h2>
      <table>
        <thead>
        <tr><td>Pallet #</td><td>Item Code</td></tr>
        </thead>
        <tbody>
          {tableRows}
        </tbody>
      </table>
    </React.Fragment>
  );
}

PalletList.defaultProps = {
  results: [],
};

export default PalletList;