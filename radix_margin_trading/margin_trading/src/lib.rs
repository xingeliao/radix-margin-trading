use scrypto::prelude::*;

#[derive(ScryptoSbor, Clone, Debug)]
pub struct AccountData {
    pub balance: Decimal,
    pub margin_used: Decimal,
}

#[blueprint]
mod account_manager {
    struct AccountManager {
        account: AccountData,
    }

    impl AccountManager {
        pub fn instantiate(initial_balance: Decimal) -> Global<AccountManager> {
            let account_manager = Self {
                account: AccountData {
                    balance: initial_balance,
                    margin_used: Decimal::ZERO,
                },
            };
            account_manager.instantiate().prepare_to_globalize(OwnerRole::None).globalize()
        }

        pub fn get_account(&self) -> AccountData {
            self.account.clone()
        }

        pub fn update_balance(&mut self, amount: Decimal) {
            self.account.balance += amount;
        }

        pub fn update_margin(&mut self, amount: Decimal) {
            self.account.margin_used += amount;
        }
    }
}