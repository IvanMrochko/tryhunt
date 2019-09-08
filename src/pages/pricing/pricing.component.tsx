import * as React from "react";
import * as styles from "./pricing.scss";
import { PricingProps } from "./pricing.props";
import { PriceCard } from "src/components/priceCard";

/**
 * Pricing component
 */
const teamList = { 10: "Basic", 20: "Pro", 50: "Premium" };

const Pricing: React.SFC<PricingProps> = ({ id }) => {
  return (
    <section className={styles.pricing} id={id}>
      <div className={styles.container}>
        <h3>PRICING</h3>
        <p>Choose a pricing plan that fits your needs.</p>
        <div className={styles.list}>
          {Object.keys(teamList).map((value, index) => (
            <PriceCard
              pro={value !== "20" ? false : true}
              value={value}
              key={index}
              title={teamList[value]}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export { Pricing };
