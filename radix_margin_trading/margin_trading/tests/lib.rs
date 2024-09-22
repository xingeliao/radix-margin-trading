use scrypto::prelude::*;
use scrypto_test::*;
use scrypto_test::prelude::*;

#[test]
fn test_leverage_calculator() {
    // 设置测试环境
    let mut test_runner = TestEnvironment::new();

    // 发布蓝图
    let package_address = test_runner.compile_and_publish(this_package!());

    // 初始化组件
    let manifest = ManifestBuilder::new()
        .call_function(
            package_address,
            "leverage_calculator",
            "instantiate",
            manifest_args!(),
        )
        .build();
    let receipt = test_runner.execute_manifest(manifest, vec![]);
    let component_address = receipt.expect_commit(true).new_component_addresses()[0];

    // 测试 calculate_total_cost 方法
    let manifest = ManifestBuilder::new()
        .call_method(
            component_address,
            "calculate_total_cost",
            manifest_args!(dec!("100"), 2u8),
        )
        .build();
    let receipt = test_runner.execute_manifest(manifest, vec![]);
    let result = receipt.expect_commit(true).output(1);
    assert_eq!(result, dec!("200"));

    // 测试 deposit 方法
    let account = test_runner.new_account();
    let manifest = ManifestBuilder::new()
        .withdraw_from_account(account, XRD, dec!("500"))
        .take_from_worktop(XRD, dec!("500"), "bucket")
        .call_method_with_name_lookup(component_address, "deposit", |lookup| {
            (lookup.bucket("bucket"),)
        })
        .build();
    let receipt = test_runner.execute_manifest(manifest, vec![]);
    receipt.expect_commit_success();

    // 测试 get_balance 方法
    let manifest = ManifestBuilder::new()
        .call_method(component_address, "get_balance", manifest_args!())
        .build();
    let receipt = test_runner.execute_manifest(manifest, vec![]);
    let result = receipt.expect_commit(true).output(1);
    assert_eq!(result, dec!("500"));
}