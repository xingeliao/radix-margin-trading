use scrypto::prelude::*;

#[test]
fn test_your_function() {

    let env = TestEnvironment::new();
    let package = Package::compile_and_publish(this_package!());


    let component = package.call_function("YourComponent", "new", args![]);


    let result = component.call_method("your_method", args![]);
    assert_eq!(result, expected_value);
}