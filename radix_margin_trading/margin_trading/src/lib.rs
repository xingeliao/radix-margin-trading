use scrypto::prelude::*;

#[blueprint]
mod leverage_calculator {
    struct LeverageCalculator {
        wallet_balance: Vault,
    }

    impl LeverageCalculator {
        pub fn instantiate()  -> Global<LeverageCalculator> {
            let component = Self {
                wallet_balance: Vault::new(XRD),
            };
            component.instantiate().prepare_to_globalize(OwnerRole::None).globalize()
        }

        pub fn get_balance(&self) -> Decimal {
            self.wallet_balance.amount()
        }

        pub fn calculate_total_cost(&self, cost: Decimal, leverage: u8) -> Decimal {
            assert!(leverage == 2 || leverage == 10, "Leverage must be 2 or 10");
            cost * Decimal::from(leverage)
        }

        pub fn deposit(&mut self, funds: Bucket) {
            self.wallet_balance.put(funds);
        }
    }
}
