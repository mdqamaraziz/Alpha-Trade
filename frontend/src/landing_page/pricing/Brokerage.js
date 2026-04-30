import React from "react";

function Brokerage() {
  return (
    <div className="container my-2">
      <h2 className="">Charges Explained</h2>

      <div className="row justify-content-between">
        {/* LEFT COLUMN */}
        <div className="col-12 col-md-6 p-3">
          <p className="fs-5">Securities/Commodities Transaction Tax</p>
          <p className="text-muted fs-6">
            Tax by the government when transacting on exchanges. Charged on both
            buy and sell sides for equity delivery. Charged only on the selling
            side for intraday or F&O.
          </p>
          <p className="text-muted fs-6">
            At Alpha, STT/CTT can be higher than brokerage charges. It is
            important to track this.
          </p>

          <p className="fs-5">Transaction/Turnover Charges</p>
          <p className="text-muted fs-6">
            Charged by exchanges (NSE, BSE, MCX) on the transaction value.
          </p>
          <p className="text-muted fs-6">
            Charges are revised periodically by exchanges depending on segment
            and turnover.
          </p>

          <p className="fs-5">Call & Trade</p>
          <p className="text-muted fs-6">
            Additional charges of ₹50 per order for orders placed through a
            dealer at Alpha.
          </p>

          <p className="fs-5">Stamp Charges</p>
          <p className="text-muted fs-6">
            Charged by Government of India as per the Indian Stamp Act for
            securities transactions.
          </p>

          <p className="fs-5">NRI Brokerage Charges</p>
          <ul className="text-muted fs-6">
            <li>
              0.5% or ₹50 per executed order for equity and F&O (whichever is
              lower).
            </li>
            <li>₹500 + GST yearly account maintenance charges.</li>
          </ul>

          <p className="fs-5">Account with Debit Balance</p>
          <p className="text-muted fs-6">
            If account is in debit balance, ₹40 per executed order is charged
            instead of standard charges.
          </p>

          <p className="fs-5">Investor Protection Fund Charges</p>
          <ul className="text-muted fs-6">
            <li>Equity & Futures: ₹10 per crore + GST</li>
            <li>Options: ₹50 per crore + GST</li>
          </ul>

          <p className="fs-5">Margin Trading Facility (MTF)</p>
          <ul className="text-muted fs-6">
            <li>Interest: 0.04% per day on funded amount</li>
            <li>Brokerage: 0.3% or ₹20 per order (whichever is lower)</li>
            <li>Pledge charge: ₹15 + GST per ISIN</li>
          </ul>
        </div>

        {/* RIGHT COLUMN */}
        <div className="col-12 col-md-6 p-3">
          <p className="fs-5">GST</p>
          <p className="text-muted fs-6">
            18% GST is levied on brokerage, SEBI charges, and transaction
            charges.
          </p>

          <p className="fs-5">SEBI Charges</p>
          <p className="text-muted fs-6">
            ₹10 per crore + GST is charged by SEBI for market regulation.
          </p>

          <p className="fs-5">DP Charges</p>
          <p className="text-muted fs-6">
            Charges apply when stocks are sold from demat account, irrespective
            of quantity.
          </p>

          <p className="fs-5">Pledging Charges</p>
          <p className="text-muted fs-6">
            ₹30 + GST per pledge request per ISIN.
          </p>

          <p className="fs-5">AMC (Account Maintenance Charges)</p>
          <p className="text-muted fs-6">
            Annual maintenance charges apply depending on account type and
            holdings.
          </p>

          <p className="fs-5">Corporate Action Charges</p>
          <p className="text-muted fs-6">
            ₹20 + GST for corporate action related orders.
          </p>

          <p className="fs-5">Off-Market Transfer Charges</p>
          <p className="text-muted fs-6">₹25 per transaction.</p>

          <p className="fs-5">Physical CMR Request</p>
          <p className="text-muted fs-6">
            First request free. Subsequent requests may include service and
            courier charges.
          </p>

          <p className="fs-5">Payment Gateway Charges</p>
          <p className="text-muted fs-6">
            ₹9 + GST per transaction (not applicable for UPI transfers).
          </p>

          <p className="fs-5">Delayed Payment Charges</p>
          <p className="text-muted fs-6">
            Interest of 18% per annum is applied on debit balance.
          </p>

          <p className="fs-5">Trading via 3-in-1 Account</p>
          <ul className="text-muted fs-6">
            <li>Delivery & MTF: 0.5% per order</li>
            <li>Intraday: 0.05% per order</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;
